__d(
  "WAWebHandleCoexV2Receipt",
  [
    "Promise",
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
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e) {
      return !e.from.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) ||
        (!o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled() &&
          !o("WAWebCoexV2GatingUtils").isCoexV2SendEnabled())
        ? null
        : p(e);
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.ack,
            i = t.ackString,
            l = t.externalIds,
            m = t.offline,
            p = t.participant,
            _ = t.recipient,
            h = t.ts;
          m != null &&
            o(
              "WAWebOfflineHandler",
            ).OfflineMessageHandler.offlineStanzaReceivedAfterComplete();
          var y =
            m != null &&
            !o(
              "WAWebOfflineHandler",
            ).OfflineMessageHandler.isResumeFromRestartComplete();
          if (_ == null) {
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
            var v,
              S = f(t);
            if (g(i) && S == null) {
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
            var R =
              (v = S == null ? void 0 : S.representedLid) != null
                ? v
                : b(i, p, _);
            if (R == null) {
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[coexv2] receipt: unresolved represented LID for type ",
                      "",
                    ])),
                  String(i),
                )
                .sendLogs("coexv2-relay-receipt-unresolved-lid");
              return;
            }
            var L =
              o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled() &&
              (S == null ? void 0 : S.direction) === "outgoing"
                ? o(
                    "WAWebCoexV2MessageAckProjectionEligibility",
                  ).getEligibleCoexV2MessageAckProjection({
                    projectedAck: C(a, i),
                    representedLid: R,
                  })
                : null;
            if (
              (yield (d || (d = n("Promise"))).all(
                l.map(function (e) {
                  return o(
                    "WAWebApiCoexV2RelayReceiptStore",
                  ).addOrUpdateCoexV2RelayReceipt({
                    ack: a,
                    msgId: e,
                    projectedAck: L,
                    representedLid: R,
                    ts: h,
                  });
                }),
              ),
              o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled() &&
                (S == null ? void 0 : S.direction) === "incoming")
            ) {
              yield o("WAWebHandleDirectChatReceipt").handleChatSimpleReceipt(
                babelHelpers.extends({}, t, {
                  from: o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
                  participant: null,
                  recipient: S.partner,
                  offline: y ? m : null,
                }),
              );
              return;
            }
            if (L == null) return;
            yield o(
              "WAWebCoexV2MessageAckProjection",
            ).projectCoexV2ReadReceiptAck({
              isOffline: y,
              msgIds: l,
              projectedAck: L,
              representedLid: R,
            });
          } catch (e) {
            o("WALogger")
              .WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[coexv2] receipt: failed to process for type ",
                    "",
                  ])),
                String(i),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("coexv2-relay-receipt-process-failed");
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      var t = e.ack,
        n = e.ackString,
        r = e.participant,
        a = e.recipient;
      if (t !== o("WAWebAck").ACK.READ || !g(n)) return null;
      var i = h(a),
        l = y(n, r);
      return i == null || l == null
        ? null
        : o("WAWebUserPrefsMeUser").isMeAccount(l)
          ? { direction: "incoming", partner: i, representedLid: l }
          : n === o("WAWebAck").ACK_STRING.READ && l.equals(i)
            ? { direction: "outgoing", partner: i, representedLid: l }
            : null;
    }
    function g(e) {
      return (
        e === o("WAWebAck").ACK_STRING.READ ||
        e === o("WAWebAck").ACK_STRING.READ_SELF
      );
    }
    function h(e) {
      if (e == null || (!e.isRegularUser() && !e.isFbidBot())) return null;
      var t = o("WAWebCoexV2ReceiptRecipient").toCoexV2ReceiptRecipient(e);
      return t != null &&
        !o("WAWebUserPrefsMeUser").isMeAccount(t) &&
        !t.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID)
        ? t
        : null;
    }
    function y(e, t) {
      return t != null
        ? t.isRegularUser()
          ? o("WAWebLidMigrationUtils").toUserLid(
              o("WAWebWidFactory").asUserWidOrThrow(t),
            )
          : null
        : e === o("WAWebAck").ACK_STRING.READ_SELF
          ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
          : null;
    }
    function C(e, t) {
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
    function b(e, t, n) {
      return e === o("WAWebAck").ACK_STRING.SENDER ||
        e === o("WAWebAck").ACK_STRING.PLAYED_SELF
        ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
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
    l.maybeHandleCoexV2Receipt = m;
  },
  98,
);
