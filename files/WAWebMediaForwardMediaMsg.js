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
            B = t.onMsgKeyCreated,
            W = t.pairedMediaType,
            q = t.threadId;
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Prepping media msg",
              ])),
          );
          var U = A.mediaObject;
          if (!U)
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
          var V = A.mediaData.toJSON(),
            H = o("WAWebFrontendMsgGetters").getMaybeChat(A),
            G =
              (H == null || (a = H.contact) == null || (a = a.id) == null
                ? void 0
                : a.isBot()) === !0,
            z =
              (i =
                H == null || (l = H.id) == null ? void 0 : l.toLogString()) !=
              null
                ? i
                : "unknown",
            j = V.mediaBlob instanceof r("WAWebMediaOpaqueData"),
            K = (p = V.filehash) != null ? p : "none";
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
            z,
            G,
            V.type,
            j,
            K,
            U.downloadStage,
          ),
            m(A, G) &&
              !o("WAWebMediaMmsV4Upload").getBlobFromMediaObject(U) &&
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
            V.preview != null && (V.preview = U.contentInfo._preview),
            V.mediaBlob instanceof r("WAWebMediaOpaqueData") &&
              V.mediaBlob.retain());
          var Q = { mimetype: V.mimetype },
            X = V.isGif ? babelHelpers.extends({}, Q, { isGif: !0 }) : Q;
          V.type === o("WAWebMediaTypes").OUTWARD_TYPES.PTT &&
            !o("WAWebMsgGetters").getHasOriginatedFromNewsletter(A) &&
            (V.type = o("WAWebMediaTypes").OUTWARD_TYPES.AUDIO);
          var Y = {
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
            J =
              V.type === o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT &&
              (A.isFromTemplate || A.isDynamicReplyButtonsMsg),
            Z =
              J || V.type === o("WAWebMediaTypes").OUTWARD_TYPES.PRODUCT
                ? A.caption
                : void 0;
          (w &&
            (V.type === o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE ||
              V.type === o("WAWebMediaTypes").OUTWARD_TYPES.VIDEO ||
              V.type === o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT ||
              V.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER_PACK) &&
            (Z = A.caption),
            V.type === o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT &&
              Z != null &&
              Z === A.filename &&
              o("WAWebForwardDocCaptionGating").isForwardDocCaptionEnabled() &&
              (Z = void 0),
            o("WAWebBotUtils").isMetaAiBot(P.id) &&
              !r("isStringNullOrEmpty")(x) &&
              r("isStringNullOrEmpty")(Z) &&
              (Z = x));
          var ee = o("WAWebMediaFastForwardUtils").canEnableFastForward(
              P.contact,
            ),
            te =
              A.id.remote.isStatus() &&
              o("WAWebStatusGatingUtils").isStatusReshareViewerFlowEnabled(),
            ne =
              !te &&
              o("WAWebMediaFastForwardUtils").canEnableFastForward(
                o("WAWebFrontendMsgGetters").getChat(A).contact,
              ),
            re = {
              parentMsgKey: $ == null ? void 0 : $.parentMsgKey,
              associationType: $ == null ? void 0 : $.associationType,
              viewMode: $ == null ? void 0 : $.viewMode,
              pairedMediaType: W,
              aiThreadInfo: D,
              threadId: q,
              onMsgKeyCreated: B != null ? B : void 0,
              forwardedFromWeb: !0,
              canEnableFastForward: ee && ne,
              caption: Z,
              type: A.type,
              mentionedJidList: A.mentionedJidList,
              groupMentions: A.groupMentions,
              footer:
                V.type === o("WAWebMediaTypes").OUTWARD_TYPES.PRODUCT
                  ? A.footer
                  : void 0,
              addEvenWhilePreparing:
                A.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
              useBasePropsType:
                A.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
              placeholderProps: X,
              isForwarded: o("WAWebMsgGetters").getShouldDisplayAsForwarded(A),
              forwardingScore: o(
                "WAWebForwardMediaUtils",
              ).getMsgForwardingScoreWhenForwarded(A),
              forwardReachScore: N,
              multicast: O,
              productMsgOptions: Y,
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
                V.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER_PACK &&
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
            oe = yield new (r("WAWebMediaPrep"))(
              r("nullthrows")(V.type),
              (d || (d = n("Promise"))).resolve(V),
            ).sendToChat({
              chat: P,
              options: o(
                "WAWebGetNewsletterContextForForwardedMsg",
              ).maybeStripNewsletterForwardMetadata({
                forwardable: re,
                destination: P.id,
                source: A.id.remote,
                isOriginalMsgForwarded: A.isForwarded,
                isQuestionOrQuestionReply:
                  A.isQuestion || A.questionReplyQuotedMessage != null,
              }),
            });
          if (V.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER) {
            var ae,
              ie,
              le,
              se,
              ue,
              ce,
              de = {
                stickerSendOrigin: o("WAWebWamEnumStickerSendOriginType")
                  .STICKER_SEND_ORIGIN_TYPE.FORWARD,
                stickerIsAi:
                  A.isAiSticker === !0 ||
                  ((ae = A.mediaData) == null ? void 0 : ae.isAiSticker) === !0,
                stickerIsAnimated: !!(
                  (ie = A.mediaData) != null && ie.isAnimated
                ),
                stickerIsFirstParty: !!(
                  (le = A.mediaData) != null && le.isFirstParty
                ),
                stickerIsFromStickerMaker: !!(
                  (se = A.mediaData) != null && se.isFromStickerMaker
                ),
                stickerIsLottie: !!((ue = A.mediaData) != null && ue.isLottie),
              },
              me = new (o("WAWebStickerSendWamEvent").StickerSendWamEvent)(de),
              pe = o("WAWebWebpMetadata").getStickerMakerSourceType(
                (ce = A.mediaData) == null ? void 0 : ce.stickerMakerSourceType,
              );
            (pe != null && (me.stickerMakerSourceType = pe), me.commit());
          }
          return oe;
        })),
        _.apply(this, arguments)
      );
    }
    l.forwardMediaMsg = p;
  },
  98,
);
