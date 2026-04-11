__d(
  "ContextualConfigParseVector",
  [
    "ContextualConfigAssert",
    "ContextualConfigConstants",
    "ContextualConfigParseResultParamValue",
    "ContextualConfigValidators",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = function (n) {
        return (e || (e = r("ContextualConfigAssert")))(
          o("ContextualConfigValidators").isArray(n),
          o("ContextualConfigConstants").ERROR.MISSING_VECTOR,
        );
      },
      c = function (n, a) {
        return (e || (e = r("ContextualConfigAssert")))(
          n === a,
          o("ContextualConfigConstants").ERROR.RESULTS_VECTOR_SIZE_MISMATCH,
        );
      },
      d = function (t, n) {
        c(t.length, n.length);
        for (var e = 0; e < t.length; e += 1) {
          var o = t[e].type,
            a = n[e];
          (s || (s = r("ContextualConfigParseResultParamValue")))(o, a);
        }
      },
      m = function (t) {
        return t.reduce(function (e, t) {
          var n = t.buckets;
          return e * n.length;
        }, 1);
      };
    function p(e, t, n) {
      u(n);
      var r = m(t),
        o = e.length;
      c(r * o, n.length);
      for (var a = 0; a < r; a += 1) {
        var i = a * o;
        d(e, n.slice(i, i + o));
      }
      return n;
    }
    l.default = p;
  },
  98,
);
