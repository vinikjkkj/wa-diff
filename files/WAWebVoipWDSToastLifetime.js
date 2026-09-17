__d(
  "WAWebVoipWDSToastLifetime",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 4e3,
      l = 7e3,
      s = 75,
      u = 650;
    function c(t) {
      var n = String(t).length >= s ? l : e;
      return n + u;
    }
    i.getWDSToastLifetimeMs = c;
  },
  66,
);
