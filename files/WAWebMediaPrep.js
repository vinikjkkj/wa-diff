__d(
  "WAWebMediaPrep",
  [
    "invariant",
    "JSResourceForInteraction",
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
        var n = t.prototype;
        return (
          (n.sendToChat = function (t) {
            var e = t.chat,
              n = t.earlyUpload,
              r = t.options;
            return o("WAPromiseCallSync").promiseCallSync(T, null, {
              chat: e,
              earlyUpload: n,
              options: r,
              prep: this,
            });
          }),
          (n.waitForPrep = async function () {
            return (await this.$1, this.mediaData);
          }),
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
    async function I(e, t) {
      var n,
        a,
        i,
        l,
        u,
        c = e.mediaObject;
      (c ||
        o("WALogger")
          .ERROR(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "Assertion failed!",
              ])),
          )
          .sendLogs("media-fault: incorrect media object for created msg"),
        c || s(0, 56330));
      var d = o("WAWebMmsMediaTypes").getMsgMediaType(e),
        _,
        f = (n = t.canEnableFastForward) != null ? n : !0;
      f === !0 &&
        (_ = c.entries.getUploadEntry(t.isMediaCryptoExpectedForChat === !0));
      var g =
          _ instanceof o("WAWebMediaEntry").EncryptedMediaEntry
            ? { key: _.mediaKey, timestamp: _.mediaKeyTimestamp }
            : r("WAWebCryptoRandomMediaKey")(),
        h = c.contentInfo,
        y = h.fullPreviewData,
        C = h.fullPreviewSize,
        b = e.safe(),
        v = o("WAWebMediaPrepHelpers").shouldUploadThumbnail(b),
        S = o("WAWebABProps").getABPropConfigValue(
          "wa_web_enable_status_hq_thumbnail",
        ),
        R = !1,
        L = !1;
      S
        ? ((R =
            (!y ||
              y.size() >
                o("WAWebMediaConstants").MICRO_THUMBNAIL_MAX_FILE_SIZE_BYTES) &&
            v),
          (L = b.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK && v))
        : ((R = !y && v), (L = v));
      var E = !C && v,
        k = e.body;
      if ((R || E || L) && c.contentInfo.preview)
        try {
          var I = await o("WAWebImageUtils").base64ImageToCanvas(
              c.contentInfo.preview.url(),
            ),
            T = R
              ? o("WAWebABProps").getABPropConfigValue(
                  "web_pdf_thumbnail_size_in_bytes",
                )
              : o("WAWebMediaConstants").MICRO_THUMBNAIL_MAX_FILE_SIZE_BYTES,
            D = await o("WAWebCanvasUtils").generateMicroThumb(I, T, {
              mimetype: "image/jpeg",
              maxAttempts: 10,
            });
          ((y = c.contentInfo.preview),
            (C = { width: D.width, height: D.height }),
            (k = r("WAWebURLUtils").parseDataURL(D.dataUrl).data));
        } catch (e) {
          o("WALogger")
            .WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[media] microthumb generation failed, skipping: ",
                  "",
                ])),
              e,
            )
            .sendLogs("media-microthumb-generation-failed");
        }
      var x = y && C && v,
        $ =
          y && x === !0
            ? r("WAWebMediaUploadMmsThumbnail")({
                thumbnail: y,
                mediaKeyInfo: g,
                mediaType: r("WANullthrows")(
                  o("WAWebMediaPrepHelpers").getMediaTypeForThumbnails(b),
                ),
                uploadOrigin:
                  (a = t.uploadOriginForChat) != null
                    ? a
                    : o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE
                        .UNKNOWN,
                forwardedFromWeb: !!e.forwardedFromWeb,
                isViewOnce: !!e.isViewOnce,
              })
            : Promise.resolve(null),
        P = {
          mimetype: e.mimetype,
          canEnableFastForward: t.canEnableFastForward,
          mediaObject: c,
          mediaType: d,
          forwardedFromWeb: !!e.forwardedFromWeb,
          uploadOrigin:
            (i = t.uploadOriginForChat) != null
              ? i
              : o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE.UNKNOWN,
          isViewOnce: !!e.isViewOnce,
          earlyUpload: t.earlyUpload,
        },
        N =
          t.isMediaCryptoExpectedForChat === !0
            ? o("WAWebMediaMmsV4Upload").uploadMedia(
                babelHelpers.extends({}, P, { mediaKeyInfo: g }),
              )
            : o("WAWebMediaMmsV4Upload").uploadUnencryptedMedia(
                babelHelpers.extends({}, P, {
                  calculateToken: o("WAMediaCalculateFilehash")
                    .getRandomFilehash,
                }),
              ),
        M = c.filehash;
      o("WAWebMediaInMemoryKeyCache").shouldUseMediaKeyCache() &&
        M != null &&
        o("WAWebMediaInMemoryKeyCache").MediaKeyCache.put(M, g);
      var w = await Promise.all([N, $]),
        A = w[0],
        F = w[1];
      r("WAWebMediaGatingShouldClearUploadedBlobs")(d) &&
        c.clearBlob({ reset: !0 });
      var O = A.mediaEntry;
      if (!O)
        return { mediaResult: A, mmsThumbnailData: null, body: k, fbid: null };
      o("WAWebMediaInMemoryKeyCache").shouldUseMediaKeyCache() &&
        M != null &&
        o("WAWebMediaInMemoryKeyCache").MediaKeyCache.delete(M);
      var B =
          (l = o("WAWebMediaPrepHelpers").maybeGetThumbnailData({
            uploadThumbnailResult: F,
            mediaResultEntry: O,
            uploadEncryptedThumbnail: x,
            mediaObject: c,
            fullPreviewSize: C,
            mediaType: d,
          })) != null
            ? l
            : {},
        W =
          O instanceof o("WAWebMediaEntry").UnencryptedMediaEntry &&
          (u = O.fbid) != null
            ? u
            : null;
      return { mediaResult: A, mmsThumbnailData: B, body: k, fbid: W };
    }
    async function T(e) {
      var t,
        n,
        a = e.chat,
        i = e.earlyUpload,
        l = e.options,
        s = e.prep;
      o("WALogger").LOG(
        _ ||
          (_ = babelHelpers.taggedTemplateLiteralLoose([
            "Media:sendToChat chat ",
            "",
          ])),
        a.id.toLogString(),
      );
      try {
        if (!a.id.isStatus()) {
          var u = await o("WAWebSchemaChat")
            .getChatTable()
            .get(a.id.toString());
          if (u == null) {
            var c;
            o("WALogger")
              .ERROR(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "sendMediaMsgToChat: chat ",
                    " not in DB. lid: ",
                    "",
                  ])),
                a.id.toLogString(),
                (c = a.accountLid) == null ? void 0 : c.toLogString(),
              )
              .sendLogs("send-media-chat-not-found")
              .tags("missing-lid");
          } else
            o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "sendMediaMsgToChat: chat ",
                  " found in DB. has account lid: ",
                  "",
                ])),
              a.id.toLogString(),
              u.accountLid != null,
            );
        }
      } catch (e) {
        o("WALogger").ERROR(
          h ||
            (h = babelHelpers.taggedTemplateLiteralLoose([
              "sendMediaMsgToChat: failed to check if chat exists",
            ])),
        );
      }
      var d = l.caption,
        m = l.footer,
        p = l.quotedMsg ? l.quotedMsg.msgContextInfo(a.id) : {},
        L = (t = l.productMsgOptions) != null ? t : {},
        k = o("WAWebChatEphemerality").isEphemeralSettingOn(a)
          ? o("WAWebChatEphemerality").getEphemeralSetting(a)
          : void 0,
        T = o("WAWebChatEphemerality").getEphemeralSettingTimestamp(a),
        D = o("WAWebChatEphemerality").getDisappearingModeInitiator(a),
        x = o("WAWebChatEphemerality").getAfterReadDurationForChat(a),
        $,
        P = !1;
      a.isCAGAdmin() && (P = !0);
      var N = (n = l.type) != null ? n : s.baseType;
      o("WAWebMessagingGatingUtils").isReportingTokenSendingEnabled() &&
        o(
          "WAWebMessagePluginGenerateReportingTokenContent",
        ).isMsgTypeReportingTokenCompatible(N) &&
        (P = !0);
      var M = o("WAWebBotBaseGating").isBotEnabled() && a.id.isBot();
      (M && (P = !0),
        P && ($ = self.crypto.getRandomValues(new Uint8Array(32))));
      var w = babelHelpers.extends(
        {},
        await o("WAWebMsgDataUtils").genOutgoingMsgData(a, N),
        {
          type: N,
          caption: d,
          footer: m,
          quotedMsg: p.quotedMsg,
          quotedParticipant: p.quotedParticipant,
          quotedStanzaID: p.quotedStanzaID,
          quotedRemoteJid: p.quotedRemoteJid,
          mentionedJidList: l.mentionedJidList,
          groupMentions: l.groupMentions,
          isForwarded: l.isForwarded,
          forwardingScore: l.forwardingScore,
          forwardedNewsletterMessageInfo: l.forwardedNewsletterMessageInfo,
          forwardedAiBotMessageInfo: l.forwardedAiBotMessageInfo,
          multicast: l.multicast,
          forwardedFromWeb: l.forwardedFromWeb,
          ctwaContext: l.ctwaContext,
          ephemeralDuration: k,
          ephemeralSettingTimestamp: T,
          disappearingModeInitiator: D,
          afterReadDuration: x,
          messageSecret: $,
          botPersonaId: l.botPersonaId,
          aiMediaCollectionInfo: l.aiMediaCollectionInfo,
          botMetricsMetadata: l.botMetricsMetadata,
          aiThreadInfo: l.aiThreadInfo,
          isAvatar: l.isAvatar,
          viewMode: l.viewMode,
          parentMsgKey: l.parentMsgKey,
          associationType: l.associationType,
          isQuestion: l.isQuestion,
          questionReplyQuotedMessage: l.questionReplyQuotedMessage,
          interactiveAnnotations: l.interactiveAnnotations,
          threadIds: l.threadId != null ? [l.threadId] : void 0,
          statusAttributions: l.statusAttributions,
        },
        L,
      );
      if (l.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK) {
        var A;
        ((w.description = l.description),
          (w.isCaptionByUser = !!l.caption),
          (w.thumbnailSha256 = l.thumbnailSha256),
          (w.stickers = l.stickers),
          (w.stickerPackPublisher = l.publisher),
          (w.size = (A = l.fileLength) != null ? A : 0),
          (w.stickerPackId = l.stickerPackId),
          (w.thumbnailDirectPath = l.thumbnailDirectPath),
          (w.thumbnailEncSha256 = l.thumbnailEncSha256),
          (w.trayIconFileName = l.trayIconFileName),
          (w.stickerPackSize = l.stickerPackSize));
      }
      (l.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT &&
        l.caption &&
        (w.isCaptionByUser = !0),
        l.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
          ((w.nativeFlowInteractiveMsg = l.nativeFlowInteractiveMsg),
          (w.nativeFlowName = l.nativeFlowName),
          (w.interactiveHeader = l.interactiveHeader),
          (w.interactiveType = l.interactiveType),
          (w.interactivePayload = l.interactivePayload)),
        l.isWamoSub === !0 && (w.isWamoSub = !0));
      var F, O;
      async function B(e) {
        F = e;
        var t = e.mediaObject;
        ((l.earlyUpload = i),
          (l.isMediaCryptoExpectedForChat = o(
            "WAWebMediaCryptoEligibilityUtils",
          ).isMediaCryptoExpectedForChat(a)),
          (l.uploadOriginForChat = r("WAWebMediaGetUploadOriginForChat")(a)));
        var n = function () {
            return I(e, l);
          },
          s = o("WAPromiseBackoffs").createTimer({
            algo: { type: "exponential", first: 1e3, base: 2 },
            max: 3e3,
            jitter: 0.5,
          });
        s();
        var u = o("WAWebMediaGatingUtils").getMediaUploadRetryCount(),
          c =
            u > 0
              ? await o("WABackoffDelay").backoff(
                  {
                    delay: function () {
                      return s();
                    },
                    signal: S,
                    retries: u,
                  },
                  async function (e, r) {
                    var a,
                      i,
                      l =
                        (a = t == null ? void 0 : t.loadedSize) != null ? a : 0,
                      s = await n(),
                      c =
                        (i = t == null ? void 0 : t.loadedSize) != null ? i : 0,
                      d = c > l;
                    return !s.mediaResult.mediaEntry &&
                      s.mediaResult.kind ===
                        o("WAWebMediaMmsV4Upload").UploadMediaResultKind
                          .ERROR &&
                      (t == null ? void 0 : t.uploadStage) ===
                        o("WAWebMediaTypes").UploadStage.NEED_UPLOAD &&
                      d
                      ? (r < u &&
                          (t == null ||
                            t.consolidate({
                              uploadStage:
                                o("WAWebMediaTypes").UploadStage.UPLOADING,
                            })),
                        e(R))
                      : s;
                  },
                )
              : await n(),
          d = c.body,
          m = c.mediaResult,
          p = m.kind,
          _ = m.mediaEntry,
          f = c.mmsThumbnailData;
        if (((O = p), !_))
          throw r("err")("upload failed: media entry was not created");
        return (
          await r("WAWebMediaUpdateMsg")(
            F,
            babelHelpers.extends(
              {
                deprecatedMms3Url: _.deprecatedMms3Url,
                directPath: _.directPath,
                mediaKey: _.getMediaKey(),
                mediaKeyTimestamp: _.getMediaKeyTimestamp(),
                filehash: r("WANullthrows")(t).filehash,
                encFilehash: _.getEncfilehash(),
                size: r("WANullthrows")(t).size,
                streamingSidecar: _.sidecar,
                firstFrameSidecar: _.firstFrameSidecar,
                body: d,
                stickerSentTs: o("WATimeUtils").unixTimeMs(),
                mediaHandle:
                  _ instanceof o("WAWebMediaEntry").UnencryptedMediaEntry
                    ? _.handle
                    : null,
                metadataUrl:
                  _ instanceof o("WAWebMediaEntry").UnencryptedMediaEntry &&
                  _.metadataUrl != null &&
                  o(
                    "WAWebChannelVideoServerTranscodeGating",
                  ).isChannelVideoServerTranscodeUploadEnabled()
                    ? _.metadataUrl
                    : null,
              },
              f,
            ),
          ),
          F
        );
      }
      var W;
      if (l.addEvenWhilePreparing === !0) {
        var q = l.placeholderProps || {},
          U = babelHelpers.extends({}, q, w),
          V = function (t) {
            return (
              (F = t),
              E({ baseProps: w, chat: a, options: l, prep: s })
                .then(function (e) {
                  return r("WAWebMediaUpdateMsg")(F, e);
                })
                .then(function () {
                  return B(F);
                })
            );
          };
        o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
        o("WAWebChatGetters").getIsNewsletter(a)
          ? l.isNewsletterStatus === !0
            ? (W = r("JSResourceForInteraction")(
                "WAWebNewsletterSendStatusAction",
              )
                .__setRef("WAWebMediaPrep")
                .load()
                .then(function (e) {
                  return e.sendNewsletterStatusMediaMsgAction(U, V);
                }))
            : (W = o("WAWebNewsletterSendMsgAction").sendNewsletterMediaMsg(
                a,
                U,
                V,
              ))
          : a.id.isStatus()
            ? (W = o("WAWebSendStatusMsgAction").sendStatusMediaMsgAction(
                U,
                V,
                l.statusPostFunnelContext,
              ))
            : (W = o("WAWebSendMsgChatAction").addAndSendMsgToChat(a, U, V)[1]);
      } else {
        var H = E({ baseProps: w, chat: a, options: l, prep: s }).then(
          function (e) {
            var t = l.useBasePropsType === !0 ? w.type : e.type;
            return babelHelpers.extends({}, w, e, { type: t });
          },
        );
        if (
          o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
          o("WAWebChatGetters").getIsNewsletter(a)
        )
          if (l.isNewsletterStatus === !0) {
            var G = await H;
            W = r("JSResourceForInteraction")("WAWebNewsletterSendStatusAction")
              .__setRef("WAWebMediaPrep")
              .load()
              .then(function (e) {
                return e.sendNewsletterStatusMediaMsgAction(G, B);
              });
          } else
            W = o("WAWebNewsletterSendMsgAction").sendNewsletterMediaMsg(
              a,
              await H,
              B,
            );
        else
          a.id.isStatus()
            ? (W = o("WAWebSendStatusMsgAction").sendStatusMediaMsgAction(
                await H,
                B,
                l.statusPostFunnelContext,
              ))
            : w.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE
              ? (W = o("WAWebSendMsgChatAction").addAndSendMsgToChat(
                  a,
                  await H,
                  B,
                )[1])
              : (W = o("WAWebSendMsgChatAction").addAndSendMsgToChat(
                  a,
                  H,
                  B,
                )[1]);
      }
      return W.then(function (e) {
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
                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                  .OK,
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
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
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
            O === o("WAWebMediaMmsV4Upload").UploadMediaResultKind.CANCELLATION
          ) {
            var l;
            return (
              o("WALogger").LOG(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
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
                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                  .ERROR_CANCELLED,
              }
            );
          }
          if (
            (o("WALogger").WARN(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
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
                  messageSendResult: o("WAWebMediaPrepHelpers").errorUpload(F),
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
          return O === o("WAWebMediaMmsV4Upload").UploadMediaResultKind.ERROR
            ? { messageSendResult: o("WAWebMediaPrepHelpers").errorUpload(F) }
            : r != null
              ? r
              : (F &&
                  o("WAWebMmsMediaTypes").getMsgMediaType(F) ===
                    o("WAWebMediaTypes").OUTWARD_TYPES.STICKER &&
                  o("WALogger")
                    .ERROR(
                      v ||
                        (v = babelHelpers.taggedTemplateLiteralLoose([
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
    ((l.MediaPrep = L),
      (l.getMediaPropsNew = k),
      (l.uploadMediaWithPrep = I),
      (l.sendMediaMsgToChat = T));
  },
  98,
);
