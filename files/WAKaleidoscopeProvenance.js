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
      _,
      f = "input",
      g = "output",
      h = "allowlists",
      y = "/" + f,
      C = "/" + g,
      b = "/" + h,
      v = null;
    function S(e, t, n, r) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            n === void 0 && (n = []);
            var i = a == null || a.trim() === "" ? null : $(a),
              l = P({ allowlistsContent: i, hints: n, input: e }),
              s;
            t == null || t.addPoint("extraction_start");
            try {
              var u,
                f = yield l(),
                g = f.exitCode,
                h = f.fs;
              if (g !== 0 && i != null) {
                o("WAKaleidoscopeLogger")
                  .ksLogger()
                  .WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "detectAiProvenance: read with allowlists failed, exit code ",
                        "",
                      ])),
                    g,
                  );
                var y = yield P({
                  allowlistsContent: null,
                  hints: n,
                  input: e,
                })();
                ((g = y.exitCode), (h = y.fs));
              }
              if (g !== 0)
                return (
                  o("WAKaleidoscopeLogger")
                    .ksLogger()
                    .DEBUG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "detectAiProvenance: non-zero exit code ",
                          "",
                        ])),
                      g,
                    ),
                  t == null ||
                    t.addPoint("extraction_end", { int: { exit_code: g } }),
                  {
                    provenance: null,
                    engineErrorCode: null,
                    systemProvenance: null,
                  }
                );
              s = (u = h[C]) == null ? void 0 : u.content;
            } catch (e) {
              return (
                o("WAKaleidoscopeLogger")
                  .ksLogger()
                  .WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
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
            if (typeof s != "string")
              return (
                o("WAKaleidoscopeLogger")
                  .ksLogger()
                  .WARN(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
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
            var b;
            try {
              b = JSON.parse(s);
            } catch (e) {
              return (
                o("WAKaleidoscopeLogger")
                  .ksLogger()
                  .WARN(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
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
            var v = T(b);
            return v != null
              ? (t == null ||
                  t.addPoint("extraction_fail", {
                    int: { engine_error_code: v },
                    string: { failure_reason: "engine_error" },
                  }),
                { provenance: null, engineErrorCode: v })
              : (t == null || t.addPoint("extraction_end"),
                {
                  provenance: x(b),
                  engineErrorCode: null,
                  systemProvenance: L(b),
                });
          },
        )),
        R.apply(this, arguments)
      );
    }
    function L(t) {
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
            make: I(r.make),
            aiSystemUsed: I(r.ai_system_used),
            publisher: I(r.publisher),
            history: E(r.history),
          };
    }
    function E(e) {
      if (!(!Array.isArray(e) || e.length === 0)) {
        var t = [];
        for (var n of e) {
          if (n == null || typeof n != "object") return;
          var r = n.action,
            o = n.parameters,
            a = k(r);
          if (a == null || typeof o != "string" || o === "") return;
          t.push({ action: a, parameters: o });
        }
        return t;
      }
    }
    function k(e) {
      return e === "created"
        ? "created"
        : e === "opened"
          ? "opened"
          : e === "edited"
            ? "edited"
            : void 0;
    }
    function I(e) {
      if (!(!Array.isArray(e) || e.length === 0)) {
        var t = [];
        for (var n of e) {
          if (typeof n != "string" || n === "") return;
          t.push(n);
        }
        return t;
      }
    }
    function T(e) {
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
    function D(e) {
      if (e == null || typeof e != "object") return null;
      var t = e,
        n = t.created_with_genai === !0,
        r = t.edited_with_genai === !0;
      if (!n && !r) return null;
      var o = {};
      return (n && (o.createdWithGenAi = !0), r && (o.editedWithGenAi = !0), o);
    }
    function x(e) {
      if (e == null || typeof e != "object") return null;
      var t = e,
        n = D(t.iptc),
        r = D(t.c2pa);
      if (n == null && r == null) return null;
      var o = {};
      return (n != null && (o.iptc = n), r != null && (o.c2pa = r), o);
    }
    function $(e) {
      var t = v;
      if (t != null && t.json === e) return t.content;
      var n = new TextEncoder().encode(e);
      return ((v = { json: e, content: n }), n);
    }
    function P(e) {
      var t = o("WASI").createWasi(
          N(
            babelHelpers.extends({}, e, {
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
        ),
        r = t.getImportObject,
        a = t.start;
      return n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        var e = yield o("WAGetKaleidoscopeWasm").getKaleidoscopeWasm(),
          t = yield WebAssembly.instantiate(e, r());
        return a(t);
      });
    }
    function N(e) {
      var t,
        n,
        r = e.allowlistsContent,
        o = e.hints,
        a = e.input,
        i = e.stderr,
        l = e.stdout,
        s = ["kaleidoscope", "provenance", "--json-report=" + g];
      for (var u of o) s.push("--mimetype-hints=" + u);
      return (
        r != null && s.push("--allowlists=" + h),
        s.push(f),
        {
          args: s,
          fs: babelHelpers.extends(
            {},
            r == null
              ? null
              : ((t = {}),
                (t[b] = {
                  path: b,
                  timestamps: {
                    access: new Date(),
                    change: new Date(),
                    modification: new Date(),
                  },
                  mode: "binary",
                  content: r,
                }),
                t),
            ((n = {}),
            (n[y] = {
              path: y,
              timestamps: {
                access: new Date(),
                change: new Date(),
                modification: new Date(),
              },
              mode: "binary",
              content: new Uint8Array(a),
            }),
            (n[C] = {
              path: C,
              timestamps: {
                access: new Date(),
                change: new Date(),
                modification: new Date(),
              },
              mode: "string",
              content: "",
            }),
            n),
          ),
          stdout: l,
          stderr: i,
          moduleName: "WAKaleidoscopeProvenance_CLI",
        }
      );
    }
    l.detectAiProvenanceFromBytes = S;
  },
  98,
);
