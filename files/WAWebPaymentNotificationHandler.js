__d(
  "WAWebPaymentNotificationHandler",
  [
    "WALogger",
    "WATimeUtils",
    "WAWap",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebDBMsgUtils",
    "WAWebDBProcessMessage",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebLidMigrationUtils",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebPaymentNotificationParser",
    "WAWebPaymentStatusUtils",
    "WAWebPaymentsODS",
    "WAWebSchemaOrphanPaymentNotification",
    "WAWebStateUtils",
    "WAWebUserUtils",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
    "justknobx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 30 * o("WATimeUtils").DAY_SECONDS,
      m = 64;
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = o(
            "WAWebPaymentNotificationParser",
          ).paymentNotificationParser.parse(t);
          if (n.error != null)
            throw (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "handlePaymentNotification: failed: ",
                    "",
                  ])),
                n.error,
              ),
              n.error
            );
          var r = n.success,
            a = r.dehydratedTransaction,
            i = r.invite,
            l = r.transaction;
          return (
            a &&
              o(
                "WAWebPaymentsODS",
              ).logDehydratedTransactionNotificationSkipped(),
            i != null ? yield h(i) : l != null && (yield f(l)),
            x(n.success)
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
          var t = r("nullthrows")(e.msgKey),
            n = o("WAWebLidMigrationUtils").getAlternateMsgKey(t),
            a = $(t, n),
            i = a ? o("WAWebStateUtils").unproxy(a) : yield P(t, n);
          if (!i) {
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "handlePaymentTransactionNotification: no msg found for id: ",
                  "",
                ])),
              t,
            );
            var l = babelHelpers.extends({}, e, { msgKey: t.toString() });
            yield o("WAWebSchemaOrphanPaymentNotification")
              .getTable()
              .createOrReplace(l);
            return;
          }
          yield C(i, e);
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.type === "account-set-up") {
            var t = yield T(e.from, e.timestamp);
            yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
              chatId: t.from,
              newMsg: t,
              handleSingleMsgOrigin: "handlePaymentInviteNotification",
            });
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = [];
          (v(e, t), n.push(e.id.toString()));
          var r = [e instanceof o("WAWebMsgModel").Msg ? e.toJSON() : e];
          if (e.paymentRequestMessageKey != null) {
            var a = e.paymentRequestMessageKey,
              i = o("WAWebLidMigrationUtils").getAlternateMsgKey(a),
              l = $(a, i),
              s = l ? o("WAWebStateUtils").unproxy(l) : yield P(a, i);
            s &&
              ((s.paymentStatus = e.paymentStatus),
              (s.paymentTxnStatus = o(
                "WAWebPaymentStatusUtils",
              ).determinePaymentRequestFulfilledStatus(e.paymentTxnStatus)),
              r.push(s instanceof o("WAWebMsgModel").Msg ? s.toJSON() : s));
          }
          (o("WAWebSchemaOrphanPaymentNotification")
            .getTable()
            .bulkRemove(n)
            .catch(function (e) {
              o("WALogger").ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "getOrphanPaymentNotificationTable.bulkRemove fail: ",
                    " err: ",
                    "",
                  ])),
                n,
                e,
              );
            }),
            yield o("WAWebDBProcessMessage").updateExistingMessages(r));
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      t &&
        (t.status != null &&
          ((e.paymentStatus = o("WAWebPaymentStatusUtils").getPaymentWebStatus(
            t.status,
            t.type,
          )),
          (e.paymentTxnStatus = o(
            "WAWebPaymentStatusUtils",
          ).getPaymentTxnWebStatus(t.status))),
        (e.paymentCurrency = t.currency || ""),
        (e.paymentAmount1000 = r("nullthrows")(t.amount1000)),
        (e.paymentMessageReceiverJid = t.receiver),
        (e.paymentTransactionTimestamp = r("nullthrows")(t.ts)));
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.map(function (e) {
              return e.id.toString();
            }),
            n = yield o("WAWebSchemaOrphanPaymentNotification")
              .getTable()
              .bulkGet(t),
            a = new Map();
          (e.forEach(function (e) {
            a.set(e.id.toString(), e);
          }),
            n.forEach(function (e) {
              if (e) {
                var t = a.get(e.msgKey);
                if (!t) return;
                C(t, {
                  receiver: e.receiver,
                  currency: e.currency,
                  amount1000: e.amount1000,
                  type: e.type,
                  status: e.status,
                  ts: e.ts,
                  msgKey: r("WAWebMsgKey").fromString(e.msgKey),
                });
              }
            }));
        })),
        R.apply(this, arguments)
      );
    }
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield k(
              yield o("WAWebSchemaOrphanPaymentNotification").getTable().all(),
            ),
            t = new Map(),
            n = [];
          if (
            (e.forEach(function (e) {
              var a = e.msgKey,
                i = o("WAWebMsgCollection").MsgCollection.get(a);
              if (i == null) {
                var l = o("WAWebLidMigrationUtils").getAlternateMsgKey(
                  r("WAWebMsgKey").fromString(a),
                );
                l != null &&
                  ((a = l.toString()),
                  (i = o("WAWebMsgCollection").MsgCollection.get(l)));
              }
              i
                ? C(i, {
                    receiver: e.receiver,
                    currency: e.currency,
                    amount1000: e.amount1000,
                    type: e.type,
                    status: e.status,
                    ts: e.ts,
                    msgKey: r("WAWebMsgKey").fromString(a),
                  })
                : (t.set(a, e), n.push(a));
            }),
            n.length > 0)
          ) {
            var a = yield o("WAWebDBMsgUtils").getMsgsByMsgKey(n, function (e) {
              var n = t.get(e.id.toString());
              n &&
                ((e.paymentTxnStatus = o(
                  "WAWebPaymentStatusUtils",
                ).getPaymentTxnWebStatus(n.status)),
                (e.paymentCurrency = n.currency || ""),
                (e.paymentAmount1000 = r("nullthrows")(n.amount1000)),
                (e.paymentMessageReceiverJid = n.receiver),
                (e.paymentTransactionTimestamp = r("nullthrows")(n.ts)));
            });
            return o("WAWebDBProcessMessage").updateExistingMessages(a);
          }
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length === 0 || !r("justknobx")._("7297")) return e;
          var t = o("WATimeUtils").unixTime() - d,
            n = e.filter(function (e) {
              var n = e.ts;
              return n >= t;
            }),
            a = n
              .sort(function (e, t) {
                return t.ts - e.ts;
              })
              .slice(0, m);
          if (a.length === e.length) return e;
          var i = new Set(
              a.map(function (e) {
                var t = e.msgKey;
                return t;
              }),
            ),
            l = e
              .map(function (e) {
                var t = e.msgKey;
                return t;
              })
              .filter(function (e) {
                return !i.has(e);
              });
          try {
            (yield o("WAWebSchemaOrphanPaymentNotification")
              .getTable()
              .bulkRemove(l),
              o("WAWebPaymentsODS").logOrphanPaymentNotificationsEvicted({
                expired: e.length - n.length,
                overCap: n.length - a.length,
              }));
          } catch (e) {
            o("WALogger").ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "evictStaleOrphanPaymentNotifications bulkRemove fail: ",
                  " err: ",
                  "",
                ])),
              l.length,
              e,
            );
          }
          return a;
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return {
            id: new (r("WAWebMsgKey"))({
              remote: e,
              fromMe: !1,
              id: yield r("WAWebMsgKey").newId(),
            }),
            type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE,
            kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype
              .PaymentInviteAccountSetUp,
            from: e,
            to: o("WAWebUserUtils").getMeUserOrThrow(),
            recipients: [],
            t: t,
            templateParams: [e],
          };
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      var t = e.from,
        n = e.stanzaId;
      return o("WAWap").wap("ack", {
        class: "notification",
        type: "pay",
        id: o("WAWap").CUSTOM_STRING(n),
        to: t,
      });
    }
    function $(e, t) {
      var n;
      return (n = o("WAWebMsgCollection").MsgCollection.get(e)) != null
        ? n
        : t != null
          ? o("WAWebMsgCollection").MsgCollection.get(t)
          : null;
    }
    function P(e, t) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebDBMsgUtils").getMsgByMsgKey(e);
          return (
            n == null &&
              t != null &&
              (n = yield o("WAWebDBMsgUtils").getMsgByMsgKey(t)),
            n
          );
        })),
        N.apply(this, arguments)
      );
    }
    ((l.ORPHAN_PAYMENT_NOTIFICATION_TTL_SECONDS = d),
      (l.MAX_ORPHAN_PAYMENT_NOTIFICATIONS = m),
      (l.handlePaymentNotification = p),
      (l.processOrphanPaymentNotifications = S),
      (l.processAllOrphanPaymentNotifications = L),
      (l.getMessageFromCollection = $),
      (l.getMessageFromDb = P));
  },
  98,
);
