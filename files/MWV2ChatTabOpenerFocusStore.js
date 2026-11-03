__d(
  "MWV2ChatTabOpenerFocusStore",
  ["ExecutionEnvironment"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = null,
      u = new Map();
    function c() {
      u.forEach(function (e, t) {
        e.isConnected || u.delete(t);
      });
    }
    function d() {
      if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
        c();
        var t = document.activeElement;
        s = t instanceof HTMLElement && t !== document.body ? t : null;
      }
    }
    function m(e) {
      s != null && (u.set(e, s), (s = null));
    }
    function p(t) {
      var n = u.get(t);
      (u.delete(t),
        !(n == null || !n.isConnected) &&
          (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
          window.requestAnimationFrame(function () {
            if (
              n.isConnected &&
              (e || (e = r("ExecutionEnvironment"))).canUseDOM
            ) {
              var t = document.activeElement;
              (t == null || t === document.body || !t.isConnected) && n.focus();
            }
          }));
    }
    ((l.captureChatTabOpener = d),
      (l.registerChatTabOpener = m),
      (l.restoreChatTabOpenerFocus = p));
  },
  98,
);
