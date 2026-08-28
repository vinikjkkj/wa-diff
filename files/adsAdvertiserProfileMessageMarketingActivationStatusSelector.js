__d(
  "adsAdvertiserProfileMessageMarketingActivationStatusSelector",
  [
    "AdsAccountStore",
    "LoadObject",
    "adsAdvertiserProfileMessageMarketingDataStoreSelector",
    "adsCreateSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("AdsAccountStore").getSelectedAccountID,
          r("adsAdvertiserProfileMessageMarketingDataStoreSelector"),
        ],
        function (t, n) {
          return t == null
            ? r("LoadObject").withValue(null, { creatorModuleID: i.id })
            : n(t).mapValue(function (e) {
                var t;
                return (t = e == null ? void 0 : e.whatsappActivationStatus) !=
                  null
                  ? t
                  : null;
              });
        },
        {
          name:
            i.id +
            ".adsAdvertiserProfileMessageMarketingActivationStatusSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
