import { MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

const WHATSAPP_GROUP_URL = 'https://chat.whatsapp.com/FYWmvGKZUWTEZEK6aXxZTF?mode=gi_t';

export default function WhatsAppFloatingButton() {
  const handleClick = () => {
    window.open(WHATSAPP_GROUP_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full px-4 py-3 shadow-lg transition-transform hover:scale-105 sm:bottom-8 sm:right-8"
      aria-label="Join WhatsApp Group"
    >
      <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
      <span className="text-sm font-semibold sm:text-base">Join WhatsApp group</span>
    </Button>
  );
}
