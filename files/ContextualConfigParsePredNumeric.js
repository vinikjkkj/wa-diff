__d(
  "ContextualConfigParsePredNumeric",
  [
    "ContextualConfigConstants",
    "ContextualConfigParseFloat",
    "ContextualConfigParseInteger",
    "ContextualConfigPredAssertions",
    "ContextualConfigValidators",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n, a, i) {
      var l = a.map(
          i
            ? r("ContextualConfigParseInteger")
            : e || (e = r("ContextualConfigParseFloat")),
        ),
        s;
      switch (n) {
        case o("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.SAME:
          var u = i
            ? r("ContextualConfigParseInteger")(t)
            : (e || (e = r("ContextualConfigParseFloat")))(t);
          s = function (t) {
            return i && !o("ContextualConfigValidators").isInteger(t)
              ? !1
              : t === u;
          };
          break;
        case o("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.NULL:
          s = function (t) {
            return t == null;
          };
          break;
        case o("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.NNULL:
          s = function (t) {
            return t != null;
          };
          break;
        case o("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.CATCH_ALL:
          s = function (t) {
            return !0;
          };
          break;
        case o("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.COR:
          (o("ContextualConfigPredAssertions").assertNumberOfValues(
            l.length,
            2,
          ),
            o("ContextualConfigPredAssertions").assertValueOrder(l[0], l[1]),
            (s = function (t) {
              return typeof t != "number" ||
                (i && !o("ContextualConfigValidators").isInteger(t))
                ? !1
                : t >= l[0] && t < l[1];
            }));
          break;
        case o("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.LT:
          (o("ContextualConfigPredAssertions").assertNumberOfValues(
            l.length,
            1,
          ),
            (s = function (t) {
              return typeof t != "number" ||
                (i && !o("ContextualConfigValidators").isInteger(t))
                ? !1
                : t < l[0];
            }));
          break;
        case o("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.LTE:
          (o("ContextualConfigPredAssertions").assertNumberOfValues(
            l.length,
            1,
          ),
            (s = function (t) {
              return typeof t != "number" ||
                (i && !o("ContextualConfigValidators").isInteger(t))
                ? !1
                : t <= l[0];
            }));
          break;
        case o("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.EQ:
          (o("ContextualConfigPredAssertions").assertNumberOfValues(
            l.length,
            1,
          ),
            (s = function (t) {
              return typeof t != "number" ||
                (i && !o("ContextualConfigValidators").isInteger(t))
                ? !1
                : t === l[0];
            }));
          break;
        case o("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.NEQ:
          (o("ContextualConfigPredAssertions").assertNumberOfValues(
            l.length,
            1,
          ),
            (s = function (t) {
              return typeof t != "number" ||
                (i && !o("ContextualConfigValidators").isInteger(t))
                ? !1
                : t !== l[0];
            }));
          break;
        case o("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.GT:
          (o("ContextualConfigPredAssertions").assertNumberOfValues(
            l.length,
            1,
          ),
            (s = function (t) {
              return typeof t != "number" ||
                (i && !o("ContextualConfigValidators").isInteger(t))
                ? !1
                : t > l[0];
            }));
          break;
        case o("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.GTE:
          (o("ContextualConfigPredAssertions").assertNumberOfValues(
            l.length,
            1,
          ),
            (s = function (t) {
              return typeof t != "number" ||
                (i && !o("ContextualConfigValidators").isInteger(t))
                ? !1
                : t >= l[0];
            }));
          break;
        default: {
          var c = new Error(
            o("ContextualConfigConstants").ERROR.ILLEGAL_NUMERIC_STRATEGY,
          );
          throw (c.stack, c);
        }
      }
      return function (e) {
        return s(e);
      };
    }
    l.default = s;
  },
  98,
);
