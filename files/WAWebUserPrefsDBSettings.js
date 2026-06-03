__d(
  "WAWebUserPrefsDBSettings",
  [
    "WAWebUserPrefsCacheStorage",
    "WAWebUserPrefsKeys",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          e != null
            ? yield o(
                "WAWebUserPrefsCacheStorage",
              ).userPrefsCacheStorage.setItemToCacheStorage(
                o("WAWebUserPrefsKeys").MD_KEYS.COLUMN_PACKING_ENABLED,
                e,
              )
            : yield o(
                "WAWebUserPrefsCacheStorage",
              ).userPrefsCacheStorage.removeItemFromCacheStorage(
                o("WAWebUserPrefsKeys").MD_KEYS.COLUMN_PACKING_ENABLED,
              );
        })),
        s.apply(this, arguments)
      );
    }
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o(
            "WAWebUserPrefsCacheStorage",
          ).userPrefsCacheStorage.getItemFromCacheStorage(
            o("WAWebUserPrefsKeys").MD_KEYS.COLUMN_PACKING_ENABLED,
          );
          return e;
        })),
        c.apply(this, arguments)
      );
    }
    ((l.setColumnPackingValueToStorage = e),
      (l.getColumnPackingValueFromStorage = u));
  },
  98,
);
