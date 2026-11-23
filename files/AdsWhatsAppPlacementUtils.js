__d(
  "AdsWhatsAppPlacementUtils",
  ["AdsAPIObjectives", "AdsAccountUtils", "AdsPromotedObjectTypes", "gkx"],
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
        o =
          e.promotedObjectType === r("AdsPromotedObjectTypes").WHATSAPP &&
          (e.objective === r("AdsAPIObjectives").CONVERSIONS ||
            e.objective === r("AdsAPIObjectives").OUTCOME_SALES) &&
          r("AdsAccountUtils").hasCapabilityFromList(
            e.capabilities,
            "CAN_USE_WHATSAPP_DESTINATION_ON_CONVERSIONS",
          );
      return t || n || o;
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
      b = u,
      v = u,
      S = e,
      R = e,
      L = e,
      E = e,
      k = e;
    ((l.isWhatsAppDestinationEnabledAndSelected = e),
      (l.isCTWAFacebookPositionRequiringFeed = s),
      (l.isIneligibleForANInstreamVideo = h),
      (l.isIneligibleForFBFeeds = u),
      (l.isIneligibleForFBInstreamVideos = f),
      (l.isIneligibleForFBRightColumn = y),
      (l.isIneligibleForFBStory = C),
      (l.isIneligibleForFBReels = _),
      (l.isIneligibleForFBReelsOverlay = g),
      (l.isIneligibleForFBVideoFeedsNonMobile = b),
      (l.isIneligibleForMarketplacePlacement = c),
      (l.isIneligibleForSearchPlacement = d),
      (l.isIneligibleForIGFeedAndExplore = v),
      (l.isIneligibleForIGStory = m),
      (l.isIneligibleForIGReels = p),
      (l.isIneligibleForIGShopTab = S),
      (l.isIneligibleForIGExploreGrid = R),
      (l.isIneligibleForIGSearch = L),
      (l.isIneligibleForMessengerStory = E),
      (l.isIneligibleForThreadsFeed = k));
  },
  98,
);
