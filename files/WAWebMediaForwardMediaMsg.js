__d(
  "WAWebMediaForwardMediaMsg",
  [
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
    "err",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    async function d(t) {
      var n,
        a,
        i,
        l,
        d,
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
        k = t.appendedText,
        I = t.associationOptions,
        T = t.chat,
        D = t.includeCaption,
        x = D === void 0 ? !1 : D,
        $ = t.msg,
        P = t.multicast,
        N = P === void 0 ? !1 : P;
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose(["Prepping media msg"])),
      );
      var M = $.mediaObject;
      if (!M)
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "id: ",
                  " type: ",
                  "",
                ])),
              $.id.toString(),
              $.type,
            )
            .sendLogs("media-fault: forwardMediaMsg msg without mediaObject"),
          Promise.reject(r("err")("non initialized media"))
        );
      var w = $.mediaData.toJSON(),
        A = o("WAWebFrontendMsgGetters").getMaybeChat($),
        F =
          (A == null || (n = A.contact) == null || (n = n.id) == null
            ? void 0
            : n.isBot()) === !0,
        O =
          (a = A == null || (i = A.id) == null ? void 0 : i.toLogString()) !=
          null
            ? a
            : "unknown",
        B = w.mediaBlob instanceof r("WAWebMediaOpaqueData"),
        W = (l = w.filehash) != null ? l : "none";
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
        O,
        F,
        w.type,
        B,
        W,
        M.downloadStage,
      ),
        F &&
          !o("WAWebMediaMmsV4Upload").getBlobFromMediaObject(M) &&
          (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[media-fwd] bot blob missing, downloading",
              ])),
          ),
          await $.downloadMedia({
            downloadEvenIfExpensive: !0,
            rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
              .SEND_TO_CHAT,
            isUserInitiated: !0,
          })),
        w.preview != null && (w.preview = M.contentInfo._preview),
        w.mediaBlob instanceof r("WAWebMediaOpaqueData") &&
          w.mediaBlob.retain());
      var q = { mimetype: w.mimetype },
        U = w.isGif ? babelHelpers.extends({}, q, { isGif: !0 }) : q;
      w.type === o("WAWebMediaTypes").OUTWARD_TYPES.PTT &&
        !o("WAWebMsgGetters").getHasOriginatedFromNewsletter($) &&
        (w.type = o("WAWebMediaTypes").OUTWARD_TYPES.AUDIO);
      var V = {
          businessOwnerJid: $.businessOwnerJid,
          productId: $.productId,
          currencyCode: $.currencyCode,
          priceAmount1000: $.priceAmount1000,
          salePriceAmount1000: $.salePriceAmount1000,
          retailerId: $.retailerId,
          url: $.url,
          productImageCount: $.productImageCount,
          title: $.title,
          description: $.description,
        },
        H =
          w.type === o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT &&
          ($.isFromTemplate || $.isDynamicReplyButtonsMsg),
        G =
          H || w.type === o("WAWebMediaTypes").OUTWARD_TYPES.PRODUCT
            ? $.caption
            : void 0;
      (x &&
        (w.type === o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE ||
          w.type === o("WAWebMediaTypes").OUTWARD_TYPES.VIDEO ||
          w.type === o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT ||
          w.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER_PACK) &&
        (G = $.caption),
        w.type === o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT &&
          G != null &&
          G === $.filename &&
          o("WAWebForwardDocCaptionGating").isForwardDocCaptionEnabled() &&
          (G = void 0),
        o("WAWebBotUtils").isMetaAiBot(T.id) &&
          !r("isStringNullOrEmpty")(k) &&
          r("isStringNullOrEmpty")(G) &&
          (G = k));
      var z = o("WAWebMediaFastForwardUtils").canEnableFastForward(T.contact),
        j = o("WAWebMediaFastForwardUtils").canEnableFastForward(
          o("WAWebFrontendMsgGetters").getChat($).contact,
        ),
        K = {
          parentMsgKey: I == null ? void 0 : I.parentMsgKey,
          associationType: I == null ? void 0 : I.associationType,
          viewMode: I == null ? void 0 : I.viewMode,
          forwardedFromWeb: !0,
          canEnableFastForward: z && j,
          caption: G,
          type: $.type,
          mentionedJidList: $.mentionedJidList,
          groupMentions: $.groupMentions,
          footer:
            w.type === o("WAWebMediaTypes").OUTWARD_TYPES.PRODUCT
              ? $.footer
              : void 0,
          addEvenWhilePreparing:
            $.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
          useBasePropsType: $.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
          placeholderProps: U,
          isForwarded: o("WAWebMsgGetters").getShouldDisplayAsForwarded($),
          forwardingScore:
            o("WAWebMsgModelUtils").getMsgForwardingScoreWhenForwarded($),
          multicast: N,
          productMsgOptions: V,
          isAvatar: (d = $.isAvatar) != null ? d : !1,
          forwardedNewsletterMessageInfo: o(
            "WAWebGetNewsletterContextForForwardedMsg",
          ).getNewsletterContextForForwardedMsg($),
          forwardedAiBotMessageInfo: o(
            "WAWebGetAiBotContextForForwardedMsg",
          ).getAiBotContextForForwardedMsg($),
          stickers: (m = $.stickers) != null ? m : void 0,
          publisher: (p = $.stickerPackPublisher) != null ? p : void 0,
          fileLength: (_ = $.size) != null ? _ : void 0,
          description:
            w.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER_PACK &&
            $.description != null
              ? $.description
              : "",
          stickerPackId: (f = $.stickerPackId) != null ? f : void 0,
          thumbnailDirectPath: (g = $.thumbnailDirectPath) != null ? g : void 0,
          thumbnailSha256: (h = $.thumbnailSha256) != null ? h : void 0,
          thumbnailEncSha256: (y = $.thumbnailEncSha256) != null ? y : void 0,
          trayIconFileName: (C = $.trayIconFileName) != null ? C : void 0,
          stickerPackSize: (b = $.stickerPackSize) != null ? b : void 0,
          interactiveAnnotations:
            (v = $.interactiveAnnotations) != null ? v : void 0,
          interactiveHeader: (S = $.interactiveHeader) != null ? S : void 0,
          interactiveType: (R = $.interactiveType) != null ? R : void 0,
          interactivePayload: (L = $.interactivePayload) != null ? L : void 0,
          nativeFlowInteractiveMsg:
            $.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW
              ? !0
              : void 0,
          nativeFlowName: (E = $.nativeFlowName) != null ? E : void 0,
        },
        Q = await new (o("WAWebMediaPrep").MediaPrep)(
          w.type,
          Promise.resolve(w),
        ).sendToChat({
          chat: T,
          options: o(
            "WAWebGetNewsletterContextForForwardedMsg",
          ).maybeStripNewsletterForwardMetadata({
            forwardable: K,
            destination: T.id,
            source: $.id.remote,
            isOriginalMsgForwarded: $.isForwarded,
            isQuestionOrQuestionReply:
              $.isQuestion || $.questionReplyQuotedMessage != null,
          }),
        });
      if (w.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER) {
        var X,
          Y,
          J,
          Z,
          ee,
          te = {
            stickerSendOrigin: o("WAWebWamEnumStickerSendOriginType")
              .STICKER_SEND_ORIGIN_TYPE.FORWARD,
            stickerIsAnimated: !!((X = $.mediaData) != null && X.isAnimated),
            stickerIsFirstParty: !!(
              (Y = $.mediaData) != null && Y.isFirstParty
            ),
            stickerIsFromStickerMaker: !!(
              (J = $.mediaData) != null && J.isFromStickerMaker
            ),
            stickerIsLottie: !!((Z = $.mediaData) != null && Z.isLottie),
          },
          ne = new (o("WAWebStickerSendWamEvent").StickerSendWamEvent)(te),
          re = o("WAWebWebpMetadata").getStickerMakerSourceType(
            (ee = $.mediaData) == null ? void 0 : ee.stickerMakerSourceType,
          );
        (re != null && (ne.stickerMakerSourceType = re), ne.commit());
      }
      return Q;
    }
    l.forwardMediaMsg = d;
  },
  98,
);
