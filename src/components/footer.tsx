import { Icon } from "@iconify/react/dist/iconify.js";

export default function Footer() {
  const footerItems: {
    sectionTitle: string;
    sectionItems: {
      icon?: string;
      link: {
        name: string;
        to: string;
      };
    }[];
  }[] = [
    {
      sectionTitle: "Show Motion Limited",
      sectionItems: [
        {
          icon: "mdi-map-marker",
          link: { name: "Level 8, Bashdf City 13/3 Ka, Panldf, Cambodia", to: "" },
        },
      ],
    },
    {
      sectionTitle: "Page’s",
      sectionItems: [
        {
          link: {
            name: "Movie",
            to: "",
          },
        },
        {
          link: {
            name: "TV Series",
            to: "",
          },
        },
      ],
    },
    {
      sectionTitle: "Contect Us",
      sectionItems: [
        {
          icon: "mdi-phone",
          link: {
            name: "+855 0974588804",
            to: "tel:+8550974588804",
          },
        },
        {
          icon: "mdi-email",
          link: {
            name: "example@gmail.com",
            to: "mailto:example@gmail.com",
          },
        },
      ],
    },
    {
      sectionTitle: "More At Cineplex",
      sectionItems: [
        {
          link: {
            name: "Student Reward Program",
            to: "",
          },
        },
        {
          link: {
            name: "Privacy policy",
            to: "",
          },
        },
      ],
    },
  ];
  return (
    <div className="w-full p-4 tablet:py-8 tablet:px-16 desktop:px-52 bg-tertiary-500 flex flex-col tablet:flex-row items-center justify-between gap-6">
      {footerItems.map((ft, i) => (
        <div className="flex flex-col items-center tablet:items-start gap-2">
          {i === 0 ? <img src="/src/assets/logo.svg" alt="logo" /> : null}
          <h2 className="text-white text-center">{ft.sectionTitle}</h2>
          {ft.sectionItems.map((st) => (
            <div className="w-fit text-grey-500 flex items-center justify-center gap-2">
              {st.icon ? <Icon icon={st.icon} width="16" /> : null}
              <a href={st.link.to} className="text-xs">
                {st.link.name}
              </a>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
