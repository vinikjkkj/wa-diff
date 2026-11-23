__d(
  "WAKaleidoscopeProvenance",
  ["WAGetKaleidoscopeWasm", "WAKaleidoscopeLogger", "WASI", "getErrorSafe"],
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
    async function S(t, n, a, i) {
      a === void 0 && (a = []);
      var l = i == null || i.trim() === "" ? null : x(i),
        m = $({ allowlistsContent: l, hints: a, input: t }),
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
          var y = await $({ allowlistsContent: null, hints: a, input: t })();
          ((g = y.exitCode), (h = y.fs));
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
        p = (_ = h[C]) == null ? void 0 : _.content;
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
      var v = I(b);
      return v != null
        ? (n == null ||
            n.addPoint("extraction_fail", {
              int: { engine_error_code: v },
              string: { failure_reason: "engine_error" },
            }),
          { provenance: null, engineErrorCode: v })
        : (n == null || n.addPoint("extraction_end"),
          { provenance: D(b), engineErrorCode: null, systemProvenance: R(b) });
    }
    function R(e) {
      if (e == null || typeof e != "object") return null;
      var t = e.mapped_fields;
      if (t == null || typeof t != "object") return null;
      var n = t,
        r = n.digital_source_type;
      return typeof r != "string" || r === ""
        ? (o("WAKaleidoscopeLogger")
            .ksLogger()
            .WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "provenance mapped_fields has no digital source type",
                ])),
            ),
          null)
        : {
            digitalSourceType: r,
            make: k(n.make),
            aiSystemUsed: k(n.ai_system_used),
            publisher: k(n.publisher),
            history: L(n.history),
          };
    }
    function L(e) {
      if (!(!Array.isArray(e) || e.length === 0)) {
        var t = [];
        for (var n of e) {
          if (n == null || typeof n != "object") return;
          var r = n.action,
            o = n.parameters,
            a = E(r);
          if (a == null || typeof o != "string" || o === "") return;
          t.push({ action: a, parameters: o });
        }
        return t;
      }
    }
    function E(e) {
      return e === "created"
        ? "created"
        : e === "opened"
          ? "opened"
          : e === "edited"
            ? "edited"
            : void 0;
    }
    function k(e) {
      if (!(!Array.isArray(e) || e.length === 0)) {
        var t = [];
        for (var n of e) {
          if (typeof n != "string" || n === "") return;
          t.push(n);
        }
        return t;
      }
    }
    function I(e) {
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
    function T(e) {
      if (e == null || typeof e != "object") return null;
      var t = e,
        n = t.created_with_genai === !0,
        r = t.edited_with_genai === !0;
      if (!n && !r) return null;
      var o = {};
      return (n && (o.createdWithGenAi = !0), r && (o.editedWithGenAi = !0), o);
    }
    function D(e) {
      if (e == null || typeof e != "object") return null;
      var t = e,
        n = T(t.iptc),
        r = T(t.c2pa);
      if (n == null && r == null) return null;
      var o = {};
      return (n != null && (o.iptc = n), r != null && (o.c2pa = r), o);
    }
    function x(e) {
      var t = v;
      if (t != null && t.json === e) return t.content;
      var n = new TextEncoder().encode(e);
      return ((v = { json: e, content: n }), n);
    }
    function $(e) {
      var t = o("WASI").createWasi(
          P(
            babelHelpers.extends({}, e, {
              stderr: function (t) {
                o("WAKaleidoscopeLogger")
                  .ksLogger()
                  .DEBUG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                    t,
                  );
              },
              stdout: function (t) {
                o("WAKaleidoscopeLogger")
                  .ksLogger()
                  .DEBUG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
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
    function P(e) {
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
