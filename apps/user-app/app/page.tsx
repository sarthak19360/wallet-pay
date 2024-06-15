"use client";
import { Button } from "@repo/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "@repo/store/balanceslice";

export default function Home() {
  const balance = useSelector((state: any) => state.balance);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment(10));
  };
  const handleDecrement = () => {
    dispatch(decrement(10));
  };
  return (
    <div className="flex flex-col w-6/12 mx-auto">
      <Button
        children="User App"
        className="bg-gray-800 w-fit text-white p-2 rounded-lg m-4 hover:bg-gray-600"
      />
      <div>hi there {balance}</div>
      <div className="flex">
        <button
          className="bg-gray-800 w-fit text-white p-2 rounded-lg m-4 hover:bg-gray-600"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="bg-gray-800 w-fit text-white p-2 rounded-lg m-4 hover:bg-gray-600"
          onClick={handleDecrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
