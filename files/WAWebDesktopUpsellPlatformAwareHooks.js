__d(
  "WAWebDesktopUpsellPlatformAwareHooks",
  ["WAWebDesktopUpsellUtils", "WAWebMobilePlatforms", "useWAWebAsync"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = s();
      return !o("WAWebMobilePlatforms").isSMB() && e;
    }
    function s() {
      var e = o("WAWebDesktopUpsellUtils").getUserDesktopOs(),
        t = r("useWAWebAsync")(
          o("WAWebDesktopUpsellUtils").isWebUserOnSupportedWindowsOSForUWPAsync,
          [],
        ),
        n = r("useWAWebAsync")(
          o("WAWebDesktopUpsellUtils")
            .isWebUserOnSupportedMacOSForCatalystAsync,
          [],
        );
      return e === o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS &&
        !t.loading &&
        !t.error
        ? t.value
        : e === o("WAWebDesktopUpsellUtils").UserDesktopOs.MACOS &&
            !n.loading &&
            !n.error
          ? n.value
          : !1;
    }
    ((l.useWAWebDesktopUpsellPlatformCheck = e),
      (l.useWAWebDesktopUpsellPlatformAwareOsVersionCheck = s));
  },
  98,
);
