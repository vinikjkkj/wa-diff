__d(
  "WAWebDownloadVideoThumbnail",
  [
    "WALogger",
    "WAPromiseLoop",
    "WAWebDownloadManager",
    "WAWebExperienceIdWamFields",
    "WAWebImageUtils",
    "WAWebMediaConstants",
    "WAWebMediaCryptoEligibilityUtils",
    "WAWebMediaGetDownloadOriginForMsg",
    "WAWebMediaLoadErrors",
    "WAWebMediaOpaqueData",
    "WAWebMmsMediaTypes",
    "WAWebMsgGetters",
    "WAWebMsgModelPropUtils",
    "WAWebSerializeError",
    "WAWebStartMediaDownloadQpl",
    "WAWebThumbnailOutcomeLogger",
    "WAWebURLUtils",
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = 1,
      p = 1.5;
    async function _(t) {
      var n = t.chat,
        a = t.downloadQpl,
        i = t.isEncrypted,
        l = t.msg;
      return await o("WAPromiseLoop").promiseLoop(
        async function (t, s, u) {
          try {
            var c = r("WAWebMediaGetDownloadOriginForMsg")(l.unsafe()),
              d = Math.max(parseInt(l.mediaData.duration, 10), 1),
              _ = {
                video: { size: l.mediaData.size, duration: d },
                secondsToDownload: u === 0 ? m : p,
              },
              f = await o(
                "WAWebDownloadManager",
              ).downloadManager.downloadAndMaybeDecrypt({
                directPath: l.directPath,
                encFilehash: l.encFilehash,
                filehash: l.filehash,
                mediaKey: l.mediaKey,
                mediaKeyTimestamp: l.mediaKeyTimestamp,
                type: o("WAWebMsgGetters").getIsNewsletterMsg(l.unsafe())
                  ? o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_VIDEO
                  : o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO,
                signal: new AbortController().signal,
                userDownloadAttemptCount: 0,
                partialVideoOpts: _,
                isPreload: !0,
                chatWid: n == null ? void 0 : n.id,
                downloadQpl: a,
                downloadOrigin: c,
                experienceIds: o("WAWebExperienceIdWamFields").getExperienceIds(
                  l.unsafe(),
                ),
              }),
              g = new Blob([f], { type: "video/mp4" }),
              h = await o("WAWebImageUtils").generateVideoThumbsAndDuration({
                file: g,
                maxDimensions: [o("WAWebMediaConstants").VIDEO_THUMB_MAX_EDGE],
                debugHint: "downloadVideoThumbnail",
                throwOnBlack: !0,
                logContext: {
                  callsite: "DOWNLOAD_VIDEO_THUMBNAIL",
                  downloadOrigin: o(
                    "WAWebThumbnailOutcomeLogger",
                  ).thumbnailDownloadOriginFromWam(c),
                  isEncrypted: i,
                  mediaType: o(
                    "WAWebThumbnailOutcomeLogger",
                  ).thumbnailMediaTypeFromMsgType(l.type),
                },
              }),
              y = h.thumbs,
              C = y[0];
            t(C);
          } catch (t) {
            if (
              n == null &&
              t instanceof o("WAWebMediaLoadErrors").UnableToPlayVideoError &&
              u === 0
            ) {
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[generateThumbnailFromVideo] retry: UnableToPlayVideoError",
                  ])),
              ),
                a.addAnnotations({ bool: { hasRetry: !0 } }),
                a.addPoint("video_thumbnail_retry_start"));
              return;
            }
            throw t;
          }
        },
        void 0,
      );
    }
    async function f(e) {
      var t = e.chat,
        n = e.msg,
        a = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
          entryPoint: "DownloadVideoThumbnail",
        });
      if (!o("WAWebMsgModelPropUtils").isTrustedForAutoDownload(n.unsafe())) {
        a.endFail("untrusted_message", {
          string: { earlyExitReason: "untrusted_message" },
        });
        return;
      }
      if ((t == null ? void 0 : t.isSuspendedOrTerminated()) === !0) {
        a.endFail("suspended_or_terminated_chat", {
          string: { earlyExitReason: "suspended_or_terminated_chat" },
        });
        return;
      }
      var i = n.directPath,
        l = n.encFilehash,
        m = n.filehash;
      if (!m || !i) {
        a.endFail("missing_download_path_or_filehash", {
          string: { earlyExitReason: "missing_download_path_or_filehash" },
        });
        return;
      }
      var p = o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMsg(
        n.unsafe(),
      );
      if (p && !l) {
        a.endFail("missing_encrypted_filehash", {
          string: { earlyExitReason: "missing_encrypted_filehash" },
        });
        return;
      }
      var f = n.mediaData,
        g = f.fullHeight,
        h = f.fullPreviewData,
        y = f.fullWidth;
      if (h && y != null && g != null) {
        a.endSuccess({ string: { downloadResult: "existing_thumbnail" } });
        return;
      }
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "media.downloadVideoThumbnail: start",
          ])),
      );
      try {
        a.addPoint("video_thumbnail_generation_start");
        var C = await _({ msg: n, chat: t, downloadQpl: a, isEncrypted: p });
        (a.addPoint("video_thumbnail_generation_end"),
          a.addPoint("thumbnail_consolidation_start"));
        var b = await r("WAWebMediaOpaqueData").createFromBase64Jpeg(
            r("WAWebURLUtils").parseDataURL(C.url).data,
          ),
          v = r("nullthrows")(
            n.mediaObject,
            "mediaObject cannot be null for thumbnail download",
          ),
          S = {
            fullPreviewData: b,
            fullWidth: C.fullWidth,
            fullHeight: C.fullHeight,
          };
        (v.consolidate(S),
          a.addPoint("thumbnail_consolidation_end"),
          a.endSuccess(),
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "media.downloadVideoThumbnail: success",
              ])),
          ));
      } catch (e) {
        if (
          (a.endFailWithError("download_failed", r("getErrorSafe")(e).message),
          e instanceof o("WAWebImageUtils").BlackVideoThumbnailError)
        ) {
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[downloadVideoThumbnail] black thumb, using blur fallback",
              ])),
          );
          return;
        }
        o("WALogger")
          .WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose(
                [
                  `media.downloadVideoThumbnail: error
`,
                  "",
                ],
                ["media.downloadVideoThumbnail: error\\n", ""],
              )),
            r("WAWebSerializeError")(e),
          )
          .verbose();
      }
    }
    l.downloadVideoThumbnail = f;
  },
  98,
);
