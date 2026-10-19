__d(
  "WAWebMediaPrepSendToChat",
  [
    "JSResourceForInteraction",
    "WABackoffDelay",
    "WALogger",
    "WAPromiseBackoffs",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAck",
    "WAWebBotBaseGating",
    "WAWebChannelVideoServerTranscodeGating",
    "WAWebChatEphemerality",
    "WAWebChatGetters",
    "WAWebCoreActionsODS",
    "WAWebMediaCryptoEligibilityUtils",
    "WAWebMediaEntry",
    "WAWebMediaGetUploadOriginForChat",
    "WAWebMediaMmsV4Upload",
    "WAWebMediaPrepHelpers",
    "WAWebMediaPrepMediaProps",
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
    "WAWebSpoilerFormatRegex",
    "WAWebWamEnumMessageSendResultType",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "nullthrows",
    "requireDeferred",
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
      g = r("requireDeferred")("WAWebSendStatusMsgAction").__setRef(
        "WAWebMediaPrepSendToChat",
      ),
      h = new AbortController().signal,
      y = r("err")("upload failed: retryable, auto-retrying"),
      C = 3,
      b = function (t) {
        var e = t.baseProps,
          n = t.chat,
          a = t.options,
          i = t.prep;
        return (
          (a.chatWid = n.id),
          (a.downloadOrigin = o(
            "WAWebMediaPrepHelpers",
          ).getDownloadOriginForChat(n, e)),
          (a.isNewsletterMsg = o("WAWebChatGetters").getIsNewsletter(n)),
          r("WAWebMediaPrepMediaProps")(i, a)
        );
      };
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            a,
            i = e.chat,
            l = e.earlyUpload,
            v = e.options,
            S = e.prep;
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Media:sendToChat chat ",
                "",
              ])),
            i.id.toLogString(),
          );
          try {
            if (!i.id.isStatus()) {
              var L = yield o("WAWebSchemaChat")
                .getChatTable()
                .get(i.id.toString());
              if (L == null) {
                var E;
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "sendMediaMsgToChat: chat ",
                        " not in DB. lid: ",
                        "",
                      ])),
                    i.id.toLogString(),
                    (E = i.accountLid) == null ? void 0 : E.toLogString(),
                  )
                  .sendLogs("send-media-chat-not-found")
                  .tags("missing-lid");
              } else
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "sendMediaMsgToChat: chat ",
                      " found in DB. has account lid: ",
                      "",
                    ])),
                  i.id.toLogString(),
                  L.accountLid != null,
                );
            }
          } catch (e) {
            o("WALogger").ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "sendMediaMsgToChat: failed to check if chat exists",
                ])),
            );
          }
          var k = v.caption,
            I = v.footer,
            T = v.quotedMsg ? v.quotedMsg.msgContextInfo(i.id) : {},
            D = (t = v.productMsgOptions) != null ? t : {},
            x = o("WAWebChatEphemerality").getAfterReadEnvelopeForChat(i),
            $ = x.afterReadDuration,
            P = x.ephemeralDuration,
            N = o("WAWebChatEphemerality").isEphemeralSettingOn(i) ? P : void 0,
            M = o("WAWebChatEphemerality").getEphemeralSettingTimestamp(i),
            w = o("WAWebChatEphemerality").getDisappearingModeInitiator(i),
            A =
              o("WAWebSpoilerFormatRegex").hasSpoilerMarkup(
                k != null ? k : null,
              ) &&
              o("WAWebABProps").getABPropConfigValue(
                "is_spoiler_rich_format_sender_enabled",
              ),
            F,
            O = !1;
          i.isCAGAdmin() && (O = !0);
          var B = (a = v.type) != null ? a : S.baseType;
          o("WAWebMessagingGatingUtils").isReportingTokenSendingEnabled() &&
            o(
              "WAWebMessagePluginGenerateReportingTokenContent",
            ).isMsgTypeReportingTokenCompatible(B) &&
            (O = !0);
          var W =
            i.id.isBot() &&
            (o("WAWebBotBaseGating").isBotEnabled() ||
              i.id.isSupportAgentBot());
          (W && (O = !0),
            O && (F = self.crypto.getRandomValues(new Uint8Array(32))));
          var q = babelHelpers.extends(
            {},
            yield o("WAWebMsgDataUtils").genOutgoingMsgData(i, B),
            {
              type: B,
              caption: k,
              footer: I,
              quotedMsg: T.quotedMsg,
              quotedParticipant: T.quotedParticipant,
              quotedStanzaID: T.quotedStanzaID,
              quotedRemoteJid: T.quotedRemoteJid,
              mentionedJidList: v.mentionedJidList,
              groupMentions: v.groupMentions,
              isForwarded: v.isForwarded,
              forwardingScore: v.forwardingScore,
              forwardedNewsletterMessageInfo: v.forwardedNewsletterMessageInfo,
              forwardedAiBotMessageInfo: v.forwardedAiBotMessageInfo,
              aiProvenance: v.aiProvenance,
              multicast: v.multicast,
              forwardedFromWeb: v.forwardedFromWeb,
              ctwaContext: v.ctwaContext,
              ephemeralDuration: N,
              ephemeralSettingTimestamp: M,
              disappearingModeInitiator: w,
              afterReadDuration: $,
              isSpoiler: A,
              messageSecret: F,
              botPersonaId: v.botPersonaId,
              aiMediaCollectionInfo: v.aiMediaCollectionInfo,
              botMetricsMetadata: v.botMetricsMetadata,
              aiThreadInfo: v.aiThreadInfo,
              isAvatar: v.isAvatar,
              isAiSticker: v.isAiSticker,
              stickerAudio: v.stickerAudio,
              viewMode: v.viewMode,
              parentMsgKey: v.parentMsgKey,
              associationType: v.associationType,
              pairedMediaType: v.pairedMediaType,
              isQuestion: v.isQuestion,
              questionReplyQuotedMessage: v.questionReplyQuotedMessage,
              interactiveAnnotations: v.interactiveAnnotations,
              threadIds: v.threadId != null ? [v.threadId] : void 0,
              statusAttributions: v.statusAttributions,
              isScheduledMsg: v.isScheduledMsg,
              scheduledTimestampS: v.scheduledTimestampS,
            },
            D,
          );
          if (v.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK) {
            var U;
            ((q.description = v.description),
              (q.isCaptionByUser = !!v.caption),
              (q.thumbnailSha256 = v.thumbnailSha256),
              (q.stickers = v.stickers),
              (q.stickerPackPublisher = v.publisher),
              (q.size = (U = v.fileLength) != null ? U : 0),
              (q.stickerPackId = v.stickerPackId),
              (q.thumbnailDirectPath = v.thumbnailDirectPath),
              (q.thumbnailEncSha256 = v.thumbnailEncSha256),
              (q.trayIconFileName = v.trayIconFileName),
              (q.stickerPackSize = v.stickerPackSize));
          }
          (v.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT &&
            v.caption &&
            (q.isCaptionByUser = !0),
            v.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
              ((q.nativeFlowInteractiveMsg = v.nativeFlowInteractiveMsg),
              (q.nativeFlowName = v.nativeFlowName),
              (q.interactiveHeader = v.interactiveHeader),
              (q.interactiveType = v.interactiveType),
              (q.interactivePayload = v.interactivePayload)),
            v.isWamoSub === !0 && (q.isWamoSub = !0),
            R(v.onMsgKeyCreated, q.id));
          var V, H;
          function G(e) {
            return z.apply(this, arguments);
          }
          function z() {
            return (
              (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
                V = e;
                var t = v.aiProvenance;
                v.aiProvenancePromise != null &&
                  (t = yield v.aiProvenancePromise.catch(
                    o("WAWebNullFunc").returnNull,
                  ));
                var a = e.mediaObject;
                ((v.earlyUpload = l),
                  (v.isMediaCryptoExpectedForChat = o(
                    "WAWebMediaCryptoEligibilityUtils",
                  ).isMediaCryptoExpectedForChat(i)),
                  (v.uploadOriginForChat = r(
                    "WAWebMediaGetUploadOriginForChat",
                  )(i)));
                var s = function () {
                    return o(
                      "WAWebMediaUploadMediaWithPrep",
                    ).uploadMediaWithPrep(e, v);
                  },
                  u = o("WAPromiseBackoffs").createTimer({
                    algo: { type: "exponential", first: 1e3, base: 2 },
                    max: 3e3,
                    jitter: 0.5,
                  });
                u();
                var c = yield o("WABackoffDelay").backoff(
                    {
                      delay: function () {
                        return u();
                      },
                      signal: h,
                      retries: C,
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
                            l = yield s(),
                            u =
                              (r = a == null ? void 0 : a.loadedSize) != null
                                ? r
                                : 0,
                            c = u > i;
                          return !l.mediaResult.mediaEntry &&
                            l.mediaResult.kind ===
                              o("WAWebMediaMmsV4Upload").UploadMediaResultKind
                                .ERROR &&
                            (a == null ? void 0 : a.uploadStage) ===
                              o("WAWebMediaTypes").UploadStage.NEED_UPLOAD &&
                            c
                            ? (t < C &&
                                (a == null ||
                                  a.consolidate({
                                    uploadStage:
                                      o("WAWebMediaTypes").UploadStage
                                        .UPLOADING,
                                  })),
                              e(y))
                            : l;
                        },
                      );
                      return function (t, n) {
                        return e.apply(this, arguments);
                      };
                    })(),
                  ),
                  d = c.body,
                  m = c.mediaResult,
                  p = m.kind,
                  _ = m.mediaEntry,
                  f = c.mmsThumbnailData;
                if (((H = p), !_))
                  throw r("err")("upload failed: media entry was not created");
                return (
                  yield r("WAWebMediaUpdateMsg")(
                    V,
                    babelHelpers.extends(
                      {
                        aiProvenance: t,
                        deprecatedMms3Url: _.deprecatedMms3Url,
                        directPath: _.directPath,
                        mediaKey: _.getMediaKey(),
                        mediaKeyTimestamp: _.getMediaKeyTimestamp(),
                        filehash: r("nullthrows")(a).filehash,
                        encFilehash: _.getEncfilehash(),
                        size: r("nullthrows")(a).size,
                        streamingSidecar: _.sidecar,
                        firstFrameSidecar: _.firstFrameSidecar,
                        body: d,
                        stickerSentTs: o("WATimeUtils").unixTimeMs(),
                        mediaHandle:
                          _ instanceof
                          o("WAWebMediaEntry").UnencryptedMediaEntry
                            ? _.handle
                            : null,
                        metadataUrl:
                          _ instanceof
                            o("WAWebMediaEntry").UnencryptedMediaEntry &&
                          _.metadataUrl != null &&
                          o(
                            "WAWebChannelVideoServerTranscodeGating",
                          ).isChannelVideoServerTranscodeUploadEnabled()
                            ? _.metadataUrl
                            : null,
                        dashManifestUrl:
                          _ instanceof
                            o("WAWebMediaEntry").UnencryptedMediaEntry &&
                          _.dashManifestUrl != null &&
                          o(
                            "WAWebChannelVideoServerTranscodeGating",
                          ).isChannelVideoServerTranscodeUploadEnabled()
                            ? _.dashManifestUrl
                            : void 0,
                      },
                      f,
                    ),
                  ),
                  V
                );
              })),
              z.apply(this, arguments)
            );
          }
          var j;
          if (v.addEvenWhilePreparing === !0) {
            var K = v.placeholderProps || {},
              Q = babelHelpers.extends({}, K, q),
              X = function (t) {
                return (
                  (V = t),
                  b({ baseProps: q, chat: i, options: v, prep: S })
                    .then(function (e) {
                      return r("WAWebMediaUpdateMsg")(V, e);
                    })
                    .then(function () {
                      return G(V);
                    })
                );
              };
            o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
            o("WAWebChatGetters").getIsNewsletter(i)
              ? v.isNewsletterStatus === !0
                ? (j = r("JSResourceForInteraction")(
                    "WAWebNewsletterSendStatusAction",
                  )
                    .__setRef("WAWebMediaPrepSendToChat")
                    .load()
                    .then(function (e) {
                      return e.sendNewsletterStatusMediaMsgAction(
                        Q,
                        X,
                        v.statusPostFunnelContext,
                      );
                    }))
                : (j = o("WAWebNewsletterSendMsgAction").sendNewsletterMediaMsg(
                    i,
                    Q,
                    X,
                  ))
              : i.id.isStatus()
                ? (j = g.load().then(function (e) {
                    return e.sendStatusMediaMsgAction({
                      beforeSend: X,
                      funnelContext: v.statusPostFunnelContext,
                      mediaMsgData: Q,
                    });
                  }))
                : (j = o("WAWebSendMsgChatAction").addAndSendMsgToChat(
                    i,
                    Q,
                    X,
                  )[1]);
          } else {
            var Y = b({ baseProps: q, chat: i, options: v, prep: S }).then(
              function (e) {
                var t = v.useBasePropsType === !0 ? q.type : e.type;
                return babelHelpers.extends({}, q, e, { type: t });
              },
            );
            if (
              o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
              o("WAWebChatGetters").getIsNewsletter(i)
            )
              if (v.isNewsletterStatus === !0) {
                var J = yield Y;
                j = r("JSResourceForInteraction")(
                  "WAWebNewsletterSendStatusAction",
                )
                  .__setRef("WAWebMediaPrepSendToChat")
                  .load()
                  .then(function (e) {
                    return e.sendNewsletterStatusMediaMsgAction(
                      J,
                      G,
                      v.statusPostFunnelContext,
                    );
                  });
              } else
                j = o("WAWebNewsletterSendMsgAction").sendNewsletterMediaMsg(
                  i,
                  yield Y,
                  G,
                );
            else
              i.id.isStatus()
                ? (j = g.load().then(
                    (function () {
                      var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (e) {
                          return e.sendStatusMediaMsgAction({
                            beforeSend: G,
                            funnelContext: v.statusPostFunnelContext,
                            mediaMsgData: yield Y,
                          });
                        },
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })(),
                  ))
                : q.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE
                  ? (j = o("WAWebSendMsgChatAction").addAndSendMsgToChat(
                      i,
                      yield Y,
                      G,
                    )[1])
                  : (j = o("WAWebSendMsgChatAction").addAndSendMsgToChat(
                      i,
                      Y,
                      G,
                    )[1]);
          }
          return j
            .then(function (e) {
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
                  V.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER &&
                    V.isAvatar !== !0 &&
                    o(
                      "WAWebRecentStickerCollectionMd",
                    ).RecentStickerCollectionMd.addStickerWithMediaData(V),
                  {
                    messageSendResult: o("WAWebSendMsgResultAction")
                      .SendMsgResult.OK,
                    msg: V,
                  }
                );
              V && (V.ack = o("WAWebAck").ACK.FAILED);
              var a =
                (t = V) == null || (t = t.mediaObject) == null
                  ? void 0
                  : t.uploadStage;
              if (
                V &&
                o("WAWebMmsMediaTypes").getMsgMediaType(V) ===
                  o("WAWebMediaTypes").OUTWARD_TYPES.STICKER
              ) {
                var i = a || "undefined";
                H === o("WAWebMediaMmsV4Upload").UploadMediaResultKind.ERROR &&
                  o("WALogger")
                    .ERROR(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
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
                H ===
                o("WAWebMediaMmsV4Upload").UploadMediaResultKind.CANCELLATION
              ) {
                var l;
                return (
                  o("WALogger").LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "Media:sendToChat canceled",
                      ])),
                  ),
                  (l = V.wamMessageSendReporter) == null ||
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
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "Media:sendToChat err res=",
                      " stage=",
                      " kind=",
                      " err=",
                      "",
                    ])),
                  r,
                  a,
                  H,
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
                        V,
                      ),
                      msg: V,
                    };
                  case o("WAWebMediaTypes").UploadStage.ERROR_MISSING:
                    return (
                      o("WAWebCoreActionsODS").logMsgSendError(),
                      o("WAWebCoreActionsODS").logMsgSendErrorUpload(),
                      {
                        messageSendResult: o("WAWebSendMsgResultAction")
                          .SendMsgResult.ERROR_EXPIRED,
                        msg: V,
                      }
                    );
                  default:
                }
              return H ===
                o("WAWebMediaMmsV4Upload").UploadMediaResultKind.ERROR
                ? {
                    messageSendResult: o("WAWebMediaPrepHelpers").errorUpload(
                      V,
                    ),
                    msg: V,
                  }
                : r != null
                  ? V != null
                    ? babelHelpers.extends({}, r, { msg: V })
                    : r
                  : (V &&
                      o("WAWebMmsMediaTypes").getMsgMediaType(V) ===
                        o("WAWebMediaTypes").OUTWARD_TYPES.STICKER &&
                      o("WALogger")
                        .ERROR(
                          f ||
                            (f = babelHelpers.taggedTemplateLiteralLoose([
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
        S.apply(this, arguments)
      );
    }
    function R(t, n) {
      try {
        t == null || t(n);
      } catch (t) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Media:sendToChat onMsgKeyCreated failed",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("media-send-on-msg-key-created-failed");
      }
    }
    l.default = v;
  },
  98,
);
