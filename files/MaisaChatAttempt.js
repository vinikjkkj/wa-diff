__d(
  "MaisaChatAttempt",
  [
    "ExecutionEnvironment",
    "SupportConversationLogger.react",
    "clearTimeout",
    "justknobx",
    "performanceNow",
    "setTimeout",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 3e4,
      c = new Map();
    function d() {
      return (e || (e = r("ExecutionEnvironment"))).canUseDOM
        ? document.visibilityState
        : null;
    }
    function m(e) {
      if (e == null) return null;
      for (var t of c.values()) if (t.attemptId === e) return t;
      return null;
    }
    function p(e, t) {
      var n = m(e);
      return n == null || t == null || n.threadId !== t ? null : n;
    }
    function _(e, t) {
      return e.pausedMs + (e.pausedSinceMs != null ? t - e.pausedSinceMs : 0);
    }
    function f(e, t) {
      return {
        elapsed_ms: String(Math.round(t - e.startedAtMs)),
        paused_ms: String(Math.round(_(e, t))),
      };
    }
    function g(e) {
      return f(e, (s || (s = r("performanceNow")))());
    }
    function h(e) {
      var t = e.deadlineRemainingMs;
      t == null ||
        e.deadlineTimer != null ||
        e.pausedSinceMs != null ||
        ((e.deadlineStartedAtMs = (s || (s = r("performanceNow")))()),
        (e.deadlineTimer = r("setTimeout")(function () {
          if (((e.deadlineTimer = null), d() === "hidden")) {
            var n = I();
            ((e.deadlineRemainingMs = y(e, t, n)), D(n, "deadline"));
            return;
          }
          ((e.deadlineRemainingMs = null),
            S(e, "timeout", null),
            (e.timedOut = !0));
        }, t)));
    }
    function y(e, t, n) {
      return Math.max(0, t - Math.max(0, n - e.deadlineStartedAtMs));
    }
    function C(e, t) {
      var n = e.deadlineTimer,
        o = e.deadlineRemainingMs;
      n == null ||
        o == null ||
        (r("clearTimeout")(n),
        (e.deadlineTimer = null),
        (e.deadlineRemainingMs = y(e, o, t)));
    }
    function b(e) {
      (e.deadlineTimer != null &&
        (r("clearTimeout")(e.deadlineTimer), (e.deadlineTimer = null)),
        (e.deadlineRemainingMs = null));
    }
    function v(e, t, n) {
      var r;
      o("SupportConversationLogger.react").log({
        additional_data: babelHelpers.extends({}, n, {
          chat_attempt_id: e.attemptId,
        }),
        client_request_id: e.clientRequestId,
        entry_point: e.entrypoint,
        event: t,
        thread_id: (r = e.threadId) != null ? r : "",
      });
    }
    function S(e, t, n) {
      var r;
      v(
        e,
        "chat_open_failed",
        babelHelpers.extends(
          {},
          g(e),
          { after_timeout: String(e.timedOut) },
          n != null ? { error_class: n } : {},
          {
            is_maisa_native: "false",
            mounted: String(e.mounted),
            reason: t,
            stage: e.mounted ? "usable" : "mount",
            thread_create_failed: String(t === "thread_create_failed"),
            usable: String(e.usable),
            visibility_state: (r = d()) != null ? r : "",
          },
        ),
      );
    }
    function R(e) {
      (b(e), c.delete(e.surfaceId), c.size === 0 && V());
    }
    function L(e, t) {
      (v(
        e,
        "chat_closed",
        babelHelpers.extends({}, g(e), {
          after_timeout: String(e.timedOut),
          close_reason: t,
          mounted: String(e.mounted),
          usable: String(e.usable),
        }),
      ),
        R(e));
    }
    function E(e, t, n, o) {
      if (e != null)
        for (var a of e)
          try {
            if (!r("justknobx")._("8291")) return;
            v(
              a,
              t,
              babelHelpers.extends({}, f(a, o(a)), {
                detected_by: n,
                is_maisa_native: "false",
                mounted: String(a.mounted),
                open_trigger: a.openTrigger,
                owner: a.owner,
                usable: String(a.usable),
              }),
            );
          } catch (e) {}
    }
    var k = null;
    function I() {
      var e = w;
      return e == null
        ? (s || (s = r("performanceNow")))()
        : Math.max(k != null ? k : e, e);
    }
    function T(e, t) {
      var n = null;
      for (var r of c.values())
        (C(r, e),
          r.pausedSinceMs == null &&
            ((r.pausedSinceMs = Math.max(e, r.startedAtMs)),
            n == null && (n = []),
            n.push(r)));
      E(n, "chat_hidden", t, function (t) {
        return Math.max(e, t.startedAtMs);
      });
    }
    function D(e, t) {
      (T(e, t), c.size > 0 && A());
    }
    function x(e) {
      var t = (s || (s = r("performanceNow")))();
      k = t;
      var n = null;
      for (var o of c.values())
        (o.pausedSinceMs != null && (n == null && (n = []), n.push(o)),
          (o.pausedMs = _(o, t)),
          (o.pausedSinceMs = null),
          h(o));
      E(n, "chat_resumed", e, function () {
        return t;
      });
    }
    function $(e) {
      d() === "hidden" ? D(I(), e) : x(e);
    }
    function P() {
      d() === "hidden"
        ? D((s || (s = r("performanceNow")))(), "event")
        : x("event");
    }
    var N = 1e3,
      M = null,
      w = null;
    function A() {
      M == null && ((w = (s || (s = r("performanceNow")))()), F());
    }
    function F() {
      M = r("setTimeout")(function () {
        ((M = null), d() === "hidden" ? T(I(), "poll") : x("poll"));
        for (var e of c.values())
          if (e.deadlineRemainingMs != null || e.pausedSinceMs != null) {
            F();
            return;
          }
        w = null;
      }, N);
    }
    function O() {
      (M != null && (r("clearTimeout")(M), (M = null)), (w = null));
    }
    function B(e) {
      if (e.persisted) {
        D((s || (s = r("performanceNow")))(), "pagehide");
        return;
      }
      $("pagehide");
      for (var t of Array.from(c.values())) L(t, "page_unload");
    }
    function W(e) {
      e.persisted && d() !== "hidden" && x("pageshow");
    }
    var q = !1;
    function U() {
      q ||
        ((e || (e = r("ExecutionEnvironment"))).canUseDOM &&
          ((q = !0),
          document.addEventListener("visibilitychange", P),
          window.addEventListener("pagehide", B),
          window.addEventListener("pageshow", W)));
    }
    function V() {
      (O(),
        (k = null),
        q &&
          (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
          ((q = !1),
          document.removeEventListener("visibilitychange", P),
          window.removeEventListener("pagehide", B),
          window.removeEventListener("pageshow", W)));
    }
    function H(e) {
      var t,
        n = e.clientRequestId,
        o = e.componentContext,
        a = e.entrypoint,
        i = e.openTrigger,
        l = e.owner,
        m = e.surfaceId,
        p = e.threadId,
        _ = e.wasPrefetched,
        f = _ === void 0 ? !1 : _;
      if (!r("justknobx")._("6942")) return null;
      var g = c.get(m);
      if (g != null) {
        if (p != null && g.threadId === p) return g.attemptId;
        ($("registry"), L(g, "replaced"));
      }
      var y = (s || (s = r("performanceNow")))(),
        C = {
          attemptId: r("uuidv4")(),
          clientRequestId: n,
          deadlineRemainingMs: u,
          deadlineStartedAtMs: y,
          deadlineTimer: null,
          entrypoint: a,
          mounted: !1,
          openTrigger: i,
          owner: l,
          pausedMs: 0,
          pausedSinceMs: d() === "hidden" ? y : null,
          startedAtMs: y,
          surfaceId: m,
          threadId: p,
          timedOut: !1,
          usable: !1,
        };
      (C.pausedSinceMs == null && (k = y), c.set(m, C), U());
      var b = r("justknobx")._("7311") && r("justknobx")._("6827");
      return (
        v(C, "chat_open_attempted", {
          component_context: o != null ? o : "",
          open_timer_enabled: "true",
          open_trigger: i,
          owner: l,
          reply_timer_enabled: String(b),
          visibility_state: (t = d()) != null ? t : "",
          was_prefetched: String(f),
        }),
        h(C),
        A(),
        C.attemptId
      );
    }
    function G(e, t) {
      var n = m(e);
      n != null && (n.threadId = t);
    }
    function z(e, t, n) {
      var r = p(e, n);
      if (r != null) {
        if (($("registry"), t === "mount")) {
          if (r.mounted) return;
          r.mounted = !0;
        } else {
          if (r.usable) return;
          r.usable = !0;
        }
        (v(
          r,
          "chat_open_milestone",
          babelHelpers.extends({}, g(r), { milestone: t }),
        ),
          r.mounted && r.usable && b(r));
      }
    }
    function j(e, t) {
      var n = t.errorClass,
        r = t.reason,
        o = r === void 0 ? "thread_create_failed" : r,
        a = m(e);
      if (a != null) {
        if (($("registry"), a.usable)) {
          L(a, "chat_error");
          return;
        }
        (S(a, o, n), R(a));
      }
    }
    function K(e, t) {
      var n = m(e);
      n != null && ($("registry"), L(n, t));
    }
    function Q(e, t) {
      var n = m(e);
      return n == null || n.threadId == null || n.threadId === t
        ? !1
        : ($("registry"), L(n, t == null ? "closed_by_host" : "replaced"), !0);
    }
    function X(e, t) {
      var n = c.get(e);
      n != null && ($("registry"), L(n, t));
    }
    function Y(e) {
      return m(e) != null;
    }
    function J(e, t) {
      return p(e, t) != null;
    }
    ((l.claimChatAttempt = H),
      (l.recordChatAttemptThread = G),
      (l.markChatAttemptMilestone = z),
      (l.failChatAttempt = j),
      (l.closeChatAttempt = K),
      (l.closeChatAttemptIfThreadChanged = Q),
      (l.closeChatAttemptsForSurface = X),
      (l.isChatAttemptLive = Y),
      (l.isChatAttemptLiveForThread = J));
  },
  98,
);
