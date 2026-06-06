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
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, n, a, i) {
      var l = o("WAWebFrontendMsgGetters").getChat(t),
        s = l.id,
        u = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        d = o("WAWebChatGetters").getIsGroup(l)
          ? o("WAWebWidFactory").asUserWidOrThrow(u)
          : void 0,
        m = new (r("WAWebMsgKey"))({
          id: await r("WAWebMsgKey").newId(),
          remote: l.id,
          fromMe: !0,
          participant: d,
        }),
        p = o("WATimeUtils").unixTimeMs(),
        _ = o("WATimeUtils").unixTime(),
        f,
        g,
        h;
      if (
        n ===
        o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type.PIN_FOR_ALL
      )
        ((f = o("WAWebPinMsgConstants").PIN_STATE.PIN),
          (g = o("WAWebPinMsgConstants").getPinExpiryDuration(
            a != null
              ? a
              : o("WAWebPinMsgConstants").DEFAULT_PIN_EXPIRY_DURATION_OPTION,
          )));
      else if (
        n ===
        o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type.UNPIN_FOR_ALL
      ) {
        ((f = o("WAWebPinMsgConstants").PIN_STATE.UNPIN), (g = 0));
        var y = o(
          "WAWebPinInChatCollection",
        ).PinInChatCollection.getByParentMsgKey(t.id);
        y != null && (h = y.leftExpirationTime());
      }
      if (f == null)
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
          msgKey: m.toString(),
          parentMsgKey: t.id.toString(),
          senderTimestampMs: p,
          sender: u.toString(),
          chatId: l.id.toString(),
          pinType: f,
          pinExpiryDuration: g,
          read: !0,
          ack: i != null ? i : o("WAWebAck").ACK.CLOCK,
        },
        b = c(t, m, C, n, _, s, u, d),
        v = await o("WAWebSendAddonMsgChatAction").addAndSendAddonToChat(b);
      if (
        v.messageSendResult !== o("WAWebSendMsgResultAction").SendMsgResult.OK
      )
        throw r("err")("PinInChat send Error");
      var S = new (o("WAWebMsgModel").Msg)(b);
      return (
        o("WAWebPinInChatMetricUtils").logPinInChatMessageSend({
          msg: S,
          parentMsg: t,
          chat: l,
          timeRemainingToExpirySecs: h,
        }),
        v
      );
    }
    async function u(e) {
      var t = o("WAWebMsgCollection").MsgCollection.assertGet(e.parentMsgKey);
      if (e.pinType === o("WAWebPinMsgConstants").PIN_STATE.PIN) {
        var n;
        await s(
          t,
          o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type.PIN_FOR_ALL,
          o("WAWebPinMsgConstants").getPinExpiryOption(
            (n = e.pinExpiryDuration) != null
              ? n
              : o("WAWebPinMsgConstants").getPinExpiryDuration(
                  o("WAWebPinMsgConstants").DEFAULT_PIN_EXPIRY_DURATION_OPTION,
                ),
          ),
          e.ack,
        );
      } else
        await s(
          t,
          o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type.UNPIN_FOR_ALL,
          void 0,
          e.ack,
        );
    }
    function c(e, t, n, r, a, i, l, s) {
      return {
        id: t,
        type: o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE,
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        kind: o("WAWebMsgType").MsgKind.PinInChat,
        to: i,
        from: l,
        author: s,
        pinParentKey: o("WAWebReferentialMsgKey").getReferentialMsgKey(e),
        pinSenderTimestampMs: n.senderTimestampMs,
        pinMessageType: r,
        pinExpiryDuration: n.pinExpiryDuration,
        t: a,
        isNewMsg: !0,
        local: !0,
        ack: n.ack,
      };
    }
    ((l.sendPinInChatMsg = s), (l.resendPinInChatMsg = u), (l.getMsgJson = c));
  },
  98,
);
