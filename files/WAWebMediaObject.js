__d(
  "WAWebMediaObject",
  [
    "Promise",
    "WALogger",
    "WANullthrows",
    "WAShiftTimer",
    "WAWebAck",
    "WAWebCryptoCreateMediaKeys",
    "WAWebInteractiveMessageHeaderMediaType",
    "WAWebMedia",
    "WAWebMediaCryptoEligibilityUtils",
    "WAWebMediaDataUtils",
    "WAWebMediaEntry",
    "WAWebMediaOpaqueData",
    "WAWebMediaTypes",
    "WAWebMmsMediaTypes",
    "WAWebMsgType",
    "WAWebRequestMediaReuploadBridge",
    "asyncToGeneratorRuntime",
    "err",
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
      h = (function () {
        function t() {
          var e = this;
          ((this.msgs = []),
            (this.$1 = new (o("WAShiftTimer").ShiftTimer)(function () {
              (S(e), $(e));
            })),
            (this.callOnConsolidate = null),
            (this.$2 = null),
            (this.$3 = 0),
            (this.saveMedia = null),
            (this.stickers = []),
            (this.stickerPacks = []),
            (this.entries = new (o("WAWebMediaEntry").MediaEntryList)()),
            (this.downloadStage = o("WAWebMediaTypes").DownloadStage.INIT),
            (this.uploadStage = o("WAWebMediaTypes").UploadStage.INIT),
            (this.userUploadAttemptCount = 0),
            (this.userDownloadAttemptCount = 0),
            (this.$4 = null),
            (this.$5 = null),
            (this.$6 = null),
            (this.$7 = null),
            (this.mediaBlob = null),
            (this.size = void 0),
            (this.loadedSize = void 0),
            (this.filehash = void 0),
            (this.contentInfo = {}),
            (this.progressiveStage = void 0),
            (this.parsedVcards = null),
            (this.extractedLottieSticker = null));
        }
        var a = t.prototype;
        return (
          (a.encryptedDownloadPromise_TESTONLY = function () {
            return this.$4;
          }),
          (a.unencryptedDownloadPromise_TESTONLY = function () {
            return this.$5;
          }),
          (a.consolidate = function (n) {
            if (n.downloadStage) {
              var t;
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[",
                    "] mediaObject.downloadStage: ",
                    "",
                  ])),
                (t = this.filehash) == null ? void 0 : t.slice(0, 10),
                String(n.downloadStage),
              );
            }
            return y(this, n) ? (this.notifyMsgsAsync(), !0) : !1;
          }),
          (a.clearBlob = function (t) {
            var e = this.mediaBlob;
            (e && ((this.mediaBlob = null), e.autorelease()),
              (t == null ? void 0 : t.reset) === !0 && this.$8());
          }),
          (a.$8 = function () {
            this.consolidate({
              downloadStage: o("WAWebMediaTypes").DownloadStage.INIT,
            });
          }),
          (a.contentFields = function () {
            var e = this.type || o("WAWebMediaTypes").TYPE.DOCUMENT;
            return o("WAWebMediaTypes").FIELDS[e];
          }),
          (a.resolveWhenConsolidated = function () {
            var e = this;
            return this.$1.ts
              ? new (g || (g = n("Promise")))(function (t) {
                  e.callOnConsolidate
                    ? e.callOnConsolidate.push(t)
                    : (e.callOnConsolidate = [t]);
                })
              : (g || (g = n("Promise"))).resolve();
          }),
          (a.notifyMsgsAsync = function () {
            this.$1.debounce(0);
          }),
          (a.addMsg = function (t) {
            for (var e = this.msgs, n = 0, r = 0; r < e.length; r++) {
              var a = e[r],
                i = a[0],
                l = a[1];
              i === t && !l && n++;
            }
            (n > 0 &&
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "Assertion failed! ",
                      " redundant media msg(s)",
                    ])),
                  n,
                )
                .sendLogs("redundant-media-msg"),
              e.push([t, !1]),
              this.notifyMsgsAsync());
          }),
          (a.removeMsg = function (t) {
            for (var e = this.msgs, n = !1, r = 0; !n && r < e.length; r++) {
              var o = e[r],
                a = o[0],
                i = o[1];
              a === t && !i && ((e[r][1] = !0), (n = !0));
            }
          }),
          (a.hasAssociatedMsgsOrStickers = function () {
            for (var e = this.msgs, t = 0; t < e.length; t++)
              if (!e[t][1]) return !0;
            return (
              this.hasAssociatedStickers() || this.hasAssociatedStickerPacks()
            );
          }),
          (a.associatedMsgs = function () {
            for (var e = this.msgs, t = [], n = 0; n < e.length; n++) {
              var r = e[n],
                o = r[0],
                a = r[1];
              a || t.push(o);
            }
            return t;
          }),
          (a.rmr = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this.associatedStickers();
                if (t.length > 0) {
                  var a = this.associatedMsgs().filter(function (e) {
                    return e != null;
                  });
                  if (a.length === 0)
                    return (
                      o("WALogger").LOG(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "The sticker associated message has been deleted.",
                          ])),
                      ),
                      (g || (g = n("Promise"))).resolve(200)
                    );
                }
                var i = this.msgs.find(function (e) {
                    var t = e[0],
                      n = e[1];
                    return !n && !t.isUnsentPhoneMsg();
                  }) || [null],
                  l = i[0];
                if (!l)
                  return (
                    o("WALogger")
                      .ERROR(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "Assertion failed!",
                          ])),
                      )
                      .sendLogs(
                        "media-fault: rmr called on MediaObject with no msg",
                      ),
                    (g || (g = n("Promise"))).reject(
                      r("err")("rmr called on MediaObject with no msg"),
                    )
                  );
                e.onMsgSelect(l);
                var s = yield r("WAWebRequestMediaReuploadBridge")(l);
                if (s.status === 200) {
                  var m = l.mediaData.type;
                  if (m === "unknown")
                    return (g || (g = n("Promise"))).reject(
                      r("err")("rmr called on MediaData with unknown type"),
                    );
                  var p = s.isMD
                    ? this.entries.updateEntry({
                        deprecatedMms3Url: l.deprecatedMms3Url,
                        encFilehash: l.encFilehash,
                        directPath: s.directPath,
                      })
                    : this.entries.addEntry({
                        deprecatedMms3Url: s.url,
                        mediaKey: s.mediaKey || r("WANullthrows")(l.mediaKey),
                        mediaKeyTimestamp: s.mediaKeyTimestamp,
                        encFilehash: s.encFilehash,
                        type: m,
                        directPath: s.directPath,
                        debugHint: "rmr",
                      });
                  (p ||
                    o("WALogger")
                      .ERROR(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "Assertion failed!",
                          ])),
                      )
                      .sendLogs("media-fault: rmr entry can not be found"),
                    p == null || p.markWhetherOnServer(!0));
                }
                return s.status;
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.msgProps = function (t) {
            var e = {};
            (R(e, this, o("WAWebMediaTypes").FIELDS.RAW),
              R(e, this.contentInfo, this.contentFields()),
              R(e, t, o("WAWebMediaTypes").MSG_SPECIFIC_FIELDS),
              (e.preview = this.contentInfo._preview));
            var n = {};
            for (var r in e) {
              var a = o("WAWebMediaTypes").MEDIA_TO_MSG[r];
              a && (n[a] = e[r]);
            }
            return n;
          }),
          (a.delete = function () {
            ((this.saveMedia = null),
              o("WAWebMedia").cancelDownloadMedia(this),
              o("WAWebMedia").cancelUploadMedia(this),
              this.clearBlob());
          }),
          (a.runProcessIfNotRunBefore = function (t, r, o) {
            var e = this,
              a = this.$2;
            (a || (a = this.$2 = {}),
              !Object.prototype.hasOwnProperty.call(a, t) &&
                (this.$3++,
                (a[t] = (g || (g = n("Promise")))
                  .resolve(o)
                  .then(r)
                  .then(function (t) {
                    return void e.consolidate(t);
                  })
                  .finally(function () {
                    (e.$3--, e.$3 === 0 && e.notifyMsgsAsync());
                  }))));
          }),
          (a.getPendingProcess = function (t) {
            return this.$3 === 0 ||
              !this.$2 ||
              !Object.prototype.hasOwnProperty.call(this.$2, t)
              ? (g || (g = n("Promise"))).resolve()
              : this.$2[t];
          }),
          (a.videoStreamingInfo = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (this.type !== o("WAWebMediaTypes").TYPE.VIDEO) {
                  o("WALogger")
                    .ERROR(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "type: ",
                          "",
                        ])),
                      String(this.type),
                    )
                    .sendLogs(
                      "media-fault: media streaming info request for non-video type",
                    );
                  return;
                }
                var t = this.entries.getDownloadEntry(!0);
                if (
                  !t ||
                  !t.sidecar ||
                  !(t instanceof o("WAWebMediaEntry").EncryptedMediaEntry)
                )
                  return null;
                var a = yield (g || (g = n("Promise"))).all([
                    r("WAWebCryptoCreateMediaKeys")(
                      o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO,
                      t.mediaKey,
                    ),
                    t.url(),
                  ]),
                  i = a[0],
                  l = a[1];
                return {
                  cryptoKeys: babelHelpers.extends({}, i, {
                    cipherKey: i.encKey,
                    sidecar: t.sidecar,
                  }),
                  streamData: { clientUrl: l, size: this.size, msgKey: e },
                };
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.addStickerPack = function (t) {
            for (var e = this.stickerPacks, n = 0, r = 0; r < e.length; r++) {
              var a = e[r],
                i = a[0],
                l = a[1];
              i === t && !l && n++;
            }
            (n > 0 &&
              o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "Assertion failed! ",
                      " redundant sticker pack(s)",
                    ])),
                  n,
                )
                .sendLogs("redundant-sticker-pack-add"),
              e.push([t, !1]),
              this.notifyMsgsAsync());
          }),
          (a.addSticker = function (t) {
            for (var e = this.stickers, n = 0, r = 0; r < e.length; r++) {
              var a = e[r],
                i = a[0],
                l = a[1];
              i === t && !l && n++;
            }
            (n > 0 &&
              o("WALogger")
                .ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "Assertion failed! ",
                      " redundant sticker(s)",
                    ])),
                  n,
                )
                .sendLogs("redundant-sticker-add"),
              e.push([t, !1]),
              this.notifyMsgsAsync());
          }),
          (a.removeSticker = function (t) {
            for (
              var e = this.stickers, n = !1, r = 0;
              !n && r < e.length;
              r++
            ) {
              var o = e[r],
                a = o[0],
                i = o[1];
              a === t && !i && ((e[r][1] = !0), (n = !0));
            }
          }),
          (a.removeStickerPack = function (t) {
            for (
              var e = this.stickerPacks, n = !1, r = 0;
              !n && r < e.length;
              r++
            ) {
              var o = e[r],
                a = o[0],
                i = o[1];
              a === t && !i && ((e[r][1] = !0), (n = !0));
            }
          }),
          (a.hasAssociatedStickers = function () {
            return this.stickers.some(function (e) {
              var t = e[0],
                n = e[1];
              return !n;
            });
          }),
          (a.hasAssociatedStickerPacks = function () {
            return this.stickerPacks.some(function (e) {
              var t = e[0],
                n = e[1];
              return !n;
            });
          }),
          (a.associatedStickers = function () {
            return this.stickers.reduce(function (e, t) {
              var n = t[0],
                r = t[1];
              return r ? e : e.concat(n);
            }, []);
          }),
          (a.getUploadPromise = function (t) {
            return o(
              "WAWebMediaCryptoEligibilityUtils",
            ).isMediaCryptoExpectedForMediaType(t)
              ? this.$6
              : this.$7;
          }),
          (a.setUploadPromise = function (t, n) {
            o(
              "WAWebMediaCryptoEligibilityUtils",
            ).isMediaCryptoExpectedForMediaType(n)
              ? (this.$6 = t)
              : (this.$7 = t);
          }),
          (a.clearUploadPromise = function (t) {
            o(
              "WAWebMediaCryptoEligibilityUtils",
            ).isMediaCryptoExpectedForMediaType(t)
              ? (this.$6 = null)
              : (this.$7 = null);
          }),
          (a.getUploadPromises = function () {
            return [this.$6, this.$7];
          }),
          (a.getDownloadPromise = function (t) {
            return o(
              "WAWebMediaCryptoEligibilityUtils",
            ).isMediaCryptoExpectedForMediaType(t)
              ? this.$4
              : this.$5;
          }),
          (a.setDownloadPromise = function (t, n) {
            o(
              "WAWebMediaCryptoEligibilityUtils",
            ).isMediaCryptoExpectedForMediaType(n)
              ? (this.$4 = t)
              : (this.$5 = t);
          }),
          (a.clearDownloadPromise = function (t) {
            o(
              "WAWebMediaCryptoEligibilityUtils",
            ).isMediaCryptoExpectedForMediaType(t)
              ? (this.$4 = null)
              : (this.$5 = null);
          }),
          (a.getDownloadPromises = function () {
            return [this.$4, this.$5];
          }),
          (a.toJSON = function () {
            return {
              mediaBlob: this.mediaBlob,
              size: this.size,
              filehash: this.filehash,
              type: this.type,
              contentInfo: this.contentInfo,
              downloadStage: this.downloadStage,
              uploadStage: this.uploadStage,
            };
          }),
          t
        );
      })();
    function y(e, t) {
      var n = e.contentInfo,
        r = !1,
        o = C(t.type);
      o && !e.type && ((e.type = o), (r = !0));
      var a = t.downloadStage,
        i = t.uploadStage;
      (a && a !== e.downloadStage && ((e.downloadStage = a), (r = !0)),
        i && i !== e.uploadStage && ((e.uploadStage = i), (r = !0)),
        t.resolvedPreview &&
          !n.preview &&
          (t.resolvedPreview.retain(),
          (n.preview = t.resolvedPreview),
          (r = !0)),
        t.progressiveStage !== void 0 &&
          t.progressiveStage !== e.progressiveStage &&
          ((e.progressiveStage = t.progressiveStage), (r = !0)));
      var l = t.mediaBlob;
      (l &&
        !l.isBlobEqual(e.mediaBlob) &&
        (e.mediaBlob && e.clearBlob(),
        l.retain(),
        (e.mediaBlob = l),
        (e.size = l.size()),
        (r = !0)),
        t.size != null &&
          t.size !== 0 &&
          (e.size == null || t.size < e.size) &&
          ((e.size = t.size), (r = !0)));
      var s = t.loadedSize;
      (s != null && s !== e.loadedSize && ((e.loadedSize = s), (r = !0)),
        t.filehash && !e.filehash && ((e.filehash = t.filehash), (r = !0)),
        t.parsedVcards &&
          t.parsedVcards !== e.parsedVcards &&
          ((e.parsedVcards = t.parsedVcards), (r = !0)),
        t.extractedLottieSticker != null &&
          t.extractedLottieSticker !== e.extractedLottieSticker &&
          ((e.extractedLottieSticker = t.extractedLottieSticker), (r = !0)));
      for (var u = e.contentFields(), c = 0; c < u.length; c++) {
        var d = u[c];
        switch (d) {
          case "preview":
            t.preview &&
              !n._preview &&
              (e.runProcessIfNotRunBefore("preview", I, t.preview),
              (n._preview = t.preview),
              (r = !0));
            break;
          case "fullWidth":
          case "fullHeight":
          case "aspectRatio": {
            var m = t[d];
            m != null && m !== 0 && n[d] !== m && ((n[d] = m), (r = !0));
            break;
          }
          case "animationDuration":
          case "singleLoopDuration": {
            var p = t[d];
            p != null && p !== n[d] && ((n[d] = p), (r = !0));
            break;
          }
          default: {
            var _ = t[d];
            if (_ !== void 0 && n[d] === void 0) ((n[d] = _), (r = !0));
            else if (d === "fullPreviewData" && _ !== void 0) {
              var f = n.fullPreviewData;
              f != null &&
                !f.released &&
                !_.released &&
                _.size() > f.size() &&
                ((n[d] = _), (r = !0));
            }
          }
        }
      }
      return (
        (n.aspectRatio == null || n.aspectRatio === 0) &&
          (n.fullWidth != null &&
          n.fullWidth !== 0 &&
          n.fullHeight != null &&
          n.fullHeight !== 0
            ? ((n.aspectRatio = n.fullWidth / n.fullHeight), (r = !0))
            : n.preview &&
              e.runProcessIfNotRunBefore("aspectRatio", D, n.preview)),
        r
      );
    }
    function C(e) {
      switch (e) {
        case o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE:
        case o("WAWebMediaTypes").OUTWARD_TYPES.PRODUCT:
          return o("WAWebMediaTypes").TYPE.IMAGE;
        case o("WAWebMediaTypes").OUTWARD_TYPES.VIDEO:
          return o("WAWebMediaTypes").TYPE.VIDEO;
        case o("WAWebMediaTypes").OUTWARD_TYPES.PTV:
          return o("WAWebMediaTypes").TYPE.PTV;
        case o("WAWebMediaTypes").OUTWARD_TYPES.STICKER:
          return o("WAWebMediaTypes").TYPE.STICKER;
        case o("WAWebMediaTypes").OUTWARD_TYPES.AUDIO:
        case o("WAWebMediaTypes").OUTWARD_TYPES.PTT:
          return o("WAWebMediaTypes").TYPE.AUDIO;
        case o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT:
        default:
          return;
      }
    }
    function b(e) {
      switch (e) {
        case "VIDEO":
        case "PTV":
          return 3;
        case "IMAGE":
          return 2;
        case "AUDIO":
          return 4;
        case "STICKER":
          return 16;
        case "DOCUMENT":
          return 8;
        case "PRODUCT":
          return 18;
        case "BIZ_COVER_PHOTO":
          throw r("err")("web media type is invalid: " + e);
        default:
          throw r("err")("web media type is invalid: " + e);
      }
    }
    function v(e) {
      var t;
      if (((t = e.interactiveHeader) == null ? void 0 : t.mediaType) != null)
        switch (e.interactiveHeader.mediaType) {
          case o("WAWebInteractiveMessageHeaderMediaType")
            .InteractiveMessageHeaderMediaType.DOCUMENT:
            return o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT;
          case o("WAWebInteractiveMessageHeaderMediaType")
            .InteractiveMessageHeaderMediaType.VIDEO:
            return o("WAWebMediaTypes").OUTWARD_TYPES.VIDEO;
          case o("WAWebInteractiveMessageHeaderMediaType")
            .InteractiveMessageHeaderMediaType.IMAGE:
            return o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE;
          case o("WAWebInteractiveMessageHeaderMediaType")
            .InteractiveMessageHeaderMediaType.PRODUCT:
            return o("WAWebMediaTypes").OUTWARD_TYPES.PRODUCT;
        }
    }
    function S(e) {
      var t = {};
      (R(t, e, o("WAWebMediaTypes").FIELDS.RAW),
        R(t, e.contentInfo, e.contentFields()),
        e.mediaBlob && (t.renderableUrl = e.mediaBlob.url()));
      for (var n = e.msgs, r = n.length, a = 0; a < r; a++) {
        var i = n[a],
          l = i[0],
          s = i[1];
        if (l != null && !s) {
          if (l.type !== o("WAWebMsgType").MSG_TYPE.CIPHERTEXT) {
            t.mediaStage = L(l, e);
            for (
              var u = 0;
              u < o("WAWebMediaTypes").MSG_SPECIFIC_FIELDS.length;
              u++
            ) {
              var c = o("WAWebMediaTypes").MSG_SPECIFIC_FIELDS[u];
              (c === "accessibilityLabel" &&
                t.accessibilityLabel != null &&
                l.type === o("WAWebMsgType").MSG_TYPE.STICKER &&
                l.set("accessibilityLabel", t.accessibilityLabel),
                (t[c] = l.get(o("WAWebMediaTypes").MEDIA_TO_MSG[c])));
            }
            t.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
              (t.type = v(l));
          } else {
            delete t.mediaStage;
            for (
              var d = 0;
              d < o("WAWebMediaTypes").MSG_SPECIFIC_FIELDS.length;
              d++
            )
              delete t[o("WAWebMediaTypes").MSG_SPECIFIC_FIELDS[d]];
          }
          l.mediaData.set(t);
        }
      }
      for (var m = n.length - 1; m >= 0; m--) n[m][1] && n.splice(m, 1);
      var p = e.callOnConsolidate;
      (p &&
        ((e.callOnConsolidate = null),
        p.forEach(function (e) {
          return void e();
        })),
        e.saveMedia && e.saveMedia(e));
    }
    function R(e, t, n) {
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        e[o] = t[o];
      }
    }
    function L(e, t) {
      if (t.filehash) {
        if (e.id.fromMe && e.ack < o("WAWebAck").ACK.SENT)
          return (
            e.local ||
              o("WALogger")
                .ERROR(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "Assertion failed!",
                    ])),
                )
                .sendLogs("media-fault: unsent media system message not local"),
            k(t)
          );
      } else return o("WAWebMediaTypes").MediaDataStage.PREPARING;
      return E(t);
    }
    function E(e) {
      return e.downloadStage === o("WAWebMediaTypes").DownloadStage.INIT
        ? o("WAWebMediaTypes").MediaDataStage.INIT
        : e.downloadStage === o("WAWebMediaTypes").DownloadStage.EXISTS
          ? o("WAWebMediaTypes").MediaDataStage.EXISTS
          : e.downloadStage === o("WAWebMediaTypes").DownloadStage.PREPARING
            ? o("WAWebMediaTypes").MediaDataStage.PREPARING
            : e.downloadStage === o("WAWebMediaTypes").DownloadStage.REUPLOADING
              ? o("WAWebMediaTypes").MediaDataStage.REUPLOADING
              : e.downloadStage === o("WAWebMediaTypes").DownloadStage.FETCHING
                ? o("WAWebMediaTypes").MediaDataStage.FETCHING
                : e.downloadStage ===
                    o("WAWebMediaTypes").DownloadStage.PROCESSING
                  ? o("WAWebMediaTypes").MediaDataStage.DECRYPTING
                  : e.downloadStage ===
                      o("WAWebMediaTypes").DownloadStage.NEED_POKE
                    ? o("WAWebMediaTypes").MediaDataStage.NEED_POKE
                    : e.downloadStage ===
                        o("WAWebMediaTypes").DownloadStage.ERROR_MISSING
                      ? o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING
                      : e.downloadStage ===
                          o("WAWebMediaTypes").DownloadStage.ERROR_UNSUPPORTED
                        ? o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED
                        : e.downloadStage ===
                            o("WAWebMediaTypes").DownloadStage.RESOLVED
                          ? o("WAWebMediaTypes").MediaDataStage.RESOLVED
                          : e.downloadStage ===
                              o("WAWebMediaTypes").DownloadStage
                                .PROGRESSIVE_READY
                            ? o("WAWebMediaTypes").MediaDataStage
                                .PROGRESSIVE_READY
                            : (function () {
                                throw Error(
                                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                    e.downloadStage,
                                );
                              })();
    }
    function k(e) {
      switch (e.uploadStage) {
        case o("WAWebMediaTypes").UploadStage.INIT:
          return o("WAWebMediaTypes").MediaDataStage.PREPARING;
        case o("WAWebMediaTypes").UploadStage.PREPARING:
          return o("WAWebMediaTypes").MediaDataStage.PREPARING;
        case o("WAWebMediaTypes").UploadStage.UPLOADING:
          return o("WAWebMediaTypes").MediaDataStage.UPLOADING;
        case o("WAWebMediaTypes").UploadStage.NEED_UPLOAD:
          return o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD;
        case o("WAWebMediaTypes").UploadStage.ERROR_MISSING:
          return o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING;
        case o("WAWebMediaTypes").UploadStage.ERROR_TOO_LARGE:
          return o("WAWebMediaTypes").MediaDataStage.ERROR_TOO_LARGE;
        case o("WAWebMediaTypes").UploadStage.ERROR_FORBIDDEN:
          return o("WAWebMediaTypes").MediaDataStage.ERROR_FORBIDDEN;
        case o("WAWebMediaTypes").UploadStage.ERROR_THROTTLED:
          return o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD;
        case o("WAWebMediaTypes").UploadStage.UPLOADED:
          return o("WAWebMediaTypes").MediaDataStage.SENDING;
        case o("WAWebMediaTypes").UploadStage.ERROR_FILE_NOT_READABLE:
          return o("WAWebMediaTypes").MediaDataStage.ERROR_FILE_NOT_READABLE;
        case o("WAWebMediaTypes").UploadStage.FINALIZING:
          return o("WAWebMediaTypes").MediaDataStage.FINALIZING;
      }
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield r("WAWebMediaOpaqueData").createFromBase64Jpeg(e);
          return (t.autorelease(), { resolvedPreview: t });
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebMediaDataUtils").getImageWidthHeight(e),
            n = t.height,
            r = t.width;
          return { aspectRatio: r / n };
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      var t = {};
      (R(t, e, o("WAWebMediaTypes").FIELDS.RAW),
        R(t, e.contentInfo, e.contentFields()),
        e.mediaBlob && (t.renderableUrl = e.mediaBlob.url()));
      var n = E(e);
      ((e.stickers = e.stickers.filter(function (e) {
        var t = e[0],
          n = e[1];
        return !n;
      })),
        e.stickers.forEach(function (e) {
          var r = e[0],
            o = e[1];
          r.mediaData.set(babelHelpers.extends({}, t, { mediaStage: n }));
        }),
        (e.stickerPacks = e.stickerPacks.filter(function (e) {
          var t = e[0],
            n = e[1];
          return !n;
        })),
        e.stickerPacks.forEach(function (e) {
          var r = e[0],
            o = e[1];
          r.mediaData.set(babelHelpers.extends({}, t, { mediaStage: n }));
        }),
        e.callOnConsolidate &&
          (e.callOnConsolidate.forEach(function (e) {
            return void e();
          }),
          (e.callOnConsolidate = null)),
        e.saveMedia && e.saveMedia(e));
    }
    ((l.MediaObject = h),
      (l.consolidate = y),
      (l.webMediaTypeToWamMediaType = b),
      (l.getInteractiveMsgMediaType = v));
  },
  98,
);
