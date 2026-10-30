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
            f = t.input,
            h = t.strictJpegScanValidationEnabled,
            y = t.strictMp4ValidationEnabled,
            C = t.strictOggOpusValidationEnabled,
            b = t.withEnforceStrictMimetypeMatch,
            v = t.withMimetypeFuzzyMatch,
            S = t.withMimetypeIgnoreParameters,
            R = t.zipArchiveCheckEnabled,
            L = o("WASI").createWasi(
              A({
                input: f,
                mimetypeHints: _,
                strictJpegScanValidationEnabled: h,
                strictMp4ValidationEnabled: y,
                strictOggOpusValidationEnabled: C,
                zipArchiveCheckEnabled: R,
                allowAv1VideoCodec: p,
                withEnforceStrictMimetypeMatch: b,
                withMimetypeIgnoreParameters: S,
                withMimetypeFuzzyMatch: v,
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
            E = L.getImportObject,
            k = L.start,
            I = yield o("WAGetKaleidoscopeWasm").getKaleidoscopeWasm(),
            T = yield WebAssembly.instantiate(I, E()),
            D = k(T),
            x = D.exitCode,
            $ = D.fs;
          if (x !== 0)
            return (
              o("WAKaleidoscopeLogger")
                .ksLogger()
                .MUSTFIX(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "classifyWithMediaType failed with exit code ",
                      "",
                    ])),
                  x,
                ),
              o("WAResultOrError").makeError("wasm-runtime-error")
            );
          var P = (n = $[g]) == null ? void 0 : n.content;
          if (typeof P != "string")
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
          var N = {};
          try {
            N = JSON.parse(P);
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
          return typeof ((a = N) == null ? void 0 : a.score) != "number"
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
                  ((i = N) == null ? void 0 : i.mimetype) ||
                  "application/octet-stream",
                extension: ((l = N) == null ? void 0 : l.extension) || null,
                score: N.score,
              });
        })),
        w.apply(this, arguments)
      );
    }
    function A(e) {
      var t,
        n = e.allowAv1VideoCodec,
        r = e.input,
        o = e.mimetypeHints,
        a = e.stderr,
        i = e.stdout,
        l = e.strictJpegScanValidationEnabled,
        s = e.strictMp4ValidationEnabled,
        u = e.strictOggOpusValidationEnabled,
        c = e.withEnforceStrictMimetypeMatch,
        d = e.withMimetypeFuzzyMatch,
        m = e.withMimetypeIgnoreParameters,
        S = e.withStreamCheck,
        R = e.zipArchiveCheckEnabled,
        L = ["kaleidoscope"],
        E = (l ? h : 0) + (R ? y : 0) + (n ? C : 0) + (u ? b : 0) + (s ? v : 0);
      (E !== 0 && L.push("--flags=" + E),
        L.push("classify"),
        L.push("--json-report=" + _),
        d && L.push("--with-mimetype-fuzzy-match"),
        c && L.push("--with-enforce-strict-mimetype-match"),
        m && L.push("--with-mimetype-ignore-parameters"),
        S && L.push("--with-stream-check"));
      for (var k of o) L.push("--mimetype-hints=" + k);
      return (
        L.push(p),
        {
          args: L,
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
              content: new Uint8Array(r),
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
          stdout: i,
          stderr: a,
          moduleName: "WAKaleidoscopeClassify_CLI",
        }
      );
    }
    ((l.kaleidoscopeClassifyByMediaType = S),
      (l.kaleidoscopeClassifyVideo = L));
  },
  98,
);
