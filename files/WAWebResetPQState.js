__d(
  "WAWebResetPQState",
  [
    "WALogger",
    "WAPQRollbackProtocol",
    "WAWebKyberPreKeyStore",
    "WAWebSignalStorage",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield o("WAPQRollbackProtocol").deletePQPreKeysProtocol();
          if (!t.success) {
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[resetPQState] failed to delete server PQ prekeys, local state kept",
                ])),
            );
            return;
          }
          var n = o("WAWebSignalStorage").getSessionTable(),
            r = (yield n.all())
              .map(function (e) {
                var t = e.address;
                return t;
              })
              .filter(function (e) {
                return e.split(".")[0].endsWith("_pq");
              });
          (yield n.bulkRemove(r),
            yield o(
              "WAWebKyberPreKeyStore",
            ).clearKyberPreKeysAndMigrationState());
        })),
        u.apply(this, arguments)
      );
    }
    ((s.doc =
      "Delete server and local PQ state and PQ sessions. In-flight incoming PQ messages may fail. Reload after completion."),
      (l.resetPQState = s));
  },
  98,
);
