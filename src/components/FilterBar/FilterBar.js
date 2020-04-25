import React from "react";
import { cn } from "@bem-react/classname";

import "./FilterBar.scss";

import FilterBarFilter from "./FilterBarFilter/FilterBarFilter";

export default function FilterBar(props) {
  const FilterBar = cn("FilterBar");
  return (
    <div className={FilterBar({}, [props.className])}>
      <FilterBarFilter title="Бренд" />
    </div>
  );
}
