__d(
  "WAKaleidoscopeProvenance",
  [
    "WAGetKaleidoscopeWasm",
    "WAKaleidoscopeLogger",
    "WAKaleidoscopeProvenanceField",
    "WASI",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["logProvenanceDetails"],
      s,
      u,
      c,
      d,
      m,
      p,
      _ = "input",
      f = "output",
      g = "allowlists",
      h = "/" + _,
      y = "/" + f,
      C = "/" + g,
      b = null;
    async function v(e, t, n, a, i) {
      n === void 0 && (n = []);
      var l = i === void 0 ? {} : i,
        p = l.logProvenanceDetails,
        _ = p === void 0 ? !0 : p,
        f = a == null || a.trim() === "" ? null : D(a),
        g = x({
          allowlistsContent: f,
          hints: n,
          input: e,
          logProvenanceDetails: _,
        }),
        h;
      t == null || t.addPoint("extraction_start");
      try {
        var C,
          b = await g(),
          v = b.exitCode,
          R = b.fs;
        if (v !== 0 && f != null) {
          o("WAKaleidoscopeLogger")
            .ksLogger()
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "detectAiProvenance: read with allowlists failed, exit code ",
                  "",
                ])),
              v,
            );
          var L = await x({
            allowlistsContent: null,
            hints: n,
            input: e,
            logProvenanceDetails: _,
          })();
          ((v = L.exitCode), (R = L.fs));
        }
        if (v !== 0)
          return (
            o("WAKaleidoscopeLogger")
              .ksLogger()
              .DEBUG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "detectAiProvenance: non-zero exit code ",
                    "",
                  ])),
                v,
              ),
            t == null ||
              t.addPoint("extraction_end", { int: { exit_code: v } }),
            { provenance: null, engineErrorCode: null, systemProvenance: null }
          );
        h = (C = R[y]) == null ? void 0 : C.content;
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
          t == null ||
            t.addPoint("extraction_fail", {
              string: { failure_reason: "wasi_error" },
            }),
          { provenance: null, engineErrorCode: null, systemProvenance: null }
        );
      }
      if (typeof h != "string")
        return (
          o("WAKaleidoscopeLogger")
            .ksLogger()
            .WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "detectAiProvenance: missing/invalid output",
                ])),
            ),
          t == null ||
            t.addPoint("extraction_fail", {
              string: { failure_reason: "parse_error" },
            }),
          { provenance: null, engineErrorCode: null, systemProvenance: null }
        );
      var E;
      try {
        E = JSON.parse(h);
      } catch (e) {
        return (
          _ &&
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
          t == null ||
            t.addPoint("extraction_fail", {
              string: { failure_reason: "parse_error" },
            }),
          { provenance: null, engineErrorCode: null, systemProvenance: null }
        );
      }
      var I = k(E);
      return I != null
        ? (t == null ||
            t.addPoint("extraction_fail", {
              int: { engine_error_code: I },
              string: { failure_reason: "engine_error" },
            }),
          { provenance: null, engineErrorCode: I })
        : (t == null || t.addPoint("extraction_end"),
          { provenance: T(E), engineErrorCode: null, systemProvenance: S(E) });
    }
    function S(e) {
      if (e == null || typeof e != "object") return null;
      var t = e.mapped_fields;
      if (t == null || typeof t != "object") return null;
      var n = t,
        r = n.digital_source_type,
        a = babelHelpers.extends(
          {},
          typeof r == "string" && r !== "" ? { digitalSourceType: r } : null,
          {
            make: E(n.make),
            model: E(n.model),
            aiSystemUsed: E(n.ai_system_used),
            publisher: E(n.publisher),
            history: R(n.history),
          },
        );
      return o("WAKaleidoscopeProvenanceField").hasProvenanceValue(a)
        ? a
        : null;
    }
    function R(e) {
      if (!(!Array.isArray(e) || e.length === 0)) {
        var t = [];
        for (var n of e) {
          if (n == null || typeof n != "object") return;
          var r = n.action,
            o = n.parameters,
            a = L(r);
          if (a == null || typeof o != "string" || o === "") return;
          t.push({ action: a, parameters: o });
        }
        return t;
      }
    }
    function L(e) {
      return e === "created"
        ? "created"
        : e === "opened"
          ? "opened"
          : e === "edited"
            ? "edited"
            : void 0;
    }
    function E(e) {
      if (!(!Array.isArray(e) || e.length === 0)) {
        var t = [];
        for (var n of e) {
          if (typeof n != "string" || n === "") return;
          t.push(n);
        }
        return t;
      }
    }
    function k(e) {
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
    function I(e) {
      if (e == null || typeof e != "object") return null;
      var t = e,
        n = t.created_with_genai === !0,
        r = t.edited_with_genai === !0;
      if (!n && !r) return null;
      var o = {};
      return (n && (o.createdWithGenAi = !0), r && (o.editedWithGenAi = !0), o);
    }
    function T(e) {
      if (e == null || typeof e != "object") return null;
      var t = e,
        n = I(t.iptc),
        r = I(t.c2pa);
      if (n == null && r == null) return null;
      var o = {};
      return (n != null && (o.iptc = n), r != null && (o.c2pa = r), o);
    }
    function D(e) {
      var t = b;
      if (t != null && t.json === e) return t.content;
      var n = new TextEncoder().encode(e);
      return ((b = { json: e, content: n }), n);
    }
    function x(t) {
      var n = t.logProvenanceDetails,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e),
        a = function (t) {
          n &&
            o("WAKaleidoscopeLogger")
              .ksLogger()
              .DEBUG(
                p || (p = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                t,
              );
        },
        i = o("WASI").createWasi(
          $(babelHelpers.extends({}, r, { stderr: a, stdout: a })),
        ),
        l = i.getImportObject,
        s = i.start;
      return async function () {
        var e = await o("WAGetKaleidoscopeWasm").getKaleidoscopeWasm(),
          t = await WebAssembly.instantiate(e, l());
        return s(t);
      };
    }
    function $(e) {
      var t,
        n,
        r = e.allowlistsContent,
        o = e.hints,
        a = e.input,
        i = e.stderr,
        l = e.stdout,
        s = ["kaleidoscope", "provenance", "--json-report=" + f];
      for (var u of o) s.push("--mimetype-hints=" + u);
      return (
        r != null && s.push("--allowlists=" + g),
        s.push(_),
        {
          args: s,
          fs: babelHelpers.extends(
            {},
            r == null
              ? null
              : ((t = {}),
                (t[C] = {
                  path: C,
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
            (n[h] = {
              path: h,
              timestamps: {
                access: new Date(),
                change: new Date(),
                modification: new Date(),
              },
              mode: "binary",
              content: new Uint8Array(a),
            }),
            (n[y] = {
              path: y,
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
    l.detectAiProvenanceFromBytes = v;
  },
  98,
);
