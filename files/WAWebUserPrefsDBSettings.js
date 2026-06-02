__d(
  "WAWebUserPrefsDBSettings",
  ["WAWebUserPrefsCacheStorage", "WAWebUserPrefsKeys"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      e != null
        ? await o(
            "WAWebUserPrefsCacheStorage",
          ).userPrefsCacheStorage.setItemToCacheStorage(
            o("WAWebUserPrefsKeys").MD_KEYS.COLUMN_PACKING_ENABLED,
            e,
          )
        : await o(
            "WAWebUserPrefsCacheStorage",
          ).userPrefsCacheStorage.removeItemFromCacheStorage(
            o("WAWebUserPrefsKeys").MD_KEYS.COLUMN_PACKING_ENABLED,
          );
    }
    async function s() {
      var e = await o(
        "WAWebUserPrefsCacheStorage",
      ).userPrefsCacheStorage.getItemFromCacheStorage(
        o("WAWebUserPrefsKeys").MD_KEYS.COLUMN_PACKING_ENABLED,
      );
      return e;
    }
    ((l.setColumnPackingValueToStorage = e),
      (l.getColumnPackingValueFromStorage = s));
  },
  98,
);
