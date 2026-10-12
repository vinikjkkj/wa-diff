__d(
  "WAWebOnlineDanglingReceipts",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebCommsSendPing",
    "WAWebDeliveryReceiptClassUtils",
    "WAWebNetworkStatus",
    "WAWebSendReceiptJobCommon",
    "WAWebWamOfflineResumeReporter",
    "asyncToGeneratorRuntime",
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
      f,
      g = new Map(),
      h = new Map(),
      y = null,
      C = 120 * 1e3;
    function b(t) {
      var n = t.author,
        r = t.externalId,
        a = t.from,
        i = t.options,
        l = t.receiptClass,
        s =
          (i == null ? void 0 : i.sendsGroupAgentDeliveryReceipt) === !0
            ? h
            : g;
      (o("WAWebDeliveryReceiptClassUtils").addReceiptByClass(s, {
        author: n,
        externalId: r,
        from: a,
        receiptClass: l,
      }),
        y == null &&
          (y = self.setTimeout(function () {
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[online-preacks] clear dangling receipts (timeout)",
                ])),
            ),
              k(),
              (y = null));
          }, C)));
    }
    function v() {
      return g.size > 0 || h.size > 0;
    }
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = String(o("WATimeUtils").unixTime()),
            t = 0,
            r = [],
            a = [],
            i = function (i, l) {
              i.forEach(function (n, i) {
                n.forEach(function (n, s) {
                  (n.forEach(function (e) {
                    t += e.length;
                  }),
                    r.length < 3 && r.push(n.size),
                    a.push(
                      o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                        to: i,
                        type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE
                          .DELIVERY,
                        t: e,
                        groupedReceipt: n,
                        receiptClass: s,
                        sendsGroupAgentDeliveryReceipt: l,
                      }),
                    ));
                });
              });
            };
          (i(g, !1),
            i(h, !0),
            r.length > 0 &&
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[online-preacks] sending ",
                    " dangling receipt buckets for ",
                    " chats => ",
                    "",
                  ])),
                a.length,
                g.size,
                r,
              ),
            yield (f || (f = n("Promise"))).all(a),
            o(
              "WAWebWamOfflineResumeReporter",
            ).OfflineResumeReporter.logOfflinePreackCount(t, !0),
            L());
        })),
        R.apply(this, arguments)
      );
    }
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (v()) {
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
            var e = yield o("WAWebCommsSendPing").blockSendPing();
            e &&
              (o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[clearOnlineDanglingReceiptsAfterSending] cleared",
                  ])),
              ),
              T());
          }
        })),
        E.apply(this, arguments)
      );
    }
    function k() {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (v() && r("WAWebNetworkStatus").online)
            try {
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[online-preacks] clearOrFlushOnlineDanglingReceipts: ping",
                  ])),
              );
              var e = yield o("WAWebCommsSendPing").blockSendPing();
              e &&
                (o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[online-preacks] clearOrFlushOnlineDanglingReceipts: cleared",
                    ])),
                ),
                T());
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
        })),
        I.apply(this, arguments)
      );
    }
    function T() {
      (g.clear(), h.clear());
    }
    ((l.addOnlineDanglingReceipts = b),
      (l.hasOnlineDanglingReceipts = v),
      (l.sendAndClearOnlineDanglingReceipts = S));
  },
  98,
);
