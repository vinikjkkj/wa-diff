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
    "WAWebMediaPrepHelpers",
    "WAWebMediaStorage",
    "WAWebMediaTypes",
    "WAWebMediaUpdateMsg",
    "WAWebMediaUploadMmsThumbnail",
    "WAWebMessagePluginGenerateReportingTokenContent",
    "WAWebMessagingGatingUtils",
    "WAWebMmsMediaTypes",
    "WAWebMsgDataUtils",
    "WAWebMsgType",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterSendMsgAction",
    "WAWebRecentStickerCollectionMd",
    "WAWebSchemaChat",
    "WAWebSendMsgChatAction",
    "WAWebSendMsgResultAction",
    "WAWebSendStatusMsgAction",
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
      v,
      S = new AbortController().signal,
      R = r("err")("upload failed: retryable, auto-retrying"),
      L = (function () {
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
            return o("WAPromiseCallSync").promiseCallSync(D, null, {
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
      })(),
      E = function (t) {
        var e = t.baseProps,
          n = t.chat,
          r = t.options,
          a = t.prep;
        return (
          (r.chatWid = n.id),
          (r.downloadOrigin = o(
            "WAWebMediaPrepHelpers",
          ).getDownloadOriginForChat(n, e)),
          (r.isNewsletterMsg = o("WAWebChatGetters").getIsNewsletter(n)),
          k(a, r)
        );
      };
    function k(e, t) {
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
            a,
            i = e.filehash;
          i ||
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Assertion failed!",
                  ])),
              )
              .sendLogs("media-fault: sendToChat filehash undefined");
          var l = e.mediaBlob instanceof r("WAWebMediaOpaqueData"),
            s = i != null ? i : "none",
            m = (n = t.forwardedFromWeb) != null ? n : !1;
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[media-fwd] getMediaPropsNew hash=",
                " blob=",
                " type=",
                " fwd=",
                "",
              ])),
            s,
            l,
            e.type,
            m,
          );
          var p = o("WAWebMediaStorage").getOrCreateMediaObject(i),
            _ = p.mediaBlob;
          (_ &&
            (_.retain(),
            e.mediaBlob instanceof r("WAWebMediaOpaqueData") &&
              e.mediaBlob.autorelease(),
            (e.mediaBlob = _)),
            e.mediaBlob instanceof r("WAWebMediaOpaqueData") &&
              (e.renderableUrl = e.mediaBlob.url()),
            p.consolidate(e.toJSON()),
            e.mediaBlob instanceof r("WAWebMediaOpaqueData") &&
              e.mediaBlob.autorelease());
          var f = o("WAWebMediaDataUtils").shouldUseMediaCache(
            o("WAWebMmsMediaTypes").castToV4(p.type),
          );
          if (f && e.mediaBlob instanceof r("WAWebMediaOpaqueData")) {
            var g = e.mediaBlob.formData();
            o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.put(i, g);
          }
          var h = f && e.mediaBlob instanceof r("WAWebMediaOpaqueData"),
            y = p.mediaBlob != null,
            C = p.msgs.length,
            b = p.entries.entries.length;
          (o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[media-fwd] post-merge blob=",
                " msgs=",
                " entries=",
                " cache=",
                " mem=",
                "",
              ])),
            y,
            C,
            b,
            f,
            h,
          ),
            o("WAWebMediaMmsV4Download").downloadMedia({
              mimetype: e.mimetype,
              mediaObject: p,
              downloadEvenIfExpensive: !0,
              mediaType: o("WAWebMmsMediaTypes").msgToMediaType({
                type: e.type,
                isGif: e.isGif,
                isNewsletter: t.isNewsletterMsg === !0,
              }),
              rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
                .SEND_TO_CHAT,
              downloadOrigin:
                (a = t.downloadOrigin) != null
                  ? a
                  : o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE
                      .CHAT_PERSONAL,
              mode: "manual",
              chatWid: t.chatWid,
            }));
          var v = babelHelpers.extends({}, p.msgProps(e));
          return (
            (v.caption = t.caption),
            t.isViewOnce === !0 && (v.isViewOnce = !0),
            v
          );
        });
    }
    function I(e, t) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a,
            i,
            l,
            u,
            c,
            d = e.mediaObject;
          (d ||
            o("WALogger")
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "Assertion failed!",
                  ])),
              )
              .sendLogs("media-fault: incorrect media object for created msg"),
            d || s(0, 56330));
          var p = o("WAWebMmsMediaTypes").getMsgMediaType(e),
            _,
            f = (a = t.canEnableFastForward) != null ? a : !0;
          f === !0 &&
            (_ = d.entries.getUploadEntry(
              t.isMediaCryptoExpectedForChat === !0,
            ));
          var g =
              _ instanceof o("WAWebMediaEntry").EncryptedMediaEntry
                ? { key: _.mediaKey, timestamp: _.mediaKeyTimestamp }
                : r("WAWebCryptoRandomMediaKey")(),
            h = d.contentInfo,
            y = h.fullPreviewData,
            C = h.fullPreviewSize,
            b = e.safe(),
            S = o("WAWebMediaPrepHelpers").shouldUploadThumbnail(b),
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
              (E = b.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK && S))
            : ((L = !y && S), (E = S));
          var k = !C && S,
            I = e.body;
          if ((L || k || E) && d.contentInfo.preview) {
            var T = yield o("WAWebImageUtils").base64ImageToCanvas(
                d.contentInfo.preview.url(),
              ),
              D = L
                ? o("WAWebABProps").getABPropConfigValue(
                    "web_pdf_thumbnail_size_in_bytes",
                  )
                : o("WAWebMediaConstants").MICRO_THUMBNAIL_MAX_FILE_SIZE_BYTES,
              x = yield o("WAWebCanvasUtils").generateMicroThumb(T, D, {
                mimetype: "image/jpeg",
                maxAttempts: 10,
              });
            ((y = d.contentInfo.preview),
              (C = { width: x.width, height: x.height }),
              (I = r("WAWebURLUtils").parseDataURL(x.dataUrl).data));
          }
          var $ = y && C && S,
            P =
              y && $ === !0
                ? r("WAWebMediaUploadMmsThumbnail")({
                    thumbnail: y,
                    mediaKeyInfo: g,
                    mediaType: r("WANullthrows")(
                      o("WAWebMediaPrepHelpers").getMediaTypeForThumbnails(b),
                    ),
                    uploadOrigin:
                      (i = t.uploadOriginForChat) != null
                        ? i
                        : o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE
                            .UNKNOWN,
                    forwardedFromWeb: !!e.forwardedFromWeb,
                    isViewOnce: !!e.isViewOnce,
                  })
                : (v || (v = n("Promise"))).resolve(null),
            N = {
              mimetype: e.mimetype,
              canEnableFastForward: t.canEnableFastForward,
              mediaObject: d,
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
            M =
              t.isMediaCryptoExpectedForChat === !0
                ? o("WAWebMediaMmsV4Upload").uploadMedia(
                    babelHelpers.extends({}, N, { mediaKeyInfo: g }),
                  )
                : o("WAWebMediaMmsV4Upload").uploadUnencryptedMedia(
                    babelHelpers.extends({}, N, {
                      calculateToken: o("WAMediaCalculateFilehash")
                        .getRandomFilehash,
                    }),
                  ),
            w = d.filehash;
          o("WAWebMediaInMemoryKeyCache").shouldUseMediaKeyCache() &&
            w != null &&
            o("WAWebMediaInMemoryKeyCache").MediaKeyCache.put(w, g);
          var A = yield (v || (v = n("Promise"))).all([M, P]),
            F = A[0],
            O = A[1];
          r("WAWebMediaGatingShouldClearUploadedBlobs")(p) &&
            d.clearBlob({ reset: !0 });
          var B = F.mediaEntry;
          if (!B)
            return {
              mediaResult: F,
              mmsThumbnailData: null,
              body: I,
              fbid: null,
            };
          o("WAWebMediaInMemoryKeyCache").shouldUseMediaKeyCache() &&
            w != null &&
            o("WAWebMediaInMemoryKeyCache").MediaKeyCache.delete(w);
          var W =
              (u = o("WAWebMediaPrepHelpers").maybeGetThumbnailData({
                uploadThumbnailResult: O,
                mediaResultEntry: B,
                uploadEncryptedThumbnail: $,
                mediaObject: d,
                fullPreviewSize: C,
                mediaType: p,
              })) != null
                ? u
                : {},
            q =
              B instanceof o("WAWebMediaEntry").UnencryptedMediaEntry &&
              (c = B.fbid) != null
                ? c
                : null;
          return { mediaResult: F, mmsThumbnailData: W, body: I, fbid: q };
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
          var t,
            a,
            i = e.chat,
            l = e.earlyUpload,
            s = e.options,
            u = e.prep;
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
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
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
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
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
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
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "sendMediaMsgToChat: failed to check if chat exists",
                ])),
            );
          }
          var m = s.caption,
            v = s.footer,
            L = s.quotedMsg ? s.quotedMsg.msgContextInfo(i.id) : {},
            k = (t = s.productMsgOptions) != null ? t : {},
            T = o("WAWebChatEphemerality").isEphemeralSettingOn(i)
              ? o("WAWebChatEphemerality").getEphemeralSetting(i)
              : void 0,
            D = o("WAWebChatEphemerality").getEphemeralSettingTimestamp(i),
            x = o("WAWebChatEphemerality").getDisappearingModeInitiator(i),
            $ = o("WAWebChatEphemerality").getAfterReadDurationForChat(i),
            P,
            N = !1;
          i.isCAGAdmin() && (N = !0);
          var M = (a = s.type) != null ? a : u.baseType;
          o("WAWebMessagingGatingUtils").isReportingTokenSendingEnabled() &&
            o(
              "WAWebMessagePluginGenerateReportingTokenContent",
            ).isMsgTypeReportingTokenCompatible(M) &&
            (N = !0);
          var w = o("WAWebBotBaseGating").isBotEnabled() && i.id.isBot();
          (w && (N = !0),
            N && (P = self.crypto.getRandomValues(new Uint8Array(32))));
          var A = babelHelpers.extends(
            {},
            yield o("WAWebMsgDataUtils").genOutgoingMsgData(i, M),
            {
              type: M,
              caption: m,
              footer: v,
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
              ephemeralDuration: T,
              ephemeralSettingTimestamp: D,
              disappearingModeInitiator: x,
              afterReadDuration: $,
              messageSecret: P,
              botPersonaId: s.botPersonaId,
              aiMediaCollectionInfo: s.aiMediaCollectionInfo,
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
            k,
          );
          if (s.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK) {
            var F;
            ((A.description = s.description),
              (A.isCaptionByUser = !!s.caption),
              (A.thumbnailSha256 = s.thumbnailSha256),
              (A.stickers = s.stickers),
              (A.stickerPackPublisher = s.publisher),
              (A.size = (F = s.fileLength) != null ? F : 0),
              (A.stickerPackId = s.stickerPackId),
              (A.thumbnailDirectPath = s.thumbnailDirectPath),
              (A.thumbnailEncSha256 = s.thumbnailEncSha256),
              (A.trayIconFileName = s.trayIconFileName),
              (A.stickerPackSize = s.stickerPackSize));
          }
          (s.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT &&
            s.caption &&
            (A.isCaptionByUser = !0),
            s.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
              ((A.nativeFlowInteractiveMsg = s.nativeFlowInteractiveMsg),
              (A.nativeFlowName = s.nativeFlowName),
              (A.interactiveHeader = s.interactiveHeader),
              (A.interactiveType = s.interactiveType),
              (A.interactivePayload = s.interactivePayload)),
            s.isWamoSub === !0 && (A.isWamoSub = !0));
          var O, B;
          function W(e) {
            return q.apply(this, arguments);
          }
          function q() {
            return (
              (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
                O = e;
                var t = e.mediaObject;
                ((s.earlyUpload = l),
                  (s.isMediaCryptoExpectedForChat = o(
                    "WAWebMediaCryptoEligibilityUtils",
                  ).isMediaCryptoExpectedForChat(i)),
                  (s.uploadOriginForChat = r(
                    "WAWebMediaGetUploadOriginForChat",
                  )(i)));
                var a = function () {
                    return I(e, s);
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
                            signal: S,
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
                                  e(R))
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
                if (((B = _), !f))
                  throw r("err")("upload failed: media entry was not created");
                return (
                  yield r("WAWebMediaUpdateMsg")(
                    O,
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
                  O
                );
              })),
              q.apply(this, arguments)
            );
          }
          var U;
          if (s.addEvenWhilePreparing === !0) {
            var V = s.placeholderProps || {},
              H = babelHelpers.extends({}, V, A),
              G = function (t) {
                return (
                  (O = t),
                  E({ baseProps: A, chat: i, options: s, prep: u })
                    .then(function (e) {
                      return r("WAWebMediaUpdateMsg")(O, e);
                    })
                    .then(function () {
                      return W(O);
                    })
                );
              };
            o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
            o("WAWebChatGetters").getIsNewsletter(i)
              ? s.isNewsletterStatus === !0
                ? (U = r("JSResourceForInteraction")(
                    "WAWebNewsletterSendStatusAction",
                  )
                    .__setRef("WAWebMediaPrep")
                    .load()
                    .then(function (e) {
                      return e.sendNewsletterStatusMediaMsgAction(H, G);
                    }))
                : (U = o("WAWebNewsletterSendMsgAction").sendNewsletterMediaMsg(
                    i,
                    H,
                    G,
                  ))
              : i.id.isStatus()
                ? (U = o("WAWebSendStatusMsgAction").sendStatusMediaMsgAction(
                    H,
                    G,
                  ))
                : (U = o("WAWebSendMsgChatAction").addAndSendMsgToChat(
                    i,
                    H,
                    G,
                  )[1]);
          } else {
            var z = E({ baseProps: A, chat: i, options: s, prep: u }).then(
              function (e) {
                var t = s.useBasePropsType === !0 ? A.type : e.type;
                return babelHelpers.extends({}, A, e, { type: t });
              },
            );
            if (
              o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
              o("WAWebChatGetters").getIsNewsletter(i)
            )
              if (s.isNewsletterStatus === !0) {
                var j = yield z;
                U = r("JSResourceForInteraction")(
                  "WAWebNewsletterSendStatusAction",
                )
                  .__setRef("WAWebMediaPrep")
                  .load()
                  .then(function (e) {
                    return e.sendNewsletterStatusMediaMsgAction(j, W);
                  });
              } else
                U = o("WAWebNewsletterSendMsgAction").sendNewsletterMediaMsg(
                  i,
                  yield z,
                  W,
                );
            else
              i.id.isStatus()
                ? (U = o("WAWebSendStatusMsgAction").sendStatusMediaMsgAction(
                    yield z,
                    W,
                  ))
                : A.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE
                  ? (U = o("WAWebSendMsgChatAction").addAndSendMsgToChat(
                      i,
                      yield z,
                      W,
                    )[1])
                  : (U = o("WAWebSendMsgChatAction").addAndSendMsgToChat(
                      i,
                      z,
                      W,
                    )[1]);
          }
          return U.then(function (e) {
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
                  O.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER &&
                    O.isAvatar !== !0 &&
                    o(
                      "WAWebRecentStickerCollectionMd",
                    ).RecentStickerCollectionMd.addStickerWithMediaData(O),
                  {
                    messageSendResult: o("WAWebSendMsgResultAction")
                      .SendMsgResult.OK,
                  }
                );
              O && (O.ack = o("WAWebAck").ACK.FAILED);
              var a =
                (t = O) == null || (t = t.mediaObject) == null
                  ? void 0
                  : t.uploadStage;
              if (
                O &&
                o("WAWebMmsMediaTypes").getMsgMediaType(O) ===
                  o("WAWebMediaTypes").OUTWARD_TYPES.STICKER
              ) {
                var i = a || "undefined";
                B === o("WAWebMediaMmsV4Upload").UploadMediaResultKind.ERROR &&
                  o("WALogger")
                    .ERROR(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
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
                B ===
                o("WAWebMediaMmsV4Upload").UploadMediaResultKind.CANCELLATION
              ) {
                var l;
                return (
                  o("WALogger").LOG(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "Media:sendToChat canceled",
                      ])),
                  ),
                  (l = O.wamMessageSendReporter) == null ||
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
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "Media:sendToChat err res=",
                      " stage=",
                      " kind=",
                      " err=",
                      "",
                    ])),
                  r,
                  a,
                  B,
                  String(n),
                ),
                a != null)
              )
                switch (a) {
                  case o("WAWebMediaTypes").UploadStage.NEED_UPLOAD:
                  case o("WAWebMediaTypes").UploadStage.ERROR_TOO_LARGE:
                  case o("WAWebMediaTypes").UploadStage.ERROR_FORBIDDEN:
                  case o("WAWebMediaTypes").UploadStage.ERROR_THROTTLED:
                    return {
                      messageSendResult: o("WAWebMediaPrepHelpers").errorUpload(
                        O,
                      ),
                    };
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
              return B ===
                o("WAWebMediaMmsV4Upload").UploadMediaResultKind.ERROR
                ? {
                    messageSendResult: o("WAWebMediaPrepHelpers").errorUpload(
                      O,
                    ),
                  }
                : r != null
                  ? r
                  : (O &&
                      o("WAWebMmsMediaTypes").getMsgMediaType(O) ===
                        o("WAWebMediaTypes").OUTWARD_TYPES.STICKER &&
                      o("WALogger")
                        .ERROR(
                          b ||
                            (b = babelHelpers.taggedTemplateLiteralLoose([
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
        x.apply(this, arguments)
      );
    }
    ((l.MediaPrep = L),
      (l.getMediaPropsNew = k),
      (l.uploadMediaWithPrep = I),
      (l.sendMediaMsgToChat = D));
  },
  98,
);
