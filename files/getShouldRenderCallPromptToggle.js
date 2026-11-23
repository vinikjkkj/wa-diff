__d(
  "getShouldRenderCallPromptToggle",
  ["CallPromptFeatureGating"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, a, i) {
      return t
        ? !0
        : e
          ? !1
          : o("CallPromptFeatureGating").eligibleForCallPromptForCTXAdsAM(
              a,
              i,
              r,
              n,
              {
                logExposureForNonMsgActiveExperiment: !0,
                logExposureForHighAdminExperiment: !0,
                pathForHoldoutExposureLogging: o("CallPromptFeatureGating")
                  .CallPromptCreationHoldoutLoggingPath
                  .ToggleInStartConversationTemplate,
              },
            );
    }
    l.default = e;
  },
  98,
);
