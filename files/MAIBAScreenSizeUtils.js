__d(
  "MAIBAScreenSizeUtils",
  ["MAIBAChatConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1600,
      s = 1920,
      u = 2560,
      c = 425,
      d = 500,
      m = 600;
    function p(t) {
      return t >= u
        ? m
        : t >= s
          ? d
          : t >= e
            ? c
            : o("MAIBAChatConstants").DEFAULT_CHAT_WINDOW_WIDTH;
    }
    function _() {
      var e,
        t,
        n =
          (e =
            (t = document.documentElement) == null ? void 0 : t.clientWidth) !=
          null
            ? e
            : window.innerWidth;
      return p(n);
    }
    function f(e, t, n, r) {
      var o,
        a,
        i =
          (o =
            (a = document.documentElement) == null ? void 0 : a.clientWidth) !=
          null
            ? o
            : window.innerWidth;
      return e ? i : r === !0 ? Math.floor((i - n) / 2) : t ? i - n : p(i);
    }
    ((l.getCurrentMAIBAResponsiveChatWidth = _), (l.calculateMAIBAWidth = f));
  },
  98,
);
