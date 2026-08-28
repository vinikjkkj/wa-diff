__d(
  "adsMgmtPinnedAdObjectIDsExperimentSelector",
  [
    "AdsPinnedRowsProvider",
    "adsCreateSelector",
    "adsUEditorAccountIDSelector",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorAccountIDSelector"),
          r("AdsPinnedRowsProvider").toFluxSelector(),
        ],
        function (t, n) {
          var e;
          return (e = n.get(t)) != null ? e : r("immutable").Set();
        },
        { name: i.id + ".adsMgmtPinnedAdObjectIDsExperimentSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
