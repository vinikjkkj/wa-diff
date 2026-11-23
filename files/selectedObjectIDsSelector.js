__d(
  "selectedObjectIDsSelector",
  ["AdsPEDerivedSelectionStore", "adsCreateStoreThunkSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreThunkSelector")(
      r("AdsPEDerivedSelectionStore"),
      function (e) {
        return r("AdsPEDerivedSelectionStore").get(e);
      },
    );
    l.default = e;
  },
  98,
);
