__d(
  "WAWebDBChangeOrphanStateReactions",
  ["WAWebModelStorageUtils", "WAWebSchemaReactions", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          ["reactions"],
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = t[0],
                  r = e.map(function (e) {
                    return [e, 1];
                  }),
                  a = yield o("WAWebSchemaReactions")
                    .getReactionsTable()
                    .anyOf(["parentMsgKey", "orphan"], r);
                return (
                  a.forEach(function (e) {
                    ((e.orphan = 0), (e.orphanReason = void 0));
                  }),
                  yield n.bulkCreateOrReplace(a),
                  a
                );
              },
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
        );
    }
    l.changeOrphanStateReactions = e;
  },
  98,
);
