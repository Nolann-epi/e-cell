import React, { useEffect, useState } from "react";

interface ModalProps {
  setter: Function;
  isLogin: boolean;
}

function CustomModal({ setter, isLogin }: ModalProps) {
  const [animation, setAnimation] = useState<boolean>(false);

  const handleExit = () => {
    setAnimation(false);
    setTimeout(() => {
      setter(false);
    }, 230);
  };

  useEffect(() => {
    if (animation === false) setAnimation(true);
  }, [animation]);

  return (
    <div
      className=" fixed z-30 top-0 left-0 bottom-0 h-full w-full bg-gray-300  flex flex-col justify-center items-center bg-opacity-70 text-blue-400"
      onClick={() => {
        handleExit();
      }}
    >
      <div
        className={`rounded-xl bg-white shadow-xl px-6 py-3 text-center flex flex-col space-y-5 w-fit transform ease-in-out duration-300 ${
          animation === true ? "scale-100" : "scale-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {isLogin && (
          <div>
            <p className="text-3xl text-primal w-full">
              Thank you for shopping with us !
            </p>
            <p className="text-xl text-primal pt-4">
              Your order is being processed and will be delivered to you soon.
            </p>
            <div className="flex flex-row w-full space-x-4"></div>
          </div>
        )}
        {!isLogin && (
          <div>
            <p className="text-xl text-red-500 w-full">
              Please login to place order
            </p>
            <div className="flex flex-row w-full space-x-4"></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CustomModal;
