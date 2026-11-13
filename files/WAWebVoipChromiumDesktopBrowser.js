__d(
  "WAWebVoipChromiumDesktopBrowser",
  ["WAWebEnvironment", "WAWebUA", "isWAWebFeatureDetectionAndroidTablet"],
  function (t, n, r, o, a, i, l) {
    var e = [
      o("WAWebUA").OS_TYPE.WINDOWS,
      o("WAWebUA").OS_TYPE.MAC,
      o("WAWebUA").OS_TYPE.CHROMEOS,
    ];
    function s() {
      return (
        o("WAWebUA").UA.isBlink &&
        u() &&
        !o("WAWebUA").UA.isOculusBrowser &&
        !o(
          "isWAWebFeatureDetectionAndroidTablet",
        ).isWAWebFeatureDetectionAndroidOS() &&
        !r("WAWebEnvironment").isWindows
      );
    }
    function u() {
      return (
        e.includes(o("WAWebUA").UA.os) || /\bX11\b/.test(navigator.userAgent)
      );
    }
    l.isChromiumDesktopBrowser = s;
  },
  98,
);
