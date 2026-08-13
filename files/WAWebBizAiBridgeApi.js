__d(
  "WAWebBizAiBridgeApi",
  [
    "WALogger",
    "WAWebAIAgentAIReplyUtils",
    "WAWebBizAISettingsCategoryHandlers",
    "WAWebBizAISettingsVersionCollection",
    "WAWebBizAiLargeScreensGateModel",
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
        for (var n of e.entries()) {
          var a = n[0],
            i = n[1];
          try {
            var l = f(i.consumerLid, i.consumerPhoneNumber);
            l != null
              ? o("WAWebAIAgentAIReplyUtils").applyServerEchoThreadControl({
                  chat: l,
                  options: {
                    suppressNotification: !0,
                    suggestedRepliesEnabled: i.suggestedRepliesEnabled,
                  },
                  status: i.status,
                  timestampMs: i.timestampMs,
                })
              : o("WALogger")
                  .ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[BizAI] bulkUpdateChatCapiThreadControl: chat not found at index=",
                        "",
                      ])),
                    a,
                  )
                  .sendLogs("maiba-bulk-thread-control-chat-not-found");
          } catch (e) {
            o("WALogger")
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[BizAI] bulkUpdateChatCapiThreadControl: failed to apply update at index=",
                    "",
                  ])),
                a,
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("maiba-bulk-thread-control-update-failed");
          }
        }
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
    };
    l.BizAiBridgeApi = g;
  },
  98,
);
