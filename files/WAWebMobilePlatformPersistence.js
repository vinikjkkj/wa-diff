__d(
  "WAWebMobilePlatformPersistence",
  [
    "WAWebMobilePlatforms",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "cr:22408",
    "objectValues",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e,
        t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
          o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.MOBILE_PLATFORM,
        );
      return (e = r("objectValues")(o("WAWebMobilePlatforms").PLATFORMS).find(
        function (e) {
          return e === t;
        },
      )) != null
        ? e
        : n("cr:22408") == null
          ? void 0
          : n("cr:22408").castPlatform(t);
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
