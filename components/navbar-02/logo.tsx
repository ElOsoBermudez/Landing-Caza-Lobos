import Image from "next/image";

export const Logo = () => (
<Image
  src="/logo-lobo.png"
  alt="Logo de la empresa"
  width={120}
  height={32}
  priority
/>
);
