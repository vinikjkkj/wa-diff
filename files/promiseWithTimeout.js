__d(
  "promiseWithTimeout",
  ["Promise", "asyncToGeneratorRuntime", "clearTimeout", "setTimeout"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t(t, o) {
          var a = this;
          this.$2 = new (e || (e = n("Promise")))(function (e, n) {
            var i = !1;
            ((a.$1 = r("setTimeout")(function () {
              i || ((i = !0), (o.rejectOnTimeout === !0 ? n : e)());
            }, o.timeout)),
              a
                .$3(t)
                .then(function (t) {
                  i || ((i = !0), e(t));
                })
                .catch(function (e) {
                  i || ((i = !0), n(e));
                }));
          });
        }
        var o = t.prototype;
        return (
          (o.$3 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield e;
                return (
                  this.$1 && (r("clearTimeout")(this.$1), (this.$1 = null)),
                  t
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (o.getPromise = function () {
            return this.$2;
          }),
          t
        );
      })();
    function u(e, t) {
      return new s(e, t).getPromise();
    }
    l.default = u;
  },
  98,
);
