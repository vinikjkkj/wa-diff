__d(
  "DenseContextualConfig",
  [
    "ContextualConfigAssert",
    "ContextualConfigConstants",
    "ContextualConfigParseContexts",
    "ContextualConfigParseDenseDefaults",
    "ContextualConfigParseDenseResultParams",
    "ContextualConfigParseMonitors",
    "ContextualConfigParseOutputParams",
    "ContextualConfigParseVector",
    "ContextualConfigResolveContexts",
    "ContextualConfigResolvedContextsUtils",
    "ContextualConfigValidators",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function (n) {
        return (e || (e = r("ContextualConfigAssert")))(
          o("ContextualConfigValidators").isDefined(n),
          o("ContextualConfigConstants").ERROR.BAD_CONFIG,
        );
      },
      u = function (t) {
        for (var e = [], n = 1, r = t.length - 1; r >= 0; r -= 1)
          (e.push(n), (n *= t[r].buckets.length));
        return e.reverse();
      },
      c = function (t, n, o, a) {
        try {
          var e = n.slice(o, o + t.length);
          return [null, r("ContextualConfigParseDenseResultParams")(t, e)];
        } catch (e) {
          return [r("getErrorSafe")(e), a];
        }
      },
      d = function (n, o, a) {
        try {
          var t = a.reduce(function (t, o, a) {
            return (
              (e || (e = r("ContextualConfigAssert")))(
                a < n.length,
                "Auxillery index out of range.",
              ),
              t + n[a] * o
            );
          }, 0);
          return [null, t * o];
        } catch (e) {
          return [r("getErrorSafe")(e), -1];
        }
      },
      m = (function () {
        function e(e, t) {
          (s(e), (this.globalContextProviders = babelHelpers.extends({}, t)));
          var n = r("ContextualConfigParseOutputParams")(e.outputs),
            o = r("ContextualConfigParseContexts")(e.contexts);
          ((this.aux = u(o)),
            (this.contexts = o),
            (this.defaults = r("ContextualConfigParseDenseDefaults")(
              n,
              e.vectorDefaults,
            )),
            (this.monitors =
              e.monitors != null
                ? r("ContextualConfigParseMonitors")(e.monitors)
                : []),
            (this.outputs = n),
            (this.vector = r("ContextualConfigParseVector")(n, o, e.vector)));
        }
        var t = e.prototype;
        return (
          (t.resolve = function (t) {
            try {
              return this.unsafeResolve(t);
            } catch (e) {
              return [
                r("getErrorSafe")(e),
                this.defaults,
                o("ContextualConfigConstants").EMPTY_RESOLVED_CONTEXTS,
                o("ContextualConfigConstants").EMPTY_RESOLVED_MONITORS,
              ];
            }
          }),
          (t.unsafeResolve = function (t) {
            var e = this.aux,
              n = this.contexts,
              a = this.defaults,
              i = this.globalContextProviders,
              l = this.monitors,
              s = this.outputs,
              u = this.vector,
              m = r("ContextualConfigResolveContexts")(n, i, t),
              p = m[0],
              _ = m[1];
            if (p != null)
              return [
                p,
                a,
                _,
                o("ContextualConfigConstants").EMPTY_RESOLVED_MONITORS,
              ];
            var f = d(
                e,
                s.length,
                o("ContextualConfigResolvedContextsUtils").getBucketIndices(_),
              ),
              g = f[0],
              h = f[1];
            if (g != null)
              return [
                g,
                a,
                _,
                o("ContextualConfigConstants").EMPTY_RESOLVED_MONITORS,
              ];
            var y = c(s, u, h, a),
              C = y[0],
              b = y[1];
            if (C != null)
              return [
                C,
                b,
                _,
                o("ContextualConfigConstants").EMPTY_RESOLVED_MONITORS,
              ];
            var v = r("ContextualConfigResolveContexts")(l, i, t),
              S = v[0],
              R = v[1];
            return S != null
              ? [
                  S,
                  b,
                  _,
                  o("ContextualConfigConstants").EMPTY_RESOLVED_MONITORS,
                ]
              : [null, b, _, R];
          }),
          e
        );
      })();
    l.default = m;
  },
  98,
);
