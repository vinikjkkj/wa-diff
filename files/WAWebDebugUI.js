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
    "WAWebLocalStorage",
    "WAWebMiscBrowserUtils",
    "WAWebThemeContext",
    "WAWebUserPrefsGeneral",
    "react",
    "useWAWebAdjustableChatListWidth",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react"));
    function d() {
      (o("WAWebUserPrefsGeneral").getSystemThemeMode() &&
        o("WAWebUserPrefsGeneral").setSystemThemeMode(!1),
        o("WAWebThemeContext").setTheme(
          o("WAWebThemeContext").isDarkTheme() ? "light" : "dark",
        ));
    }
    ((d.doc = "Toggles between light and dark mode"), (d.paramsToExecute = []));
    function m() {
      var e;
      (e = document.body) == null || e.classList.toggle("debug");
    }
    ((m.doc = "Toggles CSS debug mode"), (m.paramsToExecute = []));
    function p(t, n) {
      var a = r("WANullthrows")(document.getElementById("app"));
      o("ReactDOM_DEPRECATED").render_DEPRECATED(
        c.jsx(r("WAWebInternalToolsLoadingScreenSimulator.react"), {
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
    ((p.doc = "Show simulation for resume screen"),
      (p.paramsToExecute = ["4-stages"]));
    function _() {
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
    ((_.doc =
      "Blur out the message context from the chat list before taking a secreenshot"),
      (_.paramsToExecute = []));
    function f() {
      var e = "lid_debug";
      o("WAWebClientFeatureFlags").isFeatureEnabled(e)
        ? (o("WAWebClientFeatureFlags").debugDisableFeatureFlag(e),
          r("WAWebMiscBrowserUtils").hardRefresh())
        : (o("WAWebClientFeatureFlags").debugEnableFeatureFlag(e),
          o("WAWebCmd").Cmd.toggleLidDebugBadge());
    }
    ((f.doc =
      "Highlight the LID chats to help an easy distinguishion among PN chats"),
      (f.paramsToExecute = []));
    function g() {
      (r("WAWebLocalStorage") == null ||
        r("WAWebLocalStorage").removeItem(
          o("useWAWebAdjustableChatListWidth").CHATLIST_CUSTOM_WIDTH_LS_KEY,
        ),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[reload] resetChatlistWidth",
            ])),
        ),
        location.reload());
    }
    ((g.doc = "Reset adjustable chat list custom width to default and reload"),
      (g.paramsToExecute = []));
    var h = {
      toggleDarkMode: d,
      toggleCSSDebugMode: m,
      toggleE2EDebugMode: o("WAWebDebugE2EMode").toggleE2EDebugMode,
      toggleResumeScreen: p,
      toggleScreenShotMode: _,
      toggleLidDebugMode: f,
      resetChatlistWidth: g,
    };
    l.default = h;
  },
  98,
);
