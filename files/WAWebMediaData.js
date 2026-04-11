__d(
  "WAWebMediaData",
  [
    "WAWebBaseModel",
    "WAWebFeatureDetectionSwSupport",
    "WAWebMediaCleanFileName",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaTypes",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.type = o("WAWebBaseModel").prop(
            o("WAWebMediaTypes").OUTWARD_TYPES.UNKNOWN,
          )),
          (t.directPath = o("WAWebBaseModel").prop()),
          (t.mediaKey = o("WAWebBaseModel").prop()),
          (t.mediaKeyTimestamp = o("WAWebBaseModel").prop()),
          (t.encFilehash = o("WAWebBaseModel").prop()),
          (t.mediaStage = o("WAWebBaseModel").prop(
            o("WAWebMediaTypes").MediaDataStage.INIT,
          )),
          (t.size = o("WAWebBaseModel").prop()),
          (t.loadedSize = o("WAWebBaseModel").prop()),
          (t.filehash = o("WAWebBaseModel").prop()),
          (t.mimetype = o("WAWebBaseModel").prop()),
          (t.mediaBlob = o("WAWebBaseModel").prop()),
          (t.renderableUrl = o("WAWebBaseModel").prop()),
          (t.fullHeight = o("WAWebBaseModel").prop()),
          (t.fullWidth = o("WAWebBaseModel").prop()),
          (t.aspectRatio = o("WAWebBaseModel").prop()),
          (t.rgbaBuffer = o("WAWebBaseModel").prop()),
          (t.rgbaHeight = o("WAWebBaseModel").prop()),
          (t.rgbaWidth = o("WAWebBaseModel").prop()),
          (t.animationDuration = o("WAWebBaseModel").prop(0)),
          (t.animatedAsNewMsg = o("WAWebBaseModel").prop(!1)),
          (t.isAnimated = o("WAWebBaseModel").prop()),
          (t.isFirstParty = o("WAWebBaseModel").prop()),
          (t.isFromStickerMaker = o("WAWebBaseModel").prop()),
          (t.isAvatar = o("WAWebBaseModel").prop()),
          (t.isAiSticker = o("WAWebBaseModel").prop()),
          (t.isLottie = o("WAWebBaseModel").prop()),
          (t.stickerPremiumStatus = o("WAWebBaseModel").prop()),
          (t.stickerPackId = o("WAWebBaseModel").prop()),
          (t.stickerPackName = o("WAWebBaseModel").prop()),
          (t.stickerPackPublisher = o("WAWebBaseModel").prop()),
          (t.stickerMakerSourceType = o("WAWebBaseModel").prop()),
          (t.singleLoopDuration = o("WAWebBaseModel").prop()),
          (t.firstFrameLength = o("WAWebBaseModel").prop()),
          (t.firstFrameSidecar = o("WAWebBaseModel").prop()),
          (t.emojis = o("WAWebBaseModel").prop()),
          (t.accessibilityLabel = o("WAWebBaseModel").prop()),
          (t.progressiveStage = o("WAWebBaseModel").prop()),
          (t.isViewOnce = o("WAWebBaseModel").prop(!1)),
          (t.staticUrl = o("WAWebBaseModel").prop()),
          (t.preview = o("WAWebBaseModel").prop()),
          (t.sidecar = o("WAWebBaseModel").prop()),
          (t.duration = o("WAWebBaseModel").prop()),
          (t.isGif = o("WAWebBaseModel").prop()),
          (t.gifAttribution = o("WAWebBaseModel").prop()),
          (t.streamable = o("WAWebBaseModel").derived(
            function () {
              return this.isStreamable();
            },
            [
              "isGif",
              "isViewOnce",
              "mediaStage",
              "sidecar",
              "type",
              "swStreamingSupported",
            ],
          )),
          (t.swStreamingSupported = o("WAWebBaseModel").prop(!1)),
          (t.$MediaData$p_1 = o("WAWebBaseModel").prop(!1)),
          (t.filename = o("WAWebBaseModel").prop()),
          (t.pageCount = o("WAWebBaseModel").prop()),
          (t.documentPreview = o("WAWebBaseModel").prop()),
          (t.isPasswordProtected = o("WAWebBaseModel").prop()),
          (t.isVcardOverMmsDocument = o("WAWebBaseModel").prop(!1)),
          (t.parsedVcards = o("WAWebBaseModel").prop()),
          (t.extractedLottieSticker = o("WAWebBaseModel").prop()),
          (t.fullPreviewSize = o("WAWebBaseModel").prop()),
          (t.fullPreviewData = o("WAWebBaseModel").prop()),
          (t.subtype = o("WAWebBaseModel").prop()),
          (t.waveform = o("WAWebBaseModel").prop()),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.initialize = function () {
          e.prototype.initialize.call(this);
        }),
        (n.set = function (n, r, o) {
          var t,
            a = o;
          if (typeof n == "string") {
            var i;
            t = ((i = {}), (i[n] = r), i);
          } else ((t = n), (a = r));
          return ((t = c(t)), e.prototype.set.call(this, t, a));
        }),
        (n.isStreamable = function () {
          return (
            this.isStreamableType() &&
            this.listenToServiceWorkerSupport() &&
            !this.isViewOnce
          );
        }),
        (n.$MediaData$p_2 = function (t) {
          this.swStreamingSupported = t;
        }),
        (n.listenToServiceWorkerSupport = function () {
          return this.$MediaData$p_1
            ? this.swStreamingSupported
            : (this.listenTo(
                r("WAWebFeatureDetectionSwSupport"),
                "change:streamingSupported",
                this.$MediaData$p_2,
              ),
              (this.swStreamingSupported = !!r("WAWebFeatureDetectionSwSupport")
                .streamingSupported),
              (this.$MediaData$p_1 = !0),
              this.swStreamingSupported);
        }),
        (n.isStreamableType = function () {
          return (
            this.type === o("WAWebMediaTypes").OUTWARD_TYPES.VIDEO &&
            !this.isGif &&
            (this.mediaStage === o("WAWebMediaTypes").MediaDataStage.INIT ||
              this.mediaStage ===
                o("WAWebMediaTypes").MediaDataStage.FETCHING ||
              this.mediaStage ===
                o("WAWebMediaTypes").MediaDataStage.DECRYPTING ||
              this.mediaStage ===
                o("WAWebMediaTypes").MediaDataStage.RESOLVED) &&
            this.fullWidth != null &&
            this.fullHeight != null &&
            !!(this.sidecar && this.sidecar.byteLength > 0)
          );
        }),
        (n.isDownloadable = function () {
          if (this.isViewOnce) return !1;
          var e = this.renderableUrl != null;
          if (e) return !0;
          var t = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.has(
            this.filehash,
          );
          if (t) return !0;
          var n =
            this.mediaStage === o("WAWebMediaTypes").MediaDataStage.EXISTS ||
            this.mediaStage ===
              o("WAWebMediaTypes").MediaDataStage.PROGRESSIVE_READY;
          return !!n;
        }),
        t
      );
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "mediaData";
    var s = o("WAWebBaseModel").defineModel(e);
    s.TYPE = o("WAWebMediaTypes").OUTWARD_TYPES;
    var u = s;
    function c(e) {
      if (e.filename && e.type === s.TYPE.DOCUMENT) {
        var t = o("WAWebMediaCleanFileName").cleanFilename(e.filename);
        return babelHelpers.extends({}, e, { filename: t, caption: t });
      }
      return e;
    }
    l.default = u;
  },
  98,
);
