__d(
  "MaisaResponseInViewTracker",
  [
    "ExecutionEnvironment",
    "SupportConversationLogger.react",
    "clearTimeout",
    "justknobx",
    "performanceNow",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 20,
      c = 3e4,
      d = new Map();
    function m() {
      return (e || (e = r("ExecutionEnvironment"))).canUseDOM
        ? document.visibilityState
        : "";
    }
    function p(e, t, n) {
      o("SupportConversationLogger.react").log({
        additional_data: babelHelpers.extends(
          {},
          n,
          e.chatAttemptId != null ? { chat_attempt_id: e.chatAttemptId } : {},
          { is_maisa_native: "false" },
        ),
        client_request_id: e.clientRequestId,
        entry_point: e.entrypoint,
        event: t,
        message_id: e.messageId,
        thread_id: e.threadId,
      });
    }
    function _(e) {
      e.shownTimer != null &&
        (r("clearTimeout")(e.shownTimer), (e.shownTimer = null));
    }
    function f(e) {
      var t = null,
        n = null;
      for (var r of d) {
        var o = r[0],
          a = r[1];
        if (o !== e) {
          if (!a.firstContentSeen && a.shownTimer == null) return o;
          (n == null && (n = o), t == null && a.firstContentSeen && (t = o));
        }
      }
      return t != null ? t : n;
    }
    function g(e) {
      var t = d.get(e);
      t != null && (_(t), d.delete(e));
    }
    function h(e, t) {
      var n = e.shownTimer != null;
      (g(e.messageId),
        p(e, "response_tracking_ended", {
          elapsed_ms: String(
            Math.round((s || (s = r("performanceNow")))() - e.sentAtMs),
          ),
          milestones_seen: e.firstContentSeen ? "first_content" : "none",
          reason: t,
          timers_cancelled: n ? "shown" : "none",
        }));
    }
    function y(e) {
      var t = e.isHandedOver,
        n = e.isHidden,
        o = r("justknobx")._("6942"),
        a = o ? (n ? "hidden" : t ? "handover" : null) : "kill_switch";
      return {
        replyTimerArmed: a == null,
        responseInViewEnabled: o,
        timerSkipReason: a,
      };
    }
    function C(e) {
      var t = e.botType,
        n = e.chatAttemptId,
        o = e.clientRequestId,
        a = e.entrypoint,
        i = e.isChatMounted,
        l = e.isHandedOverAtSend,
        _ = e.isHidden,
        C = e.messageId,
        b = e.threadId,
        v = y({ isHandedOver: l, isHidden: _ });
      if (!v.responseInViewEnabled) return v;
      g(C);
      var S = {
        botType: t,
        chatAttemptId: n,
        clientRequestId: o,
        entrypoint: a,
        firstContentSeen: !1,
        isChatMounted: i,
        messageId: C,
        sentAtMs: (s || (s = r("performanceNow")))(),
        shownTimer: null,
        threadId: b,
      };
      if (
        (v.replyTimerArmed &&
          (S.shownTimer = r("setTimeout")(function () {
            ((S.shownTimer = null),
              p(S, "response_visibility_timeout", {
                bot_type: S.botType,
                elapsed_ms: String(
                  Math.round((s || (s = r("performanceNow")))() - S.sentAtMs),
                ),
                is_mounted:
                  S.isChatMounted == null
                    ? "unknown"
                    : String(S.isChatMounted()),
                stage: "shown",
                visibility_state: m(),
              }));
          }, c)),
        d.set(C, S),
        d.size > u)
      ) {
        var R,
          L = d.get((R = f(C)) != null ? R : "");
        L != null && h(L, "evicted");
      }
      return v;
    }
    function b(e, t, n) {
      var o = d.get(e);
      if (o != null) {
        if (t === "first_content") {
          if (o.firstContentSeen) return;
          ((o.firstContentSeen = !0), _(o));
        } else g(e);
        p(o, "response_in_view", {
          content_kind: n,
          latency_ms: String(
            Math.round((s || (s = r("performanceNow")))() - o.sentAtMs),
          ),
          milestone: t,
        });
      }
    }
    function v(e) {
      var t = d.get(e);
      t != null && h(t, "handover");
    }
    function S(e) {
      if (e != null)
        for (var t of Array.from(d.values()))
          t.threadId === e && h(t, "handover");
    }
    function R(e) {
      var t = d.get(e);
      t != null && !t.firstContentSeen && g(e);
    }
    ((l.getResponseInViewCapabilities = y),
      (l.startResponseInViewTurn = C),
      (l.markResponseInView = b),
      (l.endResponseInViewTurn = v),
      (l.endResponseInViewTurnsForThread = S),
      (l.forgetResponseInViewTurn = R));
  },
  98,
);
