__d(
  "adsMgmtAdgroupSelectionSelector",
  [
    "AdsMgmtAdgroupSelectionProvider",
    "adsCreateSelector",
    "adsMgmtAdgroupSelectionSelectorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsMgmtAdgroupSelectionProvider").toFluxSelector(),
      s = r("adsCreateSelector")(
        [e],
        function (t) {
          var e = t.selection;
          return o(
            "adsMgmtAdgroupSelectionSelectorUtils",
          ).adsMgmtAdgroupSelection({ selection: e });
        },
        { name: i.id },
      );
    l.default = s;
  },
  98,
);
