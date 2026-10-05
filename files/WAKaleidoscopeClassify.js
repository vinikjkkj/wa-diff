__d(
  "WAKaleidoscopeClassify",
  [
    "WAGetKaleidoscopeWasm",
    "WAKaleidoscopeLogger",
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
      h = 1048576;
    function y(e, t, n, r) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            e: {
              if (t === "audio") return yield L(e, r);
              if (t === "sticker-pack") return yield k(e, r);
              if (t === "image") return yield S(e, r);
              if (t === "video" || t === "gif") return yield b(e, r);
              if (t === "document") {
                var o = n != null ? [n] : [];
                return yield T({
                  input: e,
                  allowedMimeTypes: o,
                  withEnforceStrictMimetypeMatch: !1,
                  withMimetypeIgnoreParameters: !1,
                  withMimetypeFuzzyMatch: !1,
                  strictOggOpusValidationEnabled: r,
                });
              }
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  t,
              );
            }
          },
        )),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = ["video/mp4", "video/quicktime"];
          return yield T({
            input: e,
            allowedMimeTypes: n,
            withEnforceStrictMimetypeMatch: !0,
            withMimetypeIgnoreParameters: !0,
            withMimetypeFuzzyMatch: !1,
            strictOggOpusValidationEnabled: t,
          });
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = ["image/jpeg", "image/png", "image/webp", "image/gif"];
          return yield T({
            input: e,
            allowedMimeTypes: n,
            withEnforceStrictMimetypeMatch: !0,
            withMimetypeIgnoreParameters: !0,
            withMimetypeFuzzyMatch: !1,
            strictOggOpusValidationEnabled: t,
          });
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = ["audio/ogg; codecs=opus", "audio/m4a", "audio/x-m4a"];
          return yield T({
            input: e,
            allowedMimeTypes: n,
            withEnforceStrictMimetypeMatch: !1,
            withMimetypeIgnoreParameters: !1,
            withMimetypeFuzzyMatch: !0,
            strictOggOpusValidationEnabled: t,
          });
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = ["application/zip", "image/webp", "application/was"];
          return yield T({
            input: e,
            allowedMimeTypes: n,
            withEnforceStrictMimetypeMatch: !0,
            withMimetypeIgnoreParameters: !0,
            withMimetypeFuzzyMatch: !1,
            strictOggOpusValidationEnabled: t,
          });
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            a,
            i,
            l,
            p = t.allowedMimeTypes,
            _ = t.input,
            f = t.strictOggOpusValidationEnabled,
            h = t.withEnforceStrictMimetypeMatch,
            y = t.withMimetypeFuzzyMatch,
            C = t.withMimetypeIgnoreParameters,
            b = o("WASI").createWasi(
              x({
                input: _,
                mimetypeHints: p,
                strictOggOpusValidationEnabled: f,
                withEnforceStrictMimetypeMatch: h,
                withMimetypeIgnoreParameters: C,
                withMimetypeFuzzyMatch: y,
                withStreamCheck: !1,
                stderr: function (n) {
                  o("WAKaleidoscopeLogger")
                    .ksLogger()
                    .MUSTFIX(
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
            v = b.getImportObject,
            S = b.start,
            R = yield o("WAGetKaleidoscopeWasm").getKaleidoscopeWasm(),
            L = yield WebAssembly.instantiate(R, v()),
            E = S(L),
            k = E.exitCode,
            I = E.fs;
          if (k !== 0)
            return (
              o("WAKaleidoscopeLogger")
                .ksLogger()
                .MUSTFIX(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "classifyWithMediaType failed with exit code ",
                      "",
                    ])),
                  k,
                ),
              o("WAResultOrError").makeError("wasm-runtime-error")
            );
          var T = (n = I[g]) == null ? void 0 : n.content;
          if (typeof T != "string")
            return (
              o("WAKaleidoscopeLogger")
                .ksLogger()
                .MUSTFIX(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "classifyWithMediaType failed invalid result type",
                    ])),
                ),
              o("WAResultOrError").makeError("wasm-result-not-json")
            );
          var D = {};
          try {
            D = JSON.parse(T);
          } catch (e) {
            return (
              o("WAKaleidoscopeLogger")
                .ksLogger()
                .catching(r("getErrorSafe")(e))
                .MUSTFIX(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "classifyWithMediaType failed to parse JSON",
                    ])),
                ),
              o("WAResultOrError").makeError("wasm-invalid-json")
            );
          }
          return typeof ((a = D) == null ? void 0 : a.score) != "number"
            ? (o("WAKaleidoscopeLogger")
                .ksLogger()
                .MUSTFIX(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "classifyWithMediaType score is null",
                    ])),
                ),
              o("WAResultOrError").makeError("wasm-invalid-json"))
            : o("WAResultOrError").makeResult({
                mimetype:
                  ((i = D) == null ? void 0 : i.mimetype) ||
                  "application/octet-stream",
                extension: ((l = D) == null ? void 0 : l.extension) || null,
                score: D.score,
              });
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      var t,
        n = e.input,
        r = e.mimetypeHints,
        o = e.stderr,
        a = e.stdout,
        i = e.strictOggOpusValidationEnabled,
        l = e.withEnforceStrictMimetypeMatch,
        s = e.withMimetypeFuzzyMatch,
        u = e.withMimetypeIgnoreParameters,
        c = e.withStreamCheck,
        d = ["kaleidoscope"];
      (i && d.push("--flags=" + h),
        d.push("classify"),
        d.push("--json-report=" + _),
        s && d.push("--with-mimetype-fuzzy-match"),
        l && d.push("--with-enforce-strict-mimetype-match"),
        u && d.push("--with-mimetype-ignore-parameters"),
        c && d.push("--with-stream-check"));
      for (var m of r) d.push("--mimetype-hints=" + m);
      return (
        d.push(p),
        {
          args: d,
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
          stdout: a,
          stderr: o,
          moduleName: "WAKaleidoscopeClassify_CLI",
        }
      );
    }
    ((l.kaleidoscopeClassifyByMediaType = y),
      (l.kaleidoscopeClassifyVideo = b));
  },
  98,
);
