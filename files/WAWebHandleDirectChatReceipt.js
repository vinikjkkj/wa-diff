__d(
  "WAWebHandleDirectChatReceipt",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.ackString,
            i = t.biz,
            l = t.externalIds,
            c = t.from,
            d = t.offline,
            m = t.recipient,
            p = t.ts,
            _ = t.ack,
            f = a === o("WAWebAck").ACK_STRING.SENDER,
            g = !f && o("WAWebUserPrefsMeUser").isMeAccount(c),
            h;
          if (g || f) {
            if (!m) {
              if (!o("WAWebUserPrefsMeUser").isMeAccount(c))
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
            h = m;
          } else {
            var y;
            h = o("WAWebWidFactory").asUserWidOrThrow(c);
            var C =
              ((y = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
                o("WAWebUserPrefsKeys").HASHED_KEYS.USER_PRIVACY_SETTINGS,
              )) == null
                ? void 0
                : y.readReceipts) === "none";
            C &&
              (_ === o("WAWebAck").ACK.READ ||
                _ === o("WAWebAck").ACK.PLAYED) &&
              (_ = o("WAWebAck").ACK.RECEIVED);
          }
          var b = o(
            "WAWebSimpleSignalPNToFBIDMigration",
          ).getDeprecatedPnChatForFbidThread(h);
          b != null &&
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "handleChatSimpleReceipt: forwarding ",
                  " to ",
                  "",
                ])),
              h.toLogString(),
              b.toLogString(),
            ),
            (h = o("WAWebWidFactory").asUserWidOrThrow(b)));
          var v;
          h != null &&
            r("WAWebWid").isWid(h) &&
            h === o("WAWebWidFactory").createWid(o("WAJids").PSA_JID) &&
            (v = o("WAWebWidFactory").createWid(o("WAJids").PSA_JID));
          var S = l.map(function (e) {
            return new (r("WAWebMsgKey"))({
              id: e,
              remote: h,
              fromMe: !g,
              participant: v,
            });
          });
          g &&
            _ === o("WAWebAck").ACK.PLAYED &&
            o("WAWebHandleMsgReceiptCommon").handleViewOnceOpenedIfNecessary(S);
          var R = S.map(function (e) {
            return e.toString();
          });
          d != null &&
            o(
              "WAWebOfflineHandler",
            ).OfflineMessageHandler.offlineStanzaReceivedAfterComplete();
          var L =
              d != null &&
              !o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.isResumeFromRestartComplete(),
            E = (u || (u = n("Promise"))).resolve();
          return (
            g
              ? m != null &&
                o("WAWebHandleMsgReceiptUtils").isReadOrPlayedReceipt(a) &&
                l.length > 0 &&
                (E = o(
                  "WAWebMessageReceiptBatcher",
                ).receiptBatcher.acceptPeerReceipt({
                  ack: _,
                  ts: p,
                  msgKeys: R,
                  isOffline: L,
                  remote: h,
                }))
              : (E = o(
                  "WAWebMessageReceiptBatcher",
                ).receiptBatcher.acceptOtherReceipt({
                  ack: _,
                  ts: p,
                  receiverId: c,
                  msgKeys: R,
                  privacyMode: i,
                  isSender: f,
                })),
            L ||
              o("WAWebMessageReceiptBatcher").receiptBatcher.runActiveBatches(),
            E
          );
        })),
        d.apply(this, arguments)
      );
    }
    l.handleChatSimpleReceipt = c;
  },
  98,
);
