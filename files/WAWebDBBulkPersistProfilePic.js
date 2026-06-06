__d(
  "WAWebDBBulkPersistProfilePic",
  ["WABatcher", "WAWebSchemaProfilePicThumb", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e = o("WABatcher").batch(
      { delayMs: 3e3 },
      (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return (yield u(e), []);
        });
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
    );
    function s(t) {
      return e(t);
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = Array.from(
            e
              .reduce(function (e, t) {
                return (e.set(t.id, t), e);
              }, new Map())
              .values(),
          );
          yield o("WAWebSchemaProfilePicThumb")
            .getProfilePicThumbTable()
            .bulkCreateOrMerge(t);
        })),
        c.apply(this, arguments)
      );
    }
    ((l.persistProfilePicBatched = s), (l.bulkPersistProfilePicChanges = u));
  },
  98,
);
