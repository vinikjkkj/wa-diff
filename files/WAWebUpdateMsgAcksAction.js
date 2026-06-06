__d(
  "WAWebUpdateMsgAcksAction",
  [
    "WALogger",
    "WAWebAckMsgAction",
    "WAWebHandleMsgReceiptCommon",
    "WAWebMsgCollection",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(e, t, n) {
      var r = [];
      (e.forEach(async function (e) {
        var a = await c(e);
        a &&
          r.push(
            o("WAWebAckMsgAction").updateMsgAck(e, a, {
              from: a.from,
              to: a.to,
              ack: t,
              t: n,
            }),
          );
      }),
        await Promise.all(r));
    }
    async function u(t, n, r) {
      var a = [],
        i = [],
        l = 0,
        s = [];
      (t.forEach(async function (e) {
        var t = await c(e);
        t
          ? i.push(
              o("WAWebAckMsgAction").updateMsgAck(e, t, {
                from: t.from,
                to: t.to,
                ack: n,
                t: r,
              }),
            )
          : (l++, s.length < 3 && s.push(e), e.fromMe || a.push(e));
      }),
        l > 0 &&
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[updateMsgPeerAcks] no msg for ack, count=",
                ", keys=",
                "",
              ])),
            l,
            s,
          ),
        a.length > 0 &&
          o("WAWebHandleMsgReceiptCommon").updateOrphanPeerReceipt(a, n, r),
        await Promise.all(i));
    }
    async function c(e) {
      var t;
      return (t = o("WAWebMsgCollection").MsgCollection.get(e)) != null
        ? t
        : o("WAWebMsgCollection").MsgCollection.getByEditMsgKey(e);
    }
    ((l.updateMsgOtherAcks = s), (l.updateMsgPeerAcks = u));
  },
  98,
);
