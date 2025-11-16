"use client";

import { PrimeReactProvider } from "primereact/api";

type Props = {
  children: React.ReactNode;
};

export function PrimeReactClientProvider({ children }: Props) {
  return (
    <PrimeReactProvider
      value={{
        unstyled: true,
        pt: {}, //
      }}
    >
      {children}
    </PrimeReactProvider>
  );
}
