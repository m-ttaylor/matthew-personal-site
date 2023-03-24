type Component = {
  name: string;
  percentage: number;
}

export type Settlement = {
  name: string
  size: TownSize
  demographics: Component[]
  industry: string[] | string
  population: number
}

interface Race {
  name: string
  weight: number
}
export type TownSize = "hamlet" | "village" | "town" | "city" | "large city";

const commonRaces: Race[] = [
  {name: "human", weight: 40},
  {name: "gnome", weight: 10},
  {name: "dwarf", weight: 10},
  {name: "elf",  weight: 10},
  {name: "halfling",  weight: 10},
];

const uncommonRaces: Race[] = [
  {name: "tiefling",  weight: 2},
  {name: "half-orc",  weight: 2},
  {name: "half-elf", weight: 2},
  {name: "drow", weight: 2},
  {name: "goblin", weight: 2},
  {name: "aasimar", weight: 1},

];

const veryUncommonRaces: Race[] = [
  {name: "aarakocra",  weight: 1},
  {name: "genasi", weight: 1},
  {name: "duergar", weight: 1},
  {name: "firbolg", weight: 1},
  {name: "goliath", weight: 1},
  {name: "kenku", weight: 1},
  {name: "kobold", weight: 1},
  {name: "lizardfolk", weight: 1},
  {name: "minotaur", weight: 1},
  {name: "centaur", weight: 1},
  {name: "tabaxi", weight: 10},
  {name: "orc", weight: 1},
  {name: "tortle", weight: 1},
  {name: "harengon", weight: 1}
]

const roots = [
  "weald",
  "tre",
  "tra",
  "swin",
  "sud",
  "strath",
  "stoke",
  "stam",
  "stan",
  "porth",
  "shep",
  "port",
  "pen",
  "nant",
  "moss",
  "loch",
  "lough",
  "ling",
  "lang",
  "lan",
  "knock",
  "kirk",
  "king",
  "kin",
  "keld",
  "inver",
  "read",
  "ince",
  "salt",
  "arden",
  "sal",
  "sol",
  "holm",
  "chapel",
  "shef",
  "hudd",
  "wake",
  "man",
  "white",
  "brack",
  "dub",
  "cul",
  "grims",
  "ten",
  "der",
  "whit",
  "sel",
  "hel",
  "lock",
  "wether",
  "brad",
  "bred",
  "mel",
  "ash",
  "black",
  "goul",
  "rose",
  "bal",
  "auchen",
  "ast",
  "avon",
  "acc",
  "aber"
];

const suffixes = [
  "ham",
  "ing",
  "ton",
  "bury",
  "ford",
  "ley",
  "dale",
  "by",
  "thorpe",
  "thwaite",
  "toft",
  "ville",
  "bridge",
  "well",
  "don",
  "den",
  "wich",
  "wick",
  "worth",
  "stead",
  "ster",
  "shaw",
  "ness",
  "mouth",
  "more",
  "minster",
  "mere",
  "hurst",
  "hop",
  "hithe",
  "gate",
  "firth",
  "field",
  "feld",
  "combe",
  "caster",
  "by",
  "bourne",
  "burn",
  "bost",
  "shire"
]

const smallTownIndustries = [
  "sheep herding",
  "goat herding",
  "farming",
  "livestock",
  "outpost",
  "grain milling",
  "quarrying",
  "trapping",
  "orchards",
  "vineyards",
  "lumber",
  "spice growing",
  "floriculture",
  "medicinal plant cultivation",
  "dairy production",
  "hot springs",
  "waystation",
  "crossroads"
]

const mediumLargeTownIndustries = [
  "textiles",
  "cheese production",
  "dye production",
  "leatherworking",
  "woodworking",
  "weaving",
  "trade hub",
  "civil service",
  "pottery",
  "winemaking",
  "brewing",
  "academics",
  "banking",
  "slaving",
  "organized crime",
  "theater",
  "fine arts",
  "metalworking",
  "instrument manufacture",
  "musical performances",
  "weapons manufacture",
  "hospitality",
  "institutional religion",
  "medicine",
  "milling",
]

const chooseRaceByWeight = (races: Race[]) => {
  let prev = 0
  let race = races[0].name;
  const totalWeight = races.reduce((sum, r) => sum += r.weight, 0);
  const roll = Math.random() * totalWeight;

  races.map(r => {
    if (roll > prev && roll <= prev + r.weight) {
      race = r.name;
    }
    prev += r.weight;
  });

  return race;
};

// other style: root-on/in/upon-root
const getTown = () => {

  // find population
  // split up demographics
  // build name
  // industry?
  let demographicGroups;

  const droll = Math.random() * 10;

  if (droll <= 5) {
    demographicGroups = 1;
  } else if (droll > 5 && droll <= 8) {
    demographicGroups = 2;
  } else if (droll > 8 && droll <= 9 ) {
    demographicGroups = 3;
  } else if (droll > 9 && droll <= 9.5 ) {
    demographicGroups = 4;
  } else {
    demographicGroups = 5;
  }

  // const roll = Math.random() * totalWeight;
  const demographics : Component[] = []

  let chosen: string[] = []; // keep track of rolls so a race isn't counted as two separete demographic groups

  for (let i=0; i<demographicGroups; i++) {
    let race: string;
    let rarity = Math.floor(Math.random() * 20+1);
    
    if ( rarity <= 16 ) {
      race = chooseRaceByWeight(commonRaces.filter(r => !chosen.includes(r.name)));
      chosen.push(race);
    } else if ( rarity <= 19 ) {
      race = chooseRaceByWeight(uncommonRaces.filter(r => !chosen.includes(r.name)));
      chosen.push(race);
    } else {
      race = chooseRaceByWeight(veryUncommonRaces.filter(r => !chosen.includes(r.name)));
      chosen.push(race);
    }
    let percentage: number = 1;

    switch (demographicGroups) {
      case 1:
        percentage = 1;
        break;
      case 2:
        {
          if (i == 0) {
            percentage = .8;
          } else if (i == 1) {
            percentage = .2;
          }
        }
        break;
      case 3:
        if (i == 0) {
          percentage = .7;
        } else if (i == 1) {
          percentage = .2;
        } else if (i == 2) {
          percentage = .1;
        }
        break;
      case 4:
        if (i == 0) {
          percentage = .6;
        } else if (i == 1) {
          percentage = .2;
        } else if (i == 2) {
          percentage = .1;
        } else if (i == 3) {
          percentage = .1;
        }
        break;
      case 5:
        if (i == 0) {
          percentage = .4;
        } else if (i == 1) {
          percentage = .2;
        } else if (i == 2) {
          percentage = .2;
        } else if (i == 3) {
          percentage = .1;
        } else if (i == 4) {
          percentage = .1;
        }
        break;
      default:
        percentage = .2;
        break;
    }
    // const percentage = (1 / demographicGroups ) - i/2 + i
    console.log(race);
    demographics.push({ name: race, percentage});
  }

  
  // const demographics = 1; // 1, 2, 3, 4, 5... way split, weighted heavily towards 1 or 2
  const root = roots[Math.floor(Math.random()*roots.length)];
  const suffix = suffixes[Math.floor(Math.random()*suffixes.length)];

  const name = `${root[0].toUpperCase() + root.slice(1, root.length)}${suffix}`;
  
  // console.log("total of weights is:", totalWeight);

  let size = Math.random()*5;

  let population = Math.random()*500000;
  // let halfsies = Math.floor(population/10);

  let townType: TownSize = "hamlet"

  if (size < 1) {
    // hamlet
    population = 50;
    townType = "hamlet";
  } else if (size > 1 && size < 2) {
    // village
    population = 500;
    townType = "village";
  } else if (size > 2 && size < 3) {
    // town
    population = 1000;
    townType = "town";
  } else if ( size > 3 && size < 4) {
    // city
    population = 10000;
    townType = "city";
  } else {
    population = 100000;
    townType = "large city";
  }

  let industry;
  if (["hamlet", "village"].includes(townType)) {
    industry = smallTownIndustries[Math.floor(Math.random() * smallTownIndustries.length)];
  } else if (townType === "town") {
    industry = mediumLargeTownIndustries[Math.floor(Math.random() * mediumLargeTownIndustries.length)];
  } else {
    industry = [];
    const index1 = Math.floor(Math.random() * mediumLargeTownIndustries.length)
    let index2 = Math.floor(Math.random() * mediumLargeTownIndustries.length);
    while (index2 === index1) {
      index2 = Math.floor(Math.random() * mediumLargeTownIndustries.length)
    }
    industry.push(mediumLargeTownIndustries[index1]);
    industry.push(mediumLargeTownIndustries[index2])
  }

  let halfsies = Math.floor(population / 2);
  const multiplier = Math.floor(Math.random()*9+1);
  population *= multiplier;


  if (Math.random() > .5) { 
    population += halfsies;
  }
  console.log(population)
  const town: Settlement = {
    name: name, 
    size: townType,
    demographics,
    industry: industry,
    population: population,
  }

  return town;
}

const exports = { getTown }
export default exports;
