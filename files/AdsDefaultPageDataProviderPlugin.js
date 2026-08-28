__d(
  "AdsDefaultPageDataProviderPlugin",
  [
    "AdsAccountStore",
    "AdsCFDefaultingDataLoader",
    "AdsManager2026H2ExperimentUtils",
    "AdsPERouteName",
    "AdsPERouterHelper",
    "LoadObject",
    "LoadObjectMap",
    "adsIsIGLoginUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: function (t) {
          return r("LoadObjectMap").create(function (e) {
            var n = new Map();
            e.forEach(function (e) {
              var a,
                l = r("AdsAccountStore").getSelectedAccount().getValue();
              o("adsIsIGLoginUtils").getIsIGLogin(l) ||
                (((a = r("AdsPERouterHelper").getRouter()) == null
                  ? void 0
                  : a.hasActiveRoute(r("AdsPERouteName").ACCOUNTS)) === !0 &&
                  o(
                    "AdsManager2026H2ExperimentUtils",
                  ).getShouldSkipDefaultingLoaderOnSyd()) ||
                (n.set(e, r("LoadObject").loading({ creatorModuleID: i.id })),
                t(function (e) {
                  return e.merge(n);
                }),
                o("AdsCFDefaultingDataLoader").loadDefaultPageForAccountID(e));
            });
          });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
