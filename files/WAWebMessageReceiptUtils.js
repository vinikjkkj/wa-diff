__d(
  "WAWebMessageReceiptUtils",
  ["WAWebLidMigrationUtils", "WAWebSchemaMessage", "compactMap"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = r("compactMap")(e, function (e) {
          return o("WAWebLidMigrationUtils").getAlternateMsgKey(e);
        }),
        n = await o("WAWebSchemaMessage")
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
    }
    l.fixStatusReceiptKeys = e;
  },
  98,
);
