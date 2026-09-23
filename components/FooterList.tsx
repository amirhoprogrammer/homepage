import { useLanguage } from "@/contexts/LanguageContext";
import { FooterItems } from "@/utils/type";
export default function FooterList({ items }: { items: FooterItems }) {
  const { lang } = useLanguage();
  const title = lang === "fa" ? items.title_fa : items.title_en;
  const listItems = lang === "fa" ? items.listItems_fa : items.listItems_en;
  return (
    <div className="px-2 py-2 w-full h-full flex flex-col overflow-hidden gap-4">
      <h3 className="flex text-2xl">{title}</h3>
      <ul className="flex flex-col gap-2">
        {listItems.map((item, id) => (
          <li className="flex text-base" key={id}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
