__d(
  "WAWebMediaPrep",
  [
    "JSResourceForInteraction",
    "WABackoffDelay",
    "WALogger",
    "WAPromiseBackoffs",
    "WAPromiseCallSync",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAck",
    "WAWebBotBaseGating",
    "WAWebChannelVideoServerTranscodeGating",
    "WAWebChatEphemerality",
    "WAWebChatGetters",
    "WAWebCoreActionsODS",
    "WAWebCryptoCalculateFilehash",
    "WAWebMediaCryptoEligibilityUtils",
    "WAWebMediaData",
    "WAWebMediaDataUtils",
    "WAWebMediaEntry",
    "WAWebMediaGetUploadOriginForChat",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaMmsV4Download",
    "WAWebMediaMmsV4Upload",
    "WAWebMediaOpaqueData",
    "WAWebMediaPrepHelpers",
    "WAWebMediaStorage",
    "WAWebMediaTypes",
    "WAWebMediaUpdateMsg",
    "WAWebMediaUploadMediaWithPrep",
    "WAWebMessagePluginGenerateReportingTokenContent",
    "WAWebMessagingGatingUtils",
    "WAWebMmsMediaTypes",
    "WAWebMsgDataUtils",
    "WAWebMsgType",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterSendMsgAction",
    "WAWebNullFunc",
    "WAWebRecentStickerCollectionMd",
    "WAWebSchemaChat",
    "WAWebSendMsgChatAction",
    "WAWebSendMsgResultAction",
    "WAWebSendStatusMsgAction",
    "WAWebSpoilerFormatRegex",
    "WAWebWamEnumDownloadOriginType",
    "WAWebWamEnumMessageSendResultType",
    "WAWebWamEnumWebcRmrReasonCode",
    "asyncToGeneratorRuntime",
    "err",
    "nullthrows",
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
      C = new AbortController().signal,
      b = r("err")("upload failed: retryable, auto-retrying"),
      v = 3,
      S = (function () {
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
            return o("WAPromiseCallSync").promiseCallSync(E, null, {
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
      R = function (t) {
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
          L(a, r)
        );
      };
    function L(e, t) {
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
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Assertion failed!",
                  ])),
              )
              .sendLogs("media-fault: sendToChat filehash undefined");
          var l = e.mediaBlob instanceof r("WAWebMediaOpaqueData"),
            d = i != null ? i : "none",
            m = (n = t.forwardedFromWeb) != null ? n : !1;
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[media-fwd] getMediaPropsNew hash=",
                " blob=",
                " type=",
                " fwd=",
                "",
              ])),
            d,
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
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
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
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            a,
            i = e.chat,
            l = e.earlyUpload,
            s = e.options,
            u = e.prep;
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
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
                var S;
                o("WALogger")
                  .ERROR(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "sendMediaMsgToChat: chat ",
                        " not in DB. lid: ",
                        "",
                      ])),
                    i.id.toLogString(),
                    (S = i.accountLid) == null ? void 0 : S.toLogString(),
                  )
                  .sendLogs("send-media-chat-not-found")
                  .tags("missing-lid");
              } else
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
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
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "sendMediaMsgToChat: failed to check if chat exists",
                ])),
            );
          }
          var L = s.caption,
            E = s.footer,
            k = s.quotedMsg ? s.quotedMsg.msgContextInfo(i.id) : {},
            I = (t = s.productMsgOptions) != null ? t : {},
            T = o("WAWebChatEphemerality").isEphemeralSettingOn(i)
              ? o("WAWebChatEphemerality").getEphemeralSetting(i)
              : void 0,
            D = o("WAWebChatEphemerality").getEphemeralSettingTimestamp(i),
            x = o("WAWebChatEphemerality").getDisappearingModeInitiator(i),
            $ = o("WAWebChatEphemerality").getAfterReadDurationForChat(i),
            P =
              o("WAWebSpoilerFormatRegex").hasSpoilerMarkup(
                L != null ? L : null,
              ) &&
              o("WAWebABProps").getABPropConfigValue(
                "is_spoiler_rich_format_sender_enabled",
              ),
            N,
            M = !1;
          i.isCAGAdmin() && (M = !0);
          var w = (a = s.type) != null ? a : u.baseType;
          o("WAWebMessagingGatingUtils").isReportingTokenSendingEnabled() &&
            o(
              "WAWebMessagePluginGenerateReportingTokenContent",
            ).isMsgTypeReportingTokenCompatible(w) &&
            (M = !0);
          var A =
            i.id.isBot() &&
            (o("WAWebBotBaseGating").isBotEnabled() ||
              i.id.isSupportAgentBot());
          (A && (M = !0),
            M && (N = self.crypto.getRandomValues(new Uint8Array(32))));
          var F = babelHelpers.extends(
            {},
            yield o("WAWebMsgDataUtils").genOutgoingMsgData(i, w),
            {
              type: w,
              caption: L,
              footer: E,
              quotedMsg: k.quotedMsg,
              quotedParticipant: k.quotedParticipant,
              quotedStanzaID: k.quotedStanzaID,
              quotedRemoteJid: k.quotedRemoteJid,
              mentionedJidList: s.mentionedJidList,
              groupMentions: s.groupMentions,
              isForwarded: s.isForwarded,
              forwardingScore: s.forwardingScore,
              forwardedNewsletterMessageInfo: s.forwardedNewsletterMessageInfo,
              forwardedAiBotMessageInfo: s.forwardedAiBotMessageInfo,
              aiProvenance: s.aiProvenance,
              multicast: s.multicast,
              forwardedFromWeb: s.forwardedFromWeb,
              ctwaContext: s.ctwaContext,
              ephemeralDuration: T,
              ephemeralSettingTimestamp: D,
              disappearingModeInitiator: x,
              afterReadDuration: $,
              isSpoiler: P,
              messageSecret: N,
              botPersonaId: s.botPersonaId,
              aiMediaCollectionInfo: s.aiMediaCollectionInfo,
              botMetricsMetadata: s.botMetricsMetadata,
              aiThreadInfo: s.aiThreadInfo,
              isAvatar: s.isAvatar,
              isAiSticker: s.isAiSticker,
              viewMode: s.viewMode,
              parentMsgKey: s.parentMsgKey,
              associationType: s.associationType,
              pairedMediaType: s.pairedMediaType,
              isQuestion: s.isQuestion,
              questionReplyQuotedMessage: s.questionReplyQuotedMessage,
              interactiveAnnotations: s.interactiveAnnotations,
              threadIds: s.threadId != null ? [s.threadId] : void 0,
              statusAttributions: s.statusAttributions,
              isScheduledMsg: s.isScheduledMsg,
              scheduledTimestampS: s.scheduledTimestampS,
            },
            I,
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
                var t = s.aiProvenance;
                s.aiProvenancePromise != null &&
                  (t = yield s.aiProvenancePromise.catch(
                    o("WAWebNullFunc").returnNull,
                  ));
                var a = e.mediaObject;
                ((s.earlyUpload = l),
                  (s.isMediaCryptoExpectedForChat = o(
                    "WAWebMediaCryptoEligibilityUtils",
                  ).isMediaCryptoExpectedForChat(i)),
                  (s.uploadOriginForChat = r(
                    "WAWebMediaGetUploadOriginForChat",
                  )(i)));
                var u = function () {
                    return o(
                      "WAWebMediaUploadMediaWithPrep",
                    ).uploadMediaWithPrep(e, s);
                  },
                  c = o("WAPromiseBackoffs").createTimer({
                    algo: { type: "exponential", first: 1e3, base: 2 },
                    max: 3e3,
                    jitter: 0.5,
                  });
                c();
                var d = yield o("WABackoffDelay").backoff(
                    {
                      delay: function () {
                        return c();
                      },
                      signal: C,
                      retries: v,
                    },
                    (function () {
                      var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (e, t) {
                          var n,
                            r,
                            i =
                              (n = a == null ? void 0 : a.loadedSize) != null
                                ? n
                                : 0,
                            l = yield u(),
                            s =
                              (r = a == null ? void 0 : a.loadedSize) != null
                                ? r
                                : 0,
                            c = s > i;
                          return !l.mediaResult.mediaEntry &&
                            l.mediaResult.kind ===
                              o("WAWebMediaMmsV4Upload").UploadMediaResultKind
                                .ERROR &&
                            (a == null ? void 0 : a.uploadStage) ===
                              o("WAWebMediaTypes").UploadStage.NEED_UPLOAD &&
                            c
                            ? (t < v &&
                                (a == null ||
                                  a.consolidate({
                                    uploadStage:
                                      o("WAWebMediaTypes").UploadStage
                                        .UPLOADING,
                                  })),
                              e(b))
                            : l;
                        },
                      );
                      return function (t, n) {
                        return e.apply(this, arguments);
                      };
                    })(),
                  ),
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
                        aiProvenance: t,
                        deprecatedMms3Url: f.deprecatedMms3Url,
                        directPath: f.directPath,
                        mediaKey: f.getMediaKey(),
                        mediaKeyTimestamp: f.getMediaKeyTimestamp(),
                        filehash: r("nullthrows")(a).filehash,
                        encFilehash: f.getEncfilehash(),
                        size: r("nullthrows")(a).size,
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
                        dashManifestUrl:
                          f instanceof
                            o("WAWebMediaEntry").UnencryptedMediaEntry &&
                          f.dashManifestUrl != null &&
                          o(
                            "WAWebChannelVideoServerTranscodeGating",
                          ).isChannelVideoServerTranscodeUploadEnabled()
                            ? f.dashManifestUrl
                            : void 0,
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
                  R({ baseProps: F, chat: i, options: s, prep: u })
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
                      return e.sendNewsletterStatusMediaMsgAction(
                        G,
                        z,
                        s.statusPostFunnelContext,
                      );
                    }))
                : (V = o("WAWebNewsletterSendMsgAction").sendNewsletterMediaMsg(
                    i,
                    G,
                    z,
                  ))
              : i.id.isStatus()
                ? (V = o("WAWebSendStatusMsgAction").sendStatusMediaMsgAction({
                    beforeSend: z,
                    funnelContext: s.statusPostFunnelContext,
                    mediaMsgData: G,
                  }))
                : (V = o("WAWebSendMsgChatAction").addAndSendMsgToChat(
                    i,
                    G,
                    z,
                  )[1]);
          } else {
            var j = R({ baseProps: F, chat: i, options: s, prep: u }).then(
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
                    return e.sendNewsletterStatusMediaMsgAction(
                      K,
                      q,
                      s.statusPostFunnelContext,
                    );
                  });
              } else
                V = o("WAWebNewsletterSendMsgAction").sendNewsletterMediaMsg(
                  i,
                  yield j,
                  q,
                );
            else
              i.id.isStatus()
                ? (V = o("WAWebSendStatusMsgAction").sendStatusMediaMsgAction({
                    beforeSend: q,
                    funnelContext: s.statusPostFunnelContext,
                    mediaMsgData: yield j,
                  }))
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
                    msg: B,
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
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
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
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
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
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
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
                    return {
                      messageSendResult: o("WAWebMediaPrepHelpers").errorUpload(
                        B,
                      ),
                      msg: B,
                    };
                  case o("WAWebMediaTypes").UploadStage.ERROR_MISSING:
                    return (
                      o("WAWebCoreActionsODS").logMsgSendError(),
                      o("WAWebCoreActionsODS").logMsgSendErrorUpload(),
                      {
                        messageSendResult: o("WAWebSendMsgResultAction")
                          .SendMsgResult.ERROR_EXPIRED,
                        msg: B,
                      }
                    );
                  default:
                }
              return W ===
                o("WAWebMediaMmsV4Upload").UploadMediaResultKind.ERROR
                ? {
                    messageSendResult: o("WAWebMediaPrepHelpers").errorUpload(
                      B,
                    ),
                    msg: B,
                  }
                : r != null
                  ? B != null
                    ? babelHelpers.extends({}, r, { msg: B })
                    : r
                  : (B &&
                      o("WAWebMmsMediaTypes").getMsgMediaType(B) ===
                        o("WAWebMediaTypes").OUTWARD_TYPES.STICKER &&
                      o("WALogger")
                        .ERROR(
                          y ||
                            (y = babelHelpers.taggedTemplateLiteralLoose([
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
        k.apply(this, arguments)
      );
    }
    ((l.MediaPrep = S), (l.getMediaPropsNew = L), (l.sendMediaMsgToChat = E));
  },
  98,
);
