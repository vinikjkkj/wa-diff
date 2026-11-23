__d(
  "AIRegeneratedIcebreakerLoadingReducer",
  [],
  function (t, n, r, o, a, i) {
    var e = function (t, n) {
      var e = t.loadingIcebreakerIndices;
      if (
        ((e = e.filter(function (e) {
          return e !== n.removeIndex;
        })),
        n.addIndex != null)
      ) {
        var r;
        (r = e) == null || r.push(n.addIndex);
      }
      return { loadingIcebreakerIndices: e };
    };
    i.AIRegeneratedIcebreakerLoadingReducer = e;
  },
  66,
);
