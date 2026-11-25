__d(
  "WAWebSendAppStateSyncMsgJob",
  [
    "WALogger",
    "WAWebCommsAckParser",
    "WAWebDeprecatedSendIqWorkerCompatible",
    "WAWebE2EProtoGenerator",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebGetMessageCache",
    "WAWebSendMsgCreateDeviceStanza",
    "WAWebSendMsgTypes",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(e) {
      await o(
        "WAWebEventsWaitForOfflineDeliveryEnd",
      ).waitForOfflineDeliveryEnd();
      var t = await d(e);
      await c(t, e.msg);
    }
    async function u(e) {
      var t = await d(e);
      return (
        await o("WAWebGetMessageCache").getMessageCache().writeSignalState(!0),
        t
      );
    }
    function c(e, t) {
      return o(
        "WAWebDeprecatedSendIqWorkerCompatible",
      ).deprecatedSendStanzaAndReturnAck(e, m(t));
    }
    function d(t) {
      var n = t.msg,
        r = t.privacySensitive,
        a = t.pushPriority;
      o("WALogger")
        .LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "encryptAndSendKeyMsg: sending ",
              "",
            ])),
          n.id.toString(),
        )
        .tags("messaging");
      var i = o("WAWebE2EProtoGenerator").createPeerMsgProtobuf(n);
      return o("WAWebSendMsgCreateDeviceStanza").createUserDeviceMsgStanza(
        { type: o("WAWebSendMsgTypes").SendMessageRecordType.Message, data: n },
        i,
        {
          to: n.to,
          recipient: null,
          option: {
            type: o("WAWebSendMsgCreateDeviceStanza").MsgType.AppStateSync,
            pushPriority: a,
            privacySensitive: r,
          },
        },
      );
    }
    function m(e) {
      return o("WAWebCommsAckParser").toCoreAckTemplate({
        id: e.id.id,
        class: "message",
        from: e.to,
        participant: null,
      });
    }
    ((l.encryptAndSendKeyMsg = s),
      (l.encryptKeyMsgBeforeOfflineDeliveryEnd = u),
      (l.sendKeyMsgAndReturnAck = c));
  },
  98,
);
