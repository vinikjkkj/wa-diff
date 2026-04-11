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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
                  yield o("WAWebBotMessageSecret").genBotMsgSecretFromMsgSecret(
                    y,
                  ),
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
            R = { to: f, option: v, botMessageSecret: C };
          (r("WAWebWid").isCAPISupportAccount(f) &&
            o("WAWebABPropsSaga").getIsSagaV1Enabled() &&
            o("WAWebABPropsSaga").getIsSagaV1ReengagementEnabled() &&
            (yield o("WAWebE2EProtoGenerator").addDebugInfoSupportPayload(b)),
            f.isUser()
              ? (S = yield o(
                  "WAWebSendMsgCreateDeviceStanza",
                ).createUserDeviceMsgStanza(
                  c,
                  b,
                  babelHelpers.extends({}, R, {
                    recipient: m,
                    peerRecipientLid: a,
                  }),
                  l,
                ))
              : f.isStatus()
                ? (d != null || s(0, 111426),
                  (S = yield o(
                    "WAWebResendStatusMsg",
                  ).createStatusDeviceMsgStanza({
                    to: f,
                    participant: d,
                    msgRecord: c,
                    msgProtobuf: b,
                    deviceMsgType: v,
                    sessionScope: _,
                  })))
                : f.isBroadcastList()
                  ? (d != null || s(0, 141738),
                    (S = yield o(
                      "WAWebResendBroadcastMsg",
                    ).createBroadcastDeviceMsgStanza({
                      to: f,
                      participant: d,
                      msgRecord: c,
                      msgProtobuf: b,
                      deviceMsgType: v,
                    })))
                  : (d != null || s(0, 56263),
                    (S = yield o(
                      "WAWebSendMsgCreateDeviceStanza",
                    ).createGroupDeviceMsgStanza(
                      c,
                      b,
                      babelHelpers.extends({}, R, {
                        isLidBot: i,
                        participant: d,
                      }),
                    ))),
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
              .tags("messaging"));
          var L = f.isStatus() ? null : d,
            E = f;
          return (
            f.isBot() &&
              m != null &&
              !(m != null && m.isBot()) &&
              ((L = f), m != null || s(0, 75958), (E = m)),
            o("WADeprecatedSendIq").deprecatedSendStanzaAndWaitForAck(
              S,
              o("WAWebCommsAckParser").toCoreAckTemplate({
                id: g,
                class: "message",
                from: E,
                participant: L,
              }),
            )
          );
        })),
        d.apply(this, arguments)
      );
    }
    l.sendRetry = c;
  },
  98,
);
