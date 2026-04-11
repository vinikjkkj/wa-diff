__d(
  "WAWebCreateEventResponseMsgData",
  [
    "WATimeUtils",
    "WAWebAck",
    "WAWebAddOnParseWebMsgInfo",
    "WAWebEventResponseCollection",
    "WAWebLidMigrationUtils",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebReferentialMsgKey",
    "WAWebViewMode.flow",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.eventCreationMsg,
        a = e.responseMsgKey,
        i = e.responseType,
        l = e.sender,
        s = o("WAWebReferentialMsgKey").getReferentialMsgKey(n),
        u = o("WATimeUtils").unixTimeMs(),
        c =
          (t = o("WAWebEventResponseCollection")
            .EventResponseCollection.byParent(s)
            .findFirst(function (e) {
              var t = e.sender;
              return r("WAWebWid").equals.apply(
                r("WAWebWid"),
                o("WAWebLidMigrationUtils").toCommonAddressingMode(t, l),
              );
            })) == null
            ? void 0
            : t.senderTimestampMs;
      return babelHelpers.extends(
        { id: a },
        o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
          a,
          o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon,
        ),
        {
          parentMsgKey: s,
          ack: o("WAWebAck").ACK.CLOCK,
          t: Math.floor(u / 1e3),
          eventResponse: i,
          senderTimestampMs: o(
            "WAWebAddOnParseWebMsgInfo",
          ).getIncreasingLatestSenderTimestampMs(c),
          read: !0,
          type: o("WAWebMsgType").MSG_TYPE.EVENT_RESPONSE,
          kind: o("WAWebMsgType").MsgKind.EventResponseDecrypted,
          viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        },
      );
    }
    l.createEventResponseMsgData = e;
  },
  98,
);
