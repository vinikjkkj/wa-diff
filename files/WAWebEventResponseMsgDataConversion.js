__d(
  "WAWebEventResponseMsgDataConversion",
  [
    "WANullthrows",
    "WAWebMsgGetters",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t, n;
      return babelHelpers.extends(
        { id: e.id },
        o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
          e.id,
          o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon,
        ),
        {
          type: o("WAWebMsgType").MSG_TYPE.EVENT_RESPONSE,
          viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          kind: o("WAWebMsgType").MsgKind.EventResponseDecrypted,
          parentMsgKey: e.parentMsgKey,
          eventResponse: r("WANullthrows")(
            e.responseProtobuf.response,
            "eventResponse",
          ),
          senderTimestampMs: e.senderTimestampMs,
          t: (t = e.t) != null ? t : void 0,
          read: e.read,
          ack: (n = e.ack) != null ? n : void 0,
        },
      );
    }
    function s(e) {
      var t, n;
      return babelHelpers.extends(
        { id: e.id },
        o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
          e.id,
          o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon,
        ),
        {
          type: o("WAWebMsgType").MSG_TYPE.EVENT_RESPONSE,
          kind: o("WAWebMsgType").MsgKind.EventResponseDecrypted,
          viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          parentMsgKey: e.parentMsgKey,
          eventResponse: e.eventResponse,
          senderTimestampMs: e.senderTimestampMs,
          t: (t = e.t) != null ? t : void 0,
          read: e.read,
          ack: (n = e.ack) != null ? n : void 0,
        },
      );
    }
    function u(e) {
      return {
        type: "event_response",
        msgKey: e.id.toString(),
        parentMsgKey: e.parentMsgKey.toString(),
        timestamp: e.senderTimestampMs,
        sender: o("WAWebWidFactory")
          .asUserWidOrThrow(
            r("WANullthrows")(o("WAWebMsgGetters").getSender(e)),
          )
          .toString(),
        eventResponse: e.eventResponse,
      };
    }
    ((l.protobufToEventResponseMsgData = e),
      (l.eventResponseToEventResponseMsgData = s),
      (l.eventResponseMsgDataToResponseData = u));
  },
  98,
);
