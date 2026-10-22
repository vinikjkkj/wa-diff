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
    "WAWebMusicGatingUtils",
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
            : r != null && r !== "" && o("WABidi").bidiDir(r) === "rtl";
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
    var T = function (t) {
        return $(
          r("WAWebMsgKey").from(t.id),
          o("WAWebMsgGetters").getIsNewsletterMsg(t),
          t.type,
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
    function $(t, n, r) {
      var a = x(t, n);
      return (
        a == null &&
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "getChat: msgKey = ",
                ", type = ",
                "",
              ])),
            t.toString(),
            r != null ? r : "unknown",
          ),
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "getChat: unexpected null chat",
                ])),
            )
            .sendLogs("get-chat-unexpected-null")),
        a
      );
    }
    var P = p("sharableEventInviteTitle", { default: "" }),
      N = p("sharableEventInviteStartTime"),
      M = p("sharableEventInviteEndTime"),
      w = p("sharableEventInviteCaption"),
      A = p("sharableEventInviteIsCanceled"),
      F = p("sharableEventInviteJpegThumbnail"),
      O = p("sharableEventInviteCallLink"),
      B = p("carouselCards"),
      W = m(
        function (e) {
          var t = e[0];
          return t == null ? null : t.slice();
        },
        [B],
      ),
      q = p("buttons"),
      U = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n != null && n.length > 0;
        },
        [u.getIsFromTemplate, q],
      ),
      V = m(
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
        [U, q],
      ),
      H = m(
        function (e) {
          var t = e[0];
          return t;
        },
        [u.getMsgUnsafe],
      ),
      G = m(
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
        [H, u.getType, u.getId],
      ),
      z = m(
        function (e) {
          var t = e[0];
          switch (t.type) {
            case o("WAWebMsgType").MSG_TYPE.GP2:
              return t;
            default:
              return null;
          }
        },
        [H, u.getType],
      ),
      j = m(
        function (e) {
          var t = e[0];
          return t.type === o("WAWebMsgType").MSG_TYPE.BROADCAST_NOTIFICATION
            ? t
            : null;
        },
        [H, u.getType],
      ),
      K = m(
        function (e) {
          var t = e[0];
          return t.type === "product" ? t : null;
        },
        [H, u.getType],
      ),
      Q = m(
        function (e) {
          var t = e[0];
          return t.type === o("WAWebMsgType").MSG_TYPE.REVOKED ? t : null;
        },
        [H, u.getType],
      ),
      X = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return !t && !n && !r;
        },
        [u.getIsForwarded, Q, u.getIsReply],
      ),
      Y = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t > 0 && !n;
        },
        [u.getNumTimesForwarded, Q],
      ),
      J = p("associationType"),
      Z = m(
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
          H,
          u.getType,
          u.getIsNotification,
          u.getCaption,
          u.getIsForwarded,
          Q,
          u.getIsGif,
          u.getQuotedMsg,
          J,
          u.getCtwaContext,
          u.getIsViewOnce,
          u.getIsQuestion,
          u.getQuestionReplyQuotedMessage,
        ],
      ),
      ee = m(
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
      te = m(
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
        [H, u.getType, u.getIsViewOnce, ee],
      ),
      ne = m(
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
          H,
          u.getType,
          u.getIsNotification,
          Q,
          u.getQuotedMsg,
          u.getCtwaContext,
          u.getIsNewsletterMsg,
          u.getIsForwarded,
          u.getHasOriginatedFromNewsletter,
        ],
      ),
      re = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT ? t : null;
        },
        [H, u.getType],
      ),
      oe = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.IMAGE ? t : null;
        },
        [H, u.getType],
      ),
      ae = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.VIDEO ? t : null;
        },
        [H, u.getType],
      ),
      ie = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.AUDIO ? t : null;
        },
        [H, u.getType],
      ),
      le = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.PTT ? t : null;
        },
        [H, u.getType],
      ),
      se = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.PTV ? t : null;
        },
        [H, u.getType],
      ),
      ue = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION ? t : null;
        },
        [H, u.getType],
      ),
      ce = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION ||
            t.type === o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT
            ? t
            : null;
        },
        [H, u.getType],
      ),
      de = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION
            ? t
            : null;
        },
        [H, u.getType],
      ),
      me = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.SHARABLE_EVENT_INVITE
            ? t
            : null;
        },
        [H, u.getType],
      ),
      pe = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.ALBUM ? t : null;
        },
        [H, u.getType],
      ),
      _e = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK ? t : null;
        },
        [H, u.getType],
      ),
      fe = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.CALL_LOG ? t : null;
        },
        [H, u.getType],
      ),
      ge = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return o("WAWebMsgModelUtils").typeIsMms(t) ? t : null;
        },
        [H, u.getType],
      ),
      he = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return o("WAWebMsgModelUtils").typeIsUrl(t) ? t : null;
        },
        [H, u.getType, u.getSubtype],
      ),
      ye = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.IMAGE ||
            t.type === o("WAWebMsgType").MSG_TYPE.VIDEO
            ? t
            : null;
        },
        [H, u.getType],
      ),
      Ce = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            o = e[3];
          return (n != null || r != null) && o ? (n != null ? n : r) : null;
        },
        [u.getType, ye, le, u.getIsViewOnce],
      ),
      be = m(
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
        [H, u.getType, u.getWaveform, u.getIsOpus],
      ),
      ve = p("senderObj"),
      Se = p("rowId"),
      Re = p("unifiedResponseRawData"),
      Le = p("botSignatureVerificationMetadata"),
      Ee = p("latestEditSenderTimestampMs"),
      ke = p("mediaData"),
      Ie = p("botGroupParticipant"),
      Te = p("reporterJidList"),
      De = p("status"),
      xe = p("dashManifestUrl"),
      $e = p("stickers"),
      Pe = p("replyButtons"),
      Ne = p("pendingDeleteForMe", { default: !1 }),
      Me = p("isFadingOut", { default: !1 }),
      we = p("botPluginType"),
      Ae = m(
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
        [H, we, ve],
      ),
      Fe = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t.type === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE &&
            r != null
            ? t
            : null;
        },
        [H, u.getType, u.getRichResponse],
      ),
      Oe = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return o("WAWebMsgModelUtils").isAnimatedEmoji(t, n);
        },
        [u.getBody, u.getType],
      ),
      Be = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return o("WAWebMsgModelUtils").isSingleEmojiMessageText(t, n);
        },
        [u.getBody, u.getType],
      ),
      We = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            a = r != null;
          return t === o("WAWebMsgType").MSG_TYPE.CHAT && (n || a);
        },
        [u.getType, Oe, Be],
      ),
      qe = m(
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
              : t === o("WAWebMsgType").MSG_TYPE.MUSIC
                ? !c &&
                  !s &&
                  o("WAWebMusicGatingUtils").isMusicOnChatsGeogatingEnabled()
                : t === o("WAWebMsgType").MSG_TYPE.PTV
                  ? u == null && !s
                  : !1;
        },
        [
          u.getType,
          u.getCtwaContext,
          u.getQuotedMsg,
          We,
          u.getHasOriginatedFromNewsletter,
          u.getIsForwarded,
          u.getIsQuestion,
          u.getQuestionReplyQuotedMessage,
        ],
      ),
      Ue = m(
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
      Ve = m(
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
          ve,
        ],
      ),
      He = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return !t && o("WAWebUserPrefsMeUser").isMeAccount(n);
        },
        [u.getIsNewsletterMsg, u.getSender],
      ),
      Ge = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            o = D(t.unsafe()),
            a;
          return (n && (a = o == null ? void 0 : o.contact), a != null ? a : r);
        },
        [H, u.getIsNewsletterMsg, ve],
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
      (l.getChatByMsgKey = $),
      (l.getSharableEventInviteTitle = P),
      (l.getSharableEventInviteStartTime = N),
      (l.getSharableEventInviteEndTime = M),
      (l.getSharableEventInviteCaption = w),
      (l.getSharableEventInviteIsCanceled = A),
      (l.getSharableEventInviteJpegThumbnail = F),
      (l.getSharableEventInviteCallLink = O),
      (l.getCarouselCards = W),
      (l.getButtons = q),
      (l.getHasTemplateButtons = U),
      (l.getIsQuickReply = V),
      (l.getSafeMsg = H),
      (l.getAsProductInquiry = G),
      (l.getAsGroupNotification = z),
      (l.getAsBroadcastNotification = j),
      (l.getAsProduct = K),
      (l.getAsRevoked = Q),
      (l.getIsMemberLabelEligible = X),
      (l.getShouldShowForwarded = Y),
      (l.getAsAlbumAsset = Z),
      (l.getIsUrlMessage = ee),
      (l.getAsAutoDownloadableMedia = te),
      (l.getAsGroupedSticker = ne),
      (l.getAsDoc = re),
      (l.getAsImage = oe),
      (l.getAsVideo = ae),
      (l.getAsAudio = ie),
      (l.getAsPtt = le),
      (l.getAsPtv = se),
      (l.getAsPollCreation = ue),
      (l.getAsPoll = ce),
      (l.getAsEventCreation = de),
      (l.getAsSharableEventInvite = me),
      (l.getAsAlbum = pe),
      (l.getAsStickerPack = _e),
      (l.getAsCallLog = fe),
      (l.getAsMms = ge),
      (l.getAsUrl = he),
      (l.getAsVisualMedia = ye),
      (l.getAsViewOnce = Ce),
      (l.getAsPttLike = be),
      (l.getSenderObj = ve),
      (l.getRowId = Se),
      (l.getUnifiedResponseRawData = Re),
      (l.getBotSignatureVerificationMetadata = Le),
      (l.getLatestEditSenderTimestampMs = Ee),
      (l.getMediaData = ke),
      (l.getBotGroupParticipant = Ie),
      (l.getReporterJidList = Te),
      (l.getOrderStatus = De),
      (l.getDashManifestUrl = xe),
      (l.getStickers = $e),
      (l.getReplyButtons = Pe),
      (l.getPendingDeleteForMe = Ne),
      (l.getIsFadingOut = Me),
      (l.getAsBotPluginCarouselMsg = Ae),
      (l.getAsRichResponse = Fe),
      (l.getIsAnimatedEmoji = Oe),
      (l.getIsSingleEmoji = Be),
      (l.getIsTransparentMsgEmoji = We),
      (l.getIsTransparentMsg = qe),
      (l.getJSONAssetForAnimatedEmoji = Ue),
      (l.getMsgSenderId = Ve),
      (l.getShouldDisplaySelf = He),
      (l.getSenderForReplyMsg = Ge));
  },
  98,
);
