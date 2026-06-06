__d(
  "WAWebMLPostProcessingManager",
  [
    "WALogger",
    "WAResultOrError",
    "WAWebMLDecompressionStep",
    "WAWebMLHashVerification",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t() {
          this.steps = [
            new (o("WAWebMLDecompressionStep").DecompressionStep)(),
            new (o("WAWebMLHashVerification").HashVerificationStep)(),
          ];
        }
        var r = t.prototype;
        return (
          (r.process = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, n) {
                var r = t;
                for (var a of this.steps) {
                  var i = yield a.process(r, n);
                  if (!i.success)
                    return (
                      o("WALogger").WARN(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "WAWebMLPostProcessingManager: Step ",
                            " failed: ",
                            "",
                          ])),
                        a.name,
                        i.error,
                      ),
                      o("WAResultOrError").makeError(i.error)
                    );
                  r = i.value;
                }
                return o("WAResultOrError").makeResult(r);
              },
            );
            function r(e, n) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          t
        );
      })(),
      u = null;
    function c() {
      return (u == null && (u = new s()), u);
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return c().process(e, t);
        })),
        m.apply(this, arguments)
      );
    }
    ((l.PostProcessingManager = s), (l.processDownloadedModel = d));
  },
  98,
);
