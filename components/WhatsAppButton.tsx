export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/61420849402?text=Hi%20I%20would%20like%20a%20free%20quote"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-50
        flex h-14 w-14 items-center justify-center
        rounded-full bg-green-500
        text-white shadow-lg
        transition
        hover:bg-green-600
        hover:scale-110
      "
      aria-label="Contact us on WhatsApp"
    >
      {/* Coloque seu ícone aqui */}
      <img src="/images/whatsapp-icon.png" alt="WhatsApp" className="" />
    </a>
  );
}