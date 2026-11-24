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
    var e,
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
    async function v(t, n, a, i) {
      a === void 0 && (a = []);
      var l = i == null || i.trim() === "" ? null : D(i),
        m = x({ allowlistsContent: l, hints: a, input: t }),
        p;
      n == null || n.addPoint("extraction_start");
      try {
        var _,
          f = await m(),
          g = f.exitCode,
          h = f.fs;
        if (g !== 0 && l != null) {
          o("WAKaleidoscopeLogger")
            .ksLogger()
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "detectAiProvenance: read with allowlists failed, exit code ",
                  "",
                ])),
              g,
            );
          var C = await x({ allowlistsContent: null, hints: a, input: t })();
          ((g = C.exitCode), (h = C.fs));
        }
        if (g !== 0)
          return (
            o("WAKaleidoscopeLogger")
              .ksLogger()
              .DEBUG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "detectAiProvenance: non-zero exit code ",
                    "",
                  ])),
                g,
              ),
            n == null ||
              n.addPoint("extraction_end", { int: { exit_code: g } }),
            { provenance: null, engineErrorCode: null, systemProvenance: null }
          );
        p = (_ = h[y]) == null ? void 0 : _.content;
      } catch (e) {
        return (
          o("WAKaleidoscopeLogger")
            .ksLogger()
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "detectAiProvenance failed: ",
                  "",
                ])),
              r("getErrorSafe")(e).message,
            ),
          n == null ||
            n.addPoint("extraction_fail", {
              string: { failure_reason: "wasi_error" },
            }),
          { provenance: null, engineErrorCode: null, systemProvenance: null }
        );
      }
      if (typeof p != "string")
        return (
          o("WAKaleidoscopeLogger")
            .ksLogger()
            .WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "detectAiProvenance: missing/invalid output",
                ])),
            ),
          n == null ||
            n.addPoint("extraction_fail", {
              string: { failure_reason: "parse_error" },
            }),
          { provenance: null, engineErrorCode: null, systemProvenance: null }
        );
      var b;
      try {
        b = JSON.parse(p);
      } catch (e) {
        return (
          o("WAKaleidoscopeLogger")
            .ksLogger()
            .WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "detectAiProvenance: unparseable output: ",
                  "",
                ])),
              r("getErrorSafe")(e).message,
            ),
          n == null ||
            n.addPoint("extraction_fail", {
              string: { failure_reason: "parse_error" },
            }),
          { provenance: null, engineErrorCode: null, systemProvenance: null }
        );
      }
      var v = k(b);
      return v != null
        ? (n == null ||
            n.addPoint("extraction_fail", {
              int: { engine_error_code: v },
              string: { failure_reason: "engine_error" },
            }),
          { provenance: null, engineErrorCode: v })
        : (n == null || n.addPoint("extraction_end"),
          { provenance: T(b), engineErrorCode: null, systemProvenance: S(b) });
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
    function x(e) {
      var t = o("WASI").createWasi(
          $(
            babelHelpers.extends({}, e, {
              stderr: function (t) {
                o("WAKaleidoscopeLogger")
                  .ksLogger()
                  .DEBUG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                    t,
                  );
              },
              stdout: function (t) {
                o("WAKaleidoscopeLogger")
                  .ksLogger()
                  .DEBUG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                    t,
                  );
              },
            }),
          ),
        ),
        n = t.getImportObject,
        r = t.start;
      return async function () {
        var e = await o("WAGetKaleidoscopeWasm").getKaleidoscopeWasm(),
          t = await WebAssembly.instantiate(e, n());
        return r(t);
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
