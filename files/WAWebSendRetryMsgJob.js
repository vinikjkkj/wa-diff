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
  ],
  function (t, n, r, o, a, i, l, s) {
    var e, u;
    async function c(t) {
      var n = t.msgRecord,
        r = t.participant,
        a = t.recipient,
        i = t.retryContext,
        l = t.retryCount,
        c = t.to,
        p = n.data.id.id,
        _ = r || c;
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
            p,
            c.toString(),
            _.toString(),
            l,
          )
          .tags("messaging"),
        c.isStatus() &&
          o("WAWebStatusGatingUtils").isStatusPublishViaSmaxEnabled())
      )
        return d(t);
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
          ((typeof C == "object" && C !== null) || typeof C == "function") &&
          C.kind === "applicable" &&
          "result" in C
        ) {
          var b = C.result;
          if (((h = await b), h == null)) return;
          break e;
        }
        if (
          ((typeof C == "object" && C !== null) || typeof C == "function") &&
          C.kind === "fallback" &&
          "result" in C
        ) {
          var v = C.result;
          h = await v;
          break e;
        }
        if (
          ((typeof C == "object" && C !== null) || typeof C == "function") &&
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
        var S = await m(t);
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
          p,
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
            id: p,
            class: c.isStatus() ? g : "message",
            from: L,
            participant: R,
          }),
        )
      );
    }
    async function d(e) {
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
          msgProtobuf: o("WAWebOutgoingMessage").createOutgoingMessageProtobuf(
            o("WAWebOutgoingMessage").OutgoingMessageOriginType.Retry,
            t,
          ),
          msgRecord: t,
          participant: n,
          sessionScope: a,
          to: i,
        })
      );
    }
    async function m(e) {
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
              await o("WAWebBotMessageSecret").genBotMsgSecretFromMsgSecret(_),
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
          (await o("WAWebE2EProtoGenerator").addDebugInfoSupportPayload(g)),
        p.isUser())
      )
        return {
          stanza: await o(
            "WAWebSendMsgCreateDeviceStanza",
          ).createUserDeviceMsgStanza(
            l,
            g,
            babelHelpers.extends({}, y, { recipient: c, peerRecipientLid: n }),
            i,
          ),
          statusStanzaClass: "message",
        };
      if (p.isStatus()) {
        u != null || s(0, 111426);
        var C = await o("WAWebResendStatusMsg").createStatusDeviceMsgStanza({
          to: p,
          participant: u,
          msgRecord: l,
          msgProtobuf: g,
          deviceMsgType: h,
          sessionScope: m,
        });
        return { stanza: C.stanza, statusStanzaClass: C.stanzaClass };
      }
      if (p.isBroadcastList())
        return (
          u != null || s(0, 141738),
          {
            stanza: await o(
              "WAWebResendBroadcastMsg",
            ).createBroadcastDeviceMsgStanza({
              to: p,
              participant: u,
              msgRecord: l,
              msgProtobuf: g,
              deviceMsgType: h,
            }),
            statusStanzaClass: "message",
          }
        );
      u != null || s(0, 56263);
      var b = l.data.isGroupStatus === !0 ? m : void 0;
      return {
        stanza: await o(
          "WAWebSendMsgCreateDeviceStanza",
        ).createGroupDeviceMsgStanza({
          msgProtobuf: g,
          msgRecord: l,
          params: babelHelpers.extends({}, y, {
            isLidBot: a,
            participant: u,
            sessionScope: b,
          }),
        }),
        statusStanzaClass: "message",
      };
    }
    l.sendRetry = c;
  },
  98,
);
