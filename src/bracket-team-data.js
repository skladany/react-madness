/* TopLeft:
Round1: 0-15
Round2: 16-23
Round3: 24-27
Round4: 28-19
FinalFour: 30 */

const bracket = {
  roundOne: {
    topLeft: [
      {
        teamA: "rutgers",
        teamB: "uPenn",
        winner: false
      },
      {
        teamA: "uPenn",
        teamB: "american",
        winner: false
      }
    ],
    bottomLeft: [
      {
        teamA: "syracuse",
        teamB: "uconn",
        winner: false
      },
      {
        teamA: "nyu",
        teamB: "xavier",
        winner: false
      }
    ]
  },
  roundTwo: {
    topLeft: [
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
    ]
  },
  roundThree: {
    topLeft: [
      {
        teamA: false,
        teamB: false,
        winner: false
      }
    ]
  }
};

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
