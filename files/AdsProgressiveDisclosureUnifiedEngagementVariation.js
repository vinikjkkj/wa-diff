__d(
  "AdsProgressiveDisclosureUnifiedEngagementVariation",
  [
    "AdsAPIObjectives",
    "AdsProgressiveDisclosureUtils",
    "EngagementUnitificationGating",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useMemo;
    function u(e, t) {
      var n = o("EngagementUnitificationGating").getEULaunch1AudienceExperiment(
          e,
        ),
        r = o(
          "EngagementUnitificationGating",
        ).isEUCreateEditDuplicationNUXEnabled(e);
      return n || r
        ? o("AdsProgressiveDisclosureUtils").ProgressiveDisclosureVariation
            .StaticExtended
        : null;
    }
    function c(e, t) {
      var n = o("EngagementUnitificationGating").getEULaunch1AudienceExperiment(
          e,
        ),
        r = o(
          "EngagementUnitificationGating",
        ).isEUCreateEditDuplicationNUXEnabled(e);
      return n || r ? "static_extended_with_hidden_suggestion" : "none";
    }
    function d(e) {
      return e !== r("AdsAPIObjectives").OUTCOME_ENGAGEMENT
        ? !1
        : u(!1) ===
            o("AdsProgressiveDisclosureUtils").ProgressiveDisclosureVariation
              .StaticExtended ||
            o("EngagementUnitificationGating").getEULaunch1AudienceExperiment(
              !1,
            ) === !0 ||
            o(
              "EngagementUnitificationGating",
            ).isEUCreateEditDuplicationNUXEnabled(!1);
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      e: {
        if (e == null) {
          n = !1;
          break e;
        }
        var r;
        (t[0] !== e ? ((r = d(e)), (t[0] = e), (t[1] = r)) : (r = t[1]),
          (n = r));
      }
      return n;
    }
    ((l.getProgressiveDisclosureUnifiedEngagementVariation = u),
      (l.getProgressiveDisclosureUnifiedEngagementVariationString = c),
      (l.getIsPGDEngagementUnificationTestVariation = d),
      (l.useIsPGDEngagementUnificationExpStaticExtendedVariation = m));
  },
  98,
);
