__d(
  "WAMediaManager",
  [
    "$InternalEnum",
    "TaskSchedulerPriority",
    "WADownloadFullSizeAndPreviewTask",
    "WADownloadFullSizeOnlyTask",
    "WADownloadPreviewOnlyTask",
    "WAErrorMessage",
    "WAHashUtils",
    "WAMediaManagerCache",
    "WAMediaManagerLogger",
    "WAMediaManagerTypes",
    "WAMediaManagerWorkerScheduler",
    "WAResultOrError",
    "WAUploadMediaQuick",
    "cr:17641",
    "cr:7145",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S = n("$InternalEnum").Mirrored(["CRITICAL", "HIGH", "MEDIUM", "LOW"]);
    function R() {
      return {
        fullsizeCache: new Map(),
        previewCache: new Map(),
        uploadCache: new Map(),
      };
    }
    function L(t) {
      var r = t.blobStorage,
        a = t.createCacheState,
        i = t.dbCallbacks,
        l = t.mediaKeyStore,
        v = t.scheduler,
        S =
          v != null
            ? v
            : o("WAMediaManagerWorkerScheduler").mediaManagerWorkerScheduler(),
        R =
          n("cr:17641") != null && r != null
            ? n("cr:17641").createAttachmentCache(
                babelHelpers.extends({}, r, l, {
                  getMediaEntries: i.getMediaEntries,
                  getProtocolMsgIdAndSortOrderMs:
                    i.getProtocolMsgIdAndSortOrderMs,
                }),
              )
            : null,
        L = R != null ? "cache_storage" : "indexeddb",
        I = i.getChunkWithPreviewFlagByPlaintextHash,
        T =
          R != null && n("cr:7145") != null && I != null
            ? n("cr:7145").createLegacyChunkFallback({
                getChunkWithPreviewFlagByPlaintextHash: I,
                getMediaEntries: i.getMediaEntries,
                writeCiphertext: R.writeCiphertext,
              })
            : null,
        M =
          R != null
            ? R
            : o("WAMediaManagerCache").createAttachmentCache(
                i.getProtocolMsgIdAndSortOrderMs,
                i.deleteChunkByPlaintextHash,
                i.getChunkByPlaintextHash,
                i.getMediaEntries,
                i.storeChunkByPlaintextHash,
                a,
                i.getChunkWithPreviewFlagByPlaintextHash,
              ),
        w = async function (n, r) {
          var t = o("WAMediaManagerLogger").createDownloadLogger({
              downloadKind: "fullsize",
              fullSizePlaintextHash: n.fullSizePlaintextHash,
            }),
            a = r != null ? r : await M.getFullsize(n);
          if (
            (t.DEV(
              e || (e = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
              a.type,
            ),
            a.type === "cache-hit")
          )
            return D(n.mediaDownloadFlow, a.cache);
          var l = new AbortController(),
            c = S.run(
              function () {
                var e = o(
                  "WADownloadFullSizeOnlyTask",
                ).startDownloadFullSizeTask({
                  abortSignal: l.signal,
                  dbCallbacks: i,
                  fullSizePlaintextHash: n.fullSizePlaintextHash,
                  logger: t,
                  mediaDownloadFlow: n.mediaDownloadFlow,
                  onCiphertext:
                    R == null
                      ? null
                      : function (e) {
                          return R.writeCiphertext(e, n.mediaDownloadFlow);
                        },
                });
                return T == null
                  ? e
                  : e.then(function (e) {
                      var t = e.fullsizePromise;
                      return {
                        fullsizePromise: T.recover({
                          abortSignal: l.signal,
                          fullSizePlaintextHash: n.fullSizePlaintextHash,
                          kind: "fullsize",
                          mediaDownloadFlow: n.mediaDownloadFlow,
                          networkResult: t,
                        }),
                      };
                    });
              },
              {
                name: "media-manager-download-fullsize-only",
                priority: E(n.priority),
              },
            ),
            d = c.promise;
          return (
            a.setDownloadCache({
              abortController: l,
              fullSizePlaintextHash: n.fullSizePlaintextHash,
              mediaDownloadFlow: n.mediaDownloadFlow,
              scheduledTask: k(c, function (e) {
                return e.fullsizePromise;
              }),
            }),
            d
              .then(function (e) {
                return e.fullsizePromise;
              })
              .then(function (e) {
                return P(
                  n.fullSizePlaintextHash,
                  e,
                  a.setDownloadedAttachmentToUploadCache,
                );
              })
              .catch(function (e) {
                return (
                  t.ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "runtime-error: ",
                        "",
                      ])),
                    o("WAErrorMessage").maybeGetMessageFromError(e),
                  ),
                  o("WAResultOrError").makeError("runtime-error")
                );
              })
              .finally(function () {
                t.DEV(
                  u || (u = babelHelpers.taggedTemplateLiteralLoose(["end"])),
                );
              })
          );
        },
        A = async function (t, n) {
          var e = o("WAMediaManagerLogger").createDownloadLogger({
              downloadKind: "preview",
              fullSizePlaintextHash: t.fullSizePlaintextHash,
            }),
            r = n != null ? n : await M.getPreview(t);
          if (
            (e.DEV(
              c || (c = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
              r.type,
            ),
            r.type === "cache-hit")
          )
            return D(t.mediaDownloadFlow, r.cache);
          var a = new AbortController(),
            l = S.run(
              function () {
                var n = o("WADownloadPreviewOnlyTask").startDownloadPreviewTask(
                  {
                    abortSignal: a.signal,
                    dbCallbacks: i,
                    fullSizePlaintextHash: t.fullSizePlaintextHash,
                    logger: e,
                    mediaDownloadFlow: t.mediaDownloadFlow,
                    onCiphertext:
                      R == null
                        ? null
                        : function (e) {
                            return R.writeCiphertext(e, t.mediaDownloadFlow);
                          },
                  },
                );
                return T == null
                  ? n
                  : n.then(function (e) {
                      var n = e.previewPromise;
                      return {
                        previewPromise: T.recover({
                          abortSignal: a.signal,
                          fullSizePlaintextHash: t.fullSizePlaintextHash,
                          kind: "preview",
                          mediaDownloadFlow: t.mediaDownloadFlow,
                          networkResult: n,
                        }),
                      };
                    });
              },
              {
                name: "media-manager-download-preview-only",
                priority: E(t.priority),
              },
            );
          r.setDownloadCache({
            abortController: a,
            fullSizePlaintextHash: t.fullSizePlaintextHash,
            mediaDownloadFlow: t.mediaDownloadFlow,
            scheduledTask: k(l, function (e) {
              return e.previewPromise;
            }),
          });
          var s = l.promise;
          return s
            .then(function (e) {
              return e.previewPromise;
            })
            .then(function (e) {
              return N(e, r.setDownloadedAttachmentToUploadCache);
            })
            .catch(function (t) {
              return (
                e.ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "runtime-error: ",
                      "",
                    ])),
                  o("WAErrorMessage").maybeGetMessageFromError(t),
                ),
                o("WAResultOrError").makeError("runtime-error")
              );
            })
            .finally(function () {
              e.DEV(
                m || (m = babelHelpers.taggedTemplateLiteralLoose(["end"])),
              );
            });
        },
        F = function (t) {
          var e = o("WAMediaManagerLogger").createDownloadLogger({
              downloadKind: "fullsizeAndPreview",
              fullSizePlaintextHash: t.fullSizePlaintextHash,
            }),
            n = M.getFullsizeAndPreview(t),
            r = n.then(function (n) {
              var r = n.fullsizeCacheResult,
                a = n.previewCacheResult;
              if (
                (e.DEV(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "fullsize: ",
                      ", preview: ",
                      "",
                    ])),
                  r.type,
                  a.type,
                ),
                r.type === "cache-hit" && a.type === "cache-hit")
              )
                return {
                  fullsizePromise: D(t.mediaDownloadFlow, r.cache),
                  previewPromise: a.cache,
                };
              if (a.type === "cache-hit") {
                var l = w(t, R != null ? r : null);
                return {
                  fullsizePromise: l,
                  previewPromise: D(t.mediaDownloadFlow, a.cache),
                };
              }
              if (r.type === "cache-hit") {
                var s = A(t, R != null ? a : null);
                return {
                  fullsizePromise: D(t.mediaDownloadFlow, r.cache),
                  previewPromise: s,
                };
              }
              (r.type, a.type);
              var u = new AbortController(),
                c = S.run(
                  function () {
                    var n = o(
                      "WADownloadFullSizeAndPreviewTask",
                    ).startDownloadFullSizeAndPreviewTask({
                      abortSignal: u.signal,
                      dbCallbacks: i,
                      fullSizePlaintextHash: t.fullSizePlaintextHash,
                      logger: e,
                      mediaDownloadFlow: t.mediaDownloadFlow,
                      onCiphertext:
                        R == null
                          ? null
                          : function (e) {
                              return R.writeCiphertext(e, t.mediaDownloadFlow);
                            },
                      recoverPreview:
                        T == null
                          ? null
                          : function (e, n) {
                              return T.recover({
                                abortSignal: u.signal,
                                fullSizePlaintextHash: t.fullSizePlaintextHash,
                                kind: "preview",
                                mediaDownloadFlow: n,
                                networkResult: e,
                              });
                            },
                    });
                    return T == null
                      ? n
                      : n.then(function (e) {
                          var n = e.fullsizePromise,
                            r = e.previewPromise;
                          return {
                            fullsizePromise: T.recover({
                              abortSignal: u.signal,
                              fullSizePlaintextHash: t.fullSizePlaintextHash,
                              kind: "fullsize",
                              mediaDownloadFlow: t.mediaDownloadFlow,
                              networkResult: n,
                            }),
                            previewPromise: T.recover({
                              abortSignal: u.signal,
                              fullSizePlaintextHash: t.fullSizePlaintextHash,
                              kind: "preview",
                              mediaDownloadFlow: t.mediaDownloadFlow,
                              networkResult: r,
                            }),
                          };
                        });
                  },
                  {
                    name: "media-manager-download-fullsize-and-preview",
                    priority: E(t.priority),
                  },
                );
              (r.setDownloadCache({
                abortController: u,
                fullSizePlaintextHash: t.fullSizePlaintextHash,
                mediaDownloadFlow: t.mediaDownloadFlow,
                scheduledTask: k(c, function (e) {
                  return e.fullsizePromise;
                }),
              }),
                a.setDownloadCache({
                  abortController: u,
                  fullSizePlaintextHash: t.fullSizePlaintextHash,
                  mediaDownloadFlow: t.mediaDownloadFlow,
                  scheduledTask: k(c, function (e) {
                    return e.previewPromise;
                  }),
                }));
              var d = c.promise;
              return {
                fullsizePromise: d
                  .then(function (e) {
                    return e.fullsizePromise;
                  })
                  .then(function (e) {
                    return P(
                      t.fullSizePlaintextHash,
                      e,
                      r.setDownloadedAttachmentToUploadCache,
                    );
                  })
                  .catch(function (t) {
                    return (
                      e.ERROR(
                        _ ||
                          (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "fullsizePromise runtime-error: ",
                            "",
                          ])),
                        o("WAErrorMessage").maybeGetMessageFromError(t),
                      ),
                      o("WAResultOrError").makeError("runtime-error")
                    );
                  })
                  .finally(function () {
                    e.DEV(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "fullsize end",
                        ])),
                    );
                  }),
                previewPromise: d
                  .then(function (e) {
                    return e.previewPromise;
                  })
                  .then(function (e) {
                    return N(e, a.setDownloadedAttachmentToUploadCache);
                  })
                  .catch(function (t) {
                    return (
                      e.ERROR(
                        g ||
                          (g = babelHelpers.taggedTemplateLiteralLoose([
                            "previewPromise runtime-error: ",
                            "",
                          ])),
                        o("WAErrorMessage").maybeGetMessageFromError(t),
                      ),
                      o("WAResultOrError").makeError("runtime-error")
                    );
                  })
                  .finally(function () {
                    e.DEV(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
                          "preview end",
                        ])),
                    );
                  }),
              };
            });
          return {
            fullsizePromise: r.then(function (e) {
              return e.fullsizePromise;
            }),
            previewPromise: r.then(function (e) {
              return e.previewPromise;
            }),
          };
        },
        O = function (t) {
          var e = o("WAMediaManagerLogger").createUploadLogger({
              plaintextHash: t.plaintextHash,
              uploadKind: "fullsize",
            }),
            n = M.getUploadedAttachment(t);
          if (
            (e.DEV(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "cache result: ",
                  "",
                ])),
              n.type,
            ),
            t.mediaUploadFlow.addAnnotations({
              string: { dedupe_result: n.type },
            }),
            n.type === "in-thread-cache-hit")
          )
            return n.cache;
          var r = o("WAUploadMediaQuick")
            .uploadMediaQuick({
              logger: e,
              mediaUploadFlow: t.mediaUploadFlow,
              onCiphertext:
                R == null
                  ? null
                  : function (e) {
                      return R.writeCiphertext(e, t.mediaUploadFlow);
                    },
              plaintext: t.plaintext,
              plaintextHash: t.plaintextHash,
              serverMediaType: t.serverMediaType,
            })
            .catch(function (t) {
              return (
                e.ERROR(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "runtime-error: ",
                      "",
                    ])),
                  o("WAErrorMessage").maybeGetMessageFromError(t),
                ),
                o("WAResultOrError").makeError("runtime-error")
              );
            })
            .finally(function () {
              e.DEV(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose(["upload end"])),
              );
            });
          return (
            n != null &&
              n.setUploadCache({
                chatJid: t.chatJid,
                plaintextHash: t.plaintextHash,
                scheduledTask: r,
              }),
            r
          );
        };
      return {
        clearCache: M.clearCache,
        dequeueDownload: M.cancelTask,
        enqueueDownloadFullSize: x("fullsize", L, w),
        enqueueDownloadFullSizeAndPreview: x("fullsizeAndPreview", L, F),
        enqueueDownloadPreview: x("preview", L, A),
        enqueueUploadFullSize: $(L, O),
        readStoredPlaintext: R == null ? void 0 : R.readStoredPlaintext,
      };
    }
    function E(e) {
      return e === S.CRITICAL
        ? o("TaskSchedulerPriority").BLOCKING_PRIORITY
        : e === S.HIGH
          ? o("TaskSchedulerPriority").HIGH_PRIORITY
          : e === S.MEDIUM
            ? o("TaskSchedulerPriority").NORMAL_PRIORITY
            : e === S.LOW
              ? o("TaskSchedulerPriority").BACKGROUND_PRIORITY
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function k(e, t) {
      return babelHelpers.extends({}, e, { promise: e.promise.then(t) });
    }
    var I =
        typeof ((v = navigator.storage) == null ? void 0 : v.getDirectory) ==
        "function",
      T = typeof self.caches == "object";
    function D(e, t) {
      return t.then(function (t) {
        return (
          t.success &&
            e.addAnnotations({
              string: { mediaType: t.value.serverMediaType },
            }),
          t
        );
      });
    }
    function x(e, t, n) {
      return function (r) {
        var a = r.fullSizePlaintextHash,
          i = r.mediaDownloadFlow;
        try {
          i.addPoint("enqueue_start", {
            bool: { isOPFSSupported: I, isWebCacheSupported: T },
            string: {
              downloadKind: e,
              media_storage: t,
              sanitisedMediaHash: o("WAHashUtils").sanitisePlaintextHash(a),
            },
          });
          var l = n(r);
          return (i.addPoint("enqueue_end"), l);
        } catch (e) {
          throw (i.addPoint("enqueue_fail"), e);
        }
      };
    }
    function $(e, t) {
      return function (n) {
        var r = n.mediaUploadFlow,
          a = n.plaintextHash;
        try {
          r.addPoint("enqueue_start", {
            string: {
              media_storage: e,
              sanitisedMediaHash: o("WAHashUtils").sanitisePlaintextHash(a),
            },
          });
          var i = t(n);
          return (r.addPoint("enqueue_end"), i);
        } catch (e) {
          throw (r.addPoint("enqueue_fail"), e);
        }
      };
    }
    function P(e, t, n) {
      if (!t.success) return t;
      var r = t.value.msgIdAndMediaEntry;
      if (r == null)
        return o("WAMediaManagerTypes").transformInternalMediaDownloadResult(t);
      var a = r[0],
        i = r[1];
      return (
        n({ mediaEntry: i, msgId: a, plaintextHash: e }),
        o("WAMediaManagerTypes").transformInternalMediaDownloadResult(t)
      );
    }
    function N(e, t) {
      if (!e.success) return e;
      var n = e.value.msgIdAndMediaEntry;
      if (n == null)
        return o("WAMediaManagerTypes").transformInternalMediaDownloadResult(e);
      var r = n[0],
        a = n[1],
        i = a.downloadableThumbnail;
      return (
        i == null ||
          i.directPath == null ||
          i.fileEncSha256 == null ||
          i.fileSha256 == null ||
          i.mediaKey == null ||
          i.mediaKeyTimestamp == null ||
          i.objectId == null ||
          t({
            mediaEntry: babelHelpers.extends({}, a, {
              directPath: i.directPath,
              downloadableThumbnail: null,
              fileSha256: i.fileSha256,
              mediaKey: i.mediaKey,
              mediaKeyTimestamp: i.mediaKeyTimestamp,
              objectId: i.objectId,
              serverMediaType: "preview",
              size: e.value.validatedResult.validatedPlaintext.byteLength,
            }),
            msgId: r,
            plaintextHash: o("WAHashUtils").toPlaintextHash(i.fileSha256),
          }),
        o("WAMediaManagerTypes").transformInternalMediaDownloadResult(e)
      );
    }
    ((l.MediaTaskPriority = S),
      (l.createCacheState = R),
      (l.createMediaManager = L),
      (l.toTaskSchedulerPriority = E));
  },
  98,
);
