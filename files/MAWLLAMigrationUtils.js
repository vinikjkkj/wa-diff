__d(
  "MAWLLAMigrationUtils",
  ["Random", "gkx", "justknobx", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("justknobx")._("652"),
      s = Math.max(e, 10),
      u = s * 10,
      c = new Map([["FTS", u]]);
    function d(e) {
      if (r("gkx")("9340")) return 1;
      var t = c.get(e);
      return t != null ? t : s;
    }
    function m(e, t) {
      t === void 0 && (t = {});
      var n = d(e);
      return e === "debug" || e === "test"
        ? []
        : o("Random").coinflip(n)
          ? [
              r("qpl")._(1056839327, "560"),
              babelHelpers.extends(
                { double: { sampleRate: 1 / n }, string: { transactor: e } },
                t,
              ),
            ]
          : [];
    }
    l.getTransactorQPLParam = m;
  },
  98,
);
