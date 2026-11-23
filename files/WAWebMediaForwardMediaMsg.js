__d(
  "WAWebMediaForwardMediaMsg",
  [
    "WALogger",
    "WAWebBotUtils",
    "WAWebForwardDocCaptionGating",
    "WAWebForwardMediaUtils",
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
    "WAWebMsgType",
    "WAWebSoundStickerUtils",
    "WAWebStatusGatingUtils",
    "WAWebStickerSendWamEvent",
    "WAWebWamEnumStickerSendOriginType",
    "WAWebWamEnumWebcRmrReasonCode",
    "WAWebWebpMetadata",
    "WAWebWid",
    "err",
    "isStringNullOrEmpty",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e, t) {
      return t || o("WAWebMsgGetters").getIsNewsletterMsg(e);
    }
    async function m(t) {
      var n,
        a,
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
        I = t.aiThreadInfo,
        T = t.appendedText,
        D = t.associationOptions,
        x = t.chat,
        $ = t.forwardReachScore,
        P = t.includeCaption,
        N = P === void 0 ? !1 : P,
        M = t.msg,
        w = t.multicast,
        A = w === void 0 ? !1 : w,
        F = t.onMsgKeyCreated,
        O = t.pairedMediaType,
        B = t.threadId;
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose(["Prepping media msg"])),
      );
      var W = M.mediaObject;
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
              M.id.toString(),
              M.type,
            )
            .sendLogs("media-fault: forwardMediaMsg msg without mediaObject"),
          Promise.reject(r("err")("non initialized media"))
        );
      var q = M.mediaData.toJSON(),
        U = o("WAWebFrontendMsgGetters").getMaybeChat(M),
        V =
          (U == null || (n = U.contact) == null || (n = n.id) == null
            ? void 0
            : n.isBot()) === !0,
        H =
          (a = U == null || (i = U.id) == null ? void 0 : i.toLogString()) !=
          null
            ? a
            : "unknown",
        G = q.mediaBlob instanceof r("WAWebMediaOpaqueData"),
        z = (l = q.filehash) != null ? l : "none";
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
        d(M, V) &&
          !o("WAWebMediaMmsV4Upload").getBlobFromMediaObject(W) &&
          (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[media-fwd] source blob missing, downloading",
              ])),
          ),
          await M.downloadMedia({
            downloadEvenIfExpensive: !0,
            rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
              .SEND_TO_CHAT,
            isUserInitiated: !0,
          })),
        q.preview != null && (q.preview = W.contentInfo._preview),
        q.mediaBlob instanceof r("WAWebMediaOpaqueData") &&
          q.mediaBlob.retain());
      var j = { mimetype: q.mimetype },
        K = q.isGif ? babelHelpers.extends({}, j, { isGif: !0 }) : j;
      q.type === o("WAWebMediaTypes").OUTWARD_TYPES.PTT &&
        !o("WAWebMsgGetters").getHasOriginatedFromNewsletter(M) &&
        (q.type = o("WAWebMediaTypes").OUTWARD_TYPES.AUDIO);
      var Q = {
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
        X =
          q.type === o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT &&
          (M.isFromTemplate || M.isDynamicReplyButtonsMsg),
        Y =
          X || q.type === o("WAWebMediaTypes").OUTWARD_TYPES.PRODUCT
            ? M.caption
            : void 0;
      (N &&
        (q.type === o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE ||
          q.type === o("WAWebMediaTypes").OUTWARD_TYPES.VIDEO ||
          q.type === o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT ||
          q.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER_PACK) &&
        (Y = M.caption),
        q.type === o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT &&
          Y != null &&
          Y === M.filename &&
          o("WAWebForwardDocCaptionGating").isForwardDocCaptionEnabled() &&
          (Y = void 0),
        o("WAWebBotUtils").isMetaAiBot(x.id) &&
          !r("isStringNullOrEmpty")(T) &&
          r("isStringNullOrEmpty")(Y) &&
          (Y = T));
      var J = o("WAWebMediaFastForwardUtils").canEnableFastForward(x.contact),
        Z =
          M.id.remote.isStatus() &&
          o("WAWebStatusGatingUtils").isStatusReshareViewerFlowEnabled(),
        ee =
          !Z &&
          o("WAWebMediaFastForwardUtils").canEnableFastForward(
            o("WAWebFrontendMsgGetters").getChat(M).contact,
          ),
        te = {
          parentMsgKey: D == null ? void 0 : D.parentMsgKey,
          associationType: D == null ? void 0 : D.associationType,
          viewMode: D == null ? void 0 : D.viewMode,
          pairedMediaType: O,
          aiThreadInfo: I,
          threadId: B,
          onMsgKeyCreated: F != null ? F : void 0,
          forwardedFromWeb: !0,
          canEnableFastForward: J && ee,
          caption: Y,
          type: M.type,
          mentionedJidList: M.mentionedJidList,
          groupMentions: M.groupMentions,
          footer:
            q.type === o("WAWebMediaTypes").OUTWARD_TYPES.PRODUCT
              ? M.footer
              : void 0,
          addEvenWhilePreparing:
            M.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
          useBasePropsType: M.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
          placeholderProps: K,
          isForwarded: o("WAWebMsgGetters").getShouldDisplayAsForwarded(M),
          forwardingScore: o(
            "WAWebForwardMediaUtils",
          ).getMsgForwardingScoreWhenForwarded(M),
          forwardReachScore: $,
          multicast: A,
          productMsgOptions: Q,
          isAvatar: (m = M.isAvatar) != null ? m : !1,
          isAiSticker: M.isAiSticker === !0 ? !0 : void 0,
          stickerAudio: o("WAWebSoundStickerUtils").getSendableStickerAudio(
            M.stickerAudio,
            x.id,
          ),
          forwardedNewsletterMessageInfo: o(
            "WAWebGetNewsletterContextForForwardedMsg",
          ).getNewsletterContextForForwardedMsg(M),
          forwardedAiBotMessageInfo: o(
            "WAWebGetAiBotContextForForwardedMsg",
          ).getAiBotContextForForwardedMsg(M),
          aiProvenance:
            o("WAWebMsgGetters").getIsNewsletterMsg(M) &&
            r("WAWebWid").isNewsletter(x.id)
              ? M.aiProvenance
              : void 0,
          stickers: (p = M.stickers) != null ? p : void 0,
          publisher: (_ = M.stickerPackPublisher) != null ? _ : void 0,
          fileLength: (f = M.size) != null ? f : void 0,
          description:
            q.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER_PACK &&
            M.description != null
              ? M.description
              : "",
          stickerPackId: (g = M.stickerPackId) != null ? g : void 0,
          thumbnailDirectPath: (h = M.thumbnailDirectPath) != null ? h : void 0,
          thumbnailSha256: (y = M.thumbnailSha256) != null ? y : void 0,
          thumbnailEncSha256: (C = M.thumbnailEncSha256) != null ? C : void 0,
          trayIconFileName: (b = M.trayIconFileName) != null ? b : void 0,
          stickerPackSize: (v = M.stickerPackSize) != null ? v : void 0,
          interactiveAnnotations:
            (S = M.interactiveAnnotations) != null ? S : void 0,
          interactiveHeader: (R = M.interactiveHeader) != null ? R : void 0,
          interactiveType: (L = M.interactiveType) != null ? L : void 0,
          interactivePayload: (E = M.interactivePayload) != null ? E : void 0,
          nativeFlowInteractiveMsg:
            M.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW
              ? !0
              : void 0,
          nativeFlowName: (k = M.nativeFlowName) != null ? k : void 0,
        },
        ne = await new (r("WAWebMediaPrep"))(
          r("nullthrows")(q.type),
          Promise.resolve(q),
        ).sendToChat({
          chat: x,
          options: o(
            "WAWebGetNewsletterContextForForwardedMsg",
          ).maybeStripNewsletterForwardMetadata({
            forwardable: te,
            destination: x.id,
            source: M.id.remote,
            isOriginalMsgForwarded: M.isForwarded,
            isQuestionOrQuestionReply:
              M.isQuestion || M.questionReplyQuotedMessage != null,
          }),
        });
      if (q.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER) {
        var re,
          oe,
          ae,
          ie,
          le,
          se,
          ue = {
            stickerSendOrigin: o("WAWebWamEnumStickerSendOriginType")
              .STICKER_SEND_ORIGIN_TYPE.FORWARD,
            stickerIsAi:
              M.isAiSticker === !0 ||
              ((re = M.mediaData) == null ? void 0 : re.isAiSticker) === !0,
            stickerIsAnimated: !!((oe = M.mediaData) != null && oe.isAnimated),
            stickerIsFirstParty: !!(
              (ae = M.mediaData) != null && ae.isFirstParty
            ),
            stickerIsFromStickerMaker: !!(
              (ie = M.mediaData) != null && ie.isFromStickerMaker
            ),
            stickerIsLottie: !!((le = M.mediaData) != null && le.isLottie),
          },
          ce = new (o("WAWebStickerSendWamEvent").StickerSendWamEvent)(ue),
          de = o("WAWebWebpMetadata").getStickerMakerSourceType(
            (se = M.mediaData) == null ? void 0 : se.stickerMakerSourceType,
          );
        (de != null && (ce.stickerMakerSourceType = de), ce.commit());
      }
      return ne;
    }
    l.forwardMediaMsg = m;
  },
  98,
);
