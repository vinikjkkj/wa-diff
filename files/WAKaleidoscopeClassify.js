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
      h = 1048576,
      y = 4194304;
    function C(e, t, n, r) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            e: {
              if (t === "audio") return yield E(e, r);
              if (t === "sticker-pack") return yield I(e, r);
              if (t === "image") return yield R(e, r);
              if (t === "video" || t === "gif") return yield v(e, r);
              if (t === "document") {
                var o = n != null ? [n] : [];
                return yield D(
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
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = ["video/mp4", "video/quicktime"];
          return yield D(
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
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = ["image/jpeg", "image/png", "image/webp", "image/gif"];
          return yield D(
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
          var n = ["audio/ogg; codecs=opus", "audio/m4a", "audio/x-m4a"];
          return yield D(
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
        k.apply(this, arguments)
      );
    }
    function I(e, t) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = ["application/zip", "image/webp", "application/was"];
          return yield D(
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
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            a,
            i,
            l,
            p = t.allowedMimeTypes,
            _ = t.input,
            f = t.strictMp4ValidationEnabled,
            h = t.strictOggOpusValidationEnabled,
            y = t.withEnforceStrictMimetypeMatch,
            C = t.withMimetypeFuzzyMatch,
            b = t.withMimetypeIgnoreParameters,
            v = o("WASI").createWasi(
              $({
                input: _,
                mimetypeHints: p,
                strictMp4ValidationEnabled: f,
                strictOggOpusValidationEnabled: h,
                withEnforceStrictMimetypeMatch: y,
                withMimetypeIgnoreParameters: b,
                withMimetypeFuzzyMatch: C,
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
            S = v.getImportObject,
            R = v.start,
            L = yield o("WAGetKaleidoscopeWasm").getKaleidoscopeWasm(),
            E = yield WebAssembly.instantiate(L, S()),
            k = R(E),
            I = k.exitCode,
            T = k.fs;
          if (I !== 0)
            return (
              o("WAKaleidoscopeLogger")
                .ksLogger()
                .MUSTFIX(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "classifyWithMediaType failed with exit code ",
                      "",
                    ])),
                  I,
                ),
              o("WAResultOrError").makeError("wasm-runtime-error")
            );
          var D = (n = T[g]) == null ? void 0 : n.content;
          if (typeof D != "string")
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
          var x = {};
          try {
            x = JSON.parse(D);
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
          return typeof ((a = x) == null ? void 0 : a.score) != "number"
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
                  ((i = x) == null ? void 0 : i.mimetype) ||
                  "application/octet-stream",
                extension: ((l = x) == null ? void 0 : l.extension) || null,
                score: x.score,
              });
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      var t,
        n = e.input,
        r = e.mimetypeHints,
        o = e.stderr,
        a = e.stdout,
        i = e.strictMp4ValidationEnabled,
        l = e.strictOggOpusValidationEnabled,
        s = e.withEnforceStrictMimetypeMatch,
        u = e.withMimetypeFuzzyMatch,
        c = e.withMimetypeIgnoreParameters,
        d = e.withStreamCheck,
        m = ["kaleidoscope"],
        C = (l ? h : 0) + (i ? y : 0);
      (C !== 0 && m.push("--flags=" + C),
        m.push("classify"),
        m.push("--json-report=" + _),
        u && m.push("--with-mimetype-fuzzy-match"),
        s && m.push("--with-enforce-strict-mimetype-match"),
        c && m.push("--with-mimetype-ignore-parameters"),
        d && m.push("--with-stream-check"));
      for (var b of r) m.push("--mimetype-hints=" + b);
      return (
        m.push(p),
        {
          args: m,
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
    ((l.kaleidoscopeClassifyByMediaType = C),
      (l.kaleidoscopeClassifyVideo = v));
  },
  98,
);
