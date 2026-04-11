__d(
  "WAWebFrontendMsgGetters",
  [
    "WABidi",
    "WALogger",
    "WANullthrows",
    "WAWebAck",
    "WAWebAnimatedEmojiAssetLoader",
    "WAWebBizSystemMsgSubtypes",
    "WAWebChatCollection",
    "WAWebChatGroupUtils",
    "WAWebCommonMsgUtils",
    "WAWebEmoji",
    "WAWebFormatNfmText",
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebL10N",
    "WAWebMessageAssociation.flow",
    "WAWebMsgDataUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgModelUtils",
    "WAWebMsgType",
    "WAWebNewsletterCollection",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMembershipUtil",
    "WAWebOrderStatus",
    "WAWebProductCatalogCatalogConstants",
    "WAWebProtobufsAICommon.pb",
    "WAWebPtvGatingUtils",
    "WAWebStickerPremiumStatus",
    "WAWebTemplateButtonSubtype",
    "WAWebUserPrefsMeUser",
    "lodash",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = o("WAWebGetters").createGetterFactories({
        root: (u = o("WAWebMsgGetters")).getMsgUnsafe,
        createCache: o("WAWebGettersCaches").createFrontendMessagesCache,
      }),
      d = c.clearCacheFor,
      m = c.computed,
      p = c.field,
      _ = d,
      f = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            a = e[3];
          return o("WAWebMsgModelUtils").typeIsMms({
            type: t,
            subtype: n,
            headerType: r,
            interactiveHeader: a,
          });
        },
        [u.getType, u.getSubtype, u.getHeaderType, u.getInteractiveHeader],
      ),
      g = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t != null && t < o("WAWebAck").ACK.SENT && n && r;
        },
        [u.getAck, f, u.getIsSentByMe],
      ),
      h = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            a = o("WAWebMsgDataUtils").eventTypeFromMsgType(t);
          return r
            ? n
              ? a === o("WAWebCommonMsgUtils").EventType.IGNORE
                ? o("WAWebCommonMsgUtils").EventType.IGNORE
                : o("WAWebCommonMsgUtils").EventType.NOTEWORTHY
              : a
            : o("WAWebCommonMsgUtils").EventType.IGNORE;
        },
        [u.getMsgUnsafe, u.getInvis, u.getIsNewMsg],
      ),
      y = function (t) {
        switch (t.type) {
          case "interactive":
            return o("WAWebMsgGetters").getNativeFlowName(t) != null
              ? o("WAWebFormatNfmText").formatNFMText(t)
              : o("WAWebMsgGetters").getCaption(t);
          case "native_flow":
            return o("WAWebFormatNfmText").formatNFMText(t);
        }
        return null;
      },
      C = m(
        function (e) {
          var t = e[0],
            n = e[1],
            a = e[2],
            i = e[3],
            l = e[4],
            s = e[5],
            u = e[6],
            c = e[7],
            d = e[8],
            m = e[9],
            p = e[10],
            _ = e[11],
            f = e[12],
            g = e[13],
            h = e[14],
            C = e[15],
            b = e[16];
          if ((m || p) && !o("WAWebOrderStatus").hasOrderStatusButton(t))
            return n === o("WAWebMsgType").MSG_TYPE.CHAT ? i : l;
          switch (n) {
            case "chat":
            case "interactive_response":
            case "automated_greeting_message":
              return i;
            case "image":
            case "video":
            case "ptv":
            case "document":
            case "sticker-pack":
              return l;
            case "location":
              return u ? s : void 0;
            case "payment":
              return c == null ? void 0 : c.body;
            case "groups_v4_invite":
              return s;
            case "list":
              return _ == null ? void 0 : _.description;
            case "product":
              return r("lodash").truncate(a, {
                length: o("WAWebProductCatalogCatalogConstants")
                  .MAX_REPLY_PRODUCT_TITLE_LENGTH,
              });
            case "hsm":
              return i;
            case "template_button_reply":
              return i;
            case "interactive":
              return f != null ? y(t) : l;
            case "native_flow":
              return y(t);
            case "poll_creation":
            case "poll_result_snapshot":
              return d;
            case "newsletter_admin_invite":
              return g == null ? void 0 : g.inviteMessage;
            case "newsletter_follower_invite":
              return h == null ? void 0 : h.inviteMessage;
            case "event_creation":
              return C;
            case "quarantined":
              return b;
            default:
              return;
          }
        },
        [
          u.getMsgUnsafe,
          u.getType,
          u.getTitle,
          u.getBody,
          u.getCaption,
          u.getComment,
          u.getIsLive,
          u.getPaymentNoteMsg,
          u.getPollName,
          u.getIsFromTemplate,
          u.getIsDynamicReplyButtonsMsg,
          u.getList,
          u.getNativeFlowName,
          u.getNewsletterAdminInviteInfo,
          u.getNewsletterFollowerInviteInfo,
          u.getEventName,
          u.getQuarantineExtractedText,
        ],
      ),
      b = m(
        function (e) {
          var t,
            n = e[0],
            a = n == null ? void 0 : n.newsletterId;
          if (a == null) return !1;
          var i =
            (t = r("WAWebNewsletterCollection").get(a)) == null
              ? void 0
              : t.newsletterMetadata;
          return (
            o("WAWebNewsletterMembershipUtil").iAmAdmin(i) &&
            !o("WAWebNewsletterMembershipUtil").iAmOwner(i)
          );
        },
        [u.getNewsletterAdminInviteInfo],
      ),
      v = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            a = e[3];
          if (t === o("WAWebMsgType").MSG_TYPE.VCARD)
            return n ? o("WABidi").dir(n) : void 0;
          if (r != null) {
            var i = a != null && a.length ? r.replace(/@\d+@g.us/, "") : r,
              l = o("WABidi").dir(i);
            return l;
          }
        },
        [u.getType, u.getSubtype, C, u.getGroupMentions],
      ),
      S = m(
        function (e) {
          var t = e[0];
          return t === "rtl" || (t === void 0 && r("WAWebL10N").isRTL());
        },
        [v],
      ),
      R = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t === o("WAWebMsgType").MSG_TYPE.VCARD
            ? n
              ? o("WABidi").dir(n) === "rtl"
              : !1
            : !!r && o("WABidi").dir(r) === "rtl";
        },
        [u.getType, u.getSubtype, C],
      ),
      L = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t != null || n != null;
        },
        [C, u.getFooter],
      ),
      E = function (t) {
        return o("WAWebMsgGetters").getIsNewsletterMsg(t)
          ? r("WAWebNewsletterCollection")
          : o("WAWebChatCollection").ChatCollection;
      };
    function k(e) {
      var t = o("WAWebChatCollection").ChatCollection;
      return (
        o("WAWebMsgGetters").getIsNewsletterMsg(e) &&
          (t = r("WAWebNewsletterCollection")),
        r("WANullthrows")(t.get(r("WAWebMsgKey").from(e.id).remote))
      );
    }
    var I = function (n) {
        var t = E(n).get(r("WAWebMsgKey").from(n.id).remote);
        return (
          t == null &&
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "getChat: msgKey = ",
                  ", type = ",
                  "",
                ])),
              n.id.toString(),
              n.type,
            ),
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "getChat: unexpected null chat",
                  ])),
              )
              .sendLogs("get-chat-unexpected-null")),
          t
        );
      },
      T = function (t) {
        return E(t).get(r("WAWebMsgKey").from(t.id).remote);
      },
      D = p("carouselCards"),
      x = m(
        function (e) {
          var t = e[0];
          return t == null ? null : t.slice();
        },
        [D],
      ),
      $ = p("buttons"),
      P = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n != null && n.length > 0;
        },
        [u.getIsFromTemplate, $],
      ),
      N = m(
        function (e) {
          var t = e[0],
            n = e[1];
          if (!t || n == null) return !1;
          var r = n.at(0);
          return r == null
            ? !1
            : r.subtype ===
                o("WAWebTemplateButtonSubtype").TEMPLATE_BUTTON_SUBTYPE
                  .QUICK_REPLY;
        },
        [P, $],
      ),
      M = m(
        function (e) {
          var t = e[0];
          return t;
        },
        [u.getMsgUnsafe],
      ),
      w = m(
        function (e) {
          var t = e[0];
          return t.type === o("WAWebMsgType").MSG_TYPE.PRODUCT &&
            t.id &&
            t.id.id.startsWith(
              o("WAWebBizSystemMsgSubtypes").PRODUCT_INQUIRY_TYPE,
            )
            ? t
            : null;
        },
        [M, u.getType, u.getId],
      ),
      A = m(
        function (e) {
          var t = e[0];
          switch (t.type) {
            case o("WAWebMsgType").MSG_TYPE.GP2:
              return t;
            default:
              return null;
          }
        },
        [M, u.getType],
      ),
      F = m(
        function (e) {
          var t = e[0];
          return t.type === o("WAWebMsgType").MSG_TYPE.BROADCAST_NOTIFICATION
            ? t
            : null;
        },
        [M, u.getType],
      ),
      O = m(
        function (e) {
          var t = e[0];
          return t.type === "product" ? t : null;
        },
        [M, u.getType],
      ),
      B = m(
        function (e) {
          var t = e[0];
          return t.type === o("WAWebMsgType").MSG_TYPE.REVOKED ? t : null;
        },
        [M, u.getType],
      ),
      W = p("associationType"),
      q = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            a = e[3],
            i = e[4],
            l = e[5],
            s = e[6],
            u = e[7],
            c = e[8],
            d = e[9],
            m = e[10],
            p = e[11],
            _ = e[12];
          return (t.type === o("WAWebMsgType").MSG_TYPE.IMAGE ||
            (t.type === o("WAWebMsgType").MSG_TYPE.VIDEO && t.isGif !== !0)) &&
            !r &&
            !l &&
            !p &&
            !_ &&
            !(
              c !==
                o("WAWebMessageAssociation.flow").MessageAssociationType
                  .MEDIA_ALBUM &&
              c !==
                o("WAWebMessageAssociation.flow").MessageAssociationType
                  .MEDIA_POLL &&
              (a != null || u)
            ) &&
            !d &&
            !m
            ? t
            : null;
        },
        [
          M,
          u.getType,
          u.getIsNotification,
          u.getCaption,
          u.getIsForwarded,
          B,
          u.getIsGif,
          u.getQuotedMsg,
          W,
          u.getCtwaContext,
          u.getIsViewOnce,
          u.getIsQuestion,
          u.getQuestionReplyQuotedMessage,
        ],
      ),
      U = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return o("WAWebMsgModelUtils").notRefiningTypeIsUrl({
            type: t,
            subtype: n,
          });
        },
        [u.getType, u.getSubtype],
      ),
      V = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            a = e[3];
          if (r) return null;
          switch (t.type) {
            case o("WAWebMsgType").MSG_TYPE.IMAGE:
            case o("WAWebMsgType").MSG_TYPE.STICKER:
            case o("WAWebMsgType").MSG_TYPE.AUDIO:
            case o("WAWebMsgType").MSG_TYPE.PTT:
            case o("WAWebMsgType").MSG_TYPE.VIDEO:
            case o("WAWebMsgType").MSG_TYPE.PTV:
            case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
              return t;
          }
          return a ? t : null;
        },
        [M, u.getType, u.getIsViewOnce, U],
      ),
      H = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            a = e[3],
            i = e[4],
            l = e[5],
            s = e[6],
            u = e[7],
            c = e[8],
            d = I(t.unsafe());
          return t.type === o("WAWebMsgType").MSG_TYPE.STICKER &&
            !r &&
            !a &&
            !i &&
            !l &&
            !s &&
            (!(
              c &&
              o(
                "WAWebNewsletterGatingUtils",
              ).isStickerForwardedAttributionEnabled()
            ) ||
              !u) &&
            !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(d) &&
            !(
              t.isLottie === !0 &&
              t.unsafe().stickerPremiumStatus ===
                o("WAWebStickerPremiumStatus").StickerPremiumStatus.PREMIUM
            )
            ? t
            : null;
        },
        [
          M,
          u.getType,
          u.getIsNotification,
          B,
          u.getQuotedMsg,
          u.getCtwaContext,
          u.getIsNewsletterMsg,
          u.getIsForwarded,
          u.getHasOriginatedFromNewsletter,
        ],
      ),
      G = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT ? t : null;
        },
        [M, u.getType],
      ),
      z = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.IMAGE ? t : null;
        },
        [M, u.getType],
      ),
      j = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.VIDEO ? t : null;
        },
        [M, u.getType],
      ),
      K = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.AUDIO ? t : null;
        },
        [M, u.getType],
      ),
      Q = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.PTT ? t : null;
        },
        [M, u.getType],
      ),
      X = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.PTV ? t : null;
        },
        [M, u.getType],
      ),
      Y = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION ? t : null;
        },
        [M, u.getType],
      ),
      J = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION ||
            t.type === o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT
            ? t
            : null;
        },
        [M, u.getType],
      ),
      Z = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION
            ? t
            : null;
        },
        [M, u.getType],
      ),
      ee = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.ALBUM ? t : null;
        },
        [M, u.getType],
      ),
      te = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.CALL_LOG ? t : null;
        },
        [M, u.getType],
      ),
      ne = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.POLL_UPDATE ? t : null;
        },
        [M, u.getType],
      ),
      re = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return o("WAWebMsgModelUtils").typeIsMms(t) ? t : null;
        },
        [M, u.getType],
      ),
      oe = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return o("WAWebMsgModelUtils").typeIsUrl(t) ? t : null;
        },
        [M, u.getType, u.getSubtype],
      ),
      ae = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.IMAGE ||
            t.type === o("WAWebMsgType").MSG_TYPE.VIDEO
            ? t
            : null;
        },
        [M, u.getType],
      ),
      ie = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            o = e[3];
          return (n != null || r != null) && o ? (n != null ? n : r) : null;
        },
        [u.getType, ae, Q, u.getIsViewOnce],
      ),
      le = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            a = e[3];
          return t.type === o("WAWebMsgType").MSG_TYPE.PTT ||
            (t.type === o("WAWebMsgType").MSG_TYPE.AUDIO && a && r != null)
            ? t
            : null;
        },
        [M, u.getType, u.getWaveform, u.getIsOpus],
      ),
      se = p("senderObj"),
      ue = p("mediaData"),
      ce = p("replyButtons"),
      de = p("pendingDeleteForMe", { default: !1 }),
      me = p("botPluginType"),
      pe = m(
        function (e) {
          var t,
            n = e[0],
            r = e[1],
            a = e[2];
          return a != null &&
            (t = a.id) != null &&
            t.isBot() &&
            (r ===
              o("WAWebProtobufsAICommon.pb").BotPluginMetadata$PluginType
                .SEARCH ||
              r ===
                o("WAWebProtobufsAICommon.pb").BotPluginMetadata$PluginType
                  .REELS)
            ? n
            : null;
        },
        [M, me, se],
      ),
      _e = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t.type === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE &&
            r != null
            ? t
            : null;
        },
        [M, u.getType, u.getRichResponse],
      ),
      fe = m(
        function (e) {
          var t = e[0];
          return o("WAWebMsgModelUtils").getCelebrationAnimationType(t);
        },
        [C],
      ),
      ge = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return o("WAWebMsgModelUtils").isAnimatedEmoji(t, n);
        },
        [u.getBody, u.getType],
      ),
      he = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return o("WAWebMsgModelUtils").isSingleEmojiMessageText(t, n);
        },
        [u.getBody, u.getType],
      ),
      ye = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            a = r != null;
          return t === o("WAWebMsgType").MSG_TYPE.CHAT && (n || a);
        },
        [u.getType, ge, he],
      ),
      Ce = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            a = e[3],
            i = e[4],
            l = e[5],
            s = e[6],
            u = e[7],
            c = r != null || u != null;
          return t === o("WAWebMsgType").MSG_TYPE.STICKER
            ? !c &&
                !n &&
                !(
                  l &&
                  i &&
                  o(
                    "WAWebNewsletterGatingUtils",
                  ).isStickerForwardedAttributionEnabled()
                ) &&
                !s
            : t === o("WAWebMsgType").MSG_TYPE.CHAT
              ? !c && a && !s
              : t === o("WAWebMsgType").MSG_TYPE.PTV
                ? o("WAWebPtvGatingUtils").isPtvReceivingEnabled()
                : !1;
        },
        [
          u.getType,
          u.getCtwaContext,
          u.getQuotedMsg,
          ye,
          u.getHasOriginatedFromNewsletter,
          u.getIsForwarded,
          u.getIsQuestion,
          u.getQuestionReplyQuotedMessage,
        ],
      ),
      be = m(
        function (e) {
          var t = e[0];
          if (t != null) {
            var n = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(t);
            if (n != null)
              return o("WAWebAnimatedEmojiAssetLoader").getAnimatedEmojiAsset(
                n,
              );
          }
        },
        [u.getBody],
      ),
      ve = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            o = e[3],
            a;
          if (t) {
            var i;
            a =
              (i = n == null ? void 0 : n.newsletterId) != null ? i : r.remote;
          }
          return a != null ? a : o.id;
        },
        [
          u.getHasOriginatedFromNewsletter,
          u.getForwardedNewsletterMessageInfo,
          u.getId,
          se,
        ],
      ),
      Se = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return !t && o("WAWebUserPrefsMeUser").isMeAccount(n);
        },
        [u.getIsNewsletterMsg, u.getSender],
      ),
      Re = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            o = T(t.unsafe()),
            a;
          return (n && (a = o == null ? void 0 : o.contact), a != null ? a : r);
        },
        [M, u.getIsNewsletterMsg, se],
      );
    ((l.clearFrontendMsgGetterCacheFor = _),
      (l.getIsMms = f),
      (l.getIsUnsentMedia = g),
      (l.getEventType = h),
      (l.getText = C),
      (l.getIsNewsletterInviteAccepted = b),
      (l.getDir = v),
      (l.getIsRTL = S),
      (l.getRtl = R),
      (l.getHasBodyOrFooter = L),
      (l.getChatCollection = E),
      (l.getCurrentChat = k),
      (l.getChat = I),
      (l.getMaybeChat = T),
      (l.getCarouselCards = x),
      (l.getButtons = $),
      (l.getHasTemplateButtons = P),
      (l.getIsQuickReply = N),
      (l.getAsProductInquiry = w),
      (l.getAsGroupNotification = A),
      (l.getAsBroadcastNotification = F),
      (l.getAsProduct = O),
      (l.getAsRevoked = B),
      (l.getAsAlbumAsset = q),
      (l.getIsUrlMessage = U),
      (l.getAsAutoDownloadableMedia = V),
      (l.getAsGroupedSticker = H),
      (l.getAsDoc = G),
      (l.getAsImage = z),
      (l.getAsVideo = j),
      (l.getAsAudio = K),
      (l.getAsPtt = Q),
      (l.getAsPtv = X),
      (l.getAsPollCreation = Y),
      (l.getAsPoll = J),
      (l.getAsEventCreation = Z),
      (l.getAsAlbum = ee),
      (l.getAsCallLog = te),
      (l.getAsPollUpdate = ne),
      (l.getAsMms = re),
      (l.getAsUrl = oe),
      (l.getAsVisualMedia = ae),
      (l.getAsViewOnce = ie),
      (l.getAsPttLike = le),
      (l.getSenderObj = se),
      (l.getMediaData = ue),
      (l.getReplyButtons = ce),
      (l.getPendingDeleteForMe = de),
      (l.getAsBotPluginCarouselMsg = pe),
      (l.getAsRichResponse = _e),
      (l.getCelebrationAnimationCandidate = fe),
      (l.getIsAnimatedEmoji = ge),
      (l.getIsSingleEmoji = he),
      (l.getIsTransparentMsgEmoji = ye),
      (l.getIsTransparentMsg = Ce),
      (l.getJSONAssetForAnimatedEmoji = be),
      (l.getMsgSenderId = ve),
      (l.getShouldDisplaySelf = Se),
      (l.getSenderForReplyMsg = Re));
  },
  98,
);
