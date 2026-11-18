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
    "WAWebCommonMsgSubtypeTypes",
    "WAWebCommonMsgUtils",
    "WAWebEphemeralConstants",
    "WAWebEphemeralityWAMUtils",
    "WAWebGetters",
    "WAWebGettersCaches",
    "WAWebInstantMsgTypes",
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
      d,
      m = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createMessagesCache,
      }),
      p = m.clearCacheFor,
      _ = m.computed,
      f = m.field,
      g = m.unsafeIdentityGetter,
      h = p,
      y = g,
      C = [
        o("WAWebCallLogMsgData.flow").CallOutcome.Completed,
        o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing,
        o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere,
      ],
      b = "upi://pay",
      v = new Set([
        (d = o("WAWebCommonMsgSubtypeTypes")).MsgSubtype.AutoAdd,
        d.MsgSubtype.CommunityParticipantAddRich,
        d.MsgSubtype.DefaultSubGroupAdminAdd,
        d.MsgSubtype.SubGroupParticipantAddRich,
        d.MsgSubtype.SubgroupAdminTriggeredAutoAdd,
      ]);
    function S(e) {
      return e instanceof r("WAWebWid")
        ? e
        : e.user != null
          ? o("WAWebWidFactory").createUserWidOrThrow(e.user, e.server)
          : e;
    }
    var R = f("type"),
      L = f("subtype"),
      E = f("id"),
      k = _(
        function (e) {
          var t = e[0];
          return r("WAWebMsgKey").from(t);
        },
        [E],
      ),
      I = f("serverId"),
      T = f("to"),
      D = f("from"),
      x = f("notifyName"),
      $ = f("broadcastId"),
      P = f("qrUrl"),
      N = _(
        function (e) {
          var t = e[0];
          return t != null && t.startsWith(b);
        },
        [P],
      ),
      M = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return n != null ? n : t.remote;
        },
        [k, $],
      ),
      w = f("viewMode"),
      A = f("author"),
      F = f("recipients", {
        getDefault: function () {
          return [];
        },
      }),
      O = f("metaFrom"),
      B = f("senderWithDevice"),
      W = f("ack"),
      q = f("isScheduledMsg"),
      U = f("viewCount"),
      V = f("forwardsCount"),
      H = f("viewed"),
      G = f("originalSelfAuthor"),
      z = f("kicState"),
      j = f("kicTimestampMs"),
      K = f("list"),
      Q = f("latestEditMsgKey"),
      X = f("ephemeralDuration"),
      Y = f("afterReadDuration"),
      J = f("expiredTimestamp"),
      Z = f("ephemeralSettingUser"),
      ee = f("t", { default: 0 }),
      te = f("clientReceivedTsMillis"),
      ne = f("backgroundColor"),
      re = f("headerType"),
      oe = f("interactiveHeader"),
      ae = f("interactiveType"),
      ie = f("bloksWidget"),
      le = f("footer"),
      se = f("mentionedJidList"),
      ue = f("groupMentions", {
        getDefault: function () {
          return [];
        },
      }),
      ce = f("quotedMsg"),
      de = f("quotedRemoteJid"),
      me = f("quotedParticipant"),
      pe = f("rcat"),
      _e = f("isViewOnce", { default: !1 }),
      fe = f("isGif", { default: !1 }),
      ge = f("gifAttribution", {
        default: o("WAWebProtobufsE2E.pb").Message$VideoMessage$Attribution
          .NONE,
      }),
      he = f("ctwaContext"),
      ye = f("threadIds"),
      Ce = f("mimetype"),
      be = f("filehash"),
      ve = f("deprecatedMms3Url"),
      Se = f("waveform"),
      Re = f("disappearingModeInitiator"),
      Le = f("disappearingModeTrigger"),
      Ee = f("disappearingModeInitiatedByMe"),
      ke = f("activeBotMsgStreamingInProgress"),
      Ie = f("bizBotType"),
      Te = f("botTargetSenderJid"),
      De = f("isSupportAIMessage"),
      xe = f("lastBotEditBodyLength"),
      $e = f("botEditType"),
      Pe = f("forwardedNewsletterMessageInfo"),
      Ne = f("forwardedAiBotMessageInfo"),
      Me = f("newsletterAdminInviteInfo"),
      we = f("newsletterFollowerInviteInfo"),
      Ae = f("isGroupStatus"),
      Fe = _(
        function (e) {
          var t = e[0];
          return t === !0;
        },
        [Ae],
      ),
      Oe = f("isNewsletterStatus", { default: !1 }),
      Be = f("statusAttributions");
    function We(e) {
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
    var qe = _(
        function (e) {
          var t = e[0];
          return We(t);
        },
        [Be],
      ),
      Ue = _(
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
        [Be],
      ),
      Ve = _(
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
                    ((t = e.statusReshare) == null ? void 0 : t.source) !==
                      o("WAWebProtobufsStatusAttributions.pb")
                        .StatusAttribution$StatusReshare$Source.CHANNEL_RESHARE
                  );
                })) === !0
          );
        },
        [Be],
      ),
      He = _(
        function (e) {
          var t,
            n = e[0],
            r =
              n == null ||
              (t = n.find(function (e) {
                var t;
                return (
                  e.type ===
                    o("WAWebProtobufsStatusAttributions.pb")
                      .StatusAttribution$Type.RESHARE &&
                  ((t = e.statusReshare) == null ? void 0 : t.source) ===
                    o("WAWebProtobufsStatusAttributions.pb")
                      .StatusAttribution$StatusReshare$Source.CHANNEL_RESHARE
                );
              })) == null ||
              (t = t.statusReshare) == null ||
              (t = t.metadata) == null
                ? void 0
                : t.channelJid,
            a = r != null ? o("WAJids").validateNewsletterJid(r) : null;
          return a != null
            ? o("WAWebWidFactory").asNewsletterWidOrThrow(
                o("WAWebWidFactory").createWid(a),
              )
            : null;
        },
        [Be],
      ),
      Ge = f("bizSource");
    function ze(e) {
      return e === "smb_promo";
    }
    var je = _(
        function (e) {
          var t = e[0];
          return ze(t);
        },
        [Ge],
      ),
      Ke = _(
        function (e) {
          var t = e[0];
          return t != null;
        },
        [ce],
      ),
      Qe = _(
        function (e) {
          var t = e[0];
          return o("WAWebMimeTypes").isOpus(t);
        },
        [Ce],
      ),
      Xe = _(
        function (e) {
          var t = e[0];
          return t == null ? null : o("WABase64").encodeB64UrlSafe(t, !0);
        },
        [pe],
      ),
      Ye = _(
        function (e) {
          var t = e[0];
          return t == null
            ? !1
            : t.some(function (e) {
                return o("WAWebUserUtils").isMeAccount(S(e));
              });
        },
        [se],
      ),
      Je = f("local", { default: !1 }),
      Ze = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n ? o("WAWebUserUtils").isMeAccount(S(n)) : !1;
        },
        [ce, me],
      ),
      et = f("nonJidMentions"),
      tt = _(
        function (e) {
          var t = e[0];
          return o("WAWebNonJidMentionUtils").hasMentionAll(t);
        },
        [et],
      ),
      nt = _(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t || n || r;
        },
        [Ye, Ze, tt],
      ),
      rt = f("botPluginReferenceIndex"),
      ot = _(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            a = e[3];
          return (
            t === o("WAWebMsgType").MSG_TYPE.GP2 &&
            n != null &&
            v.has(n) &&
            (r == null || !o("WAWebUserUtils").isMeAccount(S(r))) &&
            a.some(function (e) {
              return o("WAWebUserUtils").isMePrimary(S(e));
            })
          );
        },
        [R, L, A, F],
      ),
      at = _(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            a = e[3],
            i = e[4];
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
            i ||
            (t === "protocol" &&
              (a === "status_mention_message" ||
                a === "status_group_mention_message"))
          )
            return !0;
          switch (t) {
            case "interactive":
            case "chat":
            case "image":
            case "instant_image":
            case "instant_video":
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
        [R, rt, w, L, ot],
      ),
      it = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.isRegularUser() && n.isRegularUser();
        },
        [D, T],
      ),
      lt = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return r("WAWebWid").isGroup(t) || r("WAWebWid").isGroup(n);
        },
        [D, T],
      ),
      st = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return r("WAWebNewsletterIsNewsletterMsg")({ from: t, to: n });
        },
        [D, T],
      ),
      ut = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n != null;
        },
        [st, Pe],
      ),
      ct = _(
        function (e) {
          var t = e[0],
            n = e[1],
            o = e[2];
          return r("WAWebWid").isStatus(t.remote) || n || o;
        },
        [k, Fe, Oe],
      ),
      dt = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return o("WAWebCommonMsgUtils").isNotificationType(t, n);
        },
        [R, L],
      ),
      mt = _(
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
        [k, D, dt, R, L],
      ),
      pt = _(
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
        [k, mt, lt, ct, Fe, Oe, st, D, A],
      ),
      _t = _(
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
        [G, pt, R],
      ),
      ft = _(
        function (e) {
          var t = e[0];
          return (
            t === o("WAWebMsgType").MSG_TYPE.REACTION ||
            t === o("WAWebMsgType").MSG_TYPE.REACTION_ENC
          );
        },
        [R],
      ),
      gt = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.UNKNOWN ||
            (t === o("WAWebMsgType").MSG_TYPE.PAYMENT && n === "futureproof")
          );
        },
        [R, L],
      ),
      ht = _(
        function (e) {
          var t = e[0];
          return t === o("WAWebMsgType").MSG_TYPE.STICKER;
        },
        [R],
      ),
      yt = f("isAiSticker"),
      Ct = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n === !0;
        },
        [ht, yt],
      ),
      bt = f("isCarouselCard", { default: !1 }),
      vt = _(
        function (e) {
          var t = e[0];
          return t === o("WAWebMsgType").MSG_TYPE.DOCUMENT;
        },
        [R],
      ),
      St = _(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return !t && !n && !r;
        },
        [_e, ht, vt],
      ),
      Rt = _(
        function (e) {
          var t = e[0];
          return t === o("WAWebEphemeralConstants").KeepInChatState.KEPT;
        },
        [z],
      ),
      Lt = _(
        function (e) {
          var t = e[0];
          return t === o("WAWebEphemeralConstants").KeepInChatState.UNKEPT;
        },
        [z],
      ),
      Et = _(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isPSA(t.remote);
        },
        [k],
      ),
      kt = _(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isIAS(t.remote);
        },
        [k],
      ),
      It = _(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isAiHub(t.remote);
        },
        [k],
      ),
      Tt = _(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isCAPISupportAccount(t.remote);
        },
        [k],
      ),
      Dt = _(
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
        [R, K],
      ),
      xt = f("title"),
      $t = f("body", { default: "" }),
      Pt = f("caption"),
      Nt = f("comment"),
      Mt = f("pollName", { default: "" }),
      wt = f("pollOptions"),
      At = _(
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
        [wt],
      ),
      Ft = f("pollSelectableOptionsCount", { default: 0 }),
      Ot = f("pollInvalidated", { default: !1 }),
      Bt = f("pollType", {
        default: o("WAWebPollCreationUtils").PollType.POLL,
      }),
      Wt = f("correctOptionIndex"),
      qt = f("pollEndTime"),
      Ut = f("pollHideVoterNames"),
      Vt = f("pollVotesSnapshot"),
      Ht = f("quarantineExtractedText"),
      Gt = f("eventName", { default: "" }),
      zt = f("eventDescription"),
      jt = f("eventStartTime", { default: 0 }),
      Kt = f("eventEndTime"),
      Qt = f("eventJoinLink"),
      Xt = f("eventLocation"),
      Yt = f("isEventCanceled", { default: !1 }),
      Jt = f("eventInvalidated", { default: !1 }),
      Zt = f("eventIsScheduledCall", { default: !1 }),
      en = f("nativeFlowName"),
      tn = f("nativeFlowButtons"),
      nn = f("interactivePayload"),
      rn = f("galaxyFlowDisabled", { default: !1 }),
      on = f("signupCtaTapped", { default: !1 }),
      an = f("paymentCurrency", { default: "" }),
      ln = f("paymentAmount1000", { default: 0 }),
      sn = f("paymentMessageReceiverJid"),
      un = f("paymentStatus"),
      cn = f("paymentTxnStatus"),
      dn = f("paymentNoteMsg"),
      mn = f("paymentExpiryTimestamp"),
      pn = f("paymentInviteServiceType"),
      _n = f("isFromTemplate", { default: !1 }),
      fn = f("isLive", { default: !1 }),
      gn = f("isDynamicReplyButtonsMsg", { default: !1 }),
      hn = f("dynamicReplyButtons"),
      yn = _(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
            n === "ephemeral_setting"
            ? !1
            : r != null && r !== 0;
        },
        [R, L, X],
      ),
      Cn = _(
        function (e) {
          var t = e[0];
          return t != null;
        },
        [Q],
      ),
      bn = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.PROTOCOL && n === "message_edit"
          );
        },
        [R, L],
      ),
      vn = _(
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
        [ct, ne],
      ),
      Sn = _(
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
        [R],
      ),
      Rn = _(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t.fromMe && n && r;
        },
        [k, Je, Sn],
      ),
      Ln = f("revokeSender"),
      En = _(
        function (e) {
          var t = e[0];
          return t != null && o("WAWebUserUtils").isMeAccount(t);
        },
        [Ln],
      ),
      kn = _(
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
        [k, T, D],
      ),
      In = _(
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
        [R, L],
      ),
      Tn = _(
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
        [R, oe],
      ),
      Dn = f("isForwarded", { default: !1 }),
      xn = f("forwardingScore"),
      $n = f("forwardReachScore"),
      Pn = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return n == null ? (t ? 1 : 0) : n || 0;
        },
        [Dn, xn],
      ),
      Nn = 127,
      Mn = _(
        function (e) {
          var t = e[0];
          return t >= Nn;
        },
        [Pn],
      ),
      wn = f("isQuestion", { default: !1 }),
      An = f("isSpoiler", { default: !1 }),
      Fn = f("questionResponsesCount"),
      On = f("myQuestionResponsesCount", { default: 0 }),
      Bn = f("readQuestionResponsesCount"),
      Wn = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return t - n;
        },
        [Fn, Bn],
      ),
      qn = f("questionReplyQuotedMessage"),
      Un = _(
        function (e) {
          var t = e[0];
          return t != null;
        },
        [qn],
      ),
      Vn = f("newsletterAdminProfile"),
      Hn = _(
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
        [k, se],
      ),
      Gn = _(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            o = e[3];
          return t || n || o || !r;
        },
        [Dn, ut, mt, Hn],
      ),
      zn = f("invis", { default: !1 }),
      jn = f("isNewMsg", { default: !1 }),
      Kn = f("isSendFailure", { default: !1 }),
      Qn = _(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (t && n != null && n < o("WAWebAck").ACK.CLOCK) || r;
        },
        [mt, W, Kn],
      ),
      Xn = _(
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
        [R, $t],
      ),
      Yn = f("description"),
      Jn = f("matchedText", { default: "" }),
      Zn = f("thumbnail"),
      er = f("thumbnailHQ"),
      tr = f("musicArtwork"),
      nr = f("musicData"),
      rr = f("richPreviewType", {
        default: o("WAWebProtobufsE2E.pb")
          .Message$ExtendedTextMessage$PreviewType.NONE,
      }),
      or = f("paymentLinkMetadata", { default: null }),
      ar = f("faviconMMSMetadata", { default: null }),
      ir = _(
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
        [or],
      ),
      lr = _(
        function (e) {
          var t = e[0];
          return (
            (t == null ? void 0 : t.isBusinessVerified) === !0 &&
            (t == null ? void 0 : t.providerName) != null
          );
        },
        [ir],
      ),
      sr = _(
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
        [$t, xt, Yn, Jn],
      ),
      ur = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n;
        },
        [gn, _n],
      ),
      cr = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            n ||
            t === o("WAWebMsgType").MSG_TYPE.LIST ||
            t === o("WAWebMsgType").MSG_TYPE.INTERACTIVE
          );
        },
        [R, gn],
      ),
      dr = 768,
      mr = _(
        function (e) {
          var t = e[0],
            n = e[1],
            r = 308;
          return n != null && n.isBot() ? 1 / 0 : t ? r : dr;
        },
        [Mn, pt],
      ),
      pr = _(
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
        [R, L],
      ),
      _r = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE &&
            n === "disappearing_mode"
          );
        },
        [R, L],
      ),
      fr = f("kicKey"),
      gr = _(
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
        [fr, lt],
      ),
      hr = _(
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
        [X, ee, L, J],
      ),
      yr = _(
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
        [R, L],
      ),
      Cr = f("revokeDuration"),
      br = _(
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
        [R, L, yr, Cn],
      ),
      vr = _(
        function (e) {
          var t = e[0];
          if (t != null)
            return o("WAWebEphemeralityWAMUtils").getWamDisappearingModeTrigger(
              t,
            );
        },
        [Le],
      ),
      Sr = _(
        function (e) {
          var t = e[0];
          if (t != null)
            return o(
              "WAWebEphemeralityWAMUtils",
            ).getWamDisappearingModeInitiatedByMe(t);
        },
        [Ee],
      ),
      Rr = _(
        function (e) {
          var t = e[0];
          if (t != null)
            return o(
              "WAWebEphemeralityWAMUtils",
            ).getWamDisappearingModeInitiator(t);
        },
        [Re],
      ),
      Lr = f("inviteCode", { default: "" }),
      Er = f("inviteCodeExp", { default: "" }),
      kr = f("inviteGrp", { default: "" }),
      Ir = f("inviteGrpName"),
      Tr = f("inviteGrpJpegThum"),
      Dr = f("inviteGrpType"),
      xr = _(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          if (t !== o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE) return !1;
          if (!n) return !0;
          var a = Date.now() / 1e3;
          return parseInt(String(a), 10) >= parseInt(r, 10);
        },
        [R, Lr, Er],
      ),
      $r = _(
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
        [R, Me],
      ),
      Pr = f("productHeaderImageRejected", { default: !1 }),
      Nr = _(
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
        [Pr, K],
      ),
      Mr = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.PTT ||
            t === o("WAWebMsgType").MSG_TYPE.PTV ||
            o("WAWebInstantMsgTypes").isInstantMsgType(t) ||
            (n && t === o("WAWebMsgType").MSG_TYPE.AUDIO)
          );
        },
        [R, ut],
      ),
      wr = f("hasReaction", { default: !1 }),
      Ar = f("templateParams", {
        getDefault: function () {
          return [];
        },
      }),
      Fr = f("clientUrl", { default: "" }),
      Or = f("loc", { default: "" }),
      Br = f("lat"),
      Wr = f("lng"),
      qr = f("shareDuration"),
      Ur = f("finalLat"),
      Vr = f("finalLng"),
      Hr = f("star", { default: !1 }),
      Gr = f("currencyCode"),
      zr = f("priceAmount1000"),
      jr = f("salePriceAmount1000"),
      Kr = f("isVcardOverMmsDocument", { default: !1 }),
      Qr = f("interactiveAnnotations"),
      Xr = _(
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
        [Qr],
      ),
      Yr = _(
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
        [Qr],
      ),
      Jr = _(
        function (e) {
          var t = e[0];
          return t == null ? null : t[0];
        },
        [Xr],
      ),
      Zr = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n != null && n.length > 0;
        },
        [ct, Xr],
      ),
      eo = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n != null;
        },
        [st, Jr],
      ),
      to = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n;
        },
        [ct, Yr],
      ),
      no = _(
        function (e) {
          var t,
            n = e[0];
          if (n == null) return null;
          var r = (t = n.embeddedContent) == null ? void 0 : t.embeddedMusic;
          return r == null
            ? null
            : o("WAWebMusicParsingUtils").toMusicMetadata(r);
        },
        [Jr],
      ),
      ro = f("messageSecret"),
      oo = f("broadcast", { default: !1 }),
      ao = f("vcardList", {
        getDefault: function () {
          return [];
        },
      }),
      io = f("vcardFormattedName"),
      lo = f("labels", {
        getDefault: function () {
          return [];
        },
      }),
      so = f("agentId"),
      uo = f("url"),
      co = f("retailerId"),
      mo = f("businessOwnerJid"),
      po = f("productId"),
      _o = f("productImageCount"),
      fo = f("isMdHistoryMsg", { default: !1 }),
      go = f("campaignId"),
      ho = f("pmCampaignId"),
      yo = f("filename"),
      Co = f("smbClientCampaignId"),
      bo = f("businessInteractionPills"),
      vo = f("isCaptionByUser", { default: !1 }),
      So = f("doNotPlayInline"),
      Ro = f("thumbnailDirectPath"),
      Lo = f("thumbnailHeight"),
      Eo = f("thumbnailWidth"),
      ko = f("orderTitle"),
      Io = f("itemCount"),
      To = f("totalAmount1000"),
      Do = f("totalCurrencyCode"),
      xo = f("futureproofType"),
      $o = f("futureproofSubtype"),
      Po = f("ephemeralOutOfSync"),
      No = f("isAvatar"),
      Mo = f("bizPrivacyStatus"),
      wo = f("verifiedBizName"),
      Ao = f("mediaKey"),
      Fo = f("message", { default: "" }),
      Oo = f("size", { default: 0 }),
      Bo = f("mediaPngThumbnail"),
      Wo = f("hostedBizEncStateMismatch"),
      qo = f("aeaAutoUpgrade"),
      Uo = f("instantPlayedSelf"),
      Vo = _(
        function (e) {
          var t = e[0];
          return t === "bot_unavailable_fanout";
        },
        [L],
      ),
      Ho = _(
        function (e) {
          var t = e[0];
          return t === "view_once_unavailable_fanout";
        },
        [L],
      ),
      Go = _(
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
        [k, se],
      ),
      zo = _(
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
        [B, O],
      ),
      jo = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return !n && t === o("WAWebBotTypes").BizBotType.BIZ_1P;
        },
        [Ie, zo],
      ),
      Ko = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return !t.fromMe && n;
        },
        [k, jo],
      ),
      Qo = _(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return !r && !t.fromMe && n === o("WAWebBotTypes").BizBotType.BIZ_3P;
        },
        [k, Ie, zo],
      ),
      Xo = f("botPluginSearchProvider"),
      Yo = f("botPluginSearchUrl"),
      Jo = f("botResponseTargetId"),
      Zo = f("botPluginSearchQuery"),
      ea = f("botPluginType"),
      ta = f("botMessageDisclaimerText"),
      na = f("richResponse"),
      ra = f("unifiedResponse"),
      oa = f("unifiedResponseMutationMediaList"),
      aa = _(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t != null && n != null && r != null;
        },
        [Xo, Yo, Zo],
      ),
      ia = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return !n && (t == null ? void 0 : t.isBot()) === !0;
        },
        [pt, zo],
      ),
      la = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return !!(t && o("WAWebUserUtils").isMeAccount(n));
        },
        [ia, Te],
      ),
      sa = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return n && !t.remote.isBot();
        },
        [k, ia],
      ),
      ua = _(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t || n || r;
        },
        [ia, Ko, Qo],
      ),
      ca = _(
        function (e) {
          var t = e[0];
          return !t.fromMe && t.remote.isAiHub();
        },
        [k],
      ),
      da = _(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t || n || r;
        },
        [ia, Qo, ca],
      ),
      ma = _(
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
        [Cn, At, da, jo, $e],
      ),
      pa = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.PROTOCOL && n === "bot_feedback"
          );
        },
        [R, L],
      ),
      _a = f("hsmTag"),
      fa = _(
        function (e) {
          var t = e[0];
          return t === o("WAWebBusinessHSMTypes").HSM_TAG_TYPE.AUTHENTICATION;
        },
        [_a],
      ),
      ga = _(
        function (e) {
          var t = e[0];
          return t === o("WAWebBusinessHSMTypes").HSM_TAG_TYPE.MARKETING;
        },
        [_a],
      ),
      ha = f("botRespOrInvocationRevokeBotWid"),
      ya = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return !!(t != null && t.isBot() && n);
        },
        [ha, yr],
      ),
      Ca = _(
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
        [ea, ia],
      ),
      ba = f("botPluginMaybeParent"),
      va = f("botReelPluginThumbnailCdnUrl"),
      Sa = _(
        function (e) {
          var t = e[0];
          return t === o("WAWebMsgType").MSG_TYPE.BIZ_CONTENT_PLACEHOLDER;
        },
        [R],
      ),
      Ra = f("statusMentioned"),
      La = f("isWamoSub"),
      Ea = f("hasPaidPartnershipLabel"),
      ka = f("aiProvenance"),
      Ia = _(
        function (e) {
          var t = e[0];
          return o("WAWebMsgAIProvenance").hasAIProvenanceSignal(t);
        },
        [ka],
      ),
      Ta = f("isVideoCall"),
      Da = _(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (
            t === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
            (n === "miss_video" || n === "miss_group_video" || r === !0)
          );
        },
        [R, L, Ta],
      ),
      xa = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return t === o("WAWebMsgType").MSG_TYPE.CALL_LOG ? n.id : null;
        },
        [R, k],
      ),
      $a = f("callOutcome"),
      Pa = f("callSilenceReason"),
      Na = _(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (
            t === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
            (n === "silence" || r != null)
          );
        },
        [R, L, Pa],
      ),
      Ma = _(
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
              !C.includes(r))
          );
        },
        [R, L, $a, pt],
      ),
      wa = f("callDuration"),
      Aa = _(
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
        [R, w, wa],
      ),
      Fa = f("bytesSent"),
      Oa = f("bytesReceived"),
      Ba = f("callParticipants"),
      Wa = _(
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
        [Ba],
      ),
      qa = f("isCallLink"),
      Ua = f("callLinkToken"),
      Va = f("selfOtherDeviceConnected"),
      Ha = f("isVoiceChat"),
      Ga = f("screenedElsewhere"),
      za = _(
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
        [lt, Wa, Ua],
      ),
      ja = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n;
        },
        [lt, za],
      ),
      Ka = f("finalCallOutcome"),
      Qa = f("groupHistoryBundleMessageKey"),
      Xa = f("groupHistoryLastCountedMessageTimestamp", { default: null }),
      Ya = f("groupHistoryBundleMetadata"),
      Ja = f("groupHistoryIndividualMessageInfo"),
      Za = _(
        function (e) {
          var t,
            n = e[0],
            r = e[1];
          return (t = n == null ? void 0 : n.bundleMessageKey) != null ? t : r;
        },
        [Ja, Qa],
      ),
      ei = _(
        function (e) {
          var t = e[0];
          return t == null ? void 0 : t.isEditedAfterReceivedAsHistory;
        },
        [Ja],
      ),
      ti = _(
        function (e) {
          var t = e[0];
          return t == null ? void 0 : t.bundleSender;
        },
        [Ja],
      ),
      ni = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return t != null && r("WAWebWid").equals(t.remote, n);
        },
        [Za, M],
      );
    function ri(e) {
      var t =
        R(e) === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE &&
        o("WAWebUserUtils").isMeAccount(D(e));
      return (
        !t &&
        !pr(e) &&
        R(e) !== o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
        !In(e) &&
        !["change_number", "change_username", "masked_thread_created"].includes(
          L(e),
        ) &&
        !_r(e)
      );
    }
    ((l.clearMsgGetterCacheFor = h),
      (l.getMsgUnsafe = y),
      (l.getType = R),
      (l.getSubtype = L),
      (l.getId = k),
      (l.getServerId = I),
      (l.getTo = T),
      (l.getFrom = D),
      (l.getNotifyName = x),
      (l.getBroadcastId = $),
      (l.getHasPaymentQr = N),
      (l.getRemote = M),
      (l.getAuthor = A),
      (l.getRecipients = F),
      (l.getMetaFrom = O),
      (l.getSenderWithDevice = B),
      (l.getAck = W),
      (l.getIsScheduledMsg = q),
      (l.getViewCount = U),
      (l.getForwardsCount = V),
      (l.getViewed = H),
      (l.getOriginalSelfAuthor = G),
      (l.getKicTimestampMs = j),
      (l.getList = K),
      (l.getLatestEditMsgKey = Q),
      (l.getEphemeralDuration = X),
      (l.getAfterReadDuration = Y),
      (l.getEphemeralSettingUser = Z),
      (l.getT = ee),
      (l.getClientReceivedTsMillis = te),
      (l.getBackgroundColor = ne),
      (l.getHeaderType = re),
      (l.getInteractiveHeader = oe),
      (l.getInteractiveType = ae),
      (l.getBloksWidget = ie),
      (l.getFooter = le),
      (l.getMentionedJidList = se),
      (l.getGroupMentions = ue),
      (l.getQuotedMsg = ce),
      (l.getQuotedRemoteJid = de),
      (l.getRcat = pe),
      (l.getIsViewOnce = _e),
      (l.getIsGif = fe),
      (l.getGifAttribution = ge),
      (l.getCtwaContext = he),
      (l.getThreadIds = ye),
      (l.getMimetype = Ce),
      (l.getFilehash = be),
      (l.getDeprecatedMms3Url = ve),
      (l.getWaveform = Se),
      (l.getDisappearingModeInitiator = Re),
      (l.getDisappearingModeInitiatedByMe = Ee),
      (l.getActiveBotMsgStreamingInProgress = ke),
      (l.getBizBotType = Ie),
      (l.getBotTargetSenderJid = Te),
      (l.getIsSupportAIMessage = De),
      (l.getLastBotEditBodyLength = xe),
      (l.getBotEditType = $e),
      (l.getForwardedNewsletterMessageInfo = Pe),
      (l.getForwardedAiBotMessageInfo = Ne),
      (l.getNewsletterAdminInviteInfo = Me),
      (l.getNewsletterFollowerInviteInfo = we),
      (l.getIsGroupStatus = Fe),
      (l.getIsNewsletterStatus = Oe),
      (l.hasReshareAttribution = We),
      (l.getHasReshareAttribution = qe),
      (l.getIsNewsletterStatusReshare = Ue),
      (l.getHasNonChannelReshareAttribution = Ve),
      (l.getChannelReshareNewsletterId = He),
      (l.getBizSource = Ge),
      (l.isBizSourceFromMarketingMessage = ze),
      (l.getIsMarketingMessage = je),
      (l.getIsReply = Ke),
      (l.getIsOpus = Qe),
      (l.getRcatString = Xe),
      (l.getHasMentionOfMe = Ye),
      (l.getLocal = Je),
      (l.getHasMentionAll = tt),
      (l.getIsImportantMessage = nt),
      (l.getBotPluginReferenceIndex = rt),
      (l.getIsMeAddedToCommunityByOther = ot),
      (l.getIsUnreadType = at),
      (l.getIs1to1Msg = it),
      (l.getIsGroupMsg = lt),
      (l.getIsNewsletterMsg = st),
      (l.getHasOriginatedFromNewsletter = ut),
      (l.getIsStatus = ct),
      (l.getIsNotification = dt),
      (l.getIsSentByMe = mt),
      (l.getSender = pt),
      (l.getOriginalSender = _t),
      (l.getIsReaction = ft),
      (l.getIsFutureproof = gt),
      (l.getIsStickerMsg = ht),
      (l.getIsAiSticker = Ct),
      (l.getIsCarouselCard = bt),
      (l.getHasThumbList = St),
      (l.getIsKept = Rt),
      (l.getIsUnkept = Lt),
      (l.getIsPSA = Et),
      (l.getIsIAS = kt),
      (l.getIsAiHub = It),
      (l.getIsCAPISupport = Tt),
      (l.getIsProductListMessage = Dt),
      (l.getTitle = xt),
      (l.getBody = $t),
      (l.getCaption = Pt),
      (l.getComment = Nt),
      (l.getPollName = Mt),
      (l.getPollOptions = wt),
      (l.getHasContributedPollOptions = At),
      (l.getPollSelectableOptionsCount = Ft),
      (l.getPollInvalidated = Ot),
      (l.getPollType = Bt),
      (l.getPollCorrectOptionIndex = Wt),
      (l.getPollEndTime = qt),
      (l.getPollHideVoterNames = Ut),
      (l.getPollVotesSnapshot = Vt),
      (l.getQuarantineExtractedText = Ht),
      (l.getEventName = Gt),
      (l.getEventDescription = zt),
      (l.getEventStartTime = jt),
      (l.getEventEndTime = Kt),
      (l.getEventJoinLink = Qt),
      (l.getEventLocation = Xt),
      (l.getIsEventCanceled = Yt),
      (l.getEventInvalidated = Jt),
      (l.getEventIsScheduledCall = Zt),
      (l.getNativeFlowName = en),
      (l.getNativeFlowButtons = tn),
      (l.getInteractivePayload = nn),
      (l.getGalaxyFlowDisabled = rn),
      (l.getSignupCtaTapped = on),
      (l.getPaymentCurrency = an),
      (l.getPaymentAmount1000 = ln),
      (l.getPaymentMessageReceiverJid = sn),
      (l.getPaymentStatus = un),
      (l.getPaymentTxnStatus = cn),
      (l.getPaymentNoteMsg = dn),
      (l.getPaymentExpiryTimestamp = mn),
      (l.getPaymentInviteServiceType = pn),
      (l.getIsFromTemplate = _n),
      (l.getIsLive = fn),
      (l.getIsDynamicReplyButtonsMsg = gn),
      (l.getDynamicReplyButtons = hn),
      (l.getIsEphemeral = yn),
      (l.getIsEdited = Cn),
      (l.getIsEditProtocolMsg = bn),
      (l.getStatusCanvasColor = vn),
      (l.getIsUserCreatedType = Sn),
      (l.getIsSentByMeFromWeb = Rn),
      (l.getRevokeSender = Ln),
      (l.getIsRevokedByMe = En),
      (l.getIsInternational = kn),
      (l.getIsBizNotification = In),
      (l.getIsMedia = Tn),
      (l.getIsForwarded = Dn),
      (l.getForwardingScore = xn),
      (l.getForwardReachScore = $n),
      (l.getNumTimesForwarded = Pn),
      (l.FREQUENTLY_FORWARDED_SENTINEL = Nn),
      (l.getIsFrequentlyForwarded = Mn),
      (l.getIsQuestion = wn),
      (l.getIsSpoiler = An),
      (l.getMyQuestionResponsesCount = On),
      (l.getUnreadQuestionResponsesCount = Wn),
      (l.getQuestionReplyQuotedMessage = qn),
      (l.getIsQuestionReply = Un),
      (l.getNewsletterAdminProfile = Vn),
      (l.getShouldDisplayAsForwarded = Gn),
      (l.getInvis = zn),
      (l.getIsNewMsg = jn),
      (l.getIsSendFailure = Kn),
      (l.getIsFailed = Qn),
      (l.getVcard = Xn),
      (l.getDescription = Yn),
      (l.getMatchedText = Jn),
      (l.getThumbnail = Zn),
      (l.getThumbnailHQ = er),
      (l.getMusicArtwork = tr),
      (l.getMusicData = nr),
      (l.getRichPreviewType = rr),
      (l.getPaymentLinkMetadata = or),
      (l.getFaviconMMSMetadata = ar),
      (l.getPaymentLinkPreviewMetaTags = ir),
      (l.getHasPaymentLinkTrustSignals = lr),
      (l.getLinkPreview = sr),
      (l.getSupportsMessageFooter = ur),
      (l.getSupportsMessageFooterLinks = cr),
      (l.INITIAL_PAGE_SIZE = dr),
      (l.getInitialPageSize = mr),
      (l.getIsInitialE2ENotification = pr),
      (l.getIsDisappearingModeSystemMessage = _r),
      (l.getKicSender = gr),
      (l.getEphemeralExpirationTimestamp = hr),
      (l.getIsRevoke = yr),
      (l.getRevokeDuration = Cr),
      (l.getWamEditType = br),
      (l.getWamDisappearingModeTrigger = vr),
      (l.getWamDisappearingModeInitiatedByMe = Sr),
      (l.getWamDisappearingModeInitiator = Rr),
      (l.getInviteCode = Lr),
      (l.getInviteCodeExp = Er),
      (l.getInviteGrp = kr),
      (l.getInviteGrpName = Ir),
      (l.getInviteGrpJpegThum = Tr),
      (l.getInviteGrpType = Dr),
      (l.getIsGroupsV4InviteExpired = xr),
      (l.getIsNewsletterAdminInviteExpired = $r),
      (l.getProductListHeaderImage = Nr),
      (l.getIsAckPlayable = Mr),
      (l.getHasReaction = wr),
      (l.getTemplateParams = Ar),
      (l.getClientUrl = Fr),
      (l.getLoc = Or),
      (l.getLat = Br),
      (l.getLng = Wr),
      (l.getShareDuration = qr),
      (l.getFinalLat = Ur),
      (l.getFinalLng = Vr),
      (l.getStar = Hr),
      (l.getCurrencyCode = Gr),
      (l.getPriceAmount1000 = zr),
      (l.getSalePriceAmount1000 = jr),
      (l.getIsVcardOverMmsDocument = Kr),
      (l.getInteractiveAnnotations = Qr),
      (l.getFirstMusicAnnotation = Jr),
      (l.isStatusWithMusic = Zr),
      (l.isNewsletterMsgWithMusic = eo),
      (l.isStatusWithEmbeddedMessages = to),
      (l.getFirstMusicAnnotationEmbeddedContent = no),
      (l.getMessageSecret = ro),
      (l.getBroadcast = oo),
      (l.getVcardList = ao),
      (l.getVcardFormattedName = io),
      (l.getLabels = lo),
      (l.getAgentId = so),
      (l.getUrl = uo),
      (l.getRetailerId = co),
      (l.getBusinessOwnerJid = mo),
      (l.getProductId = po),
      (l.getProductImageCount = _o),
      (l.getIsMdHistoryMsg = fo),
      (l.getCampaignId = go),
      (l.getPmCampaignId = ho),
      (l.getFilename = yo),
      (l.getSmbClientCampaignId = Co),
      (l.getBusinessInteractionPills = bo),
      (l.getIsCaptionByUser = vo),
      (l.getDoNotPlayInline = So),
      (l.getThumbnailDirectPath = Ro),
      (l.getThumbnailHeight = Lo),
      (l.getThumbnailWidth = Eo),
      (l.getOrderTitle = ko),
      (l.getItemCount = Io),
      (l.getTotalAmount1000 = To),
      (l.getTotalCurrencyCode = Do),
      (l.getFutureproofType = xo),
      (l.getFutureproofSubtype = $o),
      (l.getEphemeralOutOfSync = Po),
      (l.getIsAvatar = No),
      (l.getBizPrivacyStatus = Mo),
      (l.getVerifiedBizName = wo),
      (l.getMediaKey = Ao),
      (l.getMessage = Fo),
      (l.getSize = Oo),
      (l.getMediaPngThumbnail = Bo),
      (l.getHostedBizEncStateMismatch = Wo),
      (l.getAeaAutoUpgrade = qo),
      (l.getInstantPlayedSelf = Uo),
      (l.getIsBotFutureproofPlaceholder = Vo),
      (l.getIsViewOncePlaceholder = Ho),
      (l.getIsBotQuery = Go),
      (l.getIsCoexV2Relay = zo),
      (l.getIsBizBot1pMessage = jo),
      (l.getIsBizBot1pResponse = Ko),
      (l.getBotPluginSearchProvider = Xo),
      (l.getBotPluginSearchUrl = Yo),
      (l.getBotResponseTargetId = Jo),
      (l.getBotPluginSearchQuery = Zo),
      (l.getBotPluginType = ea),
      (l.getBotMessageDisclaimerText = ta),
      (l.getRichResponse = na),
      (l.getUnifiedResponse = ra),
      (l.getUnifiedResponseMutationMediaList = oa),
      (l.getIsBotSearchResponse = aa),
      (l.getIsMetaBotResponse = ia),
      (l.isMetaBotResponseToMyInvoke = la),
      (l.getIsMetaBotInvokeResponse = sa),
      (l.getIsBotResponse = ua),
      (l.getShouldShowEditedIndicator = ma),
      (l.getIsBotFeedbackMessage = pa),
      (l.getHsmTag = _a),
      (l.getIsAuthenticationMessage = fa),
      (l.getIsMarketingTemplateTag = ga),
      (l.getIsRevokeForMsgFromOrDeliveredToBot = ya),
      (l.getIsBotPluginCarouselMsg = Ca),
      (l.getBotPluginMaybeParent = ba),
      (l.getBotReelPluginThumbnailCdnUrl = va),
      (l.getIsBizContentPlaceholder = Sa),
      (l.getStatusMentioned = Ra),
      (l.getIsWamoSub = La),
      (l.getHasPaidPartnershipLabel = Ea),
      (l.getAiProvenance = ka),
      (l.getIsAiContent = Ia),
      (l.getIsVideoCall = Da),
      (l.getCallId = xa),
      (l.getCallOutcome = $a),
      (l.getCallSilenceReason = Pa),
      (l.getIsCallSilenced = Na),
      (l.getIsMissedCall = Ma),
      (l.getCallDuration = wa),
      (l.getIsVisibleCallLog = Aa),
      (l.getBytesSent = Fa),
      (l.getBytesReceived = Oa),
      (l.getCallParticipants = Wa),
      (l.getIsCallLink = qa),
      (l.getCallLinkToken = Ua),
      (l.getSelfOtherDeviceConnected = Va),
      (l.getIsVoiceChat = Ha),
      (l.getScreenedElsewhere = Ga),
      (l.getIsAdHocGroupCall = za),
      (l.getIsGroupCall = ja),
      (l.getFinalCallOutcome = Ka),
      (l.getGroupHistoryLastCountedMessageTimestamp = Xa),
      (l.getGroupHistoryBundleMetadata = Ya),
      (l.getGroupHistoryIndividualMessageInfo = Ja),
      (l.getGroupHistoryBundleMessageKey = Za),
      (l.getIsEditedAfterReceivedAsHistory = ei),
      (l.getGroupHistoryBundleSender = ti),
      (l.getIsGroupHistoryMessageInOwnChat = ni),
      (l.isRealMessage = ri));
  },
  98,
);
