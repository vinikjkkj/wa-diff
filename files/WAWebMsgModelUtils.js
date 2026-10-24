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
    "WAWebFindChatAction",
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
    "WAWebOrgMemberContactName",
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
      var t = new (o("WAWebMsgModel").Msg)(
        babelHelpers.extends({}, e.toJSON(), { local: e.local }),
      );
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
    function R(t) {
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
    function L(e) {
      var t;
      if (!e.invis) {
        var n = R(e);
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
              var n = T(e);
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
                  E({ insertAfter: !0, newRecords: n, threadOrChat: t });
                },
              );
            }
          }));
      }
      return t;
    }
    function E(e) {
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
              k(s, d, i));
          else {
            ((m = !0), k(s, d, i));
            var p = new (o("WAWebChatMsgsCollection").ChatMsgsCollection)();
            (p.replace(s.msgs),
              s.msgChunks.push(p),
              s.replaceMsgsCollection(d),
              s.msgs.trigger("change:last", s.msgs.last()));
          }
        else if (a) m ? k(s, d, i) : I(d, i);
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
          I(d, i, { at: _, silent: i.every(D) });
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
    function k(e, t, n) {
      var r = n.at(-1);
      r && (I(t, n), (e.lastReceivedKey = r.id));
    }
    function I(e, t, n) {
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
    function T(e) {
      return e != null && typeof e == "object"
        ? JSON.parse(JSON.stringify(e), o("WAWebWidJsonReviver").jsonWidReviver)
        : e;
    }
    function D(e) {
      return (
        o("WAWebFrontendMsgGetters").getEventType(e) ===
        o("WAWebCommonMsgUtils").EventType.IGNORE
      );
    }
    function x(e) {
      return e
        .filter(function (e) {
          return e.ack === o("WAWebAck").ACK.READ;
        })
        .map(function (e) {
          return e.id.toString();
        });
    }
    function $(e, t) {
      if (t === o("WAWebMsgType").MSG_TYPE.CHAT && !(e == null || e === "")) {
        var n = o("WAWebEmoji").EmojiUtil.matchLargeEmojiPattern(e);
        if (!(n == null || n.length !== 1)) {
          var r = o("WAWebEmoji").EmojiUtil.normalizeEmoji(n[0]);
          return r;
        }
      }
    }
    function P(e, t) {
      if (
        !o("WAWebAnimatedEmojiGatingUtils").isAnimatedEmojiEnabled() ||
        !r("WAWebChatPreferenceCollection").get("autoplayAnimatedImages")
      )
        return !1;
      var n = $(e, t);
      return (
        n != null &&
        o("WAWebEmojiConst").getSupportedAnimatedEmojis().includes(n)
      );
    }
    var N = new Set([
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
    function M(e) {
      var t = o("WAWebMsgGetters").getSender(e);
      if (t == null && !N.has(e.type)) {
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
    function w(e) {
      var t = o("WAWebMsgGetters").getSender(e);
      return (
        o("WAWebMsgGetters").getIsNewsletterMsg(e)
          ? (t = e.id.remote)
          : o("WAWebMsgGetters").getIsGroupStatus(e) && (t = e.author),
        t
      );
    }
    function A(e) {
      return (
        e.isFromTemplate ||
        (!o("WAWebFrontendMsgGetters").getHasTemplateButtons(e) &&
          e.type !== o("WAWebMsgType").MSG_TYPE.TEMPLATE_BUTTON_REPLY)
      );
    }
    function F(e) {
      var t = o("WAWebFrontendMsgGetters").getChat(e).msgs.last();
      return e.id.equals(t == null ? void 0 : t.id);
    }
    function O(e) {
      var t = o("WAWebMsgGetters").getEphemeralExpirationTimestamp(e);
      return t == null
        ? null
        : o("WAWebKeepInChatMsgUtils").isExpired(e)
          ? 0
          : t - o("WATimeUtils").unixTime();
    }
    function B(e, t) {
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
    function W(e, t) {
      return (
        t === void 0 && (t = {}),
        q(
          {
            chat: o("WAWebFrontendMsgGetters").getMaybeChat(e),
            isPSA: o("WAWebMsgGetters").getIsPSA(e),
            notifyName: e.notifyName,
            sender: o("WAWebMsgGetters").getSender(e),
            senderObj: e.senderObj,
          },
          t,
        )
      );
    }
    function q(e, t) {
      var n = e.chat,
        a = e.isPSA,
        i = e.notifyName,
        l = e.sender,
        s = e.senderObj;
      t === void 0 && (t = {});
      var u = t,
        c = u.newPushNameFormatting,
        d = c === void 0 ? !1 : c,
        m = u.showShortName,
        p = m === void 0 ? !1 : m,
        _ = u.showVerifiedName,
        f = _ === void 0 ? !1 : _,
        g = u.withPushName,
        h = g === void 0 ? !1 : g,
        y = u.withPushNameOnly,
        C = y === void 0 ? !1 : y;
      if (!l) return "";
      if (o("WAWebUserPrefsMeUser").isMeAccount(l))
        return r("fbs")._(/*BTDS*/ "You").toString();
      if (a)
        return o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn)
          ? r("fbs")._(/*BTDS*/ "WhatsApp Business").toString()
          : r("fbs")._(/*BTDS*/ "WhatsApp").toString();
      if (s == null) return "";
      var b = s,
        v = p ? b.shortName : void 0;
      if (r("isStringNullOrEmpty")(v)) {
        if (b.name) return b.name;
      } else return v;
      if (
        f &&
        b.verifiedLevel ===
          o("WAWebBusinessProfileTypes").VERIFIED_LEVEL.HIGH &&
        b.verifiedName
      )
        return b.verifiedName;
      var S = o("WAWebOrgMemberContactName").getOrgMemberDisplayName(b);
      if (S != null) return S;
      if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
        var R = o("WAWebFrontendContactGetters").getFormattedUsernameAndType(b);
        if (R != null) return R.displayName;
      }
      var L = d
          ? o("WAWebChatContactUtils").getFormattedNotifyName(i).toString()
          : "~" + (i != null ? i : ""),
        E = h && !r("isStringNullOrEmpty")(i) ? L : "";
      if (C && E) return E;
      var k = l.isLid()
        ? o("WAWebFrontendContactGetters").getUserDisplayNameForLid(b)
        : o("WAWebWidFormat").widToFormattedUser(l);
      return (
        o("WAWebChatCommunityUtils").shouldMaskPhoneNumberForChat(n, b) &&
          (k = o("WAWebFrontendContactGetters").getMaskedPhoneLid(b)),
        "" + k + (E ? " " : "") + E
      );
    }
    ((l.typeIsMms = g),
      (l.typeIsUrl = h),
      (l.notRefiningTypeIsUrl = y),
      (l.msgMatchesType = C),
      (l.createQuotedMsg = b),
      (l.createMsgSnapshot = v),
      (l.getBroadcastFanoutKeys = R),
      (l.broadcastFanout = L),
      (l.addRecordsToChat = E),
      (l.getReadMsgKeys = x),
      (l.isSingleEmojiMessageText = $),
      (l.isAnimatedEmoji = P),
      (l.getValidatedSender = M),
      (l.getQuotedParticipantForContextInfo = w),
      (l.interactiveButtonsReleased = A),
      (l.isLastMsg = F),
      (l.getMsgTimeUntilExpiration = O),
      (l.hideParentMessageInChat = B),
      (l.getMsgDisplayName = W),
      (l.getMsgDisplayNameFor = q));
  },
  226,
);
