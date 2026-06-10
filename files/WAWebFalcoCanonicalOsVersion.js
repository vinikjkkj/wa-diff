__d(
  "WAWebFalcoCanonicalOsVersion",
  ["WAWebBrowserApi", "WAWebBrowserInfo", "WAWebEnvironment"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e,
        t = r("WAWebBrowserInfo")().version || null;
      return r("WAWebEnvironment").isWindows &&
        (e = o("WAWebBrowserApi").getOsVersionOverride()) != null
        ? e
        : t;
    }
    l.default = e;
  },
  98,
);
