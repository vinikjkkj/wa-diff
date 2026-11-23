__d(
  "WAWebDBBulkPersistContact",
  ["WABatcher", "WAWebLidAwareContactsDB"],
  function (t, n, r, o, a, i, l) {
    var e = o("WABatcher").batch({ delayMs: 3e3 }, async function (e) {
      return (await c(e), e.map(function (e) {}));
    });
    function s(t, n) {
      return e(babelHelpers.extends({}, n, { id: t.toJid() }));
    }
    function u(e) {
      return Array.from(
        e
          .reduce(function (e, t) {
            var n;
            return (
              e.set(
                t.id,
                babelHelpers.extends({}, (n = e.get(t.id)) != null ? n : {}, t),
              ),
              e
            );
          }, new Map())
          .values(),
      );
    }
    async function c(e) {
      var t = u(e);
      await r("WAWebLidAwareContactsDB").bulkCreateOrMerge(
        t,
        "DBBulkPersistContact.bulkPersistContactChanges",
      );
    }
    l.persistContactUpdateBatched = s;
  },
  98,
);
