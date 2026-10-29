__d(
  "WAWebSendPinMessageAction",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebPinInChatCollection",
    "WAWebPinInChatMetricUtils",
    "WAWebPinMsgConstants",
    "WAWebProtobufsE2E.pb",
    "WAWebReferentialMsgKey",
    "WAWebSendAddonMsgChatAction",
    "WAWebSendMsgResultAction",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.ack,
            i = t.msg,
            l = t.pinExpiryDurationOption,
            u = t.pinType,
            c = o("WAWebFrontendMsgGetters").getChat(i),
            d = c.id,
            m = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            _ = o("WAWebChatGetters").getIsGroup(c)
              ? o("WAWebWidFactory").asUserWidOrThrow(m)
              : void 0,
            f = new (r("WAWebMsgKey"))({
              id: yield r("WAWebMsgKey").newId(),
              remote: c.id,
              fromMe: !0,
              participant: _,
            }),
            g = o("WATimeUtils").unixTimeMs(),
            h = o("WATimeUtils").unixTime(),
            y,
            C,
            b;
          if (
            (u ===
            o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type.PIN_FOR_ALL
              ? ((y = o("WAWebPinMsgConstants").PIN_STATE.PIN),
                (C = o("WAWebPinMsgConstants").getPinExpiryDuration(
                  l != null
                    ? l
                    : o("WAWebPinMsgConstants")
                        .DEFAULT_PIN_EXPIRY_DURATION_OPTION,
                )))
              : u ===
                  o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type
                    .UNPIN_FOR_ALL &&
                ((y = o("WAWebPinMsgConstants").PIN_STATE.UNPIN),
                (C = 0),
                (b = o("WAWebPinInChatMetricUtils").getFiniteTimeRemainingSecs(
                  o(
                    "WAWebPinInChatCollection",
                  ).PinInChatCollection.getByParentMsgKey(i.id),
                ))),
            y == null)
          )
            return (
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebSendPinMessageAction:sendPinInChatMsg Invalid pinType",
                  ])),
              ),
              (s || (s = n("Promise"))).resolve(null)
            );
          var v = {
              msgKey: f.toString(),
              parentMsgKey: i.id.toString(),
              senderTimestampMs: g,
              sender: m.toString(),
              chatId: c.id.toString(),
              pinType: y,
              pinExpiryDuration: C,
              read: !0,
              ack: a != null ? a : o("WAWebAck").ACK.CLOCK,
            },
            S = p({
              author: _,
              from: m,
              globalClockUnixTimeSeconds: h,
              msg: i,
              msgKey: f,
              pinInChatObj: v,
              pinType: u,
              to: d,
            }),
            R = yield o("WAWebSendAddonMsgChatAction").addAndSendAddonToChat(S);
          if (
            R.messageSendResult !==
            o("WAWebSendMsgResultAction").SendMsgResult.OK
          )
            throw r("err")("PinInChat send Error");
          var L = new (o("WAWebMsgModel").Msg)(S);
          return (
            o("WAWebPinInChatMetricUtils").logPinInChatMessageSend({
              msg: L,
              parentMsg: i,
              chat: c,
              timeRemainingToExpirySecs: b,
            }),
            R
          );
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebMsgCollection").MsgCollection.assertGet(
            e.parentMsgKey,
          );
          if (e.pinType === o("WAWebPinMsgConstants").PIN_STATE.PIN) {
            var n;
            yield u({
              ack: e.ack,
              msg: t,
              pinExpiryDurationOption: o(
                "WAWebPinMsgConstants",
              ).getPinExpiryOption(
                (n = e.pinExpiryDuration) != null
                  ? n
                  : o("WAWebPinMsgConstants").getPinExpiryDuration(
                      o("WAWebPinMsgConstants")
                        .DEFAULT_PIN_EXPIRY_DURATION_OPTION,
                    ),
              ),
              pinType: o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type
                .PIN_FOR_ALL,
            });
          } else
            yield u({
              ack: e.ack,
              msg: t,
              pinExpiryDurationOption: void 0,
              pinType: o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type
                .UNPIN_FOR_ALL,
            });
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      var t = e.author,
        n = e.from,
        r = e.globalClockUnixTimeSeconds,
        a = e.msg,
        i = e.msgKey,
        l = e.pinInChatObj,
        s = e.pinType,
        u = e.to;
      return {
        id: i,
        type: o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE,
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        kind: o("WAWebMsgType").MsgKind.PinInChat,
        to: u,
        from: n,
        author: t,
        pinParentKey: o("WAWebReferentialMsgKey").getReferentialMsgKey(a),
        pinSenderTimestampMs: l.senderTimestampMs,
        pinMessageType: s,
        pinExpiryDuration: l.pinExpiryDuration,
        t: r,
        isNewMsg: !0,
        local: !0,
        ack: l.ack,
      };
    }
    ((l.sendPinInChatMsg = u), (l.resendPinInChatMsg = d), (l.getMsgJson = p));
  },
  98,
);
