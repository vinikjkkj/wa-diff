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
    "WAWebUserUtils",
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
      T = _("notifyName"),
      D = _("broadcastId"),
      x = _("qrUrl"),
      $ = p(
        function (e) {
          var t = e[0];
          return t != null && t.startsWith(C);
        },
        [x],
      ),
      P = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return n != null ? n : t.remote;
        },
        [L, D],
      ),
      N = _("viewMode"),
      M = _("author"),
      w = _("metaFrom"),
      A = _("senderWithDevice"),
      F = _("ack"),
      O = _("isScheduledMsg"),
      B = _("viewCount"),
      W = _("forwardsCount"),
      q = _("viewed"),
      U = _("originalSelfAuthor"),
      V = _("kicState"),
      H = _("kicTimestampMs"),
      G = _("list"),
      z = _("latestEditMsgKey"),
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
                return o("WAWebUserUtils").isMeAccount(b(e));
              });
        },
        [ae],
      ),
      je = _("local", { default: !1 }),
      Ke = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n ? o("WAWebUserUtils").isMeAccount(b(n)) : !1;
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
            case "instant_image":
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
        [v, Je, N, S],
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
              ? o("WAWebUserUtils").isMeAccount(r)
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
              ? o("WAWebUserUtils").getMeUserOrThrow()
              : c instanceof r("WAWebWid")
                ? c
                : null;
          var m = a || i || (d instanceof r("WAWebWid") && d.isBot()) ? d : c;
          return m instanceof r("WAWebWid") ? m : null;
        },
        [L, it, tt, ot, Me, we, nt, I, M],
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
        [U, lt, v],
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
            t === o("WAWebMsgType").MSG_TYPE.UNKNOWN ||
            (t === o("WAWebMsgType").MSG_TYPE.PAYMENT && n === "futureproof")
          );
        },
        [v, S],
      ),
      dt = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebMsgType").MSG_TYPE.STICKER;
        },
        [v],
      ),
      mt = _("isAiSticker"),
      pt = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n === !0;
        },
        [dt, mt],
      ),
      _t = _("isCarouselCard", { default: !1 }),
      ft = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebMsgType").MSG_TYPE.DOCUMENT;
        },
        [v],
      ),
      gt = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return !t && !n && !r;
        },
        [de, dt, ft],
      ),
      ht = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebEphemeralConstants").KeepInChatState.KEPT;
        },
        [V],
      ),
      yt = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebEphemeralConstants").KeepInChatState.UNKEPT;
        },
        [V],
      ),
      Ct = p(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isPSA(t.remote);
        },
        [L],
      ),
      bt = p(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isIAS(t.remote);
        },
        [L],
      ),
      vt = p(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isAiHub(t.remote);
        },
        [L],
      ),
      St = p(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isCAPISupportAccount(t.remote);
        },
        [L],
      ),
      Rt = p(
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
        [v, G],
      ),
      Lt = _("title"),
      Et = _("body", { default: "" }),
      kt = _("caption"),
      It = _("comment"),
      Tt = _("pollName", { default: "" }),
      Dt = _("pollOptions"),
      xt = p(
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
        [Dt],
      ),
      $t = _("pollSelectableOptionsCount", { default: 0 }),
      Pt = _("pollInvalidated", { default: !1 }),
      Nt = _("pollType", {
        default: o("WAWebPollCreationUtils").PollType.POLL,
      }),
      Mt = _("correctOptionIndex"),
      wt = _("pollEndTime"),
      At = _("pollHideVoterNames"),
      Ft = _("pollVotesSnapshot"),
      Ot = _("quarantineExtractedText"),
      Bt = _("eventName", { default: "" }),
      Wt = _("eventDescription"),
      qt = _("eventStartTime", { default: 0 }),
      Ut = _("eventEndTime"),
      Vt = _("eventJoinLink"),
      Ht = _("eventLocation"),
      Gt = _("isEventCanceled", { default: !1 }),
      zt = _("eventInvalidated", { default: !1 }),
      jt = _("eventIsScheduledCall", { default: !1 }),
      Kt = _("nativeFlowName"),
      Qt = _("nativeFlowButtons"),
      Xt = _("interactivePayload"),
      Yt = _("galaxyFlowDisabled", { default: !1 }),
      Jt = _("signupCtaTapped", { default: !1 }),
      Zt = _("paymentCurrency", { default: "" }),
      en = _("paymentAmount1000", { default: 0 }),
      tn = _("paymentMessageReceiverJid"),
      nn = _("paymentStatus"),
      rn = _("paymentTxnStatus"),
      on = _("paymentNoteMsg"),
      an = _("paymentExpiryTimestamp"),
      ln = _("paymentInviteServiceType"),
      sn = _("isFromTemplate", { default: !1 }),
      un = _("isLive", { default: !1 }),
      cn = _("isDynamicReplyButtonsMsg", { default: !1 }),
      dn = _("dynamicReplyButtons"),
      mn = p(
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
      pn = p(
        function (e) {
          var t = e[0];
          return t != null;
        },
        [z],
      ),
      _n = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.PROTOCOL && n === "message_edit"
          );
        },
        [v, S],
      ),
      fn = p(
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
      gn = p(
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
      hn = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t.fromMe && n && r;
        },
        [L, je, gn],
      ),
      yn = _("revokeSender"),
      Cn = p(
        function (e) {
          var t = e[0];
          return t != null && o("WAWebUserUtils").isMeAccount(t);
        },
        [yn],
      ),
      bn = p(
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
      vn = p(
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
      Sn = p(
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
      Rn = _("isForwarded", { default: !1 }),
      Ln = _("forwardingScore"),
      En = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return n == null ? (t ? 1 : 0) : n || 0;
        },
        [Rn, Ln],
      ),
      kn = 127,
      In = p(
        function (e) {
          var t = e[0];
          return t >= kn;
        },
        [En],
      ),
      Tn = _("isQuestion", { default: !1 }),
      Dn = _("isSpoiler", { default: !1 }),
      xn = _("questionResponsesCount"),
      $n = _("myQuestionResponsesCount", { default: 0 }),
      Pn = _("readQuestionResponsesCount"),
      Nn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t - n;
        },
        [xn, Pn],
      ),
      Mn = _("questionReplyQuotedMessage"),
      wn = p(
        function (e) {
          var t = e[0];
          return t != null;
        },
        [Mn],
      ),
      An = _("newsletterAdminProfile"),
      Fn = p(
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
      On = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            o = e[3];
          return t || n || o || !r;
        },
        [Rn, rt, it, Fn],
      ),
      Bn = _("invis", { default: !1 }),
      Wn = _("isNewMsg", { default: !1 }),
      qn = _("isSendFailure", { default: !1 }),
      Un = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (t && n != null && n < o("WAWebAck").ACK.CLOCK) || r;
        },
        [it, F, qn],
      ),
      Vn = p(
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
        [v, Et],
      ),
      Hn = _("description"),
      Gn = _("matchedText", { default: "" }),
      zn = _("thumbnail"),
      jn = _("thumbnailHQ"),
      Kn = _("musicArtwork"),
      Qn = _("musicData"),
      Xn = _("richPreviewType", {
        default: o("WAWebProtobufsE2E.pb")
          .Message$ExtendedTextMessage$PreviewType.NONE,
      }),
      Yn = _("paymentLinkMetadata", { default: null }),
      Jn = _("faviconMMSMetadata", { default: null }),
      Zn = p(
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
        [Yn],
      ),
      er = p(
        function (e) {
          var t = e[0];
          return (
            (t == null ? void 0 : t.isBusinessVerified) === !0 &&
            (t == null ? void 0 : t.providerName) != null
          );
        },
        [Zn],
      ),
      tr = p(
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
        [Et, Lt, Hn, Gn],
      ),
      nr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n;
        },
        [cn, sn],
      ),
      rr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            n ||
            t === o("WAWebMsgType").MSG_TYPE.LIST ||
            t === o("WAWebMsgType").MSG_TYPE.INTERACTIVE
          );
        },
        [v, cn],
      ),
      or = 768,
      ar = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = 308;
          return n != null && n.isBot() ? 1 / 0 : t ? r : or;
        },
        [In, lt],
      ),
      ir = p(
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
      lr = p(
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
      sr = _("kicKey"),
      ur = p(
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
        [sr, tt],
      ),
      cr = p(
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
      dr = p(
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
      mr = _("revokeDuration"),
      pr = p(
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
        [v, S, dr, pn],
      ),
      _r = p(
        function (e) {
          var t = e[0];
          if (t != null)
            return o("WAWebEphemeralityWAMUtils").getWamDisappearingModeTrigger(
              t,
            );
        },
        [ve],
      ),
      fr = p(
        function (e) {
          var t = e[0];
          if (t != null)
            return o(
              "WAWebEphemeralityWAMUtils",
            ).getWamDisappearingModeInitiatedByMe(t);
        },
        [Se],
      ),
      gr = p(
        function (e) {
          var t = e[0];
          if (t != null)
            return o(
              "WAWebEphemeralityWAMUtils",
            ).getWamDisappearingModeInitiator(t);
        },
        [be],
      ),
      hr = _("inviteCode", { default: "" }),
      yr = _("inviteCodeExp", { default: "" }),
      Cr = _("inviteGrp", { default: "" }),
      br = _("inviteGrpName"),
      vr = _("inviteGrpJpegThum"),
      Sr = _("inviteGrpType"),
      Rr = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          if (t !== o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE) return !1;
          if (!n) return !0;
          var a = Date.now() / 1e3;
          return parseInt(String(a), 10) >= parseInt(r, 10);
        },
        [v, hr, yr],
      ),
      Lr = p(
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
      Er = _("productHeaderImageRejected", { default: !1 }),
      kr = p(
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
        [Er, G],
      ),
      Ir = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.PTT ||
            t === o("WAWebMsgType").MSG_TYPE.PTV ||
            t === o("WAWebMsgType").MSG_TYPE.INSTANT_IMAGE ||
            (n && t === o("WAWebMsgType").MSG_TYPE.AUDIO)
          );
        },
        [v, rt],
      ),
      Tr = _("hasReaction", { default: !1 }),
      Dr = _("recipients", {
        getDefault: function () {
          return [];
        },
      }),
      xr = _("templateParams", {
        getDefault: function () {
          return [];
        },
      }),
      $r = _("clientUrl", { default: "" }),
      Pr = _("loc", { default: "" }),
      Nr = _("lat"),
      Mr = _("lng"),
      wr = _("shareDuration"),
      Ar = _("finalLat"),
      Fr = _("finalLng"),
      Or = _("star", { default: !1 }),
      Br = _("currencyCode"),
      Wr = _("priceAmount1000"),
      qr = _("salePriceAmount1000"),
      Ur = _("isVcardOverMmsDocument", { default: !1 }),
      Vr = _("interactiveAnnotations"),
      Hr = p(
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
        [Vr],
      ),
      Gr = p(
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
        [Vr],
      ),
      zr = p(
        function (e) {
          var t = e[0];
          return t == null ? null : t[0];
        },
        [Hr],
      ),
      jr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n != null && n.length > 0;
        },
        [ot, Hr],
      ),
      Kr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n != null;
        },
        [nt, zr],
      ),
      Qr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n;
        },
        [ot, Gr],
      ),
      Xr = p(
        function (e) {
          var t,
            n = e[0];
          if (n == null) return null;
          var r = (t = n.embeddedContent) == null ? void 0 : t.embeddedMusic;
          return r == null
            ? null
            : o("WAWebMusicParsingUtils").toMusicMetadata(r);
        },
        [zr],
      ),
      Yr = _("messageSecret"),
      Jr = _("broadcast", { default: !1 }),
      Zr = _("vcardList", {
        getDefault: function () {
          return [];
        },
      }),
      eo = _("vcardFormattedName"),
      to = _("labels", {
        getDefault: function () {
          return [];
        },
      }),
      no = _("agentId"),
      ro = _("url"),
      oo = _("retailerId"),
      ao = _("businessOwnerJid"),
      io = _("productId"),
      lo = _("productImageCount"),
      so = _("isMdHistoryMsg", { default: !1 }),
      uo = _("campaignId"),
      co = _("pmCampaignId"),
      mo = _("filename"),
      po = _("smbClientCampaignId"),
      _o = _("businessInteractionPills"),
      fo = _("isCaptionByUser", { default: !1 }),
      go = _("doNotPlayInline"),
      ho = _("thumbnailDirectPath"),
      yo = _("thumbnailHeight"),
      Co = _("thumbnailWidth"),
      bo = _("orderTitle"),
      vo = _("itemCount"),
      So = _("totalAmount1000"),
      Ro = _("totalCurrencyCode"),
      Lo = _("futureproofType"),
      Eo = _("futureproofSubtype"),
      ko = _("ephemeralOutOfSync"),
      Io = _("isAvatar"),
      To = _("bizPrivacyStatus"),
      Do = _("verifiedBizName"),
      xo = _("mediaKey"),
      $o = _("message", { default: "" }),
      Po = _("size", { default: 0 }),
      No = _("mediaPngThumbnail"),
      Mo = _("hostedBizEncStateMismatch"),
      wo = _("aeaAutoUpgrade"),
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
        [A, w],
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
      Qo = _("richResponse"),
      Xo = _("unifiedResponse"),
      Yo = _("unifiedResponseMutationMediaList"),
      Jo = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t != null && n != null && r != null;
        },
        [Vo, Ho, zo],
      ),
      Zo = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !n && (t == null ? void 0 : t.isBot()) === !0;
        },
        [lt, Bo],
      ),
      ea = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !!(t && o("WAWebUserUtils").isMeAccount(n));
        },
        [Zo, Ee],
      ),
      ta = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return n && !t.remote.isBot();
        },
        [L, Zo],
      ),
      na = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t || n || r;
        },
        [Zo, qo, Uo],
      ),
      ra = p(
        function (e) {
          var t = e[0];
          return !t.fromMe && t.remote.isAiHub();
        },
        [L],
      ),
      oa = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t || n || r;
        },
        [Zo, Uo, ra],
      ),
      aa = p(
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
        [pn, xt, oa, Wo, Te],
      ),
      ia = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.PROTOCOL && n === "bot_feedback"
          );
        },
        [v, S],
      ),
      la = _("hsmTag"),
      sa = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebBusinessHSMTypes").HSM_TAG_TYPE.AUTHENTICATION;
        },
        [la],
      ),
      ua = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebBusinessHSMTypes").HSM_TAG_TYPE.MARKETING;
        },
        [la],
      ),
      ca = _("botRespOrInvocationRevokeBotWid"),
      da = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !!(t != null && t.isBot() && n);
        },
        [ca, dr],
      ),
      ma = p(
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
        [jo, Zo],
      ),
      pa = _("botPluginMaybeParent"),
      _a = _("botReelPluginThumbnailCdnUrl"),
      fa = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebMsgType").MSG_TYPE.BIZ_CONTENT_PLACEHOLDER;
        },
        [v],
      ),
      ga = _("statusMentioned"),
      ha = _("isWamoSub"),
      ya = _("hasPaidPartnershipLabel"),
      Ca = _("aiProvenance"),
      ba = p(
        function (e) {
          var t = e[0];
          return o("WAWebMsgAIProvenance").hasAIProvenanceSignal(t);
        },
        [Ca],
      ),
      va = _("isVideoCall"),
      Sa = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (
            t === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
            (n === "miss_video" || n === "miss_group_video" || r === !0)
          );
        },
        [v, S, va],
      ),
      Ra = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t === o("WAWebMsgType").MSG_TYPE.CALL_LOG ? n.id : null;
        },
        [v, L],
      ),
      La = _("callOutcome"),
      Ea = _("callSilenceReason"),
      ka = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (
            t === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
            (n === "silence" || r != null)
          );
        },
        [v, S, Ea],
      ),
      Ia = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            a = e[3];
          return (
            t === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
            !o("WAWebUserUtils").isMeAccount(a) &&
            (n === "miss_video" ||
              n === "miss_group_video" ||
              n === "miss" ||
              n === "miss_group" ||
              r == null ||
              !y.includes(r))
          );
        },
        [v, S, La, lt],
      ),
      Ta = _("callDuration"),
      Da = p(
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
        [v, N, Ta],
      ),
      xa = _("bytesSent"),
      $a = _("bytesReceived"),
      Pa = _("callParticipants"),
      Na = p(
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
        [Pa],
      ),
      Ma = _("isCallLink"),
      wa = _("callLinkToken"),
      Aa = _("selfOtherDeviceConnected"),
      Fa = _("isVoiceChat"),
      Oa = _("screenedElsewhere"),
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
                  return !o("WAWebUserUtils").isMeAccount(e.participant);
                }) > 1))
          );
        },
        [tt, Na, wa],
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
      Va = _("groupHistoryLastCountedMessageTimestamp", { default: null }),
      Ha = _("groupHistoryBundleMetadata"),
      Ga = _("groupHistoryIndividualMessageInfo"),
      za = p(
        function (e) {
          var t,
            n = e[0],
            r = e[1];
          return (t = n == null ? void 0 : n.bundleMessageKey) != null ? t : r;
        },
        [Ga, Ua],
      ),
      ja = p(
        function (e) {
          var t = e[0];
          return t == null ? void 0 : t.isEditedAfterReceivedAsHistory;
        },
        [Ga],
      ),
      Ka = p(
        function (e) {
          var t = e[0];
          return t == null ? void 0 : t.bundleSender;
        },
        [Ga],
      ),
      Qa = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t != null && r("WAWebWid").equals(t.remote, n);
        },
        [za, P],
      );
    function Xa(e) {
      var t =
        v(e) === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE &&
        o("WAWebUserUtils").isMeAccount(I(e));
      return (
        !t &&
        !ir(e) &&
        v(e) !== o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
        !vn(e) &&
        !["change_number", "change_username", "masked_thread_created"].includes(
          S(e),
        ) &&
        !lr(e)
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
      (l.getNotifyName = T),
      (l.getBroadcastId = D),
      (l.getHasPaymentQr = $),
      (l.getRemote = P),
      (l.getAuthor = M),
      (l.getMetaFrom = w),
      (l.getSenderWithDevice = A),
      (l.getAck = F),
      (l.getIsScheduledMsg = O),
      (l.getViewCount = B),
      (l.getForwardsCount = W),
      (l.getViewed = q),
      (l.getOriginalSelfAuthor = U),
      (l.getKicTimestampMs = H),
      (l.getList = G),
      (l.getLatestEditMsgKey = z),
      (l.getEphemeralDuration = j),
      (l.getAfterReadDuration = K),
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
      (l.getRcat = ce),
      (l.getIsViewOnce = de),
      (l.getIsGif = me),
      (l.getGifAttribution = pe),
      (l.getCtwaContext = _e),
      (l.getThreadIds = fe),
      (l.getMimetype = ge),
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
      (l.getIsFutureproof = ct),
      (l.getIsStickerMsg = dt),
      (l.getIsAiSticker = pt),
      (l.getIsCarouselCard = _t),
      (l.getHasThumbList = gt),
      (l.getIsKept = ht),
      (l.getIsUnkept = yt),
      (l.getIsPSA = Ct),
      (l.getIsIAS = bt),
      (l.getIsAiHub = vt),
      (l.getIsCAPISupport = St),
      (l.getIsProductListMessage = Rt),
      (l.getTitle = Lt),
      (l.getBody = Et),
      (l.getCaption = kt),
      (l.getComment = It),
      (l.getPollName = Tt),
      (l.getPollOptions = Dt),
      (l.getHasContributedPollOptions = xt),
      (l.getPollSelectableOptionsCount = $t),
      (l.getPollInvalidated = Pt),
      (l.getPollType = Nt),
      (l.getPollCorrectOptionIndex = Mt),
      (l.getPollEndTime = wt),
      (l.getPollHideVoterNames = At),
      (l.getPollVotesSnapshot = Ft),
      (l.getQuarantineExtractedText = Ot),
      (l.getEventName = Bt),
      (l.getEventDescription = Wt),
      (l.getEventStartTime = qt),
      (l.getEventEndTime = Ut),
      (l.getEventJoinLink = Vt),
      (l.getEventLocation = Ht),
      (l.getIsEventCanceled = Gt),
      (l.getEventInvalidated = zt),
      (l.getEventIsScheduledCall = jt),
      (l.getNativeFlowName = Kt),
      (l.getNativeFlowButtons = Qt),
      (l.getInteractivePayload = Xt),
      (l.getGalaxyFlowDisabled = Yt),
      (l.getSignupCtaTapped = Jt),
      (l.getPaymentCurrency = Zt),
      (l.getPaymentAmount1000 = en),
      (l.getPaymentMessageReceiverJid = tn),
      (l.getPaymentStatus = nn),
      (l.getPaymentTxnStatus = rn),
      (l.getPaymentNoteMsg = on),
      (l.getPaymentExpiryTimestamp = an),
      (l.getPaymentInviteServiceType = ln),
      (l.getIsFromTemplate = sn),
      (l.getIsLive = un),
      (l.getIsDynamicReplyButtonsMsg = cn),
      (l.getDynamicReplyButtons = dn),
      (l.getIsEphemeral = mn),
      (l.getIsEdited = pn),
      (l.getIsEditProtocolMsg = _n),
      (l.getStatusCanvasColor = fn),
      (l.getIsUserCreatedType = gn),
      (l.getIsSentByMeFromWeb = hn),
      (l.getRevokeSender = yn),
      (l.getIsRevokedByMe = Cn),
      (l.getIsInternational = bn),
      (l.getIsBizNotification = vn),
      (l.getIsMedia = Sn),
      (l.getIsForwarded = Rn),
      (l.getForwardingScore = Ln),
      (l.getNumTimesForwarded = En),
      (l.FREQUENTLY_FORWARDED_SENTINEL = kn),
      (l.getIsFrequentlyForwarded = In),
      (l.getIsQuestion = Tn),
      (l.getIsSpoiler = Dn),
      (l.getMyQuestionResponsesCount = $n),
      (l.getUnreadQuestionResponsesCount = Nn),
      (l.getQuestionReplyQuotedMessage = Mn),
      (l.getIsQuestionReply = wn),
      (l.getNewsletterAdminProfile = An),
      (l.getShouldDisplayAsForwarded = On),
      (l.getInvis = Bn),
      (l.getIsNewMsg = Wn),
      (l.getIsSendFailure = qn),
      (l.getIsFailed = Un),
      (l.getVcard = Vn),
      (l.getDescription = Hn),
      (l.getMatchedText = Gn),
      (l.getThumbnail = zn),
      (l.getThumbnailHQ = jn),
      (l.getMusicArtwork = Kn),
      (l.getMusicData = Qn),
      (l.getRichPreviewType = Xn),
      (l.getPaymentLinkMetadata = Yn),
      (l.getFaviconMMSMetadata = Jn),
      (l.getPaymentLinkPreviewMetaTags = Zn),
      (l.getHasPaymentLinkTrustSignals = er),
      (l.getLinkPreview = tr),
      (l.getSupportsMessageFooter = nr),
      (l.getSupportsMessageFooterLinks = rr),
      (l.INITIAL_PAGE_SIZE = or),
      (l.getInitialPageSize = ar),
      (l.getIsInitialE2ENotification = ir),
      (l.getIsDisappearingModeSystemMessage = lr),
      (l.getKicSender = ur),
      (l.getEphemeralExpirationTimestamp = cr),
      (l.getIsRevoke = dr),
      (l.getRevokeDuration = mr),
      (l.getWamEditType = pr),
      (l.getWamDisappearingModeTrigger = _r),
      (l.getWamDisappearingModeInitiatedByMe = fr),
      (l.getWamDisappearingModeInitiator = gr),
      (l.getInviteCode = hr),
      (l.getInviteCodeExp = yr),
      (l.getInviteGrp = Cr),
      (l.getInviteGrpName = br),
      (l.getInviteGrpJpegThum = vr),
      (l.getInviteGrpType = Sr),
      (l.getIsGroupsV4InviteExpired = Rr),
      (l.getIsNewsletterAdminInviteExpired = Lr),
      (l.getProductListHeaderImage = kr),
      (l.getIsAckPlayable = Ir),
      (l.getHasReaction = Tr),
      (l.getRecipients = Dr),
      (l.getTemplateParams = xr),
      (l.getClientUrl = $r),
      (l.getLoc = Pr),
      (l.getLat = Nr),
      (l.getLng = Mr),
      (l.getShareDuration = wr),
      (l.getFinalLat = Ar),
      (l.getFinalLng = Fr),
      (l.getStar = Or),
      (l.getCurrencyCode = Br),
      (l.getPriceAmount1000 = Wr),
      (l.getSalePriceAmount1000 = qr),
      (l.getIsVcardOverMmsDocument = Ur),
      (l.getInteractiveAnnotations = Vr),
      (l.getFirstMusicAnnotation = zr),
      (l.isStatusWithMusic = jr),
      (l.isNewsletterMsgWithMusic = Kr),
      (l.isStatusWithEmbeddedMessages = Qr),
      (l.getFirstMusicAnnotationEmbeddedContent = Xr),
      (l.getMessageSecret = Yr),
      (l.getBroadcast = Jr),
      (l.getVcardList = Zr),
      (l.getVcardFormattedName = eo),
      (l.getLabels = to),
      (l.getAgentId = no),
      (l.getUrl = ro),
      (l.getRetailerId = oo),
      (l.getBusinessOwnerJid = ao),
      (l.getProductId = io),
      (l.getProductImageCount = lo),
      (l.getIsMdHistoryMsg = so),
      (l.getCampaignId = uo),
      (l.getPmCampaignId = co),
      (l.getFilename = mo),
      (l.getSmbClientCampaignId = po),
      (l.getBusinessInteractionPills = _o),
      (l.getIsCaptionByUser = fo),
      (l.getDoNotPlayInline = go),
      (l.getThumbnailDirectPath = ho),
      (l.getThumbnailHeight = yo),
      (l.getThumbnailWidth = Co),
      (l.getOrderTitle = bo),
      (l.getItemCount = vo),
      (l.getTotalAmount1000 = So),
      (l.getTotalCurrencyCode = Ro),
      (l.getFutureproofType = Lo),
      (l.getFutureproofSubtype = Eo),
      (l.getEphemeralOutOfSync = ko),
      (l.getIsAvatar = Io),
      (l.getBizPrivacyStatus = To),
      (l.getVerifiedBizName = Do),
      (l.getMediaKey = xo),
      (l.getMessage = $o),
      (l.getSize = Po),
      (l.getMediaPngThumbnail = No),
      (l.getHostedBizEncStateMismatch = Mo),
      (l.getAeaAutoUpgrade = wo),
      (l.getIsBotFutureproofPlaceholder = Ao),
      (l.getIsViewOncePlaceholder = Fo),
      (l.getIsBotQuery = Oo),
      (l.getIsCoexV2Relay = Bo),
      (l.getIsBizBot1pMessage = Wo),
      (l.getIsBizBot1pResponse = qo),
      (l.getBotPluginSearchProvider = Vo),
      (l.getBotPluginSearchUrl = Ho),
      (l.getBotResponseTargetId = Go),
      (l.getBotPluginSearchQuery = zo),
      (l.getBotPluginType = jo),
      (l.getBotMessageDisclaimerText = Ko),
      (l.getRichResponse = Qo),
      (l.getUnifiedResponse = Xo),
      (l.getUnifiedResponseMutationMediaList = Yo),
      (l.getIsBotSearchResponse = Jo),
      (l.getIsMetaBotResponse = Zo),
      (l.isMetaBotResponseToMyInvoke = ea),
      (l.getIsMetaBotInvokeResponse = ta),
      (l.getIsBotResponse = na),
      (l.getShouldShowEditedIndicator = aa),
      (l.getIsBotFeedbackMessage = ia),
      (l.getHsmTag = la),
      (l.getIsAuthenticationMessage = sa),
      (l.getIsMarketingTemplateTag = ua),
      (l.getIsRevokeForMsgFromOrDeliveredToBot = da),
      (l.getIsBotPluginCarouselMsg = ma),
      (l.getBotPluginMaybeParent = pa),
      (l.getBotReelPluginThumbnailCdnUrl = _a),
      (l.getIsBizContentPlaceholder = fa),
      (l.getStatusMentioned = ga),
      (l.getIsWamoSub = ha),
      (l.getHasPaidPartnershipLabel = ya),
      (l.getAiProvenance = Ca),
      (l.getIsAiContent = ba),
      (l.getIsVideoCall = Sa),
      (l.getCallId = Ra),
      (l.getCallOutcome = La),
      (l.getCallSilenceReason = Ea),
      (l.getIsCallSilenced = ka),
      (l.getIsMissedCall = Ia),
      (l.getCallDuration = Ta),
      (l.getIsVisibleCallLog = Da),
      (l.getBytesSent = xa),
      (l.getBytesReceived = $a),
      (l.getCallParticipants = Na),
      (l.getIsCallLink = Ma),
      (l.getCallLinkToken = wa),
      (l.getSelfOtherDeviceConnected = Aa),
      (l.getIsVoiceChat = Fa),
      (l.getScreenedElsewhere = Oa),
      (l.getIsAdHocGroupCall = Ba),
      (l.getIsGroupCall = Wa),
      (l.getFinalCallOutcome = qa),
      (l.getGroupHistoryLastCountedMessageTimestamp = Va),
      (l.getGroupHistoryBundleMetadata = Ha),
      (l.getGroupHistoryIndividualMessageInfo = Ga),
      (l.getGroupHistoryBundleMessageKey = za),
      (l.getIsEditedAfterReceivedAsHistory = ja),
      (l.getGroupHistoryBundleSender = Ka),
      (l.getIsGroupHistoryMessageInOwnChat = Qa),
      (l.isRealMessage = Xa));
  },
  98,
);
