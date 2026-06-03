__d(
  "WAWebDBBulkPersistContact",
  ["WABatcher", "WAWebLidAwareContactsDB", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e = o("WABatcher").batch(
      { delayMs: 3e3 },
      (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return (yield c(e), e.map(function (e) {}));
        });
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
    );
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
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = u(e);
          yield r("WAWebLidAwareContactsDB").bulkCreateOrMerge(
            t,
            "DBBulkPersistContact.bulkPersistContactChanges",
          );
        })),
        d.apply(this, arguments)
      );
    }
    l.persistContactUpdateBatched = s;
  },
  98,
);
