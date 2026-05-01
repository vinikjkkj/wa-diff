__d(
  "WAWebMediaForwardMediaMsg",
  [
    "Promise",
    "WALogger",
    "WAWebFrontendMsgGetters",
    "WAWebGetAiBotContextForForwardedMsg",
    "WAWebGetNewsletterContextForForwardedMsg",
    "WAWebInteractiveMessageType",
    "WAWebMediaFastForwardUtils",
    "WAWebMediaOpaqueData",
    "WAWebMediaPrep",
    "WAWebMediaTypes",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebStickerSendWamEvent",
    "WAWebWamEnumStickerSendOriginType",
    "WAWebWebpMetadata",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e, t, n, r) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l) {
            var d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k, I, T, D;
            (i === void 0 && (i = !1),
              l === void 0 && (l = !1),
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Prepping media msg",
                  ])),
              ));
            var x = t.mediaObject;
            if (!x)
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
            var $ = t.mediaData.toJSON(),
              P = o("WAWebFrontendMsgGetters").getMaybeChat(t),
              N =
                (P == null || (d = P.contact) == null || (d = d.id) == null
                  ? void 0
                  : d.isBot()) === !0,
              M =
                (m =
                  P == null || (p = P.id) == null ? void 0 : p.toLogString()) !=
                null
                  ? m
                  : "unknown",
              w = $.mediaBlob instanceof r("WAWebMediaOpaqueData"),
              A = (_ = $.filehash) != null ? _ : "none";
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
              M,
              N,
              $.type,
              w,
              A,
              x.downloadStage,
            ),
              $.preview != null && ($.preview = x.contentInfo._preview),
              $.mediaBlob instanceof r("WAWebMediaOpaqueData") &&
                $.mediaBlob.retain());
            var F = { mimetype: $.mimetype },
              O = $.isGif ? babelHelpers.extends({}, F, { isGif: !0 }) : F;
            $.type === o("WAWebMediaTypes").OUTWARD_TYPES.PTT &&
              !o("WAWebMsgGetters").getHasOriginatedFromNewsletter(t) &&
              ($.type = o("WAWebMediaTypes").OUTWARD_TYPES.AUDIO);
            var B = {
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
              W =
                $.type === o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT &&
                (t.isFromTemplate || t.isDynamicReplyButtonsMsg),
              q =
                W || $.type === o("WAWebMediaTypes").OUTWARD_TYPES.PRODUCT
                  ? t.caption
                  : void 0;
            l &&
              ($.type === o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE ||
                $.type === o("WAWebMediaTypes").OUTWARD_TYPES.VIDEO ||
                $.type === o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT ||
                $.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER_PACK) &&
              (q = t.caption);
            var U = o("WAWebMediaFastForwardUtils").canEnableFastForward(
                a.contact,
              ),
              V = o("WAWebMediaFastForwardUtils").canEnableFastForward(
                o("WAWebFrontendMsgGetters").getChat(t).contact,
              ),
              H = {
                forwardedFromWeb: !0,
                canEnableFastForward: U && V,
                caption: q,
                type: t.type,
                mentionedJidList: t.mentionedJidList,
                groupMentions: t.groupMentions,
                footer:
                  $.type === o("WAWebMediaTypes").OUTWARD_TYPES.PRODUCT
                    ? t.footer
                    : void 0,
                addEvenWhilePreparing:
                  t.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
                useBasePropsType:
                  t.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
                placeholderProps: O,
                isForwarded:
                  o("WAWebMsgGetters").getShouldDisplayAsForwarded(t),
                forwardingScore: t.getForwardingScoreWhenForwarded(),
                multicast: i,
                productMsgOptions: B,
                isAvatar: (f = t.isAvatar) != null ? f : !1,
                forwardedNewsletterMessageInfo: o(
                  "WAWebGetNewsletterContextForForwardedMsg",
                ).getNewsletterContextForForwardedMsg(t),
                forwardedAiBotMessageInfo: o(
                  "WAWebGetAiBotContextForForwardedMsg",
                ).getAiBotContextForForwardedMsg(t),
                stickers: (g = t.stickers) != null ? g : void 0,
                publisher: (h = t.stickerPackPublisher) != null ? h : void 0,
                fileLength: (y = t.size) != null ? y : void 0,
                description:
                  $.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER_PACK &&
                  t.description != null
                    ? t.description
                    : "",
                stickerPackId: (C = t.stickerPackId) != null ? C : void 0,
                thumbnailDirectPath:
                  (b = t.thumbnailDirectPath) != null ? b : void 0,
                thumbnailSha256: (v = t.thumbnailSha256) != null ? v : void 0,
                thumbnailEncSha256:
                  (S = t.thumbnailEncSha256) != null ? S : void 0,
                trayIconFileName: (R = t.trayIconFileName) != null ? R : void 0,
                stickerPackSize: (L = t.stickerPackSize) != null ? L : void 0,
                interactiveAnnotations:
                  (E = t.interactiveAnnotations) != null ? E : void 0,
                interactiveHeader:
                  (k = t.interactiveHeader) != null ? k : void 0,
                interactiveType: (I = t.interactiveType) != null ? I : void 0,
                interactivePayload:
                  (T = t.interactivePayload) != null ? T : void 0,
                nativeFlowInteractiveMsg:
                  t.interactiveType ===
                  r("WAWebInteractiveMessageType").NATIVE_FLOW
                    ? !0
                    : void 0,
                nativeFlowName: (D = t.nativeFlowName) != null ? D : void 0,
              },
              G = yield new (o("WAWebMediaPrep").MediaPrep)(
                $.type,
                (c || (c = n("Promise"))).resolve($),
              ).sendToChat({
                chat: a,
                options: o(
                  "WAWebGetNewsletterContextForForwardedMsg",
                ).maybeStripNewsletterForwardMetadata({
                  forwardable: H,
                  destination: a.id,
                  source: t.id.remote,
                  isOriginalMsgForwarded: t.isForwarded,
                  isQuestionOrQuestionReply:
                    t.isQuestion || t.questionReplyQuotedMessage != null,
                }),
              });
            if ($.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER) {
              var z,
                j,
                K,
                Q,
                X,
                Y = {
                  stickerSendOrigin: o("WAWebWamEnumStickerSendOriginType")
                    .STICKER_SEND_ORIGIN_TYPE.FORWARD,
                  stickerIsAnimated: !!(
                    (z = t.mediaData) != null && z.isAnimated
                  ),
                  stickerIsFirstParty: !!(
                    (j = t.mediaData) != null && j.isFirstParty
                  ),
                  stickerIsFromStickerMaker: !!(
                    (K = t.mediaData) != null && K.isFromStickerMaker
                  ),
                  stickerIsLottie: !!((Q = t.mediaData) != null && Q.isLottie),
                },
                J = new (o("WAWebStickerSendWamEvent").StickerSendWamEvent)(Y),
                Z = o("WAWebWebpMetadata").getStickerMakerSourceType(
                  (X = t.mediaData) == null ? void 0 : X.stickerMakerSourceType,
                );
              (Z != null && (J.stickerMakerSourceType = Z), J.commit());
            }
            return G;
          },
        )),
        m.apply(this, arguments)
      );
    }
    l.forwardMediaMsg = d;
  },
  98,
);
