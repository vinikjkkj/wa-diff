__d(
  "WAWebMediaForwardMediaMsg",
  [
    "Promise",
    "WALogger",
    "WAWebBotUtils",
    "WAWebForwardDocCaptionGating",
    "WAWebForwardMediaUtils",
    "WAWebFrontendMsgGetters",
    "WAWebGetAiBotContextForForwardedMsg",
    "WAWebGetNewsletterContextForForwardedMsg",
    "WAWebInteractiveMessageType",
    "WAWebMediaFastForwardUtils",
    "WAWebMediaMmsV4Upload",
    "WAWebMediaOpaqueData",
    "WAWebMediaPrep",
    "WAWebMediaTypes",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebSoundStickerUtils",
    "WAWebStatusGatingUtils",
    "WAWebStickerSendWamEvent",
    "WAWebWamEnumStickerSendOriginType",
    "WAWebWamEnumWebcRmrReasonCode",
    "WAWebWebpMetadata",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "err",
    "isStringNullOrEmpty",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e, t) {
      return t || o("WAWebMsgGetters").getIsNewsletterMsg(e);
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a,
            i,
            l,
            p,
            _,
            f,
            g,
            h,
            y,
            C,
            b,
            v,
            S,
            R,
            L,
            E,
            k,
            I,
            T,
            D = t.aiThreadInfo,
            x = t.appendedText,
            $ = t.associationOptions,
            P = t.chat,
            N = t.forwardReachScore,
            M = t.includeCaption,
            w = M === void 0 ? !1 : M,
            A = t.msg,
            F = t.multicast,
            O = F === void 0 ? !1 : F,
            B = t.pairedMediaType,
            W = t.threadId;
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Prepping media msg",
              ])),
          );
          var q = A.mediaObject;
          if (!q)
            return (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "id: ",
                      " type: ",
                      "",
                    ])),
                  A.id.toString(),
                  A.type,
                )
                .sendLogs(
                  "media-fault: forwardMediaMsg msg without mediaObject",
                ),
              (d || (d = n("Promise"))).reject(
                r("err")("non initialized media"),
              )
            );
          var U = A.mediaData.toJSON(),
            V = o("WAWebFrontendMsgGetters").getMaybeChat(A),
            H =
              (V == null || (a = V.contact) == null || (a = a.id) == null
                ? void 0
                : a.isBot()) === !0,
            G =
              (i =
                V == null || (l = V.id) == null ? void 0 : l.toLogString()) !=
              null
                ? i
                : "unknown",
            z = U.mediaBlob instanceof r("WAWebMediaOpaqueData"),
            j = (p = U.filehash) != null ? p : "none";
          (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[media-fwd] src=",
                " bot=",
                " type=",
                " blob=",
                " hash=",
                " dl=",
                "",
              ])),
            G,
            H,
            U.type,
            z,
            j,
            q.downloadStage,
          ),
            m(A, H) &&
              !o("WAWebMediaMmsV4Upload").getBlobFromMediaObject(q) &&
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[media-fwd] source blob missing, downloading",
                  ])),
              ),
              yield A.downloadMedia({
                downloadEvenIfExpensive: !0,
                rmrReason: o("WAWebWamEnumWebcRmrReasonCode")
                  .WEBC_RMR_REASON_CODE.SEND_TO_CHAT,
                isUserInitiated: !0,
              })),
            U.preview != null && (U.preview = q.contentInfo._preview),
            U.mediaBlob instanceof r("WAWebMediaOpaqueData") &&
              U.mediaBlob.retain());
          var K = { mimetype: U.mimetype },
            Q = U.isGif ? babelHelpers.extends({}, K, { isGif: !0 }) : K;
          U.type === o("WAWebMediaTypes").OUTWARD_TYPES.PTT &&
            !o("WAWebMsgGetters").getHasOriginatedFromNewsletter(A) &&
            (U.type = o("WAWebMediaTypes").OUTWARD_TYPES.AUDIO);
          var X = {
              businessOwnerJid: A.businessOwnerJid,
              productId: A.productId,
              currencyCode: A.currencyCode,
              priceAmount1000: A.priceAmount1000,
              salePriceAmount1000: A.salePriceAmount1000,
              retailerId: A.retailerId,
              url: A.url,
              productImageCount: A.productImageCount,
              title: A.title,
              description: A.description,
            },
            Y =
              U.type === o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT &&
              (A.isFromTemplate || A.isDynamicReplyButtonsMsg),
            J =
              Y || U.type === o("WAWebMediaTypes").OUTWARD_TYPES.PRODUCT
                ? A.caption
                : void 0;
          (w &&
            (U.type === o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE ||
              U.type === o("WAWebMediaTypes").OUTWARD_TYPES.VIDEO ||
              U.type === o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT ||
              U.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER_PACK) &&
            (J = A.caption),
            U.type === o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT &&
              J != null &&
              J === A.filename &&
              o("WAWebForwardDocCaptionGating").isForwardDocCaptionEnabled() &&
              (J = void 0),
            o("WAWebBotUtils").isMetaAiBot(P.id) &&
              !r("isStringNullOrEmpty")(x) &&
              r("isStringNullOrEmpty")(J) &&
              (J = x));
          var Z = o("WAWebMediaFastForwardUtils").canEnableFastForward(
              P.contact,
            ),
            ee =
              A.id.remote.isStatus() &&
              o("WAWebStatusGatingUtils").isStatusReshareViewerFlowEnabled(),
            te =
              !ee &&
              o("WAWebMediaFastForwardUtils").canEnableFastForward(
                o("WAWebFrontendMsgGetters").getChat(A).contact,
              ),
            ne = {
              parentMsgKey: $ == null ? void 0 : $.parentMsgKey,
              associationType: $ == null ? void 0 : $.associationType,
              viewMode: $ == null ? void 0 : $.viewMode,
              pairedMediaType: B,
              aiThreadInfo: D,
              threadId: W,
              forwardedFromWeb: !0,
              canEnableFastForward: Z && te,
              caption: J,
              type: A.type,
              mentionedJidList: A.mentionedJidList,
              groupMentions: A.groupMentions,
              footer:
                U.type === o("WAWebMediaTypes").OUTWARD_TYPES.PRODUCT
                  ? A.footer
                  : void 0,
              addEvenWhilePreparing:
                A.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
              useBasePropsType:
                A.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
              placeholderProps: Q,
              isForwarded: o("WAWebMsgGetters").getShouldDisplayAsForwarded(A),
              forwardingScore: o(
                "WAWebForwardMediaUtils",
              ).getMsgForwardingScoreWhenForwarded(A),
              forwardReachScore: N,
              multicast: O,
              productMsgOptions: X,
              isAvatar: (_ = A.isAvatar) != null ? _ : !1,
              isAiSticker: A.isAiSticker === !0 ? !0 : void 0,
              stickerAudio: o("WAWebSoundStickerUtils").getSendableStickerAudio(
                A.stickerAudio,
                P.id,
              ),
              forwardedNewsletterMessageInfo: o(
                "WAWebGetNewsletterContextForForwardedMsg",
              ).getNewsletterContextForForwardedMsg(A),
              forwardedAiBotMessageInfo: o(
                "WAWebGetAiBotContextForForwardedMsg",
              ).getAiBotContextForForwardedMsg(A),
              aiProvenance:
                o("WAWebMsgGetters").getIsNewsletterMsg(A) &&
                r("WAWebWid").isNewsletter(P.id)
                  ? A.aiProvenance
                  : void 0,
              stickers: (f = A.stickers) != null ? f : void 0,
              publisher: (g = A.stickerPackPublisher) != null ? g : void 0,
              fileLength: (h = A.size) != null ? h : void 0,
              description:
                U.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER_PACK &&
                A.description != null
                  ? A.description
                  : "",
              stickerPackId: (y = A.stickerPackId) != null ? y : void 0,
              thumbnailDirectPath:
                (C = A.thumbnailDirectPath) != null ? C : void 0,
              thumbnailSha256: (b = A.thumbnailSha256) != null ? b : void 0,
              thumbnailEncSha256:
                (v = A.thumbnailEncSha256) != null ? v : void 0,
              trayIconFileName: (S = A.trayIconFileName) != null ? S : void 0,
              stickerPackSize: (R = A.stickerPackSize) != null ? R : void 0,
              interactiveAnnotations:
                (L = A.interactiveAnnotations) != null ? L : void 0,
              interactiveHeader: (E = A.interactiveHeader) != null ? E : void 0,
              interactiveType: (k = A.interactiveType) != null ? k : void 0,
              interactivePayload:
                (I = A.interactivePayload) != null ? I : void 0,
              nativeFlowInteractiveMsg:
                A.interactiveType ===
                r("WAWebInteractiveMessageType").NATIVE_FLOW
                  ? !0
                  : void 0,
              nativeFlowName: (T = A.nativeFlowName) != null ? T : void 0,
            },
            re = yield new (r("WAWebMediaPrep"))(
              r("nullthrows")(U.type),
              (d || (d = n("Promise"))).resolve(U),
            ).sendToChat({
              chat: P,
              options: o(
                "WAWebGetNewsletterContextForForwardedMsg",
              ).maybeStripNewsletterForwardMetadata({
                forwardable: ne,
                destination: P.id,
                source: A.id.remote,
                isOriginalMsgForwarded: A.isForwarded,
                isQuestionOrQuestionReply:
                  A.isQuestion || A.questionReplyQuotedMessage != null,
              }),
            });
          if (U.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER) {
            var oe,
              ae,
              ie,
              le,
              se,
              ue,
              ce = {
                stickerSendOrigin: o("WAWebWamEnumStickerSendOriginType")
                  .STICKER_SEND_ORIGIN_TYPE.FORWARD,
                stickerIsAi:
                  A.isAiSticker === !0 ||
                  ((oe = A.mediaData) == null ? void 0 : oe.isAiSticker) === !0,
                stickerIsAnimated: !!(
                  (ae = A.mediaData) != null && ae.isAnimated
                ),
                stickerIsFirstParty: !!(
                  (ie = A.mediaData) != null && ie.isFirstParty
                ),
                stickerIsFromStickerMaker: !!(
                  (le = A.mediaData) != null && le.isFromStickerMaker
                ),
                stickerIsLottie: !!((se = A.mediaData) != null && se.isLottie),
              },
              de = new (o("WAWebStickerSendWamEvent").StickerSendWamEvent)(ce),
              me = o("WAWebWebpMetadata").getStickerMakerSourceType(
                (ue = A.mediaData) == null ? void 0 : ue.stickerMakerSourceType,
              );
            (me != null && (de.stickerMakerSourceType = me), de.commit());
          }
          return re;
        })),
        _.apply(this, arguments)
      );
    }
    l.forwardMediaMsg = p;
  },
  98,
);
