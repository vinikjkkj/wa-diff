__d(
  "WAWebMediaForwardMediaMsg",
  [
    "Promise",
    "WALogger",
    "WAWebFrontendMsgGetters",
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
    var e, s, u;
    function c(e, t, n, r) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l) {
            var c, d, m, p, _, f, g, h, y, C, b, v, S, R, L;
            (i === void 0 && (i = !1),
              l === void 0 && (l = !1),
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Prepping media msg",
                  ])),
              ));
            var E = t.mediaObject;
            if (!E)
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
                (u || (u = n("Promise"))).reject(
                  r("err")("non initialized media"),
                )
              );
            var k = t.mediaData.toJSON();
            (k.preview != null && (k.preview = E.contentInfo._preview),
              k.mediaBlob instanceof r("WAWebMediaOpaqueData") &&
                k.mediaBlob.retain());
            var I = { mimetype: k.mimetype },
              T = k.isGif ? babelHelpers.extends({}, I, { isGif: !0 }) : I;
            k.type === o("WAWebMediaTypes").OUTWARD_TYPES.PTT &&
              !o("WAWebMsgGetters").getHasOriginatedFromNewsletter(t) &&
              (k.type = o("WAWebMediaTypes").OUTWARD_TYPES.AUDIO);
            var D = {
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
              x =
                k.type === o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT &&
                (t.isFromTemplate || t.isDynamicReplyButtonsMsg),
              $ =
                x || k.type === o("WAWebMediaTypes").OUTWARD_TYPES.PRODUCT
                  ? t.caption
                  : void 0;
            l &&
              (k.type === o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE ||
                k.type === o("WAWebMediaTypes").OUTWARD_TYPES.VIDEO ||
                k.type === o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT ||
                k.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER_PACK) &&
              ($ = t.caption);
            var P = o("WAWebMediaFastForwardUtils").canEnableFastForward(
                a.contact,
              ),
              N = o("WAWebMediaFastForwardUtils").canEnableFastForward(
                o("WAWebFrontendMsgGetters").getChat(t).contact,
              ),
              M = {
                forwardedFromWeb: !0,
                canEnableFastForward: P && N,
                caption: $,
                type: t.type,
                mentionedJidList: t.mentionedJidList,
                groupMentions: t.groupMentions,
                footer:
                  k.type === o("WAWebMediaTypes").OUTWARD_TYPES.PRODUCT
                    ? t.footer
                    : void 0,
                addEvenWhilePreparing:
                  t.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
                useBasePropsType:
                  t.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
                placeholderProps: T,
                isForwarded:
                  o("WAWebMsgGetters").getShouldDisplayAsForwarded(t),
                forwardingScore: t.getForwardingScoreWhenForwarded(),
                multicast: i,
                productMsgOptions: D,
                isAvatar: (c = t.isAvatar) != null ? c : !1,
                forwardedNewsletterMessageInfo: o(
                  "WAWebGetNewsletterContextForForwardedMsg",
                ).getNewsletterContextForForwardedMsg(t),
                stickers: (d = t.stickers) != null ? d : void 0,
                publisher: (m = t.stickerPackPublisher) != null ? m : void 0,
                fileLength: (p = t.size) != null ? p : void 0,
                description:
                  k.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER_PACK &&
                  t.description != null
                    ? t.description
                    : "",
                stickerPackId: (_ = t.stickerPackId) != null ? _ : void 0,
                thumbnailDirectPath:
                  (f = t.thumbnailDirectPath) != null ? f : void 0,
                thumbnailSha256: (g = t.thumbnailSha256) != null ? g : void 0,
                thumbnailEncSha256:
                  (h = t.thumbnailEncSha256) != null ? h : void 0,
                trayIconFileName: (y = t.trayIconFileName) != null ? y : void 0,
                stickerPackSize: (C = t.stickerPackSize) != null ? C : void 0,
                interactiveAnnotations:
                  (b = t.interactiveAnnotations) != null ? b : void 0,
                interactiveHeader:
                  (v = t.interactiveHeader) != null ? v : void 0,
                interactiveType: (S = t.interactiveType) != null ? S : void 0,
                interactivePayload:
                  (R = t.interactivePayload) != null ? R : void 0,
                nativeFlowInteractiveMsg:
                  t.interactiveType ===
                  r("WAWebInteractiveMessageType").NATIVE_FLOW
                    ? !0
                    : void 0,
                nativeFlowName: (L = t.nativeFlowName) != null ? L : void 0,
              },
              w = yield new (o("WAWebMediaPrep").MediaPrep)(
                k.type,
                (u || (u = n("Promise"))).resolve(k),
              ).sendToChat({
                chat: a,
                options: o(
                  "WAWebGetNewsletterContextForForwardedMsg",
                ).maybeStripNewsletterForwardMetadata({
                  forwardable: M,
                  destination: a.id,
                  source: t.id.remote,
                  isOriginalMsgForwarded: t.isForwarded,
                  isQuestionOrQuestionReply:
                    t.isQuestion || t.questionReplyQuotedMessage != null,
                }),
              });
            if (k.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER) {
              var A,
                F,
                O,
                B,
                W,
                q = {
                  stickerSendOrigin: o("WAWebWamEnumStickerSendOriginType")
                    .STICKER_SEND_ORIGIN_TYPE.FORWARD,
                  stickerIsAnimated: !!(
                    (A = t.mediaData) != null && A.isAnimated
                  ),
                  stickerIsFirstParty: !!(
                    (F = t.mediaData) != null && F.isFirstParty
                  ),
                  stickerIsFromStickerMaker: !!(
                    (O = t.mediaData) != null && O.isFromStickerMaker
                  ),
                  stickerIsLottie: !!((B = t.mediaData) != null && B.isLottie),
                },
                U = new (o("WAWebStickerSendWamEvent").StickerSendWamEvent)(q),
                V = o("WAWebWebpMetadata").getStickerMakerSourceType(
                  (W = t.mediaData) == null ? void 0 : W.stickerMakerSourceType,
                );
              (V != null && (U.stickerMakerSourceType = V), U.commit());
            }
            return w;
          },
        )),
        d.apply(this, arguments)
      );
    }
    l.forwardMediaMsg = c;
  },
  98,
);
