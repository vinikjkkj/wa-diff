__d(
  "WAWebMediaUploadMediaWithPrep",
  [
    "invariant",
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
    "WAWebNullFunc",
    "WAWebURLUtils",
    "WAWebWamEnumUploadOriginType",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e, u, c, d;
    async function m(t, n) {
      var a,
        i,
        l,
        m,
        p = t.mediaObject;
      (p ||
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Assertion failed!",
              ])),
          )
          .sendLogs("media-fault: incorrect media object for created msg"),
        p || s(0, 56330));
      var _ = o("WAWebMmsMediaTypes").getMsgMediaType(t),
        f,
        g = (a = n.canEnableFastForward) != null ? a : !0;
      g === !0 &&
        (f = o("WAWebMediaMmsV4Upload").getUploadEntryForMediaType(
          p.entries,
          n.isMediaCryptoExpectedForChat === !0,
          _,
        ));
      var h =
          f instanceof o("WAWebMediaEntry").EncryptedMediaEntry
            ? { key: f.mediaKey, timestamp: f.mediaKeyTimestamp }
            : r("WAWebCryptoRandomMediaKey")(),
        y = p.contentInfo,
        C = y.fullPreviewData,
        b = y.fullPreviewSize,
        v = t.safe(),
        S = o("WAWebMediaPrepHelpers").shouldUploadThumbnail(v),
        R = o("WAWebABProps").getABPropConfigValue(
          "wa_web_enable_status_hq_thumbnail",
        ),
        L = !1,
        E = !1;
      R
        ? ((L =
            (!C ||
              C.size() >
                o("WAWebMediaConstants").MICRO_THUMBNAIL_MAX_FILE_SIZE_BYTES) &&
            S),
          (E = v.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK && S))
        : ((L = !C && S), (E = S));
      var k = !b && S,
        I = t.body;
      if ((L || k || E) && p.contentInfo.preview)
        try {
          var T = await o("WAWebImageUtils").base64ImageToCanvas(
              p.contentInfo.preview.url(),
            ),
            D = L
              ? o("WAWebABProps").getABPropConfigValue(
                  "web_pdf_thumbnail_size_in_bytes",
                )
              : o("WAWebMediaConstants").MICRO_THUMBNAIL_MAX_FILE_SIZE_BYTES,
            x = await o("WAWebCanvasUtils").generateMicroThumb(T, D, {
              mimetype: "image/jpeg",
              maxAttempts: 10,
            });
          ((C = p.contentInfo.preview),
            (b = { width: x.width, height: x.height }),
            (I = r("WAWebURLUtils").parseDataURL(x.dataUrl).data));
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
      var $ = C && b && S,
        P = C && $ === !0 ? C : null,
        N = function (a) {
          var e;
          return P != null
            ? r("WAWebMediaUploadMmsThumbnail")({
                thumbnail: P,
                mediaKeyInfo: a,
                mediaType: r("nullthrows")(
                  o("WAWebMediaPrepHelpers").getMediaTypeForThumbnails(v),
                ),
                uploadOrigin:
                  (e = n.uploadOriginForChat) != null
                    ? e
                    : o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE
                        .UNKNOWN,
                fileOrigin: n.fileOrigin,
                forwardedFromWeb: !!t.forwardedFromWeb,
                isViewOnce: !!t.isViewOnce,
              })
            : Promise.resolve(null);
        },
        M = N(h),
        w = {
          mimetype: t.mimetype,
          canEnableFastForward: n.canEnableFastForward,
          mediaObject: p,
          mediaType: _,
          forwardedFromWeb: !!t.forwardedFromWeb,
          uploadOrigin:
            (i = n.uploadOriginForChat) != null
              ? i
              : o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE.UNKNOWN,
          fileOrigin: n.fileOrigin,
          isViewOnce: !!t.isViewOnce,
          earlyUpload: n.earlyUpload,
        },
        A =
          n.isMediaCryptoExpectedForChat === !0
            ? o("WAWebMediaMmsV4Upload").uploadMedia(
                babelHelpers.extends({}, w, {
                  mediaKeyInfo: h,
                  uploadEntry: f,
                }),
              )
            : o("WAWebMediaMmsV4Upload").uploadUnencryptedMedia(
                babelHelpers.extends({}, w, {
                  calculateToken: o("WAMediaCalculateFilehash")
                    .getRandomFilehash,
                }),
              ),
        F = p.filehash;
      F != null && o("WAWebMediaInMemoryKeyCache").MediaKeyCache.put(F, h);
      var O = await Promise.all([A, M]),
        B = O[0],
        W = O[1],
        q = W;
      r("WAWebMediaGatingShouldClearUploadedBlobs")(_) &&
        p.clearBlob({ reset: !0 });
      var U = B.mediaEntry;
      if (!U)
        return { mediaResult: B, mmsThumbnailData: null, body: I, fbid: null };
      F != null && o("WAWebMediaInMemoryKeyCache").MediaKeyCache.delete(F);
      var V = $;
      if (
        P != null &&
        U instanceof o("WAWebMediaEntry").EncryptedMediaEntry &&
        U.getMediaKey() !== h.key &&
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
            _,
          )
          .sendLogs("media-thumbnail-key-mismatch");
        var H = await N({
          key: U.getMediaKey(),
          timestamp: U.getMediaKeyTimestamp(),
        }).catch(o("WAWebNullFunc").returnNull);
        (H == null ? void 0 : H.kind) ===
        o("WAWebMediaMmsV4Upload").UploadMediaResultKind.SUCCESS
          ? (q = H)
          : (o("WALogger")
              .WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[media] thumbnail re-upload failed, sending without it, type: ",
                    "",
                  ])),
                _,
              )
              .sendLogs("media-thumbnail-key-mismatch-reupload-failed"),
            (V = !1));
      }
      var G =
          (l = o("WAWebMediaPrepHelpers").maybeGetThumbnailData({
            uploadThumbnailResult: q,
            mediaResultEntry: U,
            uploadEncryptedThumbnail: V,
            mediaObject: p,
            fullPreviewSize: b,
            mediaType: _,
          })) != null
            ? l
            : {},
        z =
          U instanceof o("WAWebMediaEntry").UnencryptedMediaEntry &&
          (m = U.fbid) != null
            ? m
            : null;
      return { mediaResult: B, mmsThumbnailData: G, body: I, fbid: z };
    }
    l.uploadMediaWithPrep = m;
  },
  98,
);
