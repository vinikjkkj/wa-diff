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
        [b, v, U],
      ),
      cn = p(
        function (e) {
          var t = e[0];
          return t != null;
        },
        [W],
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
        [Je, K],
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
        [R, qe, pn],
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
        [b, X],
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
      Rn = p(
        function (e) {
          var t = e[0];
          return (
            t >= r("WAWebConstantsDeprecated").FREQUENTLY_FORWARDED_SENTINEL
          );
        },
        [Sn],
      ),
      Ln = _("isQuestion", { default: !1 }),
      En = _("isSpoiler", { default: !1 }),
      kn = _("questionResponsesCount"),
      In = _("readQuestionResponsesCount"),
      Tn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t - n;
        },
        [kn, In],
      ),
      Dn = _("questionReplyQuotedMessage"),
      xn = p(
        function (e) {
          var t = e[0];
          return t != null;
        },
        [Dn],
      ),
      $n = _("newsletterAdminProfile"),
      Pn = p(
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
      Nn = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            o = e[3];
          return t || n || o || !r;
        },
        [bn, Ye, et, Pn],
      ),
      Mn = _("invis", { default: !1 }),
      wn = _("isNewMsg", { default: !1 }),
      An = _("isSendFailure", { default: !1 }),
      Fn = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (t && n != null && n < o("WAWebAck").ACK.CLOCK) || r;
        },
        [et, $, An],
      ),
      On = p(
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
      Bn = _("description"),
      Wn = _("matchedText", { default: "" }),
      qn = _("thumbnail"),
      Un = _("thumbnailHQ"),
      Vn = _("musicArtwork"),
      Hn = _("richPreviewType", {
        default: o("WAWebProtobufsE2E.pb")
          .Message$ExtendedTextMessage$PreviewType.NONE,
      }),
      Gn = _("paymentLinkMetadata", { default: null }),
      zn = _("faviconMMSMetadata", { default: null }),
      jn = p(
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
        [Gn],
      ),
      Kn = p(
        function (e) {
          var t = e[0];
          return (
            (t == null ? void 0 : t.isBusinessVerified) === !0 &&
            (t == null ? void 0 : t.providerName) != null
          );
        },
        [jn],
      ),
      Qn = p(
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
        [yt, ht, Bn, Wn],
      ),
      Xn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n;
        },
        [ln, on],
      ),
      Yn = p(
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
      Jn = 768,
      Zn = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = 308;
          return n != null && n.isBot() ? 1 / 0 : t ? r : Jn;
        },
        [Rn, tt],
      ),
      er = p(
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
      tr = p(
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
      nr = _("kicKey"),
      rr = p(
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
        [nr, Qe],
      ),
      or = p(
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
      ar = p(
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
      ir = _("revokeDuration"),
      lr = p(
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
        [v, ar, cn],
      ),
      sr = p(
        function (e) {
          var t = e[0];
          if (t != null)
            return o("WAWebEphemeralityWAMUtils").getWamDisappearingModeTrigger(
              t,
            );
        },
        [ge],
      ),
      ur = p(
        function (e) {
          var t = e[0];
          if (t != null)
            return o(
              "WAWebEphemeralityWAMUtils",
            ).getWamDisappearingModeInitiatedByMe(t);
        },
        [he],
      ),
      cr = p(
        function (e) {
          var t = e[0];
          if (t != null)
            return o(
              "WAWebEphemeralityWAMUtils",
            ).getWamDisappearingModeInitiator(t);
        },
        [fe],
      ),
      dr = _("inviteCode", { default: "" }),
      mr = _("inviteCodeExp", { default: "" }),
      pr = _("inviteGrp", { default: "" }),
      _r = _("inviteGrpName"),
      fr = _("inviteGrpJpegThum"),
      gr = _("inviteGrpType"),
      hr = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          if (t !== o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE) return !1;
          if (!n) return !0;
          var a = Date.now() / 1e3;
          return parseInt(a, 10) >= parseInt(r, 10);
        },
        [b, dr, mr],
      ),
      yr = p(
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
      Cr = _("productHeaderImageRejected", { default: !1 }),
      br = p(
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
        [Cr, B],
      ),
      vr = p(
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
      Sr = _("hasReaction", { default: !1 }),
      Rr = _("recipients", {
        getDefault: function () {
          return [];
        },
      }),
      Lr = _("templateParams", {
        getDefault: function () {
          return [];
        },
      }),
      Er = _("clientUrl", { default: "" }),
      kr = _("loc", { default: "" }),
      Ir = _("lat"),
      Tr = _("lng"),
      Dr = _("shareDuration"),
      xr = _("finalLat"),
      $r = _("finalLng"),
      Pr = _("star", { default: !1 }),
      Nr = _("currencyCode"),
      Mr = _("priceAmount1000"),
      wr = _("salePriceAmount1000"),
      Ar = _("isVcardOverMmsDocument", { default: !1 }),
      Fr = _("interactiveAnnotations"),
      Or = p(
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
        [Fr],
      ),
      Br = p(
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
        [Fr],
      ),
      Wr = p(
        function (e) {
          var t = e[0];
          return t == null ? null : t[0];
        },
        [Or],
      ),
      qr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n != null && n.length > 0;
        },
        [Je, Or],
      ),
      Ur = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n != null;
        },
        [Xe, Wr],
      ),
      Vr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n;
        },
        [Je, Br],
      ),
      Hr = p(
        function (e) {
          var t,
            n = e[0];
          if (n == null) return null;
          var r = (t = n.embeddedContent) == null ? void 0 : t.embeddedMusic;
          return r == null
            ? null
            : o("WAWebMusicParsingUtils").toMusicMetadata(r);
        },
        [Wr],
      ),
      Gr = _("messageSecret"),
      zr = _("broadcast", { default: !1 }),
      jr = _("vcardList", {
        getDefault: function () {
          return [];
        },
      }),
      Kr = _("vcardFormattedName"),
      Qr = _("labels", {
        getDefault: function () {
          return [];
        },
      }),
      Xr = _("agentId"),
      Yr = _("url"),
      Jr = _("retailerId"),
      Zr = _("businessOwnerJid"),
      eo = _("productId"),
      to = _("productImageCount"),
      no = _("isMdHistoryMsg", { default: !1 }),
      ro = _("campaignId"),
      oo = _("filename"),
      ao = _("smbClientCampaignId"),
      io = _("isCaptionByUser", { default: !1 }),
      lo = _("doNotPlayInline"),
      so = _("thumbnailDirectPath"),
      uo = _("thumbnailHeight"),
      co = _("thumbnailWidth"),
      mo = _("orderTitle"),
      po = _("itemCount"),
      _o = _("totalAmount1000"),
      fo = _("totalCurrencyCode"),
      go = _("futureproofType"),
      ho = _("futureproofSubtype"),
      yo = _("ephemeralOutOfSync"),
      Co = _("isAvatar"),
      bo = _("bizPrivacyStatus"),
      vo = _("verifiedBizName"),
      So = _("mediaKey"),
      Ro = _("message", { default: "" }),
      Lo = _("size", { default: 0 }),
      Eo = _("hostedBizEncStateMismatch"),
      ko = p(
        function (e) {
          var t = e[0];
          return t === "bot_unavailable_fanout";
        },
        [v],
      ),
      Io = p(
        function (e) {
          var t = e[0];
          return t === "view_once_unavailable_fanout";
        },
        [v],
      ),
      To = p(
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
      Do = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !t.fromMe && n === o("WAWebBotTypes").BizBotType.BIZ_1P;
        },
        [R, Ce],
      ),
      xo = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !t.fromMe && n === o("WAWebBotTypes").BizBotType.BIZ_3P;
        },
        [R, Ce],
      ),
      $o = _("botPluginSearchProvider"),
      Po = _("botPluginSearchUrl"),
      No = _("botResponseTargetId"),
      Mo = _("botPluginSearchQuery"),
      wo = _("botPluginType"),
      Ao = _("botMessageDisclaimerText"),
      Fo = _("botModeSelection"),
      Oo = _("botModeOverride"),
      Bo = _("richResponse"),
      Wo = _("unifiedResponse"),
      qo = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t != null && n != null && r != null;
        },
        [$o, Po, Mo],
      ),
      Uo = p(
        function (e) {
          var t = e[0];
          return (t == null ? void 0 : t.isBot()) === !0;
        },
        [tt],
      ),
      Vo = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !!(t && o("WAWebUserPrefsMeUser").isMeAccount(n));
        },
        [Uo, be],
      ),
      Ho = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return n && !t.remote.isBot();
        },
        [R, Uo],
      ),
      Go = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t || n || r;
        },
        [Uo, Do, xo],
      ),
      zo = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.PROTOCOL && n === "bot_feedback"
          );
        },
        [b, v],
      ),
      jo = _("hsmTag"),
      Ko = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebBusinessHSMTypes").HSM_TAG_TYPE.AUTHENTICATION;
        },
        [jo],
      ),
      Qo = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebBusinessHSMTypes").HSM_TAG_TYPE.MARKETING;
        },
        [jo],
      ),
      Xo = _("botRespOrInvocationRevokeBotWid"),
      Yo = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !!(t != null && t.isBot() && n);
        },
        [Xo, ar],
      ),
      Jo = p(
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
        [wo, Uo],
      ),
      Zo = _("botPluginMaybeParent"),
      ea = _("botReelPluginThumbnailCdnUrl"),
      ta = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebMsgType").MSG_TYPE.BIZ_CONTENT_PLACEHOLDER;
        },
        [b],
      ),
      na = _("statusMentioned"),
      ra = _("isWamoSub"),
      oa = _("hasPaidPartnershipLabel"),
      aa = _("isVideoCall"),
      ia = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (
            t === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
            (n === "miss_video" || n === "miss_group_video" || r === !0)
          );
        },
        [b, v, aa],
      ),
      la = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t === o("WAWebMsgType").MSG_TYPE.CALL_LOG ? n.id : null;
        },
        [b, R],
      ),
      sa = _("callOutcome"),
      ua = _("callSilenceReason"),
      ca = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (
            t === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
            (n === "silence" || r != null)
          );
        },
        [b, v, ua],
      ),
      da = p(
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
        [b, v, sa, tt],
      ),
      ma = _("callDuration"),
      pa = p(
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
        [b, D, ma],
      ),
      _a = _("bytesSent"),
      fa = _("bytesReceived"),
      ga = _("callParticipants"),
      ha = _("isCallLink"),
      ya = _("callLinkToken"),
      Ca = _("terminatedByDeviceSwitch"),
      ba = _("selfOtherDeviceConnected"),
      va = p(
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
        [Qe, ga, ya],
      ),
      Sa = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n;
        },
        [Qe, va],
      ),
      Ra = _("finalCallOutcome"),
      La = _("groupHistoryBundleMessageKey"),
      Ea = _("groupHistoryBundleMetadata"),
      ka = _("groupHistoryIndividualMessageInfo"),
      Ia = p(
        function (e) {
          var t,
            n = e[0],
            r = e[1];
          return (t = n == null ? void 0 : n.bundleMessageKey) != null ? t : r;
        },
        [ka, La],
      ),
      Ta = p(
        function (e) {
          var t = e[0];
          return t == null ? void 0 : t.isEditedAfterReceivedAsHistory;
        },
        [ka],
      ),
      Da = p(
        function (e) {
          var t = e[0];
          return t == null ? void 0 : t.bundleSender;
        },
        [ka],
      ),
      xa = _("botGroupParticipant");
    function $a(e) {
      var t =
        b(e) === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE &&
        o("WAWebUserPrefsMeUser").isMeAccount(k(e));
      return (
        !t &&
        !er(e) &&
        b(e) !== o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
        !yn(e) &&
        !["change_number", "change_username", "masked_thread_created"].includes(
          v(e),
        ) &&
        !tr(e)
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
      (l.getIsFrequentlyForwarded = Rn),
      (l.getIsQuestion = Ln),
      (l.getIsSpoiler = En),
      (l.getQuestionResponsesCount = kn),
      (l.getReadQuestionResponsesCount = In),
      (l.getUnreadQuestionResponsesCount = Tn),
      (l.getQuestionReplyQuotedMessage = Dn),
      (l.getIsQuestionReply = xn),
      (l.getNewsletterAdminProfile = $n),
      (l.getIsBotInvoke = Pn),
      (l.getShouldDisplayAsForwarded = Nn),
      (l.getInvis = Mn),
      (l.getIsNewMsg = wn),
      (l.getIsSendFailure = An),
      (l.getIsFailed = Fn),
      (l.getVcard = On),
      (l.getDescription = Bn),
      (l.getMatchedText = Wn),
      (l.getThumbnail = qn),
      (l.getThumbnailHQ = Un),
      (l.getMusicArtwork = Vn),
      (l.getRichPreviewType = Hn),
      (l.getPaymentLinkMetadata = Gn),
      (l.getFaviconMMSMetadata = zn),
      (l.getPaymentLinkPreviewMetaTags = jn),
      (l.getHasPaymentLinkTrustSignals = Kn),
      (l.getLinkPreview = Qn),
      (l.getSupportsMessageFooter = Xn),
      (l.getSupportsMessageFooterLinks = Yn),
      (l.INITIAL_PAGE_SIZE = Jn),
      (l.getInitialPageSize = Zn),
      (l.getIsInitialE2ENotification = er),
      (l.getIsDisappearingModeSystemMessage = tr),
      (l.getKicKey = nr),
      (l.getKicSender = rr),
      (l.getEphemeralExpirationTimestamp = or),
      (l.getIsRevoke = ar),
      (l.getRevokeDuration = ir),
      (l.getWamEditType = lr),
      (l.getWamDisappearingModeTrigger = sr),
      (l.getWamDisappearingModeInitiatedByMe = ur),
      (l.getWamDisappearingModeInitiator = cr),
      (l.getInviteCode = dr),
      (l.getInviteCodeExp = mr),
      (l.getInviteGrp = pr),
      (l.getInviteGrpName = _r),
      (l.getInviteGrpJpegThum = fr),
      (l.getInviteGrpType = gr),
      (l.getIsGroupsV4InviteExpired = hr),
      (l.getIsNewsletterAdminInviteExpired = yr),
      (l.getProductHeaderImageRejected = Cr),
      (l.getProductListHeaderImage = br),
      (l.getIsAckPlayable = vr),
      (l.getHasReaction = Sr),
      (l.getRecipients = Rr),
      (l.getTemplateParams = Lr),
      (l.getClientUrl = Er),
      (l.getLoc = kr),
      (l.getLat = Ir),
      (l.getLng = Tr),
      (l.getShareDuration = Dr),
      (l.getFinalLat = xr),
      (l.getFinalLng = $r),
      (l.getStar = Pr),
      (l.getCurrencyCode = Nr),
      (l.getPriceAmount1000 = Mr),
      (l.getSalePriceAmount1000 = wr),
      (l.getIsVcardOverMmsDocument = Ar),
      (l.getInteractiveAnnotations = Fr),
      (l.getMusicAnnotations = Or),
      (l.getHasEmbeddedMessagesAnnotation = Br),
      (l.getFirstMusicAnnotation = Wr),
      (l.isStatusWithMusic = qr),
      (l.isNewsletterMsgWithMusic = Ur),
      (l.isStatusWithEmbeddedMessages = Vr),
      (l.getFirstMusicAnnotationEmbeddedContent = Hr),
      (l.getMessageSecret = Gr),
      (l.getBroadcast = zr),
      (l.getVcardList = jr),
      (l.getVcardFormattedName = Kr),
      (l.getLabels = Qr),
      (l.getAgentId = Xr),
      (l.getUrl = Yr),
      (l.getRetailerId = Jr),
      (l.getBusinessOwnerJid = Zr),
      (l.getProductId = eo),
      (l.getProductImageCount = to),
      (l.getIsMdHistoryMsg = no),
      (l.getCampaignId = ro),
      (l.getFilename = oo),
      (l.getSmbClientCampaignId = ao),
      (l.getIsCaptionByUser = io),
      (l.getDoNotPlayInline = lo),
      (l.getThumbnailDirectPath = so),
      (l.getThumbnailHeight = uo),
      (l.getThumbnailWidth = co),
      (l.getOrderTitle = mo),
      (l.getItemCount = po),
      (l.getTotalAmount1000 = _o),
      (l.getTotalCurrencyCode = fo),
      (l.getFutureproofType = go),
      (l.getFutureproofSubtype = ho),
      (l.getEphemeralOutOfSync = yo),
      (l.getIsAvatar = Co),
      (l.getBizPrivacyStatus = bo),
      (l.getVerifiedBizName = vo),
      (l.getMediaKey = So),
      (l.getMessage = Ro),
      (l.getSize = Lo),
      (l.getHostedBizEncStateMismatch = Eo),
      (l.getIsBotFutureproofPlaceholder = ko),
      (l.getIsViewOncePlaceholder = Io),
      (l.getIsBotQuery = To),
      (l.getIsBizBot1pResponse = Do),
      (l.getIsBizBot3pResponse = xo),
      (l.getBotPluginSearchProvider = $o),
      (l.getBotPluginSearchUrl = Po),
      (l.getBotResponseTargetId = No),
      (l.getBotPluginSearchQuery = Mo),
      (l.getBotPluginType = wo),
      (l.getBotMessageDisclaimerText = Ao),
      (l.getBotModeSelection = Fo),
      (l.getBotModeOverride = Oo),
      (l.getRichResponse = Bo),
      (l.getUnifiedResponse = Wo),
      (l.getIsBotSearchResponse = qo),
      (l.getIsMetaBotResponse = Uo),
      (l.isMetaBotResponseToMyInvoke = Vo),
      (l.getIsMetaBotInvokeResponse = Ho),
      (l.getIsBotResponse = Go),
      (l.getIsBotFeedbackMessage = zo),
      (l.getHsmTag = jo),
      (l.getIsAuthenticationMessage = Ko),
      (l.getIsMarketingTemplateTag = Qo),
      (l.getBotRespOrInvocationRevokeBotWid = Xo),
      (l.getIsRevokeForMsgFromOrDeliveredToBot = Yo),
      (l.getIsBotPluginCarouselMsg = Jo),
      (l.getBotPluginMaybeParent = Zo),
      (l.getBotReelPluginThumbnailCdnUrl = ea),
      (l.getIsBizContentPlaceholder = ta),
      (l.getStatusMentioned = na),
      (l.getIsWamoSub = ra),
      (l.getHasPaidPartnershipLabel = oa),
      (l.getIsVideoCall = ia),
      (l.getCallId = la),
      (l.getCallOutcome = sa),
      (l.getCallSilenceReason = ua),
      (l.getIsCallSilenced = ca),
      (l.getIsMissedCall = da),
      (l.getCallDuration = ma),
      (l.getIsVisibleCallLog = pa),
      (l.getBytesSent = _a),
      (l.getBytesReceived = fa),
      (l.getCallParticipants = ga),
      (l.getIsCallLink = ha),
      (l.getCallLinkToken = ya),
      (l.getTerminatedByDeviceSwitch = Ca),
      (l.getSelfOtherDeviceConnected = ba),
      (l.getIsAdHocGroupCall = va),
      (l.getIsGroupCall = Sa),
      (l.getFinalCallOutcome = Ra),
      (l.getGroupHistoryBundleMessageKeyDeprecated = La),
      (l.getGroupHistoryBundleMetadata = Ea),
      (l.getGroupHistoryIndividualMessageInfo = ka),
      (l.getGroupHistoryBundleMessageKey = Ia),
      (l.getIsEditedAfterReceivedAsHistory = Ta),
      (l.getGroupHistoryBundleSender = Da),
      (l.getBotGroupParticipant = xa),
      (l.isRealMessage = $a));
  },
  98,
);
