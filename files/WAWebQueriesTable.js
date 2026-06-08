__d(
  "WAWebQueriesTable",
  ["WAWebIdentityFunction", "sumBy"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = r("sumBy")(e, o("WAWebIdentityFunction").identityFunction),
        a = e.length > 0 ? n / e.length : 0,
        i = r("sumBy")(t, o("WAWebIdentityFunction").identityFunction),
        l = t.length > 0 ? i / t.length : 0;
      return { avgQueryTime: a, avgResultSize: l };
    }
    l.calculateQueryStats = e;
  },
  98,
);
