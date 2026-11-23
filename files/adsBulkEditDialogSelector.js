__d(
  "adsBulkEditDialogSelector",
  [
    "AdsObjectLevelToBulkEditStore",
    "adsBulkEditLevelSelector",
    "adsCreateStoreSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        [].concat(
          r("adsBulkEditLevelSelector").getStores(),
          Array.from(r("AdsObjectLevelToBulkEditStore").values()),
        ),
        function () {
          var e,
            t = r("adsBulkEditLevelSelector")(),
            n =
              (e = r("AdsObjectLevelToBulkEditStore").get(t)) == null
                ? void 0
                : e.getState().dialogType;
          return { dialogType: n, level: t };
        },
        { name: i.id },
      ),
      s = e;
    l.default = s;
  },
  98,
);
