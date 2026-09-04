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
      fe = _("mimetype"),
      ge = _("filehash"),
      he = _("deprecatedMms3Url"),
      ye = _("waveform"),
      Ce = _("disappearingModeInitiator"),
      be = _("disappearingModeTrigger"),
      ve = _("disappearingModeInitiatedByMe"),
      Se = _("activeBotMsgStreamingInProgress"),
      Re = _("bizBotType"),
      Le = _("botTargetSenderJid"),
      Ee = _("isSupportAIMessage"),
      ke = _("lastBotEditBodyLength"),
      Ie = _("botEditType"),
      Te = _("forwardedNewsletterMessageInfo"),
      De = _("forwardedAiBotMessageInfo"),
      xe = _("newsletterAdminInviteInfo"),
      $e = _("newsletterFollowerInviteInfo"),
      Pe = _("isGroupStatus"),
      Ne = p(
        function (e) {
          var t = e[0];
          return t === !0;
        },
        [Pe],
      ),
      Me = _("isNewsletterStatus", { default: !1 }),
      we = _("statusAttributions");
    function Ae(e) {
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
        [we],
      ),
      Be = _("bizSource");
    function We(e) {
      return e === "smb_promo";
    }
    var qe = p(
        function (e) {
          var t = e[0];
          return We(t);
        },
        [Be],
      ),
      Ue = p(
        function (e) {
          var t = e[0];
          return t != null;
        },
        [le],
      ),
      Ve = p(
        function (e) {
          var t = e[0];
          return o("WAWebMimeTypes").isOpus(t);
        },
        [fe],
      ),
      He = p(
        function (e) {
          var t = e[0];
          return t == null ? null : o("WABase64").encodeB64UrlSafe(t, !0);
        },
        [ce],
      ),
      Ge = p(
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
      ze = _("local", { default: !1 }),
      je = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n ? o("WAWebUserPrefsMeUser").isMeAccount(b(n)) : !1;
        },
        [le, ue],
      ),
      Ke = _("nonJidMentions"),
      Qe = p(
        function (e) {
          var t = e[0];
          return o("WAWebNonJidMentionUtils").hasMentionAll(t);
        },
        [Ke],
      ),
      Xe = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t || n || r;
        },
        [Ge, je, Qe],
      ),
      Ye = _("botPluginReferenceIndex"),
      Je = p(
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
        [v, Ye, P, S],
      ),
      Ze = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.isRegularUser() && n.isRegularUser();
        },
        [I, k],
      ),
      et = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return r("WAWebWid").isGroup(t) || r("WAWebWid").isGroup(n);
        },
        [I, k],
      ),
      tt = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return r("WAWebNewsletterIsNewsletterMsg")({ from: t, to: n });
        },
        [I, k],
      ),
      nt = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n != null;
        },
        [tt, Te],
      ),
      rt = p(
        function (e) {
          var t = e[0],
            n = e[1],
            o = e[2];
          return r("WAWebWid").isStatus(t.remote) || n || o;
        },
        [L, Ne, Me],
      ),
      ot = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return o("WAWebCommonMsgUtils").isNotificationType(t, n);
        },
        [v, S],
      ),
      at = p(
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
        [L, I, ot, v, S],
      ),
      it = p(
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
        [L, at, et, rt, Ne, Me, tt, I, N],
      ),
      lt = p(
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
        [q, it, v],
      ),
      st = p(
        function (e) {
          var t = e[0];
          return (
            t === o("WAWebMsgType").MSG_TYPE.REACTION ||
            t === o("WAWebMsgType").MSG_TYPE.REACTION_ENC
          );
        },
        [v],
      ),
      ut = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.POLL_UPDATE && n === "poll_vote"
          );
        },
        [v, S],
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
      mt = _("isCarouselCard", { default: !1 }),
      pt = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebMsgType").MSG_TYPE.DOCUMENT;
        },
        [v],
      ),
      _t = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return !t && !n && !r;
        },
        [de, dt, pt],
      ),
      ft = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebEphemeralConstants").KeepInChatState.KEPT;
        },
        [U],
      ),
      gt = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebEphemeralConstants").KeepInChatState.UNKEPT;
        },
        [U],
      ),
      ht = p(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isPSA(t.remote);
        },
        [L],
      ),
      yt = p(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isIAS(t.remote);
        },
        [L],
      ),
      Ct = p(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isAiHub(t.remote);
        },
        [L],
      ),
      bt = p(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isCAPISupportAccount(t.remote);
        },
        [L],
      ),
      vt = p(
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
      St = _("title"),
      Rt = _("body", { default: "" }),
      Lt = _("caption"),
      Et = _("comment"),
      kt = _("pollName", { default: "" }),
      It = _("pollOptions"),
      Tt = _("pollSelectableOptionsCount", { default: 0 }),
      Dt = _("pollInvalidated", { default: !1 }),
      xt = _("pollContentType", {
        default: o("WAWebPollCreationUtils").PollContentType.TEXT,
      }),
      $t = _("pollType", {
        default: o("WAWebPollCreationUtils").PollType.POLL,
      }),
      Pt = _("correctOptionIndex"),
      Nt = _("pollEndTime"),
      Mt = _("pollHideVoterNames"),
      wt = _("pollAllowAddOption"),
      At = _("pollVotesSnapshot"),
      Ft = _("quarantineExtractedText"),
      Ot = _("eventName", { default: "" }),
      Bt = _("eventDescription"),
      Wt = _("eventStartTime", { default: 0 }),
      qt = _("eventEndTime"),
      Ut = _("eventJoinLink"),
      Vt = _("eventLocation"),
      Ht = _("isEventCanceled", { default: !1 }),
      Gt = _("eventInvalidated", { default: !1 }),
      zt = _("eventIsScheduledCall", { default: !1 }),
      jt = _("eventExtraGuestsAllowed", { default: !1 }),
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
      an = _("paymentRequestMessageKey"),
      ln = _("paymentExpiryTimestamp"),
      sn = _("paymentInviteServiceType"),
      un = _("isFromTemplate", { default: !1 }),
      cn = _("isLive", { default: !1 }),
      dn = _("isDynamicReplyButtonsMsg", { default: !1 }),
      mn = _("dynamicReplyButtons"),
      pn = p(
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
      _n = p(
        function (e) {
          var t = e[0];
          return t != null;
        },
        [G],
      ),
      fn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.PROTOCOL && n === "message_edit"
          );
        },
        [v, S],
      ),
      gn = p(
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
        [rt, Z],
      ),
      hn = p(
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
        [v],
      ),
      yn = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t.fromMe && n && r;
        },
        [L, ze, hn],
      ),
      Cn = _("revokeSender"),
      bn = p(
        function (e) {
          var t = e[0];
          return t != null && o("WAWebUserPrefsMeUser").isMeAccount(t);
        },
        [Cn],
      ),
      vn = p(
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
      Sn = p(
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
      Rn = p(
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
      Ln = _("isForwarded", { default: !1 }),
      En = _("forwardingScore"),
      kn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return n == null ? (t ? 1 : 0) : n || 0;
        },
        [Ln, En],
      ),
      In = 127,
      Tn = p(
        function (e) {
          var t = e[0];
          return t >= In;
        },
        [kn],
      ),
      Dn = _("isQuestion", { default: !1 }),
      xn = _("isSpoiler", { default: !1 }),
      $n = _("questionResponsesCount"),
      Pn = _("readQuestionResponsesCount"),
      Nn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t - n;
        },
        [$n, Pn],
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
        [Ln, nt, at, Fn],
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
        [at, A, qn],
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
        [v, Rt],
      ),
      Hn = _("description"),
      Gn = _("matchedText", { default: "" }),
      zn = _("thumbnail"),
      jn = _("thumbnailHQ"),
      Kn = _("musicArtwork"),
      Qn = _("richPreviewType", {
        default: o("WAWebProtobufsE2E.pb")
          .Message$ExtendedTextMessage$PreviewType.NONE,
      }),
      Xn = _("paymentLinkMetadata", { default: null }),
      Yn = _("faviconMMSMetadata", { default: null }),
      Jn = p(
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
        [Xn],
      ),
      Zn = p(
        function (e) {
          var t = e[0];
          return (
            (t == null ? void 0 : t.isBusinessVerified) === !0 &&
            (t == null ? void 0 : t.providerName) != null
          );
        },
        [Jn],
      ),
      er = p(
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
        [Rt, St, Hn, Gn],
      ),
      tr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n;
        },
        [dn, un],
      ),
      nr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            n ||
            t === o("WAWebMsgType").MSG_TYPE.LIST ||
            t === o("WAWebMsgType").MSG_TYPE.INTERACTIVE
          );
        },
        [v, dn],
      ),
      rr = 768,
      or = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = 308;
          return n != null && n.isBot() ? 1 / 0 : t ? r : rr;
        },
        [Tn, it],
      ),
      ar = p(
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
      ir = p(
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
      lr = _("kicKey"),
      sr = p(
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
        [lr, et],
      ),
      ur = p(
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
      cr = p(
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
      dr = _("revokeDuration"),
      mr = p(
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
        [v, S, cr, _n],
      ),
      pr = p(
        function (e) {
          var t = e[0];
          if (t != null)
            return o("WAWebEphemeralityWAMUtils").getWamDisappearingModeTrigger(
              t,
            );
        },
        [be],
      ),
      _r = p(
        function (e) {
          var t = e[0];
          if (t != null)
            return o(
              "WAWebEphemeralityWAMUtils",
            ).getWamDisappearingModeInitiatedByMe(t);
        },
        [ve],
      ),
      fr = p(
        function (e) {
          var t = e[0];
          if (t != null)
            return o(
              "WAWebEphemeralityWAMUtils",
            ).getWamDisappearingModeInitiator(t);
        },
        [Ce],
      ),
      gr = _("inviteCode", { default: "" }),
      hr = _("inviteCodeExp", { default: "" }),
      yr = _("inviteGrp", { default: "" }),
      Cr = _("inviteGrpName"),
      br = _("inviteGrpJpegThum"),
      vr = _("inviteGrpType"),
      Sr = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          if (t !== o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE) return !1;
          if (!n) return !0;
          var a = Date.now() / 1e3;
          return parseInt(a, 10) >= parseInt(r, 10);
        },
        [v, gr, hr],
      ),
      Rr = p(
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
        [v, xe],
      ),
      Lr = _("productHeaderImageRejected", { default: !1 }),
      Er = p(
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
        [Lr, H],
      ),
      kr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.PTT ||
            t === o("WAWebMsgType").MSG_TYPE.PTV ||
            (n && t === o("WAWebMsgType").MSG_TYPE.AUDIO)
          );
        },
        [v, nt],
      ),
      Ir = _("hasReaction", { default: !1 }),
      Tr = _("recipients", {
        getDefault: function () {
          return [];
        },
      }),
      Dr = _("templateParams", {
        getDefault: function () {
          return [];
        },
      }),
      xr = _("clientUrl", { default: "" }),
      $r = _("loc", { default: "" }),
      Pr = _("lat"),
      Nr = _("lng"),
      Mr = _("shareDuration"),
      wr = _("finalLat"),
      Ar = _("finalLng"),
      Fr = _("star", { default: !1 }),
      Or = _("currencyCode"),
      Br = _("priceAmount1000"),
      Wr = _("salePriceAmount1000"),
      qr = _("isVcardOverMmsDocument", { default: !1 }),
      Ur = _("interactiveAnnotations"),
      Vr = p(
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
        [Ur],
      ),
      Hr = p(
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
        [Ur],
      ),
      Gr = p(
        function (e) {
          var t = e[0];
          return t == null ? null : t[0];
        },
        [Vr],
      ),
      zr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n != null && n.length > 0;
        },
        [rt, Vr],
      ),
      jr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n != null;
        },
        [tt, Gr],
      ),
      Kr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n;
        },
        [rt, Hr],
      ),
      Qr = p(
        function (e) {
          var t,
            n = e[0];
          if (n == null) return null;
          var r = (t = n.embeddedContent) == null ? void 0 : t.embeddedMusic;
          return r == null
            ? null
            : o("WAWebMusicParsingUtils").toMusicMetadata(r);
        },
        [Gr],
      ),
      Xr = _("messageSecret"),
      Yr = _("broadcast", { default: !1 }),
      Jr = _("vcardList", {
        getDefault: function () {
          return [];
        },
      }),
      Zr = _("vcardFormattedName"),
      eo = _("labels", {
        getDefault: function () {
          return [];
        },
      }),
      to = _("agentId"),
      no = _("url"),
      ro = _("retailerId"),
      oo = _("businessOwnerJid"),
      ao = _("productId"),
      io = _("productImageCount"),
      lo = _("isMdHistoryMsg", { default: !1 }),
      so = _("campaignId"),
      uo = _("filename"),
      co = _("smbClientCampaignId"),
      mo = _("isCaptionByUser", { default: !1 }),
      po = _("doNotPlayInline"),
      _o = _("thumbnailDirectPath"),
      fo = _("thumbnailHeight"),
      go = _("thumbnailWidth"),
      ho = _("orderTitle"),
      yo = _("itemCount"),
      Co = _("totalAmount1000"),
      bo = _("totalCurrencyCode"),
      vo = _("futureproofType"),
      So = _("futureproofSubtype"),
      Ro = _("ephemeralOutOfSync"),
      Lo = _("isAvatar"),
      Eo = _("bizPrivacyStatus"),
      ko = _("verifiedBizName"),
      Io = _("mediaKey"),
      To = _("message", { default: "" }),
      Do = _("size", { default: 0 }),
      xo = _("mediaPngThumbnail"),
      $o = _("hostedBizEncStateMismatch"),
      Po = p(
        function (e) {
          var t = e[0];
          return t === "bot_unavailable_fanout";
        },
        [S],
      ),
      No = p(
        function (e) {
          var t = e[0];
          return t === "view_once_unavailable_fanout";
        },
        [S],
      ),
      Mo = p(
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
      wo = p(
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
      Ao = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return !r && !t.fromMe && n === o("WAWebBotTypes").BizBotType.BIZ_1P;
        },
        [L, Re, wo],
      ),
      Fo = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return !r && !t.fromMe && n === o("WAWebBotTypes").BizBotType.BIZ_3P;
        },
        [L, Re, wo],
      ),
      Oo = _("botPluginSearchProvider"),
      Bo = _("botPluginSearchUrl"),
      Wo = _("botResponseTargetId"),
      qo = _("botPluginSearchQuery"),
      Uo = _("botPluginType"),
      Vo = _("botMessageDisclaimerText"),
      Ho = _("botModeSelection"),
      Go = _("botModeOverride"),
      zo = _("richResponse"),
      jo = _("unifiedResponse"),
      Ko = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t != null && n != null && r != null;
        },
        [Oo, Bo, qo],
      ),
      Qo = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !n && (t == null ? void 0 : t.isBot()) === !0;
        },
        [it, wo],
      ),
      Xo = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !!(t && o("WAWebUserPrefsMeUser").isMeAccount(n));
        },
        [Qo, Le],
      ),
      Yo = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return n && !t.remote.isBot();
        },
        [L, Qo],
      ),
      Jo = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t || n || r;
        },
        [Qo, Ao, Fo],
      ),
      Zo = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.PROTOCOL && n === "bot_feedback"
          );
        },
        [v, S],
      ),
      ea = _("hsmTag"),
      ta = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebBusinessHSMTypes").HSM_TAG_TYPE.AUTHENTICATION;
        },
        [ea],
      ),
      na = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebBusinessHSMTypes").HSM_TAG_TYPE.MARKETING;
        },
        [ea],
      ),
      ra = _("botRespOrInvocationRevokeBotWid"),
      oa = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !!(t != null && t.isBot() && n);
        },
        [ra, cr],
      ),
      aa = p(
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
        [Uo, Qo],
      ),
      ia = _("botPluginMaybeParent"),
      la = _("botReelPluginThumbnailCdnUrl"),
      sa = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebMsgType").MSG_TYPE.BIZ_CONTENT_PLACEHOLDER;
        },
        [v],
      ),
      ua = _("statusMentioned"),
      ca = _("isWamoSub"),
      da = _("hasPaidPartnershipLabel"),
      ma = _("aiProvenance"),
      pa = p(
        function (e) {
          var t = e[0];
          return o("WAWebMsgAIProvenance").hasAIProvenanceSignal(t);
        },
        [ma],
      ),
      _a = _("isVideoCall"),
      fa = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (
            t === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
            (n === "miss_video" || n === "miss_group_video" || r === !0)
          );
        },
        [v, S, _a],
      ),
      ga = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t === o("WAWebMsgType").MSG_TYPE.CALL_LOG ? n.id : null;
        },
        [v, L],
      ),
      ha = _("callOutcome"),
      ya = _("callSilenceReason"),
      Ca = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (
            t === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
            (n === "silence" || r != null)
          );
        },
        [v, S, ya],
      ),
      ba = p(
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
        [v, S, ha, it],
      ),
      va = _("callDuration"),
      Sa = p(
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
        [v, P, va],
      ),
      Ra = _("bytesSent"),
      La = _("bytesReceived"),
      Ea = _("callParticipants"),
      ka = _("isCallLink"),
      Ia = _("callLinkToken"),
      Ta = _("terminatedByDeviceSwitch"),
      Da = _("selfOtherDeviceConnected"),
      xa = p(
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
        [et, Ea, Ia],
      ),
      $a = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n;
        },
        [et, xa],
      ),
      Pa = _("finalCallOutcome"),
      Na = _("groupHistoryBundleMessageKey"),
      Ma = _("groupHistoryBundleMetadata"),
      wa = _("groupHistoryIndividualMessageInfo"),
      Aa = p(
        function (e) {
          var t,
            n = e[0],
            r = e[1];
          return (t = n == null ? void 0 : n.bundleMessageKey) != null ? t : r;
        },
        [wa, Na],
      ),
      Fa = p(
        function (e) {
          var t = e[0];
          return t == null ? void 0 : t.isEditedAfterReceivedAsHistory;
        },
        [wa],
      ),
      Oa = p(
        function (e) {
          var t = e[0];
          return t == null ? void 0 : t.bundleSender;
        },
        [wa],
      ),
      Ba = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t != null && r("WAWebWid").equals(t.remote, n);
        },
        [Aa, $],
      );
    function Wa(e) {
      var t =
        v(e) === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE &&
        o("WAWebUserPrefsMeUser").isMeAccount(I(e));
      return (
        !t &&
        !ar(e) &&
        v(e) !== o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
        !Sn(e) &&
        !["change_number", "change_username", "masked_thread_created"].includes(
          S(e),
        ) &&
        !ir(e)
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
      (l.getFilehash = ge),
      (l.getDeprecatedMms3Url = he),
      (l.getWaveform = ye),
      (l.getDisappearingModeInitiator = Ce),
      (l.getDisappearingModeInitiatedByMe = ve),
      (l.getActiveBotMsgStreamingInProgress = Se),
      (l.getBizBotType = Re),
      (l.getBotTargetSenderJid = Le),
      (l.getIsSupportAIMessage = Ee),
      (l.getLastBotEditBodyLength = ke),
      (l.getBotEditType = Ie),
      (l.getForwardedNewsletterMessageInfo = Te),
      (l.getForwardedAiBotMessageInfo = De),
      (l.getNewsletterAdminInviteInfo = xe),
      (l.getNewsletterFollowerInviteInfo = $e),
      (l.getIsGroupStatus = Ne),
      (l.getIsNewsletterStatus = Me),
      (l.hasReshareAttribution = Ae),
      (l.getHasReshareAttribution = Fe),
      (l.getIsNewsletterStatusReshare = Oe),
      (l.getBizSource = Be),
      (l.isBizSourceFromMarketingMessage = We),
      (l.getIsMarketingMessage = qe),
      (l.getIsReply = Ue),
      (l.getIsOpus = Ve),
      (l.getRcatString = He),
      (l.getHasMentionOfMe = Ge),
      (l.getLocal = ze),
      (l.getNonJidMentions = Ke),
      (l.getHasMentionAll = Qe),
      (l.getIsImportantMessage = Xe),
      (l.getBotPluginReferenceIndex = Ye),
      (l.getIsUnreadType = Je),
      (l.getIs1to1Msg = Ze),
      (l.getIsGroupMsg = et),
      (l.getIsNewsletterMsg = tt),
      (l.getHasOriginatedFromNewsletter = nt),
      (l.getIsStatus = rt),
      (l.getIsNotification = ot),
      (l.getIsSentByMe = at),
      (l.getSender = it),
      (l.getOriginalSender = lt),
      (l.getIsReaction = st),
      (l.getIsPollVote = ut),
      (l.getIsFutureproof = ct),
      (l.getIsStickerMsg = dt),
      (l.getIsCarouselCard = mt),
      (l.getHasThumbList = _t),
      (l.getIsKept = ft),
      (l.getIsUnkept = gt),
      (l.getIsPSA = ht),
      (l.getIsIAS = yt),
      (l.getIsAiHub = Ct),
      (l.getIsCAPISupport = bt),
      (l.getIsProductListMessage = vt),
      (l.getTitle = St),
      (l.getBody = Rt),
      (l.getCaption = Lt),
      (l.getComment = Et),
      (l.getPollName = kt),
      (l.getPollOptions = It),
      (l.getPollSelectableOptionsCount = Tt),
      (l.getPollInvalidated = Dt),
      (l.getPollContentType = xt),
      (l.getPollType = $t),
      (l.getPollCorrectOptionIndex = Pt),
      (l.getPollEndTime = Nt),
      (l.getPollHideVoterNames = Mt),
      (l.getPollAllowAddOption = wt),
      (l.getPollVotesSnapshot = At),
      (l.getQuarantineExtractedText = Ft),
      (l.getEventName = Ot),
      (l.getEventDescription = Bt),
      (l.getEventStartTime = Wt),
      (l.getEventEndTime = qt),
      (l.getEventJoinLink = Ut),
      (l.getEventLocation = Vt),
      (l.getIsEventCanceled = Ht),
      (l.getEventInvalidated = Gt),
      (l.getEventIsScheduledCall = zt),
      (l.getEventExtraGuestsAllowed = jt),
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
      (l.getPaymentRequestMessageKey = an),
      (l.getPaymentExpiryTimestamp = ln),
      (l.getPaymentInviteServiceType = sn),
      (l.getIsFromTemplate = un),
      (l.getIsLive = cn),
      (l.getIsDynamicReplyButtonsMsg = dn),
      (l.getDynamicReplyButtons = mn),
      (l.getIsEphemeral = pn),
      (l.getIsEdited = _n),
      (l.getIsEditProtocolMsg = fn),
      (l.getStatusCanvasColor = gn),
      (l.getIsUserCreatedType = hn),
      (l.getIsSentByMeFromWeb = yn),
      (l.getRevokeSender = Cn),
      (l.getIsRevokedByMe = bn),
      (l.getIsInternational = vn),
      (l.getIsBizNotification = Sn),
      (l.getIsMedia = Rn),
      (l.getIsForwarded = Ln),
      (l.getForwardingScore = En),
      (l.getNumTimesForwarded = kn),
      (l.FREQUENTLY_FORWARDED_SENTINEL = In),
      (l.getIsFrequentlyForwarded = Tn),
      (l.getIsQuestion = Dn),
      (l.getIsSpoiler = xn),
      (l.getQuestionResponsesCount = $n),
      (l.getReadQuestionResponsesCount = Pn),
      (l.getUnreadQuestionResponsesCount = Nn),
      (l.getQuestionReplyQuotedMessage = Mn),
      (l.getIsQuestionReply = wn),
      (l.getNewsletterAdminProfile = An),
      (l.getIsBotInvoke = Fn),
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
      (l.getRichPreviewType = Qn),
      (l.getPaymentLinkMetadata = Xn),
      (l.getFaviconMMSMetadata = Yn),
      (l.getPaymentLinkPreviewMetaTags = Jn),
      (l.getHasPaymentLinkTrustSignals = Zn),
      (l.getLinkPreview = er),
      (l.getSupportsMessageFooter = tr),
      (l.getSupportsMessageFooterLinks = nr),
      (l.INITIAL_PAGE_SIZE = rr),
      (l.getInitialPageSize = or),
      (l.getIsInitialE2ENotification = ar),
      (l.getIsDisappearingModeSystemMessage = ir),
      (l.getKicKey = lr),
      (l.getKicSender = sr),
      (l.getEphemeralExpirationTimestamp = ur),
      (l.getIsRevoke = cr),
      (l.getRevokeDuration = dr),
      (l.getWamEditType = mr),
      (l.getWamDisappearingModeTrigger = pr),
      (l.getWamDisappearingModeInitiatedByMe = _r),
      (l.getWamDisappearingModeInitiator = fr),
      (l.getInviteCode = gr),
      (l.getInviteCodeExp = hr),
      (l.getInviteGrp = yr),
      (l.getInviteGrpName = Cr),
      (l.getInviteGrpJpegThum = br),
      (l.getInviteGrpType = vr),
      (l.getIsGroupsV4InviteExpired = Sr),
      (l.getIsNewsletterAdminInviteExpired = Rr),
      (l.getProductHeaderImageRejected = Lr),
      (l.getProductListHeaderImage = Er),
      (l.getIsAckPlayable = kr),
      (l.getHasReaction = Ir),
      (l.getRecipients = Tr),
      (l.getTemplateParams = Dr),
      (l.getClientUrl = xr),
      (l.getLoc = $r),
      (l.getLat = Pr),
      (l.getLng = Nr),
      (l.getShareDuration = Mr),
      (l.getFinalLat = wr),
      (l.getFinalLng = Ar),
      (l.getStar = Fr),
      (l.getCurrencyCode = Or),
      (l.getPriceAmount1000 = Br),
      (l.getSalePriceAmount1000 = Wr),
      (l.getIsVcardOverMmsDocument = qr),
      (l.getInteractiveAnnotations = Ur),
      (l.getMusicAnnotations = Vr),
      (l.getHasEmbeddedMessagesAnnotation = Hr),
      (l.getFirstMusicAnnotation = Gr),
      (l.isStatusWithMusic = zr),
      (l.isNewsletterMsgWithMusic = jr),
      (l.isStatusWithEmbeddedMessages = Kr),
      (l.getFirstMusicAnnotationEmbeddedContent = Qr),
      (l.getMessageSecret = Xr),
      (l.getBroadcast = Yr),
      (l.getVcardList = Jr),
      (l.getVcardFormattedName = Zr),
      (l.getLabels = eo),
      (l.getAgentId = to),
      (l.getUrl = no),
      (l.getRetailerId = ro),
      (l.getBusinessOwnerJid = oo),
      (l.getProductId = ao),
      (l.getProductImageCount = io),
      (l.getIsMdHistoryMsg = lo),
      (l.getCampaignId = so),
      (l.getFilename = uo),
      (l.getSmbClientCampaignId = co),
      (l.getIsCaptionByUser = mo),
      (l.getDoNotPlayInline = po),
      (l.getThumbnailDirectPath = _o),
      (l.getThumbnailHeight = fo),
      (l.getThumbnailWidth = go),
      (l.getOrderTitle = ho),
      (l.getItemCount = yo),
      (l.getTotalAmount1000 = Co),
      (l.getTotalCurrencyCode = bo),
      (l.getFutureproofType = vo),
      (l.getFutureproofSubtype = So),
      (l.getEphemeralOutOfSync = Ro),
      (l.getIsAvatar = Lo),
      (l.getBizPrivacyStatus = Eo),
      (l.getVerifiedBizName = ko),
      (l.getMediaKey = Io),
      (l.getMessage = To),
      (l.getSize = Do),
      (l.getMediaPngThumbnail = xo),
      (l.getHostedBizEncStateMismatch = $o),
      (l.getIsBotFutureproofPlaceholder = Po),
      (l.getIsViewOncePlaceholder = No),
      (l.getIsBotQuery = Mo),
      (l.getIsCoexV2Relay = wo),
      (l.getIsBizBot1pResponse = Ao),
      (l.getIsBizBot3pResponse = Fo),
      (l.getBotPluginSearchProvider = Oo),
      (l.getBotPluginSearchUrl = Bo),
      (l.getBotResponseTargetId = Wo),
      (l.getBotPluginSearchQuery = qo),
      (l.getBotPluginType = Uo),
      (l.getBotMessageDisclaimerText = Vo),
      (l.getBotModeSelection = Ho),
      (l.getBotModeOverride = Go),
      (l.getRichResponse = zo),
      (l.getUnifiedResponse = jo),
      (l.getIsBotSearchResponse = Ko),
      (l.getIsMetaBotResponse = Qo),
      (l.isMetaBotResponseToMyInvoke = Xo),
      (l.getIsMetaBotInvokeResponse = Yo),
      (l.getIsBotResponse = Jo),
      (l.getIsBotFeedbackMessage = Zo),
      (l.getHsmTag = ea),
      (l.getIsAuthenticationMessage = ta),
      (l.getIsMarketingTemplateTag = na),
      (l.getBotRespOrInvocationRevokeBotWid = ra),
      (l.getIsRevokeForMsgFromOrDeliveredToBot = oa),
      (l.getIsBotPluginCarouselMsg = aa),
      (l.getBotPluginMaybeParent = ia),
      (l.getBotReelPluginThumbnailCdnUrl = la),
      (l.getIsBizContentPlaceholder = sa),
      (l.getStatusMentioned = ua),
      (l.getIsWamoSub = ca),
      (l.getHasPaidPartnershipLabel = da),
      (l.getAiProvenance = ma),
      (l.getIsAiContent = pa),
      (l.getIsVideoCall = fa),
      (l.getCallId = ga),
      (l.getCallOutcome = ha),
      (l.getCallSilenceReason = ya),
      (l.getIsCallSilenced = Ca),
      (l.getIsMissedCall = ba),
      (l.getCallDuration = va),
      (l.getIsVisibleCallLog = Sa),
      (l.getBytesSent = Ra),
      (l.getBytesReceived = La),
      (l.getCallParticipants = Ea),
      (l.getIsCallLink = ka),
      (l.getCallLinkToken = Ia),
      (l.getTerminatedByDeviceSwitch = Ta),
      (l.getSelfOtherDeviceConnected = Da),
      (l.getIsAdHocGroupCall = xa),
      (l.getIsGroupCall = $a),
      (l.getFinalCallOutcome = Pa),
      (l.getGroupHistoryBundleMessageKeyDeprecated = Na),
      (l.getGroupHistoryBundleMetadata = Ma),
      (l.getGroupHistoryIndividualMessageInfo = wa),
      (l.getGroupHistoryBundleMessageKey = Aa),
      (l.getIsEditedAfterReceivedAsHistory = Fa),
      (l.getGroupHistoryBundleSender = Oa),
      (l.getIsGroupHistoryMessageInOwnChat = Ba),
      (l.isRealMessage = Wa));
  },
  98,
);
