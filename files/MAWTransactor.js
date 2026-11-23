__d(
  "MAWTransactor",
  [
    "MAWDexie",
    "MAWDexieTable",
    "MAWErrorObject",
    "MAWIndexedDb",
    "MAWLLAMigrationUtils",
    "MAWQplProxy",
    "MAWTransactionMode",
    "MWFBLogger",
    "WAExceededStorageQuota",
    "WALogger",
    "getErrorSafe",
    "gkx",
    "performance",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = ["MWPTransactor"],
      d = o("MWFBLogger").MWLogger();
    function m(t, n, a, i, l, s) {
      return (
        i != null &&
          r("MAWDexie").currentTransaction != null &&
          i.endFail("invoked_in_nested_transaction", {
            string: {
              current_transaction_mode: r("MAWDexie").currentTransaction.mode,
            },
            string_array: {
              current_transaction_store_names:
                r("MAWDexie").currentTransaction.storeNames,
            },
          }),
        r("MAWDexie").currentTransaction != null &&
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "makeMsgrTransactor ",
                " should not be called inside another transaction. The transaction will be forced to execute on top-level",
              ])),
            l,
          ),
        t.transact(n, a, s)
      );
    }
    function p(e) {
      var t = o("MAWLLAMigrationUtils").getTransactorQPLParam(e),
        n = t.length === 2 ? t : [null, void 0],
        r = n[0],
        a = n[1];
      return r != null
        ? o("MAWQplProxy").startQplUserFlow(r, a, { sendThroughBridge: !1 })
        : null;
    }
    function _(e, t, n, r) {
      return h(
        e,
        t,
        function (e) {
          return o("MAWIndexedDb").getDB(e);
        },
        n,
        r,
      );
    }
    var f = 0,
      g = new Map();
    function h(e, t, n, a, i) {
      var l = Object.keys(e),
        _ = l.some(function (t) {
          return e[t] === o("MAWTransactionMode").READWRITE;
        })
          ? o("MAWTransactionMode").READWRITE
          : o("MAWTransactionMode").READONLY;
      return function () {
        for (var h = arguments.length, b = new Array(h), v = 0; v < h; v++)
          b[v] = arguments[v];
        var S = p(t),
          R = void 0,
          L = function () {
            return self.clearInterval(R);
          };
        if (
          S != null &&
          (S.addAnnotations({
            string: {
              mode:
                _ === o("MAWTransactionMode").READWRITE
                  ? "readwrite"
                  : "readonly",
            },
            string_array: { stores: l },
          }),
          r("gkx")("1006") && t === "bulkCreateThreadByJid")
        ) {
          var E = 1e3,
            k = Date.now();
          ((R = self.setInterval(function () {
            S.addAnnotations({
              int: { heartbeatLatestAliveSinceStartMs: Date.now() - k },
            });
          }, E)),
            self.setTimeout(L, o("MAWQplProxy").DEFAULT_WORKER_QPL_TIMEOUT_MS));
        }
        var I = (u || (u = r("performance"))).now() + u.timeOrigin;
        return n(t)
          .then(function (n) {
            var p = Array.from(g.values());
            S == null ||
              S.addPoint("lock_wait_start", {
                string_array: { maybeLockedOn: p },
              });
            var h = (u || (u = r("performance"))).now();
            return (
              i == null ||
                i.onTxnRequestedCb == null ||
                i.onTxnRequestedCb.apply(i, b),
              m(n, _, l, S, t, function () {
                var m, _, v, R;
                (o("MAWDexieTable").setDexiePSDItem("transactionRequested", I),
                  o("MAWDexieTable").setDexiePSDItem("transactorName", t),
                  o("MAWDexieTable").setDexiePSDItem(
                    "threadsAccessMode",
                    (m = e.threads) != null ? m : null,
                  ),
                  o("MAWDexieTable").setDexiePSDItem(
                    "ephemeralSettingsAccessMode",
                    (_ = e.ephemeralSettings) != null ? _ : null,
                  ),
                  o("MAWDexieTable").setDexiePSDItem(
                    "groupInfoAccessMode",
                    (v = e.groupInfo) != null ? v : null,
                  ),
                  o("MAWDexieTable").setDexiePSDItem(
                    "participantsAccessMode",
                    (R = e.participants) != null ? R : null,
                  ),
                  S == null || S.addPoint("dexie_transaction_start"),
                  (f += 1));
                var E = f;
                g.set(E, t);
                var k =
                  S != null
                    ? n.stores[l[0]].get("").then(function () {
                        (S == null || S.addPoint("lock_wait_end"),
                          S == null || S.addPoint("transaction_opened"),
                          S == null ||
                            S.addPoint("transactor_execution_start"));
                      })
                    : o("MAWDexieTable").dexieResolve();
                return k
                  .then(function () {
                    return a(n.stores).apply(void 0, b);
                  })
                  .then(function (e) {
                    if (
                      r("gkx")("6795") &&
                      (i == null ? void 0 : i.explicitlyCloseTxn) === !0
                    ) {
                      var n;
                      (n = r("MAWDexie").currentTransaction) == null ||
                        (n = n.idbtrans) == null ||
                        n.commit == null ||
                        n.commit();
                    }
                    (g.delete(E),
                      S == null || S.addPoint("transactor_execution_end"),
                      S == null || S.endSuccess(),
                      L());
                    var a = (u || (u = r("performance"))).now() - h;
                    return (
                      a > 5e3 &&
                        (o("WALogger").WARN(
                          s ||
                            (s = babelHelpers.taggedTemplateLiteralLoose([
                              "[Slow maw transaction] ",
                              " took ",
                              "ms to complete. Potentially waiting for locks on ",
                              "",
                            ])),
                          t,
                          a,
                          p.join(", "),
                        ),
                        d.mustfix(
                          "[Slow maw transaction] %s took long to complete. Potentially waiting for locks on $s",
                          t,
                          p.join(", "),
                        )),
                      e
                    );
                  })
                  .catch(function (e) {
                    (g.delete(E),
                      o("WAExceededStorageQuota").checkQuotaExceededError(e));
                    var n =
                        e instanceof Error && e.name === "AbortError"
                          ? e
                          : null,
                      a = n != null ? n.inner : null,
                      i = y(a);
                    if (
                      (S == null ||
                        S.markError(
                          "transaction_error",
                          null,
                          r("getErrorSafe")(e),
                        ),
                      e instanceof Error)
                    ) {
                      var l = e,
                        s =
                          typeof (l == null ? void 0 : l.stack) == "string"
                            ? l.stack
                            : typeof (l == null ? void 0 : l.stack),
                        u =
                          typeof (l == null ? void 0 : l.message) == "string"
                            ? l.message
                            : typeof (l == null ? void 0 : l.message);
                      S == null ||
                        S.addAnnotations({
                          string: { errMessage: u, errStack: s, innerError: i },
                        });
                    }
                    (S == null || S.endFail("transaction_fail"), L());
                    var d = o("MAWErrorObject").getErrorObject(e);
                    throw C(d).mustfixThrow(
                      "[%s] Error performing %s transaction. Inner error: %s",
                      c.join("|"),
                      t != null ? t : "",
                      i != null ? i : "unknown",
                    );
                  });
              })
            );
          })
          .catch(function (e) {
            (o("WAExceededStorageQuota").checkQuotaExceededError(e),
              S == null || S.endFail("transaction_fail"),
              L());
            var n = o("MAWErrorObject").getErrorObject(e);
            throw C(n).mustfixThrow(
              "[%s] Error performing %s transaction",
              c.join("|"),
              t != null ? t : "",
            );
          });
      };
    }
    function y(e) {
      if (typeof e == "string") return e;
      if (e instanceof Error) return e.name + ": " + e.message;
      if (typeof e == "object")
        try {
          return JSON.stringify(e);
        } catch (e) {}
      return null;
    }
    function C(e) {
      return e ? d.catching(e) : d;
    }
    l.makeMsgrTransactor = _;
  },
  98,
);
