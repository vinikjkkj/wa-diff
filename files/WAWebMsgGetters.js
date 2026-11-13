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
      Ve = f("bizSource");
    function He(e) {
      return e === "smb_promo";
    }
    var Ge = _(
        function (e) {
          var t = e[0];
          return He(t);
        },
        [Ve],
      ),
      ze = _(
        function (e) {
          var t = e[0];
          return t != null;
        },
        [ce],
      ),
      je = _(
        function (e) {
          var t = e[0];
          return o("WAWebMimeTypes").isOpus(t);
        },
        [Ce],
      ),
      Ke = _(
        function (e) {
          var t = e[0];
          return t == null ? null : o("WABase64").encodeB64UrlSafe(t, !0);
        },
        [pe],
      ),
      Qe = _(
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
      Xe = f("local", { default: !1 }),
      Ye = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n ? o("WAWebUserUtils").isMeAccount(S(n)) : !1;
        },
        [ce, me],
      ),
      Je = f("nonJidMentions"),
      Ze = _(
        function (e) {
          var t = e[0];
          return o("WAWebNonJidMentionUtils").hasMentionAll(t);
        },
        [Je],
      ),
      et = _(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t || n || r;
        },
        [Qe, Ye, Ze],
      ),
      tt = f("botPluginReferenceIndex"),
      nt = _(
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
              return o("WAWebUserPrefsMeUser").isMePrimary(S(e));
            })
          );
        },
        [R, L, A, F],
      ),
      rt = _(
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
        [R, tt, w, L, nt],
      ),
      ot = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return t.isRegularUser() && n.isRegularUser();
        },
        [D, T],
      ),
      at = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return r("WAWebWid").isGroup(t) || r("WAWebWid").isGroup(n);
        },
        [D, T],
      ),
      it = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return r("WAWebNewsletterIsNewsletterMsg")({ from: t, to: n });
        },
        [D, T],
      ),
      lt = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n != null;
        },
        [it, Pe],
      ),
      st = _(
        function (e) {
          var t = e[0],
            n = e[1],
            o = e[2];
          return r("WAWebWid").isStatus(t.remote) || n || o;
        },
        [k, Fe, Oe],
      ),
      ut = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return o("WAWebCommonMsgUtils").isNotificationType(t, n);
        },
        [R, L],
      ),
      ct = _(
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
        [k, D, ut, R, L],
      ),
      dt = _(
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
        [k, ct, at, st, Fe, Oe, it, D, A],
      ),
      mt = _(
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
        [G, dt, R],
      ),
      pt = _(
        function (e) {
          var t = e[0];
          return (
            t === o("WAWebMsgType").MSG_TYPE.REACTION ||
            t === o("WAWebMsgType").MSG_TYPE.REACTION_ENC
          );
        },
        [R],
      ),
      _t = _(
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
      ft = _(
        function (e) {
          var t = e[0];
          return t === o("WAWebMsgType").MSG_TYPE.STICKER;
        },
        [R],
      ),
      gt = f("isAiSticker"),
      ht = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n === !0;
        },
        [ft, gt],
      ),
      yt = f("isCarouselCard", { default: !1 }),
      Ct = _(
        function (e) {
          var t = e[0];
          return t === o("WAWebMsgType").MSG_TYPE.DOCUMENT;
        },
        [R],
      ),
      bt = _(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return !t && !n && !r;
        },
        [_e, ft, Ct],
      ),
      vt = _(
        function (e) {
          var t = e[0];
          return t === o("WAWebEphemeralConstants").KeepInChatState.KEPT;
        },
        [z],
      ),
      St = _(
        function (e) {
          var t = e[0];
          return t === o("WAWebEphemeralConstants").KeepInChatState.UNKEPT;
        },
        [z],
      ),
      Rt = _(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isPSA(t.remote);
        },
        [k],
      ),
      Lt = _(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isIAS(t.remote);
        },
        [k],
      ),
      Et = _(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isAiHub(t.remote);
        },
        [k],
      ),
      kt = _(
        function (e) {
          var t = e[0];
          return r("WAWebWid").isCAPISupportAccount(t.remote);
        },
        [k],
      ),
      It = _(
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
      Tt = f("title"),
      Dt = f("body", { default: "" }),
      xt = f("caption"),
      $t = f("comment"),
      Pt = f("pollName", { default: "" }),
      Nt = f("pollOptions"),
      Mt = _(
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
        [Nt],
      ),
      wt = f("pollSelectableOptionsCount", { default: 0 }),
      At = f("pollInvalidated", { default: !1 }),
      Ft = f("pollType", {
        default: o("WAWebPollCreationUtils").PollType.POLL,
      }),
      Ot = f("correctOptionIndex"),
      Bt = f("pollEndTime"),
      Wt = f("pollHideVoterNames"),
      qt = f("pollVotesSnapshot"),
      Ut = f("quarantineExtractedText"),
      Vt = f("eventName", { default: "" }),
      Ht = f("eventDescription"),
      Gt = f("eventStartTime", { default: 0 }),
      zt = f("eventEndTime"),
      jt = f("eventJoinLink"),
      Kt = f("eventLocation"),
      Qt = f("isEventCanceled", { default: !1 }),
      Xt = f("eventInvalidated", { default: !1 }),
      Yt = f("eventIsScheduledCall", { default: !1 }),
      Jt = f("nativeFlowName"),
      Zt = f("nativeFlowButtons"),
      en = f("interactivePayload"),
      tn = f("galaxyFlowDisabled", { default: !1 }),
      nn = f("signupCtaTapped", { default: !1 }),
      rn = f("paymentCurrency", { default: "" }),
      on = f("paymentAmount1000", { default: 0 }),
      an = f("paymentMessageReceiverJid"),
      ln = f("paymentStatus"),
      sn = f("paymentTxnStatus"),
      un = f("paymentNoteMsg"),
      cn = f("paymentExpiryTimestamp"),
      dn = f("paymentInviteServiceType"),
      mn = f("isFromTemplate", { default: !1 }),
      pn = f("isLive", { default: !1 }),
      _n = f("isDynamicReplyButtonsMsg", { default: !1 }),
      fn = f("dynamicReplyButtons"),
      gn = _(
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
      hn = _(
        function (e) {
          var t = e[0];
          return t != null;
        },
        [Q],
      ),
      yn = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.PROTOCOL && n === "message_edit"
          );
        },
        [R, L],
      ),
      Cn = _(
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
        [st, ne],
      ),
      bn = _(
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
      vn = _(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t.fromMe && n && r;
        },
        [k, Xe, bn],
      ),
      Sn = f("revokeSender"),
      Rn = _(
        function (e) {
          var t = e[0];
          return t != null && o("WAWebUserUtils").isMeAccount(t);
        },
        [Sn],
      ),
      Ln = _(
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
      En = _(
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
      kn = _(
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
      In = f("isForwarded", { default: !1 }),
      Tn = f("forwardingScore"),
      Dn = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return n == null ? (t ? 1 : 0) : n || 0;
        },
        [In, Tn],
      ),
      xn = 127,
      $n = _(
        function (e) {
          var t = e[0];
          return t >= xn;
        },
        [Dn],
      ),
      Pn = f("isQuestion", { default: !1 }),
      Nn = f("isSpoiler", { default: !1 }),
      Mn = f("questionResponsesCount"),
      wn = f("myQuestionResponsesCount", { default: 0 }),
      An = f("readQuestionResponsesCount"),
      Fn = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return t - n;
        },
        [Mn, An],
      ),
      On = f("questionReplyQuotedMessage"),
      Bn = _(
        function (e) {
          var t = e[0];
          return t != null;
        },
        [On],
      ),
      Wn = f("newsletterAdminProfile"),
      qn = _(
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
      Un = _(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2],
            o = e[3];
          return t || n || o || !r;
        },
        [In, lt, ct, qn],
      ),
      Vn = f("invis", { default: !1 }),
      Hn = f("isNewMsg", { default: !1 }),
      Gn = f("isSendFailure", { default: !1 }),
      zn = _(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (t && n != null && n < o("WAWebAck").ACK.CLOCK) || r;
        },
        [ct, W, Gn],
      ),
      jn = _(
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
        [R, Dt],
      ),
      Kn = f("description"),
      Qn = f("matchedText", { default: "" }),
      Xn = f("thumbnail"),
      Yn = f("thumbnailHQ"),
      Jn = f("musicArtwork"),
      Zn = f("musicData"),
      er = f("richPreviewType", {
        default: o("WAWebProtobufsE2E.pb")
          .Message$ExtendedTextMessage$PreviewType.NONE,
      }),
      tr = f("paymentLinkMetadata", { default: null }),
      nr = f("faviconMMSMetadata", { default: null }),
      rr = _(
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
        [tr],
      ),
      or = _(
        function (e) {
          var t = e[0];
          return (
            (t == null ? void 0 : t.isBusinessVerified) === !0 &&
            (t == null ? void 0 : t.providerName) != null
          );
        },
        [rr],
      ),
      ar = _(
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
        [Dt, Tt, Kn, Qn],
      ),
      ir = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n;
        },
        [_n, mn],
      ),
      lr = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            n ||
            t === o("WAWebMsgType").MSG_TYPE.LIST ||
            t === o("WAWebMsgType").MSG_TYPE.INTERACTIVE
          );
        },
        [R, _n],
      ),
      sr = 768,
      ur = _(
        function (e) {
          var t = e[0],
            n = e[1],
            r = 308;
          return n != null && n.isBot() ? 1 / 0 : t ? r : sr;
        },
        [$n, dt],
      ),
      cr = _(
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
      dr = _(
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
      mr = f("kicKey"),
      pr = _(
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
        [mr, at],
      ),
      _r = _(
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
      fr = _(
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
      gr = f("revokeDuration"),
      hr = _(
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
        [R, L, fr, hn],
      ),
      yr = _(
        function (e) {
          var t = e[0];
          if (t != null)
            return o("WAWebEphemeralityWAMUtils").getWamDisappearingModeTrigger(
              t,
            );
        },
        [Le],
      ),
      Cr = _(
        function (e) {
          var t = e[0];
          if (t != null)
            return o(
              "WAWebEphemeralityWAMUtils",
            ).getWamDisappearingModeInitiatedByMe(t);
        },
        [Ee],
      ),
      br = _(
        function (e) {
          var t = e[0];
          if (t != null)
            return o(
              "WAWebEphemeralityWAMUtils",
            ).getWamDisappearingModeInitiator(t);
        },
        [Re],
      ),
      vr = f("inviteCode", { default: "" }),
      Sr = f("inviteCodeExp", { default: "" }),
      Rr = f("inviteGrp", { default: "" }),
      Lr = f("inviteGrpName"),
      Er = f("inviteGrpJpegThum"),
      kr = f("inviteGrpType"),
      Ir = _(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          if (t !== o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE) return !1;
          if (!n) return !0;
          var a = Date.now() / 1e3;
          return parseInt(String(a), 10) >= parseInt(r, 10);
        },
        [R, vr, Sr],
      ),
      Tr = _(
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
      Dr = f("productHeaderImageRejected", { default: !1 }),
      xr = _(
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
        [Dr, K],
      ),
      $r = _(
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
        [R, lt],
      ),
      Pr = f("hasReaction", { default: !1 }),
      Nr = f("templateParams", {
        getDefault: function () {
          return [];
        },
      }),
      Mr = f("clientUrl", { default: "" }),
      wr = f("loc", { default: "" }),
      Ar = f("lat"),
      Fr = f("lng"),
      Or = f("shareDuration"),
      Br = f("finalLat"),
      Wr = f("finalLng"),
      qr = f("star", { default: !1 }),
      Ur = f("currencyCode"),
      Vr = f("priceAmount1000"),
      Hr = f("salePriceAmount1000"),
      Gr = f("isVcardOverMmsDocument", { default: !1 }),
      zr = f("interactiveAnnotations"),
      jr = _(
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
      Kr = _(
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
      Qr = _(
        function (e) {
          var t = e[0];
          return t == null ? null : t[0];
        },
        [jr],
      ),
      Xr = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n != null && n.length > 0;
        },
        [st, jr],
      ),
      Yr = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n != null;
        },
        [it, Qr],
      ),
      Jr = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return t && n;
        },
        [st, Kr],
      ),
      Zr = _(
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
      eo = f("messageSecret"),
      to = f("broadcast", { default: !1 }),
      no = f("vcardList", {
        getDefault: function () {
          return [];
        },
      }),
      ro = f("vcardFormattedName"),
      oo = f("labels", {
        getDefault: function () {
          return [];
        },
      }),
      ao = f("agentId"),
      io = f("url"),
      lo = f("retailerId"),
      so = f("businessOwnerJid"),
      uo = f("productId"),
      co = f("productImageCount"),
      mo = f("isMdHistoryMsg", { default: !1 }),
      po = f("campaignId"),
      _o = f("pmCampaignId"),
      fo = f("filename"),
      go = f("smbClientCampaignId"),
      ho = f("businessInteractionPills"),
      yo = f("isCaptionByUser", { default: !1 }),
      Co = f("doNotPlayInline"),
      bo = f("thumbnailDirectPath"),
      vo = f("thumbnailHeight"),
      So = f("thumbnailWidth"),
      Ro = f("orderTitle"),
      Lo = f("itemCount"),
      Eo = f("totalAmount1000"),
      ko = f("totalCurrencyCode"),
      Io = f("futureproofType"),
      To = f("futureproofSubtype"),
      Do = f("ephemeralOutOfSync"),
      xo = f("isAvatar"),
      $o = f("bizPrivacyStatus"),
      Po = f("verifiedBizName"),
      No = f("mediaKey"),
      Mo = f("message", { default: "" }),
      wo = f("size", { default: 0 }),
      Ao = f("mediaPngThumbnail"),
      Fo = f("hostedBizEncStateMismatch"),
      Oo = f("aeaAutoUpgrade"),
      Bo = _(
        function (e) {
          var t = e[0];
          return t === "bot_unavailable_fanout";
        },
        [L],
      ),
      Wo = _(
        function (e) {
          var t = e[0];
          return t === "view_once_unavailable_fanout";
        },
        [L],
      ),
      qo = _(
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
      Uo = _(
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
      Vo = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return !n && t === o("WAWebBotTypes").BizBotType.BIZ_1P;
        },
        [Ie, Uo],
      ),
      Ho = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return !t.fromMe && n;
        },
        [k, Vo],
      ),
      Go = _(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return !r && !t.fromMe && n === o("WAWebBotTypes").BizBotType.BIZ_3P;
        },
        [k, Ie, Uo],
      ),
      zo = f("botPluginSearchProvider"),
      jo = f("botPluginSearchUrl"),
      Ko = f("botResponseTargetId"),
      Qo = f("botPluginSearchQuery"),
      Xo = f("botPluginType"),
      Yo = f("botMessageDisclaimerText"),
      Jo = f("richResponse"),
      Zo = f("unifiedResponse"),
      ea = f("unifiedResponseMutationMediaList"),
      ta = _(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t != null && n != null && r != null;
        },
        [zo, jo, Qo],
      ),
      na = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return !n && (t == null ? void 0 : t.isBot()) === !0;
        },
        [dt, Uo],
      ),
      ra = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return !!(t && o("WAWebUserUtils").isMeAccount(n));
        },
        [na, Te],
      ),
      oa = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return n && !t.remote.isBot();
        },
        [k, na],
      ),
      aa = _(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t || n || r;
        },
        [na, Ho, Go],
      ),
      ia = _(
        function (e) {
          var t = e[0];
          return !t.fromMe && t.remote.isAiHub();
        },
        [k],
      ),
      la = _(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return t || n || r;
        },
        [na, Go, ia],
      ),
      sa = _(
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
        [hn, Mt, la, Vo, $e],
      ),
      ua = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return (
            t === o("WAWebMsgType").MSG_TYPE.PROTOCOL && n === "bot_feedback"
          );
        },
        [R, L],
      ),
      ca = f("hsmTag"),
      da = _(
        function (e) {
          var t = e[0];
          return t === o("WAWebBusinessHSMTypes").HSM_TAG_TYPE.AUTHENTICATION;
        },
        [ca],
      ),
      ma = _(
        function (e) {
          var t = e[0];
          return t === o("WAWebBusinessHSMTypes").HSM_TAG_TYPE.MARKETING;
        },
        [ca],
      ),
      pa = f("botRespOrInvocationRevokeBotWid"),
      _a = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return !!(t != null && t.isBot() && n);
        },
        [pa, fr],
      ),
      fa = _(
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
        [Xo, na],
      ),
      ga = f("botPluginMaybeParent"),
      ha = f("botReelPluginThumbnailCdnUrl"),
      ya = _(
        function (e) {
          var t = e[0];
          return t === o("WAWebMsgType").MSG_TYPE.BIZ_CONTENT_PLACEHOLDER;
        },
        [R],
      ),
      Ca = f("statusMentioned"),
      ba = f("isWamoSub"),
      va = f("hasPaidPartnershipLabel"),
      Sa = f("aiProvenance"),
      Ra = _(
        function (e) {
          var t = e[0];
          return o("WAWebMsgAIProvenance").hasAIProvenanceSignal(t);
        },
        [Sa],
      ),
      La = f("isVideoCall"),
      Ea = _(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (
            t === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
            (n === "miss_video" || n === "miss_group_video" || r === !0)
          );
        },
        [R, L, La],
      ),
      ka = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return t === o("WAWebMsgType").MSG_TYPE.CALL_LOG ? n.id : null;
        },
        [R, k],
      ),
      Ia = f("callOutcome"),
      Ta = f("callSilenceReason"),
      Da = _(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return (
            t === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
            (n === "silence" || r != null)
          );
        },
        [R, L, Ta],
      ),
      xa = _(
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
        [R, L, Ia, dt],
      ),
      $a = f("callDuration"),
      Pa = _(
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
        [R, w, $a],
      ),
      Na = f("bytesSent"),
      Ma = f("bytesReceived"),
      wa = f("callParticipants"),
      Aa = _(
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
        [wa],
      ),
      Fa = f("isCallLink"),
      Oa = f("callLinkToken"),
      Ba = f("selfOtherDeviceConnected"),
      Wa = f("isVoiceChat"),
      qa = f("screenedElsewhere"),
      Ua = _(
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
        [at, Aa, Oa],
      ),
      Va = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return t || n;
        },
        [at, Ua],
      ),
      Ha = f("finalCallOutcome"),
      Ga = f("groupHistoryBundleMessageKey"),
      za = f("groupHistoryLastCountedMessageTimestamp", { default: null }),
      ja = f("groupHistoryBundleMetadata"),
      Ka = f("groupHistoryIndividualMessageInfo"),
      Qa = _(
        function (e) {
          var t,
            n = e[0],
            r = e[1];
          return (t = n == null ? void 0 : n.bundleMessageKey) != null ? t : r;
        },
        [Ka, Ga],
      ),
      Xa = _(
        function (e) {
          var t = e[0];
          return t == null ? void 0 : t.isEditedAfterReceivedAsHistory;
        },
        [Ka],
      ),
      Ya = _(
        function (e) {
          var t = e[0];
          return t == null ? void 0 : t.bundleSender;
        },
        [Ka],
      ),
      Ja = _(
        function (e) {
          var t = e[0],
            n = e[1];
          return t != null && r("WAWebWid").equals(t.remote, n);
        },
        [Qa, M],
      );
    function Za(e) {
      var t =
        R(e) === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE &&
        o("WAWebUserUtils").isMeAccount(D(e));
      return (
        !t &&
        !cr(e) &&
        R(e) !== o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
        !En(e) &&
        !["change_number", "change_username", "masked_thread_created"].includes(
          L(e),
        ) &&
        !dr(e)
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
      (l.getBizSource = Ve),
      (l.isBizSourceFromMarketingMessage = He),
      (l.getIsMarketingMessage = Ge),
      (l.getIsReply = ze),
      (l.getIsOpus = je),
      (l.getRcatString = Ke),
      (l.getHasMentionOfMe = Qe),
      (l.getLocal = Xe),
      (l.getHasMentionAll = Ze),
      (l.getIsImportantMessage = et),
      (l.getBotPluginReferenceIndex = tt),
      (l.getIsMeAddedToCommunityByOther = nt),
      (l.getIsUnreadType = rt),
      (l.getIs1to1Msg = ot),
      (l.getIsGroupMsg = at),
      (l.getIsNewsletterMsg = it),
      (l.getHasOriginatedFromNewsletter = lt),
      (l.getIsStatus = st),
      (l.getIsNotification = ut),
      (l.getIsSentByMe = ct),
      (l.getSender = dt),
      (l.getOriginalSender = mt),
      (l.getIsReaction = pt),
      (l.getIsFutureproof = _t),
      (l.getIsStickerMsg = ft),
      (l.getIsAiSticker = ht),
      (l.getIsCarouselCard = yt),
      (l.getHasThumbList = bt),
      (l.getIsKept = vt),
      (l.getIsUnkept = St),
      (l.getIsPSA = Rt),
      (l.getIsIAS = Lt),
      (l.getIsAiHub = Et),
      (l.getIsCAPISupport = kt),
      (l.getIsProductListMessage = It),
      (l.getTitle = Tt),
      (l.getBody = Dt),
      (l.getCaption = xt),
      (l.getComment = $t),
      (l.getPollName = Pt),
      (l.getPollOptions = Nt),
      (l.getHasContributedPollOptions = Mt),
      (l.getPollSelectableOptionsCount = wt),
      (l.getPollInvalidated = At),
      (l.getPollType = Ft),
      (l.getPollCorrectOptionIndex = Ot),
      (l.getPollEndTime = Bt),
      (l.getPollHideVoterNames = Wt),
      (l.getPollVotesSnapshot = qt),
      (l.getQuarantineExtractedText = Ut),
      (l.getEventName = Vt),
      (l.getEventDescription = Ht),
      (l.getEventStartTime = Gt),
      (l.getEventEndTime = zt),
      (l.getEventJoinLink = jt),
      (l.getEventLocation = Kt),
      (l.getIsEventCanceled = Qt),
      (l.getEventInvalidated = Xt),
      (l.getEventIsScheduledCall = Yt),
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
      (l.getMyQuestionResponsesCount = wn),
      (l.getUnreadQuestionResponsesCount = Fn),
      (l.getQuestionReplyQuotedMessage = On),
      (l.getIsQuestionReply = Bn),
      (l.getNewsletterAdminProfile = Wn),
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
      (l.getMusicData = Zn),
      (l.getRichPreviewType = er),
      (l.getPaymentLinkMetadata = tr),
      (l.getFaviconMMSMetadata = nr),
      (l.getPaymentLinkPreviewMetaTags = rr),
      (l.getHasPaymentLinkTrustSignals = or),
      (l.getLinkPreview = ar),
      (l.getSupportsMessageFooter = ir),
      (l.getSupportsMessageFooterLinks = lr),
      (l.INITIAL_PAGE_SIZE = sr),
      (l.getInitialPageSize = ur),
      (l.getIsInitialE2ENotification = cr),
      (l.getIsDisappearingModeSystemMessage = dr),
      (l.getKicSender = pr),
      (l.getEphemeralExpirationTimestamp = _r),
      (l.getIsRevoke = fr),
      (l.getRevokeDuration = gr),
      (l.getWamEditType = hr),
      (l.getWamDisappearingModeTrigger = yr),
      (l.getWamDisappearingModeInitiatedByMe = Cr),
      (l.getWamDisappearingModeInitiator = br),
      (l.getInviteCode = vr),
      (l.getInviteCodeExp = Sr),
      (l.getInviteGrp = Rr),
      (l.getInviteGrpName = Lr),
      (l.getInviteGrpJpegThum = Er),
      (l.getInviteGrpType = kr),
      (l.getIsGroupsV4InviteExpired = Ir),
      (l.getIsNewsletterAdminInviteExpired = Tr),
      (l.getProductListHeaderImage = xr),
      (l.getIsAckPlayable = $r),
      (l.getHasReaction = Pr),
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
      (l.getPmCampaignId = _o),
      (l.getFilename = fo),
      (l.getSmbClientCampaignId = go),
      (l.getBusinessInteractionPills = ho),
      (l.getIsCaptionByUser = yo),
      (l.getDoNotPlayInline = Co),
      (l.getThumbnailDirectPath = bo),
      (l.getThumbnailHeight = vo),
      (l.getThumbnailWidth = So),
      (l.getOrderTitle = Ro),
      (l.getItemCount = Lo),
      (l.getTotalAmount1000 = Eo),
      (l.getTotalCurrencyCode = ko),
      (l.getFutureproofType = Io),
      (l.getFutureproofSubtype = To),
      (l.getEphemeralOutOfSync = Do),
      (l.getIsAvatar = xo),
      (l.getBizPrivacyStatus = $o),
      (l.getVerifiedBizName = Po),
      (l.getMediaKey = No),
      (l.getMessage = Mo),
      (l.getSize = wo),
      (l.getMediaPngThumbnail = Ao),
      (l.getHostedBizEncStateMismatch = Fo),
      (l.getAeaAutoUpgrade = Oo),
      (l.getIsBotFutureproofPlaceholder = Bo),
      (l.getIsViewOncePlaceholder = Wo),
      (l.getIsBotQuery = qo),
      (l.getIsCoexV2Relay = Uo),
      (l.getIsBizBot1pMessage = Vo),
      (l.getIsBizBot1pResponse = Ho),
      (l.getBotPluginSearchProvider = zo),
      (l.getBotPluginSearchUrl = jo),
      (l.getBotResponseTargetId = Ko),
      (l.getBotPluginSearchQuery = Qo),
      (l.getBotPluginType = Xo),
      (l.getBotMessageDisclaimerText = Yo),
      (l.getRichResponse = Jo),
      (l.getUnifiedResponse = Zo),
      (l.getUnifiedResponseMutationMediaList = ea),
      (l.getIsBotSearchResponse = ta),
      (l.getIsMetaBotResponse = na),
      (l.isMetaBotResponseToMyInvoke = ra),
      (l.getIsMetaBotInvokeResponse = oa),
      (l.getIsBotResponse = aa),
      (l.getShouldShowEditedIndicator = sa),
      (l.getIsBotFeedbackMessage = ua),
      (l.getHsmTag = ca),
      (l.getIsAuthenticationMessage = da),
      (l.getIsMarketingTemplateTag = ma),
      (l.getIsRevokeForMsgFromOrDeliveredToBot = _a),
      (l.getIsBotPluginCarouselMsg = fa),
      (l.getBotPluginMaybeParent = ga),
      (l.getBotReelPluginThumbnailCdnUrl = ha),
      (l.getIsBizContentPlaceholder = ya),
      (l.getStatusMentioned = Ca),
      (l.getIsWamoSub = ba),
      (l.getHasPaidPartnershipLabel = va),
      (l.getAiProvenance = Sa),
      (l.getIsAiContent = Ra),
      (l.getIsVideoCall = Ea),
      (l.getCallId = ka),
      (l.getCallOutcome = Ia),
      (l.getCallSilenceReason = Ta),
      (l.getIsCallSilenced = Da),
      (l.getIsMissedCall = xa),
      (l.getCallDuration = $a),
      (l.getIsVisibleCallLog = Pa),
      (l.getBytesSent = Na),
      (l.getBytesReceived = Ma),
      (l.getCallParticipants = Aa),
      (l.getIsCallLink = Fa),
      (l.getCallLinkToken = Oa),
      (l.getSelfOtherDeviceConnected = Ba),
      (l.getIsVoiceChat = Wa),
      (l.getScreenedElsewhere = qa),
      (l.getIsAdHocGroupCall = Ua),
      (l.getIsGroupCall = Va),
      (l.getFinalCallOutcome = Ha),
      (l.getGroupHistoryLastCountedMessageTimestamp = za),
      (l.getGroupHistoryBundleMetadata = ja),
      (l.getGroupHistoryIndividualMessageInfo = Ka),
      (l.getGroupHistoryBundleMessageKey = Qa),
      (l.getIsEditedAfterReceivedAsHistory = Xa),
      (l.getGroupHistoryBundleSender = Ya),
      (l.getIsGroupHistoryMessageInOwnChat = Ja),
      (l.isRealMessage = Za));
  },
  98,
);
