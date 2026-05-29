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
            var R = [{ userId: h, username: S }];
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              try {
                var e = yield o("WAWebSetUsernameJob").setUsernamesJob(R);
                yield o(
                  "WAWebInsertUsernameChangeSystemMsg",
                ).maybeInsertUsernameChangeSystemMsgs(
                  R,
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
          var L =
            ((a = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
              o("WAWebUserPrefsKeys").HASHED_KEYS.USER_PRIVACY_SETTINGS,
            )) == null
              ? void 0
              : a.readReceipts) === "none";
          if (!(!y && (L || l !== o("WAWebAck").ACK_STRING.READ))) {
            var E = o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID),
              k = new (r("WAWebMsgKey"))({
                id: f,
                remote: E,
                fromMe: !y,
                participant: p != null ? p : g,
              }),
              I = [k.toString()],
              T =
                d != null &&
                !o(
                  "WAWebOfflineHandler",
                ).OfflineMessageHandler.isResumeFromRestartComplete(),
              D = (u || (u = n("Promise"))).resolve();
            return (
              y
                ? (D = o(
                    "WAWebMessageReceiptBatcher",
                  ).receiptBatcher.acceptPeerReceipt({
                    ts: _,
                    msgKeys: I,
                    ack: i,
                    isOffline: T,
                    remote: E,
                  }))
                : (D = o(
                    "WAWebMessageReceiptBatcher",
                  ).receiptBatcher.acceptOtherReceipt({
                    ack: i,
                    ts: _,
                    receiverId: h,
                    msgKeys: I,
                  })),
              T ||
                o(
                  "WAWebMessageReceiptBatcher",
                ).receiptBatcher.runActiveBatches(),
              D
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
