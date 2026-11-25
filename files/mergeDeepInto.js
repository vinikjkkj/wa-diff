__d(
  "mergeDeepInto",
  ["invariant", "mergeHelpers"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = function (t, n, o, a) {
        (r("mergeHelpers").checkMergeObjectArgs(t, n),
          r("mergeHelpers").checkMergeLevel(a));
        for (var e = n ? Object.keys(n) : [], i = 0; i < e.length; i++) {
          var l = e[i];
          c(t, n, l, o, a);
        }
      },
      u = function (t, n, o, a) {
        if (
          (r("mergeHelpers").checkMergeArrayArgs(t, n),
          r("mergeHelpers").checkMergeLevel(a),
          o === r("mergeHelpers").ArrayStrategies.Concat)
        )
          t.push.apply(t, n);
        else
          for (var e = Math.max(t.length, n.length), i = 0; i < e; i++)
            c(t, n, i, o, a);
      },
      c = function (n, o, a, i, l) {
        var t = o[a],
          c = Object.prototype.hasOwnProperty.call(o, a),
          d = c && r("mergeHelpers").isTerminal(t),
          m = c && Array.isArray(t),
          p = c && !m && !m,
          _ = n[a],
          f = Object.prototype.hasOwnProperty.call(n, a),
          g = f && r("mergeHelpers").isTerminal(_),
          h = f && Array.isArray(_),
          y = f && !h && !h;
        g
          ? d
            ? (n[a] = t)
            : m
              ? ((n[a] = []), u(n[a], t, i, l + 1))
              : p
                ? ((n[a] = {}), e(n[a], t, i, l + 1))
                : c || (n[a] = _)
          : h
            ? d
              ? (n[a] = t)
              : m
                ? ((i && r("mergeHelpers").ArrayStrategies[i]) || s(0, 5117),
                  i === r("mergeHelpers").ArrayStrategies.Clobber &&
                    (_.length = 0),
                  u(_, t, i, l + 1))
                : p && ((n[a] = {}), e(n[a], t, i, l + 1))
            : y
              ? d
                ? (n[a] = t)
                : m
                  ? ((n[a] = []), u(n[a], t, i, l + 1))
                  : p && e(_, t, i, l + 1)
              : f ||
                (d
                  ? (n[a] = t)
                  : m
                    ? ((n[a] = []), u(n[a], t, i, l + 1))
                    : p && ((n[a] = {}), e(n[a], t, i, l + 1)));
      };
    function d(t, n, o) {
      var a = r("mergeHelpers").normalizeMergeArg(n);
      (r("mergeHelpers").checkArrayStrategy(o), e(t, a, o, 0));
    }
    l.default = d;
  },
  98,
);
