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
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 4;
    async function u() {
      var t = await o("WAWebSavedPromotionsStore").loadSavedPromotions();
      if (t == null) return null;
      var n;
      try {
        n = await _(
          t
            .map(function (e) {
              return e.messageKey;
            })
            .filter(function (e) {
              return p(e) != null;
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
      var r = d(t, n),
        a = r.live,
        i = r.prunedKeys;
      return (
        i.length > 0 && o("WAWebSavedPromotionsStore").removeSavedPromotions(i),
        a
      );
    }
    function c(e) {
      return o("WAWebSavedPromotionsStore").removeSavedPromotions([e]);
    }
    function d(e, t) {
      var n = [],
        r = [];
      for (var a of e) {
        var i,
          l = a.messageKey,
          s = a.savedAtMs,
          u = m(l);
        if (u != null) {
          if (!u.remote.isUser()) {
            r.push(l);
            continue;
          }
          var c = t.get(l);
          if (c != null) {
            var d = c.msgKey.remote,
              p = o("WAWebPromotionOffer").getPromotionOfferFor(c.values);
            if (!d.isUser() || p == null) {
              r.push(l);
              continue;
            }
            o("WAWebAddPromotionToPaymentsAction").isLiveOffer(
              c.values,
              c.receivedAtS,
            ) &&
              n.push({
                messageKey: l,
                msgKey: c.msgKey,
                businessWid: d,
                kind: p.kind,
                expiryMs:
                  (i = p.expiryMs) != null
                    ? i
                    : (c.receivedAtS +
                        o("WAWebAddPromotionToPaymentsAction")
                          .OPEN_ENDED_OFFER_WINDOW_S) *
                      1e3,
                savedAtMs: s,
              });
          }
        }
      }
      n.sort(function (e, t) {
        return t.savedAtMs - e.savedAtMs;
      });
      var _ = new Set(),
        f = n.filter(function (e) {
          var t = e.msgKey.toString();
          return _.has(t) ? (r.push(e.messageKey), !1) : (_.add(t), !0);
        });
      return { live: f, prunedKeys: r };
    }
    function m(e) {
      try {
        return r("WAWebMsgKey").fromString(e);
      } catch (e) {
        return null;
      }
    }
    function p(e) {
      var t = m(e);
      return (t == null ? void 0 : t.remote.isUser()) === !0 ? t : null;
    }
    async function _(e) {
      var t = new Map();
      await f(
        t,
        e.map(function (e) {
          return [e, e];
        }),
      );
      var n = [];
      for (var r of e) {
        var a = t.has(r) ? null : p(r),
          i =
            a != null
              ? o("WAWebLidMigrationUtils").getAlternateMsgKey(a)
              : null;
        i != null && n.push([r, i.toString()]);
      }
      return (await f(t, n), t);
    }
    async function f(e, t) {
      var n = [];
      for (var r of t) {
        var a = r[0],
          i = r[1],
          l = o("WAWebMsgCollection").MsgCollection.get(i);
        l != null && !l.fromQuotedMsg ? e.set(a, g(l)) : n.push([a, i]);
      }
      if (n.length !== 0) {
        var s = await o("WAWebMsgCollection").MsgCollection.getMessagesById(
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
            _ != null && e.set(m, g(_));
          }
        }
      }
    }
    function g(e) {
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
      (l.unsaveSavedPromotion = c),
      (l.resolveSavedPromotions = d));
  },
  98,
);
