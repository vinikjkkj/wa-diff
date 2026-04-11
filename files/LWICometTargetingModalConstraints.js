__d(
  "LWICometTargetingModalConstraints",
  ["LWICometRadiusUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        isMaxAgeFixed: !1,
        isMinAgeFixed: !1,
        maxAgeRange: null,
        maxTargetingAge: 65,
        minAgeRange: null,
        minTargetingAge: 13,
      },
      s = { advantage_audience: 0 },
      u = { isGenderFixed: !1 },
      c = [],
      d = [],
      m = {
        ageConfig: e,
        allowlistedCountries: c,
        blocklistedCountries: c,
        dtaaSAndLaLaaSEligibleObjectives: d,
        genderConfig: u,
        isRestrictedRegulatedCategoryAd: !1,
        radiusConfig: o("LWICometRadiusUtils").getRadiusConfigMap(),
        targetingAutomationConfig: s,
      };
    ((l.DEFAULT_AGE_CONFIG = e),
      (l.DEFAULT_GENDER_CONFIG = u),
      (l.DEFAULT_TARGETING_CONSTRAINT = m));
  },
  98,
);
