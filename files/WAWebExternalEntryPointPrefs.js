__d(
  "WAWebExternalEntryPointPrefs",
  ["WALogger", "WATimeUtils", "WAWebUserPrefsKeys", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      var t = Date.now();
      return t - e.addedTime > o("WATimeUtils").WEEK_MILLISECONDS;
    }
    function c(t) {
      try {
        (Object.entries(t).forEach(function (e) {
          var n = e[0],
            r = e[1];
          u(r) && delete t[n];
        }),
          r("WAWebUserPrefsStore").setUser(
            o("WAWebUserPrefsKeys").KEYS.EXTERNAL_ENTRY_POINT,
            t,
          ));
      } catch (t) {
        o("WALogger").ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[external_ctx] failed to persist entry points",
            ])),
        );
      }
    }
    function d() {
      try {
        var e = r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").KEYS.EXTERNAL_ENTRY_POINT,
        );
        return e == null ? {} : e;
      } catch (e) {
        return (
          o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[external_ctx] failed to load entry points",
              ])),
          ),
          {}
        );
      }
    }
    function m(e) {
      var t = e.authSuccess,
        n = e.chatId,
        r = e.deepLinkType,
        o = e.partnerName,
        a = d(),
        i = Date.now();
      ((a[n.toString()] = {
        addedTime: i,
        deepLinkType: r,
        authSuccess: t,
        partnerName: o != null ? o : null,
      }),
        c(a));
    }
    function p(e) {
      var t = d(),
        n = t[e.toString()];
      n != null && (delete t[e.toString()], c(t));
    }
    function _(e) {
      var t = d(),
        n = t[e.toString()];
      return n == null || u(n) ? null : n;
    }
    ((l.saveExternalEntryPoint = m),
      (l.deleteExternalEntryPoint = p),
      (l.getExternalEntryPoint = _));
  },
  98,
);
