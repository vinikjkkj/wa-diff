__d(
  "adsEventsManagerAccountIDSelector",
  ["AdsEventsManagerURLProvider", "adsCreateSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsEventsManagerURLProvider").toFluxSelector(),
      s = r("adsCreateSelector")(
        [e],
        function (t) {
          var e;
          return (e = t.params.accountID) != null ? e : null;
        },
        { name: i.id + ".adsEventsManagerAccountIDSelector" },
      ),
      u = s;
    l.default = u;
  },
  98,
);
