__d(
  "SimplePageLoadLogger",
  ["ODS", "performance"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u() {
      (s || (s = o("ODS"))).bumpEntityKey(1678, "www_client_navigations", c());
    }
    function c() {
      if (
        (e || (e = r("performance"))).navigation == null ||
        (e || (e = r("performance"))).navigation.type == null
      )
        return "UNSUPPORTED";
      switch ((e || (e = r("performance"))).navigation.type) {
        case (e || (e = r("performance"))).navigation.TYPE_NAVIGATE:
          return "NAVIGATE";
        case (e || (e = r("performance"))).navigation.TYPE_RELOAD:
          return "RELOAD";
        case (e || (e = r("performance"))).navigation.TYPE_BACK_FORWARD:
          return "BACK_FORWARD";
        case (e || (e = r("performance"))).navigation.TYPE_RESERVED:
          return "RESERVED";
        default:
          return "UNKNOWN";
      }
    }
    l.logPageNavigationType = u;
  },
  98,
);
