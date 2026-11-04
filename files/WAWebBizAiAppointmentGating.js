__d(
  "WAWebBizAiAppointmentGating",
  [
    "WAWebBizAIAppointmentsQEConfig",
    "WAWebBizAIQE",
    "WAWebBizAiAgentGating",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBusinessProfileCollection",
    "WAWebCmd",
    "WAWebEnvironment",
    "WAWebMobilePlatforms",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["updated", "add"].concat(
      o("WAWebBizAiAgentStatusUtils").ONBOARDING_EVENTS,
      ["on_ab_props_update_from_bridge", "offline_delivery_end_from_bridge"],
    );
    function s() {
      return r("WAWebEnvironment").isWeb
        ? o("WAWebMobilePlatforms").isSMB() &&
            o("WAWebBizAiAgentStatusUtils").getAiAgentOnboardingState() ===
              !0 &&
            o("WAWebBizAiAgentGating").isAppointmentsEnabled() &&
            o("WAWebBizAIQE").getBizAIQEValueWithoutExposure(
              o("WAWebBizAIAppointmentsQEConfig").APPOINTMENTS_QE_PARAM,
            ) === !0
        : o("WAWebBizAiAgentGating").isAppointmentsEnabled();
    }
    function u() {
      var t = o("react-compiler-runtime").c(1),
        n;
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = [
              o("WAWebBizAIQE").BizAIQEEventBus,
              o("WAWebBusinessProfileCollection").BusinessProfileCollection,
              o("WAWebCmd").Cmd,
            ]),
            (t[0] = n))
          : (n = t[0]),
        r("useWAWebEventTargetValue")(n, e, s)
      );
    }
    ((l.isAppointmentsEnabled = s), (l.useIsAppointmentsEnabled = u));
  },
  98,
);
