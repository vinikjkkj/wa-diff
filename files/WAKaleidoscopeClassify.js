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
      h = 65536,
      y = 1048576,
      C = 4194304;
    function b(e, t, n, r) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            e: {
              if (t === "audio") return yield k(e, r);
              if (t === "sticker-pack") return yield T(e, r);
              if (t === "image") return yield L(e, r);
              if (t === "video" || t === "gif") return yield S(e, r);
              if (t === "document") {
                var o = n != null ? [n] : [];
                return yield x(
                  babelHelpers.extends(
                    {
                      input: e,
                      allowedMimeTypes: o,
                      withEnforceStrictMimetypeMatch: !1,
                      withMimetypeIgnoreParameters: !1,
                      withMimetypeFuzzyMatch: !1,
                    },
                    r,
                  ),
                );
              }
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  t,
              );
            }
          },
        )),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = ["video/mp4", "video/quicktime"];
          return yield x(
            babelHelpers.extends(
              {
                input: e,
                allowedMimeTypes: n,
                withEnforceStrictMimetypeMatch: !0,
                withMimetypeIgnoreParameters: !0,
                withMimetypeFuzzyMatch: !1,
              },
              t,
            ),
          );
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
          var n = ["image/jpeg", "image/png", "image/webp", "image/gif"];
          return yield x(
            babelHelpers.extends(
              {
                input: e,
                allowedMimeTypes: n,
                withEnforceStrictMimetypeMatch: !0,
                withMimetypeIgnoreParameters: !0,
                withMimetypeFuzzyMatch: !1,
              },
              t,
            ),
          );
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
          var n = ["audio/ogg; codecs=opus", "audio/m4a", "audio/x-m4a"];
          return yield x(
            babelHelpers.extends(
              {
                input: e,
                allowedMimeTypes: n,
                withEnforceStrictMimetypeMatch: !1,
                withMimetypeIgnoreParameters: !1,
                withMimetypeFuzzyMatch: !0,
              },
              t,
            ),
          );
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = ["application/zip", "image/webp", "application/was"];
          return yield x(
            babelHelpers.extends(
              {
                input: e,
                allowedMimeTypes: n,
                withEnforceStrictMimetypeMatch: !0,
                withMimetypeIgnoreParameters: !0,
                withMimetypeFuzzyMatch: !1,
              },
              t,
            ),
          );
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            a,
            i,
            l,
            p = t.allowedMimeTypes,
            _ = t.input,
            f = t.strictJpegScanValidationEnabled,
            h = t.strictMp4ValidationEnabled,
            y = t.strictOggOpusValidationEnabled,
            C = t.withEnforceStrictMimetypeMatch,
            b = t.withMimetypeFuzzyMatch,
            v = t.withMimetypeIgnoreParameters,
            S = o("WASI").createWasi(
              P({
                input: _,
                mimetypeHints: p,
                strictJpegScanValidationEnabled: f,
                strictMp4ValidationEnabled: h,
                strictOggOpusValidationEnabled: y,
                withEnforceStrictMimetypeMatch: C,
                withMimetypeIgnoreParameters: v,
                withMimetypeFuzzyMatch: b,
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
            R = S.getImportObject,
            L = S.start,
            E = yield o("WAGetKaleidoscopeWasm").getKaleidoscopeWasm(),
            k = yield WebAssembly.instantiate(E, R()),
            I = L(k),
            T = I.exitCode,
            D = I.fs;
          if (T !== 0)
            return (
              o("WAKaleidoscopeLogger")
                .ksLogger()
                .MUSTFIX(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "classifyWithMediaType failed with exit code ",
                      "",
                    ])),
                  T,
                ),
              o("WAResultOrError").makeError("wasm-runtime-error")
            );
          var x = (n = D[g]) == null ? void 0 : n.content;
          if (typeof x != "string")
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
          var $ = {};
          try {
            $ = JSON.parse(x);
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
          return typeof ((a = $) == null ? void 0 : a.score) != "number"
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
                  ((i = $) == null ? void 0 : i.mimetype) ||
                  "application/octet-stream",
                extension: ((l = $) == null ? void 0 : l.extension) || null,
                score: $.score,
              });
        })),
        $.apply(this, arguments)
      );
    }
    function P(e) {
      var t,
        n = e.input,
        r = e.mimetypeHints,
        o = e.stderr,
        a = e.stdout,
        i = e.strictJpegScanValidationEnabled,
        l = e.strictMp4ValidationEnabled,
        s = e.strictOggOpusValidationEnabled,
        u = e.withEnforceStrictMimetypeMatch,
        c = e.withMimetypeFuzzyMatch,
        d = e.withMimetypeIgnoreParameters,
        m = e.withStreamCheck,
        b = ["kaleidoscope"],
        v = (i ? h : 0) + (s ? y : 0) + (l ? C : 0);
      (v !== 0 && b.push("--flags=" + v),
        b.push("classify"),
        b.push("--json-report=" + _),
        c && b.push("--with-mimetype-fuzzy-match"),
        u && b.push("--with-enforce-strict-mimetype-match"),
        d && b.push("--with-mimetype-ignore-parameters"),
        m && b.push("--with-stream-check"));
      for (var S of r) b.push("--mimetype-hints=" + S);
      return (
        b.push(p),
        {
          args: b,
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
    ((l.kaleidoscopeClassifyByMediaType = b),
      (l.kaleidoscopeClassifyVideo = S));
  },
  98,
);
