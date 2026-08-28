__d(
  "AdsLeadGenSmartDefaultUtils",
  ["AdsInterfacesRouter", "AdsPromotedObjectTypes", "castToEnum"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = r("AdsInterfacesRouter").get(),
        t = e.getTypedParams(),
        n = t.conversion_location,
        o = t.nav_source,
        a = r("castToEnum")(n, r("AdsPromotedObjectTypes"));
      return a
        ? { conversion_location: a, source: o != null ? o : "syd_guidance_hub" }
        : null;
    }
    l.getDefaultFromPfrSource = e;
  },
  98,
);
