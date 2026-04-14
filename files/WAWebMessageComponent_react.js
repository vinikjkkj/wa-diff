__d(
  "WAWebMessageComponent.react",
  [
    "fbt",
    "WALogger",
    "WAMemoizeOne",
    "WAWebAlbumMessageComponent.react",
    "WAWebAutomatedGreetingMessageText.react",
    "WAWebBizProduct",
    "WAWebBotGenTypingIndicatorMsg",
    "WAWebBroadcastNotification.react",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebDisplayType",
    "WAWebEventsMessageComponent.react",
    "WAWebFrontendMsgGetters",
    "WAWebGalaxyFlowFeatureSupport",
    "WAWebGalaxyFlowsUtils",
    "WAWebGetBrazilnteractiveActions",
    "WAWebGroupsV4InviteMsg.react",
    "WAWebInteractiveMessage",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebInteractiveResponseMessage",
    "WAWebMediaDocument.react",
    "WAWebMediaMultipleIcon.react",
    "WAWebMediaStickerPack.react",
    "WAWebMediaVideo.react",
    "WAWebMessageBizContentPlaceholder",
    "WAWebMessageBizOrder",
    "WAWebMessageBubbleTypingIndicator.react",
    "WAWebMessageCiphertext.react",
    "WAWebMessageDebugPlaceholder.react",
    "WAWebMessageGif.react",
    "WAWebMessageGroupNotification.react",
    "WAWebMessageHistoryBundleMessage.react",
    "WAWebMessageHistoryNoticeMessage.react",
    "WAWebMessageList",
    "WAWebMessageLiveLocation.react",
    "WAWebMessageLoadingMedia.react",
    "WAWebMessageLocation.react",
    "WAWebMessageMultiVcard.react",
    "WAWebMessageNewsletterNotification.react",
    "WAWebMessageNotification.react",
    "WAWebMessagePicture.react",
    "WAWebMessagePluginRenderMsg",
    "WAWebMessageQuarantined.react",
    "WAWebMessageRevoked",
    "WAWebMessageStickerBubble.react",
    "WAWebMessageText.react",
    "WAWebMessageVcard.react",
    "WAWebMessageVcardDocument.react",
    "WAWebMessageViewOnce.react",
    "WAWebMsgActionCapability",
    "WAWebMsgGetters",
    "WAWebMsgModelPropUtils",
    "WAWebMsgType",
    "WAWebNativeFlowMessage",
    "WAWebNewsletterAdminInviteMessageComponent.react",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebNewsletterFollowerInviteMessageComponent.react",
    "WAWebNewsletterGatingUtils",
    "WAWebOversizedMessage.react",
    "WAWebPaymentMessage.react",
    "WAWebPinMsgGatingUtils",
    "WAWebPollsMessageComponent",
    "WAWebPttAudioMessageComponent.react",
    "WAWebPttMessageComponent.react",
    "WAWebPtvGatingUtils",
    "WAWebPtvMessageComponent",
    "WAWebQuestionReplyQuotedMessage.react",
    "WAWebQuotedMessageUserJourneyLogger",
    "WAWebQuotedMsg.react",
    "WAWebQuotedMsgAdminGroupName.react",
    "WAWebQuotedMsgModelUtils",
    "WAWebQuotedMsgUtils",
    "WAWebRequestPhoneNumberMessage.react",
    "WAWebRichResponseMessage.react",
    "WAWebStateUtils",
    "WAWebThreadMsgUtils",
    "WAWebThreadsGating",
    "WAWebUnsupportedMessage",
    "WAWebVcardParsingUtils",
    "cr:10210",
    "react",
    "useWAWebModelValues",
    "useWAWebMsgValues",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = ["ref"],
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useCallback,
      _ = m.useImperativeHandle,
      f = m.useRef;
    function g(e) {
      var t = e.chat,
        n = e.displayType,
        a = e.isFollowUpReply,
        i = e.isMsgVisible,
        l = e.msg,
        s = e.t;
      if (
        n === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY ||
        n === o("WAWebDisplayType").DISPLAY_TYPE.ALL_REPLIES
      )
        return null;
      if (
        l.quotedType === o("WAWebQuotedMsgUtils").QuotedType.AUTO &&
        a === !0 &&
        o("WAWebThreadsGating").shouldHideAutoQuote()
      ) {
        var u = o("WAWebThreadMsgUtils").getMsgViewAllRepliesThread(l);
        if (
          u != null &&
          o("WAWebQuotedMsgUtils").getMessagesCountByThreadId(u) >= 2
        )
          return null;
      }
      var c = o("WAWebQuotedMsgModelUtils").getQuotedMsgObj(l);
      if (c)
        return d.jsx(
          r("WAWebQuotedMsg.react"),
          {
            msg: c,
            rootMsg: o("WAWebStateUtils").unproxy(l.safe()),
            displayType: n,
            theme: "conversation",
            chat: o("WAWebStateUtils").unproxy(t),
            t: s,
            isMsgVisible: i,
            onClick: function () {
              o(
                "WAWebQuotedMessageUserJourneyLogger",
              ).QuotedMessageUserJourneyLogger.quotedMessageBubbleTapped(
                t.id,
                c.unsafe(),
              );
            },
            shouldHideQuotedMsgAuthor: l.shouldHideQuotedMsgAuthor,
          },
          c.id.toString(),
        );
      var m = o("WAWebQuotedMsgModelUtils").getQuotedMsgAdminGroupJid(l);
      if (m) {
        var p = o("WAWebQuotedMsgModelUtils").getQuotedMsgAdminGroupSubject(l),
          _ = o("WAWebQuotedMsgModelUtils").getQuotedMsgAdminParentGroupJid(l);
        return d.jsx(
          o("WAWebQuotedMsgAdminGroupName.react").QuotedMsgAdminGroupName,
          { quotedGroupJid: m, quotedGroupSubject: p, quotedParentGroupJid: _ },
        );
      }
      var f = o("WAWebMsgGetters").getQuestionReplyQuotedMessage(l);
      return f
        ? d.jsx(r("WAWebQuestionReplyQuotedMessage.react"), {
            questionReplyQuotedMessage: f,
            replyMsg: l,
          })
        : null;
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(t) {
      var n,
        a,
        i = t.ref,
        l = babelHelpers.objectWithoutPropertiesLoose(t, u),
        c = l.associatedMessages,
        m = l.displayAuthor,
        h = l.displayType,
        y = l.isFollowUpReply,
        C = l.isMsgVisible,
        b = l.msg,
        v = f(null),
        S = o("useWAWebMsgValues").useMsgValues(l.msg.id, [
          (n = o("WAWebMsgGetters")).getBody,
          n.getCaption,
          (a = o("WAWebFrontendMsgGetters")).getRtl,
          a.getDir,
          n.getIsSentByMe,
          n.getIsPSA,
          n.getIsViewOnce,
          n.getCtwaContext,
          n.getInitialPageSize,
          a.getHasTemplateButtons,
          n.getThumbnail,
          n.getOrderTitle,
          n.getTotalAmount1000,
          n.getTotalCurrencyCode,
          n.getItemCount,
          n.getIsGif,
          n.getIsLive,
        ]),
        R = S[0],
        L = S[1],
        E = S[2],
        k = S[3],
        I = S[4],
        T = S[5],
        D = S[6],
        x = S[7],
        $ = S[8],
        P = S[9],
        N = S[10],
        M = S[11],
        w = S[12],
        A = S[13],
        F = S[14],
        O = S[15],
        B = S[16],
        W = o("useWAWebMsgValues").useMsgValues(l.msg.id, [
          n.getIsVcardOverMmsDocument,
          a.getMediaData,
          n.getNativeFlowName,
          n.getNativeFlowButtons,
          a.getSenderObj,
          n.getSubtype,
          n.getType,
          n.getT,
          n.getId,
          n.getTitle,
          n.getIsFromTemplate,
          n.getVcard,
          n.getVcardList,
          n.getInviteGrpType,
          n.getFutureproofType,
          n.getFutureproofSubtype,
        ]),
        q = W[0],
        U = W[1],
        V = W[2],
        H = W[3],
        G = W[4],
        z = W[5],
        j = W[6],
        K = W[7],
        Q = W[8],
        X = W[9],
        Y = W[10],
        J = W[11],
        Z = W[12],
        ee = W[13],
        te = W[14],
        ne = W[15],
        re = o("useWAWebModelValues").useModelValues(l.chat, [
          "id",
          "trusted",
          "groupMetadata",
          "newsletterMetadata",
        ]),
        oe = r("useWAWebStableCallback")(function () {
          return v.current;
        }),
        ae = p(
          r("WAMemoizeOne")(function (e) {
            var t = e.vcardList;
            return t
              ? t.map(function (e) {
                  return babelHelpers.extends({}, e, {
                    parsedVcard: o("WAWebVcardParsingUtils").parseVcard(
                      e.vcard,
                    ),
                  });
                })
              : [];
          }),
          [],
        );
      _(
        i,
        function () {
          return { getRef: oe };
        },
        [oe],
      );
      var ie = b.safe(),
        le = a.getAsViewOnce(b),
        se = g({
          displayType: h,
          msg: b,
          chat: re,
          t: K,
          isMsgVisible: C,
          isFollowUpReply: y,
        });
      if (le != null)
        return d.jsx(r("WAWebMessageViewOnce.react"), {
          displayType: h,
          displayAuthor: m,
          msg: le,
          quotedMsg: se,
          ref: v,
          trusted: o("WAWebMsgModelPropUtils").isTrusted(b),
        });
      var ue = o("WAWebMessagePluginRenderMsg").renderMsg({
        chat: re,
        msg: b,
        displayAuthor: m,
      });
      if (ue != null) return ue;
      switch (ie.type) {
        case o("WAWebMsgType").MSG_TYPE.NATIVE_FLOW:
          return d.jsx(r("WAWebNativeFlowMessage"), {
            msg: o("WAWebStateUtils").unproxy(ie),
            displayAuthor: m,
            displayType: h,
          });
        case o("WAWebMsgType").MSG_TYPE.CHAT:
        case o("WAWebMsgType").MSG_TYPE.LIST_RESPONSE:
        case o("WAWebMsgType").MSG_TYPE.BUTTONS_RESPONSE:
          return z ===
            o("WAWebBotGenTypingIndicatorMsg")
              .BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE
            ? d.jsx(r("WAWebMessageBubbleTypingIndicator.react"), {
                isBotMsgStreaming: !1,
              })
            : d.jsx(r("WAWebMessageText.react"), {
                msg: o("WAWebStateUtils").unproxy(ie),
                contact: ie.senderObj,
                quotedMsg: se,
                trusted: o("WAWebMsgModelPropUtils").isTrusted(ie.unsafe()),
                displayType: h,
                displayAuthor: m,
                stickerLikeBubbleContainerRef: l.stickerLikeBubbleContainerRef,
                position: l.position,
                isFollowUpReply: y,
              });
        case o("WAWebMsgType").MSG_TYPE.IMAGE:
          return d.jsx(o("WAWebMessagePicture.react").ImageMessage, {
            msg: ie,
            displayType: h,
            mediaData: ie.mediaData,
            ref: v,
            quotedMsg: se,
            maxWidth: l.maxWidth,
            isMsgVisible: C,
            trusted: o("WAWebMsgModelPropUtils").isTrusted(ie.unsafe()),
            displayAuthor: m,
            preventDownload: !o(
              "WAWebMsgActionCapability",
            ).canWamoSubMsgBeSharedByUser(ie.unsafe(), re),
          });
        case o("WAWebMsgType").MSG_TYPE.PRODUCT:
          return d.jsx(r("WAWebBizProduct"), {
            msg: ie,
            displayType: h,
            displayAuthor: m,
            trusted: o("WAWebMsgModelPropUtils").isTrusted(ie.unsafe()),
            onProductClick: l.onProductClick,
            quotedMsg: se,
            isCarouselCard: !1,
          });
        case o("WAWebMsgType").MSG_TYPE.GP2:
          return d.jsx(r("WAWebMessageGroupNotification.react"), {
            msg: ie,
            ref: v,
            clickable: !0,
          });
        case o("WAWebMsgType").MSG_TYPE.NEWSLETTER_NOTIFICATION:
          return o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled()
            ? d.jsx(r("WAWebMessageNewsletterNotification.react"), { msg: ie })
            : null;
        case o("WAWebMsgType").MSG_TYPE.BROADCAST_NOTIFICATION:
          return d.jsx(r("WAWebBroadcastNotification.react"), {
            msg: ie,
            clickable: !0,
          });
        case o("WAWebMsgType").MSG_TYPE.NOTIFICATION:
        case o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE:
        case o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION:
        case o("WAWebMsgType").MSG_TYPE.CALL_LOG:
          return d.jsx(r("WAWebMessageNotification.react"), {
            contact: o("WAWebStateUtils").unproxy(re).contact,
            msg: ie,
            ref: v,
            displayAuthor: m,
          });
        case o("WAWebMsgType").MSG_TYPE.DEBUG:
          return null;
        case o("WAWebMsgType").MSG_TYPE.AUDIO:
          return d.jsx(o("WAWebPttAudioMessageComponent.react").Audio, {
            msg: ie,
            mediaData: ie.mediaData,
            quotedMsg: se,
            displayAuthor: m,
            displayType: h,
            ref: v,
            enableKbSeekSpeedChange: !0,
          });
        case o("WAWebMsgType").MSG_TYPE.VIDEO:
          return ie.isGif === !0
            ? d.jsx(o("WAWebMessageGif.react").WrappedGif, {
                displayAuthor: m,
                displayType: h,
                isMsgVisible: C,
                maxWidth: l.maxWidth,
                mediaData: ie.mediaData,
                msg: ie,
                quotedMsg: se,
                ref: v,
                trusted: o("WAWebMsgModelPropUtils").isTrusted(ie.unsafe()),
              })
            : d.jsx(r("WAWebMediaVideo.react"), {
                displayAuthor: m,
                displayType: h,
                hover: l.hover,
                msg: ie,
                quotedMsg: se,
                ref: v,
                trusted: o("WAWebMsgModelPropUtils").isTrusted(ie.unsafe()),
              });
        case o("WAWebMsgType").MSG_TYPE.PTV: {
          var ce = o("WAWebMsgGetters").getIsNewsletterMsg(b)
            ? o("WAWebNewsletterGatingUtils").isNewsletterPTVReceivingEnabled()
            : o("WAWebPtvGatingUtils").isPtvReceivingEnabled();
          return ce
            ? d.jsx(r("WAWebPtvMessageComponent"), {
                msg: ie,
                quotedMsg: se,
                mediaData: ie.mediaData,
                displayAuthor: m,
                displayType: h,
                position: l.position,
              })
            : d.jsx(r("WAWebUnsupportedMessage"), {
                msg: ie,
                displayAuthor: m,
                hideUpdateButton: !0,
              });
        }
        case o("WAWebMsgType").MSG_TYPE.VCARD:
          return d.jsx(r("WAWebMessageVcard.react"), {
            msg: ie,
            vcard: J,
            quotedMsg: se,
            displayType: h,
            displayAuthor: m,
            onMessageClick: l.onMessageClick,
          });
        case o("WAWebMsgType").MSG_TYPE.MULTI_VCARD:
          return d.jsx(r("WAWebMessageMultiVcard.react"), {
            msg: ie,
            vcardList: ae({ vcardList: Z }),
            quotedMsg: se,
            displayType: h,
            displayAuthor: m,
          });
        case o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE:
          return d.jsx(r("WAWebGroupsV4InviteMsg.react"), {
            msg: ie,
            displayAuthor: m,
          });
        case o("WAWebMsgType").MSG_TYPE.NEWSLETTER_ADMIN_INVITE:
          return d.jsx(r("WAWebNewsletterAdminInviteMessageComponent.react"), {
            msg: ie,
            displayAuthor: m,
          });
        case o("WAWebMsgType").MSG_TYPE.NEWSLETTER_FOLLOWER_INVITE:
          return d.jsx(
            r("WAWebNewsletterFollowerInviteMessageComponent.react"),
            { msg: ie, displayAuthor: m },
          );
        case o("WAWebMsgType").MSG_TYPE.LOCATION:
          return ie.isLive === !0
            ? d.jsx(o("WAWebMessageLiveLocation.react").LiveLocation, {
                msg: o("WAWebStateUtils").unproxy(ie),
                quotedMsg: se,
                trusted: o("WAWebMsgModelPropUtils").isTrusted(ie.unsafe()),
                displayAuthor: m,
                displayType: h,
              })
            : d.jsx(o("WAWebMessageLocation.react").Location, {
                msg: o("WAWebStateUtils").unproxy(ie),
                quotedMsg: se,
                trusted: o("WAWebMsgModelPropUtils").isTrusted(ie.unsafe()),
                displayAuthor: m,
                displayType: h,
              });
        case o("WAWebMsgType").MSG_TYPE.PAYMENT:
          return d.jsx(r("WAWebPaymentMessage.react"), {
            msg: ie,
            quotedMsg: se,
            displayAuthor: m,
          });
        case o("WAWebMsgType").MSG_TYPE.PTT:
          return d.jsx(o("WAWebPttMessageComponent.react").Ptt, {
            msg: ie,
            mediaData: ie.mediaData,
            quotedMsg: se,
            displayAuthor: m,
            displayType: h,
            ref: v,
            getSequentialMsg: l.getSequentialMsg,
            enableKbSeekSpeedChange: !0,
          });
        case o("WAWebMsgType").MSG_TYPE.POLL_CREATION:
          return d.jsx(o("WAWebPollsMessageComponent").Poll, {
            associatedMessages: c,
            msg: ie,
            displayAuthor: m,
            trusted: o("WAWebMsgModelPropUtils").isTrusted(ie.unsafe()),
            quotedMsg: se,
            displayType: h,
          });
        case o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT:
          return d.jsx(o("WAWebPollsMessageComponent").PollResultSnapshot, {
            associatedMessages: c,
            msg: ie,
            displayAuthor: m,
            trusted: o("WAWebMsgModelPropUtils").isTrusted(ie.unsafe()),
            quotedMsg: se,
            displayType: h,
          });
        case o("WAWebMsgType").MSG_TYPE.EVENT_CREATION:
          return d.jsx(o("WAWebEventsMessageComponent.react").Event, {
            msg: ie,
            chat: re,
            displayAuthor: m,
            trusted: o("WAWebMsgModelPropUtils").isTrusted(ie.unsafe()),
            quotedMsg: se,
            displayType: h,
          });
        case o("WAWebMsgType").MSG_TYPE.REQUEST_PHONE_NUMBER:
          return d.jsx(r("WAWebRequestPhoneNumberMessage.react"), { msg: ie });
        case o("WAWebMsgType").MSG_TYPE.STICKER:
          return d.jsx(r("WAWebMessageStickerBubble.react"), {
            msg: ie,
            stickerLikeBubbleContainerRef: l.stickerLikeBubbleContainerRef,
            mediaData: ie.mediaData,
            quotedMsg: se,
            displayAuthor: m,
            position: l.position,
            forwardRef: l.forwardStickerRef,
            displayType: h,
            animateOnView: !0,
          });
        case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
          return q
            ? d.jsx(r("WAWebMessageVcardDocument.react"), {
                chat: re,
                msg: ie,
                mediaData: U,
                displayAuthor: m,
                displayType: h,
                getQuotedMsg: function () {
                  return se;
                },
                onMessageClick: l.onMessageClick,
              })
            : d.jsx(r("WAWebMediaDocument.react"), {
                ref: v,
                msg: ie,
                displayType: h,
                quotedMsg: se,
                trusted: o("WAWebMsgModelPropUtils").isTrusted(ie.unsafe()),
                displayAuthor: m,
              });
        case o("WAWebMsgType").MSG_TYPE.STICKER_PACK:
          return d.jsx(r("WAWebMediaStickerPack.react"), {
            msg: ie,
            displayType: h,
            displayAuthor: m,
          });
        case o("WAWebMsgType").MSG_TYPE.ALBUM:
          return d.jsx(r("WAWebAlbumMessageComponent.react"), {
            msg: ie,
            associatedMessages: c,
            quotedMsg: se,
            displayType: h,
            displayAuthor: m,
            chat: o("WAWebStateUtils").unproxy(re),
            trusted: o("WAWebMsgModelPropUtils").isTrusted(ie.unsafe()),
            isMsgVisible: C,
          });
        case o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE:
          return d.jsx(r("WAWebRichResponseMessage.react"), {
            msg: ie,
            displayAuthor: m,
            displayType: h,
          });
        case o("WAWebMsgType").MSG_TYPE.LOADING_MEDIA:
          return d.jsx(r("WAWebMessageLoadingMedia.react"), { msg: ie });
        case o("WAWebMsgType").MSG_TYPE.UNKNOWN: {
          var de,
            me = [
              (de = o("WAWebMsgType")).MSG_TYPE.EVENT_CREATION,
              de.MSG_TYPE.EVENT_RESPONSE,
              de.MSG_TYPE.EVENT_EDIT_ENCRYPTED,
              de.MSG_TYPE.ALBUM,
            ];
          if (te != null && me.includes(te))
            return d.jsx(
              r("WAWebUnsupportedMessage"),
              babelHelpers.extends(
                { msg: ie, displayAuthor: m, hideUpdateButton: !0 },
                te === o("WAWebMsgType").MSG_TYPE.ALBUM && {
                  customPlaceholderIconProps: {
                    icon: d.jsx(
                      o("WAWebMediaMultipleIcon.react").MediaMultipleIcon,
                      { width: 16, height: 16 },
                    ),
                    theme: "small-icon",
                  },
                },
              ),
            );
          var pe = [
            o("WAWebCommonMsgSubtypeTypes").MsgSubtype.StatusMentionMessage,
            o("WAWebCommonMsgSubtypeTypes").MsgSubtype
              .StatusGroupMentionMessage,
            o("WAWebCommonMsgSubtypeTypes").MsgSubtype.MemberLabel,
            o("WAWebCommonMsgSubtypeTypes").MsgSubtype.MessageHistoryBundle,
            o("WAWebCommonMsgSubtypeTypes").MsgSubtype.MessageHistoryNotice,
          ];
          if (te === o("WAWebMsgType").MSG_TYPE.PROTOCOL && pe.includes(ne))
            return d.jsx(r("WAWebUnsupportedMessage"), {
              msg: ie,
              displayAuthor: m,
              hideUpdateButton: !0,
            });
          var _e = null;
          return (
            te === o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT
              ? (_e = s._(
                  /*BTDS*/ "To see it, get the latest version of WhatsApp.",
                ))
              : te === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
                ne === "message_edit" &&
                (_e = s._(/*BTDS*/ "Update WhatsApp")),
            _e != null
              ? d.jsx(r("WAWebUnsupportedMessage"), {
                  msg: ie,
                  displayAuthor: m,
                  customUpdateButtonFbt: _e,
                  hideUpdateButton: !0,
                })
              : d.jsx(r("WAWebUnsupportedMessage"), {
                  msg: o("WAWebStateUtils").unproxy(ie),
                  displayAuthor: m,
                  hideUpdateButton: ie.subtype === "phone_only_feature",
                })
          );
        }
        case o("WAWebMsgType").MSG_TYPE.CIPHERTEXT:
          return d.jsx(r("WAWebMessageCiphertext.react"), {
            msg: ie,
            displayAuthor: m,
          });
        case o("WAWebMsgType").MSG_TYPE.DEBUG_PLACEHOLDER:
          return d.jsx(r("WAWebMessageDebugPlaceholder.react"), { msg: ie });
        case o("WAWebMsgType").MSG_TYPE.QUARANTINED:
          return d.jsx(r("WAWebMessageQuarantined.react"), {
            msg: ie,
            displayAuthor: m,
            displayType: h,
          });
        case o("WAWebMsgType").MSG_TYPE.REVOKED:
          return (
            (v.current = null),
            d.jsx(r("WAWebMessageRevoked"), {
              msg: o("WAWebStateUtils").unproxy(ie),
              displayType: h,
              displayAuthor: m,
            })
          );
        case o("WAWebMsgType").MSG_TYPE.OVERSIZED:
          return d.jsx(r("WAWebOversizedMessage.react"), {
            msg: o("WAWebStateUtils").unproxy(ie),
            displayAuthor: m,
          });
        case o("WAWebMsgType").MSG_TYPE.HSM:
          return d.jsx(r("WAWebMessageText.react"), {
            msg: o("WAWebStateUtils").unproxy(ie),
            contact: ie.senderObj,
            quotedMsg: se,
            trusted: o("WAWebMsgModelPropUtils").isTrusted(ie.unsafe()),
            displayType: h,
            displayAuthor: m,
            isFollowUpReply: y,
          });
        case o("WAWebMsgType").MSG_TYPE.TEMPLATE_BUTTON_REPLY:
          return d.jsx(r("WAWebMessageText.react"), {
            msg: o("WAWebStateUtils").unproxy(ie),
            contact: ie.senderObj,
            quotedMsg: se,
            trusted: o("WAWebMsgModelPropUtils").isTrusted(ie.unsafe()),
            displayType: h,
            displayAuthor: m,
            isFollowUpReply: y,
          });
        case o("WAWebMsgType").MSG_TYPE.PROTOCOL:
          return z === "ephemeral_setting" ||
            z === "share_phone_number" ||
            z === "event_edit_decrypted" ||
            z === "limit_sharing_system_message"
            ? d.jsx(r("WAWebMessageNotification.react"), {
                contact: o("WAWebStateUtils").unproxy(re).contact,
                msg: ie,
                ref: v,
              })
            : d.jsx(r("WAWebUnsupportedMessage"), {
                msg: o("WAWebStateUtils").unproxy(ie),
                displayAuthor: m,
                hideUpdateButton: !0,
              });
        case o("WAWebMsgType").MSG_TYPE.ORDER:
          return d.jsx(r("WAWebMessageBizOrder"), {
            displayAuthor: m,
            msg: o("WAWebStateUtils").unproxy(ie),
          });
        case o("WAWebMsgType").MSG_TYPE.LIST:
          return d.jsx(r("WAWebMessageList"), {
            msg: o("WAWebStateUtils").unproxy(ie),
            displayAuthor: m,
            quotedMsg: se,
          });
        case o("WAWebMsgType").MSG_TYPE.INTERACTIVE:
          return o("WAWebGetBrazilnteractiveActions").hasOrderOffsiteCardPay(ie)
            ? d.jsx(r("WAWebUnsupportedMessage"), {
                msg: o(
                  "WAWebGalaxyFlowsUtils",
                ).getInvalidatedFlowMessageFromHistorySync(ie),
                displayAuthor: m,
                hideUpdateButton: !0,
              })
            : ie.nativeFlowName ===
                  r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW &&
                !o("WAWebGalaxyFlowFeatureSupport").isFlowSupported(
                  o("WAWebStateUtils").unproxy(ie),
                )
              ? d.jsx(r("WAWebUnsupportedMessage"), {
                  msg: o(
                    "WAWebGalaxyFlowsUtils",
                  ).getInvalidatedFlowMessageFromHistorySync(ie),
                  displayAuthor: m,
                  hideUpdateButton: !0,
                })
              : d.jsx(r("WAWebInteractiveMessage"), {
                  msg: o("WAWebStateUtils").unproxy(ie),
                  quotedMsg: se,
                  displayAuthor: m,
                  displayType: h,
                });
        case o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE:
          return ie.nativeFlowName ===
            r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW &&
            !o("WAWebGalaxyFlowFeatureSupport").isFlowSupported(
              o("WAWebStateUtils").unproxy(ie),
            )
            ? d.jsx(r("WAWebUnsupportedMessage"), {
                msg: o(
                  "WAWebGalaxyFlowsUtils",
                ).getInvalidatedFlowMessageFromHistorySync(ie),
                displayAuthor: m,
                hideUpdateButton: !0,
              })
            : d.jsx(r("WAWebInteractiveResponseMessage"), {
                msg: o("WAWebStateUtils").unproxy(ie),
                quotedMsg: se,
                displayAuthor: m,
                displayType: h,
              });
        case o("WAWebMsgType").MSG_TYPE.KEEP_IN_CHAT:
          return d.jsx(r("WAWebUnsupportedMessage"), {
            msg: ie,
            displayAuthor: m,
            customUpdateButtonFbt: s._(
              /*BTDS*/ "To see it, get the latest version of WhatsApp.",
            ),
            hideUpdateButton: !0,
          });
        case o("WAWebMsgType").MSG_TYPE.PINNED_MESSAGE:
          if (o("WAWebPinMsgGatingUtils").isPinnedMessagesM1ReceiverEnabled())
            return d.jsx(r("WAWebMessageNotification.react"), {
              contact: o("WAWebStateUtils").unproxy(re).contact,
              msg: ie,
              ref: v,
            });
          break;
        case o("WAWebMsgType").MSG_TYPE.POLL_ADD_OPTION_DECRYPTED:
          return d.jsx(r("WAWebMessageNotification.react"), {
            contact: o("WAWebStateUtils").unproxy(re).contact,
            msg: ie,
            ref: v,
          });
        case o("WAWebMsgType").MSG_TYPE.COMMENT:
          return d.jsx(r("WAWebUnsupportedMessage"), {
            msg: ie,
            displayAuthor: m,
            hideUpdateButton: !0,
          });
        case o("WAWebMsgType").MSG_TYPE.BIZ_CONTENT_PLACEHOLDER:
          return d.jsx(r("WAWebMessageBizContentPlaceholder"), {
            msg: ie,
            displayAuthor: m,
          });
        case o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE:
          return d.jsx(r("WAWebAutomatedGreetingMessageText.react"), {
            msg: ie,
            displayType: h,
            displayAuthor: m,
            chat: re,
          });
        case o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE:
          return d.jsx(r("WAWebMessageHistoryBundleMessage.react"), {
            msg: ie,
          });
        case o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_NOTICE:
          return d.jsx(r("WAWebMessageHistoryNoticeMessage.react"), {
            msg: ie,
          });
      }
      return (
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "messageList:render Unknown message type: ",
              "",
            ])),
          j,
        ),
        d.jsx(r("WAWebUnsupportedMessage"), {
          msg: o("WAWebStateUtils").unproxy(ie),
          displayAuthor: m,
          hideUpdateButton: !0,
        })
      );
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
