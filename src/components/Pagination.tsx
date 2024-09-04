import React, { useState } from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
interface IProps {
  setPage: (val: number | ((value:number)=>number)) => void;
  count: number;
}

export default function Pagination({ setPage, count }: IProps) {
  const [active, setActive] = React.useState(1);
  const getItemProps = (index: number) =>
  ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => {
      setActive(index)
      setPage(index)
    },
    className: "rounded-full",
  } as any);

  const next = () => {
    if (active === count) return;
    setI((prev) => (prev + 1))
    setActive((prev) => (prev + 1));
    setPage((prev)=>(prev + 1))
  
  };

  const prev = () => {
    if (active === 1 || i == 1) return;
    setI((prev) => (prev - 1))
    setActive((prev) => (prev - 1));
    setPage((prev)=>(prev - 1))

  };
  const [i, setI] = useState(1)

  return (
    <div className="flex items-center gap-4 justify-center mt-6">
      <Button
        variant="text"
        className="hidden md:flex items-center gap-2 rounded-full"
        onClick={prev}
        disabled={active === 1 || i == 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">
        <IconButton {...getItemProps(i)}>{i}</IconButton>
        <IconButton {...getItemProps(i + 1)}>{i + 1}</IconButton>
        <p> ... </p>
        <IconButton {...getItemProps(count)}>{count}</IconButton>
      </div>
      <Button
        variant="text"
        className="hidden md:flex items-center gap-2 rounded-full"
        onClick={next}
        disabled={active === count}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}