__d(
  "WAAssertUnreachable",
  ["err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      throw r("err")(
        "Impossible value, the default statement should never be reached for value: " +
          e,
      );
    }
    l.default = e;
  },
  98,
);
