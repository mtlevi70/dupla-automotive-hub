// Central business details. Everything in [brackets] is a placeholder to replace.
export const business = {
  name: "DuplaÁsz",
  phone: "[Phone number]",
  phoneHref: "tel:+0000000000",
  email: "[email@example.com]",
  emailHref: "mailto:email@example.com",
  address: "[Street address]",
  city: "[City, Postcode]",
  hours: [
    { days: "Monday – Friday", time: "[Opening hours]" },
    { days: "Saturday", time: "[Opening hours]" },
    { days: "Sunday", time: "[Closed / hours]" },
  ],
};

export const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Workshop services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/store", label: "Materials store" },
  { to: "/contact", label: "Contact" },
] as const;
