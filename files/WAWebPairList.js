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
      if (e.length % 2 !== 0)
        throw new RangeError(
          "Flattened pairs come in 2, invalid list size to unflatten!",
        );
      for (var t = [], n = 0; n < e.length; n++) t.push([e[n], e[++n]]);
      return t;
    }
    ((l.flattenPairList = e), (l.unFlattenPairList = s));
  },
  98,
);
