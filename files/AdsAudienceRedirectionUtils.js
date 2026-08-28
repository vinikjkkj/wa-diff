__d(
  "AdsAudienceRedirectionUtils",
  ["URI", "XAdsPEControllerRouteBuilder"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      var t = r("XAdsPEControllerRouteBuilder").buildUri({ tool: "AUDIENCES" });
      (e || (e = r("URI"))).goURIOnNewWindow(t);
    }
    l.openAudienceManager = s;
  },
  98,
);
