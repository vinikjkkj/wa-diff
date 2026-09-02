__d(
  "WAWebBizAiCapiThreadControl",
  [
    "WAAbortError",
    "WALogger",
    "WATimeUtils",
    "WAWebBizAiHandoffRemoval",
    "WAWebDBUpdateChatTable",
    "WAWebNotificationBackend",
    "WAWebProtobufsE2E.pb",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t, n, r) {
      var a = (r == null ? void 0 : r.skipSideEffects) === !0;
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[Maiba] setCapiThreadControl: ",
            " -> ",
            " for chat=",
            "",
            "",
          ])),
        t.capiThreadControl,
        n,
        t.id.toLogString(),
        a ? " (silent)" : "",
      ),
        (t.capiThreadControl = n),
        (t.forceDismissAiAgentBlockBar = !1));
      var i =
        !a &&
        n ===
          o("WAWebProtobufsE2E.pb")
            .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
            .CONTROL_PASSED;
      return (
        n ===
        o("WAWebProtobufsE2E.pb")
          .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
          .CONTROL_PASSED
          ? ((t.isAiHandoff = i || t.isAiHandoff === !0),
            o("WAWebBizAiHandoffRemoval").maybeSetHandoffRemovalExpiry(t))
          : ((t.isAiHandoff = !1),
            (t.aiHandoffStartedAt = null),
            o("WAWebBizAiHandoffRemoval").clearHandoffRemovalExpiry(t)),
        i &&
          ((t.aiHandoffStartedAt = o("WATimeUtils").unixTime()),
          (t.isSmartComposerHandoffCardDismissed = !1),
          (t.unreadCount = 1),
          o("WAWebNotificationBackend")
            .showAiHandoffNotification(t)
            .catch(
              o("WAAbortError").catchAbort(function (e) {
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[Maiba] Aborted notification ",
                      "",
                    ])),
                  e,
                );
              }),
            )),
        o("WAWebDBUpdateChatTable").updateChatTable(t.id, {
          capiThreadControl: n,
          unreadCount: t.unreadCount,
          isAiHandoff: t.isAiHandoff,
          aiHandoffRemovalExpiry: t.aiHandoffRemovalExpiry,
          aiHandoffStartedAt: t.aiHandoffStartedAt,
        })
      );
    }
    l.setCapiThreadControl = u;
  },
  98,
);
