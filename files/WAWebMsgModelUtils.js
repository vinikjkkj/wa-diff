__d(
  "WAWebMsgModelUtils",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebAck",
    "WAWebAnimatedEmojiGatingUtils",
    "WAWebBackendErrors",
    "WAWebBroadcastFanoutKeys",
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
    "WAWebInteractiveMessageHeaderMediaType",
    "WAWebInvisiblePlaceholderViewModeProcessor",
    "WAWebMessageAssociationUIUtils",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebRichResponsePreviewText",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameGatingUtils",
    "WAWebViewMode.flow",
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
      p = {
        image: !0,
        video: !0,
        audio: !0,
        ptt: !0,
        sticker: !0,
        document: !0,
        product: !0,
      };
    function _(e) {
      var t;
      switch (e.type) {
        case "image":
        case "instant_image":
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
    function f(e) {
      return e.type === o("WAWebMsgType").MSG_TYPE.CHAT && e.subtype === "url";
    }
    function g(e) {
      return e.type === o("WAWebMsgType").MSG_TYPE.CHAT && e.subtype === "url";
    }
    function h(e, t) {
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
    function y(e) {
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
    function C(e) {
      var t = new (o("WAWebMsgModel").Msg)(
        babelHelpers.extends({}, e.toJSON(), { local: e.local }),
      );
      return (
        o("WAWebABProps").getABPropConfigValue("web_memlab_fixes_4") &&
          t.senderObj != null &&
          t.stopListening(t.senderObj),
        t.type === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE && b(t),
        t
      );
    }
    function b(e) {
      var t,
        n =
          (t = o("WAWebRichResponsePreviewText").getRichResponsePreviewText(
            e,
          )) != null
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
    function v(e) {
      var t;
      if (!e.invis) {
        var n = o("WAWebBroadcastFanoutKeys").getBroadcastFanoutKeys(e);
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
              var n = E(e);
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
                  S({ insertAfter: !0, newRecords: n, threadOrChat: t });
                },
              );
            }
          }));
      }
      return t;
    }
    function S(t) {
      var n = t.anchorMsgKey,
        r = t.chatMsgsCollection,
        a = t.firstUnreadKey,
        i = t.insertAfter,
        l = t.newRecords,
        u = t.resetMostRecentMsgs,
        c = t.threadOrChat,
        d = r || c.msgs;
      if (l.length !== 0) {
        var m = d === c.msgs;
        if (u === !0)
          if (m)
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "models:msg:store:resetMostRecentMsgs .msgs === cmc !",
                ])),
            ),
              R(c, d, l));
          else {
            ((m = !0), R(c, d, l));
            var p = new (o("WAWebChatMsgsCollection").ChatMsgsCollection)();
            (p.replace(c.msgs),
              c.msgChunks.push(p),
              c.replaceMsgsCollection(d),
              c.msgs.trigger("change:last", c.msgs.last()));
          }
        else if (i) m ? R(c, d, l) : L(d, l);
        else {
          var _ = 0;
          if (n) {
            var f = d.get(n);
            if (f) {
              var g = d.indexOf(f);
              g !== -1 &&
                ((_ = g),
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[msg:store] insert group history at ",
                      " anchor=",
                      "",
                    ])),
                  _,
                  n.toString(),
                ));
            }
          }
          L(d, l, { at: _, silent: l.every(k) });
        }
        var h = a;
        h &&
          !c.unreadMsgAnchor &&
          (c.disableUnreadAnchor
            ? (c.disableUnreadAnchor = !1)
            : (c.unreadMsgAnchor = l.find(function (e) {
                return e.id.toString() === h.toString();
              })));
      }
    }
    function R(e, t, n) {
      var r = n.at(-1);
      r && (L(t, n), (e.lastReceivedKey = r.id));
    }
    function L(e, t, n) {
      try {
        e.add(t, n);
      } catch (e) {
        if (e instanceof o("WAWebBackendErrors").LogoutDrop)
          o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "setRecords LogoutDrop: ",
                "",
              ])),
            e.toString(),
          );
        else throw e;
      }
    }
    function E(e) {
      return e != null && typeof e == "object"
        ? JSON.parse(JSON.stringify(e), o("WAWebWidJsonReviver").jsonWidReviver)
        : e;
    }
    function k(e) {
      return (
        o("WAWebFrontendMsgGetters").getEventType(e) ===
        o("WAWebCommonMsgUtils").EventType.IGNORE
      );
    }
    function I(e) {
      return e
        .filter(function (e) {
          return e.ack === o("WAWebAck").ACK.READ;
        })
        .map(function (e) {
          return e.id.toString();
        });
    }
    function T(e, t) {
      if (t === o("WAWebMsgType").MSG_TYPE.CHAT && !(e == null || e === "")) {
        var n = o("WAWebEmoji").EmojiUtil.matchLargeEmojiPattern(e);
        if (!(n == null || n.length !== 1)) {
          var r = o("WAWebEmoji").EmojiUtil.normalizeEmoji(n[0]);
          return r;
        }
      }
    }
    function D(e, t) {
      if (
        !o("WAWebAnimatedEmojiGatingUtils").isAnimatedEmojiEnabled() ||
        !r("WAWebChatPreferenceCollection").get("autoplayAnimatedImages")
      )
        return !1;
      var n = T(e, t);
      return (
        n != null &&
        o("WAWebEmojiConst").getSupportedAnimatedEmojis().includes(n)
      );
    }
    var x = new Set([
      (m = o("WAWebMsgType")).MSG_TYPE.NOTIFICATION,
      m.MSG_TYPE.NOTIFICATION_TEMPLATE,
      m.MSG_TYPE.GP2,
      m.MSG_TYPE.BROADCAST_NOTIFICATION,
      m.MSG_TYPE.E2E_NOTIFICATION,
      m.MSG_TYPE.CALL_LOG,
      m.MSG_TYPE.PROTOCOL,
      m.MSG_TYPE.DEBUG,
      m.MSG_TYPE.CIPHERTEXT,
    ]);
    function $(e) {
      var t = o("WAWebMsgGetters").getSender(e);
      if (t == null && !x.has(e.type)) {
        var n, r, a;
        (o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
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
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "Messages should have a sender!",
                ])),
            )
            .sendLogs(e.type + "-msg-missing-sender", { sampling: 0.01 }));
      }
      return t;
    }
    function P(e) {
      var t = o("WAWebMsgGetters").getSender(e);
      return (
        o("WAWebMsgGetters").getIsNewsletterMsg(e)
          ? (t = e.id.remote)
          : o("WAWebMsgGetters").getIsGroupStatus(e) && (t = e.author),
        t
      );
    }
    function N(e) {
      return (
        e.isFromTemplate ||
        (!o("WAWebFrontendMsgGetters").getHasTemplateButtons(e) &&
          e.type !== o("WAWebMsgType").MSG_TYPE.TEMPLATE_BUTTON_REPLY)
      );
    }
    function M(e) {
      var t = o("WAWebFrontendMsgGetters").getChat(e).msgs.last();
      return e.id.equals(t == null ? void 0 : t.id);
    }
    function w(e, t) {
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
    function A(e, t) {
      return (
        t === void 0 && (t = {}),
        F(
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
    function F(e, t) {
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
      var S = o("WAWebFrontendContactGetters").getShownOrgMemberName(b);
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
    ((l.typeIsMms = _),
      (l.typeIsUrl = f),
      (l.notRefiningTypeIsUrl = g),
      (l.msgMatchesType = h),
      (l.createQuotedMsg = y),
      (l.createMsgSnapshot = C),
      (l.broadcastFanout = v),
      (l.addRecordsToChat = S),
      (l.getReadMsgKeys = I),
      (l.isSingleEmojiMessageText = T),
      (l.isAnimatedEmoji = D),
      (l.getValidatedSender = $),
      (l.getQuotedParticipantForContextInfo = P),
      (l.interactiveButtonsReleased = N),
      (l.isLastMsg = M),
      (l.hideParentMessageInChat = w),
      (l.getMsgDisplayName = A),
      (l.getMsgDisplayNameFor = F));
  },
  226,
);
