"use client";

import { useContext } from "react";
import { DialogContext } from "../contexts/dialogContex";

export function Dialog() {
  const { open, toggle } = useContext(DialogContext);

  return (
    <>
      {open && <div className="w-10 h-10">Dialog</div>}

      <button onClick={toggle}>Abrir</button>
    </>
  );
}
