__d(
  "WAWebWDSColorTheme",
  ["WDSThemes", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, n) {
      return (e || (e = r("stylex")))(u(t, n)).split(" ").filter(Boolean);
    }
    function u(e, t) {
      return e === "system"
        ? t
          ? o("WDSThemes").WDSSMBSystemTheme
          : o("WDSThemes").WDSSystemTheme
        : e === "dark"
          ? t
            ? o("WDSThemes").WDSSMBDarkTheme
            : o("WDSThemes").WDSDarkTheme
          : e === "light"
            ? t
              ? o("WDSThemes").WDSSMBLightTheme
              : o("WDSThemes").WDSLightTheme
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    l.getWDSColorThemeClassNames = s;
  },
  98,
);
