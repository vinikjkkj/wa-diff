__d(
  "MAIBAConversationCreationCallbackRegistry",
  ["MAIBAConversationCreationCallbackTimer"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 3e5,
      s = new Map(),
      u = function () {};
    function c(e) {
      try {
        e.cancelExpiry();
      } catch (e) {}
    }
    function d() {
      var e = [];
      try {
        e = Array.from(s.values());
      } catch (e) {}
      try {
        s.clear();
      } catch (e) {}
      for (var t of e) c(t);
    }
    function m(e, t) {
      try {
        s.get(e) === t && s.delete(e);
      } catch (e) {
        d();
      }
      c(t);
    }
    function p(t, n) {
      try {
        var r = s.get(t);
        r != null && m(t, r);
        var a = { callback: n, cancelExpiry: u, didNotify: !1 },
          i;
        try {
          i = o(
            "MAIBAConversationCreationCallbackTimer",
          ).scheduleMAIBAConversationCreationCallbackTimer(function () {
            return m(t, a);
          }, e);
        } catch (e) {
          return u;
        }
        a.cancelExpiry = function () {
          try {
            o(
              "MAIBAConversationCreationCallbackTimer",
            ).cancelMAIBAConversationCreationCallbackTimer(i);
          } catch (e) {}
        };
        try {
          s.set(t, a);
        } catch (e) {
          return (c(a), d(), u);
        }
        return function () {
          return m(t, a);
        };
      } catch (e) {
        return (d(), u);
      }
    }
    function _(e) {
      var t;
      try {
        t = s.get(e);
      } catch (e) {
        return (d(), !1);
      }
      if (t == null || t.didNotify) return !1;
      ((t.didNotify = !0), m(e, t));
      try {
        t.callback(e);
      } catch (e) {}
      return !0;
    }
    function f() {
      var e;
      try {
        ((e = Array.from(s.values())), s.clear());
      } catch (e) {
        d();
        return;
      }
      for (var t of e) c(t);
    }
    ((l.registerMAIBAConversationCreatedCallback = p),
      (l.notifyMAIBAConversationCreated = _),
      (l.clearMAIBAConversationCreatedCallbacks = f));
  },
  98,
);
