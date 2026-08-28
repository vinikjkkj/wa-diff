__d(
  "AdsWhatsAppPlacementUtils",
  [
    "AdsAPIObjectives",
    "AdsAccountUtils",
    "AdsPromotedObjectTypes",
    "AdsWhatsAppFeatureGating",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t =
          e.objective === r("AdsAPIObjectives").MESSAGES &&
          e.promotedObjectType === r("AdsPromotedObjectTypes").WHATSAPP &&
          r("AdsAccountUtils").hasCapabilityFromList(
            e.capabilities,
            "WHATSAPP_DESTINATION_ADS",
          ),
        n =
          e.promotedObjectType === r("AdsPromotedObjectTypes").WHATSAPP &&
          e.objective === r("AdsAPIObjectives").LINK_CLICKS &&
          r("AdsAccountUtils").hasCapabilityFromList(
            e.capabilities,
            "CAN_USE_WHATSAPP_DESTINATION_ON_LINK_CLICKS_AND_CONVERSIONS",
          ),
        a =
          e.promotedObjectType === r("AdsPromotedObjectTypes").WHATSAPP &&
          (e.objective === r("AdsAPIObjectives").CONVERSIONS ||
            (e.objective === r("AdsAPIObjectives").OUTCOME_SALES &&
              o(
                "AdsWhatsAppFeatureGating",
              ).isCTWASalesPlacementCleanupEnabled())) &&
          r("AdsAccountUtils").hasCapabilityFromList(
            e.capabilities,
            "CAN_USE_WHATSAPP_DESTINATION_ON_CONVERSIONS",
          );
      return t || n || a;
    }
    function s(e) {
      return (
        e === "facebook_reels_overlay" ||
        e === "instream_video" ||
        e === "search"
      );
    }
    function u(t, n) {
      return e(t) && !n;
    }
    function c(t, n, r) {
      return e(n) && (!r || !t);
    }
    function d(t, n, r) {
      return e(n) && !r;
    }
    function m(t, n) {
      return e(t) && !n;
    }
    function p(t, n) {
      return e(n) && !t;
    }
    function _(t, n, r) {
      return e(n) && (!t || !r);
    }
    function f(t, n, r) {
      return e(n) && (!t || !r);
    }
    function g(t, n) {
      return e(n) && (!t || !r("gkx")("6878"));
    }
    var h = e,
      y = e,
      C = u,
      b = e,
      v = u,
      S = u,
      R = e,
      L = e,
      E = e,
      k = e,
      I = e,
      T = e;
    ((l.isWhatsAppDestinationEnabledAndSelected = e),
      (l.isCTWAFacebookPositionRequiringFeed = s),
      (l.isIneligibleForANInstreamVideo = h),
      (l.isIneligibleForFBFeeds = u),
      (l.isIneligibleForFBInstreamVideos = f),
      (l.isIneligibleForFBRightColumn = y),
      (l.isIneligibleForFBStory = C),
      (l.isIneligibleForFBReels = _),
      (l.isIneligibleForFBReelsOverlay = g),
      (l.isIneligibleForFBVideoFeeds = b),
      (l.isIneligibleForFBVideoFeedsNonMobile = v),
      (l.isIneligibleForMarketplacePlacement = c),
      (l.isIneligibleForSearchPlacement = d),
      (l.isIneligibleForIGFeedAndExplore = S),
      (l.isIneligibleForIGStory = m),
      (l.isIneligibleForIGReels = p),
      (l.isIneligibleForIGShopTab = R),
      (l.isIneligibleForIGExploreGrid = L),
      (l.isIneligibleForIGSearch = E),
      (l.isIneligibleForMessengerInbox = k),
      (l.isIneligibleForMessengerStory = I),
      (l.isIneligibleForThreadsFeed = T));
  },
  98,
);
