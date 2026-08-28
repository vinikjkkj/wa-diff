__d(
  "adsPECrepeIsPackageSelector",
  [
    "adsCreateSelector",
    "adsMgmtCurrentLevelSelectedIdsSelector",
    "adsPECrepePackageConfigForAdObjectIDSelector",
    "first",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsMgmtCurrentLevelSelectedIdsSelector"),
          r("adsPECrepePackageConfigForAdObjectIDSelector"),
        ],
        function (t, n) {
          var e;
          return (
            ((e = n({ objectID: r("first")(t) })) == null ? void 0 : e.id) !=
            null
          );
        },
        { name: i.id + ".adsPECrepeIsPackageSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
