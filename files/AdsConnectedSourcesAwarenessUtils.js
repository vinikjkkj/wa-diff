__d(
  "AdsConnectedSourcesAwarenessUtils",
  ["AdsAPIObjectives", "AdsAutomaticFlowUtils", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("18821");
    }
    function s(e) {
      return e === r("AdsAPIObjectives").OUTCOME_AWARENESS;
    }
    function u(t) {
      return s(t) && e();
    }
    function c(e, t) {
      return u(t) && e !== "site_links";
    }
    function d(e, t) {
      return (
        e != null &&
        u(t) &&
        o("AdsAutomaticFlowUtils").isStaticSingleImageOrVideoFormat(e)
      );
    }
    ((l.isOCMRAwarenessGKEnabled = e),
      (l.isOCMRAwarenessAndGKEnabled = u),
      (l.shouldHidePluginForAwareness = c),
      (l.shouldHideAPlusCForOCMRAwarenessAndSingleImageOrVideoFormat = d));
  },
  98,
);
