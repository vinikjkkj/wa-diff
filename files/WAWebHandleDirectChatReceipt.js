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
    var e, s, u, c, d;
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.ackString,
            i = t.biz,
            l = t.externalIds,
            m = t.from,
            p = t.offline,
            _ = t.recipient,
            f = t.ts,
            g = t.ack,
            h = a === o("WAWebAck").ACK_STRING.SENDER,
            y = !h && o("WAWebUserPrefsMeUser").isMeAccount(m),
            C;
          if (y || h) {
            if (!_) {
              if (!o("WAWebUserPrefsMeUser").isMeAccount(m))
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
            C = _;
          } else {
            var b;
            C = o("WAWebWidFactory").asUserWidOrThrow(m);
            var v =
              ((b = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
                o("WAWebUserPrefsKeys").HASHED_KEYS.USER_PRIVACY_SETTINGS,
              )) == null
                ? void 0
                : b.readReceipts) === "none";
            v &&
              (g === o("WAWebAck").ACK.READ ||
                g === o("WAWebAck").ACK.PLAYED) &&
              (g = o("WAWebAck").ACK.RECEIVED);
          }
          var S = o(
            "WAWebSimpleSignalPNToFBIDMigration",
          ).getDeprecatedPnChatForFbidThread(C);
          S != null &&
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "handleChatSimpleReceipt: forwarding ",
                  " to ",
                  "",
                ])),
              C.toLogString(),
              S.toLogString(),
            ),
            (C = o("WAWebWidFactory").asUserWidOrThrow(S)));
          var R = o("WAWebMaibaWASSMigration").getMaibaAiHubLidForFbidThread(C);
          R != null &&
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[BIZAI] handleChatSimpleReceipt: forwarding ",
                  " to ",
                  "",
                ])),
              C.toLogString(),
              R.toLogString(),
            ),
            (C = o("WAWebWidFactory").asUserWidOrThrow(R)));
          var L;
          C != null &&
            r("WAWebWid").isWid(C) &&
            C === o("WAWebWidFactory").createWid(o("WAJids").PSA_JID) &&
            (L = o("WAWebWidFactory").createWid(o("WAJids").PSA_JID));
          var E = l.map(function (e) {
            return new (r("WAWebMsgKey"))({
              id: e,
              remote: C,
              fromMe: !y,
              participant: L,
            });
          });
          y &&
            g === o("WAWebAck").ACK.PLAYED &&
            o("WAWebHandleMsgReceiptCommon")
              .handleViewOnceOpenedIfNecessary(E)
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
          var k = E.map(function (e) {
            return e.toString();
          });
          p != null &&
            o(
              "WAWebOfflineHandler",
            ).OfflineMessageHandler.offlineStanzaReceivedAfterComplete();
          var I =
              p != null &&
              !o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.isResumeFromRestartComplete(),
            T = (d || (d = n("Promise"))).resolve();
          return (
            y
              ? _ != null &&
                o("WAWebHandleMsgReceiptUtils").isReadOrPlayedReceipt(a) &&
                l.length > 0 &&
                (T = o(
                  "WAWebMessageReceiptBatcher",
                ).receiptBatcher.acceptPeerReceipt({
                  ack: g,
                  ts: f,
                  msgKeys: k,
                  isOffline: I,
                  remote: C,
                }))
              : (T = o(
                  "WAWebMessageReceiptBatcher",
                ).receiptBatcher.acceptOtherReceipt({
                  ack: g,
                  ts: f,
                  receiverId: m,
                  msgKeys: k,
                  privacyMode: i,
                  isSender: h,
                })),
            I ||
              (yield (d || (d = n("Promise"))).all([
                T,
                o(
                  "WAWebMessageReceiptBatcher",
                ).receiptBatcher.runActiveBatches(),
              ])),
            T
          );
        })),
        p.apply(this, arguments)
      );
    }
    l.handleChatSimpleReceipt = m;
  },
  98,
);
