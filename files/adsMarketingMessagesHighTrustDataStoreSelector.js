__d(
  "adsMarketingMessagesHighTrustDataStoreSelector",
  ["MarketingMessagesHighTrustDataStore", "adsCreateStoreThunkSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreThunkSelector")(
        r("MarketingMessagesHighTrustDataStore"),
        function (e) {
          return r("MarketingMessagesHighTrustDataStore").get(e);
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
