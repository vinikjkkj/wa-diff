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
          return t != null && o("WAWebUserPrefsMeUser").isMeAccount(t);
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
      $n = _("readQuestionResponsesCount"),
      Pn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t - n;
        },
        [xn, $n],
      ),
      Nn = _("questionReplyQuotedMessage"),
      Mn = p(
        function (e) {
          var t = e[0];
          return t != null;
        },
        [Nn],
      ),
      wn = _("newsletterAdminProfile"),
      An = p(
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
      Fn = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            o = e[3];
          return t || n || o || !r;
        },
        [Rn, rt, it, An],
      ),
      On = _("invis", { default: !1 }),
      Bn = _("isNewMsg", { default: !1 }),
      Wn = _("isSendFailure", { default: !1 }),
      qn = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (t && n != null && n < o("WAWebAck").ACK.CLOCK) || r;
        },
        [it, F, Wn],
      ),
      Un = p(
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
      Vn = _("description"),
      Hn = _("matchedText", { default: "" }),
      Gn = _("thumbnail"),
      zn = _("thumbnailHQ"),
      jn = _("musicArtwork"),
      Kn = _("musicData"),
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
        [Et, Lt, Vn, Hn],
      ),
      tr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n;
        },
        [cn, sn],
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
        [v, cn],
      ),
      rr = 768,
      or = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = 308;
          return n != null && n.isBot() ? 1 / 0 : t ? r : rr;
        },
        [In, lt],
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
        [lr, tt],
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
        [v, S, cr, pn],
      ),
      pr = p(
        function (e) {
          var t = e[0];
          if (t != null)
            return o("WAWebEphemeralityWAMUtils").getWamDisappearingModeTrigger(
              t,
            );
        },
        [ve],
      ),
      _r = p(
        function (e) {
          var t = e[0];
          if (t != null)
            return o(
              "WAWebEphemeralityWAMUtils",
            ).getWamDisappearingModeInitiatedByMe(t);
        },
        [Se],
      ),
      fr = p(
        function (e) {
          var t = e[0];
          if (t != null)
            return o(
              "WAWebEphemeralityWAMUtils",
            ).getWamDisappearingModeInitiator(t);
        },
        [be],
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
        [v, $e],
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
        [Lr, G],
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
        [v, rt],
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
        [ot, Vr],
      ),
      jr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n != null;
        },
        [nt, Gr],
      ),
      Kr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n;
        },
        [ot, Hr],
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
      uo = _("pmCampaignId"),
      co = _("filename"),
      mo = _("smbClientCampaignId"),
      po = _("isCaptionByUser", { default: !1 }),
      _o = _("doNotPlayInline"),
      fo = _("thumbnailDirectPath"),
      go = _("thumbnailHeight"),
      ho = _("thumbnailWidth"),
      yo = _("orderTitle"),
      Co = _("itemCount"),
      bo = _("totalAmount1000"),
      vo = _("totalCurrencyCode"),
      So = _("futureproofType"),
      Ro = _("futureproofSubtype"),
      Lo = _("ephemeralOutOfSync"),
      Eo = _("isAvatar"),
      ko = _("bizPrivacyStatus"),
      Io = _("verifiedBizName"),
      To = _("mediaKey"),
      Do = _("message", { default: "" }),
      xo = _("size", { default: 0 }),
      $o = _("mediaPngThumbnail"),
      Po = _("hostedBizEncStateMismatch"),
      No = _("aeaAutoUpgrade"),
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
        [A, w],
      ),
      Oo = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !n && t === o("WAWebBotTypes").BizBotType.BIZ_1P;
        },
        [Le, Fo],
      ),
      Bo = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !t.fromMe && n;
        },
        [L, Oo],
      ),
      Wo = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return !r && !t.fromMe && n === o("WAWebBotTypes").BizBotType.BIZ_3P;
        },
        [L, Le, Fo],
      ),
      qo = _("botPluginSearchProvider"),
      Uo = _("botPluginSearchUrl"),
      Vo = _("botResponseTargetId"),
      Ho = _("botPluginSearchQuery"),
      Go = _("botPluginType"),
      zo = _("botMessageDisclaimerText"),
      jo = _("richResponse"),
      Ko = _("unifiedResponse"),
      Qo = _("unifiedResponseMutationMediaList"),
      Xo = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t != null && n != null && r != null;
        },
        [qo, Uo, Ho],
      ),
      Yo = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !n && (t == null ? void 0 : t.isBot()) === !0;
        },
        [lt, Fo],
      ),
      Jo = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !!(t && o("WAWebUserPrefsMeUser").isMeAccount(n));
        },
        [Yo, Ee],
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
        [Yo, Bo, Wo],
      ),
      ta = p(
        function (e) {
          var t = e[0];
          return !t.fromMe && t.remote.isAiHub();
        },
        [L],
      ),
      na = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t || n || r;
        },
        [Yo, Wo, ta],
      ),
      ra = p(
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
        [pn, xt, na, Oo, Te],
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
        [sa, cr],
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
        [Go, Yo],
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
        [v, S, Sa, lt],
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
        [v, N, ka],
      ),
      Ta = _("bytesSent"),
      Da = _("bytesReceived"),
      xa = _("callParticipants"),
      $a = p(
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
        [xa],
      ),
      Pa = _("isCallLink"),
      Na = _("callLinkToken"),
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
        [tt, $a, Na],
      ),
      Aa = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n;
        },
        [tt, wa],
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
        [qa, P],
      );
    function Ga(e) {
      var t =
        v(e) === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE &&
        o("WAWebUserPrefsMeUser").isMeAccount(I(e));
      return (
        !t &&
        !ar(e) &&
        v(e) !== o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
        !vn(e) &&
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
      (l.getUnreadQuestionResponsesCount = Pn),
      (l.getQuestionReplyQuotedMessage = Nn),
      (l.getIsQuestionReply = Mn),
      (l.getNewsletterAdminProfile = wn),
      (l.getShouldDisplayAsForwarded = Fn),
      (l.getInvis = On),
      (l.getIsNewMsg = Bn),
      (l.getIsSendFailure = Wn),
      (l.getIsFailed = qn),
      (l.getVcard = Un),
      (l.getDescription = Vn),
      (l.getMatchedText = Hn),
      (l.getThumbnail = Gn),
      (l.getThumbnailHQ = zn),
      (l.getMusicArtwork = jn),
      (l.getMusicData = Kn),
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
      (l.getPmCampaignId = uo),
      (l.getFilename = co),
      (l.getSmbClientCampaignId = mo),
      (l.getIsCaptionByUser = po),
      (l.getDoNotPlayInline = _o),
      (l.getThumbnailDirectPath = fo),
      (l.getThumbnailHeight = go),
      (l.getThumbnailWidth = ho),
      (l.getOrderTitle = yo),
      (l.getItemCount = Co),
      (l.getTotalAmount1000 = bo),
      (l.getTotalCurrencyCode = vo),
      (l.getFutureproofType = So),
      (l.getFutureproofSubtype = Ro),
      (l.getEphemeralOutOfSync = Lo),
      (l.getIsAvatar = Eo),
      (l.getBizPrivacyStatus = ko),
      (l.getVerifiedBizName = Io),
      (l.getMediaKey = To),
      (l.getMessage = Do),
      (l.getSize = xo),
      (l.getMediaPngThumbnail = $o),
      (l.getHostedBizEncStateMismatch = Po),
      (l.getAeaAutoUpgrade = No),
      (l.getIsBotFutureproofPlaceholder = Mo),
      (l.getIsViewOncePlaceholder = wo),
      (l.getIsBotQuery = Ao),
      (l.getIsCoexV2Relay = Fo),
      (l.getIsBizBot1pMessage = Oo),
      (l.getIsBizBot1pResponse = Bo),
      (l.getBotPluginSearchProvider = qo),
      (l.getBotPluginSearchUrl = Uo),
      (l.getBotResponseTargetId = Vo),
      (l.getBotPluginSearchQuery = Ho),
      (l.getBotPluginType = Go),
      (l.getBotMessageDisclaimerText = zo),
      (l.getRichResponse = jo),
      (l.getUnifiedResponse = Ko),
      (l.getUnifiedResponseMutationMediaList = Qo),
      (l.getIsBotSearchResponse = Xo),
      (l.getIsMetaBotResponse = Yo),
      (l.isMetaBotResponseToMyInvoke = Jo),
      (l.getIsMetaBotInvokeResponse = Zo),
      (l.getIsBotResponse = ea),
      (l.getShouldShowEditedIndicator = ra),
      (l.getIsBotFeedbackMessage = oa),
      (l.getHsmTag = aa),
      (l.getIsAuthenticationMessage = ia),
      (l.getIsMarketingTemplateTag = la),
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
      (l.getCallParticipants = $a),
      (l.getIsCallLink = Pa),
      (l.getCallLinkToken = Na),
      (l.getSelfOtherDeviceConnected = Ma),
      (l.getIsAdHocGroupCall = wa),
      (l.getIsGroupCall = Aa),
      (l.getFinalCallOutcome = Fa),
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
