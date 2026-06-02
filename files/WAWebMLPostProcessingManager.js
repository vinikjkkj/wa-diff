__d(
  "WAWebMLPostProcessingManager",
  [
    "WALogger",
    "WAResultOrError",
    "WAWebMLDecompressionStep",
    "WAWebMLHashVerification",
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
        var n = t.prototype;
        return (
          (n.process = async function (n, r) {
            var t = n;
            for (var a of this.steps) {
              var i = await a.process(t, r);
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
              t = i.value;
            }
            return o("WAResultOrError").makeResult(t);
          }),
          t
        );
      })(),
      u = null;
    function c() {
      return (u == null && (u = new s()), u);
    }
    async function d(e, t) {
      return c().process(e, t);
    }
    ((l.PostProcessingManager = s), (l.processDownloadedModel = d));
  },
  98,
);
