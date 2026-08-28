__d(
  "adsHelpTrayCurrentContentCaseIDSelectorUtils",
  ["AdsHelpTrayNavigationHelper", "nullthrows"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("AdsHelpTrayNavigationHelper").getCurrentNavigationState(e);
      return t.contentType === "SUPPORT_CASE" ? r("nullthrows")(t.id) : "";
    }
    l.adsHelpTrayCurrentContentCaseID = e;
  },
  98,
);
