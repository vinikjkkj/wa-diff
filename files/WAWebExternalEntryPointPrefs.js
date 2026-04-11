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
        (Object.keys(t).forEach(function (e) {
          u(t[e]) && delete t[e];
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
    function m(e, t, n, r) {
      var o = d(),
        a = Date.now();
      ((o[e.toString()] = {
        addedTime: a,
        deepLinkType: t,
        authSuccess: n,
        partnerName: r != null ? r : null,
      }),
        c(o));
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
