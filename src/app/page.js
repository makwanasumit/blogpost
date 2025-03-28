import CardList from "@/app/component/CardList/CardList";
import CategoryList from "@/app/component/CategoryList/CategoryList";
import Featured from "@/app/component/Featured/Featured";
import Menu from "./component/Menu/Menu";


export default function Home({ searchParams }) {

  const page = parseInt(searchParams.page) || 1;

  return (
    <div className="w-full">
      <Featured className="mt-8" />
      <CategoryList />
      <div className="flex gap-20 m-6">
        <CardList className='flex-[5]' page={page} />
        <Menu className='flex-[2] lg:flex hidden flex-col ' />
      </div>
    </div>
  );
}
