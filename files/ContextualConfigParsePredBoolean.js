__d(
  "ContextualConfigParsePredBoolean",
  ["ContextualConfigConstants", "ContextualConfigParseBoolean"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      switch (t) {
        case o("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.SAME:
          var a = r("ContextualConfigParseBoolean")(e);
          n = function (t) {
            return t === a;
          };
          break;
        case o("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.NULL:
          n = function (t) {
            return t == null;
          };
          break;
        case o("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.NNULL:
          n = function (t) {
            return t != null;
          };
          break;
        case o("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.CATCH_ALL:
          n = function (t) {
            return !0;
          };
          break;
        default: {
          var i = new Error(
            o("ContextualConfigConstants").ERROR.ILLEGAL_BOOLEAN_STRATEGY,
          );
          throw (i.stack, i);
        }
      }
      return function (e) {
        return n(e);
      };
    }
    l.default = e;
  },
  98,
);
