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
    "WAWebProtobufsE2E.pb",
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
    var P = p("sharableEventInviteId", { default: "" }),
      N = p("sharableEventInviteTitle", { default: "" }),
      M = p("sharableEventInviteStartTime"),
      w = p("sharableEventInviteEndTime"),
      A = p("sharableEventInviteCaption"),
      F = p("sharableEventInviteIsCanceled"),
      O = p("sharableEventInviteJpegThumbnail"),
      B = p("sharableEventInviteCallLink"),
      W = p("sharableEventInviteStatus"),
      q = p("sharableEventInviteLocationName"),
      U = p("sharableEventInviteCoverImageHandle"),
      V = p("carouselCards"),
      H = m(
        function (e) {
          var t = e[0];
          return t == null ? null : t.slice();
        },
        [V],
      ),
      G = p("buttons"),
      z = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n != null && n.length > 0;
        },
        [u.getIsFromTemplate, G],
      ),
      j = m(
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
        [z, G],
      ),
      K = m(
        function (e) {
          var t = e[0];
          return t;
        },
        [u.getMsgUnsafe],
      ),
      Q = m(
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
        [K, u.getType, u.getId],
      ),
      X = m(
        function (e) {
          var t = e[0];
          switch (t.type) {
            case o("WAWebMsgType").MSG_TYPE.GP2:
              return t;
            default:
              return null;
          }
        },
        [K, u.getType],
      ),
      Y = m(
        function (e) {
          var t = e[0];
          return t.type === o("WAWebMsgType").MSG_TYPE.BROADCAST_NOTIFICATION
            ? t
            : null;
        },
        [K, u.getType],
      ),
      J = m(
        function (e) {
          var t = e[0];
          return t.type === "product" ? t : null;
        },
        [K, u.getType],
      ),
      Z = m(
        function (e) {
          var t = e[0];
          return t.type === o("WAWebMsgType").MSG_TYPE.REVOKED ? t : null;
        },
        [K, u.getType],
      ),
      ee = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return !t && !n && !r;
        },
        [u.getIsForwarded, Z, u.getIsReply],
      ),
      te = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t > 0 && !n;
        },
        [u.getNumTimesForwarded, Z],
      ),
      ne = p("associationType"),
      re = m(
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
          K,
          u.getType,
          u.getIsNotification,
          u.getCaption,
          u.getIsForwarded,
          Z,
          u.getIsGif,
          u.getQuotedMsg,
          ne,
          u.getCtwaContext,
          u.getIsViewOnce,
          u.getIsQuestion,
          u.getQuestionReplyQuotedMessage,
        ],
      ),
      oe = m(
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
      ae = m(
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
        [K, u.getType, u.getIsViewOnce, oe],
      ),
      ie = m(
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
          K,
          u.getType,
          u.getIsNotification,
          Z,
          u.getQuotedMsg,
          u.getCtwaContext,
          u.getIsNewsletterMsg,
          u.getIsForwarded,
          u.getHasOriginatedFromNewsletter,
        ],
      ),
      le = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT ? t : null;
        },
        [K, u.getType],
      ),
      se = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.IMAGE ? t : null;
        },
        [K, u.getType],
      ),
      ue = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.VIDEO ? t : null;
        },
        [K, u.getType],
      ),
      ce = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.AUDIO ? t : null;
        },
        [K, u.getType],
      ),
      de = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.PTT ? t : null;
        },
        [K, u.getType],
      ),
      me = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.PTV ? t : null;
        },
        [K, u.getType],
      ),
      pe = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION ? t : null;
        },
        [K, u.getType],
      ),
      _e = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION ||
            t.type === o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT
            ? t
            : null;
        },
        [K, u.getType],
      ),
      fe = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION
            ? t
            : null;
        },
        [K, u.getType],
      ),
      ge = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.SHARABLE_EVENT_INVITE
            ? t
            : null;
        },
        [K, u.getType],
      ),
      he = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.ALBUM ? t : null;
        },
        [K, u.getType],
      ),
      ye = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK ? t : null;
        },
        [K, u.getType],
      ),
      Ce = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.CALL_LOG ? t : null;
        },
        [K, u.getType],
      ),
      be = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return o("WAWebMsgModelUtils").typeIsMms(t) ? t : null;
        },
        [K, u.getType],
      ),
      ve = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return o("WAWebMsgModelUtils").typeIsUrl(t) ? t : null;
        },
        [K, u.getType, u.getSubtype],
      ),
      Se = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.IMAGE ||
            t.type === o("WAWebMsgType").MSG_TYPE.VIDEO
            ? t
            : null;
        },
        [K, u.getType],
      ),
      Re = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            o = e[3];
          return (n != null || r != null) && o ? (n != null ? n : r) : null;
        },
        [u.getType, Se, de, u.getIsViewOnce],
      ),
      Le = m(
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
        [K, u.getType, u.getWaveform, u.getIsOpus],
      ),
      Ee = p("senderObj"),
      ke = p("rowId"),
      Ie = p("unifiedResponseRawData"),
      Te = p("botSignatureVerificationMetadata"),
      De = p("latestEditSenderTimestampMs"),
      xe = p("mediaData"),
      $e = p("botGroupParticipant"),
      Pe = p("reporterJidList"),
      Ne = p("status"),
      Me = p("dashManifestUrl"),
      we = p("stickers"),
      Ae = p("replyButtons"),
      Fe = p("pendingDeleteForMe", { default: !1 }),
      Oe = p("isFadingOut", { default: !1 }),
      Be = p("botPluginType"),
      We = m(
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
        [K, Be, Ee],
      ),
      qe = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t.type === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE &&
            r != null
            ? t
            : null;
        },
        [K, u.getType, u.getRichResponse],
      ),
      Ue = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return o("WAWebMsgModelUtils").isAnimatedEmoji(t, n);
        },
        [u.getBody, u.getType],
      ),
      Ve = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return o("WAWebMsgModelUtils").isSingleEmojiMessageText(t, n);
        },
        [u.getBody, u.getType],
      ),
      He = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            a = r != null;
          return t === o("WAWebMsgType").MSG_TYPE.CHAT && (n || a);
        },
        [u.getType, Ue, Ve],
      ),
      Ge = m(
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
            d = r != null || u != null;
          return t === o("WAWebMsgType").MSG_TYPE.STICKER
            ? !d &&
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
              ? !d && a && !s
              : t === o("WAWebMsgType").MSG_TYPE.MUSIC
                ? !d &&
                  !s &&
                  (c == null ? void 0 : c.style) ===
                    o("WAWebProtobufsE2E.pb")
                      .Message$MusicMessage$MusicMessageStyle.VINYL &&
                  o("WAWebMusicGatingUtils").isMusicOnChatsGeogatingEnabled()
                : t === o("WAWebMsgType").MSG_TYPE.PTV
                  ? u == null && !s
                  : !1;
        },
        [
          u.getType,
          u.getCtwaContext,
          u.getQuotedMsg,
          He,
          u.getHasOriginatedFromNewsletter,
          u.getIsForwarded,
          u.getIsQuestion,
          u.getQuestionReplyQuotedMessage,
          u.getMusicData,
        ],
      ),
      ze = m(
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
      je = m(
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
          Ee,
        ],
      ),
      Ke = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return !t && o("WAWebUserPrefsMeUser").isMeAccount(n);
        },
        [u.getIsNewsletterMsg, u.getSender],
      ),
      Qe = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            o = D(t.unsafe()),
            a;
          return (n && (a = o == null ? void 0 : o.contact), a != null ? a : r);
        },
        [K, u.getIsNewsletterMsg, Ee],
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
      (l.getSharableEventInviteId = P),
      (l.getSharableEventInviteTitle = N),
      (l.getSharableEventInviteStartTime = M),
      (l.getSharableEventInviteEndTime = w),
      (l.getSharableEventInviteCaption = A),
      (l.getSharableEventInviteIsCanceled = F),
      (l.getSharableEventInviteJpegThumbnail = O),
      (l.getSharableEventInviteCallLink = B),
      (l.getSharableEventInviteStatus = W),
      (l.getSharableEventInviteLocationName = q),
      (l.getSharableEventInviteCoverImageHandle = U),
      (l.getCarouselCards = H),
      (l.getButtons = G),
      (l.getHasTemplateButtons = z),
      (l.getIsQuickReply = j),
      (l.getSafeMsg = K),
      (l.getAsProductInquiry = Q),
      (l.getAsGroupNotification = X),
      (l.getAsBroadcastNotification = Y),
      (l.getAsProduct = J),
      (l.getAsRevoked = Z),
      (l.getIsMemberLabelEligible = ee),
      (l.getShouldShowForwarded = te),
      (l.getAsAlbumAsset = re),
      (l.getIsUrlMessage = oe),
      (l.getAsAutoDownloadableMedia = ae),
      (l.getAsGroupedSticker = ie),
      (l.getAsDoc = le),
      (l.getAsImage = se),
      (l.getAsVideo = ue),
      (l.getAsAudio = ce),
      (l.getAsPtt = de),
      (l.getAsPtv = me),
      (l.getAsPollCreation = pe),
      (l.getAsPoll = _e),
      (l.getAsEventCreation = fe),
      (l.getAsSharableEventInvite = ge),
      (l.getAsAlbum = he),
      (l.getAsStickerPack = ye),
      (l.getAsCallLog = Ce),
      (l.getAsMms = be),
      (l.getAsUrl = ve),
      (l.getAsVisualMedia = Se),
      (l.getAsViewOnce = Re),
      (l.getAsPttLike = Le),
      (l.getSenderObj = Ee),
      (l.getRowId = ke),
      (l.getUnifiedResponseRawData = Ie),
      (l.getBotSignatureVerificationMetadata = Te),
      (l.getLatestEditSenderTimestampMs = De),
      (l.getMediaData = xe),
      (l.getBotGroupParticipant = $e),
      (l.getReporterJidList = Pe),
      (l.getOrderStatus = Ne),
      (l.getDashManifestUrl = Me),
      (l.getStickers = we),
      (l.getReplyButtons = Ae),
      (l.getPendingDeleteForMe = Fe),
      (l.getIsFadingOut = Oe),
      (l.getAsBotPluginCarouselMsg = We),
      (l.getAsRichResponse = qe),
      (l.getIsAnimatedEmoji = Ue),
      (l.getIsSingleEmoji = Ve),
      (l.getIsTransparentMsgEmoji = He),
      (l.getIsTransparentMsg = Ge),
      (l.getJSONAssetForAnimatedEmoji = ze),
      (l.getMsgSenderId = je),
      (l.getShouldDisplaySelf = Ke),
      (l.getSenderForReplyMsg = Qe));
  },
  98,
);
