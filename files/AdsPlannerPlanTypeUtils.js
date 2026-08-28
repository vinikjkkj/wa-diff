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
      return t.includes(e);
    }
    function s(e) {
      var t = [
        "PREMIUM_FACEBOOK_INSTREAM_VIDEO_TRP",
        "REACH_AND_FREQUENCY_INSERTION_ORDER",
      ];
      return !t.includes(e);
    }
    function u(e) {
      var t = [
        "REACH_AND_FREQUENCY_INSERTION_ORDER",
        "PREMIUM_FACEBOOK_INSTREAM_VIDEO_TRP",
      ];
      return t.includes(e);
    }
    function c(e) {
      var t = [
        "TRP",
        "PREMIUM_FACEBOOK_INSTREAM_VIDEO_TRP",
        "REACH_AND_FREQUENCY_INSERTION_ORDER",
        "REACH_AND_FREQUENCY_INSERTION_ORDER_GENERAL",
      ];
      return t.includes(e);
    }
    function d(e) {
      var t = ["TRP", "PREMIUM_FACEBOOK_INSTREAM_VIDEO_TRP"];
      return t.includes(e);
    }
    function m(e) {
      var t = ["REACH_AND_FREQUENCY_INSERTION_ORDER"];
      return t.includes(e);
    }
    function p(e) {
      var t = ["REACH_AND_FREQUENCY_INSERTION_ORDER_GENERAL"];
      return t.includes(e);
    }
    function _(e) {
      var t = [
        "PREMIUM_FACEBOOK_INSTREAM_VIDEO_TRP",
        "REACH_AND_FREQUENCY_INSERTION_ORDER",
      ];
      return t.includes(e);
    }
    function f(e) {
      var t = [
        "PREMIUM_FACEBOOK_INSTREAM_VIDEO_TRP",
        "REACH_AND_FREQUENCY_INSERTION_ORDER",
      ];
      return t.includes(e);
    }
    ((i.getDoesPlanSupportContentAndPublisherExclusions = e),
      (i.getDoesPlanSupportContentPackaging = l),
      (i.getDoesPlanSupportNonVideoFormats = s),
      (i.getIsPlanClassifiedUnderInstream = u),
      (i.getIsPlanTypeBasedOnIO = c),
      (i.getIsPlanTypeBasedOnTRP = d),
      (i.getIsReachAndFrequencyIOInstream = m),
      (i.getIsReachAndFrequencyIOGeneral = p),
      (i.getShouldDisableInstagramAccount = _),
      (i.getShouldUseRestrictedNielsenTargeting = f));
  },
  66,
);
