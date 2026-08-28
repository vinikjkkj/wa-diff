__d(
  "maibaApplySectionAction",
  [
    "AdsPerfInteractionsController",
    "MAIBACreationStepsSection",
    "MAIBAToolSignalReactivity",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { audience: "AUDIENCE", budget: "BUDGET", placement: "PLACEMENTS" };
    function s(t) {
      var n;
      return t == null ? null : (n = e[t.toLowerCase()]) != null ? n : null;
    }
    var u = {
      AUDIENCE: {
        domIds: ["campaignTargetingSection"],
        reactivitySection: r("MAIBACreationStepsSection").AUDIENCE,
      },
      BUDGET: {
        domIds: ["campaignBasicSection", "campaignBasicPGDSection"],
        reactivitySection: r("MAIBACreationStepsSection").BUDGET,
      },
      PLACEMENTS: {
        domIds: [
          "campaignPlacementExpandableSection",
          "campaignPlacementSection",
          "campaignPlacementStaticPGDSection",
        ],
        reactivitySection: r("MAIBACreationStepsSection").PLACEMENTS,
      },
    };
    function c(e) {
      for (var t of e) {
        var n = document.getElementById(t);
        if (n != null) {
          n.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }
    }
    function d(e) {
      var t = u[e];
      (c(t.domIds),
        o("MAIBAToolSignalReactivity").startOptimisticSectionShimmer(
          t.reactivitySection,
        ),
        r("AdsPerfInteractionsController").startInteraction(
          "am.maiba.actionability",
          i.id,
        ),
        r("AdsPerfInteractionsController").addCustomInteractionAnnotation(
          "am.maiba.actionability",
          { section: e.toLowerCase() },
        ));
    }
    ((l.applySectionFromAttribute = s), (l.primeSectionReactivity = d));
  },
  98,
);
