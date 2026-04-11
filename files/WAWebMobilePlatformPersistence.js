__d(
  "WAWebMobilePlatformPersistence",
  [
    "WAWebCastToLegacyEnum",
    "WAWebMobilePlatforms",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.MOBILE_PLATFORM,
      );
      return r("WAWebCastToLegacyEnum")(e, o("WAWebMobilePlatforms").PLATFORMS);
    }
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          e != null &&
            (yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
              o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.MOBILE_PLATFORM,
              e,
            ));
        })),
        u.apply(this, arguments)
      );
    }
    ((l.getLastMobilePlatform = e), (l.setLastMobilePlatform = s));
  },
  98,
);
