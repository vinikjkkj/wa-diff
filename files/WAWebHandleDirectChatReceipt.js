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
    "gkx",
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
            if (!p)
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
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "handleChatSimpleReceipt: forwarding ",
                  " to ",
                  "",
                ])),
              y.toLogString(),
              v.toLogString(),
            ),
            (y = o("WAWebWidFactory").asUserWidOrThrow(v)));
          var S;
          y != null &&
            r("WAWebWid").isWid(y) &&
            y === o("WAWebWidFactory").createWid(o("WAJids").PSA_JID) &&
            (S = o("WAWebWidFactory").createWid(o("WAJids").PSA_JID));
          var R = l.map(function (e) {
            return new (r("WAWebMsgKey"))({
              id: e,
              remote: y,
              fromMe: !h,
              participant: S,
            });
          });
          h &&
            f === o("WAWebAck").ACK.PLAYED &&
            o("WAWebHandleMsgReceiptCommon").handleViewOnceOpenedIfNecessary(R);
          var L = R.map(function (e) {
            return e.toString();
          });
          m != null &&
            o(
              "WAWebOfflineHandler",
            ).OfflineMessageHandler.offlineStanzaReceivedAfterComplete();
          var E =
              m != null &&
              !o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.isResumeFromRestartComplete(),
            k = (c || (c = n("Promise"))).resolve();
          return (
            h
              ? p != null &&
                o("WAWebHandleMsgReceiptUtils").isReadOrPlayedReceipt(a) &&
                l.length > 0 &&
                (k = o(
                  "WAWebMessageReceiptBatcher",
                ).receiptBatcher.acceptPeerReceipt({
                  ack: f,
                  ts: _,
                  msgKeys: L,
                  isOffline: E,
                  remote: y,
                }))
              : (k = o(
                  "WAWebMessageReceiptBatcher",
                ).receiptBatcher.acceptOtherReceipt({
                  ack: f,
                  ts: _,
                  receiverId: d,
                  msgKeys: L,
                  privacyMode: i,
                  isSender: g,
                })),
            E ||
              o("WAWebMessageReceiptBatcher").receiptBatcher.runActiveBatches(),
            k
          );
        })),
        m.apply(this, arguments)
      );
    }
    l.handleChatSimpleReceipt = d;
  },
  98,
);
