__d(
  "KadabraStopCurrentMessageState",
  ["justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map(),
      s = r("justknobx")._("3335");
    function u(t) {
      var n;
      return (n = e.get(t)) != null ? n : !1;
    }
    function c(t) {
      s && e.set(t, !0);
    }
    function d(t) {
      e.delete(t);
    }
    ((l.getIsMessageStopped = u),
      (l.setStoppedMessage = c),
      (l.clearStoppedMessage = d));
  },
  98,
);
