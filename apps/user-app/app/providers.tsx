"use client";
import { Provider as ReduxProvider } from "react-redux";
import store from "@repo/store/store";
import { SessionProvider } from "next-auth/react";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    // <ReduxProvider store={store}>
    <SessionProvider>{children}</SessionProvider>
    // </ReduxProvider>
  );
};
