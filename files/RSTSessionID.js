__d(
  "RSTSessionID",
  ["Env", "uuidv4"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = null;
    function u() {
      if (s != null) return s;
      var t =
          (e || (e = r("Env"))).brsid != null
            ? "" + (e || (e = r("Env"))).brsid
            : r("uuidv4")(),
        n = "rst-" + Date.now();
      return ((s = n + "-" + t), s);
    }
    l.getSessionID = u;
  },
  98,
);
