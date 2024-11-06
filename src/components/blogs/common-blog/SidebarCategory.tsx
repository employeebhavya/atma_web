import Link from "next/link";

const category: string[] = [
  "Categorie 1 ATMA Blog",
  "Categorie 2 ATMA Blog",
  "Categorie 3 ATMA Blog",
  "Categorie 4 ATMA Blog",
  "Categorie 5 ATMA Blog",
];

const SidebarCategory = () => {
  return (
    <div className="widget widget_catagory">
      <h5 className="widget-title">News Categories</h5>
      <ul className="catagory-items">
        {category.map((item, i) => (
          <li key={i}>
            <Link href="/blog">{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarCategory;
