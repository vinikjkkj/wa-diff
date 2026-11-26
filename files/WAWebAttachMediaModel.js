__d(
  "WAWebAttachMediaModel",
  [
    "$InternalEnum",
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
    "WAWebMediaDataUtils",
    "WAWebMediaEditorData",
    "WAWebMediaFileErrors",
    "WAWebMediaFileTooLargeError",
    "WAWebMediaGatingUtils",
    "WAWebMediaLoad",
    "WAWebMediaOpaqueData",
    "WAWebMediaProvenanceQpl",
    "WAWebMediaProvenanceWriteGate",
    "WAWebMediaWorkerProxy",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebPREGatingUtils",
    "WAWebPrepRawMedia",
    "WAWebPromiseQueue",
    "WAWebStickerConstants",
    "WAWebSystemProvenanceGating",
    "err",
    "isNonZeroNumber",
    "justknobx",
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
      f = n("$InternalEnum").Mirrored([
        "Outline",
        "OutlineDone",
        "CropRotateCanvas",
      ]),
      g = n("$InternalEnum").Mirrored(["Standard", "HD"]),
      h = 1;
    function y() {
      return String(h++);
    }
    var C = {
        string: {
          system_provenance_class: "none",
          system_provenance_outcome: "read_failed",
        },
      },
      b = {
        string: {
          system_provenance_class: "none",
          system_provenance_outcome: "failed",
        },
      },
      v = { provenance: null, systemProvenance: null },
      S = (function (t) {
        function n() {
          for (var e, n = arguments.length, a = new Array(n), i = 0; i < n; i++)
            a[i] = arguments[i];
          return (
            (e = t.call.apply(t, [this].concat(a)) || this),
            (e.id = o("WAWebBaseModel").prop(y)),
            (e.file = o("WAWebBaseModel").prop()),
            (e.uiProcessed = o("WAWebBaseModel").prop(!1)),
            (e.fileOrigin = o("WAWebBaseModel").prop()),
            (e.isVcardOverMmsDocument = o("WAWebBaseModel").prop(!1)),
            (e.stickerMaker = o("WAWebBaseModel").prop(!1)),
            (e.supportedTypes = o("WAWebBaseModel").prop()),
            (e.quality = o("WAWebBaseModel").prop(g.Standard)),
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
            (e.previewBase64 = o("WAWebBaseModel").session()),
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
            (e.$AttachMediaImpl$p_4 = o("WAWebBaseModel").session(function () {
              return new (o("WAWebPromiseQueue").PromiseQueue)();
            })),
            (e.$AttachMediaImpl$p_5 = o("WAWebBaseModel").session(0)),
            (e.isWaitingToPrepare = o("WAWebBaseModel").session(!1)),
            (e.$AttachMediaImpl$p_6 = o("WAWebBaseModel").session()),
            (e.isEditedExportStale = o("WAWebBaseModel").session(!1)),
            (e.hasSetFromPrefs = o("WAWebBaseModel").prop(!1)),
            (e.$AttachMediaImpl$p_15 = r("WAMemoizeConcurrent")(
              function () {
                return "hd-eligible";
              },
              async function (e) {
                var t = await e.attachmentPromise,
                  n = t.file,
                  r = window.URL.createObjectURL(n);
                try {
                  var a = await o("WAWebMediaLoad").loadImage(r);
                  return o("WAWebHDMediaUtils").isHdPhoto(
                    a.naturalHeight,
                    a.naturalWidth,
                  );
                } finally {
                  o("WAWebABProps").getABPropConfigValue(
                    "web_memlab_fixes_5",
                  ) && window.URL.revokeObjectURL(r);
                }
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
            t.prototype.initialize.call(this);
            var e = this.file;
            if (e instanceof Promise)
              ((this.originalAttachment = e),
                (this.provenanceSourceAttachment = e),
                (this.mediaEditorData = r("WAWebMediaEditorData").create()),
                this.processAttachment(e));
            else throw r("err")("cannot process non-promise file");
          }),
          (a.processAttachment = function (t) {
            var e,
              n = this;
            ((this.state = o(
              "WAWebAttachMediaConstants",
            ).ATTACH_MEDIA_STATE.PROCESSING),
              (e = this.$AttachMediaImpl$p_3) == null || e.abort(),
              (this.$AttachMediaImpl$p_3 = new AbortController()));
            var a;
            if (r("justknobx")._("8598")) {
              var i = this.$AttachMediaImpl$p_5 > 0;
              (this.$AttachMediaImpl$p_7(1),
                (a = this.$AttachMediaImpl$p_4.enqueue(async function () {
                  i &&
                    n.set({
                      state: o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE
                        .PROCESSING,
                    });
                  try {
                    await n.$AttachMediaImpl$p_8(t);
                  } finally {
                    n.$AttachMediaImpl$p_7(-1);
                  }
                })));
            } else a = this.$AttachMediaImpl$p_8(t);
            var l =
                this.$AttachMediaImpl$p_6 != null && r("justknobx")._("8741"),
              s = a.then(function () {
                var e = new Image();
                ((e.src = n.fullPreview),
                  (e.onload = function () {
                    if (n.processPromise === s) {
                      var t = {};
                      if (n.stickerMaker) {
                        t.fitToSquare = !0;
                        var a =
                          2 *
                          o("WAWebStickerConstants")
                            .STICKER_MAKER_IMAGE_PADDING;
                        t.scale = {
                          x:
                            1 -
                            a / o("WAWebStickerConstants").STICKER_DIMENSION,
                          y:
                            1 -
                            a / o("WAWebStickerConstants").STICKER_DIMENSION,
                        };
                      }
                      var i = n.$AttachMediaImpl$p_6;
                      if (i != null && l) {
                        n.state !==
                          o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE
                            .ERROR &&
                          ((n.$AttachMediaImpl$p_6 = e),
                          n.$AttachMediaImpl$p_9(i, e),
                          (n.isEditedExportStale =
                            n.mediaEditorData.hasEdits()));
                        return;
                      }
                      ((n.$AttachMediaImpl$p_6 = e),
                        (n.mediaEditorData = r("WAWebMediaEditorData")
                          .create(n.mediaEditorData.getId())
                          .setBackground(e, t)));
                    }
                  }));
              });
            this.processPromise = s;
          }),
          (a.$AttachMediaImpl$p_7 = function (t) {
            ((this.$AttachMediaImpl$p_5 += t),
              (this.isWaitingToPrepare = this.$AttachMediaImpl$p_5 > 1));
          }),
          (a.$AttachMediaImpl$p_10 = function () {
            return !r("justknobx")._("8741") ||
              this.$AttachMediaImpl$p_6 == null ||
              !this.mediaEditorData.hasEdits()
              ? null
              : { editedFile: this.editedFile, preview: this.preview };
          }),
          (a.$AttachMediaImpl$p_9 = function (t, n) {
            var e = function (r) {
                var e;
                return ((e = r.getBackground()) == null
                  ? void 0
                  : e.getImage()) === t
                  ? r.swapBackgroundImage(n)
                  : r;
              },
              r = function (n) {
                var t = n[0],
                  r = n[1];
                return [e(t), r];
              };
            ((this.$AttachMediaImpl$p_1 = this.$AttachMediaImpl$p_1.map(r)),
              (this.$AttachMediaImpl$p_2 = this.$AttachMediaImpl$p_2.map(r)),
              (this.mediaEditorData = e(this.mediaEditorData)));
          }),
          (a.updateEditedExport = function (t) {
            (t != null && this.$AttachMediaImpl$p_11(t),
              (this.isEditedExportStale = !1));
          }),
          (a.updateIncompleteEditedExport = function (t) {
            this.$AttachMediaImpl$p_11(t);
          }),
          (a.$AttachMediaImpl$p_11 = function (t) {
            var e = window.URL.createObjectURL(t);
            (this.updateEditedFile(t),
              this.updatePreview(e),
              this.updateFullPreview(e));
          }),
          (a.cancelEnrichment = function () {
            var e;
            (e = this.$AttachMediaImpl$p_3) == null || e.abort();
          }),
          (a.$AttachMediaImpl$p_12 = function (t) {
            switch (t != null ? t : this.quality) {
              case g.Standard:
                return o("WAWebABProps").getABPropConfigValue(
                  "web_image_max_edge",
                );
              case g.HD:
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
          (a.$AttachMediaImpl$p_13 = function (t) {
            return t == null || this.supportedTypes == null
              ? !0
              : this.supportedTypes.has(t);
          }),
          (a.$AttachMediaImpl$p_14 = async function (t) {
            this.metadataByQuality = new Map(
              o("WAWebPREGatingUtils").isPREMediaUploadCacheEnabled()
                ? [
                    [
                      this.quality,
                      await o("WAWebMediaDataUtils").getImageMetadata(t, {
                        maxDimension: this.$AttachMediaImpl$p_12(this.quality),
                      }),
                    ],
                  ]
                : [
                    [
                      g.Standard,
                      await o("WAWebMediaDataUtils").getImageMetadata(t, {
                        maxDimension: this.$AttachMediaImpl$p_12(g.Standard),
                      }),
                    ],
                    [
                      g.HD,
                      await o("WAWebMediaDataUtils").getImageMetadata(t, {
                        maxDimension: this.$AttachMediaImpl$p_12(g.HD),
                      }),
                    ],
                  ],
            );
          }),
          (a.$AttachMediaImpl$p_8 = function (t) {
            var e = this,
              n;
            return t
              .then(async function (n) {
                var a;
                if (!e.$AttachMediaImpl$p_13(n.type))
                  throw new (o("WAWebMediaFileErrors").InvalidMediaFileType)();
                (e.set(n),
                  n.preview != null && (e.previewBase64 = n.preview),
                  (e.originalFilename = n.filename));
                var i = {
                    maxDimension: e.$AttachMediaImpl$p_12(),
                    fileOrigin: e.fileOrigin,
                    signal:
                      (a = e.$AttachMediaImpl$p_3) == null ? void 0 : a.signal,
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
                  throw new (o("WAWebMediaFileErrors").InvalidMediaFileType)();
                (_ === !0
                  ? ((i.asGif = !0),
                    (i.gifAttribution = p != null ? p : void 0),
                    (i.accessibilityLabel = n.accessibilityLabel))
                  : n.type === o("WAWebFileUtils").FILETYPE.DOCUMENT
                    ? ((i.asDocument = !0),
                      (i.filename = m),
                      (i.isVcardOverMmsDocument = f),
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
                        (e.previewBase64 = a),
                        (e.fullPreviewSize = { width: n, height: r }));
                      var i = new Blob([t], { type: "image/jpeg" }),
                        l = window.URL.createObjectURL(i);
                      e.updateFullPreview(l);
                    }),
                    (i.setMimeType = function (t) {
                      e.mimetype = t;
                    }),
                    (i.resetMediaPreview = function () {
                      (e.updatePreview(""),
                        (e.previewBase64 = ""),
                        e.updateFullPreview(""));
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
                var y = o("WAWebPrepRawMedia").prepRawMedia(h, i);
                e.set({ mediaPrep: y });
                var C = await y.waitForPrep(),
                  b = C.documentPreview,
                  v =
                    C.mediaBlob instanceof r("WAWebMediaOpaqueData")
                      ? window.URL.createObjectURL(C.mediaBlob.forceToBlob())
                      : window.URL.createObjectURL(C.mediaBlob),
                  S = {
                    file: C.mediaBlob,
                    fullPreview: v,
                    type: C.type,
                    filename: C.filename,
                    mimetype: C.mimetype,
                    originalMimetype: n.mimetype,
                    preview: C.preview,
                    previewBase64: C.preview,
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
                      ((e.hdEligible = await e.$AttachMediaImpl$p_15({
                        attachmentPromise: t,
                        signal: new AbortController().signal,
                      })),
                      e.hdEligible && (await e.$AttachMediaImpl$p_14(d)))),
                  C.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT &&
                    b &&
                    ((S.fullPreview = b.url),
                    (S.preview = b.thumbUrl),
                    (S.fullPreviewSize = { height: b.height, width: b.width }),
                    (S.documentPageCount = b.pdfPages)),
                  e.set(babelHelpers.extends({}, S, e.$AttachMediaImpl$p_10())),
                  o("WAWebAttachMediaGetters").getPreviewable(e) ||
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
                    (n = o("WAWebMediaFileErrors")).InvalidMediaFileType,
                    n.InvalidImageFileType,
                  ],
                  function (n) {
                    if (
                      e.isGif ||
                      e.type === o("WAWebFileUtils").FILETYPE.DOCUMENT ||
                      !e.$AttachMediaImpl$p_13(
                        o("WAWebMsgType").MSG_TYPE.DOCUMENT,
                      )
                    )
                      throw n;
                    return e.$AttachMediaImpl$p_8(
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
          (a.sendToChat = function (t) {
            var e = t.chat,
              n = t.options;
            if (!this.mediaPrep)
              return Promise.reject(r("err")("MediaPrep not available"));
            if (
              this.state ===
              o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE.ERROR
            )
              return Promise.reject(this.exception);
            if (
              this.state ===
                o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE.PROCESSING &&
              (o("WAWebAttachMediaGetters").getPreviewable(this) !== !0 ||
                n.addEvenWhilePreparing !== !0)
            )
              return Promise.reject(r("err")("Media still processing"));
            var a = this.$AttachMediaImpl$p_16(e, n);
            return (
              a != null &&
                (n.provenanceDetectionPromise = a.isChannel
                  ? this.$AttachMediaImpl$p_17(a.systemProvenance)
                  : this.$AttachMediaImpl$p_18()),
              (n.fileOrigin = this.fileOrigin),
              this.$AttachMediaImpl$p_19({ chat: e, options: n })
            );
          }),
          (a.$AttachMediaImpl$p_16 = function (t, n) {
            if (
              this.type !== o("WAWebMsgType").MSG_TYPE.IMAGE &&
              this.type !== o("WAWebMsgType").MSG_TYPE.VIDEO
            )
              return null;
            var e = o(
              "WAWebSystemProvenanceGating",
            ).systemProvenanceDestination({
              isNewsletter: o("WAWebChatGetters").getIsNewsletter(t),
              isNewsletterStatus: n.isNewsletterStatus === !0,
            });
            return e === "private"
              ? o("WAWebSystemProvenanceGating").isSystemProvenanceEnabledFor(e)
                ? { isChannel: !1, systemProvenance: !0 }
                : null
              : o("WAWebNewsletterGatingUtils").isChannelSGISenderEnabled()
                ? {
                    isChannel: !0,
                    systemProvenance: o(
                      "WAWebSystemProvenanceGating",
                    ).isSystemProvenanceEnabledFor(e),
                  }
                : null;
          }),
          (a.$AttachMediaImpl$p_18 = async function () {
            if (this.provenanceSourceAttachment == null) return v;
            try {
              var e = await this.provenanceSourceAttachment,
                t = e.file,
                n =
                  this.type === o("WAWebMsgType").MSG_TYPE.VIDEO
                    ? o("WAWebFileUtils").FILETYPE.VIDEO
                    : o("WAWebFileUtils").FILETYPE.IMAGE;
              if (
                t.size >
                o("WAWebMediaGatingUtils").getUploadLimit(n, this.fileOrigin)
              )
                return v;
              var r = await o(
                  "WAWebMediaWorkerProxy",
                ).detectAiProvenanceInWorker({
                  allowlists: o(
                    "WAWebSystemProvenanceGating",
                  ).systemProvenanceAllowlistsJson(),
                  hints: R(t),
                  input: await o("WAWebFileUtils").blobToArrayBuffer(t),
                  logProvenanceDetails: !1,
                }),
                a = r.systemProvenance;
              return {
                provenance: null,
                systemProvenance: a != null ? a : null,
              };
            } catch (e) {
              return v;
            }
          }),
          (a.$AttachMediaImpl$p_17 = async function (t) {
            if (this.provenanceSourceAttachment == null) return v;
            var e = null,
              n = !1,
              r = function (r) {
                if (!(e == null || n)) {
                  n = !0;
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
              var a = await this.provenanceSourceAttachment,
                i = a.file;
              e = o("WAWebMediaProvenanceQpl").startProvenanceDetectionQpl(i);
              var l =
                this.type === o("WAWebMsgType").MSG_TYPE.VIDEO
                  ? o("WAWebFileUtils").FILETYPE.VIDEO
                  : o("WAWebFileUtils").FILETYPE.IMAGE;
              if (
                i.size >
                o("WAWebMediaGatingUtils").getUploadLimit(l, this.fileOrigin)
              )
                return (
                  o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[AttachMedia] skipping ai provenance detection: media over upload limit",
                      ])),
                  ),
                  r(function (e) {
                    return e.endCancel(void 0, {
                      string: { cancel_reason: "oversize" },
                    });
                  }),
                  v
                );
              var s = await o(
                  "WAWebMediaWorkerProxy",
                ).detectAiProvenanceInWorker({
                  allowlists: t
                    ? o(
                        "WAWebSystemProvenanceGating",
                      ).systemProvenanceAllowlistsJson()
                    : null,
                  hints: R(i),
                  input: await o("WAWebFileUtils").blobToArrayBuffer(i),
                  logProvenanceDetails: !0,
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
                u = s.engineErrorCode,
                c = s.provenance,
                _ = s.systemProvenance;
              if (u != null)
                return (
                  r(function (e) {
                    return e.endFailWithError(
                      "provenance_engine_error",
                      "engine_error",
                      babelHelpers.extends(
                        { int: { engine_error_code: u } },
                        t ? C : null,
                      ),
                    );
                  }),
                  v
                );
              var f = function (n) {
                return t ? L(n, c, _) : { string: babelHelpers.extends({}, n) };
              };
              return (
                c != null
                  ? r(function (e) {
                      return e.endSuccess(
                        f({
                          detection_result: "ai",
                          detection_source: c.c2pa != null ? "c2pa" : "iptc",
                        }),
                      );
                    })
                  : r(function (e) {
                      return e.endSuccess(f({ detection_result: "none" }));
                    }),
                { provenance: c, systemProvenance: t && _ != null ? _ : null }
              );
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
                r(function (e) {
                  return t
                    ? e.endFailWithError(
                        "provenance_detection_error",
                        "exception",
                        b,
                      )
                    : e.endFailWithError(
                        "provenance_detection_error",
                        "exception",
                      );
                }),
                v
              );
            }
          }),
          (a.$AttachMediaImpl$p_19 = function (t) {
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
                  (r.body = this.previewBase64),
                  (n.placeholderProps = r));
                break;
              case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
                ((r.pageCount = this.documentPageCount),
                  (r.filename = this.filename),
                  (r.body = this.previewBase64),
                  (n.placeholderProps = r));
                break;
              case o("WAWebMsgType").MSG_TYPE.AUDIO:
              case o("WAWebMsgType").MSG_TYPE.PTT:
              default:
                break;
            }
            return this.mediaPrep.sendToChat({ chat: e, options: n });
          }),
          (a.delete = function () {
            (this.fullPreview && window.URL.revokeObjectURL(this.fullPreview),
              t.prototype.delete.call(this),
              o("WAWebAttachMediaGetters").clearAttachMediaGetterCacheFor(
                this,
              ));
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
          (a.preserveProvenanceSourceAttachment = function (t) {
            t != null && (this.provenanceSourceAttachment = t);
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
    S.Proxy = "attachMedia";
    function R(e) {
      return e.type === "" ? [] : [e.type];
    }
    function L(e, t, n) {
      return {
        bool: {
          system_provenance_matches_legacy: o(
            "WAWebMediaProvenanceWriteGate",
          ).systemProvenanceMatchesLegacy(t, n),
        },
        string: babelHelpers.extends({}, e, {
          system_provenance_class: o(
            "WAWebMediaProvenanceWriteGate",
          ).systemProvenanceClass(n),
          system_provenance_outcome: n == null ? "no_provenance" : "resolved",
        }),
      };
    }
    var E = o("WAWebBaseModel").defineModel(S);
    ((l.MediaEditorAction = f),
      (l.MediaQuality = g),
      (l.nextAttachMediaId = y),
      (l.AttachMedia = E));
  },
  98,
);
