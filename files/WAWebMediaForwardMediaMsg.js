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
        B = t.pathfinderAccountToken,
        W = t.threadId;
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose(["Prepping media msg"])),
      );
      var q = M.mediaObject;
      if (!q)
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
      var U = M.mediaData.toJSON(),
        V = o("WAWebFrontendMsgGetters").getMaybeChat(M),
        H =
          (V == null || (n = V.contact) == null || (n = n.id) == null
            ? void 0
            : n.isBot()) === !0,
        G =
          (a = V == null || (i = V.id) == null ? void 0 : i.toLogString()) !=
          null
            ? a
            : "unknown",
        z = U.mediaBlob instanceof r("WAWebMediaOpaqueData"),
        j = (l = U.filehash) != null ? l : "none";
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
        G,
        H,
        U.type,
        z,
        j,
        q.downloadStage,
      ),
        d(M, H) &&
          !o("WAWebMediaMmsV4Upload").getBlobFromMediaObject(q) &&
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
        U.preview != null && (U.preview = q.contentInfo._preview),
        U.mediaBlob instanceof r("WAWebMediaOpaqueData") &&
          U.mediaBlob.retain());
      var K = { mimetype: U.mimetype },
        Q = U.isGif ? babelHelpers.extends({}, K, { isGif: !0 }) : K;
      U.type === o("WAWebMediaTypes").OUTWARD_TYPES.PTT &&
        !o("WAWebMsgGetters").getHasOriginatedFromNewsletter(M) &&
        (U.type = o("WAWebMediaTypes").OUTWARD_TYPES.AUDIO);
      var X = {
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
        Y =
          U.type === o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT &&
          (M.isFromTemplate || M.isDynamicReplyButtonsMsg),
        J =
          Y || U.type === o("WAWebMediaTypes").OUTWARD_TYPES.PRODUCT
            ? M.caption
            : void 0;
      (N &&
        (U.type === o("WAWebMediaTypes").OUTWARD_TYPES.IMAGE ||
          U.type === o("WAWebMediaTypes").OUTWARD_TYPES.VIDEO ||
          U.type === o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT ||
          U.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER_PACK) &&
        (J = M.caption),
        U.type === o("WAWebMediaTypes").OUTWARD_TYPES.DOCUMENT &&
          J != null &&
          J === M.filename &&
          o("WAWebForwardDocCaptionGating").isForwardDocCaptionEnabled() &&
          (J = void 0),
        o("WAWebBotUtils").isMetaAiBot(x.id) &&
          !r("isStringNullOrEmpty")(T) &&
          r("isStringNullOrEmpty")(J) &&
          (J = T));
      var Z = o("WAWebMediaFastForwardUtils").canEnableFastForward(x.contact),
        ee =
          M.id.remote.isStatus() &&
          o("WAWebStatusGatingUtils").isStatusReshareViewerFlowEnabled(),
        te =
          !ee &&
          o("WAWebMediaFastForwardUtils").canEnableFastForward(
            o("WAWebFrontendMsgGetters").getChat(M).contact,
          ),
        ne = {
          parentMsgKey: D == null ? void 0 : D.parentMsgKey,
          associationType: D == null ? void 0 : D.associationType,
          viewMode: D == null ? void 0 : D.viewMode,
          pairedMediaType: O,
          pathfinderAccountToken: B,
          aiThreadInfo: I,
          threadId: W,
          onMsgKeyCreated: F != null ? F : void 0,
          forwardedFromWeb: !0,
          canEnableFastForward: Z && te,
          caption: J,
          type: M.type,
          mentionedJidList: M.mentionedJidList,
          groupMentions: M.groupMentions,
          footer:
            U.type === o("WAWebMediaTypes").OUTWARD_TYPES.PRODUCT
              ? M.footer
              : void 0,
          addEvenWhilePreparing:
            M.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
          useBasePropsType: M.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
          placeholderProps: Q,
          isForwarded: o("WAWebMsgGetters").getShouldDisplayAsForwarded(M),
          forwardingScore: o(
            "WAWebForwardMediaUtils",
          ).getMsgForwardingScoreWhenForwarded(M),
          forwardReachScore: $,
          multicast: A,
          productMsgOptions: X,
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
            U.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER_PACK &&
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
        re = await new (r("WAWebMediaPrep"))(
          r("nullthrows")(U.type),
          Promise.resolve(U),
        ).sendToChat({
          chat: x,
          options: o(
            "WAWebGetNewsletterContextForForwardedMsg",
          ).maybeStripNewsletterForwardMetadata({
            forwardable: ne,
            destination: x.id,
            source: M.id.remote,
            isOriginalMsgForwarded: M.isForwarded,
            isQuestionOrQuestionReply:
              M.isQuestion || M.questionReplyQuotedMessage != null,
          }),
        });
      if (U.type === o("WAWebMediaTypes").OUTWARD_TYPES.STICKER) {
        var oe,
          ae,
          ie,
          le,
          se,
          ue,
          ce = {
            stickerSendOrigin: o("WAWebWamEnumStickerSendOriginType")
              .STICKER_SEND_ORIGIN_TYPE.FORWARD,
            stickerIsAi:
              M.isAiSticker === !0 ||
              ((oe = M.mediaData) == null ? void 0 : oe.isAiSticker) === !0,
            stickerIsAnimated: !!((ae = M.mediaData) != null && ae.isAnimated),
            stickerIsFirstParty: !!(
              (ie = M.mediaData) != null && ie.isFirstParty
            ),
            stickerIsFromStickerMaker: !!(
              (le = M.mediaData) != null && le.isFromStickerMaker
            ),
            stickerIsLottie: !!((se = M.mediaData) != null && se.isLottie),
          },
          de = new (o("WAWebStickerSendWamEvent").StickerSendWamEvent)(ce),
          me = o("WAWebWebpMetadata").getStickerMakerSourceType(
            (ue = M.mediaData) == null ? void 0 : ue.stickerMakerSourceType,
          );
        (me != null && (de.stickerMakerSourceType = me), de.commit());
      }
      return re;
    }
    l.forwardMediaMsg = m;
  },
  98,
);
