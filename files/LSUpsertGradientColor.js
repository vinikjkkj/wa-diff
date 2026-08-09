__d(
  "LSUpsertGradientColor",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      var e = arguments,
        t = e[e.length - 1],
        n = [],
        r = [];
      return t.sequence([
        function (n) {
          return t.db
            .table(117)
            .put({
              themeFbid: e[0],
              gradientIndex: e[1],
              color: e[2],
              type_: e[3],
            });
        },
        function (e) {
          return t.resolve(r);
        },
      ]);
    }
    ((e.__sproc_name__ = "LSThreadThemeUpsertGradientColorStoredProcedure"),
      (e.__tables__ = ["gradient_colors"]),
      (a.exports = e));
  },
  null,
);
