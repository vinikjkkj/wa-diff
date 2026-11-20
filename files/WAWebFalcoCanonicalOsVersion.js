__d(
  "WAWebFalcoCanonicalOsVersion",
  ["WAWebBrowserApi", "WAWebEnvironment", "WAWebFalcoCanonicalBrowserInfo"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e,
        t = r("WAWebFalcoCanonicalBrowserInfo")().version || null;
      return r("WAWebEnvironment").isWindows &&
        (e = o("WAWebBrowserApi").getOsVersionOverride()) != null
        ? e
        : t;
    }
    l.default = e;
  },
  98,
);
