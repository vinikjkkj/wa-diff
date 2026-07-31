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
      v = (function () {
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
            return o("WAPromiseCallSync").promiseCallSync(L, null, {
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
      S = function (t) {
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
          R(a, r)
        );
      };
    function R(e, t) {
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
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                var v;
                o("WALogger")
                  .ERROR(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "sendMediaMsgToChat: chat ",
                        " not in DB. lid: ",
                        "",
                      ])),
                    i.id.toLogString(),
                    (v = i.accountLid) == null ? void 0 : v.toLogString(),
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
          var R = s.caption,
            L = s.footer,
            E = s.quotedMsg ? s.quotedMsg.msgContextInfo(i.id) : {},
            k = (t = s.productMsgOptions) != null ? t : {},
            I = o("WAWebChatEphemerality").isEphemeralSettingOn(i)
              ? o("WAWebChatEphemerality").getEphemeralSetting(i)
              : void 0,
            T = o("WAWebChatEphemerality").getEphemeralSettingTimestamp(i),
            D = o("WAWebChatEphemerality").getDisappearingModeInitiator(i),
            x = o("WAWebChatEphemerality").getAfterReadDurationForChat(i),
            $ =
              o("WAWebSpoilerFormatRegex").hasSpoilerMarkup(
                R != null ? R : null,
              ) &&
              o("WAWebABProps").getABPropConfigValue(
                "is_spoiler_rich_format_sender_enabled",
              ),
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
              caption: R,
              footer: L,
              quotedMsg: E.quotedMsg,
              quotedParticipant: E.quotedParticipant,
              quotedStanzaID: E.quotedStanzaID,
              quotedRemoteJid: E.quotedRemoteJid,
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
              ephemeralDuration: I,
              ephemeralSettingTimestamp: T,
              disappearingModeInitiator: D,
              afterReadDuration: x,
              isSpoiler: $,
              messageSecret: P,
              botPersonaId: s.botPersonaId,
              aiMediaCollectionInfo: s.aiMediaCollectionInfo,
              botMetricsMetadata: s.botMetricsMetadata,
              aiThreadInfo: s.aiThreadInfo,
              isAvatar: s.isAvatar,
              viewMode: s.viewMode,
              parentMsgKey: s.parentMsgKey,
              associationType: s.associationType,
              isQuestion: s.isQuestion,
              questionReplyQuotedMessage: s.questionReplyQuotedMessage,
              interactiveAnnotations: s.interactiveAnnotations,
              threadIds: s.threadId != null ? [s.threadId] : void 0,
              statusAttributions: s.statusAttributions,
              isScheduledMsg: s.isScheduledMsg,
              scheduledTimestampS: s.scheduledTimestampS,
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
                var d = o("WAWebABProps").getABPropConfigValue(
                    "wa_web_media_upload_retry_retries_count",
                  ),
                  m =
                    d > 0
                      ? yield o("WABackoffDelay").backoff(
                          {
                            delay: function () {
                              return c();
                            },
                            signal: C,
                            retries: d,
                          },
                          (function () {
                            var e = n(
                              "asyncToGeneratorRuntime",
                            ).asyncToGenerator(function* (e, t) {
                              var n,
                                r,
                                i =
                                  (n = a == null ? void 0 : a.loadedSize) !=
                                  null
                                    ? n
                                    : 0,
                                l = yield u(),
                                s =
                                  (r = a == null ? void 0 : a.loadedSize) !=
                                  null
                                    ? r
                                    : 0,
                                c = s > i;
                              return !l.mediaResult.mediaEntry &&
                                l.mediaResult.kind ===
                                  o("WAWebMediaMmsV4Upload")
                                    .UploadMediaResultKind.ERROR &&
                                (a == null ? void 0 : a.uploadStage) ===
                                  o("WAWebMediaTypes").UploadStage
                                    .NEED_UPLOAD &&
                                c
                                ? (t < d &&
                                    (a == null ||
                                      a.consolidate({
                                        uploadStage:
                                          o("WAWebMediaTypes").UploadStage
                                            .UPLOADING,
                                      })),
                                  e(b))
                                : l;
                            });
                            return function (t, n) {
                              return e.apply(this, arguments);
                            };
                          })(),
                        )
                      : yield u(),
                  p = m.body,
                  _ = m.mediaResult,
                  f = _.kind,
                  g = _.mediaEntry,
                  h = m.mmsThumbnailData;
                if (((B = f), !g))
                  throw r("err")("upload failed: media entry was not created");
                return (
                  yield r("WAWebMediaUpdateMsg")(
                    O,
                    babelHelpers.extends(
                      {
                        aiProvenance: t,
                        deprecatedMms3Url: g.deprecatedMms3Url,
                        directPath: g.directPath,
                        mediaKey: g.getMediaKey(),
                        mediaKeyTimestamp: g.getMediaKeyTimestamp(),
                        filehash: r("nullthrows")(a).filehash,
                        encFilehash: g.getEncfilehash(),
                        size: r("nullthrows")(a).size,
                        streamingSidecar: g.sidecar,
                        firstFrameSidecar: g.firstFrameSidecar,
                        body: p,
                        stickerSentTs: o("WATimeUtils").unixTimeMs(),
                        mediaHandle:
                          g instanceof
                          o("WAWebMediaEntry").UnencryptedMediaEntry
                            ? g.handle
                            : null,
                        metadataUrl:
                          g instanceof
                            o("WAWebMediaEntry").UnencryptedMediaEntry &&
                          g.metadataUrl != null &&
                          o(
                            "WAWebChannelVideoServerTranscodeGating",
                          ).isChannelVideoServerTranscodeUploadEnabled()
                            ? g.metadataUrl
                            : null,
                      },
                      h,
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
                  S({ baseProps: A, chat: i, options: s, prep: u })
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
                      return e.sendNewsletterStatusMediaMsgAction(
                        H,
                        G,
                        s.statusPostFunnelContext,
                      );
                    }))
                : (U = o("WAWebNewsletterSendMsgAction").sendNewsletterMediaMsg(
                    i,
                    H,
                    G,
                  ))
              : i.id.isStatus()
                ? (U = o("WAWebSendStatusMsgAction").sendStatusMediaMsgAction({
                    beforeSend: G,
                    funnelContext: s.statusPostFunnelContext,
                    mediaMsgData: H,
                  }))
                : (U = o("WAWebSendMsgChatAction").addAndSendMsgToChat(
                    i,
                    H,
                    G,
                  )[1]);
          } else {
            var z = S({ baseProps: A, chat: i, options: s, prep: u }).then(
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
                    return e.sendNewsletterStatusMediaMsgAction(
                      j,
                      W,
                      s.statusPostFunnelContext,
                    );
                  });
              } else
                U = o("WAWebNewsletterSendMsgAction").sendNewsletterMediaMsg(
                  i,
                  yield z,
                  W,
                );
            else
              i.id.isStatus()
                ? (U = o("WAWebSendStatusMsgAction").sendStatusMediaMsgAction({
                    beforeSend: W,
                    funnelContext: s.statusPostFunnelContext,
                    mediaMsgData: yield z,
                  }))
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
                    msg: O,
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
                B ===
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
                  ? O != null
                    ? babelHelpers.extends({}, r, { msg: O })
                    : r
                  : (O &&
                      o("WAWebMmsMediaTypes").getMsgMediaType(O) ===
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
        E.apply(this, arguments)
      );
    }
    ((l.MediaPrep = v), (l.getMediaPropsNew = R), (l.sendMediaMsgToChat = L));
  },
  98,
);
