__d(
  "WAWebDebugUI",
  [
    "ReactDOM_DEPRECATED",
    "WALogger",
    "WAWebClientFeatureFlags",
    "WAWebCmd",
    "WAWebDebugE2EMode",
    "WAWebInternalToolsLoadingScreenSimulator.react",
    "WAWebLocalStorage",
    "WAWebMiscBrowserUtils",
    "WAWebThemeContext",
    "WAWebUserPrefsGeneral",
    "nullthrows",
    "react",
    "useWAWebAdjustableChatListWidth",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react"));
    function d() {
      (r("vulture")("yWV8UUYBMjpU-SZJM2FNRNYJoL0="),
        o("WAWebUserPrefsGeneral").getSystemThemeMode() &&
          o("WAWebUserPrefsGeneral").setSystemThemeMode(!1),
        o("WAWebThemeContext").setTheme(
          o("WAWebThemeContext").isDarkTheme() ? "light" : "dark",
        ));
    }
    ((d.doc = "Toggles between light and dark mode"), (d.paramsToExecute = []));
    function m() {
      var e;
      (r("vulture")("KbmOrkP86YxyRVTTVng1uq9L534="),
        (e = document.body) == null || e.classList.toggle("debug"));
    }
    ((m.doc = "Toggles CSS debug mode"), (m.paramsToExecute = []));
    function p(t, n) {
      r("vulture")("VpgKgZFPjS-F4UIOppwjFBkgbJc=");
      var a = r("nullthrows")(document.getElementById("app"));
      o("ReactDOM_DEPRECATED").render_DEPRECATED(
        c.jsx(r("WAWebInternalToolsLoadingScreenSimulator.react"), {
          variant: t,
          unifiedLoadingScreen: n,
        }),
        a,
      );
      var i = function () {
        (r("vulture")("4axbW4h5lVf44LAm0jUSMUX37G0="),
          o("WALogger").LOG(
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
      r("vulture")("0-QVAMqYhiHov1bsaVurTPZLq08=");
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
        var o,
          a = document.createElement("style");
        ((a.id = "debug-screenshot-toggle"),
          (a.type = "text/css"),
          (a.innerHTML = e.join(",") + "{filter: blur(5px);}"),
          (o = document.querySelector("head")) == null || o.appendChild(a));
      }
    }
    ((_.doc =
      "Blur out the message context from the chat list before taking a secreenshot"),
      (_.paramsToExecute = []));
    function f() {
      r("vulture")("v1V3XvvXXMP0iwgmWehymcPzNOk=");
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
      (r("vulture")("gD9Ouc5SN-gSpFkMZ5_cQfhwL6E="),
        r("WAWebLocalStorage") == null ||
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
