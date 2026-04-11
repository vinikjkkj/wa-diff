__d(
  "WAWebPCheck",
  [
    "WAResultOrError",
    "WASI",
    "WAWasmModuleCache",
    "asyncToGeneratorRuntime",
    "bx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "input",
      s = "/" + e;
    function u(t) {
      var n,
        r = t.input,
        o = t.stderr,
        a = t.stdout;
      return {
        args: ["webpcheck", e],
        fs:
          ((n = {}),
          (n[s] = {
            path: s,
            timestamps: {
              access: new Date(),
              change: new Date(),
              modification: new Date(),
            },
            mode: "binary",
            content: new Uint8Array(r),
          }),
          n),
        stdout: a,
        stderr: o,
        moduleName: "WAWebPCheck_CLI",
      };
    }
    function c(e) {
      var t = e.getWasmModule,
        r = e.logError,
        a = e.logMessage;
      return (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var n = e.input,
            i = o("WASI").createWasi(u({ input: n, stderr: r, stdout: a })),
            l = i.getImportObject,
            s = i.start,
            c = yield t(),
            d = yield WebAssembly.instantiate(c, l()),
            m = s(d),
            p = m.exitCode;
          return p !== 0
            ? (r("WebPCheck failed with exit code " + p),
              o("WAResultOrError").makeError("invalid-media"))
            : o("WAResultOrError").makeResult();
        });
        function i(t) {
          return e.apply(this, arguments);
        }
        return i;
      })();
    }
    var d = r("bx").getURL(r("bx")("6946")),
      m = function () {
        return o("WAWasmModuleCache").loadWasmModule(d);
      };
    ((l.createWebPCheck = c), (l.getWebpCheckWasm = m));
  },
  98,
);
