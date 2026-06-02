__d(
  "WAWebOnlineDanglingReceipts",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebCommsSendPing",
    "WAWebNetworkStatus",
    "WAWebSendReceiptJobCommon",
    "WAWebWamOfflineResumeReporter",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = new Map(),
      g = null,
      h = 120 * 1e3;
    function y(t, n, r) {
      var a;
      f.has(t) || f.set(t, new Map());
      var i = f.get(t);
      ((i != null && i.has(n)) || i == null || i.set(n, []),
        i == null || (a = i.get(n)) == null || a.push(r),
        g ||
          (g = self.setTimeout(function () {
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[online-preacks] clear online dangling receipts due to timeout",
                ])),
            ),
              S(),
              (g = null));
          }, h)));
    }
    function C() {
      return f.size > 0;
    }
    async function b() {
      var e = String(o("WATimeUtils").unixTime()),
        t = 0,
        n = [],
        r = Array.from(f.keys()).map(function (r) {
          var a = f.get(r);
          if (a)
            return (
              a.forEach(function (e) {
                t += e.length;
              }),
              n.length < 3 && n.push(a.size),
              o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                to: r,
                type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.DELIVERY,
                t: e,
                groupedReceipt: a,
              })
            );
        });
      (n.length > 0 &&
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[online-preacks]: sending online dangling grouped receipts for ",
              " chats => ",
              "",
            ])),
          f.size,
          n,
        ),
        await Promise.all(r),
        o(
          "WAWebWamOfflineResumeReporter",
        ).OfflineResumeReporter.logOfflinePreackCount(t, !0),
        v());
    }
    async function v() {
      if (f.size !== 0) {
        if (!r("WAWebNetworkStatus").online) {
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[online-preacks] clearOnlineDanglingReceiptsAfterSending: skip due to offline",
              ])),
          );
          return;
        }
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[online-preacks] clearOnlineDanglingReceiptsAfterSending: sending ping",
            ])),
        );
        var e = await o("WAWebCommsSendPing").blockSendPing();
        e &&
          (o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[online-preacks] clearOnlineDanglingReceiptsAfterSending: clearing receipts",
              ])),
          ),
          f.clear());
      }
    }
    async function S() {
      if (f.size !== 0 && r("WAWebNetworkStatus").online)
        try {
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[online-preacks] clearOrFlushOnlineDanglingReceipts: sending ping",
              ])),
          );
          var e = await o("WAWebCommsSendPing").blockSendPing();
          e &&
            (o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[online-preacks] clearOrFlushOnlineDanglingReceipts: clearing receipts",
                ])),
            ),
            f.clear());
        } catch (e) {
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[online-preacks] clearOrFlushOnlineDanglingReceipts: failed to clear receipts: ",
                "",
              ])),
            e,
          );
        }
    }
    ((l.addOnlineDanglingReceipts = y),
      (l.hasOnlineDanglingReceipts = C),
      (l.sendAndClearOnlineDanglingReceipts = b));
  },
  98,
);
