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
      C = 524288,
      b = 1048576,
      v = 4194304;
    function S(e, t, n, r) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            e: {
              if (t === "audio") return yield T(e, r);
              if (t === "sticker-pack") return yield x(e, r);
              if (t === "sound-sticker-audio") return yield P(e, r);
              if (t === "image") return yield k(e, r);
              if (t === "video" || t === "gif") return yield L(e, r);
              if (t === "document") {
                var o = n != null ? [n] : [];
                return yield M(
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
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = ["video/mp4", "video/quicktime"];
          return yield M(
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
          var n = ["image/jpeg", "image/png", "image/webp", "image/gif"];
          return yield M(
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
        I.apply(this, arguments)
      );
    }
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = ["audio/ogg; codecs=opus", "audio/m4a", "audio/x-m4a"];
          return yield M(
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
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = ["application/zip", "image/webp", "application/was"];
          return yield M(
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
        $.apply(this, arguments)
      );
    }
    function P(e, t) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return yield M(
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
        N.apply(this, arguments)
      );
    }
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            a,
            i,
            l,
            p = t.allowAv1VideoCodec,
            _ = t.allowedMimeTypes,
            f = t.claimedTypeValidationEnabled,
            h = t.input,
            y = t.strictJpegScanValidationEnabled,
            C = t.strictMp4ValidationEnabled,
            b = t.strictOggOpusValidationEnabled,
            v = t.withEnforceStrictMimetypeMatch,
            S = t.withMimetypeFuzzyMatch,
            R = t.withMimetypeIgnoreParameters,
            L = t.zipArchiveCheckEnabled,
            E = o("WASI").createWasi(
              A({
                input: h,
                mimetypeHints: _,
                strictJpegScanValidationEnabled: y,
                strictMp4ValidationEnabled: C,
                strictOggOpusValidationEnabled: b,
                zipArchiveCheckEnabled: L,
                allowAv1VideoCodec: p,
                claimedTypeValidationEnabled: f,
                withEnforceStrictMimetypeMatch: v,
                withMimetypeIgnoreParameters: R,
                withMimetypeFuzzyMatch: S,
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
            k = E.getImportObject,
            I = E.start,
            T = yield o("WAGetKaleidoscopeWasm").getKaleidoscopeWasm(),
            D = yield WebAssembly.instantiate(T, k()),
            x = I(D),
            $ = x.exitCode,
            P = x.fs;
          if ($ !== 0)
            return (
              o("WAKaleidoscopeLogger")
                .ksLogger()
                .MUSTFIX(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "classifyWithMediaType failed with exit code ",
                      "",
                    ])),
                  $,
                ),
              o("WAResultOrError").makeError("wasm-runtime-error")
            );
          var N = (n = P[g]) == null ? void 0 : n.content;
          if (typeof N != "string")
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
          var M = {};
          try {
            M = JSON.parse(N);
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
          return typeof ((a = M) == null ? void 0 : a.score) != "number"
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
                  ((i = M) == null ? void 0 : i.mimetype) ||
                  "application/octet-stream",
                extension: ((l = M) == null ? void 0 : l.extension) || null,
                score: M.score,
              });
        })),
        w.apply(this, arguments)
      );
    }
    function A(e) {
      var t,
        n = e.allowAv1VideoCodec,
        r = e.claimedTypeValidationEnabled,
        o = e.input,
        a = e.mimetypeHints,
        i = e.stderr,
        l = e.stdout,
        s = e.strictJpegScanValidationEnabled,
        u = e.strictMp4ValidationEnabled,
        c = e.strictOggOpusValidationEnabled,
        d = e.withEnforceStrictMimetypeMatch,
        m = e.withMimetypeFuzzyMatch,
        S = e.withMimetypeIgnoreParameters,
        R = e.withStreamCheck,
        L = e.zipArchiveCheckEnabled,
        E = ["kaleidoscope"],
        k = (s ? h : 0) + (L ? y : 0) + (n ? C : 0) + (c ? b : 0) + (u ? v : 0);
      (k !== 0 && E.push("--flags=" + k),
        E.push("classify"),
        E.push("--json-report=" + _),
        m && E.push("--with-mimetype-fuzzy-match"),
        d && E.push("--with-enforce-strict-mimetype-match"),
        S && E.push("--with-mimetype-ignore-parameters"),
        R && E.push("--with-stream-check"),
        r && E.push("--with-claimed-type-validation"));
      for (var I of a) E.push("--mimetype-hints=" + I);
      return (
        E.push(p),
        {
          args: E,
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
              content: new Uint8Array(o),
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
          stdout: l,
          stderr: i,
          moduleName: "WAKaleidoscopeClassify_CLI",
        }
      );
    }
    ((l.kaleidoscopeClassifyByMediaType = S),
      (l.kaleidoscopeClassifyVideo = L));
  },
  98,
);
