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
      g = "/" + _,
      h = 65536,
      y = 262144,
      C = 524288,
      b = 1048576,
      v = 4194304,
      S = 67108864;
    async function R(e, t, n, r) {
      e: {
        if (t === "audio") return await k(e, r);
        if (t === "sticker-pack") return await I(e, r);
        if (t === "sound-sticker-audio") return await T(e, r);
        if (t === "image") return await E(e, r);
        if (t === "video" || t === "gif") return await L(e, r);
        if (t === "document") {
          var o = n != null ? [n] : [];
          return await D(
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
    }
    async function L(e, t) {
      var n = ["video/mp4", "video/quicktime"];
      return await D(
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
    }
    async function E(e, t) {
      var n = ["image/jpeg", "image/png", "image/webp", "image/gif"];
      return await D(
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
    }
    async function k(e, t) {
      var n = ["audio/ogg; codecs=opus", "audio/m4a", "audio/x-m4a"];
      return await D(
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
    }
    async function I(e, t) {
      var n = ["application/zip", "image/webp", "application/was"];
      return await D(
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
    }
    async function T(e, t) {
      return await D(
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
    }
    async function D(t) {
      var n,
        a,
        i,
        l,
        p = t.allowAv1VideoCodec,
        _ = t.allowedMimeTypes,
        f = t.claimedTypeValidationEnabled,
        h = t.input,
        y = t.strictAacAdtsValidationEnabled,
        C = t.strictJpegScanValidationEnabled,
        b = t.strictMp4ValidationEnabled,
        v = t.strictOggOpusValidationEnabled,
        S = t.withEnforceStrictMimetypeMatch,
        R = t.withMimetypeFuzzyMatch,
        L = t.withMimetypeIgnoreParameters,
        E = t.withStreamCheck,
        k = E === void 0 ? !1 : E,
        I = t.zipArchiveCheckEnabled,
        T = o("WASI").createWasi(
          x({
            input: h,
            mimetypeHints: _,
            strictJpegScanValidationEnabled: C,
            strictMp4ValidationEnabled: b,
            strictOggOpusValidationEnabled: v,
            zipArchiveCheckEnabled: I,
            allowAv1VideoCodec: p,
            claimedTypeValidationEnabled: f,
            strictAacAdtsValidationEnabled: y,
            withEnforceStrictMimetypeMatch: S,
            withMimetypeIgnoreParameters: L,
            withMimetypeFuzzyMatch: R,
            withStreamCheck: k,
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
        D = T.getImportObject,
        $ = T.start,
        P = await o("WAGetKaleidoscopeWasm").getKaleidoscopeWasm(),
        N = await WebAssembly.instantiate(P, D()),
        M = $(N),
        w = M.exitCode,
        A = M.fs;
      if (w !== 0)
        return (
          o("WAKaleidoscopeLogger")
            .ksLogger()
            .MUSTFIX(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "classifyWithMediaType failed with exit code ",
                  "",
                ])),
              w,
            ),
          o("WAResultOrError").makeError("wasm-runtime-error")
        );
      var F = (n = A[g]) == null ? void 0 : n.content;
      if (typeof F != "string")
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
      var O = {};
      try {
        O = JSON.parse(F);
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
      return typeof ((a = O) == null ? void 0 : a.score) != "number"
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
              ((i = O) == null ? void 0 : i.mimetype) ||
              "application/octet-stream",
            extension: ((l = O) == null ? void 0 : l.extension) || null,
            score: O.score,
          });
    }
    function x(e) {
      var t,
        n = e.allowAv1VideoCodec,
        r = e.claimedTypeValidationEnabled,
        o = e.input,
        a = e.mimetypeHints,
        i = e.stderr,
        l = e.stdout,
        s = e.strictAacAdtsValidationEnabled,
        u = e.strictJpegScanValidationEnabled,
        c = e.strictMp4ValidationEnabled,
        d = e.strictOggOpusValidationEnabled,
        m = e.withEnforceStrictMimetypeMatch,
        R = e.withMimetypeFuzzyMatch,
        L = e.withMimetypeIgnoreParameters,
        E = e.withStreamCheck,
        k = e.zipArchiveCheckEnabled,
        I = ["kaleidoscope"],
        T =
          (u ? h : 0) +
          (k ? y : 0) +
          (n ? C : 0) +
          (d ? b : 0) +
          (c ? v : 0) +
          (s ? S : 0);
      (T !== 0 && I.push("--flags=" + T),
        I.push("classify"),
        I.push("--json-report=" + _),
        R && I.push("--with-mimetype-fuzzy-match"),
        m && I.push("--with-enforce-strict-mimetype-match"),
        L && I.push("--with-mimetype-ignore-parameters"),
        E && I.push("--with-stream-check"),
        r && I.push("--with-claimed-type-validation"));
      for (var D of a) I.push("--mimetype-hints=" + D);
      return (
        I.push(p),
        {
          args: I,
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
    ((l.kaleidoscopeClassifyByMediaType = R),
      (l.kaleidoscopeClassifyVideo = L));
  },
  98,
);
