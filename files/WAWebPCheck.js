__d(
  "WAWebPCheck",
  ["WAResultOrError", "WASI", "WAWasmModuleCache", "bx"],
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
        n = e.logError,
        r = e.logMessage;
      return async function (a) {
        var e = a.input,
          i = o("WASI").createWasi(u({ input: e, stderr: n, stdout: r })),
          l = i.getImportObject,
          s = i.start,
          c = await t(),
          d = await WebAssembly.instantiate(c, l()),
          m = s(d),
          p = m.exitCode;
        return p !== 0
          ? (n("WebPCheck failed with exit code " + p),
            o("WAResultOrError").makeError("invalid-media"))
          : o("WAResultOrError").makeResult();
      };
    }
    var d = r("bx").getURL(r("bx")("6946")),
      m = function () {
        return o("WAWasmModuleCache").loadWasmModule(d);
      };
    ((l.createWebPCheck = c), (l.getWebpCheckWasm = m));
  },
  98,
);
