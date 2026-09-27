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
        var a = { fired: !1, timer: null, handlers: [] };
        (e.set(t, a), (o = a));
      }
      var i = o;
      return (
        i.handlers.push(n),
        i.timer == null &&
          (i.timer = window.setTimeout(function () {
            if (((i.timer = null), !i.fired)) {
              i.fired = !0;
              var e = i.handlers[i.handlers.length - 1];
              ((i.handlers.length = 0), e != null && e());
            }
          }, s)),
        function () {
          var e = i.handlers.lastIndexOf(n);
          e !== -1 && i.handlers.splice(e, 1);
        }
      );
    }
    function c() {
      for (var t of e.values()) t.timer != null && window.clearTimeout(t.timer);
      e.clear();
    }
    ((l.subscribeToConnectingToast = u),
      (l.resetConnectingToastStateForTesting = c));
  },
  98,
);
