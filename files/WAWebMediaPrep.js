__d(
  "WAWebMediaPrep",
  [
    "JSResourceForInteraction",
    "WABackoffDelay",
    "WALogger",
    "WAPromiseBackoffs",
    "WAPromiseCallSync",
    "WATimeUtils",
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
    "WAWebMediaGatingUtils",
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
    "WAWebRecentStickerCollectionMd",
    "WAWebSchemaChat",
    "WAWebSendMsgChatAction",
    "WAWebSendMsgResultAction",
    "WAWebSendStatusMsgAction",
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
            $,
            P = !1;
          i.isCAGAdmin() && (P = !0);
          var N = (a = s.type) != null ? a : u.baseType;
          o("WAWebMessagingGatingUtils").isReportingTokenSendingEnabled() &&
            o(
              "WAWebMessagePluginGenerateReportingTokenContent",
            ).isMsgTypeReportingTokenCompatible(N) &&
            (P = !0);
          var M = o("WAWebBotBaseGating").isBotEnabled() && i.id.isBot();
          (M && (P = !0),
            P && ($ = self.crypto.getRandomValues(new Uint8Array(32))));
          var w = babelHelpers.extends(
            {},
            yield o("WAWebMsgDataUtils").genOutgoingMsgData(i, N),
            {
              type: N,
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
              messageSecret: $,
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
            var A;
            ((w.description = s.description),
              (w.isCaptionByUser = !!s.caption),
              (w.thumbnailSha256 = s.thumbnailSha256),
              (w.stickers = s.stickers),
              (w.stickerPackPublisher = s.publisher),
              (w.size = (A = s.fileLength) != null ? A : 0),
              (w.stickerPackId = s.stickerPackId),
              (w.thumbnailDirectPath = s.thumbnailDirectPath),
              (w.thumbnailEncSha256 = s.thumbnailEncSha256),
              (w.trayIconFileName = s.trayIconFileName),
              (w.stickerPackSize = s.stickerPackSize));
          }
          (s.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT &&
            s.caption &&
            (w.isCaptionByUser = !0),
            s.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
              ((w.nativeFlowInteractiveMsg = s.nativeFlowInteractiveMsg),
              (w.nativeFlowName = s.nativeFlowName),
              (w.interactiveHeader = s.interactiveHeader),
              (w.interactiveType = s.interactiveType),
              (w.interactivePayload = s.interactivePayload)),
            s.isWamoSub === !0 && (w.isWamoSub = !0));
          var F, O;
          function B(e) {
            return W.apply(this, arguments);
          }
          function W() {
            return (
              (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
                F = e;
                var t = e.mediaObject;
                ((s.earlyUpload = l),
                  (s.isMediaCryptoExpectedForChat = o(
                    "WAWebMediaCryptoEligibilityUtils",
                  ).isMediaCryptoExpectedForChat(i)),
                  (s.uploadOriginForChat = r(
                    "WAWebMediaGetUploadOriginForChat",
                  )(i)));
                var a = function () {
                    return o(
                      "WAWebMediaUploadMediaWithPrep",
                    ).uploadMediaWithPrep(e, s);
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
                            signal: C,
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
                                  e(b))
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
                if (((O = _), !f))
                  throw r("err")("upload failed: media entry was not created");
                return (
                  yield r("WAWebMediaUpdateMsg")(
                    F,
                    babelHelpers.extends(
                      {
                        deprecatedMms3Url: f.deprecatedMms3Url,
                        directPath: f.directPath,
                        mediaKey: f.getMediaKey(),
                        mediaKeyTimestamp: f.getMediaKeyTimestamp(),
                        filehash: r("nullthrows")(t).filehash,
                        encFilehash: f.getEncfilehash(),
                        size: r("nullthrows")(t).size,
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
                  F
                );
              })),
              W.apply(this, arguments)
            );
          }
          var q;
          if (s.addEvenWhilePreparing === !0) {
            var U = s.placeholderProps || {},
              V = babelHelpers.extends({}, U, w),
              H = function (t) {
                return (
                  (F = t),
                  S({ baseProps: w, chat: i, options: s, prep: u })
                    .then(function (e) {
                      return r("WAWebMediaUpdateMsg")(F, e);
                    })
                    .then(function () {
                      return B(F);
                    })
                );
              };
            o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
            o("WAWebChatGetters").getIsNewsletter(i)
              ? s.isNewsletterStatus === !0
                ? (q = r("JSResourceForInteraction")(
                    "WAWebNewsletterSendStatusAction",
                  )
                    .__setRef("WAWebMediaPrep")
                    .load()
                    .then(function (e) {
                      return e.sendNewsletterStatusMediaMsgAction(
                        V,
                        H,
                        s.statusPostFunnelContext,
                      );
                    }))
                : (q = o("WAWebNewsletterSendMsgAction").sendNewsletterMediaMsg(
                    i,
                    V,
                    H,
                  ))
              : i.id.isStatus()
                ? (q = o("WAWebSendStatusMsgAction").sendStatusMediaMsgAction({
                    beforeSend: H,
                    funnelContext: s.statusPostFunnelContext,
                    mediaMsgData: V,
                  }))
                : (q = o("WAWebSendMsgChatAction").addAndSendMsgToChat(
                    i,
                    V,
                    H,
                  )[1]);
          } else {
            var G = S({ baseProps: w, chat: i, options: s, prep: u }).then(
              function (e) {
                var t = s.useBasePropsType === !0 ? w.type : e.type;
                return babelHelpers.extends({}, w, e, { type: t });
              },
            );
            if (
              o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
              o("WAWebChatGetters").getIsNewsletter(i)
            )
              if (s.isNewsletterStatus === !0) {
                var z = yield G;
                q = r("JSResourceForInteraction")(
                  "WAWebNewsletterSendStatusAction",
                )
                  .__setRef("WAWebMediaPrep")
                  .load()
                  .then(function (e) {
                    return e.sendNewsletterStatusMediaMsgAction(
                      z,
                      B,
                      s.statusPostFunnelContext,
                    );
                  });
              } else
                q = o("WAWebNewsletterSendMsgAction").sendNewsletterMediaMsg(
                  i,
                  yield G,
                  B,
                );
            else
              i.id.isStatus()
                ? (q = o("WAWebSendStatusMsgAction").sendStatusMediaMsgAction({
                    beforeSend: B,
                    funnelContext: s.statusPostFunnelContext,
                    mediaMsgData: yield G,
                  }))
                : w.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE
                  ? (q = o("WAWebSendMsgChatAction").addAndSendMsgToChat(
                      i,
                      yield G,
                      B,
                    )[1])
                  : (q = o("WAWebSendMsgChatAction").addAndSendMsgToChat(
                      i,
                      G,
                      B,
                    )[1]);
          }
          return q
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
                  F.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER &&
                    F.isAvatar !== !0 &&
                    o(
                      "WAWebRecentStickerCollectionMd",
                    ).RecentStickerCollectionMd.addStickerWithMediaData(F),
                  {
                    messageSendResult: o("WAWebSendMsgResultAction")
                      .SendMsgResult.OK,
                    msg: F,
                  }
                );
              F && (F.ack = o("WAWebAck").ACK.FAILED);
              var a =
                (t = F) == null || (t = t.mediaObject) == null
                  ? void 0
                  : t.uploadStage;
              if (
                F &&
                o("WAWebMmsMediaTypes").getMsgMediaType(F) ===
                  o("WAWebMediaTypes").OUTWARD_TYPES.STICKER
              ) {
                var i = a || "undefined";
                O === o("WAWebMediaMmsV4Upload").UploadMediaResultKind.ERROR &&
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
                O ===
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
                  (l = F.wamMessageSendReporter) == null ||
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
                  O,
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
                        F,
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
              return O ===
                o("WAWebMediaMmsV4Upload").UploadMediaResultKind.ERROR
                ? {
                    messageSendResult: o("WAWebMediaPrepHelpers").errorUpload(
                      F,
                    ),
                  }
                : r != null
                  ? F != null
                    ? babelHelpers.extends({}, r, { msg: F })
                    : r
                  : (F &&
                      o("WAWebMmsMediaTypes").getMsgMediaType(F) ===
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
