__d(
  "WAWebPairList",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      return e
        .map(function (e) {
          return [e[0], e[1]];
        })
        .flat();
    }
    function l(e) {
      if (e.length % 2 !== 0) {
        var t = new RangeError(
          "Flattened pairs come in 2, invalid list size to unflatten!",
        );
        throw (t.stack, t);
      }
      for (var n = [], r = 0; r < e.length; r++) n.push([e[r], e[++r]]);
      return n;
    }
    ((i.flattenPairList = e), (i.unFlattenPairList = l));
  },
  66,
);
