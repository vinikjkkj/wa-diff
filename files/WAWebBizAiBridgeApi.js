__d(
  "WAWebBizAiBridgeApi",
  [
    "WALogger",
    "WAWebAIAgentAIReplyUtils",
    "WAWebBizAISettingsCategoryHandlers",
    "WAWebBizAISettingsVersionCollection",
    "WAWebChatCollection",
    "WAWebLidMigrationUtils",
    "WAWebProtobufSyncAction.pb",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = {
        updateChatCapiThreadControl: function (n) {
          var t = n.consumerLid,
            r = n.consumerPhoneNumber,
            a = n.shouldSuppressNotification,
            i = n.status,
            l = n.timestampMs;
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[BizAI] updateChatCapiThreadControl status=",
                "",
              ])),
            i,
          );
          var c = null,
            d =
              t != null
                ? o("WAWebWidFactory").createUserWidOrThrow(t, "lid")
                : null,
            m = r != null ? o("WAWebWidFactory").createUserWidOrThrow(r) : null;
          if (
            (d != null && (c = o("WAWebChatCollection").ChatCollection.get(d)),
            c == null &&
              m != null &&
              (c = o("WAWebChatCollection").ChatCollection.get(m)),
            c == null && m == null)
          ) {
            var p = d != null ? o("WAWebLidMigrationUtils").toPn(d) : null;
            c =
              p != null ? o("WAWebChatCollection").ChatCollection.get(p) : null;
          } else if (c == null && d == null) {
            var _ = m != null ? o("WAWebLidMigrationUtils").toLid(m) : null;
            c =
              _ != null ? o("WAWebChatCollection").ChatCollection.get(_) : null;
          }
          c != null
            ? (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[Maiba] updateChatCapiThreadControl: applying status=",
                    " to chat=",
                    "",
                  ])),
                i,
                c.id.toLogString(),
              ),
              o("WAWebAIAgentAIReplyUtils").applyServerEchoThreadControl(
                c,
                i,
                l,
                { suppressNotification: a },
              ))
            : o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[BizAI] updateChatCapiThreadControl: chat not found",
                    ])),
                )
                .sendLogs("maiba-thread-control-chat-not-found");
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
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[BizAI] handleBizAiSettingsNudge: unknown category=",
                  "",
                ])),
              e,
            );
            return;
          }
          (o("WAWebBizAISettingsCategoryHandlers").registerCategoryHandler(a),
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
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
      };
    l.BizAiBridgeApi = m;
  },
  98,
);
