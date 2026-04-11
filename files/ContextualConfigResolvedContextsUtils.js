__d(
  "ContextualConfigResolvedContextsUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = function (t) {
        var e = [];
        for (var n of t) {
          var r = n.bucketIndex;
          if (r == null) break;
          e.push(r);
        }
        return e;
      },
      l = function (t) {
        var e = [];
        for (var n of t) {
          var r = n.bucketName;
          if (r === void 0) break;
          e.push(r);
        }
        return e;
      },
      s = function (t) {
        return t.name;
      },
      u = function (t) {
        return t.map(s);
      },
      c = function (t) {
        var e = [];
        for (var n of t) {
          var r = n.value;
          if (r === void 0) break;
          e.push(r);
        }
        return e;
      };
    ((i.getBucketIndices = e),
      (i.getBucketNames = l),
      (i.getContextNames = u),
      (i.getContextValues = c));
  },
  66,
);
