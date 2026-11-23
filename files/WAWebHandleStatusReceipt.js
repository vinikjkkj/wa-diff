__d(
  "WAWebHandleStatusReceipt",
  [
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
    "WAWebStatusGatingUtils",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserUtils",
    "WAWebUsernameTypes",
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
        d = t.participant,
        m = t.recipient,
        p = t.ts,
        _ = l[0];
      if (_ != null) {
        var f = o("WAWebBatchedStatusIdUtils").normalizeStatusStanzaId(_);
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
        var g = o("WAWebUserUtils").getMeUserOrThrow(),
          h = o("WAWebWidFactory").asUserWidOrThrow(d),
          y = o("WAWebUserUtils").isMeAccount(h),
          C = t.participantPn;
        if (C != null && d.isLid()) {
          var b = o("WAWebWidFactory").asUserLidOrThrow(d),
            v = o("WAWebWidFactory").asUserWidOrThrow(C);
          o("WAWebDBCreateLidPnMappings").createLidPnMappings({
            mappings: [{ lid: b, pn: v }],
            write: "now",
            learningSource: "status-receipt",
          });
        }
        var S = t.participantUsername;
        if (S != null && d.isLid()) {
          var R = o("WAWebUsernameTypes").asMaybeUsername(S);
          if (R != null) {
            var L = [{ userId: h, username: R }];
            (async function () {
              try {
                var e = await o("WAWebSetUsernameJob").setUsernamesJob(L);
                await o(
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
          ((n = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
            o("WAWebUserPrefsKeys").HASHED_KEYS.USER_PRIVACY_SETTINGS,
          )) == null
            ? void 0
            : n.readReceipts) === "none";
        if (!(!y && (E || i !== o("WAWebAck").ACK_STRING.READ))) {
          var k = o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID),
            I = m != null ? m : g,
            T = new (r("WAWebMsgKey"))({
              id: f,
              remote: k,
              fromMe: c({ isPeerReceipt: y, ack: a, statusAuthor: I }),
              participant: I,
            }),
            D = [T.toString()],
            x =
              u != null &&
              !o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.isResumeFromRestartComplete(),
            $ = Promise.resolve();
          return (
            y
              ? ($ = o(
                  "WAWebMessageReceiptBatcher",
                ).receiptBatcher.acceptPeerReceipt({
                  ts: p,
                  msgKeys: D,
                  ack: a,
                  isOffline: x,
                  remote: k,
                }))
              : ($ = o(
                  "WAWebMessageReceiptBatcher",
                ).receiptBatcher.acceptOtherReceipt({
                  ack: a,
                  ts: p,
                  receiverId: h,
                  msgKeys: D,
                })),
            x ||
              (await Promise.all([
                $,
                o(
                  "WAWebMessageReceiptBatcher",
                ).receiptBatcher.runActiveBatches(),
              ])),
            $
          );
        }
      }
    }
    function c(e) {
      var t = e.ack,
        n = e.isPeerReceipt,
        r = e.statusAuthor;
      if (!n) return !0;
      var a = t === o("WAWebAck").ACK.READ,
        i = o("WAWebUserUtils").isMeAccount(r);
      return !a || !i
        ? !1
        : o("WAWebStatusGatingUtils").isStatusCompanionReadSyncEnabled();
    }
    l.handleStatusSimpleReceipt = u;
  },
  98,
);
