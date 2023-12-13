import { getDatabase, ref, remove } from "firebase/database";
import { FiX } from "react-icons/fi";

function List({ list }) {
  const db = getDatabase();
  function handleDelete(item) {
    remove(ref(db, "lists/" + item.key));
  }
  return (
    <div className="p-[12px] rounded border">
      <header className="text-[rgba(0,0,0,0.65)] flex justify-between mb-2">
        <h1 className="font-medium text-lg">{list.title}</h1>
        <span className="cursor-pointer" onClick={() => handleDelete(list)}>
          <FiX className="text-medium text-lg" />
        </span>
      </header>
      <main className="mb-1">
        <p className="font-normal text-lg text-[rgba(0,0,0,0.65)]">
          {list.description}
        </p>
      </main>
      <footer className="text-base font-normal text-[rgba(0,0,0,0.5)]">
        {list.date}
      </footer>
    </div>
  );
}

export default List;
