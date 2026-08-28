__d(
  "advertiserProfileScopeIDsSelector",
  ["AdsAccountStore", "CurrentUser", "adsCreateSelector", "isTruthy"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [r("AdsAccountStore").getSelectedAccountID],
      function (t) {
        return s(t);
      },
      { name: i.id + ".advertiserProfileScopeIDsSelector" },
    );
    function s(e) {
      var t = r("CurrentUser").getID(),
        n = {};
      return (
        r("isTruthy")(e) && (n.ad_account = e),
        r("isTruthy")(t) && (n.user = t),
        n
      );
    }
    ((l.advertiserProfileScopeIDsSelector = e),
      (l.advertiserProfileScopeIDsLogic = s));
  },
  98,
);
