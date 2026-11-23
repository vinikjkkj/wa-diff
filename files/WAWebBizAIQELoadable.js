__d(
  "WAWebBizAIQELoadable",
  [
    "JSResourceForInteraction",
    "WAWebBizAIAppointmentsQEConfig",
    "WAWebBizAIQEEventBus",
    "WAWebBizAiAgentGating",
    "WAWebBizAiAgentStatusUtils",
    "WAWebEventEmitter",
    "WAWebLazyLoadedRetriable",
    "WAWebMobilePlatforms",
    "WAWebNoop",
    "useWAWebEventTargetValue",
    "useWAWebSourceSnapshot",
  ],
  function (t, n, r, o, a, i, l) {
    var e = [
        o("WAWebBizAIAppointmentsQEConfig").APPOINTMENTS_QE_PARAM,
        { universe: "maiba_web_meta_one_entrypoints", param: "enabled" },
      ],
      s = new (r("WAWebEventEmitter"))(),
      u = { count: 0, params: [] },
      c = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")("WAWebBizAIQE")
          .__setRef("WAWebBizAIQELoadable")
          .load();
        return e.prefetchBizAIQEWithoutExposure;
      }, "WAWebBizAIQE");
    function d(t) {
      (t === void 0 && (t = e),
        !(
          t.length === 0 ||
          !o("WAWebMobilePlatforms").isSMB() ||
          !o("WAWebBizAiAgentGating").isBizAIQEClientEnabled()
        ) &&
          c()
            .then(function (e) {
              e(t);
            })
            .catch(r("WAWebNoop")));
    }
    function m(e) {
      var t, n;
      return (t =
        (n = r("JSResourceForInteraction")("WAWebBizAIQE")
          .__setRef("WAWebBizAIQELoadable")
          .getModuleIfRequired()) == null
          ? void 0
          : n.getBizAIQEValueWithoutExposure(e)) != null
        ? t
        : null;
    }
    function p(e) {
      var t = e.param,
        n = e.universe;
      return r("useWAWebEventTargetValue")(
        o("WAWebBizAIQEEventBus").BizAIQEEventBus,
        "updated",
        function () {
          return m({ universe: n, param: t });
        },
        [n, t],
      );
    }
    function _(e) {
      if (
        !(
          !o("WAWebBizAiAgentGating").isBizAIQEClientEnabled() ||
          o("WAWebBizAiAgentStatusUtils").getAiAgentOnboardingState() === !1
        )
      ) {
        var t = u,
          n = t.count,
          r = t.params,
          a = r.some(function (t) {
            return t.universe === e.universe && t.param === e.param;
          });
        ((u = { count: n + 1, params: a ? r : [].concat(r, [e]) }),
          s.trigger("updated"));
      }
    }
    function f() {
      return r("useWAWebSourceSnapshot")(s, "updated", function () {
        return u;
      });
    }
    ((l.prefetchBizAIQEAtLaunch = d),
      (l.getLoadedBizAIQEValue = m),
      (l.useLoadedBizAIQEValue = p),
      (l.requestBizAIQEExposure = _),
      (l.useBizAIQEExposureRequests = f));
  },
  98,
);
