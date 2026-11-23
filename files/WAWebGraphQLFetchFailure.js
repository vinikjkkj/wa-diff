__d(
  "WAWebGraphQLFetchFailure",
  [],
  function (t, n, r, o, a, i) {
    var e = new WeakMap();
    async function l(t, n) {
      try {
        return await n();
      } catch (n) {
        throw (
          n instanceof Error && !(n instanceof SyntaxError) && e.set(n, t),
          n
        );
      }
    }
    function s(t) {
      var n;
      return t instanceof Error && (n = e.get(t)) != null ? n : null;
    }
    ((i.trackGraphQLFetchFailure = l), (i.getGraphQLFetchFailureStage = s));
  },
  66,
);
