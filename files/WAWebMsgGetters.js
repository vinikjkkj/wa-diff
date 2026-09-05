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
        [U],
      ),
      yt = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebEphemeralConstants").KeepInChatState.UNKEPT;
        },
        [U],
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
        [v, H],
      ),
      Lt = _("title"),
      Et = _("body", { default: "" }),
      kt = _("caption"),
      It = _("comment"),
      Tt = _("pollName", { default: "" }),
      Dt = _("pollOptions"),
      xt = _("pollSelectableOptionsCount", { default: 0 }),
      $t = _("pollInvalidated", { default: !1 }),
      Pt = _("pollContentType", {
        default: o("WAWebPollCreationUtils").PollContentType.TEXT,
      }),
      Nt = _("pollType", {
        default: o("WAWebPollCreationUtils").PollType.POLL,
      }),
      Mt = _("correctOptionIndex"),
      wt = _("pollEndTime"),
      At = _("pollHideVoterNames"),
      Ft = _("pollAllowAddOption"),
      Ot = _("pollVotesSnapshot"),
      Bt = _("quarantineExtractedText"),
      Wt = _("eventName", { default: "" }),
      qt = _("eventDescription"),
      Ut = _("eventStartTime", { default: 0 }),
      Vt = _("eventEndTime"),
      Ht = _("eventJoinLink"),
      Gt = _("eventLocation"),
      zt = _("isEventCanceled", { default: !1 }),
      jt = _("eventInvalidated", { default: !1 }),
      Kt = _("eventIsScheduledCall", { default: !1 }),
      Qt = _("eventExtraGuestsAllowed", { default: !1 }),
      Xt = _("nativeFlowName"),
      Yt = _("nativeFlowButtons"),
      Jt = _("interactivePayload"),
      Zt = _("galaxyFlowDisabled", { default: !1 }),
      en = _("signupCtaTapped", { default: !1 }),
      tn = _("paymentCurrency", { default: "" }),
      nn = _("paymentAmount1000", { default: 0 }),
      rn = _("paymentMessageReceiverJid"),
      on = _("paymentStatus"),
      an = _("paymentTxnStatus"),
      ln = _("paymentNoteMsg"),
      sn = _("paymentRequestMessageKey"),
      un = _("paymentExpiryTimestamp"),
      cn = _("paymentInviteServiceType"),
      dn = _("isFromTemplate", { default: !1 }),
      mn = _("isLive", { default: !1 }),
      pn = _("isDynamicReplyButtonsMsg", { default: !1 }),
      _n = _("dynamicReplyButtons"),
      fn = p(
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
      gn = p(
        function (e) {
          var t = e[0];
          return t != null;
        },
        [G],
      ),
      hn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.PROTOCOL && n === "message_edit"
          );
        },
        [v, S],
      ),
      yn = p(
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
      Cn = p(
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
      bn = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t.fromMe && n && r;
        },
        [L, ze, Cn],
      ),
      vn = _("revokeSender"),
      Sn = p(
        function (e) {
          var t = e[0];
          return t != null && o("WAWebUserPrefsMeUser").isMeAccount(t);
        },
        [vn],
      ),
      Rn = p(
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
      Ln = p(
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
      En = p(
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
      kn = _("isForwarded", { default: !1 }),
      In = _("forwardingScore"),
      Tn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return n == null ? (t ? 1 : 0) : n || 0;
        },
        [kn, In],
      ),
      Dn = 127,
      xn = p(
        function (e) {
          var t = e[0];
          return t >= Dn;
        },
        [Tn],
      ),
      $n = _("isQuestion", { default: !1 }),
      Pn = _("isSpoiler", { default: !1 }),
      Nn = _("questionResponsesCount"),
      Mn = _("readQuestionResponsesCount"),
      wn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t - n;
        },
        [Nn, Mn],
      ),
      An = _("questionReplyQuotedMessage"),
      Fn = p(
        function (e) {
          var t = e[0];
          return t != null;
        },
        [An],
      ),
      On = _("newsletterAdminProfile"),
      Bn = p(
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
      Wn = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            o = e[3];
          return t || n || o || !r;
        },
        [kn, nt, at, Bn],
      ),
      qn = _("invis", { default: !1 }),
      Un = _("isNewMsg", { default: !1 }),
      Vn = _("isSendFailure", { default: !1 }),
      Hn = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (t && n != null && n < o("WAWebAck").ACK.CLOCK) || r;
        },
        [at, A, Vn],
      ),
      Gn = p(
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
      zn = _("description"),
      jn = _("matchedText", { default: "" }),
      Kn = _("thumbnail"),
      Qn = _("thumbnailHQ"),
      Xn = _("musicArtwork"),
      Yn = _("richPreviewType", {
        default: o("WAWebProtobufsE2E.pb")
          .Message$ExtendedTextMessage$PreviewType.NONE,
      }),
      Jn = _("paymentLinkMetadata", { default: null }),
      Zn = _("faviconMMSMetadata", { default: null }),
      er = p(
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
        [Jn],
      ),
      tr = p(
        function (e) {
          var t = e[0];
          return (
            (t == null ? void 0 : t.isBusinessVerified) === !0 &&
            (t == null ? void 0 : t.providerName) != null
          );
        },
        [er],
      ),
      nr = p(
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
        [Et, Lt, zn, jn],
      ),
      rr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n;
        },
        [pn, dn],
      ),
      or = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            n ||
            t === o("WAWebMsgType").MSG_TYPE.LIST ||
            t === o("WAWebMsgType").MSG_TYPE.INTERACTIVE
          );
        },
        [v, pn],
      ),
      ar = 768,
      ir = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = 308;
          return n != null && n.isBot() ? 1 / 0 : t ? r : ar;
        },
        [xn, it],
      ),
      lr = p(
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
      sr = p(
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
      ur = _("kicKey"),
      cr = p(
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
        [ur, et],
      ),
      dr = p(
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
      mr = p(
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
      pr = _("revokeDuration"),
      _r = p(
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
        [v, S, mr, gn],
      ),
      fr = p(
        function (e) {
          var t = e[0];
          if (t != null)
            return o("WAWebEphemeralityWAMUtils").getWamDisappearingModeTrigger(
              t,
            );
        },
        [be],
      ),
      gr = p(
        function (e) {
          var t = e[0];
          if (t != null)
            return o(
              "WAWebEphemeralityWAMUtils",
            ).getWamDisappearingModeInitiatedByMe(t);
        },
        [ve],
      ),
      hr = p(
        function (e) {
          var t = e[0];
          if (t != null)
            return o(
              "WAWebEphemeralityWAMUtils",
            ).getWamDisappearingModeInitiator(t);
        },
        [Ce],
      ),
      yr = _("inviteCode", { default: "" }),
      Cr = _("inviteCodeExp", { default: "" }),
      br = _("inviteGrp", { default: "" }),
      vr = _("inviteGrpName"),
      Sr = _("inviteGrpJpegThum"),
      Rr = _("inviteGrpType"),
      Lr = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          if (t !== o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE) return !1;
          if (!n) return !0;
          var a = Date.now() / 1e3;
          return parseInt(a, 10) >= parseInt(r, 10);
        },
        [v, yr, Cr],
      ),
      Er = p(
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
      kr = _("productHeaderImageRejected", { default: !1 }),
      Ir = p(
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
        [kr, H],
      ),
      Tr = p(
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
      Dr = _("hasReaction", { default: !1 }),
      xr = _("recipients", {
        getDefault: function () {
          return [];
        },
      }),
      $r = _("templateParams", {
        getDefault: function () {
          return [];
        },
      }),
      Pr = _("clientUrl", { default: "" }),
      Nr = _("loc", { default: "" }),
      Mr = _("lat"),
      wr = _("lng"),
      Ar = _("shareDuration"),
      Fr = _("finalLat"),
      Or = _("finalLng"),
      Br = _("star", { default: !1 }),
      Wr = _("currencyCode"),
      qr = _("priceAmount1000"),
      Ur = _("salePriceAmount1000"),
      Vr = _("isVcardOverMmsDocument", { default: !1 }),
      Hr = _("interactiveAnnotations"),
      Gr = p(
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
        [Hr],
      ),
      zr = p(
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
        [Hr],
      ),
      jr = p(
        function (e) {
          var t = e[0];
          return t == null ? null : t[0];
        },
        [Gr],
      ),
      Kr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n != null && n.length > 0;
        },
        [rt, Gr],
      ),
      Qr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n != null;
        },
        [tt, jr],
      ),
      Xr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n;
        },
        [rt, zr],
      ),
      Yr = p(
        function (e) {
          var t,
            n = e[0];
          if (n == null) return null;
          var r = (t = n.embeddedContent) == null ? void 0 : t.embeddedMusic;
          return r == null
            ? null
            : o("WAWebMusicParsingUtils").toMusicMetadata(r);
        },
        [jr],
      ),
      Jr = _("messageSecret"),
      Zr = _("broadcast", { default: !1 }),
      eo = _("vcardList", {
        getDefault: function () {
          return [];
        },
      }),
      to = _("vcardFormattedName"),
      no = _("labels", {
        getDefault: function () {
          return [];
        },
      }),
      ro = _("agentId"),
      oo = _("url"),
      ao = _("retailerId"),
      io = _("businessOwnerJid"),
      lo = _("productId"),
      so = _("productImageCount"),
      uo = _("isMdHistoryMsg", { default: !1 }),
      co = _("campaignId"),
      mo = _("filename"),
      po = _("smbClientCampaignId"),
      _o = _("isCaptionByUser", { default: !1 }),
      fo = _("doNotPlayInline"),
      go = _("thumbnailDirectPath"),
      ho = _("thumbnailHeight"),
      yo = _("thumbnailWidth"),
      Co = _("orderTitle"),
      bo = _("itemCount"),
      vo = _("totalAmount1000"),
      So = _("totalCurrencyCode"),
      Ro = _("futureproofType"),
      Lo = _("futureproofSubtype"),
      Eo = _("ephemeralOutOfSync"),
      ko = _("isAvatar"),
      Io = _("bizPrivacyStatus"),
      To = _("verifiedBizName"),
      Do = _("mediaKey"),
      xo = _("message", { default: "" }),
      $o = _("size", { default: 0 }),
      Po = _("mediaPngThumbnail"),
      No = _("hostedBizEncStateMismatch"),
      Mo = p(
        function (e) {
          var t = e[0];
          return t === "bot_unavailable_fanout";
        },
        [S],
      ),
      wo = p(
        function (e) {
          var t = e[0];
          return t === "view_once_unavailable_fanout";
        },
        [S],
      ),
      Ao = p(
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
      Fo = p(
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
      Oo = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return !r && !t.fromMe && n === o("WAWebBotTypes").BizBotType.BIZ_1P;
        },
        [L, Re, Fo],
      ),
      Bo = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return !r && !t.fromMe && n === o("WAWebBotTypes").BizBotType.BIZ_3P;
        },
        [L, Re, Fo],
      ),
      Wo = _("botPluginSearchProvider"),
      qo = _("botPluginSearchUrl"),
      Uo = _("botResponseTargetId"),
      Vo = _("botPluginSearchQuery"),
      Ho = _("botPluginType"),
      Go = _("botMessageDisclaimerText"),
      zo = _("botModeSelection"),
      jo = _("botModeOverride"),
      Ko = _("richResponse"),
      Qo = _("unifiedResponse"),
      Xo = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t != null && n != null && r != null;
        },
        [Wo, qo, Vo],
      ),
      Yo = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !n && (t == null ? void 0 : t.isBot()) === !0;
        },
        [it, Fo],
      ),
      Jo = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !!(t && o("WAWebUserPrefsMeUser").isMeAccount(n));
        },
        [Yo, Le],
      ),
      Zo = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return n && !t.remote.isBot();
        },
        [L, Yo],
      ),
      ea = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t || n || r;
        },
        [Yo, Oo, Bo],
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
        [aa, mr],
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
        [Ho, Yo],
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
      Ta = _("isCallLink"),
      Da = _("callLinkToken"),
      xa = _("terminatedByDeviceSwitch"),
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
        [et, Ia, Da],
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
        !lr(e) &&
        v(e) !== o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
        !Ln(e) &&
        !["change_number", "change_username", "masked_thread_created"].includes(
          S(e),
        ) &&
        !sr(e)
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
      (l.getPollSelectableOptionsCount = xt),
      (l.getPollInvalidated = $t),
      (l.getPollContentType = Pt),
      (l.getPollType = Nt),
      (l.getPollCorrectOptionIndex = Mt),
      (l.getPollEndTime = wt),
      (l.getPollHideVoterNames = At),
      (l.getPollAllowAddOption = Ft),
      (l.getPollVotesSnapshot = Ot),
      (l.getQuarantineExtractedText = Bt),
      (l.getEventName = Wt),
      (l.getEventDescription = qt),
      (l.getEventStartTime = Ut),
      (l.getEventEndTime = Vt),
      (l.getEventJoinLink = Ht),
      (l.getEventLocation = Gt),
      (l.getIsEventCanceled = zt),
      (l.getEventInvalidated = jt),
      (l.getEventIsScheduledCall = Kt),
      (l.getEventExtraGuestsAllowed = Qt),
      (l.getNativeFlowName = Xt),
      (l.getNativeFlowButtons = Yt),
      (l.getInteractivePayload = Jt),
      (l.getGalaxyFlowDisabled = Zt),
      (l.getSignupCtaTapped = en),
      (l.getPaymentCurrency = tn),
      (l.getPaymentAmount1000 = nn),
      (l.getPaymentMessageReceiverJid = rn),
      (l.getPaymentStatus = on),
      (l.getPaymentTxnStatus = an),
      (l.getPaymentNoteMsg = ln),
      (l.getPaymentRequestMessageKey = sn),
      (l.getPaymentExpiryTimestamp = un),
      (l.getPaymentInviteServiceType = cn),
      (l.getIsFromTemplate = dn),
      (l.getIsLive = mn),
      (l.getIsDynamicReplyButtonsMsg = pn),
      (l.getDynamicReplyButtons = _n),
      (l.getIsEphemeral = fn),
      (l.getIsEdited = gn),
      (l.getIsEditProtocolMsg = hn),
      (l.getStatusCanvasColor = yn),
      (l.getIsUserCreatedType = Cn),
      (l.getIsSentByMeFromWeb = bn),
      (l.getRevokeSender = vn),
      (l.getIsRevokedByMe = Sn),
      (l.getIsInternational = Rn),
      (l.getIsBizNotification = Ln),
      (l.getIsMedia = En),
      (l.getIsForwarded = kn),
      (l.getForwardingScore = In),
      (l.getNumTimesForwarded = Tn),
      (l.FREQUENTLY_FORWARDED_SENTINEL = Dn),
      (l.getIsFrequentlyForwarded = xn),
      (l.getIsQuestion = $n),
      (l.getIsSpoiler = Pn),
      (l.getQuestionResponsesCount = Nn),
      (l.getReadQuestionResponsesCount = Mn),
      (l.getUnreadQuestionResponsesCount = wn),
      (l.getQuestionReplyQuotedMessage = An),
      (l.getIsQuestionReply = Fn),
      (l.getNewsletterAdminProfile = On),
      (l.getIsBotInvoke = Bn),
      (l.getShouldDisplayAsForwarded = Wn),
      (l.getInvis = qn),
      (l.getIsNewMsg = Un),
      (l.getIsSendFailure = Vn),
      (l.getIsFailed = Hn),
      (l.getVcard = Gn),
      (l.getDescription = zn),
      (l.getMatchedText = jn),
      (l.getThumbnail = Kn),
      (l.getThumbnailHQ = Qn),
      (l.getMusicArtwork = Xn),
      (l.getRichPreviewType = Yn),
      (l.getPaymentLinkMetadata = Jn),
      (l.getFaviconMMSMetadata = Zn),
      (l.getPaymentLinkPreviewMetaTags = er),
      (l.getHasPaymentLinkTrustSignals = tr),
      (l.getLinkPreview = nr),
      (l.getSupportsMessageFooter = rr),
      (l.getSupportsMessageFooterLinks = or),
      (l.INITIAL_PAGE_SIZE = ar),
      (l.getInitialPageSize = ir),
      (l.getIsInitialE2ENotification = lr),
      (l.getIsDisappearingModeSystemMessage = sr),
      (l.getKicKey = ur),
      (l.getKicSender = cr),
      (l.getEphemeralExpirationTimestamp = dr),
      (l.getIsRevoke = mr),
      (l.getRevokeDuration = pr),
      (l.getWamEditType = _r),
      (l.getWamDisappearingModeTrigger = fr),
      (l.getWamDisappearingModeInitiatedByMe = gr),
      (l.getWamDisappearingModeInitiator = hr),
      (l.getInviteCode = yr),
      (l.getInviteCodeExp = Cr),
      (l.getInviteGrp = br),
      (l.getInviteGrpName = vr),
      (l.getInviteGrpJpegThum = Sr),
      (l.getInviteGrpType = Rr),
      (l.getIsGroupsV4InviteExpired = Lr),
      (l.getIsNewsletterAdminInviteExpired = Er),
      (l.getProductHeaderImageRejected = kr),
      (l.getProductListHeaderImage = Ir),
      (l.getIsAckPlayable = Tr),
      (l.getHasReaction = Dr),
      (l.getRecipients = xr),
      (l.getTemplateParams = $r),
      (l.getClientUrl = Pr),
      (l.getLoc = Nr),
      (l.getLat = Mr),
      (l.getLng = wr),
      (l.getShareDuration = Ar),
      (l.getFinalLat = Fr),
      (l.getFinalLng = Or),
      (l.getStar = Br),
      (l.getCurrencyCode = Wr),
      (l.getPriceAmount1000 = qr),
      (l.getSalePriceAmount1000 = Ur),
      (l.getIsVcardOverMmsDocument = Vr),
      (l.getInteractiveAnnotations = Hr),
      (l.getMusicAnnotations = Gr),
      (l.getHasEmbeddedMessagesAnnotation = zr),
      (l.getFirstMusicAnnotation = jr),
      (l.isStatusWithMusic = Kr),
      (l.isNewsletterMsgWithMusic = Qr),
      (l.isStatusWithEmbeddedMessages = Xr),
      (l.getFirstMusicAnnotationEmbeddedContent = Yr),
      (l.getMessageSecret = Jr),
      (l.getBroadcast = Zr),
      (l.getVcardList = eo),
      (l.getVcardFormattedName = to),
      (l.getLabels = no),
      (l.getAgentId = ro),
      (l.getUrl = oo),
      (l.getRetailerId = ao),
      (l.getBusinessOwnerJid = io),
      (l.getProductId = lo),
      (l.getProductImageCount = so),
      (l.getIsMdHistoryMsg = uo),
      (l.getCampaignId = co),
      (l.getFilename = mo),
      (l.getSmbClientCampaignId = po),
      (l.getIsCaptionByUser = _o),
      (l.getDoNotPlayInline = fo),
      (l.getThumbnailDirectPath = go),
      (l.getThumbnailHeight = ho),
      (l.getThumbnailWidth = yo),
      (l.getOrderTitle = Co),
      (l.getItemCount = bo),
      (l.getTotalAmount1000 = vo),
      (l.getTotalCurrencyCode = So),
      (l.getFutureproofType = Ro),
      (l.getFutureproofSubtype = Lo),
      (l.getEphemeralOutOfSync = Eo),
      (l.getIsAvatar = ko),
      (l.getBizPrivacyStatus = Io),
      (l.getVerifiedBizName = To),
      (l.getMediaKey = Do),
      (l.getMessage = xo),
      (l.getSize = $o),
      (l.getMediaPngThumbnail = Po),
      (l.getHostedBizEncStateMismatch = No),
      (l.getIsBotFutureproofPlaceholder = Mo),
      (l.getIsViewOncePlaceholder = wo),
      (l.getIsBotQuery = Ao),
      (l.getIsCoexV2Relay = Fo),
      (l.getIsBizBot1pResponse = Oo),
      (l.getIsBizBot3pResponse = Bo),
      (l.getBotPluginSearchProvider = Wo),
      (l.getBotPluginSearchUrl = qo),
      (l.getBotResponseTargetId = Uo),
      (l.getBotPluginSearchQuery = Vo),
      (l.getBotPluginType = Ho),
      (l.getBotMessageDisclaimerText = Go),
      (l.getBotModeSelection = zo),
      (l.getBotModeOverride = jo),
      (l.getRichResponse = Ko),
      (l.getUnifiedResponse = Qo),
      (l.getIsBotSearchResponse = Xo),
      (l.getIsMetaBotResponse = Yo),
      (l.isMetaBotResponseToMyInvoke = Jo),
      (l.getIsMetaBotInvokeResponse = Zo),
      (l.getIsBotResponse = ea),
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
      (l.getCallParticipants = Ia),
      (l.getIsCallLink = Ta),
      (l.getCallLinkToken = Da),
      (l.getTerminatedByDeviceSwitch = xa),
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
