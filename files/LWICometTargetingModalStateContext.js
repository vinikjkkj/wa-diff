__d(
  "LWICometTargetingModalStateContext",
  [
    "LWICometRegulatedCategoryUtils",
    "LWICometTargetingModalConstraints",
    "emptyFunction",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.createContext({
        closeDialog: r("emptyFunction"),
        fetchedTargetingEntries: {},
        hasValidAIGeneratedAudience: !1,
        isGeneratingAI: !1,
        isPAOBasicAdvertiser: !1,
        isSubmitting: !1,
        mode: "create",
        regulatedCategories: o("LWICometRegulatedCategoryUtils")
          .EMPTY_REGULATED_CATEGORIES,
        showEditIsNotRecommendedNotice: !1,
        targetingConstraints: o("LWICometTargetingModalConstraints")
          .DEFAULT_TARGETING_CONSTRAINT,
      });
    l.default = u;
  },
  98,
);
