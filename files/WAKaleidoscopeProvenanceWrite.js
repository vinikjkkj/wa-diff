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
      f,
      g,
      h = "input",
      y = "output",
      C = "/" + h,
      b = "/" + y,
      v = 3,
      S = 4,
      R = 2,
      L = { publisher: ["probe"] },
      E = v,
      k = new WeakMap();
    function I(t) {
      var n = k.get(t);
      if (n != null) return n;
      var a = T(t).then(
        function (n) {
          return n === E
            ? "supported"
            : n === R
              ? "unsupported"
              : (k.delete(t),
                o("WAKaleidoscopeLogger")
                  .ksLogger()
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "provenanceWrite capability probe exited with ",
                        "",
                      ])),
                    n,
                  ),
                "unknown");
        },
        function (e) {
          return (
            k.delete(t),
            o("WAKaleidoscopeLogger")
              .ksLogger()
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "provenanceWrite capability probe threw: ",
                    "",
                  ])),
                r("getErrorSafe")(e).message,
              ),
            "unknown"
          );
        },
      );
      return (k.set(t, a), a);
    }
    async function T(e) {
      var t = await D(
        e,
        $({
          fields: L,
          hints: [],
          input: new ArrayBuffer(0),
          stderr: function () {},
          stdout: function () {},
        }),
      );
      return t.exitCode;
    }
    async function D(e, t) {
      var n = o("WASI").createWasi(t),
        r = n.getImportObject,
        a = n.start,
        i = await WebAssembly.instantiate(e, x(r()));
      return a(i);
    }
    function x(e) {
      var t = {};
      for (var n of Object.entries(e.wasi_snapshot_preview1)) {
        var r = n[0],
          o = n[1];
        typeof o == "function" && (t[r] = o);
      }
      return { wasi_snapshot_preview1: t };
    }
    function $(e) {
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
        s.push(h),
        s.push(y),
        {
          args: s,
          fs:
            ((t = {}),
            (t[C] = {
              path: C,
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
    function P(e) {
      var t = e.getWasmModule;
      return async function (n) {
        var e = n.fields,
          a = n.hints,
          i = n.input,
          l;
        try {
          l = await t();
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
        if (e.digitalSourceType == null) {
          var s = await I(l);
          if (s === "unsupported")
            return (
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
          if (s === "unknown")
            return o("WAResultOrError").makeError("internal-error");
        }
        var h = "",
          y,
          C;
        try {
          var R,
            L = await D(
              l,
              $({
                fields: e,
                hints: a != null ? a : [],
                input: i,
                stderr: function (t) {
                  ((h += t),
                    o("WAKaleidoscopeLogger")
                      .ksLogger()
                      .DEBUG(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            "",
                          ])),
                        t,
                      ));
                },
                stdout: function (t) {
                  return o("WAKaleidoscopeLogger")
                    .ksLogger()
                    .DEBUG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                      t,
                    );
                },
              }),
            );
          ((y = L.exitCode), (C = (R = L.fs[b]) == null ? void 0 : R.content));
        } catch (e) {
          return (
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
        if (y !== 0) {
          var E = y === v || y === S;
          return (
            E
              ? o("WAKaleidoscopeLogger")
                  .ksLogger()
                  .DEBUG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "provenanceWrite did not write, exit code ",
                        ": ",
                        "",
                      ])),
                    y,
                    h,
                  )
              : o("WAKaleidoscopeLogger")
                  .ksLogger()
                  .WARN(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "provenanceWrite failed with exit code ",
                        ": ",
                        "",
                      ])),
                    y,
                    h,
                  ),
            o("WAResultOrError").makeError(
              E ? "invalid-media" : "internal-error",
            )
          );
        }
        return C instanceof Uint8Array
          ? o("WAResultOrError").makeResult(
              o("WAByteArray").uint8ArrayToBuffer(C),
            )
          : (o("WAKaleidoscopeLogger")
              .ksLogger()
              .WARN(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "provenanceWrite produced no output",
                  ])),
              ),
            o("WAResultOrError").makeError("internal-error"));
      };
    }
    var N = P({
      getWasmModule: o("WAGetKaleidoscopeWasm").getKaleidoscopeWasm,
    });
    ((l.createProvenanceWrite = P), (l.provenanceWrite = N));
  },
  98,
);
