__d(
  "WAWebOnlineDanglingReceipts",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebCommsSendPing",
    "WAWebDeliveryReceiptClassUtils",
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
      g = new Map(),
      h = null,
      y = 120 * 1e3;
    function C(t) {
      var n = t.author,
        r = t.externalId,
        a = t.from,
        i = t.options,
        l = t.receiptClass,
        s =
          (i == null ? void 0 : i.sendsGroupAgentDeliveryReceipt) === !0
            ? g
            : f;
      (o("WAWebDeliveryReceiptClassUtils").addReceiptByClass(s, {
        author: n,
        externalId: r,
        from: a,
        receiptClass: l,
      }),
        h == null &&
          (h = self.setTimeout(function () {
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[online-preacks] clear dangling receipts (timeout)",
                ])),
            ),
              R(),
              (h = null));
          }, y)));
    }
    function b() {
      return f.size > 0 || g.size > 0;
    }
    async function v() {
      var e = String(o("WATimeUtils").unixTime()),
        t = 0,
        n = [],
        r = [],
        a = function (i, l) {
          i.forEach(function (a, i) {
            a.forEach(function (a, s) {
              (a.forEach(function (e) {
                t += e.length;
              }),
                n.length < 3 && n.push(a.size),
                r.push(
                  o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                    to: i,
                    type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.DELIVERY,
                    t: e,
                    groupedReceipt: a,
                    receiptClass: s,
                    sendsGroupAgentDeliveryReceipt: l,
                  }),
                ));
            });
          });
        };
      (a(f, !1),
        a(g, !0),
        n.length > 0 &&
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[online-preacks] sending ",
                " dangling receipt buckets for ",
                " chats => ",
                "",
              ])),
            r.length,
            f.size,
            n,
          ),
        await Promise.all(r),
        o(
          "WAWebWamOfflineResumeReporter",
        ).OfflineResumeReporter.logOfflinePreackCount(t, !0),
        S());
    }
    async function S() {
      if (b()) {
        if (!r("WAWebNetworkStatus").online) {
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[clearOnlineDanglingReceiptsAfterSending] skip offline",
              ])),
          );
          return;
        }
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[clearOnlineDanglingReceiptsAfterSending] ping",
            ])),
        );
        var e = await o("WAWebCommsSendPing").blockSendPing();
        e &&
          (o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[clearOnlineDanglingReceiptsAfterSending] cleared",
              ])),
          ),
          L());
      }
    }
    async function R() {
      if (b() && r("WAWebNetworkStatus").online)
        try {
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[online-preacks] clearOrFlushOnlineDanglingReceipts: ping",
              ])),
          );
          var e = await o("WAWebCommsSendPing").blockSendPing();
          e &&
            (o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[online-preacks] clearOrFlushOnlineDanglingReceipts: cleared",
                ])),
            ),
            L());
        } catch (e) {
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[online-preacks] clearOrFlushOnlineDanglingReceipts: failed ",
                "",
              ])),
            e,
          );
        }
    }
    function L() {
      (f.clear(), g.clear());
    }
    ((l.addOnlineDanglingReceipts = C),
      (l.hasOnlineDanglingReceipts = b),
      (l.sendAndClearOnlineDanglingReceipts = v));
  },
  98,
);
