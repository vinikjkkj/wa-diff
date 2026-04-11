__d(
  "ContextualConfigParsePredString",
  [
    "ContextualConfigConstants",
    "ContextualConfigParseRegExp",
    "ContextualConfigPredAssertions",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        if (typeof t != "string") {
          var e = new Error(
            o("ContextualConfigConstants").ERROR.INVALID_VALUE_TYPE,
          );
          throw (e.stack, e);
        }
        return t;
      },
      s = function (n) {
        var t = [];
        for (var r of n) t.push(e(r));
        return t;
      };
    function u(e, t, n) {
      var a = s(n),
        i;
      switch (t) {
        case o("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.SAME:
          i = function (n) {
            return typeof n != "string" ? !1 : n === e;
          };
          break;
        case o("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.NULL:
          i = function (t) {
            return t == null;
          };
          break;
        case o("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.NNULL:
          i = function (t) {
            return t != null;
          };
          break;
        case o("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.CATCH_ALL:
          i = function (t) {
            return !0;
          };
          break;
        case o("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.IN:
          (o("ContextualConfigPredAssertions").assertHasValues(a.length),
            (i = function (t) {
              return typeof t != "string" ? !1 : a.indexOf(t) !== -1;
            }));
          break;
        case o("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.NIN:
          (o("ContextualConfigPredAssertions").assertHasValues(a.length),
            (i = function (t) {
              return typeof t != "string" ? !1 : a.indexOf(t) === -1;
            }));
          break;
        case o("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.CONTAINS:
          (o("ContextualConfigPredAssertions").assertNumberOfValues(
            a.length,
            1,
          ),
            (i = function (t) {
              return typeof t != "string" ? !1 : t.indexOf(a[0]) !== -1;
            }));
          break;
        case o("ContextualConfigConstants").CONTEXT_BUCKET_STRATEGY.REGEX:
          o("ContextualConfigPredAssertions").assertNumberOfValues(a.length, 1);
          var l = r("ContextualConfigParseRegExp")(a[0]);
          i = function (t) {
            return typeof t != "string" ? !1 : l.test(t);
          };
          break;
        default: {
          var u = new Error(
            o("ContextualConfigConstants").ERROR.ILLEGAL_STRING_STRATEGY,
          );
          throw (u.stack, u);
        }
      }
      return function (e) {
        return i(e);
      };
    }
    l.default = u;
  },
  98,
);
