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
    "WAWebStatusGatingUtils",
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
            p = t.participant,
            _ = t.recipient,
            f = t.ts,
            g = c[0];
          if (g != null) {
            var h = o("WAWebBatchedStatusIdUtils").normalizeStatusStanzaId(g);
            if (!p) {
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
            var y = o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
              C = o("WAWebWidFactory").asUserWidOrThrow(p),
              b = o("WAWebUserPrefsMeUser").isMeAccount(C),
              v = t.participantPn;
            if (v != null && p.isLid()) {
              var S = o("WAWebWidFactory").asUserLidOrThrow(p),
                R = o("WAWebWidFactory").asUserWidOrThrow(v);
              o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                mappings: [{ lid: S, pn: R }],
                flushImmediately: !0,
                learningSource: "status-receipt",
              });
            }
            var L = t.participantUsername;
            if (L != null && p.isLid()) {
              var E = o("WAWebUsernameTypes").asMaybeUsername(L);
              if (E != null) {
                var k = [{ userId: C, username: E }];
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  try {
                    var e = yield o("WAWebSetUsernameJob").setUsernamesJob(k);
                    yield o(
                      "WAWebInsertUsernameChangeSystemMsg",
                    ).maybeInsertUsernameChangeSystemMsgs(
                      k,
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
            var I =
              ((a = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
                o("WAWebUserPrefsKeys").HASHED_KEYS.USER_PRIVACY_SETTINGS,
              )) == null
                ? void 0
                : a.readReceipts) === "none";
            if (!(!b && (I || l !== o("WAWebAck").ACK_STRING.READ))) {
              var T = o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID),
                D = _ != null ? _ : y,
                x = new (r("WAWebMsgKey"))({
                  id: h,
                  remote: T,
                  fromMe: m({ isPeerReceipt: b, ack: i, statusAuthor: D }),
                  participant: D,
                }),
                $ = [x.toString()],
                P =
                  d != null &&
                  !o(
                    "WAWebOfflineHandler",
                  ).OfflineMessageHandler.isResumeFromRestartComplete(),
                N = (u || (u = n("Promise"))).resolve();
              return (
                b
                  ? (N = o(
                      "WAWebMessageReceiptBatcher",
                    ).receiptBatcher.acceptPeerReceipt({
                      ts: f,
                      msgKeys: $,
                      ack: i,
                      isOffline: P,
                      remote: T,
                    }))
                  : (N = o(
                      "WAWebMessageReceiptBatcher",
                    ).receiptBatcher.acceptOtherReceipt({
                      ack: i,
                      ts: f,
                      receiverId: C,
                      msgKeys: $,
                    })),
                P ||
                  (yield (u || (u = n("Promise"))).all([
                    N,
                    o(
                      "WAWebMessageReceiptBatcher",
                    ).receiptBatcher.runActiveBatches(),
                  ])),
                N
              );
            }
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      var t = e.ack,
        n = e.isPeerReceipt,
        r = e.statusAuthor;
      if (!n) return !0;
      var a = t === o("WAWebAck").ACK.READ,
        i = o("WAWebUserPrefsMeUser").isMeAccount(r);
      return !a || !i
        ? !1
        : o("WAWebStatusGatingUtils").isStatusCompanionReadSyncEnabled();
    }
    l.handleStatusSimpleReceipt = c;
  },
  98,
);
