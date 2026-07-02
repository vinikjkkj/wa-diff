__d(
  "WAWebLoginBounceGuard",
  ["WAWebSessionStorage"],
  function (t, n, r, o, a, i, l) {
    var e = 2,
      s = "wa_web_login_bounce_count";
    function u() {
      var e =
          r("WAWebSessionStorage") == null
            ? void 0
            : r("WAWebSessionStorage").getItem(s),
        t = e != null ? parseInt(e, 10) : 0;
      return Number.isNaN(t) ? 0 : t;
    }
    function c() {
      r("WAWebSessionStorage") == null ||
        r("WAWebSessionStorage").setItem(s, String(u() + 1));
    }
    function d() {
      r("WAWebSessionStorage") == null ||
        r("WAWebSessionStorage").removeItem(s);
    }
    ((l.MAX_LOGIN_BOUNCES = e),
      (l.getLoginBounceCount = u),
      (l.bumpLoginBounceCount = c),
      (l.resetLoginBounceCount = d));
  },
  98,
);
