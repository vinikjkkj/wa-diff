__d(
  "WAWebFrontendMsgGetters",
  [
    "WABidi",
    "WALogger",
    "WAUrlSpoofChecksWasmInstance",
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
    "WAWebUserUtils",
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
      p = c.field;
    function _(e) {
      (d(e), S(e));
    }
    var f = m(
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
      b = (function () {
        function e(e) {
          ((this.$2 = o(
            "WAUrlSpoofChecksWasmInstance",
          ).isSuspiciousHostChecksInitialized()),
            (this.$1 = e),
            (this.size = e.size));
        }
        var t = e.prototype;
        return (
          (t.get = function (t) {
            return (
              !this.$2 &&
                o(
                  "WAUrlSpoofChecksWasmInstance",
                ).isSuspiciousHostChecksInitialized() &&
                ((this.$2 = !0), this.clear()),
              this.$1.get(t)
            );
          }),
          (t.has = function (t) {
            return this.$1.has(t);
          }),
          (t.set = function (t, n) {
            return (this.$1.set(t, n), (this.size = this.$1.size), this);
          }),
          (t.delete = function (t) {
            var e = this.$1.delete(t);
            return ((this.size = this.$1.size), e);
          }),
          (t.clear = function () {
            (this.$1.clear(), (this.size = this.$1.size));
          }),
          e
        );
      })(),
      v = o("WAWebGetters").createGetterFactories({
        root: u.getMsgUnsafe,
        createCache: function () {
          return new b(o("WAWebGettersCaches").createFrontendMessagesCache());
        },
      }),
      S = v.clearCacheFor,
      R = v.computed,
      L = v.field,
      E = L("suspiciousHostChecksInitialized"),
      k = R(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t == null ? [] : o("WAWebLinkify").findLinks(t, !1, n);
        },
        [C, u.getSender, E],
      ),
      I = m(
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
      T = m(
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
      D = m(
        function (e) {
          var t = e[0];
          return t === "rtl" || (t === void 0 && r("WAWebL10N").isRTL());
        },
        [T],
      ),
      x = m(
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
      $ = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t != null || n != null;
        },
        [C, u.getFooter],
      ),
      P = function (t) {
        return o("WAWebMsgGetters").getIsNewsletterMsg(t)
          ? r("WAWebNewsletterCollection")
          : o("WAWebChatCollection").ChatCollection;
      };
    function N(e) {
      var t = o("WAWebChatCollection").ChatCollection;
      return (
        o("WAWebMsgGetters").getIsNewsletterMsg(e) &&
          (t = r("WAWebNewsletterCollection")),
        r("nullthrows")(t.get(r("WAWebMsgKey").from(e.id).remote))
      );
    }
    var M = function (t) {
        return F(
          r("WAWebMsgKey").from(t.id),
          o("WAWebMsgGetters").getIsNewsletterMsg(t),
          t.type,
        );
      },
      w = function (t) {
        return P(t).get(r("WAWebMsgKey").from(t.id).remote);
      };
    function A(e, t) {
      var n = t
        ? r("WAWebNewsletterCollection")
        : o("WAWebChatCollection").ChatCollection;
      return n.get(e.remote);
    }
    function F(t, n, r) {
      var a = A(t, n);
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
    var O = p("sharableEventInviteId", { default: "" }),
      B = p("sharableEventInviteTitle", { default: "" }),
      W = p("sharableEventInviteStartTime"),
      q = p("sharableEventInviteEndTime"),
      U = p("sharableEventInviteCaption"),
      V = p("sharableEventInviteIsCanceled"),
      H = p("sharableEventInviteJpegThumbnail"),
      G = p("sharableEventInviteCallLink"),
      z = p("sharableEventInviteStatus"),
      j = p("sharableEventInviteLocationName"),
      K = p("sharableEventInviteCoverImageHandle"),
      Q = p("carouselCards"),
      X = m(
        function (e) {
          var t = e[0];
          return t == null ? null : t.slice();
        },
        [Q],
      ),
      Y = p("buttons"),
      J = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n != null && n.length > 0;
        },
        [u.getIsFromTemplate, Y],
      ),
      Z = m(
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
        [J, Y],
      ),
      ee = m(
        function (e) {
          var t = e[0];
          return t;
        },
        [u.getMsgUnsafe],
      ),
      te = m(
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
        [ee, u.getType, u.getId],
      ),
      ne = m(
        function (e) {
          var t = e[0];
          switch (t.type) {
            case o("WAWebMsgType").MSG_TYPE.GP2:
              return t;
            default:
              return null;
          }
        },
        [ee, u.getType],
      ),
      re = m(
        function (e) {
          var t = e[0];
          return t.type === o("WAWebMsgType").MSG_TYPE.BROADCAST_NOTIFICATION
            ? t
            : null;
        },
        [ee, u.getType],
      ),
      oe = m(
        function (e) {
          var t = e[0];
          return t.type === "product" ? t : null;
        },
        [ee, u.getType],
      ),
      ae = m(
        function (e) {
          var t = e[0];
          return t.type === o("WAWebMsgType").MSG_TYPE.REVOKED ? t : null;
        },
        [ee, u.getType],
      ),
      ie = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return !t && n !== o("WAWebMsgType").MSG_TYPE.REVOKED && !r;
        },
        [u.getIsForwarded, u.getType, u.getIsReply],
      ),
      le = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t > 0 && n !== o("WAWebMsgType").MSG_TYPE.REVOKED;
        },
        [u.getNumTimesForwarded, u.getType],
      ),
      se = p("associationType"),
      ue = m(
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
          ee,
          u.getType,
          u.getIsNotification,
          u.getCaption,
          u.getIsForwarded,
          ae,
          u.getIsGif,
          u.getQuotedMsg,
          se,
          u.getCtwaContext,
          u.getIsViewOnce,
          u.getIsQuestion,
          u.getQuestionReplyQuotedMessage,
        ],
      ),
      ce = m(
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
      de = m(
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
        [ee, u.getType, u.getIsViewOnce, ce],
      ),
      me = m(
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
            d = M(t.unsafe());
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
          ee,
          u.getType,
          u.getIsNotification,
          ae,
          u.getQuotedMsg,
          u.getCtwaContext,
          u.getIsNewsletterMsg,
          u.getIsForwarded,
          u.getHasOriginatedFromNewsletter,
        ],
      ),
      pe = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT ? t : null;
        },
        [ee, u.getType],
      ),
      _e = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.IMAGE ? t : null;
        },
        [ee, u.getType],
      ),
      fe = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.VIDEO ? t : null;
        },
        [ee, u.getType],
      ),
      ge = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.AUDIO ? t : null;
        },
        [ee, u.getType],
      ),
      he = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.PTT ? t : null;
        },
        [ee, u.getType],
      ),
      ye = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.PTV ? t : null;
        },
        [ee, u.getType],
      ),
      Ce = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION ? t : null;
        },
        [ee, u.getType],
      ),
      be = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION ||
            t.type === o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT
            ? t
            : null;
        },
        [ee, u.getType],
      ),
      ve = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION
            ? t
            : null;
        },
        [ee, u.getType],
      ),
      Se = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.SHARABLE_EVENT_INVITE
            ? t
            : null;
        },
        [ee, u.getType],
      ),
      Re = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.ALBUM ? t : null;
        },
        [ee, u.getType],
      ),
      Le = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK ? t : null;
        },
        [ee, u.getType],
      ),
      Ee = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.CALL_LOG ? t : null;
        },
        [ee, u.getType],
      ),
      ke = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return o("WAWebMsgModelUtils").typeIsMms(t) ? t : null;
        },
        [ee, u.getType],
      ),
      Ie = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return o("WAWebMsgModelUtils").typeIsUrl(t) ? t : null;
        },
        [ee, u.getType, u.getSubtype],
      ),
      Te = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.type === o("WAWebMsgType").MSG_TYPE.IMAGE ||
            t.type === o("WAWebMsgType").MSG_TYPE.VIDEO
            ? t
            : null;
        },
        [ee, u.getType],
      ),
      De = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            o = e[3];
          return (n != null || r != null) && o ? (n != null ? n : r) : null;
        },
        [u.getType, Te, he, u.getIsViewOnce],
      ),
      xe = m(
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
        [ee, u.getType, u.getWaveform, u.getIsOpus],
      ),
      $e = p("senderObj"),
      Pe = p("rowId"),
      Ne = p("unifiedResponseRawData"),
      Me = p("botSignatureVerificationMetadata"),
      we = p("latestEditSenderTimestampMs"),
      Ae = p("mediaData"),
      Fe = p("botGroupParticipant"),
      Oe = p("reporterJidList"),
      Be = p("status"),
      We = p("dashManifestUrl"),
      qe = p("stickers"),
      Ue = p("replyButtons"),
      Ve = p("pendingDeleteForMe", { default: !1 }),
      He = p("isFadingOut", { default: !1 }),
      Ge = p("botPluginType"),
      ze = m(
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
        [ee, Ge, $e],
      ),
      je = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t.type === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE &&
            r != null
            ? t
            : null;
        },
        [ee, u.getType, u.getRichResponse],
      ),
      Ke = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return o("WAWebMsgModelUtils").isAnimatedEmoji(t, n);
        },
        [u.getBody, u.getType],
      ),
      Qe = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return o("WAWebMsgModelUtils").isSingleEmojiMessageText(t, n);
        },
        [u.getBody, u.getType],
      ),
      Xe = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            a = r != null;
          return t === o("WAWebMsgType").MSG_TYPE.CHAT && (n || a);
        },
        [u.getType, Ke, Qe],
      ),
      Ye = m(
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
                  : t === o("WAWebMsgType").MSG_TYPE.INSTANT_IMAGE;
        },
        [
          u.getType,
          u.getCtwaContext,
          u.getQuotedMsg,
          Xe,
          u.getHasOriginatedFromNewsletter,
          u.getIsForwarded,
          u.getIsQuestion,
          u.getQuestionReplyQuotedMessage,
          u.getMusicData,
        ],
      ),
      Je = m(
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
      Ze = m(
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
          $e,
        ],
      ),
      et = m(
        function (e) {
          var t = e[0],
            n = e[1];
          return !t && o("WAWebUserUtils").isMeAccount(n);
        },
        [u.getIsNewsletterMsg, u.getSender],
      ),
      tt = m(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            o = w(t.unsafe()),
            a;
          return (n && (a = o == null ? void 0 : o.contact), a != null ? a : r);
        },
        [ee, u.getIsNewsletterMsg, $e],
      );
    ((l.clearFrontendMsgGetterCacheFor = _),
      (l.getIsMms = f),
      (l.getIsUnsentMedia = g),
      (l.getEventType = h),
      (l.getText = C),
      (l.getLinksInFullText = k),
      (l.getIsNewsletterInviteAccepted = I),
      (l.getDir = T),
      (l.getIsRTL = D),
      (l.getRtl = x),
      (l.getHasBodyOrFooter = $),
      (l.getCurrentChat = N),
      (l.getChat = M),
      (l.getMaybeChat = w),
      (l.getMaybeChatByMsgKey = A),
      (l.getChatByMsgKey = F),
      (l.getSharableEventInviteId = O),
      (l.getSharableEventInviteTitle = B),
      (l.getSharableEventInviteStartTime = W),
      (l.getSharableEventInviteEndTime = q),
      (l.getSharableEventInviteCaption = U),
      (l.getSharableEventInviteIsCanceled = V),
      (l.getSharableEventInviteJpegThumbnail = H),
      (l.getSharableEventInviteCallLink = G),
      (l.getSharableEventInviteStatus = z),
      (l.getSharableEventInviteLocationName = j),
      (l.getSharableEventInviteCoverImageHandle = K),
      (l.getCarouselCards = X),
      (l.getButtons = Y),
      (l.getHasTemplateButtons = J),
      (l.getIsQuickReply = Z),
      (l.getSafeMsg = ee),
      (l.getAsProductInquiry = te),
      (l.getAsGroupNotification = ne),
      (l.getAsBroadcastNotification = re),
      (l.getAsProduct = oe),
      (l.getAsRevoked = ae),
      (l.getIsMemberLabelEligible = ie),
      (l.getShouldShowForwarded = le),
      (l.getAsAlbumAsset = ue),
      (l.getIsUrlMessage = ce),
      (l.getAsAutoDownloadableMedia = de),
      (l.getAsGroupedSticker = me),
      (l.getAsDoc = pe),
      (l.getAsImage = _e),
      (l.getAsVideo = fe),
      (l.getAsAudio = ge),
      (l.getAsPtt = he),
      (l.getAsPtv = ye),
      (l.getAsPollCreation = Ce),
      (l.getAsPoll = be),
      (l.getAsEventCreation = ve),
      (l.getAsSharableEventInvite = Se),
      (l.getAsAlbum = Re),
      (l.getAsStickerPack = Le),
      (l.getAsCallLog = Ee),
      (l.getAsMms = ke),
      (l.getAsUrl = Ie),
      (l.getAsVisualMedia = Te),
      (l.getAsViewOnce = De),
      (l.getAsPttLike = xe),
      (l.getSenderObj = $e),
      (l.getRowId = Pe),
      (l.getUnifiedResponseRawData = Ne),
      (l.getBotSignatureVerificationMetadata = Me),
      (l.getLatestEditSenderTimestampMs = we),
      (l.getMediaData = Ae),
      (l.getBotGroupParticipant = Fe),
      (l.getReporterJidList = Oe),
      (l.getOrderStatus = Be),
      (l.getDashManifestUrl = We),
      (l.getStickers = qe),
      (l.getReplyButtons = Ue),
      (l.getPendingDeleteForMe = Ve),
      (l.getIsFadingOut = He),
      (l.getAsBotPluginCarouselMsg = ze),
      (l.getAsRichResponse = je),
      (l.getIsAnimatedEmoji = Ke),
      (l.getIsSingleEmoji = Qe),
      (l.getIsTransparentMsgEmoji = Xe),
      (l.getIsTransparentMsg = Ye),
      (l.getJSONAssetForAnimatedEmoji = Je),
      (l.getMsgSenderId = Ze),
      (l.getShouldDisplaySelf = et),
      (l.getSenderForReplyMsg = tt));
  },
  98,
);
