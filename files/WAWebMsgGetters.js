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
      le = _("rcat"),
      se = _("isViewOnce", { default: !1 }),
      ue = _("isGif", { default: !1 }),
      ce = _("gifAttribution", {
        default: o("WAWebProtobufsE2E.pb").Message$VideoMessage$Attribution
          .NONE,
      }),
      de = _("ctwaContext"),
      me = _("mimetype"),
      pe = _("filehash"),
      _e = _("deprecatedMms3Url"),
      fe = _("waveform"),
      ge = _("disappearingModeInitiator"),
      he = _("disappearingModeTrigger"),
      ye = _("disappearingModeInitiatedByMe"),
      Ce = _("activeBotMsgStreamingInProgress"),
      be = _("bizBotType"),
      ve = _("botTargetSenderJid"),
      Se = _("isSupportAIMessage"),
      Re = _("lastBotEditBodyLength"),
      Le = _("botEditType"),
      Ee = _("forwardedNewsletterMessageInfo"),
      ke = _("forwardedAiBotMessageInfo"),
      Ie = _("newsletterAdminInviteInfo"),
      Te = _("newsletterFollowerInviteInfo"),
      De = _("isGroupStatus"),
      xe = p(
        function (e) {
          var t = e[0];
          return t === !0;
        },
        [De],
      ),
      $e = _("isNewsletterStatus", { default: !1 }),
      Pe = _("statusAttributions");
    function Ne(e) {
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
    var Me = p(
        function (e) {
          var t = e[0];
          return Ne(t);
        },
        [Pe],
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
        [Pe],
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
        [me],
      ),
      qe = p(
        function (e) {
          var t = e[0];
          return t == null ? null : o("WABase64").encodeB64UrlSafe(t, !0);
        },
        [le],
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
        [Je, Ee],
      ),
      et = p(
        function (e) {
          var t = e[0],
            n = e[1],
            o = e[2];
          return r("WAWebWid").isStatus(t.remote) || n || o;
        },
        [R, xe, $e],
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
        [R, nt, Ye, et, xe, $e, Je, k, x],
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
        [se, st, ct],
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
      Gt = _("nativeFlowName"),
      zt = _("nativeFlowButtons"),
      jt = _("interactivePayload"),
      Kt = _("galaxyFlowDisabled", { default: !1 }),
      Qt = _("signupCtaTapped", { default: !1 }),
      Xt = _("paymentCurrency", { default: "" }),
      Yt = _("paymentAmount1000", { default: 0 }),
      Jt = _("paymentMessageReceiverJid"),
      Zt = _("paymentStatus"),
      en = _("paymentTxnStatus"),
      tn = _("paymentNoteMsg"),
      nn = _("paymentRequestMessageKey"),
      rn = _("paymentExpiryTimestamp"),
      on = _("paymentInviteServiceType"),
      an = _("isFromTemplate", { default: !1 }),
      ln = _("isLive", { default: !1 }),
      sn = _("isDynamicReplyButtonsMsg", { default: !1 }),
      un = _("dynamicReplyButtons"),
      cn = p(
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
      dn = p(
        function (e) {
          var t = e[0];
          return t != null;
        },
        [U],
      ),
      mn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.PROTOCOL && n === "message_edit"
          );
        },
        [b, v],
      ),
      pn = p(
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
      _n = p(
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
      fn = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t.fromMe && n && r;
        },
        [R, Ve, _n],
      ),
      gn = _("revokeSender"),
      hn = p(
        function (e) {
          var t = e[0];
          return t != null && o("WAWebUserPrefsMeUser").isMeAccount(t);
        },
        [gn],
      ),
      yn = p(
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
      Cn = p(
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
      bn = p(
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
      vn = _("isForwarded", { default: !1 }),
      Sn = _("forwardingScore"),
      Rn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return n == null ? (t ? 1 : 0) : n || 0;
        },
        [vn, Sn],
      ),
      Ln = 127,
      En = p(
        function (e) {
          var t = e[0];
          return t >= Ln;
        },
        [Rn],
      ),
      kn = _("isQuestion", { default: !1 }),
      In = _("isSpoiler", { default: !1 }),
      Tn = _("questionResponsesCount"),
      Dn = _("readQuestionResponsesCount"),
      xn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t - n;
        },
        [Tn, Dn],
      ),
      $n = _("questionReplyQuotedMessage"),
      Pn = p(
        function (e) {
          var t = e[0];
          return t != null;
        },
        [$n],
      ),
      Nn = _("newsletterAdminProfile"),
      Mn = p(
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
      wn = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            o = e[3];
          return t || n || o || !r;
        },
        [vn, Ze, nt, Mn],
      ),
      An = _("invis", { default: !1 }),
      Fn = _("isNewMsg", { default: !1 }),
      On = _("isSendFailure", { default: !1 }),
      Bn = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (t && n != null && n < o("WAWebAck").ACK.CLOCK) || r;
        },
        [nt, N, On],
      ),
      Wn = p(
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
      qn = _("description"),
      Un = _("matchedText", { default: "" }),
      Vn = _("thumbnail"),
      Hn = _("thumbnailHQ"),
      Gn = _("musicArtwork"),
      zn = _("richPreviewType", {
        default: o("WAWebProtobufsE2E.pb")
          .Message$ExtendedTextMessage$PreviewType.NONE,
      }),
      jn = _("paymentLinkMetadata", { default: null }),
      Kn = _("faviconMMSMetadata", { default: null }),
      Qn = p(
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
        [jn],
      ),
      Xn = p(
        function (e) {
          var t = e[0];
          return (
            (t == null ? void 0 : t.isBusinessVerified) === !0 &&
            (t == null ? void 0 : t.providerName) != null
          );
        },
        [Qn],
      ),
      Yn = p(
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
        [bt, Ct, qn, Un],
      ),
      Jn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n;
        },
        [sn, an],
      ),
      Zn = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            n ||
            t === o("WAWebMsgType").MSG_TYPE.LIST ||
            t === o("WAWebMsgType").MSG_TYPE.INTERACTIVE
          );
        },
        [b, sn],
      ),
      er = 768,
      tr = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = 308;
          return n != null && n.isBot() ? 1 / 0 : t ? r : er;
        },
        [En, rt],
      ),
      nr = p(
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
      rr = p(
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
      or = _("kicKey"),
      ar = p(
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
        [or, Ye],
      ),
      ir = p(
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
      lr = p(
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
      sr = _("revokeDuration"),
      ur = p(
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
        [b, v, lr, dn],
      ),
      cr = p(
        function (e) {
          var t = e[0];
          if (t != null)
            return o("WAWebEphemeralityWAMUtils").getWamDisappearingModeTrigger(
              t,
            );
        },
        [he],
      ),
      dr = p(
        function (e) {
          var t = e[0];
          if (t != null)
            return o(
              "WAWebEphemeralityWAMUtils",
            ).getWamDisappearingModeInitiatedByMe(t);
        },
        [ye],
      ),
      mr = p(
        function (e) {
          var t = e[0];
          if (t != null)
            return o(
              "WAWebEphemeralityWAMUtils",
            ).getWamDisappearingModeInitiator(t);
        },
        [ge],
      ),
      pr = _("inviteCode", { default: "" }),
      _r = _("inviteCodeExp", { default: "" }),
      fr = _("inviteGrp", { default: "" }),
      gr = _("inviteGrpName"),
      hr = _("inviteGrpJpegThum"),
      yr = _("inviteGrpType"),
      Cr = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          if (t !== o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE) return !1;
          if (!n) return !0;
          var a = Date.now() / 1e3;
          return parseInt(a, 10) >= parseInt(r, 10);
        },
        [b, pr, _r],
      ),
      br = p(
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
        [b, Ie],
      ),
      vr = _("productHeaderImageRejected", { default: !1 }),
      Sr = p(
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
        [vr, q],
      ),
      Rr = p(
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
      Lr = _("hasReaction", { default: !1 }),
      Er = _("recipients", {
        getDefault: function () {
          return [];
        },
      }),
      kr = _("templateParams", {
        getDefault: function () {
          return [];
        },
      }),
      Ir = _("clientUrl", { default: "" }),
      Tr = _("loc", { default: "" }),
      Dr = _("lat"),
      xr = _("lng"),
      $r = _("shareDuration"),
      Pr = _("finalLat"),
      Nr = _("finalLng"),
      Mr = _("star", { default: !1 }),
      wr = _("currencyCode"),
      Ar = _("priceAmount1000"),
      Fr = _("salePriceAmount1000"),
      Or = _("isVcardOverMmsDocument", { default: !1 }),
      Br = _("interactiveAnnotations"),
      Wr = p(
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
        [Br],
      ),
      qr = p(
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
        [Br],
      ),
      Ur = p(
        function (e) {
          var t = e[0];
          return t == null ? null : t[0];
        },
        [Wr],
      ),
      Vr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n != null && n.length > 0;
        },
        [et, Wr],
      ),
      Hr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n != null;
        },
        [Je, Ur],
      ),
      Gr = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n;
        },
        [et, qr],
      ),
      zr = p(
        function (e) {
          var t,
            n = e[0];
          if (n == null) return null;
          var r = (t = n.embeddedContent) == null ? void 0 : t.embeddedMusic;
          return r == null
            ? null
            : o("WAWebMusicParsingUtils").toMusicMetadata(r);
        },
        [Ur],
      ),
      jr = _("messageSecret"),
      Kr = _("broadcast", { default: !1 }),
      Qr = _("vcardList", {
        getDefault: function () {
          return [];
        },
      }),
      Xr = _("vcardFormattedName"),
      Yr = _("labels", {
        getDefault: function () {
          return [];
        },
      }),
      Jr = _("agentId"),
      Zr = _("url"),
      eo = _("retailerId"),
      to = _("businessOwnerJid"),
      no = _("productId"),
      ro = _("productImageCount"),
      oo = _("isMdHistoryMsg", { default: !1 }),
      ao = _("campaignId"),
      io = _("filename"),
      lo = _("smbClientCampaignId"),
      so = _("isCaptionByUser", { default: !1 }),
      uo = _("doNotPlayInline"),
      co = _("thumbnailDirectPath"),
      mo = _("thumbnailHeight"),
      po = _("thumbnailWidth"),
      _o = _("orderTitle"),
      fo = _("itemCount"),
      go = _("totalAmount1000"),
      ho = _("totalCurrencyCode"),
      yo = _("futureproofType"),
      Co = _("futureproofSubtype"),
      bo = _("ephemeralOutOfSync"),
      vo = _("isAvatar"),
      So = _("bizPrivacyStatus"),
      Ro = _("verifiedBizName"),
      Lo = _("mediaKey"),
      Eo = _("message", { default: "" }),
      ko = _("size", { default: 0 }),
      Io = _("hostedBizEncStateMismatch"),
      To = p(
        function (e) {
          var t = e[0];
          return t === "bot_unavailable_fanout";
        },
        [v],
      ),
      Do = p(
        function (e) {
          var t = e[0];
          return t === "view_once_unavailable_fanout";
        },
        [v],
      ),
      xo = p(
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
      $o = p(
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
      Po = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return !r && !t.fromMe && n === o("WAWebBotTypes").BizBotType.BIZ_1P;
        },
        [R, be, $o],
      ),
      No = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return !r && !t.fromMe && n === o("WAWebBotTypes").BizBotType.BIZ_3P;
        },
        [R, be, $o],
      ),
      Mo = _("botPluginSearchProvider"),
      wo = _("botPluginSearchUrl"),
      Ao = _("botResponseTargetId"),
      Fo = _("botPluginSearchQuery"),
      Oo = _("botPluginType"),
      Bo = _("botMessageDisclaimerText"),
      Wo = _("botModeSelection"),
      qo = _("botModeOverride"),
      Uo = _("richResponse"),
      Vo = _("unifiedResponse"),
      Ho = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t != null && n != null && r != null;
        },
        [Mo, wo, Fo],
      ),
      Go = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !n && (t == null ? void 0 : t.isBot()) === !0;
        },
        [rt, $o],
      ),
      zo = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !!(t && o("WAWebUserPrefsMeUser").isMeAccount(n));
        },
        [Go, ve],
      ),
      jo = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return n && !t.remote.isBot();
        },
        [R, Go],
      ),
      Ko = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t || n || r;
        },
        [Go, Po, No],
      ),
      Qo = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.PROTOCOL && n === "bot_feedback"
          );
        },
        [b, v],
      ),
      Xo = _("hsmTag"),
      Yo = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebBusinessHSMTypes").HSM_TAG_TYPE.AUTHENTICATION;
        },
        [Xo],
      ),
      Jo = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebBusinessHSMTypes").HSM_TAG_TYPE.MARKETING;
        },
        [Xo],
      ),
      Zo = _("botRespOrInvocationRevokeBotWid"),
      ea = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return !!(t != null && t.isBot() && n);
        },
        [Zo, lr],
      ),
      ta = p(
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
        [Oo, Go],
      ),
      na = _("botPluginMaybeParent"),
      ra = _("botReelPluginThumbnailCdnUrl"),
      oa = p(
        function (e) {
          var t = e[0];
          return t === o("WAWebMsgType").MSG_TYPE.BIZ_CONTENT_PLACEHOLDER;
        },
        [b],
      ),
      aa = _("statusMentioned"),
      ia = _("isWamoSub"),
      la = _("hasPaidPartnershipLabel"),
      sa = _("aiProvenance"),
      ua = p(
        function (e) {
          var t = e[0];
          return o("WAWebMsgAIProvenance").hasAIProvenanceSignal(t);
        },
        [sa],
      ),
      ca = _("isVideoCall"),
      da = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (
            t === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
            (n === "miss_video" || n === "miss_group_video" || r === !0)
          );
        },
        [b, v, ca],
      ),
      ma = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t === o("WAWebMsgType").MSG_TYPE.CALL_LOG ? n.id : null;
        },
        [b, R],
      ),
      pa = _("callOutcome"),
      _a = _("callSilenceReason"),
      fa = p(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (
            t === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
            (n === "silence" || r != null)
          );
        },
        [b, v, _a],
      ),
      ga = p(
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
        [b, v, pa, rt],
      ),
      ha = _("callDuration"),
      ya = p(
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
        [b, D, ha],
      ),
      Ca = _("bytesSent"),
      ba = _("bytesReceived"),
      va = _("callParticipants"),
      Sa = _("isCallLink"),
      Ra = _("callLinkToken"),
      La = _("terminatedByDeviceSwitch"),
      Ea = _("selfOtherDeviceConnected"),
      ka = p(
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
        [Ye, va, Ra],
      ),
      Ia = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n;
        },
        [Ye, ka],
      ),
      Ta = _("finalCallOutcome"),
      Da = _("groupHistoryBundleMessageKey"),
      xa = _("groupHistoryBundleMetadata"),
      $a = _("groupHistoryIndividualMessageInfo"),
      Pa = p(
        function (e) {
          var t,
            n = e[0],
            r = e[1];
          return (t = n == null ? void 0 : n.bundleMessageKey) != null ? t : r;
        },
        [$a, Da],
      ),
      Na = p(
        function (e) {
          var t = e[0];
          return t == null ? void 0 : t.isEditedAfterReceivedAsHistory;
        },
        [$a],
      ),
      Ma = p(
        function (e) {
          var t = e[0];
          return t == null ? void 0 : t.bundleSender;
        },
        [$a],
      ),
      wa = p(
        function (e) {
          var t = e[0],
            n = e[1];
          return t != null && r("WAWebWid").equals(t.remote, n);
        },
        [Pa, T],
      );
    function Aa(e) {
      var t =
        b(e) === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE &&
        o("WAWebUserPrefsMeUser").isMeAccount(k(e));
      return (
        !t &&
        !nr(e) &&
        b(e) !== o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
        !Cn(e) &&
        !["change_number", "change_username", "masked_thread_created"].includes(
          v(e),
        ) &&
        !rr(e)
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
      (l.getRcat = le),
      (l.getIsViewOnce = se),
      (l.getIsGif = ue),
      (l.getGifAttribution = ce),
      (l.getCtwaContext = de),
      (l.getFilehash = pe),
      (l.getDeprecatedMms3Url = _e),
      (l.getWaveform = fe),
      (l.getDisappearingModeInitiator = ge),
      (l.getDisappearingModeInitiatedByMe = ye),
      (l.getActiveBotMsgStreamingInProgress = Ce),
      (l.getBizBotType = be),
      (l.getBotTargetSenderJid = ve),
      (l.getIsSupportAIMessage = Se),
      (l.getLastBotEditBodyLength = Re),
      (l.getBotEditType = Le),
      (l.getForwardedNewsletterMessageInfo = Ee),
      (l.getForwardedAiBotMessageInfo = ke),
      (l.getNewsletterAdminInviteInfo = Ie),
      (l.getNewsletterFollowerInviteInfo = Te),
      (l.getIsGroupStatus = xe),
      (l.getIsNewsletterStatus = $e),
      (l.hasReshareAttribution = Ne),
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
      (l.getNativeFlowName = Gt),
      (l.getNativeFlowButtons = zt),
      (l.getInteractivePayload = jt),
      (l.getGalaxyFlowDisabled = Kt),
      (l.getSignupCtaTapped = Qt),
      (l.getPaymentCurrency = Xt),
      (l.getPaymentAmount1000 = Yt),
      (l.getPaymentMessageReceiverJid = Jt),
      (l.getPaymentStatus = Zt),
      (l.getPaymentTxnStatus = en),
      (l.getPaymentNoteMsg = tn),
      (l.getPaymentRequestMessageKey = nn),
      (l.getPaymentExpiryTimestamp = rn),
      (l.getPaymentInviteServiceType = on),
      (l.getIsFromTemplate = an),
      (l.getIsLive = ln),
      (l.getIsDynamicReplyButtonsMsg = sn),
      (l.getDynamicReplyButtons = un),
      (l.getIsEphemeral = cn),
      (l.getIsEdited = dn),
      (l.getIsEditProtocolMsg = mn),
      (l.getStatusCanvasColor = pn),
      (l.getIsUserCreatedType = _n),
      (l.getIsSentByMeFromWeb = fn),
      (l.getRevokeSender = gn),
      (l.getIsRevokedByMe = hn),
      (l.getIsInternational = yn),
      (l.getIsBizNotification = Cn),
      (l.getIsMedia = bn),
      (l.getIsForwarded = vn),
      (l.getForwardingScore = Sn),
      (l.getNumTimesForwarded = Rn),
      (l.FREQUENTLY_FORWARDED_SENTINEL = Ln),
      (l.getIsFrequentlyForwarded = En),
      (l.getIsQuestion = kn),
      (l.getIsSpoiler = In),
      (l.getQuestionResponsesCount = Tn),
      (l.getReadQuestionResponsesCount = Dn),
      (l.getUnreadQuestionResponsesCount = xn),
      (l.getQuestionReplyQuotedMessage = $n),
      (l.getIsQuestionReply = Pn),
      (l.getNewsletterAdminProfile = Nn),
      (l.getIsBotInvoke = Mn),
      (l.getShouldDisplayAsForwarded = wn),
      (l.getInvis = An),
      (l.getIsNewMsg = Fn),
      (l.getIsSendFailure = On),
      (l.getIsFailed = Bn),
      (l.getVcard = Wn),
      (l.getDescription = qn),
      (l.getMatchedText = Un),
      (l.getThumbnail = Vn),
      (l.getThumbnailHQ = Hn),
      (l.getMusicArtwork = Gn),
      (l.getRichPreviewType = zn),
      (l.getPaymentLinkMetadata = jn),
      (l.getFaviconMMSMetadata = Kn),
      (l.getPaymentLinkPreviewMetaTags = Qn),
      (l.getHasPaymentLinkTrustSignals = Xn),
      (l.getLinkPreview = Yn),
      (l.getSupportsMessageFooter = Jn),
      (l.getSupportsMessageFooterLinks = Zn),
      (l.INITIAL_PAGE_SIZE = er),
      (l.getInitialPageSize = tr),
      (l.getIsInitialE2ENotification = nr),
      (l.getIsDisappearingModeSystemMessage = rr),
      (l.getKicKey = or),
      (l.getKicSender = ar),
      (l.getEphemeralExpirationTimestamp = ir),
      (l.getIsRevoke = lr),
      (l.getRevokeDuration = sr),
      (l.getWamEditType = ur),
      (l.getWamDisappearingModeTrigger = cr),
      (l.getWamDisappearingModeInitiatedByMe = dr),
      (l.getWamDisappearingModeInitiator = mr),
      (l.getInviteCode = pr),
      (l.getInviteCodeExp = _r),
      (l.getInviteGrp = fr),
      (l.getInviteGrpName = gr),
      (l.getInviteGrpJpegThum = hr),
      (l.getInviteGrpType = yr),
      (l.getIsGroupsV4InviteExpired = Cr),
      (l.getIsNewsletterAdminInviteExpired = br),
      (l.getProductHeaderImageRejected = vr),
      (l.getProductListHeaderImage = Sr),
      (l.getIsAckPlayable = Rr),
      (l.getHasReaction = Lr),
      (l.getRecipients = Er),
      (l.getTemplateParams = kr),
      (l.getClientUrl = Ir),
      (l.getLoc = Tr),
      (l.getLat = Dr),
      (l.getLng = xr),
      (l.getShareDuration = $r),
      (l.getFinalLat = Pr),
      (l.getFinalLng = Nr),
      (l.getStar = Mr),
      (l.getCurrencyCode = wr),
      (l.getPriceAmount1000 = Ar),
      (l.getSalePriceAmount1000 = Fr),
      (l.getIsVcardOverMmsDocument = Or),
      (l.getInteractiveAnnotations = Br),
      (l.getMusicAnnotations = Wr),
      (l.getHasEmbeddedMessagesAnnotation = qr),
      (l.getFirstMusicAnnotation = Ur),
      (l.isStatusWithMusic = Vr),
      (l.isNewsletterMsgWithMusic = Hr),
      (l.isStatusWithEmbeddedMessages = Gr),
      (l.getFirstMusicAnnotationEmbeddedContent = zr),
      (l.getMessageSecret = jr),
      (l.getBroadcast = Kr),
      (l.getVcardList = Qr),
      (l.getVcardFormattedName = Xr),
      (l.getLabels = Yr),
      (l.getAgentId = Jr),
      (l.getUrl = Zr),
      (l.getRetailerId = eo),
      (l.getBusinessOwnerJid = to),
      (l.getProductId = no),
      (l.getProductImageCount = ro),
      (l.getIsMdHistoryMsg = oo),
      (l.getCampaignId = ao),
      (l.getFilename = io),
      (l.getSmbClientCampaignId = lo),
      (l.getIsCaptionByUser = so),
      (l.getDoNotPlayInline = uo),
      (l.getThumbnailDirectPath = co),
      (l.getThumbnailHeight = mo),
      (l.getThumbnailWidth = po),
      (l.getOrderTitle = _o),
      (l.getItemCount = fo),
      (l.getTotalAmount1000 = go),
      (l.getTotalCurrencyCode = ho),
      (l.getFutureproofType = yo),
      (l.getFutureproofSubtype = Co),
      (l.getEphemeralOutOfSync = bo),
      (l.getIsAvatar = vo),
      (l.getBizPrivacyStatus = So),
      (l.getVerifiedBizName = Ro),
      (l.getMediaKey = Lo),
      (l.getMessage = Eo),
      (l.getSize = ko),
      (l.getHostedBizEncStateMismatch = Io),
      (l.getIsBotFutureproofPlaceholder = To),
      (l.getIsViewOncePlaceholder = Do),
      (l.getIsBotQuery = xo),
      (l.getIsCoexV2Relay = $o),
      (l.getIsBizBot1pResponse = Po),
      (l.getIsBizBot3pResponse = No),
      (l.getBotPluginSearchProvider = Mo),
      (l.getBotPluginSearchUrl = wo),
      (l.getBotResponseTargetId = Ao),
      (l.getBotPluginSearchQuery = Fo),
      (l.getBotPluginType = Oo),
      (l.getBotMessageDisclaimerText = Bo),
      (l.getBotModeSelection = Wo),
      (l.getBotModeOverride = qo),
      (l.getRichResponse = Uo),
      (l.getUnifiedResponse = Vo),
      (l.getIsBotSearchResponse = Ho),
      (l.getIsMetaBotResponse = Go),
      (l.isMetaBotResponseToMyInvoke = zo),
      (l.getIsMetaBotInvokeResponse = jo),
      (l.getIsBotResponse = Ko),
      (l.getIsBotFeedbackMessage = Qo),
      (l.getHsmTag = Xo),
      (l.getIsAuthenticationMessage = Yo),
      (l.getIsMarketingTemplateTag = Jo),
      (l.getBotRespOrInvocationRevokeBotWid = Zo),
      (l.getIsRevokeForMsgFromOrDeliveredToBot = ea),
      (l.getIsBotPluginCarouselMsg = ta),
      (l.getBotPluginMaybeParent = na),
      (l.getBotReelPluginThumbnailCdnUrl = ra),
      (l.getIsBizContentPlaceholder = oa),
      (l.getStatusMentioned = aa),
      (l.getIsWamoSub = ia),
      (l.getHasPaidPartnershipLabel = la),
      (l.getAiProvenance = sa),
      (l.getIsAiContent = ua),
      (l.getIsVideoCall = da),
      (l.getCallId = ma),
      (l.getCallOutcome = pa),
      (l.getCallSilenceReason = _a),
      (l.getIsCallSilenced = fa),
      (l.getIsMissedCall = ga),
      (l.getCallDuration = ha),
      (l.getIsVisibleCallLog = ya),
      (l.getBytesSent = Ca),
      (l.getBytesReceived = ba),
      (l.getCallParticipants = va),
      (l.getIsCallLink = Sa),
      (l.getCallLinkToken = Ra),
      (l.getTerminatedByDeviceSwitch = La),
      (l.getSelfOtherDeviceConnected = Ea),
      (l.getIsAdHocGroupCall = ka),
      (l.getIsGroupCall = Ia),
      (l.getFinalCallOutcome = Ta),
      (l.getGroupHistoryBundleMessageKeyDeprecated = Da),
      (l.getGroupHistoryBundleMetadata = xa),
      (l.getGroupHistoryIndividualMessageInfo = $a),
      (l.getGroupHistoryBundleMessageKey = Pa),
      (l.getIsEditedAfterReceivedAsHistory = Na),
      (l.getGroupHistoryBundleSender = Ma),
      (l.getIsGroupHistoryMessageInOwnChat = wa),
      (l.isRealMessage = Aa));
  },
  98,
);
