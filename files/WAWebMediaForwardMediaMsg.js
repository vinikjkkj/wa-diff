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
            O = t.pairedMediaType,
            B = t.threadId;
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Prepping media msg",
              ])),
          );
          var W = w.mediaObject;
          if (!W)
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
          var q = w.mediaData.toJSON(),
            U = o("WAWebFrontendMsgGetters").getMaybeChat(w),
            V =
              (U == null || (a = U.contact) == null || (a = a.id) == null
                ? void 0
                : a.isBot()) === !0,
            H =
              (i =
                U == null || (l = U.id) == null ? void 0 : l.toLogString()) !=
              null
                ? i
                : "unknown",
            G = q.mediaBlob instanceof r("WAWebMediaOpaqueData"),
            z = (p = q.filehash) != null ? p : "none";
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
            H,
            V,
            q.type,
            G,
            z,
            W.downloadStage,
          ),
            m(w, V) &&
              !o("WAWebMediaMmsV4Upload").getBlobFromMediaObject(W) &&
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
            q.preview != null && (q.preview = W.contentInfo._preview),
            q.mediaBlob instanceof r("WAWebMediaOpaqueData") &&
              q.mediaBlob.retain());
          var j = { mimetype: q.mimetype },
            K = q.isGif ? babelHelpers.extends({}, j, { isGif: !0 }) : j;
          q.type === o("WAWebMediaTypes").OUTWARD_TYPES.PTT &&
            !o("WAWebMsgGetters").getHasOriginatedFromNewsletter(w) &&
            (q.type = o("WAWebMediaTypes").OUTWARD_TYPES.AUDIO);
          var Q = {
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
            X =
              q.type === o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT &&
              (w.isFromTemplate || w.isDynamicReplyButtonsMsg),
            Y =
              X || q.type === o("WAWebMediaTypes").OUTWARD_TYPES.PRODUCT
                ? w.caption
                : void 0;
          (M &&
            (q.type === o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE ||
              q.type === o("WAWebMediaTypes").OUTWARD_TYPES.VIDEO ||
              q.type === o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT ||
              q.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER_PACK) &&
            (Y = w.caption),
            q.type === o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT &&
              Y != null &&
              Y === w.filename &&
              o("WAWebForwardDocCaptionGating").isForwardDocCaptionEnabled() &&
              (Y = void 0),
            o("WAWebBotUtils").isMetaAiBot(P.id) &&
              !r("isStringNullOrEmpty")(x) &&
              r("isStringNullOrEmpty")(Y) &&
              (Y = x));
          var J = o("WAWebMediaFastForwardUtils").canEnableFastForward(
              P.contact,
            ),
            Z = o("WAWebMediaFastForwardUtils").canEnableFastForward(
              o("WAWebFrontendMsgGetters").getChat(w).contact,
            ),
            ee = {
              parentMsgKey: $ == null ? void 0 : $.parentMsgKey,
              associationType: $ == null ? void 0 : $.associationType,
              viewMode: $ == null ? void 0 : $.viewMode,
              pairedMediaType: O,
              aiThreadInfo: D,
              threadId: B,
              forwardedFromWeb: !0,
              canEnableFastForward: J && Z,
              caption: Y,
              type: w.type,
              mentionedJidList: w.mentionedJidList,
              groupMentions: w.groupMentions,
              footer:
                q.type === o("WAWebMediaTypes").OUTWARD_TYPES.PRODUCT
                  ? w.footer
                  : void 0,
              addEvenWhilePreparing:
                w.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
              useBasePropsType:
                w.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
              placeholderProps: K,
              isForwarded: o("WAWebMsgGetters").getShouldDisplayAsForwarded(w),
              forwardingScore:
                o("WAWebMsgModelUtils").getMsgForwardingScoreWhenForwarded(w),
              multicast: F,
              productMsgOptions: Q,
              isAvatar: (_ = w.isAvatar) != null ? _ : !1,
              isAiSticker: w.isAiSticker === !0 ? !0 : void 0,
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
                q.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER_PACK &&
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
            te = yield new (o("WAWebMediaPrep").MediaPrep)(
              q.type,
              (d || (d = n("Promise"))).resolve(q),
            ).sendToChat({
              chat: P,
              options: o(
                "WAWebGetNewsletterContextForForwardedMsg",
              ).maybeStripNewsletterForwardMetadata({
                forwardable: ee,
                destination: P.id,
                source: w.id.remote,
                isOriginalMsgForwarded: w.isForwarded,
                isQuestionOrQuestionReply:
                  w.isQuestion || w.questionReplyQuotedMessage != null,
              }),
            });
          if (q.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER) {
            var ne,
              re,
              oe,
              ae,
              ie,
              le,
              se = {
                stickerSendOrigin: o("WAWebWamEnumStickerSendOriginType")
                  .STICKER_SEND_ORIGIN_TYPE.FORWARD,
                stickerIsAi:
                  w.isAiSticker === !0 ||
                  ((ne = w.mediaData) == null ? void 0 : ne.isAiSticker) === !0,
                stickerIsAnimated: !!(
                  (re = w.mediaData) != null && re.isAnimated
                ),
                stickerIsFirstParty: !!(
                  (oe = w.mediaData) != null && oe.isFirstParty
                ),
                stickerIsFromStickerMaker: !!(
                  (ae = w.mediaData) != null && ae.isFromStickerMaker
                ),
                stickerIsLottie: !!((ie = w.mediaData) != null && ie.isLottie),
              },
              ue = new (o("WAWebStickerSendWamEvent").StickerSendWamEvent)(se),
              ce = o("WAWebWebpMetadata").getStickerMakerSourceType(
                (le = w.mediaData) == null ? void 0 : le.stickerMakerSourceType,
              );
            (ce != null && (ue.stickerMakerSourceType = ce), ue.commit());
          }
          return te;
        })),
        _.apply(this, arguments)
      );
    }
    l.forwardMediaMsg = p;
  },
  98,
);
