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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.msg,
            r = t.privacySensitive,
            a = t.pushPriority;
          (yield o(
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
            s = yield o(
              "WAWebSendMsgCreateDeviceStanza",
            ).createUserDeviceMsgStanza(
              {
                type: o("WAWebSendMsgTypes").SendMessageRecordType.Message,
                data: n,
              },
              l,
              {
                to: i,
                recipient: null,
                option: {
                  type: o("WAWebSendMsgCreateDeviceStanza").MsgType
                    .AppStateSync,
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
        })),
        u.apply(this, arguments)
      );
    }
    l.encryptAndSendKeyMsg = s;
  },
  98,
);
