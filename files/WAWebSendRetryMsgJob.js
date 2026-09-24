__d(
  "WAWebSendRetryMsgJob",
  [
    "invariant",
    "WALogger",
    "WAWebABPropsSaga",
    "WAWebBotMessageSecret",
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
            i = t.retryContext,
            l = t.retryCount,
            c = t.to,
            d = n.data.id.id,
            p = r || c;
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
                d,
                c.toString(),
                p.toString(),
                l,
              )
              .tags("messaging"),
            c.isStatus() &&
              o("WAWebStatusGatingUtils").isStatusPublishViaSmaxEnabled())
          )
            return m(t);
          var f,
            g = "message",
            h,
            y = o("WAWebSendCoexV2RetryMsgJob").getCoexV2RetryDispatch({
              msgRecord: n,
              recipient: a,
              retryContext: i,
              retryCount: l,
              to: c,
            });
          e: {
            var C = y;
            if (
              ((typeof C == "object" && C !== null) ||
                typeof C == "function") &&
              C.kind === "applicable" &&
              "result" in C
            ) {
              var b = C.result;
              if (((h = yield b), h == null)) return;
              break e;
            }
            if (
              ((typeof C == "object" && C !== null) ||
                typeof C == "function") &&
              C.kind === "fallback" &&
              "result" in C
            ) {
              var v = C.result;
              h = yield v;
              break e;
            }
            if (
              ((typeof C == "object" && C !== null) ||
                typeof C == "function") &&
              C.kind === "not_applicable"
            ) {
              h = null;
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                C,
            );
          }
          if (h != null) f = h;
          else {
            var S = yield _(t);
            ((f = S.stanza), (g = S.statusStanzaClass));
          }
          o("WALogger")
            .LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "sendRetry: sending ",
                  " to ",
                  "",
                ])),
              d,
              c.toString(),
            )
            .tags("messaging");
          var R = c.isStatus() ? null : r,
            L = c;
          return (
            c.isBot() &&
              a != null &&
              !(a != null && a.isBot()) &&
              ((R = c), a != null || s(0, 75958), (L = a)),
            o(
              "WAWebDeprecatedSendIqWorkerCompatible",
            ).deprecatedSendStanzaAndWaitForAck(
              f,
              o("WAWebCommsAckParser").toCoreAckTemplate({
                id: d,
                class: c.isStatus() ? g : "message",
                from: L,
                participant: R,
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
