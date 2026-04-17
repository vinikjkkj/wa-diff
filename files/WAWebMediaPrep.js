__d(
  "WAWebMediaPrep",
  [
    "invariant",
    "JSResourceForInteraction",
    "Promise",
    "WABackoffDelay",
    "WALogger",
    "WAMediaCalculateFilehash",
    "WANullthrows",
    "WAPromiseBackoffs",
    "WAPromiseCallSync",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAck",
    "WAWebBotBaseGating",
    "WAWebCanvasUtils",
    "WAWebChannelVideoServerTranscodeGating",
    "WAWebChatEphemerality",
    "WAWebChatGetters",
    "WAWebCoreActionsODS",
    "WAWebCryptoCalculateFilehash",
    "WAWebCryptoRandomMediaKey",
    "WAWebFrontendChatGetters",
    "WAWebImageUtils",
    "WAWebMediaConstants",
    "WAWebMediaCryptoEligibilityUtils",
    "WAWebMediaData",
    "WAWebMediaDataUtils",
    "WAWebMediaEntry",
    "WAWebMediaGatingShouldClearUploadedBlobs",
    "WAWebMediaGatingUtils",
    "WAWebMediaGetUploadOriginForChat",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaInMemoryKeyCache",
    "WAWebMediaMmsV4Download",
    "WAWebMediaMmsV4Upload",
    "WAWebMediaOpaqueData",
    "WAWebMediaStorage",
    "WAWebMediaTypes",
    "WAWebMediaUpdateMsg",
    "WAWebMediaUploadMmsThumbnail",
    "WAWebMessagePluginGenerateReportingTokenContent",
    "WAWebMessagingGatingUtils",
    "WAWebMmsMediaTypes",
    "WAWebMsgDataUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterSendMsgAction",
    "WAWebRecentStickerCollectionMd",
    "WAWebSchemaChat",
    "WAWebSendMsgChatAction",
    "WAWebSendMsgResultAction",
    "WAWebSendStatusMsgAction",
    "WAWebStateUtils",
    "WAWebURLUtils",
    "WAWebWamEnumDownloadOriginType",
    "WAWebWamEnumMessageSendResultType",
    "WAWebWamEnumUploadOriginType",
    "WAWebWamEnumWebcRmrReasonCode",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
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
      v = new AbortController().signal,
      S = r("err")("upload failed: retryable, auto-retrying"),
      R = (function () {
        function t(t, n) {
          var a = this;
          ((this.baseType = t),
            (this.mediaData = new (r("WAWebMediaData"))({
              mediaStage: o("WAWebMediaTypes").MediaDataStage.PREPARING,
            })),
            (this.$1 = n.then(
              function (t) {
                if ((a.mediaData.set(t), !t.filehash))
                  return (
                    t.mediaBlob ||
                      o("WALogger")
                        .ERROR(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "Assertion failed!",
                            ])),
                        )
                        .sendLogs("media-fault: no hash or blob"),
                    o("WAWebCryptoCalculateFilehash")
                      .calculateFilehashFromBlob(t.mediaBlob)
                      .then(function (e) {
                        a.mediaData.filehash = e;
                      })
                  );
              },
              function (e) {
                throw (
                  (a.mediaData.mediaStage =
                    o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED),
                  e
                );
              },
            )));
        }
        var a = t.prototype;
        return (
          (a.sendToChat = function (t) {
            var e = t.chat,
              n = t.earlyUpload,
              r = t.options;
            return o("WAPromiseCallSync").promiseCallSync(A, null, {
              chat: e,
              earlyUpload: n,
              options: r,
              prep: this,
            });
          }),
          (a.waitForPrep = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              return (yield this.$1, this.mediaData);
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })();
    function L(e, t) {
      if (t.type === "product")
        return o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE
          .PRODUCT_CATALOG;
      var n = o("WAWebStateUtils").unproxy(e);
      return o("WAWebChatGetters").getIsGroup(n)
        ? o("WAWebFrontendChatGetters").getIsCAG(n)
          ? o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.COMMUNITY
          : o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.CHAT_GROUP
        : o("WAWebChatGetters").getIsNewsletter(n)
          ? o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.CHANNEL
          : o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE
              .CHAT_PERSONAL;
    }
    function E(e) {
      var t = o("WAWebMmsMediaTypes").getMsgMediaType(e);
      return (
        o("WAWebABProps").getABPropConfigValue(
          "upload_document_thumb_mms_enabled",
        ) && t === o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT
      );
    }
    var k = [
      o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO,
      o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE,
    ];
    function I(e) {
      var t = o("WAWebMmsMediaTypes").getMsgMediaType(e);
      return k.includes(t);
    }
    function T(e) {
      return e.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT
        ? E(e)
        : e.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK
          ? !0
          : o("WAWebMsgGetters").getIsStatus(e)
            ? I(e)
            : !1;
    }
    function D(e) {
      return e.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT
        ? o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_DOCUMENT
        : e.type === o("WAWebMsgType").MSG_TYPE.IMAGE
          ? o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_IMAGE
          : e.type === o("WAWebMsgType").MSG_TYPE.VIDEO
            ? o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_VIDEO
            : e.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK
              ? o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_STICKER_PACK
              : s(
                  !1,
                  "getMediaTypeForThumbnails: attempt to create thumbnail for unsupported media type",
                );
    }
    function x(e) {
      var t = e.fullPreviewSize,
        n = e.mediaObject,
        a = e.mediaResultEntry,
        i = e.mediaType,
        l = e.uploadEncryptedThumbnail,
        s = e.uploadThumbnailResult,
        c = s == null ? void 0 : s.mediaEntry;
      if (l === !0) {
        if (c && s && t)
          return {
            thumbnailDirectPath: c.directPath,
            thumbnailSha256: s.filehash,
            thumbnailEncSha256: c.encFilehash,
            thumbnailHeight: t.height,
            thumbnailWidth: t.width,
          };
        var d = {
          thumbnailResultEntry: c,
          uploadThumbnailResult: s,
          fullPreviewSize: t,
        };
        throw (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose(
                  ["upload failed: thumbnail data incomplete\nDebug info:", ""],
                  [
                    "upload failed: thumbnail data incomplete\\nDebug info:",
                    "",
                  ],
                )),
              JSON.stringify(d),
            )
            .sendLogs("mms-thumbnail-data-incomplete"),
          r("err")("upload failed: thumbnail data incomplete")
        );
      }
      var m = n.contentInfo,
        p = m.fullHeight,
        _ = m.fullWidth;
      if (
        a.getThumbnailDirectPath() != null &&
        a.getThumbnailSha256() != null &&
        _ != null &&
        p != null &&
        o(
          "WAWebMediaGatingUtils",
        ).isThumbnailGenerationOnServerEnabledForMediaType(i)
      )
        return {
          thumbnailDirectPath: a.getThumbnailDirectPath(),
          thumbnailSha256: a.getThumbnailSha256(),
          thumbnailHeight: p,
          thumbnailWidth: _,
        };
    }
    function $(e) {
      var t;
      return (
        (t = e.wamMessageSendReporter) == null ||
          t.postFailure({
            result: o("WAWebWamEnumMessageSendResultType")
              .MESSAGE_SEND_RESULT_TYPE.ERROR_UPLOAD,
            isTerminal: !0,
          }),
        o("WAWebSendMsgResultAction").SendMsgResult.ERROR_UPLOAD
      );
    }
    var P = function (t) {
      var e = t.baseProps,
        n = t.chat,
        r = t.options,
        a = t.prep;
      return (
        (r.chatWid = n.id),
        (r.downloadOrigin = L(n, e)),
        (r.isNewsletterMsg = o("WAWebChatGetters").getIsNewsletter(n)),
        N(a, r)
      );
    };
    function N(e, t) {
      return e
        .waitForPrep()
        .then(function (e) {
          var t = e.mediaBlob;
          return t && !(t instanceof r("WAWebMediaOpaqueData"))
            ? r("WAWebMediaOpaqueData")
                .createFromData(t, t.type)
                .then(function (t) {
                  return ((e.mediaBlob = t), e);
                })
            : e;
        })
        .then(function (e) {
          var n,
            a = e.filehash;
          a ||
            o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "Assertion failed!",
                  ])),
              )
              .sendLogs("media-fault: sendToChat filehash undefined");
          var i = o("WAWebMediaStorage").getOrCreateMediaObject(a),
            l = i.mediaBlob;
          (l &&
            (l.retain(),
            e.mediaBlob instanceof r("WAWebMediaOpaqueData") &&
              e.mediaBlob.autorelease(),
            (e.mediaBlob = l)),
            e.mediaBlob instanceof r("WAWebMediaOpaqueData") &&
              (e.renderableUrl = e.mediaBlob.url()),
            i.consolidate(e.toJSON()),
            e.mediaBlob instanceof r("WAWebMediaOpaqueData") &&
              e.mediaBlob.autorelease());
          var s = o("WAWebMediaDataUtils").shouldUseMediaCache(
            o("WAWebMmsMediaTypes").castToV4(i.type),
          );
          if (s && e.mediaBlob instanceof r("WAWebMediaOpaqueData")) {
            var u = e.mediaBlob.formData();
            o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.put(a, u);
          }
          o("WAWebMediaMmsV4Download").downloadMedia({
            mimetype: e.mimetype,
            mediaObject: i,
            downloadEvenIfExpensive: !0,
            mediaType: o("WAWebMmsMediaTypes").msgToMediaType({
              type: e.type,
              isGif: e.isGif,
              isNewsletter: t.isNewsletterMsg === !0,
            }),
            rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
              .SEND_TO_CHAT,
            downloadOrigin:
              (n = t.downloadOrigin) != null
                ? n
                : o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE
                    .CHAT_PERSONAL,
            mode: "manual",
            chatWid: t.chatWid,
          });
          var d = babelHelpers.extends({}, i.msgProps(e));
          return (
            (d.caption = t.caption),
            t.isViewOnce === !0 && (d.isViewOnce = !0),
            d
          );
        });
    }
    function M(e, t) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a,
            i,
            l,
            u,
            c,
            m = e.mediaObject;
          (m ||
            o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "Assertion failed!",
                  ])),
              )
              .sendLogs("media-fault: incorrect media object for created msg"),
            m || s(0, 56330));
          var p = o("WAWebMmsMediaTypes").getMsgMediaType(e),
            _,
            f = (a = t.canEnableFastForward) != null ? a : !0;
          f === !0 &&
            (_ = m.entries.getUploadEntry(
              t.isMediaCryptoExpectedForChat === !0,
            ));
          var g =
              _ instanceof o("WAWebMediaEntry").EncryptedMediaEntry
                ? { key: _.mediaKey, timestamp: _.mediaKeyTimestamp }
                : r("WAWebCryptoRandomMediaKey")(),
            h = m.contentInfo,
            y = h.fullPreviewData,
            C = h.fullPreviewSize,
            v = e.safe(),
            S = T(v),
            R = o("WAWebABProps").getABPropConfigValue(
              "wa_web_enable_status_hq_thumbnail",
            ),
            L = !1,
            E = !1;
          R
            ? ((L =
                (!y ||
                  y.size() >
                    o("WAWebMediaConstants")
                      .MICRO_THUMBNAIL_MAX_FILE_SIZE_BYTES) &&
                S),
              (E = v.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK && S))
            : ((L = !y && S), (E = S));
          var k = !C && S,
            I = e.body;
          if ((L || k || E) && m.contentInfo.preview) {
            var $ = yield o("WAWebImageUtils").base64ImageToCanvas(
                m.contentInfo.preview.url(),
              ),
              P = L
                ? o("WAWebABProps").getABPropConfigValue(
                    "web_pdf_thumbnail_size_in_bytes",
                  )
                : o("WAWebMediaConstants").MICRO_THUMBNAIL_MAX_FILE_SIZE_BYTES,
              N = yield o("WAWebCanvasUtils").generateMicroThumb($, P, {
                mimetype: "image/jpeg",
                maxAttempts: 10,
              });
            ((y = m.contentInfo.preview),
              (C = { width: N.width, height: N.height }),
              (I = r("WAWebURLUtils").parseDataURL(N.dataUrl).data));
          }
          var M = y && C && S,
            w =
              y && M === !0
                ? r("WAWebMediaUploadMmsThumbnail")({
                    thumbnail: y,
                    mediaKeyInfo: g,
                    mediaType: r("WANullthrows")(D(v)),
                    uploadOrigin:
                      (i = t.uploadOriginForChat) != null
                        ? i
                        : o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE
                            .UNKNOWN,
                    forwardedFromWeb: !!e.forwardedFromWeb,
                    isViewOnce: !!e.isViewOnce,
                  })
                : (b || (b = n("Promise"))).resolve(null),
            A = {
              mimetype: e.mimetype,
              canEnableFastForward: t.canEnableFastForward,
              mediaObject: m,
              mediaType: p,
              forwardedFromWeb: !!e.forwardedFromWeb,
              uploadOrigin:
                (l = t.uploadOriginForChat) != null
                  ? l
                  : o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE
                      .UNKNOWN,
              isViewOnce: !!e.isViewOnce,
              earlyUpload: t.earlyUpload,
            },
            F =
              t.isMediaCryptoExpectedForChat === !0
                ? o("WAWebMediaMmsV4Upload").uploadMedia(
                    babelHelpers.extends({}, A, { mediaKeyInfo: g }),
                  )
                : o("WAWebMediaMmsV4Upload").uploadUnencryptedMedia(
                    babelHelpers.extends({}, A, {
                      calculateToken: o("WAMediaCalculateFilehash")
                        .getRandomFilehash,
                    }),
                  ),
            O = m.filehash;
          o("WAWebMediaInMemoryKeyCache").shouldUseMediaKeyCache() &&
            O != null &&
            o("WAWebMediaInMemoryKeyCache").MediaKeyCache.put(O, g);
          var B = yield (b || (b = n("Promise"))).all([F, w]),
            W = B[0],
            q = B[1];
          r("WAWebMediaGatingShouldClearUploadedBlobs")(p) &&
            m.clearBlob({ reset: !0 });
          var U = W.mediaEntry;
          if (!U)
            return {
              mediaResult: W,
              mmsThumbnailData: null,
              body: I,
              fbid: null,
            };
          o("WAWebMediaInMemoryKeyCache").shouldUseMediaKeyCache() &&
            O != null &&
            o("WAWebMediaInMemoryKeyCache").MediaKeyCache.delete(O);
          var V =
              (u = x({
                uploadThumbnailResult: q,
                mediaResultEntry: U,
                uploadEncryptedThumbnail: M,
                mediaObject: m,
                fullPreviewSize: C,
                mediaType: p,
              })) != null
                ? u
                : {},
            H =
              U instanceof o("WAWebMediaEntry").UnencryptedMediaEntry &&
              (c = U.fbid) != null
                ? c
                : null;
          return { mediaResult: W, mmsThumbnailData: V, body: I, fbid: H };
        })),
        w.apply(this, arguments)
      );
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            a,
            i = e.chat,
            l = e.earlyUpload,
            s = e.options,
            u = e.prep;
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "Media:sendToChat chat ",
                "",
              ])),
            i.id.toLogString(),
          );
          try {
            if (!i.id.isStatus()) {
              var c = yield o("WAWebSchemaChat")
                .getChatTable()
                .get(i.id.toString());
              if (c == null) {
                var d;
                o("WALogger")
                  .ERROR(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "sendMediaMsgToChat: chat ",
                        " not in DB. lid: ",
                        "",
                      ])),
                    i.id.toLogString(),
                    (d = i.accountLid) == null ? void 0 : d.toLogString(),
                  )
                  .sendLogs("send-media-chat-not-found")
                  .tags("missing-lid");
              } else
                o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "sendMediaMsgToChat: chat ",
                      " found in DB. has account lid: ",
                      "",
                    ])),
                  i.id.toLogString(),
                  c.accountLid != null,
                );
            }
          } catch (e) {
            o("WALogger").ERROR(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "sendMediaMsgToChat: failed to check if chat exists",
                ])),
            );
          }
          var b = s.caption,
            R = s.footer,
            L = s.quotedMsg ? s.quotedMsg.msgContextInfo(i.id) : {},
            E = (t = s.productMsgOptions) != null ? t : {},
            k = o("WAWebChatEphemerality").isEphemeralSettingOn(i)
              ? o("WAWebChatEphemerality").getEphemeralSetting(i)
              : void 0,
            I = o("WAWebChatEphemerality").getEphemeralSettingTimestamp(i),
            T = o("WAWebChatEphemerality").getDisappearingModeInitiator(i),
            D = o("WAWebChatEphemerality").getAfterReadDurationForChat(i),
            x,
            N = !1;
          i.isCAGAdmin() && (N = !0);
          var w = (a = s.type) != null ? a : u.baseType;
          o("WAWebMessagingGatingUtils").isReportingTokenSendingEnabled() &&
            o(
              "WAWebMessagePluginGenerateReportingTokenContent",
            ).isMsgTypeReportingTokenCompatible(w) &&
            (N = !0);
          var A = o("WAWebBotBaseGating").isBotEnabled() && i.id.isBot();
          (A && (N = !0),
            N && (x = self.crypto.getRandomValues(new Uint8Array(32))));
          var F = babelHelpers.extends(
            {},
            yield o("WAWebMsgDataUtils").genOutgoingMsgData(i, w),
            {
              type: w,
              caption: b,
              footer: R,
              quotedMsg: L.quotedMsg,
              quotedParticipant: L.quotedParticipant,
              quotedStanzaID: L.quotedStanzaID,
              quotedRemoteJid: L.quotedRemoteJid,
              mentionedJidList: s.mentionedJidList,
              groupMentions: s.groupMentions,
              isForwarded: s.isForwarded,
              forwardingScore: s.forwardingScore,
              forwardedNewsletterMessageInfo: s.forwardedNewsletterMessageInfo,
              forwardedAiBotMessageInfo: s.forwardedAiBotMessageInfo,
              multicast: s.multicast,
              forwardedFromWeb: s.forwardedFromWeb,
              ctwaContext: s.ctwaContext,
              ephemeralDuration: k,
              ephemeralSettingTimestamp: I,
              disappearingModeInitiator: T,
              afterReadDuration: D,
              messageSecret: x,
              botPersonaId: s.botPersonaId,
              isAvatar: s.isAvatar,
              viewMode: s.viewMode,
              parentMsgKey: s.parentMsgKey,
              associationType: s.associationType,
              isQuestion: s.isQuestion,
              questionReplyQuotedMessage: s.questionReplyQuotedMessage,
              interactiveAnnotations: s.interactiveAnnotations,
              threadIds: s.threadId != null ? [s.threadId] : void 0,
              statusAttributions: s.statusAttributions,
            },
            E,
          );
          if (s.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK) {
            var O;
            ((F.description = s.description),
              (F.isCaptionByUser = !!s.caption),
              (F.thumbnailSha256 = s.thumbnailSha256),
              (F.stickers = s.stickers),
              (F.stickerPackPublisher = s.publisher),
              (F.size = (O = s.fileLength) != null ? O : 0),
              (F.stickerPackId = s.stickerPackId),
              (F.thumbnailDirectPath = s.thumbnailDirectPath),
              (F.thumbnailEncSha256 = s.thumbnailEncSha256),
              (F.trayIconFileName = s.trayIconFileName),
              (F.stickerPackSize = s.stickerPackSize));
          }
          (s.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT &&
            s.caption &&
            (F.isCaptionByUser = !0),
            s.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
              ((F.nativeFlowInteractiveMsg = s.nativeFlowInteractiveMsg),
              (F.nativeFlowName = s.nativeFlowName),
              (F.interactiveHeader = s.interactiveHeader),
              (F.interactiveType = s.interactiveType),
              (F.interactivePayload = s.interactivePayload)),
            s.isWamoSub === !0 && (F.isWamoSub = !0));
          var B, W;
          function q(e) {
            return U.apply(this, arguments);
          }
          function U() {
            return (
              (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
                B = e;
                var t = e.mediaObject;
                ((s.earlyUpload = l),
                  (s.isMediaCryptoExpectedForChat = o(
                    "WAWebMediaCryptoEligibilityUtils",
                  ).isMediaCryptoExpectedForChat(i)),
                  (s.uploadOriginForChat = r(
                    "WAWebMediaGetUploadOriginForChat",
                  )(i)));
                var a = function () {
                    return M(e, s);
                  },
                  u = o("WAPromiseBackoffs").createTimer({
                    algo: { type: "exponential", first: 1e3, base: 2 },
                    max: 3e3,
                    jitter: 0.5,
                  });
                u();
                var c = o("WAWebMediaGatingUtils").getMediaUploadRetryCount(),
                  d =
                    c > 0
                      ? yield o("WABackoffDelay").backoff(
                          {
                            delay: function () {
                              return u();
                            },
                            signal: v,
                            retries: c,
                          },
                          (function () {
                            var e = n(
                              "asyncToGeneratorRuntime",
                            ).asyncToGenerator(function* (e, n) {
                              var r,
                                i,
                                l =
                                  (r = t == null ? void 0 : t.loadedSize) !=
                                  null
                                    ? r
                                    : 0,
                                s = yield a(),
                                u =
                                  (i = t == null ? void 0 : t.loadedSize) !=
                                  null
                                    ? i
                                    : 0,
                                d = u > l;
                              return !s.mediaResult.mediaEntry &&
                                s.mediaResult.kind ===
                                  o("WAWebMediaMmsV4Upload")
                                    .UploadMediaResultKind.ERROR &&
                                (t == null ? void 0 : t.uploadStage) ===
                                  o("WAWebMediaTypes").UploadStage
                                    .NEED_UPLOAD &&
                                d
                                ? (n < c &&
                                    (t == null ||
                                      t.consolidate({
                                        uploadStage:
                                          o("WAWebMediaTypes").UploadStage
                                            .UPLOADING,
                                      })),
                                  e(S))
                                : s;
                            });
                            return function (t, n) {
                              return e.apply(this, arguments);
                            };
                          })(),
                        )
                      : yield a(),
                  m = d.body,
                  p = d.mediaResult,
                  _ = p.kind,
                  f = p.mediaEntry,
                  g = d.mmsThumbnailData;
                if (((W = _), !f))
                  throw r("err")("upload failed: media entry was not created");
                return (
                  yield r("WAWebMediaUpdateMsg")(
                    B,
                    babelHelpers.extends(
                      {
                        deprecatedMms3Url: f.deprecatedMms3Url,
                        directPath: f.directPath,
                        mediaKey: f.getMediaKey(),
                        mediaKeyTimestamp: f.getMediaKeyTimestamp(),
                        filehash: r("WANullthrows")(t).filehash,
                        encFilehash: f.getEncfilehash(),
                        size: r("WANullthrows")(t).size,
                        streamingSidecar: f.sidecar,
                        firstFrameSidecar: f.firstFrameSidecar,
                        body: m,
                        stickerSentTs: o("WATimeUtils").unixTimeMs(),
                        mediaHandle:
                          f instanceof
                          o("WAWebMediaEntry").UnencryptedMediaEntry
                            ? f.handle
                            : null,
                        metadataUrl:
                          f instanceof
                            o("WAWebMediaEntry").UnencryptedMediaEntry &&
                          f.metadataUrl != null &&
                          o(
                            "WAWebChannelVideoServerTranscodeGating",
                          ).isChannelVideoServerTranscodeUploadEnabled()
                            ? f.metadataUrl
                            : null,
                      },
                      g,
                    ),
                  ),
                  B
                );
              })),
              U.apply(this, arguments)
            );
          }
          var V;
          if (s.addEvenWhilePreparing === !0) {
            var H = s.placeholderProps || {},
              G = babelHelpers.extends({}, H, F),
              z = function (t) {
                return (
                  (B = t),
                  P({ baseProps: F, chat: i, options: s, prep: u })
                    .then(function (e) {
                      return r("WAWebMediaUpdateMsg")(B, e);
                    })
                    .then(function () {
                      return q(B);
                    })
                );
              };
            o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
            o("WAWebChatGetters").getIsNewsletter(i)
              ? s.isNewsletterStatus === !0
                ? (V = r("JSResourceForInteraction")(
                    "WAWebNewsletterSendStatusAction",
                  )
                    .__setRef("WAWebMediaPrep")
                    .load()
                    .then(function (e) {
                      return e.sendNewsletterStatusMediaMsgAction(G, z);
                    }))
                : (V = o("WAWebNewsletterSendMsgAction").sendNewsletterMediaMsg(
                    i,
                    G,
                    z,
                  ))
              : i.id.isStatus()
                ? (V = o("WAWebSendStatusMsgAction").sendStatusMediaMsgAction(
                    G,
                    z,
                  ))
                : (V = o("WAWebSendMsgChatAction").addAndSendMsgToChat(
                    i,
                    G,
                    z,
                  )[1]);
          } else {
            var j = P({ baseProps: F, chat: i, options: s, prep: u }).then(
              function (e) {
                var t = s.useBasePropsType === !0 ? F.type : e.type;
                return babelHelpers.extends({}, F, e, { type: t });
              },
            );
            if (
              o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
              o("WAWebChatGetters").getIsNewsletter(i)
            )
              if (s.isNewsletterStatus === !0) {
                var K = yield j;
                V = r("JSResourceForInteraction")(
                  "WAWebNewsletterSendStatusAction",
                )
                  .__setRef("WAWebMediaPrep")
                  .load()
                  .then(function (e) {
                    return e.sendNewsletterStatusMediaMsgAction(K, q);
                  });
              } else
                V = o("WAWebNewsletterSendMsgAction").sendNewsletterMediaMsg(
                  i,
                  yield j,
                  q,
                );
            else
              i.id.isStatus()
                ? (V = o("WAWebSendStatusMsgAction").sendStatusMediaMsgAction(
                    yield j,
                    q,
                  ))
                : F.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE
                  ? (V = o("WAWebSendMsgChatAction").addAndSendMsgToChat(
                      i,
                      yield j,
                      q,
                    )[1])
                  : (V = o("WAWebSendMsgChatAction").addAndSendMsgToChat(
                      i,
                      j,
                      q,
                    )[1]);
          }
          return V.then(function (e) {
            return { result: e, error: null };
          })
            .catch(function (e) {
              return { result: null, error: e };
            })
            .then(function (e) {
              var t,
                n = e.error,
                r = e.result;
              if (
                (r == null ? void 0 : r.messageSendResult) ===
                o("WAWebSendMsgResultAction").SendMsgResult.OK
              )
                return (
                  B.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER &&
                    B.isAvatar !== !0 &&
                    o(
                      "WAWebRecentStickerCollectionMd",
                    ).RecentStickerCollectionMd.addStickerWithMediaData(B),
                  {
                    messageSendResult: o("WAWebSendMsgResultAction")
                      .SendMsgResult.OK,
                  }
                );
              B && (B.ack = o("WAWebAck").ACK.FAILED);
              var a =
                (t = B) == null || (t = t.mediaObject) == null
                  ? void 0
                  : t.uploadStage;
              if (
                B &&
                o("WAWebMmsMediaTypes").getMsgMediaType(B) ===
                  o("WAWebMediaTypes").OUTWARD_TYPES.STICKER
              ) {
                var i = a || "undefined";
                W === o("WAWebMediaMmsV4Upload").UploadMediaResultKind.ERROR &&
                  o("WALogger")
                    .ERROR(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
                          "Sticker:sendToChat failed with expressions panel enabled",
                        ])),
                    )
                    .tags("non-sad")
                    .sendLogs(
                      "sticker-send-fail-with-expressions-panel-enabled-uploadStage-" +
                        i,
                      { sampling: 0.01 },
                    );
              }
              if (
                W ===
                o("WAWebMediaMmsV4Upload").UploadMediaResultKind.CANCELLATION
              ) {
                var l;
                return (
                  o("WALogger").LOG(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "Media:sendToChat canceled",
                      ])),
                  ),
                  (l = B.wamMessageSendReporter) == null ||
                    l.postFailure({
                      result: o("WAWebWamEnumMessageSendResultType")
                        .MESSAGE_SEND_RESULT_TYPE.ERROR_CANCELLED,
                      isTerminal: !0,
                    }),
                  {
                    messageSendResult: o("WAWebSendMsgResultAction")
                      .SendMsgResult.ERROR_CANCELLED,
                  }
                );
              }
              if (
                (o("WALogger").WARN(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "Media:sendToChat err res=",
                      " stage=",
                      " kind=",
                      " err=",
                      "",
                    ])),
                  r,
                  a,
                  W,
                  String(n),
                ),
                a != null)
              )
                switch (a) {
                  case o("WAWebMediaTypes").UploadStage.NEED_UPLOAD:
                  case o("WAWebMediaTypes").UploadStage.ERROR_TOO_LARGE:
                  case o("WAWebMediaTypes").UploadStage.ERROR_FORBIDDEN:
                  case o("WAWebMediaTypes").UploadStage.ERROR_THROTTLED:
                    return { messageSendResult: $(B) };
                  case o("WAWebMediaTypes").UploadStage.ERROR_MISSING:
                    return (
                      o("WAWebCoreActionsODS").logMsgSendError(),
                      o("WAWebCoreActionsODS").logMsgSendErrorUpload(),
                      {
                        messageSendResult: o("WAWebSendMsgResultAction")
                          .SendMsgResult.ERROR_EXPIRED,
                      }
                    );
                  default:
                }
              return W ===
                o("WAWebMediaMmsV4Upload").UploadMediaResultKind.ERROR
                ? { messageSendResult: $(B) }
                : r != null
                  ? r
                  : (B &&
                      o("WAWebMmsMediaTypes").getMsgMediaType(B) ===
                        o("WAWebMediaTypes").OUTWARD_TYPES.STICKER &&
                      o("WALogger")
                        .ERROR(
                          C ||
                            (C = babelHelpers.taggedTemplateLiteralLoose([
                              "Sticker:sendToChat failed with unknown error",
                            ])),
                        )
                        .sendLogs(
                          "sticker-send-fail-unknown-expression-panels",
                        ),
                    o("WAWebCoreActionsODS").logMsgSendError(),
                    {
                      messageSendResult: o("WAWebSendMsgResultAction")
                        .SendMsgResult.ERROR_UNKNOWN,
                    });
            });
        })),
        F.apply(this, arguments)
      );
    }
    ((l.MediaPrep = R),
      (l.getMediaPropsNew = N),
      (l.uploadMediaWithPrep = M),
      (l.sendMediaMsgToChat = A));
  },
  98,
);
