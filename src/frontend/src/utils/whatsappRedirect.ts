/**
 * Attempts to redirect the user to WhatsApp group URL.
 * This is a best-effort approach that tries to navigate the top-level window
 * when embedded in an iframe, falling back to current window navigation.
 * Some browsers/devices may still block automatic redirects to external apps.
 */
export function attemptWhatsAppRedirect(whatsappUrl: string): void {
  try {
    // Try to navigate the top-level window first (for iframe scenarios)
    if (window.top && window.top !== window.self) {
      try {
        window.top.location.assign(whatsappUrl);
        return;
      } catch (e) {
        // Cross-origin iframe restriction - fall through to window.location
      }
    }
    
    // Fallback: navigate current window
    window.location.assign(whatsappUrl);
  } catch (error) {
    // If automatic redirect fails, log silently
    console.log('Automatic WhatsApp redirect blocked or failed.');
  }
}
