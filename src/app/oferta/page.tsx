"use client";

import React from "react";
import Head from "next/head";
import SocialPostsSection from "../../components/sections/SocialMedia";

type Service = {
  title: string;
  details?: string;
  price: string;
};

type ServiceCategory = {
  name: string;
  services: Service[];
};

const categorizedServices: ServiceCategory[] = [
  {
    name: "Strzyżenie i modelowanie",
    services: [
      { title: "Grzywka", price: "60 zł" },
      {
        title: "Strzyżenie damskie – Włosy do ramion",
        details: "konsultacja",
        price: "180 zł",
      },
      {
        title: "Strzyżenie damskie – Włosy za ramiona",
        details: "konsultacja",
        price: "200 zł",
      },
      {
        title: "Modelowanie – Włosy do ramion",
        details: "konsultacja",
        price: "80 zł",
      },
      {
        title: "Modelowanie – Włosy za ramiona",
        details: "konsultacja",
        price: "100 zł",
      },
      { title: "Fryzura okolicznościowa", price: "200 – 250 zł" },
    ],
  },
  {
    name: "Koloryzacja włosów",
    services: [
      {
        title: "Koloryzacja jednolita – Włosy do ramion",
        details: "konsultacja",
        price: "350 zł",
      },
      {
        title: "Koloryzacja jednolita – Włosy za ramiona",
        details: "konsultacja",
        price: "450 zł",
      },
      {
        title: "Odrost – Włosy do ramion",
        details: "konsultacja",
        price: "250 zł",
      },
      {
        title: "Odrost – Włosy za ramiona",
        details: "konsultacja",
        price: "300 zł",
      },
      {
        title: "Refleksy – Włosy do ramion",
        details: "konsultacja",
        price: "400 zł",
      },
      {
        title: "Refleksy – Włosy za ramiona",
        details: "konsultacja",
        price: "480 zł",
      },
      {
        title: "Farbowanie odrostu + Refleksy – Włosy do ramion",
        price: "420 zł",
      },
      {
        title: "Farbowanie odrostu + Refleksy – Włosy za ramiona",
        price: "470 zł",
      },
      {
        title: "Tonowanie / Pigmentacja – Włosy do ramion",
        details: "konsultacja",
        price: "200 zł",
      },
      {
        title: "Tonowanie / Pigmentacja – Włosy za ramiona",
        details: "konsultacja",
        price: "250 zł",
      },
      {
        title: "Baleyage / Alrtouch – Włosy do ramion",
        details: "konsultacja",
        price: "600 zł",
      },
      {
        title: "Baleyage / Alrtouch – Włosy za ramiona",
        details: "konsultacja",
        price: "700 zł",
      },
    ],
  },
  {
    name: "Pielęgnacja włosów",
    services: [
      {
        title: "Pielęgnacja dobrana do potrzeb włosów – Włosy do ramion",
        price: "190 zł",
      },
      {
        title: "Pielęgnacja dobrana do potrzeb włosów – Włosy za ramiona",
        price: "240 zł",
      },
      { title: "Pielęgnacja Davroe – Włosy do ramion", price: "190 zł" },
      { title: "Pielęgnacja Davroe – Włosy za ramiona", price: "240 zł" },
      {
        title: "Kuracja Kaszmirową Keratyną – Włosy do ramion",
        price: "370 zł",
      },
      {
        title: "Kuracja Kaszmirową Keratyną – Włosy za ramiona",
        price: "450 zł",
      },
      { title: "Prostowanie keratynowe – Włosy do ramion", price: "500 zł" },
      { title: "Prostowanie keratynowe – Włosy za ramiona", price: "600 zł" },
      { title: "Nanoplastia – Włosy do ramion", price: "800 zł" },
      { title: "Nanoplastia – Włosy za ramiona", price: "1000 zł" },
    ],
  },
  {
    name: "Zabiegi trychologiczne",
    services: [
      {
        title: "Zabieg trychologiczny – Infuzja – Włosy do ramion",
        price: "250 zł",
      },
      {
        title: "Zabieg trychologiczny – Infuzja – Włosy za ramiona",
        price: "270 zł",
      },
      { title: "Peeling trychologiczny – dodatek do usługi", price: "70 zł" },
      {
        title: "Infuzja tlenowa z keratyną – dodatek do usługi",
        price: "70 zł",
      },
    ],
  },
  {
    name: "Stylizacja dodatkowa",
    services: [
      { title: "Fale / Loki – Włosy do ramion", price: "200 zł" },
      { title: "Fale / Loki – Włosy za ramiona", price: "250 zł" },
      { title: "Fale / Loki – dodatek do usługi", price: "100 zł" },
    ],
  },
];

const slugify = (str: string) => {
  return str
    .toLowerCase()
    .replace(/ą/g, "a")
    .replace(/ć/g, "c")
    .replace(/ę/g, "e")
    .replace(/ł/g, "l")
    .replace(/ń/g, "n")
    .replace(/ó/g, "o")
    .replace(/ś/g, "s")
    .replace(/ź/g, "z")
    .replace(/ż/g, "z")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "");
};

const OfertaPage = () => {
  return (
    <section className="bg-[#f9f9f9] text-gray-800 py-16 px-6 md:px-8">
      <Head>
        <title>BB Hair Spa - Oferta</title>
        <link rel="icon" href="/logo/logob.svg" />
      </Head>

      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-light mb-8 tracking-wide uppercase text-gray-900 text-center">
          Nasza oferta
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Wszystkie nasze usługi zawierają indywidualne podejście, najwyższej
          jakości pielęgnację oraz stylizację. Ostateczna cena może się różnić w
          zależności od długości i kondycji włosów – ustalana jest podczas
          konsultacji.
        </p>

        <div className="space-y-12">
          {categorizedServices.map((category, idx) => (
            <div key={idx} id={slugify(category.name)} className="text-left">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                {category.name}
              </h2>

              <div className="grid gap-4">
                {category.services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-sm p-5 flex flex-col md:flex-row md:items-center md:justify-between hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex-1 flex items-center">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">
                          {service.title}
                        </h3>
                        {service.details && (
                          <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                            {service.details}
                          </p>
                        )}
                        {service.price && (
                          <p className="mt-2 text-base font-semibold text-gray-800">
                            {service.price}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 md:text-right">
                      <a
                        href="https://booksy.com"
                        className="inline-block bg-gray-900 text-white text-sm font-medium px-6 py-2 rounded-full hover:bg-gray-700 transition-colors duration-200"
                      >
                        Umów wizytę
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8"></div>
      <SocialPostsSection />
    </section>
  );
};

export default OfertaPage;
