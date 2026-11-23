__d(
  "WAWebMediaMmsV4Upload",
  [
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
      C = new WeakMap();
    function b(e, t) {
      e.getUploadPromises().forEach(function (e) {
        if (e != null) {
          var n = C.get(e);
          n != null && (C.delete(e), n(t));
        }
      });
    }
    var v = {
      SUCCESS: "success",
      CANCELLATION: "cancellation",
      ERROR: "error",
      TIMEOUT: "timeout",
    };
    function S(e, t) {
      var n = R(e);
      return n != null && n === R(t);
    }
    function R(t) {
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
    function L(e, t, n) {
      var r = e.getUploadEntry(t);
      if (!(r instanceof o("WAWebMediaEntry").EncryptedMediaEntry)) return r;
      var a = R(n);
      if (a == null || R(r.type) === a) return r;
      var i = e.getUploadEntryMatching(t, function (e) {
        return (
          e instanceof o("WAWebMediaEntry").EncryptedMediaEntry &&
          E(e) &&
          e.validateForDownloads() &&
          R(e.type) === a
        );
      });
      return i == null ||
        !o("WAWebABProps").getABPropConfigValue(
          "web_media_fast_forward_match_key_type_entry_enabled",
        )
        ? r
        : i;
    }
    function E(e) {
      return (
        e.directPath != null &&
        o("WATimeUtils").happenedWithin(
          o("WATimeUtils").castToUnixTime(e.mediaKeyTimestamp),
          o("WAIsMediaKeyReusable").MMS_MEDIA_KEY_TTL,
        )
      );
    }
    async function k(e) {
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
        (S(h.type, _) ||
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
        b = await s;
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
        R = o("WAThrottle").throttle(function (e, t) {
          var n = e.loaded + t;
          Number.isFinite(n) && p.consolidate({ loadedSize: n });
        }, o("WAWebMmsConst").FILE_PROGRESS_THROTTLE_WAIT_MS),
        L = m ? m.key : h == null ? void 0 : h.getMediaKey(),
        E = m ? m.timestamp : h == null ? void 0 : h.getMediaKeyTimestamp(),
        k = await r("WAWebUploadManager").encryptAndUpload({
          blob: f != null ? f : a,
          mediaKey: L,
          mediaKeyTimestamp: E,
          type: _,
          signal: g,
          userUploadAttemptCount: p.userUploadAttemptCount,
          forwardedFromWeb: c,
          uploadOrigin: y,
          fileOrigin: u,
          onProgress: R,
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
    }
    async function I(e) {
      var t = e.blob,
        n = e.calculateToken,
        a = e.fileOrigin,
        i = e.isViewOnce,
        l = e.mediaObject,
        s = e.mediaType,
        u = e.plaintext,
        c = e.signal,
        d = e.uploadOrigin,
        m = u != null ? u : await o("WAWebFileUtils").blobToArrayBuffer(t),
        p = await o("WAMediaCalculateFilehash").calculateFilehash(m),
        _ = await r("WAWebUploadManager").unencryptedUpload({
          file: m,
          isViewOnce: i,
          signal: c,
          type: s,
          uploadOrigin: d,
          fileOrigin: a,
          hash: p,
          token: await (n == null ? void 0 : n(p)),
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
    }
    function T(e) {
      return x(e, k);
    }
    function D(e) {
      return x(e, I);
    }
    function x(e, t) {
      var n = e.calculateToken,
        a = e.canEnableFastForward,
        i = a === void 0 ? !0 : a,
        l = e.earlyUpload,
        p = e.fileOrigin,
        _ = e.forwardedFromWeb,
        f = e.isViewOnce,
        g = e.mediaKeyInfo,
        h = e.mediaObject,
        y = e.mediaType,
        b = e.mimetype,
        S = e.uploadEntry,
        R = e.uploadOrigin,
        E = g,
        k = h.getUploadPromise(y);
      if (k) return k;
      var I = new AbortController(),
        T = I.signal,
        D = null,
        x = Promise.resolve()
          .then(function () {
            h.consolidate({
              uploadStage: o("WAWebMediaTypes").UploadStage.UPLOADING,
            });
          })
          .then(function () {
            return N({
              mediaObject: h,
              mimetype: b,
              mediaType: y,
              abortSignal: T,
              uploadOrigin: R,
            });
          })
          .then(async function (e) {
            var a = await M(h.filehash, y, e),
              c;
            if (
              (i &&
                (c =
                  S !== void 0
                    ? S
                    : L(
                        h.entries,
                        o(
                          "WAWebMediaCryptoEligibilityUtils",
                        ).isMediaCryptoExpectedForMediaType(y),
                        y,
                      )),
              c instanceof o("WAWebMediaEntry").EncryptedMediaEntry &&
                E &&
                c.mediaKey !== E.key)
            ) {
              var d,
                m,
                g = E;
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "mediaKey mismatch, type: ",
                      "",
                    ])),
                  y,
                )
                .sendLogs("media-keys-not-the-same-" + y);
              var C = !h.entries.entries.some(function (e) {
                  return e.getMediaKey() === g.key;
                }),
                b = (d = c.mediaKey) == null ? void 0 : d.length,
                v = (m = g.key) == null ? void 0 : m.length;
              if (
                (o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[_uploadMediaAndManageErrors] isNew=",
                      " keyLen=",
                      "/",
                      "",
                    ])),
                  C,
                  b,
                  v,
                ),
                y === o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER)
              )
                E = null;
              else
                throw r("err")(
                  "uploadEntry.mediaKey and mediaKeyInfo.mediaKey should be the same",
                );
            }
            var k = await t({
              blob: e,
              plaintext: a,
              canEnableFastForward: i,
              forwardedFromWeb: _,
              mediaKeyInfo: E,
              mediaObject: h,
              mediaType: y,
              signal: T,
              uploadEntry: c,
              uploadOrigin: R,
              fileOrigin: p,
              isViewOnce: f,
              earlyUpload: l,
              calculateToken: n,
            });
            if (!k) throw r("err")("could not create media entry");
            if (
              (y === o("WAWebMmsMediaTypes").MEDIA_TYPES.PTT ||
                y === o("WAWebMmsMediaTypes").MEDIA_TYPES.AUDIO) &&
              !o("WAWebMediaDataUtils").canPlayOgg()
            )
              if (o("WAWebMediaDataUtils").shouldUseMediaCache(y)) {
                var I = h.filehash;
                if (I != null && I !== "" && h.mediaBlob) {
                  var D = await o("WAWebMediaLoad").transcode(
                    h.mediaBlob.formData(),
                  );
                  o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.put(
                    I,
                    D,
                  );
                }
              } else
                h.mediaBlob &&
                  (await o(
                    "WAWebMediaDataUtils",
                  ).attachBlobAndGatherAndSetMetadata(h, h.mediaBlob));
            return (
              await w(h.filehash, y, a != null ? a : e),
              a != null && (await A(h, a)),
              k
            );
          })
          .then(function (e) {
            if (T.aborted) throw new (o("WAAbortError").AbortError)();
            return (
              h.consolidate({
                uploadStage: o("WAWebMediaTypes").UploadStage.UPLOADED,
              }),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "MediaAlgo.uploadMedia: success",
                  ])),
              ),
              { kind: v.SUCCESS, mediaEntry: e }
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
                  P(y, D))
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
            h.clearUploadPromise(y, x);
          })
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebMediaLoadErrors").FileNotReadableError,
              function () {
                return (
                  h.consolidate({
                    uploadStage:
                      o("WAWebMediaTypes").UploadStage.ERROR_FILE_NOT_READABLE,
                  }),
                  { kind: v.ERROR }
                );
              },
            ),
          )
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebDownloadManagerErrors").MediaNotOnPhone,
              function () {
                return (
                  h.consolidate({
                    uploadStage: o("WAWebMediaTypes").UploadStage.ERROR_MISSING,
                  }),
                  { kind: v.ERROR }
                );
              },
            ),
          )
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebMmsClientErrors").MediaTooLargeError,
              function () {
                return (
                  h.consolidate({
                    uploadStage:
                      o("WAWebMediaTypes").UploadStage.ERROR_TOO_LARGE,
                  }),
                  { kind: v.ERROR }
                );
              },
            ),
          )
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebMmsClientErrors").MMSForbiddenError,
              function () {
                return (
                  h.consolidate({
                    uploadStage:
                      o("WAWebMediaTypes").UploadStage.ERROR_FORBIDDEN,
                  }),
                  { kind: v.ERROR }
                );
              },
            ),
          )
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebMmsClientErrors").MMSThrottleError,
              function () {
                return (
                  h.consolidate({
                    uploadStage:
                      o("WAWebMediaTypes").UploadStage.ERROR_THROTTLED,
                  }),
                  { kind: v.ERROR }
                );
              },
            ),
          )
          .catch(function (e) {
            return (
              h.consolidate({
                uploadStage: o("WAWebMediaTypes").UploadStage.NEED_UPLOAD,
              }),
              r("getErrorSafe")(e).name === o("WAAbortError").ABORT_ERROR
                ? { kind: v.CANCELLATION }
                : { kind: v.ERROR }
            );
          });
      return (
        C.set(x, function (e) {
          ((D = e), I.abort());
        }),
        h.setUploadPromise(x, y),
        x
      );
    }
    var $ = {
      user: "media-upload-cancel-origin-user",
      media_object_delete: "media-upload-cancel-origin-media_object_delete",
      download_error: "media-upload-cancel-origin-download_error",
      thumbnail: "media-upload-cancel-origin-thumbnail",
      unknown: "media-upload-cancel-origin-unknown",
    };
    function P(e, t) {
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
          .sendLogs($[n], { sampling: 0.1 });
      }
    }
    async function N(e) {
      var t,
        n = e.abortSignal,
        a = e.chatWid,
        i = e.mediaObject,
        l = e.mediaType,
        s = e.mimetype,
        u = e.uploadOrigin,
        c = O(i);
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
        await o("WAWebMediaMmsV4Download").downloadMedia({
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
        i.downloadStage === o("WAWebMediaTypes").DownloadStage.ERROR_MISSING)
      )
        throw new (o("WAWebDownloadManagerErrors").MediaNotOnPhone)();
      var p = O(i);
      if (p) return p;
      throw r("err")("can't upload media w/out mediaBlob after download");
    }
    async function M(e, t, n) {
      if (
        !F(e, t) ||
        n.size > r("WAWebMediaStoreLruImpl").SINGLE_ITEM_SIZE_LIMIT_IN_BYTES ||
        o("WAWebUploadManagerBase").shouldStreamEncrypt(t, n)
      )
        return null;
      try {
        return await o("WAWebFileUtils").blobToArrayBuffer(n);
      } catch (e) {
        return null;
      }
    }
    async function w(e, t, n) {
      var a = n instanceof ArrayBuffer ? n.byteLength : n.size;
      if (
        !(
          e == null ||
          !F(e, t) ||
          a > r("WAWebMediaStoreLruImpl").SINGLE_ITEM_SIZE_LIMIT_IN_BYTES
        )
      ) {
        var i;
        try {
          i =
            n instanceof ArrayBuffer
              ? n
              : await o("WAWebFileUtils").blobToArrayBuffer(n);
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
          await o("WAWebMediaStore").LruMediaStore.put(e, i);
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
    }
    async function A(e, t) {
      try {
        var n = e.mediaBlob;
        if (n == null || !(n.forceToBlob() instanceof File)) return;
        var a = await r("WAWebMediaOpaqueData").createFromData(t, n.type());
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
    }
    function F(e, t) {
      return e == null
        ? !1
        : (o("WAWebMediaDataUtils").shouldUseLruMediaStore(t) &&
            r("justknobx")._("2918")) ||
            r("WAWebEnvironment").isWindows;
    }
    function O(e) {
      var t = e.mediaBlob;
      if (t) return t.formData();
      if (!(e.filehash == null || e.filehash === ""))
        return o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
          e.filehash,
        );
    }
    ((l.cancelUploadMedia = b),
      (l.UploadMediaResultKind = v),
      (l.getUploadEntryForMediaType = L),
      (l.uploadMedia = T),
      (l.uploadUnencryptedMedia = D),
      (l.getOrDownloadBlob = N),
      (l.getBlobFromMediaObject = O));
  },
  98,
);
