__d(
  "MAWCacheServiceMiddleware",
  ["FBLogger", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = e.table(t);
      return n;
    }
    function s() {
      return {
        create: function (n) {
          try {
            return babelHelpers.extends({}, n, {
              table: function (r) {
                return e(n, r);
              },
            });
          } catch (e) {
            var t = r("getErrorSafe")(e);
            return (
              r("FBLogger")("MAWCacheService")
                .catching(t)
                .mustfix("Error applying MAW Cache Service Middleware"),
              n
            );
          }
        },
        name: "MAWCacheServiceMiddleware",
        stack: "dbcore",
      };
    }
    l.default = s;
  },
  98,
);
