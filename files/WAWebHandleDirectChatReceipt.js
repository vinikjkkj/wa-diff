__d(
  "WAWebHandleDirectChatReceipt",
  [
    "Promise",
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
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.ackString,
            i = t.biz,
            l = t.externalIds,
            d = t.from,
            m = t.offline,
            p = t.recipient,
            _ = t.ts,
            f = t.ack,
            g = a === o("WAWebAck").ACK_STRING.SENDER,
            h = !g && o("WAWebUserPrefsMeUser").isMeAccount(d),
            y;
          if (h || g) {
            if (!p) {
              if (!o("WAWebUserPrefsMeUser").isMeAccount(d))
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
            y = o("WAWebWidFactory").asUserWidOrThrow(d);
            var b =
              ((C = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
                o("WAWebUserPrefsKeys").HASHED_KEYS.USER_PRIVACY_SETTINGS,
              )) == null
                ? void 0
                : C.readReceipts) === "none";
            b &&
              (f === o("WAWebAck").ACK.READ ||
                f === o("WAWebAck").ACK.PLAYED) &&
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
          var L = l.map(function (e) {
            return new (r("WAWebMsgKey"))({
              id: e,
              remote: y,
              fromMe: !h,
              participant: R,
            });
          });
          h &&
            f === o("WAWebAck").ACK.PLAYED &&
            o("WAWebHandleMsgReceiptCommon").handleViewOnceOpenedIfNecessary(L);
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
            I = (c || (c = n("Promise"))).resolve();
          return (
            h
              ? p != null &&
                o("WAWebHandleMsgReceiptUtils").isReadOrPlayedReceipt(a) &&
                l.length > 0 &&
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
                  receiverId: d,
                  msgKeys: E,
                  privacyMode: i,
                  isSender: g,
                })),
            k ||
              o("WAWebMessageReceiptBatcher").receiptBatcher.runActiveBatches(),
            I
          );
        })),
        m.apply(this, arguments)
      );
    }
    l.handleChatSimpleReceipt = d;
  },
  98,
);
