# Specification

## Summary
**Goal:** Streamline the post-registration experience by automatically redirecting users to the WhatsApp group invite link after backend success, removing any manual join buttons, and making the floating WhatsApp CTA show a visible label.

**Planned changes:**
- Trigger a best-effort automatic redirect (same tab / top-level window) to `https://chat.whatsapp.com/FYWmvGKZUWTEZEK6aXxZTF?mode=gi_t` immediately after the backend registration call succeeds (not after client-side validation alone), avoiding iframe-based approaches.
- Remove all WhatsApp “join” buttons and related instructional copy from both the registration success UI and the duplicate-registration UI, keeping remaining user-facing text in English.
- Update the bottom-right floating WhatsApp CTA to display the visible label text exactly: “Join WhatsApp group”, keep it small and mobile-friendly, ensure it does not block the form submit button, and ensure it opens the same WhatsApp invite link on click.

**User-visible outcome:** After registering successfully, users are automatically taken to the WhatsApp group invite link without seeing any manual join button; the floating bottom-right WhatsApp CTA remains available with a visible “Join WhatsApp group” label.
