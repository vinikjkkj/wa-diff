__d(
  "adObjectIDsForSelectionBranchSelector",
  [
    "AdsEditorSelectors",
    "adsCreateBranchSelector",
    "adsPECrepeIsPackageSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateBranchSelector")(
      r("adsPECrepeIsPackageSelector"),
      o("AdsEditorSelectors").getAdObjectIDsForSelectionCrepeSelector,
      o("AdsEditorSelectors").getAdObjectIDsForSelectionSelector,
    );
    l.default = e;
  },
  98,
);
