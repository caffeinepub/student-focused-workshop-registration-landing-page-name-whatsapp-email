# Specification

## Summary
**Goal:** Increase above-the-fold trust and urgency on the landing page by adding a prominent FOMO trust indicator under the hero CTA and lightweight live social-proof popups.

**Planned changes:**
- Add a centered highlighted trust indicator line directly below the hero registration form submit button with the exact text: “🔥 3,000+ students have already registered”, styled slightly smaller than the CTA text with a soft contrasting background (light yellow or light green).
- Implement a lightweight bottom-left social-proof notification popup that periodically shows a single card reading: “{Name} from {City} registered {TimeAgo}”, with a clean modern design and smooth fade/slide animations.
- Add non-repeating-per-visitor name selection for popups: shuffle names on load, pick without replacement, persist shown names via sessionStorage or localStorage, and stop popups after all names are used; keep cities/time-ago/timing ranges easy to edit via centralized constants/config.

**User-visible outcome:** Visitors see an above-the-fold “🔥 3,000+ students have already registered” trust line under the registration CTA, and occasional animated social-proof popups in the bottom-left showing recent “registrations” without repeating names for that visitor.
