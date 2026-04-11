__d(
  "LWICometTargetingAgeRangeUtils",
  ["LWICometPAOYouthMessageCard.react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 65;
    function s(t, n, r) {
      return (
        r === void 0 && (r = e),
        t != null ? Math.min(t[1], n != null ? n : r) : n != null ? n : r
      );
    }
    function u(e, t, n) {
      return e != null ? Math.max(e[0], t != null ? t : n) : t != null ? t : n;
    }
    function c(e, t) {
      return e != null ? (t != null ? Math.max(e[0], t) : e[0]) : t;
    }
    function d(e, t, n) {
      return t < n
        ? o("LWICometPAOYouthMessageCard.react").PAOYouthMessageVariant
            .YOUTH_ONLY
        : e < n
          ? o("LWICometPAOYouthMessageCard.react").PAOYouthMessageVariant
              .MIXED_AUDIENCE
          : o("LWICometPAOYouthMessageCard.react").PAOYouthMessageVariant
              .YOUTH_CONTENT;
    }
    ((l.MAX_AGE = e),
      (l.getSpecMaxOrDefaultAge = s),
      (l.getSpecMinOrDefaultAge = u),
      (l.getSpecMinTargetingAge = c),
      (l.getPAOBasicContentVariant = d));
  },
  98,
);
