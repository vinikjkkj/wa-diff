__d(
  "ContextualConfigResolveContexts",
  ["ContextualConfigConstants", "err"],
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
    function s(t, n, a) {
      var i = null,
        l = t.map(function (t) {
          var l = t.name,
            s = { name: l };
          if (i != null) return s;
          var u;
          if (
            (a[l] != null
              ? (u = a[l])
              : n[l] != null
                ? (u = n[l]())
                : (u = null),
            (s.value = u),
            t.buckets != null)
          ) {
            var c = e(t.buckets, u);
            if (c == null)
              return (
                (i = r("err")(
                  o("ContextualConfigConstants").ERROR.MISSING_BUCKET_MATCH,
                )),
                s
              );
            var d = c[0],
              m = c[1];
            ((s.bucketName = d), (s.bucketIndex = m));
          }
          return s;
        });
      return [i, l];
    }
    l.default = s;
  },
  98,
);
