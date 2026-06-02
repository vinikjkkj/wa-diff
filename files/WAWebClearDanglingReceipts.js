__d(
  "WAWebClearDanglingReceipts",
  [
    "WAAbortError",
    "WALogger",
    "WATimeUtils",
    "WAWebCommsSendPing",
    "WAWebNetworkStatus",
    "WAWebOfflineResumePreAckHandler",
    "WAWebSchemaDanglingReceipt",
    "WAWebSendReceiptJobCommon",
    "WAWebWamOfflineResumeReporter",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f;
    async function g(t, n) {
      if (
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "sendAndClearDanglingReceipts: get ",
              " danglingRecords",
            ])),
          t.length,
        ),
        n.aborted)
      )
        throw (
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "sendAndClearDanglingReceipts: aborting, signal.aborted",
              ])),
          ),
          new (o("WAAbortError").AbortError)()
        );
      var r = new Map(),
        a = [],
        i = 0;
      t.forEach(function (e) {
        i += e.receipts.length;
        var t = e.acks,
          n = e.receipts;
        (n.forEach(function (e) {
          var t = o("WAWebWidFactory").createWid(e.from),
            n = o("WAWebWidFactory").createWid(e.author),
            a = r.get(t);
          a || ((a = new Map()), r.set(t, a));
          var i = a.get(n);
          (i || ((i = []), a.set(n, i)), i.push(e.externalId));
        }),
          (a = a.concat(t)));
      });
      var l = String(o("WATimeUtils").unixTime()),
        p = Array.from(r.keys()).map(function (e) {
          var t = r.get(e);
          if (t)
            return o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
              to: e,
              type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.DELIVERY,
              t: l,
              groupedReceipt: t,
            });
        }),
        _ = a.map(function (e) {
          return o("WAWebOfflineResumePreAckHandler").sendOfflinePreAck(e);
        });
      (o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "sendAndClearDanglingReceipts: sending ",
            " rcpts, ",
            " preAcks",
          ])),
        p.length,
        _.length,
      ),
        await Promise.all(p),
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "sendAndClearDanglingReceipts: complete sending ",
              " receipts",
            ])),
          p.length,
        ),
        await Promise.all(_),
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "sendAndClearDanglingReceipts: complete sending  ",
              " preAcks",
            ])),
          _.length,
        ),
        await h(),
        o(
          "WAWebWamOfflineResumeReporter",
        ).OfflineResumeReporter.logOfflinePreackCount(i),
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "sendAndClearDanglingReceipts: complete",
            ])),
        ));
    }
    async function h() {
      if (!r("WAWebNetworkStatus").online) {
        o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "[offline-resume] clearDanglingReceipts: skip due to offline",
            ])),
        );
        return;
      }
      o("WALogger").LOG(
        _ ||
          (_ = babelHelpers.taggedTemplateLiteralLoose([
            "[offline-resume] clearDanglingReceipts: sending ping",
          ])),
      );
      var e = await o("WAWebCommsSendPing").blockSendPing();
      e &&
        (o("WALogger").LOG(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "[offline-resume] clearDanglingReceipts: clearing",
            ])),
        ),
        await o("WAWebSchemaDanglingReceipt").getTable().clear());
    }
    ((l.sendAndClearDanglingReceipts = g), (l.clearDanglingReceipts = h));
  },
  98,
);
