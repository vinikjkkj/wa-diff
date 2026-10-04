__d(
  "WAWebMediaAutoDownloadQueue",
  [
    "$InternalEnum",
    "WAConcurrentPriorityPromiseQueue",
    "WALogger",
    "WAWebDownloadProgressiveJpegThumbnail",
    "WAWebDualUploadsAutoDownloadPolicy",
    "WAWebMedia",
    "WAWebMediaDownloadMmsThumbnail",
    "WAWebMediaGatingUtils",
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
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C = n("$InternalEnum")({
        MEDIA: "media",
        MMS_THUMBNAIL: "mms_thumbnail",
        PJPEG_THUMBNAIL: "pjpeg_thumbnail",
      }),
      b = 32 * 1024 * 1024,
      v = 512 * 1024,
      S = 5,
      R = 512,
      L = 500 * 1024;
    function E(e) {
      var t =
        e.type === o("WAWebMsgType").MSG_TYPE.STICKER &&
        e.mimetype ===
          o("WAWebStickerMimeUtils").WhatsAppLottieStickerMimeType &&
        e.isLottie === !0 &&
        e.isAnimated === !0;
      return t || o("WAWebMsgModelPropUtils").isTrusted(e.unsafe());
    }
    function k(e) {
      if (
        !o(
          "WAWebDualUploadsAutoDownloadPolicy",
        ).shouldAutoDownloadAssociatedChild(e)
      )
        return !1;
      switch (e.type) {
        case o("WAWebMsgType").MSG_TYPE.AUDIO:
        case o("WAWebMsgType").MSG_TYPE.PTT:
          return o("WAWebUserPrefsGeneral").getAutoDownloadAudio();
        case o("WAWebMsgType").MSG_TYPE.STICKER:
        case o("WAWebMsgType").MSG_TYPE.IMAGE:
          return o("WAWebUserPrefsGeneral").getAutoDownloadPhotos();
        case o("WAWebMsgType").MSG_TYPE.VIDEO:
        case o("WAWebMsgType").MSG_TYPE.PTV:
          return e.isGif && e.size < L
            ? o("WAWebUserPrefsGeneral").getAutoDownloadPhotos()
            : o("WAWebUserPrefsGeneral").getAutoDownloadVideos();
        case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
          return o("WAWebUserPrefsGeneral").getAutoDownloadDocuments();
      }
      return !1;
    }
    function I(e) {
      switch (e.type) {
        case o("WAWebMsgType").MSG_TYPE.IMAGE:
        case o("WAWebMsgType").MSG_TYPE.VIDEO:
        case o("WAWebMsgType").MSG_TYPE.PTV:
        case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
          return e.size <= b;
        case o("WAWebMsgType").MSG_TYPE.AUDIO:
        case o("WAWebMsgType").MSG_TYPE.PTT:
          return e.size < v;
        case o("WAWebMsgType").MSG_TYPE.STICKER:
          return !0;
      }
      return !1;
    }
    var T = (function () {
        function t() {
          this.$1 = new (r("WAConcurrentPriorityPromiseQueue"))(S, {
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
              o("WAWebUserPrefsGeneral").getAutoDownloadPhotos() &&
              this.getEnqueuedTasksCount() < R
            );
          }),
          (a.enqueue = function (n, r, a) {
            if (n instanceof o("WAWebStickerModel").StickerModel)
              return this.$2() ? (this.$3({ sticker: n }), !0) : !1;
            var t = n,
              i =
                r === C.MEDIA &&
                !o("WAWebMsgGetters").getIsNewsletterMsg(t.unsafe()) &&
                E(t) &&
                t.isNewMsg &&
                k(t) &&
                I(t) &&
                this.getEnqueuedTasksCount() < R;
            if (i)
              switch (t.type) {
                case o("WAWebMsgType").MSG_TYPE.AUDIO:
                case o("WAWebMsgType").MSG_TYPE.PTT:
                  return (
                    this.$4({ message: t, group: "audio", chat: a }).catch(
                      function (t) {
                        o("WALogger")
                          .ERROR(
                            e ||
                              (e = babelHelpers.taggedTemplateLiteralLoose([
                                "auto-download media enqueue failed ",
                                "",
                              ])),
                            t,
                          )
                          .sendLogs("auto-download media enqueue failed");
                      },
                    ),
                    !0
                  );
                case o("WAWebMsgType").MSG_TYPE.IMAGE:
                case o("WAWebMsgType").MSG_TYPE.STICKER:
                  return (
                    this.$4({ message: t, group: "photos", chat: a }).catch(
                      function (e) {
                        o("WALogger")
                          .ERROR(
                            s ||
                              (s = babelHelpers.taggedTemplateLiteralLoose([
                                "auto-download media enqueue failed ",
                                "",
                              ])),
                            e,
                          )
                          .sendLogs("auto-download media enqueue failed");
                      },
                    ),
                    !0
                  );
                case o("WAWebMsgType").MSG_TYPE.VIDEO:
                case o("WAWebMsgType").MSG_TYPE.PTV:
                  return t.isGif && t.size < L
                    ? (this.$4({ message: t, group: "photos", chat: a }).catch(
                        function (e) {
                          o("WALogger")
                            .ERROR(
                              u ||
                                (u = babelHelpers.taggedTemplateLiteralLoose([
                                  "auto-download media enqueue failed ",
                                  "",
                                ])),
                              e,
                            )
                            .sendLogs("auto-download media enqueue failed");
                        },
                      ),
                      !0)
                    : (this.$4({ message: t, group: "videos", chat: a }).catch(
                        function (e) {
                          o("WALogger")
                            .ERROR(
                              c ||
                                (c = babelHelpers.taggedTemplateLiteralLoose([
                                  "auto-download media enqueue failed ",
                                  "",
                                ])),
                              e,
                            )
                            .sendLogs("auto-download media enqueue failed");
                        },
                      ),
                      !0);
                case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
                  return (
                    this.$4({ message: t, group: "documents", chat: a }).catch(
                      function (e) {
                        o("WALogger")
                          .ERROR(
                            d ||
                              (d = babelHelpers.taggedTemplateLiteralLoose([
                                "auto-download media enqueue failed ",
                                "",
                              ])),
                            e,
                          )
                          .sendLogs("auto-download media enqueue failed");
                      },
                    ),
                    !0
                  );
              }
            if (r === C.MMS_THUMBNAIL) {
              if (
                t.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT ||
                o("WAWebMsgModelUtils").typeIsUrl(t)
              )
                return (
                  this.$5({
                    message: t,
                    group: "mms_thumbnail",
                    chat: a,
                  }).catch(function (e) {
                    o("WALogger")
                      .ERROR(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "auto-download mms thumbnail enqueue failed ",
                            "",
                          ])),
                        e,
                      )
                      .sendLogs("auto-download mms thumbnail enqueue failed");
                  }),
                  !0
                );
              if (
                (t.type === o("WAWebMsgType").MSG_TYPE.IMAGE ||
                  t.type === o("WAWebMsgType").MSG_TYPE.VIDEO ||
                  t.type === o("WAWebMsgType").MSG_TYPE.PTV) &&
                !o("WAWebDualUploadsAutoDownloadPolicy").isDualUploadHdChildMsg(
                  t,
                )
              )
                return (
                  this.$6({ message: t, group: "mms_thumbnail" }).catch(
                    function (e) {
                      o("WALogger")
                        .ERROR(
                          p ||
                            (p = babelHelpers.taggedTemplateLiteralLoose([
                              "auto-download status thumbnail enqueue failed ",
                              "",
                            ])),
                          e,
                        )
                        .sendLogs(
                          "auto-download status thumbnail enqueue failed",
                        );
                    },
                  ),
                  !0
                );
            }
            return r === C.PJPEG_THUMBNAIL &&
              t.type === o("WAWebMsgType").MSG_TYPE.IMAGE &&
              !o("WAWebDualUploadsAutoDownloadPolicy").isDualUploadHdChildMsg(t)
              ? (this.$7({ message: t, group: "mms_thumbnail" }).catch(
                  function (e) {
                    o("WALogger")
                      .ERROR(
                        _ ||
                          (_ = babelHelpers.taggedTemplateLiteralLoose([
                            "auto-download pjpeg thumbnail enqueue failed ",
                            "",
                          ])),
                        e,
                      )
                      .sendLogs("auto-download pjpeg thumbnail enqueue failed");
                  },
                ),
                !0)
              : !1;
          }),
          (a.$3 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = e.sticker;
                if (!t.mediaObject) {
                  o("WALogger")
                    .ERROR(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "Sticker mediaObject missing at enqueue ",
                          "",
                        ])),
                      r("gkx")("26258") ? "" : t.id,
                    )
                    .sendLogs(
                      "Sticker mediaObject does not exist for media at enqueue time",
                    );
                  return;
                }
                yield this.$1.enqueue(
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    if (!t.mediaObject) {
                      o("WALogger")
                        .ERROR(
                          g ||
                            (g = babelHelpers.taggedTemplateLiteralLoose([
                              "Sticker mediaObject missing at download ",
                              "",
                            ])),
                          r("gkx")("26258") ? "" : t.id,
                        )
                        .sendLogs(
                          "Sticker mediaObject does not exist for media at download time",
                        );
                      return;
                    }
                    yield t.downloadMedia();
                  }),
                  { group: "photos", priority: 1 },
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$4 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = e.group,
                  a = e.message;
                if (!a.mediaObject) {
                  o("WALogger")
                    .ERROR(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
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
                          y ||
                            (y = babelHelpers.taggedTemplateLiteralLoose([
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
                    k(a) &&
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
      D = new T();
    ((l.AutoDownloadTypes = C),
      (l.MAX_AUTO_DOWNLOAD_SIZE = b),
      (l.AUDIO_AUTO_DOWNLOAD_SIZE_LIMIT = v),
      (l.shouldTrustMedia = E),
      (l.shouldAutoDownloadMedia = k),
      (l.validateMediaSize = I),
      (l.AutoDownloadQueue = D));
  },
  98,
);
