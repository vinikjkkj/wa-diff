__d(
  "AdsPlannerPlanTypeUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = [
        "PREMIUM_FACEBOOK_INSTREAM_VIDEO_TRP",
        "REACH_AND_FREQUENCY_INSERTION_ORDER",
      ];
      return t.includes(e);
    }
    function l(e) {
      var t = [
        "PREMIUM_FACEBOOK_INSTREAM_VIDEO_TRP",
        "REACH_AND_FREQUENCY_INSERTION_ORDER",
      ];
      return !t.includes(e);
    }
    function s(e) {
      var t = [
        "REACH_AND_FREQUENCY_INSERTION_ORDER",
        "PREMIUM_FACEBOOK_INSTREAM_VIDEO_TRP",
      ];
      return t.includes(e);
    }
    function u(e) {
      var t = [
        "TRP",
        "PREMIUM_FACEBOOK_INSTREAM_VIDEO_TRP",
        "REACH_AND_FREQUENCY_INSERTION_ORDER",
        "REACH_AND_FREQUENCY_INSERTION_ORDER_GENERAL",
      ];
      return t.includes(e);
    }
    function c(e) {
      var t = ["TRP", "PREMIUM_FACEBOOK_INSTREAM_VIDEO_TRP"];
      return t.includes(e);
    }
    function d(e) {
      var t = ["REACH_AND_FREQUENCY_INSERTION_ORDER"];
      return t.includes(e);
    }
    function m(e) {
      var t = ["REACH_AND_FREQUENCY_INSERTION_ORDER_GENERAL"];
      return t.includes(e);
    }
    function p(e) {
      var t = [
        "PREMIUM_FACEBOOK_INSTREAM_VIDEO_TRP",
        "REACH_AND_FREQUENCY_INSERTION_ORDER",
      ];
      return t.includes(e);
    }
    function _(e) {
      var t = [
        "PREMIUM_FACEBOOK_INSTREAM_VIDEO_TRP",
        "REACH_AND_FREQUENCY_INSERTION_ORDER",
      ];
      return t.includes(e);
    }
    ((i.getDoesPlanSupportContentPackaging = e),
      (i.getDoesPlanSupportNonVideoFormats = l),
      (i.getIsPlanClassifiedUnderInstream = s),
      (i.getIsPlanTypeBasedOnIO = u),
      (i.getIsPlanTypeBasedOnTRP = c),
      (i.getIsReachAndFrequencyIOInstream = d),
      (i.getIsReachAndFrequencyIOGeneral = m),
      (i.getShouldDisableInstagramAccount = p),
      (i.getShouldUseRestrictedNielsenTargeting = _));
  },
  66,
);
