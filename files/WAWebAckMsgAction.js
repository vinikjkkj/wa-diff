__d(
  "WAWebAckMsgAction",
  [
    "Promise",
    "WALogger",
    "WAWebAck",
    "WAWebBackendApi",
    "WAWebMessageReceiptBatcher",
    "WAWebMsgCollection",
    "WAWebMsgInfoCollection",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "compactMap",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (!(t.latestEditMsgKey && !t.latestEditMsgKey.equals(e))) {
            var a = n.ack,
              i = n.t,
              l = e.remote;
            (t.updateAck(a),
              r("WAWebWid").isUser(l) &&
                (yield o("WAWebBackendApi").frontendSendAndReceive(
                  "updateMsgInfo",
                  {
                    updates: [{ msgKey: t.id, ack: a, participant: l, ts: i }],
                  },
                )));
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          yield o(
            "WAWebMessageReceiptBatcher",
          ).receiptBatcher.runActiveBatches();
          var a = [],
            i = 0,
            l = r("compactMap")(t, function (e) {
              var t,
                n =
                  (t = o("WAWebMsgCollection").MsgCollection.get(e)) != null
                    ? t
                    : o("WAWebMsgCollection").MsgCollection.getByEditMsgKey(e);
              return n || (i++, a.length < 3 && a.push(e), null);
            });
          i > 0 &&
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "processOrphanReadReceipts: ",
                  " skipped, msgIds: ",
                  "",
                ])),
              i,
              a.map(function (e) {
                return String(e);
              }),
            );
          var c = yield y(l);
          l.forEach(
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  try {
                    var t = c.get(e.id.toString());
                    return !t || t.ack === e.ack ? void 0 : _(e.id, e, t);
                  } catch (e) {
                    r("gkx")("26258")
                      ? o("WALogger").ERROR(
                          s ||
                            (s = babelHelpers.taggedTemplateLiteralLoose([
                              "Assertion failed: processOrphanReadReceipts failed!",
                            ])),
                        )
                      : o("WALogger")
                          .ERROR(
                            u ||
                              (u = babelHelpers.taggedTemplateLiteralLoose([
                                "Assertion failed!",
                              ])),
                          )
                          .sendLogs("processOrphanReadReceipts failed");
                  }
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new Map();
          if (e.length === 1) {
            var r = yield o("WAWebMsgInfoCollection").MsgInfoCollection.find(
              e[0].id,
            );
            t.set(e[0].id.toString(), r);
          } else
            t = yield o(
              "WAWebMsgInfoCollection",
            ).MsgInfoCollection.findManyAndUpdate(
              e.map(function (e) {
                return e.id;
              }),
            );
          var a = new Map(),
            i = [],
            l = [],
            s = [],
            u = 0,
            _ = 0,
            f = 0;
          return (
            yield (p || (p = n("Promise"))).all(
              e.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var n = t.get(e.id.toString());
                      if (!n) return (u++, i.length < 3 && i.push(e.id), null);
                      var r = null,
                        c = null;
                      if (
                        (n.playedRemaining === 0 && n.played.length !== 0
                          ? ((c = o("WAWebAck").ACK.PLAYED), (r = n.played))
                          : n.readRemaining === 0 && n.read.length !== 0
                            ? ((c = o("WAWebAck").ACK.READ), (r = n.read))
                            : n.deliveryRemaining === 0 &&
                              n.delivery.length !== 0 &&
                              ((c = o("WAWebAck").ACK.RECEIVED),
                              (r = n.delivery)),
                        c == null || r == null)
                      )
                        return (_++, l.length < 3 && l.push(e.id), null);
                      (f++,
                        s.length < 3 && s.push(e.id),
                        a.set(e.id.toString(), {
                          ack: c,
                          t: Math.max.apply(
                            Math,
                            r.map(function (e) {
                              return e.t;
                            }),
                          ),
                          to: e.to,
                          from: e.from,
                        }));
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ),
            u > 0 &&
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "getHighestAcks: no orphan ack found for ",
                    " msgs => ",
                    "",
                  ])),
                u,
                i,
              ),
            _ > 0 &&
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "getHighestAcks: orphan ack has 0 receipt for ",
                    " msgs => ",
                    "",
                  ])),
                _,
                l,
              ),
            f > 0 &&
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "getHighestAcks: orphan ack found for ",
                    " msgs => ",
                    "",
                  ])),
                f,
                s,
              ),
            a
          );
        })),
        C.apply(this, arguments)
      );
    }
    ((l.updateMsgAck = _), (l.processOrphanReadReceipts = g));
  },
  98,
);
