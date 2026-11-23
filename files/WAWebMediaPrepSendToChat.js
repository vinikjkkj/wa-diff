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
      try {
        if (!i.id.isStatus()) {
          var L = await o("WAWebSchemaChat")
            .getChatTable()
            .get(i.id.toString());
          if (L == null) {
            var E;
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
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
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
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
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "sendMediaMsgToChat: failed to check if chat exists",
            ])),
        );
      }
      var k = f.caption,
        I = f.footer,
        T = f.quotedMsg ? f.quotedMsg.msgContextInfo(i.id) : {},
        D = (n = f.productMsgOptions) != null ? n : {},
        x = o("WAWebChatEphemerality").getAfterReadEnvelopeForChat(i),
        $ = x.afterReadDuration,
        P = x.ephemeralDuration,
        N = o("WAWebChatEphemerality").isEphemeralSettingOn(i) ? P : void 0,
        M = o("WAWebChatEphemerality").getEphemeralSettingTimestamp(i),
        w = o("WAWebChatEphemerality").getDisappearingModeInitiator(i),
        A =
          o("WAWebSpoilerFormatRegex").hasSpoilerMarkup(k != null ? k : null) &&
          o("WAWebSpoilerGating").isSpoilerSenderEnabledForDestination(
            i.id.isStatus(),
            f.isNewsletterStatus === !0,
          ),
        F,
        O = !1;
      i.isCAGAdmin() && (O = !0);
      var B = (a = f.type) != null ? a : S.baseType;
      o("WAWebMessagingGatingUtils").isReportingTokenSendingEnabled() &&
        o(
          "WAWebMessagePluginGenerateReportingTokenContent",
        ).isMsgTypeReportingTokenCompatible(B) &&
        (O = !0);
      var W =
        i.id.isBot() &&
        (o("WAWebBotBaseGating").isBotEnabled() || i.id.isSupportAgentBot());
      (W && (O = !0),
        O && (F = self.crypto.getRandomValues(new Uint8Array(32))));
      var q = babelHelpers.extends(
        {},
        await o("WAWebMsgDataUtils").genOutgoingMsgData(i, B),
        {
          type: B,
          caption: k,
          footer: I,
          quotedMsg: T.quotedMsg,
          quotedParticipant: T.quotedParticipant,
          quotedStanzaID: T.quotedStanzaID,
          quotedRemoteJid: T.quotedRemoteJid,
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
          ephemeralDuration: N,
          ephemeralSettingTimestamp: M,
          disappearingModeInitiator: w,
          afterReadDuration: $,
          isSpoiler: A,
          messageSecret: F,
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
        D,
      );
      if (f.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK) {
        var U;
        ((q.description = f.description),
          (q.isCaptionByUser = !!f.caption),
          (q.thumbnailSha256 = f.thumbnailSha256),
          (q.stickers = f.stickers),
          (q.stickerPackPublisher = f.publisher),
          (q.size = (U = f.fileLength) != null ? U : 0),
          (q.stickerPackId = f.stickerPackId),
          (q.thumbnailDirectPath = f.thumbnailDirectPath),
          (q.thumbnailEncSha256 = f.thumbnailEncSha256),
          (q.trayIconFileName = f.trayIconFileName),
          (q.stickerPackSize = f.stickerPackSize));
      }
      (f.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT &&
        f.caption &&
        (q.isCaptionByUser = !0),
        f.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
          ((q.nativeFlowInteractiveMsg = f.nativeFlowInteractiveMsg),
          (q.nativeFlowName = f.nativeFlowName),
          (q.interactiveHeader = f.interactiveHeader),
          (q.interactiveType = f.interactiveType),
          (q.interactivePayload = f.interactivePayload)),
        f.isWamoSub === !0 && (q.isWamoSub = !0),
        R(f.onMsgKeyCreated, q.id));
      var V, H;
      async function G(e) {
        V = e;
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
        if (((H = _), !g))
          throw r("err")("upload failed: media entry was not created");
        return (
          await r("WAWebMediaUpdateMsg")(
            V,
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
          V
        );
      }
      var z;
      if (f.addEvenWhilePreparing === !0) {
        var j = f.placeholderProps || {},
          K = babelHelpers.extends({}, j, q),
          Q = function (t) {
            return (
              (V = t),
              v({ baseProps: q, chat: i, options: f, prep: S })
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
          ? f.isNewsletterStatus === !0
            ? (z = r("JSResourceForInteraction")(
                "WAWebNewsletterSendStatusAction",
              )
                .__setRef("WAWebMediaPrepSendToChat")
                .load()
                .then(function (e) {
                  return e.sendNewsletterStatusMediaMsgAction(
                    K,
                    Q,
                    f.statusPostFunnelContext,
                  );
                }))
            : (z = g.load().then(function (e) {
                return e.sendNewsletterMediaMsg(i, K, Q);
              }))
          : i.id.isStatus()
            ? (z = h.load().then(function (e) {
                return e.sendStatusMediaMsgAction({
                  beforeSend: Q,
                  funnelContext: f.statusPostFunnelContext,
                  mediaMsgData: K,
                });
              }))
            : (z = o("WAWebSendMsgChatAction").addAndSendMsgToChat(i, K, Q)[1]);
      } else {
        var X = v({ baseProps: q, chat: i, options: f, prep: S }).then(
          function (e) {
            var t = f.useBasePropsType === !0 ? q.type : e.type;
            return babelHelpers.extends({}, q, e, { type: t });
          },
        );
        if (
          o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
          o("WAWebChatGetters").getIsNewsletter(i)
        )
          if (f.isNewsletterStatus === !0) {
            var Y = await X;
            z = r("JSResourceForInteraction")("WAWebNewsletterSendStatusAction")
              .__setRef("WAWebMediaPrepSendToChat")
              .load()
              .then(function (e) {
                return e.sendNewsletterStatusMediaMsgAction(
                  Y,
                  G,
                  f.statusPostFunnelContext,
                );
              });
          } else
            z = g.load().then(async function (e) {
              return e.sendNewsletterMediaMsg(i, await X, G);
            });
        else
          i.id.isStatus()
            ? (z = h.load().then(async function (e) {
                return e.sendStatusMediaMsgAction({
                  beforeSend: G,
                  funnelContext: f.statusPostFunnelContext,
                  mediaMsgData: await X,
                });
              }))
            : q.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE
              ? (z = o("WAWebSendMsgChatAction").addAndSendMsgToChat(
                  i,
                  await X,
                  G,
                )[1])
              : (z = o("WAWebSendMsgChatAction").addAndSendMsgToChat(
                  i,
                  X,
                  G,
                )[1]);
      }
      return z
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
                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                  .OK,
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
            H === o("WAWebMediaMmsV4Upload").UploadMediaResultKind.CANCELLATION
          ) {
            var l;
            return (
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
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
                  messageSendResult: o("WAWebMediaPrepHelpers").errorUpload(V),
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
          return H === o("WAWebMediaMmsV4Upload").UploadMediaResultKind.ERROR
            ? {
                messageSendResult: o("WAWebMediaPrepHelpers").errorUpload(V),
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
