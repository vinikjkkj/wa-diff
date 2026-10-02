__d(
  "WAWebFrontendMsgGetters",
  [
    "WABidi",
    "WALogger",
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
    "WAWebLinkify",
    "WAWebMessageAssociation.flow",
    "WAWebMsgDataUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgModelUtils",
    "WAWebMsgType",
    "WAWebNewsletterCollection",
    "WAWebNewsletterGatingUtils",
    "WAWebOrderStatus",
    "WAWebProductCatalogCatalogConstants",
    "WAWebProtobufsAICommon.pb",
    "WAWebStickerPremiumStatus",
    "WAWebStringTruncation",
    "WAWebTemplateButtonSubtype",
    "WAWebUserPrefsMeUser",
    "nullthrows",
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
            _ = e[12],
            f = e[13],
            g = e[14],
            h = e[15],
            C = e[16];
          if ((d || m) && !o("WAWebOrderStatus").hasOrderStatusButton(t))
            return n === o("WAWebMsgType").MSG_TYPE.CHAT ? a : i;
          switch (n) {
            case "chat":
            case "interactive_response":
            case "automated_greeting_message":
              return a;
            case "image":
            case "video":
            case "ptv":
            case "document":
            case "sticker-pack":
              return i;
            case "location":
              return s ? l : void 0;
            case "payment":
              return u == null ? void 0 : u.body;
            case "groups_v4_invite":
              return l;
            case "list":
              return p == null ? void 0 : p.description;
            case "product":
              return o("WAWebStringTruncation").truncateAtCodepoints(
                r,
                o("WAWebProductCatalogCatalogConstants")
                  .MAX_REPLY_PRODUCT_TITLE_LENGTH,
              );
            case "hsm":
              return a;
            case "template_button_reply":
              return a;
            case "interactive": {
              var b, v;
              return _ != null
                ? y(t)
                : i != null && i !== ""
                  ? i
                  : (b =
                        (v = o("WAWebMsgGetters").getBloksWidget(t)) == null
                          ? void 0
                          : v.fallback) != null
                    ? b
                    : i;
            }
            case "native_flow":
              return y(t);
            case "poll_creation":
            case "poll_result_snapshot":
              return c;
            case "newsletter_admin_invite":
              return f == null ? void 0 : f.inviteMessage;
            case "newsletter_follower_invite":
              return g == null ? void 0 : g.inviteMessage;
            case "event_creation":
              return h;
            case "quarantined":
              return C;
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
          var t = e[0],
            n = e[1];
          return t == null ? [] : o("WAWebLinkify").findLinks(t, !1, n);
        },
        [C, u.getSender],
      ),
      v = m(
        function (e) {
          var t,
            n,
            o = e[0],
            a = o == null ? void 0 : o.newsletterId;
          if (a == null) return !1;
          var i =
            (t = r("WAWebNewsletterCollection").get(a)) == null
              ? void 0
              : t.newsletterMetadata;
          return (
            ((n = i == null ? void 0 : i.iAmAdmin()) != null ? n : !1) &&
            !(i != null && i.iAmOwner())
          );
        },
        [u.getNewsletterAdminInviteInfo],
      ),
      S = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            a = e[3];
          if (t === o("WAWebMsgType").MSG_TYPE.VCARD)
            return n ? o("WABidi").bidiDir(n) : void 0;
          if (r != null) {
            var i = a != null && a.length ? r.replace(/@\d+@g.us/, "") : r,
              l = o("WABidi").bidiDir(i);
            return l;
          }
        },
        [u.getType, u.getSubtype, C, u.getGroupMentions],
      ),
      R = m(
        function (e) {
          var t = e[0];
          return t === "rtl" || (t === void 0 && r("WAWebL10N").isRTL());
        },
        [S],
      ),
      L = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t === o("WAWebMsgType").MSG_TYPE.VCARD
            ? n
              ? o("WABidi").bidiDir(n) === "rtl"
              : !1
            : !!r && o("WABidi").bidiDir(r) === "rtl";
        },
        [u.getType, u.getSubtype, C],
      ),
      E = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t != null || n != null;
        },
        [C, u.getFooter],
      ),
      k = function (t) {
        return o("WAWebMsgGetters").getIsNewsletterMsg(t)
          ? r("WAWebNewsletterCollection")
          : o("WAWebChatCollection").ChatCollection;
      };
    function I(e) {
      var t = o("WAWebChatCollection").ChatCollection;
      return (
        o("WAWebMsgGetters").getIsNewsletterMsg(e) &&
          (t = r("WAWebNewsletterCollection")),
        r("nullthrows")(t.get(r("WAWebMsgKey").from(e.id).remote))
      );
    }
    var T = function (n) {
        var t = k(n).get(r("WAWebMsgKey").from(n.id).remote);
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
      D = function (t) {
        return k(t).get(r("WAWebMsgKey").from(t.id).remote);
      };
    function x(e, t) {
      var n = t
        ? r("WAWebNewsletterCollection")
        : o("WAWebChatCollection").ChatCollection;
      return n.get(e.remote);
    }
    var $ = p("carouselCards"),
      P = m(
        function (e) {
          var t = e[0];
          return t == null ? null : t.slice();
        },
        [$],
      ),
      N = p("buttons"),
      M = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n != null && n.length > 0;
        },
        [u.getIsFromTemplate, N],
      ),
      w = m(
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
        [M, N],
      ),
      A = m(
        function (e) {
          var t = e[0];
          return t;
        },
        [u.getMsgUnsafe],
      ),
      F = m(
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
        [A, u.getType, u.getId],
      ),
      O = m(
        function (e) {
          var t = e[0];
          switch (t.type) {
            case o("WAWebMsgType").MSG_TYPE.GP2:
              return t;
            default:
              return null;
          }
        },
        [A, u.getType],
      ),
      B = m(
        function (e) {
          var t = e[0];
          return t.type === o("WAWebMsgType").MSG_TYPE.BROADCAST_NOTIFICATION
            ? t
            : null;
        },
        [A, u.getType],
      ),
      W = m(
        function (e) {
          var t = e[0];
          return t.type === "product" ? t : null;
        },
        [A, u.getType],
      ),
      q = m(
        function (e) {
          var t = e[0];
          return t.type === o("WAWebMsgType").MSG_TYPE.REVOKED ? t : null;
        },
        [A, u.getType],
      ),
      U = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return !t && !n && !r;
        },
        [u.getIsForwarded, q, u.getIsReply],
      ),
      V = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t > 0 && !n;
        },
        [u.getNumTimesForwarded, q],
      ),
      H = p("associationType"),
      G = m(
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
          A,
          u.getType,
          u.getIsNotification,
          u.getCaption,
          u.getIsForwarded,
          q,
          u.getIsGif,
          u.getQuotedMsg,
          H,
          u.getCtwaContext,
          u.getIsViewOnce,
          u.getIsQuestion,
          u.getQuestionReplyQuotedMessage,
        ],
      ),
      z = m(
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
      j = m(
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
        [A, u.getType, u.getIsViewOnce, z],
      ),
      K = m(
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
            d = T(t.unsafe());
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
          A,
          u.getType,
          u.getIsNotification,
          q,
          u.getQuotedMsg,
          u.getCtwaContext,
          u.getIsNewsletterMsg,
          u.getIsForwarded,
          u.getHasOriginatedFromNewsletter,
        ],
      ),
      Q = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT ? t : null;
        },
        [A, u.getType],
      ),
      X = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.IMAGE ? t : null;
        },
        [A, u.getType],
      ),
      Y = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.VIDEO ? t : null;
        },
        [A, u.getType],
      ),
      J = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.AUDIO ? t : null;
        },
        [A, u.getType],
      ),
      Z = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.PTT ? t : null;
        },
        [A, u.getType],
      ),
      ee = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.PTV ? t : null;
        },
        [A, u.getType],
      ),
      te = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION ? t : null;
        },
        [A, u.getType],
      ),
      ne = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION ||
            t.type === o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT
            ? t
            : null;
        },
        [A, u.getType],
      ),
      re = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION
            ? t
            : null;
        },
        [A, u.getType],
      ),
      oe = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.SHARABLE_EVENT_INVITE
            ? t
            : null;
        },
        [A, u.getType],
      ),
      ae = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.ALBUM ? t : null;
        },
        [A, u.getType],
      ),
      ie = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK ? t : null;
        },
        [A, u.getType],
      ),
      le = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.CALL_LOG ? t : null;
        },
        [A, u.getType],
      ),
      se = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.POLL_UPDATE ? t : null;
        },
        [A, u.getType],
      ),
      ue = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return o("WAWebMsgModelUtils").typeIsMms(t) ? t : null;
        },
        [A, u.getType],
      ),
      ce = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return o("WAWebMsgModelUtils").typeIsUrl(t) ? t : null;
        },
        [A, u.getType, u.getSubtype],
      ),
      de = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.IMAGE ||
            t.type === o("WAWebMsgType").MSG_TYPE.VIDEO
            ? t
            : null;
        },
        [A, u.getType],
      ),
      me = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            o = e[3];
          return (n != null || r != null) && o ? (n != null ? n : r) : null;
        },
        [u.getType, de, Z, u.getIsViewOnce],
      ),
      pe = m(
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
        [A, u.getType, u.getWaveform, u.getIsOpus],
      ),
      _e = p("senderObj"),
      fe = p("mediaData"),
      ge = p("botGroupParticipant"),
      he = p("replyButtons"),
      ye = p("pendingDeleteForMe", { default: !1 }),
      Ce = p("isFadingOut", { default: !1 }),
      be = p("botPluginType"),
      ve = m(
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
        [A, be, _e],
      ),
      Se = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t.type === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE &&
            r != null
            ? t
            : null;
        },
        [A, u.getType, u.getRichResponse],
      ),
      Re = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return o("WAWebMsgModelUtils").isAnimatedEmoji(t, n);
        },
        [u.getBody, u.getType],
      ),
      Le = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return o("WAWebMsgModelUtils").isSingleEmojiMessageText(t, n);
        },
        [u.getBody, u.getType],
      ),
      Ee = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            a = r != null;
          return t === o("WAWebMsgType").MSG_TYPE.CHAT && (n || a);
        },
        [u.getType, Re, Le],
      ),
      ke = m(
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
                ? u == null && !s
                : !1;
        },
        [
          u.getType,
          u.getCtwaContext,
          u.getQuotedMsg,
          Ee,
          u.getHasOriginatedFromNewsletter,
          u.getIsForwarded,
          u.getIsQuestion,
          u.getQuestionReplyQuotedMessage,
        ],
      ),
      Ie = m(
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
      Te = m(
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
          _e,
        ],
      ),
      De = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return !t && o("WAWebUserPrefsMeUser").isMeAccount(n);
        },
        [u.getIsNewsletterMsg, u.getSender],
      ),
      xe = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            o = D(t.unsafe()),
            a;
          return (n && (a = o == null ? void 0 : o.contact), a != null ? a : r);
        },
        [A, u.getIsNewsletterMsg, _e],
      );
    ((l.clearFrontendMsgGetterCacheFor = _),
      (l.getIsMms = f),
      (l.getIsUnsentMedia = g),
      (l.getEventType = h),
      (l.getText = C),
      (l.getLinksInFullText = b),
      (l.getIsNewsletterInviteAccepted = v),
      (l.getDir = S),
      (l.getIsRTL = R),
      (l.getRtl = L),
      (l.getHasBodyOrFooter = E),
      (l.getCurrentChat = I),
      (l.getChat = T),
      (l.getMaybeChat = D),
      (l.getMaybeChatByMsgKey = x),
      (l.getCarouselCards = P),
      (l.getButtons = N),
      (l.getHasTemplateButtons = M),
      (l.getIsQuickReply = w),
      (l.getSafeMsg = A),
      (l.getAsProductInquiry = F),
      (l.getAsGroupNotification = O),
      (l.getAsBroadcastNotification = B),
      (l.getAsProduct = W),
      (l.getAsRevoked = q),
      (l.getIsMemberLabelEligible = U),
      (l.getShouldShowForwarded = V),
      (l.getAsAlbumAsset = G),
      (l.getIsUrlMessage = z),
      (l.getAsAutoDownloadableMedia = j),
      (l.getAsGroupedSticker = K),
      (l.getAsDoc = Q),
      (l.getAsImage = X),
      (l.getAsVideo = Y),
      (l.getAsAudio = J),
      (l.getAsPtt = Z),
      (l.getAsPtv = ee),
      (l.getAsPollCreation = te),
      (l.getAsPoll = ne),
      (l.getAsEventCreation = re),
      (l.getAsSharableEventInvite = oe),
      (l.getAsAlbum = ae),
      (l.getAsStickerPack = ie),
      (l.getAsCallLog = le),
      (l.getAsPollUpdate = se),
      (l.getAsMms = ue),
      (l.getAsUrl = ce),
      (l.getAsVisualMedia = de),
      (l.getAsViewOnce = me),
      (l.getAsPttLike = pe),
      (l.getSenderObj = _e),
      (l.getMediaData = fe),
      (l.getBotGroupParticipant = ge),
      (l.getReplyButtons = he),
      (l.getPendingDeleteForMe = ye),
      (l.getIsFadingOut = Ce),
      (l.getAsBotPluginCarouselMsg = ve),
      (l.getAsRichResponse = Se),
      (l.getIsAnimatedEmoji = Re),
      (l.getIsSingleEmoji = Le),
      (l.getIsTransparentMsgEmoji = Ee),
      (l.getIsTransparentMsg = ke),
      (l.getJSONAssetForAnimatedEmoji = Ie),
      (l.getMsgSenderId = Te),
      (l.getShouldDisplaySelf = De),
      (l.getSenderForReplyMsg = xe));
  },
  98,
);
