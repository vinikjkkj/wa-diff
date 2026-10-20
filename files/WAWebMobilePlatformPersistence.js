__d(
  "WAWebMobilePlatformPersistence",
  [
    "WAWebMobilePlatforms",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "asyncToGeneratorRuntime",
    "cr:16728",
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
        : n("cr:16728") == null
          ? void 0
          : n("cr:16728").castPlatform(t);
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
