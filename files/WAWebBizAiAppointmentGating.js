__d(
  "WAWebBizAiAppointmentGating",
  [
    "WAWebBizAIAppointmentsQEConfig",
    "WAWebBizAIQE",
    "WAWebBizAiAgentGating",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBusinessProfileCollection",
    "WAWebCmd",
    "WAWebMobilePlatforms",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["updated", "add"].concat(
      o("WAWebBizAiAgentStatusUtils").ONBOARDING_EVENTS,
      ["on_ab_props_update_from_bridge", "offline_delivery_end_from_bridge"],
    );
    function s() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebBizAiAgentStatusUtils").getAiAgentOnboardingState() === !0 &&
        o("WAWebBizAiAgentGating").isAppointmentsEnabled() &&
        o("WAWebBizAIQE").getBizAIQEValueWithoutExposure(
          o("WAWebBizAIAppointmentsQEConfig").APPOINTMENTS_QE_PARAM,
        ) === !0
      );
    }
    function u() {
      return r("useWAWebEventTargetValue")(
        [
          o("WAWebBizAIQE").BizAIQEEventBus,
          o("WAWebBusinessProfileCollection").BusinessProfileCollection,
          o("WAWebCmd").Cmd,
        ],
        e,
        s,
      );
    }
    ((l.isAppointmentsEnabled = s), (l.useIsAppointmentsEnabled = u));
  },
  98,
);
