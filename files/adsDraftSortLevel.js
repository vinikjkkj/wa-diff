__d(
  "adsDraftSortLevel",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("immutable").Map(
        ((e = {}), (e.campaign = 0), (e.ad_set = 1), (e.ad = 2), e),
      );
    function u(e, t) {
      return s.get(e, NaN) - s.get(t, NaN);
    }
    l.default = u;
  },
  98,
);
