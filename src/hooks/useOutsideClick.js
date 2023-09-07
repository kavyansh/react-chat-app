import React, { useEffect, useState } from "react";

function useOutsideClick(ref, callback) {
  const [clickedOutside, setClickedOutside] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setClickedOutside(true);
        callback();
      } else {
        setClickedOutside(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return { clickedOutside };
}

export default useOutsideClick;
