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
      Nt = _("pollContentType", {
        default: o("WAWebPollCreationUtils").PollContentType.TEXT,
      }),
      Mt = _("pollType", {
        default: o("WAWebPollCreationUtils").PollType.POLL,
      }),
      wt = _("correctOptionIndex"),
      At = _("pollEndTime"),
      Ft = _("pollHideVoterNames"),
      Ot = _("pollAllowAddOption"),
      Bt = _("pollVotesSnapshot"),
      Wt = _("quarantineExtractedText"),
      qt = _("eventName", { default: "" }),
      Ut = _("eventDescription"),
      Vt = _("eventStartTime", { default: 0 }),
      Ht = _("eventEndTime"),
      Gt = _("eventJoinLink"),
      zt = _("eventLocation"),
      jt = _("isEventCanceled", { default: !1 }),
      Kt = _("eventInvalidated", { default: !1 }),
      Qt = _("eventIsScheduledCall", { default: !1 }),
      Xt = _("eventExtraGuestsAllowed", { default: !1 }),
      Yt = _("nativeFlowName"),
      Jt = _("nativeFlowButtons"),
      Zt = _("interactivePayload"),
      en = _("galaxyFlowDisabled", { default: !1 }),
      tn = _("signupCtaTapped", { default: !1 }),
      nn = _("paymentCurrency", { default: "" }),
      rn = _("paymentAmount1000", { default: 0 }),
      on = _("paymentMessageReceiverJid"),
      an = _("paymentStatus"),
      ln = _("paymentTxnStatus"),
      sn = _("paymentNoteMsg"),
      un = _("paymentRequestMessageKey"),
      cn = _("paymentExpiryTimestamp"),
      dn = _("paymentInviteServiceType"),
      mn = _("isFromTemplate", { default: !1 }),
      pn = _("isLive", { default: !1 }),
      _n = _("isDynamicReplyButtonsMsg", { default: !1 }),
      fn = _("dynamicReplyButtons"),
      gn = p(
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
      hn = p(
        function (e) {
          var t = e[0];
          return t != null;
        },
        [G],
      ),
      yn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.PROTOCOL && n === "message_edit"
          );
        },
        [v, S],
      ),
      Cn = p(
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
      bn = p(
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
      vn = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t.fromMe && n && r;
        },
        [L, ze, bn],
      ),
      Sn = _("revokeSender"),
      Rn = p(
        function (e) {
          var t = e[0];
          return t != null && o("WAWebUserPrefsMeUser").isMeAccount(t);
        },
        [Sn],
      ),
      Ln = p(
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
      En = p(
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
      kn = p(
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
      In = _("isForwarded", { default: !1 }),
      Tn = _("forwardingScore"),
      Dn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return n == null ? (t ? 1 : 0) : n || 0;
        },
        [In, Tn],
      ),
      xn = 127,
      $n = p(
        function (e) {
          var t = e[0];
          return t >= xn;
        },
        [Dn],
      ),
      Pn = _("isQuestion", { default: !1 }),
      Nn = _("isSpoiler", { default: !1 }),
      Mn = _("questionResponsesCount"),
      wn = _("readQuestionResponsesCount"),
      An = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t - n;
        },
        [Mn, wn],
      ),
      Fn = _("questionReplyQuotedMessage"),
      On = p(
        function (e) {
          var t = e[0];
          return t != null;
        },
        [Fn],
      ),
      Bn = _("newsletterAdminProfile"),
      Wn = p(
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
      qn = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            o = e[3];
          return t || n || o || !r;
        },
        [In, nt, at, Wn],
      ),
      Un = _("invis", { default: !1 }),
      Vn = _("isNewMsg", { default: !1 }),
      Hn = _("isSendFailure", { default: !1 }),
      Gn = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (t && n != null && n < o("WAWebAck").ACK.CLOCK) || r;
        },
        [at, A, Hn],
      ),
      zn = p(
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
      jn = _("description"),
      Kn = _("matchedText", { default: "" }),
      Qn = _("thumbnail"),
      Xn = _("thumbnailHQ"),
      Yn = _("musicArtwork"),
      Jn = _("richPreviewType", {
        default: o("WAWebProtobufsE2E.pb")
          .Message$ExtendedTextMessage$PreviewType.NONE,
      }),
      Zn = _("paymentLinkMetadata", { default: null }),
      er = _("faviconMMSMetadata", { default: null }),
      tr = p(
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
        [Zn],
      ),
      nr = p(
        function (e) {
          var t = e[0];
          return (
            (t == null ? void 0 : t.isBusinessVerified) === !0 &&
            (t == null ? void 0 : t.providerName) != null
          );
        },
        [tr],
      ),
      rr = p(
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
        [Et, Lt, jn, Kn],
      ),
      or = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n;
        },
        [_n, mn],
      ),
      ar = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            n ||
            t === o("WAWebMsgType").MSG_TYPE.LIST ||
            t === o("WAWebMsgType").MSG_TYPE.INTERACTIVE
          );
        },
        [v, _n],
      ),
      ir = 768,
      lr = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = 308;
          return n != null && n.isBot() ? 1 / 0 : t ? r : ir;
        },
        [$n, it],
      ),
      sr = p(
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
      ur = p(
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
      cr = _("kicKey"),
      dr = p(
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
        [cr, et],
      ),
      mr = p(
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
      pr = p(
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
      _r = _("revokeDuration"),
      fr = p(
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
        [v, S, pr, hn],
      ),
      gr = p(
        function (e) {
          var t = e[0];
          if (t != null)
            return o("WAWebEphemeralityWAMUtils").getWamDisappearingModeTrigger(
              t,
            );
        },
        [be],
      ),
      hr = p(
        function (e) {
          var t = e[0];
          if (t != null)
            return o(
              "WAWebEphemeralityWAMUtils",
            ).getWamDisappearingModeInitiatedByMe(t);
        },
        [ve],
      ),
      yr = p(
        function (e) {
          var t = e[0];
          if (t != null)
            return o(
              "WAWebEphemeralityWAMUtils",
            ).getWamDisappearingModeInitiator(t);
        },
        [Ce],
      ),
      Cr = _("inviteCode", { default: "" }),
      br = _("inviteCodeExp", { default: "" }),
      vr = _("inviteGrp", { default: "" }),
      Sr = _("inviteGrpName"),
      Rr = _("inviteGrpJpegThum"),
      Lr = _("inviteGrpType"),
      Er = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          if (t !== o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE) return !1;
          if (!n) return !0;
          var a = Date.now() / 1e3;
          return parseInt(a, 10) >= parseInt(r, 10);
        },
        [v, Cr, br],
      ),
      kr = p(
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
      Ir = _("productHeaderImageRejected", { default: !1 }),
      Tr = p(
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
        [Ir, H],
      ),
      Dr = p(
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
      xr = _("hasReaction", { default: !1 }),
      $r = _("recipients", {
        getDefault: function () {
          return [];
        },
      }),
      Pr = _("templateParams", {
        getDefault: function () {
          return [];
        },
      }),
      Nr = _("clientUrl", { default: "" }),
      Mr = _("loc", { default: "" }),
      wr = _("lat"),
      Ar = _("lng"),
      Fr = _("shareDuration"),
      Or = _("finalLat"),
      Br = _("finalLng"),
      Wr = _("star", { default: !1 }),
      qr = _("currencyCode"),
      Ur = _("priceAmount1000"),
      Vr = _("salePriceAmount1000"),
      Hr = _("isVcardOverMmsDocument", { default: !1 }),
      Gr = _("interactiveAnnotations"),
      zr = p(
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
        [Gr],
      ),
      jr = p(
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
        [Gr],
      ),
      Kr = p(
        function (e) {
          var t = e[0];
          return t == null ? null : t[0];
        },
        [zr],
      ),
      Qr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n != null && n.length > 0;
        },
        [rt, zr],
      ),
      Xr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n != null;
        },
        [tt, Kr],
      ),
      Yr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n;
        },
        [rt, jr],
      ),
      Jr = p(
        function (e) {
          var t,
            n = e[0];
          if (n == null) return null;
          var r = (t = n.embeddedContent) == null ? void 0 : t.embeddedMusic;
          return r == null
            ? null
            : o("WAWebMusicParsingUtils").toMusicMetadata(r);
        },
        [Kr],
      ),
      Zr = _("messageSecret"),
      eo = _("broadcast", { default: !1 }),
      to = _("vcardList", {
        getDefault: function () {
          return [];
        },
      }),
      no = _("vcardFormattedName"),
      ro = _("labels", {
        getDefault: function () {
          return [];
        },
      }),
      oo = _("agentId"),
      ao = _("url"),
      io = _("retailerId"),
      lo = _("businessOwnerJid"),
      so = _("productId"),
      uo = _("productImageCount"),
      co = _("isMdHistoryMsg", { default: !1 }),
      mo = _("campaignId"),
      po = _("filename"),
      _o = _("smbClientCampaignId"),
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
      wo = p(
        function (e) {
          var t = e[0];
          return t === "bot_unavailable_fanout";
        },
        [S],
      ),
      Ao = p(
        function (e) {
          var t = e[0];
          return t === "view_once_unavailable_fanout";
        },
        [S],
      ),
      Fo = p(
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
      Oo = p(
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
      Bo = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !n && t === o("WAWebBotTypes").BizBotType.BIZ_1P;
        },
        [Re, Oo],
      ),
      Wo = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !t.fromMe && n;
        },
        [L, Bo],
      ),
      qo = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return !r && !t.fromMe && n === o("WAWebBotTypes").BizBotType.BIZ_3P;
        },
        [L, Re, Oo],
      ),
      Uo = _("botPluginSearchProvider"),
      Vo = _("botPluginSearchUrl"),
      Ho = _("botResponseTargetId"),
      Go = _("botPluginSearchQuery"),
      zo = _("botPluginType"),
      jo = _("botMessageDisclaimerText"),
      Ko = _("botModeSelection"),
      Qo = _("botModeOverride"),
      Xo = _("richResponse"),
      Yo = _("unifiedResponse"),
      Jo = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t != null && n != null && r != null;
        },
        [Uo, Vo, Go],
      ),
      Zo = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !n && (t == null ? void 0 : t.isBot()) === !0;
        },
        [it, Oo],
      ),
      ea = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !!(t && o("WAWebUserPrefsMeUser").isMeAccount(n));
        },
        [Zo, Le],
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
        [Zo, Wo, qo],
      ),
      ra = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            a = e[3],
            i = e[4],
            l = e[5];
          return (
            (t || n) &&
            !r &&
            !i &&
            !(
              a &&
              (l === o("WAWebBotTypes").BotMsgEditType.INNER ||
                l === o("WAWebBotTypes").BotMsgEditType.LAST)
            )
          );
        },
        [hn, xt, Zo, Bo, qo, Ie],
      ),
      oa = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.PROTOCOL && n === "bot_feedback"
          );
        },
        [v, S],
      ),
      aa = _("hsmTag"),
      ia = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebBusinessHSMTypes").HSM_TAG_TYPE.AUTHENTICATION;
        },
        [aa],
      ),
      la = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebBusinessHSMTypes").HSM_TAG_TYPE.MARKETING;
        },
        [aa],
      ),
      sa = _("botRespOrInvocationRevokeBotWid"),
      ua = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !!(t != null && t.isBot() && n);
        },
        [sa, pr],
      ),
      ca = p(
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
        [zo, Zo],
      ),
      da = _("botPluginMaybeParent"),
      ma = _("botReelPluginThumbnailCdnUrl"),
      pa = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebMsgType").MSG_TYPE.BIZ_CONTENT_PLACEHOLDER;
        },
        [v],
      ),
      _a = _("statusMentioned"),
      fa = _("isWamoSub"),
      ga = _("hasPaidPartnershipLabel"),
      ha = _("aiProvenance"),
      ya = p(
        function (e) {
          var t = e[0];
          return o("WAWebMsgAIProvenance").hasAIProvenanceSignal(t);
        },
        [ha],
      ),
      Ca = _("isVideoCall"),
      ba = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (
            t === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
            (n === "miss_video" || n === "miss_group_video" || r === !0)
          );
        },
        [v, S, Ca],
      ),
      va = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t === o("WAWebMsgType").MSG_TYPE.CALL_LOG ? n.id : null;
        },
        [v, L],
      ),
      Sa = _("callOutcome"),
      Ra = _("callSilenceReason"),
      La = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (
            t === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
            (n === "silence" || r != null)
          );
        },
        [v, S, Ra],
      ),
      Ea = p(
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
        [v, S, Sa, it],
      ),
      ka = _("callDuration"),
      Ia = p(
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
        [v, P, ka],
      ),
      Ta = _("bytesSent"),
      Da = _("bytesReceived"),
      xa = _("callParticipants"),
      $a = _("isCallLink"),
      Pa = _("callLinkToken"),
      Na = _("terminatedByDeviceSwitch"),
      Ma = _("selfOtherDeviceConnected"),
      wa = p(
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
        [et, xa, Pa],
      ),
      Aa = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n;
        },
        [et, wa],
      ),
      Fa = _("finalCallOutcome"),
      Oa = _("groupHistoryBundleMessageKey"),
      Ba = _("groupHistoryBundleMetadata"),
      Wa = _("groupHistoryIndividualMessageInfo"),
      qa = p(
        function (e) {
          var t,
            n = e[0],
            r = e[1];
          return (t = n == null ? void 0 : n.bundleMessageKey) != null ? t : r;
        },
        [Wa, Oa],
      ),
      Ua = p(
        function (e) {
          var t = e[0];
          return t == null ? void 0 : t.isEditedAfterReceivedAsHistory;
        },
        [Wa],
      ),
      Va = p(
        function (e) {
          var t = e[0];
          return t == null ? void 0 : t.bundleSender;
        },
        [Wa],
      ),
      Ha = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t != null && r("WAWebWid").equals(t.remote, n);
        },
        [qa, $],
      );
    function Ga(e) {
      var t =
        v(e) === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE &&
        o("WAWebUserPrefsMeUser").isMeAccount(I(e));
      return (
        !t &&
        !sr(e) &&
        v(e) !== o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
        !En(e) &&
        !["change_number", "change_username", "masked_thread_created"].includes(
          S(e),
        ) &&
        !ur(e)
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
      (l.getHasContributedPollOptions = xt),
      (l.getPollSelectableOptionsCount = $t),
      (l.getPollInvalidated = Pt),
      (l.getPollContentType = Nt),
      (l.getPollType = Mt),
      (l.getPollCorrectOptionIndex = wt),
      (l.getPollEndTime = At),
      (l.getPollHideVoterNames = Ft),
      (l.getPollAllowAddOption = Ot),
      (l.getPollVotesSnapshot = Bt),
      (l.getQuarantineExtractedText = Wt),
      (l.getEventName = qt),
      (l.getEventDescription = Ut),
      (l.getEventStartTime = Vt),
      (l.getEventEndTime = Ht),
      (l.getEventJoinLink = Gt),
      (l.getEventLocation = zt),
      (l.getIsEventCanceled = jt),
      (l.getEventInvalidated = Kt),
      (l.getEventIsScheduledCall = Qt),
      (l.getEventExtraGuestsAllowed = Xt),
      (l.getNativeFlowName = Yt),
      (l.getNativeFlowButtons = Jt),
      (l.getInteractivePayload = Zt),
      (l.getGalaxyFlowDisabled = en),
      (l.getSignupCtaTapped = tn),
      (l.getPaymentCurrency = nn),
      (l.getPaymentAmount1000 = rn),
      (l.getPaymentMessageReceiverJid = on),
      (l.getPaymentStatus = an),
      (l.getPaymentTxnStatus = ln),
      (l.getPaymentNoteMsg = sn),
      (l.getPaymentRequestMessageKey = un),
      (l.getPaymentExpiryTimestamp = cn),
      (l.getPaymentInviteServiceType = dn),
      (l.getIsFromTemplate = mn),
      (l.getIsLive = pn),
      (l.getIsDynamicReplyButtonsMsg = _n),
      (l.getDynamicReplyButtons = fn),
      (l.getIsEphemeral = gn),
      (l.getIsEdited = hn),
      (l.getIsEditProtocolMsg = yn),
      (l.getStatusCanvasColor = Cn),
      (l.getIsUserCreatedType = bn),
      (l.getIsSentByMeFromWeb = vn),
      (l.getRevokeSender = Sn),
      (l.getIsRevokedByMe = Rn),
      (l.getIsInternational = Ln),
      (l.getIsBizNotification = En),
      (l.getIsMedia = kn),
      (l.getIsForwarded = In),
      (l.getForwardingScore = Tn),
      (l.getNumTimesForwarded = Dn),
      (l.FREQUENTLY_FORWARDED_SENTINEL = xn),
      (l.getIsFrequentlyForwarded = $n),
      (l.getIsQuestion = Pn),
      (l.getIsSpoiler = Nn),
      (l.getQuestionResponsesCount = Mn),
      (l.getReadQuestionResponsesCount = wn),
      (l.getUnreadQuestionResponsesCount = An),
      (l.getQuestionReplyQuotedMessage = Fn),
      (l.getIsQuestionReply = On),
      (l.getNewsletterAdminProfile = Bn),
      (l.getIsBotInvoke = Wn),
      (l.getShouldDisplayAsForwarded = qn),
      (l.getInvis = Un),
      (l.getIsNewMsg = Vn),
      (l.getIsSendFailure = Hn),
      (l.getIsFailed = Gn),
      (l.getVcard = zn),
      (l.getDescription = jn),
      (l.getMatchedText = Kn),
      (l.getThumbnail = Qn),
      (l.getThumbnailHQ = Xn),
      (l.getMusicArtwork = Yn),
      (l.getRichPreviewType = Jn),
      (l.getPaymentLinkMetadata = Zn),
      (l.getFaviconMMSMetadata = er),
      (l.getPaymentLinkPreviewMetaTags = tr),
      (l.getHasPaymentLinkTrustSignals = nr),
      (l.getLinkPreview = rr),
      (l.getSupportsMessageFooter = or),
      (l.getSupportsMessageFooterLinks = ar),
      (l.INITIAL_PAGE_SIZE = ir),
      (l.getInitialPageSize = lr),
      (l.getIsInitialE2ENotification = sr),
      (l.getIsDisappearingModeSystemMessage = ur),
      (l.getKicKey = cr),
      (l.getKicSender = dr),
      (l.getEphemeralExpirationTimestamp = mr),
      (l.getIsRevoke = pr),
      (l.getRevokeDuration = _r),
      (l.getWamEditType = fr),
      (l.getWamDisappearingModeTrigger = gr),
      (l.getWamDisappearingModeInitiatedByMe = hr),
      (l.getWamDisappearingModeInitiator = yr),
      (l.getInviteCode = Cr),
      (l.getInviteCodeExp = br),
      (l.getInviteGrp = vr),
      (l.getInviteGrpName = Sr),
      (l.getInviteGrpJpegThum = Rr),
      (l.getInviteGrpType = Lr),
      (l.getIsGroupsV4InviteExpired = Er),
      (l.getIsNewsletterAdminInviteExpired = kr),
      (l.getProductHeaderImageRejected = Ir),
      (l.getProductListHeaderImage = Tr),
      (l.getIsAckPlayable = Dr),
      (l.getHasReaction = xr),
      (l.getRecipients = $r),
      (l.getTemplateParams = Pr),
      (l.getClientUrl = Nr),
      (l.getLoc = Mr),
      (l.getLat = wr),
      (l.getLng = Ar),
      (l.getShareDuration = Fr),
      (l.getFinalLat = Or),
      (l.getFinalLng = Br),
      (l.getStar = Wr),
      (l.getCurrencyCode = qr),
      (l.getPriceAmount1000 = Ur),
      (l.getSalePriceAmount1000 = Vr),
      (l.getIsVcardOverMmsDocument = Hr),
      (l.getInteractiveAnnotations = Gr),
      (l.getMusicAnnotations = zr),
      (l.getHasEmbeddedMessagesAnnotation = jr),
      (l.getFirstMusicAnnotation = Kr),
      (l.isStatusWithMusic = Qr),
      (l.isNewsletterMsgWithMusic = Xr),
      (l.isStatusWithEmbeddedMessages = Yr),
      (l.getFirstMusicAnnotationEmbeddedContent = Jr),
      (l.getMessageSecret = Zr),
      (l.getBroadcast = eo),
      (l.getVcardList = to),
      (l.getVcardFormattedName = no),
      (l.getLabels = ro),
      (l.getAgentId = oo),
      (l.getUrl = ao),
      (l.getRetailerId = io),
      (l.getBusinessOwnerJid = lo),
      (l.getProductId = so),
      (l.getProductImageCount = uo),
      (l.getIsMdHistoryMsg = co),
      (l.getCampaignId = mo),
      (l.getFilename = po),
      (l.getSmbClientCampaignId = _o),
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
      (l.getIsBotFutureproofPlaceholder = wo),
      (l.getIsViewOncePlaceholder = Ao),
      (l.getIsBotQuery = Fo),
      (l.getIsCoexV2Relay = Oo),
      (l.getIsBizBot1pMessage = Bo),
      (l.getIsBizBot1pResponse = Wo),
      (l.getIsBizBot3pResponse = qo),
      (l.getBotPluginSearchProvider = Uo),
      (l.getBotPluginSearchUrl = Vo),
      (l.getBotResponseTargetId = Ho),
      (l.getBotPluginSearchQuery = Go),
      (l.getBotPluginType = zo),
      (l.getBotMessageDisclaimerText = jo),
      (l.getBotModeSelection = Ko),
      (l.getBotModeOverride = Qo),
      (l.getRichResponse = Xo),
      (l.getUnifiedResponse = Yo),
      (l.getIsBotSearchResponse = Jo),
      (l.getIsMetaBotResponse = Zo),
      (l.isMetaBotResponseToMyInvoke = ea),
      (l.getIsMetaBotInvokeResponse = ta),
      (l.getIsBotResponse = na),
      (l.getShouldShowEditedIndicator = ra),
      (l.getIsBotFeedbackMessage = oa),
      (l.getHsmTag = aa),
      (l.getIsAuthenticationMessage = ia),
      (l.getIsMarketingTemplateTag = la),
      (l.getBotRespOrInvocationRevokeBotWid = sa),
      (l.getIsRevokeForMsgFromOrDeliveredToBot = ua),
      (l.getIsBotPluginCarouselMsg = ca),
      (l.getBotPluginMaybeParent = da),
      (l.getBotReelPluginThumbnailCdnUrl = ma),
      (l.getIsBizContentPlaceholder = pa),
      (l.getStatusMentioned = _a),
      (l.getIsWamoSub = fa),
      (l.getHasPaidPartnershipLabel = ga),
      (l.getAiProvenance = ha),
      (l.getIsAiContent = ya),
      (l.getIsVideoCall = ba),
      (l.getCallId = va),
      (l.getCallOutcome = Sa),
      (l.getCallSilenceReason = Ra),
      (l.getIsCallSilenced = La),
      (l.getIsMissedCall = Ea),
      (l.getCallDuration = ka),
      (l.getIsVisibleCallLog = Ia),
      (l.getBytesSent = Ta),
      (l.getBytesReceived = Da),
      (l.getCallParticipants = xa),
      (l.getIsCallLink = $a),
      (l.getCallLinkToken = Pa),
      (l.getTerminatedByDeviceSwitch = Na),
      (l.getSelfOtherDeviceConnected = Ma),
      (l.getIsAdHocGroupCall = wa),
      (l.getIsGroupCall = Aa),
      (l.getFinalCallOutcome = Fa),
      (l.getGroupHistoryBundleMessageKeyDeprecated = Oa),
      (l.getGroupHistoryBundleMetadata = Ba),
      (l.getGroupHistoryIndividualMessageInfo = Wa),
      (l.getGroupHistoryBundleMessageKey = qa),
      (l.getIsEditedAfterReceivedAsHistory = Ua),
      (l.getGroupHistoryBundleSender = Va),
      (l.getIsGroupHistoryMessageInOwnChat = Ha),
      (l.isRealMessage = Ga));
  },
  98,
);
