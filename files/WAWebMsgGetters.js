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
    "WAWebProtobufsStatusAttributions.pb",
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
      xe = _("statusAttributions"),
      $e = p(
        function (e) {
          var t = e[0];
          return (
            (t == null
              ? void 0
              : t.some(function (e) {
                  return (
                    e.type ===
                    o("WAWebProtobufsStatusAttributions.pb")
                      .StatusAttribution$Type.RESHARE
                  );
                })) === !0
          );
        },
        [xe],
      ),
      Pe = p(
        function (e) {
          var t = e[0];
          return (
            (t == null
              ? void 0
              : t.some(function (e) {
                  var t;
                  return (
                    e.type ===
                      o("WAWebProtobufsStatusAttributions.pb")
                        .StatusAttribution$Type.RESHARE &&
                    ((t = e.statusReshare) == null ? void 0 : t.source) ===
                      o("WAWebProtobufsStatusAttributions.pb")
                        .StatusAttribution$StatusReshare$Source.CHANNEL_RESHARE
                  );
                })) === !0
          );
        },
        [xe],
      ),
      Ne = _("bizSource");
    function Me(e) {
      return e === "smb_promo";
    }
    var we = p(
        function (e) {
          var t = e[0];
          return Me(t);
        },
        [Ne],
      ),
      Ae = p(
        function (e) {
          var t = e[0];
          return t != null;
        },
        [te],
      ),
      Fe = p(
        function (e) {
          var t = e[0];
          return o("WAWebMimeTypes").isOpus(t);
        },
        [ce],
      ),
      Oe = p(
        function (e) {
          var t = e[0];
          return t == null ? null : o("WABase64").encodeB64UrlSafe(t, !0);
        },
        [ae],
      ),
      Be = p(
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
      We = _("local", { default: !1 }),
      qe = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n ? o("WAWebUserPrefsMeUser").isMeAccount(C(n)) : !1;
        },
        [te, re],
      ),
      Ue = _("nonJidMentions"),
      Ve = p(
        function (e) {
          var t = e[0];
          return o("WAWebNonJidMentionUtils").hasMentionAll(t);
        },
        [Ue],
      ),
      He = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t || n || r;
        },
        [Be, qe, Ve],
      ),
      Ge = _("botPluginReferenceIndex"),
      ze = p(
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
            case "sharable_event_invite":
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
        [b, Ge, D],
      ),
      je = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.isRegularUser() && n.isRegularUser();
        },
        [k, E],
      ),
      Ke = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return r("WAWebWid").isGroup(t) || r("WAWebWid").isGroup(n);
        },
        [k, E],
      ),
      Qe = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return r("WAWebNewsletterIsNewsletterMsg")({ from: t, to: n });
        },
        [k, E],
      ),
      Xe = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n != null;
        },
        [Qe, Re],
      ),
      Ye = p(
        function (e) {
          var t = e[0],
            n = e[1],
            o = e[2];
          return r("WAWebWid").isStatus(t.remote) || n || o;
        },
        [R, Te, De],
      ),
      Je = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return o("WAWebCommonMsgUtils").isNotificationType(t, n);
        },
        [b, v],
      ),
      Ze = p(
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
        [R, k, Je, b, v],
      ),
      et = p(
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
        [R, Ze, Ke, Ye, Te, De, Qe, k, x],
      ),
      tt = p(
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
        [A, et, b],
      ),
      nt = p(
        function (e) {
          var t = e[0];
          return (
            t === o("WAWebMsgType").MSG_TYPE.REACTION ||
            t === o("WAWebMsgType").MSG_TYPE.REACTION_ENC
          );
        },
        [b],
      ),
      rt = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.POLL_UPDATE && n === "poll_vote"
          );
        },
        [b, v],
      ),
      ot = p(
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
      at = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebMsgType").MSG_TYPE.STICKER;
        },
        [b],
      ),
      it = _("isCarouselCard", { default: !1 }),
      lt = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebMsgType").MSG_TYPE.DOCUMENT;
        },
        [b],
      ),
      st = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return !t && !n && !r;
        },
        [ie, at, lt],
      ),
      ut = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebEphemeralConstants").KeepInChatState.KEPT;
        },
        [F],
      ),
      ct = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebEphemeralConstants").KeepInChatState.UNKEPT;
        },
        [F],
      ),
      dt = p(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isPSA(t.remote);
        },
        [R],
      ),
      mt = p(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isIAS(t.remote);
        },
        [R],
      ),
      pt = p(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isAiHub(t.remote);
        },
        [R],
      ),
      _t = p(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isCAPISupportAccount(t.remote);
        },
        [R],
      ),
      ft = p(
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
      gt = _("title"),
      ht = _("body", { default: "" }),
      yt = _("caption"),
      Ct = _("comment"),
      bt = _("pollName", { default: "" }),
      vt = _("pollOptions"),
      St = _("pollSelectableOptionsCount", { default: 0 }),
      Rt = _("pollInvalidated", { default: !1 }),
      Lt = _("pollContentType", {
        default: o("WAWebPollCreationUtils").PollContentType.TEXT,
      }),
      Et = _("pollType", {
        default: o("WAWebPollCreationUtils").PollType.POLL,
      }),
      kt = _("correctOptionIndex"),
      It = _("pollEndTime"),
      Tt = _("pollHideVoterNames"),
      Dt = _("pollAllowAddOption"),
      xt = _("pollVotesSnapshot"),
      $t = _("quarantineExtractedText"),
      Pt = _("eventName", { default: "" }),
      Nt = _("eventDescription"),
      Mt = _("eventStartTime", { default: 0 }),
      wt = _("eventEndTime"),
      At = _("eventJoinLink"),
      Ft = _("eventLocation"),
      Ot = _("isEventCanceled", { default: !1 }),
      Bt = _("eventInvalidated", { default: !1 }),
      Wt = _("eventIsScheduledCall", { default: !1 }),
      qt = _("eventExtraGuestsAllowed", { default: !1 }),
      Ut = _("replyCount", { default: 0 }),
      Vt = _("nativeFlowName"),
      Ht = _("nativeFlowButtons"),
      Gt = _("galaxyFlowDisabled", { default: !1 }),
      zt = _("signupCtaTapped", { default: !1 }),
      jt = _("paymentCurrency", { default: "" }),
      Kt = _("paymentAmount1000", { default: 0 }),
      Qt = _("paymentMessageReceiverJid"),
      Xt = _("paymentStatus"),
      Yt = _("paymentTxnStatus"),
      Jt = _("paymentNoteMsg"),
      Zt = _("paymentRequestMessageKey"),
      en = _("paymentExpiryTimestamp"),
      tn = _("paymentInviteServiceType"),
      nn = _("isFromTemplate", { default: !1 }),
      rn = _("isLive", { default: !1 }),
      on = _("isDynamicReplyButtonsMsg", { default: !1 }),
      an = _("dynamicReplyButtons"),
      ln = p(
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
      sn = p(
        function (e) {
          var t = e[0];
          return t != null;
        },
        [W],
      ),
      un = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.PROTOCOL && n === "message_edit"
          );
        },
        [b, v],
      ),
      cn = p(
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
        [Ye, K],
      ),
      dn = p(
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
            case "sharable_event_invite":
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
      mn = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t.fromMe && n && r;
        },
        [R, We, dn],
      ),
      pn = _("revokeSender"),
      _n = p(
        function (e) {
          var t = e[0];
          return t != null && o("WAWebUserPrefsMeUser").isMeAccount(t);
        },
        [pn],
      ),
      fn = p(
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
      gn = p(
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
      hn = p(
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
      yn = _("isForwarded", { default: !1 }),
      Cn = _("forwardingScore"),
      bn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return n == null ? (t ? 1 : 0) : n || 0;
        },
        [yn, Cn],
      ),
      vn = p(
        function (e) {
          var t = e[0];
          return (
            t >= r("WAWebConstantsDeprecated").FREQUENTLY_FORWARDED_SENTINEL
          );
        },
        [bn],
      ),
      Sn = _("isQuestion", { default: !1 }),
      Rn = _("isSpoiler", { default: !1 }),
      Ln = _("questionResponsesCount"),
      En = _("readQuestionResponsesCount"),
      kn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t - n;
        },
        [Ln, En],
      ),
      In = _("questionReplyQuotedMessage"),
      Tn = p(
        function (e) {
          var t = e[0];
          return t != null;
        },
        [In],
      ),
      Dn = _("newsletterAdminProfile"),
      xn = p(
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
      $n = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            o = e[3];
          return t || n || o || !r;
        },
        [yn, Xe, Ze, xn],
      ),
      Pn = _("invis", { default: !1 }),
      Nn = _("isNewMsg", { default: !1 }),
      Mn = _("isSendFailure", { default: !1 }),
      wn = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (t && n != null && n < o("WAWebAck").ACK.CLOCK) || r;
        },
        [Ze, $, Mn],
      ),
      An = p(
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
        [b, ht],
      ),
      Fn = _("description"),
      On = _("matchedText", { default: "" }),
      Bn = _("thumbnail"),
      Wn = _("thumbnailHQ"),
      qn = _("musicArtwork"),
      Un = _("richPreviewType", {
        default: o("WAWebProtobufsE2E.pb")
          .Message$ExtendedTextMessage$PreviewType.NONE,
      }),
      Vn = _("paymentLinkMetadata", { default: null }),
      Hn = _("faviconMMSMetadata", { default: null }),
      Gn = p(
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
        [Vn],
      ),
      zn = p(
        function (e) {
          var t = e[0];
          return (
            (t == null ? void 0 : t.isBusinessVerified) === !0 &&
            (t == null ? void 0 : t.providerName) != null
          );
        },
        [Gn],
      ),
      jn = p(
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
        [ht, gt, Fn, On],
      ),
      Kn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n;
        },
        [on, nn],
      ),
      Qn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            n ||
            t === o("WAWebMsgType").MSG_TYPE.LIST ||
            t === o("WAWebMsgType").MSG_TYPE.INTERACTIVE
          );
        },
        [b, on],
      ),
      Xn = 768,
      Yn = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = 308;
          return n != null && n.isBot() ? 1 / 0 : t ? r : Xn;
        },
        [vn, et],
      ),
      Jn = p(
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
      Zn = p(
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
      er = _("kicKey"),
      tr = p(
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
        [er, Ke],
      ),
      nr = p(
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
      rr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            (t === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
              (n === "sender_revoke" || n === "admin_revoke")) ||
            (t === o("WAWebMsgType").MSG_TYPE.REVOKED &&
              (n === "sender" || n === "admin"))
          );
        },
        [b, v],
      ),
      or = _("revokeDuration"),
      ar = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return n
            ? t === "admin_revoke" || t === "admin"
              ? o("WAWebWamEnumEditType").EDIT_TYPE.ADMIN_REVOKE
              : o("WAWebWamEnumEditType").EDIT_TYPE.SENDER_REVOKE
            : r
              ? o("WAWebWamEnumEditType").EDIT_TYPE.EDITED
              : o("WAWebWamEnumEditType").EDIT_TYPE.NOT_EDITED;
        },
        [v, rr, sn],
      ),
      ir = p(
        function (e) {
          var t = e[0];
          if (t != null)
            return o("WAWebEphemeralityWAMUtils").getWamDisappearingModeTrigger(
              t,
            );
        },
        [fe],
      ),
      lr = p(
        function (e) {
          var t = e[0];
          if (t != null)
            return o(
              "WAWebEphemeralityWAMUtils",
            ).getWamDisappearingModeInitiatedByMe(t);
        },
        [ge],
      ),
      sr = p(
        function (e) {
          var t = e[0];
          if (t != null)
            return o(
              "WAWebEphemeralityWAMUtils",
            ).getWamDisappearingModeInitiator(t);
        },
        [_e],
      ),
      ur = _("inviteCode", { default: "" }),
      cr = _("inviteCodeExp", { default: "" }),
      dr = _("inviteGrp", { default: "" }),
      mr = _("inviteGrpName"),
      pr = _("inviteGrpJpegThum"),
      _r = _("inviteGrpType"),
      fr = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          if (t !== o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE) return !1;
          if (!n) return !0;
          var a = new Date().getTime() / 1e3;
          return parseInt(a, 10) >= parseInt(r, 10);
        },
        [b, ur, cr],
      ),
      gr = p(
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
      hr = _("productHeaderImageRejected", { default: !1 }),
      yr = p(
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
        [hr, B],
      ),
      Cr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.PTT ||
            t === o("WAWebMsgType").MSG_TYPE.PTV ||
            (n && t === o("WAWebMsgType").MSG_TYPE.AUDIO)
          );
        },
        [b, Xe],
      ),
      br = _("hasReaction", { default: !1 }),
      vr = _("recipients", {
        getDefault: function () {
          return [];
        },
      }),
      Sr = _("templateParams", {
        getDefault: function () {
          return [];
        },
      }),
      Rr = _("clientUrl", { default: "" }),
      Lr = _("loc", { default: "" }),
      Er = _("lat"),
      kr = _("lng"),
      Ir = _("shareDuration"),
      Tr = _("finalLat"),
      Dr = _("finalLng"),
      xr = _("star", { default: !1 }),
      $r = _("currencyCode"),
      Pr = _("priceAmount1000"),
      Nr = _("salePriceAmount1000"),
      Mr = _("isVcardOverMmsDocument", { default: !1 }),
      wr = _("interactiveAnnotations"),
      Ar = p(
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
        [wr],
      ),
      Fr = p(
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
        [wr],
      ),
      Or = p(
        function (e) {
          var t = e[0];
          return t == null ? null : t[0];
        },
        [Ar],
      ),
      Br = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n != null && n.length > 0;
        },
        [Ye, Ar],
      ),
      Wr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n != null;
        },
        [Qe, Or],
      ),
      qr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n;
        },
        [Ye, Fr],
      ),
      Ur = p(
        function (e) {
          var t,
            n = e[0];
          if (n == null) return null;
          var r = (t = n.embeddedContent) == null ? void 0 : t.embeddedMusic;
          return r == null
            ? null
            : o("WAWebMusicParsingUtils").toMusicMetadata(r);
        },
        [Or],
      ),
      Vr = _("messageSecret"),
      Hr = _("broadcast", { default: !1 }),
      Gr = _("vcardList", {
        getDefault: function () {
          return [];
        },
      }),
      zr = _("vcardFormattedName"),
      jr = _("labels", {
        getDefault: function () {
          return [];
        },
      }),
      Kr = _("agentId"),
      Qr = _("url"),
      Xr = _("retailerId"),
      Yr = _("businessOwnerJid"),
      Jr = _("productId"),
      Zr = _("productImageCount"),
      eo = _("isMdHistoryMsg", { default: !1 }),
      to = _("campaignId"),
      no = _("filename"),
      ro = _("smbClientCampaignId"),
      oo = _("isCaptionByUser", { default: !1 }),
      ao = _("doNotPlayInline"),
      io = _("thumbnailDirectPath"),
      lo = _("thumbnailHeight"),
      so = _("thumbnailWidth"),
      uo = _("orderTitle"),
      co = _("itemCount"),
      mo = _("totalAmount1000"),
      po = _("totalCurrencyCode"),
      _o = _("futureproofType"),
      fo = _("futureproofSubtype"),
      go = _("ephemeralOutOfSync"),
      ho = _("isAvatar"),
      yo = _("bizPrivacyStatus"),
      Co = _("verifiedBizName"),
      bo = _("mediaKey"),
      vo = _("message", { default: "" }),
      So = _("size", { default: 0 }),
      Ro = _("hostedBizEncStateMismatch"),
      Lo = p(
        function (e) {
          var t = e[0];
          return t === "bot_unavailable_fanout";
        },
        [v],
      ),
      Eo = p(
        function (e) {
          var t = e[0];
          return t === "view_once_unavailable_fanout";
        },
        [v],
      ),
      ko = p(
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
      Io = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !t.fromMe && n === o("WAWebBotTypes").BizBotType.BIZ_1P;
        },
        [R, ye],
      ),
      To = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !t.fromMe && n === o("WAWebBotTypes").BizBotType.BIZ_3P;
        },
        [R, ye],
      ),
      Do = _("botPluginSearchProvider"),
      xo = _("botPluginSearchUrl"),
      $o = _("botResponseTargetId"),
      Po = _("botPluginSearchQuery"),
      No = _("botPluginType"),
      Mo = _("botMessageDisclaimerText"),
      wo = _("botModeSelection"),
      Ao = _("botModeOverride"),
      Fo = _("richResponse"),
      Oo = _("unifiedResponse"),
      Bo = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t != null && n != null && r != null;
        },
        [Do, xo, Po],
      ),
      Wo = p(
        function (e) {
          var t = e[0];
          return (t == null ? void 0 : t.isBot()) === !0;
        },
        [et],
      ),
      qo = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !!(t && o("WAWebUserPrefsMeUser").isMeAccount(n));
        },
        [Wo, Ce],
      ),
      Uo = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return n && !t.remote.isBot();
        },
        [R, Wo],
      ),
      Vo = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t || n || r;
        },
        [Wo, Io, To],
      ),
      Ho = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.PROTOCOL && n === "bot_feedback"
          );
        },
        [b, v],
      ),
      Go = _("hsmTag"),
      zo = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebBusinessHSMTypes").HSM_TAG_TYPE.AUTHENTICATION;
        },
        [Go],
      ),
      jo = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebBusinessHSMTypes").HSM_TAG_TYPE.MARKETING;
        },
        [Go],
      ),
      Ko = _("botRespOrInvocationRevokeBotWid"),
      Qo = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !!(t != null && t.isBot() && n);
        },
        [Ko, rr],
      ),
      Xo = p(
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
        [No, Wo],
      ),
      Yo = _("botPluginMaybeParent"),
      Jo = _("botReelPluginThumbnailCdnUrl"),
      Zo = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebMsgType").MSG_TYPE.BIZ_CONTENT_PLACEHOLDER;
        },
        [b],
      ),
      ea = _("statusMentioned"),
      ta = _("isWamoSub"),
      na = _("hasPaidPartnershipLabel"),
      ra = _("isVideoCall"),
      oa = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (
            t === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
            (n === "miss_video" || n === "miss_group_video" || r === !0)
          );
        },
        [b, v, ra],
      ),
      aa = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t === o("WAWebMsgType").MSG_TYPE.CALL_LOG ? n.id : null;
        },
        [b, R],
      ),
      ia = _("callOutcome"),
      la = _("callSilenceReason"),
      sa = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (
            t === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
            (n === "silence" || r != null)
          );
        },
        [b, v, la],
      ),
      ua = p(
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
        [b, v, ia, et],
      ),
      ca = _("callDuration"),
      da = _("bytesSent"),
      ma = _("bytesReceived"),
      pa = _("callParticipants"),
      _a = _("isCallLink"),
      fa = _("callLinkToken"),
      ga = _("terminatedByDeviceSwitch"),
      ha = _("selfOtherDeviceConnected"),
      ya = p(
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
        [Ke, pa, fa],
      ),
      Ca = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n;
        },
        [Ke, ya],
      ),
      ba = _("finalCallOutcome"),
      va = _("groupHistoryBundleMessageKey"),
      Sa = _("groupHistoryBundleMetadata"),
      Ra = _("groupHistoryIndividualMessageInfo"),
      La = p(
        function (e) {
          var t,
            n = e[0],
            r = e[1];
          return (t = n == null ? void 0 : n.bundleMessageKey) != null ? t : r;
        },
        [Ra, va],
      ),
      Ea = p(
        function (e) {
          var t = e[0];
          return t == null ? void 0 : t.isEditedAfterReceivedAsHistory;
        },
        [Ra],
      ),
      ka = p(
        function (e) {
          var t = e[0];
          return t == null ? void 0 : t.bundleSender;
        },
        [Ra],
      ),
      Ia = _("botGroupParticipant");
    function Ta(e) {
      var t =
        b(e) === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE &&
        k(e).equals(o("WAWebUserPrefsMeUser").getMaybeMePnUser());
      return (
        !t &&
        !Jn(e) &&
        b(e) !== o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
        !gn(e) &&
        !["change_number", "change_username", "masked_thread_created"].includes(
          v(e),
        ) &&
        !Zn(e)
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
      (l.getHasReshareAttribution = $e),
      (l.getIsNewsletterStatusReshare = Pe),
      (l.getBizSource = Ne),
      (l.isBizSourceFromMarketingMessage = Me),
      (l.getIsMarketingMessage = we),
      (l.getIsReply = Ae),
      (l.getIsOpus = Fe),
      (l.getRcatString = Oe),
      (l.getHasMentionOfMe = Be),
      (l.getLocal = We),
      (l.getNonJidMentions = Ue),
      (l.getHasMentionAll = Ve),
      (l.getIsImportantMessage = He),
      (l.getBotPluginReferenceIndex = Ge),
      (l.getIsUnreadType = ze),
      (l.getIs1to1Msg = je),
      (l.getIsGroupMsg = Ke),
      (l.getIsNewsletterMsg = Qe),
      (l.getHasOriginatedFromNewsletter = Xe),
      (l.getIsStatus = Ye),
      (l.getIsNotification = Je),
      (l.getIsSentByMe = Ze),
      (l.getSender = et),
      (l.getOriginalSender = tt),
      (l.getIsReaction = nt),
      (l.getIsPollVote = rt),
      (l.getIsFutureproof = ot),
      (l.getIsStickerMsg = at),
      (l.getIsCarouselCard = it),
      (l.getHasThumbList = st),
      (l.getIsKept = ut),
      (l.getIsUnkept = ct),
      (l.getIsPSA = dt),
      (l.getIsIAS = mt),
      (l.getIsAiHub = pt),
      (l.getIsCAPISupport = _t),
      (l.getIsProductListMessage = ft),
      (l.getTitle = gt),
      (l.getBody = ht),
      (l.getCaption = yt),
      (l.getComment = Ct),
      (l.getPollName = bt),
      (l.getPollOptions = vt),
      (l.getPollSelectableOptionsCount = St),
      (l.getPollInvalidated = Rt),
      (l.getPollContentType = Lt),
      (l.getPollType = Et),
      (l.getPollCorrectOptionIndex = kt),
      (l.getPollEndTime = It),
      (l.getPollHideVoterNames = Tt),
      (l.getPollAllowAddOption = Dt),
      (l.getPollVotesSnapshot = xt),
      (l.getQuarantineExtractedText = $t),
      (l.getEventName = Pt),
      (l.getEventDescription = Nt),
      (l.getEventStartTime = Mt),
      (l.getEventEndTime = wt),
      (l.getEventJoinLink = At),
      (l.getEventLocation = Ft),
      (l.getIsEventCanceled = Ot),
      (l.getEventInvalidated = Bt),
      (l.getEventIsScheduledCall = Wt),
      (l.getEventExtraGuestsAllowed = qt),
      (l.getReplyCount = Ut),
      (l.getNativeFlowName = Vt),
      (l.getNativeFlowButtons = Ht),
      (l.getGalaxyFlowDisabled = Gt),
      (l.getSignupCtaTapped = zt),
      (l.getPaymentCurrency = jt),
      (l.getPaymentAmount1000 = Kt),
      (l.getPaymentMessageReceiverJid = Qt),
      (l.getPaymentStatus = Xt),
      (l.getPaymentTxnStatus = Yt),
      (l.getPaymentNoteMsg = Jt),
      (l.getPaymentRequestMessageKey = Zt),
      (l.getPaymentExpiryTimestamp = en),
      (l.getPaymentInviteServiceType = tn),
      (l.getIsFromTemplate = nn),
      (l.getIsLive = rn),
      (l.getIsDynamicReplyButtonsMsg = on),
      (l.getDynamicReplyButtons = an),
      (l.getIsEphemeral = ln),
      (l.getIsEdited = sn),
      (l.getIsEditProtocolMsg = un),
      (l.getStatusCanvasColor = cn),
      (l.getIsUserCreatedType = dn),
      (l.getIsSentByMeFromWeb = mn),
      (l.getRevokeSender = pn),
      (l.getIsRevokedByMe = _n),
      (l.getIsInternational = fn),
      (l.getIsBizNotification = gn),
      (l.getIsMedia = hn),
      (l.getIsForwarded = yn),
      (l.getForwardingScore = Cn),
      (l.getNumTimesForwarded = bn),
      (l.getIsFrequentlyForwarded = vn),
      (l.getIsQuestion = Sn),
      (l.getIsSpoiler = Rn),
      (l.getQuestionResponsesCount = Ln),
      (l.getReadQuestionResponsesCount = En),
      (l.getUnreadQuestionResponsesCount = kn),
      (l.getQuestionReplyQuotedMessage = In),
      (l.getIsQuestionReply = Tn),
      (l.getNewsletterAdminProfile = Dn),
      (l.getIsBotInvoke = xn),
      (l.getShouldDisplayAsForwarded = $n),
      (l.getInvis = Pn),
      (l.getIsNewMsg = Nn),
      (l.getIsSendFailure = Mn),
      (l.getIsFailed = wn),
      (l.getVcard = An),
      (l.getDescription = Fn),
      (l.getMatchedText = On),
      (l.getThumbnail = Bn),
      (l.getThumbnailHQ = Wn),
      (l.getMusicArtwork = qn),
      (l.getRichPreviewType = Un),
      (l.getPaymentLinkMetadata = Vn),
      (l.getFaviconMMSMetadata = Hn),
      (l.getPaymentLinkPreviewMetaTags = Gn),
      (l.getHasPaymentLinkTrustSignals = zn),
      (l.getLinkPreview = jn),
      (l.getSupportsMessageFooter = Kn),
      (l.getSupportsMessageFooterLinks = Qn),
      (l.INITIAL_PAGE_SIZE = Xn),
      (l.getInitialPageSize = Yn),
      (l.getIsInitialE2ENotification = Jn),
      (l.getIsDisappearingModeSystemMessage = Zn),
      (l.getKicKey = er),
      (l.getKicSender = tr),
      (l.getEphemeralExpirationTimestamp = nr),
      (l.getIsRevoke = rr),
      (l.getRevokeDuration = or),
      (l.getWamEditType = ar),
      (l.getWamDisappearingModeTrigger = ir),
      (l.getWamDisappearingModeInitiatedByMe = lr),
      (l.getWamDisappearingModeInitiator = sr),
      (l.getInviteCode = ur),
      (l.getInviteCodeExp = cr),
      (l.getInviteGrp = dr),
      (l.getInviteGrpName = mr),
      (l.getInviteGrpJpegThum = pr),
      (l.getInviteGrpType = _r),
      (l.getIsGroupsV4InviteExpired = fr),
      (l.getIsNewsletterAdminInviteExpired = gr),
      (l.getProductHeaderImageRejected = hr),
      (l.getProductListHeaderImage = yr),
      (l.getIsAckPlayable = Cr),
      (l.getHasReaction = br),
      (l.getRecipients = vr),
      (l.getTemplateParams = Sr),
      (l.getClientUrl = Rr),
      (l.getLoc = Lr),
      (l.getLat = Er),
      (l.getLng = kr),
      (l.getShareDuration = Ir),
      (l.getFinalLat = Tr),
      (l.getFinalLng = Dr),
      (l.getStar = xr),
      (l.getCurrencyCode = $r),
      (l.getPriceAmount1000 = Pr),
      (l.getSalePriceAmount1000 = Nr),
      (l.getIsVcardOverMmsDocument = Mr),
      (l.getInteractiveAnnotations = wr),
      (l.getMusicAnnotations = Ar),
      (l.getHasEmbeddedMessagesAnnotation = Fr),
      (l.getFirstMusicAnnotation = Or),
      (l.isStatusWithMusic = Br),
      (l.isNewsletterMsgWithMusic = Wr),
      (l.isStatusWithEmbeddedMessages = qr),
      (l.getFirstMusicAnnotationEmbeddedContent = Ur),
      (l.getMessageSecret = Vr),
      (l.getBroadcast = Hr),
      (l.getVcardList = Gr),
      (l.getVcardFormattedName = zr),
      (l.getLabels = jr),
      (l.getAgendId = Kr),
      (l.getUrl = Qr),
      (l.getRetailerId = Xr),
      (l.getBusinessOwnerJid = Yr),
      (l.getProductId = Jr),
      (l.getProductImageCount = Zr),
      (l.getIsMdHistoryMsg = eo),
      (l.getCampaignId = to),
      (l.getFilename = no),
      (l.getSmbClientCampaignId = ro),
      (l.getIsCaptionByUser = oo),
      (l.getDoNotPlayInline = ao),
      (l.getThumbnailDirectPath = io),
      (l.getThumbnailHeight = lo),
      (l.getThumbnailWidth = so),
      (l.getOrderTitle = uo),
      (l.getItemCount = co),
      (l.getTotalAmount1000 = mo),
      (l.getTotalCurrencyCode = po),
      (l.getFutureproofType = _o),
      (l.getFutureproofSubtype = fo),
      (l.getEphemeralOutOfSync = go),
      (l.getIsAvatar = ho),
      (l.getBizPrivacyStatus = yo),
      (l.getVerifiedBizName = Co),
      (l.getMediaKey = bo),
      (l.getMessage = vo),
      (l.getSize = So),
      (l.getHostedBizEncStateMismatch = Ro),
      (l.getIsBotFutureproofPlaceholder = Lo),
      (l.getIsViewOncePlaceholder = Eo),
      (l.getIsBotQuery = ko),
      (l.getIsBizBot1pResponse = Io),
      (l.getIsBizBot3pResponse = To),
      (l.getBotPluginSearchProvider = Do),
      (l.getBotPluginSearchUrl = xo),
      (l.getBotResponseTargetId = $o),
      (l.getBotPluginSearchQuery = Po),
      (l.getBotPluginType = No),
      (l.getBotMessageDisclaimerText = Mo),
      (l.getBotModeSelection = wo),
      (l.getBotModeOverride = Ao),
      (l.getRichResponse = Fo),
      (l.getUnifiedResponse = Oo),
      (l.getIsBotSearchResponse = Bo),
      (l.getIsMetaBotResponse = Wo),
      (l.isMetaBotResponseToMyInvoke = qo),
      (l.getIsMetaBotInvokeResponse = Uo),
      (l.getIsBotResponse = Vo),
      (l.getIsBotFeedbackMessage = Ho),
      (l.getHsmTag = Go),
      (l.getIsAuthenticationMessage = zo),
      (l.getIsMarketingTemplateTag = jo),
      (l.getBotRespOrInvocationRevokeBotWid = Ko),
      (l.getIsRevokeForMsgFromOrDeliveredToBot = Qo),
      (l.getIsBotPluginCarouselMsg = Xo),
      (l.getBotPluginMaybeParent = Yo),
      (l.getBotReelPluginThumbnailCdnUrl = Jo),
      (l.getIsBizContentPlaceholder = Zo),
      (l.getStatusMentioned = ea),
      (l.getIsWamoSub = ta),
      (l.getHasPaidPartnershipLabel = na),
      (l.getIsVideoCall = oa),
      (l.getCallId = aa),
      (l.getCallOutcome = ia),
      (l.getCallSilenceReason = la),
      (l.getIsCallSilenced = sa),
      (l.getIsMissedCall = ua),
      (l.getCallDuration = ca),
      (l.getBytesSent = da),
      (l.getBytesReceived = ma),
      (l.getCallParticipants = pa),
      (l.getIsCallLink = _a),
      (l.getCallLinkToken = fa),
      (l.getTerminatedByDeviceSwitch = ga),
      (l.getSelfOtherDeviceConnected = ha),
      (l.getIsAdHocGroupCall = ya),
      (l.getIsGroupCall = Ca),
      (l.getFinalCallOutcome = ba),
      (l.getGroupHistoryBundleMessageKeyDeprecated = va),
      (l.getGroupHistoryBundleMetadata = Sa),
      (l.getGroupHistoryIndividualMessageInfo = Ra),
      (l.getGroupHistoryBundleMessageKey = La),
      (l.getIsEditedAfterReceivedAsHistory = Ea),
      (l.getGroupHistoryBundleSender = ka),
      (l.getBotGroupParticipant = Ia),
      (l.isRealMessage = Ta));
  },
  98,
);
