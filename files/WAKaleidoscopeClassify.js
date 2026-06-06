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
      g = "/" + _;
    function h(e, t, n) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          e: {
            if (t === "audio") return yield R(e);
            if (t === "sticker-pack") return yield E(e);
            if (t === "image") return yield v(e);
            if (t === "video" || t === "gif") return yield C(e);
            if (t === "document") {
              var r = n != null ? [n] : [];
              return yield I({
                input: e,
                allowedMimeTypes: r,
                withEnforceStrictMimetypeMatch: !1,
                withMimetypeIgnoreParameters: !1,
                withMimetypeFuzzyMatch: !1,
              });
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                t,
            );
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = ["video/mp4", "video/quicktime"];
          return yield I({
            input: e,
            allowedMimeTypes: t,
            withEnforceStrictMimetypeMatch: !0,
            withMimetypeIgnoreParameters: !0,
            withMimetypeFuzzyMatch: !1,
          });
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = ["image/jpeg", "image/png", "image/webp", "image/gif"];
          return yield I({
            input: e,
            allowedMimeTypes: t,
            withEnforceStrictMimetypeMatch: !0,
            withMimetypeIgnoreParameters: !0,
            withMimetypeFuzzyMatch: !1,
          });
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = ["audio/ogg; codecs=opus", "audio/m4a", "audio/x-m4a"];
          return yield I({
            input: e,
            allowedMimeTypes: t,
            withEnforceStrictMimetypeMatch: !1,
            withMimetypeIgnoreParameters: !1,
            withMimetypeFuzzyMatch: !0,
          });
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = ["application/zip", "image/webp", "application/was"];
          return yield I({
            input: e,
            allowedMimeTypes: t,
            withEnforceStrictMimetypeMatch: !0,
            withMimetypeIgnoreParameters: !0,
            withMimetypeFuzzyMatch: !1,
          });
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            a,
            i,
            l,
            p = t.allowedMimeTypes,
            _ = t.input,
            f = t.withEnforceStrictMimetypeMatch,
            h = t.withMimetypeFuzzyMatch,
            y = t.withMimetypeIgnoreParameters,
            C = o("WASI").createWasi(
              D({
                input: _,
                mimetypeHints: p,
                withEnforceStrictMimetypeMatch: f,
                withMimetypeIgnoreParameters: y,
                withMimetypeFuzzyMatch: h,
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
            b = C.getImportObject,
            v = C.start,
            S = yield o("WAGetKaleidoscopeWasm").getKaleidoscopeWasm(),
            R = yield WebAssembly.instantiate(S, b()),
            L = v(R),
            E = L.exitCode,
            k = L.fs;
          if (E !== 0)
            return (
              o("WAKaleidoscopeLogger")
                .ksLogger()
                .MUSTFIX(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "classifyWithMediaType failed with exit code ",
                      "",
                    ])),
                  E,
                ),
              o("WAResultOrError").makeError("wasm-runtime-error")
            );
          var I = (n = k[g]) == null ? void 0 : n.content;
          if (typeof I != "string")
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
          var T = {};
          try {
            T = JSON.parse(I);
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
          return typeof ((a = T) == null ? void 0 : a.score) != "number"
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
                  ((i = T) == null ? void 0 : i.mimetype) ||
                  "application/octet-stream",
                extension: ((l = T) == null ? void 0 : l.extension) || null,
                score: T.score,
              });
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      var t,
        n = e.input,
        r = e.mimetypeHints,
        o = e.stderr,
        a = e.stdout,
        i = e.withEnforceStrictMimetypeMatch,
        l = e.withMimetypeFuzzyMatch,
        s = e.withMimetypeIgnoreParameters,
        u = e.withStreamCheck,
        c = ["kaleidoscope", "classify"];
      (c.push("--json-report=" + _),
        l && c.push("--with-mimetype-fuzzy-match"),
        i && c.push("--with-enforce-strict-mimetype-match"),
        s && c.push("--with-mimetype-ignore-parameters"),
        u && c.push("--with-stream-check"));
      for (var d of r) (c.push("--mimetype-hints"), c.push(d));
      return (
        c.push(p),
        {
          args: c,
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
    ((l.kaleidoscopeClassifyByMediaType = h),
      (l.kaleidoscopeClassifyVideo = C),
      (l.kaleidoscopeClassifyImage = v),
      (l.kaleidoscopeClassifyPTT = R),
      (l.kaleidoscopeClassifyStickerPack = E));
  },
  98,
);
