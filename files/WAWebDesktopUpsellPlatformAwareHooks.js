__d(
  "WAWebDesktopUpsellPlatformAwareHooks",
  [
    "WAWebDesktopUpsellUtils",
    "WAWebMobilePlatforms",
    "react-compiler-runtime",
    "useWAWebAsync",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("react-compiler-runtime").c(2),
        t = s(),
        n;
      return (
        e[0] !== t
          ? ((n = !o("WAWebMobilePlatforms").isSMB() && t),
            (e[0] = t),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    function s() {
      var e = o("react-compiler-runtime").c(2),
        t = o("WAWebDesktopUpsellUtils").getUserDesktopOs(),
        n;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = []), (e[0] = n))
        : (n = e[0]);
      var a = r("useWAWebAsync")(
          o("WAWebDesktopUpsellUtils").isWebUserOnSupportedWindowsOSForUWPAsync,
          n,
        ),
        i;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = []), (e[1] = i))
        : (i = e[1]);
      var l = r("useWAWebAsync")(
        o("WAWebDesktopUpsellUtils").isWebUserOnSupportedMacOSForCatalystAsync,
        i,
      );
      return t === o("WAWebDesktopUpsellUtils").UserDesktopOs.WINDOWS &&
        !a.loading &&
        !a.error
        ? a.value
        : t === o("WAWebDesktopUpsellUtils").UserDesktopOs.MACOS &&
            !l.loading &&
            !l.error
          ? l.value
          : !1;
    }
    ((l.useWAWebDesktopUpsellPlatformCheck = e),
      (l.useWAWebDesktopUpsellPlatformAwareOsVersionCheck = s));
  },
  98,
);
