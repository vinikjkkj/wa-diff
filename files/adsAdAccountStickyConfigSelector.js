__d(
  "adsAdAccountStickyConfigSelector",
  ["AdsAccountStore", "AdsAdAccountSettingsStore"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = r("AdsAccountStore").getSelectedAccountID();
      return n == null
        ? null
        : (t = r("AdsAdAccountSettingsStore").get(n).getValue()) == null ||
            (t = t.aplusc_sticky_config) == null
          ? void 0
          : t[e];
    }
    l.getAPlusCAdAccountStickyEntryForSelectedAccount = e;
  },
  98,
);
