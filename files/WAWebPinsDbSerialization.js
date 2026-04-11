__d(
  "WAWebPinsDbSerialization",
  [
    "WANullthrows",
    "WAWebAddonConstants",
    "WAWebAddonProcessMsgsUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return babelHelpers.extends({}, e, {
        msgKey: e.msgKey.toString(),
        parentMsgKey: e.parentMsgKey.toString(),
        chatId: e.chatId.toString(),
        sender: e.sender.toString(),
      });
    }
    function s(e) {
      return babelHelpers.extends({}, e, {
        msgKey: r("WAWebMsgKey").fromString(e.msgKey),
        parentMsgKey: r("WAWebMsgKey").fromString(e.parentMsgKey),
        chatId: o("WAWebWidFactory").asChatWid(
          o("WAWebWidFactory").createWid(e.chatId),
        ),
        sender: o("WAWebWidFactory").createUserWidOrThrow(e.sender),
      });
    }
    function u(e) {
      var t = o("WAWebWidFactory")
        .asUserWidOrThrow(r("WANullthrows")(o("WAWebMsgGetters").getSender(e)))
        .toString();
      return {
        msgKey: e.id.toString(),
        ack: e.ack,
        t: e.t,
        read: e.read,
        parentMsgKey: e.pinParentKey.toString(),
        senderTimestampMs: e.pinSenderTimestampMs,
        chatId: e.id.remote.toString(),
        sender: t,
        pinType: e.pinMessageType,
        pinExpiryDuration: e.pinExpiryDuration,
      };
    }
    function c(e) {
      var t = e.ack,
        n = e.id,
        r = e.read,
        a = e.t;
      return {
        base: {
          msgKey: n.toString(),
          ack: t,
          t: a,
          read: r,
          targetMsgKey: o("WAWebAddonProcessMsgsUtils")
            .getParentMsgKey(e)
            .toString(),
        },
        addonProps: {
          pinSenderTimestampMs: e.pinSenderTimestampMs,
          pinMessageType: e.pinMessageType,
          pinExpiryDuration: e.pinExpiryDuration,
        },
      };
    }
    function d(e) {
      var t = c(e),
        n = t.addonProps,
        r = t.base;
      return babelHelpers.extends({}, r, {
        rowType: o("WAWebAddonConstants").AddonMinimizedType.PinInChat,
        arbitraryIndex: e.id.remote.toString(),
        addonProps: n,
      });
    }
    function m(e) {
      var t,
        n = r("WAWebMsgKey").fromString(e.msgKey),
        a = e.addonProps;
      return babelHelpers.extends(
        { id: n },
        o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
          n,
          o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon,
        ),
        {
          type: o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE,
          kind: o("WAWebMsgType").MsgKind.PinInChat,
          viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          ack: e.ack,
          t: e.t,
          read: e.read,
          pinParentKey: r("WAWebMsgKey").fromString(e.targetMsgKey),
          pinSenderTimestampMs: a.pinSenderTimestampMs,
          pinMessageType:
            (t = o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type.cast(
              a.pinMessageType,
            )) != null
              ? t
              : o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type
                  .UNKNOWN_TYPE,
          pinExpiryDuration: a.pinExpiryDuration,
        },
      );
    }
    function p(e) {
      var t,
        n = r("WAWebMsgKey").fromString(e.msgKey),
        a = o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
          n,
          o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon,
        ),
        i = a.author,
        l = a.from,
        s = a.to;
      return {
        id: r("WAWebMsgKey").fromString(e.msgKey),
        from: l,
        to: s,
        author: i,
        type: o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE,
        kind: o("WAWebMsgType").MsgKind.PinInChat,
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        ack: e.ack,
        t: e.t,
        read: e.read,
        pinSenderTimestampMs: e.senderTimestampMs,
        pinParentKey: r("WAWebMsgKey").fromString(e.parentMsgKey),
        pinMessageType:
          (t = o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type.cast(
            e.pinType,
          )) != null
            ? t
            : o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type
                .UNKNOWN_TYPE,
        pinExpiryDuration: e.pinExpiryDuration,
      };
    }
    ((l.serializePinInChat = e),
      (l.deserializePinInChat = s),
      (l.serializePinInChatMsgData = u),
      (l.pinInChatMsgDatIntoUnifiedAddonRow = d),
      (l.unifiedAddonRowIntoPinInChatMsgData = m),
      (l.deserializePinInChatMsgData = p));
  },
  98,
);
