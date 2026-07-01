__d(
  "WAGetLiboqsWasm",
  [
    "WALiboqsWasm",
    "WALogger",
    "WAResolvable",
    "WAWasmModuleCache",
    "bx",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = r("bx").getURL(r("bx")("47437"));
    function c() {
      var t = new (o("WAResolvable").Resolvable)(),
        n = r("WALiboqsWasm")({
          instantiateWasm: function (a, i) {
            return (
              o("WAWasmModuleCache")
                .loadWasmModule(u)
                .then(function (e) {
                  return WebAssembly.instantiate(e, a);
                })
                .then(function (e) {
                  (i(e), t.resolve());
                })
                .catch(function (n) {
                  var a = r("getErrorSafe")(n);
                  (o("WALogger").ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[LiboqsWasm] instantiateWasm failed with error: ",
                        "",
                      ])),
                    a.message,
                  ),
                    t.reject(a));
                }),
              {}
            );
          },
        }).catch(function (e) {
          var n = r("getErrorSafe")(e);
          throw (
            o("WALogger").ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[LiboqsWasm] init failed with error: ",
                  "",
                ])),
              n.message,
            ),
            t.reject(n),
            n
          );
        });
      return t.promise.then(function () {
        return n;
      });
    }
    ((l.WALiboqsWasmUrl = u), (l.loadLiboqsWasm = c));
  },
  98,
);
