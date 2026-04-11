__d(
  "WAWebMessageReceiptUtils",
  [
    "WAWebLidMigrationUtils",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("compactMap")(e, function (e) {
              return o("WAWebLidMigrationUtils").getAlternateMsgKey(e);
            }),
            n = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .bulkGet(
                t.map(function (e) {
                  return e.toString();
                }),
              ),
            a = new Set(
              n.map(function (e) {
                return e == null ? void 0 : e.id;
              }),
            );
          return r("compactMap")(e, function (e) {
            var t = o("WAWebLidMigrationUtils").getAlternateMsgKey(e);
            return t && a.has(t.toString()) ? t : e;
          });
        })),
        s.apply(this, arguments)
      );
    }
    l.fixStatusReceiptKeys = e;
  },
  98,
);
