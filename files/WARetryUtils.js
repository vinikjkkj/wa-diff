__d(
  "WARetryUtils",
  ["WARandomJitter"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e
        ? {
            algo: {
              backoff: { first: 1, second: 1, type: "fibonacci" },
              toMs: function (t) {
                return (1 + t) * 1e3 + o("WARandomJitter").getRandomJitter();
              },
              type: "adjust",
            },
            relativeDelay: !0,
            max: 6e5,
          }
        : {
            algo: {
              type: "adjust",
              backoff: { type: "fibonacci", first: 1, second: 1 },
              toMs: function (t) {
                return (9 + t) * 1e3;
              },
            },
            max: 62e4,
          };
    }
    l.fibonacciBackoff = e;
  },
  98,
);
