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
      y = 262144,
      C = 1048576,
      b = 4194304;
    function v(e, t, n, r) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            e: {
              if (t === "audio") return yield I(e, r);
              if (t === "sticker-pack") return yield D(e, r);
              if (t === "sound-sticker-audio") return yield $(e, r);
              if (t === "image") return yield E(e, r);
              if (t === "video" || t === "gif") return yield R(e, r);
              if (t === "document") {
                var o = n != null ? [n] : [];
                return yield N(
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
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = ["video/mp4", "video/quicktime"];
          return yield N(
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
        L.apply(this, arguments)
      );
    }
    function E(e, t) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = ["image/jpeg", "image/png", "image/webp", "image/gif"];
          return yield N(
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
        k.apply(this, arguments)
      );
    }
    function I(e, t) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = ["audio/ogg; codecs=opus", "audio/m4a", "audio/x-m4a"];
          return yield N(
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
        T.apply(this, arguments)
      );
    }
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = ["application/zip", "image/webp", "application/was"];
          return yield N(
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
        x.apply(this, arguments)
      );
    }
    function $(e, t) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return yield N(
            babelHelpers.extends(
              {
                input: e,
                allowedMimeTypes: ["audio/ogg; codecs=opus", "audio/m4a"],
                withEnforceStrictMimetypeMatch: !1,
                withMimetypeIgnoreParameters: !0,
                withMimetypeFuzzyMatch: !0,
              },
              t,
            ),
          );
        })),
        P.apply(this, arguments)
      );
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
            S = t.zipArchiveCheckEnabled,
            R = o("WASI").createWasi(
              w({
                input: _,
                mimetypeHints: p,
                strictJpegScanValidationEnabled: f,
                strictMp4ValidationEnabled: h,
                strictOggOpusValidationEnabled: y,
                zipArchiveCheckEnabled: S,
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
            L = R.getImportObject,
            E = R.start,
            k = yield o("WAGetKaleidoscopeWasm").getKaleidoscopeWasm(),
            I = yield WebAssembly.instantiate(k, L()),
            T = E(I),
            D = T.exitCode,
            x = T.fs;
          if (D !== 0)
            return (
              o("WAKaleidoscopeLogger")
                .ksLogger()
                .MUSTFIX(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "classifyWithMediaType failed with exit code ",
                      "",
                    ])),
                  D,
                ),
              o("WAResultOrError").makeError("wasm-runtime-error")
            );
          var $ = (n = x[g]) == null ? void 0 : n.content;
          if (typeof $ != "string")
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
          var P = {};
          try {
            P = JSON.parse($);
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
          return typeof ((a = P) == null ? void 0 : a.score) != "number"
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
                  ((i = P) == null ? void 0 : i.mimetype) ||
                  "application/octet-stream",
                extension: ((l = P) == null ? void 0 : l.extension) || null,
                score: P.score,
              });
        })),
        M.apply(this, arguments)
      );
    }
    function w(e) {
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
        v = e.zipArchiveCheckEnabled,
        S = ["kaleidoscope"],
        R = (i ? h : 0) + (v ? y : 0) + (s ? C : 0) + (l ? b : 0);
      (R !== 0 && S.push("--flags=" + R),
        S.push("classify"),
        S.push("--json-report=" + _),
        c && S.push("--with-mimetype-fuzzy-match"),
        u && S.push("--with-enforce-strict-mimetype-match"),
        d && S.push("--with-mimetype-ignore-parameters"),
        m && S.push("--with-stream-check"));
      for (var L of r) S.push("--mimetype-hints=" + L);
      return (
        S.push(p),
        {
          args: S,
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
    ((l.kaleidoscopeClassifyByMediaType = v),
      (l.kaleidoscopeClassifyVideo = R));
  },
  98,
);
