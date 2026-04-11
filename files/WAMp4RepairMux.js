__d(
  "WAMp4RepairMux",
  [
    "WAByteArray",
    "WAMediaUtilsWasmUrl",
    "WAResultOrError",
    "WASI",
    "WAWasmModuleCache",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "input",
      s = "output",
      u = "/" + e,
      c = "/" + s;
    function d(t) {
      var n,
        r = t.input,
        o = t.stderr,
        a = t.stdout;
      return {
        args: [
          "wamediautil",
          "mp4repairmux",
          "--keep-first-av-track-only",
          e,
          s,
        ],
        fs:
          ((n = {}),
          (n[u] = {
            path: u,
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
        moduleName: "WAMp4RepairMux_CLI",
      };
    }
    function m(e) {
      var t = e.getWasmModule,
        r = e.logError,
        a = e.logMessage;
      return (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var n,
            i = e.input,
            l = o("WASI").createWasi(d({ input: i, stderr: r, stdout: a })),
            s = l.getImportObject,
            u = l.start,
            m = yield t(),
            p = yield WebAssembly.instantiate(m, s()),
            _ = u(p),
            f = _.exitCode,
            g = _.fs,
            h = (n = g[c]) == null ? void 0 : n.content;
          return f !== 0
            ? (r("mp4repairmux failed with exit code " + f),
              o("WAResultOrError").makeError("invalid-media"))
            : h instanceof Uint8Array
              ? o("WAResultOrError").makeResult(
                  o("WAByteArray").uint8ArrayToBuffer(h),
                )
              : (r("mp4repairmux failed invalid result type"),
                o("WAResultOrError").makeError("internal-error"));
        });
        function i(t) {
          return e.apply(this, arguments);
        }
        return i;
      })();
    }
    var p = function () {
      return o("WAWasmModuleCache").loadWasmModule(
        o("WAMediaUtilsWasmUrl").WAMediaUtilsWasmUrl,
      );
    };
    ((l.createMp4RepairMux = m), (l.getMp4RepairMuxWasm = p));
  },
  98,
);
