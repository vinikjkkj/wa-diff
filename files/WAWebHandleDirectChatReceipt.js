__d(
  "WAWebHandleDirectChatReceipt",
  [
    "WAJids",
    "WALogger",
    "WAWebAck",
    "WAWebHandleMsgReceiptCommon",
    "WAWebHandleMsgReceiptUtils",
    "WAWebMessageReceiptBatcher",
    "WAWebMsgKey",
    "WAWebOfflineHandler",
    "WAWebSimpleSignalPNToFBIDMigration",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "WAWebWidFactory",
    "err",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(t) {
      var n = t.ackString,
        a = t.biz,
        i = t.externalIds,
        l = t.from,
        c = t.offline,
        d = t.recipient,
        m = t.ts,
        p = t.ack,
        _ = n === o("WAWebAck").ACK_STRING.SENDER,
        f = !_ && o("WAWebUserPrefsMeUser").isMeAccount(l),
        g;
      if (f || _) {
        if (!d)
          throw (
            r("gkx")("26258")
              ? o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "error: invalid sender/peer receipt without recipient",
                    ])),
                )
              : o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "error: invalid sender/peer receipt without recipient",
                      ])),
                  )
                  .sendLogs("handleChatSimpleReceipt: failed"),
            r("err")(
              "handleChatSimpleReceipt: invalid sender/peer receipt without recipient",
            )
          );
        g = d;
      } else {
        var h;
        g = o("WAWebWidFactory").asUserWidOrThrow(l);
        var y =
          ((h = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
            o("WAWebUserPrefsKeys").HASHED_KEYS.USER_PRIVACY_SETTINGS,
          )) == null
            ? void 0
            : h.readReceipts) === "none";
        y &&
          (p === o("WAWebAck").ACK.READ || p === o("WAWebAck").ACK.PLAYED) &&
          (p = o("WAWebAck").ACK.RECEIVED);
      }
      var C = o(
        "WAWebSimpleSignalPNToFBIDMigration",
      ).getDeprecatedPnChatForFbidThread(g);
      C != null &&
        (o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "handleChatSimpleReceipt: forwarding ",
              " to ",
              "",
            ])),
          g.toLogString(),
          C.toLogString(),
        ),
        (g = o("WAWebWidFactory").asUserWidOrThrow(C)));
      var b;
      g != null &&
        r("WAWebWid").isWid(g) &&
        g === o("WAWebWidFactory").createWid(o("WAJids").PSA_JID) &&
        (b = o("WAWebWidFactory").createWid(o("WAJids").PSA_JID));
      var v = i.map(function (e) {
        return new (r("WAWebMsgKey"))({
          id: e,
          remote: g,
          fromMe: !f,
          participant: b,
        });
      });
      f &&
        p === o("WAWebAck").ACK.PLAYED &&
        o("WAWebHandleMsgReceiptCommon").handleViewOnceOpenedIfNecessary(v);
      var S = v.map(function (e) {
        return e.toString();
      });
      c != null &&
        o(
          "WAWebOfflineHandler",
        ).OfflineMessageHandler.offlineStanzaReceivedAfterComplete();
      var R =
          c != null &&
          !o(
            "WAWebOfflineHandler",
          ).OfflineMessageHandler.isResumeFromRestartComplete(),
        L = Promise.resolve();
      return (
        f
          ? d != null &&
            o("WAWebHandleMsgReceiptUtils").isReadOrPlayedReceipt(n) &&
            i.length > 0 &&
            (L = o(
              "WAWebMessageReceiptBatcher",
            ).receiptBatcher.acceptPeerReceipt({
              ack: p,
              ts: m,
              msgKeys: S,
              isOffline: R,
              remote: g,
            }))
          : (L = o(
              "WAWebMessageReceiptBatcher",
            ).receiptBatcher.acceptOtherReceipt({
              ack: p,
              ts: m,
              receiverId: l,
              msgKeys: S,
              privacyMode: a,
              isSender: _,
            })),
        R || o("WAWebMessageReceiptBatcher").receiptBatcher.runActiveBatches(),
        L
      );
    }
    l.handleChatSimpleReceipt = c;
  },
  98,
);
