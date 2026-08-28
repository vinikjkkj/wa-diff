__d(
  "adsDraftGetStatusFieldForLevel",
  ["invariant"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      var t = "";
      switch (e) {
        case "campaign":
          t = "status";
          break;
        case "ad_set":
          t = "status";
          break;
        case "ad":
          t = "status";
          break;
        default:
          s(0, 1676, e);
      }
      return t;
    }
    l.default = e;
  },
  98,
);
