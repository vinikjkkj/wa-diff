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
    "WAWebAttachMediaConstants",
    "WAWebAttachMediaGetters",
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
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
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
      p,
      _,
      f,
      g = n("$InternalEnum").Mirrored([
        "Outline",
        "OutlineDone",
        "CropRotateCanvas",
      ]),
      h = n("$InternalEnum").Mirrored(["Standard", "HD"]),
      y = 1;
    function C() {
      return String(y++);
    }
    var b = (function (t) {
      function a() {
        for (var e, a = arguments.length, i = new Array(a), l = 0; l < a; l++)
          i[l] = arguments[l];
        return (
          (e = t.call.apply(t, [this].concat(i)) || this),
          (e.id = o("WAWebBaseModel").prop(C)),
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
          ((this.state = o(
            "WAWebAttachMediaConstants",
          ).ATTACH_MEDIA_STATE.PROCESSING),
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
                    var y = o("WAWebMedia").prepRawMedia(h, i);
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
                        state: o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE
                          .READY,
                        isGif: C.isGif,
                        fullPreviewSize: void 0,
                        documentPageCount: c,
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
                          ((e.hdEligible = yield e.$AttachMediaImpl$p_8({
                            attachmentPromise: t,
                            signal: new AbortController().signal,
                          })),
                          e.hdEligible && (yield e.$AttachMediaImpl$p_7(d)))),
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
                      o("WAWebAttachMediaGetters").getPreviewable(e) ||
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
                  return (
                    e.set({
                      exception: t,
                      state: o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE
                        .ERROR,
                    }),
                    e
                  );
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
                  state: o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE
                    .ERROR,
                }),
                e
              );
            });
        }),
        (i.sendToChat = function (t) {
          var e = t.chat,
            a = t.options;
          return this.mediaPrep
            ? this.state ===
              o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE.ERROR
              ? (f || (f = n("Promise"))).reject(this.exception)
              : this.state ===
                    o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE
                      .PROCESSING &&
                  (o("WAWebAttachMediaGetters").getPreviewable(this) !== !0 ||
                    a.addEvenWhilePreparing !== !0)
                ? (f || (f = n("Promise"))).reject(
                    r("err")("Media still processing"),
                  )
                : (this.$AttachMediaImpl$p_9(e) &&
                    (a.aiProvenancePromise = this.$AttachMediaImpl$p_10()),
                  this.$AttachMediaImpl$p_11({ chat: e, options: a }))
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
                  hints: v(a),
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
          if (
            this.state ===
            o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE.READY
          )
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
            t.prototype.delete.call(this),
            o("WAWebAttachMediaGetters").clearAttachMediaGetterCacheFor(this));
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
    b.Proxy = "attachMedia";
    function v(e) {
      return e.type === "" ? [] : [e.type];
    }
    var S = o("WAWebBaseModel").defineModel(b);
    ((l.MediaEditorAction = g),
      (l.MediaQuality = h),
      (l.nextAttachMediaId = C),
      (l.AttachMedia = S));
  },
  98,
);
