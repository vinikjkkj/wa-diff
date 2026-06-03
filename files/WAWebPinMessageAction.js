__d(
  "WAWebPinMessageAction",
  [
    "WALogger",
    "WANullthrows",
    "WAWebDeleteExpiredPinsJob",
    "WAWebMsgGetters",
    "WAWebPinInChatCollection",
    "WAWebPinMsgConstants",
    "WAWebPinMsgGatingUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return e ===
        o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type.PIN_FOR_ALL
        ? o("WAWebPinMsgConstants").PIN_STATE.PIN
        : e ===
            o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type
              .UNPIN_FOR_ALL
          ? o("WAWebPinMsgConstants").PIN_STATE.UNPIN
          : o("WAWebPinMsgConstants").PIN_STATE.INVALID;
    }
    function c(e) {
      var t = r("WANullthrows")(o("WAWebMsgGetters").getSender(e)),
        n = {
          msgKey: e.id,
          parentMsgKey: r("WANullthrows")(e.pinParentKey),
          senderTimestampMs: r("WANullthrows")(e.pinSenderTimestampMs),
          sender: o("WAWebWidFactory").asUserWidOrThrow(t),
          pinType: u(e.pinMessageType),
          pinExpiryDuration: e.pinExpiryDuration,
          t: e.t,
          chatId: o("WAWebWidFactory").asChatWid(e.id.remote),
          ack: e.ack,
          read: o("WAWebUserPrefsMeUser").isMeAccount(t),
        };
      return n;
    }
    function d(e, t) {
      var n = new Map(),
        r = [];
      for (var a of e) {
        var i = c(a);
        if (i != null) {
          r.push(i);
          var l = i.msgKey.remote;
          n.has(l.toString()) ||
            n.set(l.toString(), o("WAWebWidFactory").asChatWid(l));
        }
      }
      var s = r.map(function (e) {
        return babelHelpers.extends(
          { id: o("WAWebPinInChatCollection").getPinInChatId(e.parentMsgKey) },
          e,
        );
      });
      o("WAWebPinInChatCollection").PinInChatCollection.add(s, { merge: !0 });
      var u = [];
      for (var d of t) {
        var m = o("WAWebPinInChatCollection").PinInChatCollection.getByMsgKey(
          d,
        );
        if (m != null) {
          u.push(m.parentMsgKey);
          var p = m.msgKey.remote;
          n.has(p.toString()) ||
            n.set(p.toString(), o("WAWebWidFactory").asChatWid(p));
        }
      }
      u.length &&
        o("WAWebPinInChatCollection").PinInChatCollection.remove(
          u.map(o("WAWebPinInChatCollection").getPinInChatId),
        );
      for (var _ of n.values())
        o("WAWebPinInChatCollection")
          .PinInChatCollection.byChatId(_)
          .filter(function (e) {
            return e.pinType === o("WAWebPinMsgConstants").PIN_STATE.PIN;
          })
          .sort(function (e, t) {
            return t.senderTimestampMs - e.senderTimestampMs;
          })
          .slice(o("WAWebPinMsgGatingUtils").getMaxPins())
          .forEach(function (e) {
            e.pinType = o("WAWebPinMsgConstants").PIN_STATE.UNPIN;
          });
      return r;
    }
    function m(e) {
      var t = [],
        n = [];
      for (var r of e)
        o("WAWebPinInChatCollection").isPinExpired(r)
          ? n.push(r.parentMsgKey)
          : t.push(r);
      return { validPins: t, expiredPinParentKeys: n };
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = m(t),
            r = n.expiredPinParentKeys,
            a = n.validPins;
          if (r.length > 0)
            try {
              (yield o("WAWebDeleteExpiredPinsJob").deleteExpiredPins(
                r.map(function (e) {
                  return e.toString();
                }),
              ),
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "deleteExpiredPins Success",
                    ])),
                ),
                r.forEach(function (e) {
                  return o(
                    "WAWebPinInChatCollection",
                  ).PinInChatCollection.deleteByParentMessageKey(e);
                }));
            } catch (e) {
              o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "deleteExpiredPins: error deleting expired pins from DB: ",
                    "",
                  ])),
                e,
              );
            }
          return a;
        })),
        _.apply(this, arguments)
      );
    }
    ((l.craftPinMessage = c),
      (l.updatePinCollection = d),
      (l.checkPinExpiration = m),
      (l.seekAndDestroyExpiredPins = p));
  },
  98,
);
