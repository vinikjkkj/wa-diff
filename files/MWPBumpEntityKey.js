__d(
  "MWPBumpEntityKey",
  ["CurrentAppID", "ODS"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n) {
      (e || (e = o("ODS"))).bumpEntityKey(3185, t, n);
    }
    function u(e, t) {
      var n = o("CurrentAppID").getAppID(),
        r = n == null ? "unknown" : n;
      return s(e, t + "." + r);
    }
    ((l.bumpEntityKey = s), (l.bumpEntityKeyWithAppId = u));
  },
  98,
);
