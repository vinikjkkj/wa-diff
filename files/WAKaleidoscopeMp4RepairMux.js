__d(
  "WAKaleidoscopeMp4RepairMux",
  [
    "WAByteArray",
    "WAGetKaleidoscopeWasm",
    "WAKaleidoscopeLogger",
    "WAResultOrError",
    "WASI",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = "input",
      m = "output",
      p = "/" + d,
      _ = "/" + m;
    function f(e) {
      var t,
        n = e.input,
        r = e.stderr,
        o = e.stdout;
      return {
        args: [
          "kaleidoscope",
          "mediautils",
          "mp4repairmux",
          "--keep-first-av-track-only",
          d,
          m,
        ],
        fs:
          ((t = {}),
          (t[p] = {
            path: p,
            timestamps: {
              access: new Date(),
              change: new Date(),
              modification: new Date(),
            },
            mode: "binary",
            content: new Uint8Array(n),
          }),
          t),
        stdout: o,
        stderr: r,
        moduleName: "WAKaleidoscopeMp4RepairMux_CLI",
      };
    }
    function g(t) {
      var r = t.getWasmModule;
      return (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            a = t.input,
            i = o("WASI").createWasi(
              f({
                input: a,
                stderr: function (n) {
                  return o("WAKaleidoscopeLogger")
                    .ksLogger()
                    .MUSTFIX(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                      n,
                    );
                },
                stdout: function (t) {
                  return o("WAKaleidoscopeLogger")
                    .ksLogger()
                    .DEBUG(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                      t,
                    );
                },
              }),
            ),
            l = i.getImportObject,
            d = i.start,
            m = yield r(),
            p = yield WebAssembly.instantiate(m, l()),
            g = d(p),
            h = g.exitCode,
            y = g.fs,
            C = (n = y[_]) == null ? void 0 : n.content;
          return h !== 0
            ? (o("WAKaleidoscopeLogger")
                .ksLogger()
                .MUSTFIX(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "Mp4repairmux failed with exit code ",
                      "",
                    ])),
                  h,
                ),
              o("WAResultOrError").makeError("invalid-media"))
            : C instanceof Uint8Array
              ? o("WAResultOrError").makeResult(
                  o("WAByteArray").uint8ArrayToBuffer(C),
                )
              : (o("WAKaleidoscopeLogger")
                  .ksLogger()
                  .MUSTFIX(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "Mp4repairmux failed invalid result type",
                      ])),
                  ),
                o("WAResultOrError").makeError("internal-error"));
        });
        function a(e) {
          return t.apply(this, arguments);
        }
        return a;
      })();
    }
    var h = g({
      getWasmModule: o("WAGetKaleidoscopeWasm").getKaleidoscopeWasm,
    });
    l.mp4RepairMux = h;
  },
  98,
);
