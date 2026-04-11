__d(
  "WAWebMsgGetters",
  [
    "WABase64",
    "WAJids",
    "WALogger",
    "WAPhoneFindCC",
    "WATimeUtils",
    "WATypeUtils",
    "WAWebAck",
    "WAWebBizSystemMsgSubtypes",
    "WAWebBotTypes",
    "WAWebBusinessHSMTypes",
    "WAWebCallLogMsgData.flow",
    "WAWebCommonMsgUtils",
    "WAWebConstantsDeprecated",
    "WAWebEphemeralConstants",
    "WAWebEphemeralityWAMUtils",
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebInteractiveMessageHeaderMediaType",
    "WAWebMimeTypes",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebMusicParsingUtils",
    "WAWebNewsletterIsNewsletterMsg",
    "WAWebNonJidMentionUtils",
    "WAWebPollCreationUtils",
    "WAWebProtobufsAICommon.pb",
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsMeUser",
    "WAWebVcardParsingUtils",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "WAWebWamEnumEditType",
    "WAWebWid",
    "WAWebWidFactory",
    "countWhere",
    "gkx",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createMessagesCache,
      }),
      m = d.clearCacheFor,
      p = d.computed,
      _ = d.field,
      f = d.unsafeIdentityGetter,
      g = m,
      h = f,
      y = [
        o("WAWebCallLogMsgData.flow").CallOutcome.Completed,
        o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing,
        o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere,
      ];
    function C(e) {
      return e instanceof r("WAWebWid")
        ? e
        : e.user != null
          ? o("WAWebWidFactory").createUserWidOrThrow(e.user, e.server)
          : e;
    }
    var b = _("type"),
      v = _("subtype"),
      S = _("id"),
      R = p(
        function (e) {
          var t = e[0];
          return r("WAWebMsgKey").from(t);
        },
        [S],
      ),
      L = _("serverId"),
      E = _("to"),
      k = _("from"),
      I = _("broadcastId"),
      T = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return n != null ? n : t.remote;
        },
        [R, I],
      ),
      D = _("viewMode"),
      x = _("author"),
      $ = _("ack"),
      P = _("isScheduledMsg"),
      N = _("viewCount"),
      M = _("forwardsCount"),
      w = _("viewed"),
      A = _("originalSelfAuthor"),
      F = _("kicState"),
      O = _("kicTimestampMs"),
      B = _("list"),
      W = _("latestEditMsgKey"),
      q = _("errorCode"),
      U = _("ephemeralDuration"),
      V = _("afterReadDuration"),
      H = _("expiredTimestamp"),
      G = _("ephemeralSettingUser"),
      z = _("t", { default: 0 }),
      j = _("clientReceivedTsMillis"),
      K = _("backgroundColor"),
      Q = _("headerType"),
      X = _("interactiveHeader"),
      Y = _("interactiveType"),
      J = _("footer"),
      Z = _("mentionedJidList"),
      ee = _("groupMentions", {
        getDefault: function () {
          return [];
        },
      }),
      te = _("quotedMsg"),
      ne = _("quotedRemoteJid"),
      re = _("quotedParticipant"),
      oe = _("quotedType"),
      ae = _("rcat"),
      ie = _("isViewOnce", { default: !1 }),
      le = _("isGif", { default: !1 }),
      se = _("gifAttribution", {
        default: o("WAWebProtobufsE2E.pb").Message$VideoMessage$Attribution
          .NONE,
      }),
      ue = _("ctwaContext"),
      ce = _("mimetype"),
      de = _("filehash"),
      me = _("deprecatedMms3Url"),
      pe = _("waveform"),
      _e = _("disappearingModeInitiator"),
      fe = _("disappearingModeTrigger"),
      ge = _("disappearingModeInitiatedByMe"),
      he = _("activeBotMsgStreamingInProgress"),
      ye = _("bizBotType"),
      Ce = _("botTargetSenderJid"),
      be = _("isSupportAIMessage"),
      ve = _("lastBotEditBodyLength"),
      Se = _("botEditType"),
      Re = _("forwardedNewsletterMessageInfo"),
      Le = _("forwardedAiBotMessageInfo"),
      Ee = _("newsletterAdminInviteInfo"),
      ke = _("newsletterFollowerInviteInfo"),
      Ie = _("isGroupStatus"),
      Te = p(
        function (e) {
          var t = e[0];
          return t === !0;
        },
        [Ie],
      ),
      De = _("isNewsletterStatus", { default: !1 }),
      xe = _("bizSource");
    function $e(e) {
      return e === "smb_promo";
    }
    var Pe = p(
        function (e) {
          var t = e[0];
          return $e(t);
        },
        [xe],
      ),
      Ne = p(
        function (e) {
          var t = e[0];
          return t != null;
        },
        [te],
      ),
      Me = p(
        function (e) {
          var t = e[0];
          return o("WAWebMimeTypes").isOpus(t);
        },
        [ce],
      ),
      we = p(
        function (e) {
          var t = e[0];
          return t == null ? null : o("WABase64").encodeB64UrlSafe(t, !0);
        },
        [ae],
      ),
      Ae = p(
        function (e) {
          var t = e[0];
          return t == null
            ? !1
            : t.some(function (e) {
                return o("WAWebUserPrefsMeUser").isMeAccount(C(e));
              });
        },
        [Z],
      ),
      Fe = _("local", { default: !1 }),
      Oe = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n ? o("WAWebUserPrefsMeUser").isMeAccount(C(n)) : !1;
        },
        [te, re],
      ),
      Be = _("nonJidMentions"),
      We = p(
        function (e) {
          var t = e[0];
          return o("WAWebNonJidMentionUtils").hasMentionAll(t);
        },
        [Be],
      ),
      qe = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t || n || r;
        },
        [Ae, Oe, We],
      ),
      Ue = _("botPluginReferenceIndex"),
      Ve = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          if (
            n != null ||
            !o("WAWebViewModeUtils").isViewModeVisibleInSurface(
              o("WAWebViewMode.flow").ViewModeSurface.CHAT,
              r,
            )
          )
            return !1;
          switch (t) {
            case "interactive":
            case "chat":
            case "image":
            case "video":
            case "ptv":
            case "audio":
            case "ptt":
            case "document":
            case "vcard":
            case "location":
            case "ciphertext":
            case "oversized":
            case "multi_vcard":
            case "sticker":
            case "status":
            case "product":
            case "groups_v4_invite":
            case "poll_creation":
            case "poll_result_snapshot":
            case "list":
            case "newsletter_admin_invite":
            case "newsletter_follower_invite":
            case "event_creation":
            case "sticker-pack":
            case "album":
            case "rich_response":
            case "automated_greeting_message":
            case "quarantined":
              return !0;
            default:
              return !1;
          }
        },
        [b, Ue, D],
      ),
      He = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.isRegularUser() && n.isRegularUser();
        },
        [k, E],
      ),
      Ge = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return r("WAWebWid").isGroup(t) || r("WAWebWid").isGroup(n);
        },
        [k, E],
      ),
      ze = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return r("WAWebNewsletterIsNewsletterMsg")({ from: t, to: n });
        },
        [k, E],
      ),
      je = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n != null;
        },
        [ze, Re],
      ),
      Ke = p(
        function (e) {
          var t = e[0],
            n = e[1],
            o = e[2];
          return r("WAWebWid").isStatus(t.remote) || n || o;
        },
        [R, Te, De],
      ),
      Qe = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return o("WAWebCommonMsgUtils").isNotificationType(t, n);
        },
        [b, v],
      ),
      Xe = p(
        function (t) {
          var n = t[0],
            r = t[1],
            a = t[2],
            i = t[3],
            l = t[4];
          return n.self === "in" || a
            ? (!a &&
                n.fromMe &&
                o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "id.self='in' non-notif msg type=",
                        " sub=",
                        " id=",
                        " from=",
                        "",
                      ])),
                    i,
                    l,
                    n.toString(),
                    r,
                  )
                  .sendLogs("self-in-not-notification"),
              !1)
            : i === "revoked"
              ? o("WAWebUserPrefsMeUser").isMeAccount(r)
              : n.fromMe;
        },
        [R, k, Qe, b, v],
      ),
      Ye = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            a = e[3],
            i = e[4],
            l = e[5],
            s = e[6],
            u = e[7],
            c = e[8];
          return i || l
            ? t.remote
            : n
              ? s
                ? o("WAWebUserPrefsMeUser").getMeUser()
                : u
              : r || a || (c != null && c.isBot())
                ? c
                : u;
        },
        [R, Xe, Ge, Ke, Te, De, ze, k, x],
      ),
      Je = p(
        function (e) {
          var t = e[0],
            n = e[1],
            a = e[2],
            i = t || n;
          return (
            i != null &&
              i.isUser == null &&
              (r("gkx")("26258")
                ? o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "non-wid originalSelfAuthorOrSender typeof=",
                          " type=",
                          "",
                        ])),
                      typeof i,
                      a,
                    )
                    .sendLogs("non-wid-originalselfauthororsender")
                : o("WALogger")
                    .ERROR(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "non-wid originalSelfAuthorOrSender val=",
                          " typeof=",
                          " type=",
                          "",
                        ])),
                      String(i),
                      typeof i,
                      a,
                    )
                    .sendLogs("non-wid-originalselfauthororsender")),
            i != null && i.isUser != null && i.isUser()
              ? o("WAWebWidFactory").asUserWidOrThrow(i)
              : null
          );
        },
        [A, Ye, b],
      ),
      Ze = p(
        function (e) {
          var t = e[0];
          return (
            t === o("WAWebMsgType").MSG_TYPE.REACTION ||
            t === o("WAWebMsgType").MSG_TYPE.REACTION_ENC
          );
        },
        [b],
      ),
      et = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.POLL_UPDATE && n === "poll_vote"
          );
        },
        [b, v],
      ),
      tt = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.UNKNOWN ||
            (t === o("WAWebMsgType").MSG_TYPE.PAYMENT && n === "futureproof")
          );
        },
        [b, v],
      ),
      nt = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebMsgType").MSG_TYPE.STICKER;
        },
        [b],
      ),
      rt = _("isCarouselCard", { default: !1 }),
      ot = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebMsgType").MSG_TYPE.DOCUMENT;
        },
        [b],
      ),
      at = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return !t && !n && !r;
        },
        [ie, nt, ot],
      ),
      it = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebEphemeralConstants").KeepInChatState.KEPT;
        },
        [F],
      ),
      lt = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebEphemeralConstants").KeepInChatState.UNKEPT;
        },
        [F],
      ),
      st = p(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isPSA(t.remote);
        },
        [R],
      ),
      ut = p(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isIAS(t.remote);
        },
        [R],
      ),
      ct = p(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isAiHub(t.remote);
        },
        [R],
      ),
      dt = p(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isCAPISupportAccount(t.remote);
        },
        [R],
      ),
      mt = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.LIST &&
            (n == null ? void 0 : n.listType) ===
              o("WAWebProtobufsE2E.pb").Message$ListMessage$ListType
                .PRODUCT_LIST
          );
        },
        [b, B],
      ),
      pt = _("title"),
      _t = _("body", { default: "" }),
      ft = _("caption"),
      gt = _("comment"),
      ht = _("pollName", { default: "" }),
      yt = _("pollOptions"),
      Ct = _("pollSelectableOptionsCount", { default: 0 }),
      bt = _("pollInvalidated", { default: !1 }),
      vt = _("pollContentType", {
        default: o("WAWebPollCreationUtils").PollContentType.TEXT,
      }),
      St = _("pollType", {
        default: o("WAWebPollCreationUtils").PollType.POLL,
      }),
      Rt = _("correctOptionIndex"),
      Lt = _("pollEndTime"),
      Et = _("pollHideVoterNames"),
      kt = _("pollAllowAddOption"),
      It = _("pollVotesSnapshot"),
      Tt = _("quarantineExtractedText"),
      Dt = _("eventName", { default: "" }),
      xt = _("eventDescription"),
      $t = _("eventStartTime", { default: 0 }),
      Pt = _("eventEndTime"),
      Nt = _("eventJoinLink"),
      Mt = _("eventLocation"),
      wt = _("isEventCanceled", { default: !1 }),
      At = _("eventInvalidated", { default: !1 }),
      Ft = _("eventIsScheduledCall", { default: !1 }),
      Ot = _("eventExtraGuestsAllowed", { default: !1 }),
      Bt = _("replyCount", { default: 0 }),
      Wt = _("nativeFlowName"),
      qt = _("nativeFlowButtons"),
      Ut = _("galaxyFlowDisabled", { default: !1 }),
      Vt = _("signupCtaTapped", { default: !1 }),
      Ht = _("paymentCurrency", { default: "" }),
      Gt = _("paymentAmount1000", { default: 0 }),
      zt = _("paymentMessageReceiverJid"),
      jt = _("paymentStatus"),
      Kt = _("paymentTxnStatus"),
      Qt = _("paymentNoteMsg"),
      Xt = _("paymentRequestMessageKey"),
      Yt = _("paymentExpiryTimestamp"),
      Jt = _("paymentInviteServiceType"),
      Zt = _("isFromTemplate", { default: !1 }),
      en = _("isLive", { default: !1 }),
      tn = _("isDynamicReplyButtonsMsg", { default: !1 }),
      nn = _("dynamicReplyButtons"),
      rn = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
            n === "ephemeral_setting"
            ? !1
            : r != null && r !== 0;
        },
        [b, v, U],
      ),
      on = p(
        function (e) {
          var t = e[0];
          return t != null;
        },
        [W],
      ),
      an = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.PROTOCOL && n === "message_edit"
          );
        },
        [b, v],
      ),
      ln = p(
        function (e) {
          var t = e[0],
            n = e[1];
          if (!t) return null;
          var r = "rgba(86, 150, 255, 255)",
            o = n;
          if (o == null || o === 0) return r;
          var a = (o >> 24) & 255,
            i = (o >> 16) & 255,
            l = (o >> 8) & 255,
            s = o & 255;
          return "rgba(" + i + ", " + l + ", " + s + ", " + a + ")";
        },
        [Ke, K],
      ),
      sn = p(
        function (e) {
          var t = e[0];
          switch (t) {
            case "protocol":
            case "chat":
            case "location":
            case "vcard":
            case "multi_vcard":
            case "image":
            case "video":
            case "ptv":
            case "audio":
            case "ptt":
            case "document":
            case "sticker":
            case "status":
            case "product":
            case "groups_v4_invite":
            case "order":
            case "poll_creation":
            case "poll_result_snapshot":
            case "newsletter_admin_invite":
            case "newsletter_follower_invite":
            case "comment":
            case "event_creation":
            case "sticker-pack":
            case "album":
            case "rich_response":
            case "newsletter_question_response":
            case "quarantined":
            case "poll_add_option_decrypted":
              return !0;
            default:
              return !1;
          }
        },
        [b],
      ),
      un = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t.fromMe && n && r;
        },
        [R, Fe, sn],
      ),
      cn = _("revokeSender"),
      dn = p(
        function (e) {
          var t = e[0];
          return t != null && o("WAWebUserPrefsMeUser").isMeAccount(t);
        },
        [cn],
      ),
      mn = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            a = t.fromMe,
            i = a
              ? n == null
                ? void 0
                : n.toString({ legacy: !0 })
              : r == null
                ? void 0
                : r.toString({ legacy: !0 }),
            l = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
            s = l == null ? void 0 : l.toString({ legacy: !0 });
          if (i && s != null) {
            var u = o("WAJids").interpretAndValidateJid(i),
              d = o("WAJids").interpretAndValidateJid(s);
            return (
              u.jidType === "phoneUser" &&
              d.jidType === "phoneUser" &&
              o("WAPhoneFindCC").phoneCC(u.userJid) !==
                o("WAPhoneFindCC").phoneCC(d.userJid)
            );
          }
          return (
            o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "Msg: isInternational derivation failed, missing data",
                ])),
            ),
            !1
          );
        },
        [R, E, k],
      ),
      pn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          if (t === o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE) {
            if (
              o("WAWebBizSystemMsgSubtypes").BIZ_SYSTEM_MSG_SUBTYPES.includes(
                n,
              ) ||
              o(
                "WAWebBizSystemMsgSubtypes",
              ).BIZ_SYSTEM_MSG_SUBTYPES_V2.includes(n)
            )
              return !0;
            switch (n) {
              case "verified_initial_unknown":
              case "verified_initial_low":
              case "verified_initial_high":
              case "verified_transition_any_to_none":
              case "verified_transition_any_to_high":
              case "verified_transition_high_to_low":
              case "verified_transition_high_to_unknown":
              case "verified_transition_unknown_to_low":
              case "verified_transition_low_to_unknown":
              case "verified_transition_none_to_low":
              case "verified_transition_none_to_unknown":
              case "biz_verified_transition_top_to_bottom":
              case "biz_verified_transition_bottom_to_top":
              case "biz_intro_top":
              case "biz_intro_bottom":
              case "biz_name_change":
              case "biz_move_to_consumer_app":
              case "biz_two_tier_migration_top":
              case "biz_two_tier_migration_bottom":
                return !0;
              default:
                return !1;
            }
          }
          return !1;
        },
        [b, v],
      ),
      _n = p(
        function (e) {
          var t = e[0],
            n = e[1];
          switch (t) {
            case "image":
            case "video":
            case "audio":
            case "sticker-pack":
              return !0;
            case "interactive":
              return n == null
                ? !1
                : n.mediaType ===
                    o("WAWebInteractiveMessageHeaderMediaType")
                      .InteractiveMessageHeaderMediaType.IMAGE ||
                    n.mediaType ===
                      o("WAWebInteractiveMessageHeaderMediaType")
                        .InteractiveMessageHeaderMediaType.VIDEO;
            default:
              return !1;
          }
        },
        [b, X],
      ),
      fn = _("isForwarded", { default: !1 }),
      gn = _("forwardingScore"),
      hn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return n == null ? (t ? 1 : 0) : n || 0;
        },
        [fn, gn],
      ),
      yn = p(
        function (e) {
          var t = e[0];
          return (
            t >= r("WAWebConstantsDeprecated").FREQUENTLY_FORWARDED_SENTINEL
          );
        },
        [hn],
      ),
      Cn = _("isQuestion", { default: !1 }),
      bn = _("questionResponsesCount"),
      vn = _("readQuestionResponsesCount"),
      Sn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t - n;
        },
        [bn, vn],
      ),
      Rn = _("questionReplyQuotedMessage"),
      Ln = p(
        function (e) {
          var t = e[0];
          return t != null;
        },
        [Rn],
      ),
      En = _("newsletterAdminProfile"),
      kn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t.fromMe &&
            n != null &&
            n.some(function (e) {
              return e.isBot();
            })
          );
        },
        [R, Z],
      ),
      In = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            o = e[3];
          return t || n || o || !r;
        },
        [fn, je, Xe, kn],
      ),
      Tn = _("invis", { default: !1 }),
      Dn = _("isNewMsg", { default: !1 }),
      xn = _("isSendFailure", { default: !1 }),
      $n = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (t && n != null && n < o("WAWebAck").ACK.CLOCK) || r;
        },
        [Xe, $, xn],
      ),
      Pn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          if (t === o("WAWebMsgType").MSG_TYPE.VCARD)
            try {
              return o("WAWebVcardParsingUtils").parseVcard(n);
            } catch (e) {
              return;
            }
        },
        [b, _t],
      ),
      Nn = _("description"),
      Mn = _("matchedText", { default: "" }),
      wn = _("thumbnail"),
      An = _("thumbnailHQ"),
      Fn = _("musicArtwork"),
      On = _("richPreviewType", {
        default: o("WAWebProtobufsE2E.pb")
          .Message$ExtendedTextMessage$PreviewType.NONE,
      }),
      Bn = _("paymentLinkMetadata", { default: null }),
      Wn = _("faviconMMSMetadata", { default: null }),
      qn = p(
        function (e) {
          var t,
            n = e[0],
            r = n == null || (t = n.provider) == null ? void 0 : t.paramsJson;
          if (r == null) return null;
          try {
            var o,
              a,
              i,
              l,
              s,
              u = null,
              c = JSON.parse(r);
            if (
              (c == null || (o = c.meta_tags) == null
                ? void 0
                : o.is_business_verified) != null
            ) {
              var d;
              u = babelHelpers.extends({}, u, {
                isBusinessVerified:
                  c == null || (d = c.meta_tags) == null
                    ? void 0
                    : d.is_business_verified,
              });
            }
            var m =
              c == null ||
              (a = c.meta_tags) == null ||
              (a = a.provider_name) == null
                ? void 0
                : a.trim();
            return (
              m != null &&
                m.length > 0 &&
                (u = babelHelpers.extends({}, u, { providerName: m })),
              (c == null || (i = c.meta_tags) == null ? void 0 : i.amount) !=
                null &&
                (c == null || (l = c.meta_tags) == null ? void 0 : l.offset) !=
                  null &&
                (c == null || (s = c.meta_tags) == null
                  ? void 0
                  : s.currency) != null &&
                (u = babelHelpers.extends({}, u, {
                  amount: c.meta_tags.amount,
                  offset: c.meta_tags.offset,
                  currency: c.meta_tags.currency,
                })),
              u
            );
          } catch (e) {
            return null;
          }
        },
        [Bn],
      ),
      Un = p(
        function (e) {
          var t = e[0];
          return (
            (t == null ? void 0 : t.isBusinessVerified) === !0 &&
            (t == null ? void 0 : t.providerName) != null
          );
        },
        [qn],
      ),
      Vn = p(
        function (e) {
          var t = e[0],
            n = e[1],
            a = e[2],
            i = e[3];
          return (
            o("WATypeUtils").isString(i) &&
            (!r("isStringNullOrEmpty")(n) || !r("isStringNullOrEmpty")(a)) &&
            t != null &&
            t.includes(i)
          );
        },
        [_t, pt, Nn, Mn],
      ),
      Hn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n;
        },
        [tn, Zt],
      ),
      Gn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            n ||
            t === o("WAWebMsgType").MSG_TYPE.LIST ||
            t === o("WAWebMsgType").MSG_TYPE.INTERACTIVE
          );
        },
        [b, tn],
      ),
      zn = 768,
      jn = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = 308;
          return n != null && n.isBot() ? 1 / 0 : t ? r : zn;
        },
        [yn, Ye],
      ),
      Kn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            (t === o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION &&
              n === "encrypt") ||
            o(
              "WAWebBizSystemMsgSubtypes",
            ).BIZ_SYSTEM_MSG_SUBTYPES_V2_INIT.includes(n)
          );
        },
        [b, v],
      ),
      Qn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE &&
            n === "disappearing_mode"
          );
        },
        [b, v],
      ),
      Xn = _("kicKey"),
      Yn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          if (t != null) {
            if (t.fromMe) return o("WAWebUserPrefsMeUser").getMaybeMePnUser();
            if (n && t.participant != null)
              return o("WAWebWidFactory").asUserWidOrThrow(t.participant);
            if (!n) return o("WAWebWidFactory").asUserWidOrThrow(t.remote);
          }
        },
        [Xn, Ge],
      ),
      Jn = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            o = e[3];
          return r === "ephemeral_setting"
            ? null
            : o != null && o > 0
              ? o
              : t == null || t === 0
                ? null
                : n + t;
        },
        [U, z, v, H],
      ),
      Zn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
            (n === "sender_revoke" || n === "admin_revoke")
          );
        },
        [b, v],
      ),
      er = _("revokeDuration"),
      tr = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return n
            ? t === "admin_revoke"
              ? o("WAWebWamEnumEditType").EDIT_TYPE.ADMIN_REVOKE
              : o("WAWebWamEnumEditType").EDIT_TYPE.SENDER_REVOKE
            : r
              ? o("WAWebWamEnumEditType").EDIT_TYPE.EDITED
              : o("WAWebWamEnumEditType").EDIT_TYPE.NOT_EDITED;
        },
        [v, Zn, on],
      ),
      nr = p(
        function (e) {
          var t = e[0];
          if (t != null)
            return o("WAWebEphemeralityWAMUtils").getWamDisappearingModeTrigger(
              t,
            );
        },
        [fe],
      ),
      rr = p(
        function (e) {
          var t = e[0];
          if (t != null)
            return o(
              "WAWebEphemeralityWAMUtils",
            ).getWamDisappearingModeInitiatedByMe(t);
        },
        [ge],
      ),
      or = p(
        function (e) {
          var t = e[0];
          if (t != null)
            return o(
              "WAWebEphemeralityWAMUtils",
            ).getWamDisappearingModeInitiator(t);
        },
        [_e],
      ),
      ar = _("inviteCode", { default: "" }),
      ir = _("inviteCodeExp", { default: "" }),
      lr = _("inviteGrp", { default: "" }),
      sr = _("inviteGrpName"),
      ur = _("inviteGrpJpegThum"),
      cr = _("inviteGrpType"),
      dr = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          if (t !== o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE) return !1;
          if (!n) return !0;
          var a = new Date().getTime() / 1e3;
          return parseInt(a, 10) >= parseInt(r, 10);
        },
        [b, ar, ir],
      ),
      mr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          if (t !== o("WAWebMsgType").MSG_TYPE.NEWSLETTER_ADMIN_INVITE)
            return !1;
          if (n == null) return !0;
          var r = n.inviteExpiration,
            a = o("WATimeUtils").unixTime();
          return a >= r;
        },
        [b, Ee],
      ),
      pr = _("productHeaderImageRejected", { default: !1 }),
      _r = p(
        function (e) {
          var t,
            n,
            r = e[0],
            o = e[1];
          return r === !0
            ? null
            : (t =
                  o == null ||
                  (n = o.productListInfo) == null ||
                  (n = n.headerImage) == null
                    ? void 0
                    : n.jpegThumbnail) != null
              ? t
              : null;
        },
        [pr, B],
      ),
      fr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.PTT ||
            t === o("WAWebMsgType").MSG_TYPE.PTV ||
            (n && t === o("WAWebMsgType").MSG_TYPE.AUDIO)
          );
        },
        [b, je],
      ),
      gr = _("hasReaction", { default: !1 }),
      hr = _("recipients", {
        getDefault: function () {
          return [];
        },
      }),
      yr = _("templateParams", {
        getDefault: function () {
          return [];
        },
      }),
      Cr = _("clientUrl", { default: "" }),
      br = _("loc", { default: "" }),
      vr = _("lat"),
      Sr = _("lng"),
      Rr = _("shareDuration"),
      Lr = _("finalLat"),
      Er = _("finalLng"),
      kr = _("star", { default: !1 }),
      Ir = _("currencyCode"),
      Tr = _("priceAmount1000"),
      Dr = _("salePriceAmount1000"),
      xr = _("isVcardOverMmsDocument", { default: !1 }),
      $r = _("interactiveAnnotations"),
      Pr = p(
        function (e) {
          var t = e[0];
          return t == null
            ? null
            : t.filter(function (e) {
                var t;
                return (
                  ((t = e.embeddedContent) == null
                    ? void 0
                    : t.embeddedMusic) != null
                );
              });
        },
        [$r],
      ),
      Nr = p(
        function (e) {
          var t = e[0];
          return t == null
            ? !1
            : t.some(function (e) {
                var t;
                return (
                  ((t = e.embeddedContent) == null
                    ? void 0
                    : t.embeddedMessage) != null
                );
              });
        },
        [$r],
      ),
      Mr = p(
        function (e) {
          var t = e[0];
          return t == null ? null : t[0];
        },
        [Pr],
      ),
      wr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n != null && n.length > 0;
        },
        [Ke, Pr],
      ),
      Ar = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n != null;
        },
        [ze, Mr],
      ),
      Fr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n;
        },
        [Ke, Nr],
      ),
      Or = p(
        function (e) {
          var t,
            n = e[0];
          if (n == null) return null;
          var r = (t = n.embeddedContent) == null ? void 0 : t.embeddedMusic;
          return r == null
            ? null
            : o("WAWebMusicParsingUtils").toMusicMetadata(r);
        },
        [Mr],
      ),
      Br = _("messageSecret"),
      Wr = _("broadcast", { default: !1 }),
      qr = _("vcardList", {
        getDefault: function () {
          return [];
        },
      }),
      Ur = _("vcardFormattedName"),
      Vr = _("labels", {
        getDefault: function () {
          return [];
        },
      }),
      Hr = _("agentId"),
      Gr = _("url"),
      zr = _("retailerId"),
      jr = _("businessOwnerJid"),
      Kr = _("productId"),
      Qr = _("productImageCount"),
      Xr = _("isMdHistoryMsg", { default: !1 }),
      Yr = _("campaignId"),
      Jr = _("filename"),
      Zr = _("smbClientCampaignId"),
      eo = _("isCaptionByUser", { default: !1 }),
      to = _("doNotPlayInline"),
      no = _("thumbnailDirectPath"),
      ro = _("thumbnailHeight"),
      oo = _("thumbnailWidth"),
      ao = _("orderTitle"),
      io = _("itemCount"),
      lo = _("totalAmount1000"),
      so = _("totalCurrencyCode"),
      uo = _("futureproofType"),
      co = _("futureproofSubtype"),
      mo = _("ephemeralOutOfSync"),
      po = _("isAvatar"),
      _o = _("bizPrivacyStatus"),
      fo = _("verifiedBizName"),
      go = _("mediaKey"),
      ho = _("message", { default: "" }),
      yo = _("size", { default: 0 }),
      Co = _("hostedBizEncStateMismatch"),
      bo = p(
        function (e) {
          var t = e[0];
          return t === "bot_unavailable_fanout";
        },
        [v],
      ),
      vo = p(
        function (e) {
          var t = e[0];
          return t === "view_once_unavailable_fanout";
        },
        [v],
      ),
      So = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.remote.isBot()
            ? t.fromMe
            : n != null &&
                n.some(function (e) {
                  return e.isBot();
                });
        },
        [R, Z],
      ),
      Ro = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !t.fromMe && n === o("WAWebBotTypes").BizBotType.BIZ_1P;
        },
        [R, ye],
      ),
      Lo = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !t.fromMe && n === o("WAWebBotTypes").BizBotType.BIZ_3P;
        },
        [R, ye],
      ),
      Eo = _("botPluginSearchProvider"),
      ko = _("botPluginSearchUrl"),
      Io = _("botResponseTargetId"),
      To = _("botPluginSearchQuery"),
      Do = _("botPluginType"),
      xo = _("botMessageDisclaimerText"),
      $o = _("botModeSelection"),
      Po = _("botModeOverride"),
      No = _("richResponse"),
      Mo = _("unifiedResponse"),
      wo = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t != null && n != null && r != null;
        },
        [Eo, ko, To],
      ),
      Ao = p(
        function (e) {
          var t = e[0];
          return (t == null ? void 0 : t.isBot()) === !0;
        },
        [Ye],
      ),
      Fo = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !!(t && o("WAWebUserPrefsMeUser").isMeAccount(n));
        },
        [Ao, Ce],
      ),
      Oo = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return n && !t.remote.isBot();
        },
        [R, Ao],
      ),
      Bo = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t || n || r;
        },
        [Ao, Ro, Lo],
      ),
      Wo = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.PROTOCOL && n === "bot_feedback"
          );
        },
        [b, v],
      ),
      qo = _("hsmTag"),
      Uo = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebBusinessHSMTypes").HSM_TAG_TYPE.AUTHENTICATION;
        },
        [qo],
      ),
      Vo = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebBusinessHSMTypes").HSM_TAG_TYPE.MARKETING;
        },
        [qo],
      ),
      Ho = _("botRespOrInvocationRevokeBotWid"),
      Go = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !!(t != null && t.isBot() && n);
        },
        [Ho, Zn],
      ),
      zo = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            n &&
            (t ===
              o("WAWebProtobufsAICommon.pb").BotPluginMetadata$PluginType
                .SEARCH ||
              t ===
                o("WAWebProtobufsAICommon.pb").BotPluginMetadata$PluginType
                  .REELS)
          );
        },
        [Do, Ao],
      ),
      jo = _("botPluginMaybeParent"),
      Ko = _("botReelPluginThumbnailCdnUrl"),
      Qo = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebMsgType").MSG_TYPE.BIZ_CONTENT_PLACEHOLDER;
        },
        [b],
      ),
      Xo = _("statusMentioned"),
      Yo = _("isWamoSub"),
      Jo = _("hasPaidPartnershipLabel"),
      Zo = _("isVideoCall"),
      ea = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (
            t === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
            (n === "miss_video" || n === "miss_group_video" || r === !0)
          );
        },
        [b, v, Zo],
      ),
      ta = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t === o("WAWebMsgType").MSG_TYPE.CALL_LOG ? n.id : null;
        },
        [b, R],
      ),
      na = _("callOutcome"),
      ra = _("callSilenceReason"),
      oa = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (
            t === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
            (n === "silence" || r != null)
          );
        },
        [b, v, ra],
      ),
      aa = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            a = e[3];
          return (
            t === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
            !o("WAWebUserPrefsMeUser").isMeAccount(a) &&
            (n === "miss_video" ||
              n === "miss_group_video" ||
              n === "miss" ||
              n === "miss_group" ||
              r == null ||
              !y.includes(r))
          );
        },
        [b, v, na, Ye],
      ),
      ia = _("callDuration"),
      la = _("callParticipants"),
      sa = _("isCallLink"),
      ua = _("callLinkToken"),
      ca = _("terminatedByDeviceSwitch"),
      da = _("selfOtherDeviceConnected"),
      ma = p(
        function (e) {
          var t = e[0],
            n = e[1],
            a = e[2];
          return (
            !t &&
            (!r("isStringNullOrEmpty")(a) ||
              (n != null &&
                r("countWhere")(n, function (e) {
                  return !o("WAWebUserPrefsMeUser").isMeAccount(e.participant);
                }) > 1))
          );
        },
        [Ge, la, ua],
      ),
      pa = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n;
        },
        [Ge, ma],
      ),
      _a = _("finalCallOutcome"),
      fa = _("groupHistoryBundleMessageKey"),
      ga = _("groupHistoryBundleMetadata"),
      ha = _("groupHistoryIndividualMessageInfo"),
      ya = p(
        function (e) {
          var t,
            n = e[0],
            r = e[1];
          return (t = n == null ? void 0 : n.bundleMessageKey) != null ? t : r;
        },
        [ha, fa],
      ),
      Ca = p(
        function (e) {
          var t = e[0];
          return t == null ? void 0 : t.isEditedAfterReceivedAsHistory;
        },
        [ha],
      ),
      ba = p(
        function (e) {
          var t = e[0];
          return t == null ? void 0 : t.bundleSender;
        },
        [ha],
      ),
      va = _("botGroupParticipant");
    function Sa(e) {
      var t =
        b(e) === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE &&
        k(e).equals(o("WAWebUserPrefsMeUser").getMaybeMePnUser());
      return (
        !t &&
        !Kn(e) &&
        b(e) !== o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
        !pn(e) &&
        !["change_number", "change_username", "masked_thread_created"].includes(
          v(e),
        ) &&
        !Qn(e)
      );
    }
    ((l.clearMsgGetterCacheFor = g),
      (l.getMsgUnsafe = h),
      (l.getType = b),
      (l.getSubtype = v),
      (l.getId = R),
      (l.getServerId = L),
      (l.getTo = E),
      (l.getFrom = k),
      (l.getBroadcastId = I),
      (l.getRemote = T),
      (l.getAuthor = x),
      (l.getAck = $),
      (l.getIsScheduledMsg = P),
      (l.getViewCount = N),
      (l.getForwardsCount = M),
      (l.getViewed = w),
      (l.getOriginalSelfAuthor = A),
      (l.getKicState = F),
      (l.getKicTimestampMs = O),
      (l.getList = B),
      (l.getLatestEditMsgKey = W),
      (l.getErrorCode = q),
      (l.getEphemeralDuration = U),
      (l.getAfterReadDuration = V),
      (l.getExpiredTimestamp = H),
      (l.getEphemeralSettingUser = G),
      (l.getT = z),
      (l.getClientReceivedTsMillis = j),
      (l.getBackgroundColor = K),
      (l.getHeaderType = Q),
      (l.getInteractiveHeader = X),
      (l.getInteractiveType = Y),
      (l.getFooter = J),
      (l.getMentionedJidList = Z),
      (l.getGroupMentions = ee),
      (l.getQuotedMsg = te),
      (l.getQuotedRemoteJid = ne),
      (l.getQuotedParticipant = re),
      (l.getQuotedType = oe),
      (l.getRcat = ae),
      (l.getIsViewOnce = ie),
      (l.getIsGif = le),
      (l.getGifAttribution = se),
      (l.getCtwaContext = ue),
      (l.getMimetype = ce),
      (l.getFilehash = de),
      (l.getDeprecatedMms3Url = me),
      (l.getWaveform = pe),
      (l.getDisappearingModeInitiator = _e),
      (l.getDisappearingModeTrigger = fe),
      (l.getDisappearingModeInitiatedByMe = ge),
      (l.getActiveBotMsgStreamingInProgress = he),
      (l.getBizBotType = ye),
      (l.getBotTargetSenderJid = Ce),
      (l.getIsSupportAIMessage = be),
      (l.getLastBotEditBodyLength = ve),
      (l.getBotEditType = Se),
      (l.getForwardedNewsletterMessageInfo = Re),
      (l.getForwardedAiBotMessageInfo = Le),
      (l.getNewsletterAdminInviteInfo = Ee),
      (l.getNewsletterFollowerInviteInfo = ke),
      (l.getIsGroupStatus = Te),
      (l.getIsNewsletterStatus = De),
      (l.getBizSource = xe),
      (l.isBizSourceFromMarketingMessage = $e),
      (l.getIsMarketingMessage = Pe),
      (l.getIsReply = Ne),
      (l.getIsOpus = Me),
      (l.getRcatString = we),
      (l.getHasMentionOfMe = Ae),
      (l.getLocal = Fe),
      (l.getNonJidMentions = Be),
      (l.getHasMentionAll = We),
      (l.getIsImportantMessage = qe),
      (l.getBotPluginReferenceIndex = Ue),
      (l.getIsUnreadType = Ve),
      (l.getIs1to1Msg = He),
      (l.getIsGroupMsg = Ge),
      (l.getIsNewsletterMsg = ze),
      (l.getHasOriginatedFromNewsletter = je),
      (l.getIsStatus = Ke),
      (l.getIsNotification = Qe),
      (l.getIsSentByMe = Xe),
      (l.getSender = Ye),
      (l.getOriginalSender = Je),
      (l.getIsReaction = Ze),
      (l.getIsPollVote = et),
      (l.getIsFutureproof = tt),
      (l.getIsStickerMsg = nt),
      (l.getIsCarouselCard = rt),
      (l.getHasThumbList = at),
      (l.getIsKept = it),
      (l.getIsUnkept = lt),
      (l.getIsPSA = st),
      (l.getIsIAS = ut),
      (l.getIsAiHub = ct),
      (l.getIsCAPISupport = dt),
      (l.getIsProductListMessage = mt),
      (l.getTitle = pt),
      (l.getBody = _t),
      (l.getCaption = ft),
      (l.getComment = gt),
      (l.getPollName = ht),
      (l.getPollOptions = yt),
      (l.getPollSelectableOptionsCount = Ct),
      (l.getPollInvalidated = bt),
      (l.getPollContentType = vt),
      (l.getPollType = St),
      (l.getPollCorrectOptionIndex = Rt),
      (l.getPollEndTime = Lt),
      (l.getPollHideVoterNames = Et),
      (l.getPollAllowAddOption = kt),
      (l.getPollVotesSnapshot = It),
      (l.getQuarantineExtractedText = Tt),
      (l.getEventName = Dt),
      (l.getEventDescription = xt),
      (l.getEventStartTime = $t),
      (l.getEventEndTime = Pt),
      (l.getEventJoinLink = Nt),
      (l.getEventLocation = Mt),
      (l.getIsEventCanceled = wt),
      (l.getEventInvalidated = At),
      (l.getEventIsScheduledCall = Ft),
      (l.getEventExtraGuestsAllowed = Ot),
      (l.getReplyCount = Bt),
      (l.getNativeFlowName = Wt),
      (l.getNativeFlowButtons = qt),
      (l.getGalaxyFlowDisabled = Ut),
      (l.getSignupCtaTapped = Vt),
      (l.getPaymentCurrency = Ht),
      (l.getPaymentAmount1000 = Gt),
      (l.getPaymentMessageReceiverJid = zt),
      (l.getPaymentStatus = jt),
      (l.getPaymentTxnStatus = Kt),
      (l.getPaymentNoteMsg = Qt),
      (l.getPaymentRequestMessageKey = Xt),
      (l.getPaymentExpiryTimestamp = Yt),
      (l.getPaymentInviteServiceType = Jt),
      (l.getIsFromTemplate = Zt),
      (l.getIsLive = en),
      (l.getIsDynamicReplyButtonsMsg = tn),
      (l.getDynamicReplyButtons = nn),
      (l.getIsEphemeral = rn),
      (l.getIsEdited = on),
      (l.getIsEditProtocolMsg = an),
      (l.getStatusCanvasColor = ln),
      (l.getIsUserCreatedType = sn),
      (l.getIsSentByMeFromWeb = un),
      (l.getRevokeSender = cn),
      (l.getIsRevokedByMe = dn),
      (l.getIsInternational = mn),
      (l.getIsBizNotification = pn),
      (l.getIsMedia = _n),
      (l.getIsForwarded = fn),
      (l.getForwardingScore = gn),
      (l.getNumTimesForwarded = hn),
      (l.getIsFrequentlyForwarded = yn),
      (l.getIsQuestion = Cn),
      (l.getQuestionResponsesCount = bn),
      (l.getReadQuestionResponsesCount = vn),
      (l.getUnreadQuestionResponsesCount = Sn),
      (l.getQuestionReplyQuotedMessage = Rn),
      (l.getIsQuestionReply = Ln),
      (l.getNewsletterAdminProfile = En),
      (l.getIsBotInvoke = kn),
      (l.getShouldDisplayAsForwarded = In),
      (l.getInvis = Tn),
      (l.getIsNewMsg = Dn),
      (l.getIsSendFailure = xn),
      (l.getIsFailed = $n),
      (l.getVcard = Pn),
      (l.getDescription = Nn),
      (l.getMatchedText = Mn),
      (l.getThumbnail = wn),
      (l.getThumbnailHQ = An),
      (l.getMusicArtwork = Fn),
      (l.getRichPreviewType = On),
      (l.getPaymentLinkMetadata = Bn),
      (l.getFaviconMMSMetadata = Wn),
      (l.getPaymentLinkPreviewMetaTags = qn),
      (l.getHasPaymentLinkTrustSignals = Un),
      (l.getLinkPreview = Vn),
      (l.getSupportsMessageFooter = Hn),
      (l.getSupportsMessageFooterLinks = Gn),
      (l.INITIAL_PAGE_SIZE = zn),
      (l.getInitialPageSize = jn),
      (l.getIsInitialE2ENotification = Kn),
      (l.getIsDisappearingModeSystemMessage = Qn),
      (l.getKicKey = Xn),
      (l.getKicSender = Yn),
      (l.getEphemeralExpirationTimestamp = Jn),
      (l.getIsRevoke = Zn),
      (l.getRevokeDuration = er),
      (l.getWamEditType = tr),
      (l.getWamDisappearingModeTrigger = nr),
      (l.getWamDisappearingModeInitiatedByMe = rr),
      (l.getWamDisappearingModeInitiator = or),
      (l.getInviteCode = ar),
      (l.getInviteCodeExp = ir),
      (l.getInviteGrp = lr),
      (l.getInviteGrpName = sr),
      (l.getInviteGrpJpegThum = ur),
      (l.getInviteGrpType = cr),
      (l.getIsGroupsV4InviteExpired = dr),
      (l.getIsNewsletterAdminInviteExpired = mr),
      (l.getProductHeaderImageRejected = pr),
      (l.getProductListHeaderImage = _r),
      (l.getIsAckPlayable = fr),
      (l.getHasReaction = gr),
      (l.getRecipients = hr),
      (l.getTemplateParams = yr),
      (l.getClientUrl = Cr),
      (l.getLoc = br),
      (l.getLat = vr),
      (l.getLng = Sr),
      (l.getShareDuration = Rr),
      (l.getFinalLat = Lr),
      (l.getFinalLng = Er),
      (l.getStar = kr),
      (l.getCurrencyCode = Ir),
      (l.getPriceAmount1000 = Tr),
      (l.getSalePriceAmount1000 = Dr),
      (l.getIsVcardOverMmsDocument = xr),
      (l.getInteractiveAnnotations = $r),
      (l.getMusicAnnotations = Pr),
      (l.getHasEmbeddedMessagesAnnotation = Nr),
      (l.getFirstMusicAnnotation = Mr),
      (l.isStatusWithMusic = wr),
      (l.isNewsletterMsgWithMusic = Ar),
      (l.isStatusWithEmbeddedMessages = Fr),
      (l.getFirstMusicAnnotationEmbeddedContent = Or),
      (l.getMessageSecret = Br),
      (l.getBroadcast = Wr),
      (l.getVcardList = qr),
      (l.getVcardFormattedName = Ur),
      (l.getLabels = Vr),
      (l.getAgendId = Hr),
      (l.getUrl = Gr),
      (l.getRetailerId = zr),
      (l.getBusinessOwnerJid = jr),
      (l.getProductId = Kr),
      (l.getProductImageCount = Qr),
      (l.getIsMdHistoryMsg = Xr),
      (l.getCampaignId = Yr),
      (l.getFilename = Jr),
      (l.getSmbClientCampaignId = Zr),
      (l.getIsCaptionByUser = eo),
      (l.getDoNotPlayInline = to),
      (l.getThumbnailDirectPath = no),
      (l.getThumbnailHeight = ro),
      (l.getThumbnailWidth = oo),
      (l.getOrderTitle = ao),
      (l.getItemCount = io),
      (l.getTotalAmount1000 = lo),
      (l.getTotalCurrencyCode = so),
      (l.getFutureproofType = uo),
      (l.getFutureproofSubtype = co),
      (l.getEphemeralOutOfSync = mo),
      (l.getIsAvatar = po),
      (l.getBizPrivacyStatus = _o),
      (l.getVerifiedBizName = fo),
      (l.getMediaKey = go),
      (l.getMessage = ho),
      (l.getSize = yo),
      (l.getHostedBizEncStateMismatch = Co),
      (l.getIsBotFutureproofPlaceholder = bo),
      (l.getIsViewOncePlaceholder = vo),
      (l.getIsBotQuery = So),
      (l.getIsBizBot1pResponse = Ro),
      (l.getIsBizBot3pResponse = Lo),
      (l.getBotPluginSearchProvider = Eo),
      (l.getBotPluginSearchUrl = ko),
      (l.getBotResponseTargetId = Io),
      (l.getBotPluginSearchQuery = To),
      (l.getBotPluginType = Do),
      (l.getBotMessageDisclaimerText = xo),
      (l.getBotModeSelection = $o),
      (l.getBotModeOverride = Po),
      (l.getRichResponse = No),
      (l.getUnifiedResponse = Mo),
      (l.getIsBotSearchResponse = wo),
      (l.getIsMetaBotResponse = Ao),
      (l.isMetaBotResponseToMyInvoke = Fo),
      (l.getIsMetaBotInvokeResponse = Oo),
      (l.getIsBotResponse = Bo),
      (l.getIsBotFeedbackMessage = Wo),
      (l.getHsmTag = qo),
      (l.getIsAuthenticationMessage = Uo),
      (l.getIsMarketingTemplateTag = Vo),
      (l.getBotRespOrInvocationRevokeBotWid = Ho),
      (l.getIsRevokeForMsgFromOrDeliveredToBot = Go),
      (l.getIsBotPluginCarouselMsg = zo),
      (l.getBotPluginMaybeParent = jo),
      (l.getBotReelPluginThumbnailCdnUrl = Ko),
      (l.getIsBizContentPlaceholder = Qo),
      (l.getStatusMentioned = Xo),
      (l.getIsWamoSub = Yo),
      (l.getHasPaidPartnershipLabel = Jo),
      (l.getIsVideoCall = ea),
      (l.getCallId = ta),
      (l.getCallOutcome = na),
      (l.getCallSilenceReason = ra),
      (l.getIsCallSilenced = oa),
      (l.getIsMissedCall = aa),
      (l.getCallDuration = ia),
      (l.getCallParticipants = la),
      (l.getIsCallLink = sa),
      (l.getCallLinkToken = ua),
      (l.getTerminatedByDeviceSwitch = ca),
      (l.getSelfOtherDeviceConnected = da),
      (l.getIsAdHocGroupCall = ma),
      (l.getIsGroupCall = pa),
      (l.getFinalCallOutcome = _a),
      (l.getGroupHistoryBundleMessageKeyDeprecated = fa),
      (l.getGroupHistoryBundleMetadata = ga),
      (l.getGroupHistoryIndividualMessageInfo = ha),
      (l.getGroupHistoryBundleMessageKey = ya),
      (l.getIsEditedAfterReceivedAsHistory = Ca),
      (l.getGroupHistoryBundleSender = ba),
      (l.getBotGroupParticipant = va),
      (l.isRealMessage = Sa));
  },
  98,
);
