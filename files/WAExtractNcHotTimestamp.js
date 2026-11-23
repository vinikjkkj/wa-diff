__d(
  "WAExtractNcHotTimestamp",
  ["WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e == null) return null;
      var t = s(e);
      if (t.has("_nc_hot")) {
        var n = parseInt(String(t.get("_nc_hot")), 10);
        return Number.isInteger(n) ? o("WATimeUtils").castToUnixTime(n) : null;
      } else return null;
    }
    function s(e) {
      var t = e.split("?");
      return new URLSearchParams(t.length === 2 ? t[1] : "");
    }
    l.extractNcHotTimestamp = e;
  },
  98,
);
