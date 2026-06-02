__d(
  "WAWebMediaObject",
  [
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
      h,
      y,
      C,
      b,
      v = (function () {
        function t() {
          var e = this;
          ((this.msgs = []),
            (this.$1 = new (o("WAShiftTimer").ShiftTimer)(function () {
              (k(e), M(e));
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
            (this.hashMismatchRetryCount = 0),
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
        var n = t.prototype;
        return (
          (n.encryptedDownloadPromise_TESTONLY = function () {
            return this.$4;
          }),
          (n.unencryptedDownloadPromise_TESTONLY = function () {
            return this.$5;
          }),
          (n.consolidate = function (n) {
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
            return S(this, n) ? (this.notifyMsgsAsync(), !0) : !1;
          }),
          (n.clearBlob = function (t) {
            var e = this.mediaBlob;
            (e && ((this.mediaBlob = null), e.autorelease()),
              (t == null ? void 0 : t.reset) === !0 && this.$8());
          }),
          (n.$8 = function () {
            this.consolidate({
              downloadStage: o("WAWebMediaTypes").DownloadStage.INIT,
            });
          }),
          (n.contentFields = function () {
            var e = this.type || o("WAWebMediaTypes").TYPE.DOCUMENT;
            return o("WAWebMediaTypes").FIELDS[e];
          }),
          (n.resolveWhenConsolidated = function () {
            var e = this;
            return this.$1.ts
              ? new Promise(function (t) {
                  e.callOnConsolidate
                    ? e.callOnConsolidate.push(t)
                    : (e.callOnConsolidate = [t]);
                })
              : Promise.resolve();
          }),
          (n.notifyMsgsAsync = function () {
            this.$1.debounce(0);
          }),
          (n.addMsg = function (t) {
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
          (n.removeMsg = function (t) {
            for (var e = this.msgs, n = !1, r = 0; !n && r < e.length; r++) {
              var o = e[r],
                a = o[0],
                i = o[1];
              a === t && !i && ((e[r][1] = !0), (n = !0));
            }
          }),
          (n.hasAssociatedMsgsOrStickers = function () {
            for (var e = this.msgs, t = 0; t < e.length; t++)
              if (!e[t][1]) return !0;
            return (
              this.hasAssociatedStickers() || this.hasAssociatedStickerPacks()
            );
          }),
          (n.associatedMsgs = function () {
            for (var e = this.msgs, t = [], n = 0; n < e.length; n++) {
              var r = e[n],
                o = r[0],
                a = r[1];
              a || t.push(o);
            }
            return t;
          }),
          (n.rmr = async function (t) {
            var e = this.associatedStickers();
            if (e.length > 0) {
              var n = this.associatedMsgs().filter(function (e) {
                return e != null;
              });
              if (n.length === 0)
                return (
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "The sticker associated message has been deleted.",
                      ])),
                  ),
                  Promise.resolve(200)
                );
            }
            var a = this.msgs.find(function (e) {
                var t = e[0],
                  n = e[1];
                return !n && !t.isUnsentPhoneMsg();
              }) || [null],
              i = a[0];
            if (!i) {
              var l,
                s = (l = this.filehash) != null ? l : "none",
                _ = this.mediaBlob != null;
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[media-rmr] no eligible msg. total=",
                    " hash=",
                    " blob=",
                    " dlStage=",
                    "",
                  ])),
                this.msgs.length,
                s,
                _,
                this.downloadStage,
              );
              for (var f = 0; f < this.msgs.length; f++) {
                var g,
                  h = this.msgs[f],
                  y = h[0],
                  C = h[1];
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[media-rmr] rmr: msg[",
                      "] removed=",
                      " isUnsentPhone=",
                      " from=",
                      " type=",
                      "",
                    ])),
                  f,
                  C,
                  y.isUnsentPhoneMsg(),
                  (g = y.from) == null ? void 0 : g.toLogString(),
                  y.type,
                );
              }
              return (
                o("WALogger")
                  .ERROR(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "Assertion failed!",
                      ])),
                  )
                  .sendLogs(
                    "media-fault: rmr called on MediaObject with no msg",
                  ),
                Promise.reject(
                  r("err")("rmr called on MediaObject with no msg"),
                )
              );
            }
            t.onMsgSelect(i);
            var b = await r("WAWebRequestMediaReuploadBridge")(i);
            if (b.status === 200) {
              var v = i.mediaData.type;
              if (v === "unknown")
                return Promise.reject(
                  r("err")("rmr called on MediaData with unknown type"),
                );
              var S = b.isMD
                ? this.entries.updateEntry({
                    deprecatedMms3Url: i.deprecatedMms3Url,
                    encFilehash: i.encFilehash,
                    directPath: b.directPath,
                  })
                : this.entries.addEntry({
                    deprecatedMms3Url: b.url,
                    mediaKey: b.mediaKey || r("WANullthrows")(i.mediaKey),
                    mediaKeyTimestamp: b.mediaKeyTimestamp,
                    encFilehash: b.encFilehash,
                    type: v,
                    directPath: b.directPath,
                    debugHint: "rmr",
                  });
              (S ||
                o("WALogger")
                  .ERROR(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "Assertion failed!",
                      ])),
                  )
                  .sendLogs("media-fault: rmr entry can not be found"),
                S == null || S.markWhetherOnServer(!0));
            }
            return b.status;
          }),
          (n.msgProps = function (t) {
            var e = {};
            (I(e, this, o("WAWebMediaTypes").FIELDS.RAW),
              I(e, this.contentInfo, this.contentFields()),
              I(e, t, o("WAWebMediaTypes").MSG_SPECIFIC_FIELDS),
              (e.preview = this.contentInfo._preview));
            var n = {};
            for (var r in e) {
              var a = o("WAWebMediaTypes").MEDIA_TO_MSG[r];
              a && (n[a] = e[r]);
            }
            return n;
          }),
          (n.delete = function () {
            ((this.saveMedia = null),
              o("WAWebMedia").cancelDownloadMedia(this),
              o("WAWebMedia").cancelUploadMedia(this),
              this.clearBlob());
          }),
          (n.runProcessIfNotRunBefore = function (t, n, r) {
            var e = this,
              o = this.$2;
            (o || (o = this.$2 = {}),
              !Object.prototype.hasOwnProperty.call(o, t) &&
                (this.$3++,
                (o[t] = Promise.resolve(r)
                  .then(n)
                  .then(function (t) {
                    return void e.consolidate(t);
                  })
                  .finally(function () {
                    (e.$3--, e.$3 === 0 && e.notifyMsgsAsync());
                  }))));
          }),
          (n.getPendingProcess = function (t) {
            return this.$3 === 0 ||
              !this.$2 ||
              !Object.prototype.hasOwnProperty.call(this.$2, t)
              ? Promise.resolve()
              : this.$2[t];
          }),
          (n.videoStreamingInfo = async function (t) {
            if (this.type !== o("WAWebMediaTypes").TYPE.VIDEO) {
              o("WALogger")
                .ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
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
            var e = this.entries.getDownloadEntry(!0);
            if (
              !e ||
              !e.sidecar ||
              !(e instanceof o("WAWebMediaEntry").EncryptedMediaEntry)
            )
              return null;
            var n = await Promise.all([
                r("WAWebCryptoCreateMediaKeys")(
                  o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO,
                  e.mediaKey,
                ),
                e.url(),
              ]),
              a = n[0],
              i = n[1];
            return {
              cryptoKeys: babelHelpers.extends({}, a, {
                cipherKey: a.encKey,
                sidecar: e.sidecar,
              }),
              streamData: { clientUrl: i, size: this.size, msgKey: t },
            };
          }),
          (n.addStickerPack = function (t) {
            for (var e = this.stickerPacks, n = 0, r = 0; r < e.length; r++) {
              var a = e[r],
                i = a[0],
                l = a[1];
              i === t && !l && n++;
            }
            (n > 0 &&
              o("WALogger")
                .ERROR(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "Assertion failed! ",
                      " redundant sticker pack(s)",
                    ])),
                  n,
                )
                .sendLogs("redundant-sticker-pack-add"),
              e.push([t, !1]),
              this.notifyMsgsAsync());
          }),
          (n.addSticker = function (t) {
            for (var e = this.stickers, n = 0, r = 0; r < e.length; r++) {
              var a = e[r],
                i = a[0],
                l = a[1];
              i === t && !l && n++;
            }
            (n > 0 &&
              o("WALogger")
                .ERROR(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "Assertion failed! ",
                      " redundant sticker(s)",
                    ])),
                  n,
                )
                .sendLogs("redundant-sticker-add"),
              e.push([t, !1]),
              this.notifyMsgsAsync());
          }),
          (n.removeSticker = function (t) {
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
          (n.removeStickerPack = function (t) {
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
          (n.hasAssociatedStickers = function () {
            return this.stickers.some(function (e) {
              var t = e[0],
                n = e[1];
              return !n;
            });
          }),
          (n.hasAssociatedStickerPacks = function () {
            return this.stickerPacks.some(function (e) {
              var t = e[0],
                n = e[1];
              return !n;
            });
          }),
          (n.associatedStickers = function () {
            return this.stickers.reduce(function (e, t) {
              var n = t[0],
                r = t[1];
              return r ? e : e.concat(n);
            }, []);
          }),
          (n.getUploadPromise = function (t) {
            return o(
              "WAWebMediaCryptoEligibilityUtils",
            ).isMediaCryptoExpectedForMediaType(t)
              ? this.$6
              : this.$7;
          }),
          (n.setUploadPromise = function (t, n) {
            o(
              "WAWebMediaCryptoEligibilityUtils",
            ).isMediaCryptoExpectedForMediaType(n)
              ? (this.$6 = t)
              : (this.$7 = t);
          }),
          (n.clearUploadPromise = function (t) {
            o(
              "WAWebMediaCryptoEligibilityUtils",
            ).isMediaCryptoExpectedForMediaType(t)
              ? (this.$6 = null)
              : (this.$7 = null);
          }),
          (n.getUploadPromises = function () {
            return [this.$6, this.$7];
          }),
          (n.getDownloadPromise = function (t) {
            return o(
              "WAWebMediaCryptoEligibilityUtils",
            ).isMediaCryptoExpectedForMediaType(t)
              ? this.$4
              : this.$5;
          }),
          (n.setDownloadPromise = function (t, n) {
            o(
              "WAWebMediaCryptoEligibilityUtils",
            ).isMediaCryptoExpectedForMediaType(n)
              ? (this.$4 = t)
              : (this.$5 = t);
          }),
          (n.clearDownloadPromise = function (t) {
            o(
              "WAWebMediaCryptoEligibilityUtils",
            ).isMediaCryptoExpectedForMediaType(t)
              ? (this.$4 = null)
              : (this.$5 = null);
          }),
          (n.getDownloadPromises = function () {
            return [this.$4, this.$5];
          }),
          (n.toJSON = function () {
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
    function S(e, t) {
      var n = e.contentInfo,
        a = !1,
        i = R(t.type);
      i && !e.type && ((e.type = i), (a = !0));
      var l = t.downloadStage,
        s = t.uploadStage;
      (l && l !== e.downloadStage && ((e.downloadStage = l), (a = !0)),
        s && s !== e.uploadStage && ((e.uploadStage = s), (a = !0)),
        t.resolvedPreview &&
          !n.preview &&
          (t.resolvedPreview.retain(),
          (n.preview = t.resolvedPreview),
          (a = !0)),
        t.progressiveStage !== void 0 &&
          t.progressiveStage !== e.progressiveStage &&
          ((e.progressiveStage = t.progressiveStage), (a = !0)));
      var u = t.mediaBlob;
      (u &&
        !u.isBlobEqual(e.mediaBlob) &&
        (e.mediaBlob && e.clearBlob(),
        u.retain(),
        (e.mediaBlob = u),
        (e.size = u.size()),
        (a = !0)),
        t.size != null &&
          t.size !== 0 &&
          (e.size == null || t.size < e.size) &&
          ((e.size = t.size), (a = !0)));
      var c = t.loadedSize;
      (c != null && c !== e.loadedSize && ((e.loadedSize = c), (a = !0)),
        t.filehash && !e.filehash && ((e.filehash = t.filehash), (a = !0)),
        t.parsedVcards &&
          t.parsedVcards !== e.parsedVcards &&
          ((e.parsedVcards = t.parsedVcards), (a = !0)),
        t.extractedLottieSticker != null &&
          t.extractedLottieSticker !== e.extractedLottieSticker &&
          ((e.extractedLottieSticker = t.extractedLottieSticker), (a = !0)));
      for (var d = e.contentFields(), m = 0; m < d.length; m++) {
        var p = d[m];
        switch (p) {
          case "preview":
            if (t.preview != null && t.preview !== "" && n._preview == null) {
              var _ = t.preview;
              (_ instanceof r("WAWebMediaOpaqueData")
                ? (o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "consolidate: preview is already OpaqueData, reusing directly",
                      ])),
                  ),
                  _.retain(),
                  (n.preview = _))
                : e.runProcessIfNotRunBefore("preview", P, _),
                (n._preview = _),
                (a = !0));
            }
            break;
          case "fullWidth":
          case "fullHeight":
          case "aspectRatio": {
            var f = t[p];
            f != null && f !== 0 && n[p] !== f && ((n[p] = f), (a = !0));
            break;
          }
          case "animationDuration":
          case "singleLoopDuration": {
            var g = t[p];
            g != null && g !== n[p] && ((n[p] = g), (a = !0));
            break;
          }
          default: {
            var y = t[p];
            if (y !== void 0 && n[p] === void 0) ((n[p] = y), (a = !0));
            else if (p === "fullPreviewData" && y !== void 0) {
              var C = n.fullPreviewData;
              C != null &&
                !C.released &&
                !y.released &&
                y.size() > C.size() &&
                ((n[p] = y), (a = !0));
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
            ? ((n.aspectRatio = n.fullWidth / n.fullHeight), (a = !0))
            : n.preview &&
              e.runProcessIfNotRunBefore("aspectRatio", N, n.preview)),
        a
      );
    }
    function R(e) {
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
    function L(e) {
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
    function E(e) {
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
    function k(e) {
      var t = {};
      (I(t, e, o("WAWebMediaTypes").FIELDS.RAW),
        I(t, e.contentInfo, e.contentFields()),
        e.mediaBlob && (t.renderableUrl = e.mediaBlob.url()));
      for (var n = e.msgs, r = n.length, a = 0; a < r; a++) {
        var i = n[a],
          l = i[0],
          s = i[1];
        if (l != null && !s) {
          if (l.type !== o("WAWebMsgType").MSG_TYPE.CIPHERTEXT) {
            t.mediaStage = T(l, e);
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
              (t.type = E(l));
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
    function I(e, t, n) {
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        e[o] = t[o];
      }
    }
    function T(e, t) {
      if (t.filehash) {
        if (e.id.fromMe && e.ack < o("WAWebAck").ACK.SENT)
          return (
            e.local ||
              o("WALogger")
                .ERROR(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "Assertion failed!",
                    ])),
                )
                .sendLogs("media-fault: unsent media system message not local"),
            x(t)
          );
      } else return o("WAWebMediaTypes").MediaDataStage.PREPARING;
      return D(t);
    }
    function D(e) {
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
    function x(e) {
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
    var $ = "/9j/";
    async function P(e) {
      var t = e;
      if (!t.startsWith($))
        try {
          var n = atob(t);
          n.startsWith($) &&
            ((t = n),
            o("WALogger")
              .WARN(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[media] preview was double base64 encoded, auto-corrected",
                  ])),
              )
              .sendLogs("media-preview-double-encoded"));
        } catch (e) {
          o("WALogger").LOG(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "[media] preview double-encode check failed: ",
                "",
              ])),
            e,
          );
        }
      var a = await r("WAWebMediaOpaqueData").createFromBase64Jpeg(t);
      return (a.autorelease(), { resolvedPreview: a });
    }
    async function N(e) {
      var t = await o("WAWebMediaDataUtils").getImageWidthHeight(e),
        n = t.height,
        r = t.width;
      return { aspectRatio: r / n };
    }
    function M(e) {
      var t = {};
      (I(t, e, o("WAWebMediaTypes").FIELDS.RAW),
        I(t, e.contentInfo, e.contentFields()),
        e.mediaBlob && (t.renderableUrl = e.mediaBlob.url()));
      var n = D(e);
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
    ((l.MediaObject = v),
      (l.consolidate = S),
      (l.webMediaTypeToWamMediaType = L),
      (l.getInteractiveMsgMediaType = E));
  },
  98,
);
