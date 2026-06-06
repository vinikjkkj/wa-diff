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
      h = null,
      y = 120 * 1e3;
    function C(t, n, r) {
      var a;
      g.has(t) || g.set(t, new Map());
      var i = g.get(t);
      ((i != null && i.has(n)) || i == null || i.set(n, []),
        i == null || (a = i.get(n)) == null || a.push(r),
        h ||
          (h = self.setTimeout(function () {
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[online-preacks] clear online dangling receipts due to timeout",
                ])),
            ),
              E(),
              (h = null));
          }, y)));
    }
    function b() {
      return g.size > 0;
    }
    function v() {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
          (r.length > 0 &&
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[online-preacks]: sending online dangling grouped receipts for ",
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
            R());
        })),
        S.apply(this, arguments)
      );
    }
    function R() {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (g.size !== 0) {
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
            var e = yield o("WAWebCommsSendPing").blockSendPing();
            e &&
              (o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[online-preacks] clearOnlineDanglingReceiptsAfterSending: clearing receipts",
                  ])),
              ),
              g.clear());
          }
        })),
        L.apply(this, arguments)
      );
    }
    function E() {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (g.size !== 0 && r("WAWebNetworkStatus").online)
            try {
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[online-preacks] clearOrFlushOnlineDanglingReceipts: sending ping",
                  ])),
              );
              var e = yield o("WAWebCommsSendPing").blockSendPing();
              e &&
                (o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[online-preacks] clearOrFlushOnlineDanglingReceipts: clearing receipts",
                    ])),
                ),
                g.clear());
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
        })),
        k.apply(this, arguments)
      );
    }
    ((l.addOnlineDanglingReceipts = C),
      (l.hasOnlineDanglingReceipts = b),
      (l.sendAndClearOnlineDanglingReceipts = v));
  },
  98,
);
