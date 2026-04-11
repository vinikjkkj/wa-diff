__d(
  "convertToViewabilityPercentage",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e >= 0.99
        ? 100
        : e >= 0.75
          ? 75
          : e >= 0.5
            ? 50
            : e >= 0.25
              ? 25
              : e >= 0
                ? 0
                : -2;
    }
    i.default = e;
  },
  66,
);
