__d(
  "WAWebVoipJsWorkerRespawnGate",
  ["WALogger", "WAWebVoipPthreadHardening"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t() {
          this.$1 = null;
        }
        var n = t.prototype;
        return (
          (n.track = function (n) {
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
          (n.hasPending = function () {
            return this.$1 != null;
          }),
          (n.waitForPrevious = async function (t) {
            var e = this.$1;
            e != null &&
              (await e,
              !(this.$1 == null || !t()) && (await this.waitForPrevious(t)));
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
