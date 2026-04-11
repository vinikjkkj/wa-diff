__d(
  "WAWebModelStorage",
  [
    "WAWebABPropsCache",
    "WAWebModelStorageInitialize",
    "WAWebStorageInitializeHooks",
    "WAWebUserPrefsIndexedDBStorage",
    "asyncToGeneratorRuntime",
    "once",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (yield o("WAWebModelStorageInitialize").initializeWithoutGKs(e),
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.init(),
            u());
        })),
        s.apply(this, arguments)
      );
    }
    var u = r("once")(function () {
      o("WAWebABPropsCache")
        .waitForABPropConfigsReady()
        .then(function () {
          o("WAWebStorageInitializeHooks").initializeHooks();
        });
    });
    (Object.keys(o("WAWebModelStorageInitialize")).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        (l[e] = o("WAWebModelStorageInitialize")[e]);
    }),
      (l.initialize = e));
  },
  98,
);
