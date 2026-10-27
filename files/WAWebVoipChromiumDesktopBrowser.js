__d(
  "WAWebVoipChromiumDesktopBrowser",
  ["WAWebEnvironment", "WAWebUA", "isWAWebFeatureDetectionAndroidTablet"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebUA").UA.isBlink &&
        s() &&
        !o("WAWebUA").UA.isOculusBrowser &&
        !o(
          "isWAWebFeatureDetectionAndroidTablet",
        ).isWAWebFeatureDetectionAndroidOS() &&
        !r("WAWebEnvironment").isWindows
      );
    }
    function s() {
      return (
        [
          o("WAWebUA").OS_TYPE.WINDOWS,
          o("WAWebUA").OS_TYPE.MAC,
          o("WAWebUA").OS_TYPE.CHROMEOS,
        ].includes(o("WAWebUA").UA.os) || /\bX11\b/.test(navigator.userAgent)
      );
    }
    l.isChromiumDesktopBrowser = e;
  },
  98,
);
