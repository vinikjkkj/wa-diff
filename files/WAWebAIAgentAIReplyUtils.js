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
      var t = _(e);
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
            g(e, t, e.unreadCount).finally(function () {
              t.inFlight = !1;
            }))
      );
    }
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          if (n.desired === n.serverConfirmed) return !0;
          var i = n.desired,
            l = !1,
            s = null;
          try {
            var u = yield o(
              "WAWebAiAgentAutoReplyControlMutation",
            ).changeAiReplyStatus(
              t.id,
              i ===
                o("WAWebProtobufsE2E.pb")
                  .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
                  .CONTROL_TAKEN
                ? "ENABLED"
                : "MUTED",
            );
            ((l = u.isSuccess === !0),
              u.isSuccess === !0 && (s = u.updateTimestampMs));
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
          return l
            ? ((n.serverConfirmed = i),
              s != null && (n.watermarkMs = Math.max(n.watermarkMs, s)),
              g(t, n, a))
            : ((n.desired = n.serverConfirmed),
              (t.unreadCount = a),
              t.setCapiThreadControl(n.serverConfirmed, d),
              o("WAWebModalManager").ModalManager.open(
                c.jsx(r("WAWebBizAiMuteUnmuteErrorDrawer.react"), {
                  isTurnOn:
                    i ===
                    o("WAWebProtobufsE2E.pb")
                      .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
                      .CONTROL_TAKEN,
                }),
              ),
              !1);
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t, n, r) {
      var o = _(e);
      if (n != null) {
        if (n <= o.watermarkMs) return;
        o.watermarkMs = n;
      }
      o.inFlight ||
        ((o.serverConfirmed = t),
        (o.desired = t),
        e.capiThreadControl !== t &&
          ((r == null ? void 0 : r.suppressNotification) === !0
            ? e.setCapiThreadControl(t, d)
            : e.setCapiThreadControl(t)));
    }
    ((l.mutateAiReplyStatus = f), (l.applyServerEchoThreadControl = y));
  },
  98,
);
