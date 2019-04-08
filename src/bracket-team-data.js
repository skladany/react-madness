/* 2019 Bracket & Seeds */

const bracket = {
  east: {
    0: [
      {
        teamA: "Duke",
        teamB: "NorthDakotaState",
        winner: false
      },
      {
        teamA: "VirginiaCommonwealth",
        teamB: "CentralFlorida",
        winner: false
      },
      {
        teamA: "MississippiState",
        teamB: "Liberty",
        winner: false
      },
      {
        teamA: "VirginiaTech",
        teamB: "SaintLouis",
        winner: false
      },
      {
        teamA: "Maryland",
        teamB: "Belmont",
        winner: false
      },
      {
        teamA: "LouisianaState",
        teamB: "Yale",
        winner: false
      },
      {
        teamA: "Louisville",
        teamB: "Minnesota",
        winner: false
      },
      {
        teamA: "MichiganState",
        teamB: "Bradley",
        winner: false
      }
    ],
    1: [
      {
        teamA: false,
        teamB: false,
        winner: false
      },
      {
        teamA: false,
        teamB: false,
        winner: false
      },
      {
        teamA: false,
        teamB: false,
        winner: false
      },
      {
        teamA: false,
        teamB: false,
        winner: false
      }
    ],
    2: [
      {
        teamA: false,
        teamB: false,
        winner: false
      },
      {
        teamA: false,
        teamB: false,
        winner: false
      }
    ],
    3: [
      {
        teamA: false,
        teamB: false,
        winner: false
      }
    ],
    4: [
      {
        teamA: false,
        teamB: false,
        winner: false
      }
    ]
  },
  west: {
    0: [
      {
        teamA: "Gonzaga",
        teamB: "FairleighDickinson",
        winner: false
      },
      {
        teamA: "Syracuse",
        teamB: "Baylor",
        winner: false
      },
      {
        teamA: "Marquette",
        teamB: "MurrayState",
        winner: false
      },
      {
        teamA: "FloridaState",
        teamB: "Vermont",
        winner: false
      },
      {
        teamA: "Buffalo",
        teamB: "ArizonaState",
        winner: false
      },
      {
        teamA: "TexasTech",
        teamB: "NorthernKentucky",
        winner: false
      },
      {
        teamA: "Nevada",
        teamB: "Florida",
        winner: false
      },
      {
        teamA: "Michigan",
        teamB: "Montana",
        winner: false
      }
    ],
    1: [
      {
        teamA: false,
        teamB: false,
        winner: false
      },
      {
        teamA: false,
        teamB: false,
        winner: false
      },
      {
        teamA: false,
        teamB: false,
        winner: false
      },
      {
        teamA: false,
        teamB: false,
        winner: false
      }
    ],
    2: [
      {
        teamA: false,
        teamB: false,
        winner: false
      },
      {
        teamA: false,
        teamB: false,
        winner: false
      }
    ],
    3: [
      {
        teamA: false,
        teamB: false,
        winner: false
      }
    ],
    4: [
      {
        teamA: false,
        teamB: false,
        winner: false
      }
    ]
  },
  south: {
    0: [
      {
        teamA: "Virginia",
        teamB: "GardnerWebb",
        winner: false
      },
      {
        teamA: "Mississippi",
        teamB: "Oklahoma",
        winner: false
      },
      {
        teamA: "Wisconsin",
        teamB: "Oregon",
        winner: false
      },
      {
        teamA: "KansasState",
        teamB: "UcIrvine",
        winner: false
      },
      {
        teamA: "Villanova",
        teamB: "SaintMarysCa",
        winner: false
      },
      {
        teamA: "Purdue",
        teamB: "OldDominion",
        winner: false
      },
      {
        teamA: "Cincinnati",
        teamB: "Iowa",
        winner: false
      },
      {
        teamA: "Tennessee",
        teamB: "Colgate",
        winner: false
      }
    ],
    1: [
      {
        teamA: false,
        teamB: false,
        winner: false
      },
      {
        teamA: false,
        teamB: false,
        winner: false
      },
      {
        teamA: false,
        teamB: false,
        winner: false
      },
      {
        teamA: false,
        teamB: false,
        winner: false
      }
    ],
    2: [
      {
        teamA: false,
        teamB: false,
        winner: false
      },
      {
        teamA: false,
        teamB: false,
        winner: false
      }
    ],
    3: [
      {
        teamA: false,
        teamB: false,
        winner: false
      }
    ],
    4: [
      {
        teamA: false,
        teamB: false,
        winner: false
      }
    ]
  },
  midwest: {
    0: [
      {
        teamA: "NorthCarolina",
        teamB: "Iona",
        winner: false
      },
      {
        teamA: "UtahState",
        teamB: "Washington",
        winner: false
      },
      {
        teamA: "Auburn",
        teamB: "NewMexicoState",
        winner: false
      },
      {
        teamA: "Kansas",
        teamB: "Northeastern",
        winner: false
      },
      {
        teamA: "IowaState",
        teamB: "OhioState",
        winner: false
      },
      {
        teamA: "Houston",
        teamB: "GeorgiaState",
        winner: false
      },
      {
        teamA: "Wofford",
        teamB: "SetonHall",
        winner: false
      },
      {
        teamA: "Kentucky",
        teamB: "AbileneChristian",
        winner: false
      }
    ],
    1: [
      {
        teamA: false,
        teamB: false,
        winner: false
      },
      {
        teamA: false,
        teamB: false,
        winner: false
      },
      {
        teamA: false,
        teamB: false,
        winner: false
      },
      {
        teamA: false,
        teamB: false,
        winner: false
      }
    ],
    2: [
      {
        teamA: false,
        teamB: false,
        winner: false
      },
      {
        teamA: false,
        teamB: false,
        winner: false
      }
    ],
    3: [
      {
        teamA: false,
        teamB: false,
        winner: false
      }
    ],
    4: [
      {
        teamA: false,
        teamB: false,
        winner: false
      }
    ]
  }
};

/* Seeds */
const teams = {
  Duke: {
    name: "Duke",
    slug: "Duke",
    seed: 1
  },
  MichiganState: {
    name: "Michigan State",
    slug: "MichiganState",
    seed: 2
  },
  LouisianaState: {
    name: "Louisiana State",
    slug: "LouisianaState",
    seed: 3
  },
  VirginiaTech: {
    name: "Virginia Tech",
    slug: "VirginiaTech",
    seed: 4
  },
  MississippiState: {
    name: "Mississippi State",
    slug: "MississippiState",
    seed: 5
  },
  Maryland: {
    name: "Maryland",
    slug: "Maryland",
    seed: 6
  },
  Louisville: {
    name: "Louisville",
    slug: "Louisville",
    seed: 7
  },
  VirginiaCommonwealth: {
    name: "Virginia Commonwealth",
    slug: "VirginiaCommonwealth",
    seed: 8
  },
  CentralFlorida: {
    name: "Central Florida",
    slug: "CentralFlorida",
    seed: 9
  },
  Minnesota: {
    name: "Minnesota",
    slug: "Minnesota",
    seed: 10
  },
  Belmont: {
    name: "Belmont",
    slug: "Belmont",
    seed: 11
  },
  Liberty: {
    name: "Liberty",
    slug: "Liberty",
    seed: 12
  },
  SaintLouis: {
    name: "Saint Louis",
    slug: "SaintLouis",
    seed: 13
  },
  Yale: {
    name: "Yale",
    slug: "Yale",
    seed: 14
  },
  Bradley: {
    name: "Bradley",
    slug: "Bradley",
    seed: 15
  },
  NorthDakotaState: {
    name: "North Dakota State",
    slug: "NorthDakotaState",
    seed: 16
  },
  NorthCarolina: {
    name: "North Carolina",
    slug: "NorthCarolina",
    seed: 1
  },
  Kentucky: {
    name: "Kentucky",
    slug: "Kentucky",
    seed: 2
  },
  Houston: {
    name: "Houston",
    slug: "Houston",
    seed: 3
  },
  Kansas: {
    name: "Kansas",
    slug: "Kansas",
    seed: 4
  },
  Auburn: {
    name: "Auburn",
    slug: "Auburn",
    seed: 5
  },
  IowaState: {
    name: "Iowa State",
    slug: "IowaState",
    seed: 6
  },
  Wofford: {
    name: "Wofford",
    slug: "Wofford",
    seed: 7
  },
  UtahState: {
    name: "Utah State",
    slug: "UtahState",
    seed: 8
  },
  Washington: {
    name: "Washington",
    slug: "Washington",
    seed: 9
  },
  SetonHall: {
    name: "Seton Hall",
    slug: "SetonHall",
    seed: 10
  },
  OhioState: {
    name: "Ohio State",
    slug: "OhioState",
    seed: 11
  },
  NewMexicoState: {
    name: "New Mexico State",
    slug: "NewMexicoState",
    seed: 12
  },
  Northeastern: {
    name: "Northeastern",
    slug: "Northeastern",
    seed: 13
  },
  GeorgiaState: {
    name: "Georgia State",
    slug: "GeorgiaState",
    seed: 14
  },
  AbileneChristian: {
    name: "Abilene Christian",
    slug: "AbileneChristian",
    seed: 15
  },
  Iona: {
    name: "Iona",
    slug: "Iona",
    seed: 16
  },
  Virginia: {
    name: "Virginia",
    slug: "Virginia",
    seed: 1
  },
  Tennessee: {
    name: "Tennessee",
    slug: "Tennessee",
    seed: 2
  },
  Purdue: {
    name: "Purdue",
    slug: "Purdue",
    seed: 3
  },
  KansasState: {
    name: "Kansas State",
    slug: "KansasState",
    seed: 4
  },
  Wisconsin: {
    name: "Wisconsin",
    slug: "Wisconsin",
    seed: 5
  },
  Villanova: {
    name: "Villanova",
    slug: "Villanova",
    seed: 6
  },
  Cincinnati: {
    name: "Cincinnati",
    slug: "Cincinnati",
    seed: 7
  },
  Mississippi: {
    name: "Mississippi",
    slug: "Mississippi",
    seed: 8
  },
  Oklahoma: {
    name: "Oklahoma",
    slug: "Oklahoma",
    seed: 9
  },
  Iowa: {
    name: "Iowa",
    slug: "Iowa",
    seed: 10
  },
  SaintMarysCa: {
    name: "Saint Mary's (CA)",
    slug: "SaintMarysCa",
    seed: 11
  },
  Oregon: {
    name: "Oregon",
    slug: "Oregon",
    seed: 12
  },
  UcIrvine: {
    name: "UC-Irvine",
    slug: "UcIrvine",
    seed: 13
  },
  OldDominion: {
    name: "Old Dominion",
    slug: "OldDominion",
    seed: 14
  },
  Colgate: {
    name: "Colgate",
    slug: "Colgate",
    seed: 15
  },
  GardnerWebb: {
    name: "Gardner-Webb",
    slug: "GardnerWebb",
    seed: 16
  },
  Gonzaga: {
    name: "Gonzaga",
    slug: "Gonzaga",
    seed: 1
  },
  Michigan: {
    name: "Michigan",
    slug: "Michigan",
    seed: 2
  },
  TexasTech: {
    name: "Texas Tech",
    slug: "TexasTech",
    seed: 3
  },
  FloridaState: {
    name: "Florida State",
    slug: "FloridaState",
    seed: 4
  },
  Marquette: {
    name: "Marquette",
    slug: "Marquette",
    seed: 5
  },
  Buffalo: {
    name: "Buffalo",
    slug: "Buffalo",
    seed: 6
  },
  Nevada: {
    name: "Nevada",
    slug: "Nevada",
    seed: 7
  },
  Syracuse: {
    name: "Syracuse",
    slug: "Syracuse",
    seed: 8
  },
  Baylor: {
    name: "Baylor",
    slug: "Baylor",
    seed: 9
  },
  Florida: {
    name: "Florida",
    slug: "Florida",
    seed: 10
  },
  ArizonaState: {
    name: "Arizona State",
    slug: "ArizonaState",
    seed: 11
  },
  MurrayState: {
    name: "Murray State",
    slug: "MurrayState",
    seed: 12
  },
  Vermont: {
    name: "Vermont",
    slug: "Vermont",
    seed: 13
  },
  NorthernKentucky: {
    name: "Northern Kentucky",
    slug: "NorthernKentucky",
    seed: 14
  },
  Montana: {
    name: "Montana",
    slug: "Montana",
    seed: 15
  },
  FairleighDickinson: {
    name: "Fairleigh Dickinson",
    slug: "FairleighDickinson",
    seed: 16
  }
};

export { bracket, teams };
