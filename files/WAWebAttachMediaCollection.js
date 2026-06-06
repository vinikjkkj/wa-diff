__d(
  "WAWebAttachMediaCollection",
  [
    "fbt",
    "Promise",
    "WAWebAttachMediaModel",
    "WAWebBaseCollection",
    "WAWebBotGating",
    "WAWebBotUtils",
    "WAWebFileUtils",
    "WAWebGetMetaAiImagineEventContext",
    "WAWebImagineActionLogger",
    "WAWebL10nFilesize",
    "WAWebMediaEditorEnumsThemes",
    "WAWebMediaFileTooLargeError",
    "WAWebMediaGatingUtils",
    "WAWebMimeTypes",
    "WAWebMiscErrors",
    "WAWebServerPropConstants",
    "WAWebSingleSelection",
    "WAWebTPPdfViewerGatingUtils",
    "WAWebWamEnumImagineAction",
    "WAWebWamEnumImagineMediaType",
    "WAWebWamEnumMediaPickerOriginType",
    "WAWebWamMediaPickerStatsLogger",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = 1,
      c = (function (t) {
        function a(e) {
          var n,
            a = e.chatParticipantCount;
          return (
            (n = t.call(this) || this),
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
            (n.$AttachMediaCollection$p_1 = function (e, t) {
              (t === "focus" || t === !1) && n.trigger("active-change");
            }),
            (n.mediaPickerStatsLogger.chatRecipients = a),
            n.listenTo(n.selection, "all", n.$AttachMediaCollection$p_1),
            n
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.removeSingleton = function (t, n) {
            var e;
            t &&
              (n || this.mediaPickerStatsLogger.logDelete(t.id),
              t.url && window.URL.revokeObjectURL(t.url),
              (e = t.original) != null &&
                e.url &&
                window.URL.revokeObjectURL(t.original.url));
          }),
          (i.remove = function (n, r) {
            var e = this,
              o = t.prototype.remove.call(this, n, r);
            return (
              o.forEach(function (t) {
                return e.removeSingleton(t, r);
              }),
              this.selection.init(this.getPreviewableMedias(), !0),
              o
            );
          }),
          (i.delete = function () {
            var e = this;
            (t.prototype.delete.call(this),
              this.forEach(function (t) {
                return e.removeSingleton(t);
              }),
              this.selection.init(this.getPreviewableMedias(), !0));
          }),
          (i.reorder = function (t, n) {
            return (
              this.reorderMutate(t, n),
              this.selection.init(this.getPreviewableMedias(), !0),
              this.getPreviewableMedias()
            );
          }),
          (i.replace = function (t, n) {
            var e = this.get(t);
            if (e) {
              var r = e.quality,
                a = e.supportedTypes,
                i = this.indexOf(e),
                l = e.caption;
              (this.remove(e, { silent: !0 }), e.delete());
              var s = new (o("WAWebAttachMediaModel").AttachMedia)({
                id: t,
                caption: l,
                file: this.$AttachMediaCollection$p_2(n),
                quality: r,
                supportedTypes: a,
              });
              return (this.add(s, i ? { at: i } : {}), s.processPromise);
            }
          }),
          (i.getValidMedias = function () {
            return this.filter(function (e) {
              return (
                e.state ===
                  o("WAWebAttachMediaModel").ATTACH_MEDIA_STATE.READY ||
                e.state ===
                  o("WAWebAttachMediaModel").ATTACH_MEDIA_STATE.PROCESSING
              );
            });
          }),
          (i.getPreviewableMedias = function () {
            return this.filter(function (e) {
              return e.previewable;
            });
          }),
          (i.getActive = function () {
            return this.selection.getVal();
          }),
          (i.setActive = function (t) {
            this.selection.setVal(t);
          }),
          (i.unsetActive = function () {
            this.selection.unset();
          }),
          (i.setNextAsActive = function () {
            var e = this.selection.list.length - 1;
            return this.selection.index === -1 || this.selection.index === e
              ? this.selection.getVal()
              : (this.selection.setNext(), this.selection.getVal());
          }),
          (i.setPrevAsActive = function () {
            return this.selection.index === -1 || this.selection.index === 0
              ? this.selection.getVal()
              : (this.selection.setPrev(), this.selection.getVal());
          }),
          (i.processAttachmentsForChat = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, r, a) {
                var i = o(
                    "WAWebMediaGatingUtils",
                  ).getSupportedMediaTypesForChat(n),
                  l = this.getPreviewableMedias().length,
                  s =
                    r != null
                      ? r
                      : o("WAWebMediaGatingUtils").getMaxNumberSelectableMedia(
                          e.length + l,
                          n.id,
                        ),
                  u = null;
                o("WAWebBotUtils").isHatchBot(n.id)
                  ? (u =
                      o(
                        "WAWebBotGating",
                      ).getHatchDocumentUploadSizeLimitBytes())
                  : o("WAWebBotUtils").isMetaAiBot(n.id) &&
                    (u =
                      o(
                        "WAWebBotGating",
                      ).getMetaAiDocumentUploadSizeLimitBytes());
                var c = o("WAWebBotUtils").isMetaAiBot(n.id)
                  ? o("WAWebBotGating").getMetaAiVideoUploadSizeLimitBytes()
                  : null;
                (yield this.processAttachments(e, t, i, s, a, u, c),
                  o("WAWebBotUtils").isMetaAiBot(n.id) && m(this, n));
              },
            );
            function t(t, n, r, o, a) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.processAttachments = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, a, i, l, s, c, d) {
                var m = this,
                  p = this.getPreviewableMedias().length,
                  _ = t.length + p > l ? Math.max(l - p, 0) : t.length,
                  f = t.length - _;
                _ === 0
                  ? f && this.trigger("max_upload_limit", f)
                  : this.ignore(f);
                var g = t.slice(0, _).map(function (t) {
                  var l = m.$AttachMediaCollection$p_2(t);
                  (c != null &&
                    (l = l.then(function (e) {
                      if (
                        e.type === o("WAWebFileUtils").FILETYPE.DOCUMENT &&
                        e.file.size > c
                      )
                        throw new (r("WAWebMediaFileTooLargeError"))(
                          "document",
                          c,
                          e.file.size,
                        );
                      return e;
                    })),
                    d != null &&
                      (l = l.then(function (e) {
                        if (
                          e.type === o("WAWebFileUtils").FILETYPE.VIDEO &&
                          e.file.size > d
                        )
                          throw new (r("WAWebMediaFileTooLargeError"))(
                            "video",
                            d,
                            e.file.size,
                          );
                        return e;
                      })));
                  var s = new (o("WAWebAttachMediaModel").AttachMedia)({
                    id: u++,
                    file: l,
                    fileOrigin: a,
                    supportedTypes: i,
                  });
                  if (!(t instanceof (e || (e = n("Promise"))))) {
                    var p,
                      _,
                      f,
                      g,
                      h =
                        (p = t.filename) != null
                          ? p
                          : (_ = t.file) == null
                            ? void 0
                            : _.name,
                      y =
                        (f = t.mimetype) != null
                          ? f
                          : (g = t.file) == null
                            ? void 0
                            : g.type;
                    (h != null || y != null) &&
                      s.set({ filename: h, mimetype: y });
                  }
                  return s;
                });
                this.add(g);
                var h = this.getActive();
                return (
                  this.unsetActive(),
                  g.forEach(function (e) {
                    m.listenTo(e, "change:previewable", function () {
                      m.$AttachMediaCollection$p_3(g, h);
                    });
                  }),
                  (e || (e = n("Promise"))).all(t).then(function () {
                    m.$AttachMediaCollection$p_3(g, h);
                  }),
                  yield e.all(
                    g.map(function (e) {
                      return e.processPromise;
                    }),
                  ),
                  s && s(),
                  g.forEach(function (e) {
                    return m.$AttachMediaCollection$p_4(e, a);
                  }),
                  this.$AttachMediaCollection$p_3(g, h)
                );
              },
            );
            function a(e, n, r, o, a, i, l) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (i.$AttachMediaCollection$p_3 = function (t, n) {
            if (
              !this.getActive() &&
              !this.getModelsArray().some(function (e) {
                return (
                  e.state ===
                    o("WAWebAttachMediaModel").ATTACH_MEDIA_STATE.PROCESSING &&
                  !e.previewable
                );
              })
            ) {
              var e = t.find(function (e) {
                return e.previewable;
              });
              (e || (e = n),
                this.selection.init(this.getPreviewableMedias()),
                e && this.setActive(e));
            }
          }),
          (i.$AttachMediaCollection$p_4 = function (t, n) {
            if (n != null) {
              var e = t.isGif ? "gif" : t.type;
              this.mediaPickerStatsLogger.logAdd(t.id, e, n);
            }
          }),
          (i.$AttachMediaCollection$p_2 = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var r = yield (e || (e = n("Promise"))).resolve(t);
                return (
                  r.filename || (r.filename = r.file.name),
                  r.mimetype || (r.mimetype = r.file.type),
                  r.type ||
                    (r.type = o("WAWebFileUtils").typeFromMimetype(
                      r.file.type,
                    )),
                  !r.type &&
                    r.mimetype &&
                    (r.type = o("WAWebFileUtils").typeFromMimetype(r.mimetype)),
                  r
                );
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (i.ignore = function (t) {
            t > 0 && (this.ignored += t);
          }),
          (i.uiProcessMsgs = function (t, n) {
            var e = [],
              a,
              i = 0,
              l = 0,
              u = 0,
              c = 0,
              d = null,
              m = 0,
              p = 0,
              _ = 0,
              f = 0,
              g = 0,
              h = 0,
              y = 0,
              C = !1,
              b = o("WAWebL10nFilesize").getL10nFilesize(
                o("WAWebServerPropConstants").MAX_FILE_SIZE_BYTES,
              ),
              v = o("WAWebL10nFilesize").getL10nFilesize(
                o("WAWebServerPropConstants").VCARD_MAX_SIZE_KB * 1024,
              ),
              S = n === o("WAWebMediaEditorEnumsThemes").MediaTheme.STATUS,
              R = S
                ? o("WAWebWamEnumMediaPickerOriginType")
                    .MEDIA_PICKER_ORIGIN_TYPE.STATUS_TAB_CAMERA_PHOTO_LIBRARY
                : null;
            if (
              (this.forEach(function (e) {
                if (
                  !e.uiProcessed &&
                  (!a && e.previewable && (a = e),
                  e.state !==
                    o("WAWebAttachMediaModel").ATTACH_MEDIA_STATE.PROCESSING &&
                    ((e.uiProcessed = !0),
                    e.state ===
                      o("WAWebAttachMediaModel").ATTACH_MEDIA_STATE.ERROR))
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
                          ? (m += e.documentPageCount)
                          : ((c += 1), (d = e.exception.uploadLimit));
                        break;
                    }
                  else if (
                    e.exception instanceof o("WAWebMiscErrors").MediaFileEmpty
                  )
                    switch (e.getFileType()) {
                      case o("WAWebFileUtils").FILETYPE.IMAGE:
                        p += 1;
                        break;
                      case o("WAWebFileUtils").FILETYPE.VIDEO:
                        _ += 1;
                        break;
                      case o("WAWebFileUtils").FILETYPE.AUDIO:
                        f += 1;
                        break;
                      case o("WAWebFileUtils").FILETYPE.DOCUMENT:
                        e.isVcardOverMmsDocument
                          ? (h += e.documentPageCount)
                          : (g += 1);
                        break;
                    }
                  else
                    e.exception instanceof
                    o("WAWebMiscErrors").MediaFileFailedLoad
                      ? (C = !0)
                      : (y += 1);
              }),
              i > 0 &&
                e.push(
                  s._(
                    /*BTDS*/ '_j{"*":"{number} images you tried adding are larger than the {maxSize} limit.","_1":"1 image you tried adding is larger than the {maxSize} limit."}',
                    [
                      s._plural(i, "number"),
                      s._param(
                        "maxSize",
                        o("WAWebL10nFilesize").getL10nFilesize(
                          o("WAWebMediaGatingUtils").getUploadLimit("image", R),
                        ),
                      ),
                    ],
                  ),
                ),
              l > 0 &&
                e.push(
                  s._(
                    /*BTDS*/ '_j{"*":"{number} videos you tried adding are larger than the {maxSize} limit.","_1":"1 video you tried adding is larger than the {maxSize} limit."}',
                    [
                      s._plural(l, "number"),
                      s._param(
                        "maxSize",
                        o("WAWebL10nFilesize").getL10nFilesize(
                          o("WAWebMediaGatingUtils").getUploadLimit("video", R),
                        ),
                      ),
                    ],
                  ),
                ),
              u > 0 &&
                e.push(
                  s._(
                    /*BTDS*/ '_j{"*":{"*":"{number} files you tried adding are larger than the {maxSize} limit."},"_1":{"_1":"1 file you tried adding is larger than the {maxSize} limit."}}',
                    [
                      s._plural(u, "number"),
                      s._plural(u),
                      s._param(
                        "maxSize",
                        o("WAWebL10nFilesize").getL10nFilesize(
                          o("WAWebMediaGatingUtils").getUploadLimit("audio", R),
                        ),
                      ),
                    ],
                  ),
                ),
              c > 0)
            ) {
              var L = d != null ? o("WAWebL10nFilesize").getL10nFilesize(d) : b;
              e.push(
                s._(
                  /*BTDS*/ '_j{"*":{"*":"{number} documents you tried adding are larger than the {maxSize} limit."},"_1":{"_1":"1 document you tried adding is larger than the {maxSize} limit."}}',
                  [
                    s._plural(c, "number"),
                    s._plural(c),
                    s._param("maxSize", L),
                  ],
                ),
              );
            }
            if (
              (m > 0 &&
                e.push(
                  s._(
                    /*BTDS*/ '_j{"*":"The contacts that you tried to add are larger than the {maxSize} limit.","_1":"The contact that you tried to add is larger than the {maxSize} limit."}',
                    [s._plural(m), s._param("maxSize", v)],
                  ),
                ),
              p > 0 &&
                e.push(
                  s._(
                    /*BTDS*/ '_j{"*":"{number} images you tried adding have no content.","_1":"1 image you tried adding has no content."}',
                    [s._plural(p, "number")],
                  ),
                ),
              _ > 0 &&
                e.push(
                  s._(
                    /*BTDS*/ '_j{"*":{"*":"{number} videos you tried adding have no content."},"_1":{"_1":"1 video you tried adding has no content."}}',
                    [s._plural(_, "number"), s._plural(_)],
                  ),
                ),
              f > 0 &&
                e.push(
                  s._(
                    /*BTDS*/ '_j{"*":{"*":"{number} files you tried adding have no content."},"_1":{"_1":"1 file you tried adding has no content."}}',
                    [s._plural(f, "number"), s._plural(f)],
                  ),
                ),
              g > 0 &&
                e.push(
                  s._(
                    /*BTDS*/ '_j{"*":{"*":"{number} documents you tried adding have no content."},"_1":{"_1":"1 document you tried adding has no content."}}',
                    [s._plural(g, "number"), s._plural(g)],
                  ),
                ),
              h > 0 &&
                e.push(
                  s._(
                    /*BTDS*/ '_j{"*":{"*":"{number} contacts that you tried to add have no content."},"_1":{"_1":"1 contact that you tried to add has no content."}}',
                    [s._plural(h, "number"), s._plural(h)],
                  ),
                ),
              y > 0 &&
                e.push(
                  s._(
                    /*BTDS*/ '_j{"*":"{number} files you tried adding are not supported.","_1":"1 file you tried adding is not supported."}',
                    [s._plural(y, "number")],
                  ),
                ),
              C &&
                ((e = []),
                e.push(
                  s._(/*BTDS*/ "The item you tried adding failed to load."),
                )),
              e.length > 1)
            ) {
              e = [];
              var E = i + l + u + c,
                k = p + _ + f + g,
                I = E + k + y;
              y === 0
                ? (E !== 0 &&
                    e.push(
                      s._(
                        /*BTDS*/ '_j{"*":"{number} files you tried adding are larger than the {maxSize} limit.","_1":"1 file you tried adding is larger than the {maxSize} limit."}',
                        [s._plural(E, "number"), s._param("maxSize", b)],
                      ),
                    ),
                  k !== 0 &&
                    e.push(
                      s._(
                        /*BTDS*/ '_j{"*":"{number} files you tried adding have no content.","_1":"1 file you tried adding has no content."}',
                        [s._plural(k, "number")],
                      ),
                    ))
                : e.push(
                    s._(
                      /*BTDS*/ '_j{"*":"{number} files could not be added.","_1":"1 file could not be added."}',
                      [s._plural(I, "number")],
                    ),
                  );
            }
            var T = e.join(" ");
            this.errorMsgs = T;
            var D = this.getPreviewableMedias().length;
            this.ignore(D - t);
            var x = this.ignored;
            return (
              (this.ignored = 0),
              x && this.trigger("max_upload_limit", x),
              y > 0 && this.trigger("files_not_supported"),
              { errorMsgs: T }
            );
          }),
          (i.canSendMedia = function (t) {
            var e = d(t);
            return e != null &&
              o("WAWebMimeTypes").isPdfDocument(e) &&
              t.state !== o("WAWebAttachMediaModel").ATTACH_MEDIA_STATE.ERROR &&
              o("WAWebTPPdfViewerGatingUtils").isAsyncPdfSendEnabled()
              ? !0
              : t.state !==
                  o("WAWebAttachMediaModel").ATTACH_MEDIA_STATE.PROCESSING ||
                  t.previewable;
          }),
          (i.canSend = function () {
            var e = this;
            return this.getModelsArray().every(function (t) {
              return e.canSendMedia(t);
            });
          }),
          a
        );
      })(o("WAWebBaseCollection").BaseCollection);
    c.model = o("WAWebAttachMediaModel").AttachMedia;
    function d(e) {
      if (e.mimetype != null && e.mimetype !== "") return e.mimetype;
      var t = e.file;
      return t instanceof File ? t.type : null;
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.countWhere(function (e) {
            return (
              e.exception instanceof r("WAWebMediaFileTooLargeError") &&
              e.exception.mediaType === o("WAWebFileUtils").FILETYPE.DOCUMENT
            );
          });
          n !== 0 &&
            o("WAWebImagineActionLogger").logImagineAction({
              action: o("WAWebWamEnumImagineAction").IMAGINE_ACTION
                .MEDIA_SIZE_EXCEED_LIMIT,
              mediaType: o("WAWebWamEnumImagineMediaType").IMAGINE_MEDIA_TYPE
                .DOCUMENT,
              maxIndex: n,
              eventContext: yield o(
                "WAWebGetMetaAiImagineEventContext",
              ).getMetaAiImagineEventContext(t),
            });
        })),
        p.apply(this, arguments)
      );
    }
    l.default = c;
  },
  226,
);
