__d(
  "WAWebMobilePlatformPersistence",
  [
    "WAWebCastToLegacyEnum",
    "WAWebMobilePlatforms",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.MOBILE_PLATFORM,
      );
      return r("WAWebCastToLegacyEnum")(e, o("WAWebMobilePlatforms").PLATFORMS);
    }
    async function s(e) {
      e != null &&
        (await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
          o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.MOBILE_PLATFORM,
          e,
        ));
    }
    ((l.getLastMobilePlatform = e), (l.setLastMobilePlatform = s));
  },
  98,
);
