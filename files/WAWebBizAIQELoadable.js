__d(
  "WAWebBizAIQELoadable",
  [
    "JSResourceForInteraction",
    "WAWebBizAIAppointmentsQEConfig",
    "WAWebBizAIQEEventBus",
    "WAWebBizAiAgentGating",
    "WAWebBizAiAgentStatusUtils",
    "WAWebEnvironment",
    "WAWebEventEmitter",
    "WAWebLazyLoadedRetriable",
    "WAWebMobilePlatforms",
    "WAWebNoop",
    "asyncToGeneratorRuntime",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
    "useWAWebSourceSnapshot",
  ],
  function (t, n, r, o, a, i, l) {
    var e = [].concat(
        r("WAWebEnvironment").isWeb
          ? [o("WAWebBizAIAppointmentsQEConfig").APPOINTMENTS_QE_PARAM]
          : [],
        [{ universe: "maiba_web_meta_one_entrypoints", param: "enabled" }],
      ),
      s = new (r("WAWebEventEmitter"))(),
      u = { count: 0, params: [] },
      c = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")("WAWebBizAIQE")
            .__setRef("WAWebBizAIQELoadable")
            .load();
          return e.prefetchBizAIQEWithoutExposure;
        }),
        "WAWebBizAIQE",
      );
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
      var t = o("react-compiler-runtime").c(4),
        n = e.param,
        a = e.universe,
        i,
        l;
      return (
        t[0] !== n || t[1] !== a
          ? ((i = function () {
              return m({ universe: a, param: n });
            }),
            (l = [a, n]),
            (t[0] = n),
            (t[1] = a),
            (t[2] = i),
            (t[3] = l))
          : ((i = t[2]), (l = t[3])),
        r("useWAWebEventTargetValue")(
          o("WAWebBizAIQEEventBus").BizAIQEEventBus,
          "updated",
          i,
          l,
        )
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
      return r("useWAWebSourceSnapshot")(s, "updated", g);
    }
    function g() {
      return u;
    }
    ((l.prefetchBizAIQEAtLaunch = d),
      (l.getLoadedBizAIQEValue = m),
      (l.useLoadedBizAIQEValue = p),
      (l.requestBizAIQEExposure = _),
      (l.useBizAIQEExposureRequests = f));
  },
  98,
);
