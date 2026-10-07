__d(
  "WAWebOnlineDanglingReceipts",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebCommsSendPing",
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
    function b(t, n, r, a) {
      var i,
        l =
          (a == null ? void 0 : a.sendsGroupAgentDeliveryReceipt) === !0
            ? h
            : g;
      l.has(t) || l.set(t, new Map());
      var s = l.get(t);
      ((s != null && s.has(n)) || s == null || s.set(n, []),
        s == null || (i = s.get(n)) == null || i.push(r),
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
            a = Array.from(g.keys()).map(function (n) {
              var a = g.get(n);
              if (a)
                return (
                  a.forEach(function (e) {
                    t += e.length;
                  }),
                  r.length < 3 && r.push(a.size),
                  o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                    to: n,
                    type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.DELIVERY,
                    t: e,
                    groupedReceipt: a,
                  })
                );
            });
          (h.forEach(function (n, r) {
            (n.forEach(function (e) {
              t += e.length;
            }),
              a.push(
                o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                  to: r,
                  type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.DELIVERY,
                  t: e,
                  groupedReceipt: n,
                  sendsGroupAgentDeliveryReceipt: !0,
                }),
              ));
          }),
            r.length > 0 &&
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[online-preacks] sending dangling receipts for ",
                    " chats => ",
                    "",
                  ])),
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
