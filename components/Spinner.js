//Import - Spinner GIF
import Image from "next/image";
import spinner from "../public/Spinner.gif";

function Spinner() {
  return (
    <>
      <Image
        src={spinner}
        alt="spinnerGIF"
        className=" relative w-[200px] m-auto flex justify-center items-center z-[10] "
      />
    </>
  );
}

export default Spinner;
