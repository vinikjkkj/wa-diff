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
            D = t.aiThreadInfo,
            x = t.appendedText,
            $ = t.associationOptions,
            P = t.chat,
            N = t.includeCaption,
            M = N === void 0 ? !1 : N,
            w = t.msg,
            A = t.multicast,
            F = A === void 0 ? !1 : A,
            O = t.threadId;
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Prepping media msg",
              ])),
          );
          var B = w.mediaObject;
          if (!B)
            return (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "id: ",
                      " type: ",
                      "",
                    ])),
                  w.id.toString(),
                  w.type,
                )
                .sendLogs(
                  "media-fault: forwardMediaMsg msg without mediaObject",
                ),
              (d || (d = n("Promise"))).reject(
                r("err")("non initialized media"),
              )
            );
          var W = w.mediaData.toJSON(),
            q = o("WAWebFrontendMsgGetters").getMaybeChat(w),
            U =
              (q == null || (a = q.contact) == null || (a = a.id) == null
                ? void 0
                : a.isBot()) === !0,
            V =
              (i =
                q == null || (l = q.id) == null ? void 0 : l.toLogString()) !=
              null
                ? i
                : "unknown",
            H = W.mediaBlob instanceof r("WAWebMediaOpaqueData"),
            G = (p = W.filehash) != null ? p : "none";
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
            V,
            U,
            W.type,
            H,
            G,
            B.downloadStage,
          ),
            m(w, U) &&
              !o("WAWebMediaMmsV4Upload").getBlobFromMediaObject(B) &&
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[media-fwd] source blob missing, downloading",
                  ])),
              ),
              yield w.downloadMedia({
                downloadEvenIfExpensive: !0,
                rmrReason: o("WAWebWamEnumWebcRmrReasonCode")
                  .WEBC_RMR_REASON_CODE.SEND_TO_CHAT,
                isUserInitiated: !0,
              })),
            W.preview != null && (W.preview = B.contentInfo._preview),
            W.mediaBlob instanceof r("WAWebMediaOpaqueData") &&
              W.mediaBlob.retain());
          var z = { mimetype: W.mimetype },
            j = W.isGif ? babelHelpers.extends({}, z, { isGif: !0 }) : z;
          W.type === o("WAWebMediaTypes").OUTWARD_TYPES.PTT &&
            !o("WAWebMsgGetters").getHasOriginatedFromNewsletter(w) &&
            (W.type = o("WAWebMediaTypes").OUTWARD_TYPES.AUDIO);
          var K = {
              businessOwnerJid: w.businessOwnerJid,
              productId: w.productId,
              currencyCode: w.currencyCode,
              priceAmount1000: w.priceAmount1000,
              salePriceAmount1000: w.salePriceAmount1000,
              retailerId: w.retailerId,
              url: w.url,
              productImageCount: w.productImageCount,
              title: w.title,
              description: w.description,
            },
            Q =
              W.type === o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT &&
              (w.isFromTemplate || w.isDynamicReplyButtonsMsg),
            X =
              Q || W.type === o("WAWebMediaTypes").OUTWARD_TYPES.PRODUCT
                ? w.caption
                : void 0;
          (M &&
            (W.type === o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE ||
              W.type === o("WAWebMediaTypes").OUTWARD_TYPES.VIDEO ||
              W.type === o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT ||
              W.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER_PACK) &&
            (X = w.caption),
            W.type === o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT &&
              X != null &&
              X === w.filename &&
              o("WAWebForwardDocCaptionGating").isForwardDocCaptionEnabled() &&
              (X = void 0),
            o("WAWebBotUtils").isMetaAiBot(P.id) &&
              !r("isStringNullOrEmpty")(x) &&
              r("isStringNullOrEmpty")(X) &&
              (X = x));
          var Y = o("WAWebMediaFastForwardUtils").canEnableFastForward(
              P.contact,
            ),
            J = o("WAWebMediaFastForwardUtils").canEnableFastForward(
              o("WAWebFrontendMsgGetters").getChat(w).contact,
            ),
            Z = {
              parentMsgKey: $ == null ? void 0 : $.parentMsgKey,
              associationType: $ == null ? void 0 : $.associationType,
              viewMode: $ == null ? void 0 : $.viewMode,
              aiThreadInfo: D,
              threadId: O,
              forwardedFromWeb: !0,
              canEnableFastForward: Y && J,
              caption: X,
              type: w.type,
              mentionedJidList: w.mentionedJidList,
              groupMentions: w.groupMentions,
              footer:
                W.type === o("WAWebMediaTypes").OUTWARD_TYPES.PRODUCT
                  ? w.footer
                  : void 0,
              addEvenWhilePreparing:
                w.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
              useBasePropsType:
                w.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
              placeholderProps: j,
              isForwarded: o("WAWebMsgGetters").getShouldDisplayAsForwarded(w),
              forwardingScore:
                o("WAWebMsgModelUtils").getMsgForwardingScoreWhenForwarded(w),
              multicast: F,
              productMsgOptions: K,
              isAvatar: (_ = w.isAvatar) != null ? _ : !1,
              forwardedNewsletterMessageInfo: o(
                "WAWebGetNewsletterContextForForwardedMsg",
              ).getNewsletterContextForForwardedMsg(w),
              forwardedAiBotMessageInfo: o(
                "WAWebGetAiBotContextForForwardedMsg",
              ).getAiBotContextForForwardedMsg(w),
              aiProvenance:
                o("WAWebMsgGetters").getIsNewsletterMsg(w) &&
                r("WAWebWid").isNewsletter(P.id)
                  ? w.aiProvenance
                  : void 0,
              stickers: (f = w.stickers) != null ? f : void 0,
              publisher: (g = w.stickerPackPublisher) != null ? g : void 0,
              fileLength: (h = w.size) != null ? h : void 0,
              description:
                W.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER_PACK &&
                w.description != null
                  ? w.description
                  : "",
              stickerPackId: (y = w.stickerPackId) != null ? y : void 0,
              thumbnailDirectPath:
                (C = w.thumbnailDirectPath) != null ? C : void 0,
              thumbnailSha256: (b = w.thumbnailSha256) != null ? b : void 0,
              thumbnailEncSha256:
                (v = w.thumbnailEncSha256) != null ? v : void 0,
              trayIconFileName: (S = w.trayIconFileName) != null ? S : void 0,
              stickerPackSize: (R = w.stickerPackSize) != null ? R : void 0,
              interactiveAnnotations:
                (L = w.interactiveAnnotations) != null ? L : void 0,
              interactiveHeader: (E = w.interactiveHeader) != null ? E : void 0,
              interactiveType: (k = w.interactiveType) != null ? k : void 0,
              interactivePayload:
                (I = w.interactivePayload) != null ? I : void 0,
              nativeFlowInteractiveMsg:
                w.interactiveType ===
                r("WAWebInteractiveMessageType").NATIVE_FLOW
                  ? !0
                  : void 0,
              nativeFlowName: (T = w.nativeFlowName) != null ? T : void 0,
            },
            ee = yield new (o("WAWebMediaPrep").MediaPrep)(
              W.type,
              (d || (d = n("Promise"))).resolve(W),
            ).sendToChat({
              chat: P,
              options: o(
                "WAWebGetNewsletterContextForForwardedMsg",
              ).maybeStripNewsletterForwardMetadata({
                forwardable: Z,
                destination: P.id,
                source: w.id.remote,
                isOriginalMsgForwarded: w.isForwarded,
                isQuestionOrQuestionReply:
                  w.isQuestion || w.questionReplyQuotedMessage != null,
              }),
            });
          if (W.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER) {
            var te,
              ne,
              re,
              oe,
              ae,
              ie = {
                stickerSendOrigin: o("WAWebWamEnumStickerSendOriginType")
                  .STICKER_SEND_ORIGIN_TYPE.FORWARD,
                stickerIsAnimated: !!(
                  (te = w.mediaData) != null && te.isAnimated
                ),
                stickerIsFirstParty: !!(
                  (ne = w.mediaData) != null && ne.isFirstParty
                ),
                stickerIsFromStickerMaker: !!(
                  (re = w.mediaData) != null && re.isFromStickerMaker
                ),
                stickerIsLottie: !!((oe = w.mediaData) != null && oe.isLottie),
              },
              le = new (o("WAWebStickerSendWamEvent").StickerSendWamEvent)(ie),
              se = o("WAWebWebpMetadata").getStickerMakerSourceType(
                (ae = w.mediaData) == null ? void 0 : ae.stickerMakerSourceType,
              );
            (se != null && (le.stickerMakerSourceType = se), le.commit());
          }
          return ee;
        })),
        _.apply(this, arguments)
      );
    }
    l.forwardMediaMsg = p;
  },
  98,
);
