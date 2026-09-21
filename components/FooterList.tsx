import { FooterItems } from "@/utils/type";
export default function FooterList({ items }: { items: FooterItems }) {
  return (
    <div className="px-2 py-2 w-full h-full flex flex-col overflow-hidden gap-4 ">
      <h3 className="flex justify-end text-2xl ">{items.title}</h3>
      {items.listItems.map((item, id) => (
        <ul className="flex-col gap-2" key={id}>
          <li className="flex justify-end text-base" key={id}>
            {item}
          </li>
        </ul>
      ))}
    </div>
  );
}
