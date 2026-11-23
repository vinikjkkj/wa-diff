__d(
  "WAMediaManagerPersistedMediaLookup",
  [
    "WADecryptMedia",
    "WADownloadCiphertext",
    "WADownloadProgressiveJpegPlaintext",
    "WAHashUtils",
    "WAMediaCrypto",
    "WAMediaManagerGetMostRecentMediaEntry",
    "WAMediaManagerLogger",
    "WAMediaUtils",
    "WAProgressiveJpegGetPJpegDetails",
    "WAResultOrError",
    "WAValidateMedia",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = { fullsize: null, preview: null };
    function p(e) {
      var t,
        n = (t = e.downloadableThumbnail) == null ? void 0 : t.fileSha256;
      return e.progressiveJpegDetails == null && n != null
        ? o("WAHashUtils").toPlaintextHash(n)
        : null;
    }
    function _(e, t) {
      var n;
      if (t == null)
        return {
          mediaKey: e.mediaKey,
          mediaTypeDetails: { mediaType: e.serverMediaType, type: "regular" },
          plaintextHash: o("WAHashUtils").toPlaintextHash(e.fileSha256),
        };
      var r = (n = e.downloadableThumbnail) == null ? void 0 : n.mediaKey,
        a = o("WAMediaCrypto").convertServerMediaTypeToPreviewMediaType(
          e.serverMediaType,
        );
      return r == null || a == null
        ? null
        : {
            mediaKey: o("WAMediaUtils").castToMediaKey(r),
            mediaTypeDetails: { messageType: a, type: "preview" },
            plaintextHash: t,
          };
    }
    async function f(e, t, n) {
      if (e == null) return null;
      var r = await o("WADecryptMedia").decryptMedia(
        babelHelpers.extends({}, e, {
          ciphertextHmac: o("WADownloadCiphertext").toMediaCiphertext(t),
          tryOtherHmacSalts: n,
        }),
      );
      return r.success ? r.value.plaintext : null;
    }
    async function g(e, t) {
      var n = o(
        "WAProgressiveJpegGetPJpegDetails",
      ).maybeGetProgressiveJpegDetailsUsingMediaEntry(e).value;
      if (n == null) return null;
      var r = await o(
        "WADownloadProgressiveJpegPlaintext",
      ).decryptProgressiveJpegPlaintext({
        ciphertext: t,
        mediaKey: e.mediaKey,
        mediaTypeDetails: { mediaType: e.serverMediaType, type: "regular" },
        progressiveJpegDetails: n,
        size: e.size,
      });
      return r.success ? r.value : null;
    }
    function h(t) {
      var n = t.deleteBlobByPlaintextHash,
        a = t.getBlobByPlaintextHash,
        i = t.getMediaEntries,
        l = t.getStoredMediaKey;
      async function h(t, n) {
        try {
          var a = await o(
            "WAMediaManagerGetMostRecentMediaEntry",
          ).getMostRecentMediaEntry({
            fullSizePlaintextHash: t,
            getMediaEntries: i,
            mediaDownloadFlow: n,
          });
          return a.success
            ? [a.value.msgIdOfRecentMediaEntry, a.value.recentMediaEntry]
            : null;
        } catch (t) {
          return (
            o("WAMediaManagerLogger").baseLogger.WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to read media entry: ",
                  "",
                ])),
              r("getErrorSafe")(t),
            ),
            null
          );
        }
      }
      async function y(e, t, i, d) {
        var h,
          y = e[1],
          C = d ? p(y) : null,
          b = C != null ? C : t,
          v;
        try {
          (i.addPoint("read_blob_start"), (v = await a(b)));
        } catch (e) {
          return (
            o("WAMediaManagerLogger").baseLogger.WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to read blob: ",
                  "",
                ])),
              r("getErrorSafe")(e),
            ),
            i.addPoint("read_blob_fail"),
            m
          );
        }
        if (v == null)
          return (i.addPoint("read_blob_end"), i.addPoint("blob_missing"), m);
        var S =
          C == null &&
          !o("WAMediaCrypto").isFullCiphertext(v) &&
          (d || y.progressiveJpegDetails != null);
        S && i.addPoint("blob_progressive_preview");
        var R;
        try {
          i.addPoint("decrypt_stored_media_start");
          var L = await (S ? g(y, v) : f(_(y, C), v, !1));
          if (
            (i.addPoint(
              L == null
                ? "decrypt_stored_media_fail"
                : "decrypt_stored_media_end",
            ),
            L == null && !S)
          ) {
            var E =
              l != null && o("WAMediaCrypto").isFullCiphertext(v)
                ? await l(b)
                : null;
            E == null
              ? (L = await f(_(y, C), v, !0))
              : (i.addPoint("decrypt_with_stored_media_key_start"),
                (L = await f(
                  babelHelpers.extends({}, E, { plaintextHash: b }),
                  v,
                  !0,
                )),
                i.addPoint(
                  L == null
                    ? "decrypt_with_stored_media_key_fail"
                    : "decrypt_with_stored_media_key_end",
                ));
          }
          (i.addPoint(L == null ? "read_blob_fail" : "read_blob_end"),
            (R =
              L == null
                ? null
                : await o("WAValidateMedia").validateMedia(L, i)));
        } catch (e) {
          return (
            o("WAMediaManagerLogger").baseLogger.WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to decrypt blob: ",
                  "",
                ])),
              r("getErrorSafe")(e),
            ),
            i.addPoint("read_blob_fail"),
            m
          );
        }
        if (((h = R) == null ? void 0 : h.success) !== !0) {
          i.addPoint("blob_invalid");
          try {
            (i.addPoint("delete_blob_start"),
              await n(b),
              i.addPoint("delete_blob_end"));
          } catch (e) {
            (o("WAMediaManagerLogger").baseLogger.ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to delete blob: ",
                  "",
                ])),
              r("getErrorSafe")(e),
            ),
              i.addPoint("delete_blob_fail"));
          }
          return m;
        }
        var k = o("WAResultOrError").makeResult({
          msgIdAndMediaEntry: e,
          serverMediaType: y.serverMediaType,
          source: "cache_storage",
          unvalidatedMimeType: o("WAMediaUtils").getMimeTypeFromServerMediaType(
            y.serverMediaType,
          ),
          validatedResult: R.value,
        });
        return { fullsize: S ? null : k, preview: k };
      }
      async function C(e, t) {
        if (l == null) return null;
        try {
          var n = await l(e),
            i = n == null ? void 0 : n.mediaTypeDetails;
          if (n == null || (i == null ? void 0 : i.type) !== "regular")
            return null;
          t.addPoint("read_blob_start");
          var s = await a(e);
          if (s == null)
            return (
              t.addPoint("read_blob_end"),
              t.addPoint("blob_missing"),
              null
            );
          if (!o("WAMediaCrypto").isFullCiphertext(s))
            return (
              t.addPoint("read_blob_end"),
              t.addPoint("blob_progressive_preview"),
              null
            );
          t.addPoint("decrypt_with_stored_media_key_start");
          var u = await f(
            babelHelpers.extends({}, n, { plaintextHash: e }),
            s,
            !0,
          );
          if (u == null)
            return (
              t.addPoint("decrypt_with_stored_media_key_fail"),
              t.addPoint("read_blob_fail"),
              null
            );
          (t.addPoint("decrypt_with_stored_media_key_end"),
            t.addPoint("read_blob_end"));
          var c = await o("WAValidateMedia").validateMedia(u, t);
          if (!c.success) return (t.addPoint("blob_invalid"), null);
          var m = i.mediaType;
          return o("WAResultOrError").makeResult({
            msgIdAndMediaEntry: null,
            serverMediaType: m,
            source: "cache_storage",
            unvalidatedMimeType:
              o("WAMediaUtils").getMimeTypeFromServerMediaType(m),
            validatedResult: c.value,
          });
        } catch (e) {
          return (
            o("WAMediaManagerLogger").baseLogger.WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to read blob with stored media key: ",
                  "",
                ])),
              r("getErrorSafe")(e),
            ),
            t.addPoint("read_blob_fail"),
            null
          );
        }
      }
      async function b(e, t) {
        var n = await h(e, t);
        if (n == null) return C(e, t);
        var r = await y(n, e, t, !1),
          o = r.fullsize;
        return o;
      }
      async function v(e, t) {
        var n = await h(e, t);
        if (n == null) return null;
        var r = await y(n, e, t, !0),
          o = r.preview;
        return o;
      }
      async function S(e, t, n) {
        var r = await h(e, n);
        if (r == null || p(r[1]) !== t) return null;
        var o = await y(r, e, n, !0),
          a = o.preview;
        return a;
      }
      async function R(e, t) {
        var n = await h(e, t);
        if (n == null) return { fullsize: await C(e, t), preview: null };
        var r = function (o) {
          return y(n, e, t, o);
        };
        if (p(n[1]) == null) return r(!0);
        var o = await Promise.all([r(!1), r(!0)]),
          a = o[0].fullsize,
          i = o[1].preview;
        return { fullsize: a, preview: i };
      }
      return {
        readFullsize: b,
        readFullsizeAndPreview: R,
        readPreview: v,
        readThumbnail: S,
      };
    }
    ((l.getThumbnailPlaintextHash = p), (l.createPersistedMediaLookup = h));
  },
  98,
);
