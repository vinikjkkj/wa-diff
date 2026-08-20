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
      o("WAWebApplyLeadStageSublistAction")
        .applyLeadStageSublistForProfile(t, n, a)
        .then(function () {
          return o("WAWebSyncLeadStageToProfile").syncLeadStageToProfile(t, n);
        })
        .catch(function (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[customer_manager] lead stage write from the pipeline failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("lead-stage-sublist-pipeline-apply-fail");
        });
    }
    l.applyPipelineLeadStage = s;
  },
  98,
);
