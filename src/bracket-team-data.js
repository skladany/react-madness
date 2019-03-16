const bracket = {
  topLeft: {
    0: [
      {
        teamA: "rutgers",
        teamB: "fordham",
        winner: false
      },
      {
        teamA: "american",
        teamB: "uPenn",
        winner: false
      },
      {
        teamA: "syracuse",
        teamB: "uConn",
        winner: false
      },
      {
        teamA: "nyu",
        teamB: "xavier",
        winner: false
      },
      {
        teamA: "rutgers",
        teamB: "fordham",
        winner: false
      },
      {
        teamA: "american",
        teamB: "uPenn",
        winner: false
      },
      {
        teamA: "syracuse",
        teamB: "uConn",
        winner: false
      },
      {
        teamA: "nyu",
        teamB: "xavier",
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
  uConn: {
    name: "U Conn",
    slug: "uConn",
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
