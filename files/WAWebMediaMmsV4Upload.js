__d(
  "WAWebMediaMmsV4Upload",
  [
    "Promise",
    "WAAbortError",
    "WAFilteredCatch",
    "WAIsMediaKeyReusable",
    "WALogger",
    "WAMediaCalculateFilehash",
    "WAThrottle",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebCreateMediaUploadMetrics",
    "WAWebCryptoMediaTypeInfo",
    "WAWebDownloadManagerErrors",
    "WAWebEnvironment",
    "WAWebFileUtils",
    "WAWebHDMediaUtils",
    "WAWebMediaCryptoEligibilityUtils",
    "WAWebMediaDataUtils",
    "WAWebMediaEntry",
    "WAWebMediaGatingUtils",
    "WAWebMediaGetDownloadOriginFromUploadOrigin",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaLoad",
    "WAWebMediaLoadErrors",
    "WAWebMediaMmsV4Download",
    "WAWebMediaOpaqueData",
    "WAWebMediaStore",
    "WAWebMediaStoreLruImpl",
    "WAWebMediaTypes",
    "WAWebMmsClientErrors",
    "WAWebMmsConst",
    "WAWebMmsMediaTypes",
    "WAWebStartMediaUploadQpl",
    "WAWebUploadManager",
    "WAWebUploadManagerBase",
    "WAWebWamEnumWebcRmrReasonCode",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
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
      b = new WeakMap();
    function v(e, t) {
      e.getUploadPromises().forEach(function (e) {
        if (e != null) {
          var n = b.get(e);
          n != null && (b.delete(e), n(t));
        }
      });
    }
    var S = {
      SUCCESS: "success",
      CANCELLATION: "cancellation",
      ERROR: "error",
      TIMEOUT: "timeout",
    };
    function R(e, t) {
      var n = L(e);
      return n != null && n === L(t);
    }
    function L(t) {
      try {
        return o("WAWebCryptoMediaTypeInfo").getMediaTypeInfo(t);
      } catch (n) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[media-upload] no media key type for ",
                  "",
                ])),
              t,
            )
            .catching(r("getErrorSafe")(n))
            .sendLogs("upload-media-key-type-unknown"),
          null
        );
      }
    }
    function E(e, t, n) {
      var r = e.getUploadEntry(t);
      if (!(r instanceof o("WAWebMediaEntry").EncryptedMediaEntry)) return r;
      var a = L(n);
      if (a == null || L(r.type) === a) return r;
      var i = e.getUploadEntryMatching(t, function (e) {
        return (
          e instanceof o("WAWebMediaEntry").EncryptedMediaEntry &&
          k(e) &&
          e.validateForDownloads() &&
          L(e.type) === a
        );
      });
      return i == null ||
        !o("WAWebABProps").getABPropConfigValue(
          "web_media_fast_forward_match_key_type_entry_enabled",
        )
        ? r
        : i;
    }
    function k(e) {
      return (
        e.directPath != null &&
        o("WATimeUtils").happenedWithin(
          o("WATimeUtils").castToUnixTime(e.mediaKeyTimestamp),
          o("WAIsMediaKeyReusable").MMS_MEDIA_KEY_TTL,
        )
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            a = e.blob,
            i = e.canEnableFastForward,
            l = i === void 0 ? !0 : i,
            s = e.earlyUpload,
            u = e.fileOrigin,
            c = e.forwardedFromWeb,
            d = e.isViewOnce,
            m = e.mediaKeyInfo,
            p = e.mediaObject,
            _ = e.mediaType,
            f = e.plaintext,
            g = e.signal,
            h = e.uploadEntry,
            y = e.uploadOrigin,
            C = o("WAWebStartMediaUploadQpl").startMediaUploadQpl({
              entryPoint: "MediaUpload",
              mediaType: _,
              byteLength: a.size,
            });
          if (
            h instanceof o("WAWebMediaEntry").EncryptedMediaEntry &&
            h != null &&
            h.canReuseMediaKey() &&
            l &&
            (R(h.type, _) ||
              !o("WAWebABProps").getABPropConfigValue(
                "wa_web_media_fast_forward_same_key_type_enabled",
              ))
          )
            return (
              C.addAnnotations({
                string: { media_entry_dedupe_result: "fast-forward" },
              }),
              r("WAWebCreateMediaUploadMetrics")({
                type: _,
                uploadOrigin: y,
                fileOrigin: u,
                userUploadAttemptCount: 0,
                forwardedFromWeb: c,
                isViewOnce: d,
                uploadQpl: C,
              }).handleCheckExistingSuccess(),
              C.endSuccess(),
              h
            );
          var b;
          try {
            b = yield s;
          } catch (e) {
            throw (
              C.endFailWithError(
                "early_upload_failed",
                e instanceof Error ? e.message : String(e),
              ),
              e
            );
          }
          if (b != null)
            return (
              C.addPoint("early_upload_success"),
              C.endSuccess(),
              p.entries.addEntry({
                deprecatedMms3Url: b.url,
                mediaKey: b.mediaKey,
                mediaKeyTimestamp: b.mediaKeyTimestamp,
                encFilehash: b.encFilehash,
                type: _,
                sidecar: b.sidecar,
                directPath: b.directPath,
                firstFrameSidecar: b.firstFrameSidecar,
                debugHint: "upload",
              })
            );
          var v = function () {
              p.consolidate({
                uploadStage: o("WAWebMediaTypes").UploadStage.FINALIZING,
              });
            },
            S = o("WAThrottle").throttle(function (e, t) {
              var n = e.loaded + t;
              Number.isFinite(n) && p.consolidate({ loadedSize: n });
            }, o("WAWebMmsConst").FILE_PROGRESS_THROTTLE_WAIT_MS),
            L = m ? m.key : h == null ? void 0 : h.getMediaKey(),
            E = m ? m.timestamp : h == null ? void 0 : h.getMediaKeyTimestamp(),
            k = yield r("WAWebUploadManager").encryptAndUpload({
              blob: f != null ? f : a,
              mediaKey: L,
              mediaKeyTimestamp: E,
              type: _,
              signal: g,
              userUploadAttemptCount: p.userUploadAttemptCount,
              forwardedFromWeb: c,
              uploadOrigin: y,
              fileOrigin: u,
              onProgress: S,
              onFinalize: v,
              isViewOnce: d,
              isHdPhoto:
                _ === o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE &&
                o("WAWebHDMediaUtils").isHdPhoto(
                  (t = p.contentInfo.fullHeight) != null ? t : 0,
                  (n = p.contentInfo.fullWidth) != null ? n : 0,
                ),
              uploadQpl: C,
            }),
            I = k.directPath,
            T = k.encFilehash,
            D = k.firstFrameSidecar,
            x = k.mediaKey,
            $ = k.mediaKeyTimestamp,
            P = k.sidecar,
            N = k.url;
          return p.entries.addEntry({
            deprecatedMms3Url: N,
            mediaKey: x,
            mediaKeyTimestamp: $,
            encFilehash: T,
            type: _,
            sidecar: P,
            directPath: I,
            firstFrameSidecar: D,
            debugHint: "upload",
          });
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.blob,
            n = e.calculateToken,
            a = e.fileOrigin,
            i = e.isViewOnce,
            l = e.mediaObject,
            s = e.mediaType,
            u = e.plaintext,
            c = e.signal,
            d = e.uploadOrigin,
            m = u != null ? u : yield o("WAWebFileUtils").blobToArrayBuffer(t),
            p = yield o("WAMediaCalculateFilehash").calculateFilehash(m),
            _ = yield r("WAWebUploadManager").unencryptedUpload({
              file: m,
              isViewOnce: i,
              signal: c,
              type: s,
              uploadOrigin: d,
              fileOrigin: a,
              hash: p,
              token: yield n == null ? void 0 : n(p),
              generateThumbnailOnServer: o(
                "WAWebMediaGatingUtils",
              ).isThumbnailGenerationOnServerEnabledForMediaType(s),
            });
          return l.entries.addUnencryptedEntry({
            directPath: _.directPath,
            debugHint: "upload",
            filehash: p,
            type: s,
            handle: _.handle,
            metadataUrl: _.metadataUrl,
            dashManifestUrl: _.dashManifestUrl,
            thumbnailDirectPath: _.thumbnailDirectPath,
            thumbnailSha256: _.thumbnailSha256,
            fbid: _.fbid,
          });
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      return N(e, I);
    }
    function P(e) {
      return N(e, D);
    }
    function N(e, t) {
      var a = e.calculateToken,
        i = e.canEnableFastForward,
        l = i === void 0 ? !0 : i,
        p = e.earlyUpload,
        _ = e.fileOrigin,
        f = e.forwardedFromWeb,
        g = e.isViewOnce,
        h = e.mediaKeyInfo,
        y = e.mediaObject,
        v = e.mediaType,
        R = e.mimetype,
        L = e.uploadEntry,
        k = e.uploadOrigin,
        I = h,
        T = y.getUploadPromise(v);
      if (T) return T;
      var D = new AbortController(),
        x = D.signal,
        $ = null,
        P = (C || (C = n("Promise")))
          .resolve()
          .then(function () {
            y.consolidate({
              uploadStage: o("WAWebMediaTypes").UploadStage.UPLOADING,
            });
          })
          .then(function () {
            return A({
              mediaObject: y,
              mimetype: R,
              mediaType: v,
              abortSignal: x,
              uploadOrigin: k,
            });
          })
          .then(
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var n = yield O(y.filehash, v, e),
                    i;
                  if (
                    (l &&
                      (i =
                        L !== void 0
                          ? L
                          : E(
                              y.entries,
                              o(
                                "WAWebMediaCryptoEligibilityUtils",
                              ).isMediaCryptoExpectedForMediaType(v),
                              v,
                            )),
                    i instanceof o("WAWebMediaEntry").EncryptedMediaEntry &&
                      I &&
                      i.mediaKey !== I.key)
                  ) {
                    var c,
                      d,
                      m = I;
                    o("WALogger")
                      .ERROR(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "mediaKey mismatch, type: ",
                            "",
                          ])),
                        v,
                      )
                      .sendLogs("media-keys-not-the-same-" + v);
                    var h = !y.entries.entries.some(function (e) {
                        return e.getMediaKey() === m.key;
                      }),
                      C = (c = i.mediaKey) == null ? void 0 : c.length,
                      b = (d = m.key) == null ? void 0 : d.length;
                    if (
                      (o("WALogger").LOG(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[_uploadMediaAndManageErrors] isNew=",
                            " keyLen=",
                            "/",
                            "",
                          ])),
                        h,
                        C,
                        b,
                      ),
                      v === o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER)
                    )
                      I = null;
                    else
                      throw r("err")(
                        "uploadEntry.mediaKey and mediaKeyInfo.mediaKey should be the same",
                      );
                  }
                  var S = yield t({
                    blob: e,
                    plaintext: n,
                    canEnableFastForward: l,
                    forwardedFromWeb: f,
                    mediaKeyInfo: I,
                    mediaObject: y,
                    mediaType: v,
                    signal: x,
                    uploadEntry: i,
                    uploadOrigin: k,
                    fileOrigin: _,
                    isViewOnce: g,
                    earlyUpload: p,
                    calculateToken: a,
                  });
                  if (!S) throw r("err")("could not create media entry");
                  if (
                    (v === o("WAWebMmsMediaTypes").MEDIA_TYPES.PTT ||
                      v === o("WAWebMmsMediaTypes").MEDIA_TYPES.AUDIO) &&
                    !o("WAWebMediaDataUtils").canPlayOgg()
                  )
                    if (o("WAWebMediaDataUtils").shouldUseMediaCache(v)) {
                      var R = y.filehash;
                      if (R != null && R !== "" && y.mediaBlob) {
                        var T = yield o("WAWebMediaLoad").transcode(
                          y.mediaBlob.formData(),
                        );
                        o(
                          "WAWebMediaInMemoryBlobCache",
                        ).InMemoryMediaBlobCache.put(R, T);
                      }
                    } else
                      y.mediaBlob &&
                        (yield o(
                          "WAWebMediaDataUtils",
                        ).attachBlobAndGatherAndSetMetadata(y, y.mediaBlob));
                  return (
                    yield W(y.filehash, v, n != null ? n : e),
                    n != null && (yield U(y, n)),
                    S
                  );
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          )
          .then(function (e) {
            if (x.aborted) throw new (o("WAAbortError").AbortError)();
            return (
              y.consolidate({
                uploadStage: o("WAWebMediaTypes").UploadStage.UPLOADED,
              }),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "MediaAlgo.uploadMedia: success",
                  ])),
              ),
              { kind: S.SUCCESS, mediaEntry: e }
            );
          })
          .catch(function (e) {
            var t = r("getErrorSafe")(e);
            throw (
              t.name === o("WAAbortError").ABORT_ERROR
                ? (o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "MediaAlgo.uploadMedia: canceled",
                      ])),
                  ),
                  w(v, $))
                : o("WALogger")
                    .WARN(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "MediaAlgo.uploadMedia",
                        ])),
                    )
                    .catching(t),
              e
            );
          })
          .finally(function () {
            y.clearUploadPromise(v, P);
          })
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebMediaLoadErrors").FileNotReadableError,
              function () {
                return (
                  y.consolidate({
                    uploadStage:
                      o("WAWebMediaTypes").UploadStage.ERROR_FILE_NOT_READABLE,
                  }),
                  { kind: S.ERROR }
                );
              },
            ),
          )
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebDownloadManagerErrors").MediaNotOnPhone,
              function () {
                return (
                  y.consolidate({
                    uploadStage: o("WAWebMediaTypes").UploadStage.ERROR_MISSING,
                  }),
                  { kind: S.ERROR }
                );
              },
            ),
          )
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebMmsClientErrors").MediaTooLargeError,
              function () {
                return (
                  y.consolidate({
                    uploadStage:
                      o("WAWebMediaTypes").UploadStage.ERROR_TOO_LARGE,
                  }),
                  { kind: S.ERROR }
                );
              },
            ),
          )
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebMmsClientErrors").MMSForbiddenError,
              function () {
                return (
                  y.consolidate({
                    uploadStage:
                      o("WAWebMediaTypes").UploadStage.ERROR_FORBIDDEN,
                  }),
                  { kind: S.ERROR }
                );
              },
            ),
          )
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebMmsClientErrors").MMSThrottleError,
              function () {
                return (
                  y.consolidate({
                    uploadStage:
                      o("WAWebMediaTypes").UploadStage.ERROR_THROTTLED,
                  }),
                  { kind: S.ERROR }
                );
              },
            ),
          )
          .catch(function (e) {
            return (
              y.consolidate({
                uploadStage: o("WAWebMediaTypes").UploadStage.NEED_UPLOAD,
              }),
              r("getErrorSafe")(e).name === o("WAAbortError").ABORT_ERROR
                ? { kind: S.CANCELLATION }
                : { kind: S.ERROR }
            );
          });
      return (
        b.set(P, function (e) {
          (($ = e), D.abort());
        }),
        y.setUploadPromise(P, v),
        P
      );
    }
    var M = {
      user: "media-upload-cancel-origin-user",
      media_object_delete: "media-upload-cancel-origin-media_object_delete",
      download_error: "media-upload-cancel-origin-download_error",
      thumbnail: "media-upload-cancel-origin-thumbnail",
      unknown: "media-upload-cancel-origin-unknown",
    };
    function w(e, t) {
      if (
        o("WAWebABProps").getABPropConfigValue(
          "web_media_fast_forward_match_key_type_entry_enabled",
        )
      ) {
        var n = t != null ? t : "unknown";
        o("WALogger")
          .LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[media-upload] upload cancelled, origin: ",
                ", type: ",
                "",
              ])),
            n,
            e,
          )
          .sendLogs(M[n], { sampling: 0.1 });
      }
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.abortSignal,
            a = e.chatWid,
            i = e.mediaObject,
            l = e.mediaType,
            s = e.mimetype,
            u = e.uploadOrigin,
            c = G(i);
          if (c) return c;
          var d = (t = i.filehash) != null ? t : "none",
            m = i.entries.entries.length;
          if (
            (o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "getOrDownloadBlob: no blob fh=",
                  " type=",
                  " msgs=",
                  " entries=",
                  " dlStage=",
                  "",
                ])),
              d,
              l,
              i.msgs.length,
              m,
              i.downloadStage,
            ),
            yield o("WAWebMediaMmsV4Download").downloadMedia({
              mimetype: s,
              mediaObject: i,
              downloadEvenIfExpensive: !0,
              mediaType: l,
              signal: n,
              rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
                .UPLOAD,
              downloadOrigin: o(
                "WAWebMediaGetDownloadOriginFromUploadOrigin",
              ).getDownloadOriginFromUploadOrigin(u),
              mode: "manual",
              chatWid: a,
            }),
            i.downloadStage ===
              o("WAWebMediaTypes").DownloadStage.ERROR_MISSING)
          )
            throw new (o("WAWebDownloadManagerErrors").MediaNotOnPhone)();
          var p = G(i);
          if (p) return p;
          throw r("err")("can't upload media w/out mediaBlob after download");
        })),
        F.apply(this, arguments)
      );
    }
    function O(e, t, n) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (
            !H(e, t) ||
            n.size >
              r("WAWebMediaStoreLruImpl").SINGLE_ITEM_SIZE_LIMIT_IN_BYTES ||
            o("WAWebUploadManagerBase").shouldStreamEncrypt(t, n)
          )
            return null;
          try {
            return yield o("WAWebFileUtils").blobToArrayBuffer(n);
          } catch (e) {
            return null;
          }
        })),
        B.apply(this, arguments)
      );
    }
    function W(e, t, n) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = n instanceof ArrayBuffer ? n.byteLength : n.size;
          if (
            !(
              e == null ||
              !H(e, t) ||
              a > r("WAWebMediaStoreLruImpl").SINGLE_ITEM_SIZE_LIMIT_IN_BYTES
            )
          ) {
            var i;
            try {
              i =
                n instanceof ArrayBuffer
                  ? n
                  : yield o("WAWebFileUtils").blobToArrayBuffer(n);
            } catch (e) {
              o("WALogger")
                .LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[media-upload] sent media no longer readable to file for reuse",
                    ])),
                )
                .catching(r("getErrorSafe")(e));
              return;
            }
            try {
              yield o("WAWebMediaStore").LruMediaStore.put(e, i);
            } catch (e) {
              if (e instanceof DOMException) {
                o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "[media-upload] browser refused to file the sent media for reuse: ",
                      "",
                    ])),
                  e.name,
                );
                return;
              }
              o("WALogger")
                .WARN(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "[media-upload] could not file the sent media for reuse",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("upload-lru-store-write-failed");
            }
          }
        })),
        q.apply(this, arguments)
      );
    }
    function U(e, t) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n = e.mediaBlob;
            if (n == null || !(n.forceToBlob() instanceof File)) return;
            var a = yield r("WAWebMediaOpaqueData").createFromData(t, n.type());
            e.consolidate({ mediaBlob: a });
            var i = e.filehash;
            (i != null &&
              o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
                i,
              ) instanceof File &&
              o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.replace(
                i,
                a.forceToBlob(),
              ),
              a.autorelease());
          } catch (e) {
            o("WALogger")
              .WARN(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[media-upload] could not keep the sent media in memory",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          }
        })),
        V.apply(this, arguments)
      );
    }
    function H(e, t) {
      return e == null
        ? !1
        : (o("WAWebMediaDataUtils").shouldUseLruMediaStore(t) &&
            r("justknobx")._("2918")) ||
            r("WAWebEnvironment").isWindows;
    }
    function G(e) {
      var t = e.mediaBlob;
      if (t) return t.formData();
      if (!(e.filehash == null || e.filehash === ""))
        return o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
          e.filehash,
        );
    }
    ((l.cancelUploadMedia = v),
      (l.UploadMediaResultKind = S),
      (l.getUploadEntryForMediaType = E),
      (l.uploadMedia = $),
      (l.uploadUnencryptedMedia = P),
      (l.getOrDownloadBlob = A),
      (l.getBlobFromMediaObject = G));
  },
  98,
);
