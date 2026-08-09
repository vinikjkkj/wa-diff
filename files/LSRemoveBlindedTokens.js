__d(
  "LSRemoveBlindedTokens",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        n = [],
        r = [];
      return t.sequence([
        function (n) {
          return t.forEach(
            t.filter(t.db.table(308).fetch(), function (t) {
              return t.configId === e[0];
            }),
            function (e) {
              return e.delete();
            },
          );
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ =
      "LSAnonymousCredentialsRemoveBlindedTokensStoredProcedure"),
      (e.__tables__ = ["secure_acs_blinded_tokens"]),
      (a.exports = e));
  },
  null,
);
