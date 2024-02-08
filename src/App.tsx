import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex items-center gap-2 border-2 bg-slate-50 p-10">
        <button
          onClick={() => dispatch(incrementByValue(5))}
          className="py-2 px-3 bg-purple-500 rounded-md text-white"
        >
          Increament by 5
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="py-2 px-3 bg-purple-500 rounded-md text-white"
        >
          Increament
        </button>
        <h1 className="text-3xl">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="py-2 px-3 bg-red-500 rounded-md text-white"
        >
          Decreament
        </button>
      </div>
    </div>
  );
}

export default App;
