import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Iter "mo:core/Iter";
import Principal "mo:core/Principal";

import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  // Initialize the access control system
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  type Registration = {
    fullName : Text;
    normalizedWhatsAppNumber : Text;
    email : Text;
    createdAt : Time.Time;
  };

  public type UserProfile = {
    name : Text;
    registeredNumber : ?Text;
  };

  let registrations = Map.empty<Text, Registration>();
  let userProfiles = Map.empty<Principal, UserProfile>();

  // User profile management functions
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Please sign in to view your profile");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("You can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Please sign in to save your profile");
    };
    userProfiles.add(caller, profile);
  };

  // Registration functions accessible by all (including guests)
  public shared ({ caller }) func register(fullName : Text, normalizedWhatsAppNumber : Text, email : Text) : async () {
    if (registrations.containsKey(normalizedWhatsAppNumber)) {
      Runtime.trap("This WhatsApp number is already registered");
    };

    switch (registrations.values().find(func(reg) { reg.email == email })) {
      case (?_) {
        Runtime.trap("This email is already registered");
      };
      case (null) {
        let registration : Registration = {
          fullName;
          normalizedWhatsAppNumber;
          email;
          createdAt = Time.now();
        };
        registrations.add(normalizedWhatsAppNumber, registration);
      };
    };
  };

  // Admin-only: Export all registrations for Excel/CSV
  public query ({ caller }) func getAllRegistrations() : async [Registration] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Access denied. This feature is restricted");
    };
    registrations.values().toArray();
  };

  // Admin-only: Look up specific registration by number
  public query ({ caller }) func getRegistrationByNumber(normalizedWhatsAppNumber : Text) : async ?Registration {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Access denied. This feature is restricted");
    };
    registrations.get(normalizedWhatsAppNumber);
  };
};
