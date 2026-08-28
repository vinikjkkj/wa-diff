__d(
  "AdsUserOSUtils",
  ["AppAdsConfig.experimental", "isFalsey"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (r("isFalsey")(e))
        return { os: null, min_version: null, max_version: null };
      var t = e.split("_ver_")[0],
        n = e.replace("_and_above", "").split("_ver_")[1],
        o = n ? n.split("_to_")[0] : null,
        a = n ? n.split("_to_")[1] : null;
      return { os: t, min_version: o || null, max_version: a || null };
    }
    function s(e, t, n) {
      return r("isFalsey")(t)
        ? e
        : r("isFalsey")(n)
          ? e + "_ver_" + t + "_and_above"
          : e + "_ver_" + t + "_to_" + n;
    }
    function u(e) {
      var t = r("AppAdsConfig.experimental").mobileOsVersionNames,
        n = Object.keys(t[e]),
        o = s(e, n[0]);
      return o;
    }
    ((l.splitUserOS = e),
      (l.toUserOSString = s),
      (l.getOSLowestMinVersion = u));
  },
  98,
);
