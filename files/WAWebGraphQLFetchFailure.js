__d(
  "WAWebGraphQLFetchFailure",
  ["asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i) {
    var e = new WeakMap();
    function l(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          try {
            return yield n();
          } catch (n) {
            throw (
              n instanceof Error && !(n instanceof SyntaxError) && e.set(n, t),
              n
            );
          }
        })),
        s.apply(this, arguments)
      );
    }
    function u(t) {
      var n;
      return t instanceof Error && (n = e.get(t)) != null ? n : null;
    }
    ((i.trackGraphQLFetchFailure = l), (i.getGraphQLFetchFailureStage = u));
  },
  66,
);
