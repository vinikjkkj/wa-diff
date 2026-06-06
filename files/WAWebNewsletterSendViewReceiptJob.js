__d(
  "WAWebNewsletterSendViewReceiptJob",
  [
    "WABatcher",
    "WAJobOrchestratorTypes",
    "WASmaxReceiptPublishViewRPC",
    "WAStanzaUtils",
    "WAWap",
    "WAWebNewsletterDBUtils",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new Map(),
      s = 3e3;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a,
            i =
              (a = e.get(t)) != null
                ? a
                : o("WABatcher").createSimpleBatcher(
                    { delayMs: s },
                    (function () {
                      var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (e) {
                          return (yield d(t, e), e);
                        },
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })(),
                  );
          (e.set(t, i), yield i.accept(r));
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return o("WAWebOrchestratorNonPersistedJob")
            .createNonPersistedJob(
              "sendNewsletterViewReceipt",
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                (yield o("WASmaxReceiptPublishViewRPC").sendPublishViewRPC({
                  receiptTo: e,
                  receiptId: o("WAStanzaUtils").toStanzaId(
                    o("WAWap").generateId(),
                  ),
                  itemArgs: t.map(function (e) {
                    var t = e.itemServerId;
                    return { itemServerId: t };
                  }),
                }),
                  yield o("WAWebNewsletterDBUtils").updateMsgViewReceipt(
                    t.map(function (e) {
                      return e.itemId;
                    }),
                  ));
              }),
              { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW },
            )
            .waitUntilCompleted();
        })),
        m.apply(this, arguments)
      );
    }
    l.sendViewReceiptJob = u;
  },
  98,
);
