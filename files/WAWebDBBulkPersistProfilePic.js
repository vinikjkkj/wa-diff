__d(
  "WAWebDBBulkPersistProfilePic",
  ["WABatcher", "WAWebSchemaProfilePicThumb"],
  function (t, n, r, o, a, i, l) {
    var e = o("WABatcher").batch({ delayMs: 3e3 }, async function (e) {
      return (await u(e), []);
    });
    function s(t) {
      return e(t);
    }
    async function u(e) {
      var t = Array.from(
        e
          .reduce(function (e, t) {
            return (e.set(t.id, t), e);
          }, new Map())
          .values(),
      );
      await o("WAWebSchemaProfilePicThumb")
        .getProfilePicThumbTable()
        .bulkCreateOrMerge(t);
    }
    ((l.persistProfilePicBatched = s), (l.bulkPersistProfilePicChanges = u));
  },
  98,
);
