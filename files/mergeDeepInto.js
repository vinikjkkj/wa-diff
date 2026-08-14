__d(
  "mergeDeepInto",
  ["invariant", "mergeHelpers"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e = n("mergeHelpers")).ArrayStrategies,
      u = e.checkArrayStrategy,
      c = e.checkMergeArrayArgs,
      d = e.checkMergeLevel,
      m = e.checkMergeObjectArgs,
      p = e.isTerminal,
      _ = e.normalizeMergeArg,
      f = function (t, n, r, o) {
        (m(t, n), d(o));
        for (var e = n ? Object.keys(n) : [], a = 0; a < e.length; a++) {
          var i = e[a];
          h(t, n, i, r, o);
        }
      },
      g = function (t, n, r, o) {
        if ((c(t, n), d(o), r === s.Concat)) t.push.apply(t, n);
        else
          for (var e = Math.max(t.length, n.length), a = 0; a < e; a++)
            h(t, n, a, r, o);
      },
      h = function (t, n, r, o, a) {
        var e = n[r],
          i = Object.prototype.hasOwnProperty.call(n, r),
          u = i && p(e),
          c = i && Array.isArray(e),
          d = i && !c && !c,
          m = t[r],
          _ = Object.prototype.hasOwnProperty.call(t, r),
          h = _ && p(m),
          y = _ && Array.isArray(m),
          C = _ && !y && !y;
        h
          ? u
            ? (t[r] = e)
            : c
              ? ((t[r] = []), g(t[r], e, o, a + 1))
              : d
                ? ((t[r] = {}), f(t[r], e, o, a + 1))
                : i || (t[r] = m)
          : y
            ? u
              ? (t[r] = e)
              : c
                ? ((o && s[o]) || l(0, 5117),
                  o === s.Clobber && (m.length = 0),
                  g(m, e, o, a + 1))
                : d && ((t[r] = {}), f(t[r], e, o, a + 1))
            : C
              ? u
                ? (t[r] = e)
                : c
                  ? ((t[r] = []), g(t[r], e, o, a + 1))
                  : d && f(m, e, o, a + 1)
              : _ ||
                (u
                  ? (t[r] = e)
                  : c
                    ? ((t[r] = []), g(t[r], e, o, a + 1))
                    : d && ((t[r] = {}), f(t[r], e, o, a + 1)));
      };
    function y(e, t, n) {
      var r = _(t);
      (u(n), f(e, r, n, 0));
    }
    i.default = y;
  },
  66,
);
