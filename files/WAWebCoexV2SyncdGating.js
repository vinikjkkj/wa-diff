__d(
  "WAWebCoexV2SyncdGating",
  [
    "WAWebABProps",
    "WAWebCoexV2GatingUtils",
    "WAWebCoexV2UserAgentEligibility",
    "WAWebMobilePlatforms",
  ],
  function (t, n, r, o, a, i, l) {
    async function e() {
      return (
        o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled() &&
        o("WAWebMobilePlatforms").isSMB() &&
        (await o("WAWebCoexV2UserAgentEligibility").isSelfCoexV2Hosted()) &&
        o("WAWebABProps").getABPropConfigValue("enable_syncd_coex_v2") === !0
      );
    }
    l.isCoexV2SyncdEnabled = e;
  },
  98,
);
