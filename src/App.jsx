import { useEffect, useState } from "react";
import { getDatabase, onValue, push, ref, set } from "firebase/database";

import List from "./List";

function App() {
  const db = getDatabase();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [list, setList] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !description) {
      setDescription("");
      setTitle("");
      return null;
    }

    set(push(ref(db, "lists/")), {
      title,
      description,
      date: new Date().toLocaleDateString(),
    });

    setDescription("");
    setTitle("");
  }

  useEffect(() => {
    console.log("useEffect");
    const starCountRef = ref(db, "lists/");
    onValue(starCountRef, (snapshot) => {
      const arr = [];
      snapshot.forEach((item) => {
        arr.push({ ...item.val(), key: item.key });
      });
      setList(arr);
      console.log(arr);
    });
  }, [db]);
  return (
    <>
      <div className="min-h-screen">
        <div className="grid grid-rows-[auto_80vh_auto] min-h-screen grid-cols-1">
          <header className="bg-[#F4F4F4]">
            <div className="flex justify-center items-center py-4">
              <form className="flex gap-2" onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={title}
                  placeholder="Title"
                  onChange={(e) => setTitle(e.target.value)}
                  className="bg-[#D9D9D9] outline-none px-2 py-1 w-1/4 rounded"
                />
                <input
                  type="text"
                  value={description}
                  placeholder="Description"
                  onChange={(e) => setDescription(e.target.value)}
                  className="bg-[#D9D9D9] outline-none px-2 py-1 w-1/2 rounded"
                />
                <button
                  type="submit"
                  className="bg-[#D9D9D9] text-[rgba(0,0,0,0.65)] px-6 py-3 rounded font-medium"
                >
                  Submit
                </button>
              </form>
            </div>
          </header>

          <main className="h-full w-full overflow-scroll p-4">
            <div className="grid grid-cols-4 gap-4">
              {list.map((list) => (
                <List list={list} key={list.key} />
              ))}
            </div>
          </main>
          <footer className="bg-[#F4F4F4] flex items-center justify-center">
            <p className="text-center py-2 text-[#d8d8d8] text-sm">
              Copyright {new Date().getFullYear()} by mehedi
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
