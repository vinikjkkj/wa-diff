__d(
  "WAKaleidoscopeProvenanceWrite",
  [
    "WAByteArray",
    "WAGetKaleidoscopeWasm",
    "WAKaleidoscopeLogger",
    "WAKaleidoscopeProvenanceField",
    "WAResultOrError",
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
      _,
      f = "input",
      g = "output",
      h = "/" + f,
      y = "/" + g,
      C = 3,
      b = 4,
      v = 2,
      S = { publisher: ["probe"] },
      R = C,
      L = new WeakMap();
    function E(e) {
      var t = L.get(e);
      if (t != null) return t;
      var n = k(e).then(
        function (t) {
          return t === R
            ? { support: "supported" }
            : t === v
              ? { support: "unsupported" }
              : (L.delete(e),
                { support: "unknown", failure: "exited with " + t });
        },
        function (t) {
          return (
            L.delete(e),
            {
              support: "unknown",
              failure: "threw: " + r("getErrorSafe")(t).message,
            }
          );
        },
      );
      return (L.set(e, n), n);
    }
    async function k(e) {
      var t = await I(
        e,
        D({
          fields: S,
          hints: [],
          input: new ArrayBuffer(0),
          stderr: function () {},
          stdout: function () {},
        }),
      );
      return t.exitCode;
    }
    async function I(e, t) {
      var n = o("WASI").createWasi(t),
        r = n.getImportObject,
        a = n.start,
        i = await WebAssembly.instantiate(e, T(r()));
      return a(i);
    }
    function T(e) {
      var t = {};
      for (var n of Object.entries(e.wasi_snapshot_preview1)) {
        var r = n[0],
          o = n[1];
        typeof o == "function" && (t[r] = o);
      }
      return { wasi_snapshot_preview1: t };
    }
    function D(e) {
      var t,
        n = e.fields,
        r = e.hints,
        a = e.input,
        i = e.stderr,
        l = e.stdout,
        s = ["kaleidoscope", "provenance-write"];
      for (var u of o("WAKaleidoscopeProvenanceField").provenanceFieldArgs(n))
        s.push("--field=" + u);
      for (var c of r) s.push("--mimetype-hints=" + c);
      return (
        s.push(f),
        s.push(g),
        {
          args: s,
          fs:
            ((t = {}),
            (t[h] = {
              path: h,
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
    function x(t, n, r) {
      n
        ? o("WAKaleidoscopeLogger")
            .ksLogger()
            .DEBUG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "provenanceWrite did not write, exit code ",
                  ": ",
                  "",
                ])),
              t,
              r,
            )
        : o("WAKaleidoscopeLogger")
            .ksLogger()
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "provenanceWrite failed with exit code ",
                  ": ",
                  "",
                ])),
              t,
              r,
            );
    }
    function $(e) {
      var t = e.getWasmModule;
      return async function (n) {
        var e = n.fields,
          a = n.hints,
          i = n.input,
          l = n.logProvenanceDetails,
          s = l === void 0 ? !0 : l,
          f;
        try {
          f = await t();
        } catch (e) {
          return (
            s &&
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
        if (e.digitalSourceType == null) {
          var g = await E(f);
          if (g.support === "unsupported")
            return (
              s &&
                o("WAKaleidoscopeLogger")
                  .ksLogger()
                  .DEBUG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "provenanceWrite skipped: the loaded kscli.wasm needs a digital source type",
                      ])),
                  ),
              o("WAResultOrError").makeError("unsupported-field-set")
            );
          if (g.support === "unknown")
            return (
              s &&
                o("WAKaleidoscopeLogger")
                  .ksLogger()
                  .WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "provenanceWrite capability probe ",
                        "",
                      ])),
                    g.failure,
                  ),
              o("WAResultOrError").makeError("internal-error")
            );
        }
        var h = "",
          v = function (t) {
            s &&
              o("WAKaleidoscopeLogger")
                .ksLogger()
                .DEBUG(
                  m || (m = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                  t,
                );
          },
          S,
          R;
        try {
          var L,
            k = await I(
              f,
              D({
                fields: e,
                hints: a != null ? a : [],
                input: i,
                stderr: function (t) {
                  ((h += t), v(t));
                },
                stdout: v,
              }),
            );
          ((S = k.exitCode), (R = (L = k.fs[y]) == null ? void 0 : L.content));
        } catch (e) {
          return (
            s &&
              o("WAKaleidoscopeLogger")
                .ksLogger()
                .WARN(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "provenanceWrite threw: ",
                      "",
                    ])),
                  r("getErrorSafe")(e).message,
                ),
            o("WAResultOrError").makeError("internal-error")
          );
        }
        if (S !== 0) {
          var T = S === C || S === b;
          return (
            s && x(S, T, h),
            o("WAResultOrError").makeError(
              T ? "invalid-media" : "internal-error",
            )
          );
        }
        return R instanceof Uint8Array
          ? o("WAResultOrError").makeResult(
              o("WAByteArray").uint8ArrayToBuffer(R),
            )
          : (s &&
              o("WAKaleidoscopeLogger")
                .ksLogger()
                .WARN(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "provenanceWrite produced no output",
                    ])),
                ),
            o("WAResultOrError").makeError("internal-error"));
      };
    }
    var P = $({
      getWasmModule: o("WAGetKaleidoscopeWasm").getKaleidoscopeWasm,
    });
    ((l.createProvenanceWrite = $), (l.provenanceWrite = P));
  },
  98,
);
