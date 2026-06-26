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
    function u(e, t, n, r) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l) {
            var u = o("WAWebFrontendMsgGetters").getChat(t),
              c = u.id,
              d = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
              m = o("WAWebChatGetters").getIsGroup(u)
                ? o("WAWebWidFactory").asUserWidOrThrow(d)
                : void 0,
              _ = new (r("WAWebMsgKey"))({
                id: yield r("WAWebMsgKey").newId(),
                remote: u.id,
                fromMe: !0,
                participant: m,
              }),
              f = o("WATimeUtils").unixTimeMs(),
              g = o("WATimeUtils").unixTime(),
              h,
              y,
              C;
            if (
              a ===
              o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type
                .PIN_FOR_ALL
            )
              ((h = o("WAWebPinMsgConstants").PIN_STATE.PIN),
                (y = o("WAWebPinMsgConstants").getPinExpiryDuration(
                  i != null
                    ? i
                    : o("WAWebPinMsgConstants")
                        .DEFAULT_PIN_EXPIRY_DURATION_OPTION,
                )));
            else if (
              a ===
              o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type
                .UNPIN_FOR_ALL
            ) {
              ((h = o("WAWebPinMsgConstants").PIN_STATE.UNPIN), (y = 0));
              var b = o(
                "WAWebPinInChatCollection",
              ).PinInChatCollection.getByParentMsgKey(t.id);
              b != null && (C = b.leftExpirationTime());
            }
            if (h == null)
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
                msgKey: _.toString(),
                parentMsgKey: t.id.toString(),
                senderTimestampMs: f,
                sender: d.toString(),
                chatId: u.id.toString(),
                pinType: h,
                pinExpiryDuration: y,
                read: !0,
                ack: l != null ? l : o("WAWebAck").ACK.CLOCK,
              },
              S = p({
                author: m,
                from: d,
                globalClockUnixTimeSeconds: g,
                msg: t,
                msgKey: _,
                pinInChatObj: v,
                pinType: a,
                to: c,
              }),
              R = yield o("WAWebSendAddonMsgChatAction").addAndSendAddonToChat(
                S,
              );
            if (
              R.messageSendResult !==
              o("WAWebSendMsgResultAction").SendMsgResult.OK
            )
              throw r("err")("PinInChat send Error");
            var L = new (o("WAWebMsgModel").Msg)(S);
            return (
              o("WAWebPinInChatMetricUtils").logPinInChatMessageSend({
                msg: L,
                parentMsg: t,
                chat: u,
                timeRemainingToExpirySecs: C,
              }),
              R
            );
          },
        )),
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
            yield u(
              t,
              o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type
                .PIN_FOR_ALL,
              o("WAWebPinMsgConstants").getPinExpiryOption(
                (n = e.pinExpiryDuration) != null
                  ? n
                  : o("WAWebPinMsgConstants").getPinExpiryDuration(
                      o("WAWebPinMsgConstants")
                        .DEFAULT_PIN_EXPIRY_DURATION_OPTION,
                    ),
              ),
              e.ack,
            );
          } else
            yield u(
              t,
              o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type
                .UNPIN_FOR_ALL,
              void 0,
              e.ack,
            );
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
