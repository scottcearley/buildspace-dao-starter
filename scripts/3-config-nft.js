import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x10E1b115B02cCe8Ef9AD4CD56d4C10f576310F31");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "L8NiteLabs Coffee Cup",
        description: "This NFT will give you access to L8NiteLabsDAO!",
        image: readFileSync("scripts/assets/L8NiteLabs.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();