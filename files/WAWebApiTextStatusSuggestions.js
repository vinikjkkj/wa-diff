__d(
  "WAWebApiTextStatusSuggestions",
  ["WAWebUserPrefsIndexedDBStorage", "WAWebUserPrefsKeys"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.TEXT_STATUS_SUGGESTIONS,
        e,
      );
    }
    async function s() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.TEXT_STATUS_SUGGESTIONS,
      );
    }
    ((l.setTextStatusSuggestions = e), (l.getTextStatusSuggestions = s));
  },
  98,
);
