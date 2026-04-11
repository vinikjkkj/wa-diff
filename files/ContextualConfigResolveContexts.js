__d(
  "ContextualConfigResolveContexts",
  ["ContextualConfigConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
      for (var e = 0; e < t.length; e += 1) {
        var r = t[e];
        try {
          if (r.pred(n)) return [r.name, e];
        } catch (e) {
          return null;
        }
      }
      return null;
    };
    function s(t, n, r) {
      var a = null,
        i = t.map(function (t) {
          var i = t.name,
            l = { name: i };
          if (a != null) return l;
          var s;
          if (
            (r[i] != null
              ? (s = r[i])
              : n[i] != null
                ? (s = n[i]())
                : (s = null),
            (l.value = s),
            t.buckets != null)
          ) {
            var u = e(t.buckets, s);
            if (u == null)
              return (
                (a = new Error(
                  o("ContextualConfigConstants").ERROR.MISSING_BUCKET_MATCH,
                )),
                l
              );
            var c = u[0],
              d = u[1];
            ((l.bucketName = c), (l.bucketIndex = d));
          }
          return l;
        });
      return [a, i];
    }
    l.default = s;
  },
  98,
);
