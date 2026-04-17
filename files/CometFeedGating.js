__d(
  "CometFeedGating",
  ["gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [27, 26, 43];
    function s(t) {
      return t == null || e.includes(t);
    }
    function u() {
      return !0;
    }
    function c() {
      return r("gkx")("12000");
    }
    function d() {
      return r("gkx")("14917");
    }
    function m() {
      return r("gkx")("4453");
    }
    function p() {
      return r("gkx")("14443");
    }
    function _() {
      return r("gkx")("13137");
    }
    function f() {
      return r("gkx")("14421");
    }
    function g() {
      return r("gkx")("16062");
    }
    function h() {
      return r("gkx")("5633");
    }
    function y(e) {
      var t = e.adID,
        n = e.adSensitiveVerticalInfo,
        o = e.feedLocation,
        a =
          (n == null ? void 0 : n.is_sensitive_tier_1) === !0 ||
          (n == null ? void 0 : n.is_sensitive_tier_2) === !0;
      return t != null && !a && o === "NEWSFEED" && r("gkx")("10978");
    }
    ((l.isNativityEligibleConversionType = s),
      (l.shouldEnableFeedUFIUIModernization = u),
      (l.shouldEnableFeedUFIUIEvenVerticalSpacing = c),
      (l.shouldMakeFeedAdsBodyTextClickable = d),
      (l.shouldEnableFeedAdsBlingBarClickable = m),
      (l.shouldAlwaysOpenRadicalUFI = p),
      (l.shouldEnableLinkAttachmentPaddingFix = _),
      (l.shouldEnableUpdatedCommentModerationPadding = f),
      (l.shouldReduceVideoErrorBoundaryFallbackContainerHeight = g),
      (l.shouldReduceResharedMediaSpacing = h),
      (l.shouldEnableFeedVideoAdsNativity = y));
  },
  98,
);
