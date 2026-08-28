__d(
  "adsMarketingMessagesHighTrustSelector",
  [
    "AdsAccountStore",
    "LoadObject",
    "adsCreateSelector",
    "adsMarketingMessagesHighTrustDataStoreSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("AdsAccountStore").getSelectedAccountID,
          r("adsMarketingMessagesHighTrustDataStoreSelector"),
        ],
        function (t, n) {
          return t == null
            ? r("LoadObject").withValue(null, { creatorModuleID: i.id })
            : n(t).mapValue(function (e) {
                var t;
                return (t = e == null ? void 0 : e.isBusinessHighTrustForMM) !=
                  null
                  ? t
                  : null;
              });
        },
        { name: i.id + ".adsMarketingMessagesHighTrustSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
