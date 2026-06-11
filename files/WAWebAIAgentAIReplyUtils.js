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
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = c || (c = o("react")),
      m = { skipSideEffects: !0 },
      p = new WeakMap();
    function _(e) {
      return e ===
        o("WAWebProtobufsE2E.pb")
          .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
          .CONTROL_TAKEN
        ? o("WAWebProtobufsE2E.pb")
            .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
            .CONTROL_PASSED
        : o("WAWebProtobufsE2E.pb")
            .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
            .CONTROL_TAKEN;
    }
    function f(e) {
      var t = p.get(e);
      return (
        t == null &&
          ((t = {
            desired: e.capiThreadControl,
            serverConfirmed: e.capiThreadControl,
            watermarkMs: 0,
            inFlight: !1,
          }),
          p.set(e, t)),
        t
      );
    }
    function g(e) {
      var t = f(e);
      return (
        t.inFlight
          ? (t.desired = _(t.desired))
          : ((t.serverConfirmed = e.capiThreadControl),
            (t.desired = o("WAWebBizAiAgentStatusUtils").isChatAiEnabled(e)
              ? o("WAWebProtobufsE2E.pb")
                  .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
                  .CONTROL_PASSED
              : o("WAWebProtobufsE2E.pb")
                  .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
                  .CONTROL_TAKEN)),
        e.setCapiThreadControl(t.desired, m),
        t.inFlight
          ? (u || (u = n("Promise"))).resolve(!0)
          : ((t.inFlight = !0),
            h(e, t, t.serverConfirmed, e.unreadCount).finally(function () {
              t.inFlight = !1;
            }))
      );
    }
    function h(e, t, n, r) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a, i) {
            if (n.desired === n.serverConfirmed)
              return (
                a !==
                  o("WAWebProtobufsE2E.pb")
                    .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
                    .CONTROL_PASSED &&
                  n.serverConfirmed ===
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
                      o("WAAbortError").catchAbort(function (t) {
                        o("WALogger").LOG(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "[Maiba] Aborted notification ",
                              "",
                            ])),
                          t,
                        );
                      }),
                    )),
                !0
              );
            var l = n.desired,
              u = !1,
              c = null;
            try {
              var p = yield o(
                "WAWebAiAgentAutoReplyControlMutation",
              ).changeAiReplyStatus(
                t.id,
                l ===
                  o("WAWebProtobufsE2E.pb")
                    .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
                    .CONTROL_TAKEN
                  ? "ENABLED"
                  : "MUTED",
              );
              ((u = p.isSuccess === !0),
                p.isSuccess === !0 && (c = p.updateTimestampMs));
            } catch (e) {
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[Maiba] mutateAiReplyStatus failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("maiba-mutate-ai-reply-fail");
            }
            return u
              ? ((n.serverConfirmed = l),
                c != null && (n.watermarkMs = Math.max(n.watermarkMs, c)),
                h(t, n, a, i))
              : ((n.desired = n.serverConfirmed),
                (t.unreadCount = i),
                t.setCapiThreadControl(n.serverConfirmed, m),
                o("WAWebModalManager").ModalManager.open(
                  d.jsx(r("WAWebBizAiMuteUnmuteErrorDrawer.react"), {}),
                ),
                !1);
          },
        )),
        y.apply(this, arguments)
      );
    }
    function C(e, t, n, r) {
      var o = f(e);
      if (n != null) {
        if (n <= o.watermarkMs) return;
        o.watermarkMs = n;
      }
      o.inFlight ||
        ((o.serverConfirmed = t),
        (o.desired = t),
        e.capiThreadControl !== t &&
          ((r == null ? void 0 : r.suppressNotification) === !0
            ? e.setCapiThreadControl(t, m)
            : e.setCapiThreadControl(t)));
    }
    ((l.mutateAiReplyStatus = g), (l.applyServerEchoThreadControl = C));
  },
  98,
);
