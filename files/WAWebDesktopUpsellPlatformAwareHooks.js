__d(
  "WAWebDesktopUpsellPlatformAwareHooks",
  [
    "WAWebDesktopUpsellUtils",
    "WAWebMobilePlatforms",
    "WAWebProductFeature",
    "useWAWebAsync",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return s() || o("WAWebDesktopUpsellUtils").isAndroidAppUpsellEnabled();
    }
    function s() {
      var e = u();
      return !o("WAWebMobilePlatforms").isSMB() && e;
    }
    function u() {
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
      return o("WAWebProductFeature").isInternalProduct()
        ? !1
        : e === o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS &&
            !t.loading &&
            !t.error
          ? t.value
          : e === o("WAWebDesktopUpsellUtils").UserDesktopOs.MACOS &&
              !n.loading &&
              !n.error
            ? n.value
            : !1;
    }
    ((l.useWAWebNativeAppUpsellPlatformCheck = e),
      (l.useWAWebDesktopUpsellPlatformCheck = s),
      (l.useWAWebDesktopUpsellPlatformAwareOsVersionCheck = u));
  },
  98,
);
