__d(
  "adsGetIsMessageMarketingEnabledFromAdgroupIDSelector",
  [
    "AdsPEAdgroupSelectors",
    "adsCreateDynamicSelector",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "adsGetIsMessageMarketingEnabledFromCampaignIDSelector",
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
            o("AdsPEAdgroupSelectors").getByFieldsSelector,
            r("adsGetIsMessageMarketingEnabledFromCampaignIDSelector"),
          ],
          function (t, n, r) {
            var e,
              o =
                (e = n(t, { adset_id: null }).getValue()) == null
                  ? void 0
                  : e.adset_id;
            return o == null ? !1 : r(o);
          },
          { name: i.id },
        ),
      ),
      s = e;
    l.default = s;
  },
  98,
);
