__d(
  "TableContextualConfig",
  [
    "ContextualConfigAssert",
    "ContextualConfigConstants",
    "ContextualConfigMergePartialResultParams",
    "ContextualConfigParseContexts",
    "ContextualConfigParseDefaults",
    "ContextualConfigParseMonitors",
    "ContextualConfigParseOutputParams",
    "ContextualConfigParseTable",
    "ContextualConfigResolveContexts",
    "ContextualConfigResolvedContextsUtils",
    "ContextualConfigValidators",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [],
      u = function (n) {
        return (e || (e = r("ContextualConfigAssert")))(
          o("ContextualConfigValidators").isDefined(n),
          o("ContextualConfigConstants").ERROR.BAD_CONFIG,
        );
      },
      c = (function () {
        function e(e, t) {
          (u(e), (this.globalContextProviders = babelHelpers.extends({}, t)));
          var n = r("ContextualConfigParseOutputParams")(e.outputs);
          ((this.contexts = r("ContextualConfigParseContexts")(e.contexts)),
            (this.defaults = r("ContextualConfigParseDefaults")(n, e.defaults)),
            (this.monitors =
              e.monitors != null
                ? r("ContextualConfigParseMonitors")(e.monitors)
                : []),
            (this.table = r("ContextualConfigParseTable")(n, e.table)));
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
            var e = this.contexts,
              n = this.defaults,
              a = this.globalContextProviders,
              i = this.monitors,
              l = this.table,
              u = r("ContextualConfigResolveContexts")(e, a, t),
              c = u[0],
              d = u[1];
            if (c != null) return [c, n, d, []];
            var m = o("ContextualConfigResolvedContextsUtils")
                .getBucketNames(d)
                .join(o("ContextualConfigConstants").BUCKET_DELIMITER),
              p = l[m] || s,
              _ = r("ContextualConfigMergePartialResultParams")(n, p),
              f = r("ContextualConfigResolveContexts")(i, a, t),
              g = f[0],
              h = f[1];
            return g != null ? [g, _, d, []] : [null, _, d, h];
          }),
          e
        );
      })();
    l.default = c;
  },
  98,
);
