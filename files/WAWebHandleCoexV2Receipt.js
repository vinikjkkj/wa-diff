__d(
  "WAWebHandleCoexV2Receipt",
  [
    "WALogger",
    "WAWebAck",
    "WAWebApiCoexV2RelayReceiptStore",
    "WAWebCoexV2BotWid",
    "WAWebCoexV2GatingUtils",
    "WAWebCoexV2MessageAckProjection",
    "WAWebCoexV2MessageAckProjectionEligibility",
    "WAWebCoexV2ReceiptRecipient",
    "WAWebHandleDirectChatReceipt",
    "WAWebLidMigrationUtils",
    "WAWebOfflineHandler",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserUtils",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      return !e.from.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) ||
        (!o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled() &&
          !o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled())
        ? null
        : m(e);
    }
    async function m(t) {
      var n = t.ack,
        a = t.ackString,
        i = t.externalIds,
        l = t.offline,
        d = t.participant,
        m = t.recipient,
        f = t.ts;
      l != null &&
        o(
          "WAWebOfflineHandler",
        ).OfflineMessageHandler.offlineStanzaReceivedAfterComplete();
      var g =
        l != null &&
        !o(
          "WAWebOfflineHandler",
        ).OfflineMessageHandler.isResumeFromRestartComplete();
      if (m == null) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[coexv2] receipt: missing recipient",
              ])),
          )
          .sendLogs("coexv2-relay-receipt-missing-recipient");
        return;
      }
      try {
        var C,
          b = p(t);
        if (_(a) && b == null) {
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] receipt: invalid read identity",
                ])),
            )
            .sendLogs("coexv2-relay-receipt-invalid-read-identity");
          return;
        }
        var v =
          (C = b == null ? void 0 : b.representedLid) != null ? C : y(a, d, m);
        if (v == null) {
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] receipt: unresolved represented LID for type ",
                  "",
                ])),
              String(a),
            )
            .sendLogs("coexv2-relay-receipt-unresolved-lid");
          return;
        }
        var S =
          o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled() &&
          (b == null ? void 0 : b.direction) === "outgoing"
            ? o(
                "WAWebCoexV2MessageAckProjectionEligibility",
              ).getEligibleCoexV2MessageAckProjection({
                projectedAck: h(n, a),
                representedLid: v,
              })
            : null;
        if (
          (await Promise.all(
            i.map(function (e) {
              return o(
                "WAWebApiCoexV2RelayReceiptStore",
              ).addOrUpdateCoexV2RelayReceipt({
                ack: n,
                msgId: e,
                projectedAck: S,
                representedLid: v,
                ts: f,
              });
            }),
          ),
          o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled() &&
            (b == null ? void 0 : b.direction) === "incoming")
        ) {
          await o("WAWebHandleDirectChatReceipt").handleChatSimpleReceipt(
            babelHelpers.extends({}, t, {
              from: o("WAWebUserUtils").getMeLidUserOrThrow(),
              participant: null,
              recipient: b.partner,
              offline: g ? l : null,
            }),
          );
          return;
        }
        if (S == null) return;
        await o("WAWebCoexV2MessageAckProjection").projectCoexV2ReadReceiptAck({
          isOffline: g,
          msgIds: i,
          projectedAck: S,
          representedLid: v,
        });
      } catch (e) {
        o("WALogger")
          .WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[coexv2] receipt: failed to process for type ",
                "",
              ])),
            String(a),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("coexv2-relay-receipt-process-failed");
      }
    }
    function p(e) {
      var t = e.ack,
        n = e.ackString,
        r = e.participant,
        a = e.recipient;
      if (t !== o("WAWebAck").ACK.READ || !_(n)) return null;
      var i = f(a),
        l = g(n, r);
      return i == null || l == null
        ? null
        : o("WAWebUserUtils").isMeAccount(l)
          ? { direction: "incoming", partner: i, representedLid: l }
          : n === o("WAWebAck").ACK_STRING.READ && l.equals(i)
            ? { direction: "outgoing", partner: i, representedLid: l }
            : null;
    }
    function _(e) {
      return (
        e === o("WAWebAck").ACK_STRING.READ ||
        e === o("WAWebAck").ACK_STRING.READ_SELF
      );
    }
    function f(e) {
      if (e == null || (!e.isRegularUser() && !e.isFbidBot())) return null;
      var t = o("WAWebCoexV2ReceiptRecipient").toCoexV2ReceiptRecipient(e);
      return t != null &&
        !o("WAWebUserUtils").isMeAccount(t) &&
        !t.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID)
        ? t
        : null;
    }
    function g(e, t) {
      return t != null
        ? t.isRegularUser()
          ? o("WAWebLidMigrationUtils").toUserLid(
              o("WAWebWidFactory").asUserWidOrThrow(t),
            )
          : null
        : e === o("WAWebAck").ACK_STRING.READ_SELF
          ? o("WAWebUserUtils").getMeLidUserOrThrow()
          : null;
    }
    function h(e, t) {
      var n;
      return t !== o("WAWebAck").ACK_STRING.READ || e !== o("WAWebAck").ACK.READ
        ? null
        : ((n = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
              o("WAWebUserPrefsKeys").HASHED_KEYS.USER_PRIVACY_SETTINGS,
            )) == null
              ? void 0
              : n.readReceipts) === "none"
          ? o("WAWebAck").ACK.RECEIVED
          : o("WAWebAck").ACK.READ;
    }
    function y(e, t, n) {
      return e === o("WAWebAck").ACK_STRING.SENDER ||
        e === o("WAWebAck").ACK_STRING.PLAYED_SELF
        ? o("WAWebUserUtils").getMeLidUserOrThrow()
        : e === o("WAWebAck").ACK_STRING.PLAYED
          ? t != null
            ? o("WAWebLidMigrationUtils").toUserLid(
                o("WAWebWidFactory").asUserWidOrThrow(t),
              )
            : null
          : e === null || e === o("WAWebAck").ACK_STRING.DELIVERY
            ? o("WAWebLidMigrationUtils").toUserLid(
                o("WAWebWidFactory").asUserWidOrThrow(n),
              )
            : null;
    }
    l.maybeHandleCoexV2Receipt = d;
  },
  98,
);
