__d(
  "WAWebDanglingReceiptQueue",
  [
    "Promise",
    "WALogger",
    "WAWebCommsSendPing",
    "WAWebNetworkStatus",
    "WAWebSchemaDanglingReceipt",
    "WAWebWorkerOnlineMessageAdmission",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = {
        clear: function () {
          return o("WAWebWorkerOnlineMessageAdmission")
            .workerOnlineMessageAdmission.queue != null
            ? (c || (c = n("Promise"))).resolve()
            : m(_);
        },
      };
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (!r("WAWebNetworkStatus").online) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[dangling-receipt-queue] clear: skip, offline",
                ])),
            );
            return;
          }
          var n = yield o("WAWebSchemaDanglingReceipt")
            .getTable()
            .allPrimaryKeys();
          if (!(yield t(n))) {
            n.length > 0 &&
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[dangling-receipt-queue] clear: skip, no ping response",
                  ])),
              );
            return;
          }
          (yield o("WAWebSchemaDanglingReceipt").getTable().bulkRemove(n),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[dangling-receipt-queue] clear: removed ",
                  " rows",
                ])),
              n.length,
            ));
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return e.length === 0 ? !1 : o("WAWebCommsSendPing").blockSendPing();
        })),
        f.apply(this, arguments)
      );
    }
    ((l.danglingReceiptQueue = d), (l.clearConfirmedDanglingReceipts = m));
  },
  98,
);
