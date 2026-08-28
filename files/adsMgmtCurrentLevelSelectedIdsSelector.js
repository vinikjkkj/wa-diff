__d(
  "adsMgmtCurrentLevelSelectedIdsSelector",
  [
    "AdsEditorSelectedIDsSelector",
    "AdsObjectTypeUtils",
    "AdsSelectionLevelSelectors",
    "adsCreateStoreSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        [].concat(
          o("AdsSelectionLevelSelectors").adsEditorLevelSelector.getStores(),
          o(
            "AdsEditorSelectedIDsSelector",
          ).AdsEditorSelectedIDsSelector.getStores(),
        ),
        function () {
          var e = o("AdsObjectTypeUtils").getAdLevelFromObjectLevel(
            o("AdsSelectionLevelSelectors").adsEditorLevelSelector(),
          );
          return e
            ? o("AdsEditorSelectedIDsSelector").AdsEditorSelectedIDsSelector(e)
            : [];
        },
        { name: i.id + ".adsMgmtCurrentLevelSelectedIdsSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
