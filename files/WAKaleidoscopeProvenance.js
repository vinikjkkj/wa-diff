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
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = o("WASI").createWasi(
              S({
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
            i = a.getImportObject,
            l = a.start,
            p;
          n == null || n.addPoint("extraction_start");
          try {
            var _,
              f = yield o("WAGetKaleidoscopeWasm").getKaleidoscopeWasm(),
              h = yield WebAssembly.instantiate(f, i()),
              y = l(h),
              b = y.exitCode,
              R = y.fs;
            if (b !== 0)
              return (
                o("WAKaleidoscopeLogger")
                  .ksLogger()
                  .DEBUG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "detectAiProvenance: non-zero exit code ",
                        "",
                      ])),
                    b,
                  ),
                n == null ||
                  n.addPoint("extraction_end", { int: { exit_code: b } }),
                { provenance: null, engineErrorCode: null }
              );
            p = (_ = R[g]) == null ? void 0 : _.content;
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
              n == null ||
                n.addPoint("extraction_fail", {
                  string: { failure_reason: "wasi_error" },
                }),
              { provenance: null, engineErrorCode: null }
            );
          }
          if (typeof p != "string")
            return (
              o("WAKaleidoscopeLogger")
                .ksLogger()
                .WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "detectAiProvenance: missing/invalid output",
                    ])),
                ),
              n == null ||
                n.addPoint("extraction_fail", {
                  string: { failure_reason: "parse_error" },
                }),
              { provenance: null, engineErrorCode: null }
            );
          var L;
          try {
            L = JSON.parse(p);
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
              n == null ||
                n.addPoint("extraction_fail", {
                  string: { failure_reason: "parse_error" },
                }),
              { provenance: null, engineErrorCode: null }
            );
          }
          var E = C(L);
          return E != null
            ? (n == null ||
                n.addPoint("extraction_fail", {
                  int: { engine_error_code: E },
                  string: { failure_reason: "engine_error" },
                }),
              { provenance: null, engineErrorCode: E })
            : (n == null || n.addPoint("extraction_end"),
              { provenance: v(L), engineErrorCode: null });
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      if (e == null || typeof e != "object") return null;
      var t = e,
        n = t.error_code;
      return typeof n == "number" &&
        Number.isInteger(n) &&
        n >= 0 &&
        n <= 4294967295
        ? n
        : null;
    }
    function b(e) {
      if (e == null || typeof e != "object") return null;
      var t = e,
        n = t.created_with_genai === !0,
        r = t.edited_with_genai === !0;
      if (!n && !r) return null;
      var o = {};
      return (n && (o.createdWithGenAi = !0), r && (o.editedWithGenAi = !0), o);
    }
    function v(e) {
      if (e == null || typeof e != "object") return null;
      var t = e,
        n = b(t.iptc),
        r = b(t.c2pa);
      if (n == null && r == null) return null;
      var o = {};
      return (n != null && (o.iptc = n), r != null && (o.c2pa = r), o);
    }
    function S(e) {
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
