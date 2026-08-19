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
    "WAWebChatGetters",
    "WAWebFileUtils",
    "WAWebHDMediaUtils",
    "WAWebMedia",
    "WAWebMediaDataUtils",
    "WAWebMediaEditorData",
    "WAWebMediaFileErrors",
    "WAWebMediaFileTooLargeError",
    "WAWebMediaGatingUtils",
    "WAWebMediaLoad",
    "WAWebMediaOpaqueData",
    "WAWebMediaProvenanceQpl",
    "WAWebMediaWorkerProxy",
    "WAWebMimeTypes",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebPREGatingUtils",
    "WAWebStickerConstants",
    "WAWebTPPdfViewerGatingUtils",
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
      p,
      _,
      f,
      g = n("$InternalEnum").Mirrored([
        "Outline",
        "OutlineDone",
        "CropRotateCanvas",
      ]),
      h = n("$InternalEnum").Mirrored(["Standard", "HD"]),
      y = { READY: "ready", PROCESSING: "processing", ERROR: "error" },
      C = 1;
    function b() {
      return String(C++);
    }
    var v = (function (t) {
      function a() {
        for (var e, a = arguments.length, i = new Array(a), l = 0; l < a; l++)
          i[l] = arguments[l];
        return (
          (e = t.call.apply(t, [this].concat(i)) || this),
          (e.id = o("WAWebBaseModel").prop(b)),
          (e.file = o("WAWebBaseModel").prop()),
          (e.uiProcessed = o("WAWebBaseModel").prop(!1)),
          (e.fileOrigin = o("WAWebBaseModel").prop()),
          (e.isVcardOverMmsDocument = o("WAWebBaseModel").prop(!1)),
          (e.stickerMaker = o("WAWebBaseModel").prop(!1)),
          (e.supportedTypes = o("WAWebBaseModel").prop()),
          (e.quality = o("WAWebBaseModel").prop(h.Standard)),
          (e.originalAttachment = o("WAWebBaseModel").session()),
          (e.provenanceSourceAttachment = o("WAWebBaseModel").session()),
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
                this.state !== y.ERROR &&
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
                  throw r("err")("Unsupported attach media type " + this.type);
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
            this.file instanceof (f || (f = n("Promise"))))
          )
            ((this.originalAttachment = this.file),
              (this.provenanceSourceAttachment = this.file),
              this.processAttachment(this.file));
          else throw r("err")("cannot process non-promise file");
        }),
        (i.processAttachment = function (t) {
          var e,
            n = this;
          ((this.state = y.PROCESSING),
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
                        o("WAWebStickerConstants").STICKER_MAKER_IMAGE_PADDING;
                      t.scale = {
                        x: 1 - r / o("WAWebStickerConstants").STICKER_DIMENSION,
                        y: 1 - r / o("WAWebStickerConstants").STICKER_DIMENSION,
                      };
                    }
                    n.mediaEditorData = n.mediaEditorData.setBackground(e, t);
                  }));
              },
            )));
        }),
        (i.cancelEnrichment = function () {
          var e;
          (e = this.$AttachMediaImpl$p_3) == null || e.abort();
        }),
        (i.$AttachMediaImpl$p_5 = function (t) {
          switch (t != null ? t : this.quality) {
            case h.Standard:
              return o("WAWebABProps").getABPropConfigValue(
                "web_image_max_edge",
              );
            case h.HD:
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
        (i.$AttachMediaImpl$p_6 = function (t) {
          return t == null || this.supportedTypes == null
            ? !0
            : this.supportedTypes.has(t);
        }),
        (i.$AttachMediaImpl$p_7 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            this.metadataByQuality = new Map(
              o("WAWebPREGatingUtils").isPREMediaUploadCacheEnabled()
                ? [
                    [
                      this.quality,
                      yield o("WAWebMediaDataUtils").getImageMetadata(e, {
                        maxDimension: this.$AttachMediaImpl$p_5(this.quality),
                      }),
                    ],
                  ]
                : [
                    [
                      h.Standard,
                      yield o("WAWebMediaDataUtils").getImageMetadata(e, {
                        maxDimension: this.$AttachMediaImpl$p_5(h.Standard),
                      }),
                    ],
                    [
                      h.HD,
                      yield o("WAWebMediaDataUtils").getImageMetadata(e, {
                        maxDimension: this.$AttachMediaImpl$p_5(h.HD),
                      }),
                    ],
                  ],
            );
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (i.$AttachMediaImpl$p_4 = function (t) {
          var e = this,
            a;
          return t
            .then(
              (function () {
                var a = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (n) {
                    var a;
                    if (!e.$AttachMediaImpl$p_6(n.type))
                      throw new (o(
                        "WAWebMediaFileErrors",
                      ).InvalidMediaFileType)();
                    (e.set(n), (e.originalFilename = n.filename));
                    var i = {
                        maxDimension: e.$AttachMediaImpl$p_5(),
                        fileOrigin: e.fileOrigin,
                        signal:
                          (a = e.$AttachMediaImpl$p_3) == null
                            ? void 0
                            : a.signal,
                      },
                      l = n.asSticker,
                      c = n.documentPageCount,
                      d = n.file,
                      m = n.filename,
                      p = n.gifAttribution,
                      _ = n.isGif,
                      f = n.isVcardOverMmsDocument,
                      g = n.stickerMaker;
                    if (
                      (l === !0 || g === !0) &&
                      n.type === o("WAWebFileUtils").FILETYPE.VIDEO
                    )
                      throw new (o(
                        "WAWebMediaFileErrors",
                      ).InvalidMediaFileType)();
                    (_ === !0
                      ? ((i.asGif = !0),
                        (i.gifAttribution = p != null ? p : void 0),
                        (i.accessibilityLabel = n.accessibilityLabel))
                      : n.type === o("WAWebFileUtils").FILETYPE.DOCUMENT
                        ? ((i.asDocument = !0),
                          (i.filename = m),
                          (i.isVcardOverMmsDocument = f),
                          (i.documentPageCount = c))
                        : n.type ===
                            o("WAWebFileUtils").FILETYPE.STICKER_PACK &&
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
                      g === !0 &&
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
                    var h = r("WAWebMediaOpaqueData").createFromData(d, d.type);
                    o("WALogger").LOG(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "processAttachmentPromiseHelper before prepRawMedia",
                        ])),
                    );
                    var C = o("WAWebMedia").prepRawMedia(h, i);
                    e.set({ mediaPrep: C });
                    var b = yield C.waitForPrep(),
                      v = b.documentPreview,
                      S =
                        b.mediaBlob instanceof r("WAWebMediaOpaqueData")
                          ? window.URL.createObjectURL(
                              b.mediaBlob.forceToBlob(),
                            )
                          : window.URL.createObjectURL(b.mediaBlob),
                      R = {
                        file: b.mediaBlob,
                        fullPreview: S,
                        type: b.type,
                        filename: b.filename,
                        mimetype: b.mimetype,
                        originalMimetype: n.mimetype,
                        preview: b.preview,
                        state: y.READY,
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
                          ((e.hdEligible = yield e.$AttachMediaImpl$p_8({
                            attachmentPromise: t,
                            signal: new AbortController().signal,
                          })),
                          e.hdEligible && (yield e.$AttachMediaImpl$p_7(d)))),
                      b.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT &&
                        v &&
                        ((R.fullPreview = v.url),
                        (R.preview = v.thumbUrl),
                        (R.fullPreviewSize = {
                          height: v.height,
                          width: v.width,
                        }),
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
                  (a = o("WAWebMediaFileErrors")).InvalidMediaFileType,
                  a.InvalidImageFileType,
                ],
                function (n) {
                  if (
                    e.isGif ||
                    e.type === o("WAWebFileUtils").FILETYPE.DOCUMENT ||
                    !e.$AttachMediaImpl$p_6(o("WAWebMsgType").MSG_TYPE.DOCUMENT)
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
                  a.MediaFileFailedLoad,
                  a.MediaFileEmpty,
                ],
                function (t) {
                  return (e.set({ exception: t, state: y.ERROR }), e);
                },
              ),
            )
            .catch(function (t) {
              return (
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[AttachMedia] unexpected err -> InvalidMediaFileType: ",
                      "",
                    ])),
                  t,
                ),
                e.set({
                  exception: new (o(
                    "WAWebMediaFileErrors",
                  ).InvalidMediaFileType)(),
                  state: y.ERROR,
                }),
                e
              );
            });
        }),
        (i.sendToChat = function (t) {
          var e = t.chat,
            o = t.options;
          return this.mediaPrep
            ? this.state === y.ERROR
              ? (f || (f = n("Promise"))).reject(this.exception)
              : this.state === y.PROCESSING &&
                  (this.previewable !== !0 || o.addEvenWhilePreparing !== !0)
                ? (f || (f = n("Promise"))).reject(
                    r("err")("Media still processing"),
                  )
                : (this.$AttachMediaImpl$p_9(e) &&
                    (o.aiProvenancePromise = this.$AttachMediaImpl$p_10()),
                  this.$AttachMediaImpl$p_11({ chat: e, options: o }))
            : (f || (f = n("Promise"))).reject(
                r("err")("MediaPrep not available"),
              );
        }),
        (i.$AttachMediaImpl$p_9 = function (t) {
          return (
            (this.type === o("WAWebMsgType").MSG_TYPE.IMAGE ||
              this.type === o("WAWebMsgType").MSG_TYPE.VIDEO) &&
            o("WAWebChatGetters").getIsNewsletter(t) &&
            o("WAWebNewsletterGatingUtils").isChannelSGISenderEnabled()
          );
        }),
        (i.$AttachMediaImpl$p_10 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (this.provenanceSourceAttachment == null) return null;
            var e = null,
              t = !1,
              n = function (r) {
                if (!(e == null || t)) {
                  t = !0;
                  try {
                    r(e);
                  } catch (e) {
                    o("WALogger").WARN(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "[AttachMedia] ai provenance QPL end failed: ",
                          "",
                        ])),
                      e,
                    );
                  }
                }
              };
            try {
              var r = yield this.provenanceSourceAttachment,
                a = r.file;
              e = o("WAWebMediaProvenanceQpl").startProvenanceDetectionQpl(a);
              var i =
                this.type === o("WAWebMsgType").MSG_TYPE.VIDEO
                  ? o("WAWebFileUtils").FILETYPE.VIDEO
                  : o("WAWebFileUtils").FILETYPE.IMAGE;
              if (
                a.size >
                o("WAWebMediaGatingUtils").getUploadLimit(i, this.fileOrigin)
              )
                return (
                  o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[AttachMedia] skipping ai provenance detection: media over upload limit",
                      ])),
                  ),
                  n(function (e) {
                    return e.endCancel(void 0, {
                      string: { cancel_reason: "oversize" },
                    });
                  }),
                  null
                );
              var l = yield o(
                  "WAWebMediaWorkerProxy",
                ).detectAiProvenanceInWorker({
                  hints: S(a),
                  input: yield o("WAWebFileUtils").blobToArrayBuffer(a),
                  eventFlow: {
                    addAnnotations: function (n) {
                      var t;
                      return (t = e) == null ? void 0 : t.addAnnotations(n);
                    },
                    addPoint: function (n, r) {
                      var t;
                      return (t = e) == null ? void 0 : t.addPoint(n, r);
                    },
                    flowDetails: e.flowDetails,
                  },
                }),
                s = l.engineErrorCode,
                u = l.provenance;
              return s != null
                ? (n(function (e) {
                    return e.endFailWithError(
                      "provenance_engine_error",
                      "engine_error",
                      { int: { engine_error_code: s } },
                    );
                  }),
                  null)
                : (u != null
                    ? n(function (e) {
                        return e.endSuccess({
                          string: {
                            detection_result: "ai",
                            detection_source: u.c2pa != null ? "c2pa" : "iptc",
                          },
                        });
                      })
                    : n(function (e) {
                        return e.endSuccess({
                          string: { detection_result: "none" },
                        });
                      }),
                  u);
            } catch (e) {
              return (
                o("WALogger").WARN(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[AttachMedia] ai provenance detection failed: ",
                      "",
                    ])),
                  e,
                ),
                n(function (e) {
                  return e.endFailWithError(
                    "provenance_detection_error",
                    "exception",
                  );
                }),
                null
              );
            }
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (i.$AttachMediaImpl$p_11 = function (t) {
          var e = t.chat,
            n = t.options;
          if (this.state === y.READY)
            return (
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "AttachMedia:sendToChat: before sendToChat",
                  ])),
              ),
              this.mediaPrep.sendToChat({ chat: e, options: n })
            );
          var r = { mimetype: this.mimetype };
          switch (this.type) {
            case o("WAWebMsgType").MSG_TYPE.VIDEO:
              ((r.isGif = this.isGif),
                (r.gifAttribution = this.gifAttribution));
            case o("WAWebMsgType").MSG_TYPE.IMAGE:
              ((r.width = this.fullPreviewSize.width),
                (r.height = this.fullPreviewSize.height),
                (r.body = this.preview),
                (n.placeholderProps = r));
              break;
            case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
              ((r.pageCount = this.documentPageCount),
                (r.filename = this.filename),
                (r.body = this.preview),
                (n.placeholderProps = r));
              break;
            case o("WAWebMsgType").MSG_TYPE.AUDIO:
            case o("WAWebMsgType").MSG_TYPE.PTT:
            default:
              break;
          }
          return this.mediaPrep.sendToChat({ chat: e, options: n });
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
        (i.preserveProvenanceSourceAttachment = function (t) {
          t != null && (this.provenanceSourceAttachment = t);
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
    v.Proxy = "attachMedia";
    function S(e) {
      return e.type === "" ? [] : [e.type];
    }
    var R = o("WAWebBaseModel").defineModel(v);
    ((l.MediaEditorAction = g),
      (l.MediaQuality = h),
      (l.ATTACH_MEDIA_STATE = y),
      (l.nextAttachMediaId = b),
      (l.AttachMedia = R));
  },
  98,
);
