__d(
  "WAWebSavedPromotions",
  [
    "WALogger",
    "WAWebAddPromotionToPaymentsAction",
    "WAWebLidMigrationUtils",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebPromotionOffer",
    "WAWebSavedPromotionsStore",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 4;
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield o("WAWebSavedPromotionsStore").loadSavedPromotions();
          if (t == null) return null;
          var n;
          try {
            n = yield f(
              t
                .map(function (e) {
                  return e.messageKey;
                })
                .filter(function (e) {
                  return _(e) != null;
                }),
            );
          } catch (t) {
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[SAVED_PROMOTIONS] saved offers' messages not read",
                    ])),
                )
                .sendLogs("saved-promotions-messages-read-failed"),
              null
            );
          }
          var r = m(t, n),
            a = r.live,
            i = r.prunedKeys;
          return (
            i.length > 0 &&
              o("WAWebSavedPromotionsStore").removeSavedPromotions(i),
            a
          );
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return o("WAWebSavedPromotionsStore").removeSavedPromotions([e]);
    }
    function m(e, t) {
      var n = [],
        r = [];
      for (var a of e) {
        var i = a.messageKey,
          l = a.savedAtMs,
          s = p(i);
        if (s != null) {
          if (!s.remote.isUser()) {
            r.push(i);
            continue;
          }
          var u = t.get(i);
          if (u != null) {
            var c = u.msgKey.remote,
              d = o("WAWebPromotionOffer").getPromotionOfferFor(u.values);
            if (!c.isUser() || d == null) {
              r.push(i);
              continue;
            }
            o("WAWebAddPromotionToPaymentsAction").isLiveOffer(
              u.values,
              u.receivedAtS,
            ) &&
              n.push({
                messageKey: i,
                msgKey: u.msgKey,
                businessWid: c,
                kind: d.kind,
                expiryMs: d.expiryMs,
                savedAtMs: l,
              });
          }
        }
      }
      n.sort(function (e, t) {
        return t.savedAtMs - e.savedAtMs;
      });
      var m = new Set(),
        _ = n.filter(function (e) {
          var t = e.msgKey.toString();
          return m.has(t) ? (r.push(e.messageKey), !1) : (m.add(t), !0);
        });
      return { live: _, prunedKeys: r };
    }
    function p(e) {
      try {
        return r("WAWebMsgKey").fromString(e);
      } catch (e) {
        return null;
      }
    }
    function _(e) {
      var t = p(e);
      return (t == null ? void 0 : t.remote.isUser()) === !0 ? t : null;
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new Map();
          yield h(
            t,
            e.map(function (e) {
              return [e, e];
            }),
          );
          var n = [];
          for (var r of e) {
            var a = t.has(r) ? null : _(r),
              i =
                a != null
                  ? o("WAWebLidMigrationUtils").getAlternateMsgKey(a)
                  : null;
            i != null && n.push([r, i.toString()]);
          }
          return (yield h(t, n), t);
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = [];
          for (var r of t) {
            var a = r[0],
              i = r[1],
              l = o("WAWebMsgCollection").MsgCollection.get(i);
            l != null && !l.fromQuotedMsg ? e.set(a, C(l)) : n.push([a, i]);
          }
          if (n.length !== 0) {
            var s = yield o("WAWebMsgCollection").MsgCollection.getMessagesById(
                n.map(function (e) {
                  var t = e[1];
                  return t;
                }),
              ),
              u = s.messages,
              c = new Map(
                u.map(function (e) {
                  return [e.id.toString(), e];
                }),
              );
            for (var d of n) {
              var m = d[0],
                p = d[1];
              {
                var _ = c.get(p);
                _ != null && e.set(m, C(_));
              }
            }
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return {
        msgKey: e.id,
        values: {
          caption: null,
          fromMe: e.id.fromMe,
          interactivePayload: e.interactivePayload,
          interactiveType: e.interactiveType,
          isCarouselCard: e.isCarouselCard,
          isFromTemplate: e.isFromTemplate,
          nativeFlowName: e.nativeFlowName,
          type: e.type,
        },
        receivedAtS: e.t,
      };
    }
    ((l.PROMOTIONS_SEE_ALL_MIN_COUNT = s),
      (l.loadLiveSavedPromotions = u),
      (l.unsaveSavedPromotion = d),
      (l.resolveSavedPromotions = m));
  },
  98,
);
