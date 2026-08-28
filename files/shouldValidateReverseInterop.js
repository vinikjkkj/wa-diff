__d(
  "shouldValidateReverseInterop",
  ["AdsInteropConfig.experimental", "AndromedaSVLog", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r("AdsInteropConfig.experimental").VALIDATION_SAMPLE_RATE;
      e === "campaignGroup"
        ? (t = r(
            "AdsInteropConfig.experimental",
          ).CAMPAIGN_GROUP_SHADOW_VALIDATION_SAMPLE_RATE)
        : e === "campaign"
          ? (t = r(
              "AdsInteropConfig.experimental",
            ).CAMPAIGN_SHADOW_VALIDATION_SAMPLE_RATE)
          : e === "adgroup" &&
            (t = r(
              "AdsInteropConfig.experimental",
            ).ADGROUP_SHADOW_VALIDATION_SAMPLE_RATE);
      var n = r("gkx")("21684");
      return o("AndromedaSVLog").isSVLogEnabled() || Math.random() < t || n;
    }
    l.default = e;
  },
  98,
);
