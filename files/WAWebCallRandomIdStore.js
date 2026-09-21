__d(
  "WAWebCallRandomIdStore",
  ["WARandomHex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 64,
      s = new Map();
    function u(e) {
      if (e == null || e === "") return null;
      var t = s.get(e);
      if (t != null) return (d(e, t), t);
      var n = o("WARandomHex").randomHex(16);
      return (s.set(e, n), m(), n);
    }
    function c(e) {
      if (e == null || e === "") return null;
      var t = s.get(e);
      return t == null ? null : (d(e, t), t);
    }
    function d(e, t) {
      (s.delete(e), s.set(e, t));
    }
    function m() {
      if (!(s.size <= e)) {
        var t = s.keys().next();
        t.done || s.delete(t.value);
      }
    }
    var p = null;
    function _(e) {
      p = e;
    }
    function f() {
      return p;
    }
    function g() {
      p = null;
    }
    function h() {
      (s.clear(), (p = null));
    }
    function y() {
      return s.size;
    }
    ((l.getOrCreateCallRandomId = u),
      (l.getCallRandomIdForCall = c),
      (l.setCurrentCallRandomId = _),
      (l.getCurrentCallRandomId = f),
      (l.clearCurrentCallRandomId = g),
      (l.resetCallRandomIds = h),
      (l.getRetainedCallCountForTest = y));
  },
  98,
);
