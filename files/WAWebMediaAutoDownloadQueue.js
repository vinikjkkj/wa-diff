__d(
  "WAWebMediaAutoDownloadQueue",
  [
    "$InternalEnum",
    "WAConcurrentPriorityPromiseQueue",
    "WALogger",
    "WAWebDownloadProgressiveJpegThumbnail",
    "WAWebMedia",
    "WAWebMediaDownloadMmsThumbnail",
    "WAWebMediaGatingUtils",
    "WAWebMiscGatingUtils",
    "WAWebMsgGetters",
    "WAWebMsgModelPropUtils",
    "WAWebMsgModelUtils",
    "WAWebMsgType",
    "WAWebStickerMimeUtils",
    "WAWebStickerModel",
    "WAWebUserPrefsGeneral",
    "WAWebWamEnumWebcRmrReasonCode",
    "asyncToGeneratorRuntime",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = n("$InternalEnum")({
        MEDIA: "media",
        MMS_THUMBNAIL: "mms_thumbnail",
        PJPEG_THUMBNAIL: "pjpeg_thumbnail",
      }),
      m = 32 * 1024 * 1024,
      p = 512 * 1024,
      _ = 5,
      f = 512,
      g = 500 * 1024;
    function h(e) {
      var t =
        e.type === o("WAWebMsgType").MSG_TYPE.STICKER &&
        e.mimetype ===
          o("WAWebStickerMimeUtils").WhatsAppLottieStickerMimeType &&
        e.isLottie === !0 &&
        e.isAnimated === !0;
      return t || o("WAWebMsgModelPropUtils").isTrusted(e.unsafe());
    }
    function y(e) {
      switch (e.type) {
        case o("WAWebMsgType").MSG_TYPE.AUDIO:
        case o("WAWebMsgType").MSG_TYPE.PTT:
          return o("WAWebUserPrefsGeneral").getAutoDownloadAudio();
        case o("WAWebMsgType").MSG_TYPE.STICKER:
        case o("WAWebMsgType").MSG_TYPE.IMAGE:
          return o("WAWebUserPrefsGeneral").getAutoDownloadPhotos();
        case o("WAWebMsgType").MSG_TYPE.VIDEO:
        case o("WAWebMsgType").MSG_TYPE.PTV:
          return e.isGif && e.size < g
            ? o("WAWebUserPrefsGeneral").getAutoDownloadPhotos()
            : o("WAWebUserPrefsGeneral").getAutoDownloadVideos();
        case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
          return o("WAWebUserPrefsGeneral").getAutoDownloadDocuments();
      }
      return !1;
    }
    function C(e) {
      switch (e.type) {
        case o("WAWebMsgType").MSG_TYPE.IMAGE:
        case o("WAWebMsgType").MSG_TYPE.VIDEO:
        case o("WAWebMsgType").MSG_TYPE.PTV:
        case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
          return e.size <= m;
        case o("WAWebMsgType").MSG_TYPE.AUDIO:
        case o("WAWebMsgType").MSG_TYPE.PTT:
          return e.size < p;
        case o("WAWebMsgType").MSG_TYPE.STICKER:
          return !0;
      }
      return !1;
    }
    var b = (function () {
        function t() {
          this.$1 = new (r("WAConcurrentPriorityPromiseQueue"))(_, {
            photos: 2,
            videos: 1,
            audio: 1,
            documents: 1,
            mms_thumbnail: 4,
          });
        }
        var a = t.prototype;
        return (
          (a.getEnqueuedTasksCount = function () {
            return this.$1.getEnqueuedTasksCount();
          }),
          (a.clearQueue = function () {
            this.$1.clearQueue();
          }),
          (a.$2 = function () {
            return (
              o("WAWebMiscGatingUtils").webMediaAutoDownloadEnabled() &&
              o("WAWebUserPrefsGeneral").getAutoDownloadPhotos() &&
              this.getEnqueuedTasksCount() < f
            );
          }),
          (a.enqueue = function (t, n, r) {
            if (t instanceof o("WAWebStickerModel").StickerModel)
              return this.$2() ? (this.$3({ sticker: t }), !0) : !1;
            var e = t,
              a =
                o("WAWebMiscGatingUtils").webMediaAutoDownloadEnabled() &&
                n === d.MEDIA &&
                !o("WAWebMsgGetters").getIsNewsletterMsg(e) &&
                h(e) &&
                e.isNewMsg &&
                y(e) &&
                C(e) &&
                this.getEnqueuedTasksCount() < f;
            if (a)
              switch (e.type) {
                case o("WAWebMsgType").MSG_TYPE.AUDIO:
                case o("WAWebMsgType").MSG_TYPE.PTT:
                  return (this.$4({ message: e, group: "audio", chat: r }), !0);
                case o("WAWebMsgType").MSG_TYPE.IMAGE:
                case o("WAWebMsgType").MSG_TYPE.STICKER:
                  return (
                    this.$4({ message: e, group: "photos", chat: r }),
                    !0
                  );
                case o("WAWebMsgType").MSG_TYPE.VIDEO:
                case o("WAWebMsgType").MSG_TYPE.PTV:
                  return e.isGif && e.size < g
                    ? (this.$4({ message: e, group: "photos", chat: r }), !0)
                    : (this.$4({ message: e, group: "videos", chat: r }), !0);
                case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
                  return (
                    this.$4({ message: e, group: "documents", chat: r }),
                    !0
                  );
              }
            if (n === d.MMS_THUMBNAIL) {
              if (
                e.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT ||
                o("WAWebMsgModelUtils").typeIsUrl(e)
              )
                return (
                  this.$5({ message: e, group: "mms_thumbnail", chat: r }),
                  !0
                );
              if (
                e.type === o("WAWebMsgType").MSG_TYPE.IMAGE ||
                e.type === o("WAWebMsgType").MSG_TYPE.VIDEO ||
                e.type === o("WAWebMsgType").MSG_TYPE.PTV
              )
                return (this.$6({ message: e, group: "mms_thumbnail" }), !0);
            }
            return n === d.PJPEG_THUMBNAIL &&
              e.type === o("WAWebMsgType").MSG_TYPE.IMAGE
              ? (this.$7({ message: e, group: "mms_thumbnail" }), !0)
              : !1;
          }),
          (a.$3 = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var a = t.sticker;
                if (!a.mediaObject) {
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "Sticker mediaObject missing at enqueue ",
                          "",
                        ])),
                      r("gkx")("26258") ? "" : a.id,
                    )
                    .sendLogs(
                      "Sticker mediaObject does not exist for media at enqueue time",
                    );
                  return;
                }
                yield this.$1.enqueue(
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    if (!a.mediaObject) {
                      o("WALogger")
                        .ERROR(
                          s ||
                            (s = babelHelpers.taggedTemplateLiteralLoose([
                              "Sticker mediaObject missing at download ",
                              "",
                            ])),
                          r("gkx")("26258") ? "" : a.id,
                        )
                        .sendLogs(
                          "Sticker mediaObject does not exist for media at download time",
                        );
                      return;
                    }
                    yield a.downloadMedia();
                  }),
                  { group: "photos", priority: 1 },
                );
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (a.$4 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = e.group,
                  a = e.message;
                if (!a.mediaObject) {
                  o("WALogger")
                    .ERROR(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "mediaObject does not exist for media at enqueue time ",
                          "",
                        ])),
                      r("gkx")("26258") ? "" : a.id,
                    )
                    .sendLogs(
                      "mediaObject does not exist for media at enqueue time",
                    );
                  return;
                }
                yield this.$1.enqueue(
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    if (!a.mediaObject) {
                      o("WALogger")
                        .ERROR(
                          c ||
                            (c = babelHelpers.taggedTemplateLiteralLoose([
                              "mediaObject does not exist for media at download time ",
                              "",
                            ])),
                          r("gkx")("26258") ? "" : a.id,
                        )
                        .sendLogs(
                          "mediaObject does not exist for media at download time",
                          { sampling: 0 },
                        );
                      return;
                    }
                    y(a) &&
                      (yield a.downloadMedia({
                        downloadEvenIfExpensive: !1,
                        rmrReason: o("WAWebWamEnumWebcRmrReasonCode")
                          .WEBC_RMR_REASON_CODE.OTHER,
                        isUserInitiated: !1,
                        isAutoDownload: !0,
                      }));
                  }),
                  { group: t, priority: -a.t },
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$5 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = e.chat,
                  o = e.group,
                  a = e.message;
                yield this.$1.enqueue(
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    yield r("WAWebMediaDownloadMmsThumbnail")({
                      msg: a,
                      chat: t,
                    });
                  }),
                  { group: o, priority: -a.t },
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$6 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = e.group,
                  r = e.message;
                yield this.$1.enqueue(
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    yield o("WAWebMedia").downloadStatusThumbnail({ msg: r });
                  }),
                  { group: t, priority: -r.t },
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$7 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = e.group,
                  r = e.message;
                yield this.$1.enqueue(
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    yield o(
                      "WAWebDownloadProgressiveJpegThumbnail",
                    ).downloadProgressiveJpegThumbnail({
                      msg: r,
                      scanCount: o(
                        "WAWebMediaGatingUtils",
                      ).getHQImageThumbnailInChatScans(),
                    });
                  }),
                  { group: t, priority: -r.t },
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })(),
      v = new b();
    ((l.AutoDownloadTypes = d),
      (l.MAX_AUTO_DOWNLOAD_SIZE = m),
      (l.AUDIO_AUTO_DOWNLOAD_SIZE_LIMIT = p),
      (l.shouldTrustMedia = h),
      (l.shouldAutoDownloadMedia = y),
      (l.validateMediaSize = C),
      (l.AutoDownloadQueue = v));
  },
  98,
);
