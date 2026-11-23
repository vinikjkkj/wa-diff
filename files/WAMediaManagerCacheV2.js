__d(
  "WAMediaManagerCacheV2",
  [
    "WAMediaCrypto",
    "WAMediaManager",
    "WAMediaManagerLogger",
    "WAMediaManagerPersistedMediaLookup",
    "WAMediaManagerTaskMemoryCache",
    "WAMediaManagerUploadMemoryCache",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = {
        addAnnotations: function () {},
        addPoint: function () {},
        downloadEntry: "ForwardMedia",
      };
    function c(t) {
      var n = t.deleteBlobByPlaintextHash,
        a = t.getBlobByPlaintextHash,
        i = t.getMediaEntries,
        l = t.getProtocolMsgIdAndSortOrderMs,
        c = t.getStoredMediaKey,
        p = t.storeMediaKey,
        _ = t.writeBlobByPlaintextHash,
        f = t.writePreviewBlobByPlaintextHash,
        g = new Map(),
        h = o("WAMediaManagerTaskMemoryCache").createTaskMemoryCache(),
        y = o("WAMediaManagerPersistedMediaLookup").createPersistedMediaLookup({
          deleteBlobByPlaintextHash: n,
          getBlobByPlaintextHash: async function (t) {
            return (await g.get(t), a(t));
          },
          getMediaEntries: i,
          getStoredMediaKey: c,
        }),
        C = o("WAMediaManagerUploadMemoryCache").createUploadMemoryCache(l);
      function b(t, n) {
        var a,
          i = t.ciphertext,
          l = t.mediaKey,
          u = t.mediaTypeDetails,
          c = t.plaintextHash,
          d = ((a = g.get(c)) != null ? a : Promise.resolve())
            .then(async function () {
              (n.addPoint("write_blob_start"),
                await (o("WAMediaCrypto").isFullCiphertext(i)
                  ? _(c, i)
                  : f(c, i)),
                n.addPoint("write_blob_end"),
                p != null &&
                  o("WAMediaCrypto").isFullCiphertext(i) &&
                  (await p(c, { mediaKey: l, mediaTypeDetails: u }).catch(
                    function (t) {
                      (o("WAMediaManagerLogger").baseLogger.ERROR(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "Failed to store media key: ",
                            "",
                          ])),
                        r("getErrorSafe")(t),
                      ),
                        n.addPoint("store_media_key_fail"));
                    },
                  )));
            })
            .catch(function (e) {
              (o("WAMediaManagerLogger").baseLogger.ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to store blob: ",
                    "",
                  ])),
                r("getErrorSafe")(e),
              ),
                n.addPoint("write_blob_fail"));
            })
            .finally(function () {
              g.get(c) === d && g.delete(c);
            });
        g.set(c, d);
      }
      function v(e) {
        return function (t) {
          var n = t.abortController,
            r = t.fullSizePlaintextHash,
            o = t.mediaDownloadFlow,
            a = t.scheduledTask;
          h.put(e, r, n, o, a);
        };
      }
      var S = v("fullsize"),
        R = v("preview");
      function L(e) {
        return {
          setDownloadCache: e,
          setDownloadedAttachmentToUploadCache: C.saveDownloadedAttachment,
          type: "cache-miss",
        };
      }
      function E(e, t) {
        return t == null
          ? L(S)
          : h.putResult(
              "fullsize",
              e.fullSizePlaintextHash,
              e.mediaDownloadFlow,
              t,
            );
      }
      function k(e, t) {
        return t == null
          ? L(R)
          : h.putResult(
              "preview",
              e.fullSizePlaintextHash,
              e.mediaDownloadFlow,
              t,
            );
      }
      return {
        cancelTask: h.cancel,
        clearCache: function () {
          (h.clear(), C.clear());
        },
        getFullsize: async function (t) {
          var e = h.get(
            "fullsize",
            t.fullSizePlaintextHash,
            o("WAMediaManager").toTaskSchedulerPriority(t.priority),
          );
          if (e != null) return (m(t.mediaDownloadFlow, "hit", "fullsize"), e);
          var n = E(
            t,
            await y.readFullsize(t.fullSizePlaintextHash, t.mediaDownloadFlow),
          );
          return (
            m(
              t.mediaDownloadFlow,
              n.type === "cache-hit" ? "hit" : "miss",
              "fullsize",
            ),
            n
          );
        },
        getFullsizeAndPreview: async function (t) {
          var e = o("WAMediaManager").toTaskSchedulerPriority(t.priority),
            n = h.get("fullsize", t.fullSizePlaintextHash, e),
            r = h.get("preview", t.fullSizePlaintextHash, e);
          if (n != null && r != null) {
            var a = { fullsizeCacheResult: n, previewCacheResult: r };
            return (m(t.mediaDownloadFlow, "hit", "fullsize-and-preview"), a);
          }
          if (n != null) {
            var i = {
              fullsizeCacheResult: n,
              previewCacheResult: k(
                t,
                await y.readPreview(
                  t.fullSizePlaintextHash,
                  t.mediaDownloadFlow,
                ),
              ),
            };
            return (d(t.mediaDownloadFlow, i), i);
          }
          if (r != null) {
            var l = {
              fullsizeCacheResult: E(
                t,
                await y.readFullsize(
                  t.fullSizePlaintextHash,
                  t.mediaDownloadFlow,
                ),
              ),
              previewCacheResult: r,
            };
            return (m(t.mediaDownloadFlow, "hit", "preview"), l);
          }
          var s = await y.readFullsizeAndPreview(
              t.fullSizePlaintextHash,
              t.mediaDownloadFlow,
            ),
            u = s.fullsize,
            c = s.preview,
            p = { fullsizeCacheResult: E(t, u), previewCacheResult: k(t, c) };
          return (d(t.mediaDownloadFlow, p), p);
        },
        getPreview: async function (t) {
          var e = h.get(
            "preview",
            t.fullSizePlaintextHash,
            o("WAMediaManager").toTaskSchedulerPriority(t.priority),
          );
          if (e != null) return (m(t.mediaDownloadFlow, "hit", "preview"), e);
          var n = k(
            t,
            await y.readPreview(t.fullSizePlaintextHash, t.mediaDownloadFlow),
          );
          return (
            m(
              t.mediaDownloadFlow,
              n.type === "cache-hit" ? "hit" : "miss",
              "preview",
            ),
            n
          );
        },
        getUploadedAttachment: C.getUploadedAttachment,
        readStoredPlaintext: async function (t, n) {
          var e = await (n === t
            ? y.readFullsize(t, u)
            : y.readThumbnail(t, n, u));
          return (e == null ? void 0 : e.success) === !0
            ? e.value.validatedResult.validatedPlaintext
            : null;
        },
        writeCiphertext: b,
      };
    }
    function d(e, t) {
      var n = t.fullsizeCacheResult,
        r = t.previewCacheResult,
        o = n.type === "cache-hit",
        a = r.type === "cache-hit",
        i = "fullsize-and-preview";
      (o && !a ? (i = "fullsize") : !o && a && (i = "preview"),
        m(e, o || a ? "hit" : "miss", i));
    }
    function m(e, t, n) {
      e.addAnnotations({
        string: { media_manager_cache_result: t, media_manager_cache_type: n },
      });
    }
    l.createAttachmentCache = c;
  },
  98,
);
