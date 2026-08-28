__d(
  "adsGetIsMessageMarketingEnabledFromCampaignIDSelector",
  [
    "AdsPECampaignSelectors",
    "adsCreateDynamicSelector",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "isMessageMarketingEnabledFromCampaign",
    "isMessengerMarketingMessageEnabledFromCampaign",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateDynamicSelector")(
        r("adsCreateSelector")(
          [
            r("adsCreateStoreSelector")(
              [],
              function (t) {
                return t;
              },
              { name: i.id },
            ),
            o("AdsPECampaignSelectors").getCachedByFieldsSelector,
            o("AdsPECampaignSelectors").getByFieldsSelector,
          ],
          function (t, n, r) {
            var e,
              a = { id: null, targeting: null },
              i = (e = n(t, a).getValue()) != null ? e : r(t, a).getValue();
            return i == null
              ? !1
              : o(
                  "isMessageMarketingEnabledFromCampaign",
                ).isMessageMarketingEnabledFromCampaign(i) ||
                  o(
                    "isMessengerMarketingMessageEnabledFromCampaign",
                  ).isMessengerMarketingMessageEnabledFromCampaign(i);
          },
          { name: i.id },
        ),
      ),
      s = e;
    l.default = s;
  },
  98,
);
