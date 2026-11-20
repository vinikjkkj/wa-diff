__d(
  "WAWebAIAgentAIReplyUtils",
  [
    "Promise",
    "WALogger",
    "WAWebAiAgentAutoReplyControlMutation",
    "WAWebBizAiAgentGating",
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
      p = 1e3,
      _ = new WeakMap();
    function f(e) {
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
    function g(e) {
      var t = _.get(e);
      return (
        t == null &&
          ((t = {
            desired: e.capiThreadControl,
            serverConfirmed: e.capiThreadControl,
            watermarkMs: 0,
            inFlight: !1,
            pendingMutations: 0,
          }),
          _.set(e, t)),
        t
      );
    }
    function h(e, t) {
      return (
        (e.pendingMutations += 1),
        t().finally(function () {
          e.pendingMutations = Math.max(0, e.pendingMutations - 1);
        })
      );
    }
    function y(e) {
      var t = g(e),
        r = e.isAiHandoff,
        a = e.aiHandoffStartedAt;
      return (
        t.inFlight
          ? (t.desired = f(t.desired))
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
            h(t, function () {
              return C({
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
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              v(t),
              C({
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
        b.apply(this, arguments)
      );
    }
    function v(t) {
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
    function S(e, t) {
      return h(g(e), t);
    }
    function R(e, t, n) {
      var r = g(e);
      (n != null && (r.watermarkMs = Math.max(r.watermarkMs, n)),
        (r.serverConfirmed = t));
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat,
            r = e.options,
            a = e.status,
            i = e.timestampMs,
            l = g(t);
          if (i != null) {
            if (k(i, l.watermarkMs)) return "stale";
            l.watermarkMs = Math.max(l.watermarkMs, i);
          }
          if (l.pendingMutations > 0) return "pending";
          var s = T(t, a, r);
          if (
            ((l.serverConfirmed = a),
            (l.desired = a),
            t.capiThreadControl !== a)
          ) {
            var c = D(t, r, s);
            return (
              c == null
                ? yield o("WAWebBizAiCapiThreadControl").setCapiThreadControl(
                    t,
                    a,
                  )
                : yield o("WAWebBizAiCapiThreadControl").setCapiThreadControl(
                    t,
                    a,
                    c,
                  ),
              "applied"
            );
          }
          var d = x({
              chat: t,
              suggestedRepliesEnabled:
                r == null ? void 0 : r.suggestedRepliesEnabled,
            }),
            m =
              s != null
                ? o("WAWebBizAiCapiThreadControl").setAiLastHandoffActor(t, s)
                : (u || (u = n("Promise"))).resolve();
          return (yield (u || (u = n("Promise"))).all([d, m]), "applied");
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      return o("WAWebBizAiAgentGating").isCompanionThreadSyncFixEnabled()
        ? Math.floor(e / p) < Math.floor(t / p)
        : e <= t;
    }
    function I(e, t, n) {
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
    function T(e, t, n) {
      var r = n == null ? void 0 : n.lastHandoffActor;
      return r == null
        ? null
        : r.actor != null
          ? r.actor
          : I(e, t, n == null ? void 0 : n.suggestedRepliesEnabled)
            ? "UNKNOWN"
            : null;
    }
    function D(e, t, n) {
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
    function x(e) {
      var t = e.chat,
        r = e.suggestedRepliesEnabled;
      return typeof r != "boolean"
        ? (u || (u = n("Promise"))).resolve()
        : (t.suggestedRepliesEnabled === !0) !== r
          ? t.setSuggestedRepliesEnabled(r)
          : (u || (u = n("Promise"))).resolve();
    }
    ((l.mutateAiReplyStatus = y),
      (l.trackAiReplyMutation = S),
      (l.recordAiReplyServerConfirmation = R),
      (l.applyServerEchoThreadControl = L));
  },
  98,
);
