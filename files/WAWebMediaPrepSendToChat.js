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
    async function v(e) {
      var t,
        n = e.isNewsletterMsg === !0 || e.isNewsletterStatus === !0;
      if (e.provenanceDetectionPromise == null || !n) return e.aiProvenance;
      var r = await e.provenanceDetectionPromise.catch(
        o("WAWebNullFunc").returnNull,
      );
      return (t = r == null ? void 0 : r.provenance) != null ? t : null;
    }
    function S(e) {
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
    async function R(t) {
      var n,
        a,
        i = t.chat,
        l = t.earlyUpload,
        f = t.options,
        R = t.prep;
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "Media:sendToChat chat ",
            "",
          ])),
        i.id.toLogString(),
      );
      var E = o(
        "WAWebPathfinderAccountToken",
      ).resolvePathfinderCaptureAccountToken(f.pathfinderAccountToken);
      try {
        if (!i.id.isStatus()) {
          var k = await o("WAWebSchemaChat")
            .getChatTable()
            .get(i.id.toString());
          if (k == null) {
            var I;
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "sendMediaMsgToChat: chat ",
                    " not in DB. lid: ",
                    "",
                  ])),
                i.id.toLogString(),
                (I = i.accountLid) == null ? void 0 : I.toLogString(),
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
              k.accountLid != null,
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
      var T = f.caption,
        D = f.footer,
        x = f.quotedMsg ? f.quotedMsg.msgContextInfo(i.id) : {},
        $ = (n = f.productMsgOptions) != null ? n : {},
        P = o("WAWebChatEphemerality").getAfterReadEnvelopeForChat(i),
        N = P.afterReadDuration,
        M = P.ephemeralDuration,
        w = o("WAWebChatEphemerality").isEphemeralSettingOn(i) ? M : void 0,
        A = o("WAWebChatEphemerality").getEphemeralSettingTimestamp(i),
        F = o("WAWebChatEphemerality").getDisappearingModeInitiator(i),
        O =
          o("WAWebSpoilerFormatRegex").hasSpoilerMarkup(T != null ? T : null) &&
          o("WAWebSpoilerGating").isSpoilerSenderEnabledForDestination(
            i.id.isStatus(),
            f.isNewsletterStatus === !0,
          ),
        B,
        W = !1;
      i.isCAGAdmin() && (W = !0);
      var q = (a = f.type) != null ? a : R.baseType;
      o("WAWebMessagingGatingUtils").isReportingTokenSendingEnabled() &&
        o(
          "WAWebMessagePluginGenerateReportingTokenContent",
        ).isMsgTypeReportingTokenCompatible(q) &&
        (W = !0);
      var U =
        i.id.isBot() &&
        (o("WAWebBotBaseGating").isBotEnabled() || i.id.isSupportAgentBot());
      (U && (W = !0),
        W && (B = self.crypto.getRandomValues(new Uint8Array(32))));
      var V = babelHelpers.extends(
        {},
        await o("WAWebMsgDataUtils").genOutgoingMsgData(i, q),
        {
          type: q,
          caption: T,
          footer: D,
          quotedMsg: x.quotedMsg,
          quotedParticipant: x.quotedParticipant,
          quotedStanzaID: x.quotedStanzaID,
          quotedRemoteJid: x.quotedRemoteJid,
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
          ephemeralDuration: w,
          ephemeralSettingTimestamp: A,
          disappearingModeInitiator: F,
          afterReadDuration: N,
          isSpoiler: O,
          messageSecret: B,
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
        $,
      );
      if (f.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK) {
        var H;
        ((V.description = f.description),
          (V.isCaptionByUser = !!f.caption),
          (V.thumbnailSha256 = f.thumbnailSha256),
          (V.stickers = f.stickers),
          (V.stickerPackPublisher = f.publisher),
          (V.size = (H = f.fileLength) != null ? H : 0),
          (V.stickerPackId = f.stickerPackId),
          (V.thumbnailDirectPath = f.thumbnailDirectPath),
          (V.thumbnailEncSha256 = f.thumbnailEncSha256),
          (V.trayIconFileName = f.trayIconFileName),
          (V.stickerPackSize = f.stickerPackSize));
      }
      (f.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT &&
        f.caption &&
        (V.isCaptionByUser = !0),
        f.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
          ((V.nativeFlowInteractiveMsg = f.nativeFlowInteractiveMsg),
          (V.nativeFlowName = f.nativeFlowName),
          (V.interactiveHeader = f.interactiveHeader),
          (V.interactiveType = f.interactiveType),
          (V.interactivePayload = f.interactivePayload)),
        f.isWamoSub === !0 && (V.isWamoSub = !0),
        L(f.onMsgKeyCreated, V.id));
      var G, z;
      async function j(e) {
        G = e;
        var t = await v(f),
          n = e.mediaObject;
        ((f.earlyUpload = l),
          (f.isMediaCryptoExpectedForChat = o(
            "WAWebMediaCryptoEligibilityUtils",
          ).isMediaCryptoExpectedForChat(i)),
          (f.uploadOriginForChat = r("WAWebMediaGetUploadOriginForChat")(i)));
        var a = function () {
            return o("WAWebMediaUploadMediaWithPrep").uploadMediaWithPrep(e, f);
          },
          s = o("WAPromiseBackoffs").createTimer({
            algo: { type: "exponential", first: 1e3, base: 2 },
            max: 3e3,
            jitter: 0.5,
          });
        s();
        var u = await o("WABackoffDelay").backoff(
            {
              delay: function () {
                return s();
              },
              signal: y,
              retries: b,
            },
            async function (e, t) {
              var r,
                i,
                l = (r = n == null ? void 0 : n.loadedSize) != null ? r : 0,
                s = await a(),
                u = (i = n == null ? void 0 : n.loadedSize) != null ? i : 0,
                c = u > l;
              return !s.mediaResult.mediaEntry &&
                s.mediaResult.kind ===
                  o("WAWebMediaMmsV4Upload").UploadMediaResultKind.ERROR &&
                (n == null ? void 0 : n.uploadStage) ===
                  o("WAWebMediaTypes").UploadStage.NEED_UPLOAD &&
                c
                ? (t < b &&
                    (n == null ||
                      n.consolidate({
                        uploadStage: o("WAWebMediaTypes").UploadStage.UPLOADING,
                      })),
                  e(C))
                : s;
            },
          ),
          c = u.body,
          d = u.mediaResult,
          m = d.kind,
          p = d.mediaEntry,
          _ = u.mmsThumbnailData;
        if (((z = m), !p))
          throw r("err")("upload failed: media entry was not created");
        return (
          await r("WAWebMediaUpdateMsg")(
            G,
            babelHelpers.extends(
              {
                aiProvenance: t,
                deprecatedMms3Url: p.deprecatedMms3Url,
                directPath: p.directPath,
                mediaKey: p.getMediaKey(),
                mediaKeyTimestamp: p.getMediaKeyTimestamp(),
                filehash: r("nullthrows")(n).filehash,
                encFilehash: p.getEncfilehash(),
                size: r("nullthrows")(n).size,
                streamingSidecar: p.sidecar,
                firstFrameSidecar: p.firstFrameSidecar,
                body: c,
                stickerSentTs: o("WATimeUtils").unixTimeMs(),
                mediaHandle:
                  p instanceof o("WAWebMediaEntry").UnencryptedMediaEntry
                    ? p.handle
                    : null,
                metadataUrl:
                  p instanceof o("WAWebMediaEntry").UnencryptedMediaEntry &&
                  p.metadataUrl != null &&
                  o(
                    "WAWebChannelVideoServerTranscodeGating",
                  ).isChannelVideoServerTranscodeUploadEnabled()
                    ? p.metadataUrl
                    : null,
                dashManifestUrl:
                  p instanceof o("WAWebMediaEntry").UnencryptedMediaEntry &&
                  p.dashManifestUrl != null &&
                  o(
                    "WAWebChannelVideoServerTranscodeGating",
                  ).isChannelVideoServerTranscodeUploadEnabled()
                    ? p.dashManifestUrl
                    : void 0,
              },
              _,
            ),
          ),
          G
        );
      }
      var K;
      if (f.addEvenWhilePreparing === !0) {
        var Q = f.placeholderProps || {},
          X = babelHelpers.extends({}, Q, V),
          Y = function (t) {
            return (
              (G = t),
              S({ baseProps: V, chat: i, options: f, prep: R })
                .then(function (e) {
                  return r("WAWebMediaUpdateMsg")(G, e);
                })
                .then(function () {
                  return j(G);
                })
            );
          };
        o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
        o("WAWebChatGetters").getIsNewsletter(i)
          ? f.isNewsletterStatus === !0
            ? (K = r("JSResourceForInteraction")(
                "WAWebNewsletterSendStatusAction",
              )
                .__setRef("WAWebMediaPrepSendToChat")
                .load()
                .then(function (e) {
                  return e.sendNewsletterStatusMediaMsgAction(
                    X,
                    Y,
                    f.statusPostFunnelContext,
                  );
                }))
            : (K = g.load().then(function (e) {
                return e.sendNewsletterMediaMsg(i, X, Y);
              }))
          : i.id.isStatus()
            ? (K = h.load().then(function (e) {
                return e.sendStatusMediaMsgAction({
                  beforeSend: Y,
                  funnelContext: f.statusPostFunnelContext,
                  mediaMsgData: X,
                });
              }))
            : (K = o("WAWebSendMsgChatAction").addAndSendMsgToChat(i, X, Y, {
                pathfinderAccountToken: E,
              })[1]);
      } else {
        var J = S({ baseProps: V, chat: i, options: f, prep: R }).then(
          function (e) {
            var t = f.useBasePropsType === !0 ? V.type : e.type;
            return babelHelpers.extends({}, V, e, { type: t });
          },
        );
        if (
          o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
          o("WAWebChatGetters").getIsNewsletter(i)
        )
          if (f.isNewsletterStatus === !0) {
            var Z = await J;
            K = r("JSResourceForInteraction")("WAWebNewsletterSendStatusAction")
              .__setRef("WAWebMediaPrepSendToChat")
              .load()
              .then(function (e) {
                return e.sendNewsletterStatusMediaMsgAction(
                  Z,
                  j,
                  f.statusPostFunnelContext,
                );
              });
          } else
            K = g.load().then(async function (e) {
              return e.sendNewsletterMediaMsg(i, await J, j);
            });
        else
          i.id.isStatus()
            ? (K = h.load().then(async function (e) {
                return e.sendStatusMediaMsgAction({
                  beforeSend: j,
                  funnelContext: f.statusPostFunnelContext,
                  mediaMsgData: await J,
                });
              }))
            : V.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE
              ? (K = o("WAWebSendMsgChatAction").addAndSendMsgToChat(
                  i,
                  await J,
                  j,
                  { pathfinderAccountToken: E },
                )[1])
              : (K = o("WAWebSendMsgChatAction").addAndSendMsgToChat(i, J, j, {
                  pathfinderAccountToken: E,
                })[1]);
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
              G.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER &&
                G.isAvatar !== !0 &&
                o(
                  "WAWebRecentStickerCollectionMd",
                ).RecentStickerCollectionMd.addStickerWithMediaData(G),
              {
                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                  .OK,
                msg: G,
              }
            );
          G && (G.ack = o("WAWebAck").ACK.FAILED);
          var a =
            (t = G) == null || (t = t.mediaObject) == null
              ? void 0
              : t.uploadStage;
          if (
            G &&
            o("WAWebMmsMediaTypes").getMsgMediaType(G) ===
              o("WAWebMediaTypes").OUTWARD_TYPES.STICKER
          ) {
            var i = a || "undefined";
            z === o("WAWebMediaMmsV4Upload").UploadMediaResultKind.ERROR &&
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
            z === o("WAWebMediaMmsV4Upload").UploadMediaResultKind.CANCELLATION
          ) {
            var l;
            return (
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "Media:sendToChat canceled",
                  ])),
              ),
              (l = G.wamMessageSendReporter) == null ||
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
              z,
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
                  messageSendResult: o("WAWebMediaPrepHelpers").errorUpload(G),
                  msg: G,
                };
              case o("WAWebMediaTypes").UploadStage.ERROR_MISSING:
                return (
                  o("WAWebCoreActionsODS").logMsgSendError(),
                  o("WAWebCoreActionsODS").logMsgSendErrorUpload(),
                  {
                    messageSendResult: o("WAWebSendMsgResultAction")
                      .SendMsgResult.ERROR_EXPIRED,
                    msg: G,
                  }
                );
              default:
            }
          return z === o("WAWebMediaMmsV4Upload").UploadMediaResultKind.ERROR
            ? {
                messageSendResult: o("WAWebMediaPrepHelpers").errorUpload(G),
                msg: G,
              }
            : r != null
              ? G != null
                ? babelHelpers.extends({}, r, { msg: G })
                : r
              : (G &&
                  o("WAWebMmsMediaTypes").getMsgMediaType(G) ===
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
    function L(e, t) {
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
    l.default = R;
  },
  98,
);
