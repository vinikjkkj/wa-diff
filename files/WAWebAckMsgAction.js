__d(
  "WAWebAckMsgAction",
  [
    "WALogger",
    "WAWebAck",
    "WAWebBackendApi",
    "WAWebMessageReceiptBatcher",
    "WAWebMsgCollection",
    "WAWebMsgInfoCollection",
    "WAWebWid",
    "compactMap",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    async function p(e, t, n) {
      if (!(t.latestEditMsgKey && !t.latestEditMsgKey.equals(e))) {
        var a = n.ack,
          i = n.t,
          l = e.remote;
        (t.updateAck(a),
          r("WAWebWid").isUser(l) &&
            (await o("WAWebBackendApi").frontendSendAndReceive(
              "updateMsgInfo",
              { updates: [{ msgKey: t.id, ack: a, participant: l, ts: i }] },
            )));
      }
    }
    async function _(t) {
      await o("WAWebMessageReceiptBatcher").receiptBatcher.runActiveBatches();
      var n = [],
        a = 0,
        i = r("compactMap")(t, function (e) {
          var t,
            r =
              (t = o("WAWebMsgCollection").MsgCollection.get(e)) != null
                ? t
                : o("WAWebMsgCollection").MsgCollection.getByEditMsgKey(e);
          return r || (a++, n.length < 3 && n.push(e), null);
        });
      a > 0 &&
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "processOrphanReadReceipts: ",
              " skipped, msgIds: ",
              "",
            ])),
          a,
          n.map(function (e) {
            return String(e);
          }),
        );
      var l = await f(i);
      i.forEach(async function (e) {
        try {
          var t = l.get(e.id.toString());
          return !t || t.ack === e.ack ? void 0 : p(e.id, e, t);
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
      });
    }
    async function f(e) {
      var t = new Map();
      if (e.length === 1) {
        var n = await o("WAWebMsgInfoCollection").MsgInfoCollection.find(
          e[0].id,
        );
        t.set(e[0].id.toString(), n);
      } else
        t = await o(
          "WAWebMsgInfoCollection",
        ).MsgInfoCollection.findManyAndUpdate(
          e.map(function (e) {
            return e.id;
          }),
        );
      var r = new Map(),
        a = [],
        i = [],
        l = [],
        s = 0,
        u = 0,
        p = 0;
      return (
        await Promise.all(
          e.map(async function (e) {
            var n = t.get(e.id.toString());
            if (!n) return (s++, a.length < 3 && a.push(e.id), null);
            var c = null,
              d = null;
            if (
              (n.playedRemaining === 0 && n.played.length !== 0
                ? ((d = o("WAWebAck").ACK.PLAYED), (c = n.played))
                : n.readRemaining === 0 && n.read.length !== 0
                  ? ((d = o("WAWebAck").ACK.READ), (c = n.read))
                  : n.deliveryRemaining === 0 &&
                    n.delivery.length !== 0 &&
                    ((d = o("WAWebAck").ACK.RECEIVED), (c = n.delivery)),
              d == null || c == null)
            )
              return (u++, i.length < 3 && i.push(e.id), null);
            (p++,
              l.length < 3 && l.push(e.id),
              r.set(e.id.toString(), {
                ack: d,
                t: Math.max.apply(
                  Math,
                  c.map(function (e) {
                    return e.t;
                  }),
                ),
                to: e.to,
                from: e.from,
              }));
          }),
        ),
        s > 0 &&
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "getHighestAcks: no orphan ack found for ",
                " msgs => ",
                "",
              ])),
            s,
            a,
          ),
        u > 0 &&
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "getHighestAcks: orphan ack has 0 receipt for ",
                " msgs => ",
                "",
              ])),
            u,
            i,
          ),
        p > 0 &&
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "getHighestAcks: orphan ack found for ",
                " msgs => ",
                "",
              ])),
            p,
            l,
          ),
        r
      );
    }
    ((l.updateMsgAck = p), (l.processOrphanReadReceipts = _));
  },
  98,
);
