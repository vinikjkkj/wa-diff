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
    "WAWebCoexV2BotWid",
    "WAWebCoexV2GatingUtils",
    "WAWebCommonMsgUtils",
    "WAWebEphemeralConstants",
    "WAWebEphemeralityWAMUtils",
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebInteractiveMessageHeaderMediaType",
    "WAWebMimeTypes",
    "WAWebMsgAIProvenance",
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
      $ = _("metaFrom"),
      P = _("senderWithDevice"),
      N = _("ack"),
      M = _("isScheduledMsg"),
      w = _("viewCount"),
      A = _("forwardsCount"),
      F = _("viewed"),
      O = _("originalSelfAuthor"),
      B = _("kicState"),
      W = _("kicTimestampMs"),
      q = _("list"),
      U = _("latestEditMsgKey"),
      V = _("errorCode"),
      H = _("ephemeralDuration"),
      G = _("afterReadDuration"),
      z = _("expiredTimestamp"),
      j = _("ephemeralSettingUser"),
      K = _("t", { default: 0 }),
      Q = _("clientReceivedTsMillis"),
      X = _("backgroundColor"),
      Y = _("headerType"),
      J = _("interactiveHeader"),
      Z = _("interactiveType"),
      ee = _("bloksWidget"),
      te = _("footer"),
      ne = _("mentionedJidList"),
      re = _("groupMentions", {
        getDefault: function () {
          return [];
        },
      }),
      oe = _("quotedMsg"),
      ae = _("quotedRemoteJid"),
      ie = _("quotedParticipant"),
      le = _("rcat"),
      se = _("isViewOnce", { default: !1 }),
      ue = _("isGif", { default: !1 }),
      ce = _("gifAttribution", {
        default: o("WAWebProtobufsE2E.pb").Message$VideoMessage$Attribution
          .NONE,
      }),
      de = _("ctwaContext"),
      me = _("mimetype"),
      pe = _("filehash"),
      _e = _("deprecatedMms3Url"),
      fe = _("waveform"),
      ge = _("disappearingModeInitiator"),
      he = _("disappearingModeTrigger"),
      ye = _("disappearingModeInitiatedByMe"),
      Ce = _("activeBotMsgStreamingInProgress"),
      be = _("bizBotType"),
      ve = _("botTargetSenderJid"),
      Se = _("isSupportAIMessage"),
      Re = _("lastBotEditBodyLength"),
      Le = _("botEditType"),
      Ee = _("forwardedNewsletterMessageInfo"),
      ke = _("forwardedAiBotMessageInfo"),
      Ie = _("newsletterAdminInviteInfo"),
      Te = _("newsletterFollowerInviteInfo"),
      De = _("isGroupStatus"),
      xe = p(
        function (e) {
          var t = e[0];
          return t === !0;
        },
        [De],
      ),
      $e = _("isNewsletterStatus", { default: !1 }),
      Pe = _("statusAttributions"),
      Ne = p(
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
        [Pe],
      ),
      Me = p(
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
        [Pe],
      ),
      we = _("bizSource");
    function Ae(e) {
      return e === "smb_promo";
    }
    var Fe = p(
        function (e) {
          var t = e[0];
          return Ae(t);
        },
        [we],
      ),
      Oe = p(
        function (e) {
          var t = e[0];
          return t != null;
        },
        [oe],
      ),
      Be = p(
        function (e) {
          var t = e[0];
          return o("WAWebMimeTypes").isOpus(t);
        },
        [me],
      ),
      We = p(
        function (e) {
          var t = e[0];
          return t == null ? null : o("WABase64").encodeB64UrlSafe(t, !0);
        },
        [le],
      ),
      qe = p(
        function (e) {
          var t = e[0];
          return t == null
            ? !1
            : t.some(function (e) {
                return o("WAWebUserPrefsMeUser").isMeAccount(C(e));
              });
        },
        [ne],
      ),
      Ue = _("local", { default: !1 }),
      Ve = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n ? o("WAWebUserPrefsMeUser").isMeAccount(C(n)) : !1;
        },
        [oe, ie],
      ),
      He = _("nonJidMentions"),
      Ge = p(
        function (e) {
          var t = e[0];
          return o("WAWebNonJidMentionUtils").hasMentionAll(t);
        },
        [He],
      ),
      ze = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t || n || r;
        },
        [qe, Ve, Ge],
      ),
      je = _("botPluginReferenceIndex"),
      Ke = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            a = e[3];
          if (n != null) return !1;
          if (
            t === "call_log" &&
            o("WAWebViewModeUtils").isOfflineResumeCallLogPlaceholderViewMode(r)
          )
            return !0;
          if (
            !o("WAWebViewModeUtils").isViewModeVisibleInSurface(
              o("WAWebViewMode.flow").ViewModeSurface.CHAT,
              r,
            )
          )
            return !1;
          if (
            t === "protocol" &&
            (a === "status_mention_message" ||
              a === "status_group_mention_message")
          )
            return !0;
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
        [b, je, D, v],
      ),
      Qe = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.isRegularUser() && n.isRegularUser();
        },
        [k, E],
      ),
      Xe = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return r("WAWebWid").isGroup(t) || r("WAWebWid").isGroup(n);
        },
        [k, E],
      ),
      Ye = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return r("WAWebNewsletterIsNewsletterMsg")({ from: t, to: n });
        },
        [k, E],
      ),
      Je = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n != null;
        },
        [Ye, Ee],
      ),
      Ze = p(
        function (e) {
          var t = e[0],
            n = e[1],
            o = e[2];
          return r("WAWebWid").isStatus(t.remote) || n || o;
        },
        [R, xe, $e],
      ),
      et = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return o("WAWebCommonMsgUtils").isNotificationType(t, n);
        },
        [b, v],
      ),
      tt = p(
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
        [R, k, et, b, v],
      ),
      nt = p(
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
                ? o("WAWebUserPrefsMeUser").getMeUserOrThrow()
                : u
              : r || a || (c != null && c.isBot())
                ? c
                : u;
        },
        [R, tt, Xe, Ze, xe, $e, Ye, k, x],
      ),
      rt = p(
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
        [O, nt, b],
      ),
      ot = p(
        function (e) {
          var t = e[0];
          return (
            t === o("WAWebMsgType").MSG_TYPE.REACTION ||
            t === o("WAWebMsgType").MSG_TYPE.REACTION_ENC
          );
        },
        [b],
      ),
      at = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.POLL_UPDATE && n === "poll_vote"
          );
        },
        [b, v],
      ),
      it = p(
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
      lt = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebMsgType").MSG_TYPE.STICKER;
        },
        [b],
      ),
      st = _("isCarouselCard", { default: !1 }),
      ut = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebMsgType").MSG_TYPE.DOCUMENT;
        },
        [b],
      ),
      ct = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return !t && !n && !r;
        },
        [se, lt, ut],
      ),
      dt = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebEphemeralConstants").KeepInChatState.KEPT;
        },
        [B],
      ),
      mt = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebEphemeralConstants").KeepInChatState.UNKEPT;
        },
        [B],
      ),
      pt = p(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isPSA(t.remote);
        },
        [R],
      ),
      _t = p(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isIAS(t.remote);
        },
        [R],
      ),
      ft = p(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isAiHub(t.remote);
        },
        [R],
      ),
      gt = p(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isCAPISupportAccount(t.remote);
        },
        [R],
      ),
      ht = p(
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
        [b, q],
      ),
      yt = _("title"),
      Ct = _("body", { default: "" }),
      bt = _("caption"),
      vt = _("comment"),
      St = _("pollName", { default: "" }),
      Rt = _("pollOptions"),
      Lt = _("pollSelectableOptionsCount", { default: 0 }),
      Et = _("pollInvalidated", { default: !1 }),
      kt = _("pollContentType", {
        default: o("WAWebPollCreationUtils").PollContentType.TEXT,
      }),
      It = _("pollType", {
        default: o("WAWebPollCreationUtils").PollType.POLL,
      }),
      Tt = _("correctOptionIndex"),
      Dt = _("pollEndTime"),
      xt = _("pollHideVoterNames"),
      $t = _("pollAllowAddOption"),
      Pt = _("pollVotesSnapshot"),
      Nt = _("quarantineExtractedText"),
      Mt = _("eventName", { default: "" }),
      wt = _("eventDescription"),
      At = _("eventStartTime", { default: 0 }),
      Ft = _("eventEndTime"),
      Ot = _("eventJoinLink"),
      Bt = _("eventLocation"),
      Wt = _("isEventCanceled", { default: !1 }),
      qt = _("eventInvalidated", { default: !1 }),
      Ut = _("eventIsScheduledCall", { default: !1 }),
      Vt = _("eventExtraGuestsAllowed", { default: !1 }),
      Ht = _("nativeFlowName"),
      Gt = _("nativeFlowButtons"),
      zt = _("interactivePayload"),
      jt = _("galaxyFlowDisabled", { default: !1 }),
      Kt = _("signupCtaTapped", { default: !1 }),
      Qt = _("paymentCurrency", { default: "" }),
      Xt = _("paymentAmount1000", { default: 0 }),
      Yt = _("paymentMessageReceiverJid"),
      Jt = _("paymentStatus"),
      Zt = _("paymentTxnStatus"),
      en = _("paymentNoteMsg"),
      tn = _("paymentRequestMessageKey"),
      nn = _("paymentExpiryTimestamp"),
      rn = _("paymentInviteServiceType"),
      on = _("isFromTemplate", { default: !1 }),
      an = _("isLive", { default: !1 }),
      ln = _("isDynamicReplyButtonsMsg", { default: !1 }),
      sn = _("dynamicReplyButtons"),
      un = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
            n === "ephemeral_setting"
            ? !1
            : r != null && r !== 0;
        },
        [b, v, H],
      ),
      cn = p(
        function (e) {
          var t = e[0];
          return t != null;
        },
        [U],
      ),
      dn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.PROTOCOL && n === "message_edit"
          );
        },
        [b, v],
      ),
      mn = p(
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
        [Ze, X],
      ),
      pn = p(
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
      _n = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t.fromMe && n && r;
        },
        [R, Ue, pn],
      ),
      fn = _("revokeSender"),
      gn = p(
        function (e) {
          var t = e[0];
          return t != null && o("WAWebUserPrefsMeUser").isMeAccount(t);
        },
        [fn],
      ),
      hn = p(
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
      yn = p(
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
      Cn = p(
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
        [b, J],
      ),
      bn = _("isForwarded", { default: !1 }),
      vn = _("forwardingScore"),
      Sn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return n == null ? (t ? 1 : 0) : n || 0;
        },
        [bn, vn],
      ),
      Rn = 127,
      Ln = p(
        function (e) {
          var t = e[0];
          return t >= Rn;
        },
        [Sn],
      ),
      En = _("isQuestion", { default: !1 }),
      kn = _("isSpoiler", { default: !1 }),
      In = _("questionResponsesCount"),
      Tn = _("readQuestionResponsesCount"),
      Dn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t - n;
        },
        [In, Tn],
      ),
      xn = _("questionReplyQuotedMessage"),
      $n = p(
        function (e) {
          var t = e[0];
          return t != null;
        },
        [xn],
      ),
      Pn = _("newsletterAdminProfile"),
      Nn = p(
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
        [R, ne],
      ),
      Mn = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            o = e[3];
          return t || n || o || !r;
        },
        [bn, Je, tt, Nn],
      ),
      wn = _("invis", { default: !1 }),
      An = _("isNewMsg", { default: !1 }),
      Fn = _("isSendFailure", { default: !1 }),
      On = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (t && n != null && n < o("WAWebAck").ACK.CLOCK) || r;
        },
        [tt, N, Fn],
      ),
      Bn = p(
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
        [b, Ct],
      ),
      Wn = _("description"),
      qn = _("matchedText", { default: "" }),
      Un = _("thumbnail"),
      Vn = _("thumbnailHQ"),
      Hn = _("musicArtwork"),
      Gn = _("richPreviewType", {
        default: o("WAWebProtobufsE2E.pb")
          .Message$ExtendedTextMessage$PreviewType.NONE,
      }),
      zn = _("paymentLinkMetadata", { default: null }),
      jn = _("faviconMMSMetadata", { default: null }),
      Kn = p(
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
        [zn],
      ),
      Qn = p(
        function (e) {
          var t = e[0];
          return (
            (t == null ? void 0 : t.isBusinessVerified) === !0 &&
            (t == null ? void 0 : t.providerName) != null
          );
        },
        [Kn],
      ),
      Xn = p(
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
        [Ct, yt, Wn, qn],
      ),
      Yn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n;
        },
        [ln, on],
      ),
      Jn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            n ||
            t === o("WAWebMsgType").MSG_TYPE.LIST ||
            t === o("WAWebMsgType").MSG_TYPE.INTERACTIVE
          );
        },
        [b, ln],
      ),
      Zn = 768,
      er = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = 308;
          return n != null && n.isBot() ? 1 / 0 : t ? r : Zn;
        },
        [Ln, nt],
      ),
      tr = p(
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
      nr = p(
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
      rr = _("kicKey"),
      or = p(
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
        [rr, Xe],
      ),
      ar = p(
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
        [H, K, v, z],
      ),
      ir = p(
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
      lr = _("revokeDuration"),
      sr = p(
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
        [v, ir, cn],
      ),
      ur = p(
        function (e) {
          var t = e[0];
          if (t != null)
            return o("WAWebEphemeralityWAMUtils").getWamDisappearingModeTrigger(
              t,
            );
        },
        [he],
      ),
      cr = p(
        function (e) {
          var t = e[0];
          if (t != null)
            return o(
              "WAWebEphemeralityWAMUtils",
            ).getWamDisappearingModeInitiatedByMe(t);
        },
        [ye],
      ),
      dr = p(
        function (e) {
          var t = e[0];
          if (t != null)
            return o(
              "WAWebEphemeralityWAMUtils",
            ).getWamDisappearingModeInitiator(t);
        },
        [ge],
      ),
      mr = _("inviteCode", { default: "" }),
      pr = _("inviteCodeExp", { default: "" }),
      _r = _("inviteGrp", { default: "" }),
      fr = _("inviteGrpName"),
      gr = _("inviteGrpJpegThum"),
      hr = _("inviteGrpType"),
      yr = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          if (t !== o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE) return !1;
          if (!n) return !0;
          var a = Date.now() / 1e3;
          return parseInt(a, 10) >= parseInt(r, 10);
        },
        [b, mr, pr],
      ),
      Cr = p(
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
        [b, Ie],
      ),
      br = _("productHeaderImageRejected", { default: !1 }),
      vr = p(
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
        [br, q],
      ),
      Sr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.PTT ||
            t === o("WAWebMsgType").MSG_TYPE.PTV ||
            (n && t === o("WAWebMsgType").MSG_TYPE.AUDIO)
          );
        },
        [b, Je],
      ),
      Rr = _("hasReaction", { default: !1 }),
      Lr = _("recipients", {
        getDefault: function () {
          return [];
        },
      }),
      Er = _("templateParams", {
        getDefault: function () {
          return [];
        },
      }),
      kr = _("clientUrl", { default: "" }),
      Ir = _("loc", { default: "" }),
      Tr = _("lat"),
      Dr = _("lng"),
      xr = _("shareDuration"),
      $r = _("finalLat"),
      Pr = _("finalLng"),
      Nr = _("star", { default: !1 }),
      Mr = _("currencyCode"),
      wr = _("priceAmount1000"),
      Ar = _("salePriceAmount1000"),
      Fr = _("isVcardOverMmsDocument", { default: !1 }),
      Or = _("interactiveAnnotations"),
      Br = p(
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
        [Or],
      ),
      Wr = p(
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
        [Or],
      ),
      qr = p(
        function (e) {
          var t = e[0];
          return t == null ? null : t[0];
        },
        [Br],
      ),
      Ur = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n != null && n.length > 0;
        },
        [Ze, Br],
      ),
      Vr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n != null;
        },
        [Ye, qr],
      ),
      Hr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n;
        },
        [Ze, Wr],
      ),
      Gr = p(
        function (e) {
          var t,
            n = e[0];
          if (n == null) return null;
          var r = (t = n.embeddedContent) == null ? void 0 : t.embeddedMusic;
          return r == null
            ? null
            : o("WAWebMusicParsingUtils").toMusicMetadata(r);
        },
        [qr],
      ),
      zr = _("messageSecret"),
      jr = _("broadcast", { default: !1 }),
      Kr = _("vcardList", {
        getDefault: function () {
          return [];
        },
      }),
      Qr = _("vcardFormattedName"),
      Xr = _("labels", {
        getDefault: function () {
          return [];
        },
      }),
      Yr = _("agentId"),
      Jr = _("url"),
      Zr = _("retailerId"),
      eo = _("businessOwnerJid"),
      to = _("productId"),
      no = _("productImageCount"),
      ro = _("isMdHistoryMsg", { default: !1 }),
      oo = _("campaignId"),
      ao = _("filename"),
      io = _("smbClientCampaignId"),
      lo = _("isCaptionByUser", { default: !1 }),
      so = _("doNotPlayInline"),
      uo = _("thumbnailDirectPath"),
      co = _("thumbnailHeight"),
      mo = _("thumbnailWidth"),
      po = _("orderTitle"),
      _o = _("itemCount"),
      fo = _("totalAmount1000"),
      go = _("totalCurrencyCode"),
      ho = _("futureproofType"),
      yo = _("futureproofSubtype"),
      Co = _("ephemeralOutOfSync"),
      bo = _("isAvatar"),
      vo = _("bizPrivacyStatus"),
      So = _("verifiedBizName"),
      Ro = _("mediaKey"),
      Lo = _("message", { default: "" }),
      Eo = _("size", { default: 0 }),
      ko = _("hostedBizEncStateMismatch"),
      Io = p(
        function (e) {
          var t = e[0];
          return t === "bot_unavailable_fanout";
        },
        [v],
      ),
      To = p(
        function (e) {
          var t = e[0];
          return t === "view_once_unavailable_fanout";
        },
        [v],
      ),
      Do = p(
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
        [R, ne],
      ),
      xo = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t != null &&
            t.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) &&
            n != null &&
            o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled()
          );
        },
        [P, $],
      ),
      $o = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return !r && !t.fromMe && n === o("WAWebBotTypes").BizBotType.BIZ_1P;
        },
        [R, be, xo],
      ),
      Po = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return !r && !t.fromMe && n === o("WAWebBotTypes").BizBotType.BIZ_3P;
        },
        [R, be, xo],
      ),
      No = _("botPluginSearchProvider"),
      Mo = _("botPluginSearchUrl"),
      wo = _("botResponseTargetId"),
      Ao = _("botPluginSearchQuery"),
      Fo = _("botPluginType"),
      Oo = _("botMessageDisclaimerText"),
      Bo = _("botModeSelection"),
      Wo = _("botModeOverride"),
      qo = _("richResponse"),
      Uo = _("unifiedResponse"),
      Vo = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t != null && n != null && r != null;
        },
        [No, Mo, Ao],
      ),
      Ho = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !n && (t == null ? void 0 : t.isBot()) === !0;
        },
        [nt, xo],
      ),
      Go = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !!(t && o("WAWebUserPrefsMeUser").isMeAccount(n));
        },
        [Ho, ve],
      ),
      zo = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return n && !t.remote.isBot();
        },
        [R, Ho],
      ),
      jo = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t || n || r;
        },
        [Ho, $o, Po],
      ),
      Ko = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.PROTOCOL && n === "bot_feedback"
          );
        },
        [b, v],
      ),
      Qo = _("hsmTag"),
      Xo = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebBusinessHSMTypes").HSM_TAG_TYPE.AUTHENTICATION;
        },
        [Qo],
      ),
      Yo = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebBusinessHSMTypes").HSM_TAG_TYPE.MARKETING;
        },
        [Qo],
      ),
      Jo = _("botRespOrInvocationRevokeBotWid"),
      Zo = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !!(t != null && t.isBot() && n);
        },
        [Jo, ir],
      ),
      ea = p(
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
        [Fo, Ho],
      ),
      ta = _("botPluginMaybeParent"),
      na = _("botReelPluginThumbnailCdnUrl"),
      ra = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebMsgType").MSG_TYPE.BIZ_CONTENT_PLACEHOLDER;
        },
        [b],
      ),
      oa = _("statusMentioned"),
      aa = _("isWamoSub"),
      ia = _("hasPaidPartnershipLabel"),
      la = _("aiProvenance"),
      sa = p(
        function (e) {
          var t = e[0];
          return o("WAWebMsgAIProvenance").hasAIProvenanceSignal(t);
        },
        [la],
      ),
      ua = _("isVideoCall"),
      ca = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (
            t === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
            (n === "miss_video" || n === "miss_group_video" || r === !0)
          );
        },
        [b, v, ua],
      ),
      da = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t === o("WAWebMsgType").MSG_TYPE.CALL_LOG ? n.id : null;
        },
        [b, R],
      ),
      ma = _("callOutcome"),
      pa = _("callSilenceReason"),
      _a = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (
            t === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
            (n === "silence" || r != null)
          );
        },
        [b, v, pa],
      ),
      fa = p(
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
        [b, v, ma, nt],
      ),
      ga = _("callDuration"),
      ha = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (
            t === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
            o("WAWebViewModeUtils").isViewModeVisibleInSurface(
              o("WAWebViewMode.flow").ViewModeSurface.CHAT_LIST,
              n,
            ) &&
            !o("WAWebViewModeUtils").isOfflineResumeCallLogPlaceholderViewMode(
              n,
            ) &&
            r != null &&
            r > 0
          );
        },
        [b, D, ga],
      ),
      ya = _("bytesSent"),
      Ca = _("bytesReceived"),
      ba = _("callParticipants"),
      va = _("isCallLink"),
      Sa = _("callLinkToken"),
      Ra = _("terminatedByDeviceSwitch"),
      La = _("selfOtherDeviceConnected"),
      Ea = p(
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
        [Xe, ba, Sa],
      ),
      ka = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n;
        },
        [Xe, Ea],
      ),
      Ia = _("finalCallOutcome"),
      Ta = _("groupHistoryBundleMessageKey"),
      Da = _("groupHistoryBundleMetadata"),
      xa = _("groupHistoryIndividualMessageInfo"),
      $a = p(
        function (e) {
          var t,
            n = e[0],
            r = e[1];
          return (t = n == null ? void 0 : n.bundleMessageKey) != null ? t : r;
        },
        [xa, Ta],
      ),
      Pa = p(
        function (e) {
          var t = e[0];
          return t == null ? void 0 : t.isEditedAfterReceivedAsHistory;
        },
        [xa],
      ),
      Na = p(
        function (e) {
          var t = e[0];
          return t == null ? void 0 : t.bundleSender;
        },
        [xa],
      ),
      Ma = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t != null && r("WAWebWid").equals(t.remote, n);
        },
        [$a, T],
      );
    function wa(e) {
      var t =
        b(e) === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE &&
        o("WAWebUserPrefsMeUser").isMeAccount(k(e));
      return (
        !t &&
        !tr(e) &&
        b(e) !== o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
        !yn(e) &&
        !["change_number", "change_username", "masked_thread_created"].includes(
          v(e),
        ) &&
        !nr(e)
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
      (l.getMetaFrom = $),
      (l.getSenderWithDevice = P),
      (l.getAck = N),
      (l.getIsScheduledMsg = M),
      (l.getViewCount = w),
      (l.getForwardsCount = A),
      (l.getViewed = F),
      (l.getOriginalSelfAuthor = O),
      (l.getKicState = B),
      (l.getKicTimestampMs = W),
      (l.getList = q),
      (l.getLatestEditMsgKey = U),
      (l.getErrorCode = V),
      (l.getEphemeralDuration = H),
      (l.getAfterReadDuration = G),
      (l.getExpiredTimestamp = z),
      (l.getEphemeralSettingUser = j),
      (l.getT = K),
      (l.getClientReceivedTsMillis = Q),
      (l.getBackgroundColor = X),
      (l.getHeaderType = Y),
      (l.getInteractiveHeader = J),
      (l.getInteractiveType = Z),
      (l.getBloksWidget = ee),
      (l.getFooter = te),
      (l.getMentionedJidList = ne),
      (l.getGroupMentions = re),
      (l.getQuotedMsg = oe),
      (l.getQuotedRemoteJid = ae),
      (l.getQuotedParticipant = ie),
      (l.getRcat = le),
      (l.getIsViewOnce = se),
      (l.getIsGif = ue),
      (l.getGifAttribution = ce),
      (l.getCtwaContext = de),
      (l.getFilehash = pe),
      (l.getDeprecatedMms3Url = _e),
      (l.getWaveform = fe),
      (l.getDisappearingModeInitiator = ge),
      (l.getDisappearingModeInitiatedByMe = ye),
      (l.getActiveBotMsgStreamingInProgress = Ce),
      (l.getBizBotType = be),
      (l.getBotTargetSenderJid = ve),
      (l.getIsSupportAIMessage = Se),
      (l.getLastBotEditBodyLength = Re),
      (l.getBotEditType = Le),
      (l.getForwardedNewsletterMessageInfo = Ee),
      (l.getForwardedAiBotMessageInfo = ke),
      (l.getNewsletterAdminInviteInfo = Ie),
      (l.getNewsletterFollowerInviteInfo = Te),
      (l.getIsGroupStatus = xe),
      (l.getIsNewsletterStatus = $e),
      (l.getHasReshareAttribution = Ne),
      (l.getIsNewsletterStatusReshare = Me),
      (l.getBizSource = we),
      (l.isBizSourceFromMarketingMessage = Ae),
      (l.getIsMarketingMessage = Fe),
      (l.getIsReply = Oe),
      (l.getIsOpus = Be),
      (l.getRcatString = We),
      (l.getHasMentionOfMe = qe),
      (l.getLocal = Ue),
      (l.getNonJidMentions = He),
      (l.getHasMentionAll = Ge),
      (l.getIsImportantMessage = ze),
      (l.getBotPluginReferenceIndex = je),
      (l.getIsUnreadType = Ke),
      (l.getIs1to1Msg = Qe),
      (l.getIsGroupMsg = Xe),
      (l.getIsNewsletterMsg = Ye),
      (l.getHasOriginatedFromNewsletter = Je),
      (l.getIsStatus = Ze),
      (l.getIsNotification = et),
      (l.getIsSentByMe = tt),
      (l.getSender = nt),
      (l.getOriginalSender = rt),
      (l.getIsReaction = ot),
      (l.getIsPollVote = at),
      (l.getIsFutureproof = it),
      (l.getIsStickerMsg = lt),
      (l.getIsCarouselCard = st),
      (l.getHasThumbList = ct),
      (l.getIsKept = dt),
      (l.getIsUnkept = mt),
      (l.getIsPSA = pt),
      (l.getIsIAS = _t),
      (l.getIsAiHub = ft),
      (l.getIsCAPISupport = gt),
      (l.getIsProductListMessage = ht),
      (l.getTitle = yt),
      (l.getBody = Ct),
      (l.getCaption = bt),
      (l.getComment = vt),
      (l.getPollName = St),
      (l.getPollOptions = Rt),
      (l.getPollSelectableOptionsCount = Lt),
      (l.getPollInvalidated = Et),
      (l.getPollContentType = kt),
      (l.getPollType = It),
      (l.getPollCorrectOptionIndex = Tt),
      (l.getPollEndTime = Dt),
      (l.getPollHideVoterNames = xt),
      (l.getPollAllowAddOption = $t),
      (l.getPollVotesSnapshot = Pt),
      (l.getQuarantineExtractedText = Nt),
      (l.getEventName = Mt),
      (l.getEventDescription = wt),
      (l.getEventStartTime = At),
      (l.getEventEndTime = Ft),
      (l.getEventJoinLink = Ot),
      (l.getEventLocation = Bt),
      (l.getIsEventCanceled = Wt),
      (l.getEventInvalidated = qt),
      (l.getEventIsScheduledCall = Ut),
      (l.getEventExtraGuestsAllowed = Vt),
      (l.getNativeFlowName = Ht),
      (l.getNativeFlowButtons = Gt),
      (l.getInteractivePayload = zt),
      (l.getGalaxyFlowDisabled = jt),
      (l.getSignupCtaTapped = Kt),
      (l.getPaymentCurrency = Qt),
      (l.getPaymentAmount1000 = Xt),
      (l.getPaymentMessageReceiverJid = Yt),
      (l.getPaymentStatus = Jt),
      (l.getPaymentTxnStatus = Zt),
      (l.getPaymentNoteMsg = en),
      (l.getPaymentRequestMessageKey = tn),
      (l.getPaymentExpiryTimestamp = nn),
      (l.getPaymentInviteServiceType = rn),
      (l.getIsFromTemplate = on),
      (l.getIsLive = an),
      (l.getIsDynamicReplyButtonsMsg = ln),
      (l.getDynamicReplyButtons = sn),
      (l.getIsEphemeral = un),
      (l.getIsEdited = cn),
      (l.getIsEditProtocolMsg = dn),
      (l.getStatusCanvasColor = mn),
      (l.getIsUserCreatedType = pn),
      (l.getIsSentByMeFromWeb = _n),
      (l.getRevokeSender = fn),
      (l.getIsRevokedByMe = gn),
      (l.getIsInternational = hn),
      (l.getIsBizNotification = yn),
      (l.getIsMedia = Cn),
      (l.getIsForwarded = bn),
      (l.getForwardingScore = vn),
      (l.getNumTimesForwarded = Sn),
      (l.FREQUENTLY_FORWARDED_SENTINEL = Rn),
      (l.getIsFrequentlyForwarded = Ln),
      (l.getIsQuestion = En),
      (l.getIsSpoiler = kn),
      (l.getQuestionResponsesCount = In),
      (l.getReadQuestionResponsesCount = Tn),
      (l.getUnreadQuestionResponsesCount = Dn),
      (l.getQuestionReplyQuotedMessage = xn),
      (l.getIsQuestionReply = $n),
      (l.getNewsletterAdminProfile = Pn),
      (l.getIsBotInvoke = Nn),
      (l.getShouldDisplayAsForwarded = Mn),
      (l.getInvis = wn),
      (l.getIsNewMsg = An),
      (l.getIsSendFailure = Fn),
      (l.getIsFailed = On),
      (l.getVcard = Bn),
      (l.getDescription = Wn),
      (l.getMatchedText = qn),
      (l.getThumbnail = Un),
      (l.getThumbnailHQ = Vn),
      (l.getMusicArtwork = Hn),
      (l.getRichPreviewType = Gn),
      (l.getPaymentLinkMetadata = zn),
      (l.getFaviconMMSMetadata = jn),
      (l.getPaymentLinkPreviewMetaTags = Kn),
      (l.getHasPaymentLinkTrustSignals = Qn),
      (l.getLinkPreview = Xn),
      (l.getSupportsMessageFooter = Yn),
      (l.getSupportsMessageFooterLinks = Jn),
      (l.INITIAL_PAGE_SIZE = Zn),
      (l.getInitialPageSize = er),
      (l.getIsInitialE2ENotification = tr),
      (l.getIsDisappearingModeSystemMessage = nr),
      (l.getKicKey = rr),
      (l.getKicSender = or),
      (l.getEphemeralExpirationTimestamp = ar),
      (l.getIsRevoke = ir),
      (l.getRevokeDuration = lr),
      (l.getWamEditType = sr),
      (l.getWamDisappearingModeTrigger = ur),
      (l.getWamDisappearingModeInitiatedByMe = cr),
      (l.getWamDisappearingModeInitiator = dr),
      (l.getInviteCode = mr),
      (l.getInviteCodeExp = pr),
      (l.getInviteGrp = _r),
      (l.getInviteGrpName = fr),
      (l.getInviteGrpJpegThum = gr),
      (l.getInviteGrpType = hr),
      (l.getIsGroupsV4InviteExpired = yr),
      (l.getIsNewsletterAdminInviteExpired = Cr),
      (l.getProductHeaderImageRejected = br),
      (l.getProductListHeaderImage = vr),
      (l.getIsAckPlayable = Sr),
      (l.getHasReaction = Rr),
      (l.getRecipients = Lr),
      (l.getTemplateParams = Er),
      (l.getClientUrl = kr),
      (l.getLoc = Ir),
      (l.getLat = Tr),
      (l.getLng = Dr),
      (l.getShareDuration = xr),
      (l.getFinalLat = $r),
      (l.getFinalLng = Pr),
      (l.getStar = Nr),
      (l.getCurrencyCode = Mr),
      (l.getPriceAmount1000 = wr),
      (l.getSalePriceAmount1000 = Ar),
      (l.getIsVcardOverMmsDocument = Fr),
      (l.getInteractiveAnnotations = Or),
      (l.getMusicAnnotations = Br),
      (l.getHasEmbeddedMessagesAnnotation = Wr),
      (l.getFirstMusicAnnotation = qr),
      (l.isStatusWithMusic = Ur),
      (l.isNewsletterMsgWithMusic = Vr),
      (l.isStatusWithEmbeddedMessages = Hr),
      (l.getFirstMusicAnnotationEmbeddedContent = Gr),
      (l.getMessageSecret = zr),
      (l.getBroadcast = jr),
      (l.getVcardList = Kr),
      (l.getVcardFormattedName = Qr),
      (l.getLabels = Xr),
      (l.getAgentId = Yr),
      (l.getUrl = Jr),
      (l.getRetailerId = Zr),
      (l.getBusinessOwnerJid = eo),
      (l.getProductId = to),
      (l.getProductImageCount = no),
      (l.getIsMdHistoryMsg = ro),
      (l.getCampaignId = oo),
      (l.getFilename = ao),
      (l.getSmbClientCampaignId = io),
      (l.getIsCaptionByUser = lo),
      (l.getDoNotPlayInline = so),
      (l.getThumbnailDirectPath = uo),
      (l.getThumbnailHeight = co),
      (l.getThumbnailWidth = mo),
      (l.getOrderTitle = po),
      (l.getItemCount = _o),
      (l.getTotalAmount1000 = fo),
      (l.getTotalCurrencyCode = go),
      (l.getFutureproofType = ho),
      (l.getFutureproofSubtype = yo),
      (l.getEphemeralOutOfSync = Co),
      (l.getIsAvatar = bo),
      (l.getBizPrivacyStatus = vo),
      (l.getVerifiedBizName = So),
      (l.getMediaKey = Ro),
      (l.getMessage = Lo),
      (l.getSize = Eo),
      (l.getHostedBizEncStateMismatch = ko),
      (l.getIsBotFutureproofPlaceholder = Io),
      (l.getIsViewOncePlaceholder = To),
      (l.getIsBotQuery = Do),
      (l.getIsCoexV2Relay = xo),
      (l.getIsBizBot1pResponse = $o),
      (l.getIsBizBot3pResponse = Po),
      (l.getBotPluginSearchProvider = No),
      (l.getBotPluginSearchUrl = Mo),
      (l.getBotResponseTargetId = wo),
      (l.getBotPluginSearchQuery = Ao),
      (l.getBotPluginType = Fo),
      (l.getBotMessageDisclaimerText = Oo),
      (l.getBotModeSelection = Bo),
      (l.getBotModeOverride = Wo),
      (l.getRichResponse = qo),
      (l.getUnifiedResponse = Uo),
      (l.getIsBotSearchResponse = Vo),
      (l.getIsMetaBotResponse = Ho),
      (l.isMetaBotResponseToMyInvoke = Go),
      (l.getIsMetaBotInvokeResponse = zo),
      (l.getIsBotResponse = jo),
      (l.getIsBotFeedbackMessage = Ko),
      (l.getHsmTag = Qo),
      (l.getIsAuthenticationMessage = Xo),
      (l.getIsMarketingTemplateTag = Yo),
      (l.getBotRespOrInvocationRevokeBotWid = Jo),
      (l.getIsRevokeForMsgFromOrDeliveredToBot = Zo),
      (l.getIsBotPluginCarouselMsg = ea),
      (l.getBotPluginMaybeParent = ta),
      (l.getBotReelPluginThumbnailCdnUrl = na),
      (l.getIsBizContentPlaceholder = ra),
      (l.getStatusMentioned = oa),
      (l.getIsWamoSub = aa),
      (l.getHasPaidPartnershipLabel = ia),
      (l.getAiProvenance = la),
      (l.getIsAiContent = sa),
      (l.getIsVideoCall = ca),
      (l.getCallId = da),
      (l.getCallOutcome = ma),
      (l.getCallSilenceReason = pa),
      (l.getIsCallSilenced = _a),
      (l.getIsMissedCall = fa),
      (l.getCallDuration = ga),
      (l.getIsVisibleCallLog = ha),
      (l.getBytesSent = ya),
      (l.getBytesReceived = Ca),
      (l.getCallParticipants = ba),
      (l.getIsCallLink = va),
      (l.getCallLinkToken = Sa),
      (l.getTerminatedByDeviceSwitch = Ra),
      (l.getSelfOtherDeviceConnected = La),
      (l.getIsAdHocGroupCall = Ea),
      (l.getIsGroupCall = ka),
      (l.getFinalCallOutcome = Ia),
      (l.getGroupHistoryBundleMessageKeyDeprecated = Ta),
      (l.getGroupHistoryBundleMetadata = Da),
      (l.getGroupHistoryIndividualMessageInfo = xa),
      (l.getGroupHistoryBundleMessageKey = $a),
      (l.getIsEditedAfterReceivedAsHistory = Pa),
      (l.getGroupHistoryBundleSender = Na),
      (l.getIsGroupHistoryMessageInOwnChat = Ma),
      (l.isRealMessage = wa));
  },
  98,
);
