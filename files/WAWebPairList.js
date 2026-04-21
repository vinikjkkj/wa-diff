__d(
  "WAWebPairList",
  ["lodash"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return r("lodash").flatten(
        e.map(function (e) {
          return [e[0], e[1]];
        }),
      );
    }
    function s(e) {
      if (e.length % 2 !== 0) {
        var t = new RangeError(
          "Flattened pairs come in 2, invalid list size to unflatten!",
        );
        throw (t.stack, t);
      }
      for (var n = [], r = 0; r < e.length; r++) n.push([e[r], e[++r]]);
      return n;
    }
    ((l.flattenPairList = e), (l.unFlattenPairList = s));
  },
  98,
);
