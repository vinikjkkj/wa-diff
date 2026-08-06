__d(
  "WAWebSendRetryMsgJob",
  [
    "invariant",
    "WALogger",
    "WAWebABPropsSaga",
    "WAWebBotMessageSecret",
    "WAWebCoexV2BotWid",
    "WAWebCoexV2GatingUtils",
    "WAWebCommsAckParser",
    "WAWebDeprecatedSendIqWorkerCompatible",
    "WAWebE2EProtoGenerator",
    "WAWebOutgoingMessage",
    "WAWebResendBroadcastMsg",
    "WAWebResendStatusMsg",
    "WAWebSendCoexV2RetryMsgJob",
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
          var n = t.msgRecord,
            r = t.participant,
            a = t.recipient,
            i = t.retryCount,
            l = t.to,
            c = n.data.id.id,
            d = r || l;
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
              c,
              l.toString(),
              d.toString(),
              i,
            )
            .tags("messaging");
          var p,
            _ = "message";
          if (
            l.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) &&
            o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled()
          ) {
            var f = yield o(
              "WAWebSendCoexV2RetryMsgJob",
            ).buildCoexV2RetryStanza(n, i, a);
            if (f == null) return;
            p = f;
          } else {
            var g = yield m(t);
            ((p = g.stanza), (_ = g.statusStanzaClass));
          }
          o("WALogger")
            .LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "sendRetry: sending ",
                  " to ",
                  "",
                ])),
              c,
              l.toString(),
            )
            .tags("messaging");
          var h = l.isStatus() ? null : r,
            y = l;
          return (
            l.isBot() &&
              a != null &&
              !(a != null && a.isBot()) &&
              ((h = l), a != null || s(0, 75958), (y = a)),
            o(
              "WAWebDeprecatedSendIqWorkerCompatible",
            ).deprecatedSendStanzaAndWaitForAck(
              p,
              o("WAWebCommsAckParser").toCoreAckTemplate({
                id: c,
                class: l.isStatus() ? _ : "message",
                from: y,
                participant: h,
              }),
            )
          );
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.accountLid,
            a = e.isLidBot,
            i = e.lidOrigin,
            l = e.msgRecord,
            u = e.participant,
            c = e.recipient,
            d = e.retryCount,
            m = e.sessionScope,
            p = e.to,
            _ = l == null || (t = l.data) == null ? void 0 : t.messageSecret,
            f = _
              ? new Uint8Array(
                  yield o("WAWebBotMessageSecret").genBotMsgSecretFromMsgSecret(
                    _,
                  ),
                )
              : null,
            g = o("WAWebOutgoingMessage").createOutgoingMessageProtobuf(
              o("WAWebOutgoingMessage").OutgoingMessageOriginType.Retry,
              l,
            ),
            h = {
              type: o("WAWebSendMsgCreateDeviceStanza").MsgType.Retry,
              retryCount: d,
            },
            y = { to: p, option: h, botMessageSecret: f };
          if (
            (r("WAWebWid").isCAPISupportAccount(p) &&
              o("WAWebABPropsSaga").getIsSagaV1Enabled() &&
              o("WAWebABPropsSaga").getIsSagaV1ReengagementEnabled() &&
              (yield o("WAWebE2EProtoGenerator").addDebugInfoSupportPayload(g)),
            p.isUser())
          )
            return {
              stanza: yield o(
                "WAWebSendMsgCreateDeviceStanza",
              ).createUserDeviceMsgStanza(
                l,
                g,
                babelHelpers.extends({}, y, {
                  recipient: c,
                  peerRecipientLid: n,
                }),
                i,
              ),
              statusStanzaClass: "message",
            };
          if (p.isStatus()) {
            u != null || s(0, 111426);
            var C = yield o("WAWebResendStatusMsg").createStatusDeviceMsgStanza(
              {
                to: p,
                participant: u,
                msgRecord: l,
                msgProtobuf: g,
                deviceMsgType: h,
                sessionScope: m,
              },
            );
            return { stanza: C.stanza, statusStanzaClass: C.stanzaClass };
          }
          return p.isBroadcastList()
            ? (u != null || s(0, 141738),
              {
                stanza: yield o(
                  "WAWebResendBroadcastMsg",
                ).createBroadcastDeviceMsgStanza({
                  to: p,
                  participant: u,
                  msgRecord: l,
                  msgProtobuf: g,
                  deviceMsgType: h,
                }),
                statusStanzaClass: "message",
              })
            : (u != null || s(0, 56263),
              {
                stanza: yield o(
                  "WAWebSendMsgCreateDeviceStanza",
                ).createGroupDeviceMsgStanza(
                  l,
                  g,
                  babelHelpers.extends({}, y, { isLidBot: a, participant: u }),
                ),
                statusStanzaClass: "message",
              });
        })),
        p.apply(this, arguments)
      );
    }
    l.sendRetry = c;
  },
  98,
);
