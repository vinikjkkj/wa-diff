__d(
  "MAIBASuggestedAudience",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = { 1: [1], 2: [2], female: [2], male: [1], men: [1], women: [2] },
      l = new Set(["", "unknown"]);
    function s(e) {
      return e == null ? !1 : !l.has(e.toLowerCase().trim());
    }
    function u(t) {
      if (!s(t) || t == null) return null;
      var n = e[t.toLowerCase().trim()];
      return n != null && n.length > 0 ? n[0] : null;
    }
    function c(e) {
      if (e == null || e === "") return [];
      try {
        var t = JSON.parse(e);
        return Array.isArray(t) ? t : [];
      } catch (e) {
        return [];
      }
    }
    ((i.isGenderSpecified = s),
      (i.getNormalizedGenderId = u),
      (i.parseInterests = c));
  },
  66,
);
