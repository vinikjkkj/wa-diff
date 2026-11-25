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
    "WAWebPathfinderAccountToken",
    "WAWebRecentStickerCollectionMd",
    "WAWebSchemaChat",
    "WAWebSendMsgChatAction",
    "WAWebSendMsgResultAction",
    "WAWebSpoilerFormatRegex",
    "WAWebSpoilerGating",
    "WAWebWamEnumMessageSendResultType",
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
    async function S(t) {
      var n,
        a,
        i = t.chat,
        l = t.earlyUpload,
        f = t.options,
        S = t.prep;
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "Media:sendToChat chat ",
            "",
          ])),
        i.id.toLogString(),
      );
      var L = o(
        "WAWebPathfinderAccountToken",
      ).getPathfinderCaptureAccountToken();
      try {
        if (!i.id.isStatus()) {
          var E = await o("WAWebSchemaChat")
            .getChatTable()
            .get(i.id.toString());
          if (E == null) {
            var k;
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
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
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
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
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "sendMediaMsgToChat: failed to check if chat exists",
            ])),
        );
      }
      var I = f.caption,
        T = f.footer,
        D = f.quotedMsg ? f.quotedMsg.msgContextInfo(i.id) : {},
        x = (n = f.productMsgOptions) != null ? n : {},
        $ = o("WAWebChatEphemerality").getAfterReadEnvelopeForChat(i),
        P = $.afterReadDuration,
        N = $.ephemeralDuration,
        M = o("WAWebChatEphemerality").isEphemeralSettingOn(i) ? N : void 0,
        w = o("WAWebChatEphemerality").getEphemeralSettingTimestamp(i),
        A = o("WAWebChatEphemerality").getDisappearingModeInitiator(i),
        F =
          o("WAWebSpoilerFormatRegex").hasSpoilerMarkup(I != null ? I : null) &&
          o("WAWebSpoilerGating").isSpoilerSenderEnabledForDestination(
            i.id.isStatus(),
            f.isNewsletterStatus === !0,
          ),
        O,
        B = !1;
      i.isCAGAdmin() && (B = !0);
      var W = (a = f.type) != null ? a : S.baseType;
      o("WAWebMessagingGatingUtils").isReportingTokenSendingEnabled() &&
        o(
          "WAWebMessagePluginGenerateReportingTokenContent",
        ).isMsgTypeReportingTokenCompatible(W) &&
        (B = !0);
      var q =
        i.id.isBot() &&
        (o("WAWebBotBaseGating").isBotEnabled() || i.id.isSupportAgentBot());
      (q && (B = !0),
        B && (O = self.crypto.getRandomValues(new Uint8Array(32))));
      var U = babelHelpers.extends(
        {},
        await o("WAWebMsgDataUtils").genOutgoingMsgData(i, W),
        {
          type: W,
          caption: I,
          footer: T,
          quotedMsg: D.quotedMsg,
          quotedParticipant: D.quotedParticipant,
          quotedStanzaID: D.quotedStanzaID,
          quotedRemoteJid: D.quotedRemoteJid,
          mentionedJidList: f.mentionedJidList,
          groupMentions: f.groupMentions,
          isForwarded: f.isForwarded,
          forwardingScore: f.forwardingScore,
          forwardReachScore: f.forwardReachScore,
          forwardedNewsletterMessageInfo: f.forwardedNewsletterMessageInfo,
          forwardedAiBotMessageInfo: f.forwardedAiBotMessageInfo,
          aiProvenance: f.aiProvenance,
          multicast: f.multicast,
          forwardedFromWeb: f.forwardedFromWeb,
          ctwaContext: f.ctwaContext,
          ephemeralDuration: M,
          ephemeralSettingTimestamp: w,
          disappearingModeInitiator: A,
          afterReadDuration: P,
          isSpoiler: F,
          messageSecret: O,
          botPersonaId: f.botPersonaId,
          aiMediaCollectionInfo: f.aiMediaCollectionInfo,
          botMetricsMetadata: f.botMetricsMetadata,
          aiThreadInfo: f.aiThreadInfo,
          isAvatar: f.isAvatar,
          isAiSticker: f.isAiSticker,
          stickerAudio: f.stickerAudio,
          viewMode: f.viewMode,
          parentMsgKey: f.parentMsgKey,
          associationType: f.associationType,
          pairedMediaType: f.pairedMediaType,
          isQuestion: f.isQuestion,
          questionReplyQuotedMessage: f.questionReplyQuotedMessage,
          interactiveAnnotations: f.interactiveAnnotations,
          threadIds: f.threadId != null ? [f.threadId] : void 0,
          statusAttributions: f.statusAttributions,
          isScheduledMsg: f.isScheduledMsg,
          scheduledTimestampS: f.scheduledTimestampS,
        },
        x,
      );
      if (f.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK) {
        var V;
        ((U.description = f.description),
          (U.isCaptionByUser = !!f.caption),
          (U.thumbnailSha256 = f.thumbnailSha256),
          (U.stickers = f.stickers),
          (U.stickerPackPublisher = f.publisher),
          (U.size = (V = f.fileLength) != null ? V : 0),
          (U.stickerPackId = f.stickerPackId),
          (U.thumbnailDirectPath = f.thumbnailDirectPath),
          (U.thumbnailEncSha256 = f.thumbnailEncSha256),
          (U.trayIconFileName = f.trayIconFileName),
          (U.stickerPackSize = f.stickerPackSize));
      }
      (f.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT &&
        f.caption &&
        (U.isCaptionByUser = !0),
        f.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
          ((U.nativeFlowInteractiveMsg = f.nativeFlowInteractiveMsg),
          (U.nativeFlowName = f.nativeFlowName),
          (U.interactiveHeader = f.interactiveHeader),
          (U.interactiveType = f.interactiveType),
          (U.interactivePayload = f.interactivePayload)),
        f.isWamoSub === !0 && (U.isWamoSub = !0),
        R(f.onMsgKeyCreated, U.id));
      var H, G;
      async function z(e) {
        H = e;
        var t = f.aiProvenance;
        if (f.provenanceDetectionPromise != null) {
          var n,
            a = await f.provenanceDetectionPromise.catch(
              o("WAWebNullFunc").returnNull,
            );
          t = (n = a == null ? void 0 : a.provenance) != null ? n : null;
        }
        var s = e.mediaObject;
        ((f.earlyUpload = l),
          (f.isMediaCryptoExpectedForChat = o(
            "WAWebMediaCryptoEligibilityUtils",
          ).isMediaCryptoExpectedForChat(i)),
          (f.uploadOriginForChat = r("WAWebMediaGetUploadOriginForChat")(i)));
        var u = function () {
            return o("WAWebMediaUploadMediaWithPrep").uploadMediaWithPrep(e, f);
          },
          c = o("WAPromiseBackoffs").createTimer({
            algo: { type: "exponential", first: 1e3, base: 2 },
            max: 3e3,
            jitter: 0.5,
          });
        c();
        var d = await o("WABackoffDelay").backoff(
            {
              delay: function () {
                return c();
              },
              signal: y,
              retries: b,
            },
            async function (e, t) {
              var n,
                r,
                a = (n = s == null ? void 0 : s.loadedSize) != null ? n : 0,
                i = await u(),
                l = (r = s == null ? void 0 : s.loadedSize) != null ? r : 0,
                c = l > a;
              return !i.mediaResult.mediaEntry &&
                i.mediaResult.kind ===
                  o("WAWebMediaMmsV4Upload").UploadMediaResultKind.ERROR &&
                (s == null ? void 0 : s.uploadStage) ===
                  o("WAWebMediaTypes").UploadStage.NEED_UPLOAD &&
                c
                ? (t < b &&
                    (s == null ||
                      s.consolidate({
                        uploadStage: o("WAWebMediaTypes").UploadStage.UPLOADING,
                      })),
                  e(C))
                : i;
            },
          ),
          m = d.body,
          p = d.mediaResult,
          _ = p.kind,
          g = p.mediaEntry,
          h = d.mmsThumbnailData;
        if (((G = _), !g))
          throw r("err")("upload failed: media entry was not created");
        return (
          await r("WAWebMediaUpdateMsg")(
            H,
            babelHelpers.extends(
              {
                aiProvenance: t,
                deprecatedMms3Url: g.deprecatedMms3Url,
                directPath: g.directPath,
                mediaKey: g.getMediaKey(),
                mediaKeyTimestamp: g.getMediaKeyTimestamp(),
                filehash: r("nullthrows")(s).filehash,
                encFilehash: g.getEncfilehash(),
                size: r("nullthrows")(s).size,
                streamingSidecar: g.sidecar,
                firstFrameSidecar: g.firstFrameSidecar,
                body: m,
                stickerSentTs: o("WATimeUtils").unixTimeMs(),
                mediaHandle:
                  g instanceof o("WAWebMediaEntry").UnencryptedMediaEntry
                    ? g.handle
                    : null,
                metadataUrl:
                  g instanceof o("WAWebMediaEntry").UnencryptedMediaEntry &&
                  g.metadataUrl != null &&
                  o(
                    "WAWebChannelVideoServerTranscodeGating",
                  ).isChannelVideoServerTranscodeUploadEnabled()
                    ? g.metadataUrl
                    : null,
                dashManifestUrl:
                  g instanceof o("WAWebMediaEntry").UnencryptedMediaEntry &&
                  g.dashManifestUrl != null &&
                  o(
                    "WAWebChannelVideoServerTranscodeGating",
                  ).isChannelVideoServerTranscodeUploadEnabled()
                    ? g.dashManifestUrl
                    : void 0,
              },
              h,
            ),
          ),
          H
        );
      }
      var j;
      if (f.addEvenWhilePreparing === !0) {
        var K = f.placeholderProps || {},
          Q = babelHelpers.extends({}, K, U),
          X = function (t) {
            return (
              (H = t),
              v({ baseProps: U, chat: i, options: f, prep: S })
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
          ? f.isNewsletterStatus === !0
            ? (j = r("JSResourceForInteraction")(
                "WAWebNewsletterSendStatusAction",
              )
                .__setRef("WAWebMediaPrepSendToChat")
                .load()
                .then(function (e) {
                  return e.sendNewsletterStatusMediaMsgAction(
                    Q,
                    X,
                    f.statusPostFunnelContext,
                  );
                }))
            : (j = g.load().then(function (e) {
                return e.sendNewsletterMediaMsg(i, Q, X);
              }))
          : i.id.isStatus()
            ? (j = h.load().then(function (e) {
                return e.sendStatusMediaMsgAction({
                  beforeSend: X,
                  funnelContext: f.statusPostFunnelContext,
                  mediaMsgData: Q,
                });
              }))
            : (j = o("WAWebSendMsgChatAction").addAndSendMsgToChat(i, Q, X, {
                pathfinderAccountToken: L,
              })[1]);
      } else {
        var Y = v({ baseProps: U, chat: i, options: f, prep: S }).then(
          function (e) {
            var t = f.useBasePropsType === !0 ? U.type : e.type;
            return babelHelpers.extends({}, U, e, { type: t });
          },
        );
        if (
          o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
          o("WAWebChatGetters").getIsNewsletter(i)
        )
          if (f.isNewsletterStatus === !0) {
            var J = await Y;
            j = r("JSResourceForInteraction")("WAWebNewsletterSendStatusAction")
              .__setRef("WAWebMediaPrepSendToChat")
              .load()
              .then(function (e) {
                return e.sendNewsletterStatusMediaMsgAction(
                  J,
                  z,
                  f.statusPostFunnelContext,
                );
              });
          } else
            j = g.load().then(async function (e) {
              return e.sendNewsletterMediaMsg(i, await Y, z);
            });
        else
          i.id.isStatus()
            ? (j = h.load().then(async function (e) {
                return e.sendStatusMediaMsgAction({
                  beforeSend: z,
                  funnelContext: f.statusPostFunnelContext,
                  mediaMsgData: await Y,
                });
              }))
            : U.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE
              ? (j = o("WAWebSendMsgChatAction").addAndSendMsgToChat(
                  i,
                  await Y,
                  z,
                  { pathfinderAccountToken: L },
                )[1])
              : (j = o("WAWebSendMsgChatAction").addAndSendMsgToChat(i, Y, z, {
                  pathfinderAccountToken: L,
                })[1]);
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
              H.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER &&
                H.isAvatar !== !0 &&
                o(
                  "WAWebRecentStickerCollectionMd",
                ).RecentStickerCollectionMd.addStickerWithMediaData(H),
              {
                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                  .OK,
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
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
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
            G === o("WAWebMediaMmsV4Upload").UploadMediaResultKind.CANCELLATION
          ) {
            var l;
            return (
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
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
                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                  .ERROR_CANCELLED,
              }
            );
          }
          if (
            (o("WALogger").WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
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
                  messageSendResult: o("WAWebMediaPrepHelpers").errorUpload(H),
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
          return G === o("WAWebMediaMmsV4Upload").UploadMediaResultKind.ERROR
            ? {
                messageSendResult: o("WAWebMediaPrepHelpers").errorUpload(H),
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
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "Sticker:sendToChat failed with unknown error",
                        ])),
                    )
                    .sendLogs("sticker-send-fail-unknown-expression-panels"),
                o("WAWebCoreActionsODS").logMsgSendError(),
                {
                  messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                    .ERROR_UNKNOWN,
                });
        });
    }
    function R(e, t) {
      try {
        e == null || e(t);
      } catch (e) {
        o("WALogger")
          .WARN(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "Media:sendToChat onMsgKeyCreated failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("media-send-on-msg-key-created-failed");
      }
    }
    l.default = S;
  },
  98,
);
