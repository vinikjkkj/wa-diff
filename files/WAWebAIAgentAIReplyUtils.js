__d(
  "WAWebAIAgentAIReplyUtils",
  [
    "WALogger",
    "WAWebAiAgentAutoReplyControlMutation",
    "WAWebBizAiAgentGating",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBizAiCapiThreadControl",
    "WAWebBizAiMuteUnmuteErrorDrawer.react",
    "WAWebModalManager",
    "WAWebProtobufsE2E.pb",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = { skipSideEffects: !0 },
      m = 1e3,
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
        n = e.isAiHandoff,
        r = e.aiHandoffStartedAt;
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
        o("WAWebBizAiCapiThreadControl").setCapiThreadControl(e, t.desired, d),
        t.inFlight
          ? Promise.resolve(!0)
          : ((t.inFlight = !0),
            g(t, function () {
              return y({
                chat: e,
                previousAiHandoffStartedAt: r,
                previousIsAiHandoff: n,
                previousUnreadCount: e.unreadCount,
                state: t,
              });
            }).finally(function () {
              t.inFlight = !1;
            }))
      );
    }
    async function y(t) {
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
        var _ = await o(
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
          C(n),
          y({
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
    }
    function C(e) {
      o("WAWebBizAiCapiThreadControl")
        .setAiLastHandoffActor(e, "BUSINESS")
        .catch(function (e) {
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[Maiba] recordBusinessToggle actor write failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("maiba-record-business-toggle-actor-fail");
        });
    }
    function b(e, t) {
      return g(f(e), t);
    }
    function v(e, t, n) {
      var r = f(e);
      (n != null && (r.watermarkMs = Math.max(r.watermarkMs, n)),
        (r.serverConfirmed = t));
    }
    async function S(e) {
      var t = e.chat,
        n = e.options,
        r = e.status,
        a = e.timestampMs,
        i = f(t);
      if (a != null) {
        if (R(a, i.watermarkMs)) return "stale";
        i.watermarkMs = Math.max(i.watermarkMs, a);
      }
      if (i.pendingMutations > 0) return "pending";
      var l = E(t, r, n);
      if (
        ((i.serverConfirmed = r), (i.desired = r), t.capiThreadControl !== r)
      ) {
        var s = k(t, n, l);
        return (
          s == null
            ? await o("WAWebBizAiCapiThreadControl").setCapiThreadControl(t, r)
            : await o("WAWebBizAiCapiThreadControl").setCapiThreadControl(
                t,
                r,
                s,
              ),
          "applied"
        );
      }
      var u = I({
          chat: t,
          suggestedRepliesEnabled:
            n == null ? void 0 : n.suggestedRepliesEnabled,
        }),
        c =
          l != null
            ? o("WAWebBizAiCapiThreadControl").setAiLastHandoffActor(t, l)
            : Promise.resolve();
      return (await Promise.all([u, c]), "applied");
    }
    function R(e, t) {
      return o("WAWebBizAiAgentGating").isCompanionThreadSyncFixEnabled()
        ? Math.floor(e / m) < Math.floor(t / m)
        : e <= t;
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
            ? babelHelpers.extends({}, d)
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
      return typeof n != "boolean"
        ? Promise.resolve()
        : (t.suggestedRepliesEnabled === !0) !== n
          ? t.setSuggestedRepliesEnabled(n)
          : Promise.resolve();
    }
    ((l.mutateAiReplyStatus = h),
      (l.trackAiReplyMutation = b),
      (l.recordAiReplyServerConfirmation = v),
      (l.applyServerEchoThreadControl = S));
  },
  98,
);
