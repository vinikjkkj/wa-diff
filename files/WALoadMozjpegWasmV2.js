__d(
  "WALoadMozjpegWasmV2",
  ["WALogger", "WAMozjpegWasmV2", "WAResolvable", "WAWasmModuleCache", "bx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = r("bx").getURL(r("bx")("31390"));
    function c() {
      var t = new (o("WAResolvable").Resolvable)(),
        n = r("WAMozjpegWasmV2")({
          instantiateWasm: function (r, a) {
            return (
              o("WAWasmModuleCache")
                .loadWasmModule(u)
                .then(function (e) {
                  return WebAssembly.instantiate(e, r);
                })
                .then(function (e) {
                  (a(e), t.resolve());
                })
                .catch(function (n) {
                  (o("WALogger").ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[MozjpegWasmV2] instantiateWasm failed with error: ",
                        "",
                      ])),
                    n.toString(),
                  ),
                    t.reject(n));
                }),
              {}
            );
          },
        }).catch(function (e) {
          throw (
            o("WALogger").ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[MozjpegWasmV2]initWasm failed with error: ",
                  "",
                ])),
              e.toString(),
            ),
            t.reject(e),
            e
          );
        });
      return t.promise.then(function () {
        return n;
      });
    }
    ((l.WAMozjpegWasmUrlV2 = u), (l.loadMozjpegWasm = c));
  },
  98,
);
