__d(
  "ContextualConfigParseConfig",
  [
    "ContextualConfigAssert",
    "ContextualConfigConstants",
    "ContextualConfigValidators",
    "DenseContextualConfig",
    "MultiOutputResolvedContextualConfig",
    "TableContextualConfig",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [1],
      u = function (n) {
        return (e || (e = r("ContextualConfigAssert")))(
          o("ContextualConfigValidators").isDefined(n) &&
            o("ContextualConfigValidators").isDefined(n.version),
          o("ContextualConfigConstants").ERROR.BAD_CONFIG,
        );
      },
      c = function (n) {
        return (e || (e = r("ContextualConfigAssert")))(
          s.indexOf(n) !== -1,
          o("ContextualConfigConstants").ERROR.UNSUPPORTED_CONFIG_VERSION,
        );
      };
    function d(e, t) {
      switch ((u(e), c(e.version), e.cctype)) {
        case o("ContextualConfigConstants").CONFIG_TYPE.DENSE:
          return new (r("DenseContextualConfig"))(e, t);
        case o("ContextualConfigConstants").CONFIG_TYPE.MULTI_OUTPUT_RESOLVED:
          return new (r("MultiOutputResolvedContextualConfig"))(e, t);
        case o("ContextualConfigConstants").CONFIG_TYPE.TABLE:
          return new (r("TableContextualConfig"))(e, t);
        default:
          throw new Error(
            o("ContextualConfigConstants").ERROR.UNKNOWN_CONFIG_TYPE,
          );
      }
    }
    l.default = d;
  },
  98,
);
