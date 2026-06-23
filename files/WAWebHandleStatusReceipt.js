__d(
  "WAWebHandleStatusReceipt",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WAWebAck",
    "WAWebBatchedStatusIdUtils",
    "WAWebDBCreateLidPnMappings",
    "WAWebInsertUsernameChangeSystemMsg",
    "WAWebMessageReceiptBatcher",
    "WAWebMsgKey",
    "WAWebOfflineHandler",
    "WAWebSetUsernameJob",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a,
            i = t.ack,
            l = t.ackString,
            c = t.externalIds,
            d = t.offline,
            m = t.participant,
            p = t.recipient,
            _ = t.ts,
            f = c[0];
          if (f != null) {
            var g = o("WAWebBatchedStatusIdUtils").normalizeStatusStanzaId(f);
            if (!m) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "error: got status ack without participant",
                    ])),
                )
                .sendLogs("handleStatusSimpleReceipt: failed");
              return;
            }
            var h = o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
              y = o("WAWebWidFactory").asUserWidOrThrow(m),
              C = o("WAWebUserPrefsMeUser").isMeAccount(y),
              b = t.participantPn;
            if (b != null && m.isLid()) {
              var v = o("WAWebWidFactory").asUserLidOrThrow(m),
                S = o("WAWebWidFactory").asUserWidOrThrow(b);
              o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                mappings: [{ lid: v, pn: S }],
                flushImmediately: !0,
                learningSource: "status-receipt",
              });
            }
            var R = t.participantUsername;
            if (R != null && m.isLid()) {
              var L = o("WAWebUsernameTypes").asMaybeUsername(R);
              if (L != null) {
                var E = [{ userId: y, username: L }];
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  try {
                    var e = yield o("WAWebSetUsernameJob").setUsernamesJob(E);
                    yield o(
                      "WAWebInsertUsernameChangeSystemMsg",
                    ).maybeInsertUsernameChangeSystemMsgs(
                      E,
                      e,
                      "handleStatusSimpleReceipt",
                    );
                  } catch (e) {
                    o("WALogger")
                      .ERROR(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "handleStatusSimpleReceipt: setUsernamesJob failed ",
                            "",
                          ])),
                        e instanceof Error ? e.message : String(e),
                      )
                      .sendLogs(
                        "handleStatusSimpleReceipt-set-usernames-failed",
                      );
                  }
                })();
              }
            }
            var k =
              ((a = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
                o("WAWebUserPrefsKeys").HASHED_KEYS.USER_PRIVACY_SETTINGS,
              )) == null
                ? void 0
                : a.readReceipts) === "none";
            if (!(!C && (k || l !== o("WAWebAck").ACK_STRING.READ))) {
              var I = o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID),
                T = new (r("WAWebMsgKey"))({
                  id: g,
                  remote: I,
                  fromMe: !C,
                  participant: p != null ? p : h,
                }),
                D = [T.toString()],
                x =
                  d != null &&
                  !o(
                    "WAWebOfflineHandler",
                  ).OfflineMessageHandler.isResumeFromRestartComplete(),
                $ = (u || (u = n("Promise"))).resolve();
              return (
                C
                  ? ($ = o(
                      "WAWebMessageReceiptBatcher",
                    ).receiptBatcher.acceptPeerReceipt({
                      ts: _,
                      msgKeys: D,
                      ack: i,
                      isOffline: x,
                      remote: I,
                    }))
                  : ($ = o(
                      "WAWebMessageReceiptBatcher",
                    ).receiptBatcher.acceptOtherReceipt({
                      ack: i,
                      ts: _,
                      receiverId: y,
                      msgKeys: D,
                    })),
                x ||
                  o(
                    "WAWebMessageReceiptBatcher",
                  ).receiptBatcher.runActiveBatches(),
                $
              );
            }
          }
        })),
        d.apply(this, arguments)
      );
    }
    l.handleStatusSimpleReceipt = c;
  },
  98,
);
