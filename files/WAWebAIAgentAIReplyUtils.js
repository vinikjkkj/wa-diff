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
            pendingMutations: 0,
          }),
          p.set(e, t)),
        t
      );
    }
    function g(e, t) {
      return (
        (e.pendingMutations += 1),
        t().finally(function () {
          e.pendingMutations = Math.max(0, e.pendingMutations - 1);
        })
      );
    }
    function h(e) {
      var t = f(e),
        r = e.isAiHandoff,
        a = e.aiHandoffStartedAt;
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
        o("WAWebBizAiCapiThreadControl").setCapiThreadControl(e, t.desired, m),
        t.inFlight
          ? (u || (u = n("Promise"))).resolve(!0)
          : ((t.inFlight = !0),
            g(t, function () {
              return y({
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
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat,
            n = e.previousAiHandoffStartedAt,
            a = e.previousIsAiHandoff,
            i = e.previousUnreadCount,
            l = e.state;
          if (l.desired === l.serverConfirmed) return !0;
          var u = l.desired,
            c = !1,
            p = null;
          try {
            var _ = yield o(
              "WAWebAiAgentAutoReplyControlMutation",
            ).changeAiReplyStatus(
              t.id,
              u ===
                o("WAWebProtobufsE2E.pb")
                  .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
                  .CONTROL_TAKEN
                ? "ENABLED"
                : "MUTED",
            );
            ((c = _.isSuccess === !0),
              _.isSuccess === !0 && (p = _.updateTimestampMs));
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
          return c
            ? ((l.serverConfirmed = u),
              p != null && (l.watermarkMs = Math.max(l.watermarkMs, p)),
              b(t),
              y({
                chat: t,
                previousAiHandoffStartedAt: n,
                previousIsAiHandoff: a,
                previousUnreadCount: i,
                state: l,
              }))
            : ((l.desired = l.serverConfirmed),
              (t.unreadCount = i),
              (t.isAiHandoff = a),
              (t.aiHandoffStartedAt = n),
              o("WAWebBizAiCapiThreadControl").setCapiThreadControl(
                t,
                l.serverConfirmed,
                m,
              ),
              o("WAWebModalManager").ModalManager.open(
                d.jsx(r("WAWebBizAiMuteUnmuteErrorDrawer.react"), {
                  isTurnOn:
                    u ===
                    o("WAWebProtobufsE2E.pb")
                      .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
                      .CONTROL_TAKEN,
                }),
              ),
              !1);
        })),
        C.apply(this, arguments)
      );
    }
    function b(t) {
      o("WAWebBizAiCapiThreadControl")
        .setAiLastHandoffActor(t, "BUSINESS")
        .catch(function (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[Maiba] recordBusinessToggle actor write failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("maiba-record-business-toggle-actor-fail");
        });
    }
    function v(e, t) {
      return g(f(e), t);
    }
    function S(e, t, n) {
      var r = f(e);
      (n != null && (r.watermarkMs = Math.max(r.watermarkMs, n)),
        (r.serverConfirmed = t));
    }
    function R(e) {
      var t = e.chat,
        n = e.options,
        r = e.status,
        a = e.timestampMs,
        i = f(t);
      if (a != null) {
        if (a <= i.watermarkMs) return;
        i.watermarkMs = a;
      }
      if (!(i.pendingMutations > 0)) {
        var l = E(t, r, n);
        if (
          ((i.serverConfirmed = r), (i.desired = r), t.capiThreadControl !== r)
        ) {
          var s = k(t, n, l);
          s == null
            ? o("WAWebBizAiCapiThreadControl").setCapiThreadControl(t, r)
            : o("WAWebBizAiCapiThreadControl").setCapiThreadControl(t, r, s);
          return;
        }
        (I({
          chat: t,
          suggestedRepliesEnabled:
            n == null ? void 0 : n.suggestedRepliesEnabled,
        }),
          l != null &&
            o("WAWebBizAiCapiThreadControl").setAiLastHandoffActor(t, l));
      }
    }
    function L(e, t, n) {
      return (
        e.capiThreadControl !== t ||
        (t ===
          o("WAWebProtobufsE2E.pb")
            .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
            .CONTROL_PASSED &&
          typeof n == "boolean" &&
          (e.suggestedRepliesEnabled === !0) !== n)
      );
    }
    function E(e, t, n) {
      var r = n == null ? void 0 : n.lastHandoffActor;
      return r == null
        ? null
        : r.actor != null
          ? r.actor
          : L(e, t, n == null ? void 0 : n.suggestedRepliesEnabled)
            ? "UNKNOWN"
            : null;
    }
    function k(e, t, n) {
      var r =
          (t == null ? void 0 : t.suppressNotification) === !0
            ? babelHelpers.extends({}, m)
            : {},
        o = t == null ? void 0 : t.suggestedRepliesEnabled;
      return (
        typeof o == "boolean" &&
          e.suggestedRepliesEnabled !== o &&
          (r.suggestedRepliesEnabled = o),
        n != null && e.aiLastHandoffActor !== n && (r.aiLastHandoffActor = n),
        Object.keys(r).length > 0 ? r : null
      );
    }
    function I(e) {
      var t = e.chat,
        n = e.suggestedRepliesEnabled;
      typeof n == "boolean" &&
        (t.suggestedRepliesEnabled === !0) !== n &&
        t.setSuggestedRepliesEnabled(n);
    }
    ((l.mutateAiReplyStatus = h),
      (l.trackAiReplyMutation = v),
      (l.recordAiReplyServerConfirmation = S),
      (l.applyServerEchoThreadControl = R));
  },
  98,
);
