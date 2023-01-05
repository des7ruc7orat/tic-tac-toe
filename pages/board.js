import Image from "next/image";

import lightBlueSquare from "../public/square.png";

export default function Board() {
  return (
    <>
      <div class="grid grid-cols-3 gap-1">
        <span>
          <Image src={lightBlueSquare} alt="square" width="64" height="64" />
        </span>
        <span>
          {" "}
          <Image src={lightBlueSquare} alt="square" width="64" height="64" />
        </span>
        <span>
          {" "}
          <Image src={lightBlueSquare} alt="square" width="64" height="64" />
        </span>
        <span>
          {" "}
          <Image src={lightBlueSquare} alt="square" width="64" height="64" />
        </span>
        <span>
          {" "}
          <Image src={lightBlueSquare} alt="square" width="64" height="64" />
        </span>
        <span>
          {" "}
          <Image src={lightBlueSquare} alt="square" width="64" height="64" />
        </span>
        <span>
          {" "}
          <Image src={lightBlueSquare} alt="square" width="64" height="64" />
        </span>
        <span>
          {" "}
          <Image src={lightBlueSquare} alt="square" width="64" height="64" />
        </span>
        <span>
          {" "}
          <Image src={lightBlueSquare} alt="square" width="64" height="64" />
        </span>
      </div>
    </>
  );
}
