__d(
  "MAIBACanvasChatDispatchStore",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 100,
      l = 3e5,
      s = new Map(),
      u = new Map();
    function c(e, t) {
      return JSON.stringify([e, t]);
    }
    function d(t) {
      if (t.size > e) {
        var n = t.keys().next().value;
        n != null && t.delete(n);
      }
    }
    function m(e, t, n) {
      var r = c(e, t);
      s.has(r) || (s.set(r, { startedAt: n, userMessageOTID: t }), d(s));
    }
    function p(e, t, n) {
      if (!(e == null || t == null || n == null || n === "")) {
        var r = c(e, t);
        if (s.has(r)) {
          var o = c(e, n);
          u.has(o) || (u.set(o, r), d(u));
        }
      }
    }
    function _(e, t, n) {
      if (e == null || t == null) return null;
      var r = u.get(c(e, t));
      if (r == null) return null;
      var o = s.get(r);
      return (s.delete(r), o == null || n - o.startedAt > l ? null : o);
    }
    ((i.recordMAIBACanvasChatDispatch = m),
      (i.bindMAIBACanvasChatRequest = p),
      (i.claimMAIBACanvasChatDispatch = _));
  },
  66,
);
