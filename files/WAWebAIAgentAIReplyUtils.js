__d(
  "WAWebAIAgentAIReplyUtils",
  [
    "Promise",
    "WALogger",
    "WAWebAiAgentAutoReplyControlMutation",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBizAiMuteUnmuteErrorDrawer.react",
    "WAWebModalManager",
    "WAWebProtobufsE2E.pb",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = { skipSideEffects: !0 },
      m = new WeakMap();
    function p(e) {
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
    function _(e) {
      var t = m.get(e);
      return (
        t == null &&
          ((t = {
            desired: e.capiThreadControl,
            serverConfirmed: e.capiThreadControl,
            watermarkMs: 0,
            inFlight: !1,
          }),
          m.set(e, t)),
        t
      );
    }
    function f(e) {
      var t = _(e),
        r = e.isAiHandoff;
      return (
        t.inFlight
          ? (t.desired = p(t.desired))
          : ((t.serverConfirmed = e.capiThreadControl),
            (t.desired = o("WAWebBizAiAgentStatusUtils").isChatAiEnabled(e)
              ? o("WAWebProtobufsE2E.pb")
                  .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
                  .CONTROL_PASSED
              : o("WAWebProtobufsE2E.pb")
                  .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
                  .CONTROL_TAKEN)),
        e.setCapiThreadControl(t.desired, d),
        t.inFlight
          ? (s || (s = n("Promise"))).resolve(!0)
          : ((t.inFlight = !0),
            g(e, t, e.unreadCount, r).finally(function () {
              t.inFlight = !1;
            }))
      );
    }
    function g(e, t, n, r) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a, i) {
            if (n.desired === n.serverConfirmed) return !0;
            var l = n.desired,
              s = !1,
              u = null;
            try {
              var m = yield o(
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
              ((s = m.isSuccess === !0),
                m.isSuccess === !0 && (u = m.updateTimestampMs));
            } catch (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[Maiba] mutateAiReplyStatus failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("maiba-mutate-ai-reply-fail");
            }
            return s
              ? ((n.serverConfirmed = l),
                u != null && (n.watermarkMs = Math.max(n.watermarkMs, u)),
                g(t, n, a, i))
              : ((n.desired = n.serverConfirmed),
                (t.unreadCount = a),
                (t.isAiHandoff = i),
                t.setCapiThreadControl(n.serverConfirmed, d),
                o("WAWebModalManager").ModalManager.open(
                  c.jsx(r("WAWebBizAiMuteUnmuteErrorDrawer.react"), {
                    isTurnOn:
                      l ===
                      o("WAWebProtobufsE2E.pb")
                        .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
                        .CONTROL_TAKEN,
                  }),
                ),
                !1);
          },
        )),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      var t = e.chat,
        n = e.options,
        r = e.status,
        o = e.timestampMs,
        a = _(t);
      if (o != null) {
        if (o <= a.watermarkMs) return;
        a.watermarkMs = o;
      }
      a.inFlight ||
        ((a.serverConfirmed = r),
        (a.desired = r),
        t.capiThreadControl !== r &&
          ((n == null ? void 0 : n.suppressNotification) === !0
            ? t.setCapiThreadControl(r, d)
            : t.setCapiThreadControl(r)));
    }
    ((l.mutateAiReplyStatus = f), (l.applyServerEchoThreadControl = y));
  },
  98,
);
