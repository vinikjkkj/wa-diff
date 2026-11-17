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
    "WAWebUserUtils",
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
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.from,
            a = e.offline,
            i = e.stanzaId,
            l = e.ts,
            s = new (r("WAWebMsgKey"))({
              id: i,
              remote: o("WAWebWidFactory").asUserWidOrThrow(t),
              fromMe: !0,
            });
          a != null &&
            o(
              "WAWebOfflineHandler",
            ).OfflineMessageHandler.offlineStanzaReceivedAfterComplete();
          var u =
              a != null &&
              !o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.isResumeFromRestartComplete(),
            c = o(
              "WAWebMessageReceiptBatcher",
            ).receiptBatcher.acceptOtherReceipt({
              ack: o("WAWebAck").ACK.FAILED,
              ts: l,
              receiverId: t,
              msgKeys: [s.toString()],
              integrityDrop: !0,
            });
          return (
            u ||
              (yield (d || (d = n("Promise"))).all([
                c,
                o(
                  "WAWebMessageReceiptBatcher",
                ).receiptBatcher.runActiveBatches(),
              ])),
            c
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
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (t.integrityDrop === !0) return m(t);
          var a = t.ackString,
            i = t.biz,
            l = t.externalIds,
            p = t.from,
            _ = t.offline,
            f = t.recipient,
            g = t.ts,
            h = t.ack,
            y = a === o("WAWebAck").ACK_STRING.SENDER,
            C = !y && o("WAWebUserUtils").isMeAccount(p),
            b;
          if (C || y) {
            if (!f) {
              if (!o("WAWebUserUtils").isMeAccount(p))
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
            b = f;
          } else {
            var v;
            b = o("WAWebWidFactory").asUserWidOrThrow(p);
            var S =
              ((v = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
                o("WAWebUserPrefsKeys").HASHED_KEYS.USER_PRIVACY_SETTINGS,
              )) == null
                ? void 0
                : v.readReceipts) === "none";
            S &&
              (h === o("WAWebAck").ACK.READ ||
                h === o("WAWebAck").ACK.PLAYED) &&
              (h = o("WAWebAck").ACK.RECEIVED);
          }
          var R = o(
            "WAWebSimpleSignalPNToFBIDMigration",
          ).getDeprecatedPnChatForFbidThread(b);
          R != null &&
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "handleChatSimpleReceipt: forwarding ",
                  " to ",
                  "",
                ])),
              b.toLogString(),
              R.toLogString(),
            ),
            (b = o("WAWebWidFactory").asUserWidOrThrow(R)));
          var L = o("WAWebMaibaWASSMigration").getMaibaAiHubLidForFbidThread(b);
          L != null &&
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[BIZAI] handleChatSimpleReceipt: forwarding ",
                  " to ",
                  "",
                ])),
              b.toLogString(),
              L.toLogString(),
            ),
            (b = o("WAWebWidFactory").asUserWidOrThrow(L)));
          var E;
          b != null &&
            r("WAWebWid").isWid(b) &&
            b === o("WAWebWidFactory").createWid(o("WAJids").PSA_JID) &&
            (E = o("WAWebWidFactory").createWid(o("WAJids").PSA_JID));
          var k = l.map(function (e) {
            return new (r("WAWebMsgKey"))({
              id: e,
              remote: b,
              fromMe: !C,
              participant: E,
            });
          });
          C &&
            h === o("WAWebAck").ACK.PLAYED &&
            o("WAWebHandleMsgReceiptCommon")
              .handleViewOnceOpenedIfNecessary(k)
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
          var I = k.map(function (e) {
            return e.toString();
          });
          _ != null &&
            o(
              "WAWebOfflineHandler",
            ).OfflineMessageHandler.offlineStanzaReceivedAfterComplete();
          var T =
              _ != null &&
              !o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.isResumeFromRestartComplete(),
            D = (d || (d = n("Promise"))).resolve();
          return (
            C
              ? f != null &&
                o("WAWebHandleMsgReceiptUtils").isReadOrPlayedReceipt(a) &&
                l.length > 0 &&
                (D = o(
                  "WAWebMessageReceiptBatcher",
                ).receiptBatcher.acceptPeerReceipt({
                  ack: h,
                  ts: g,
                  msgKeys: I,
                  isOffline: T,
                  remote: b,
                }))
              : (D = o(
                  "WAWebMessageReceiptBatcher",
                ).receiptBatcher.acceptOtherReceipt({
                  ack: h,
                  ts: g,
                  receiverId: p,
                  msgKeys: I,
                  privacyMode: i,
                  isSender: y,
                })),
            T ||
              (yield (d || (d = n("Promise"))).all([
                D,
                o(
                  "WAWebMessageReceiptBatcher",
                ).receiptBatcher.runActiveBatches(),
              ])),
            D
          );
        })),
        f.apply(this, arguments)
      );
    }
    l.handleChatSimpleReceipt = _;
  },
  98,
);
