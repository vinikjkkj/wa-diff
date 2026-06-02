__d(
  "WAWebSendRetryMsgJob",
  [
    "invariant",
    "WADeprecatedSendIq",
    "WALogger",
    "WAWebABPropsSaga",
    "WAWebBotMessageSecret",
    "WAWebCommsAckParser",
    "WAWebE2EProtoGenerator",
    "WAWebOutgoingMessage",
    "WAWebResendBroadcastMsg",
    "WAWebResendStatusMsg",
    "WAWebSendMsgCreateDeviceStanza",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e, u;
    async function c(t) {
      var n,
        a = t.accountLid,
        i = t.isLidBot,
        l = t.lidOrigin,
        c = t.msgRecord,
        d = t.participant,
        m = t.recipient,
        p = t.retryCount,
        _ = t.sessionScope,
        f = t.to,
        g = c.data.id.id,
        h = d || f,
        y = c == null || (n = c.data) == null ? void 0 : n.messageSecret,
        C = y
          ? new Uint8Array(
              await o("WAWebBotMessageSecret").genBotMsgSecretFromMsgSecret(y),
            )
          : null;
      o("WALogger")
        .LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "sendRetry: id ",
              " to ",
              ", requester: ",
              ", count: ",
              "",
            ])),
          g,
          f.toString(),
          h.toString(),
          p,
        )
        .tags("messaging");
      var b = o("WAWebOutgoingMessage").createOutgoingMessageProtobuf(
          o("WAWebOutgoingMessage").OutgoingMessageOriginType.Retry,
          c,
        ),
        v = {
          type: o("WAWebSendMsgCreateDeviceStanza").MsgType.Retry,
          retryCount: p,
        },
        S,
        R = "message",
        L = { to: f, option: v, botMessageSecret: C };
      if (
        (r("WAWebWid").isCAPISupportAccount(f) &&
          o("WAWebABPropsSaga").getIsSagaV1Enabled() &&
          o("WAWebABPropsSaga").getIsSagaV1ReengagementEnabled() &&
          (await o("WAWebE2EProtoGenerator").addDebugInfoSupportPayload(b)),
        f.isUser())
      )
        S = await o("WAWebSendMsgCreateDeviceStanza").createUserDeviceMsgStanza(
          c,
          b,
          babelHelpers.extends({}, L, { recipient: m, peerRecipientLid: a }),
          l,
        );
      else if (f.isStatus()) {
        d != null || s(0, 111426);
        var E = await o("WAWebResendStatusMsg").createStatusDeviceMsgStanza({
          to: f,
          participant: d,
          msgRecord: c,
          msgProtobuf: b,
          deviceMsgType: v,
          sessionScope: _,
        });
        ((S = E.stanza), (R = E.stanzaClass));
      } else
        f.isBroadcastList()
          ? (d != null || s(0, 141738),
            (S = await o(
              "WAWebResendBroadcastMsg",
            ).createBroadcastDeviceMsgStanza({
              to: f,
              participant: d,
              msgRecord: c,
              msgProtobuf: b,
              deviceMsgType: v,
            })))
          : (d != null || s(0, 56263),
            (S = await o(
              "WAWebSendMsgCreateDeviceStanza",
            ).createGroupDeviceMsgStanza(
              c,
              b,
              babelHelpers.extends({}, L, { isLidBot: i, participant: d }),
            )));
      o("WALogger")
        .LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "sendRetry: sending ",
              " to ",
              "",
            ])),
          g,
          f.toString(),
        )
        .tags("messaging");
      var k = f.isStatus() ? null : d,
        I = f;
      return (
        f.isBot() &&
          m != null &&
          !(m != null && m.isBot()) &&
          ((k = f), m != null || s(0, 75958), (I = m)),
        o("WADeprecatedSendIq").deprecatedSendStanzaAndWaitForAck(
          S,
          o("WAWebCommsAckParser").toCoreAckTemplate({
            id: g,
            class: f.isStatus() ? R : "message",
            from: I,
            participant: k,
          }),
        )
      );
    }
    l.sendRetry = c;
  },
  98,
);
