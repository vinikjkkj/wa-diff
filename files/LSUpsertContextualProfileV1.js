__d(
  "LSUpsertContextualProfileV1",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        n = [],
        r = [];
      return t.sequence([
        function (r) {
          return (
            t.i64.eq(e[5], t.i64.cast([0, 0]))
              ? (n[0] = void 0)
              : (n[0] = e[5]),
            t.db
              .table(216)
              .put({
                ownerId: e[0],
                associatedEntityId: e[1],
                profilePictureUrl: e[2],
                profilePictureFallbackUrl: e[4],
                profilePictureUrlExpirationTimestampMs: n[0],
                profileName: e[3],
              })
          );
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ = "LSContactUpsertContextualProfileV1StoredProcedure"),
      (e.__tables__ = ["contextual_profile_v1"]),
      (a.exports = e));
  },
  null,
);
