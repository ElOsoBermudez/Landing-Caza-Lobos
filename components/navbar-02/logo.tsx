import Image from "next/image";

export const Logo = () => (
  <Image
    src="/images/logo.png" // ruta desde /public
    alt="Logo de la empresa"
    width={120}
    height={32}
    priority // opcional: mejora rendimiento
  />
);
