__d(
  "WAWebAttachMediaModel",
  [
    "$InternalEnum",
    "Promise",
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
    "WAWebMiscErrors",
    "WAWebMsgType",
    "WAWebPREGatingUtils",
    "WAWebStickerConstants",
    "asyncToGeneratorRuntime",
    "err",
    "isNonZeroNumber",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = n("$InternalEnum").Mirrored([
        "Outline",
        "OutlineDone",
        "CropRotateCanvas",
      ]),
      _ = n("$InternalEnum").Mirrored(["Standard", "HD"]),
      f = { READY: "ready", PROCESSING: "processing", ERROR: "error" },
      g = (function (t) {
        function a() {
          for (var e, a = arguments.length, i = new Array(a), l = 0; l < a; l++)
            i[l] = arguments[l];
          return (
            (e = t.call.apply(t, [this].concat(i)) || this),
            (e.id = o("WAWebBaseModel").prop()),
            (e.file = o("WAWebBaseModel").prop()),
            (e.uiProcessed = o("WAWebBaseModel").prop(!1)),
            (e.fileOrigin = o("WAWebBaseModel").prop()),
            (e.isVcardOverMmsDocument = o("WAWebBaseModel").prop(!1)),
            (e.stickerMaker = o("WAWebBaseModel").prop(!1)),
            (e.supportedTypes = o("WAWebBaseModel").prop()),
            (e.quality = o("WAWebBaseModel").prop(_.Standard)),
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
            (e.isGif = o("WAWebBaseModel").session()),
            (e.gifAttribution = o("WAWebBaseModel").session()),
            (e.duration = o("WAWebBaseModel").session()),
            (e.hasFilter = o("WAWebBaseModel").session(!1)),
            (e.isCropped = o("WAWebBaseModel").session(!1)),
            (e.isRotated = o("WAWebBaseModel").session(!1)),
            (e.isVideoManuallyTrimmed = o("WAWebBaseModel").session(!1)),
            (e.isVideoMuted = o("WAWebBaseModel").session(!1)),
            (e.isVideoTrimmed = o("WAWebBaseModel").session(!1)),
            (e.previewable = o("WAWebBaseModel").derived(
              function () {
                if (!this.type || !this.mimetype || !this.fullPreview)
                  return !1;
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
            (e.$AttachMediaImpl$p_7 = r("WAMemoizeConcurrent")(
              function () {
                return "hd-eligible";
              },
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = yield e.attachmentPromise,
                      n = t.file,
                      r = window.URL.createObjectURL(n),
                      a = yield o("WAWebMediaLoad").loadImage(r);
                    return o("WAWebHDMediaUtils").isHdPhoto(
                      a.naturalHeight,
                      a.naturalWidth,
                    );
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            )),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.initialize = function () {
            if (
              (t.prototype.initialize.call(this),
              this.file instanceof (m || (m = n("Promise"))))
            )
              ((this.originalAttachment = this.file),
                this.processAttachment(this.file));
            else throw r("err")("cannot process non-promise file");
          }),
          (i.processAttachment = function (t) {
            var e = this;
            ((this.state = f.PROCESSING),
              (this.mediaEditorData = r("WAWebMediaEditorData").create()),
              (this.processPromise = this.$AttachMediaImpl$p_3(t).then(
                function () {
                  var t = new Image();
                  ((t.src = e.fullPreview),
                    (t.onload = function () {
                      var n = {};
                      if (e.stickerMaker) {
                        n.fitToSquare = !0;
                        var r =
                          2 *
                          o("WAWebStickerConstants")
                            .STICKER_MAKER_IMAGE_PADDING;
                        n.scale = {
                          x:
                            1 -
                            r / o("WAWebStickerConstants").STICKER_DIMENSION,
                          y:
                            1 -
                            r / o("WAWebStickerConstants").STICKER_DIMENSION,
                        };
                      }
                      e.mediaEditorData = e.mediaEditorData.setBackground(t, n);
                    }));
                },
              )));
          }),
          (i.$AttachMediaImpl$p_4 = function (t) {
            switch (t != null ? t : this.quality) {
              case _.Standard:
                return o("WAWebABProps").getABPropConfigValue(
                  "web_image_max_edge",
                );
              case _.HD:
                return o("WAWebABProps").getABPropConfigValue(
                  "web_image_max_hd_edge",
                );
            }
          }),
          (i.updateQuality = function (n) {
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
          (i.setQualityFromPrefs = function () {
            if (!this.hasSetFromPrefs) {
              var e =
                this.hdEligible &&
                r("WAWebChatPreferenceCollection").getDefault().hdMediaEnabled
                  ? _.HD
                  : _.Standard;
              (this.updateQuality(e), (this.hasSetFromPrefs = !0));
            }
          }),
          (i.$AttachMediaImpl$p_5 = function (t) {
            return t == null || this.supportedTypes == null
              ? !0
              : this.supportedTypes.has(t);
          }),
          (i.$AttachMediaImpl$p_6 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                this.metadataByQuality = new Map(
                  o("WAWebPREGatingUtils").isPREMediaUploadCacheEnabled()
                    ? [
                        [
                          this.quality,
                          yield o("WAWebMediaDataUtils").getImageMetadata(e, {
                            maxDimension: this.$AttachMediaImpl$p_4(
                              this.quality,
                            ),
                          }),
                        ],
                      ]
                    : [
                        [
                          _.Standard,
                          yield o("WAWebMediaDataUtils").getImageMetadata(e, {
                            maxDimension: this.$AttachMediaImpl$p_4(_.Standard),
                          }),
                        ],
                        [
                          _.HD,
                          yield o("WAWebMediaDataUtils").getImageMetadata(e, {
                            maxDimension: this.$AttachMediaImpl$p_4(_.HD),
                          }),
                        ],
                      ],
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.$AttachMediaImpl$p_3 = function (t) {
            var e = this,
              a;
            return t
              .then(
                (function () {
                  var a = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (n) {
                      if (!e.$AttachMediaImpl$p_5(n.type))
                        throw new (o("WAWebMiscErrors").InvalidMediaFileType)();
                      e.set(n);
                      var a = {
                          maxDimension: e.$AttachMediaImpl$p_4(),
                          fileOrigin: e.fileOrigin,
                        },
                        i = n.asSticker,
                        l = n.documentPageCount,
                        c = n.file,
                        d = n.filename,
                        m = n.gifAttribution,
                        p = n.isGif,
                        _ = n.isVcardOverMmsDocument,
                        g = n.stickerMaker;
                      if (
                        (i === !0 || g === !0) &&
                        n.type === o("WAWebFileUtils").FILETYPE.VIDEO
                      )
                        throw new (o("WAWebMiscErrors").InvalidMediaFileType)();
                      (p === !0
                        ? ((a.asGif = !0),
                          (a.gifAttribution = m != null ? m : void 0),
                          (a.accessibilityLabel = n.accessibilityLabel))
                        : n.type === o("WAWebFileUtils").FILETYPE.DOCUMENT
                          ? ((a.asDocument = !0),
                            (a.filename = d),
                            (a.isVcardOverMmsDocument = _),
                            (a.documentPageCount = l))
                          : n.type ===
                              o("WAWebFileUtils").FILETYPE.STICKER_PACK &&
                            (a.asStickerPack = !0),
                        e.type === o("WAWebMsgType").MSG_TYPE.VIDEO &&
                          ((a.setProgressPercentage = function (t) {
                            e.processingProgressPercentage = t;
                          }),
                          (a.setMediaPreview = function (t, n, r) {
                            var a = o("WABase64").encodeB64(t);
                            (e.updatePreview(a),
                              (e.fullPreviewSize = { width: n, height: r }));
                            var i = new Blob([t], { type: "image/jpeg" }),
                              l = window.URL.createObjectURL(i);
                            e.updateFullPreview(l);
                          }),
                          (a.setMimeType = function (t) {
                            e.mimetype = t;
                          }),
                          (a.resetMediaPreview = function () {
                            (e.updatePreview(""), e.updateFullPreview(""));
                          })),
                        (a.asSticker = i),
                        g === !0 &&
                          ((a.minDimension = o(
                            "WAWebStickerConstants",
                          ).STICKER_DIMENSION),
                          (a.transparency = !0)),
                        (a.precomputedFields = {
                          fullHeight: n.fullPreviewSize
                            ? n.fullPreviewSize.height
                            : void 0,
                          fullWidth: n.fullPreviewSize
                            ? n.fullPreviewSize.width
                            : void 0,
                          preview: n.preview,
                          duration: n.duration,
                        }));
                      var h = r("WAWebMediaOpaqueData").createFromData(
                        c,
                        c.type,
                      );
                      o("WALogger").LOG(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "WAWebAttachMediaModel:processAttachmentPromiseHelper before prepRawMedia",
                          ])),
                      );
                      var y = o("WAWebMedia").prepRawMedia(h, a);
                      e.set({ mediaPrep: y });
                      var C = yield y.waitForPrep(),
                        b = C.documentPreview,
                        v =
                          C.mediaBlob instanceof r("WAWebMediaOpaqueData")
                            ? window.URL.createObjectURL(
                                C.mediaBlob.forceToBlob(),
                              )
                            : window.URL.createObjectURL(C.mediaBlob),
                        S = {
                          file: C.mediaBlob,
                          fullPreview: v,
                          type: C.type,
                          filename: C.filename,
                          mimetype: C.mimetype,
                          originalMimetype: n.mimetype,
                          preview: C.preview,
                          state: f.READY,
                          isGif: C.isGif,
                          fullPreviewSize: void 0,
                          documentPageCount: l,
                          isVcardOverMmsDocument: C.isVcardOverMmsDocument,
                          isPasswordProtected: C.isPasswordProtected,
                          editedFile: C.mediaBlob,
                          duration: C.duration,
                        };
                      (o("isNonZeroNumber").isNonZeroNumber(C.fullWidth) &&
                        o("isNonZeroNumber").isNonZeroNumber(C.fullHeight) &&
                        (S.fullPreviewSize = {
                          height: C.fullHeight,
                          width: C.fullWidth,
                        }),
                        C.type === o("WAWebMsgType").MSG_TYPE.IMAGE &&
                          ((S.preview = v),
                          (e.originalAttachment = t),
                          C.isGif ||
                            ((e.hdEligible = yield e.$AttachMediaImpl$p_7({
                              attachmentPromise: t,
                              signal: new AbortController().signal,
                            })),
                            e.hdEligible && (yield e.$AttachMediaImpl$p_6(c)))),
                        C.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT &&
                          b &&
                          ((S.fullPreview = b.url),
                          (S.preview = b.thumbUrl),
                          (S.fullPreviewSize = {
                            height: b.height,
                            width: b.width,
                          }),
                          (S.documentPageCount = b.pdfPages)),
                        e.set(S),
                        e.previewable ||
                          o("WALogger")
                            .ERROR(
                              u ||
                                (u = babelHelpers.taggedTemplateLiteralLoose([
                                  "Invariant violated, processed file is not previewable",
                                ])),
                            )
                            .sendLogs("AttachMedia processFile"));
                    },
                  );
                  return function (e) {
                    return a.apply(this, arguments);
                  };
                })(),
              )
              .catch(
                o("WAFilteredCatch").filteredCatch(
                  [
                    (a = o("WAWebMiscErrors")).InvalidMediaFileType,
                    a.InvalidImageFileType,
                  ],
                  function (n) {
                    if (
                      e.isGif ||
                      e.type === o("WAWebFileUtils").FILETYPE.DOCUMENT ||
                      !e.$AttachMediaImpl$p_5(
                        o("WAWebMsgType").MSG_TYPE.DOCUMENT,
                      )
                    )
                      throw n;
                    return e.$AttachMediaImpl$p_3(
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
                    a.MediaFileFailedLoad,
                    a.MediaFileEmpty,
                  ],
                  function (t) {
                    return (e.set({ exception: t, state: f.ERROR }), e);
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
                    state: f.ERROR,
                  }),
                  e
                );
              });
          }),
          (i.sendToChat = function (t) {
            var e = t.chat,
              a = t.options;
            if (!this.mediaPrep)
              return (m || (m = n("Promise"))).reject(
                r("err")("MediaPrep not available"),
              );
            if (this.state === f.ERROR)
              return (m || (m = n("Promise"))).reject(this.exception);
            if (
              this.state === f.PROCESSING &&
              (this.previewable !== !0 || a.addEvenWhilePreparing !== !0)
            )
              return (m || (m = n("Promise"))).reject(
                r("err")("Media still processing"),
              );
            if (this.state === f.READY)
              return (
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "AttachMedia:sendToChat: before sendToChat",
                    ])),
                ),
                this.mediaPrep.sendToChat({ chat: e, options: a })
              );
            var i = { mimetype: this.mimetype };
            switch (this.type) {
              case o("WAWebMsgType").MSG_TYPE.VIDEO:
                ((i.isGif = this.isGif),
                  (i.gifAttribution = this.gifAttribution));
              case o("WAWebMsgType").MSG_TYPE.IMAGE:
                ((i.width = this.fullPreviewSize.width),
                  (i.height = this.fullPreviewSize.height),
                  (i.body = this.preview),
                  (a.placeholderProps = i));
                break;
              case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
                ((i.pageCount = this.documentPageCount),
                  (i.filename = this.filename),
                  (i.body = this.preview),
                  (a.placeholderProps = i));
                break;
              case o("WAWebMsgType").MSG_TYPE.AUDIO:
              case o("WAWebMsgType").MSG_TYPE.PTT:
              default:
                break;
            }
            return this.mediaPrep.sendToChat({ chat: e, options: a });
          }),
          (i.getFileType = function () {
            if (!(this.file instanceof Blob || this.file instanceof File))
              throw r("err")("expected file to be a Blob or File");
            return o("WAWebFileUtils").typeFromMimetype(this.file.type);
          }),
          (i.isViewableOnce = function () {
            var e = new Set([
              o("WAWebMsgType").MSG_TYPE.IMAGE,
              o("WAWebMsgType").MSG_TYPE.VIDEO,
            ]);
            return e.has(this.type) && !this.isGif;
          }),
          (i.delete = function () {
            (this.fullPreview && window.URL.revokeObjectURL(this.fullPreview),
              t.prototype.delete.call(this));
          }),
          (i.updateMediaEditorData = function (t, n) {
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
          (i.undoMediaEditorData = function (t) {
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
          (i.redoMediaEditorData = function () {
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
          (i.canUndoMediaEditorData = function () {
            return this.$AttachMediaImpl$p_1.length > 0;
          }),
          (i.canRedoMediaEditorData = function () {
            return this.$AttachMediaImpl$p_2.length > 0;
          }),
          (i.updateEditedFile = function (t) {
            this.editedFile = t;
          }),
          (i.updatePreview = function (t) {
            (window.URL.revokeObjectURL(this.preview), (this.preview = t));
          }),
          (i.updateFullPreview = function (t) {
            (window.URL.revokeObjectURL(this.fullPreview),
              (this.fullPreview = t));
          }),
          (i.updateCaption = function (t) {
            this.caption = t;
          }),
          a
        );
      })(o("WAWebBaseModel").BaseModel);
    g.Proxy = "attachMedia";
    var h = o("WAWebBaseModel").defineModel(g);
    ((l.MediaEditorAction = p),
      (l.MediaQuality = _),
      (l.ATTACH_MEDIA_STATE = f),
      (l.AttachMedia = h));
  },
  98,
);
