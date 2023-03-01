import AtomTitle from "@/components/Atom/Title";
import Container from "@/components/Container";
import { BsCalendar2DateFill } from "react-icons/bs";
import { linksResources } from "../config/data";
import { classNames } from "../helpers/formatters";

export default function News() {
  return (
    <div
      className="w-full bg-gradient-to-t from-pink-100 py-16"
      id="news"
    >
      <Container>
        <AtomTitle alignText="center">
          ERC-4626 News
        </AtomTitle>
        <div className="mx-auto mt-8 grid grid-cols-1 gap-8 sm:text-left md:grid-cols-2 lg:grid-cols-3">
          {linksResources.news.map((item: any, index: number) => (
            <a
              key={`news-${index}`}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={classNames("group relative block overflow-hidden rounded-xl bg-white p-5 shadow-md transition-opacity delay-75 ease-linear md:hover:opacity-90", item.wide && "col-span-full lg:max-w-[700px] mx-auto")}
            >
              <img
                className="min-w-full rounded-lg object-contain shadow-md"
                src={item.thumbnail}
                alt={item.title}
              />
              <div className="my-3 inline-flex items-center whitespace-nowrap rounded-full py-0.5 text-sm font-medium text-pink-800 md:bg-pink-100 md:px-3">
                <BsCalendar2DateFill className="mr-1 h-4 w-4" />
                {item.date}
              </div>
              <h4 className="bg-gradient-to-r from-pink-500 to-pink-800 bg-clip-text text-xl font-extrabold capitalize tracking-tight text-transparent md:my-4">
                {item.name}
              </h4>
              <p className="font-pj text-base text-gray-600">{item.teaser}</p>
            </a>
          ))}
        </div>
      </Container>
    </div>
  );
}