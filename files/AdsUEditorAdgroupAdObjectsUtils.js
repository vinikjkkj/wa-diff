__d(
  "AdsUEditorAdgroupAdObjectsUtils",
  [
    "AdCampaignDestination",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsAssetFeedUtils",
    "AdsAutomaticFlowUtils",
    "AdsCTVCompatibilityUtils",
    "AdsCreativeFlexAssetUtils",
    "AdsLocalUtils",
    "AdsODAXUtils",
    "AdsOfferState",
    "AdsPromotedObjectAppUtils",
    "AdsPromotedObjectTypes",
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
      var o = f(e, t, !1),
        a = o.creativeFormat,
        i = o.objective,
        l = o.promotedObjectType;
      switch (a) {
        case r("AdsUEditorAdgroupCreativeFormat").SINGLE_IMAGE:
        case r("AdsUEditorAdgroupCreativeFormat").CANVAS:
          break;
        default:
          return !1;
      }
      return p(e, i, l);
    }
    function s(e, t) {
      var n =
        r("adsCampaignGetOfferStateType")(e.campaign) ===
        r("AdsOfferState").HAS_OFFER;
      if (n) return !1;
      var o = f(e, t, !1),
        a = o.creativeFormat,
        i = o.objective,
        l = o.promotedObjectType;
      return a !== r("AdsUEditorAdgroupCreativeFormat").SINGLE_VIDEO
        ? !1
        : _(e, i, l);
    }
    function u(e, t) {
      return (
        o("AdsCreativeFlexAssetUtils").getMultiMediaAssetsOfTypeAndSource(
          e,
          t,
          "multi_media",
        ).length > 0
      );
    }
    function c(e) {
      var t,
        n = e.adgroup,
        a = e.campaign;
      return (
        r("adsCampaignGetOfferStateType")(a) === r("AdsOfferState").HAS_OFFER ||
        ((t = n.creative) == null ? void 0 : t.media_type) ===
          "INSTAGRAM_LIVE_VIDEO" ||
        o("AdsAPICampaignRecordUtils").isScheduledLiveVideoAd(a) ||
        o("AdsAPICampaignRecordUtils").isInstagramLiveVideoAd(a) ||
        o(
          "CreativeAssetGroupsFlowSafeUtils",
        ).isFormatCreativeAssetGroupsFromAdgroupRecord(n) ||
        o("AdsCTVCompatibilityUtils").isCTVPlacementSelected(a)
      );
    }
    function d(e, t) {
      if (c(e)) return !1;
      var n = f(e, t, !1),
        a = n.creativeFormat,
        i = n.objective,
        l = n.promotedObjectType,
        s = e.adgroup,
        d =
          (a === r("AdsUEditorAdgroupCreativeFormat").SINGLE_IMAGE ||
            a === r("AdsUEditorAdgroupCreativeFormat").CANVAS) &&
          o("AdsAutomaticFlowUtils").isSingleImageFormat(s),
        m =
          o("AdsAutomaticFlowUtils").isStaticSingleImageOrVideoFormat(s) &&
          u(s, "images");
      return !d && !m ? !1 : p(e, i, l);
    }
    function m(e, t) {
      if (c(e)) return !1;
      var n = f(e, t, !1),
        r = n.objective,
        a = n.promotedObjectType,
        i = e.adgroup,
        l = !t && o("AdsAutomaticFlowUtils").isStaticSingleVideoFormat(i),
        s =
          o("AdsAutomaticFlowUtils").isStaticSingleImageOrVideoFormat(i) &&
          u(i, "videos");
      return !l && !s ? !1 : _(e, r, a);
    }
    function p(e, t, n) {
      var a = o("AdsPromotedObjectAppUtils").isAppType(n),
        i = o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(e.adgroup),
        l = o("AdsAPIAdgroupRecordUtils").isTemplateCreative(e.adgroup);
      switch (t) {
        case r("AdsAPIObjectives").BRAND_AWARENESS:
        case r("AdsAPIObjectives").CANVAS_APP_INSTALLS:
        case r("AdsAPIObjectives").MOBILE_APP_ENGAGEMENT:
        case r("AdsAPIObjectives").PAGE_LIKES:
        case r("AdsAPIObjectives").POST_ENGAGEMENT:
        case r("AdsAPIObjectives").REACH:
        case o("AdsLocalUtils").isLocalObjectiveSwitch(t):
          return !0;
        case r("AdsAPIObjectives").APP_INSTALLS:
        case r("AdsAPIObjectives").CONVERSIONS:
        case r("AdsAPIObjectives").LINK_CLICKS:
        case r("AdsAPIObjectives").MOBILE_APP_INSTALLS:
          return !!(!l || i || a);
        case r("AdsAPIObjectives").LEAD_GENERATION:
          return !l;
        default:
          return !1;
      }
    }
    function _(e, t, n) {
      var a = o("AdsPromotedObjectAppUtils").isAppType(n),
        i = o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(e.adgroup),
        l = o("AdsAPIAdgroupRecordUtils").isTemplateCreative(e.adgroup);
      switch (t) {
        case r("AdsAPIObjectives").BRAND_AWARENESS:
        case r("AdsAPIObjectives").CANVAS_APP_INSTALLS:
        case r("AdsAPIObjectives").MOBILE_APP_ENGAGEMENT:
        case r("AdsAPIObjectives").PAGE_LIKES:
        case r("AdsAPIObjectives").POST_ENGAGEMENT:
        case r("AdsAPIObjectives").REACH:
        case r("AdsAPIObjectives").VIDEO_VIEWS:
        case o("AdsLocalUtils").isLocalObjectiveSwitch(t):
          return !0;
        case r("AdsAPIObjectives").APP_INSTALLS:
        case r("AdsAPIObjectives").CONVERSIONS:
        case r("AdsAPIObjectives").LINK_CLICKS:
        case r("AdsAPIObjectives").MOBILE_APP_INSTALLS:
          return !!(!l || i || a);
        case r("AdsAPIObjectives").LEAD_GENERATION:
          return !l;
        default:
          return !1;
      }
    }
    function f(e, t, n) {
      var a,
        i = o("AdsUEditorCampaignGroupAdObjectsUtils").getObjective(e),
        l = o("AdsUEditorCampaignAdObjectsUtils").getPromotedObjectType(e),
        s = g(e, t);
      (s === r("AdsUEditorAdgroupCreativeFormat").INSTAGRAM_LIVE_VIDEO &&
        (l = r("AdsPromotedObjectTypes").LIVE_VIDEO),
        n &&
          s === r("AdsUEditorAdgroupCreativeFormat").ACO &&
          (s = r("AdsUEditorAdgroupCreativeFormat").CAROUSEL));
      var u = o("AdsODAXUtils").maybeTranslateObjective(
        i,
        l,
        e.campaign.optimization_goal,
      );
      return {
        creativeFormat: s,
        objective: u,
        promotedObjectType: l,
        destinationType:
          (a = e.campaign.destination_type) != null
            ? a
            : r("AdCampaignDestination").UNDEFINED,
      };
    }
    function g(e, t) {
      var n,
        a = e.adgroup,
        i = e.campaign;
      return ((n = a.creative) == null ? void 0 : n.media_type) ===
        "INSTAGRAM_LIVE_VIDEO"
        ? r("AdsUEditorAdgroupCreativeFormat").INSTAGRAM_LIVE_VIDEO
        : o("AdsAPICampaignRecordUtils").isScheduledLiveVideoAd(i)
          ? r("AdsUEditorAdgroupCreativeFormat").SCHEDULED_LIVE_VIDEO
          : o("AdsAPICampaignRecordUtils").isInstagramLiveVideoAd(i)
            ? r("AdsUEditorAdgroupCreativeFormat").INSTAGRAM_LIVE_VIDEO
            : o("AdsAPIAdgroupRecordUtils").isExistingPostAd(a)
              ? r("AdsUEditorAdgroupCreativeFormat").EXISTING_POST
              : o(
                    "CreativeAssetGroupsFlowSafeUtils",
                  ).isFormatCreativeAssetGroupsFromAdgroupRecord(a)
                ? r("AdsUEditorAdgroupCreativeFormat").CREATIVE_ASSET_GROUPS
                : o("AdsCTVCompatibilityUtils").isCTVPlacementSelected(i)
                  ? r("AdsUEditorAdgroupCreativeFormat").CTV
                  : y(e, t);
    }
    function h(e) {
      var t = e.campaign,
        n = e.campaignGroup,
        r = o(
          "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
        ).getAdgroupSpecPathPlugin(e);
      return { campaign: t, campaignGroup: n, specPlugin: r };
    }
    function y(e, t) {
      var n = o(
        "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
      ).getAdgroupSpecPathPlugin(e);
      return o("AdsUIMediaFormatUtils").getUIFormat(e.adgroup, n, t);
    }
    ((l.canDuplicateByImages = e),
      (l.canDuplicateByVideos = s),
      (l.canDuplicateByImagesCST = d),
      (l.canDuplicateByVideosCST = m),
      (l.getCommonAdgroupEditorPivots = f),
      (l.getCreativeFormat = g),
      (l.getParentAdObjectsExtraData = h),
      (l.getUIMediaFormat = y));
  },
  98,
);
