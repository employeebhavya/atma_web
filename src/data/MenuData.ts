interface MenuItem {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menus?: {
    link: string;
    title: string;
  }[];
}
[];

const menu_data: MenuItem[] = [
  {
    id: 1,
    has_dropdown: false,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    has_dropdown: true,
    title: "What We Do",
    link: "#",
    sub_menus: [
      { link: "/events", title: "Annual Convention" },
      { link: "/causes", title: "Charitable Activities" },
    ],
  },
  {
    id: 3,
    has_dropdown: true,
    title: "Who We Are",
    link: "#",
    sub_menus: [{ link: "/about", title: "About Us" }],
  },
  {
    id: 4,
    has_dropdown: false,
    title: "Gallery",
    link: "/portfolio",
  },
  {
    id: 5,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
  },
  {
    id: 6,
    has_dropdown: false,
    title: "Blog",
    link: "/blog",
  },
];
export default menu_data;
