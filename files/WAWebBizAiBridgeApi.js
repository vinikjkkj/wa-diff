__d(
  "WAWebBizAiBridgeApi",
  [
    "WALogger",
    "WAWebAIAgentAIReplyUtils",
    "WAWebBizAISettingsCategoryHandlers",
    "WAWebBizAISettingsVersionCollection",
    "WAWebBizAiBulkThreadControlLogEvents",
    "WAWebBizAiLargeScreensGateModel",
    "WAWebBizAiResponseSettingsV2GateModel",
    "WAWebChatCollection",
    "WAWebLidMigrationUtils",
    "WAWebProtobufSyncAction.pb",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _;
    function f(e, t) {
      var n = null,
        r =
          e != null
            ? o("WAWebWidFactory").createUserWidOrThrow(e, "lid")
            : null,
        a = t != null ? o("WAWebWidFactory").createUserWidOrThrow(t) : null;
      if (
        (r != null && (n = o("WAWebChatCollection").ChatCollection.get(r)),
        n == null &&
          a != null &&
          (n = o("WAWebChatCollection").ChatCollection.get(a)),
        n == null && a == null)
      ) {
        var i = r != null ? o("WAWebLidMigrationUtils").toPn(r) : null;
        n = i != null ? o("WAWebChatCollection").ChatCollection.get(i) : null;
      } else if (n == null && r == null) {
        var l = a != null ? o("WAWebLidMigrationUtils").toLid(a) : null;
        n = l != null ? o("WAWebChatCollection").ChatCollection.get(l) : null;
      }
      return n;
    }
    var g = {
      updateChatCapiThreadControl: function (n) {
        var t = n.consumerLid,
          r = n.consumerPhoneNumber,
          a = n.shouldSuppressNotification,
          i = n.status,
          l = n.suggestedRepliesEnabled,
          c = n.timestampMs;
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[BizAI] updateChatCapiThreadControl status=",
              "",
            ])),
          i,
        );
        var d = f(t, r);
        d != null
          ? (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[Maiba] updateChatCapiThreadControl status=",
                  " chat=",
                  "",
                ])),
              i,
              d.id.toLogString(),
            ),
            o("WAWebAIAgentAIReplyUtils").applyServerEchoThreadControl({
              chat: d,
              options: { suppressNotification: a, suggestedRepliesEnabled: l },
              status: i,
              timestampMs: c,
            }))
          : o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[BizAI] updateChatCapiThreadControl: chat not found",
                  ])),
              )
              .sendLogs("maiba-thread-control-chat-not-found");
      },
      bulkUpdateChatCapiThreadControl: function (t) {
        var e = t.updates;
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[BizAI] bulkUpdateChatCapiThreadControl count=",
              "",
            ])),
          e.length,
        );
        var n = 0,
          a = 0,
          i = 0;
        for (var l of e.entries()) {
          var s = l[0],
            u = l[1];
          try {
            var p = f(u.consumerLid, u.consumerPhoneNumber);
            p != null
              ? (o("WAWebAIAgentAIReplyUtils").applyServerEchoThreadControl({
                  chat: p,
                  options: {
                    suppressNotification: !0,
                    suggestedRepliesEnabled: u.suggestedRepliesEnabled,
                  },
                  status: u.status,
                  timestampMs: u.timestampMs,
                }),
                (n += 1))
              : (a += 1);
          } catch (e) {
            ((i += 1),
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[BizAI] bulkUpdateChatCapiThreadControl: failed to apply update at index=",
                      "",
                    ])),
                  s,
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("maiba-bulk-thread-control-update-failed"));
          }
        }
        e.length > 0 &&
          (o(
            "WAWebBizAiBulkThreadControlLogEvents",
          ).logBulkThreadControlBatchApplied({
            appliedCount: n,
            failedCount: i,
            notFoundCount: a,
            totalCount: e.length,
          }),
          n === 0 &&
            a > 0 &&
            o("WALogger")
              .WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[BizAI] bulkUpdateChatCapiThreadControl: applied nothing, notFound=",
                    ", total=",
                    "",
                  ])),
                a,
                e.length,
              )
              .tags("non-sad")
              .sendLogs("maiba-bulk-thread-control-batch-unresolved", {
                employeeSampling: 1,
                sampling: 0.01,
                sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
              }));
      },
      handleBizAiSettingsNudge: function (t) {
        var e = t.category,
          n = t.updatedAtMs,
          r = t.version,
          a = o(
            "WAWebProtobufSyncAction.pb",
          ).SyncActionValue$BizAISettingsNudgeAction$BizAISettingsCategory.cast(
            e,
          );
        if (a == null) {
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[BizAI] handleBizAiSettingsNudge: unknown category=",
                "",
              ])),
            e,
          );
          return;
        }
        (o("WAWebBizAISettingsCategoryHandlers").registerCategoryHandler(a),
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[BizAI] handleBizAiSettingsNudge: category=",
                " version=",
                "",
              ])),
            e,
            r,
          ),
          o(
            "WAWebBizAISettingsVersionCollection",
          ).BizAISettingsVersionCollection.handleNudge(a, r, n));
      },
      loadedBizAiLargeScreensGate: function (t) {
        var e = t.enabled;
        o("WAWebBizAiLargeScreensGateModel").applyBizAiLargeScreensGate(e);
      },
      loadedBizAiResponseSettingsV2Gate: function (t) {
        var e = t.enabled;
        o(
          "WAWebBizAiResponseSettingsV2GateModel",
        ).applyBizAiResponseSettingsV2Gate(e);
      },
    };
    l.BizAiBridgeApi = g;
  },
  98,
);
