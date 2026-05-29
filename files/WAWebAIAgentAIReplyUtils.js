__d(
  "WAWebAIAgentAIReplyUtils",
  [
    "Promise",
    "WAAbortError",
    "WALogger",
    "WAWebAiAgentAutoReplyControlMutation",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBizAiMuteUnmuteErrorDrawer.react",
    "WAWebDBUpdateChatTable",
    "WAWebModalManager",
    "WAWebNotificationBackend",
    "WAWebProtobufsE2E.pb",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = new WeakSet();
    function _(t) {
      if (p.has(t))
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[Maiba] mutateAiReplyStatus in-flight chat=",
                ", drop",
              ])),
            t.id.toLogString(),
          ),
          (c || (c = n("Promise"))).resolve(!1)
        );
      p.add(t);
      var a = !o("WAWebBizAiAgentStatusUtils").isChatAiEnabled(t),
        i = a ? "ENABLED" : "MUTED",
        l = t.capiThreadControl,
        d = t.unreadCount,
        _ = a
          ? o("WAWebProtobufsE2E.pb")
              .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
              .CONTROL_TAKEN
          : o("WAWebProtobufsE2E.pb")
              .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
              .CONTROL_PASSED;
      t.setCapiThreadControl(_, { skipSideEffects: !0 });
      var f = function () {
        ((t.unreadCount = d),
          t.setCapiThreadControl(l, { skipSideEffects: !0 }));
      };
      return o("WAWebAiAgentAutoReplyControlMutation")
        .changeAiReplyStatus(t.id, i)
        .then(function (e) {
          return (
            e.isSuccess
              ? _ ===
                  o("WAWebProtobufsE2E.pb")
                    .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
                    .CONTROL_PASSED &&
                ((t.unreadCount = 1),
                o("WAWebDBUpdateChatTable").updateChatTable(t.id, {
                  unreadCount: 1,
                }),
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
                  ))
              : (f(),
                o("WAWebModalManager").ModalManager.open(
                  m.jsx(r("WAWebBizAiMuteUnmuteErrorDrawer.react"), {}),
                )),
            e.isSuccess
          );
        })
        .catch(function (e) {
          return (
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[Maiba] mutateAiReplyStatus failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("maiba-mutate-ai-reply-fail"),
            f(),
            o("WAWebModalManager").ModalManager.open(
              m.jsx(r("WAWebBizAiMuteUnmuteErrorDrawer.react"), {}),
            ),
            !1
          );
        })
        .finally(function () {
          p.delete(t);
        });
    }
    l.mutateAiReplyStatus = _;
  },
  98,
);
