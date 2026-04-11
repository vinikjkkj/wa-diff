__d(
  "WAWebHandleStatusReceipt",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WAWebAck",
    "WAWebDBCreateLidPnMappings",
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
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a,
            i = t.ack,
            l = t.ackString,
            u = t.externalIds,
            c = t.offline,
            d = t.participant,
            m = t.recipient,
            p = t.ts,
            _ = u[0];
          if (!d) {
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
          var f = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
            g = o("WAWebWidFactory").asUserWidOrThrow(d),
            h = o("WAWebUserPrefsMeUser").isMeAccount(g),
            y = t.participantPn;
          if (y != null && d.isLid()) {
            var C = o("WAWebWidFactory").asUserLidOrThrow(d),
              b = o("WAWebWidFactory").asUserWidOrThrow(y);
            o("WAWebDBCreateLidPnMappings").createLidPnMappings({
              mappings: [{ lid: C, pn: b }],
              flushImmediately: !0,
              learningSource: "other",
            });
          }
          var v = t.participantUsername;
          v != null &&
            d.isLid() &&
            o("WAWebSetUsernameJob").setUsernamesJob([
              { userId: g, username: v },
            ]);
          var S =
            ((a = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
              o("WAWebUserPrefsKeys").HASHED_KEYS.USER_PRIVACY_SETTINGS,
            )) == null
              ? void 0
              : a.readReceipts) === "none";
          if (!(!h && (S || l !== o("WAWebAck").ACK_STRING.READ))) {
            var R = o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID),
              L = new (r("WAWebMsgKey"))({
                id: _,
                remote: R,
                fromMe: !h,
                participant: m != null ? m : f,
              }),
              E = [L.toString()],
              k =
                c != null &&
                !o(
                  "WAWebOfflineHandler",
                ).OfflineMessageHandler.isResumeFromRestartComplete(),
              I = (s || (s = n("Promise"))).resolve();
            return (
              h
                ? (I = o(
                    "WAWebMessageReceiptBatcher",
                  ).receiptBatcher.acceptPeerReceipt({
                    ts: p,
                    msgKeys: E,
                    ack: i,
                    isOffline: k,
                    remote: R,
                  }))
                : (I = o(
                    "WAWebMessageReceiptBatcher",
                  ).receiptBatcher.acceptOtherReceipt({
                    ack: i,
                    ts: p,
                    receiverId: g,
                    msgKeys: E,
                  })),
              k ||
                o(
                  "WAWebMessageReceiptBatcher",
                ).receiptBatcher.runActiveBatches(),
              I
            );
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.handleStatusSimpleReceipt = u;
  },
  98,
);
