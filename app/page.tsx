"use client"

import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ScrollAnimate from "@/components/scroll-animate";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function WolfHuntingChart() {
  const data = [
    { year: 2016, authorized: 120, actual: 95 },
    { year: 2017, authorized: 110, actual: 88 },
    { year: 2018, authorized: 95, actual: 76 },
    { year: 2019, authorized: 80, actual: 65 },
    { year: 2020, authorized: 70, actual: 58 },
    { year: 2021, authorized: 60, actual: 48 },
    { year: 2022, authorized: 75, actual: 62 },
    { year: 2023, authorized: 90, actual: 73 },
    { year: 2024, authorized: 85, actual: 69 },
  ];

  return (
    <div className="w-full h-[400px] p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis
            dataKey="year"
            tick={{ fill: 'currentColor' }}
            stroke="currentColor"
          />
          <YAxis
            tick={{ fill: 'currentColor' }}
            stroke="currentColor"
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(17, 17, 17, 0.8)',
              border: 'none',
              borderRadius: '8px',
              color: '#fff',
            }}
          />
          <Legend />
          <Line
            name="Ejemplares Autorizados"
            type="monotone"
            dataKey="authorized"
            stroke="#ef4444"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
          <Line
            name="Ejemplares Cazados"
            type="monotone"
            dataKey="actual"
            stroke="#84cc16"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default function HomePage() {
  const cards = [
    {
      title: "Equilibrio ecológico",
      text: "El lobo cumple un papel esencial en el control de poblaciones de herbívoros, manteniendo la salud de los ecosistemas del norte peninsular.",
      image: "/images/card1-lobo.png",
    },
    {
      title: "Caza regulada",
      text: "Desde marzo de 2025, se permite un control cinegético limitado bajo estrictas condiciones. No se trata de una persecución abierta, sino de una gestión controlada.",
      image: "/images/card2-lobo.jpg",
    },
    {
      title: "Conflicto humano-animal",
      text: "Los ataques al ganado siguen siendo el principal motivo de tensión entre ganaderos y conservacionistas. La convivencia requiere diálogo, compensación y educación.",
      image: "/images/card3-lobo.png",
    },
    {
      title: "Futuro del lobo ibérico",
      text: "España alberga una de las últimas poblaciones genéticamente puras del lobo ibérico. Su conservación es clave para la biodiversidad de toda la península.",
      image: "/images/card4-lobo.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
    {/* HERO */}
<motion.section
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="relative min-h-[85vh] flex items-center justify-center text-center px-6"
>
  {/* Imagen de fondo */}
  <div className="absolute inset-0">
    <Image
      src="/images/hero-lobo.jpg" 
      alt="Lobo ibérico en su hábitat"
      fill
      priority
      className="object-cover object-center"
    />
  </div>

  {/* Gradiente por encima */}
  <div className="absolute inset-0  from-black/20 via-black/70 to-black/95" />

  {/* Contenido */}
  <div className="relative z-10 max-w-4xl mx-auto px-6">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight drop-shadow-xl"
    >
      La batalla por el lobo ibérico
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className="mt-6 text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto font-serif leading-relaxed"
    >
      Entre la conservación y la caza: un conflicto que sigue marcando nuestro territorio.
    </motion.p>
  </div>
</motion.section>


{/* CARDS */}
<ScrollAnimate>
  <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="max-w-6xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-serif text-center mb-16"
      >
        Aspectos clave del lobo ibérico
      </motion.h2>

      {/* GRID DE CARDS IGUALES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-stretch">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="h-full"
          >
            <Card className="overflow-hidden bg-white/60 dark:bg-gray-800/50 border-2 border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col max-h-2 min-h-[65vh]">
              
              {/* Imagen grande */}
              <div className="relative w-full h-72 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Contenido */}
              <CardContent className="p-6 flex flex-col justify-between flex-grow max-h-0.5">
                <div>
                  <CardTitle className="text-2xl font-serif mb-3">{card.title}</CardTitle>
                  <p className="text-base text-muted-foreground font-serif leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
</ScrollAnimate>


{/* BLOG SECTION */}
<ScrollAnimate>
<section className="max-w-6xl mx-auto px-6 py-20">
  <motion.div
    className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    {/* Imagen lateral */}
    <motion.div
      className="relative order-1 md:order-0"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="w-full h-[400px] relative rounded-2xl overflow-hidden shadow-md">
        <Image
          src="/images/imggran-1.jpg"
          alt="Lobo en su hábitat"
          fill
          priority
          className="object-cover object-center"
        />
      </div>
    </motion.div>

    {/* Texto del artículo */}
    <motion.div
      className="space-y-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-serif">La caza del lobo en España: historia y actualidad</h2>
      <p className="text-muted-foreground font-serif text-lg leading-relaxed">
        La relación entre el ser humano y el lobo ibérico ha sido compleja durante siglos. Desde tiempos antiguos,
        el lobo ha sido percibido tanto como una amenaza para el ganado como un símbolo de la naturaleza salvaje.
        En el siglo XX, la caza indiscriminada redujo drásticamente sus poblaciones. 
        Hoy, tras décadas de protección, el debate sobre su gestión ha regresado al centro del discurso ambiental en España.
      </p>
      <p className="text-muted-foreground font-serif text-lg leading-relaxed">
        La nueva regulación de 2025 permite un control limitado de ejemplares al norte del Duero,
        con el objetivo de equilibrar la conservación y la convivencia con las actividades rurales.
        Sin embargo, organizaciones ecologistas advierten que esta medida podría poner en riesgo la estabilidad de la especie.
      </p>
      <div className="mt-6 p-4 bg-muted/30 rounded-xl border flex items-center gap-3">
        <span className="font-serif text-base text-muted-foreground">Fuente:</span>
        <a
          href="https://actua.wwf.es/es/yo-defiendo-al-lobo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline font-medium font-serif"
        >
          WWF España — Yo defiendo al lobo
        </a>
      </div>

    </motion.div>
  </motion.div>
</section>
</ScrollAnimate>

{/* SECCIÓN GRÁFICOS */}
<ScrollAnimate>
<section className="max-w-6xl mx-auto px-6 py-20">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <h2 className="text-3xl font-serif mb-6">Evolución de la caza del lobo en España</h2>
    <p className="text-muted-foreground font-serif text-lg leading-relaxed mb-8">
      A continuación mostramos una gráfica que representa el número estimado de ejemplares autorizados para caza
      del lobo ibérico en España durante los últimos años — estos datos pueden variar según la comunidad autónoma y la metodología de recuento.
    </p>

    <div className="bg-background p-6 rounded-2xl shadow-md dark:shadow-none">
      <WolfHuntingChart />
    </div>

    <p className="text-sm text-muted-foreground mt-4">
      Fuente de datos: Informe anual de gestión cinegética del lobo – varios años.
    </p>
  </motion.div>
</section>
</ScrollAnimate>



      {/* CTA */}
      <ScrollAnimate>
      <section className="text-center py-16 bg-muted rounded-2xl max-w-4xl mx-auto mb-20">
        <h3 className="text-3xl font-serif mb-4">Apoya la conservación del lobo ibérico</h3>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto font-serif text-lg">
          Tu aportación ayuda a financiar proyectos de monitoreo, educación ambiental y compensaciones a ganaderos.
        </p>
        <Button size="lg" className="font-serif text-lg">Hacer una donación</Button>
      </section>
      </ScrollAnimate>

{/* SECCIÓN DE CIERRE */}
<section className="bg-background py-24 text-center border-t border-gray-200 dark:border-gray-700">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="max-w-3xl mx-auto px-6"
  >
    <p className="text-2xl md:text-3xl font-serif italic text-black dark:text-gray-200 leading-relaxed">
      “Proteger al lobo ibérico no es solo salvar una especie,  
      es preservar el equilibrio de toda una tierra.”
    </p>
    <span className="block mt-6 text-muted-foreground font-serif">— Proyecto Conservación Lobo España</span>
  </motion.div>
</section>


      {/* FOOTER */}
<footer className="bg-gray-100 dark:bg-gray-900 py-10 mt-20 border-t border-gray-200 dark:border-gray-700">
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
    <p className="text-sm text-gray-600 dark:text-gray-400 font-serif">
      © {new Date().getFullYear()} Conservación del Lobo Ibérico. Todos los derechos reservados.
    </p>
    <div className="flex gap-4">
      <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">Privacidad</a>
      <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">Términos</a>
      <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">Contacto</a>
    </div>
  </div>
</footer>

    </main>
  );
}
