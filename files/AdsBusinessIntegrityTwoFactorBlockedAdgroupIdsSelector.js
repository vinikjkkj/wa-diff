__d(
  "AdsBusinessIntegrityTwoFactorBlockedAdgroupIdsSelector",
  [
    "AdsAccountStore",
    "AdsBusinessIntegrityTwoFactorBlockedAdgroupIdsProvider",
    "LoadObject",
    "adsCreateSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [
        r("AdsAccountStore").getSelectedAccount,
        r(
          "AdsBusinessIntegrityTwoFactorBlockedAdgroupIdsProvider",
        ).toFluxSelector(),
      ],
      function (t, n) {
        var e = t.getValue();
        return e == null
          ? r("LoadObject").withValue([], { creatorModuleID: i.id })
          : n.get(e.account_id);
      },
      { name: i.id },
    );
    l.default = e;
  },
  98,
);
