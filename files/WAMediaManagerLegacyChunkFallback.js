__d(
  "WAMediaManagerLegacyChunkFallback",
  [
    "WACryptoSha256",
    "WACryptoUtils",
    "WAMediaCrypto",
    "WAMediaManagerGetMostRecentMediaEntry",
    "WAMediaManagerLogger",
    "WAMediaManagerPersistedMediaLookup",
    "WAMediaUtils",
    "WAResultOrError",
    "WAValidateMedia",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = { addPoint: function (t) {} };
    function c(e, t, n) {
      var r;
      if (n == null)
        return {
          mediaKey: e.mediaKey,
          mediaTypeDetails: { mediaType: e.serverMediaType, type: "regular" },
          plaintextHash: t,
        };
      var a = (r = e.downloadableThumbnail) == null ? void 0 : r.mediaKey,
        i = o("WAMediaCrypto").convertServerMediaTypeToPreviewMediaType(
          e.serverMediaType,
        );
      return a == null || i == null
        ? null
        : {
            mediaKey: o("WAMediaUtils").castToMediaKey(a),
            mediaTypeDetails: { messageType: i, type: "preview" },
            plaintextHash: n,
          };
    }
    async function d(e, t) {
      var n = e.mediaKey,
        r = e.mediaTypeDetails,
        a = await (r.type === "preview"
          ? o("WAMediaCrypto").computeMediaKeysForPreview(n)
          : o("WAMediaCrypto").computeMediaKeys(n, r.mediaType)),
        i = a.cipherKey,
        l = a.hmacKey,
        s = a.iv,
        u = await o("WAMediaCrypto").encryptAndHmac(
          i,
          s,
          l,
          t,
          r.type === "preview" ? "preview" : r.mediaType,
        ),
        c = u.ciphertext;
      return c.slice().buffer;
    }
    function m(t) {
      var n = t.getChunkWithPreviewFlagByPlaintextHash,
        a = t.getMediaEntries,
        i = t.writeCiphertext;
      function l(t, n) {
        d(t, n)
          .then(function (e) {
            return i(babelHelpers.extends({}, t, { ciphertext: e }), u);
          })
          .catch(function (t) {
            o("WAMediaManagerLogger").baseLogger.ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to copy chunk to Cache Storage: ",
                  "",
                ])),
              r("getErrorSafe")(t),
            );
          });
      }
      async function m(e, t, i) {
        try {
          var u = await o(
            "WAMediaManagerGetMostRecentMediaEntry",
          ).getMostRecentMediaEntry({
            fullSizePlaintextHash: t,
            getMediaEntries: a,
            mediaDownloadFlow: i,
          });
          if (!u.success) return null;
          var d = u.value,
            m = d.msgIdOfRecentMediaEntry,
            p = d.recentMediaEntry,
            _ =
              e === "preview"
                ? o(
                    "WAMediaManagerPersistedMediaLookup",
                  ).getThumbnailPlaintextHash(p)
                : null;
          i.addPoint("read_legacy_chunk_start");
          var f = await n(_ != null ? _ : t);
          if ((i.addPoint("read_legacy_chunk_end"), f == null))
            return (i.addPoint("legacy_chunk_missing"), null);
          var g =
            _ == null &&
            p.progressiveJpegDetails != null &&
            (f.isProgressivePreview === !0 ||
              !o("WACryptoUtils").arrayBuffersEqual(
                await o("WACryptoSha256").sha256(f.blobData),
                p.fileSha256,
              ));
          if (g && e === "fullsize")
            return (i.addPoint("legacy_chunk_progressive_preview"), null);
          var h = await o("WAValidateMedia").validateMedia(f.blobData, i);
          if (!h.success) return (i.addPoint("legacy_chunk_invalid"), null);
          var y = g || (e === "preview" && _ == null) ? null : c(p, t, _);
          return (
            y != null && l(y, f.blobData),
            i.addPoint("legacy_chunk_hit"),
            o("WAResultOrError").makeResult({
              msgIdAndMediaEntry: [m, p],
              serverMediaType: p.serverMediaType,
              source: "chunk_store",
              unvalidatedMimeType: o(
                "WAMediaUtils",
              ).getMimeTypeFromServerMediaType(p.serverMediaType),
              validatedResult: h.value,
            })
          );
        } catch (e) {
          return (
            o("WAMediaManagerLogger").baseLogger.WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to read legacy chunk: ",
                  "",
                ])),
              r("getErrorSafe")(e),
            ),
            i.addPoint("read_legacy_chunk_fail"),
            null
          );
        }
      }
      return {
        recover: async function (t) {
          var e,
            n = t.abortSignal,
            r = t.fullSizePlaintextHash,
            o = t.kind,
            a = t.mediaDownloadFlow,
            i = t.networkResult,
            l = await i;
          return l.success || n.aborted || l.error === "preview-not-supported"
            ? l
            : (e = await m(o, r, a)) != null
              ? e
              : l;
        },
      };
    }
    l.createLegacyChunkFallback = m;
  },
  98,
);
