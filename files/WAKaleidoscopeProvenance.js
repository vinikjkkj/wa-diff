__d(
  "WAKaleidoscopeProvenance",
  [
    "WAGetKaleidoscopeWasm",
    "WAKaleidoscopeLogger",
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
      g = "/" + _;
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = o("WASI").createWasi(
              v({
                input: t,
                stderr: function (n) {
                  o("WAKaleidoscopeLogger")
                    .ksLogger()
                    .DEBUG(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                      n,
                    );
                },
                stdout: function (t) {
                  o("WAKaleidoscopeLogger")
                    .ksLogger()
                    .DEBUG(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                      t,
                    );
                },
              }),
            ),
            a = n.getImportObject,
            i = n.start,
            l;
          try {
            var p,
              _ = yield o("WAGetKaleidoscopeWasm").getKaleidoscopeWasm(),
              f = yield WebAssembly.instantiate(_, a()),
              h = i(f),
              y = h.exitCode,
              C = h.fs;
            if (y !== 0)
              return (
                o("WAKaleidoscopeLogger")
                  .ksLogger()
                  .DEBUG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "detectAiProvenance: non-zero exit code ",
                        "",
                      ])),
                    y,
                  ),
                null
              );
            l = (p = C[g]) == null ? void 0 : p.content;
          } catch (e) {
            return (
              o("WAKaleidoscopeLogger")
                .ksLogger()
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "detectAiProvenance failed: ",
                      "",
                    ])),
                  r("getErrorSafe")(e).message,
                ),
              null
            );
          }
          if (typeof l != "string")
            return (
              o("WAKaleidoscopeLogger")
                .ksLogger()
                .WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "detectAiProvenance: missing/invalid output",
                    ])),
                ),
              null
            );
          try {
            return b(JSON.parse(l));
          } catch (e) {
            return (
              o("WAKaleidoscopeLogger")
                .ksLogger()
                .WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "detectAiProvenance: unparseable output: ",
                      "",
                    ])),
                  r("getErrorSafe")(e).message,
                ),
              null
            );
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      if (e == null || typeof e != "object") return null;
      var t = e,
        n = t.created_with_genai === !0,
        r = t.edited_with_genai === !0;
      if (!n && !r) return null;
      var o = {};
      return (n && (o.createdWithGenAi = !0), r && (o.editedWithGenAi = !0), o);
    }
    function b(e) {
      if (e == null || typeof e != "object") return null;
      var t = e,
        n = C(t.iptc),
        r = C(t.c2pa);
      if (n == null && r == null) return null;
      var o = {};
      return (n != null && (o.iptc = n), r != null && (o.c2pa = r), o);
    }
    function v(e) {
      var t,
        n = e.input,
        r = e.stderr,
        o = e.stdout,
        a = ["kaleidoscope", "provenance", "--json-report=" + _, p];
      return {
        args: a,
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
            content: new Uint8Array(n),
          }),
          (t[g] = {
            path: g,
            timestamps: {
              access: new Date(),
              change: new Date(),
              modification: new Date(),
            },
            mode: "string",
            content: "",
          }),
          t),
        stdout: o,
        stderr: r,
        moduleName: "WAKaleidoscopeProvenance_CLI",
      };
    }
    l.detectAiProvenanceFromBytes = h;
  },
  98,
);
