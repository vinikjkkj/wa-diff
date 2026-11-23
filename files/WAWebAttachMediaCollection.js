__d(
  "WAWebAttachMediaCollection",
  [
    "fbt",
    "WAWebAttachMediaConstants",
    "WAWebAttachMediaGetters",
    "WAWebAttachMediaModel",
    "WAWebBaseCollection",
    "WAWebBotGating",
    "WAWebBotUtils",
    "WAWebFileUtils",
    "WAWebHatchGating",
    "WAWebL10nFilesize",
    "WAWebMediaEditorEnumsThemes",
    "WAWebMediaFileErrors",
    "WAWebMediaFileTooLargeError",
    "WAWebMediaGatingUtils",
    "WAWebMediaInputEvents",
    "WAWebMimeTypes",
    "WAWebResolveSupportedMediaTypes",
    "WAWebServerPropConstants",
    "WAWebSingleSelection",
    "WAWebTPPdfViewerGatingUtils",
    "WAWebWamEnumMediaPickerOriginType",
    "WAWebWamMediaPickerStatsLogger",
    "err",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = (function (e) {
      function t(t) {
        var n,
          a = t.chatParticipantCount;
        return (
          (n = e.call(this) || this),
          (n.errorMsgs = null),
          (n.ignored = 0),
          (n.mediaPickerStatsLogger = new (o(
            "WAWebWamMediaPickerStatsLogger",
          ).MediaPickerStatsLogger)()),
          (n.selection = new (r("WAWebSingleSelection"))(
            [],
            function (e) {
              return e.id;
            },
            "prev",
          )),
          (n.isStickerMaker = !1),
          (n.$AttachMediaCollection$p_1 = null),
          (n.$AttachMediaCollection$p_2 = function (e, t) {
            (t === "focus" || t === !1) && n.trigger("active-change");
          }),
          (n.mediaPickerStatsLogger.chatRecipients = a),
          n.listenTo(n.selection, "all", n.$AttachMediaCollection$p_2),
          n
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.removeSingleton = function (t, n) {
          var e;
          t &&
            (n || this.mediaPickerStatsLogger.logDelete(t.id),
            t.url && window.URL.revokeObjectURL(t.url),
            (e = t.original) != null &&
              e.url &&
              window.URL.revokeObjectURL(t.original.url));
        }),
        (n.remove = function (n, r) {
          var t = this,
            a = e.prototype.remove.call(this, n, r);
          return (
            a.forEach(function (e) {
              (e != null &&
                o("WAWebAttachMediaGetters").clearAttachMediaGetterCacheFor(e),
                t.removeSingleton(e, r));
            }),
            this.selection.init(this.getPreviewableMedias(), !0),
            a
          );
        }),
        (n.releaseAttachMediaResources = function () {
          var e = this;
          this.forEach(function (t) {
            (o("WAWebAttachMediaGetters").clearAttachMediaGetterCacheFor(t),
              e.removeSingleton(t, { silent: !0 }),
              t.fullPreview && window.URL.revokeObjectURL(t.fullPreview));
          });
        }),
        (n.delete = function () {
          var t = this;
          (this.forEach(function (e) {
            return o("WAWebAttachMediaGetters").clearAttachMediaGetterCacheFor(
              e,
            );
          }),
            e.prototype.delete.call(this),
            this.forEach(function (e) {
              return t.removeSingleton(e);
            }),
            this.selection.init(this.getPreviewableMedias(), !0));
        }),
        (n.reorder = function (t, n) {
          return (
            this.reorderMutate(t, n),
            this.selection.init(this.getPreviewableMedias(), !0),
            this.getPreviewableMedias()
          );
        }),
        (n.replace = function (t, n) {
          var e = this.get(t);
          if (e) {
            var r = e.quality,
              a = e.supportedTypes,
              i = this.indexOf(e),
              l = e.caption,
              s = e.provenanceSourceAttachment;
            (this.remove(e, { silent: !0 }), e.delete());
            var u = new (o("WAWebAttachMediaModel").AttachMedia)({
              id: t,
              caption: l,
              file: this.$AttachMediaCollection$p_3(n),
              quality: r,
              supportedTypes: a,
            });
            return (
              u.preserveProvenanceSourceAttachment(s),
              this.add(u, i >= 0 ? { at: i } : {}),
              u.processPromise
            );
          }
        }),
        (n.getValidMedias = function () {
          return this.filter(function (e) {
            return (
              e.state ===
                o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE.READY ||
              e.state ===
                o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE.PROCESSING
            );
          });
        }),
        (n.getPreviewableMedias = function () {
          return this.filter(function (e) {
            return o("WAWebAttachMediaGetters").getPreviewable(e);
          });
        }),
        (n.getActive = function () {
          return this.selection.getVal();
        }),
        (n.setActive = function (t) {
          this.selection.setVal(t);
        }),
        (n.unsetActive = function () {
          this.selection.unset();
        }),
        (n.setNextAsActive = function () {
          var e = this.selection.list.length - 1;
          return this.selection.index === -1 || this.selection.index === e
            ? this.selection.getVal()
            : (this.selection.setNext(), this.selection.getVal());
        }),
        (n.setPrevAsActive = function () {
          return this.selection.index === -1 || this.selection.index === 0
            ? this.selection.getVal()
            : (this.selection.setPrev(), this.selection.getVal());
        }),
        (n.processAttachmentsForChat = async function (t, n, r, a, i) {
          var e = o(
              "WAWebResolveSupportedMediaTypes",
            ).resolveSupportedMediaTypesForChat(r),
            l = this.getPreviewableMedias().length,
            s =
              a != null
                ? a
                : o(
                    "WAWebResolveSupportedMediaTypes",
                  ).resolveMaxNumberSelectableMedia(t.length + l, r.id),
            u = null;
          o("WAWebBotUtils").isHatchBot(r.id)
            ? (u = o("WAWebHatchGating").getHatchDocumentUploadSizeLimitBytes())
            : o("WAWebBotUtils").isMetaAiBot(r.id) &&
              (u = o("WAWebBotGating").getMetaAiDocumentUploadSizeLimitBytes());
          var c = o("WAWebBotUtils").isMetaAiBot(r.id)
              ? o("WAWebBotGating").getMetaAiVideoUploadSizeLimitBytes()
              : null,
            d = await this.$AttachMediaCollection$p_4(t, n, e, s, i, u, c);
          o("WAWebMediaInputEvents").emitMediaInputEvent({
            type: "attachments_processed",
            chat: r,
            mediaTypes: d.map(m),
            origin: n,
            tooLargeTypes: p(d),
          });
        }),
        (n.processAttachments = async function (t, n, r, o, a, i, l) {
          await this.$AttachMediaCollection$p_4(t, n, r, o, a, i, l);
        }),
        (n.$AttachMediaCollection$p_4 = async function (t, n, a, i, l, s, u) {
          var e = this,
            c = this.getPreviewableMedias().length,
            d = t.length + c > i ? Math.max(i - c, 0) : t.length,
            m = t.length - d;
          d === 0 ? m && this.trigger("max_upload_limit", m) : this.ignore(m);
          var p = t.slice(0, d).map(function (t) {
            var i = e.$AttachMediaCollection$p_3(t);
            (s != null &&
              (i = i.then(function (e) {
                if (
                  e.type === o("WAWebFileUtils").FILETYPE.DOCUMENT &&
                  e.file.size > s
                )
                  throw new (r("WAWebMediaFileTooLargeError"))(
                    "document",
                    s,
                    e.file.size,
                  );
                return e;
              })),
              u != null &&
                (i = i.then(function (e) {
                  if (
                    e.type === o("WAWebFileUtils").FILETYPE.VIDEO &&
                    e.file.size > u
                  )
                    throw new (r("WAWebMediaFileTooLargeError"))(
                      "video",
                      u,
                      e.file.size,
                    );
                  return e;
                })));
            var l = new (o("WAWebAttachMediaModel").AttachMedia)({
              id: o("WAWebAttachMediaModel").nextAttachMediaId(),
              file: i,
              fileOrigin: n,
              supportedTypes: a,
            });
            if (!(t instanceof Promise)) {
              var c,
                d,
                m,
                p,
                _ =
                  (c = t.filename) != null
                    ? c
                    : (d = t.file) == null
                      ? void 0
                      : d.name,
                f =
                  (m = t.mimetype) != null
                    ? m
                    : (p = t.file) == null
                      ? void 0
                      : p.type;
              (_ != null || f != null) && l.set({ filename: _, mimetype: f });
            }
            return l;
          });
          this.add(p);
          var _ = this.$AttachMediaCollection$p_1;
          _ != null &&
            p.forEach(function (t) {
              return e.$AttachMediaCollection$p_5(t, _);
            });
          var f = this.getActive();
          return (
            this.unsetActive(),
            p.forEach(function (t) {
              e.listenTo(
                t,
                o("WAWebAttachMediaGetters").PREVIEWABLE_ROOT_EVENTS,
                function () {
                  e.$AttachMediaCollection$p_6(p, f);
                },
              );
            }),
            Promise.all(t).then(function () {
              e.$AttachMediaCollection$p_6(p, f);
            }),
            await Promise.all(
              p.map(function (e) {
                return e.processPromise;
              }),
            ),
            l && l(),
            p.forEach(function (t) {
              return e.$AttachMediaCollection$p_7(t, n);
            }),
            this.$AttachMediaCollection$p_6(p, f),
            p
          );
        }),
        (n.$AttachMediaCollection$p_6 = function (t, n) {
          if (
            !this.getActive() &&
            !this.getModelsArray().some(function (e) {
              return (
                e.state ===
                  o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE
                    .PROCESSING &&
                !o("WAWebAttachMediaGetters").getPreviewable(e)
              );
            })
          ) {
            var e = t.find(function (e) {
              return o("WAWebAttachMediaGetters").getPreviewable(e);
            });
            (e || (e = n),
              this.selection.init(this.getPreviewableMedias()),
              e && this.setActive(e));
          }
        }),
        (n.$AttachMediaCollection$p_7 = function (t, n) {
          if (n != null) {
            var e = t.isGif ? "gif" : t.type;
            this.mediaPickerStatsLogger.logAdd(t.id, e, n);
          }
        }),
        (n.$AttachMediaCollection$p_3 = function (t) {
          return Promise.resolve(t).then(function (e) {
            return (
              (e.filename == null || e.filename === "") &&
                (e.filename = e.file.name),
              (e.mimetype == null || e.mimetype === "") &&
                (e.mimetype = e.file.type),
              e.type ||
                (e.type = o("WAWebFileUtils").typeFromMimetype(e.file.type)),
              !e.type &&
                e.mimetype != null &&
                e.mimetype !== "" &&
                (e.type = o("WAWebFileUtils").typeFromMimetype(e.mimetype)),
              e
            );
          });
        }),
        (n.ignore = function (t) {
          t > 0 && (this.ignored += t);
        }),
        (n.uiProcessMsgs = function (t, n) {
          var e = [],
            a,
            i = 0,
            l = 0,
            u = 0,
            c = 0,
            m = null,
            p = 0,
            _ = 0,
            f = 0,
            g = 0,
            h = 0,
            y = 0,
            C = 0,
            b = !1,
            v = o("WAWebL10nFilesize").getL10nFilesize(
              o("WAWebServerPropConstants").MAX_FILE_SIZE_BYTES,
            ),
            S = o("WAWebL10nFilesize").getL10nFilesize(
              o("WAWebServerPropConstants").VCARD_MAX_SIZE_KB * 1024,
            ),
            R = n === o("WAWebMediaEditorEnumsThemes").MediaTheme.STATUS,
            L = R
              ? o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE
                  .STATUS_TAB_CAMERA_PHOTO_LIBRARY
              : null;
          if (
            (this.forEach(function (e) {
              if (
                !e.uiProcessed &&
                (!a &&
                  o("WAWebAttachMediaGetters").getPreviewable(e) &&
                  (a = e),
                e.state !==
                  o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE
                    .PROCESSING &&
                  ((e.uiProcessed = !0),
                  e.state ===
                    o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE.ERROR))
              )
                if (e.exception instanceof r("WAWebMediaFileTooLargeError"))
                  switch (e.exception.mediaType) {
                    case o("WAWebFileUtils").FILETYPE.IMAGE:
                      i += 1;
                      break;
                    case o("WAWebFileUtils").FILETYPE.VIDEO:
                      l += 1;
                      break;
                    case o("WAWebFileUtils").FILETYPE.AUDIO:
                      u += 1;
                      break;
                    case o("WAWebFileUtils").FILETYPE.DOCUMENT:
                      e.isVcardOverMmsDocument
                        ? (p += e.documentPageCount)
                        : ((c += 1), (m = e.exception.uploadLimit));
                      break;
                  }
                else if (
                  e.exception instanceof
                  o("WAWebMediaFileErrors").MediaFileEmpty
                )
                  switch (d(e)) {
                    case o("WAWebFileUtils").FILETYPE.IMAGE:
                      _ += 1;
                      break;
                    case o("WAWebFileUtils").FILETYPE.VIDEO:
                      f += 1;
                      break;
                    case o("WAWebFileUtils").FILETYPE.AUDIO:
                      g += 1;
                      break;
                    case o("WAWebFileUtils").FILETYPE.DOCUMENT:
                      e.isVcardOverMmsDocument
                        ? (y += e.documentPageCount)
                        : (h += 1);
                      break;
                  }
                else
                  e.exception instanceof
                  o("WAWebMediaFileErrors").MediaFileFailedLoad
                    ? (b = !0)
                    : (C += 1);
            }),
            i > 0 &&
              e.push(
                s._(/*BTDS*/ "", [
                  s._plural(i, "number"),
                  s._param(
                    "maxSize",
                    o("WAWebL10nFilesize").getL10nFilesize(
                      o("WAWebMediaGatingUtils").getUploadLimit("image", L),
                    ),
                  ),
                ]),
              ),
            l > 0 &&
              e.push(
                s._(/*BTDS*/ "", [
                  s._plural(l, "number"),
                  s._param(
                    "maxSize",
                    o("WAWebL10nFilesize").getL10nFilesize(
                      o("WAWebMediaGatingUtils").getUploadLimit("video", L),
                    ),
                  ),
                ]),
              ),
            u > 0 &&
              e.push(
                s._(/*BTDS*/ "", [
                  s._plural(u, "number"),
                  s._plural(u),
                  s._param(
                    "maxSize",
                    o("WAWebL10nFilesize").getL10nFilesize(
                      o("WAWebMediaGatingUtils").getUploadLimit("audio", L),
                    ),
                  ),
                ]),
              ),
            c > 0)
          ) {
            var E = m != null ? o("WAWebL10nFilesize").getL10nFilesize(m) : v;
            e.push(
              s._(/*BTDS*/ "", [
                s._plural(c, "number"),
                s._plural(c),
                s._param("maxSize", E),
              ]),
            );
          }
          if (
            (p > 0 &&
              e.push(s._(/*BTDS*/ "", [s._plural(p), s._param("maxSize", S)])),
            _ > 0 && e.push(s._(/*BTDS*/ "", [s._plural(_, "number")])),
            f > 0 &&
              e.push(s._(/*BTDS*/ "", [s._plural(f, "number"), s._plural(f)])),
            g > 0 &&
              e.push(s._(/*BTDS*/ "", [s._plural(g, "number"), s._plural(g)])),
            h > 0 &&
              e.push(s._(/*BTDS*/ "", [s._plural(h, "number"), s._plural(h)])),
            y > 0 &&
              e.push(s._(/*BTDS*/ "", [s._plural(y, "number"), s._plural(y)])),
            C > 0 && e.push(s._(/*BTDS*/ "", [s._plural(C, "number")])),
            b && ((e = []), e.push(s._(/*BTDS*/ ""))),
            e.length > 1)
          ) {
            e = [];
            var k = i + l + u + c,
              I = _ + f + g + h,
              T = k + I + C;
            C === 0
              ? (k !== 0 &&
                  e.push(
                    s._(/*BTDS*/ "", [
                      s._plural(k, "number"),
                      s._param("maxSize", v),
                    ]),
                  ),
                I !== 0 && e.push(s._(/*BTDS*/ "", [s._plural(I, "number")])))
              : e.push(s._(/*BTDS*/ "", [s._plural(T, "number")]));
          }
          var D = e.join(" ");
          this.errorMsgs = D;
          var x = this.getPreviewableMedias().length;
          this.ignore(x - t);
          var $ = this.ignored;
          return (
            (this.ignored = 0),
            $ && this.trigger("max_upload_limit", $),
            C > 0 && this.trigger("files_not_supported"),
            { errorMsgs: D }
          );
        }),
        (n.canSendMedia = function (t) {
          if (t.isWaitingToPrepare) return !1;
          var e = c(t);
          return e != null &&
            o("WAWebMimeTypes").isPdfDocument(e) &&
            t.state !==
              o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE.ERROR &&
            o("WAWebTPPdfViewerGatingUtils").isAsyncPdfSendEnabled()
            ? !0
            : t.state !==
                o("WAWebAttachMediaConstants").ATTACH_MEDIA_STATE.PROCESSING ||
                o("WAWebAttachMediaGetters").getPreviewable(t);
        }),
        (n.canSend = function () {
          var e = this;
          return this.getModelsArray().every(function (t) {
            return e.canSendMedia(t);
          });
        }),
        (n.hasQualityForAll = function () {
          return this.$AttachMediaCollection$p_1 != null;
        }),
        (n.applyQualityToAll = function (t) {
          var e = this;
          ((this.$AttachMediaCollection$p_1 = t),
            this.getModelsArray().forEach(function (n) {
              return e.$AttachMediaCollection$p_5(n, t);
            }));
        }),
        (n.$AttachMediaCollection$p_5 = function (t, n) {
          var e,
            r = this;
          if (((t.hasSetFromPrefs = !0), t.hdEligible)) {
            u(t, n);
            return;
          }
          (e = t.processPromise) == null ||
            e.then(function () {
              if (r.get(t.id) === t && t.hdEligible) {
                var e;
                u(t, (e = r.$AttachMediaCollection$p_1) != null ? e : n);
              }
            });
        }),
        t
      );
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebAttachMediaModel").AttachMedia;
    function u(e, t) {
      e.quality !== t && !e.mediaEditorData.hasEdits() && e.updateQuality(t);
    }
    function c(e) {
      if (e.mimetype != null && e.mimetype !== "") return e.mimetype;
      var t = e.file;
      return t instanceof File ? t.type : null;
    }
    function d(e) {
      var t = e.file;
      if (!(t instanceof Blob || t instanceof File))
        throw r("err")("expected file to be a Blob or File");
      return o("WAWebFileUtils").typeFromMimetype(t.type);
    }
    function m(e) {
      var t = e.exception;
      return t instanceof r("WAWebMediaFileTooLargeError")
        ? t.mediaType
        : e.type;
    }
    function p(e) {
      var t = [];
      for (var n of e) {
        var o = n.exception;
        o instanceof r("WAWebMediaFileTooLargeError") && t.push(o.mediaType);
      }
      return t;
    }
    l.default = e;
  },
  226,
);
