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
      J = _("bloksWidget"),
      Z = _("footer"),
      ee = _("mentionedJidList"),
      te = _("groupMentions", {
        getDefault: function () {
          return [];
        },
      }),
      ne = _("quotedMsg"),
      re = _("quotedRemoteJid"),
      oe = _("quotedParticipant"),
      ae = _("quotedType"),
      ie = _("rcat"),
      le = _("isViewOnce", { default: !1 }),
      se = _("isGif", { default: !1 }),
      ue = _("gifAttribution", {
        default: o("WAWebProtobufsE2E.pb").Message$VideoMessage$Attribution
          .NONE,
      }),
      ce = _("ctwaContext"),
      de = _("mimetype"),
      me = _("filehash"),
      pe = _("deprecatedMms3Url"),
      _e = _("waveform"),
      fe = _("disappearingModeInitiator"),
      ge = _("disappearingModeTrigger"),
      he = _("disappearingModeInitiatedByMe"),
      ye = _("activeBotMsgStreamingInProgress"),
      Ce = _("bizBotType"),
      be = _("botTargetSenderJid"),
      ve = _("isSupportAIMessage"),
      Se = _("lastBotEditBodyLength"),
      Re = _("botEditType"),
      Le = _("forwardedNewsletterMessageInfo"),
      Ee = _("forwardedAiBotMessageInfo"),
      ke = _("newsletterAdminInviteInfo"),
      Ie = _("newsletterFollowerInviteInfo"),
      Te = _("isGroupStatus"),
      De = p(
        function (e) {
          var t = e[0];
          return t === !0;
        },
        [Te],
      ),
      xe = _("isNewsletterStatus", { default: !1 }),
      $e = _("statusAttributions"),
      Pe = p(
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
        [$e],
      ),
      Ne = p(
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
        [$e],
      ),
      Me = _("bizSource");
    function we(e) {
      return e === "smb_promo";
    }
    var Ae = p(
        function (e) {
          var t = e[0];
          return we(t);
        },
        [Me],
      ),
      Fe = p(
        function (e) {
          var t = e[0];
          return t != null;
        },
        [ne],
      ),
      Oe = p(
        function (e) {
          var t = e[0];
          return o("WAWebMimeTypes").isOpus(t);
        },
        [de],
      ),
      Be = p(
        function (e) {
          var t = e[0];
          return t == null ? null : o("WABase64").encodeB64UrlSafe(t, !0);
        },
        [ie],
      ),
      We = p(
        function (e) {
          var t = e[0];
          return t == null
            ? !1
            : t.some(function (e) {
                return o("WAWebUserPrefsMeUser").isMeAccount(C(e));
              });
        },
        [ee],
      ),
      qe = _("local", { default: !1 }),
      Ue = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n ? o("WAWebUserPrefsMeUser").isMeAccount(C(n)) : !1;
        },
        [ne, oe],
      ),
      Ve = _("nonJidMentions"),
      He = p(
        function (e) {
          var t = e[0];
          return o("WAWebNonJidMentionUtils").hasMentionAll(t);
        },
        [Ve],
      ),
      Ge = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t || n || r;
        },
        [We, Ue, He],
      ),
      ze = _("botPluginReferenceIndex"),
      je = p(
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
        [b, ze, D, v],
      ),
      Ke = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.isRegularUser() && n.isRegularUser();
        },
        [k, E],
      ),
      Qe = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return r("WAWebWid").isGroup(t) || r("WAWebWid").isGroup(n);
        },
        [k, E],
      ),
      Xe = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return r("WAWebNewsletterIsNewsletterMsg")({ from: t, to: n });
        },
        [k, E],
      ),
      Ye = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n != null;
        },
        [Xe, Le],
      ),
      Je = p(
        function (e) {
          var t = e[0],
            n = e[1],
            o = e[2];
          return r("WAWebWid").isStatus(t.remote) || n || o;
        },
        [R, De, xe],
      ),
      Ze = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return o("WAWebCommonMsgUtils").isNotificationType(t, n);
        },
        [b, v],
      ),
      et = p(
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
        [R, k, Ze, b, v],
      ),
      tt = p(
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
        [R, et, Qe, Je, De, xe, Xe, k, x],
      ),
      nt = p(
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
        [A, tt, b],
      ),
      rt = p(
        function (e) {
          var t = e[0];
          return (
            t === o("WAWebMsgType").MSG_TYPE.REACTION ||
            t === o("WAWebMsgType").MSG_TYPE.REACTION_ENC
          );
        },
        [b],
      ),
      ot = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.POLL_UPDATE && n === "poll_vote"
          );
        },
        [b, v],
      ),
      at = p(
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
      it = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebMsgType").MSG_TYPE.STICKER;
        },
        [b],
      ),
      lt = _("isCarouselCard", { default: !1 }),
      st = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebMsgType").MSG_TYPE.DOCUMENT;
        },
        [b],
      ),
      ut = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return !t && !n && !r;
        },
        [le, it, st],
      ),
      ct = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebEphemeralConstants").KeepInChatState.KEPT;
        },
        [F],
      ),
      dt = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebEphemeralConstants").KeepInChatState.UNKEPT;
        },
        [F],
      ),
      mt = p(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isPSA(t.remote);
        },
        [R],
      ),
      pt = p(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isIAS(t.remote);
        },
        [R],
      ),
      _t = p(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isAiHub(t.remote);
        },
        [R],
      ),
      ft = p(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isCAPISupportAccount(t.remote);
        },
        [R],
      ),
      gt = p(
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
      ht = _("title"),
      yt = _("body", { default: "" }),
      Ct = _("caption"),
      bt = _("comment"),
      vt = _("pollName", { default: "" }),
      St = _("pollOptions"),
      Rt = _("pollSelectableOptionsCount", { default: 0 }),
      Lt = _("pollInvalidated", { default: !1 }),
      Et = _("pollContentType", {
        default: o("WAWebPollCreationUtils").PollContentType.TEXT,
      }),
      kt = _("pollType", {
        default: o("WAWebPollCreationUtils").PollType.POLL,
      }),
      It = _("correctOptionIndex"),
      Tt = _("pollEndTime"),
      Dt = _("pollHideVoterNames"),
      xt = _("pollAllowAddOption"),
      $t = _("pollVotesSnapshot"),
      Pt = _("quarantineExtractedText"),
      Nt = _("eventName", { default: "" }),
      Mt = _("eventDescription"),
      wt = _("eventStartTime", { default: 0 }),
      At = _("eventEndTime"),
      Ft = _("eventJoinLink"),
      Ot = _("eventLocation"),
      Bt = _("isEventCanceled", { default: !1 }),
      Wt = _("eventInvalidated", { default: !1 }),
      qt = _("eventIsScheduledCall", { default: !1 }),
      Ut = _("eventExtraGuestsAllowed", { default: !1 }),
      Vt = _("replyCount", { default: 0 }),
      Ht = _("nativeFlowName"),
      Gt = _("nativeFlowButtons"),
      zt = _("galaxyFlowDisabled", { default: !1 }),
      jt = _("signupCtaTapped", { default: !1 }),
      Kt = _("paymentCurrency", { default: "" }),
      Qt = _("paymentAmount1000", { default: 0 }),
      Xt = _("paymentMessageReceiverJid"),
      Yt = _("paymentStatus"),
      Jt = _("paymentTxnStatus"),
      Zt = _("paymentNoteMsg"),
      en = _("paymentRequestMessageKey"),
      tn = _("paymentExpiryTimestamp"),
      nn = _("paymentInviteServiceType"),
      rn = _("isFromTemplate", { default: !1 }),
      on = _("isLive", { default: !1 }),
      an = _("isDynamicReplyButtonsMsg", { default: !1 }),
      ln = _("dynamicReplyButtons"),
      sn = p(
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
      un = p(
        function (e) {
          var t = e[0];
          return t != null;
        },
        [W],
      ),
      cn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.PROTOCOL && n === "message_edit"
          );
        },
        [b, v],
      ),
      dn = p(
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
        [Je, K],
      ),
      mn = p(
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
      pn = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t.fromMe && n && r;
        },
        [R, qe, mn],
      ),
      _n = _("revokeSender"),
      fn = p(
        function (e) {
          var t = e[0];
          return t != null && o("WAWebUserPrefsMeUser").isMeAccount(t);
        },
        [_n],
      ),
      gn = p(
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
      hn = p(
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
      yn = p(
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
      Cn = _("isForwarded", { default: !1 }),
      bn = _("forwardingScore"),
      vn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return n == null ? (t ? 1 : 0) : n || 0;
        },
        [Cn, bn],
      ),
      Sn = p(
        function (e) {
          var t = e[0];
          return (
            t >= r("WAWebConstantsDeprecated").FREQUENTLY_FORWARDED_SENTINEL
          );
        },
        [vn],
      ),
      Rn = _("isQuestion", { default: !1 }),
      Ln = _("isSpoiler", { default: !1 }),
      En = _("questionResponsesCount"),
      kn = _("readQuestionResponsesCount"),
      In = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t - n;
        },
        [En, kn],
      ),
      Tn = _("questionReplyQuotedMessage"),
      Dn = p(
        function (e) {
          var t = e[0];
          return t != null;
        },
        [Tn],
      ),
      xn = _("newsletterAdminProfile"),
      $n = p(
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
        [R, ee],
      ),
      Pn = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            o = e[3];
          return t || n || o || !r;
        },
        [Cn, Ye, et, $n],
      ),
      Nn = _("invis", { default: !1 }),
      Mn = _("isNewMsg", { default: !1 }),
      wn = _("isSendFailure", { default: !1 }),
      An = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (t && n != null && n < o("WAWebAck").ACK.CLOCK) || r;
        },
        [et, $, wn],
      ),
      Fn = p(
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
        [b, yt],
      ),
      On = _("description"),
      Bn = _("matchedText", { default: "" }),
      Wn = _("thumbnail"),
      qn = _("thumbnailHQ"),
      Un = _("musicArtwork"),
      Vn = _("richPreviewType", {
        default: o("WAWebProtobufsE2E.pb")
          .Message$ExtendedTextMessage$PreviewType.NONE,
      }),
      Hn = _("paymentLinkMetadata", { default: null }),
      Gn = _("faviconMMSMetadata", { default: null }),
      zn = p(
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
        [Hn],
      ),
      jn = p(
        function (e) {
          var t = e[0];
          return (
            (t == null ? void 0 : t.isBusinessVerified) === !0 &&
            (t == null ? void 0 : t.providerName) != null
          );
        },
        [zn],
      ),
      Kn = p(
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
        [yt, ht, On, Bn],
      ),
      Qn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n;
        },
        [an, rn],
      ),
      Xn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            n ||
            t === o("WAWebMsgType").MSG_TYPE.LIST ||
            t === o("WAWebMsgType").MSG_TYPE.INTERACTIVE
          );
        },
        [b, an],
      ),
      Yn = 768,
      Jn = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = 308;
          return n != null && n.isBot() ? 1 / 0 : t ? r : Yn;
        },
        [Sn, tt],
      ),
      Zn = p(
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
      er = p(
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
      tr = _("kicKey"),
      nr = p(
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
        [tr, Qe],
      ),
      rr = p(
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
      or = p(
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
      ar = _("revokeDuration"),
      ir = p(
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
        [v, or, un],
      ),
      lr = p(
        function (e) {
          var t = e[0];
          if (t != null)
            return o("WAWebEphemeralityWAMUtils").getWamDisappearingModeTrigger(
              t,
            );
        },
        [ge],
      ),
      sr = p(
        function (e) {
          var t = e[0];
          if (t != null)
            return o(
              "WAWebEphemeralityWAMUtils",
            ).getWamDisappearingModeInitiatedByMe(t);
        },
        [he],
      ),
      ur = p(
        function (e) {
          var t = e[0];
          if (t != null)
            return o(
              "WAWebEphemeralityWAMUtils",
            ).getWamDisappearingModeInitiator(t);
        },
        [fe],
      ),
      cr = _("inviteCode", { default: "" }),
      dr = _("inviteCodeExp", { default: "" }),
      mr = _("inviteGrp", { default: "" }),
      pr = _("inviteGrpName"),
      _r = _("inviteGrpJpegThum"),
      fr = _("inviteGrpType"),
      gr = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          if (t !== o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE) return !1;
          if (!n) return !0;
          var a = Date.now() / 1e3;
          return parseInt(a, 10) >= parseInt(r, 10);
        },
        [b, cr, dr],
      ),
      hr = p(
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
        [b, ke],
      ),
      yr = _("productHeaderImageRejected", { default: !1 }),
      Cr = p(
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
        [yr, B],
      ),
      br = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.PTT ||
            t === o("WAWebMsgType").MSG_TYPE.PTV ||
            (n && t === o("WAWebMsgType").MSG_TYPE.AUDIO)
          );
        },
        [b, Ye],
      ),
      vr = _("hasReaction", { default: !1 }),
      Sr = _("recipients", {
        getDefault: function () {
          return [];
        },
      }),
      Rr = _("templateParams", {
        getDefault: function () {
          return [];
        },
      }),
      Lr = _("clientUrl", { default: "" }),
      Er = _("loc", { default: "" }),
      kr = _("lat"),
      Ir = _("lng"),
      Tr = _("shareDuration"),
      Dr = _("finalLat"),
      xr = _("finalLng"),
      $r = _("star", { default: !1 }),
      Pr = _("currencyCode"),
      Nr = _("priceAmount1000"),
      Mr = _("salePriceAmount1000"),
      wr = _("isVcardOverMmsDocument", { default: !1 }),
      Ar = _("interactiveAnnotations"),
      Fr = p(
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
        [Ar],
      ),
      Or = p(
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
        [Ar],
      ),
      Br = p(
        function (e) {
          var t = e[0];
          return t == null ? null : t[0];
        },
        [Fr],
      ),
      Wr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n != null && n.length > 0;
        },
        [Je, Fr],
      ),
      qr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n != null;
        },
        [Xe, Br],
      ),
      Ur = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n;
        },
        [Je, Or],
      ),
      Vr = p(
        function (e) {
          var t,
            n = e[0];
          if (n == null) return null;
          var r = (t = n.embeddedContent) == null ? void 0 : t.embeddedMusic;
          return r == null
            ? null
            : o("WAWebMusicParsingUtils").toMusicMetadata(r);
        },
        [Br],
      ),
      Hr = _("messageSecret"),
      Gr = _("broadcast", { default: !1 }),
      zr = _("vcardList", {
        getDefault: function () {
          return [];
        },
      }),
      jr = _("vcardFormattedName"),
      Kr = _("labels", {
        getDefault: function () {
          return [];
        },
      }),
      Qr = _("agentId"),
      Xr = _("url"),
      Yr = _("retailerId"),
      Jr = _("businessOwnerJid"),
      Zr = _("productId"),
      eo = _("productImageCount"),
      to = _("isMdHistoryMsg", { default: !1 }),
      no = _("campaignId"),
      ro = _("filename"),
      oo = _("smbClientCampaignId"),
      ao = _("isCaptionByUser", { default: !1 }),
      io = _("doNotPlayInline"),
      lo = _("thumbnailDirectPath"),
      so = _("thumbnailHeight"),
      uo = _("thumbnailWidth"),
      co = _("orderTitle"),
      mo = _("itemCount"),
      po = _("totalAmount1000"),
      _o = _("totalCurrencyCode"),
      fo = _("futureproofType"),
      go = _("futureproofSubtype"),
      ho = _("ephemeralOutOfSync"),
      yo = _("isAvatar"),
      Co = _("bizPrivacyStatus"),
      bo = _("verifiedBizName"),
      vo = _("mediaKey"),
      So = _("message", { default: "" }),
      Ro = _("size", { default: 0 }),
      Lo = _("hostedBizEncStateMismatch"),
      Eo = p(
        function (e) {
          var t = e[0];
          return t === "bot_unavailable_fanout";
        },
        [v],
      ),
      ko = p(
        function (e) {
          var t = e[0];
          return t === "view_once_unavailable_fanout";
        },
        [v],
      ),
      Io = p(
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
        [R, ee],
      ),
      To = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !t.fromMe && n === o("WAWebBotTypes").BizBotType.BIZ_1P;
        },
        [R, Ce],
      ),
      Do = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !t.fromMe && n === o("WAWebBotTypes").BizBotType.BIZ_3P;
        },
        [R, Ce],
      ),
      xo = _("botPluginSearchProvider"),
      $o = _("botPluginSearchUrl"),
      Po = _("botResponseTargetId"),
      No = _("botPluginSearchQuery"),
      Mo = _("botPluginType"),
      wo = _("botMessageDisclaimerText"),
      Ao = _("botModeSelection"),
      Fo = _("botModeOverride"),
      Oo = _("richResponse"),
      Bo = _("unifiedResponse"),
      Wo = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t != null && n != null && r != null;
        },
        [xo, $o, No],
      ),
      qo = p(
        function (e) {
          var t = e[0];
          return (t == null ? void 0 : t.isBot()) === !0;
        },
        [tt],
      ),
      Uo = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !!(t && o("WAWebUserPrefsMeUser").isMeAccount(n));
        },
        [qo, be],
      ),
      Vo = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return n && !t.remote.isBot();
        },
        [R, qo],
      ),
      Ho = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t || n || r;
        },
        [qo, To, Do],
      ),
      Go = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.PROTOCOL && n === "bot_feedback"
          );
        },
        [b, v],
      ),
      zo = _("hsmTag"),
      jo = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebBusinessHSMTypes").HSM_TAG_TYPE.AUTHENTICATION;
        },
        [zo],
      ),
      Ko = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebBusinessHSMTypes").HSM_TAG_TYPE.MARKETING;
        },
        [zo],
      ),
      Qo = _("botRespOrInvocationRevokeBotWid"),
      Xo = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !!(t != null && t.isBot() && n);
        },
        [Qo, or],
      ),
      Yo = p(
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
        [Mo, qo],
      ),
      Jo = _("botPluginMaybeParent"),
      Zo = _("botReelPluginThumbnailCdnUrl"),
      ea = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebMsgType").MSG_TYPE.BIZ_CONTENT_PLACEHOLDER;
        },
        [b],
      ),
      ta = _("statusMentioned"),
      na = _("isWamoSub"),
      ra = _("hasPaidPartnershipLabel"),
      oa = _("isVideoCall"),
      aa = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (
            t === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
            (n === "miss_video" || n === "miss_group_video" || r === !0)
          );
        },
        [b, v, oa],
      ),
      ia = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t === o("WAWebMsgType").MSG_TYPE.CALL_LOG ? n.id : null;
        },
        [b, R],
      ),
      la = _("callOutcome"),
      sa = _("callSilenceReason"),
      ua = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (
            t === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
            (n === "silence" || r != null)
          );
        },
        [b, v, sa],
      ),
      ca = p(
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
        [b, v, la, tt],
      ),
      da = _("callDuration"),
      ma = _("bytesSent"),
      pa = _("bytesReceived"),
      _a = _("callParticipants"),
      fa = _("isCallLink"),
      ga = _("callLinkToken"),
      ha = _("terminatedByDeviceSwitch"),
      ya = _("selfOtherDeviceConnected"),
      Ca = p(
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
        [Qe, _a, ga],
      ),
      ba = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n;
        },
        [Qe, Ca],
      ),
      va = _("finalCallOutcome"),
      Sa = _("groupHistoryBundleMessageKey"),
      Ra = _("groupHistoryBundleMetadata"),
      La = _("groupHistoryIndividualMessageInfo"),
      Ea = p(
        function (e) {
          var t,
            n = e[0],
            r = e[1];
          return (t = n == null ? void 0 : n.bundleMessageKey) != null ? t : r;
        },
        [La, Sa],
      ),
      ka = p(
        function (e) {
          var t = e[0];
          return t == null ? void 0 : t.isEditedAfterReceivedAsHistory;
        },
        [La],
      ),
      Ia = p(
        function (e) {
          var t = e[0];
          return t == null ? void 0 : t.bundleSender;
        },
        [La],
      ),
      Ta = _("botGroupParticipant");
    function Da(e) {
      var t =
        b(e) === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE &&
        o("WAWebUserPrefsMeUser").isMeAccount(k(e));
      return (
        !t &&
        !Zn(e) &&
        b(e) !== o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
        !hn(e) &&
        !["change_number", "change_username", "masked_thread_created"].includes(
          v(e),
        ) &&
        !er(e)
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
      (l.getBloksWidget = J),
      (l.getFooter = Z),
      (l.getMentionedJidList = ee),
      (l.getGroupMentions = te),
      (l.getQuotedMsg = ne),
      (l.getQuotedRemoteJid = re),
      (l.getQuotedParticipant = oe),
      (l.getQuotedType = ae),
      (l.getRcat = ie),
      (l.getIsViewOnce = le),
      (l.getIsGif = se),
      (l.getGifAttribution = ue),
      (l.getCtwaContext = ce),
      (l.getMimetype = de),
      (l.getFilehash = me),
      (l.getDeprecatedMms3Url = pe),
      (l.getWaveform = _e),
      (l.getDisappearingModeInitiator = fe),
      (l.getDisappearingModeTrigger = ge),
      (l.getDisappearingModeInitiatedByMe = he),
      (l.getActiveBotMsgStreamingInProgress = ye),
      (l.getBizBotType = Ce),
      (l.getBotTargetSenderJid = be),
      (l.getIsSupportAIMessage = ve),
      (l.getLastBotEditBodyLength = Se),
      (l.getBotEditType = Re),
      (l.getForwardedNewsletterMessageInfo = Le),
      (l.getForwardedAiBotMessageInfo = Ee),
      (l.getNewsletterAdminInviteInfo = ke),
      (l.getNewsletterFollowerInviteInfo = Ie),
      (l.getIsGroupStatus = De),
      (l.getIsNewsletterStatus = xe),
      (l.getHasReshareAttribution = Pe),
      (l.getIsNewsletterStatusReshare = Ne),
      (l.getBizSource = Me),
      (l.isBizSourceFromMarketingMessage = we),
      (l.getIsMarketingMessage = Ae),
      (l.getIsReply = Fe),
      (l.getIsOpus = Oe),
      (l.getRcatString = Be),
      (l.getHasMentionOfMe = We),
      (l.getLocal = qe),
      (l.getNonJidMentions = Ve),
      (l.getHasMentionAll = He),
      (l.getIsImportantMessage = Ge),
      (l.getBotPluginReferenceIndex = ze),
      (l.getIsUnreadType = je),
      (l.getIs1to1Msg = Ke),
      (l.getIsGroupMsg = Qe),
      (l.getIsNewsletterMsg = Xe),
      (l.getHasOriginatedFromNewsletter = Ye),
      (l.getIsStatus = Je),
      (l.getIsNotification = Ze),
      (l.getIsSentByMe = et),
      (l.getSender = tt),
      (l.getOriginalSender = nt),
      (l.getIsReaction = rt),
      (l.getIsPollVote = ot),
      (l.getIsFutureproof = at),
      (l.getIsStickerMsg = it),
      (l.getIsCarouselCard = lt),
      (l.getHasThumbList = ut),
      (l.getIsKept = ct),
      (l.getIsUnkept = dt),
      (l.getIsPSA = mt),
      (l.getIsIAS = pt),
      (l.getIsAiHub = _t),
      (l.getIsCAPISupport = ft),
      (l.getIsProductListMessage = gt),
      (l.getTitle = ht),
      (l.getBody = yt),
      (l.getCaption = Ct),
      (l.getComment = bt),
      (l.getPollName = vt),
      (l.getPollOptions = St),
      (l.getPollSelectableOptionsCount = Rt),
      (l.getPollInvalidated = Lt),
      (l.getPollContentType = Et),
      (l.getPollType = kt),
      (l.getPollCorrectOptionIndex = It),
      (l.getPollEndTime = Tt),
      (l.getPollHideVoterNames = Dt),
      (l.getPollAllowAddOption = xt),
      (l.getPollVotesSnapshot = $t),
      (l.getQuarantineExtractedText = Pt),
      (l.getEventName = Nt),
      (l.getEventDescription = Mt),
      (l.getEventStartTime = wt),
      (l.getEventEndTime = At),
      (l.getEventJoinLink = Ft),
      (l.getEventLocation = Ot),
      (l.getIsEventCanceled = Bt),
      (l.getEventInvalidated = Wt),
      (l.getEventIsScheduledCall = qt),
      (l.getEventExtraGuestsAllowed = Ut),
      (l.getReplyCount = Vt),
      (l.getNativeFlowName = Ht),
      (l.getNativeFlowButtons = Gt),
      (l.getGalaxyFlowDisabled = zt),
      (l.getSignupCtaTapped = jt),
      (l.getPaymentCurrency = Kt),
      (l.getPaymentAmount1000 = Qt),
      (l.getPaymentMessageReceiverJid = Xt),
      (l.getPaymentStatus = Yt),
      (l.getPaymentTxnStatus = Jt),
      (l.getPaymentNoteMsg = Zt),
      (l.getPaymentRequestMessageKey = en),
      (l.getPaymentExpiryTimestamp = tn),
      (l.getPaymentInviteServiceType = nn),
      (l.getIsFromTemplate = rn),
      (l.getIsLive = on),
      (l.getIsDynamicReplyButtonsMsg = an),
      (l.getDynamicReplyButtons = ln),
      (l.getIsEphemeral = sn),
      (l.getIsEdited = un),
      (l.getIsEditProtocolMsg = cn),
      (l.getStatusCanvasColor = dn),
      (l.getIsUserCreatedType = mn),
      (l.getIsSentByMeFromWeb = pn),
      (l.getRevokeSender = _n),
      (l.getIsRevokedByMe = fn),
      (l.getIsInternational = gn),
      (l.getIsBizNotification = hn),
      (l.getIsMedia = yn),
      (l.getIsForwarded = Cn),
      (l.getForwardingScore = bn),
      (l.getNumTimesForwarded = vn),
      (l.getIsFrequentlyForwarded = Sn),
      (l.getIsQuestion = Rn),
      (l.getIsSpoiler = Ln),
      (l.getQuestionResponsesCount = En),
      (l.getReadQuestionResponsesCount = kn),
      (l.getUnreadQuestionResponsesCount = In),
      (l.getQuestionReplyQuotedMessage = Tn),
      (l.getIsQuestionReply = Dn),
      (l.getNewsletterAdminProfile = xn),
      (l.getIsBotInvoke = $n),
      (l.getShouldDisplayAsForwarded = Pn),
      (l.getInvis = Nn),
      (l.getIsNewMsg = Mn),
      (l.getIsSendFailure = wn),
      (l.getIsFailed = An),
      (l.getVcard = Fn),
      (l.getDescription = On),
      (l.getMatchedText = Bn),
      (l.getThumbnail = Wn),
      (l.getThumbnailHQ = qn),
      (l.getMusicArtwork = Un),
      (l.getRichPreviewType = Vn),
      (l.getPaymentLinkMetadata = Hn),
      (l.getFaviconMMSMetadata = Gn),
      (l.getPaymentLinkPreviewMetaTags = zn),
      (l.getHasPaymentLinkTrustSignals = jn),
      (l.getLinkPreview = Kn),
      (l.getSupportsMessageFooter = Qn),
      (l.getSupportsMessageFooterLinks = Xn),
      (l.INITIAL_PAGE_SIZE = Yn),
      (l.getInitialPageSize = Jn),
      (l.getIsInitialE2ENotification = Zn),
      (l.getIsDisappearingModeSystemMessage = er),
      (l.getKicKey = tr),
      (l.getKicSender = nr),
      (l.getEphemeralExpirationTimestamp = rr),
      (l.getIsRevoke = or),
      (l.getRevokeDuration = ar),
      (l.getWamEditType = ir),
      (l.getWamDisappearingModeTrigger = lr),
      (l.getWamDisappearingModeInitiatedByMe = sr),
      (l.getWamDisappearingModeInitiator = ur),
      (l.getInviteCode = cr),
      (l.getInviteCodeExp = dr),
      (l.getInviteGrp = mr),
      (l.getInviteGrpName = pr),
      (l.getInviteGrpJpegThum = _r),
      (l.getInviteGrpType = fr),
      (l.getIsGroupsV4InviteExpired = gr),
      (l.getIsNewsletterAdminInviteExpired = hr),
      (l.getProductHeaderImageRejected = yr),
      (l.getProductListHeaderImage = Cr),
      (l.getIsAckPlayable = br),
      (l.getHasReaction = vr),
      (l.getRecipients = Sr),
      (l.getTemplateParams = Rr),
      (l.getClientUrl = Lr),
      (l.getLoc = Er),
      (l.getLat = kr),
      (l.getLng = Ir),
      (l.getShareDuration = Tr),
      (l.getFinalLat = Dr),
      (l.getFinalLng = xr),
      (l.getStar = $r),
      (l.getCurrencyCode = Pr),
      (l.getPriceAmount1000 = Nr),
      (l.getSalePriceAmount1000 = Mr),
      (l.getIsVcardOverMmsDocument = wr),
      (l.getInteractiveAnnotations = Ar),
      (l.getMusicAnnotations = Fr),
      (l.getHasEmbeddedMessagesAnnotation = Or),
      (l.getFirstMusicAnnotation = Br),
      (l.isStatusWithMusic = Wr),
      (l.isNewsletterMsgWithMusic = qr),
      (l.isStatusWithEmbeddedMessages = Ur),
      (l.getFirstMusicAnnotationEmbeddedContent = Vr),
      (l.getMessageSecret = Hr),
      (l.getBroadcast = Gr),
      (l.getVcardList = zr),
      (l.getVcardFormattedName = jr),
      (l.getLabels = Kr),
      (l.getAgentId = Qr),
      (l.getUrl = Xr),
      (l.getRetailerId = Yr),
      (l.getBusinessOwnerJid = Jr),
      (l.getProductId = Zr),
      (l.getProductImageCount = eo),
      (l.getIsMdHistoryMsg = to),
      (l.getCampaignId = no),
      (l.getFilename = ro),
      (l.getSmbClientCampaignId = oo),
      (l.getIsCaptionByUser = ao),
      (l.getDoNotPlayInline = io),
      (l.getThumbnailDirectPath = lo),
      (l.getThumbnailHeight = so),
      (l.getThumbnailWidth = uo),
      (l.getOrderTitle = co),
      (l.getItemCount = mo),
      (l.getTotalAmount1000 = po),
      (l.getTotalCurrencyCode = _o),
      (l.getFutureproofType = fo),
      (l.getFutureproofSubtype = go),
      (l.getEphemeralOutOfSync = ho),
      (l.getIsAvatar = yo),
      (l.getBizPrivacyStatus = Co),
      (l.getVerifiedBizName = bo),
      (l.getMediaKey = vo),
      (l.getMessage = So),
      (l.getSize = Ro),
      (l.getHostedBizEncStateMismatch = Lo),
      (l.getIsBotFutureproofPlaceholder = Eo),
      (l.getIsViewOncePlaceholder = ko),
      (l.getIsBotQuery = Io),
      (l.getIsBizBot1pResponse = To),
      (l.getIsBizBot3pResponse = Do),
      (l.getBotPluginSearchProvider = xo),
      (l.getBotPluginSearchUrl = $o),
      (l.getBotResponseTargetId = Po),
      (l.getBotPluginSearchQuery = No),
      (l.getBotPluginType = Mo),
      (l.getBotMessageDisclaimerText = wo),
      (l.getBotModeSelection = Ao),
      (l.getBotModeOverride = Fo),
      (l.getRichResponse = Oo),
      (l.getUnifiedResponse = Bo),
      (l.getIsBotSearchResponse = Wo),
      (l.getIsMetaBotResponse = qo),
      (l.isMetaBotResponseToMyInvoke = Uo),
      (l.getIsMetaBotInvokeResponse = Vo),
      (l.getIsBotResponse = Ho),
      (l.getIsBotFeedbackMessage = Go),
      (l.getHsmTag = zo),
      (l.getIsAuthenticationMessage = jo),
      (l.getIsMarketingTemplateTag = Ko),
      (l.getBotRespOrInvocationRevokeBotWid = Qo),
      (l.getIsRevokeForMsgFromOrDeliveredToBot = Xo),
      (l.getIsBotPluginCarouselMsg = Yo),
      (l.getBotPluginMaybeParent = Jo),
      (l.getBotReelPluginThumbnailCdnUrl = Zo),
      (l.getIsBizContentPlaceholder = ea),
      (l.getStatusMentioned = ta),
      (l.getIsWamoSub = na),
      (l.getHasPaidPartnershipLabel = ra),
      (l.getIsVideoCall = aa),
      (l.getCallId = ia),
      (l.getCallOutcome = la),
      (l.getCallSilenceReason = sa),
      (l.getIsCallSilenced = ua),
      (l.getIsMissedCall = ca),
      (l.getCallDuration = da),
      (l.getBytesSent = ma),
      (l.getBytesReceived = pa),
      (l.getCallParticipants = _a),
      (l.getIsCallLink = fa),
      (l.getCallLinkToken = ga),
      (l.getTerminatedByDeviceSwitch = ha),
      (l.getSelfOtherDeviceConnected = ya),
      (l.getIsAdHocGroupCall = Ca),
      (l.getIsGroupCall = ba),
      (l.getFinalCallOutcome = va),
      (l.getGroupHistoryBundleMessageKeyDeprecated = Sa),
      (l.getGroupHistoryBundleMetadata = Ra),
      (l.getGroupHistoryIndividualMessageInfo = La),
      (l.getGroupHistoryBundleMessageKey = Ea),
      (l.getIsEditedAfterReceivedAsHistory = ka),
      (l.getGroupHistoryBundleSender = Ia),
      (l.getBotGroupParticipant = Ta),
      (l.isRealMessage = Da));
  },
  98,
);
