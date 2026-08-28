__d(
  "KFColorUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return (
        "rgba(" +
        Math.floor(e[0]) +
        "," +
        Math.floor(e[1]) +
        "," +
        Math.floor(e[2]) +
        "," +
        Math.floor(e[3]) / 255 +
        ")"
      );
    }
    function l(e) {
      return [e.red, e.green, e.blue, e.alpha];
    }
    ((i.getRGBAString = e), (i.kf2ColorToKF3Color = l));
  },
  66,
);
