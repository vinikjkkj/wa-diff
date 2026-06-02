__d(
  "WAWebHandleStatusReceipt",
  [
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
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t) {
      var n,
        a = t.ack,
        i = t.ackString,
        l = t.externalIds,
        u = t.offline,
        c = t.participant,
        d = t.recipient,
        m = t.ts,
        p = l[0];
      if (!c) {
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
      var _ = o("WAWebUserPrefsMeUser").getMeUser(),
        f = o("WAWebWidFactory").asUserWidOrThrow(c),
        g = o("WAWebUserPrefsMeUser").isMeAccount(f),
        h = t.participantPn;
      if (h != null && c.isLid()) {
        var y = o("WAWebWidFactory").asUserLidOrThrow(c),
          C = o("WAWebWidFactory").asUserWidOrThrow(h);
        o("WAWebDBCreateLidPnMappings").createLidPnMappings({
          mappings: [{ lid: y, pn: C }],
          flushImmediately: !0,
          learningSource: "other",
        });
      }
      var b = t.participantUsername;
      if (b != null && c.isLid()) {
        var v = [{ userId: f, username: b }];
        (async function () {
          try {
            var e = await o("WAWebSetUsernameJob").setUsernamesJob(v);
            await o(
              "WAWebInsertUsernameChangeSystemMsg",
            ).maybeInsertUsernameChangeSystemMsgs(
              v,
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
      var S =
        ((n = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
          o("WAWebUserPrefsKeys").HASHED_KEYS.USER_PRIVACY_SETTINGS,
        )) == null
          ? void 0
          : n.readReceipts) === "none";
      if (!(!g && (S || i !== o("WAWebAck").ACK_STRING.READ))) {
        var R = o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID),
          L = new (r("WAWebMsgKey"))({
            id: p,
            remote: R,
            fromMe: !g,
            participant: d != null ? d : _,
          }),
          E = [L.toString()],
          k =
            u != null &&
            !o(
              "WAWebOfflineHandler",
            ).OfflineMessageHandler.isResumeFromRestartComplete(),
          I = Promise.resolve();
        return (
          g
            ? (I = o(
                "WAWebMessageReceiptBatcher",
              ).receiptBatcher.acceptPeerReceipt({
                ts: m,
                msgKeys: E,
                ack: a,
                isOffline: k,
                remote: R,
              }))
            : (I = o(
                "WAWebMessageReceiptBatcher",
              ).receiptBatcher.acceptOtherReceipt({
                ack: a,
                ts: m,
                receiverId: f,
                msgKeys: E,
              })),
          k ||
            o("WAWebMessageReceiptBatcher").receiptBatcher.runActiveBatches(),
          I
        );
      }
    }
    l.handleStatusSimpleReceipt = u;
  },
  98,
);
