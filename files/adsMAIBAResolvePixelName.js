__d(
  "adsMAIBAResolvePixelName",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      if (e == null || e.length === 0) return null;
      for (var n of e)
        if (n !== "") {
          var r = t.get(n);
          if (r != null && r !== "") return r;
        }
      return null;
    }
    i.default = e;
  },
  66,
);
