__d(
  "WAWebDownloadVideoThumbnail",
  [
    "WALogger",
    "WAPromiseLoop",
    "WAWebDownloadManager",
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
    "asyncToGeneratorRuntime",
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
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.chat,
            i = t.downloadQpl,
            l = t.isEncrypted,
            s = t.msg;
          return yield o("WAPromiseLoop").promiseLoop(
            (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t, n, u) {
                  try {
                    var c = r("WAWebMediaGetDownloadOriginForMsg")(s.unsafe()),
                      d = Math.max(parseInt(s.mediaData.duration, 10), 1),
                      _ = {
                        video: { size: s.mediaData.size, duration: d },
                        secondsToDownload: u === 0 ? m : p,
                      },
                      f = yield o(
                        "WAWebDownloadManager",
                      ).downloadManager.downloadAndMaybeDecrypt({
                        directPath: s.directPath,
                        encFilehash: s.encFilehash,
                        filehash: s.filehash,
                        mediaKey: s.mediaKey,
                        mediaKeyTimestamp: s.mediaKeyTimestamp,
                        type: o("WAWebMsgGetters").getIsNewsletterMsg(s)
                          ? o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_VIDEO
                          : o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO,
                        signal: new AbortController().signal,
                        userDownloadAttemptCount: 0,
                        partialVideoOpts: _,
                        isPreload: !0,
                        chatWid: a == null ? void 0 : a.id,
                        downloadQpl: i,
                        downloadOrigin: c,
                      }),
                      g = new Blob([f], { type: "video/mp4" }),
                      h = yield o(
                        "WAWebImageUtils",
                      ).generateVideoThumbsAndDuration({
                        file: g,
                        maxDimensions: [
                          o("WAWebMediaConstants").VIDEO_THUMB_MAX_EDGE,
                        ],
                        debugHint: "downloadVideoThumbnail",
                        throwOnBlack: !0,
                        logContext: {
                          callsite: "DOWNLOAD_VIDEO_THUMBNAIL",
                          downloadOrigin: o(
                            "WAWebThumbnailOutcomeLogger",
                          ).thumbnailDownloadOriginFromWam(c),
                          isEncrypted: l,
                          mediaType: o(
                            "WAWebThumbnailOutcomeLogger",
                          ).thumbnailMediaTypeFromMsgType(s.type),
                        },
                      }),
                      y = h.thumbs,
                      C = y[0];
                    t(C);
                  } catch (t) {
                    if (
                      a == null &&
                      t instanceof
                        o("WAWebMediaLoadErrors").UnableToPlayVideoError &&
                      u === 0
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
              );
              return function (e, n, r) {
                return t.apply(this, arguments);
              };
            })(),
            void 0,
          );
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat,
            n = e.msg;
          if (
            o("WAWebMsgModelPropUtils").isTrusted(n.unsafe()) &&
            (t == null ? void 0 : t.isSuspendedOrTerminated()) !== !0
          ) {
            var a = n.directPath,
              i = n.encFilehash,
              l = n.filehash;
            if (!(!l || !a)) {
              var m = o(
                "WAWebMediaCryptoEligibilityUtils",
              ).isMediaCryptoExpectedForMsg(n);
              if (!(m && !i)) {
                var p = n.mediaData,
                  f = p.fullHeight,
                  g = p.fullPreviewData,
                  h = p.fullWidth;
                if (!(g && h != null && f != null)) {
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "media.downloadVideoThumbnail: start",
                      ])),
                  );
                  var y = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl(
                    { entryPoint: "DownloadVideoThumbnail" },
                  );
                  try {
                    var C = yield _({
                        msg: n,
                        chat: t,
                        downloadQpl: y,
                        isEncrypted: m,
                      }),
                      b = yield r("WAWebMediaOpaqueData").createFromBase64Jpeg(
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
                      y.endSuccess(),
                      o("WALogger").LOG(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "media.downloadVideoThumbnail: success",
                          ])),
                      ));
                  } catch (e) {
                    if (
                      (y.endFailWithError(
                        "download_failed",
                        r("getErrorSafe")(e).message,
                      ),
                      e instanceof
                        o("WAWebImageUtils").BlackVideoThumbnailError)
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
                            ["media.downloadVideoThumbnail: error\n", ""],
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
        })),
        h.apply(this, arguments)
      );
    }
    l.downloadVideoThumbnail = g;
  },
  98,
);
