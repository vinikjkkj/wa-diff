__d(
  "WAWebStatusStorage",
  ["WAWebStatusStorageInitialize", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebStatusStorageInitialize").initialize();
        })),
        s.apply(this, arguments)
      );
    }
    (Object.keys(o("WAWebStatusStorageInitialize")).forEach(function (e) {
      e === "default" ||
        e === "__esModule" ||
        (l[e] = o("WAWebStatusStorageInitialize")[e]);
    }),
      (l.initialize = e));
  },
  98,
);
