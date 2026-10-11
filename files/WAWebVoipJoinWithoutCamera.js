__d(
  "WAWebVoipJoinWithoutCamera",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = null;
    function l(t) {
      e = t;
    }
    function s(t) {
      return t !== e ? !1 : ((e = null), !0);
    }
    function u(t) {
      e === t && (e = null);
    }
    function c() {
      e = null;
    }
    ((i.markJoinWithoutCamera = l),
      (i.consumeJoinWithoutCamera = s),
      (i.clearJoinWithoutCamera = u),
      (i.resetJoinWithoutCameraForTesting = c));
  },
  66,
);
