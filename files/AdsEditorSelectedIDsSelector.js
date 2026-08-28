__d(
  "AdsEditorSelectedIDsSelector",
  [
    "AdsPEDerivedSelectionStore",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "bulkEditSelectedIDsThunkSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        [r("AdsPEDerivedSelectionStore")],
        function (t) {
          return t == null ? [] : r("AdsPEDerivedSelectionStore").get(t);
        },
        { name: i.id + ".getTableViewSelectedIDsSelector" },
      ),
      s = r("adsCreateSelector")(
        [e, r("bulkEditSelectedIDsThunkSelector")],
        function (t, n) {
          return n().size > 0 ? n().toArray() : t;
        },
        { name: i.id + ".AdsEditorSelectedIDsSelector" },
      );
    l.AdsEditorSelectedIDsSelector = s;
  },
  98,
);
