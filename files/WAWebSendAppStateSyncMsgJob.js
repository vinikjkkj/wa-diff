__d(
  "WAWebSendAppStateSyncMsgJob",
  [
    "WADeprecatedSendIq",
    "WALogger",
    "WAWebCommsAckParser",
    "WAWebE2EProtoGenerator",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebSendMsgCreateDeviceStanza",
    "WAWebSendMsgTypes",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      var n = t.msg,
        r = t.privacySensitive,
        a = t.pushPriority;
      (await o(
        "WAWebEventsWaitForOfflineDeliveryEnd",
      ).waitForOfflineDeliveryEnd(),
        o("WALogger")
          .LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "encryptAndSendKeyMsg: sending ",
                "",
              ])),
            n.id.toString(),
          )
          .tags("messaging"));
      var i = n.to,
        l = o("WAWebE2EProtoGenerator").createPeerMsgProtobuf(n),
        s = await o("WAWebSendMsgCreateDeviceStanza").createUserDeviceMsgStanza(
          {
            type: o("WAWebSendMsgTypes").SendMessageRecordType.Message,
            data: n,
          },
          l,
          {
            to: i,
            recipient: null,
            option: {
              type: o("WAWebSendMsgCreateDeviceStanza").MsgType.AppStateSync,
              pushPriority: a,
              privacySensitive: r,
            },
          },
        );
      return o("WADeprecatedSendIq").deprecatedSendStanzaAndWaitForAck(
        s,
        o("WAWebCommsAckParser").toCoreAckTemplate({
          id: n.id.id,
          class: "message",
          from: i,
          participant: null,
        }),
      );
    }
    l.encryptAndSendKeyMsg = s;
  },
  98,
);
