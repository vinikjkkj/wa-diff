__d(
  "AdsALSubsurface",
  ["AdsObjectTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        ((e = {}),
        (e[r("AdsObjectTypes").CAMPAIGN_GROUP] = "campaign"),
        (e[r("AdsObjectTypes").CAMPAIGN] = "adset"),
        (e[r("AdsObjectTypes").ADGROUP] = "ad"),
        e);
    function u(e, t) {
      return e + ":" + t;
    }
    function c(e) {
      var t;
      if (e != null) return (t = s[e]) != null ? t : e.toLowerCase();
    }
    function d(e) {
      return e;
    }
    function m(e) {
      return e == null ? "" : e;
    }
    ((l.getFullSurfaceString = u),
      (l.getAdsObjectTypeSubsurface = c),
      (l.getAdObjectLevelSubsurface = d),
      (l.getDynamicSubsurface = m));
  },
  98,
);
