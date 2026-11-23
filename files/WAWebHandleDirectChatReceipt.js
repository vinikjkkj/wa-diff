__d(
  "WAWebHandleDirectChatReceipt",
  [
    "WAJids",
    "WALogger",
    "WAWebAck",
    "WAWebHandleMsgReceiptCommon",
    "WAWebHandleMsgReceiptUtils",
    "WAWebMaibaWASSMigration",
    "WAWebMessageReceiptBatcher",
    "WAWebMsgKey",
    "WAWebOfflineHandler",
    "WAWebSimpleSignalPNToFBIDMigration",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserUtils",
    "WAWebWid",
    "WAWebWidFactory",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    async function d(e) {
      var t = e.from,
        n = e.offline,
        a = e.stanzaId,
        i = e.ts,
        l = new (r("WAWebMsgKey"))({
          id: a,
          remote: o("WAWebWidFactory").asUserWidOrThrow(t),
          fromMe: !0,
        });
      n != null &&
        o(
          "WAWebOfflineHandler",
        ).OfflineMessageHandler.offlineStanzaReceivedAfterComplete();
      var s =
          n != null &&
          !o(
            "WAWebOfflineHandler",
          ).OfflineMessageHandler.isResumeFromRestartComplete(),
        u = o("WAWebMessageReceiptBatcher").receiptBatcher.acceptOtherReceipt({
          ack: o("WAWebAck").ACK.FAILED,
          ts: i,
          receiverId: t,
          msgKeys: [l.toString()],
          integrityDrop: !0,
        });
      return (
        s ||
          (await Promise.all([
            u,
            o("WAWebMessageReceiptBatcher").receiptBatcher.runActiveBatches(),
          ])),
        u
      );
    }
    async function m(t) {
      if (t.integrityDrop === !0) return d(t);
      var n = t.ackString,
        a = t.biz,
        i = t.externalIds,
        l = t.from,
        m = t.offline,
        p = t.recipient,
        _ = t.ts,
        f = t.ack,
        g = n === o("WAWebAck").ACK_STRING.SENDER,
        h = !g && o("WAWebUserUtils").isMeAccount(l),
        y;
      if (h || g) {
        if (!p) {
          if (!o("WAWebUserUtils").isMeAccount(l))
            throw r("err")(
              "handleChatSimpleReceipt: invalid sender/peer receipt without recipient",
            );
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[handleChatSimpleReceipt] skip self receipt: no recipient",
                ])),
            )
            .sendLogs(
              "handleChatSimpleReceipt: skip self receipt without recipient",
              { sampling: 0.01 },
            );
          return;
        }
        y = p;
      } else {
        var C;
        y = o("WAWebWidFactory").asUserWidOrThrow(l);
        var b =
          ((C = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
            o("WAWebUserPrefsKeys").HASHED_KEYS.USER_PRIVACY_SETTINGS,
          )) == null
            ? void 0
            : C.readReceipts) === "none";
        b &&
          (f === o("WAWebAck").ACK.READ || f === o("WAWebAck").ACK.PLAYED) &&
          (f = o("WAWebAck").ACK.RECEIVED);
      }
      var v = o(
        "WAWebSimpleSignalPNToFBIDMigration",
      ).getDeprecatedPnChatForFbidThread(y);
      v != null &&
        (o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "handleChatSimpleReceipt: forwarding ",
              " to ",
              "",
            ])),
          y.toLogString(),
          v.toLogString(),
        ),
        (y = o("WAWebWidFactory").asUserWidOrThrow(v)));
      var S = o("WAWebMaibaWASSMigration").getMaibaAiHubLidForFbidThread(y);
      S != null &&
        (o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[BIZAI] handleChatSimpleReceipt: forwarding ",
              " to ",
              "",
            ])),
          y.toLogString(),
          S.toLogString(),
        ),
        (y = o("WAWebWidFactory").asUserWidOrThrow(S)));
      var R;
      y != null &&
        r("WAWebWid").isWid(y) &&
        y === o("WAWebWidFactory").createWid(o("WAJids").PSA_JID) &&
        (R = o("WAWebWidFactory").createWid(o("WAJids").PSA_JID));
      var L = i.map(function (e) {
        return new (r("WAWebMsgKey"))({
          id: e,
          remote: y,
          fromMe: !h,
          participant: R,
        });
      });
      h &&
        f === o("WAWebAck").ACK.PLAYED &&
        o("WAWebHandleMsgReceiptCommon")
          .handleViewOnceOpenedIfNecessary(L)
          .catch(function (e) {
            o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[handleChatSimpleReceipt] handleViewOnceOpenedIfNecessary failed: ",
                  "",
                ])),
              String(e),
            );
          });
      var E = L.map(function (e) {
        return e.toString();
      });
      m != null &&
        o(
          "WAWebOfflineHandler",
        ).OfflineMessageHandler.offlineStanzaReceivedAfterComplete();
      var k =
          m != null &&
          !o(
            "WAWebOfflineHandler",
          ).OfflineMessageHandler.isResumeFromRestartComplete(),
        I = Promise.resolve();
      return (
        h
          ? p != null &&
            o("WAWebHandleMsgReceiptUtils").isReadOrPlayedReceipt(n) &&
            i.length > 0 &&
            (I = o(
              "WAWebMessageReceiptBatcher",
            ).receiptBatcher.acceptPeerReceipt({
              ack: f,
              ts: _,
              msgKeys: E,
              isOffline: k,
              remote: y,
            }))
          : (I = o(
              "WAWebMessageReceiptBatcher",
            ).receiptBatcher.acceptOtherReceipt({
              ack: f,
              ts: _,
              receiverId: l,
              msgKeys: E,
              privacyMode: a,
              isSender: g,
            })),
        k ||
          (await Promise.all([
            I,
            o("WAWebMessageReceiptBatcher").receiptBatcher.runActiveBatches(),
          ])),
        I
      );
    }
    l.handleChatSimpleReceipt = m;
  },
  98,
);
