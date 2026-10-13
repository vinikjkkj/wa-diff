__d(
  "WAWebApplyPipelineLeadStageAction",
  [
    "WALogger",
    "WAWebApplyLeadStageSublistAction",
    "WAWebSyncLeadStageToProfile",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, n, a) {
      return o("WAWebApplyLeadStageSublistAction")
        .applyLeadStageSublistForProfile(t, n, a, { logLeadSignal: !0 })
        .then(function () {
          return o("WAWebSyncLeadStageToProfile").syncLeadStageToProfile(t, n);
        })
        .then(function () {
          return !0;
        })
        .catch(function (t) {
          return (
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[customer_manager] lead stage write from the pipeline failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("lead-stage-sublist-pipeline-apply-fail"),
            !1
          );
        });
    }
    l.applyPipelineLeadStage = s;
  },
  98,
);
