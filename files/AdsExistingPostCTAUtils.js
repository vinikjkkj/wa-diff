__d(
  "AdsExistingPostCTAUtils",
  [
    "AdCampaignDestination",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectives",
    "AdsBrandAwarenessUtils",
    "AdsBulkValueUtils",
    "AdsPromotedObjectTypes",
    "gkx",
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
    function s(t, n, a, i) {
      return (
        (t !== o("AdsBulkValueUtils").MIXED_VALUE && e.includes(t)) ||
        (n != null && n === r("AdCampaignDestination").ON_AD) ||
        (a === r("AdsAPIObjectives").APP_INSTALLS && r("gkx")("5824")) ||
        o("AdsAPICampaignRecordUtils").isWebAndAppPromotedObjectType(a, i) ||
        ((a === r("AdsAPIObjectives").LINK_CLICKS ||
          a === r("AdsAPIObjectives").OUTCOME_TRAFFIC) &&
          i === r("AdsPromotedObjectTypes").MOBILE_APP &&
          r("gkx")("7662")) ||
        (t !== "GET_DIRECTIONS" && d(a))
      );
    }
    function u(e, t, n) {
      return e !== "GET_DIRECTIONS" && !s(e, t, n);
    }
    function c(e, t) {
      return (
        e && o("AdsBrandAwarenessUtils").isBrandObjective(t) && r("gkx")("7662")
      );
    }
    function d(e) {
      return (
        (e === r("AdsAPIObjectives").BRAND_AWARENESS ||
          e === r("AdsAPIObjectives").OUTCOME_AWARENESS ||
          e === r("AdsAPIObjectives").REACH) &&
        r("gkx")("7662")
      );
    }
    function m(e, t, n) {
      return (
        e &&
        (t === r("AdsAPIObjectives").LINK_CLICKS ||
          t === r("AdsAPIObjectives").OUTCOME_TRAFFIC) &&
        n === r("AdsPromotedObjectTypes").MOBILE_APP &&
        r("gkx")("7662")
      );
    }
    function p(e, t, n) {
      return c(e, t) || m(e, t, n);
    }
    function _(e, t) {
      return (
        (e === "photo" ||
          e === "share" ||
          e === "album" ||
          e === "multi_share" ||
          e.startsWith("video")) &&
        t !== "mobile_status_update"
      );
    }
    function f(e) {
      return e.startsWith("video") || e === "photo";
    }
    function g(e) {
      var t = e.split("_");
      return t == null || t.length !== 2 ? null : t[1];
    }
    function h(e, t, n) {
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
    var y = 60;
    ((l.shouldHideLinkField = s),
      (l.isCTAEligibleForWeblinkDefaulting = u),
      (l.isAwarenessExistingPostWithDLGK = c),
      (l.isAwarenessObjectiveWithDLGK = d),
      (l.isExistingPostWithDLGK = p),
      (l.hasSupportedPostAttachmentTypeForMessagesObjective = _),
      (l.hasSupportedPostAttachmentTypeForUnifiedProfileVisitsObjective = f),
      (l.maybeGetPostIDFromObjectStoryID = g),
      (l.getProductTagCTALink = h),
      (l.MAX_URL_LENGTH = y));
  },
  98,
);
