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
    "WAWebBizAiAgentGating",
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
      ],
      C = "upi://pay";
    function b(e) {
      return e instanceof r("WAWebWid")
        ? e
        : e.user != null
          ? o("WAWebWidFactory").createUserWidOrThrow(e.user, e.server)
          : e;
    }
    var v = _("type"),
      S = _("subtype"),
      R = _("id"),
      L = p(
        function (e) {
          var t = e[0];
          return r("WAWebMsgKey").from(t);
        },
        [R],
      ),
      E = _("serverId"),
      k = _("to"),
      I = _("from"),
      T = _("broadcastId"),
      D = _("qrUrl"),
      x = p(
        function (e) {
          var t = e[0];
          return t != null && t.startsWith(C);
        },
        [D],
      ),
      $ = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return n != null ? n : t.remote;
        },
        [L, T],
      ),
      P = _("viewMode"),
      N = _("author"),
      M = _("metaFrom"),
      w = _("senderWithDevice"),
      A = _("ack"),
      F = _("isScheduledMsg"),
      O = _("viewCount"),
      B = _("forwardsCount"),
      W = _("viewed"),
      q = _("originalSelfAuthor"),
      U = _("kicState"),
      V = _("kicTimestampMs"),
      H = _("list"),
      G = _("latestEditMsgKey"),
      z = _("errorCode"),
      j = _("ephemeralDuration"),
      K = _("afterReadDuration"),
      Q = _("expiredTimestamp"),
      X = _("ephemeralSettingUser"),
      Y = _("t", { default: 0 }),
      J = _("clientReceivedTsMillis"),
      Z = _("backgroundColor"),
      ee = _("headerType"),
      te = _("interactiveHeader"),
      ne = _("interactiveType"),
      re = _("bloksWidget"),
      oe = _("footer"),
      ae = _("mentionedJidList"),
      ie = _("groupMentions", {
        getDefault: function () {
          return [];
        },
      }),
      le = _("quotedMsg"),
      se = _("quotedRemoteJid"),
      ue = _("quotedParticipant"),
      ce = _("rcat"),
      de = _("isViewOnce", { default: !1 }),
      me = _("isGif", { default: !1 }),
      pe = _("gifAttribution", {
        default: o("WAWebProtobufsE2E.pb").Message$VideoMessage$Attribution
          .NONE,
      }),
      _e = _("ctwaContext"),
      fe = _("threadIds"),
      ge = _("mimetype"),
      he = _("filehash"),
      ye = _("deprecatedMms3Url"),
      Ce = _("waveform"),
      be = _("disappearingModeInitiator"),
      ve = _("disappearingModeTrigger"),
      Se = _("disappearingModeInitiatedByMe"),
      Re = _("activeBotMsgStreamingInProgress"),
      Le = _("bizBotType"),
      Ee = _("botTargetSenderJid"),
      ke = _("isSupportAIMessage"),
      Ie = _("lastBotEditBodyLength"),
      Te = _("botEditType"),
      De = _("forwardedNewsletterMessageInfo"),
      xe = _("forwardedAiBotMessageInfo"),
      $e = _("newsletterAdminInviteInfo"),
      Pe = _("newsletterFollowerInviteInfo"),
      Ne = _("isGroupStatus"),
      Me = p(
        function (e) {
          var t = e[0];
          return t === !0;
        },
        [Ne],
      ),
      we = _("isNewsletterStatus", { default: !1 }),
      Ae = _("statusAttributions");
    function Fe(e) {
      return (
        (e == null
          ? void 0
          : e.some(function (e) {
              return (
                e.type ===
                o("WAWebProtobufsStatusAttributions.pb").StatusAttribution$Type
                  .RESHARE
              );
            })) === !0
      );
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
        [Ae],
      ),
      We = _("bizSource");
    function qe(e) {
      return e === "smb_promo";
    }
    var Ue = p(
        function (e) {
          var t = e[0];
          return qe(t);
        },
        [We],
      ),
      Ve = p(
        function (e) {
          var t = e[0];
          return t != null;
        },
        [le],
      ),
      He = p(
        function (e) {
          var t = e[0];
          return o("WAWebMimeTypes").isOpus(t);
        },
        [ge],
      ),
      Ge = p(
        function (e) {
          var t = e[0];
          return t == null ? null : o("WABase64").encodeB64UrlSafe(t, !0);
        },
        [ce],
      ),
      ze = p(
        function (e) {
          var t = e[0];
          return t == null
            ? !1
            : t.some(function (e) {
                return o("WAWebUserPrefsMeUser").isMeAccount(b(e));
              });
        },
        [ae],
      ),
      je = _("local", { default: !1 }),
      Ke = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n ? o("WAWebUserPrefsMeUser").isMeAccount(b(n)) : !1;
        },
        [le, ue],
      ),
      Qe = _("nonJidMentions"),
      Xe = p(
        function (e) {
          var t = e[0];
          return o("WAWebNonJidMentionUtils").hasMentionAll(t);
        },
        [Qe],
      ),
      Ye = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t || n || r;
        },
        [ze, Ke, Xe],
      ),
      Je = _("botPluginReferenceIndex"),
      Ze = p(
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
            case "music":
            case "rich_response":
            case "automated_greeting_message":
            case "quarantined":
              return !0;
            default:
              return !1;
          }
        },
        [v, Je, P, S],
      ),
      et = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.isRegularUser() && n.isRegularUser();
        },
        [I, k],
      ),
      tt = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return r("WAWebWid").isGroup(t) || r("WAWebWid").isGroup(n);
        },
        [I, k],
      ),
      nt = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return r("WAWebNewsletterIsNewsletterMsg")({ from: t, to: n });
        },
        [I, k],
      ),
      rt = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n != null;
        },
        [nt, De],
      ),
      ot = p(
        function (e) {
          var t = e[0],
            n = e[1],
            o = e[2];
          return r("WAWebWid").isStatus(t.remote) || n || o;
        },
        [L, Me, we],
      ),
      at = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return o("WAWebCommonMsgUtils").isNotificationType(t, n);
        },
        [v, S],
      ),
      it = p(
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
        [L, I, at, v, S],
      ),
      lt = p(
        function (e) {
          var t = e[0],
            n = e[1],
            a = e[2],
            i = e[3],
            l = e[4],
            s = e[5],
            u = e[6],
            c = e[7],
            d = e[8];
          if (l || s) return t.remote;
          if (n)
            return u
              ? o("WAWebUserPrefsMeUser").getMeUserOrThrow()
              : c instanceof r("WAWebWid")
                ? c
                : null;
          var m = a || i || (d instanceof r("WAWebWid") && d.isBot()) ? d : c;
          return m instanceof r("WAWebWid") ? m : null;
        },
        [L, it, tt, ot, Me, we, nt, I, N],
      ),
      st = p(
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
        [q, lt, v],
      ),
      ut = p(
        function (e) {
          var t = e[0];
          return (
            t === o("WAWebMsgType").MSG_TYPE.REACTION ||
            t === o("WAWebMsgType").MSG_TYPE.REACTION_ENC
          );
        },
        [v],
      ),
      ct = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.POLL_UPDATE && n === "poll_vote"
          );
        },
        [v, S],
      ),
      dt = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.UNKNOWN ||
            (t === o("WAWebMsgType").MSG_TYPE.PAYMENT && n === "futureproof")
          );
        },
        [v, S],
      ),
      mt = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebMsgType").MSG_TYPE.STICKER;
        },
        [v],
      ),
      pt = _("isAiSticker"),
      _t = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n === !0;
        },
        [mt, pt],
      ),
      ft = _("isCarouselCard", { default: !1 }),
      gt = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebMsgType").MSG_TYPE.DOCUMENT;
        },
        [v],
      ),
      ht = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return !t && !n && !r;
        },
        [de, mt, gt],
      ),
      yt = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebEphemeralConstants").KeepInChatState.KEPT;
        },
        [U],
      ),
      Ct = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebEphemeralConstants").KeepInChatState.UNKEPT;
        },
        [U],
      ),
      bt = p(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isPSA(t.remote);
        },
        [L],
      ),
      vt = p(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isIAS(t.remote);
        },
        [L],
      ),
      St = p(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isAiHub(t.remote);
        },
        [L],
      ),
      Rt = p(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isCAPISupportAccount(t.remote);
        },
        [L],
      ),
      Lt = p(
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
        [v, H],
      ),
      Et = _("title"),
      kt = _("body", { default: "" }),
      It = _("caption"),
      Tt = _("comment"),
      Dt = _("pollName", { default: "" }),
      xt = _("pollOptions"),
      $t = p(
        function (e) {
          var t = e[0];
          return (
            (t == null
              ? void 0
              : t.some(function (e) {
                  return e.addOptionMsgKey != null;
                })) === !0
          );
        },
        [xt],
      ),
      Pt = _("pollSelectableOptionsCount", { default: 0 }),
      Nt = _("pollInvalidated", { default: !1 }),
      Mt = _("pollContentType", {
        default: o("WAWebPollCreationUtils").PollContentType.TEXT,
      }),
      wt = _("pollType", {
        default: o("WAWebPollCreationUtils").PollType.POLL,
      }),
      At = _("correctOptionIndex"),
      Ft = _("pollEndTime"),
      Ot = _("pollHideVoterNames"),
      Bt = _("pollAllowAddOption"),
      Wt = _("pollVotesSnapshot"),
      qt = _("quarantineExtractedText"),
      Ut = _("eventName", { default: "" }),
      Vt = _("eventDescription"),
      Ht = _("eventStartTime", { default: 0 }),
      Gt = _("eventEndTime"),
      zt = _("eventJoinLink"),
      jt = _("eventLocation"),
      Kt = _("isEventCanceled", { default: !1 }),
      Qt = _("eventInvalidated", { default: !1 }),
      Xt = _("eventIsScheduledCall", { default: !1 }),
      Yt = _("eventExtraGuestsAllowed", { default: !1 }),
      Jt = _("nativeFlowName"),
      Zt = _("nativeFlowButtons"),
      en = _("interactivePayload"),
      tn = _("galaxyFlowDisabled", { default: !1 }),
      nn = _("signupCtaTapped", { default: !1 }),
      rn = _("paymentCurrency", { default: "" }),
      on = _("paymentAmount1000", { default: 0 }),
      an = _("paymentMessageReceiverJid"),
      ln = _("paymentStatus"),
      sn = _("paymentTxnStatus"),
      un = _("paymentNoteMsg"),
      cn = _("paymentRequestMessageKey"),
      dn = _("paymentExpiryTimestamp"),
      mn = _("paymentInviteServiceType"),
      pn = _("isFromTemplate", { default: !1 }),
      _n = _("isLive", { default: !1 }),
      fn = _("isDynamicReplyButtonsMsg", { default: !1 }),
      gn = _("dynamicReplyButtons"),
      hn = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
            n === "ephemeral_setting"
            ? !1
            : r != null && r !== 0;
        },
        [v, S, j],
      ),
      yn = p(
        function (e) {
          var t = e[0];
          return t != null;
        },
        [G],
      ),
      Cn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.PROTOCOL && n === "message_edit"
          );
        },
        [v, S],
      ),
      bn = p(
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
        [ot, Z],
      ),
      vn = p(
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
            case "music":
            case "rich_response":
            case "newsletter_question_response":
            case "quarantined":
            case "poll_add_option_decrypted":
              return !0;
            default:
              return !1;
          }
        },
        [v],
      ),
      Sn = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t.fromMe && n && r;
        },
        [L, je, vn],
      ),
      Rn = _("revokeSender"),
      Ln = p(
        function (e) {
          var t = e[0];
          return t != null && o("WAWebUserPrefsMeUser").isMeAccount(t);
        },
        [Rn],
      ),
      En = p(
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
        [L, k, I],
      ),
      kn = p(
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
        [v, S],
      ),
      In = p(
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
        [v, te],
      ),
      Tn = _("isForwarded", { default: !1 }),
      Dn = _("forwardingScore"),
      xn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return n == null ? (t ? 1 : 0) : n || 0;
        },
        [Tn, Dn],
      ),
      $n = 127,
      Pn = p(
        function (e) {
          var t = e[0];
          return t >= $n;
        },
        [xn],
      ),
      Nn = _("isQuestion", { default: !1 }),
      Mn = _("isSpoiler", { default: !1 }),
      wn = _("questionResponsesCount"),
      An = _("readQuestionResponsesCount"),
      Fn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t - n;
        },
        [wn, An],
      ),
      On = _("questionReplyQuotedMessage"),
      Bn = p(
        function (e) {
          var t = e[0];
          return t != null;
        },
        [On],
      ),
      Wn = _("newsletterAdminProfile"),
      qn = p(
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
        [L, ae],
      ),
      Un = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            o = e[3];
          return t || n || o || !r;
        },
        [Tn, rt, it, qn],
      ),
      Vn = _("invis", { default: !1 }),
      Hn = _("isNewMsg", { default: !1 }),
      Gn = _("isSendFailure", { default: !1 }),
      zn = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (t && n != null && n < o("WAWebAck").ACK.CLOCK) || r;
        },
        [it, A, Gn],
      ),
      jn = p(
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
        [v, kt],
      ),
      Kn = _("description"),
      Qn = _("matchedText", { default: "" }),
      Xn = _("thumbnail"),
      Yn = _("thumbnailHQ"),
      Jn = _("musicArtwork"),
      Zn = _("richPreviewType", {
        default: o("WAWebProtobufsE2E.pb")
          .Message$ExtendedTextMessage$PreviewType.NONE,
      }),
      er = _("paymentLinkMetadata", { default: null }),
      tr = _("faviconMMSMetadata", { default: null }),
      nr = p(
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
        [er],
      ),
      rr = p(
        function (e) {
          var t = e[0];
          return (
            (t == null ? void 0 : t.isBusinessVerified) === !0 &&
            (t == null ? void 0 : t.providerName) != null
          );
        },
        [nr],
      ),
      or = p(
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
        [kt, Et, Kn, Qn],
      ),
      ar = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n;
        },
        [fn, pn],
      ),
      ir = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            n ||
            t === o("WAWebMsgType").MSG_TYPE.LIST ||
            t === o("WAWebMsgType").MSG_TYPE.INTERACTIVE
          );
        },
        [v, fn],
      ),
      lr = 768,
      sr = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = 308;
          return n != null && n.isBot() ? 1 / 0 : t ? r : lr;
        },
        [Pn, lt],
      ),
      ur = p(
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
        [v, S],
      ),
      cr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE &&
            n === "disappearing_mode"
          );
        },
        [v, S],
      ),
      dr = _("kicKey"),
      mr = p(
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
        [dr, tt],
      ),
      pr = p(
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
        [j, Y, S, Q],
      ),
      _r = p(
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
        [v, S],
      ),
      fr = _("revokeDuration"),
      gr = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            a = e[3];
          if (r)
            return n === "admin_revoke" || n === "admin"
              ? o("WAWebWamEnumEditType").EDIT_TYPE.ADMIN_REVOKE
              : o("WAWebWamEnumEditType").EDIT_TYPE.SENDER_REVOKE;
          var i =
            t === o("WAWebMsgType").MSG_TYPE.POLL_EDIT_ENCRYPTED ||
            (t === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
              n === "poll_edit_decrypted");
          return a || i
            ? o("WAWebWamEnumEditType").EDIT_TYPE.EDITED
            : o("WAWebWamEnumEditType").EDIT_TYPE.NOT_EDITED;
        },
        [v, S, _r, yn],
      ),
      hr = p(
        function (e) {
          var t = e[0];
          if (t != null)
            return o("WAWebEphemeralityWAMUtils").getWamDisappearingModeTrigger(
              t,
            );
        },
        [ve],
      ),
      yr = p(
        function (e) {
          var t = e[0];
          if (t != null)
            return o(
              "WAWebEphemeralityWAMUtils",
            ).getWamDisappearingModeInitiatedByMe(t);
        },
        [Se],
      ),
      Cr = p(
        function (e) {
          var t = e[0];
          if (t != null)
            return o(
              "WAWebEphemeralityWAMUtils",
            ).getWamDisappearingModeInitiator(t);
        },
        [be],
      ),
      br = _("inviteCode", { default: "" }),
      vr = _("inviteCodeExp", { default: "" }),
      Sr = _("inviteGrp", { default: "" }),
      Rr = _("inviteGrpName"),
      Lr = _("inviteGrpJpegThum"),
      Er = _("inviteGrpType"),
      kr = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          if (t !== o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE) return !1;
          if (!n) return !0;
          var a = Date.now() / 1e3;
          return parseInt(a, 10) >= parseInt(r, 10);
        },
        [v, br, vr],
      ),
      Ir = p(
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
        [v, $e],
      ),
      Tr = _("productHeaderImageRejected", { default: !1 }),
      Dr = p(
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
        [Tr, H],
      ),
      xr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.PTT ||
            t === o("WAWebMsgType").MSG_TYPE.PTV ||
            (n && t === o("WAWebMsgType").MSG_TYPE.AUDIO)
          );
        },
        [v, rt],
      ),
      $r = _("hasReaction", { default: !1 }),
      Pr = _("recipients", {
        getDefault: function () {
          return [];
        },
      }),
      Nr = _("templateParams", {
        getDefault: function () {
          return [];
        },
      }),
      Mr = _("clientUrl", { default: "" }),
      wr = _("loc", { default: "" }),
      Ar = _("lat"),
      Fr = _("lng"),
      Or = _("shareDuration"),
      Br = _("finalLat"),
      Wr = _("finalLng"),
      qr = _("star", { default: !1 }),
      Ur = _("currencyCode"),
      Vr = _("priceAmount1000"),
      Hr = _("salePriceAmount1000"),
      Gr = _("isVcardOverMmsDocument", { default: !1 }),
      zr = _("interactiveAnnotations"),
      jr = p(
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
        [zr],
      ),
      Kr = p(
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
        [zr],
      ),
      Qr = p(
        function (e) {
          var t = e[0];
          return t == null ? null : t[0];
        },
        [jr],
      ),
      Xr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n != null && n.length > 0;
        },
        [ot, jr],
      ),
      Yr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n != null;
        },
        [nt, Qr],
      ),
      Jr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n;
        },
        [ot, Kr],
      ),
      Zr = p(
        function (e) {
          var t,
            n = e[0];
          if (n == null) return null;
          var r = (t = n.embeddedContent) == null ? void 0 : t.embeddedMusic;
          return r == null
            ? null
            : o("WAWebMusicParsingUtils").toMusicMetadata(r);
        },
        [Qr],
      ),
      eo = _("messageSecret"),
      to = _("broadcast", { default: !1 }),
      no = _("vcardList", {
        getDefault: function () {
          return [];
        },
      }),
      ro = _("vcardFormattedName"),
      oo = _("labels", {
        getDefault: function () {
          return [];
        },
      }),
      ao = _("agentId"),
      io = _("url"),
      lo = _("retailerId"),
      so = _("businessOwnerJid"),
      uo = _("productId"),
      co = _("productImageCount"),
      mo = _("isMdHistoryMsg", { default: !1 }),
      po = _("campaignId"),
      _o = _("filename"),
      fo = _("smbClientCampaignId"),
      go = _("isCaptionByUser", { default: !1 }),
      ho = _("doNotPlayInline"),
      yo = _("thumbnailDirectPath"),
      Co = _("thumbnailHeight"),
      bo = _("thumbnailWidth"),
      vo = _("orderTitle"),
      So = _("itemCount"),
      Ro = _("totalAmount1000"),
      Lo = _("totalCurrencyCode"),
      Eo = _("futureproofType"),
      ko = _("futureproofSubtype"),
      Io = _("ephemeralOutOfSync"),
      To = _("isAvatar"),
      Do = _("bizPrivacyStatus"),
      xo = _("verifiedBizName"),
      $o = _("mediaKey"),
      Po = _("message", { default: "" }),
      No = _("size", { default: 0 }),
      Mo = _("mediaPngThumbnail"),
      wo = _("hostedBizEncStateMismatch"),
      Ao = p(
        function (e) {
          var t = e[0];
          return t === "bot_unavailable_fanout";
        },
        [S],
      ),
      Fo = p(
        function (e) {
          var t = e[0];
          return t === "view_once_unavailable_fanout";
        },
        [S],
      ),
      Oo = p(
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
        [L, ae],
      ),
      Bo = p(
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
        [w, M],
      ),
      Wo = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !n && t === o("WAWebBotTypes").BizBotType.BIZ_1P;
        },
        [Le, Bo],
      ),
      qo = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !t.fromMe && n;
        },
        [L, Wo],
      ),
      Uo = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return !r && !t.fromMe && n === o("WAWebBotTypes").BizBotType.BIZ_3P;
        },
        [L, Le, Bo],
      ),
      Vo = _("botPluginSearchProvider"),
      Ho = _("botPluginSearchUrl"),
      Go = _("botResponseTargetId"),
      zo = _("botPluginSearchQuery"),
      jo = _("botPluginType"),
      Ko = _("botMessageDisclaimerText"),
      Qo = _("botModeSelection"),
      Xo = _("botModeOverride"),
      Yo = _("richResponse"),
      Jo = _("unifiedResponse"),
      Zo = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t != null && n != null && r != null;
        },
        [Vo, Ho, zo],
      ),
      ea = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !n && (t == null ? void 0 : t.isBot()) === !0;
        },
        [lt, Bo],
      ),
      ta = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !!(t && o("WAWebUserPrefsMeUser").isMeAccount(n));
        },
        [ea, Ee],
      ),
      na = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return n && !t.remote.isBot();
        },
        [L, ea],
      ),
      ra = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t || n || r;
        },
        [ea, qo, Uo],
      ),
      oa = p(
        function (e) {
          var t = e[0];
          return (
            !t.fromMe &&
            t.remote.isAiHub() &&
            o("WAWebBizAiAgentGating").isMaibaWASSReceivingEnabled()
          );
        },
        [L],
      ),
      aa = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t || n || r;
        },
        [ea, Uo, oa],
      ),
      ia = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            a = e[3],
            i = e[4];
          return (
            (t || n) &&
            !r &&
            !(
              a &&
              (i === o("WAWebBotTypes").BotMsgEditType.INNER ||
                i === o("WAWebBotTypes").BotMsgEditType.LAST)
            )
          );
        },
        [yn, $t, aa, Wo, Te],
      ),
      la = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.PROTOCOL && n === "bot_feedback"
          );
        },
        [v, S],
      ),
      sa = _("hsmTag"),
      ua = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebBusinessHSMTypes").HSM_TAG_TYPE.AUTHENTICATION;
        },
        [sa],
      ),
      ca = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebBusinessHSMTypes").HSM_TAG_TYPE.MARKETING;
        },
        [sa],
      ),
      da = _("botRespOrInvocationRevokeBotWid"),
      ma = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !!(t != null && t.isBot() && n);
        },
        [da, _r],
      ),
      pa = p(
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
        [jo, ea],
      ),
      _a = _("botPluginMaybeParent"),
      fa = _("botReelPluginThumbnailCdnUrl"),
      ga = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebMsgType").MSG_TYPE.BIZ_CONTENT_PLACEHOLDER;
        },
        [v],
      ),
      ha = _("statusMentioned"),
      ya = _("isWamoSub"),
      Ca = _("hasPaidPartnershipLabel"),
      ba = _("aiProvenance"),
      va = p(
        function (e) {
          var t = e[0];
          return o("WAWebMsgAIProvenance").hasAIProvenanceSignal(t);
        },
        [ba],
      ),
      Sa = _("isVideoCall"),
      Ra = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (
            t === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
            (n === "miss_video" || n === "miss_group_video" || r === !0)
          );
        },
        [v, S, Sa],
      ),
      La = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t === o("WAWebMsgType").MSG_TYPE.CALL_LOG ? n.id : null;
        },
        [v, L],
      ),
      Ea = _("callOutcome"),
      ka = _("callSilenceReason"),
      Ia = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (
            t === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
            (n === "silence" || r != null)
          );
        },
        [v, S, ka],
      ),
      Ta = p(
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
        [v, S, Ea, lt],
      ),
      Da = _("callDuration"),
      xa = p(
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
        [v, P, Da],
      ),
      $a = _("bytesSent"),
      Pa = _("bytesReceived"),
      Na = _("callParticipants"),
      Ma = p(
        function (e) {
          var t = e[0];
          if (t == null) return t;
          var n = t.map(function (e) {
              return {
                outcome: e.outcome,
                participant: e.participant.isUser()
                  ? o("WAWebWidFactory").asUserWidOrThrow(e.participant)
                  : e.participant,
              };
            }),
            r = new Set();
          return n.filter(function (e) {
            var t = e.participant.toString();
            return r.has(t) ? !1 : (r.add(t), !0);
          });
        },
        [Na],
      ),
      wa = _("isCallLink"),
      Aa = _("callLinkToken"),
      Fa = _("terminatedByDeviceSwitch"),
      Oa = _("selfOtherDeviceConnected"),
      Ba = p(
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
        [tt, Ma, Aa],
      ),
      Wa = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n;
        },
        [tt, Ba],
      ),
      qa = _("finalCallOutcome"),
      Ua = _("groupHistoryBundleMessageKey"),
      Va = _("groupHistoryBundleMetadata"),
      Ha = _("groupHistoryIndividualMessageInfo"),
      Ga = p(
        function (e) {
          var t,
            n = e[0],
            r = e[1];
          return (t = n == null ? void 0 : n.bundleMessageKey) != null ? t : r;
        },
        [Ha, Ua],
      ),
      za = p(
        function (e) {
          var t = e[0];
          return t == null ? void 0 : t.isEditedAfterReceivedAsHistory;
        },
        [Ha],
      ),
      ja = p(
        function (e) {
          var t = e[0];
          return t == null ? void 0 : t.bundleSender;
        },
        [Ha],
      ),
      Ka = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t != null && r("WAWebWid").equals(t.remote, n);
        },
        [Ga, $],
      );
    function Qa(e) {
      var t =
        v(e) === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE &&
        o("WAWebUserPrefsMeUser").isMeAccount(I(e));
      return (
        !t &&
        !ur(e) &&
        v(e) !== o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
        !kn(e) &&
        !["change_number", "change_username", "masked_thread_created"].includes(
          S(e),
        ) &&
        !cr(e)
      );
    }
    ((l.clearMsgGetterCacheFor = g),
      (l.getMsgUnsafe = h),
      (l.getType = v),
      (l.getSubtype = S),
      (l.getId = L),
      (l.getServerId = E),
      (l.getTo = k),
      (l.getFrom = I),
      (l.getBroadcastId = T),
      (l.getHasPaymentQr = x),
      (l.getRemote = $),
      (l.getAuthor = N),
      (l.getMetaFrom = M),
      (l.getSenderWithDevice = w),
      (l.getAck = A),
      (l.getIsScheduledMsg = F),
      (l.getViewCount = O),
      (l.getForwardsCount = B),
      (l.getViewed = W),
      (l.getOriginalSelfAuthor = q),
      (l.getKicState = U),
      (l.getKicTimestampMs = V),
      (l.getList = H),
      (l.getLatestEditMsgKey = G),
      (l.getErrorCode = z),
      (l.getEphemeralDuration = j),
      (l.getAfterReadDuration = K),
      (l.getExpiredTimestamp = Q),
      (l.getEphemeralSettingUser = X),
      (l.getT = Y),
      (l.getClientReceivedTsMillis = J),
      (l.getBackgroundColor = Z),
      (l.getHeaderType = ee),
      (l.getInteractiveHeader = te),
      (l.getInteractiveType = ne),
      (l.getBloksWidget = re),
      (l.getFooter = oe),
      (l.getMentionedJidList = ae),
      (l.getGroupMentions = ie),
      (l.getQuotedMsg = le),
      (l.getQuotedRemoteJid = se),
      (l.getQuotedParticipant = ue),
      (l.getRcat = ce),
      (l.getIsViewOnce = de),
      (l.getIsGif = me),
      (l.getGifAttribution = pe),
      (l.getCtwaContext = _e),
      (l.getThreadIds = fe),
      (l.getFilehash = he),
      (l.getDeprecatedMms3Url = ye),
      (l.getWaveform = Ce),
      (l.getDisappearingModeInitiator = be),
      (l.getDisappearingModeInitiatedByMe = Se),
      (l.getActiveBotMsgStreamingInProgress = Re),
      (l.getBizBotType = Le),
      (l.getBotTargetSenderJid = Ee),
      (l.getIsSupportAIMessage = ke),
      (l.getLastBotEditBodyLength = Ie),
      (l.getBotEditType = Te),
      (l.getForwardedNewsletterMessageInfo = De),
      (l.getForwardedAiBotMessageInfo = xe),
      (l.getNewsletterAdminInviteInfo = $e),
      (l.getNewsletterFollowerInviteInfo = Pe),
      (l.getIsGroupStatus = Me),
      (l.getIsNewsletterStatus = we),
      (l.hasReshareAttribution = Fe),
      (l.getHasReshareAttribution = Oe),
      (l.getIsNewsletterStatusReshare = Be),
      (l.getBizSource = We),
      (l.isBizSourceFromMarketingMessage = qe),
      (l.getIsMarketingMessage = Ue),
      (l.getIsReply = Ve),
      (l.getIsOpus = He),
      (l.getRcatString = Ge),
      (l.getHasMentionOfMe = ze),
      (l.getLocal = je),
      (l.getNonJidMentions = Qe),
      (l.getHasMentionAll = Xe),
      (l.getIsImportantMessage = Ye),
      (l.getBotPluginReferenceIndex = Je),
      (l.getIsUnreadType = Ze),
      (l.getIs1to1Msg = et),
      (l.getIsGroupMsg = tt),
      (l.getIsNewsletterMsg = nt),
      (l.getHasOriginatedFromNewsletter = rt),
      (l.getIsStatus = ot),
      (l.getIsNotification = at),
      (l.getIsSentByMe = it),
      (l.getSender = lt),
      (l.getOriginalSender = st),
      (l.getIsReaction = ut),
      (l.getIsPollVote = ct),
      (l.getIsFutureproof = dt),
      (l.getIsStickerMsg = mt),
      (l.getIsAiSticker = _t),
      (l.getIsCarouselCard = ft),
      (l.getHasThumbList = ht),
      (l.getIsKept = yt),
      (l.getIsUnkept = Ct),
      (l.getIsPSA = bt),
      (l.getIsIAS = vt),
      (l.getIsAiHub = St),
      (l.getIsCAPISupport = Rt),
      (l.getIsProductListMessage = Lt),
      (l.getTitle = Et),
      (l.getBody = kt),
      (l.getCaption = It),
      (l.getComment = Tt),
      (l.getPollName = Dt),
      (l.getPollOptions = xt),
      (l.getHasContributedPollOptions = $t),
      (l.getPollSelectableOptionsCount = Pt),
      (l.getPollInvalidated = Nt),
      (l.getPollContentType = Mt),
      (l.getPollType = wt),
      (l.getPollCorrectOptionIndex = At),
      (l.getPollEndTime = Ft),
      (l.getPollHideVoterNames = Ot),
      (l.getPollAllowAddOption = Bt),
      (l.getPollVotesSnapshot = Wt),
      (l.getQuarantineExtractedText = qt),
      (l.getEventName = Ut),
      (l.getEventDescription = Vt),
      (l.getEventStartTime = Ht),
      (l.getEventEndTime = Gt),
      (l.getEventJoinLink = zt),
      (l.getEventLocation = jt),
      (l.getIsEventCanceled = Kt),
      (l.getEventInvalidated = Qt),
      (l.getEventIsScheduledCall = Xt),
      (l.getEventExtraGuestsAllowed = Yt),
      (l.getNativeFlowName = Jt),
      (l.getNativeFlowButtons = Zt),
      (l.getInteractivePayload = en),
      (l.getGalaxyFlowDisabled = tn),
      (l.getSignupCtaTapped = nn),
      (l.getPaymentCurrency = rn),
      (l.getPaymentAmount1000 = on),
      (l.getPaymentMessageReceiverJid = an),
      (l.getPaymentStatus = ln),
      (l.getPaymentTxnStatus = sn),
      (l.getPaymentNoteMsg = un),
      (l.getPaymentRequestMessageKey = cn),
      (l.getPaymentExpiryTimestamp = dn),
      (l.getPaymentInviteServiceType = mn),
      (l.getIsFromTemplate = pn),
      (l.getIsLive = _n),
      (l.getIsDynamicReplyButtonsMsg = fn),
      (l.getDynamicReplyButtons = gn),
      (l.getIsEphemeral = hn),
      (l.getIsEdited = yn),
      (l.getIsEditProtocolMsg = Cn),
      (l.getStatusCanvasColor = bn),
      (l.getIsUserCreatedType = vn),
      (l.getIsSentByMeFromWeb = Sn),
      (l.getRevokeSender = Rn),
      (l.getIsRevokedByMe = Ln),
      (l.getIsInternational = En),
      (l.getIsBizNotification = kn),
      (l.getIsMedia = In),
      (l.getIsForwarded = Tn),
      (l.getForwardingScore = Dn),
      (l.getNumTimesForwarded = xn),
      (l.FREQUENTLY_FORWARDED_SENTINEL = $n),
      (l.getIsFrequentlyForwarded = Pn),
      (l.getIsQuestion = Nn),
      (l.getIsSpoiler = Mn),
      (l.getQuestionResponsesCount = wn),
      (l.getReadQuestionResponsesCount = An),
      (l.getUnreadQuestionResponsesCount = Fn),
      (l.getQuestionReplyQuotedMessage = On),
      (l.getIsQuestionReply = Bn),
      (l.getNewsletterAdminProfile = Wn),
      (l.getIsBotInvoke = qn),
      (l.getShouldDisplayAsForwarded = Un),
      (l.getInvis = Vn),
      (l.getIsNewMsg = Hn),
      (l.getIsSendFailure = Gn),
      (l.getIsFailed = zn),
      (l.getVcard = jn),
      (l.getDescription = Kn),
      (l.getMatchedText = Qn),
      (l.getThumbnail = Xn),
      (l.getThumbnailHQ = Yn),
      (l.getMusicArtwork = Jn),
      (l.getRichPreviewType = Zn),
      (l.getPaymentLinkMetadata = er),
      (l.getFaviconMMSMetadata = tr),
      (l.getPaymentLinkPreviewMetaTags = nr),
      (l.getHasPaymentLinkTrustSignals = rr),
      (l.getLinkPreview = or),
      (l.getSupportsMessageFooter = ar),
      (l.getSupportsMessageFooterLinks = ir),
      (l.INITIAL_PAGE_SIZE = lr),
      (l.getInitialPageSize = sr),
      (l.getIsInitialE2ENotification = ur),
      (l.getIsDisappearingModeSystemMessage = cr),
      (l.getKicKey = dr),
      (l.getKicSender = mr),
      (l.getEphemeralExpirationTimestamp = pr),
      (l.getIsRevoke = _r),
      (l.getRevokeDuration = fr),
      (l.getWamEditType = gr),
      (l.getWamDisappearingModeTrigger = hr),
      (l.getWamDisappearingModeInitiatedByMe = yr),
      (l.getWamDisappearingModeInitiator = Cr),
      (l.getInviteCode = br),
      (l.getInviteCodeExp = vr),
      (l.getInviteGrp = Sr),
      (l.getInviteGrpName = Rr),
      (l.getInviteGrpJpegThum = Lr),
      (l.getInviteGrpType = Er),
      (l.getIsGroupsV4InviteExpired = kr),
      (l.getIsNewsletterAdminInviteExpired = Ir),
      (l.getProductHeaderImageRejected = Tr),
      (l.getProductListHeaderImage = Dr),
      (l.getIsAckPlayable = xr),
      (l.getHasReaction = $r),
      (l.getRecipients = Pr),
      (l.getTemplateParams = Nr),
      (l.getClientUrl = Mr),
      (l.getLoc = wr),
      (l.getLat = Ar),
      (l.getLng = Fr),
      (l.getShareDuration = Or),
      (l.getFinalLat = Br),
      (l.getFinalLng = Wr),
      (l.getStar = qr),
      (l.getCurrencyCode = Ur),
      (l.getPriceAmount1000 = Vr),
      (l.getSalePriceAmount1000 = Hr),
      (l.getIsVcardOverMmsDocument = Gr),
      (l.getInteractiveAnnotations = zr),
      (l.getMusicAnnotations = jr),
      (l.getHasEmbeddedMessagesAnnotation = Kr),
      (l.getFirstMusicAnnotation = Qr),
      (l.isStatusWithMusic = Xr),
      (l.isNewsletterMsgWithMusic = Yr),
      (l.isStatusWithEmbeddedMessages = Jr),
      (l.getFirstMusicAnnotationEmbeddedContent = Zr),
      (l.getMessageSecret = eo),
      (l.getBroadcast = to),
      (l.getVcardList = no),
      (l.getVcardFormattedName = ro),
      (l.getLabels = oo),
      (l.getAgentId = ao),
      (l.getUrl = io),
      (l.getRetailerId = lo),
      (l.getBusinessOwnerJid = so),
      (l.getProductId = uo),
      (l.getProductImageCount = co),
      (l.getIsMdHistoryMsg = mo),
      (l.getCampaignId = po),
      (l.getFilename = _o),
      (l.getSmbClientCampaignId = fo),
      (l.getIsCaptionByUser = go),
      (l.getDoNotPlayInline = ho),
      (l.getThumbnailDirectPath = yo),
      (l.getThumbnailHeight = Co),
      (l.getThumbnailWidth = bo),
      (l.getOrderTitle = vo),
      (l.getItemCount = So),
      (l.getTotalAmount1000 = Ro),
      (l.getTotalCurrencyCode = Lo),
      (l.getFutureproofType = Eo),
      (l.getFutureproofSubtype = ko),
      (l.getEphemeralOutOfSync = Io),
      (l.getIsAvatar = To),
      (l.getBizPrivacyStatus = Do),
      (l.getVerifiedBizName = xo),
      (l.getMediaKey = $o),
      (l.getMessage = Po),
      (l.getSize = No),
      (l.getMediaPngThumbnail = Mo),
      (l.getHostedBizEncStateMismatch = wo),
      (l.getIsBotFutureproofPlaceholder = Ao),
      (l.getIsViewOncePlaceholder = Fo),
      (l.getIsBotQuery = Oo),
      (l.getIsCoexV2Relay = Bo),
      (l.getIsBizBot1pMessage = Wo),
      (l.getIsBizBot1pResponse = qo),
      (l.getIsBizBot3pResponse = Uo),
      (l.getBotPluginSearchProvider = Vo),
      (l.getBotPluginSearchUrl = Ho),
      (l.getBotResponseTargetId = Go),
      (l.getBotPluginSearchQuery = zo),
      (l.getBotPluginType = jo),
      (l.getBotMessageDisclaimerText = Ko),
      (l.getBotModeSelection = Qo),
      (l.getBotModeOverride = Xo),
      (l.getRichResponse = Yo),
      (l.getUnifiedResponse = Jo),
      (l.getIsBotSearchResponse = Zo),
      (l.getIsMetaBotResponse = ea),
      (l.isMetaBotResponseToMyInvoke = ta),
      (l.getIsMetaBotInvokeResponse = na),
      (l.getIsBotResponse = ra),
      (l.getShouldShowEditedIndicator = ia),
      (l.getIsBotFeedbackMessage = la),
      (l.getHsmTag = sa),
      (l.getIsAuthenticationMessage = ua),
      (l.getIsMarketingTemplateTag = ca),
      (l.getBotRespOrInvocationRevokeBotWid = da),
      (l.getIsRevokeForMsgFromOrDeliveredToBot = ma),
      (l.getIsBotPluginCarouselMsg = pa),
      (l.getBotPluginMaybeParent = _a),
      (l.getBotReelPluginThumbnailCdnUrl = fa),
      (l.getIsBizContentPlaceholder = ga),
      (l.getStatusMentioned = ha),
      (l.getIsWamoSub = ya),
      (l.getHasPaidPartnershipLabel = Ca),
      (l.getAiProvenance = ba),
      (l.getIsAiContent = va),
      (l.getIsVideoCall = Ra),
      (l.getCallId = La),
      (l.getCallOutcome = Ea),
      (l.getCallSilenceReason = ka),
      (l.getIsCallSilenced = Ia),
      (l.getIsMissedCall = Ta),
      (l.getCallDuration = Da),
      (l.getIsVisibleCallLog = xa),
      (l.getBytesSent = $a),
      (l.getBytesReceived = Pa),
      (l.getCallParticipants = Ma),
      (l.getIsCallLink = wa),
      (l.getCallLinkToken = Aa),
      (l.getTerminatedByDeviceSwitch = Fa),
      (l.getSelfOtherDeviceConnected = Oa),
      (l.getIsAdHocGroupCall = Ba),
      (l.getIsGroupCall = Wa),
      (l.getFinalCallOutcome = qa),
      (l.getGroupHistoryBundleMessageKeyDeprecated = Ua),
      (l.getGroupHistoryBundleMetadata = Va),
      (l.getGroupHistoryIndividualMessageInfo = Ha),
      (l.getGroupHistoryBundleMessageKey = Ga),
      (l.getIsEditedAfterReceivedAsHistory = za),
      (l.getGroupHistoryBundleSender = ja),
      (l.getIsGroupHistoryMessageInOwnChat = Ka),
      (l.isRealMessage = Qa));
  },
  98,
);
