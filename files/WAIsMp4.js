__d(
  "WAIsMp4",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e.length < 8
        ? !1
        : e[4] === 102 && e[5] === 116 && e[6] === 121 && e[7] === 112;
    }
    i.isMp4 = e;
  },
  66,
);
