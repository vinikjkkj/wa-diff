__d(
  "adsTargetingLocationGetKeys",
  ["LocationConstants", "adsTargetingLocationGetCustomLocationKey"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (t === "countries") {
        var n,
          a = (n = e[o("LocationConstants").COUNTRIES]) != null ? n : [];
        return [].concat(a);
      } else if (t === o("LocationConstants").CUSTOM_LOCATIONS) {
        var i,
          l = (i = e[o("LocationConstants").CUSTOM_LOCATIONS]) != null ? i : [];
        return l.map(r("adsTargetingLocationGetCustomLocationKey"));
      } else {
        var s,
          u = (s = e[t]) != null ? s : [];
        return u.map(function (e) {
          return typeof e == "string" ? e : String(e.key);
        });
      }
    }
    l.default = e;
  },
  98,
);
