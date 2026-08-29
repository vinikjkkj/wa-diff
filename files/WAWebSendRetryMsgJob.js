__d(
  "WAWebSendRetryMsgJob",
  [
    "invariant",
    "WALogger",
    "WAWebABPropsSaga",
    "WAWebBotMessageSecret",
    "WAWebCoexV2BotWid",
    "WAWebCommsAckParser",
    "WAWebDeprecatedSendIqWorkerCompatible",
    "WAWebE2EProtoGenerator",
    "WAWebOutgoingMessage",
    "WAWebResendBroadcastMsg",
    "WAWebResendStatusMsg",
    "WAWebSendCoexV2RetryMsgJob",
    "WAWebSendMsgCreateDeviceStanza",
    "WAWebStatusGatingUtils",
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
          if (
            (o("WALogger")
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
              .tags("messaging"),
            l.isStatus() &&
              o("WAWebStatusGatingUtils").isStatusPublishViaSmaxEnabled())
          )
            return m(t);
          var p,
            f = "message";
          if (l.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID)) {
            var g = yield o(
              "WAWebSendCoexV2RetryMsgJob",
            ).buildCoexV2RetryStanza(n, i, a);
            if (g == null) return;
            p = g;
          } else {
            var h = yield _(t);
            ((p = h.stanza), (f = h.statusStanzaClass));
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
          var y = l.isStatus() ? null : r,
            C = l;
          return (
            l.isBot() &&
              a != null &&
              !(a != null && a.isBot()) &&
              ((y = l), a != null || s(0, 75958), (C = a)),
            o(
              "WAWebDeprecatedSendIqWorkerCompatible",
            ).deprecatedSendStanzaAndWaitForAck(
              p,
              o("WAWebCommsAckParser").toCoreAckTemplate({
                id: c,
                class: l.isStatus() ? f : "message",
                from: C,
                participant: y,
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
          var t = e.msgRecord,
            n = e.participant,
            r = e.retryCount,
            a = e.sessionScope,
            i = e.to;
          return (
            n != null || s(0, 111426),
            o("WAWebResendStatusMsg").sendStatusRetryMsgViaSmax({
              deviceMsgType: {
                type: o("WAWebSendMsgCreateDeviceStanza").MsgType.Retry,
                retryCount: r,
              },
              msgProtobuf: o(
                "WAWebOutgoingMessage",
              ).createOutgoingMessageProtobuf(
                o("WAWebOutgoingMessage").OutgoingMessageOriginType.Retry,
                t,
              ),
              msgRecord: t,
              participant: n,
              sessionScope: a,
              to: i,
            })
          );
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                ).createGroupDeviceMsgStanza({
                  msgProtobuf: g,
                  msgRecord: l,
                  params: babelHelpers.extends({}, y, {
                    isLidBot: a,
                    participant: u,
                  }),
                }),
                statusStanzaClass: "message",
              });
        })),
        f.apply(this, arguments)
      );
    }
    l.sendRetry = c;
  },
  98,
);
