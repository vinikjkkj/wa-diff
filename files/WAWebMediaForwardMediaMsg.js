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
    "WAWebMediaMmsV4Upload",
    "WAWebMediaOpaqueData",
    "WAWebMediaPrep",
    "WAWebMediaTypes",
    "WAWebMsgGetters",
    "WAWebMsgModelUtils",
    "WAWebMsgType",
    "WAWebStickerSendWamEvent",
    "WAWebWamEnumStickerSendOriginType",
    "WAWebWamEnumWebcRmrReasonCode",
    "WAWebWebpMetadata",
    "asyncToGeneratorRuntime",
    "err",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e, t, n, r, o) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l, m) {
            var p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D, x, $;
            (i === void 0 && (i = !1),
              l === void 0 && (l = !1),
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Prepping media msg",
                  ])),
              ));
            var P = t.mediaObject;
            if (!P)
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
                (d || (d = n("Promise"))).reject(
                  r("err")("non initialized media"),
                )
              );
            var N = t.mediaData.toJSON(),
              M = o("WAWebFrontendMsgGetters").getMaybeChat(t),
              w =
                (M == null || (p = M.contact) == null || (p = p.id) == null
                  ? void 0
                  : p.isBot()) === !0,
              A =
                (_ =
                  M == null || (f = M.id) == null ? void 0 : f.toLogString()) !=
                null
                  ? _
                  : "unknown",
              F = N.mediaBlob instanceof r("WAWebMediaOpaqueData"),
              O = (g = N.filehash) != null ? g : "none";
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
              A,
              w,
              N.type,
              F,
              O,
              P.downloadStage,
            ),
              w &&
                !o("WAWebMediaMmsV4Upload").getBlobFromMediaObject(P) &&
                (o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[media-fwd] bot blob missing, downloading",
                    ])),
                ),
                yield t.downloadMedia({
                  downloadEvenIfExpensive: !0,
                  rmrReason: o("WAWebWamEnumWebcRmrReasonCode")
                    .WEBC_RMR_REASON_CODE.SEND_TO_CHAT,
                  isUserInitiated: !0,
                })),
              N.preview != null && (N.preview = P.contentInfo._preview),
              N.mediaBlob instanceof r("WAWebMediaOpaqueData") &&
                N.mediaBlob.retain());
            var B = { mimetype: N.mimetype },
              W = N.isGif ? babelHelpers.extends({}, B, { isGif: !0 }) : B;
            N.type === o("WAWebMediaTypes").OUTWARD_TYPES.PTT &&
              !o("WAWebMsgGetters").getHasOriginatedFromNewsletter(t) &&
              (N.type = o("WAWebMediaTypes").OUTWARD_TYPES.AUDIO);
            var q = {
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
              U =
                N.type === o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT &&
                (t.isFromTemplate || t.isDynamicReplyButtonsMsg),
              V =
                U || N.type === o("WAWebMediaTypes").OUTWARD_TYPES.PRODUCT
                  ? t.caption
                  : void 0;
            (l &&
              (N.type === o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE ||
                N.type === o("WAWebMediaTypes").OUTWARD_TYPES.VIDEO ||
                N.type === o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT ||
                N.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER_PACK) &&
              (V = t.caption),
              o("WAWebBotUtils").isMetaAiBot(a.id) &&
                !r("isStringNullOrEmpty")(m) &&
                r("isStringNullOrEmpty")(V) &&
                (V = m));
            var H = o("WAWebMediaFastForwardUtils").canEnableFastForward(
                a.contact,
              ),
              G = o("WAWebMediaFastForwardUtils").canEnableFastForward(
                o("WAWebFrontendMsgGetters").getChat(t).contact,
              ),
              z = {
                forwardedFromWeb: !0,
                canEnableFastForward: H && G,
                caption: V,
                type: t.type,
                mentionedJidList: t.mentionedJidList,
                groupMentions: t.groupMentions,
                footer:
                  N.type === o("WAWebMediaTypes").OUTWARD_TYPES.PRODUCT
                    ? t.footer
                    : void 0,
                addEvenWhilePreparing:
                  t.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
                useBasePropsType:
                  t.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
                placeholderProps: W,
                isForwarded:
                  o("WAWebMsgGetters").getShouldDisplayAsForwarded(t),
                forwardingScore:
                  o("WAWebMsgModelUtils").getMsgForwardingScoreWhenForwarded(t),
                multicast: i,
                productMsgOptions: q,
                isAvatar: (h = t.isAvatar) != null ? h : !1,
                forwardedNewsletterMessageInfo: o(
                  "WAWebGetNewsletterContextForForwardedMsg",
                ).getNewsletterContextForForwardedMsg(t),
                forwardedAiBotMessageInfo: o(
                  "WAWebGetAiBotContextForForwardedMsg",
                ).getAiBotContextForForwardedMsg(t),
                stickers: (y = t.stickers) != null ? y : void 0,
                publisher: (C = t.stickerPackPublisher) != null ? C : void 0,
                fileLength: (b = t.size) != null ? b : void 0,
                description:
                  N.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER_PACK &&
                  t.description != null
                    ? t.description
                    : "",
                stickerPackId: (v = t.stickerPackId) != null ? v : void 0,
                thumbnailDirectPath:
                  (S = t.thumbnailDirectPath) != null ? S : void 0,
                thumbnailSha256: (R = t.thumbnailSha256) != null ? R : void 0,
                thumbnailEncSha256:
                  (L = t.thumbnailEncSha256) != null ? L : void 0,
                trayIconFileName: (E = t.trayIconFileName) != null ? E : void 0,
                stickerPackSize: (k = t.stickerPackSize) != null ? k : void 0,
                interactiveAnnotations:
                  (I = t.interactiveAnnotations) != null ? I : void 0,
                interactiveHeader:
                  (T = t.interactiveHeader) != null ? T : void 0,
                interactiveType: (D = t.interactiveType) != null ? D : void 0,
                interactivePayload:
                  (x = t.interactivePayload) != null ? x : void 0,
                nativeFlowInteractiveMsg:
                  t.interactiveType ===
                  r("WAWebInteractiveMessageType").NATIVE_FLOW
                    ? !0
                    : void 0,
                nativeFlowName: ($ = t.nativeFlowName) != null ? $ : void 0,
              },
              j = yield new (o("WAWebMediaPrep").MediaPrep)(
                N.type,
                (d || (d = n("Promise"))).resolve(N),
              ).sendToChat({
                chat: a,
                options: o(
                  "WAWebGetNewsletterContextForForwardedMsg",
                ).maybeStripNewsletterForwardMetadata({
                  forwardable: z,
                  destination: a.id,
                  source: t.id.remote,
                  isOriginalMsgForwarded: t.isForwarded,
                  isQuestionOrQuestionReply:
                    t.isQuestion || t.questionReplyQuotedMessage != null,
                }),
              });
            if (N.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER) {
              var K,
                Q,
                X,
                Y,
                J,
                Z = {
                  stickerSendOrigin: o("WAWebWamEnumStickerSendOriginType")
                    .STICKER_SEND_ORIGIN_TYPE.FORWARD,
                  stickerIsAnimated: !!(
                    (K = t.mediaData) != null && K.isAnimated
                  ),
                  stickerIsFirstParty: !!(
                    (Q = t.mediaData) != null && Q.isFirstParty
                  ),
                  stickerIsFromStickerMaker: !!(
                    (X = t.mediaData) != null && X.isFromStickerMaker
                  ),
                  stickerIsLottie: !!((Y = t.mediaData) != null && Y.isLottie),
                },
                ee = new (o("WAWebStickerSendWamEvent").StickerSendWamEvent)(Z),
                te = o("WAWebWebpMetadata").getStickerMakerSourceType(
                  (J = t.mediaData) == null ? void 0 : J.stickerMakerSourceType,
                );
              (te != null && (ee.stickerMakerSourceType = te), ee.commit());
            }
            return j;
          },
        )),
        p.apply(this, arguments)
      );
    }
    l.forwardMediaMsg = m;
  },
  98,
);
