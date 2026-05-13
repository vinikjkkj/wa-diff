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
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a,
            i,
            l,
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
            S,
            R,
            L,
            E,
            k,
            I,
            T = t.appendedText,
            D = t.chat,
            x = t.includeCaption,
            $ = x === void 0 ? !1 : x,
            P = t.msg,
            N = t.multicast,
            M = N === void 0 ? !1 : N;
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Prepping media msg",
              ])),
          );
          var w = P.mediaObject;
          if (!w)
            return (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "id: ",
                      " type: ",
                      "",
                    ])),
                  P.id.toString(),
                  P.type,
                )
                .sendLogs(
                  "media-fault: forwardMediaMsg msg without mediaObject",
                ),
              (d || (d = n("Promise"))).reject(
                r("err")("non initialized media"),
              )
            );
          var A = P.mediaData.toJSON(),
            F = o("WAWebFrontendMsgGetters").getMaybeChat(P),
            O =
              (F == null || (a = F.contact) == null || (a = a.id) == null
                ? void 0
                : a.isBot()) === !0,
            B =
              (i =
                F == null || (l = F.id) == null ? void 0 : l.toLogString()) !=
              null
                ? i
                : "unknown",
            W = A.mediaBlob instanceof r("WAWebMediaOpaqueData"),
            q = (m = A.filehash) != null ? m : "none";
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
            B,
            O,
            A.type,
            W,
            q,
            w.downloadStage,
          ),
            O &&
              !o("WAWebMediaMmsV4Upload").getBlobFromMediaObject(w) &&
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[media-fwd] bot blob missing, downloading",
                  ])),
              ),
              yield P.downloadMedia({
                downloadEvenIfExpensive: !0,
                rmrReason: o("WAWebWamEnumWebcRmrReasonCode")
                  .WEBC_RMR_REASON_CODE.SEND_TO_CHAT,
                isUserInitiated: !0,
              })),
            A.preview != null && (A.preview = w.contentInfo._preview),
            A.mediaBlob instanceof r("WAWebMediaOpaqueData") &&
              A.mediaBlob.retain());
          var U = { mimetype: A.mimetype },
            V = A.isGif ? babelHelpers.extends({}, U, { isGif: !0 }) : U;
          A.type === o("WAWebMediaTypes").OUTWARD_TYPES.PTT &&
            !o("WAWebMsgGetters").getHasOriginatedFromNewsletter(P) &&
            (A.type = o("WAWebMediaTypes").OUTWARD_TYPES.AUDIO);
          var H = {
              businessOwnerJid: P.businessOwnerJid,
              productId: P.productId,
              currencyCode: P.currencyCode,
              priceAmount1000: P.priceAmount1000,
              salePriceAmount1000: P.salePriceAmount1000,
              retailerId: P.retailerId,
              url: P.url,
              productImageCount: P.productImageCount,
              title: P.title,
              description: P.description,
            },
            G =
              A.type === o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT &&
              (P.isFromTemplate || P.isDynamicReplyButtonsMsg),
            z =
              G || A.type === o("WAWebMediaTypes").OUTWARD_TYPES.PRODUCT
                ? P.caption
                : void 0;
          ($ &&
            (A.type === o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE ||
              A.type === o("WAWebMediaTypes").OUTWARD_TYPES.VIDEO ||
              A.type === o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT ||
              A.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER_PACK) &&
            (z = P.caption),
            o("WAWebBotUtils").isMetaAiBot(D.id) &&
              !r("isStringNullOrEmpty")(T) &&
              r("isStringNullOrEmpty")(z) &&
              (z = T));
          var j = o("WAWebMediaFastForwardUtils").canEnableFastForward(
              D.contact,
            ),
            K = o("WAWebMediaFastForwardUtils").canEnableFastForward(
              o("WAWebFrontendMsgGetters").getChat(P).contact,
            ),
            Q = {
              forwardedFromWeb: !0,
              canEnableFastForward: j && K,
              caption: z,
              type: P.type,
              mentionedJidList: P.mentionedJidList,
              groupMentions: P.groupMentions,
              footer:
                A.type === o("WAWebMediaTypes").OUTWARD_TYPES.PRODUCT
                  ? P.footer
                  : void 0,
              addEvenWhilePreparing:
                P.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
              useBasePropsType:
                P.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
              placeholderProps: V,
              isForwarded: o("WAWebMsgGetters").getShouldDisplayAsForwarded(P),
              forwardingScore:
                o("WAWebMsgModelUtils").getMsgForwardingScoreWhenForwarded(P),
              multicast: M,
              productMsgOptions: H,
              isAvatar: (p = P.isAvatar) != null ? p : !1,
              forwardedNewsletterMessageInfo: o(
                "WAWebGetNewsletterContextForForwardedMsg",
              ).getNewsletterContextForForwardedMsg(P),
              forwardedAiBotMessageInfo: o(
                "WAWebGetAiBotContextForForwardedMsg",
              ).getAiBotContextForForwardedMsg(P),
              stickers: (_ = P.stickers) != null ? _ : void 0,
              publisher: (f = P.stickerPackPublisher) != null ? f : void 0,
              fileLength: (g = P.size) != null ? g : void 0,
              description:
                A.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER_PACK &&
                P.description != null
                  ? P.description
                  : "",
              stickerPackId: (h = P.stickerPackId) != null ? h : void 0,
              thumbnailDirectPath:
                (y = P.thumbnailDirectPath) != null ? y : void 0,
              thumbnailSha256: (C = P.thumbnailSha256) != null ? C : void 0,
              thumbnailEncSha256:
                (b = P.thumbnailEncSha256) != null ? b : void 0,
              trayIconFileName: (v = P.trayIconFileName) != null ? v : void 0,
              stickerPackSize: (S = P.stickerPackSize) != null ? S : void 0,
              interactiveAnnotations:
                (R = P.interactiveAnnotations) != null ? R : void 0,
              interactiveHeader: (L = P.interactiveHeader) != null ? L : void 0,
              interactiveType: (E = P.interactiveType) != null ? E : void 0,
              interactivePayload:
                (k = P.interactivePayload) != null ? k : void 0,
              nativeFlowInteractiveMsg:
                P.interactiveType ===
                r("WAWebInteractiveMessageType").NATIVE_FLOW
                  ? !0
                  : void 0,
              nativeFlowName: (I = P.nativeFlowName) != null ? I : void 0,
            },
            X = yield new (o("WAWebMediaPrep").MediaPrep)(
              A.type,
              (d || (d = n("Promise"))).resolve(A),
            ).sendToChat({
              chat: D,
              options: o(
                "WAWebGetNewsletterContextForForwardedMsg",
              ).maybeStripNewsletterForwardMetadata({
                forwardable: Q,
                destination: D.id,
                source: P.id.remote,
                isOriginalMsgForwarded: P.isForwarded,
                isQuestionOrQuestionReply:
                  P.isQuestion || P.questionReplyQuotedMessage != null,
              }),
            });
          if (A.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER) {
            var Y,
              J,
              Z,
              ee,
              te,
              ne = {
                stickerSendOrigin: o("WAWebWamEnumStickerSendOriginType")
                  .STICKER_SEND_ORIGIN_TYPE.FORWARD,
                stickerIsAnimated: !!(
                  (Y = P.mediaData) != null && Y.isAnimated
                ),
                stickerIsFirstParty: !!(
                  (J = P.mediaData) != null && J.isFirstParty
                ),
                stickerIsFromStickerMaker: !!(
                  (Z = P.mediaData) != null && Z.isFromStickerMaker
                ),
                stickerIsLottie: !!((ee = P.mediaData) != null && ee.isLottie),
              },
              re = new (o("WAWebStickerSendWamEvent").StickerSendWamEvent)(ne),
              oe = o("WAWebWebpMetadata").getStickerMakerSourceType(
                (te = P.mediaData) == null ? void 0 : te.stickerMakerSourceType,
              );
            (oe != null && (re.stickerMakerSourceType = oe), re.commit());
          }
          return X;
        })),
        p.apply(this, arguments)
      );
    }
    l.forwardMediaMsg = m;
  },
  98,
);
