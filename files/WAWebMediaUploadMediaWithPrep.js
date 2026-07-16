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
    var e, u, c;
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i,
            l,
            d,
            m,
            p,
            _ = t.mediaObject;
          (_ ||
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Assertion failed!",
                  ])),
              )
              .sendLogs("media-fault: incorrect media object for created msg"),
            _ || s(0, 56330));
          var f = o("WAWebMmsMediaTypes").getMsgMediaType(t),
            g,
            h = (i = a.canEnableFastForward) != null ? i : !0;
          h === !0 &&
            (g = _.entries.getUploadEntry(
              a.isMediaCryptoExpectedForChat === !0,
            ));
          var y =
              g instanceof o("WAWebMediaEntry").EncryptedMediaEntry
                ? { key: g.mediaKey, timestamp: g.mediaKeyTimestamp }
                : r("WAWebCryptoRandomMediaKey")(),
            C = _.contentInfo,
            b = C.fullPreviewData,
            v = C.fullPreviewSize,
            S = t.safe(),
            R = o("WAWebMediaPrepHelpers").shouldUploadThumbnail(S),
            L = o("WAWebABProps").getABPropConfigValue(
              "wa_web_enable_status_hq_thumbnail",
            ),
            E = !1,
            k = !1;
          L
            ? ((E =
                (!b ||
                  b.size() >
                    o("WAWebMediaConstants")
                      .MICRO_THUMBNAIL_MAX_FILE_SIZE_BYTES) &&
                R),
              (k = S.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK && R))
            : ((E = !b && R), (k = R));
          var I = !v && R,
            T = t.body;
          if ((E || I || k) && _.contentInfo.preview)
            try {
              var D = yield o("WAWebImageUtils").base64ImageToCanvas(
                  _.contentInfo.preview.url(),
                ),
                x = E
                  ? o("WAWebABProps").getABPropConfigValue(
                      "web_pdf_thumbnail_size_in_bytes",
                    )
                  : o("WAWebMediaConstants")
                      .MICRO_THUMBNAIL_MAX_FILE_SIZE_BYTES,
                $ = yield o("WAWebCanvasUtils").generateMicroThumb(D, x, {
                  mimetype: "image/jpeg",
                  maxAttempts: 10,
                });
              ((b = _.contentInfo.preview),
                (v = { width: $.width, height: $.height }),
                (T = r("WAWebURLUtils").parseDataURL($.dataUrl).data));
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
          var P = b && v && R,
            N =
              b && P === !0
                ? r("WAWebMediaUploadMmsThumbnail")({
                    thumbnail: b,
                    mediaKeyInfo: y,
                    mediaType: r("nullthrows")(
                      o("WAWebMediaPrepHelpers").getMediaTypeForThumbnails(S),
                    ),
                    uploadOrigin:
                      (l = a.uploadOriginForChat) != null
                        ? l
                        : o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE
                            .UNKNOWN,
                    forwardedFromWeb: !!t.forwardedFromWeb,
                    isViewOnce: !!t.isViewOnce,
                  })
                : (c || (c = n("Promise"))).resolve(null),
            M = {
              mimetype: t.mimetype,
              canEnableFastForward: a.canEnableFastForward,
              mediaObject: _,
              mediaType: f,
              forwardedFromWeb: !!t.forwardedFromWeb,
              uploadOrigin:
                (d = a.uploadOriginForChat) != null
                  ? d
                  : o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE
                      .UNKNOWN,
              isViewOnce: !!t.isViewOnce,
              earlyUpload: a.earlyUpload,
            },
            w =
              a.isMediaCryptoExpectedForChat === !0
                ? o("WAWebMediaMmsV4Upload").uploadMedia(
                    babelHelpers.extends({}, M, { mediaKeyInfo: y }),
                  )
                : o("WAWebMediaMmsV4Upload").uploadUnencryptedMedia(
                    babelHelpers.extends({}, M, {
                      calculateToken: o("WAMediaCalculateFilehash")
                        .getRandomFilehash,
                    }),
                  ),
            A = _.filehash;
          o("WAWebMediaInMemoryKeyCache").shouldUseMediaKeyCache() &&
            A != null &&
            o("WAWebMediaInMemoryKeyCache").MediaKeyCache.put(A, y);
          var F = yield (c || (c = n("Promise"))).all([w, N]),
            O = F[0],
            B = F[1];
          r("WAWebMediaGatingShouldClearUploadedBlobs")(f) &&
            _.clearBlob({ reset: !0 });
          var W = O.mediaEntry;
          if (!W)
            return {
              mediaResult: O,
              mmsThumbnailData: null,
              body: T,
              fbid: null,
            };
          o("WAWebMediaInMemoryKeyCache").shouldUseMediaKeyCache() &&
            A != null &&
            o("WAWebMediaInMemoryKeyCache").MediaKeyCache.delete(A);
          var q =
              (m = o("WAWebMediaPrepHelpers").maybeGetThumbnailData({
                uploadThumbnailResult: B,
                mediaResultEntry: W,
                uploadEncryptedThumbnail: P,
                mediaObject: _,
                fullPreviewSize: v,
                mediaType: f,
              })) != null
                ? m
                : {},
            U =
              W instanceof o("WAWebMediaEntry").UnencryptedMediaEntry &&
              (p = W.fbid) != null
                ? p
                : null;
          return { mediaResult: O, mmsThumbnailData: q, body: T, fbid: U };
        })),
        m.apply(this, arguments)
      );
    }
    l.uploadMediaWithPrep = d;
  },
  98,
);
