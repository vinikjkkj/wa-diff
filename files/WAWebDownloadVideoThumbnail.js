__d(
  "WAWebDownloadVideoThumbnail",
  [
    "WALogger",
    "WANullthrows",
    "WAPromiseLoop",
    "WAWebDownloadManager",
    "WAWebImageUtils",
    "WAWebMediaConstants",
    "WAWebMediaCryptoEligibilityUtils",
    "WAWebMediaGetDownloadOriginForMsg",
    "WAWebMediaOpaqueData",
    "WAWebMiscErrors",
    "WAWebMmsMediaTypes",
    "WAWebMsgGetters",
    "WAWebMsgModelPropUtils",
    "WAWebSerializeError",
    "WAWebStartMediaDownloadQpl",
    "WAWebURLUtils",
    "getErrorSafe",
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
        i = t.msg;
      return await o("WAPromiseLoop").promiseLoop(
        async function (t, l, s) {
          try {
            var u = Math.max(parseInt(i.mediaData.duration, 10), 1),
              c = {
                video: { size: i.mediaData.size, duration: u },
                secondsToDownload: s === 0 ? m : p,
              },
              d = await o(
                "WAWebDownloadManager",
              ).downloadManager.downloadAndMaybeDecrypt({
                directPath: i.directPath,
                encFilehash: i.encFilehash,
                filehash: i.filehash,
                mediaKey: i.mediaKey,
                mediaKeyTimestamp: i.mediaKeyTimestamp,
                type: o("WAWebMsgGetters").getIsNewsletterMsg(i)
                  ? o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_VIDEO
                  : o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO,
                signal: new AbortController().signal,
                userDownloadAttemptCount: 0,
                partialVideoOpts: c,
                isPreload: !0,
                chatWid: n == null ? void 0 : n.id,
                downloadQpl: a,
                downloadOrigin: r("WAWebMediaGetDownloadOriginForMsg")(
                  i.unsafe(),
                ),
              }),
              _ = new Blob([d], { type: "video/mp4" }),
              f = await o("WAWebImageUtils").generateVideoThumbsAndDuration({
                file: _,
                maxDimensions: [o("WAWebMediaConstants").VIDEO_THUMB_MAX_EDGE],
                debugHint: "downloadVideoThumbnail",
                throwOnBlack: !0,
              }),
              g = f.thumbs,
              h = g[0];
            t(h);
          } catch (t) {
            if (
              n == null &&
              t instanceof o("WAWebMiscErrors").UnableToPlayVideoError &&
              s === 0
            ) {
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[generateThumbnailFromVideo] retry: UnableToPlayVideoError",
                  ])),
              );
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
        n = e.msg;
      if (
        o("WAWebMsgModelPropUtils").isTrusted(n.unsafe()) &&
        (t == null ? void 0 : t.isSuspendedOrTerminated()) !== !0
      ) {
        var a = n.directPath,
          i = n.encFilehash,
          l = n.filehash;
        if (
          !(!l || !a) &&
          !(
            o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMsg(
              n,
            ) && !i
          )
        ) {
          var m = n.mediaData,
            p = m.fullHeight,
            f = m.fullPreviewData,
            g = m.fullWidth;
          if (!(f && g != null && p != null)) {
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "media.downloadVideoThumbnail: start",
                ])),
            );
            var h = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
              entryPoint: "DownloadVideoThumbnail",
            });
            try {
              var y = await _({ msg: n, chat: t, downloadQpl: h }),
                C = await r("WAWebMediaOpaqueData").createFromBase64Jpeg(
                  r("WAWebURLUtils").parseDataURL(y.url).data,
                ),
                b = r("WANullthrows")(
                  n.mediaObject,
                  "mediaObject cannot be null for thumbnail download",
                ),
                v = {
                  fullPreviewData: C,
                  fullWidth: y.fullWidth,
                  fullHeight: y.fullHeight,
                };
              (b.consolidate(v),
                h.endSuccess(),
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "media.downloadVideoThumbnail: success",
                    ])),
                ));
            } catch (e) {
              if (
                (h.endFailWithError(
                  "download_failed",
                  r("getErrorSafe")(e).message,
                ),
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
        }
      }
    }
    l.downloadVideoThumbnail = f;
  },
  98,
);
