__d(
  "WAWebInactiveTabRedirect",
  [
    "WALogger",
    "WAWebAppScreenTypes",
    "WAWebConnGetters",
    "WAWebConnModel",
    "WAWebEnvironment",
    "WAWebL10N",
    "WAWebThemeContext",
    "WAWebUserPrefsGeneral",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      e === void 0 && (e = window.location);
      var t = !1;
      return function (n) {
        t || (t = u(n, e));
      };
    }
    function u(t, n) {
      if (
        t !== o("WAWebAppScreenTypes").AppScreen.ANOTHER_SESSION ||
        r("WAWebEnvironment").isWindows ||
        !navigator.onLine ||
        !r("gkx")("28610")
      )
        return !1;
      var a = new URLSearchParams({
        locale: r("WAWebL10N").getLocale(),
        theme: c(),
      });
      o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn) &&
        a.set("smb", "1");
      var i = "/inactive/?" + a.toString();
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[md takeover] redirecting to ",
            "",
          ])),
        i,
      );
      var l = "" + n.pathname + n.search + n.hash;
      return (n.replace(i + "#" + encodeURIComponent(l)), !0);
    }
    function c() {
      return o("WAWebUserPrefsGeneral").getSystemThemeMode()
        ? "system"
        : o("WAWebThemeContext").isDarkTheme()
          ? "dark"
          : "light";
    }
    l.createInactiveTabPageRedirect = s;
  },
  98,
);
