__d(
  "WAMp4RepairMux",
  ["WAByteArray", "WAResultOrError", "WASI"],
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
        n = e.logError,
        r = e.logMessage;
      return async function (a) {
        var e,
          i = a.input,
          l = o("WASI").createWasi(d({ input: i, stderr: n, stdout: r })),
          s = l.getImportObject,
          u = l.start,
          m = await t(),
          p = await WebAssembly.instantiate(m, s()),
          _ = u(p),
          f = _.exitCode,
          g = _.fs,
          h = (e = g[c]) == null ? void 0 : e.content;
        return f !== 0
          ? (n("mp4repairmux failed with exit code " + f),
            o("WAResultOrError").makeError("invalid-media"))
          : h instanceof Uint8Array
            ? o("WAResultOrError").makeResult(
                o("WAByteArray").uint8ArrayToBuffer(h),
              )
            : (n("mp4repairmux failed invalid result type"),
              o("WAResultOrError").makeError("internal-error"));
      };
    }
    l.createMp4RepairMux = m;
  },
  98,
);
