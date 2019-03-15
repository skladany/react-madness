/* TopLeft:
Round1: 0-15
Round2: 16-23
Round3: 24-27
Round4: 28-19
FinalFour: 30 */

const bracket = [
  {
    teamA: "rutgers",
    teamB: "uPenn",
    round: "one",
    division: "topLeft",
    id: "rutgers_uPenn",
    winner: false
  },
  {
    teamA: "uPenn",
    teamB: "american",
    round: "one",
    division: "topLeft",
    id: "uPenn_american",
    winner: false
  },
  {
    teamA: "syracuse",
    teamB: "uconn",
    round: "one",
    division: "topLeft",
    id: "syracuse_uconn",
    winner: false
  },
  {
    teamA: "nyu",
    teamB: "xavier",
    round: 1,
    division: "topLeft",
    id: "nyu_xavier",
    winner: false
  },
  {
    teamA: "rutgers",
    teamB: "uPenn",
    round: "one",
    division: "topLeft",
    id: "rutgers_uPenn",
    winner: false
  },
  {
    teamA: "uPenn",
    teamB: "american",
    round: "one",
    division: "topLeft",
    id: "uPenn_american",
    winner: false
  },
  {
    teamA: "syracuse",
    teamB: "uconn",
    round: "one",
    division: "topLeft",
    id: "syracuse_uconn",
    winner: false
  },
  {
    teamA: "nyu",
    teamB: "xavier",
    round: 1,
    division: "topLeft",
    id: "nyu_xavier",
    winner: false
  }
];

// const bracket = {
//   roundOne: {
//     topLeft: [
//       {
//         teamA: "rutgers",
//         teamB: "uPenn",
//         winner: false
//       },
//       {
//         teamA: "uPenn",
//         teamB: "american",
//         winner: false
//       }
//     ],
//     bottomLeft: [
//       {
//         teamA: "syracuse",
//         teamB: "uconn",
//         winner: false
//       },
//       {
//         teamA: "nyu",
//         teamB: "xavier",
//         winner: false
//       }
//     ]
//   },
//   roundTwo: {
//     topLeft: [
//       {
//         teamA: false,
//         teamB: false,
//         winner: false
//       },
//       {
//         teamA: false,
//         teamB: false,
//         winner: false
//       }
//     ]
//   },
//   roundThree: {
//     topLeft: [
//       {
//         teamA: false,
//         teamB: false,
//         winner: false
//       }
//     ]
//   }
// };

const teams = {
  rutgers: {
    name: "Rutgers",
    slug: "rutgers",
    seed: "1"
  },
  fordham: {
    name: "Fordham",
    slug: "fordham",
    seed: "2"
  },
  american: {
    name: "American",
    slug: "american",
    seed: "1"
  },
  uPenn: {
    name: "U Penn",
    slug: "uPenn",
    seed: "2"
  },
  syracuse: {
    name: "Syracuse",
    slug: "syracuse",
    seed: "1"
  },
  uconn: {
    name: "U Conn",
    slug: "uconn",
    seed: "2"
  },
  nyu: {
    name: "NYU",
    slug: "nyu",
    seed: "1"
  },
  xavier: {
    name: "Xavier",
    slug: "xavier",
    seed: "2"
  }
};

export { bracket, teams };
