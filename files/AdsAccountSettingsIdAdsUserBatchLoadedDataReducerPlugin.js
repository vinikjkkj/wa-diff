__d(
  "AdsAccountSettingsIdAdsUserBatchLoadedDataReducerPlugin",
  ["CurrentUser"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = r("CurrentUser").getAccountID(),
            o = n.responses.get(e),
            a = o == null ? void 0 : o.ads_user_settings;
          if (a) return a.id;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
