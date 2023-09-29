import ItemList from "./item-list";

export default function Page() {
    return (
      <main className="p-10">
        <h1 className=" flex flex-col items-center text-4xl font-thick">
          Shopping List
        </h1>
        <ItemList />
      </main>
    )
      }