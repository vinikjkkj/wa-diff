__d(
  "WAWebAIAgentAIReplyUtils",
  [
    "Promise",
    "WALogger",
    "WAWebAiAgentAutoReplyControlMutation",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBizAiCapiThreadControl",
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
            pendingMutations: 0,
          }),
          m.set(e, t)),
        t
      );
    }
    function f(e, t) {
      return (
        (e.pendingMutations += 1),
        t().finally(function () {
          e.pendingMutations = Math.max(0, e.pendingMutations - 1);
        })
      );
    }
    function g(e) {
      var t = _(e),
        r = e.isAiHandoff,
        a = e.aiHandoffStartedAt;
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
        o("WAWebBizAiCapiThreadControl").setCapiThreadControl(e, t.desired, d),
        t.inFlight
          ? (s || (s = n("Promise"))).resolve(!0)
          : ((t.inFlight = !0),
            f(t, function () {
              return h({
                chat: e,
                previousAiHandoffStartedAt: a,
                previousIsAiHandoff: r,
                previousUnreadCount: e.unreadCount,
                state: t,
              });
            }).finally(function () {
              t.inFlight = !1;
            }))
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.chat,
            a = t.previousAiHandoffStartedAt,
            i = t.previousIsAiHandoff,
            l = t.previousUnreadCount,
            s = t.state;
          if (s.desired === s.serverConfirmed) return !0;
          var u = s.desired,
            m = !1,
            p = null;
          try {
            var _ = yield o(
              "WAWebAiAgentAutoReplyControlMutation",
            ).changeAiReplyStatus(
              n.id,
              u ===
                o("WAWebProtobufsE2E.pb")
                  .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
                  .CONTROL_TAKEN
                ? "ENABLED"
                : "MUTED",
            );
            ((m = _.isSuccess === !0),
              _.isSuccess === !0 && (p = _.updateTimestampMs));
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
          return m
            ? ((s.serverConfirmed = u),
              p != null && (s.watermarkMs = Math.max(s.watermarkMs, p)),
              h({
                chat: n,
                previousAiHandoffStartedAt: a,
                previousIsAiHandoff: i,
                previousUnreadCount: l,
                state: s,
              }))
            : ((s.desired = s.serverConfirmed),
              (n.unreadCount = l),
              (n.isAiHandoff = i),
              (n.aiHandoffStartedAt = a),
              o("WAWebBizAiCapiThreadControl").setCapiThreadControl(
                n,
                s.serverConfirmed,
                d,
              ),
              o("WAWebModalManager").ModalManager.open(
                c.jsx(r("WAWebBizAiMuteUnmuteErrorDrawer.react"), {
                  isTurnOn:
                    u ===
                    o("WAWebProtobufsE2E.pb")
                      .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
                      .CONTROL_TAKEN,
                }),
              ),
              !1);
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return f(_(e), t);
    }
    function b(e, t, n) {
      var r = _(e);
      (n != null && (r.watermarkMs = Math.max(r.watermarkMs, n)),
        (r.serverConfirmed = t));
    }
    function v(e) {
      var t = e.chat,
        n = e.options,
        r = e.status,
        a = e.timestampMs,
        i = _(t);
      if (a != null) {
        if (a <= i.watermarkMs) return;
        i.watermarkMs = a;
      }
      i.pendingMutations > 0 ||
        (S({
          chat: t,
          suggestedRepliesEnabled:
            n == null ? void 0 : n.suggestedRepliesEnabled,
        }),
        (i.serverConfirmed = r),
        (i.desired = r),
        t.capiThreadControl !== r &&
          ((n == null ? void 0 : n.suppressNotification) === !0
            ? o("WAWebBizAiCapiThreadControl").setCapiThreadControl(t, r, d)
            : o("WAWebBizAiCapiThreadControl").setCapiThreadControl(t, r)));
    }
    function S(e) {
      var t = e.chat,
        n = e.suggestedRepliesEnabled;
      typeof n == "boolean" &&
        (t.suggestedRepliesEnabled === !0) !== n &&
        t.setSuggestedRepliesEnabled(n);
    }
    ((l.mutateAiReplyStatus = g),
      (l.trackAiReplyMutation = C),
      (l.recordAiReplyServerConfirmation = b),
      (l.applyServerEchoThreadControl = v));
  },
  98,
);
