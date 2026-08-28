__d(
  "AdsBusinessConstraintsAccountControlInfoDataLoader",
  ["AdsGraphAPI"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("AdsGraphAPI")
        .get(i.id)
        .adaccount(e)
        .edge("account_controls")
        .get();
    }
    function s(e, t) {
      return o("AdsGraphAPI")
        .get(i.id)
        .adaccount(e)
        .edge("account_controls")
        .post(t);
    }
    ((l.loadAccountControlInfoForAccount = e),
      (l.updateAccountControlInfoForAccount = s));
  },
  98,
);
