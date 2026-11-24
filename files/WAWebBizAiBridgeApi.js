__d(
  "WAWebBizAiBridgeApi",
  [
    "WALogger",
    "WAWebAIAgentAIReplyUtils",
    "WAWebBizAISettingsCategoryHandlers",
    "WAWebBizAISettingsVersionCollection",
    "WAWebBizAiBulkThreadControlLogEvents",
    "WAWebBizAiResponseSettingsV2GateModel",
    "WAWebBizAiWebDataDownloadsGateModel",
    "WAWebBizAiWebEditingCoachingGateModel",
    "WAWebChatCollection",
    "WAWebLidMigrationUtils",
    "WAWebProtobufSyncAction.pb",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f;
    function g(e, t) {
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
    var h = {
      updateChatCapiThreadControl: async function (n) {
        var t = n.consumerLid,
          a = n.consumerPhoneNumber,
          i = n.handoffReason,
          l = n.lastHandoffActor,
          d = n.shouldSuppressNotification,
          m = n.status,
          p = n.suggestedRepliesEnabled,
          _ = n.timestampMs;
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[BizAI] updateChatCapiThreadControl status=",
              "",
            ])),
          m,
        );
        try {
          var f = g(t, a);
          if (f == null) {
            (o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[BizAI] updateChatCapiThreadControl: chat not found",
                  ])),
              )
              .sendLogs("maiba-thread-control-chat-not-found"),
              o(
                "WAWebBizAiBulkThreadControlLogEvents",
              ).logThreadControlApplyOutcome("not_found", m));
            return;
          }
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[Maiba] updateChatCapiThreadControl status=",
                " chat=",
                "",
              ])),
            m,
            f.id.toLogString(),
          );
          var h = await o(
            "WAWebAIAgentAIReplyUtils",
          ).applyServerEchoThreadControl({
            chat: f,
            options: {
              handoffReason: i,
              suppressNotification: d,
              suggestedRepliesEnabled: p,
              lastHandoffActor: l,
            },
            status: m,
            timestampMs: _,
          });
          o(
            "WAWebBizAiBulkThreadControlLogEvents",
          ).logThreadControlApplyOutcome(h, m);
        } catch (e) {
          (o(
            "WAWebBizAiBulkThreadControlLogEvents",
          ).logThreadControlApplyOutcome("failed", m),
            o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[BizAI] updateChatCapiThreadControl: failed to apply update",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("maiba-thread-control-update-failed"));
        }
      },
      bulkUpdateChatCapiThreadControl: async function (t) {
        var e = t.updates;
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[BizAI] bulkUpdateChatCapiThreadControl count=",
              "",
            ])),
          e.length,
        );
        var n = 0,
          a = 0,
          i = 0,
          l = 0,
          s = 0;
        (await Promise.all(
          e.map(async function (e, t) {
            try {
              var u = g(e.consumerLid, e.consumerPhoneNumber);
              if (u != null) {
                var c = await o(
                  "WAWebAIAgentAIReplyUtils",
                ).applyServerEchoThreadControl({
                  chat: u,
                  options: {
                    suppressNotification: !0,
                    suggestedRepliesEnabled: e.suggestedRepliesEnabled,
                    lastHandoffActor: e.lastHandoffActor,
                  },
                  status: e.status,
                  timestampMs: e.timestampMs,
                });
                e: {
                  if (c === "applied") {
                    n += 1;
                    break e;
                  }
                  if (c === "stale") {
                    l += 1;
                    break e;
                  }
                  if (c === "pending") {
                    s += 1;
                    break e;
                  }
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      c,
                  );
                }
              } else a += 1;
            } catch (e) {
              ((i += 1),
                o("WALogger")
                  .ERROR(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[BizAI] bulkUpdateChatCapiThreadControl: failed to apply update at index=",
                        "",
                      ])),
                    t,
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("maiba-bulk-thread-control-update-failed"));
            }
          }),
        ),
          e.length > 0 &&
            (o(
              "WAWebBizAiBulkThreadControlLogEvents",
            ).logBulkThreadControlBatchApplied({
              appliedCount: n,
              failedCount: i,
              notFoundCount: a,
              pendingCount: s,
              staleCount: l,
              totalCount: e.length,
            }),
            n + l + s === 0 &&
              a > 0 &&
              o("WALogger")
                .WARN(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
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
                })));
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
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[BizAI] handleBizAiSettingsNudge: unknown category=",
                "",
              ])),
            e,
          );
          return;
        }
        (o("WAWebBizAISettingsCategoryHandlers").registerCategoryHandler(a),
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
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
      loadedBizAiResponseSettingsV2Gate: function (t) {
        var e = t.enabled;
        o(
          "WAWebBizAiResponseSettingsV2GateModel",
        ).applyBizAiResponseSettingsV2Gate(e);
      },
      loadedBizAiWebDataDownloadsGate: function (t) {
        var e = t.enabled;
        o("WAWebBizAiWebDataDownloadsGateModel").applyBizAiWebDataDownloadsGate(
          e,
        );
      },
      loadedBizAiWebEditingCoachingGate: function (t) {
        var e = t.enabled;
        o(
          "WAWebBizAiWebEditingCoachingGateModel",
        ).applyBizAiWebEditingCoachingGate(e);
      },
    };
    l.BizAiBridgeApi = h;
  },
  98,
);
