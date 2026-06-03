__d(
  "WAWebHandleStatusReceipt",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WAWebAck",
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
          var g = o("WAWebUserPrefsMeUser").getMeUser(),
            h = o("WAWebWidFactory").asUserWidOrThrow(m),
            y = o("WAWebUserPrefsMeUser").isMeAccount(h),
            C = t.participantPn;
          if (C != null && m.isLid()) {
            var b = o("WAWebWidFactory").asUserLidOrThrow(m),
              v = o("WAWebWidFactory").asUserWidOrThrow(C);
            o("WAWebDBCreateLidPnMappings").createLidPnMappings({
              mappings: [{ lid: b, pn: v }],
              flushImmediately: !0,
              learningSource: "other",
            });
          }
          var S = t.participantUsername;
          if (S != null && m.isLid()) {
            var R = o("WAWebUsernameTypes").asMaybeUsername(S);
            if (R != null) {
              var L = [{ userId: h, username: R }];
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                try {
                  var e = yield o("WAWebSetUsernameJob").setUsernamesJob(L);
                  yield o(
                    "WAWebInsertUsernameChangeSystemMsg",
                  ).maybeInsertUsernameChangeSystemMsgs(
                    L,
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
                    .sendLogs("handleStatusSimpleReceipt-set-usernames-failed");
                }
              })();
            }
          }
          var E =
            ((a = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
              o("WAWebUserPrefsKeys").HASHED_KEYS.USER_PRIVACY_SETTINGS,
            )) == null
              ? void 0
              : a.readReceipts) === "none";
          if (!(!y && (E || l !== o("WAWebAck").ACK_STRING.READ))) {
            var k = o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID),
              I = new (r("WAWebMsgKey"))({
                id: f,
                remote: k,
                fromMe: !y,
                participant: p != null ? p : g,
              }),
              T = [I.toString()],
              D =
                d != null &&
                !o(
                  "WAWebOfflineHandler",
                ).OfflineMessageHandler.isResumeFromRestartComplete(),
              x = (u || (u = n("Promise"))).resolve();
            return (
              y
                ? (x = o(
                    "WAWebMessageReceiptBatcher",
                  ).receiptBatcher.acceptPeerReceipt({
                    ts: _,
                    msgKeys: T,
                    ack: i,
                    isOffline: D,
                    remote: k,
                  }))
                : (x = o(
                    "WAWebMessageReceiptBatcher",
                  ).receiptBatcher.acceptOtherReceipt({
                    ack: i,
                    ts: _,
                    receiverId: h,
                    msgKeys: T,
                  })),
              D ||
                o(
                  "WAWebMessageReceiptBatcher",
                ).receiptBatcher.runActiveBatches(),
              x
            );
          }
        })),
        d.apply(this, arguments)
      );
    }
    l.handleStatusSimpleReceipt = c;
  },
  98,
);
