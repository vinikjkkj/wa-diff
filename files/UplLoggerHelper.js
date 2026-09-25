__d(
  "UplLoggerHelper",
  ["uuidv4"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return "upl_" + Date.now() + "_" + r("uuidv4")();
    }
    l.generateUplSessionId = e;
  },
  98,
);
