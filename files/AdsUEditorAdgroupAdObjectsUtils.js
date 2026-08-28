__d(
  "AdsUEditorAdgroupAdObjectsUtils",
  [
    "AdCampaignDestination",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAssetFeedUtils",
    "AdsCTVCompatibilityUtils",
    "AdsLocalUtils",
    "AdsODAXUtils",
    "AdsOfferState",
    "AdsPromotedObjectAppUtils",
    "AdsUEditorAdgroupCreativeFormat",
    "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
    "AdsUEditorCampaignAdObjectsUtils",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUIMediaFormatUtils",
    "CreativeAssetGroupsFlowSafeUtils",
    "adsCampaignGetOfferStateType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n =
        r("adsCampaignGetOfferStateType")(e.campaign) ===
        r("AdsOfferState").HAS_OFFER;
      if (n) return !1;
      var a = s(e, t, !1),
        i = a.creativeFormat,
        l = a.objective,
        u = a.promotedObjectType;
      switch (i) {
        case r("AdsUEditorAdgroupCreativeFormat").SINGLE_IMAGE:
        case r("AdsUEditorAdgroupCreativeFormat").CANVAS:
          break;
        default:
          return !1;
      }
      var c = o("AdsPromotedObjectAppUtils").isAppType(u),
        d = o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(e.adgroup),
        m = o("AdsAPIAdgroupRecordUtils").isTemplateCreative(e.adgroup);
      switch (l) {
        case r("AdsAPIObjectives").BRAND_AWARENESS:
        case r("AdsAPIObjectives").CANVAS_APP_INSTALLS:
        case r("AdsAPIObjectives").MOBILE_APP_ENGAGEMENT:
        case r("AdsAPIObjectives").PAGE_LIKES:
        case r("AdsAPIObjectives").POST_ENGAGEMENT:
        case r("AdsAPIObjectives").REACH:
        case o("AdsLocalUtils").isLocalObjectiveSwitch(l):
          return !0;
        case r("AdsAPIObjectives").APP_INSTALLS:
        case r("AdsAPIObjectives").CONVERSIONS:
        case r("AdsAPIObjectives").LINK_CLICKS:
        case r("AdsAPIObjectives").MOBILE_APP_INSTALLS:
          return !!(!m || d || c);
        case r("AdsAPIObjectives").LEAD_GENERATION:
          return !m;
        default:
          return !1;
      }
    }
    function s(e, t, n) {
      var a,
        i = o("AdsUEditorCampaignGroupAdObjectsUtils").getObjective(e),
        l = o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType(e),
        s = u(e, t);
      n &&
        s === r("AdsUEditorAdgroupCreativeFormat").ACO &&
        (s = r("AdsUEditorAdgroupCreativeFormat").CAROUSEL);
      var c = o("AdsODAXUtils").maybeTranslateObjective(
        i,
        l,
        e.campaign.optimization_goal,
      );
      return {
        creativeFormat: s,
        objective: c,
        promotedObjectType: l,
        destinationType:
          (a = e.campaign.destination_type) != null
            ? a
            : r("AdCampaignDestination").UNDEFINED,
      };
    }
    function u(e, t) {
      var n = e.adgroup,
        a = e.campaign;
      return o("AdsAPICampaignRecordUtils").isScheduledLiveVideoAd(a)
        ? r("AdsUEditorAdgroupCreativeFormat").SCHEDULED_LIVE_VIDEO
        : o("AdsAPICampaignRecordUtils").isInstagramLiveVideoAd(a)
          ? r("AdsUEditorAdgroupCreativeFormat").INSTAGRAM_LIVE_VIDEO
          : o("AdsAPIAdgroupRecordUtils").isExistingPostAd(n)
            ? r("AdsUEditorAdgroupCreativeFormat").EXISTING_POST
            : o(
                  "CreativeAssetGroupsFlowSafeUtils",
                ).isFormatCreativeAssetGroupsFromAdgroupRecord(n)
              ? r("AdsUEditorAdgroupCreativeFormat").CREATIVE_ASSET_GROUPS
              : o("AdsCTVCompatibilityUtils").isCTVPlacementSelected(a)
                ? r("AdsUEditorAdgroupCreativeFormat").CTV
                : d(e, t);
    }
    function c(e) {
      var t = e.campaign,
        n = e.campaignGroup,
        r = o(
          "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
        ).getAdgroupSpecPathPlugin(e);
      return { campaign: t, campaignGroup: n, specPlugin: r };
    }
    function d(e, t) {
      var n = o(
        "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
      ).getAdgroupSpecPathPlugin(e);
      return o("AdsUIMediaFormatUtils").getUIFormat(e.adgroup, n, t);
    }
    ((l.canDuplicateByImages = e),
      (l.getCommonAdgroupEditorPivots = s),
      (l.getCreativeFormat = u),
      (l.getParentAdObjectsExtraData = c),
      (l.getUIMediaFormat = d));
  },
  98,
);
