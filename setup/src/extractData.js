function extractData(data) {
  let celebList = [];
  let birthdays = data.Birthdays;

  for (let i = 0; i < 10; i++) {
    // create newCeleb object
    const newCeleb = {};

    // get celebId, name, age, image - push to celebList
    newCeleb.celebId = birthdays[i].celebId;
    newCeleb.name = birthdays[i].name;
    newCeleb.age = birthdays[i].age;
    newCeleb.image = `https://celebritybucks.com/images/celebs/mid/${birthdays[i].celebId}.jpg`;
    celebList.push(newCeleb);
  }

  return celebList;
}

export { extractData };
