__d(
  "MultiOutputResolvedContextualConfig",
  [
    "ContextualConfigAssert",
    "ContextualConfigConstants",
    "ContextualConfigParseMonitors",
    "ContextualConfigParseOutputParams",
    "ContextualConfigParseResultParams",
    "ContextualConfigResolveContexts",
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
      u = (function () {
        function e(e, t) {
          (s(e), (this.globalContextProviders = babelHelpers.extends({}, t)));
          var n = r("ContextualConfigParseOutputParams")(e.outputs);
          ((this.monitors =
            e.monitors != null
              ? r("ContextualConfigParseMonitors")(e.monitors)
              : []),
            (this.values = r("ContextualConfigParseResultParams")(
              n,
              e.values,
            )));
        }
        var t = e.prototype;
        return (
          (t.resolve = function (t) {
            try {
              return this.unsafeResolve(t);
            } catch (e) {
              return [
                r("getErrorSafe")(e),
                this.values,
                o("ContextualConfigConstants").EMPTY_RESOLVED_CONTEXTS,
                o("ContextualConfigConstants").EMPTY_RESOLVED_MONITORS,
              ];
            }
          }),
          (t.unsafeResolve = function (t) {
            var e = this.globalContextProviders,
              n = this.monitors,
              a = this.values,
              i = r("ContextualConfigResolveContexts")(n, e, t),
              l = i[0],
              s = i[1];
            return l != null
              ? [
                  l,
                  a,
                  o("ContextualConfigConstants").EMPTY_RESOLVED_CONTEXTS,
                  o("ContextualConfigConstants").EMPTY_RESOLVED_MONITORS,
                ]
              : [
                  null,
                  a,
                  o("ContextualConfigConstants").EMPTY_RESOLVED_CONTEXTS,
                  s,
                ];
          }),
          e
        );
      })();
    l.default = u;
  },
  98,
);
