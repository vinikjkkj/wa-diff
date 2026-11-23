__d(
  "WAMediaManagerCache",
  [
    "WACryptoSha256",
    "WACryptoUtils",
    "WAErrorMessage",
    "WAHashUtils",
    "WAMediaManager",
    "WAMediaManagerGetMostRecentMediaEntry",
    "WAMediaManagerLogger",
    "WAMediaManagerTypes",
    "WAMediaUtils",
    "WAPromiseDelays",
    "WAResultOrError",
    "WATimeUtils",
    "WAValidateMedia",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["mediaKeyTimestamp", "objectId", "size"],
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h;
    function y(e) {
      return e.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, e.value, { source: "cache" }),
          )
        : e;
    }
    function C(e) {
      var t;
      if (e == null || !e.success || e.value.msgIdAndMediaEntry == null)
        return null;
      var n = e.value.msgIdAndMediaEntry,
        r = n[1],
        o =
          r.progressiveJpegDetails != null ||
          ((t = r.downloadableThumbnail) == null ? void 0 : t.fileSha256) ==
            null;
      return o ? e : null;
    }
    var b = 1e3 * 30,
      v = 1e3 * 60 * 60 * 24 * 2;
    function S(e, t, n, a, i, l, S) {
      l === void 0 && (l = o("WAMediaManager").createCacheState);
      var E = l(),
        k = E.fullsizeCache,
        I = E.previewCache,
        T = E.uploadCache,
        D = function (t) {
          var e = t.abortController,
            n = t.fullSizePlaintextHash,
            a = t.mediaDownloadFlow,
            l = t.scheduledTask;
          (k.set(n, { abortController: e, mediaDownloadFlow: a, task: l }),
            l.promise
              .then(async function (e) {
                if (!e.success) {
                  k.delete(n);
                  return;
                }
                try {
                  var t;
                  (a.addPoint("write_blob_start"),
                    await i({
                      blobData: e.value.validatedResult.validatedPlaintext,
                      isProgressivePreview: !1,
                      mimetype:
                        (t = e.value.validatedResult.mimeType) != null
                          ? t
                          : e.value.unvalidatedMimeType,
                      plaintextHash: n,
                    }),
                    a.addPoint("write_blob_end"));
                } catch (e) {
                  var l = r("getErrorSafe")(e);
                  (o("WAMediaManagerLogger").baseLogger.ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to store chunk: ",
                        "",
                      ])),
                    l,
                  ),
                    a.addPoint("write_blob_fail"));
                }
              })
              .finally(function () {
                o("WAPromiseDelays")
                  .delayMs(b)
                  .then(function () {
                    k.delete(n);
                  });
              }));
        },
        x = function (t) {
          var e = t.abortController,
            n = t.fullSizePlaintextHash,
            a = t.mediaDownloadFlow,
            l = t.scheduledTask;
          (I.set(n, { abortController: e, mediaDownloadFlow: a, task: l }),
            l.promise
              .then(async function (e) {
                if (!e.success) {
                  I.delete(n);
                  return;
                }
                var t = e.value.msgIdAndMediaEntry;
                if (t != null)
                  try {
                    var l, s;
                    a.addPoint("write_blob_start");
                    var c = t[1],
                      d = c.progressiveJpegDetails != null,
                      m;
                    (c.progressiveJpegDetails != null
                      ? (m = n)
                      : ((l = c.downloadableThumbnail) == null
                            ? void 0
                            : l.fileSha256) != null
                        ? (m = o("WAHashUtils").toPlaintextHash(
                            c.downloadableThumbnail.fileSha256,
                          ))
                        : (a.addPoint("calculate_preview_plaintext_hash"),
                          (m = o("WAHashUtils").toPlaintextHash(
                            await o("WACryptoSha256").sha256(
                              e.value.validatedResult.validatedPlaintext,
                            ),
                          ))),
                      await i({
                        blobData: e.value.validatedResult.validatedPlaintext,
                        isProgressivePreview: d,
                        mimetype:
                          (s = e.value.validatedResult.mimeType) != null
                            ? s
                            : e.value.unvalidatedMimeType,
                        plaintextHash: m,
                      }),
                      a.addPoint("write_blob_end"));
                  } catch (e) {
                    var p = r("getErrorSafe")(e);
                    (o("WAMediaManagerLogger").baseLogger.ERROR(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "Failed to store chunk: ",
                          "",
                        ])),
                      p,
                    ),
                      a.addPoint("write_blob_fail"));
                  }
              })
              .finally(function () {
                o("WAPromiseDelays")
                  .delayMs(b)
                  .then(function () {
                    I.delete(n);
                  });
              }));
        },
        $ = function (t) {
          var e = t.chatJid,
            n = t.plaintextHash,
            r = t.scheduledTask,
            a = t.cacheTtlMs,
            i = a === void 0 ? v : a,
            l = T.get(n) || new Map();
          (l.set(e, r),
            T.set(n, l),
            r
              .then(function (e) {
                var t = e.success;
                return t ? o("WAPromiseDelays").delayMs(i) : void 0;
              })
              .finally(function () {
                T.delete(n);
              }));
        },
        P = function (n) {
          var t = n.mediaEntry,
            r = n.msgId,
            a = n.plaintextHash;
          e(r)
            .then(function (e) {
              if (e == null) {
                o("WAMediaManagerLogger").baseLogger.WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "missing chatJid, skip setDownloadedAttachmentToUploadCache",
                    ])),
                );
                return;
              }
              var n = e.protocolMsgId.chat,
                r = L(t);
              if (r == null) {
                o("WAMediaManagerLogger").baseLogger.ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "can not covert mediaEntry from download to upload for cache",
                    ])),
                );
                return;
              }
              var i = o("WATimeUtils").timeoutFor(r.mediaKeyTimestamp, v / 1e3);
              if (i !== 0) {
                var l = o("WATimeUtils").pastUnixTime(
                  o("WATimeUtils").DAY_SECONDS,
                  r.mediaKeyTimestamp,
                );
                o("WATimeUtils").isInFuture(l) ||
                  $({
                    cacheTtlMs: i,
                    chatJid: n,
                    plaintextHash: a,
                    scheduledTask: Promise.resolve(
                      o("WAResultOrError").makeResult(r),
                    ),
                  });
              }
            })
            .catch(function (e) {
              o("WAMediaManagerLogger").baseLogger.WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "setDownloadedAttachmentToUploadCache getProtocolMsgIdAndSortOrderMs: ",
                    "",
                  ])),
                o("WAErrorMessage").maybeGetMessageFromError(e),
              );
            });
        };
      async function N(e, i, l) {
        (l === void 0 && (l = !1), i.addPoint("read_blob_start"));
        var s,
          u = null;
        if (l && S != null) {
          var c,
            d,
            m = await S(e);
          ((s = (c = m == null ? void 0 : m.blobData) != null ? c : null),
            (u =
              (d = m == null ? void 0 : m.isProgressivePreview) != null
                ? d
                : null));
        } else s = await n(e);
        if ((i.addPoint("read_blob_end"), s == null))
          return (i.addPoint("blob_missing"), null);
        if (u === !0) return (i.addPoint("blob_progressive_preview"), null);
        var f = await o("WAValidateMedia").validateMedia(s, i);
        if (!f.success) {
          i.addPoint("blob_invalid");
          try {
            (i.addPoint("delete_blob_start"),
              await t(e),
              i.addPoint("delete_blob_end"));
          } catch (e) {
            var g = r("getErrorSafe")(e);
            (o("WAMediaManagerLogger").baseLogger.ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to delete invalid chunk: ",
                  "",
                ])),
              g,
            ),
              i.addPoint("delete_blob_fail"));
          }
          return null;
        }
        var h = await o(
          "WAMediaManagerGetMostRecentMediaEntry",
        ).getMostRecentMediaEntry({
          fullSizePlaintextHash: e,
          getMediaEntries: a,
          mediaDownloadFlow: i,
        });
        if (!h.success) return null;
        var y = h.value,
          C = y.msgIdOfRecentMediaEntry,
          b = y.recentMediaEntry;
        if (
          l &&
          b.progressiveJpegDetails != null &&
          !o("WACryptoUtils").arrayBuffersEqual(
            await o("WACryptoSha256").sha256(s),
            b.fileSha256,
          )
        ) {
          i.addPoint("blob_hash_mismatch");
          try {
            (i.addPoint("delete_blob_start"),
              await t(e),
              i.addPoint("delete_blob_end"));
          } catch (e) {
            var v = r("getErrorSafe")(e);
            (o("WAMediaManagerLogger").baseLogger.ERROR(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to delete truncated-preview chunk: ",
                  "",
                ])),
              v,
            ),
              i.addPoint("delete_blob_fail"));
          }
          return null;
        }
        var R = f.value;
        return o("WAResultOrError").makeResult({
          msgIdAndMediaEntry: [C, b],
          serverMediaType: b.serverMediaType,
          source: "chunk_store",
          unvalidatedMimeType: o("WAMediaUtils").getMimeTypeFromServerMediaType(
            b.serverMediaType,
          ),
          validatedResult: R,
        });
      }
      function M(e, t, n, r) {
        var a = Promise.resolve(r);
        return (
          e.set(t, {
            abortController: new AbortController(),
            mediaDownloadFlow: n,
            task: {
              cancel: function () {
                return !1;
              },
              promise: a,
              promote: function () {
                return !1;
              },
            },
          }),
          self.setTimeout(function () {
            e.delete(t);
          }, b),
          {
            cache: a.then(
              o("WAMediaManagerTypes").transformInternalMediaDownloadResult,
            ),
            type: "cache-hit",
          }
        );
      }
      return {
        cancelTask: function (t) {
          var e = o("WAMediaManagerLogger").baseLogger.TAGS([
            "hash:" + o("WAHashUtils").sanitisePlaintextHash(t),
            "cancelTask",
          ]);
          e.LOG(f || (f = babelHelpers.taggedTemplateLiteralLoose(["start"])));
          var n = [k, I];
          for (var r of n) {
            var a = r.get(t);
            if (a != null) {
              var i = a.task.cancel();
              (a.mediaDownloadFlow.addPoint("cancel_download_triggered"),
                i === !1
                  ? (a.abortController.abort(),
                    a.mediaDownloadFlow.addPoint("http_abort_cancel"),
                    e.LOG(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
                          "http abort cancel",
                        ])),
                    ))
                  : (a.mediaDownloadFlow.addPoint("worker_task_cancel_cancel"),
                    e.LOG(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
                          "worker task cancel",
                        ])),
                    )),
                r.delete(t));
            }
          }
        },
        clearCache: function () {
          (I.clear(), k.clear(), T.clear());
        },
        getFullsize: async function (t) {
          var e = k.get(t.fullSizePlaintextHash);
          if (e != null)
            return (
              R(t.mediaDownloadFlow, "hit", "fullsize"),
              e.task.promote(
                o("WAMediaManager").toTaskSchedulerPriority(t.priority),
              ),
              {
                cache: e.task.promise
                  .then(
                    o("WAMediaManagerTypes")
                      .transformInternalMediaDownloadResult,
                  )
                  .then(y),
                type: "cache-hit",
              }
            );
          var n = await N(t.fullSizePlaintextHash, t.mediaDownloadFlow, !0);
          return n != null
            ? (R(t.mediaDownloadFlow, "hit", "fullsize"),
              M(k, t.fullSizePlaintextHash, t.mediaDownloadFlow, n))
            : (R(t.mediaDownloadFlow, "miss", "fullsize"),
              {
                setDownloadCache: D,
                setDownloadedAttachmentToUploadCache: P,
                type: "cache-miss",
              });
        },
        getFullsizeAndPreview: async function (t) {
          var e = o("WAMediaManager").toTaskSchedulerPriority(t.priority),
            n = k.get(t.fullSizePlaintextHash),
            r = I.get(t.fullSizePlaintextHash);
          if (n != null && r != null)
            return (
              R(t.mediaDownloadFlow, "hit", "fullsize-and-preview"),
              n.task.promote(e),
              r.task.promote(e),
              {
                fullsizeCacheResult: {
                  cache: n.task.promise
                    .then(
                      o("WAMediaManagerTypes")
                        .transformInternalMediaDownloadResult,
                    )
                    .then(y),
                  type: "cache-hit",
                },
                previewCacheResult: {
                  cache: r.task.promise
                    .then(
                      o("WAMediaManagerTypes")
                        .transformInternalMediaDownloadResult,
                    )
                    .then(y),
                  type: "cache-hit",
                },
              }
            );
          if (n != null)
            return (
              R(t.mediaDownloadFlow, "hit", "fullsize"),
              n.task.promote(e),
              {
                fullsizeCacheResult: {
                  cache: n.task.promise
                    .then(
                      o("WAMediaManagerTypes")
                        .transformInternalMediaDownloadResult,
                    )
                    .then(y),
                  type: "cache-hit",
                },
                previewCacheResult: {
                  setDownloadCache: x,
                  setDownloadedAttachmentToUploadCache: P,
                  type: "cache-miss",
                },
              }
            );
          if (r != null) {
            (R(t.mediaDownloadFlow, "hit", "preview"), r.task.promote(e));
            var a = await N(t.fullSizePlaintextHash, t.mediaDownloadFlow, !0);
            return {
              fullsizeCacheResult:
                a != null
                  ? M(k, t.fullSizePlaintextHash, t.mediaDownloadFlow, a)
                  : {
                      setDownloadCache: D,
                      setDownloadedAttachmentToUploadCache: P,
                      type: "cache-miss",
                    },
              previewCacheResult: {
                cache: r.task.promise
                  .then(
                    o("WAMediaManagerTypes")
                      .transformInternalMediaDownloadResult,
                  )
                  .then(y),
                type: "cache-hit",
              },
            };
          }
          var i = await N(t.fullSizePlaintextHash, t.mediaDownloadFlow, !0),
            l = C(i);
          return i != null && l != null
            ? (R(t.mediaDownloadFlow, "hit", "fullsize-and-preview"),
              {
                fullsizeCacheResult: M(
                  k,
                  t.fullSizePlaintextHash,
                  t.mediaDownloadFlow,
                  i,
                ),
                previewCacheResult: M(
                  I,
                  t.fullSizePlaintextHash,
                  t.mediaDownloadFlow,
                  l,
                ),
              })
            : i != null
              ? (R(t.mediaDownloadFlow, "hit", "fullsize"),
                {
                  fullsizeCacheResult: M(
                    k,
                    t.fullSizePlaintextHash,
                    t.mediaDownloadFlow,
                    i,
                  ),
                  previewCacheResult: {
                    setDownloadCache: x,
                    setDownloadedAttachmentToUploadCache: P,
                    type: "cache-miss",
                  },
                })
              : l != null
                ? (R(t.mediaDownloadFlow, "hit", "preview"),
                  {
                    fullsizeCacheResult: {
                      setDownloadCache: D,
                      setDownloadedAttachmentToUploadCache: P,
                      type: "cache-miss",
                    },
                    previewCacheResult: M(
                      I,
                      t.fullSizePlaintextHash,
                      t.mediaDownloadFlow,
                      l,
                    ),
                  })
                : (R(t.mediaDownloadFlow, "miss", "fullsize-and-preview"),
                  {
                    fullsizeCacheResult: {
                      setDownloadCache: D,
                      setDownloadedAttachmentToUploadCache: P,
                      type: "cache-miss",
                    },
                    previewCacheResult: {
                      setDownloadCache: x,
                      setDownloadedAttachmentToUploadCache: P,
                      type: "cache-miss",
                    },
                  });
        },
        getPreview: async function (t) {
          var e = I.get(t.fullSizePlaintextHash);
          if (e != null)
            return (
              R(t.mediaDownloadFlow, "hit", "preview"),
              e.task.promote(
                o("WAMediaManager").toTaskSchedulerPriority(t.priority),
              ),
              {
                cache: e.task.promise
                  .then(
                    o("WAMediaManagerTypes")
                      .transformInternalMediaDownloadResult,
                  )
                  .then(y),
                type: "cache-hit",
              }
            );
          var n = await N(t.fullSizePlaintextHash, t.mediaDownloadFlow),
            r = C(n);
          return r != null
            ? (R(t.mediaDownloadFlow, "hit", "preview"),
              M(I, t.fullSizePlaintextHash, t.mediaDownloadFlow, r))
            : (R(t.mediaDownloadFlow, "miss", "preview"),
              {
                setDownloadCache: x,
                setDownloadedAttachmentToUploadCache: P,
                type: "cache-miss",
              });
        },
        getUploadedAttachment: function (t) {
          var e = T.get(t.plaintextHash);
          if (e == null)
            return { setUploadCache: $, type: "cache-miss-no-plaintext-hash" };
          var n = e.get(t.chatJid);
          return n == null
            ? { setUploadCache: $, type: "cache-miss-no-thread" }
            : { cache: n, type: "in-thread-cache-hit" };
        },
      };
    }
    function R(e, t, n) {
      e.addAnnotations({
        string: { media_manager_cache_result: t, media_manager_cache_type: n },
      });
    }
    function L(t) {
      var n = t.mediaKeyTimestamp,
        r = t.objectId,
        o = t.size,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return n == null || r == null || o == null
        ? null
        : babelHelpers.extends({}, a, {
            mediaKeyTimestamp: n,
            objectId: r,
            size: o,
          });
    }
    ((l.DOWNLOAD_TASK_CACHE_TTL_MS = b),
      (l.UPLOAD_TASK_CACHE_TTL_MS = v),
      (l.createAttachmentCache = S));
  },
  98,
);
