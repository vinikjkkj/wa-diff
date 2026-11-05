__d(
  "WAWebBizAiMetaOneExperiment",
  ["WAWebBizAIQELoadable"],
  function (t, n, r, o, a, i, l) {
    var e = { universe: "maiba_web_meta_one_entrypoints", param: "enabled" };
    function s() {
      return o("WAWebBizAIQELoadable").getLoadedBizAIQEValue(e);
    }
    function u() {
      o("WAWebBizAIQELoadable").requestBizAIQEExposure(e);
    }
    function c() {
      return o("WAWebBizAIQELoadable").useLoadedBizAIQEValue(e);
    }
    ((l.META_ONE_BIZ_AI_EXPERIMENT = e),
      (l.getMetaOneBizAiExperimentValueWithoutExposure = s),
      (l.requestMetaOneBizAiExperimentExposure = u),
      (l.useMetaOneBizAiExperimentValue = c));
  },
  98,
);
