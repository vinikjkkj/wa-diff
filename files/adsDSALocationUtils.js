__d(
  "adsDSALocationUtils",
  [
    "AdsCampaignTargetingCommonUtils",
    "AdsDSAISOCodes",
    "AdsDSATargetCountryGroups",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o(
        "AdsCampaignTargetingCommonUtils",
      ).doesCampaignTargetingContainRequiredLocations(
        e,
        o("AdsDSAISOCodes").DSA_ISO_CODES,
        o("AdsDSATargetCountryGroups").DSA_COUNTRY_GROUP_NAMES,
      );
    }
    function s(e, t) {
      return o(
        "AdsCampaignTargetingCommonUtils",
      ).doesTargetOnlyCountriesInRequiredCountries(
        e,
        t,
        o("AdsDSAISOCodes").DSA_ISO_CODES,
      );
    }
    function u() {
      var e = r("justknobx")._("1091"),
        t = r("gkx")("21178");
      return e && t;
    }
    ((l.areLocationsRequireDSA = e),
      (l.areLocationsTargetingDSAOnly = s),
      (l.isInAdblockExperiment = u));
  },
  98,
);
