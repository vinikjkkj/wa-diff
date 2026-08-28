__d(
  "AdsDACreativeFlexMediaUtils",
  ["AdsCreativeFlexTypes", "AdsCreativeMediaSourcingSpecTypes.flow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e ===
          o("AdsCreativeMediaSourcingSpecTypes.flow")
            .RelatedMediaOptInStatusSpecType.OPT_IN ||
        e ===
          o("AdsCreativeMediaSourcingSpecTypes.flow")
            .RelatedMediaOptInStatusSpecType.OPT_IN_AS_INFERRED_DA_INTRO_CARD
      );
    }
    function s(e) {
      return (
        e === o("AdsCreativeFlexTypes").RelatedMediaSelection.OPT_IN ||
        e ===
          o("AdsCreativeFlexTypes").RelatedMediaSelection
            .OPT_IN_AS_INFERRED_DA_INTRO_CARD
      );
    }
    ((l.isValidDARelatedMediaOptInStatus = e),
      (l.isValidDARelatedMediaSelection = s));
  },
  98,
);
