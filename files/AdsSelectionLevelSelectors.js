__d(
  "AdsSelectionLevelSelectors",
  [
    "AdsPENavigationUtils",
    "adsCreateSelector",
    "adsPEManageAdsSectionSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsPEManageAdsSectionSelector")],
        function (t) {
          return r(
            "AdsPENavigationUtils",
          ).getAdObjectLevelFromNavSection_TO_BE_DEPRECATED(t);
        },
        { name: i.id + ".adsSelectionLevelSelector" },
      ),
      s = e;
    ((l.adsSelectionLevelSelector = e), (l.adsEditorLevelSelector = s));
  },
  98,
);
