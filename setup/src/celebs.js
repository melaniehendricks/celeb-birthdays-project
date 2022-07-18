import fetch from "node-fetch";
import { extractData } from "./extractData.js";
//import { List } from "./List.js";

async function fetchCelebsJson() {
  const response = await fetch(
    "https://celebritybucks.com/developers/birthdays/JSON"
  );
  const celebs = await response.json();
  return celebs;
}

// PROMISE
fetchCelebsJson()
  .then((celebs) => {
    let celebInfo = extractData(celebs);
    console.log(celebInfo);
    //List(celebInfo);
  })
  .catch((err) => console.log(err));

export { fetchCelebsJson };
