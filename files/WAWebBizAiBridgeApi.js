__d(
  "WAWebBizAiBridgeApi",
  [
    "Promise",
    "WALogger",
    "WAWebAIAgentAIReplyUtils",
    "WAWebBizAISettingsCategoryHandlers",
    "WAWebBizAISettingsVersionCollection",
    "WAWebBizAiBulkThreadControlLogEvents",
    "WAWebBizAiLargeScreensGateModel",
    "WAWebBizAiResponseSettingsV2GateModel",
    "WAWebBizAiWebDataDownloadsGateModel",
    "WAWebBizAiWebEditingCoachingGateModel",
    "WAWebBizAiWebSmartComposerAiListsGateModel",
    "WAWebChatCollection",
    "WAWebLidMigrationUtils",
    "WAWebProtobufSyncAction.pb",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g;
    function h(e, t) {
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
    var y = {
      updateChatCapiThreadControl: (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.consumerLid,
            a = t.consumerPhoneNumber,
            i = t.lastHandoffActor,
            l = t.shouldSuppressNotification,
            d = t.status,
            m = t.suggestedRepliesEnabled,
            p = t.timestampMs;
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[BizAI] updateChatCapiThreadControl status=",
                "",
              ])),
            d,
          );
          try {
            var _ = h(n, a);
            if (_ == null) {
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
                ).logThreadControlApplyOutcome("not_found", d));
              return;
            }
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[Maiba] updateChatCapiThreadControl status=",
                  " chat=",
                  "",
                ])),
              d,
              _.id.toLogString(),
            );
            var f = yield o(
              "WAWebAIAgentAIReplyUtils",
            ).applyServerEchoThreadControl({
              chat: _,
              options: {
                suppressNotification: l,
                suggestedRepliesEnabled: m,
                lastHandoffActor: i,
              },
              status: d,
              timestampMs: p,
            });
            o(
              "WAWebBizAiBulkThreadControlLogEvents",
            ).logThreadControlApplyOutcome(f, d);
          } catch (e) {
            (o(
              "WAWebBizAiBulkThreadControlLogEvents",
            ).logThreadControlApplyOutcome("failed", d),
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
        });
        function a(e) {
          return t.apply(this, arguments);
        }
        return a;
      })(),
      bulkUpdateChatCapiThreadControl: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.updates;
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[BizAI] bulkUpdateChatCapiThreadControl count=",
                "",
              ])),
            t.length,
          );
          var a = 0,
            i = 0,
            l = 0,
            s = 0,
            u = 0;
          (yield (g || (g = n("Promise"))).all(
            t.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e, t) {
                    try {
                      var n = h(e.consumerLid, e.consumerPhoneNumber);
                      if (n != null) {
                        var c = yield o(
                          "WAWebAIAgentAIReplyUtils",
                        ).applyServerEchoThreadControl({
                          chat: n,
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
                            a += 1;
                            break e;
                          }
                          if (c === "stale") {
                            s += 1;
                            break e;
                          }
                          if (c === "pending") {
                            u += 1;
                            break e;
                          }
                          throw Error(
                            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                              c,
                          );
                        }
                      } else i += 1;
                    } catch (e) {
                      ((l += 1),
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
                  },
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          ),
            t.length > 0 &&
              (o(
                "WAWebBizAiBulkThreadControlLogEvents",
              ).logBulkThreadControlBatchApplied({
                appliedCount: a,
                failedCount: l,
                notFoundCount: i,
                pendingCount: u,
                staleCount: s,
                totalCount: t.length,
              }),
              a + s + u === 0 &&
                i > 0 &&
                o("WALogger")
                  .WARN(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[BizAI] bulkUpdateChatCapiThreadControl: applied nothing, notFound=",
                        ", total=",
                        "",
                      ])),
                    i,
                    t.length,
                  )
                  .tags("non-sad")
                  .sendLogs("maiba-bulk-thread-control-batch-unresolved", {
                    employeeSampling: 1,
                    sampling: 0.01,
                    sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
                  })));
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
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
      loadedBizAiWebSmartComposerAiListsGate: function (t) {
        var e = t.enabled;
        o(
          "WAWebBizAiWebSmartComposerAiListsGateModel",
        ).applyBizAiWebSmartComposerAiListsGate(e);
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
    l.BizAiBridgeApi = y;
  },
  98,
);
