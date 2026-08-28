__d(
  "adsMgmtViewportInfoSelector",
  [
    "AdsAccountStore",
    "AdsInsightsTableViewStore",
    "AdsObjectTypes",
    "AdsPEAdgroupVisibleIDsSelectors",
    "AdsPECampaignGroupVisibleIDsSelectors",
    "AdsPECampaignVisibleIDsSelectors",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "adsMgmtIsStartYourDaySelectors",
    "adsMgmtViewportSelector",
    "gkx",
    "isFalsey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        [r("AdsInsightsTableViewStore")],
        function () {
          return r("AdsInsightsTableViewStore").get();
        },
        { name: i.id + ".viewSelector" },
      ),
      s = r("adsCreateSelector")(
        [
          e,
          r("adsMgmtViewportSelector"),
          r("AdsPECampaignGroupVisibleIDsSelectors").visibleIDsSelector,
          r("AdsPECampaignVisibleIDsSelectors").visibleIDsSelector,
          r("AdsPEAdgroupVisibleIDsSelectors").visibleIDsSelector,
          r("AdsAccountStore").getSelectedAccountID,
          o("adsMgmtIsStartYourDaySelectors")
            .adsMgmtIsStartYourDaySectionSelector,
        ],
        function (t, n, o, a, i, l, s) {
          if (r("gkx")("16210") && s) return null;
          var e = null;
          switch (t.objectType) {
            case r("AdsObjectTypes").ACCOUNT:
              if (r("isFalsey")(l)) return null;
              e = [l];
              break;
            case r("AdsObjectTypes").CAMPAIGN_GROUP:
              e = o;
              break;
            case r("AdsObjectTypes").CAMPAIGN:
              e = a;
              break;
            case r("AdsObjectTypes").ADGROUP:
              e = i;
              break;
          }
          return e == null || e.length === 0
            ? null
            : { view: t, viewport: n, visibleIDs: e };
        },
        { name: i.id + ".adsMgmtViewportInfoSelector" },
      ),
      u = s;
    l.default = u;
  },
  98,
);
