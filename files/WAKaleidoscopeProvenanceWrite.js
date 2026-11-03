__d(
  "WAKaleidoscopeProvenanceWrite",
  [
    "WAByteArray",
    "WAGetKaleidoscopeWasm",
    "WAKaleidoscopeLogger",
    "WAKaleidoscopeProvenanceField",
    "WAResultOrError",
    "WASI",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p = "input",
      _ = "output",
      f = "/" + p,
      g = "/" + _,
      h = 3,
      y = 4;
    function C(e) {
      var t,
        n = e.fields,
        r = e.hints,
        a = e.input,
        i = e.stderr,
        l = e.stdout,
        s = ["kaleidoscope", "provenance-write"];
      for (var u of n)
        s.push(
          "--field=" +
            o("WAKaleidoscopeProvenanceField").provenanceFieldToArg(u),
        );
      for (var c of r) s.push("--mimetype-hints=" + c);
      return (
        s.push(p),
        s.push(_),
        {
          args: s,
          fs:
            ((t = {}),
            (t[f] = {
              path: f,
              timestamps: {
                access: new Date(),
                change: new Date(),
                modification: new Date(),
              },
              mode: "binary",
              content: new Uint8Array(a),
            }),
            t),
          stdout: l,
          stderr: i,
          moduleName: "WAKaleidoscopeProvenanceWrite_CLI",
        }
      );
    }
    function b(t) {
      var a = t.getWasmModule;
      return (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.fields,
            i = t.hints,
            l = t.input,
            p = "",
            _,
            f;
          try {
            var b,
              v = o("WASI").createWasi(
                C({
                  fields: n,
                  hints: i != null ? i : [],
                  input: l,
                  stderr: function (n) {
                    ((p += n),
                      o("WAKaleidoscopeLogger")
                        .ksLogger()
                        .DEBUG(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "",
                              "",
                            ])),
                          n,
                        ));
                  },
                  stdout: function (t) {
                    return o("WAKaleidoscopeLogger")
                      .ksLogger()
                      .DEBUG(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            "",
                          ])),
                        t,
                      );
                  },
                }),
              ),
              S = v.getImportObject,
              R = v.start,
              L = yield a(),
              E = yield WebAssembly.instantiate(L, S()),
              k = R(E);
            ((_ = k.exitCode),
              (f = (b = k.fs[g]) == null ? void 0 : b.content));
          } catch (e) {
            return (
              o("WAKaleidoscopeLogger")
                .ksLogger()
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "provenanceWrite threw: ",
                      "",
                    ])),
                  r("getErrorSafe")(e).message,
                ),
              o("WAResultOrError").makeError("internal-error")
            );
          }
          if (_ !== 0) {
            var I = _ === h || _ === y;
            return (
              I
                ? o("WAKaleidoscopeLogger")
                    .ksLogger()
                    .DEBUG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "provenanceWrite did not write, exit code ",
                          ": ",
                          "",
                        ])),
                      _,
                      p,
                    )
                : o("WAKaleidoscopeLogger")
                    .ksLogger()
                    .WARN(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "provenanceWrite failed with exit code ",
                          ": ",
                          "",
                        ])),
                      _,
                      p,
                    ),
              o("WAResultOrError").makeError(
                I ? "invalid-media" : "internal-error",
              )
            );
          }
          return f instanceof Uint8Array
            ? o("WAResultOrError").makeResult(
                o("WAByteArray").uint8ArrayToBuffer(f),
              )
            : (o("WAKaleidoscopeLogger")
                .ksLogger()
                .WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "provenanceWrite produced no output",
                    ])),
                ),
              o("WAResultOrError").makeError("internal-error"));
        });
        function i(e) {
          return t.apply(this, arguments);
        }
        return i;
      })();
    }
    var v = b({
      getWasmModule: o("WAGetKaleidoscopeWasm").getKaleidoscopeWasm,
    });
    ((l.createProvenanceWrite = b), (l.provenanceWrite = v));
  },
  98,
);
