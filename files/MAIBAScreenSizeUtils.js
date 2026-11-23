__d(
  "MAIBAScreenSizeUtils",
  ["ExecutionEnvironment", "MAIBAChatConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 1600,
      u = 1920,
      c = 2560,
      d = 425,
      m = 500,
      p = 600;
    function _(e) {
      return e >= c
        ? p
        : e >= u
          ? m
          : e >= s
            ? d
            : o("MAIBAChatConstants").DEFAULT_CHAT_WINDOW_WIDTH;
    }
    function f() {
      if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
        var t, n;
        return (t =
          (n = document.documentElement) == null ? void 0 : n.clientWidth) !=
          null
          ? t
          : window.innerWidth;
      }
      return 0;
    }
    function g() {
      return _(f());
    }
    function h(e, t, n, r) {
      var o = f();
      return e ? o : r === !0 ? Math.floor((o - n) / 2) : t ? o - n : _(o);
    }
    ((l.getCurrentMAIBAResponsiveChatWidth = g), (l.calculateMAIBAWidth = h));
  },
  98,
);
