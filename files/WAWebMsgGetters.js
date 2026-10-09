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
      z = _("ephemeralDuration"),
      j = _("afterReadDuration"),
      K = _("expiredTimestamp"),
      Q = _("ephemeralSettingUser"),
      X = _("t", { default: 0 }),
      Y = _("clientReceivedTsMillis"),
      J = _("backgroundColor"),
      Z = _("headerType"),
      ee = _("interactiveHeader"),
      te = _("interactiveType"),
      ne = _("bloksWidget"),
      re = _("footer"),
      oe = _("mentionedJidList"),
      ae = _("groupMentions", {
        getDefault: function () {
          return [];
        },
      }),
      ie = _("quotedMsg"),
      le = _("quotedRemoteJid"),
      se = _("quotedParticipant"),
      ue = _("rcat"),
      ce = _("isViewOnce", { default: !1 }),
      de = _("isGif", { default: !1 }),
      me = _("gifAttribution", {
        default: o("WAWebProtobufsE2E.pb").Message$VideoMessage$Attribution
          .NONE,
      }),
      pe = _("ctwaContext"),
      _e = _("threadIds"),
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
        [ie],
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
        [ue],
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
        [oe],
      ),
      ze = _("local", { default: !1 }),
      je = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n ? o("WAWebUserPrefsMeUser").isMeAccount(b(n)) : !1;
        },
        [ie, se],
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
            case "music":
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
            t === o("WAWebMsgType").MSG_TYPE.UNKNOWN ||
            (t === o("WAWebMsgType").MSG_TYPE.PAYMENT && n === "futureproof")
          );
        },
        [v, S],
      ),
      ct = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebMsgType").MSG_TYPE.STICKER;
        },
        [v],
      ),
      dt = _("isAiSticker"),
      mt = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n === !0;
        },
        [ct, dt],
      ),
      pt = _("isCarouselCard", { default: !1 }),
      _t = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebMsgType").MSG_TYPE.DOCUMENT;
        },
        [v],
      ),
      ft = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return !t && !n && !r;
        },
        [ce, ct, _t],
      ),
      gt = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebEphemeralConstants").KeepInChatState.KEPT;
        },
        [U],
      ),
      ht = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebEphemeralConstants").KeepInChatState.UNKEPT;
        },
        [U],
      ),
      yt = p(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isPSA(t.remote);
        },
        [L],
      ),
      Ct = p(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isIAS(t.remote);
        },
        [L],
      ),
      bt = p(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isAiHub(t.remote);
        },
        [L],
      ),
      vt = p(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isCAPISupportAccount(t.remote);
        },
        [L],
      ),
      St = p(
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
      Rt = _("title"),
      Lt = _("body", { default: "" }),
      Et = _("caption"),
      kt = _("comment"),
      It = _("pollName", { default: "" }),
      Tt = _("pollOptions"),
      Dt = p(
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
        [Tt],
      ),
      xt = _("pollSelectableOptionsCount", { default: 0 }),
      $t = _("pollInvalidated", { default: !1 }),
      Pt = _("pollType", {
        default: o("WAWebPollCreationUtils").PollType.POLL,
      }),
      Nt = _("correctOptionIndex"),
      Mt = _("pollEndTime"),
      wt = _("pollHideVoterNames"),
      At = _("quarantineExtractedText"),
      Ft = _("eventName", { default: "" }),
      Ot = _("eventDescription"),
      Bt = _("eventStartTime", { default: 0 }),
      Wt = _("eventEndTime"),
      qt = _("eventJoinLink"),
      Ut = _("eventLocation"),
      Vt = _("isEventCanceled", { default: !1 }),
      Ht = _("eventInvalidated", { default: !1 }),
      Gt = _("eventIsScheduledCall", { default: !1 }),
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
        [v, S, z],
      ),
      mn = p(
        function (e) {
          var t = e[0];
          return t != null;
        },
        [G],
      ),
      pn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.PROTOCOL && n === "message_edit"
          );
        },
        [v, S],
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
        [rt, J],
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
      gn = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t.fromMe && n && r;
        },
        [L, ze, fn],
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
        [L, k, I],
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
        [v, S],
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
        [v, ee],
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
        [L, oe],
      ),
      An = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            o = e[3];
          return t || n || o || !r;
        },
        [Sn, nt, at, wn],
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
        [at, A, Bn],
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
        [v, Lt],
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
        [Lt, Rt, Un, Vn],
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
        [v, un],
      ),
      tr = 768,
      nr = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = 308;
          return n != null && n.isBot() ? 1 / 0 : t ? r : tr;
        },
        [kn, it],
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
        [v, S],
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
        [v, S],
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
        [ar, et],
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
        [z, X, S, K],
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
        [v, S],
      ),
      ur = _("revokeDuration"),
      cr = p(
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
        [v, S, sr, mn],
      ),
      dr = p(
        function (e) {
          var t = e[0];
          if (t != null)
            return o("WAWebEphemeralityWAMUtils").getWamDisappearingModeTrigger(
              t,
            );
        },
        [be],
      ),
      mr = p(
        function (e) {
          var t = e[0];
          if (t != null)
            return o(
              "WAWebEphemeralityWAMUtils",
            ).getWamDisappearingModeInitiatedByMe(t);
        },
        [ve],
      ),
      pr = p(
        function (e) {
          var t = e[0];
          if (t != null)
            return o(
              "WAWebEphemeralityWAMUtils",
            ).getWamDisappearingModeInitiator(t);
        },
        [Ce],
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
        [v, _r, fr],
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
        [v, xe],
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
        [Sr, H],
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
        [v, nt],
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
        [rt, qr],
      ),
      Gr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n != null;
        },
        [tt, Vr],
      ),
      zr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n;
        },
        [rt, Ur],
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
      To = _("mediaPngThumbnail"),
      Do = _("hostedBizEncStateMismatch"),
      xo = p(
        function (e) {
          var t = e[0];
          return t === "bot_unavailable_fanout";
        },
        [S],
      ),
      $o = p(
        function (e) {
          var t = e[0];
          return t === "view_once_unavailable_fanout";
        },
        [S],
      ),
      Po = p(
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
        [L, oe],
      ),
      No = p(
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
      Mo = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !n && t === o("WAWebBotTypes").BizBotType.BIZ_1P;
        },
        [Re, No],
      ),
      wo = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !t.fromMe && n;
        },
        [L, Mo],
      ),
      Ao = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return !r && !t.fromMe && n === o("WAWebBotTypes").BizBotType.BIZ_3P;
        },
        [L, Re, No],
      ),
      Fo = _("botPluginSearchProvider"),
      Oo = _("botPluginSearchUrl"),
      Bo = _("botResponseTargetId"),
      Wo = _("botPluginSearchQuery"),
      qo = _("botPluginType"),
      Uo = _("botMessageDisclaimerText"),
      Vo = _("botModeSelection"),
      Ho = _("botModeOverride"),
      Go = _("richResponse"),
      zo = _("unifiedResponse"),
      jo = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t != null && n != null && r != null;
        },
        [Fo, Oo, Wo],
      ),
      Ko = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !n && (t == null ? void 0 : t.isBot()) === !0;
        },
        [it, No],
      ),
      Qo = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !!(t && o("WAWebUserPrefsMeUser").isMeAccount(n));
        },
        [Ko, Le],
      ),
      Xo = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return n && !t.remote.isBot();
        },
        [L, Ko],
      ),
      Yo = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t || n || r;
        },
        [Ko, wo, Ao],
      ),
      Jo = p(
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
      Zo = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t || n || r;
        },
        [Ko, Ao, Jo],
      ),
      ea = p(
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
        [mn, Dt, Zo, Mo, Ie],
      ),
      ta = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.PROTOCOL && n === "bot_feedback"
          );
        },
        [v, S],
      ),
      na = _("hsmTag"),
      ra = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebBusinessHSMTypes").HSM_TAG_TYPE.AUTHENTICATION;
        },
        [na],
      ),
      oa = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebBusinessHSMTypes").HSM_TAG_TYPE.MARKETING;
        },
        [na],
      ),
      aa = _("botRespOrInvocationRevokeBotWid"),
      ia = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !!(t != null && t.isBot() && n);
        },
        [aa, sr],
      ),
      la = p(
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
        [qo, Ko],
      ),
      sa = _("botPluginMaybeParent"),
      ua = _("botReelPluginThumbnailCdnUrl"),
      ca = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebMsgType").MSG_TYPE.BIZ_CONTENT_PLACEHOLDER;
        },
        [v],
      ),
      da = _("statusMentioned"),
      ma = _("isWamoSub"),
      pa = _("hasPaidPartnershipLabel"),
      _a = _("aiProvenance"),
      fa = p(
        function (e) {
          var t = e[0];
          return o("WAWebMsgAIProvenance").hasAIProvenanceSignal(t);
        },
        [_a],
      ),
      ga = _("isVideoCall"),
      ha = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (
            t === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
            (n === "miss_video" || n === "miss_group_video" || r === !0)
          );
        },
        [v, S, ga],
      ),
      ya = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t === o("WAWebMsgType").MSG_TYPE.CALL_LOG ? n.id : null;
        },
        [v, L],
      ),
      Ca = _("callOutcome"),
      ba = _("callSilenceReason"),
      va = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (
            t === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
            (n === "silence" || r != null)
          );
        },
        [v, S, ba],
      ),
      Sa = p(
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
        [v, S, Ca, it],
      ),
      Ra = _("callDuration"),
      La = p(
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
        [v, P, Ra],
      ),
      Ea = _("bytesSent"),
      ka = _("bytesReceived"),
      Ia = _("callParticipants"),
      Ta = p(
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
        [Ia],
      ),
      Da = _("isCallLink"),
      xa = _("callLinkToken"),
      $a = _("selfOtherDeviceConnected"),
      Pa = p(
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
        [et, Ta, xa],
      ),
      Na = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n;
        },
        [et, Pa],
      ),
      Ma = _("finalCallOutcome"),
      wa = _("groupHistoryBundleMessageKey"),
      Aa = _("groupHistoryBundleMetadata"),
      Fa = _("groupHistoryIndividualMessageInfo"),
      Oa = p(
        function (e) {
          var t,
            n = e[0],
            r = e[1];
          return (t = n == null ? void 0 : n.bundleMessageKey) != null ? t : r;
        },
        [Fa, wa],
      ),
      Ba = p(
        function (e) {
          var t = e[0];
          return t == null ? void 0 : t.isEditedAfterReceivedAsHistory;
        },
        [Fa],
      ),
      Wa = p(
        function (e) {
          var t = e[0];
          return t == null ? void 0 : t.bundleSender;
        },
        [Fa],
      ),
      qa = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t != null && r("WAWebWid").equals(t.remote, n);
        },
        [Oa, $],
      );
    function Ua(e) {
      var t =
        v(e) === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE &&
        o("WAWebUserPrefsMeUser").isMeAccount(I(e));
      return (
        !t &&
        !rr(e) &&
        v(e) !== o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
        !bn(e) &&
        !["change_number", "change_username", "masked_thread_created"].includes(
          S(e),
        ) &&
        !or(e)
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
      (l.getEphemeralDuration = z),
      (l.getAfterReadDuration = j),
      (l.getExpiredTimestamp = K),
      (l.getEphemeralSettingUser = Q),
      (l.getT = X),
      (l.getClientReceivedTsMillis = Y),
      (l.getBackgroundColor = J),
      (l.getHeaderType = Z),
      (l.getInteractiveHeader = ee),
      (l.getInteractiveType = te),
      (l.getBloksWidget = ne),
      (l.getFooter = re),
      (l.getMentionedJidList = oe),
      (l.getGroupMentions = ae),
      (l.getQuotedMsg = ie),
      (l.getQuotedRemoteJid = le),
      (l.getQuotedParticipant = se),
      (l.getRcat = ue),
      (l.getIsViewOnce = ce),
      (l.getIsGif = de),
      (l.getGifAttribution = me),
      (l.getCtwaContext = pe),
      (l.getThreadIds = _e),
      (l.getMimetype = fe),
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
      (l.getIsFutureproof = ut),
      (l.getIsStickerMsg = ct),
      (l.getIsAiSticker = mt),
      (l.getIsCarouselCard = pt),
      (l.getHasThumbList = ft),
      (l.getIsKept = gt),
      (l.getIsUnkept = ht),
      (l.getIsPSA = yt),
      (l.getIsIAS = Ct),
      (l.getIsAiHub = bt),
      (l.getIsCAPISupport = vt),
      (l.getIsProductListMessage = St),
      (l.getTitle = Rt),
      (l.getBody = Lt),
      (l.getCaption = Et),
      (l.getComment = kt),
      (l.getPollName = It),
      (l.getPollOptions = Tt),
      (l.getHasContributedPollOptions = Dt),
      (l.getPollSelectableOptionsCount = xt),
      (l.getPollInvalidated = $t),
      (l.getPollType = Pt),
      (l.getPollCorrectOptionIndex = Nt),
      (l.getPollEndTime = Mt),
      (l.getPollHideVoterNames = wt),
      (l.getQuarantineExtractedText = At),
      (l.getEventName = Ft),
      (l.getEventDescription = Ot),
      (l.getEventStartTime = Bt),
      (l.getEventEndTime = Wt),
      (l.getEventJoinLink = qt),
      (l.getEventLocation = Ut),
      (l.getIsEventCanceled = Vt),
      (l.getEventInvalidated = Ht),
      (l.getEventIsScheduledCall = Gt),
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
      (l.getMediaPngThumbnail = To),
      (l.getHostedBizEncStateMismatch = Do),
      (l.getIsBotFutureproofPlaceholder = xo),
      (l.getIsViewOncePlaceholder = $o),
      (l.getIsBotQuery = Po),
      (l.getIsCoexV2Relay = No),
      (l.getIsBizBot1pMessage = Mo),
      (l.getIsBizBot1pResponse = wo),
      (l.getIsBizBot3pResponse = Ao),
      (l.getBotPluginSearchProvider = Fo),
      (l.getBotPluginSearchUrl = Oo),
      (l.getBotResponseTargetId = Bo),
      (l.getBotPluginSearchQuery = Wo),
      (l.getBotPluginType = qo),
      (l.getBotMessageDisclaimerText = Uo),
      (l.getBotModeSelection = Vo),
      (l.getBotModeOverride = Ho),
      (l.getRichResponse = Go),
      (l.getUnifiedResponse = zo),
      (l.getIsBotSearchResponse = jo),
      (l.getIsMetaBotResponse = Ko),
      (l.isMetaBotResponseToMyInvoke = Qo),
      (l.getIsMetaBotInvokeResponse = Xo),
      (l.getIsBotResponse = Yo),
      (l.getShouldShowEditedIndicator = ea),
      (l.getIsBotFeedbackMessage = ta),
      (l.getHsmTag = na),
      (l.getIsAuthenticationMessage = ra),
      (l.getIsMarketingTemplateTag = oa),
      (l.getBotRespOrInvocationRevokeBotWid = aa),
      (l.getIsRevokeForMsgFromOrDeliveredToBot = ia),
      (l.getIsBotPluginCarouselMsg = la),
      (l.getBotPluginMaybeParent = sa),
      (l.getBotReelPluginThumbnailCdnUrl = ua),
      (l.getIsBizContentPlaceholder = ca),
      (l.getStatusMentioned = da),
      (l.getIsWamoSub = ma),
      (l.getHasPaidPartnershipLabel = pa),
      (l.getAiProvenance = _a),
      (l.getIsAiContent = fa),
      (l.getIsVideoCall = ha),
      (l.getCallId = ya),
      (l.getCallOutcome = Ca),
      (l.getCallSilenceReason = ba),
      (l.getIsCallSilenced = va),
      (l.getIsMissedCall = Sa),
      (l.getCallDuration = Ra),
      (l.getIsVisibleCallLog = La),
      (l.getBytesSent = Ea),
      (l.getBytesReceived = ka),
      (l.getCallParticipants = Ta),
      (l.getIsCallLink = Da),
      (l.getCallLinkToken = xa),
      (l.getSelfOtherDeviceConnected = $a),
      (l.getIsAdHocGroupCall = Pa),
      (l.getIsGroupCall = Na),
      (l.getFinalCallOutcome = Ma),
      (l.getGroupHistoryBundleMessageKeyDeprecated = wa),
      (l.getGroupHistoryBundleMetadata = Aa),
      (l.getGroupHistoryIndividualMessageInfo = Fa),
      (l.getGroupHistoryBundleMessageKey = Oa),
      (l.getIsEditedAfterReceivedAsHistory = Ba),
      (l.getGroupHistoryBundleSender = Wa),
      (l.getIsGroupHistoryMessageInOwnChat = qa),
      (l.isRealMessage = Ua));
  },
  98,
);
