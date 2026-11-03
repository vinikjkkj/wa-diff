__d(
  "WAWebResetPQState",
  [
    "WALogger",
    "WAPQRollbackProtocol",
    "WAWebKyberPreKeyStore",
    "WAWebSignalStorage",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s() {
      var t = await o("WAPQRollbackProtocol").deletePQPreKeysProtocol();
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
        r = (await n.all())
          .map(function (e) {
            var t = e.address;
            return t;
          })
          .filter(function (e) {
            return e.split(".")[0].endsWith("_pq");
          });
      (await n.bulkRemove(r),
        await o("WAWebKyberPreKeyStore").clearKyberPreKeysAndMigrationState());
    }
    ((s.doc =
      "Delete server and local PQ state and PQ sessions. In-flight incoming PQ messages may fail. Reload after completion."),
      (l.resetPQState = s));
  },
  98,
);
