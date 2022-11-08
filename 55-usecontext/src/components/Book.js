import React, { useContext } from "react";
import { CustomContext } from "../hooks/Context";

export function Book() {
  const { removeBook } = useContext(CustomContext);
  return (
    <h2
      onclick={() => {
        removeBook(props.id);
      }}
    >
      {props.title}
    </h2>
  );
}
