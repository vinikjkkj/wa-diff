__d(
  "WAWebUpdateMsgAcksAction",
  [
    "Promise",
    "WALogger",
    "WAWebAckMsgAction",
    "WAWebHandleMsgReceiptCommon",
    "WAWebMsgCollection",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = [];
          (e.forEach(
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var n = yield p(e);
                  n &&
                    a.push(
                      o("WAWebAckMsgAction").updateMsgAck(e, n, {
                        from: n.from,
                        to: n.to,
                        ack: t,
                        t: r,
                      }),
                    );
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          ),
            yield (s || (s = n("Promise"))).all(a));
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
          var i = [],
            l = [],
            u = 0,
            c = [];
          (t.forEach(
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = yield p(e);
                  t
                    ? l.push(
                        o("WAWebAckMsgAction").updateMsgAck(e, t, {
                          from: t.from,
                          to: t.to,
                          ack: r,
                          t: a,
                        }),
                      )
                    : (u++, c.length < 3 && c.push(e), e.fromMe || i.push(e));
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          ),
            u > 0 &&
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[updateMsgPeerAcks] no msg for ack, count=",
                    ", keys=",
                    "",
                  ])),
                u,
                c,
              ),
            i.length > 0 &&
              o("WAWebHandleMsgReceiptCommon").updateOrphanPeerReceipt(i, r, a),
            yield (s || (s = n("Promise"))).all(l));
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          return (t = o("WAWebMsgCollection").MsgCollection.get(e)) != null
            ? t
            : o("WAWebMsgCollection").MsgCollection.getByEditMsgKey(e);
        })),
        _.apply(this, arguments)
      );
    }
    ((l.updateMsgOtherAcks = u), (l.updateMsgPeerAcks = d));
  },
  98,
);
