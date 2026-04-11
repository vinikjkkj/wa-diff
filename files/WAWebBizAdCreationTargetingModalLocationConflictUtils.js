__d(
  "WAWebBizAdCreationTargetingModalLocationConflictUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = e.countryCode,
        r = e.isWorldwide,
        o = e.key,
        a = e.regionId,
        i = e.type,
        l = t.countryCode,
        s = t.isWorldwide,
        u = t.key,
        c = t.regionId,
        d = t.type;
      return (
        r === !0 ||
        s === !0 ||
        (i === "COUNTRY" && o === l) ||
        (d === "COUNTRY" && u === n) ||
        (i === "REGION" && o === c) ||
        (d === "REGION" && u === a) ||
        (i === "CUSTOM_LOCATION" && d === "COUNTRY") ||
        (i === "COUNTRY" && d === "CUSTOM_LOCATION")
      );
    }
    function l(t, n) {
      return t.filter(function (t) {
        return e(t, n);
      });
    }
    i.findConflictingLocations = l;
  },
  66,
);
