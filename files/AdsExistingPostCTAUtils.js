__d(
  "AdsExistingPostCTAUtils",
  [
    "AdCampaignDestination",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsBrandAwarenessUtils",
    "AdsBulkValueUtils",
    "AdsPromotedObjectTypes",
    "BrandedContentAdsUtils",
    "getShouldEnableAdsManagerMultiPostSelection",
    "gkx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
      "NO_BUTTON",
      "MESSAGE_PAGE",
      "WHATSAPP_MESSAGE",
      "INSTAGRAM_MESSAGE",
      "CALL_NOW",
    ];
    function s() {
      return r("qex")._("1706");
    }
    function u(t, n, a, i, l) {
      return (
        (t != null &&
          !o("AdsBulkValueUtils").isMixedValueMarker(t) &&
          e.includes(t)) ||
        (n != null && n === r("AdCampaignDestination").ON_AD) ||
        (a === r("AdsAPIObjectives").APP_INSTALLS && r("gkx")("5824")) ||
        o("AdsAPICampaignRecordUtils").isWebAndAppPromotedObjectType(a, i) ||
        ((a === r("AdsAPIObjectives").LINK_CLICKS ||
          a === r("AdsAPIObjectives").OUTCOME_TRAFFIC) &&
          i === r("AdsPromotedObjectTypes").MOBILE_APP &&
          r("gkx")("7662")) ||
        (t !== "GET_DIRECTIONS" &&
          m(a) &&
          (l === !0 ||
            !r("getShouldEnableAdsManagerMultiPostSelection")(
              n,
              i,
              !0,
              !0,
              void 0,
            )))
      );
    }
    function c(e, t, n, r) {
      return e !== "GET_DIRECTIONS" && !u(e, t, n, null, r);
    }
    function d(e, t) {
      return (
        e && o("AdsBrandAwarenessUtils").isBrandObjective(t) && r("gkx")("7662")
      );
    }
    function m(e) {
      return (
        (e === r("AdsAPIObjectives").BRAND_AWARENESS ||
          e === r("AdsAPIObjectives").OUTCOME_AWARENESS ||
          e === r("AdsAPIObjectives").REACH) &&
        r("gkx")("7662")
      );
    }
    function p(e, t, n) {
      return (
        e &&
        (t === r("AdsAPIObjectives").LINK_CLICKS ||
          t === r("AdsAPIObjectives").OUTCOME_TRAFFIC) &&
        n === r("AdsPromotedObjectTypes").MOBILE_APP &&
        r("gkx")("7662")
      );
    }
    function _(e, t, n) {
      return d(e, t) || p(e, t, n);
    }
    function f(e, t) {
      return (
        (e === "photo" ||
          e === "share" ||
          e === "album" ||
          e === "multi_share" ||
          e.startsWith("video")) &&
        t !== "mobile_status_update"
      );
    }
    function g(e) {
      return e.startsWith("video") || e === "photo";
    }
    function h(e) {
      var t = e.split("_");
      return t == null || t.length !== 2 ? null : t[1];
    }
    function y(e, t, n) {
      return e == null || e.length === 0
        ? !1
        : e.every(function (e) {
            var r = t(e);
            return r != null ? r === "NO_BUTTON" : n === "NO_BUTTON";
          });
    }
    function C(e) {
      var t,
        n,
        r =
          (t =
            (n = e[0]) == null ||
            (n = n.creative) == null ||
            (n = n.branded_content) == null ||
            (n = n.content_list) == null
              ? void 0
              : n.id) != null
            ? t
            : null;
      return r != null &&
        e.every(function (e) {
          var t;
          return (
            ((t = e.creative) == null ||
            (t = t.branded_content) == null ||
            (t = t.content_list) == null
              ? void 0
              : t.id) === r
          );
        })
        ? r
        : null;
    }
    function b(e, t) {
      return (
        !(
          o(
            "BrandedContentAdsUtils",
          ).identitiesHaveUpgradedPAPermissionForCapability(
            e,
            "CAN_CHANGE_SHOPPABLE_MEDIA_PRODUCT_URL",
          ) && r("qex")._("5882") === !0
        ) && !(r("gkx")("5205") && t)
      );
    }
    function v(e, t, n) {
      var r,
        o,
        a = e != null && e.length > 0 ? String(e[0].product_id) : null,
        i =
          (r =
            (o =
              a != null
                ? t == null
                  ? void 0
                  : t.find(function (e) {
                      return e.id === a;
                    })
                : null) != null
              ? o
              : t == null
                ? void 0
                : t[0]) != null
            ? r
            : null;
      return n != null ? n : i == null ? void 0 : i.url;
    }
    var S = 60;
    ((l.getUEPCTAPreviewBundleAssignment = s),
      (l.shouldHideLinkField = u),
      (l.isCTAEligibleForWeblinkDefaulting = c),
      (l.isAwarenessExistingPostWithDLGK = d),
      (l.isAwarenessObjectiveWithDLGK = m),
      (l.isExistingPostWithDLGK = _),
      (l.hasSupportedPostAttachmentTypeForMessagesObjective = f),
      (l.hasSupportedPostAttachmentTypeForUnifiedProfileVisitsObjective = g),
      (l.maybeGetPostIDFromObjectStoryID = h),
      (l.isNoButtonSelectedForPosts = y),
      (l.getUniformSelectedContentListID = C),
      (l.shouldEnforceProductTagCTAURL = b),
      (l.getProductTagCTALink = v),
      (l.MAX_URL_LENGTH = S));
  },
  98,
);
