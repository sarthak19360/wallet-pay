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
        onClick={() => {
          alert("Hi from User App");
        }}
      />
      <div>hi there {balance}</div>
      <div className="flex">
        <Button onClick={handleIncrement} children="Increment" />
        <Button onClick={handleDecrement} children="Decrement" />
      </div>
    </div>
  );
}
