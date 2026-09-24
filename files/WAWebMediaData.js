__d(
  "WAWebMediaData",
  [
    "WAWebBaseModel",
    "WAWebMediaCleanFileName",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaStreamability",
    "WAWebMediaTypes",
    "WAWebSuspiciousContent",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebBaseModel").session(u)),
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
          (t.suspiciousContent = o("WAWebBaseModel").prop(
            o("WAWebSuspiciousContent").WAWebSuspiciousContent.NO,
          )),
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
          return ((t = m(t)), e.prototype.set.call(this, t, a));
        }),
        (n.isStreamable = function (t) {
          return o("WAWebMediaStreamability").isStreamableMedia(this, t);
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
    var s = 1;
    function u() {
      return String(s++);
    }
    var c = o("WAWebBaseModel").defineModel(e);
    c.TYPE = o("WAWebMediaTypes").OUTWARD_TYPES;
    var d = c;
    function m(e) {
      if (e.filename && e.type === c.TYPE.DOCUMENT) {
        var t = o("WAWebMediaCleanFileName").cleanFilename(e.filename);
        return babelHelpers.extends({}, e, { filename: t, caption: t });
      }
      return e;
    }
    l.default = d;
  },
  98,
);
