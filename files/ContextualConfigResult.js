__d(
  "ContextualConfigResult",
  ["ContextualConfigConstants", "ContextualConfigWarn", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        ((this.$1 = e.reduce(function (e, t) {
          var n = t.name,
            r = t.value;
          return ((e[n] = r), e);
        }, {})),
          (this.$2 = e));
      }
      var t = e.prototype;
      return (
        (t.get = function (t, n) {
          try {
            var e = this.$1[t];
            return typeof e != typeof n
              ? (r("ContextualConfigWarn")(
                  o("ContextualConfigConstants").ERROR
                    .REQUESTED_PARAM_NOT_FOUND,
                ),
                n)
              : e;
          } catch (e) {
            return (r("ContextualConfigWarn")(r("getErrorSafe")(e).message), n);
          }
        }),
        (t.getParams = function () {
          return this.$2;
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
