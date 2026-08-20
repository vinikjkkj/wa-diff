__d(
  "WAWebMsgModelUtils",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebAnimatedEmojiGatingUtils",
    "WAWebBackendErrors",
    "WAWebBusinessProfileTypes",
    "WAWebChatCommunityUtils",
    "WAWebChatContactUtils",
    "WAWebChatEphemerality",
    "WAWebChatMsgsCollection",
    "WAWebChatPreferenceCollection",
    "WAWebCommonMsgUtils",
    "WAWebConnGetters",
    "WAWebConnModel",
    "WAWebEmoji",
    "WAWebEmojiConst",
    "WAWebFileUtils",
    "WAWebFindChatAction",
    "WAWebForwardDocCaptionGating",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGetPlainTextFromBotMsg",
    "WAWebGroupMetadataCollection",
    "WAWebInteractiveMessageHeaderMediaType",
    "WAWebInvisiblePlaceholderViewModeProcessor",
    "WAWebKeepInChatMsgUtils",
    "WAWebMessageAssociationUIUtils",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebMuteCollection",
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebViewMode.flow",
    "WAWebWid",
    "WAWebWidFormat",
    "WAWebWidJsonReviver",
    "fbs",
    "isStringNullOrEmpty",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = {
        image: !0,
        video: !0,
        audio: !0,
        ptt: !0,
        sticker: !0,
        document: !0,
        product: !0,
      };
    function g(e) {
      var t;
      switch (e.type) {
        case "image":
        case "video":
        case "ptv":
        case "audio":
        case "ptt":
        case "sticker":
        case "document":
        case "product":
        case "sticker-pack":
        case o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE:
          return !0;
        case "protocol":
          return e.subtype === "history_sync_notification";
        case o("WAWebMsgType").MSG_TYPE.NATIVE_FLOW:
          return (
            e.headerType ===
            o("WAWebProtobufsE2E.pb").Message$ButtonsMessage$HeaderType.IMAGE
          );
        case o("WAWebMsgType").MSG_TYPE.INTERACTIVE:
          return !!(
            (t = e.interactiveHeader) != null &&
            t.mediaType &&
            o(
              "WAWebInteractiveMessageHeaderMediaType",
            ).IM_MEDIA_HEADER_TYPES.has(e.interactiveHeader.mediaType)
          );
        default:
          return !1;
      }
    }
    function h(e) {
      return e.type === o("WAWebMsgType").MSG_TYPE.CHAT && e.subtype === "url";
    }
    function y(e) {
      return e.type === o("WAWebMsgType").MSG_TYPE.CHAT && e.subtype === "url";
    }
    function C(e, t) {
      switch (t) {
        case "text":
          return (
            e.type === o("WAWebMsgType").MSG_TYPE.CHAT && e.subtype !== "url"
          );
        case "image":
          return e.type === o("WAWebMsgType").MSG_TYPE.IMAGE;
        case "video":
          return e.type === o("WAWebMsgType").MSG_TYPE.VIDEO && !e.isGif;
        case "gif":
          return e.type === o("WAWebMsgType").MSG_TYPE.VIDEO && e.isGif;
        case "audio":
          return e.type === o("WAWebMsgType").MSG_TYPE.AUDIO;
        case "ptt":
          return e.type === o("WAWebMsgType").MSG_TYPE.PTT;
        case "document":
          return e.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT;
        case "location":
          return e.type === o("WAWebMsgType").MSG_TYPE.LOCATION;
        case "vcard":
          return (
            e.type === o("WAWebMsgType").MSG_TYPE.VCARD ||
            e.type === o("WAWebMsgType").MSG_TYPE.MULTI_VCARD
          );
        case "url":
          return (
            e.type === o("WAWebMsgType").MSG_TYPE.CHAT && e.subtype === "url"
          );
        case "sticker":
          return e.type === o("WAWebMsgType").MSG_TYPE.STICKER;
        case void 0:
          return !1;
        default:
          return !1;
      }
    }
    function b(e) {
      if (!e) return null;
      var t = typeof e.id == "string" ? e.id : e.id.id,
        n = new (r("WAWebMsgKey"))({
          from: e.from,
          to: e.to,
          id: t,
          participant: e.participant,
          selfDir: e.self,
        });
      e.id = n;
      var a = new (o("WAWebMsgModel").Msg)(e);
      return ((a.fromQuotedMsg = !0), a);
    }
    function v(e) {
      var t = new (o("WAWebMsgModel").Msg)(e.toJSON());
      return (t.type === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE && S(t), t);
    }
    function S(e) {
      var t,
        n =
          (t = o("WAWebGetPlainTextFromBotMsg").getPlainTextFromBotMsg(e)) !=
          null
            ? t
            : "";
      ((e.type = o("WAWebMsgType").MSG_TYPE.CHAT),
        (e.subtype = void 0),
        (e.body = n),
        (e.richResponse = void 0),
        (e.unifiedResponse = void 0),
        (e.unifiedResponseRawData = void 0),
        (e.botSignatureVerificationMetadata = void 0));
    }
    function R(e) {
      var t = e.filter(function (e) {
        return o("WAWebMsgGetters").getHasOriginatedFromNewsletter(e) ||
          (!o("WAWebMsgGetters").getIsMedia(e) &&
            !o("WAWebFileUtils").isDocument(e)) ||
          !e.caption
          ? !1
          : o("WAWebFileUtils").isDocument(e) && e.caption === e.filename
            ? !o("WAWebForwardDocCaptionGating").isForwardDocCaptionEnabled()
            : !0;
      });
      return t;
    }
    function L(t) {
      var n, a, i, l;
      if (t instanceof o("WAWebMsgModel").Msg) ((i = t), (l = t.id));
      else if (t instanceof r("WAWebMsgKey")) l = t;
      else {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "model:msgs:broadcastFanout: unknown msgOrKey: ",
              "",
            ])),
          String(t),
        );
        return;
      }
      if (!r("WAWebWid").isStatus(l.remote)) {
        if ((n = i) != null && n.recipients && i.recipients.length !== 0)
          a = i.recipients;
        else {
          var u = r("WAWebGroupMetadataCollection").get(l.remote);
          u
            ? (a = u.participants.map(function (e) {
                return e.id;
              }))
            : o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcastFanout] no group_metadata, cant fanout: ",
                    "",
                  ])),
                l.remote.toString(),
              );
        }
        return a
          ? a.map(function (e) {
              return new (r("WAWebMsgKey"))({
                fromMe: l.fromMe,
                remote: e,
                id: l.id,
              });
            })
          : void 0;
      }
    }
    function E(e) {
      var t;
      if (!e.invis) {
        var n = L(e);
        n &&
          ((t = n.map(function (e) {
            return e.remote;
          })),
          n.forEach(function (t) {
            if (
              !o("WAWebMsgCollection").MsgCollection.some(function (e) {
                return e.id.equals(t);
              })
            ) {
              var n = D(e);
              ((n.to = t.remote), (n.id = t), (n.broadcast = !0));
              var a = o("WAWebMsgCollection").MsgCollection.add(n, {
                merge: !0,
              });
              r("promiseDone")(
                o("WAWebFindChatAction").findOrCreateLatestChat(
                  t.remote,
                  "msgModelBroadcastFanout",
                ),
                function (e) {
                  var t = e.chat,
                    n = a.reduce(function (e, n) {
                      if (n == null) return e;
                      if (n.type !== o("WAWebMsgType").MSG_TYPE.PROTOCOL) {
                        o("WAWebChatEphemerality").isEphemeralSettingOn(t) &&
                          (n.ephemeralDuration = o(
                            "WAWebChatEphemerality",
                          ).getEphemeralSetting(t));
                        var r = o(
                          "WAWebChatEphemerality",
                        ).getEphemeralSettingTimestamp(t);
                        r != null && (n.ephemeralSettingTimestamp = r);
                        var a = o(
                          "WAWebChatEphemerality",
                        ).getDisappearingModeInitiator(t);
                        a != null && (n.disappearingModeInitiator = a);
                      }
                      return (e.push(n), e);
                    }, []);
                  k({ insertAfter: !0, newRecords: n, threadOrChat: t });
                },
              );
            }
          }));
      }
      return t;
    }
    function k(e) {
      var t = e.anchorMsgKey,
        n = e.chatMsgsCollection,
        r = e.firstUnreadKey,
        a = e.insertAfter,
        i = e.newRecords,
        l = e.resetMostRecentMsgs,
        s = e.threadOrChat,
        d = n || s.msgs;
      if (i.length !== 0) {
        var m = d === s.msgs;
        if (l === !0)
          if (m)
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "models:msg:store:resetMostRecentMsgs .msgs === cmc !",
                ])),
            ),
              I(s, d, i));
          else {
            ((m = !0), I(s, d, i));
            var p = new (o("WAWebChatMsgsCollection").ChatMsgsCollection)();
            (p.replace(s.msgs),
              s.msgChunks.push(p),
              s.replaceMsgsCollection(d),
              s.msgs.trigger("change:last", s.msgs.last()));
          }
        else if (a) m ? I(s, d, i) : T(d, i);
        else {
          var _ = 0;
          if (t) {
            var f = d.get(t);
            if (f) {
              var g = d.indexOf(f);
              g !== -1 &&
                ((_ = g),
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[msg:store] insert group history at ",
                      " anchor=",
                      "",
                    ])),
                  _,
                  t.toString(),
                ));
            }
          }
          T(d, i, { at: _, silent: i.every(x) });
        }
        var h = r;
        h &&
          !s.unreadMsgAnchor &&
          (s.disableUnreadAnchor
            ? (s.disableUnreadAnchor = !1)
            : (s.unreadMsgAnchor = i.find(function (e) {
                return e.id.toString() === h.toString();
              })));
      }
    }
    function I(e, t, n) {
      var r = n.at(-1);
      r && (T(t, n), (e.lastReceivedKey = r.id));
    }
    function T(e, t, n) {
      try {
        e.add(t, n);
      } catch (e) {
        if (e instanceof o("WAWebBackendErrors").LogoutDrop)
          o("WALogger").WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "setRecords LogoutDrop: ",
                "",
              ])),
            e.toString(),
          );
        else throw e;
      }
    }
    function D(e) {
      return e != null && typeof e == "object"
        ? JSON.parse(JSON.stringify(e), o("WAWebWidJsonReviver").jsonWidReviver)
        : e;
    }
    function x(e) {
      return (
        o("WAWebFrontendMsgGetters").getEventType(e) ===
        o("WAWebCommonMsgUtils").EventType.IGNORE
      );
    }
    function $(e) {
      return e
        .filter(function (e) {
          return e.ack === o("WAWebAck").ACK.READ;
        })
        .map(function (e) {
          return e.id.toString();
        });
    }
    function P(e, t) {
      if (t === o("WAWebMsgType").MSG_TYPE.CHAT && !(e == null || e === "")) {
        var n = o("WAWebEmoji").EmojiUtil.matchLargeEmojiPattern(e);
        if (!(n == null || n.length !== 1)) {
          var r = o("WAWebEmoji").EmojiUtil.normalizeEmoji(n[0]);
          return r;
        }
      }
    }
    function N(e, t) {
      if (
        !o("WAWebAnimatedEmojiGatingUtils").isAnimatedEmojiEnabled() ||
        !r("WAWebChatPreferenceCollection").get("autoplayAnimatedImages")
      )
        return !1;
      var n = P(e, t);
      return (
        n != null &&
        o("WAWebEmojiConst").getSupportedAnimatedEmojis().includes(n)
      );
    }
    var M = new Set([
      (_ = o("WAWebMsgType")).MSG_TYPE.NOTIFICATION,
      _.MSG_TYPE.NOTIFICATION_TEMPLATE,
      _.MSG_TYPE.GP2,
      _.MSG_TYPE.BROADCAST_NOTIFICATION,
      _.MSG_TYPE.E2E_NOTIFICATION,
      _.MSG_TYPE.CALL_LOG,
      _.MSG_TYPE.PROTOCOL,
      _.MSG_TYPE.DEBUG,
      _.MSG_TYPE.CIPHERTEXT,
    ]);
    function w(e) {
      var t = o("WAWebMsgGetters").getSender(e);
      if (t == null && !M.has(e.type)) {
        var n, r, a;
        (o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "Undefined sender for ",
              " subtype:",
              " from:",
              ", author:",
              "",
            ])),
          (n = e.id) == null ? void 0 : n.toString(),
          e.subtype,
          (r = e.from) == null ? void 0 : r.toString(),
          (a = e.author) == null ? void 0 : a.toString(),
        ),
          o("WALogger")
            .ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "Messages should have a sender!",
                ])),
            )
            .sendLogs(e.type + "-msg-missing-sender", { sampling: 0.01 }));
      }
      return t;
    }
    function A(e) {
      var t = o("WAWebMsgGetters").getSender(e);
      return (
        o("WAWebMsgGetters").getIsNewsletterMsg(e)
          ? (t = e.id.remote)
          : o("WAWebMsgGetters").getIsGroupStatus(e) && (t = e.author),
        t
      );
    }
    function F(e) {
      return (
        o("WAWebMsgGetters").getIsSentByMe(e) && e.ack < o("WAWebAck").ACK.SENT
      );
    }
    function O(e) {
      return (
        e.isFromTemplate ||
        (!o("WAWebFrontendMsgGetters").getHasTemplateButtons(e) &&
          e.type !== o("WAWebMsgType").MSG_TYPE.TEMPLATE_BUTTON_REPLY)
      );
    }
    function B(e) {
      var t = o("WAWebFrontendMsgGetters").getChat(e).msgs.last();
      return e.id.equals(t == null ? void 0 : t.id);
    }
    function W(e) {
      var t = 5,
        n =
          o("WAWebMsgGetters").getNumTimesForwarded(e) +
          (o("WAWebMsgGetters").getShouldDisplayAsForwarded(e) ? 1 : 0);
      return n >= t ? o("WAWebMsgGetters").FREQUENTLY_FORWARDED_SENTINEL : n;
    }
    function q(e) {
      var t = o("WAWebMsgGetters").getEphemeralExpirationTimestamp(e);
      return t == null
        ? null
        : o("WAWebKeepInChatMsgUtils").isExpired(e)
          ? 0
          : t - o("WATimeUtils").unixTime();
    }
    function U(e) {
      var t;
      return (
        !(
          (t = o("WAWebFrontendMsgGetters").getAsViewOnce(e)) != null &&
          t.isViewOnce
        ) && o("WAWebMuteCollection").MuteCollection.getGlobalPreviews()
      );
    }
    function V(e, t) {
      var n = t.duringDetach,
        r = e.parentMsgKey;
      if (r) {
        var a,
          i = o("WAWebMsgCollection").MsgCollection.get(r);
        i &&
          (a = o("WAWebInvisiblePlaceholderViewModeProcessor")
            .InvisiblePlaceholderViewModeProcessor.compatibleMessageTypes) !=
            null &&
          a.includes(i.type) &&
          o("WAWebMessageAssociationUIUtils").shouldHideParentMessage({
            parentMsg: i,
            duringDetach: n,
          }) &&
          i.set(
            "viewMode",
            o("WAWebViewMode.flow").ViewModeType.INVISIBLE_PLACEHOLDER,
          );
      }
    }
    function H(e, t) {
      var n;
      t === void 0 && (t = {});
      var a = t,
        i = a.newPushNameFormatting,
        l = i === void 0 ? !1 : i,
        s = a.showShortName,
        u = s === void 0 ? !1 : s,
        c = a.showVerifiedName,
        d = c === void 0 ? !1 : c,
        m = a.withPushName,
        p = m === void 0 ? !1 : m,
        _ = a.withPushNameOnly,
        f = _ === void 0 ? !1 : _;
      if (!o("WAWebMsgGetters").getSender(e)) return "";
      if (
        o("WAWebUserPrefsMeUser").isMeAccount(o("WAWebMsgGetters").getSender(e))
      )
        return r("fbs")._(/*BTDS*/ "You").toString();
      if (o("WAWebMsgGetters").getIsPSA(e))
        return o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn)
          ? r("fbs")._(/*BTDS*/ "WhatsApp Business").toString()
          : r("fbs")._(/*BTDS*/ "WhatsApp").toString();
      if (e.senderObj == null) return "";
      var g = e.senderObj,
        h = u ? g.shortName : void 0;
      if (r("isStringNullOrEmpty")(h)) {
        if (g.name) return g.name;
      } else return h;
      if (
        d &&
        g.verifiedLevel ===
          o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH &&
        g.verifiedName
      )
        return g.verifiedName;
      if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
        var y = o("WAWebFrontendContactGetters").getFormattedUsernameAndType(g);
        if (y != null) return y.displayName;
      }
      var C = l
          ? o("WAWebChatContactUtils")
              .getFormattedNotifyName(e.notifyName)
              .toString()
          : "~" + e.notifyName,
        b = p && e.notifyName ? C : "";
      if (f && b) return b;
      var v =
        (n = o("WAWebMsgGetters").getSender(e)) != null && n.isLid()
          ? o("WAWebFrontendContactGetters").getUserDisplayNameForLid(g)
          : o("WAWebWidFormat").widToFormattedUser(
              o("WAWebMsgGetters").getSender(e),
            );
      return (
        o("WAWebChatCommunityUtils").shouldMaskPhoneNumberForChat(
          o("WAWebFrontendMsgGetters").getChat(e),
          g,
        ) && (v = o("WAWebFrontendContactGetters").getMaskedPhoneLid(g)),
        "" + v + (b ? " " : "") + b
      );
    }
    ((l.typeIsMms = g),
      (l.typeIsUrl = h),
      (l.notRefiningTypeIsUrl = y),
      (l.msgMatchesType = C),
      (l.createQuotedMsg = b),
      (l.createMsgSnapshot = v),
      (l.getMediaMsgWithCaptionForForwarding = R),
      (l.getBroadcastFanoutKeys = L),
      (l.broadcastFanout = E),
      (l.addRecordsToChat = k),
      (l.getReadMsgKeys = $),
      (l.isSingleEmojiMessageText = P),
      (l.isAnimatedEmoji = N),
      (l.getValidatedSender = w),
      (l.getQuotedParticipantForContextInfo = A),
      (l.msgMayFail = F),
      (l.interactiveButtonsReleased = O),
      (l.isLastMsg = B),
      (l.getMsgForwardingScoreWhenForwarded = W),
      (l.getMsgTimeUntilExpiration = q),
      (l.shouldShowMsgNotificationPreview = U),
      (l.hideParentMessageInChat = V),
      (l.getMsgDisplayName = H));
  },
  226,
);
