__d(
  "AdsUserSettingsAdsUserBatchLoadedDataReducerPlugin",
  ["AdsUserSettingsDataManager", "CurrentUser"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = r("CurrentUser").getAccountID(),
            o = n.responses.get(e),
            a = o == null ? void 0 : o.ads_user_settings;
          return a
            ? (t.get(a.id), t)
            : (r("AdsUserSettingsDataManager").createUserSettings(e), t);
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
