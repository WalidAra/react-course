import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const [user, setUser] = useState({ id: 1, name: "nerds", theme: "light" });
  const [arr, setarr] = useState([1, 2, 3]);

  const ADdNUmber = () => {
    setCount((prev) => prev + 1); // 0 + 1
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const UpdateUser = () => {
    setUser((prev) => ({ ...prev, id: 243543 }));

    setarr((prev) => [...prev, 4]);
  };

  return (
    <div className="w-full h-screen bg-slate-800 flex justify-center items-center">
      <div className="w-96 rounded-xl flex flex-col bg-slate-600 gap-4 p-4">
        <div className="flex w-full items-center justify-between">
          <button
            onClick={ADdNUmber}
            className="bg-purple-500 duration-200 hover:bg-purple-900 text-white py-2 px-4 rounded-md"
          >
            Add
          </button>
          <button className="bg-purple-500 duration-200 hover:bg-purple-900 text-white py-2 px-4 rounded-md">
            Sub
          </button>
        </div>

        <div className="w-full flex items-center justify-between gap-2">
          <input
            type="number"
            className="w-full py-2 px-4 rounded bg-slate-900 text-white"
          />
          <button className="bg-purple-500 duration-200 hover:bg-purple-900 text-white py-2 px-4 rounded-md">
            submit
          </button>
        </div>

        <p className="text-white text-3xl text-center"> {count} </p>

        {isOpen && (
          <p className="text-white text-3xl text-center">Hello nerds</p>
        )}

        <p>
          {" "}
          {user.id}, {user.name}{" "}
        </p>

        <p> {arr[arr.length - 1]} </p>

        <button
          onClick={UpdateUser}
          className="bg-purple-500 duration-200 hover:bg-purple-900 text-white py-2 px-4 rounded-md"
        >
          update user
        </button>
      </div>
    </div>
  );
}

export default App;
