__d(
  "WAWebQueuedSendGate",
  ["Promise"],
  function (t, n, r, o, a, i) {
    var e,
      l = null;
    function s(e) {
      l = e;
    }
    function u(e) {
      var t;
      return (t = l == null ? void 0 : l(e)) != null ? t : c;
    }
    function c(t) {
      return (e || (e = n("Promise"))).resolve();
    }
    ((i.setQueuedSendGate = s), (i.holdQueuedSend = u));
  },
  66,
);
