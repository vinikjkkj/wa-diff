__d(
  "WAWebApiTextStatusSuggestions",
  [
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.TEXT_STATUS_SUGGESTIONS,
        e,
      );
    }
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS.TEXT_STATUS_SUGGESTIONS,
          );
        })),
        u.apply(this, arguments)
      );
    }
    ((l.setTextStatusSuggestions = e), (l.getTextStatusSuggestions = s));
  },
  98,
);
