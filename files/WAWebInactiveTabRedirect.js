__d(
  "WAWebInactiveTabRedirect",
  [
    "WALogger",
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
    function s(t) {
      if (
        (t === void 0 && (t = window.location),
        !(
          r("WAWebEnvironment").isWindows ||
          !navigator.onLine ||
          !r("gkx")("28610")
        ))
      ) {
        var n = new URLSearchParams({
          locale: r("WAWebL10N").getLocale(),
          theme: u(),
        });
        o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn) &&
          n.set("smb", "1");
        var a = "/inactive/?" + n.toString();
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[md takeover] redirecting to ",
              "",
            ])),
          a,
        );
        var i = "" + t.pathname + t.search + t.hash;
        t.replace(a + "#" + encodeURIComponent(i));
      }
    }
    function u() {
      return o("WAWebUserPrefsGeneral").getSystemThemeMode()
        ? "system"
        : o("WAWebThemeContext").isDarkTheme()
          ? "dark"
          : "light";
    }
    l.maybeRedirectToInactiveTabPage = s;
  },
  98,
);
