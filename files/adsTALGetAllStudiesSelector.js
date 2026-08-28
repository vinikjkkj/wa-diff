__d(
  "adsTALGetAllStudiesSelector",
  [
    "AdStudiesProvider",
    "AdsLoadObjectUtils",
    "LoadObject",
    "adsCreateSelector",
    "adsLoadAllStudiesSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsLoadAllStudiesSelector"),
          r("AdStudiesProvider").toFluxSelector(),
        ],
        function (t, n) {
          if (t.isLoading())
            return r("LoadObject").loading({ creatorModuleID: i.id });
          var e = n.getData().valueSeq().toArray();
          return o("AdsLoadObjectUtils").all(e);
        },
        { name: i.id + ".adsTALGetAllStudiesSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
