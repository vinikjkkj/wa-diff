__d(
  "WAWebVoipJoinWithoutCamera",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = null,
      l = null;
    function s(t) {
      e = { callId: t, isStart: !1 };
    }
    function u(t, n) {
      var r;
      ((l = n ? t : null),
        n
          ? (e = { callId: t, isStart: !0 })
          : ((r = e) == null ? void 0 : r.isStart) === !0 && (e = null));
    }
    function c(t) {
      var n = e;
      return n == null || (t != null ? t !== n.callId : !n.isStart)
        ? !1
        : ((e = null), !0);
    }
    function d(e) {
      return e != null && e === l;
    }
    function m(t) {
      (e != null && (e.callId === t || e.isStart) && (e = null), p(t));
    }
    function p(e) {
      l === e && (l = null);
    }
    ((i.markJoinWithoutCamera = s),
      (i.setStartWithoutCamera = u),
      (i.consumeJoinWithoutCamera = c),
      (i.isCallStartedWithoutCamera = d),
      (i.clearJoinWithoutCamera = m));
  },
  66,
);
