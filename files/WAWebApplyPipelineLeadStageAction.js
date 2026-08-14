__d(
  "WAWebApplyPipelineLeadStageAction",
  [
    "WAJids",
    "WALogger",
    "WAWebApplyLeadStageSublistAction",
    "WAWebChatCollection",
    "WAWebLeadSublistGating",
    "WAWebLidMigrationUtils",
    "WAWebSyncLeadStageToProfile",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, n, a) {
      var i = u(t);
      if (
        i == null ||
        !o("WAWebLeadSublistGating").isChatEligibleForLeadSublist(i)
      ) {
        o("WAWebSyncLeadStageToProfile").syncLeadStageToProfile(t, n);
        return;
      }
      o("WAWebApplyLeadStageSublistAction")
        .applyLeadStageSublist(
          o("WAJids").unsafeCoerceToChatJid(i.id.toString()),
          n,
          a,
        )
        .then(
          function () {
            return o("WAWebSyncLeadStageToProfile").syncLeadStageToProfile(
              t,
              n,
            );
          },
          function (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[customer_manager] lead stage write from the pipeline failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("lead-stage-sublist-pipeline-apply-fail");
          },
        );
    }
    function u(e) {
      var t = o("WAWebWidFactory").createWid(e);
      if (!t.isUser()) return null;
      var n = o("WAWebLidMigrationUtils").toUserLid(t);
      return n != null
        ? o("WAWebChatCollection").ChatCollection.getChatByAccountLid(n)
        : null;
    }
    l.applyPipelineLeadStage = s;
  },
  98,
);
