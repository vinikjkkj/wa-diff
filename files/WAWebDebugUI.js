__d(
  "WAWebDebugUI",
  [
    "ReactDOM_DEPRECATED",
    "WALogger",
    "WANullthrows",
    "WAWebClientFeatureFlags",
    "WAWebCmd",
    "WAWebDebugE2EMode",
    "WAWebInternalToolsLoadingScreenSimulator.react",
    "WAWebMiscBrowserUtils",
    "WAWebThemeContext",
    "WAWebUserPrefsGeneral",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react"));
    function c() {
      (o("WAWebUserPrefsGeneral").getSystemThemeMode() &&
        o("WAWebUserPrefsGeneral").setSystemThemeMode(!1),
        o("WAWebThemeContext").setTheme(
          o("WAWebThemeContext").isDarkTheme() ? "light" : "dark",
        ));
    }
    ((c.doc = "Toggles between light and dark mode"), (c.paramsToExecute = []));
    function d() {
      var e;
      (e = document.body) == null || e.classList.toggle("debug");
    }
    ((d.doc = "Toggles CSS debug mode"), (d.paramsToExecute = []));
    function m(t, n) {
      var a = r("WANullthrows")(document.getElementById("app"));
      o("ReactDOM_DEPRECATED").render_DEPRECATED(
        u.jsx(r("WAWebInternalToolsLoadingScreenSimulator.react"), {
          variant: t,
          unifiedLoadingScreen: n,
        }),
        a,
      );
      var i = function () {
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[reload] stoggleResumeScreen",
            ])),
        ),
          window.location.reload());
      };
      window.addEventListener("keydown", i);
    }
    ((m.doc = "Show simulation for resume screen"),
      (m.paramsToExecute = ["4-stages"]));
    function p() {
      var e = [
          "[aria-rowcount][role=grid]",
          "[data-testid=chat-modal]",
          "[data-testid=archived-chatlist]",
          "[data-testid=locked-chatlist]",
          "[data-testid=status-list-drawer]",
        ],
        t = "debug-screenshot-toggle",
        n = document.getElementById(t);
      if (n) n.remove();
      else {
        var r,
          o = document.createElement("style");
        ((o.id = "debug-screenshot-toggle"),
          (o.type = "text/css"),
          (o.innerHTML = e.join(",") + "{filter: blur(5px);}"),
          (r = document.querySelector("head")) == null || r.appendChild(o));
      }
    }
    ((p.doc =
      "Blur out the message context from the chat list before taking a secreenshot"),
      (p.paramsToExecute = []));
    function _() {
      var e = "lid_debug";
      o("WAWebClientFeatureFlags").isFeatureEnabled(e)
        ? (o("WAWebClientFeatureFlags").debugDisableFeatureFlag(e),
          r("WAWebMiscBrowserUtils").hardRefresh())
        : (o("WAWebClientFeatureFlags").debugEnableFeatureFlag(e),
          o("WAWebCmd").Cmd.toggleLidDebugBadge());
    }
    ((_.doc =
      "Highlight the LID chats to help an easy distinguishion among PN chats"),
      (_.paramsToExecute = []));
    var f = {
      toggleDarkMode: c,
      toggleCSSDebugMode: d,
      toggleE2EDebugMode: o("WAWebDebugE2EMode").toggleE2EDebugMode,
      toggleResumeScreen: m,
      toggleScreenShotMode: p,
      toggleLidDebugMode: _,
    };
    l.default = f;
  },
  98,
);
