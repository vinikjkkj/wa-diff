__d(
  "WAWebMsgModelUtils",
  [
    "WALogger",
    "WAWebAck",
    "WAWebAnimatedEmojiGatingUtils",
    "WAWebBackendErrors",
    "WAWebChatEphemerality",
    "WAWebChatMsgsCollection",
    "WAWebChatPreferenceCollection",
    "WAWebCommonMsgUtils",
    "WAWebCongratulationsAnimationsGatingUtils",
    "WAWebCongratulationsAnimationsUtils",
    "WAWebEmoji",
    "WAWebEmojiConst",
    "WAWebFileUtils",
    "WAWebFindChatAction",
    "WAWebFrontendMsgGetters",
    "WAWebGroupMetadataCollection",
    "WAWebInteractiveMessageHeaderMediaType",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebWid",
    "WAWebWidJsonReviver",
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
      return new (o("WAWebMsgModel").Msg)(e.toJSON());
    }
    function S(e) {
      var t = e.filter(function (e) {
        return (
          !o("WAWebMsgGetters").getHasOriginatedFromNewsletter(e) &&
          (o("WAWebMsgGetters").getIsMedia(e) ||
            o("WAWebFileUtils").isDocument(e)) &&
          !!e.caption
        );
      });
      return t;
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
                  E(n, t, !0);
                },
              );
            }
          }));
      }
      return t;
    }
    function E(e, t, n, r, a, i, l) {
      var s = r || t.msgs;
      if (e.length !== 0) {
        var d = s === t.msgs;
        if (i === !0)
          if (d)
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "models:msg:store:resetMostRecentMsgs .msgs === cmc !",
                ])),
            ),
              k(t, s, e));
          else {
            ((d = !0), k(t, s, e));
            var m = new (o("WAWebChatMsgsCollection").ChatMsgsCollection)();
            (m.replace(t.msgs),
              t.msgChunks.push(m),
              t.replaceMsgsCollection(s),
              t.msgs.trigger("change:last", t.msgs.last()));
          }
        else if (n) d ? k(t, s, e) : I(s, e);
        else {
          var p = 0;
          if (l) {
            var _ = s.get(l);
            if (_) {
              var f = s.indexOf(_);
              f !== -1 &&
                ((p = f),
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[msg:store] insert group history at ",
                      " anchor=",
                      "",
                    ])),
                  p,
                  l.toString(),
                ));
            }
          }
          I(s, e, { at: p, silent: e.every(D) });
        }
        var g = a;
        g &&
          !t.unreadMsgAnchor &&
          (t.disableUnreadAnchor
            ? (t.disableUnreadAnchor = !1)
            : (t.unreadMsgAnchor = e.find(function (e) {
                return e.id.toString() === g.toString();
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
    var $ = new RegExp(["congratulations", "congrats"].join("|"));
    function P(e) {
      if (
        !o(
          "WAWebCongratulationsAnimationsGatingUtils",
        ).isCongratulationsAnimationsEnabled()
      )
        return null;
      if (e != null) {
        var t = $.test(e.toLocaleLowerCase());
        if (t)
          return o("WAWebCongratulationsAnimationsUtils")
            .CelebrationAnimationType.DEFAULT;
      }
      return null;
    }
    function N(e, t) {
      if (t === o("WAWebMsgType").MSG_TYPE.CHAT && !(e == null || e === "")) {
        var n = o("WAWebEmoji").EmojiUtil.matchLargeEmojiPattern(e);
        if (!(n == null || n.length !== 1)) {
          var r = o("WAWebEmoji").EmojiUtil.normalizeEmoji(n[0]);
          return r;
        }
      }
    }
    function M(e, t) {
      if (
        !o("WAWebAnimatedEmojiGatingUtils").isAnimatedEmojiEnabled() ||
        !r("WAWebChatPreferenceCollection").get("autoplayAnimatedImages")
      )
        return !1;
      var n = N(e, t);
      return (
        n != null &&
        o("WAWebEmojiConst").getSupportedAnimatedEmojis().includes(n)
      );
    }
    var w = new Set([
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
    function A(e) {
      var t = o("WAWebMsgGetters").getSender(e);
      if (t == null && !w.has(e.type)) {
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
    function F(e) {
      var t = o("WAWebMsgGetters").getSender(e);
      return (
        o("WAWebMsgGetters").getIsNewsletterMsg(e)
          ? (t = e.id.remote)
          : o("WAWebMsgGetters").getIsGroupStatus(e) && (t = e.author),
        t
      );
    }
    ((l.typeIsMms = g),
      (l.typeIsUrl = h),
      (l.notRefiningTypeIsUrl = y),
      (l.msgMatchesType = C),
      (l.createQuotedMsg = b),
      (l.createMsgSnapshot = v),
      (l.getMediaMsgWithCaptionForForwarding = S),
      (l.getBroadcastFanoutKeys = R),
      (l.broadcastFanout = L),
      (l.addRecordsToChat = E),
      (l.getReadMsgKeys = x),
      (l.getCelebrationAnimationType = P),
      (l.isSingleEmojiMessageText = N),
      (l.isAnimatedEmoji = M),
      (l.getValidatedSender = A),
      (l.getQuotedParticipantForContextInfo = F));
  },
  98,
);
