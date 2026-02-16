import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface UserProfile {
    name: string;
    registeredNumber?: string;
}
export interface Registration {
    createdAt: Time;
    fullName: string;
    email: string;
    normalizedWhatsAppNumber: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getAllRegistrations(): Promise<Array<Registration>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getRegistrationByNumber(normalizedWhatsAppNumber: string): Promise<Registration | null>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    register(fullName: string, normalizedWhatsAppNumber: string, email: string): Promise<void>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
}
