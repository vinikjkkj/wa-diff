__d(
  "WAWebVoipJsWorkerRespawnGate",
  ["WALogger", "WAWebVoipPthreadHardening", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t() {
          this.$1 = null;
        }
        var r = t.prototype;
        return (
          (r.track = function (n) {
            var t = this;
            if (
              o(
                "WAWebVoipPthreadHardening",
              ).isVoipWorkerLifecycleHardeningEnabled()
            ) {
              var r = n.catch(function (t) {
                  o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [JsWorkerRespawnGate] tracked shutdown rejected: ",
                        "",
                      ])),
                    String(t),
                  );
                }),
                a = this.$1,
                i =
                  a == null
                    ? r
                    : a.then(function () {
                        return r;
                      });
              ((this.$1 = i),
                i.then(function () {
                  t.$1 === i && (t.$1 = null);
                }));
            }
          }),
          (r.hasPending = function () {
            return this.$1 != null;
          }),
          (r.waitForPrevious = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this.$1;
                t != null &&
                  (yield t,
                  !(this.$1 == null || !e()) &&
                    (yield this.waitForPrevious(e)));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })();
    l.default = s;
  },
  98,
);
