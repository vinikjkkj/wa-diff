__d(
  "WAWebMediaForwardMediaMsg",
  [
    "Promise",
    "WALogger",
    "WAWebBotUtils",
    "WAWebForwardDocCaptionGating",
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
    "WAWebWid",
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
            D = t.associationOptions,
            x = t.chat,
            $ = t.includeCaption,
            P = $ === void 0 ? !1 : $,
            N = t.msg,
            M = t.multicast,
            w = M === void 0 ? !1 : M;
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Prepping media msg",
              ])),
          );
          var A = N.mediaObject;
          if (!A)
            return (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "id: ",
                      " type: ",
                      "",
                    ])),
                  N.id.toString(),
                  N.type,
                )
                .sendLogs(
                  "media-fault: forwardMediaMsg msg without mediaObject",
                ),
              (d || (d = n("Promise"))).reject(
                r("err")("non initialized media"),
              )
            );
          var F = N.mediaData.toJSON(),
            O = o("WAWebFrontendMsgGetters").getMaybeChat(N),
            B =
              (O == null || (a = O.contact) == null || (a = a.id) == null
                ? void 0
                : a.isBot()) === !0,
            W =
              (i =
                O == null || (l = O.id) == null ? void 0 : l.toLogString()) !=
              null
                ? i
                : "unknown",
            q = F.mediaBlob instanceof r("WAWebMediaOpaqueData"),
            U = (m = F.filehash) != null ? m : "none";
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
            W,
            B,
            F.type,
            q,
            U,
            A.downloadStage,
          ),
            B &&
              !o("WAWebMediaMmsV4Upload").getBlobFromMediaObject(A) &&
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[media-fwd] bot blob missing, downloading",
                  ])),
              ),
              yield N.downloadMedia({
                downloadEvenIfExpensive: !0,
                rmrReason: o("WAWebWamEnumWebcRmrReasonCode")
                  .WEBC_RMR_REASON_CODE.SEND_TO_CHAT,
                isUserInitiated: !0,
              })),
            F.preview != null && (F.preview = A.contentInfo._preview),
            F.mediaBlob instanceof r("WAWebMediaOpaqueData") &&
              F.mediaBlob.retain());
          var V = { mimetype: F.mimetype },
            H = F.isGif ? babelHelpers.extends({}, V, { isGif: !0 }) : V;
          F.type === o("WAWebMediaTypes").OUTWARD_TYPES.PTT &&
            !o("WAWebMsgGetters").getHasOriginatedFromNewsletter(N) &&
            (F.type = o("WAWebMediaTypes").OUTWARD_TYPES.AUDIO);
          var G = {
              businessOwnerJid: N.businessOwnerJid,
              productId: N.productId,
              currencyCode: N.currencyCode,
              priceAmount1000: N.priceAmount1000,
              salePriceAmount1000: N.salePriceAmount1000,
              retailerId: N.retailerId,
              url: N.url,
              productImageCount: N.productImageCount,
              title: N.title,
              description: N.description,
            },
            z =
              F.type === o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT &&
              (N.isFromTemplate || N.isDynamicReplyButtonsMsg),
            j =
              z || F.type === o("WAWebMediaTypes").OUTWARD_TYPES.PRODUCT
                ? N.caption
                : void 0;
          (P &&
            (F.type === o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE ||
              F.type === o("WAWebMediaTypes").OUTWARD_TYPES.VIDEO ||
              F.type === o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT ||
              F.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER_PACK) &&
            (j = N.caption),
            F.type === o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT &&
              j != null &&
              j === N.filename &&
              o("WAWebForwardDocCaptionGating").isForwardDocCaptionEnabled() &&
              (j = void 0),
            o("WAWebBotUtils").isMetaAiBot(x.id) &&
              !r("isStringNullOrEmpty")(T) &&
              r("isStringNullOrEmpty")(j) &&
              (j = T));
          var K = o("WAWebMediaFastForwardUtils").canEnableFastForward(
              x.contact,
            ),
            Q = o("WAWebMediaFastForwardUtils").canEnableFastForward(
              o("WAWebFrontendMsgGetters").getChat(N).contact,
            ),
            X = {
              parentMsgKey: D == null ? void 0 : D.parentMsgKey,
              associationType: D == null ? void 0 : D.associationType,
              viewMode: D == null ? void 0 : D.viewMode,
              forwardedFromWeb: !0,
              canEnableFastForward: K && Q,
              caption: j,
              type: N.type,
              mentionedJidList: N.mentionedJidList,
              groupMentions: N.groupMentions,
              footer:
                F.type === o("WAWebMediaTypes").OUTWARD_TYPES.PRODUCT
                  ? N.footer
                  : void 0,
              addEvenWhilePreparing:
                N.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
              useBasePropsType:
                N.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
              placeholderProps: H,
              isForwarded: o("WAWebMsgGetters").getShouldDisplayAsForwarded(N),
              forwardingScore:
                o("WAWebMsgModelUtils").getMsgForwardingScoreWhenForwarded(N),
              multicast: w,
              productMsgOptions: G,
              isAvatar: (p = N.isAvatar) != null ? p : !1,
              forwardedNewsletterMessageInfo: o(
                "WAWebGetNewsletterContextForForwardedMsg",
              ).getNewsletterContextForForwardedMsg(N),
              forwardedAiBotMessageInfo: o(
                "WAWebGetAiBotContextForForwardedMsg",
              ).getAiBotContextForForwardedMsg(N),
              aiProvenance:
                o("WAWebMsgGetters").getIsNewsletterMsg(N) &&
                r("WAWebWid").isNewsletter(x.id)
                  ? N.aiProvenance
                  : void 0,
              stickers: (_ = N.stickers) != null ? _ : void 0,
              publisher: (f = N.stickerPackPublisher) != null ? f : void 0,
              fileLength: (g = N.size) != null ? g : void 0,
              description:
                F.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER_PACK &&
                N.description != null
                  ? N.description
                  : "",
              stickerPackId: (h = N.stickerPackId) != null ? h : void 0,
              thumbnailDirectPath:
                (y = N.thumbnailDirectPath) != null ? y : void 0,
              thumbnailSha256: (C = N.thumbnailSha256) != null ? C : void 0,
              thumbnailEncSha256:
                (b = N.thumbnailEncSha256) != null ? b : void 0,
              trayIconFileName: (v = N.trayIconFileName) != null ? v : void 0,
              stickerPackSize: (S = N.stickerPackSize) != null ? S : void 0,
              interactiveAnnotations:
                (R = N.interactiveAnnotations) != null ? R : void 0,
              interactiveHeader: (L = N.interactiveHeader) != null ? L : void 0,
              interactiveType: (E = N.interactiveType) != null ? E : void 0,
              interactivePayload:
                (k = N.interactivePayload) != null ? k : void 0,
              nativeFlowInteractiveMsg:
                N.interactiveType ===
                r("WAWebInteractiveMessageType").NATIVE_FLOW
                  ? !0
                  : void 0,
              nativeFlowName: (I = N.nativeFlowName) != null ? I : void 0,
            },
            Y = yield new (o("WAWebMediaPrep").MediaPrep)(
              F.type,
              (d || (d = n("Promise"))).resolve(F),
            ).sendToChat({
              chat: x,
              options: o(
                "WAWebGetNewsletterContextForForwardedMsg",
              ).maybeStripNewsletterForwardMetadata({
                forwardable: X,
                destination: x.id,
                source: N.id.remote,
                isOriginalMsgForwarded: N.isForwarded,
                isQuestionOrQuestionReply:
                  N.isQuestion || N.questionReplyQuotedMessage != null,
              }),
            });
          if (F.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER) {
            var J,
              Z,
              ee,
              te,
              ne,
              re = {
                stickerSendOrigin: o("WAWebWamEnumStickerSendOriginType")
                  .STICKER_SEND_ORIGIN_TYPE.FORWARD,
                stickerIsAnimated: !!(
                  (J = N.mediaData) != null && J.isAnimated
                ),
                stickerIsFirstParty: !!(
                  (Z = N.mediaData) != null && Z.isFirstParty
                ),
                stickerIsFromStickerMaker: !!(
                  (ee = N.mediaData) != null && ee.isFromStickerMaker
                ),
                stickerIsLottie: !!((te = N.mediaData) != null && te.isLottie),
              },
              oe = new (o("WAWebStickerSendWamEvent").StickerSendWamEvent)(re),
              ae = o("WAWebWebpMetadata").getStickerMakerSourceType(
                (ne = N.mediaData) == null ? void 0 : ne.stickerMakerSourceType,
              );
            (ae != null && (oe.stickerMakerSourceType = ae), oe.commit());
          }
          return Y;
        })),
        p.apply(this, arguments)
      );
    }
    l.forwardMediaMsg = m;
  },
  98,
);
