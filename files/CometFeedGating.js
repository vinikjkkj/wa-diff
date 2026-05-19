__d(
  "CometFeedGating",
  ["gkx", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [27, 26, 43],
      s = [27, 26];
    function u(t) {
      return t == null || e.includes(t);
    }
    function c(e) {
      return e == null || s.includes(e);
    }
    function d(e) {
      var t = e.adID,
        n = e.adSensitiveVerticalInfo,
        r = e.feedLocation,
        o =
          (n == null ? void 0 : n.is_sensitive_tier_1) === !0 ||
          (n == null ? void 0 : n.is_sensitive_tier_2) === !0;
      return t != null && !o && r === "NEWSFEED";
    }
    function m(e) {
      return d(e) && r("gkx")("10978");
    }
    function p(e) {
      return d(e) && r("justknobx")._("102") && r("gkx")("26139");
    }
    function _() {
      return !0;
    }
    function f() {
      return r("gkx")("12000");
    }
    function g() {
      return r("gkx")("14917");
    }
    function h() {
      return r("gkx")("4453");
    }
    function y() {
      return r("gkx")("14443");
    }
    function C() {
      return r("gkx")("13137");
    }
    function b() {
      return r("gkx")("14421");
    }
    function v() {
      return r("gkx")("16062");
    }
    function S() {
      return r("gkx")("5633");
    }
    ((l.isVideoNativityEligibleConversionType = u),
      (l.isNonVideoNativityEligibleConversionType = c),
      (l.shouldEnableFeedVideoAdsNativity = m),
      (l.shouldEnableFeedNonVideoAdsNativity = p),
      (l.shouldEnableFeedUFIUIModernization = _),
      (l.shouldEnableFeedUFIUIEvenVerticalSpacing = f),
      (l.shouldMakeFeedAdsBodyTextClickable = g),
      (l.shouldEnableFeedAdsBlingBarClickable = h),
      (l.shouldAlwaysOpenRadicalUFI = y),
      (l.shouldEnableLinkAttachmentPaddingFix = C),
      (l.shouldEnableUpdatedCommentModerationPadding = b),
      (l.shouldReduceVideoErrorBoundaryFallbackContainerHeight = v),
      (l.shouldReduceResharedMediaSpacing = S));
  },
  98,
);
