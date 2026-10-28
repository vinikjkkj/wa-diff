__d(
  "WAWebMediaPrepSendToChat",
  [
    "JSResourceForInteraction",
    "WABackoffDelay",
    "WALogger",
    "WAPromiseBackoffs",
    "WATimeUtils",
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
    "WAWebNullFunc",
    "WAWebRecentStickerCollectionMd",
    "WAWebSchemaChat",
    "WAWebSendMsgChatAction",
    "WAWebSendMsgResultAction",
    "WAWebSpoilerFormatRegex",
    "WAWebSpoilerGating",
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
      g = r("requireDeferred")("WAWebNewsletterSendMsgAction").__setRef(
        "WAWebMediaPrepSendToChat",
      ),
      h = r("requireDeferred")("WAWebSendStatusMsgAction").__setRef(
        "WAWebMediaPrepSendToChat",
      ),
      y = new AbortController().signal,
      C = r("err")("upload failed: retryable, auto-retrying"),
      b = 3;
    function v(e) {
      var t = e.baseProps,
        n = e.chat,
        a = e.options,
        i = e.prep;
      return (
        (a.chatWid = n.id),
        (a.downloadOrigin = o("WAWebMediaPrepHelpers").getDownloadOriginForChat(
          n,
          t,
        )),
        (a.isNewsletterMsg = o("WAWebChatGetters").getIsNewsletter(n)),
        r("WAWebMediaPrepMediaProps")(i, a)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            a,
            i = e.chat,
            l = e.earlyUpload,
            S = e.options,
            R = e.prep;
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
              var E = yield o("WAWebSchemaChat")
                .getChatTable()
                .get(i.id.toString());
              if (E == null) {
                var k;
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "sendMediaMsgToChat: chat ",
                        " not in DB. lid: ",
                        "",
                      ])),
                    i.id.toLogString(),
                    (k = i.accountLid) == null ? void 0 : k.toLogString(),
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
                  E.accountLid != null,
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
          var I = S.caption,
            T = S.footer,
            D = S.quotedMsg ? S.quotedMsg.msgContextInfo(i.id) : {},
            x = (t = S.productMsgOptions) != null ? t : {},
            $ = o("WAWebChatEphemerality").getAfterReadEnvelopeForChat(i),
            P = $.afterReadDuration,
            N = $.ephemeralDuration,
            M = o("WAWebChatEphemerality").isEphemeralSettingOn(i) ? N : void 0,
            w = o("WAWebChatEphemerality").getEphemeralSettingTimestamp(i),
            A = o("WAWebChatEphemerality").getDisappearingModeInitiator(i),
            F =
              o("WAWebSpoilerFormatRegex").hasSpoilerMarkup(
                I != null ? I : null,
              ) &&
              o("WAWebSpoilerGating").isSpoilerSenderEnabledForDestination(
                i.id.isStatus(),
                S.isNewsletterStatus === !0,
              ),
            O,
            B = !1;
          i.isCAGAdmin() && (B = !0);
          var W = (a = S.type) != null ? a : R.baseType;
          o("WAWebMessagingGatingUtils").isReportingTokenSendingEnabled() &&
            o(
              "WAWebMessagePluginGenerateReportingTokenContent",
            ).isMsgTypeReportingTokenCompatible(W) &&
            (B = !0);
          var q =
            i.id.isBot() &&
            (o("WAWebBotBaseGating").isBotEnabled() ||
              i.id.isSupportAgentBot());
          (q && (B = !0),
            B && (O = self.crypto.getRandomValues(new Uint8Array(32))));
          var U = babelHelpers.extends(
            {},
            yield o("WAWebMsgDataUtils").genOutgoingMsgData(i, W),
            {
              type: W,
              caption: I,
              footer: T,
              quotedMsg: D.quotedMsg,
              quotedParticipant: D.quotedParticipant,
              quotedStanzaID: D.quotedStanzaID,
              quotedRemoteJid: D.quotedRemoteJid,
              mentionedJidList: S.mentionedJidList,
              groupMentions: S.groupMentions,
              isForwarded: S.isForwarded,
              forwardingScore: S.forwardingScore,
              forwardedNewsletterMessageInfo: S.forwardedNewsletterMessageInfo,
              forwardedAiBotMessageInfo: S.forwardedAiBotMessageInfo,
              aiProvenance: S.aiProvenance,
              multicast: S.multicast,
              forwardedFromWeb: S.forwardedFromWeb,
              ctwaContext: S.ctwaContext,
              ephemeralDuration: M,
              ephemeralSettingTimestamp: w,
              disappearingModeInitiator: A,
              afterReadDuration: P,
              isSpoiler: F,
              messageSecret: O,
              botPersonaId: S.botPersonaId,
              aiMediaCollectionInfo: S.aiMediaCollectionInfo,
              botMetricsMetadata: S.botMetricsMetadata,
              aiThreadInfo: S.aiThreadInfo,
              isAvatar: S.isAvatar,
              isAiSticker: S.isAiSticker,
              stickerAudio: S.stickerAudio,
              viewMode: S.viewMode,
              parentMsgKey: S.parentMsgKey,
              associationType: S.associationType,
              pairedMediaType: S.pairedMediaType,
              isQuestion: S.isQuestion,
              questionReplyQuotedMessage: S.questionReplyQuotedMessage,
              interactiveAnnotations: S.interactiveAnnotations,
              threadIds: S.threadId != null ? [S.threadId] : void 0,
              statusAttributions: S.statusAttributions,
              isScheduledMsg: S.isScheduledMsg,
              scheduledTimestampS: S.scheduledTimestampS,
            },
            x,
          );
          if (S.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK) {
            var V;
            ((U.description = S.description),
              (U.isCaptionByUser = !!S.caption),
              (U.thumbnailSha256 = S.thumbnailSha256),
              (U.stickers = S.stickers),
              (U.stickerPackPublisher = S.publisher),
              (U.size = (V = S.fileLength) != null ? V : 0),
              (U.stickerPackId = S.stickerPackId),
              (U.thumbnailDirectPath = S.thumbnailDirectPath),
              (U.thumbnailEncSha256 = S.thumbnailEncSha256),
              (U.trayIconFileName = S.trayIconFileName),
              (U.stickerPackSize = S.stickerPackSize));
          }
          (S.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT &&
            S.caption &&
            (U.isCaptionByUser = !0),
            S.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
              ((U.nativeFlowInteractiveMsg = S.nativeFlowInteractiveMsg),
              (U.nativeFlowName = S.nativeFlowName),
              (U.interactiveHeader = S.interactiveHeader),
              (U.interactiveType = S.interactiveType),
              (U.interactivePayload = S.interactivePayload)),
            S.isWamoSub === !0 && (U.isWamoSub = !0),
            L(S.onMsgKeyCreated, U.id));
          var H, G;
          function z(e) {
            return j.apply(this, arguments);
          }
          function j() {
            return (
              (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
                H = e;
                var t = S.aiProvenance;
                S.aiProvenancePromise != null &&
                  (t = yield S.aiProvenancePromise.catch(
                    o("WAWebNullFunc").returnNull,
                  ));
                var a = e.mediaObject;
                ((S.earlyUpload = l),
                  (S.isMediaCryptoExpectedForChat = o(
                    "WAWebMediaCryptoEligibilityUtils",
                  ).isMediaCryptoExpectedForChat(i)),
                  (S.uploadOriginForChat = r(
                    "WAWebMediaGetUploadOriginForChat",
                  )(i)));
                var s = function () {
                    return o(
                      "WAWebMediaUploadMediaWithPrep",
                    ).uploadMediaWithPrep(e, S);
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
                      signal: y,
                      retries: b,
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
                            ? (t < b &&
                                (a == null ||
                                  a.consolidate({
                                    uploadStage:
                                      o("WAWebMediaTypes").UploadStage
                                        .UPLOADING,
                                  })),
                              e(C))
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
                if (((G = p), !_))
                  throw r("err")("upload failed: media entry was not created");
                return (
                  yield r("WAWebMediaUpdateMsg")(
                    H,
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
                  H
                );
              })),
              j.apply(this, arguments)
            );
          }
          var K;
          if (S.addEvenWhilePreparing === !0) {
            var Q = S.placeholderProps || {},
              X = babelHelpers.extends({}, Q, U),
              Y = function (t) {
                return (
                  (H = t),
                  v({ baseProps: U, chat: i, options: S, prep: R })
                    .then(function (e) {
                      return r("WAWebMediaUpdateMsg")(H, e);
                    })
                    .then(function () {
                      return z(H);
                    })
                );
              };
            o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
            o("WAWebChatGetters").getIsNewsletter(i)
              ? S.isNewsletterStatus === !0
                ? (K = r("JSResourceForInteraction")(
                    "WAWebNewsletterSendStatusAction",
                  )
                    .__setRef("WAWebMediaPrepSendToChat")
                    .load()
                    .then(function (e) {
                      return e.sendNewsletterStatusMediaMsgAction(
                        X,
                        Y,
                        S.statusPostFunnelContext,
                      );
                    }))
                : (K = g.load().then(function (e) {
                    return e.sendNewsletterMediaMsg(i, X, Y);
                  }))
              : i.id.isStatus()
                ? (K = h.load().then(function (e) {
                    return e.sendStatusMediaMsgAction({
                      beforeSend: Y,
                      funnelContext: S.statusPostFunnelContext,
                      mediaMsgData: X,
                    });
                  }))
                : (K = o("WAWebSendMsgChatAction").addAndSendMsgToChat(
                    i,
                    X,
                    Y,
                  )[1]);
          } else {
            var J = v({ baseProps: U, chat: i, options: S, prep: R }).then(
              function (e) {
                var t = S.useBasePropsType === !0 ? U.type : e.type;
                return babelHelpers.extends({}, U, e, { type: t });
              },
            );
            if (
              o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
              o("WAWebChatGetters").getIsNewsletter(i)
            )
              if (S.isNewsletterStatus === !0) {
                var Z = yield J;
                K = r("JSResourceForInteraction")(
                  "WAWebNewsletterSendStatusAction",
                )
                  .__setRef("WAWebMediaPrepSendToChat")
                  .load()
                  .then(function (e) {
                    return e.sendNewsletterStatusMediaMsgAction(
                      Z,
                      z,
                      S.statusPostFunnelContext,
                    );
                  });
              } else
                K = g.load().then(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        return e.sendNewsletterMediaMsg(i, yield J, z);
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                );
            else
              i.id.isStatus()
                ? (K = h.load().then(
                    (function () {
                      var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (e) {
                          return e.sendStatusMediaMsgAction({
                            beforeSend: z,
                            funnelContext: S.statusPostFunnelContext,
                            mediaMsgData: yield J,
                          });
                        },
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })(),
                  ))
                : U.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE
                  ? (K = o("WAWebSendMsgChatAction").addAndSendMsgToChat(
                      i,
                      yield J,
                      z,
                    )[1])
                  : (K = o("WAWebSendMsgChatAction").addAndSendMsgToChat(
                      i,
                      J,
                      z,
                    )[1]);
          }
          return K.then(function (e) {
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
                  H.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER &&
                    H.isAvatar !== !0 &&
                    o(
                      "WAWebRecentStickerCollectionMd",
                    ).RecentStickerCollectionMd.addStickerWithMediaData(H),
                  {
                    messageSendResult: o("WAWebSendMsgResultAction")
                      .SendMsgResult.OK,
                    msg: H,
                  }
                );
              H && (H.ack = o("WAWebAck").ACK.FAILED);
              var a =
                (t = H) == null || (t = t.mediaObject) == null
                  ? void 0
                  : t.uploadStage;
              if (
                H &&
                o("WAWebMmsMediaTypes").getMsgMediaType(H) ===
                  o("WAWebMediaTypes").OUTWARD_TYPES.STICKER
              ) {
                var i = a || "undefined";
                G === o("WAWebMediaMmsV4Upload").UploadMediaResultKind.ERROR &&
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
                G ===
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
                  (l = H.wamMessageSendReporter) == null ||
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
                  G,
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
                        H,
                      ),
                      msg: H,
                    };
                  case o("WAWebMediaTypes").UploadStage.ERROR_MISSING:
                    return (
                      o("WAWebCoreActionsODS").logMsgSendError(),
                      o("WAWebCoreActionsODS").logMsgSendErrorUpload(),
                      {
                        messageSendResult: o("WAWebSendMsgResultAction")
                          .SendMsgResult.ERROR_EXPIRED,
                        msg: H,
                      }
                    );
                  default:
                }
              return G ===
                o("WAWebMediaMmsV4Upload").UploadMediaResultKind.ERROR
                ? {
                    messageSendResult: o("WAWebMediaPrepHelpers").errorUpload(
                      H,
                    ),
                    msg: H,
                  }
                : r != null
                  ? H != null
                    ? babelHelpers.extends({}, r, { msg: H })
                    : r
                  : (H &&
                      o("WAWebMmsMediaTypes").getMsgMediaType(H) ===
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
        R.apply(this, arguments)
      );
    }
    function L(t, n) {
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
    l.default = S;
  },
  98,
);
