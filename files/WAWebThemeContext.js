__d(
  "WAWebThemeContext",
  ["WAWebSystemTheme", "WAWebUserPrefsGeneral", "bx", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.createContext,
      c = s.useContext,
      d = {
        light: [
          {
            id: "bg-chat-light",
            selectors: ["[data-asset-chat-background-light]"],
            low: { default: r("bx").getURL(r("bx")("9548")) },
            high: { default: r("bx").getURL(r("bx")("9548")) },
          },
          {
            id: "bg-chat-dark",
            selectors: ["[data-asset-chat-background-dark]"],
            low: { default: r("bx").getURL(r("bx")("9547")) },
            high: { default: r("bx").getURL(r("bx")("9547")) },
          },
        ],
        dark: [
          {
            id: "bg-chat-dark",
            selectors: ["[data-asset-chat-background-dark]"],
            low: { default: r("bx").getURL(r("bx")("9547")) },
            high: { default: r("bx").getURL(r("bx")("9547")) },
          },
        ],
        lightRefreshed: [
          {
            id: "bg-chat-beige",
            selectors: ["[data-asset-chat-background-beige]"],
            low: { default: r("bx").getURL(r("bx")("31422")) },
            high: { default: r("bx").getURL(r("bx")("31422")) },
          },
          {
            id: "bg-chat-light-refreshed",
            selectors: ["[data-asset-chat-background-light]"],
            low: { default: r("bx").getURL(r("bx")("31402")) },
            high: { default: r("bx").getURL(r("bx")("31402")) },
          },
          {
            id: "bg-chat-dark-refreshed",
            selectors: ["[data-asset-chat-background-dark]"],
            low: { default: r("bx").getURL(r("bx")("31401")) },
            high: { default: r("bx").getURL(r("bx")("31401")) },
          },
        ],
        darkRefreshed: [
          {
            id: "bg-chat-dark-refreshed",
            selectors: ["[data-asset-chat-background-dark]"],
            low: { default: r("bx").getURL(r("bx")("31401")) },
            high: { default: r("bx").getURL(r("bx")("31401")) },
          },
        ],
        smbLight: [
          {
            id: "bg-chat-beige-smb",
            selectors: ["[data-asset-chat-background-beige]"],
            low: { default: r("bx").getURL(r("bx")("25218")) },
            high: { default: r("bx").getURL(r("bx")("25218")) },
          },
          {
            id: "bg-chat-light-smb",
            selectors: ["[data-asset-chat-background-light]"],
            low: { default: r("bx").getURL(r("bx")("25229")) },
            high: { default: r("bx").getURL(r("bx")("25229")) },
          },
          {
            id: "bg-chat-dark-smb",
            selectors: ["[data-asset-chat-background-dark]"],
            low: { default: r("bx").getURL(r("bx")("25221")) },
            high: { default: r("bx").getURL(r("bx")("25221")) },
          },
        ],
        smbDark: [
          {
            id: "bg-chat-dark-smb",
            selectors: ["[data-asset-chat-background-dark]"],
            low: { default: r("bx").getURL(r("bx")("25221")) },
            high: { default: r("bx").getURL(r("bx")("25221")) },
          },
        ],
      };
    function m() {
      return o("WAWebUserPrefsGeneral").getSystemThemeMode()
        ? r("WAWebSystemTheme").getCurrentTheme()
        : o("WAWebUserPrefsGeneral").getTheme();
    }
    function p(e) {
      (o("WAWebUserPrefsGeneral").setTheme(e), f(e));
    }
    function _() {
      return m() === "dark";
    }
    function f(e) {
      var t = document.body,
        n = e === "dark";
      (t == null || t.classList.toggle("dark", n), g());
    }
    function g() {
      var e = getComputedStyle(document.body).getPropertyValue(
          "--navbar-background",
        ),
        t = document.querySelectorAll('meta[name="theme-color"]');
      t.forEach(function (t) {
        t.setAttribute("content", e);
      });
    }
    var h = {
        theme: r("WAWebSystemTheme").getCurrentTheme(),
        systemThemeMode: !0,
        setTheme: p,
        setSystemThemeMode: o("WAWebUserPrefsGeneral").setSystemThemeMode,
      },
      y = u(h);
    function C() {
      return c(y);
    }
    function b() {
      return C().theme === "dark";
    }
    ((l.THEME_ASSETS = d),
      (l.getTheme = m),
      (l.setTheme = p),
      (l.isDarkTheme = _),
      (l.applyThemeToUI = f),
      (l.resetPwaTitlebarColor = g),
      (l.ThemeContext = y),
      (l.useTheme = C),
      (l.useIsDarkTheme = b));
  },
  98,
);
