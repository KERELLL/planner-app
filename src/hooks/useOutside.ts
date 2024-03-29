import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

type TypeOut = {
  ref: any;
  isShow: boolean;
  setIsShow: Dispatch<SetStateAction<boolean>>;
};

export function useOutside(initialVisible: boolean = false) {
  const [isShow, setIsShow] = useState(initialVisible);

  const ref = useRef<HTMLElement>(null);

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return { isShow, setIsShow, ref };
}
