__d(
  "WAWebClearDanglingReceipts",
  [
    "Promise",
    "WAAbortError",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebCommsSendPing",
    "WAWebNetworkStatus",
    "WAWebOfflineResumePreAckHandler",
    "WAWebSchemaDanglingReceipt",
    "WAWebSendReceiptJobCommon",
    "WAWebWamOfflineResumeReporter",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g;
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          if (
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "sendAndClearDanglingReceipts: get ",
                  " danglingRecords",
                ])),
              t.length,
            ),
            r.aborted)
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
          var a = new Map(),
            i = [],
            l = 0;
          t.forEach(function (e) {
            l += e.receipts.length;
            var t = e.acks,
              n = e.receipts;
            (n.forEach(function (e) {
              var t = o("WAWebWidFactory").createWid(e.from),
                n = o("WAWebWidFactory").createWid(e.author),
                r = a.get(t);
              r || ((r = new Map()), a.set(t, r));
              var i = r.get(n);
              (i || ((i = []), r.set(n, i)), i.push(e.externalId));
            }),
              (i = i.concat(t)));
          });
          var p = String(o("WATimeUtils").unixTime()),
            _ = Array.from(a.keys()).map(function (e) {
              var t = a.get(e);
              if (t)
                return o("WAWebSendReceiptJobCommon").sendAggregateReceipts({
                  to: e,
                  type: o("WAWebSendReceiptJobCommon").RECEIPT_TYPE.DELIVERY,
                  t: p,
                  groupedReceipt: t,
                });
            }),
            f = i.map(function (e) {
              return o("WAWebOfflineResumePreAckHandler").sendOfflinePreAck(e);
            });
          (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "sendAndClearDanglingReceipts: sending ",
                " rcpts, ",
                " preAcks",
              ])),
            _.length,
            f.length,
          ),
            yield (g || (g = n("Promise"))).all(_),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "sendAndClearDanglingReceipts: complete sending ",
                  " receipts",
                ])),
              _.length,
            ),
            yield g.all(f),
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "sendAndClearDanglingReceipts: complete sending  ",
                  " preAcks",
                ])),
              f.length,
            ),
            yield C(),
            o(
              "WAWebWamOfflineResumeReporter",
            ).OfflineResumeReporter.logOfflinePreackCount(l),
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "sendAndClearDanglingReceipts: complete",
                ])),
            ));
        })),
        y.apply(this, arguments)
      );
    }
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
          var e = yield o("WAWebCommsSendPing").blockSendPing();
          (e ||
            !o("WAWebABProps").getABPropConfigValue(
              "web_offline_resume_wait_for_ping_response_enabled",
            )) &&
            (o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[offline-resume] clearDanglingReceipts: clearing",
                ])),
            ),
            yield o("WAWebSchemaDanglingReceipt").getTable().clear());
        })),
        b.apply(this, arguments)
      );
    }
    ((l.sendAndClearDanglingReceipts = h), (l.clearDanglingReceipts = C));
  },
  98,
);
