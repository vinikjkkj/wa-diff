__d(
  "WAWebSystemTheme",
  ["WAWebEventEmitter", "WAWebUserPrefsMultiDevice"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
        function t() {
          var t;
          return (
            (t = e.call(this) || this),
            (t.mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")),
            (t.theme = t.getCurrentTheme()),
            (t.handleThemeChange = function () {
              var e = t.getCurrentTheme();
              !o("WAWebUserPrefsMultiDevice").isRegistered() ||
                e === t.theme ||
                ((t.theme = e), t.trigger("system_theme_change", e));
            }),
            t.mediaQuery.addListener(t.handleThemeChange),
            t
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getCurrentTheme = function () {
            return this.mediaQuery.matches ? "dark" : "light";
          }),
          t
        );
      })(r("WAWebEventEmitter")),
      s = new e(),
      u = s;
    l.default = u;
  },
  98,
);
