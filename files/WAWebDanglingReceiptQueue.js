__d(
  "WAWebDanglingReceiptQueue",
  [
    "WALogger",
    "WAWebCommsSendPing",
    "WAWebNetworkStatus",
    "WAWebSchemaDanglingReceipt",
    "WAWebWorkerOnlineMessageAdmission",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = {
        clear: function () {
          return o("WAWebWorkerOnlineMessageAdmission")
            .workerOnlineMessageAdmission.queue != null
            ? Promise.resolve()
            : d(m);
        },
      };
    async function d(t) {
      if (!r("WAWebNetworkStatus").online) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[dangling-receipt-queue] clear: skip, offline",
            ])),
        );
        return;
      }
      var n = await o("WAWebSchemaDanglingReceipt").getTable().allPrimaryKeys();
      if (!(await t(n))) {
        n.length > 0 &&
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[dangling-receipt-queue] clear: skip, no ping response",
              ])),
          );
        return;
      }
      (await o("WAWebSchemaDanglingReceipt").getTable().bulkRemove(n),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[dangling-receipt-queue] clear: removed ",
              " rows",
            ])),
          n.length,
        ));
    }
    async function m(e) {
      return e.length === 0 ? !1 : o("WAWebCommsSendPing").blockSendPing();
    }
    ((l.danglingReceiptQueue = c), (l.clearConfirmedDanglingReceipts = d));
  },
  98,
);
