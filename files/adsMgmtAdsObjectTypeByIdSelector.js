__d(
  "adsMgmtAdsObjectTypeByIdSelector",
  [
    "AdsMgmtAdObjectTypeProvider",
    "AdsObjectTypes",
    "AdsPEFilteredDraftFragmentStore",
    "adsCreateSelector",
    "adsCreateStoreSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        r("AdsObjectTypes").CAMPAIGN_GROUP,
        r("AdsObjectTypes").CAMPAIGN,
        r("AdsObjectTypes").ADGROUP,
      ],
      s = r("adsCreateStoreSelector")(
        [],
        function (t) {
          return t;
        },
        { name: i.id + ".getID" },
      ),
      u = r("adsCreateSelector")(
        [
          s,
          r("AdsPEFilteredDraftFragmentStore").getFilteredDraftIDs,
          r("AdsMgmtAdObjectTypeProvider").toFluxSelector(),
        ],
        function (n, r, o) {
          for (var t of e) {
            var a = o.get(t);
            if (a && a.includes(n)) return t;
          }
          return c(r, n);
        },
        { name: i.id + ".adsMgmtAdsObjectTypeByIdSelector" },
      );
    function c(e, t) {
      return e.campaignGroup.includes(t)
        ? r("AdsObjectTypes").CAMPAIGN_GROUP
        : e.campaign.includes(t)
          ? r("AdsObjectTypes").CAMPAIGN
          : e.adgroup.includes(t)
            ? r("AdsObjectTypes").ADGROUP
            : null;
    }
    var d = u;
    l.default = d;
  },
  98,
);
