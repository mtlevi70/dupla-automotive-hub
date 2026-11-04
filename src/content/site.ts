// Központi üzleti adatok. A szögletes zárójelben szereplő értékek helyőrzők.
export const business = {
  name: "DuplaÁsz",
  phone: "[Telefonszám]",
  phoneHref: "tel:+0000000000",
  email: "[E-mail-cím]",
  emailHref: "mailto:email@example.com",
  address: "[Utca, házszám]",
  city: "[Irányítószám, település]",
  hours: [
    { days: "Hétfő–péntek", time: "[Nyitvatartás]" },
    { days: "Szombat", time: "[Nyitvatartás]" },
    { days: "Vasárnap", time: "[Zárva / nyitvatartás]" },
  ],
};

export const nav = [
  { to: "/", label: "Főoldal" },
  { to: "/services", label: "Szolgáltatások" },
  { to: "/gallery", label: "Galéria" },
  { to: "/store", label: "Szaküzlet" },
  { to: "/contact", label: "Kapcsolat" },
] as const;
