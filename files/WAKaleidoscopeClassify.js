__d(
  "WAKaleidoscopeClassify",
  [
    "WAGetKaleidoscopeWasm",
    "WAKaleidoscopeLogger",
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
      p = "input",
      _ = "output",
      f = "/" + p,
      g = "/" + _;
    async function h(e, t, n) {
      e: {
        if (t === "audio") return await b(e);
        if (t === "sticker-pack") return await v(e);
        if (t === "image") return await C(e);
        if (t === "video" || t === "gif") return await y(e);
        if (t === "document") {
          var r = n != null ? [n] : [];
          return await S({
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
    }
    async function y(e) {
      var t = ["video/mp4", "video/quicktime"];
      return await S({
        input: e,
        allowedMimeTypes: t,
        withEnforceStrictMimetypeMatch: !0,
        withMimetypeIgnoreParameters: !0,
        withMimetypeFuzzyMatch: !1,
      });
    }
    async function C(e) {
      var t = ["image/jpeg", "image/png", "image/webp", "image/gif"];
      return await S({
        input: e,
        allowedMimeTypes: t,
        withEnforceStrictMimetypeMatch: !0,
        withMimetypeIgnoreParameters: !0,
        withMimetypeFuzzyMatch: !1,
      });
    }
    async function b(e) {
      var t = ["audio/ogg; codecs=opus", "audio/m4a", "audio/x-m4a"];
      return await S({
        input: e,
        allowedMimeTypes: t,
        withEnforceStrictMimetypeMatch: !1,
        withMimetypeIgnoreParameters: !1,
        withMimetypeFuzzyMatch: !0,
      });
    }
    async function v(e) {
      var t = ["application/zip", "image/webp", "application/was"];
      return await S({
        input: e,
        allowedMimeTypes: t,
        withEnforceStrictMimetypeMatch: !0,
        withMimetypeIgnoreParameters: !0,
        withMimetypeFuzzyMatch: !1,
      });
    }
    async function S(t) {
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
          R({
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
                  e || (e = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                  n,
                );
            },
            stdout: function (t) {
              o("WAKaleidoscopeLogger")
                .ksLogger()
                .DEBUG(
                  s || (s = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                  t,
                );
            },
          }),
        ),
        b = C.getImportObject,
        v = C.start,
        S = await o("WAGetKaleidoscopeWasm").getKaleidoscopeWasm(),
        L = await WebAssembly.instantiate(S, b()),
        E = v(L),
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
    }
    function R(e) {
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
      (l.kaleidoscopeClassifyVideo = y),
      (l.kaleidoscopeClassifyImage = C),
      (l.kaleidoscopeClassifyPTT = b),
      (l.kaleidoscopeClassifyStickerPack = v));
  },
  98,
);
