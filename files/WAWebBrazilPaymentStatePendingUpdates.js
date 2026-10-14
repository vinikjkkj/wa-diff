__d(
  "WAWebBrazilPaymentStatePendingUpdates",
  [
    "WATimeUtils",
    "WAWebBrazilPaymentStateUpdatePayload",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsKeys",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "uniqueBy",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 64,
      s = 10080 * 60 * 1e3;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = o("WATimeUtils").unixTimeMs(),
            a = r("uniqueBy")(
              t.flatMap(function (e) {
                var t = C(e, n);
                return t != null ? [t] : [];
              }),
              function (e) {
                var t = e.msgKey;
                return t;
              },
            );
          if (a.length !== 0) {
            var i = new Set(
              a.map(function (e) {
                var t = e.msgKey;
                return t;
              }),
            );
            yield f(function (t) {
              return []
                .concat(
                  t.filter(function (e) {
                    var t = e.msgKey;
                    return !i.has(t);
                  }),
                  a,
                )
                .slice(-e);
            });
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new Set(
            e.map(function (e) {
              return e.id.toString();
            }),
          );
          yield f(function (e) {
            var n = e.filter(function (e) {
              var n = e.msgKey;
              return !t.has(n);
            });
            return n.length === e.length ? e : n;
          });
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
          return (
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.init(),
            h()
              .filter(function (t) {
                var n = t.paymentMsgId;
                return e == null || e.has(n);
              })
              .map(b)
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.init();
          var t = h(),
            n = e(t);
          n !== t && (yield y(n));
        })),
        g.apply(this, arguments)
      );
    }
    function h() {
      var e,
        t = o("WATimeUtils").unixTimeMs() - s;
      return (
        (e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
          o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
            .BR_PAYMENT_STATE_PENDING_UPDATES,
        )) != null
          ? e
          : []
      ).filter(function (e) {
        var n = e.savedAtMs;
        return n > t;
      });
    }
    function y(e) {
      return e.length === 0
        ? o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
              .BR_PAYMENT_STATE_PENDING_UPDATES,
          )
        : o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            o("WAWebUserPrefsKeys").BACKEND_ONLY_KEYS
              .BR_PAYMENT_STATE_PENDING_UPDATES,
            [].concat(e),
          );
    }
    function C(e, t) {
      var n,
        r,
        a = o(
          "WAWebBrazilPaymentStateUpdatePayload",
        ).getBrazilPaymentStateUpdate(e),
        i =
          (n = e.interactivePayload) == null ||
          (n = n.buttons) == null ||
          (n = n[0]) == null
            ? void 0
            : n.buttonParamsJson;
      return a == null || i == null
        ? null
        : {
            from: e.from.toString(),
            fromMe: e.id.fromMe,
            id: e.id.id,
            msgKey: e.id.toString(),
            paramsJson: i,
            participant: (r = e.id.participant) == null ? void 0 : r.toString(),
            paymentMsgId: a.paymentMsgId,
            remote: e.id.remote.toString(),
            savedAtMs: t,
            t: e.t,
            to: e.to.toString(),
          };
    }
    function b(e) {
      var t = e.from,
        n = e.fromMe,
        a = e.id,
        i = e.paramsJson,
        l = e.participant,
        s = e.remote,
        u = e.t,
        c = e.to;
      return {
        id: new (r("WAWebMsgKey"))({
          fromMe: n,
          remote: o("WAWebWidFactory").createWid(s),
          id: a,
          participant: l != null ? o("WAWebWidFactory").createWid(l) : void 0,
        }),
        from: o("WAWebWidFactory").createWid(t),
        to: o("WAWebWidFactory").createWid(c),
        t: u,
        viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
        type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
        kind: o("WAWebMsgType").MsgKind.Interactive,
        interactiveType: r("WAWebInteractiveMessageType").NATIVE_FLOW,
        nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName")
          .BR_PAYMENT_STATE,
        interactivePayload: {
          buttons: [
            {
              name: r("WAWebInteractiveMessagesNativeFlowName")
                .BR_PAYMENT_STATE,
              buttonParamsJson: i,
            },
          ],
          messageVersion: 1,
        },
      };
    }
    ((l.MAX_PENDING_UPDATES = e),
      (l.PENDING_UPDATE_TTL_MS = s),
      (l.savePendingBrazilPaymentStateUpdates = u),
      (l.removePendingBrazilPaymentStateUpdates = d),
      (l.getPendingBrazilPaymentStateUpdateMsgs = p));
  },
  98,
);
