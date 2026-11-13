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
      p,
      _ = "input",
      f = "output",
      g = "/" + _,
      h = "/" + f;
    function y(e, t, n) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          n === void 0 && (n = []);
          var a = o("WASI").createWasi(
              E({
                hints: n,
                input: e,
                stderr: function (t) {
                  o("WAKaleidoscopeLogger")
                    .ksLogger()
                    .DEBUG(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                      t,
                    );
                },
                stdout: function (t) {
                  o("WAKaleidoscopeLogger")
                    .ksLogger()
                    .DEBUG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                      t,
                    );
                },
              }),
            ),
            i = a.getImportObject,
            l = a.start,
            _;
          t == null || t.addPoint("extraction_start");
          try {
            var f,
              g = yield o("WAGetKaleidoscopeWasm").getKaleidoscopeWasm(),
              y = yield WebAssembly.instantiate(g, i()),
              C = l(y),
              v = C.exitCode,
              R = C.fs;
            if (v !== 0)
              return (
                o("WAKaleidoscopeLogger")
                  .ksLogger()
                  .DEBUG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "detectAiProvenance: non-zero exit code ",
                        "",
                      ])),
                    v,
                  ),
                t == null ||
                  t.addPoint("extraction_end", { int: { exit_code: v } }),
                {
                  provenance: null,
                  engineErrorCode: null,
                  systemProvenance: null,
                }
              );
            _ = (f = R[h]) == null ? void 0 : f.content;
          } catch (e) {
            return (
              o("WAKaleidoscopeLogger")
                .ksLogger()
                .WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "detectAiProvenance failed: ",
                      "",
                    ])),
                  r("getErrorSafe")(e).message,
                ),
              t == null ||
                t.addPoint("extraction_fail", {
                  string: { failure_reason: "wasi_error" },
                }),
              {
                provenance: null,
                engineErrorCode: null,
                systemProvenance: null,
              }
            );
          }
          if (typeof _ != "string")
            return (
              o("WAKaleidoscopeLogger")
                .ksLogger()
                .WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "detectAiProvenance: missing/invalid output",
                    ])),
                ),
              t == null ||
                t.addPoint("extraction_fail", {
                  string: { failure_reason: "parse_error" },
                }),
              {
                provenance: null,
                engineErrorCode: null,
                systemProvenance: null,
              }
            );
          var k;
          try {
            k = JSON.parse(_);
          } catch (e) {
            return (
              o("WAKaleidoscopeLogger")
                .ksLogger()
                .WARN(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "detectAiProvenance: unparseable output: ",
                      "",
                    ])),
                  r("getErrorSafe")(e).message,
                ),
              t == null ||
                t.addPoint("extraction_fail", {
                  string: { failure_reason: "parse_error" },
                }),
              {
                provenance: null,
                engineErrorCode: null,
                systemProvenance: null,
              }
            );
          }
          var I = S(k);
          return I != null
            ? (t == null ||
                t.addPoint("extraction_fail", {
                  int: { engine_error_code: I },
                  string: { failure_reason: "engine_error" },
                }),
              { provenance: null, engineErrorCode: I })
            : (t == null || t.addPoint("extraction_end"),
              {
                provenance: L(k),
                engineErrorCode: null,
                systemProvenance: b(k),
              });
        })),
        C.apply(this, arguments)
      );
    }
    function b(t) {
      if (t == null || typeof t != "object") return null;
      var n = t.mapped_fields;
      if (n == null || typeof n != "object") return null;
      var r = n,
        a = r.digital_source_type;
      return typeof a != "string" || a === ""
        ? (o("WAKaleidoscopeLogger")
            .ksLogger()
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "provenance mapped_fields has no digital source type",
                ])),
            ),
          null)
        : {
            digitalSourceType: a,
            makeId: v(r.make_id),
            aiSystemUsedId: v(r.ai_system_used_id),
            publisherId: v(r.publisher_id),
          };
    }
    function v(e) {
      return typeof e == "number" &&
        Number.isInteger(e) &&
        e >= 0 &&
        e <= 4294967295
        ? e
        : void 0;
    }
    function S(e) {
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
    function R(e) {
      if (e == null || typeof e != "object") return null;
      var t = e,
        n = t.created_with_genai === !0,
        r = t.edited_with_genai === !0;
      if (!n && !r) return null;
      var o = {};
      return (n && (o.createdWithGenAi = !0), r && (o.editedWithGenAi = !0), o);
    }
    function L(e) {
      if (e == null || typeof e != "object") return null;
      var t = e,
        n = R(t.iptc),
        r = R(t.c2pa);
      if (n == null && r == null) return null;
      var o = {};
      return (n != null && (o.iptc = n), r != null && (o.c2pa = r), o);
    }
    function E(e) {
      var t,
        n = e.hints,
        r = e.input,
        o = e.stderr,
        a = e.stdout,
        i = ["kaleidoscope", "provenance", "--json-report=" + f];
      for (var l of n) i.push("--mimetype-hints=" + l);
      return (
        i.push(_),
        {
          args: i,
          fs:
            ((t = {}),
            (t[g] = {
              path: g,
              timestamps: {
                access: new Date(),
                change: new Date(),
                modification: new Date(),
              },
              mode: "binary",
              content: new Uint8Array(r),
            }),
            (t[h] = {
              path: h,
              timestamps: {
                access: new Date(),
                change: new Date(),
                modification: new Date(),
              },
              mode: "string",
              content: "",
            }),
            t),
          stdout: a,
          stderr: o,
          moduleName: "WAKaleidoscopeProvenance_CLI",
        }
      );
    }
    l.detectAiProvenanceFromBytes = y;
  },
  98,
);
