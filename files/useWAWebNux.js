__d(
  "useWAWebNux",
  [
    "WAWebNuxAction",
    "WAWebUserPrefsNuxPreferences",
    "react",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect,
      d = s.useState;
    function m(e, t) {
      t === void 0 && (t = o("WAWebUserPrefsNuxPreferences").shouldShowNUX);
      var n = d(function () {
          return t(e);
        }),
        r = n[0],
        a = n[1];
      c(
        function () {
          var n = o("WAWebUserPrefsNuxPreferences").getNUX(e);
          n == null &&
            (o("WAWebUserPrefsNuxPreferences").setNUX(e, { views: 0 }),
            a(t(e)));
        },
        [e, t],
      );
      var i = u(
          function () {
            (o("WAWebNuxAction").viewNux(e), a(t(e)));
          },
          [e, t],
        ),
        l = u(
          function () {
            (o("WAWebNuxAction").dismissNux(e), a(t(e)));
          },
          [e, t],
        ),
        s = u(
          function () {
            (o("WAWebNuxAction").resetNux(e), a(t(e)));
          },
          [e, t],
        );
      return (
        o("useWAWebListener").useListener(
          o("WAWebUserPrefsNuxPreferences").NuxPrefsEvent,
          e,
          function () {
            a(t(e));
          },
        ),
        [r, i, l, s]
      );
    }
    l.default = m;
  },
  98,
);
