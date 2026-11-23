__d(
  "WAWebSendPinMessageAction",
  [
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
    "WAWebUserUtils",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      var n = t.ack,
        a = t.msg,
        i = t.pinExpiryDurationOption,
        l = t.pinType,
        s = o("WAWebFrontendMsgGetters").getChat(a),
        u = s.id,
        d = o("WAWebUserUtils").getMeLidUserOrThrow(),
        m = o("WAWebChatGetters").getIsGroup(s)
          ? o("WAWebWidFactory").asUserWidOrThrow(d)
          : void 0,
        p = new (r("WAWebMsgKey"))({
          id: await r("WAWebMsgKey").newId(),
          remote: s.id,
          fromMe: !0,
          participant: m,
        }),
        _ = o("WATimeUtils").unixTimeMs(),
        f = o("WATimeUtils").unixTime(),
        g,
        h,
        y;
      if (
        (l ===
        o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type.PIN_FOR_ALL
          ? ((g = o("WAWebPinMsgConstants").PIN_STATE.PIN),
            (h = o("WAWebPinMsgConstants").getPinExpiryDuration(
              i != null
                ? i
                : o("WAWebPinMsgConstants").DEFAULT_PIN_EXPIRY_DURATION_OPTION,
            )))
          : l ===
              o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type
                .UNPIN_FOR_ALL &&
            ((g = o("WAWebPinMsgConstants").PIN_STATE.UNPIN),
            (h = 0),
            (y = o("WAWebPinInChatMetricUtils").getFiniteTimeRemainingSecs(
              o(
                "WAWebPinInChatCollection",
              ).PinInChatCollection.getByParentMsgKey(a.id),
            ))),
        g == null)
      )
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "WAWebSendPinMessageAction:sendPinInChatMsg Invalid pinType",
              ])),
          ),
          Promise.resolve(null)
        );
      var C = {
          msgKey: p.toString(),
          parentMsgKey: a.id.toString(),
          senderTimestampMs: _,
          sender: d.toString(),
          chatId: s.id.toString(),
          pinType: g,
          pinExpiryDuration: h,
          read: !0,
          ack: n != null ? n : o("WAWebAck").ACK.CLOCK,
        },
        b = c({
          author: m,
          from: d,
          globalClockUnixTimeSeconds: f,
          msg: a,
          msgKey: p,
          pinInChatObj: C,
          pinType: l,
          to: u,
        }),
        v = await o("WAWebSendAddonMsgChatAction").addAndSendAddonToChat(b);
      if (
        v.messageSendResult !== o("WAWebSendMsgResultAction").SendMsgResult.OK
      )
        throw r("err")("PinInChat send Error");
      var S = new (o("WAWebMsgModel").Msg)(b);
      return (
        o("WAWebPinInChatMetricUtils").logPinInChatMessageSend({
          msg: S,
          parentMsg: a,
          chat: s,
          timeRemainingToExpirySecs: y,
        }),
        v
      );
    }
    async function u(e) {
      var t = o("WAWebMsgCollection").MsgCollection.assertGet(e.parentMsgKey);
      if (e.pinType === o("WAWebPinMsgConstants").PIN_STATE.PIN) {
        var n;
        await s({
          ack: e.ack,
          msg: t,
          pinExpiryDurationOption: o("WAWebPinMsgConstants").getPinExpiryOption(
            (n = e.pinExpiryDuration) != null
              ? n
              : o("WAWebPinMsgConstants").getPinExpiryDuration(
                  o("WAWebPinMsgConstants").DEFAULT_PIN_EXPIRY_DURATION_OPTION,
                ),
          ),
          pinType: o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type
            .PIN_FOR_ALL,
        });
      } else
        await s({
          ack: e.ack,
          msg: t,
          pinExpiryDurationOption: void 0,
          pinType: o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type
            .UNPIN_FOR_ALL,
        });
    }
    function c(e) {
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
    ((l.sendPinInChatMsg = s), (l.resendPinInChatMsg = u), (l.getMsgJson = c));
  },
  98,
);
