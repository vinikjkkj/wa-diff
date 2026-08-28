__d(
  "adsEventsManagerMaybeDataSourceIDSelector",
  ["AdsEventsManagerURLProvider", "adsCreateSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsEventsManagerURLProvider").toFluxSelector(),
      s = r("adsCreateSelector")(
        [e],
        function (t) {
          return t.params.dataSourceID;
        },
        { name: i.id + ".adsEventsManagerMaybeDataSourceIDSelector" },
      ),
      u = s;
    l.default = u;
  },
  98,
);
