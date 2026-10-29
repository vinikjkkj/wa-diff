__d(
  "WAWebBizAIQELoadable",
  [
    "JSResourceForInteraction",
    "WAWebBizAiAgentGating",
    "WAWebLazyLoadedRetriable",
    "WAWebNoop",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = [],
      s = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")("WAWebBizAIQE")
            .__setRef("WAWebBizAIQELoadable")
            .load();
          return e.prefetchBizAIQEWithoutExposure;
        }),
        "WAWebBizAIQE",
      );
    function u(t) {
      (t === void 0 && (t = e),
        !(
          t.length === 0 || !o("WAWebBizAiAgentGating").isBizAIQEClientEnabled()
        ) &&
          s()
            .then(function (e) {
              e(t);
            })
            .catch(r("WAWebNoop")));
    }
    l.prefetchBizAIQEAtLaunch = u;
  },
  98,
);
