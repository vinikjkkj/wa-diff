__d(
  "WAWebAttachMediaModel",
  [
    "$InternalEnum",
    "WABase64",
    "WAFilteredCatch",
    "WALogger",
    "WAMemoizeConcurrent",
    "WAWebABProps",
    "WAWebBaseModel",
    "WAWebChatPreferenceCollection",
    "WAWebFileUtils",
    "WAWebHDMediaUtils",
    "WAWebMedia",
    "WAWebMediaDataUtils",
    "WAWebMediaEditorData",
    "WAWebMediaFileTooLargeError",
    "WAWebMediaLoad",
    "WAWebMediaOpaqueData",
    "WAWebMimeTypes",
    "WAWebMiscErrors",
    "WAWebMsgType",
    "WAWebPREGatingUtils",
    "WAWebStickerConstants",
    "WAWebTPPdfViewerGatingUtils",
    "err",
    "isNonZeroNumber",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = n("$InternalEnum").Mirrored([
        "Outline",
        "OutlineDone",
        "CropRotateCanvas",
      ]),
      p = n("$InternalEnum").Mirrored(["Standard", "HD"]),
      _ = { READY: "ready", PROCESSING: "processing", ERROR: "error" },
      f = (function (t) {
        function n() {
          for (var e, n = arguments.length, a = new Array(n), i = 0; i < n; i++)
            a[i] = arguments[i];
          return (
            (e = t.call.apply(t, [this].concat(a)) || this),
            (e.id = o("WAWebBaseModel").prop()),
            (e.file = o("WAWebBaseModel").prop()),
            (e.uiProcessed = o("WAWebBaseModel").prop(!1)),
            (e.fileOrigin = o("WAWebBaseModel").prop()),
            (e.isVcardOverMmsDocument = o("WAWebBaseModel").prop(!1)),
            (e.stickerMaker = o("WAWebBaseModel").prop(!1)),
            (e.supportedTypes = o("WAWebBaseModel").prop()),
            (e.quality = o("WAWebBaseModel").prop(p.Standard)),
            (e.originalAttachment = o("WAWebBaseModel").session()),
            (e.state = o("WAWebBaseModel").session()),
            (e.mediaPrep = o("WAWebBaseModel").session()),
            (e.mimetype = o("WAWebBaseModel").session()),
            (e.originalMimetype = o("WAWebBaseModel").session()),
            (e.processPromise = o("WAWebBaseModel").session()),
            (e.exception = o("WAWebBaseModel").session()),
            (e.caption = o("WAWebBaseModel").session()),
            (e.type = o("WAWebBaseModel").session(
              o("WAWebMsgType").MSG_TYPE.UNKNOWN,
            )),
            (e.hdEligible = o("WAWebBaseModel").session(!1)),
            (e.metadataByQuality = o("WAWebBaseModel").session()),
            (e.processingProgressPercentage = o("WAWebBaseModel").session(0)),
            (e.mediaEditorData = o("WAWebBaseModel").session()),
            (e.lastMediaEditorAction = o("WAWebBaseModel").session()),
            (e.editedFile = o("WAWebBaseModel").session()),
            (e.$AttachMediaImpl$p_1 = o("WAWebBaseModel").session(function () {
              return [];
            })),
            (e.$AttachMediaImpl$p_2 = o("WAWebBaseModel").session(function () {
              return [];
            })),
            (e.preview = o("WAWebBaseModel").session()),
            (e.fullPreview = o("WAWebBaseModel").session()),
            (e.fullPreviewSize = o("WAWebBaseModel").session()),
            (e.filename = o("WAWebBaseModel").session()),
            (e.documentPageCount = o("WAWebBaseModel").session()),
            (e.isPasswordProtected = o("WAWebBaseModel").session(null)),
            (e.originalFilename = o("WAWebBaseModel").session()),
            (e.isGif = o("WAWebBaseModel").session()),
            (e.gifAttribution = o("WAWebBaseModel").session()),
            (e.duration = o("WAWebBaseModel").session()),
            (e.hasFilter = o("WAWebBaseModel").session(!1)),
            (e.isCropped = o("WAWebBaseModel").session(!1)),
            (e.isRotated = o("WAWebBaseModel").session(!1)),
            (e.isVideoManuallyTrimmed = o("WAWebBaseModel").session(!1)),
            (e.isVideoMuted = o("WAWebBaseModel").session(!1)),
            (e.isVideoTrimmed = o("WAWebBaseModel").session(!1)),
            (e.$AttachMediaImpl$p_3 = null),
            (e.previewable = o("WAWebBaseModel").derived(
              function () {
                if (!this.type || !this.mimetype) return !1;
                if (
                  this.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT &&
                  o("WAWebMimeTypes").isPdfDocument(this.mimetype) &&
                  this.filename &&
                  this.state !== _.ERROR &&
                  o("WAWebTPPdfViewerGatingUtils").isAsyncPdfSendEnabled()
                )
                  return !0;
                if (!this.fullPreview) return !1;
                switch (this.type) {
                  case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
                    return !!this.filename;
                  case o("WAWebMsgType").MSG_TYPE.IMAGE:
                  case o("WAWebMsgType").MSG_TYPE.VIDEO:
                    return !(!this.fullPreviewSize || !this.preview);
                  case o("WAWebMsgType").MSG_TYPE.AUDIO:
                  case o("WAWebMsgType").MSG_TYPE.STICKER:
                  case o("WAWebMsgType").MSG_TYPE.PTT:
                  case o("WAWebMsgType").MSG_TYPE.UNKNOWN:
                  case o("WAWebMsgType").MSG_TYPE.STICKER_PACK:
                    return !0;
                  default:
                    throw r("err")(
                      "Unsupported attach media type " + this.type,
                    );
                }
              },
              [
                "preview",
                "fullPreview",
                "type",
                "filename",
                "fullPreviewSize",
                "mimetype",
                "state",
              ],
            )),
            (e.filesize = o("WAWebBaseModel").derived(
              function () {
                return this.file instanceof r("WAWebMediaOpaqueData")
                  ? this.file.size()
                  : this.file instanceof Blob
                    ? this.file.size
                    : null;
              },
              ["file"],
            )),
            (e.fileExt = o("WAWebBaseModel").derived(
              function () {
                return this.filename
                  ? o("WAWebFileUtils").getFileExtension(this.filename)
                  : null;
              },
              ["filename"],
            )),
            (e.hasSetFromPrefs = o("WAWebBaseModel").prop(!1)),
            (e.$AttachMediaImpl$p_8 = r("WAMemoizeConcurrent")(
              function () {
                return "hd-eligible";
              },
              async function (e) {
                var t = await e.attachmentPromise,
                  n = t.file,
                  r = window.URL.createObjectURL(n),
                  a = await o("WAWebMediaLoad").loadImage(r);
                return o("WAWebHDMediaUtils").isHdPhoto(
                  a.naturalHeight,
                  a.naturalWidth,
                );
              },
            )),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.initialize = function () {
            if (
              (t.prototype.initialize.call(this), this.file instanceof Promise)
            )
              ((this.originalAttachment = this.file),
                this.processAttachment(this.file));
            else throw r("err")("cannot process non-promise file");
          }),
          (a.processAttachment = function (t) {
            var e,
              n = this;
            ((this.state = _.PROCESSING),
              (this.mediaEditorData = r("WAWebMediaEditorData").create()),
              (e = this.$AttachMediaImpl$p_3) == null || e.abort(),
              (this.$AttachMediaImpl$p_3 = new AbortController()),
              (this.processPromise = this.$AttachMediaImpl$p_4(t).then(
                function () {
                  var e = new Image();
                  ((e.src = n.fullPreview),
                    (e.onload = function () {
                      var t = {};
                      if (n.stickerMaker) {
                        t.fitToSquare = !0;
                        var r =
                          2 *
                          o("WAWebStickerConstants")
                            .STICKER_MAKER_IMAGE_PADDING;
                        t.scale = {
                          x:
                            1 -
                            r / o("WAWebStickerConstants").STICKER_DIMENSION,
                          y:
                            1 -
                            r / o("WAWebStickerConstants").STICKER_DIMENSION,
                        };
                      }
                      n.mediaEditorData = n.mediaEditorData.setBackground(e, t);
                    }));
                },
              )));
          }),
          (a.cancelEnrichment = function () {
            var e;
            (e = this.$AttachMediaImpl$p_3) == null || e.abort();
          }),
          (a.$AttachMediaImpl$p_5 = function (t) {
            switch (t != null ? t : this.quality) {
              case p.Standard:
                return o("WAWebABProps").getABPropConfigValue(
                  "web_image_max_edge",
                );
              case p.HD:
                return o("WAWebABProps").getABPropConfigValue(
                  "web_image_max_hd_edge",
                );
            }
          }),
          (a.updateQuality = function (n) {
            ((this.quality = n),
              this.originalAttachment != null
                ? this.processAttachment(this.originalAttachment)
                : o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[AttachMediaModel] originalAttachment is null",
                        ])),
                    )
                    .tags("media")
                    .sendLogs("attach-media-update-quality-null-attachment"));
          }),
          (a.setQualityFromPrefs = function () {
            if (!this.hasSetFromPrefs) {
              var e =
                this.hdEligible &&
                r("WAWebChatPreferenceCollection").getDefault().hdMediaEnabled
                  ? p.HD
                  : p.Standard;
              (this.updateQuality(e), (this.hasSetFromPrefs = !0));
            }
          }),
          (a.$AttachMediaImpl$p_6 = function (t) {
            return t == null || this.supportedTypes == null
              ? !0
              : this.supportedTypes.has(t);
          }),
          (a.$AttachMediaImpl$p_7 = async function (t) {
            this.metadataByQuality = new Map(
              o("WAWebPREGatingUtils").isPREMediaUploadCacheEnabled()
                ? [
                    [
                      this.quality,
                      await o("WAWebMediaDataUtils").getImageMetadata(t, {
                        maxDimension: this.$AttachMediaImpl$p_5(this.quality),
                      }),
                    ],
                  ]
                : [
                    [
                      p.Standard,
                      await o("WAWebMediaDataUtils").getImageMetadata(t, {
                        maxDimension: this.$AttachMediaImpl$p_5(p.Standard),
                      }),
                    ],
                    [
                      p.HD,
                      await o("WAWebMediaDataUtils").getImageMetadata(t, {
                        maxDimension: this.$AttachMediaImpl$p_5(p.HD),
                      }),
                    ],
                  ],
            );
          }),
          (a.$AttachMediaImpl$p_4 = function (t) {
            var e = this,
              n;
            return t
              .then(async function (n) {
                var a;
                if (!e.$AttachMediaImpl$p_6(n.type))
                  throw new (o("WAWebMiscErrors").InvalidMediaFileType)();
                (e.set(n), (e.originalFilename = n.filename));
                var i = {
                    maxDimension: e.$AttachMediaImpl$p_5(),
                    fileOrigin: e.fileOrigin,
                    signal:
                      (a = e.$AttachMediaImpl$p_3) == null ? void 0 : a.signal,
                  },
                  l = n.asSticker,
                  c = n.documentPageCount,
                  d = n.file,
                  m = n.filename,
                  p = n.gifAttribution,
                  f = n.isGif,
                  g = n.isVcardOverMmsDocument,
                  h = n.stickerMaker;
                if (
                  (l === !0 || h === !0) &&
                  n.type === o("WAWebFileUtils").FILETYPE.VIDEO
                )
                  throw new (o("WAWebMiscErrors").InvalidMediaFileType)();
                (f === !0
                  ? ((i.asGif = !0),
                    (i.gifAttribution = p != null ? p : void 0),
                    (i.accessibilityLabel = n.accessibilityLabel))
                  : n.type === o("WAWebFileUtils").FILETYPE.DOCUMENT
                    ? ((i.asDocument = !0),
                      (i.filename = m),
                      (i.isVcardOverMmsDocument = g),
                      (i.documentPageCount = c))
                    : n.type === o("WAWebFileUtils").FILETYPE.STICKER_PACK &&
                      (i.asStickerPack = !0),
                  e.type === o("WAWebMsgType").MSG_TYPE.VIDEO &&
                    ((i.setProgressPercentage = function (t) {
                      e.processingProgressPercentage = t;
                    }),
                    (i.setMediaPreview = function (t, n, r) {
                      var a = o("WABase64").encodeB64(t);
                      (e.updatePreview(a),
                        (e.fullPreviewSize = { width: n, height: r }));
                      var i = new Blob([t], { type: "image/jpeg" }),
                        l = window.URL.createObjectURL(i);
                      e.updateFullPreview(l);
                    }),
                    (i.setMimeType = function (t) {
                      e.mimetype = t;
                    }),
                    (i.resetMediaPreview = function () {
                      (e.updatePreview(""), e.updateFullPreview(""));
                    })),
                  (i.asSticker = l),
                  h === !0 &&
                    ((i.minDimension = o(
                      "WAWebStickerConstants",
                    ).STICKER_DIMENSION),
                    (i.transparency = !0)),
                  (i.precomputedFields = {
                    fullHeight: n.fullPreviewSize
                      ? n.fullPreviewSize.height
                      : void 0,
                    fullWidth: n.fullPreviewSize
                      ? n.fullPreviewSize.width
                      : void 0,
                    preview: n.preview,
                    duration: n.duration,
                  }));
                var y = r("WAWebMediaOpaqueData").createFromData(d, d.type);
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "WAWebAttachMediaModel:processAttachmentPromiseHelper before prepRawMedia",
                    ])),
                );
                var C = o("WAWebMedia").prepRawMedia(y, i);
                e.set({ mediaPrep: C });
                var b = await C.waitForPrep(),
                  v = b.documentPreview,
                  S =
                    b.mediaBlob instanceof r("WAWebMediaOpaqueData")
                      ? window.URL.createObjectURL(b.mediaBlob.forceToBlob())
                      : window.URL.createObjectURL(b.mediaBlob),
                  R = {
                    file: b.mediaBlob,
                    fullPreview: S,
                    type: b.type,
                    filename: b.filename,
                    mimetype: b.mimetype,
                    originalMimetype: n.mimetype,
                    preview: b.preview,
                    state: _.READY,
                    isGif: b.isGif,
                    fullPreviewSize: void 0,
                    documentPageCount: c,
                    isVcardOverMmsDocument: b.isVcardOverMmsDocument,
                    isPasswordProtected: b.isPasswordProtected,
                    editedFile: b.mediaBlob,
                    duration: b.duration,
                  };
                (o("isNonZeroNumber").isNonZeroNumber(b.fullWidth) &&
                  o("isNonZeroNumber").isNonZeroNumber(b.fullHeight) &&
                  (R.fullPreviewSize = {
                    height: b.fullHeight,
                    width: b.fullWidth,
                  }),
                  b.type === o("WAWebMsgType").MSG_TYPE.IMAGE &&
                    ((R.preview = S),
                    (e.originalAttachment = t),
                    b.isGif ||
                      ((e.hdEligible = await e.$AttachMediaImpl$p_8({
                        attachmentPromise: t,
                        signal: new AbortController().signal,
                      })),
                      e.hdEligible && (await e.$AttachMediaImpl$p_7(d)))),
                  b.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT &&
                    v &&
                    ((R.fullPreview = v.url),
                    (R.preview = v.thumbUrl),
                    (R.fullPreviewSize = { height: v.height, width: v.width }),
                    (R.documentPageCount = v.pdfPages)),
                  e.set(R),
                  e.previewable ||
                    o("WALogger")
                      .ERROR(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "Invariant violated, processed file is not previewable",
                          ])),
                      )
                      .sendLogs("AttachMedia processFile"));
              })
              .catch(
                o("WAFilteredCatch").filteredCatch(
                  [
                    (n = o("WAWebMiscErrors")).InvalidMediaFileType,
                    n.InvalidImageFileType,
                  ],
                  function (n) {
                    if (
                      e.isGif ||
                      e.type === o("WAWebFileUtils").FILETYPE.DOCUMENT ||
                      !e.$AttachMediaImpl$p_6(
                        o("WAWebMsgType").MSG_TYPE.DOCUMENT,
                      )
                    )
                      throw n;
                    return e.$AttachMediaImpl$p_4(
                      t.then(function (e) {
                        return (
                          (e.type = o("WAWebFileUtils").FILETYPE.DOCUMENT),
                          e
                        );
                      }),
                    );
                  },
                ),
              )
              .catch(
                o("WAFilteredCatch").filteredCatch(
                  [
                    r("WAWebMediaFileTooLargeError"),
                    n.MediaFileFailedLoad,
                    n.MediaFileEmpty,
                  ],
                  function (t) {
                    return (e.set({ exception: t, state: _.ERROR }), e);
                  },
                ),
              )
              .catch(function (t) {
                return (
                  o("WALogger").WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "AttachMedia:processFile convert unexpected error to InvalidMediaFileType: ",
                        "",
                      ])),
                    t,
                  ),
                  e.set({
                    exception: new (o(
                      "WAWebMiscErrors",
                    ).InvalidMediaFileType)(),
                    state: _.ERROR,
                  }),
                  e
                );
              });
          }),
          (a.sendToChat = function (t) {
            var e = t.chat,
              n = t.options;
            if (!this.mediaPrep)
              return Promise.reject(r("err")("MediaPrep not available"));
            if (this.state === _.ERROR) return Promise.reject(this.exception);
            if (
              this.state === _.PROCESSING &&
              (this.previewable !== !0 || n.addEvenWhilePreparing !== !0)
            )
              return Promise.reject(r("err")("Media still processing"));
            if (this.state === _.READY)
              return (
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "AttachMedia:sendToChat: before sendToChat",
                    ])),
                ),
                this.mediaPrep.sendToChat({ chat: e, options: n })
              );
            var a = { mimetype: this.mimetype };
            switch (this.type) {
              case o("WAWebMsgType").MSG_TYPE.VIDEO:
                ((a.isGif = this.isGif),
                  (a.gifAttribution = this.gifAttribution));
              case o("WAWebMsgType").MSG_TYPE.IMAGE:
                ((a.width = this.fullPreviewSize.width),
                  (a.height = this.fullPreviewSize.height),
                  (a.body = this.preview),
                  (n.placeholderProps = a));
                break;
              case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
                ((a.pageCount = this.documentPageCount),
                  (a.filename = this.filename),
                  (a.body = this.preview),
                  (n.placeholderProps = a));
                break;
              case o("WAWebMsgType").MSG_TYPE.AUDIO:
              case o("WAWebMsgType").MSG_TYPE.PTT:
              default:
                break;
            }
            return this.mediaPrep.sendToChat({ chat: e, options: n });
          }),
          (a.getFileType = function () {
            if (!(this.file instanceof Blob || this.file instanceof File))
              throw r("err")("expected file to be a Blob or File");
            return o("WAWebFileUtils").typeFromMimetype(this.file.type);
          }),
          (a.isViewableOnce = function () {
            var e = new Set([
              o("WAWebMsgType").MSG_TYPE.IMAGE,
              o("WAWebMsgType").MSG_TYPE.VIDEO,
            ]);
            return e.has(this.type) && !this.isGif;
          }),
          (a.delete = function () {
            (this.fullPreview && window.URL.revokeObjectURL(this.fullPreview),
              t.prototype.delete.call(this));
          }),
          (a.updateMediaEditorData = function (t, n) {
            return this.mediaEditorData === t
              ? this.mediaEditorData
              : (n.undoable &&
                  (this.$AttachMediaImpl$p_1.push([
                    this.mediaEditorData,
                    this.lastMediaEditorAction,
                  ]),
                  (this.lastMediaEditorAction = n.lastAction),
                  (this.$AttachMediaImpl$p_2 = [])),
                (this.mediaEditorData = t),
                this.mediaEditorData);
          }),
          (a.undoMediaEditorData = function (t) {
            if ((t === void 0 && (t = !0), this.canUndoMediaEditorData())) {
              t &&
                this.$AttachMediaImpl$p_2.push([
                  this.mediaEditorData,
                  this.lastMediaEditorAction,
                ]);
              var e = this.$AttachMediaImpl$p_1.pop(),
                n = e[0],
                r = e[1];
              ((this.mediaEditorData = n), (this.lastMediaEditorAction = r));
            }
          }),
          (a.redoMediaEditorData = function () {
            if (this.canRedoMediaEditorData()) {
              this.$AttachMediaImpl$p_1.push([
                this.mediaEditorData,
                this.lastMediaEditorAction,
              ]);
              var e = this.$AttachMediaImpl$p_2.pop(),
                t = e[0],
                n = e[1];
              ((this.mediaEditorData = t), (this.lastMediaEditorAction = n));
            }
          }),
          (a.canUndoMediaEditorData = function () {
            return this.$AttachMediaImpl$p_1.length > 0;
          }),
          (a.canRedoMediaEditorData = function () {
            return this.$AttachMediaImpl$p_2.length > 0;
          }),
          (a.updateEditedFile = function (t) {
            this.editedFile = t;
          }),
          (a.updatePreview = function (t) {
            (window.URL.revokeObjectURL(this.preview), (this.preview = t));
          }),
          (a.updateFullPreview = function (t) {
            (window.URL.revokeObjectURL(this.fullPreview),
              (this.fullPreview = t));
          }),
          (a.updateCaption = function (t) {
            this.caption = t;
          }),
          n
        );
      })(o("WAWebBaseModel").BaseModel);
    f.Proxy = "attachMedia";
    var g = o("WAWebBaseModel").defineModel(f);
    ((l.MediaEditorAction = m),
      (l.MediaQuality = p),
      (l.ATTACH_MEDIA_STATE = _),
      (l.AttachMedia = g));
  },
  98,
);
