__d(
  "WAWebMediaUploadMediaWithPrep",
  [
    "invariant",
    "Promise",
    "WALogger",
    "WAMediaCalculateFilehash",
    "WAWebABProps",
    "WAWebCanvasUtils",
    "WAWebCryptoRandomMediaKey",
    "WAWebImageUtils",
    "WAWebMediaConstants",
    "WAWebMediaEntry",
    "WAWebMediaGatingShouldClearUploadedBlobs",
    "WAWebMediaInMemoryKeyCache",
    "WAWebMediaMmsV4Upload",
    "WAWebMediaPrepHelpers",
    "WAWebMediaUploadMmsThumbnail",
    "WAWebMmsMediaTypes",
    "WAWebMsgType",
    "WAWebURLUtils",
    "WAWebWamEnumUploadOriginType",
    "asyncToGeneratorRuntime",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e, u, c, d, m;
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i,
            l,
            p,
            _,
            f = t.mediaObject;
          (f ||
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Assertion failed!",
                  ])),
              )
              .sendLogs("media-fault: incorrect media object for created msg"),
            f || s(0, 56330));
          var g = o("WAWebMmsMediaTypes").getMsgMediaType(t),
            h,
            y = (i = a.canEnableFastForward) != null ? i : !0;
          y === !0 &&
            (h = f.entries.getUploadEntry(
              a.isMediaCryptoExpectedForChat === !0,
            ));
          var C =
              h instanceof o("WAWebMediaEntry").EncryptedMediaEntry
                ? { key: h.mediaKey, timestamp: h.mediaKeyTimestamp }
                : r("WAWebCryptoRandomMediaKey")(),
            b = f.contentInfo,
            v = b.fullPreviewData,
            S = b.fullPreviewSize,
            R = t.safe(),
            L = o("WAWebMediaPrepHelpers").shouldUploadThumbnail(R),
            E = o("WAWebABProps").getABPropConfigValue(
              "wa_web_enable_status_hq_thumbnail",
            ),
            k = !1,
            I = !1;
          E
            ? ((k =
                (!v ||
                  v.size() >
                    o("WAWebMediaConstants")
                      .MICRO_THUMBNAIL_MAX_FILE_SIZE_BYTES) &&
                L),
              (I = R.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK && L))
            : ((k = !v && L), (I = L));
          var T = !S && L,
            D = t.body;
          if ((k || T || I) && f.contentInfo.preview)
            try {
              var x = yield o("WAWebImageUtils").base64ImageToCanvas(
                  f.contentInfo.preview.url(),
                ),
                $ = k
                  ? o("WAWebABProps").getABPropConfigValue(
                      "web_pdf_thumbnail_size_in_bytes",
                    )
                  : o("WAWebMediaConstants")
                      .MICRO_THUMBNAIL_MAX_FILE_SIZE_BYTES,
                P = yield o("WAWebCanvasUtils").generateMicroThumb(x, $, {
                  mimetype: "image/jpeg",
                  maxAttempts: 10,
                });
              ((v = f.contentInfo.preview),
                (S = { width: P.width, height: P.height }),
                (D = r("WAWebURLUtils").parseDataURL(P.dataUrl).data));
            } catch (e) {
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[media] microthumb generation failed, skipping: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("media-microthumb-generation-failed");
            }
          var N = v && S && L,
            M = v && N === !0 ? v : null,
            w = function (i) {
              var e;
              return M != null
                ? r("WAWebMediaUploadMmsThumbnail")({
                    thumbnail: M,
                    mediaKeyInfo: i,
                    mediaType: r("nullthrows")(
                      o("WAWebMediaPrepHelpers").getMediaTypeForThumbnails(R),
                    ),
                    uploadOrigin:
                      (e = a.uploadOriginForChat) != null
                        ? e
                        : o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE
                            .UNKNOWN,
                    fileOrigin: a.fileOrigin,
                    forwardedFromWeb: !!t.forwardedFromWeb,
                    isViewOnce: !!t.isViewOnce,
                  })
                : (m || (m = n("Promise"))).resolve(null);
            },
            A = w(C),
            F = {
              mimetype: t.mimetype,
              canEnableFastForward: a.canEnableFastForward,
              mediaObject: f,
              mediaType: g,
              forwardedFromWeb: !!t.forwardedFromWeb,
              uploadOrigin:
                (l = a.uploadOriginForChat) != null
                  ? l
                  : o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE
                      .UNKNOWN,
              fileOrigin: a.fileOrigin,
              isViewOnce: !!t.isViewOnce,
              earlyUpload: a.earlyUpload,
            },
            O =
              a.isMediaCryptoExpectedForChat === !0
                ? o("WAWebMediaMmsV4Upload").uploadMedia(
                    babelHelpers.extends({}, F, { mediaKeyInfo: C }),
                  )
                : o("WAWebMediaMmsV4Upload").uploadUnencryptedMedia(
                    babelHelpers.extends({}, F, {
                      calculateToken: o("WAMediaCalculateFilehash")
                        .getRandomFilehash,
                    }),
                  ),
            B = f.filehash;
          o("WAWebMediaInMemoryKeyCache").shouldUseMediaKeyCache() &&
            B != null &&
            o("WAWebMediaInMemoryKeyCache").MediaKeyCache.put(B, C);
          var W = yield (m || (m = n("Promise"))).all([O, A]),
            q = W[0],
            U = W[1],
            V = U;
          r("WAWebMediaGatingShouldClearUploadedBlobs")(g) &&
            f.clearBlob({ reset: !0 });
          var H = q.mediaEntry;
          if (!H)
            return {
              mediaResult: q,
              mmsThumbnailData: null,
              body: D,
              fbid: null,
            };
          o("WAWebMediaInMemoryKeyCache").shouldUseMediaKeyCache() &&
            B != null &&
            o("WAWebMediaInMemoryKeyCache").MediaKeyCache.delete(B);
          var G = N;
          if (
            M != null &&
            H instanceof o("WAWebMediaEntry").EncryptedMediaEntry &&
            H.getMediaKey() !== C.key &&
            o("WAWebABProps").getABPropConfigValue(
              "wa_web_media_thumbnail_key_match_enabled",
            )
          ) {
            o("WALogger")
              .WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[media] media key of the upload differs from the thumbnail's, uploading the thumbnail again, type: ",
                    "",
                  ])),
                g,
              )
              .sendLogs("media-thumbnail-key-mismatch");
            var z = yield w({
              key: H.getMediaKey(),
              timestamp: H.getMediaKeyTimestamp(),
            }).catch(function () {
              return null;
            });
            (z == null ? void 0 : z.kind) ===
            o("WAWebMediaMmsV4Upload").UploadMediaResultKind.SUCCESS
              ? (V = z)
              : (o("WALogger")
                  .WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[media] thumbnail re-upload failed, sending without it, type: ",
                        "",
                      ])),
                    g,
                  )
                  .sendLogs("media-thumbnail-key-mismatch-reupload-failed"),
                (G = !1));
          }
          var j =
              (p = o("WAWebMediaPrepHelpers").maybeGetThumbnailData({
                uploadThumbnailResult: V,
                mediaResultEntry: H,
                uploadEncryptedThumbnail: G,
                mediaObject: f,
                fullPreviewSize: S,
                mediaType: g,
              })) != null
                ? p
                : {},
            K =
              H instanceof o("WAWebMediaEntry").UnencryptedMediaEntry &&
              (_ = H.fbid) != null
                ? _
                : null;
          return { mediaResult: q, mmsThumbnailData: j, body: D, fbid: K };
        })),
        _.apply(this, arguments)
      );
    }
    l.uploadMediaWithPrep = p;
  },
  98,
);
