__d(
  "WAWebVoipConnectingToastState",
  ["WAWebNoop"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map(),
      s = 12e3;
    function u(t, n) {
      var o = e.get(t);
      if (o != null && o.fired) return r("WAWebNoop");
      if (o == null) {
        var a = { fired: !1, timer: null, activeHandler: null };
        (e.set(t, a), (o = a));
      }
      var i = o,
        l = i.activeHandler;
      return (
        (i.activeHandler = n),
        i.timer == null &&
          (i.timer = window.setTimeout(function () {
            if (((i.timer = null), !i.fired)) {
              i.fired = !0;
              var e = i.activeHandler;
              ((i.activeHandler = null), e != null && e());
            }
          }, s)),
        function () {
          i.activeHandler === n && (i.activeHandler = l);
        }
      );
    }
    function c() {
      for (var t of e.values()) t.timer != null && window.clearTimeout(t.timer);
      e.clear();
    }
    ((l.CONNECTING_TOAST_DELAY_MS = s),
      (l.subscribeToConnectingToast = u),
      (l.resetConnectingToastStateForTesting = c));
  },
  98,
);
