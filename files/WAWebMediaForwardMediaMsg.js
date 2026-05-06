__d(
  "WAWebMediaForwardMediaMsg",
  [
    "Promise",
    "WALogger",
    "WAWebBotUtils",
    "WAWebFrontendMsgGetters",
    "WAWebGetAiBotContextForForwardedMsg",
    "WAWebGetNewsletterContextForForwardedMsg",
    "WAWebInteractiveMessageType",
    "WAWebMediaFastForwardUtils",
    "WAWebMediaOpaqueData",
    "WAWebMediaPrep",
    "WAWebMediaTypes",
    "WAWebMsgGetters",
    "WAWebMsgModelUtils",
    "WAWebMsgType",
    "WAWebStickerSendWamEvent",
    "WAWebWamEnumStickerSendOriginType",
    "WAWebWebpMetadata",
    "asyncToGeneratorRuntime",
    "err",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e, t, n, r, o) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l, d) {
            var m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D, x;
            (i === void 0 && (i = !1),
              l === void 0 && (l = !1),
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Prepping media msg",
                  ])),
              ));
            var $ = t.mediaObject;
            if (!$)
              return (
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "id: ",
                        " type: ",
                        "",
                      ])),
                    t.id.toString(),
                    t.type,
                  )
                  .sendLogs(
                    "media-fault: forwardMediaMsg msg without mediaObject",
                  ),
                (c || (c = n("Promise"))).reject(
                  r("err")("non initialized media"),
                )
              );
            var P = t.mediaData.toJSON(),
              N = o("WAWebFrontendMsgGetters").getMaybeChat(t),
              M =
                (N == null || (m = N.contact) == null || (m = m.id) == null
                  ? void 0
                  : m.isBot()) === !0,
              w =
                (p =
                  N == null || (_ = N.id) == null ? void 0 : _.toLogString()) !=
                null
                  ? p
                  : "unknown",
              A = P.mediaBlob instanceof r("WAWebMediaOpaqueData"),
              F = (f = P.filehash) != null ? f : "none";
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
              w,
              M,
              P.type,
              A,
              F,
              $.downloadStage,
            ),
              P.preview != null && (P.preview = $.contentInfo._preview),
              P.mediaBlob instanceof r("WAWebMediaOpaqueData") &&
                P.mediaBlob.retain());
            var O = { mimetype: P.mimetype },
              B = P.isGif ? babelHelpers.extends({}, O, { isGif: !0 }) : O;
            P.type === o("WAWebMediaTypes").OUTWARD_TYPES.PTT &&
              !o("WAWebMsgGetters").getHasOriginatedFromNewsletter(t) &&
              (P.type = o("WAWebMediaTypes").OUTWARD_TYPES.AUDIO);
            var W = {
                businessOwnerJid: t.businessOwnerJid,
                productId: t.productId,
                currencyCode: t.currencyCode,
                priceAmount1000: t.priceAmount1000,
                salePriceAmount1000: t.salePriceAmount1000,
                retailerId: t.retailerId,
                url: t.url,
                productImageCount: t.productImageCount,
                title: t.title,
                description: t.description,
              },
              q =
                P.type === o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT &&
                (t.isFromTemplate || t.isDynamicReplyButtonsMsg),
              U =
                q || P.type === o("WAWebMediaTypes").OUTWARD_TYPES.PRODUCT
                  ? t.caption
                  : void 0;
            (l &&
              (P.type === o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE ||
                P.type === o("WAWebMediaTypes").OUTWARD_TYPES.VIDEO ||
                P.type === o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT ||
                P.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER_PACK) &&
              (U = t.caption),
              o("WAWebBotUtils").isMetaAiBot(a.id) &&
                !r("isStringNullOrEmpty")(d) &&
                r("isStringNullOrEmpty")(U) &&
                (U = d));
            var V = o("WAWebMediaFastForwardUtils").canEnableFastForward(
                a.contact,
              ),
              H = o("WAWebMediaFastForwardUtils").canEnableFastForward(
                o("WAWebFrontendMsgGetters").getChat(t).contact,
              ),
              G = {
                forwardedFromWeb: !0,
                canEnableFastForward: V && H,
                caption: U,
                type: t.type,
                mentionedJidList: t.mentionedJidList,
                groupMentions: t.groupMentions,
                footer:
                  P.type === o("WAWebMediaTypes").OUTWARD_TYPES.PRODUCT
                    ? t.footer
                    : void 0,
                addEvenWhilePreparing:
                  t.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
                useBasePropsType:
                  t.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
                placeholderProps: B,
                isForwarded:
                  o("WAWebMsgGetters").getShouldDisplayAsForwarded(t),
                forwardingScore:
                  o("WAWebMsgModelUtils").getMsgForwardingScoreWhenForwarded(t),
                multicast: i,
                productMsgOptions: W,
                isAvatar: (g = t.isAvatar) != null ? g : !1,
                forwardedNewsletterMessageInfo: o(
                  "WAWebGetNewsletterContextForForwardedMsg",
                ).getNewsletterContextForForwardedMsg(t),
                forwardedAiBotMessageInfo: o(
                  "WAWebGetAiBotContextForForwardedMsg",
                ).getAiBotContextForForwardedMsg(t),
                stickers: (h = t.stickers) != null ? h : void 0,
                publisher: (y = t.stickerPackPublisher) != null ? y : void 0,
                fileLength: (C = t.size) != null ? C : void 0,
                description:
                  P.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER_PACK &&
                  t.description != null
                    ? t.description
                    : "",
                stickerPackId: (b = t.stickerPackId) != null ? b : void 0,
                thumbnailDirectPath:
                  (v = t.thumbnailDirectPath) != null ? v : void 0,
                thumbnailSha256: (S = t.thumbnailSha256) != null ? S : void 0,
                thumbnailEncSha256:
                  (R = t.thumbnailEncSha256) != null ? R : void 0,
                trayIconFileName: (L = t.trayIconFileName) != null ? L : void 0,
                stickerPackSize: (E = t.stickerPackSize) != null ? E : void 0,
                interactiveAnnotations:
                  (k = t.interactiveAnnotations) != null ? k : void 0,
                interactiveHeader:
                  (I = t.interactiveHeader) != null ? I : void 0,
                interactiveType: (T = t.interactiveType) != null ? T : void 0,
                interactivePayload:
                  (D = t.interactivePayload) != null ? D : void 0,
                nativeFlowInteractiveMsg:
                  t.interactiveType ===
                  r("WAWebInteractiveMessageType").NATIVE_FLOW
                    ? !0
                    : void 0,
                nativeFlowName: (x = t.nativeFlowName) != null ? x : void 0,
              },
              z = yield new (o("WAWebMediaPrep").MediaPrep)(
                P.type,
                (c || (c = n("Promise"))).resolve(P),
              ).sendToChat({
                chat: a,
                options: o(
                  "WAWebGetNewsletterContextForForwardedMsg",
                ).maybeStripNewsletterForwardMetadata({
                  forwardable: G,
                  destination: a.id,
                  source: t.id.remote,
                  isOriginalMsgForwarded: t.isForwarded,
                  isQuestionOrQuestionReply:
                    t.isQuestion || t.questionReplyQuotedMessage != null,
                }),
              });
            if (P.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER) {
              var j,
                K,
                Q,
                X,
                Y,
                J = {
                  stickerSendOrigin: o("WAWebWamEnumStickerSendOriginType")
                    .STICKER_SEND_ORIGIN_TYPE.FORWARD,
                  stickerIsAnimated: !!(
                    (j = t.mediaData) != null && j.isAnimated
                  ),
                  stickerIsFirstParty: !!(
                    (K = t.mediaData) != null && K.isFirstParty
                  ),
                  stickerIsFromStickerMaker: !!(
                    (Q = t.mediaData) != null && Q.isFromStickerMaker
                  ),
                  stickerIsLottie: !!((X = t.mediaData) != null && X.isLottie),
                },
                Z = new (o("WAWebStickerSendWamEvent").StickerSendWamEvent)(J),
                ee = o("WAWebWebpMetadata").getStickerMakerSourceType(
                  (Y = t.mediaData) == null ? void 0 : Y.stickerMakerSourceType,
                );
              (ee != null && (Z.stickerMakerSourceType = ee), Z.commit());
            }
            return z;
          },
        )),
        m.apply(this, arguments)
      );
    }
    l.forwardMediaMsg = d;
  },
  98,
);
