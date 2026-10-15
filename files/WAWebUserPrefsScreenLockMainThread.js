__d(
  "WAWebUserPrefsScreenLockMainThread",
  ["WAWebUserPrefsScreenLock", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e = {
      getScreenLockEnabled: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebUserPrefsScreenLock").getScreenLockEnabled();
        });
        function t() {
          return e.apply(this, arguments);
        }
        return t;
      })(),
    };
    l.userPrefsScreenLockMainThread = e;
  },
  98,
);
