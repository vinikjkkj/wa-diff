__d(
  "MAIBAAppStateRefetchCoordinator",
  ["clearTimeout", "setTimeout"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new WeakMap();
    function s(t, n, r, o) {
      var a = e.get(t);
      a == null && ((a = new Map()), e.set(t, a));
      var i = a.get(n);
      if (i != null) return i;
      var l = {
        active: null,
        appType: r,
        externalConversationID: o,
        generation: 0,
        handoffRequest: null,
        handoffTimer: null,
        lastCompletedRequestKey: null,
        participants: new Set(),
      };
      return (a.set(n, l), l);
    }
    function u(e) {
      var t;
      e.generation += 1;
      var n = e.active;
      ((e.active = null),
        n == null || (t = n.disposable) == null || t.dispose());
    }
    function c(e) {
      var t = null;
      for (var n of e.participants) t = n;
      return t;
    }
    function d(e, t, n, r) {
      for (var o of e.participants) {
        var a = o.pendingRequest;
        a != null &&
          (n == null && (o.pendingRequest = null),
          o.onComplete(a, t, n, o === r));
      }
    }
    function m(e, t, n) {
      var r = e.active;
      r == null ||
        r.generation !== t ||
        ((e.active = null),
        n == null && (e.lastCompletedRequestKey = r.request.requestKey),
        d(e, t, n, r.owner));
    }
    function p(e, t) {
      e.handoffTimer != null &&
        (r("clearTimeout")(e.handoffTimer),
        (e.handoffTimer = null),
        (e.handoffRequest = null));
      var n = c(e);
      if (n != null) {
        (n.pendingRequest == null && (n.pendingRequest = t),
          (e.generation += 1));
        var o = e.generation,
          a = { disposable: null, generation: o, owner: n, request: t };
        e.active = a;
        var i = n.refetch(
          {
            appStateInput: {
              app_type: e.appType,
              external_conversation_id: e.externalConversationID,
            },
          },
          {
            fetchPolicy:
              e.appType === "BUSINESS_SETUP"
                ? "store-and-network"
                : "network-only",
            onComplete: function (n) {
              return m(e, o, n);
            },
          },
        );
        e.active === a ? (a.disposable = i) : i.dispose();
      }
    }
    function _(e, t) {
      ((e.handoffRequest = t),
        e.handoffTimer == null &&
          (e.handoffTimer = r("setTimeout")(function () {
            e.handoffTimer = null;
            var t = e.handoffRequest;
            ((e.handoffRequest = null),
              t != null && e.active == null && p(e, t));
          }, 0)));
    }
    function f(t, n) {
      var o,
        a = (o = e.get(t)) == null ? void 0 : o.get(n);
      if (
        ((a == null ? void 0 : a.handoffTimer) != null &&
          (r("clearTimeout")(a.handoffTimer),
          (a.handoffTimer = null),
          (a.handoffRequest = null)),
        (a == null ? void 0 : a.active) != null && u(a),
        a != null)
      )
        for (var i of a.participants) i.pendingRequest = null;
    }
    function g(t, n) {
      var r,
        o = (r = e.get(t)) == null ? void 0 : r.get(n);
      return (
        (o == null ? void 0 : o.active) != null ||
        (o == null ? void 0 : o.handoffRequest) != null
      );
    }
    function h(t, n, r, o, a, i) {
      var l = s(t, n, r, o),
        m = { onComplete: i, pendingRequest: null, refetch: a };
      return (
        l.participants.add(m),
        {
          dispose: function () {
            if ((l.participants.delete(m), l.participants.size === 0)) {
              var r, o;
              (f(t, n),
                (r = e.get(t)) == null || r.delete(n),
                ((o = e.get(t)) == null ? void 0 : o.size) === 0 &&
                  e.delete(t));
              return;
            }
            var a = l.active;
            if (a != null && a.owner === m) {
              var i,
                s = a.request;
              u(l);
              var d = c(l),
                p = (i = d == null ? void 0 : d.pendingRequest) != null ? i : s;
              (d != null && d.pendingRequest == null && (d.pendingRequest = s),
                _(l, p));
            } else if (a == null && l.handoffRequest == null) {
              var g,
                h = (g = c(l)) == null ? void 0 : g.pendingRequest;
              h != null && _(l, h);
            }
          },
          request: function (t, n) {
            var e, r;
            if (l.participants.has(m)) {
              var o = { logicalKey: n, requestKey: t };
              if (
                ((m.pendingRequest = o),
                c(l) === m &&
                  !(
                    ((e = l.active) == null ? void 0 : e.request.requestKey) ===
                      t ||
                    ((r = l.handoffRequest) == null ? void 0 : r.requestKey) ===
                      t
                  ))
              ) {
                if (l.lastCompletedRequestKey === t) {
                  d(l, l.generation, null, null);
                  return;
                }
                (l.active != null && u(l), p(l, o));
              }
            }
          },
        }
      );
    }
    var y = { cancel: f, isActive: g, register: h },
      C = y;
    l.default = C;
  },
  98,
);
