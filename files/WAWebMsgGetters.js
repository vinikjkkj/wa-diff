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
      le = _("quotedType"),
      se = _("rcat"),
      ue = _("isViewOnce", { default: !1 }),
      ce = _("isGif", { default: !1 }),
      de = _("gifAttribution", {
        default: o("WAWebProtobufsE2E.pb").Message$VideoMessage$Attribution
          .NONE,
      }),
      me = _("ctwaContext"),
      pe = _("mimetype"),
      _e = _("filehash"),
      fe = _("deprecatedMms3Url"),
      ge = _("waveform"),
      he = _("disappearingModeInitiator"),
      ye = _("disappearingModeTrigger"),
      Ce = _("disappearingModeInitiatedByMe"),
      be = _("activeBotMsgStreamingInProgress"),
      ve = _("bizBotType"),
      Se = _("botTargetSenderJid"),
      Re = _("isSupportAIMessage"),
      Le = _("lastBotEditBodyLength"),
      Ee = _("botEditType"),
      ke = _("forwardedNewsletterMessageInfo"),
      Ie = _("forwardedAiBotMessageInfo"),
      Te = _("newsletterAdminInviteInfo"),
      De = _("newsletterFollowerInviteInfo"),
      xe = _("isGroupStatus"),
      $e = p(
        function (e) {
          var t = e[0];
          return t === !0;
        },
        [xe],
      ),
      Pe = _("isNewsletterStatus", { default: !1 }),
      Ne = _("statusAttributions"),
      Me = p(
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
        [Ne],
      ),
      we = p(
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
        [Ne],
      ),
      Ae = _("bizSource");
    function Fe(e) {
      return e === "smb_promo";
    }
    var Oe = p(
        function (e) {
          var t = e[0];
          return Fe(t);
        },
        [Ae],
      ),
      Be = p(
        function (e) {
          var t = e[0];
          return t != null;
        },
        [oe],
      ),
      We = p(
        function (e) {
          var t = e[0];
          return o("WAWebMimeTypes").isOpus(t);
        },
        [pe],
      ),
      qe = p(
        function (e) {
          var t = e[0];
          return t == null ? null : o("WABase64").encodeB64UrlSafe(t, !0);
        },
        [se],
      ),
      Ue = p(
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
      Ve = _("local", { default: !1 }),
      He = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n ? o("WAWebUserPrefsMeUser").isMeAccount(C(n)) : !1;
        },
        [oe, ie],
      ),
      Ge = _("nonJidMentions"),
      ze = p(
        function (e) {
          var t = e[0];
          return o("WAWebNonJidMentionUtils").hasMentionAll(t);
        },
        [Ge],
      ),
      je = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t || n || r;
        },
        [Ue, He, ze],
      ),
      Ke = _("botPluginReferenceIndex"),
      Qe = p(
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
        [b, Ke, D, v],
      ),
      Xe = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.isRegularUser() && n.isRegularUser();
        },
        [k, E],
      ),
      Ye = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return r("WAWebWid").isGroup(t) || r("WAWebWid").isGroup(n);
        },
        [k, E],
      ),
      Je = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return r("WAWebNewsletterIsNewsletterMsg")({ from: t, to: n });
        },
        [k, E],
      ),
      Ze = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n != null;
        },
        [Je, ke],
      ),
      et = p(
        function (e) {
          var t = e[0],
            n = e[1],
            o = e[2];
          return r("WAWebWid").isStatus(t.remote) || n || o;
        },
        [R, $e, Pe],
      ),
      tt = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return o("WAWebCommonMsgUtils").isNotificationType(t, n);
        },
        [b, v],
      ),
      nt = p(
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
        [R, k, tt, b, v],
      ),
      rt = p(
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
        [R, nt, Ye, et, $e, Pe, Je, k, x],
      ),
      ot = p(
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
        [O, rt, b],
      ),
      at = p(
        function (e) {
          var t = e[0];
          return (
            t === o("WAWebMsgType").MSG_TYPE.REACTION ||
            t === o("WAWebMsgType").MSG_TYPE.REACTION_ENC
          );
        },
        [b],
      ),
      it = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.POLL_UPDATE && n === "poll_vote"
          );
        },
        [b, v],
      ),
      lt = p(
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
      st = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebMsgType").MSG_TYPE.STICKER;
        },
        [b],
      ),
      ut = _("isCarouselCard", { default: !1 }),
      ct = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebMsgType").MSG_TYPE.DOCUMENT;
        },
        [b],
      ),
      dt = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return !t && !n && !r;
        },
        [ue, st, ct],
      ),
      mt = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebEphemeralConstants").KeepInChatState.KEPT;
        },
        [B],
      ),
      pt = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebEphemeralConstants").KeepInChatState.UNKEPT;
        },
        [B],
      ),
      _t = p(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isPSA(t.remote);
        },
        [R],
      ),
      ft = p(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isIAS(t.remote);
        },
        [R],
      ),
      gt = p(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isAiHub(t.remote);
        },
        [R],
      ),
      ht = p(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isCAPISupportAccount(t.remote);
        },
        [R],
      ),
      yt = p(
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
      Ct = _("title"),
      bt = _("body", { default: "" }),
      vt = _("caption"),
      St = _("comment"),
      Rt = _("pollName", { default: "" }),
      Lt = _("pollOptions"),
      Et = _("pollSelectableOptionsCount", { default: 0 }),
      kt = _("pollInvalidated", { default: !1 }),
      It = _("pollContentType", {
        default: o("WAWebPollCreationUtils").PollContentType.TEXT,
      }),
      Tt = _("pollType", {
        default: o("WAWebPollCreationUtils").PollType.POLL,
      }),
      Dt = _("correctOptionIndex"),
      xt = _("pollEndTime"),
      $t = _("pollHideVoterNames"),
      Pt = _("pollAllowAddOption"),
      Nt = _("pollVotesSnapshot"),
      Mt = _("quarantineExtractedText"),
      wt = _("eventName", { default: "" }),
      At = _("eventDescription"),
      Ft = _("eventStartTime", { default: 0 }),
      Ot = _("eventEndTime"),
      Bt = _("eventJoinLink"),
      Wt = _("eventLocation"),
      qt = _("isEventCanceled", { default: !1 }),
      Ut = _("eventInvalidated", { default: !1 }),
      Vt = _("eventIsScheduledCall", { default: !1 }),
      Ht = _("eventExtraGuestsAllowed", { default: !1 }),
      Gt = _("replyCount", { default: 0 }),
      zt = _("nativeFlowName"),
      jt = _("nativeFlowButtons"),
      Kt = _("interactivePayload"),
      Qt = _("galaxyFlowDisabled", { default: !1 }),
      Xt = _("signupCtaTapped", { default: !1 }),
      Yt = _("paymentCurrency", { default: "" }),
      Jt = _("paymentAmount1000", { default: 0 }),
      Zt = _("paymentMessageReceiverJid"),
      en = _("paymentStatus"),
      tn = _("paymentTxnStatus"),
      nn = _("paymentNoteMsg"),
      rn = _("paymentRequestMessageKey"),
      on = _("paymentExpiryTimestamp"),
      an = _("paymentInviteServiceType"),
      ln = _("isFromTemplate", { default: !1 }),
      sn = _("isLive", { default: !1 }),
      un = _("isDynamicReplyButtonsMsg", { default: !1 }),
      cn = _("dynamicReplyButtons"),
      dn = p(
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
      mn = p(
        function (e) {
          var t = e[0];
          return t != null;
        },
        [U],
      ),
      pn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.PROTOCOL && n === "message_edit"
          );
        },
        [b, v],
      ),
      _n = p(
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
        [et, X],
      ),
      fn = p(
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
      gn = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t.fromMe && n && r;
        },
        [R, Ve, fn],
      ),
      hn = _("revokeSender"),
      yn = p(
        function (e) {
          var t = e[0];
          return t != null && o("WAWebUserPrefsMeUser").isMeAccount(t);
        },
        [hn],
      ),
      Cn = p(
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
      bn = p(
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
      vn = p(
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
      Sn = _("isForwarded", { default: !1 }),
      Rn = _("forwardingScore"),
      Ln = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return n == null ? (t ? 1 : 0) : n || 0;
        },
        [Sn, Rn],
      ),
      En = 127,
      kn = p(
        function (e) {
          var t = e[0];
          return t >= En;
        },
        [Ln],
      ),
      In = _("isQuestion", { default: !1 }),
      Tn = _("isSpoiler", { default: !1 }),
      Dn = _("questionResponsesCount"),
      xn = _("readQuestionResponsesCount"),
      $n = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t - n;
        },
        [Dn, xn],
      ),
      Pn = _("questionReplyQuotedMessage"),
      Nn = p(
        function (e) {
          var t = e[0];
          return t != null;
        },
        [Pn],
      ),
      Mn = _("newsletterAdminProfile"),
      wn = p(
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
      An = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            o = e[3];
          return t || n || o || !r;
        },
        [Sn, Ze, nt, wn],
      ),
      Fn = _("invis", { default: !1 }),
      On = _("isNewMsg", { default: !1 }),
      Bn = _("isSendFailure", { default: !1 }),
      Wn = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (t && n != null && n < o("WAWebAck").ACK.CLOCK) || r;
        },
        [nt, N, Bn],
      ),
      qn = p(
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
        [b, bt],
      ),
      Un = _("description"),
      Vn = _("matchedText", { default: "" }),
      Hn = _("thumbnail"),
      Gn = _("thumbnailHQ"),
      zn = _("musicArtwork"),
      jn = _("richPreviewType", {
        default: o("WAWebProtobufsE2E.pb")
          .Message$ExtendedTextMessage$PreviewType.NONE,
      }),
      Kn = _("paymentLinkMetadata", { default: null }),
      Qn = _("faviconMMSMetadata", { default: null }),
      Xn = p(
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
        [Kn],
      ),
      Yn = p(
        function (e) {
          var t = e[0];
          return (
            (t == null ? void 0 : t.isBusinessVerified) === !0 &&
            (t == null ? void 0 : t.providerName) != null
          );
        },
        [Xn],
      ),
      Jn = p(
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
        [bt, Ct, Un, Vn],
      ),
      Zn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n;
        },
        [un, ln],
      ),
      er = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            n ||
            t === o("WAWebMsgType").MSG_TYPE.LIST ||
            t === o("WAWebMsgType").MSG_TYPE.INTERACTIVE
          );
        },
        [b, un],
      ),
      tr = 768,
      nr = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = 308;
          return n != null && n.isBot() ? 1 / 0 : t ? r : tr;
        },
        [kn, rt],
      ),
      rr = p(
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
      or = p(
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
      ar = _("kicKey"),
      ir = p(
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
        [ar, Ye],
      ),
      lr = p(
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
      sr = p(
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
      ur = _("revokeDuration"),
      cr = p(
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
        [v, sr, mn],
      ),
      dr = p(
        function (e) {
          var t = e[0];
          if (t != null)
            return o("WAWebEphemeralityWAMUtils").getWamDisappearingModeTrigger(
              t,
            );
        },
        [ye],
      ),
      mr = p(
        function (e) {
          var t = e[0];
          if (t != null)
            return o(
              "WAWebEphemeralityWAMUtils",
            ).getWamDisappearingModeInitiatedByMe(t);
        },
        [Ce],
      ),
      pr = p(
        function (e) {
          var t = e[0];
          if (t != null)
            return o(
              "WAWebEphemeralityWAMUtils",
            ).getWamDisappearingModeInitiator(t);
        },
        [he],
      ),
      _r = _("inviteCode", { default: "" }),
      fr = _("inviteCodeExp", { default: "" }),
      gr = _("inviteGrp", { default: "" }),
      hr = _("inviteGrpName"),
      yr = _("inviteGrpJpegThum"),
      Cr = _("inviteGrpType"),
      br = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          if (t !== o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE) return !1;
          if (!n) return !0;
          var a = Date.now() / 1e3;
          return parseInt(a, 10) >= parseInt(r, 10);
        },
        [b, _r, fr],
      ),
      vr = p(
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
        [b, Te],
      ),
      Sr = _("productHeaderImageRejected", { default: !1 }),
      Rr = p(
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
        [Sr, q],
      ),
      Lr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.PTT ||
            t === o("WAWebMsgType").MSG_TYPE.PTV ||
            (n && t === o("WAWebMsgType").MSG_TYPE.AUDIO)
          );
        },
        [b, Ze],
      ),
      Er = _("hasReaction", { default: !1 }),
      kr = _("recipients", {
        getDefault: function () {
          return [];
        },
      }),
      Ir = _("templateParams", {
        getDefault: function () {
          return [];
        },
      }),
      Tr = _("clientUrl", { default: "" }),
      Dr = _("loc", { default: "" }),
      xr = _("lat"),
      $r = _("lng"),
      Pr = _("shareDuration"),
      Nr = _("finalLat"),
      Mr = _("finalLng"),
      wr = _("star", { default: !1 }),
      Ar = _("currencyCode"),
      Fr = _("priceAmount1000"),
      Or = _("salePriceAmount1000"),
      Br = _("isVcardOverMmsDocument", { default: !1 }),
      Wr = _("interactiveAnnotations"),
      qr = p(
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
        [Wr],
      ),
      Ur = p(
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
        [Wr],
      ),
      Vr = p(
        function (e) {
          var t = e[0];
          return t == null ? null : t[0];
        },
        [qr],
      ),
      Hr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n != null && n.length > 0;
        },
        [et, qr],
      ),
      Gr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n != null;
        },
        [Je, Vr],
      ),
      zr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n;
        },
        [et, Ur],
      ),
      jr = p(
        function (e) {
          var t,
            n = e[0];
          if (n == null) return null;
          var r = (t = n.embeddedContent) == null ? void 0 : t.embeddedMusic;
          return r == null
            ? null
            : o("WAWebMusicParsingUtils").toMusicMetadata(r);
        },
        [Vr],
      ),
      Kr = _("messageSecret"),
      Qr = _("broadcast", { default: !1 }),
      Xr = _("vcardList", {
        getDefault: function () {
          return [];
        },
      }),
      Yr = _("vcardFormattedName"),
      Jr = _("labels", {
        getDefault: function () {
          return [];
        },
      }),
      Zr = _("agentId"),
      eo = _("url"),
      to = _("retailerId"),
      no = _("businessOwnerJid"),
      ro = _("productId"),
      oo = _("productImageCount"),
      ao = _("isMdHistoryMsg", { default: !1 }),
      io = _("campaignId"),
      lo = _("filename"),
      so = _("smbClientCampaignId"),
      uo = _("isCaptionByUser", { default: !1 }),
      co = _("doNotPlayInline"),
      mo = _("thumbnailDirectPath"),
      po = _("thumbnailHeight"),
      _o = _("thumbnailWidth"),
      fo = _("orderTitle"),
      go = _("itemCount"),
      ho = _("totalAmount1000"),
      yo = _("totalCurrencyCode"),
      Co = _("futureproofType"),
      bo = _("futureproofSubtype"),
      vo = _("ephemeralOutOfSync"),
      So = _("isAvatar"),
      Ro = _("bizPrivacyStatus"),
      Lo = _("verifiedBizName"),
      Eo = _("mediaKey"),
      ko = _("message", { default: "" }),
      Io = _("size", { default: 0 }),
      To = _("hostedBizEncStateMismatch"),
      Do = p(
        function (e) {
          var t = e[0];
          return t === "bot_unavailable_fanout";
        },
        [v],
      ),
      xo = p(
        function (e) {
          var t = e[0];
          return t === "view_once_unavailable_fanout";
        },
        [v],
      ),
      $o = p(
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
      Po = p(
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
      No = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return !r && !t.fromMe && n === o("WAWebBotTypes").BizBotType.BIZ_1P;
        },
        [R, ve, Po],
      ),
      Mo = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return !r && !t.fromMe && n === o("WAWebBotTypes").BizBotType.BIZ_3P;
        },
        [R, ve, Po],
      ),
      wo = _("botPluginSearchProvider"),
      Ao = _("botPluginSearchUrl"),
      Fo = _("botResponseTargetId"),
      Oo = _("botPluginSearchQuery"),
      Bo = _("botPluginType"),
      Wo = _("botMessageDisclaimerText"),
      qo = _("botModeSelection"),
      Uo = _("botModeOverride"),
      Vo = _("richResponse"),
      Ho = _("unifiedResponse"),
      Go = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t != null && n != null && r != null;
        },
        [wo, Ao, Oo],
      ),
      zo = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !n && (t == null ? void 0 : t.isBot()) === !0;
        },
        [rt, Po],
      ),
      jo = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !!(t && o("WAWebUserPrefsMeUser").isMeAccount(n));
        },
        [zo, Se],
      ),
      Ko = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return n && !t.remote.isBot();
        },
        [R, zo],
      ),
      Qo = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t || n || r;
        },
        [zo, No, Mo],
      ),
      Xo = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.PROTOCOL && n === "bot_feedback"
          );
        },
        [b, v],
      ),
      Yo = _("hsmTag"),
      Jo = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebBusinessHSMTypes").HSM_TAG_TYPE.AUTHENTICATION;
        },
        [Yo],
      ),
      Zo = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebBusinessHSMTypes").HSM_TAG_TYPE.MARKETING;
        },
        [Yo],
      ),
      ea = _("botRespOrInvocationRevokeBotWid"),
      ta = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !!(t != null && t.isBot() && n);
        },
        [ea, sr],
      ),
      na = p(
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
        [Bo, zo],
      ),
      ra = _("botPluginMaybeParent"),
      oa = _("botReelPluginThumbnailCdnUrl"),
      aa = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebMsgType").MSG_TYPE.BIZ_CONTENT_PLACEHOLDER;
        },
        [b],
      ),
      ia = _("statusMentioned"),
      la = _("isWamoSub"),
      sa = _("hasPaidPartnershipLabel"),
      ua = _("aiProvenance"),
      ca = p(
        function (e) {
          var t = e[0];
          return o("WAWebMsgAIProvenance").hasAIProvenanceSignal(t);
        },
        [ua],
      ),
      da = _("isVideoCall"),
      ma = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (
            t === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
            (n === "miss_video" || n === "miss_group_video" || r === !0)
          );
        },
        [b, v, da],
      ),
      pa = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t === o("WAWebMsgType").MSG_TYPE.CALL_LOG ? n.id : null;
        },
        [b, R],
      ),
      _a = _("callOutcome"),
      fa = _("callSilenceReason"),
      ga = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (
            t === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
            (n === "silence" || r != null)
          );
        },
        [b, v, fa],
      ),
      ha = p(
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
        [b, v, _a, rt],
      ),
      ya = _("callDuration"),
      Ca = p(
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
        [b, D, ya],
      ),
      ba = _("bytesSent"),
      va = _("bytesReceived"),
      Sa = _("callParticipants"),
      Ra = _("isCallLink"),
      La = _("callLinkToken"),
      Ea = _("terminatedByDeviceSwitch"),
      ka = _("selfOtherDeviceConnected"),
      Ia = p(
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
        [Ye, Sa, La],
      ),
      Ta = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n;
        },
        [Ye, Ia],
      ),
      Da = _("finalCallOutcome"),
      xa = _("groupHistoryBundleMessageKey"),
      $a = _("groupHistoryBundleMetadata"),
      Pa = _("groupHistoryIndividualMessageInfo"),
      Na = p(
        function (e) {
          var t,
            n = e[0],
            r = e[1];
          return (t = n == null ? void 0 : n.bundleMessageKey) != null ? t : r;
        },
        [Pa, xa],
      ),
      Ma = p(
        function (e) {
          var t = e[0];
          return t == null ? void 0 : t.isEditedAfterReceivedAsHistory;
        },
        [Pa],
      ),
      wa = p(
        function (e) {
          var t = e[0];
          return t == null ? void 0 : t.bundleSender;
        },
        [Pa],
      ),
      Aa = _("botGroupParticipant");
    function Fa(e) {
      var t =
        b(e) === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE &&
        o("WAWebUserPrefsMeUser").isMeAccount(k(e));
      return (
        !t &&
        !rr(e) &&
        b(e) !== o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
        !bn(e) &&
        !["change_number", "change_username", "masked_thread_created"].includes(
          v(e),
        ) &&
        !or(e)
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
      (l.getQuotedType = le),
      (l.getRcat = se),
      (l.getIsViewOnce = ue),
      (l.getIsGif = ce),
      (l.getGifAttribution = de),
      (l.getCtwaContext = me),
      (l.getMimetype = pe),
      (l.getFilehash = _e),
      (l.getDeprecatedMms3Url = fe),
      (l.getWaveform = ge),
      (l.getDisappearingModeInitiator = he),
      (l.getDisappearingModeTrigger = ye),
      (l.getDisappearingModeInitiatedByMe = Ce),
      (l.getActiveBotMsgStreamingInProgress = be),
      (l.getBizBotType = ve),
      (l.getBotTargetSenderJid = Se),
      (l.getIsSupportAIMessage = Re),
      (l.getLastBotEditBodyLength = Le),
      (l.getBotEditType = Ee),
      (l.getForwardedNewsletterMessageInfo = ke),
      (l.getForwardedAiBotMessageInfo = Ie),
      (l.getNewsletterAdminInviteInfo = Te),
      (l.getNewsletterFollowerInviteInfo = De),
      (l.getIsGroupStatus = $e),
      (l.getIsNewsletterStatus = Pe),
      (l.getHasReshareAttribution = Me),
      (l.getIsNewsletterStatusReshare = we),
      (l.getBizSource = Ae),
      (l.isBizSourceFromMarketingMessage = Fe),
      (l.getIsMarketingMessage = Oe),
      (l.getIsReply = Be),
      (l.getIsOpus = We),
      (l.getRcatString = qe),
      (l.getHasMentionOfMe = Ue),
      (l.getLocal = Ve),
      (l.getNonJidMentions = Ge),
      (l.getHasMentionAll = ze),
      (l.getIsImportantMessage = je),
      (l.getBotPluginReferenceIndex = Ke),
      (l.getIsUnreadType = Qe),
      (l.getIs1to1Msg = Xe),
      (l.getIsGroupMsg = Ye),
      (l.getIsNewsletterMsg = Je),
      (l.getHasOriginatedFromNewsletter = Ze),
      (l.getIsStatus = et),
      (l.getIsNotification = tt),
      (l.getIsSentByMe = nt),
      (l.getSender = rt),
      (l.getOriginalSender = ot),
      (l.getIsReaction = at),
      (l.getIsPollVote = it),
      (l.getIsFutureproof = lt),
      (l.getIsStickerMsg = st),
      (l.getIsCarouselCard = ut),
      (l.getHasThumbList = dt),
      (l.getIsKept = mt),
      (l.getIsUnkept = pt),
      (l.getIsPSA = _t),
      (l.getIsIAS = ft),
      (l.getIsAiHub = gt),
      (l.getIsCAPISupport = ht),
      (l.getIsProductListMessage = yt),
      (l.getTitle = Ct),
      (l.getBody = bt),
      (l.getCaption = vt),
      (l.getComment = St),
      (l.getPollName = Rt),
      (l.getPollOptions = Lt),
      (l.getPollSelectableOptionsCount = Et),
      (l.getPollInvalidated = kt),
      (l.getPollContentType = It),
      (l.getPollType = Tt),
      (l.getPollCorrectOptionIndex = Dt),
      (l.getPollEndTime = xt),
      (l.getPollHideVoterNames = $t),
      (l.getPollAllowAddOption = Pt),
      (l.getPollVotesSnapshot = Nt),
      (l.getQuarantineExtractedText = Mt),
      (l.getEventName = wt),
      (l.getEventDescription = At),
      (l.getEventStartTime = Ft),
      (l.getEventEndTime = Ot),
      (l.getEventJoinLink = Bt),
      (l.getEventLocation = Wt),
      (l.getIsEventCanceled = qt),
      (l.getEventInvalidated = Ut),
      (l.getEventIsScheduledCall = Vt),
      (l.getEventExtraGuestsAllowed = Ht),
      (l.getReplyCount = Gt),
      (l.getNativeFlowName = zt),
      (l.getNativeFlowButtons = jt),
      (l.getInteractivePayload = Kt),
      (l.getGalaxyFlowDisabled = Qt),
      (l.getSignupCtaTapped = Xt),
      (l.getPaymentCurrency = Yt),
      (l.getPaymentAmount1000 = Jt),
      (l.getPaymentMessageReceiverJid = Zt),
      (l.getPaymentStatus = en),
      (l.getPaymentTxnStatus = tn),
      (l.getPaymentNoteMsg = nn),
      (l.getPaymentRequestMessageKey = rn),
      (l.getPaymentExpiryTimestamp = on),
      (l.getPaymentInviteServiceType = an),
      (l.getIsFromTemplate = ln),
      (l.getIsLive = sn),
      (l.getIsDynamicReplyButtonsMsg = un),
      (l.getDynamicReplyButtons = cn),
      (l.getIsEphemeral = dn),
      (l.getIsEdited = mn),
      (l.getIsEditProtocolMsg = pn),
      (l.getStatusCanvasColor = _n),
      (l.getIsUserCreatedType = fn),
      (l.getIsSentByMeFromWeb = gn),
      (l.getRevokeSender = hn),
      (l.getIsRevokedByMe = yn),
      (l.getIsInternational = Cn),
      (l.getIsBizNotification = bn),
      (l.getIsMedia = vn),
      (l.getIsForwarded = Sn),
      (l.getForwardingScore = Rn),
      (l.getNumTimesForwarded = Ln),
      (l.FREQUENTLY_FORWARDED_SENTINEL = En),
      (l.getIsFrequentlyForwarded = kn),
      (l.getIsQuestion = In),
      (l.getIsSpoiler = Tn),
      (l.getQuestionResponsesCount = Dn),
      (l.getReadQuestionResponsesCount = xn),
      (l.getUnreadQuestionResponsesCount = $n),
      (l.getQuestionReplyQuotedMessage = Pn),
      (l.getIsQuestionReply = Nn),
      (l.getNewsletterAdminProfile = Mn),
      (l.getIsBotInvoke = wn),
      (l.getShouldDisplayAsForwarded = An),
      (l.getInvis = Fn),
      (l.getIsNewMsg = On),
      (l.getIsSendFailure = Bn),
      (l.getIsFailed = Wn),
      (l.getVcard = qn),
      (l.getDescription = Un),
      (l.getMatchedText = Vn),
      (l.getThumbnail = Hn),
      (l.getThumbnailHQ = Gn),
      (l.getMusicArtwork = zn),
      (l.getRichPreviewType = jn),
      (l.getPaymentLinkMetadata = Kn),
      (l.getFaviconMMSMetadata = Qn),
      (l.getPaymentLinkPreviewMetaTags = Xn),
      (l.getHasPaymentLinkTrustSignals = Yn),
      (l.getLinkPreview = Jn),
      (l.getSupportsMessageFooter = Zn),
      (l.getSupportsMessageFooterLinks = er),
      (l.INITIAL_PAGE_SIZE = tr),
      (l.getInitialPageSize = nr),
      (l.getIsInitialE2ENotification = rr),
      (l.getIsDisappearingModeSystemMessage = or),
      (l.getKicKey = ar),
      (l.getKicSender = ir),
      (l.getEphemeralExpirationTimestamp = lr),
      (l.getIsRevoke = sr),
      (l.getRevokeDuration = ur),
      (l.getWamEditType = cr),
      (l.getWamDisappearingModeTrigger = dr),
      (l.getWamDisappearingModeInitiatedByMe = mr),
      (l.getWamDisappearingModeInitiator = pr),
      (l.getInviteCode = _r),
      (l.getInviteCodeExp = fr),
      (l.getInviteGrp = gr),
      (l.getInviteGrpName = hr),
      (l.getInviteGrpJpegThum = yr),
      (l.getInviteGrpType = Cr),
      (l.getIsGroupsV4InviteExpired = br),
      (l.getIsNewsletterAdminInviteExpired = vr),
      (l.getProductHeaderImageRejected = Sr),
      (l.getProductListHeaderImage = Rr),
      (l.getIsAckPlayable = Lr),
      (l.getHasReaction = Er),
      (l.getRecipients = kr),
      (l.getTemplateParams = Ir),
      (l.getClientUrl = Tr),
      (l.getLoc = Dr),
      (l.getLat = xr),
      (l.getLng = $r),
      (l.getShareDuration = Pr),
      (l.getFinalLat = Nr),
      (l.getFinalLng = Mr),
      (l.getStar = wr),
      (l.getCurrencyCode = Ar),
      (l.getPriceAmount1000 = Fr),
      (l.getSalePriceAmount1000 = Or),
      (l.getIsVcardOverMmsDocument = Br),
      (l.getInteractiveAnnotations = Wr),
      (l.getMusicAnnotations = qr),
      (l.getHasEmbeddedMessagesAnnotation = Ur),
      (l.getFirstMusicAnnotation = Vr),
      (l.isStatusWithMusic = Hr),
      (l.isNewsletterMsgWithMusic = Gr),
      (l.isStatusWithEmbeddedMessages = zr),
      (l.getFirstMusicAnnotationEmbeddedContent = jr),
      (l.getMessageSecret = Kr),
      (l.getBroadcast = Qr),
      (l.getVcardList = Xr),
      (l.getVcardFormattedName = Yr),
      (l.getLabels = Jr),
      (l.getAgentId = Zr),
      (l.getUrl = eo),
      (l.getRetailerId = to),
      (l.getBusinessOwnerJid = no),
      (l.getProductId = ro),
      (l.getProductImageCount = oo),
      (l.getIsMdHistoryMsg = ao),
      (l.getCampaignId = io),
      (l.getFilename = lo),
      (l.getSmbClientCampaignId = so),
      (l.getIsCaptionByUser = uo),
      (l.getDoNotPlayInline = co),
      (l.getThumbnailDirectPath = mo),
      (l.getThumbnailHeight = po),
      (l.getThumbnailWidth = _o),
      (l.getOrderTitle = fo),
      (l.getItemCount = go),
      (l.getTotalAmount1000 = ho),
      (l.getTotalCurrencyCode = yo),
      (l.getFutureproofType = Co),
      (l.getFutureproofSubtype = bo),
      (l.getEphemeralOutOfSync = vo),
      (l.getIsAvatar = So),
      (l.getBizPrivacyStatus = Ro),
      (l.getVerifiedBizName = Lo),
      (l.getMediaKey = Eo),
      (l.getMessage = ko),
      (l.getSize = Io),
      (l.getHostedBizEncStateMismatch = To),
      (l.getIsBotFutureproofPlaceholder = Do),
      (l.getIsViewOncePlaceholder = xo),
      (l.getIsBotQuery = $o),
      (l.getIsCoexV2Relay = Po),
      (l.getIsBizBot1pResponse = No),
      (l.getIsBizBot3pResponse = Mo),
      (l.getBotPluginSearchProvider = wo),
      (l.getBotPluginSearchUrl = Ao),
      (l.getBotResponseTargetId = Fo),
      (l.getBotPluginSearchQuery = Oo),
      (l.getBotPluginType = Bo),
      (l.getBotMessageDisclaimerText = Wo),
      (l.getBotModeSelection = qo),
      (l.getBotModeOverride = Uo),
      (l.getRichResponse = Vo),
      (l.getUnifiedResponse = Ho),
      (l.getIsBotSearchResponse = Go),
      (l.getIsMetaBotResponse = zo),
      (l.isMetaBotResponseToMyInvoke = jo),
      (l.getIsMetaBotInvokeResponse = Ko),
      (l.getIsBotResponse = Qo),
      (l.getIsBotFeedbackMessage = Xo),
      (l.getHsmTag = Yo),
      (l.getIsAuthenticationMessage = Jo),
      (l.getIsMarketingTemplateTag = Zo),
      (l.getBotRespOrInvocationRevokeBotWid = ea),
      (l.getIsRevokeForMsgFromOrDeliveredToBot = ta),
      (l.getIsBotPluginCarouselMsg = na),
      (l.getBotPluginMaybeParent = ra),
      (l.getBotReelPluginThumbnailCdnUrl = oa),
      (l.getIsBizContentPlaceholder = aa),
      (l.getStatusMentioned = ia),
      (l.getIsWamoSub = la),
      (l.getHasPaidPartnershipLabel = sa),
      (l.getAiProvenance = ua),
      (l.getIsAiContent = ca),
      (l.getIsVideoCall = ma),
      (l.getCallId = pa),
      (l.getCallOutcome = _a),
      (l.getCallSilenceReason = fa),
      (l.getIsCallSilenced = ga),
      (l.getIsMissedCall = ha),
      (l.getCallDuration = ya),
      (l.getIsVisibleCallLog = Ca),
      (l.getBytesSent = ba),
      (l.getBytesReceived = va),
      (l.getCallParticipants = Sa),
      (l.getIsCallLink = Ra),
      (l.getCallLinkToken = La),
      (l.getTerminatedByDeviceSwitch = Ea),
      (l.getSelfOtherDeviceConnected = ka),
      (l.getIsAdHocGroupCall = Ia),
      (l.getIsGroupCall = Ta),
      (l.getFinalCallOutcome = Da),
      (l.getGroupHistoryBundleMessageKeyDeprecated = xa),
      (l.getGroupHistoryBundleMetadata = $a),
      (l.getGroupHistoryIndividualMessageInfo = Pa),
      (l.getGroupHistoryBundleMessageKey = Na),
      (l.getIsEditedAfterReceivedAsHistory = Ma),
      (l.getGroupHistoryBundleSender = wa),
      (l.getBotGroupParticipant = Aa),
      (l.isRealMessage = Fa));
  },
  98,
);
