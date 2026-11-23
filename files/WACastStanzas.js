__d(
  "WACastStanzas",
  [
    "WAArrayUtils",
    "WAComms",
    "WADanglingQueue",
    "WAGlobals",
    "WALogger",
    "WAOfflineUtils",
    "WAPassiveMode",
    "WASendAggregatedDeliveryReceiptProtocol",
    "WAStanzaUtils",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(e, t) {
      var n;
      ((n = o("WAComms").getComms()) == null ? void 0 : n.socketId) === t &&
        o("WAComms").castSmaxStanza(e);
    }
    function d(t, n) {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "Passive: cast stanzas ",
            ", ",
            "",
          ])),
        t.length,
        n,
      );
      var r = [],
        a = [],
        i = [];
      (t.forEach(function (e) {
        var t = e.response,
          n = e.socketId;
        if (!(t === "NO_ACK" || t === "CLOSE_SOCKET")) {
          if (t.tag === "ack") {
            r.push({ node: t, socketId: n });
            return;
          }
          if (t.tag === "receipt") {
            if (t.attrs.type === "retry") {
              a.push({ node: t, socketId: n });
              return;
            }
            if (
              t.attrs.type === "delivery" ||
              t.attrs.type === "sender" ||
              t.attrs.type == null
            ) {
              i.push({ node: t, socketId: n });
              return;
            }
          }
          r.push({ node: t, socketId: n });
        }
      }),
        r.forEach(function (e) {
          var t = e.node,
            r = e.socketId;
          (n.store &&
            o("WADanglingQueue").danglingQueueAdd({
              node: o("WAWap").encodeStanza(t),
            }),
            n.send && c(t, r));
        }));
      try {
        (h(a, n), g(i, n));
      } catch (e) {
        o("WALogger").ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "Failed to cast stanzas: ",
              "",
            ])),
          String(e),
        );
      } finally {
        n.store &&
          o("WADanglingQueue")
            .danglingQueueCommit()
            .catch(function (e) {
              o("WALogger").ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Dangling Queue: ",
                    "",
                  ])),
                String(e),
              );
            });
      }
    }
    function m(e) {
      return e.map(function (e) {
        var t = e.node,
          n = e.socketId;
        return {
          stanzaId: o("WAStanzaUtils").toStanzaId("" + t.attrs.id),
          to: "" + t.attrs.to,
          participant: t.attrs.participant
            ? "" + t.attrs.participant
            : "" + t.attrs.to,
          socketId: n,
        };
      });
    }
    function p(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          var n = t.get(e.socketId);
          n || ((n = new Map()), t.set(e.socketId, n));
          var r = n.get(e.to);
          r || ((r = new Map()), n.set(e.to, r));
          var o = r.get(e.participant);
          (o || ((o = []), r.set(e.participant, o)), o.push([e.stanzaId]));
        }),
        t
      );
    }
    var _ = 255;
    function f(e, t) {
      var n = p(m(e));
      n.forEach(function (e, n) {
        e.forEach(function (e, r) {
          e.forEach(function (e, a) {
            var i = function () {
              var e = [];
              l.forEach(function (t) {
                var n = t[0];
                e.push(n);
              });
              var i = o(
                "WASendAggregatedDeliveryReceiptProtocol",
              ).makeAggregatedDeliveryReceipts({
                from: a,
                chat: r,
                stanzaIdList: e,
              });
              (t.store &&
                o("WADanglingQueue").danglingQueueAdd({
                  node: o("WAWap").encodeStanza(i),
                }),
                t.send && c(i, n));
            };
            for (var l of o("WAArrayUtils").peekEvery(e, _)) i();
          });
        });
      });
    }
    function g(e, t) {
      if (e.length !== 0) {
        if (e.length > 1) return f(e, t);
        (t.store &&
          o("WADanglingQueue").danglingQueueAdd({
            node: o("WAWap").encodeStanza(e[0].node),
          }),
          t.send &&
            e.forEach(function (e) {
              var t = e.node,
                n = e.socketId;
              c(t, n);
            }));
      }
    }
    function h(e, t) {
      (t.store &&
        e.forEach(function (e) {
          var t = e.node;
          o("WADanglingQueue").danglingQueueAdd({
            node: o("WAWap").encodeStanza(t),
          });
        }),
        t.send &&
          e.map(function (e) {
            var t = e.node,
              n = e.socketId;
            c(t, n);
          }));
    }
    async function y() {
      var e = await o("WADanglingQueue").danglingQueueRead();
      (o("WAPassiveMode").passiveModeNotifier.publish({
        type: "passive-mode-start",
        count: e.length,
      }),
        await Promise.allSettled(
          e.map(async function (e) {
            var t = await o("WAWap").decodeStanza(e.node, function (e) {
              return Promise.resolve(e);
            });
            return o("WAComms").castSmaxStanza(t);
          }),
        ).then(function () {}),
        await o("WADanglingQueue").danglingQueueClear());
    }
    async function C(e, t) {
      await d(e, {
        send: !0,
        store:
          o("WAGlobals").getConfig().waDanglingQueue() &&
          t === o("WAOfflineUtils").ServerRPCMode.OFFLINE_RESUME,
      });
    }
    ((l.castDanglingStanzas = y), (l.castStanzasToServer = C));
  },
  98,
);
