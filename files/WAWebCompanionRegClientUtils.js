__d(
  "WAWebCompanionRegClientUtils",
  ["$InternalEnum", "WAWebEnvironment", "WAWebMiscBrowserUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = n("$InternalEnum")({
        UNKNOWN: 0,
        CHROME: 1,
        EDGE: 2,
        FIREFOX: 3,
        IE: 4,
        OPERA: 5,
        SAFARI: 6,
        ELECTRON: 7,
        UWP: 8,
        OTHER_WEB_CLIENT: 9,
      }),
      u =
        ((e = {}),
        (e[s.UNKNOWN] = "0"),
        (e[s.CHROME] = "1"),
        (e[s.EDGE] = "2"),
        (e[s.FIREFOX] = "3"),
        (e[s.IE] = "4"),
        (e[s.OPERA] = "5"),
        (e[s.SAFARI] = "6"),
        (e[s.ELECTRON] = "7"),
        (e[s.UWP] = "8"),
        (e[s.OTHER_WEB_CLIENT] = "9"),
        e),
      c = u[d()];
    function d() {
      if (r("WAWebEnvironment").isWindows) return s.UWP;
      var e = r("WAWebMiscBrowserUtils").info().name;
      return e
        ? e === "Chrome"
          ? s.CHROME
          : e === "Firefox"
            ? s.FIREFOX
            : e === "IE"
              ? s.IE
              : e === "Opera"
                ? s.OPERA
                : e === "Safari"
                  ? s.SAFARI
                  : e === "Edge"
                    ? s.EDGE
                    : s.OTHER_WEB_CLIENT
        : s.UNKNOWN;
    }
    ((l.DEVICE_PLATFORM = c), (l.getCompanionWebClientFromBrowser = d));
  },
  98,
);
