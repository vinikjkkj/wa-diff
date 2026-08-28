__d(
  "adsMgmtNeedToLoadAllFilteredIDsSelector",
  [
    "AdsPENavSectionToSelectionSelectorMap",
    "adsCreateSelector",
    "adsCreateThunkSelector",
    "adsMgmtTrayStateSelector",
    "adsPEManageAdsSectionSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateThunkSelector")(r("adsPEManageAdsSectionSelector")),
      s = r("adsCreateSelector")(
        [r("adsMgmtTrayStateSelector"), e],
        function (t, n) {
          var e = !!t;
          if (!e) return !1;
          var r = n(),
            a = o("AdsPENavSectionToSelectionSelectorMap").selectedIDsSelector(
              r,
            );
          return a.length === 0;
        },
        { name: i.id + ".needToLoadAllFilteredIDsSelector" },
      ),
      u = s;
    l.default = u;
  },
  98,
);
