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
            D = t.appendedText,
            x = t.associationOptions,
            $ = t.chat,
            P = t.includeCaption,
            N = P === void 0 ? !1 : P,
            M = t.msg,
            w = t.multicast,
            A = w === void 0 ? !1 : w;
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Prepping media msg",
              ])),
          );
          var F = M.mediaObject;
          if (!F)
            return (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "id: ",
                      " type: ",
                      "",
                    ])),
                  M.id.toString(),
                  M.type,
                )
                .sendLogs(
                  "media-fault: forwardMediaMsg msg without mediaObject",
                ),
              (d || (d = n("Promise"))).reject(
                r("err")("non initialized media"),
              )
            );
          var O = M.mediaData.toJSON(),
            B = o("WAWebFrontendMsgGetters").getMaybeChat(M),
            W =
              (B == null || (a = B.contact) == null || (a = a.id) == null
                ? void 0
                : a.isBot()) === !0,
            q =
              (i =
                B == null || (l = B.id) == null ? void 0 : l.toLogString()) !=
              null
                ? i
                : "unknown",
            U = O.mediaBlob instanceof r("WAWebMediaOpaqueData"),
            V = (p = O.filehash) != null ? p : "none";
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
            q,
            W,
            O.type,
            U,
            V,
            F.downloadStage,
          ),
            m(M, W) &&
              !o("WAWebMediaMmsV4Upload").getBlobFromMediaObject(F) &&
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[media-fwd] source blob missing, downloading",
                  ])),
              ),
              yield M.downloadMedia({
                downloadEvenIfExpensive: !0,
                rmrReason: o("WAWebWamEnumWebcRmrReasonCode")
                  .WEBC_RMR_REASON_CODE.SEND_TO_CHAT,
                isUserInitiated: !0,
              })),
            O.preview != null && (O.preview = F.contentInfo._preview),
            O.mediaBlob instanceof r("WAWebMediaOpaqueData") &&
              O.mediaBlob.retain());
          var H = { mimetype: O.mimetype },
            G = O.isGif ? babelHelpers.extends({}, H, { isGif: !0 }) : H;
          O.type === o("WAWebMediaTypes").OUTWARD_TYPES.PTT &&
            !o("WAWebMsgGetters").getHasOriginatedFromNewsletter(M) &&
            (O.type = o("WAWebMediaTypes").OUTWARD_TYPES.AUDIO);
          var z = {
              businessOwnerJid: M.businessOwnerJid,
              productId: M.productId,
              currencyCode: M.currencyCode,
              priceAmount1000: M.priceAmount1000,
              salePriceAmount1000: M.salePriceAmount1000,
              retailerId: M.retailerId,
              url: M.url,
              productImageCount: M.productImageCount,
              title: M.title,
              description: M.description,
            },
            j =
              O.type === o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT &&
              (M.isFromTemplate || M.isDynamicReplyButtonsMsg),
            K =
              j || O.type === o("WAWebMediaTypes").OUTWARD_TYPES.PRODUCT
                ? M.caption
                : void 0;
          (N &&
            (O.type === o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE ||
              O.type === o("WAWebMediaTypes").OUTWARD_TYPES.VIDEO ||
              O.type === o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT ||
              O.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER_PACK) &&
            (K = M.caption),
            O.type === o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT &&
              K != null &&
              K === M.filename &&
              o("WAWebForwardDocCaptionGating").isForwardDocCaptionEnabled() &&
              (K = void 0),
            o("WAWebBotUtils").isMetaAiBot($.id) &&
              !r("isStringNullOrEmpty")(D) &&
              r("isStringNullOrEmpty")(K) &&
              (K = D));
          var Q = o("WAWebMediaFastForwardUtils").canEnableFastForward(
              $.contact,
            ),
            X = o("WAWebMediaFastForwardUtils").canEnableFastForward(
              o("WAWebFrontendMsgGetters").getChat(M).contact,
            ),
            Y = {
              parentMsgKey: x == null ? void 0 : x.parentMsgKey,
              associationType: x == null ? void 0 : x.associationType,
              viewMode: x == null ? void 0 : x.viewMode,
              forwardedFromWeb: !0,
              canEnableFastForward: Q && X,
              caption: K,
              type: M.type,
              mentionedJidList: M.mentionedJidList,
              groupMentions: M.groupMentions,
              footer:
                O.type === o("WAWebMediaTypes").OUTWARD_TYPES.PRODUCT
                  ? M.footer
                  : void 0,
              addEvenWhilePreparing:
                M.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
              useBasePropsType:
                M.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
              placeholderProps: G,
              isForwarded: o("WAWebMsgGetters").getShouldDisplayAsForwarded(M),
              forwardingScore:
                o("WAWebMsgModelUtils").getMsgForwardingScoreWhenForwarded(M),
              multicast: A,
              productMsgOptions: z,
              isAvatar: (_ = M.isAvatar) != null ? _ : !1,
              forwardedNewsletterMessageInfo: o(
                "WAWebGetNewsletterContextForForwardedMsg",
              ).getNewsletterContextForForwardedMsg(M),
              forwardedAiBotMessageInfo: o(
                "WAWebGetAiBotContextForForwardedMsg",
              ).getAiBotContextForForwardedMsg(M),
              aiProvenance:
                o("WAWebMsgGetters").getIsNewsletterMsg(M) &&
                r("WAWebWid").isNewsletter($.id)
                  ? M.aiProvenance
                  : void 0,
              stickers: (f = M.stickers) != null ? f : void 0,
              publisher: (g = M.stickerPackPublisher) != null ? g : void 0,
              fileLength: (h = M.size) != null ? h : void 0,
              description:
                O.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER_PACK &&
                M.description != null
                  ? M.description
                  : "",
              stickerPackId: (y = M.stickerPackId) != null ? y : void 0,
              thumbnailDirectPath:
                (C = M.thumbnailDirectPath) != null ? C : void 0,
              thumbnailSha256: (b = M.thumbnailSha256) != null ? b : void 0,
              thumbnailEncSha256:
                (v = M.thumbnailEncSha256) != null ? v : void 0,
              trayIconFileName: (S = M.trayIconFileName) != null ? S : void 0,
              stickerPackSize: (R = M.stickerPackSize) != null ? R : void 0,
              interactiveAnnotations:
                (L = M.interactiveAnnotations) != null ? L : void 0,
              interactiveHeader: (E = M.interactiveHeader) != null ? E : void 0,
              interactiveType: (k = M.interactiveType) != null ? k : void 0,
              interactivePayload:
                (I = M.interactivePayload) != null ? I : void 0,
              nativeFlowInteractiveMsg:
                M.interactiveType ===
                r("WAWebInteractiveMessageType").NATIVE_FLOW
                  ? !0
                  : void 0,
              nativeFlowName: (T = M.nativeFlowName) != null ? T : void 0,
            },
            J = yield new (o("WAWebMediaPrep").MediaPrep)(
              O.type,
              (d || (d = n("Promise"))).resolve(O),
            ).sendToChat({
              chat: $,
              options: o(
                "WAWebGetNewsletterContextForForwardedMsg",
              ).maybeStripNewsletterForwardMetadata({
                forwardable: Y,
                destination: $.id,
                source: M.id.remote,
                isOriginalMsgForwarded: M.isForwarded,
                isQuestionOrQuestionReply:
                  M.isQuestion || M.questionReplyQuotedMessage != null,
              }),
            });
          if (O.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER) {
            var Z,
              ee,
              te,
              ne,
              re,
              oe = {
                stickerSendOrigin: o("WAWebWamEnumStickerSendOriginType")
                  .STICKER_SEND_ORIGIN_TYPE.FORWARD,
                stickerIsAnimated: !!(
                  (Z = M.mediaData) != null && Z.isAnimated
                ),
                stickerIsFirstParty: !!(
                  (ee = M.mediaData) != null && ee.isFirstParty
                ),
                stickerIsFromStickerMaker: !!(
                  (te = M.mediaData) != null && te.isFromStickerMaker
                ),
                stickerIsLottie: !!((ne = M.mediaData) != null && ne.isLottie),
              },
              ae = new (o("WAWebStickerSendWamEvent").StickerSendWamEvent)(oe),
              ie = o("WAWebWebpMetadata").getStickerMakerSourceType(
                (re = M.mediaData) == null ? void 0 : re.stickerMakerSourceType,
              );
            (ie != null && (ae.stickerMakerSourceType = ie), ae.commit());
          }
          return J;
        })),
        _.apply(this, arguments)
      );
    }
    l.forwardMediaMsg = p;
  },
  98,
);
