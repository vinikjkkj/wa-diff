__d(
  "adsCallToActionShouldCacheCTAType",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("immutable").Set([
      "CALL_NOW",
      "GET_DIRECTIONS",
      "LEARN_MORE",
      "SEE_DETAILS",
    ]);
    function s(t) {
      return !!t && e.has(t);
    }
    l.default = s;
  },
  98,
);
