__d(
  "AdsImageForAdgroupUtils",
  [
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAdgroupImageUtils",
    "AdsAdgroupSpecPathPluginResolver",
    "AdsAssetFeedUtils",
    "AdsAudienceDirectConfig",
    "AdsImageIDUtils",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsPromotedObjectUtilsShared",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.accountID,
        n = e.adgroup,
        a = e.parentCampaign,
        i = e.parentCampaignGroup,
        l = o("AdsImageIDUtils").getSingleImageID(n, t);
      if (l != null) return l;
      var s = null,
        u = null;
      if (
        o("AdsAssetFeedUtils").isAdgroupUsingNonTextOnlyDofAssetFeedSpec(n) &&
        i != null &&
        a != null
      ) {
        var c = o(
          "AdsPlacementAssetTargetingRuleUtils",
        ).computeDefaultRulePlacementsSet({
          campaignGroup: i,
          campaign: a,
          adgroup: n,
        });
        if ((c == null ? void 0 : c.size) === 0)
          ((s = o(
            "AdsAdgroupImageUtils",
          ).getThumbnailHashOrUrlForFirstDeliverableACR(n, "hash")),
            (u = o(
              "AdsAdgroupImageUtils",
            ).getThumbnailHashOrUrlForFirstDeliverableACR(n, "url")));
        else {
          var d = (i != null && i.objective) || r("AdsAPIObjectives").NONE,
            m = a
              ? o("AdsAPICampaignRecordUtils").getPromotedObjectType(d, a)
              : o("AdsPromotedObjectUtilsShared").getDefaultPromotedObjectType(
                  d,
                ),
            p = r("AdsAdgroupSpecPathPluginResolver").resolve({
              accountType: r("AdsAudienceDirectConfig").accountType,
              objective: d,
              promotedObjectType: m,
            });
          ((s = o("AdsAdgroupImageUtils").getImageHashWithPlugin(n, p)),
            (u = o("AdsAdgroupImageUtils").getImageURLWithPlugin(n, p)));
        }
      } else
        ((s = o("AdsAdgroupImageUtils").getImageHash(n)),
          (u = o("AdsAdgroupImageUtils").getImageURL(n)));
      var _ = o("AdsImageIDUtils").getImageIDPrimarilyFromURL(t, s, u);
      return (
        (l =
          _ ||
          o("AdsImageIDUtils").getImageIDPrimarilyFromURL(
            t,
            o("AdsAdgroupImageUtils").getImageHashFromArray(n),
            o("AdsAdgroupImageUtils").getImageURLFromArray(n),
          )),
        l ||
          ((l = o("AdsImageIDUtils")
            .getMPAImageIDs(n, t)
            .find(function (e) {
              return e != null;
            })),
          l)
      );
    }
    l.getSingleImageIDForAdgroup = e;
  },
  98,
);
