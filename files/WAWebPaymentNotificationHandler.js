__d(
  "WAWebPaymentNotificationHandler",
  [
    "WALogger",
    "WANullthrows",
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
    "WAWebSchemaOrphanPaymentNotification",
    "WAWebStateUtils",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
            a = r.invite,
            i = r.transaction;
          return (
            a != null ? yield _(a) : i != null && (yield m(i)),
            E(n.success)
          );
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("WANullthrows")(e.msgKey),
            n = o("WAWebLidMigrationUtils").getAlternateMsgKey(t),
            a = k(t, n),
            i = a ? o("WAWebStateUtils").unproxy(a) : yield I(t, n);
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
          yield g(i, e);
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.type === "account-set-up") {
            var t = yield R(e.from, e.timestamp);
            yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
              chatId: t.from,
              newMsg: t,
              handleSingleMsgOrigin: "handlePaymentInviteNotification",
            });
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = [];
          (y(e, t), n.push(e.id.toString()));
          var r = [e instanceof o("WAWebMsgModel").Msg ? e.toJSON() : e];
          if (e.paymentRequestMessageKey != null) {
            var a = e.paymentRequestMessageKey,
              i = o("WAWebLidMigrationUtils").getAlternateMsgKey(a),
              l = k(a, i),
              s = l ? o("WAWebStateUtils").unproxy(l) : yield I(a, i);
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
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
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
        (e.paymentAmount1000 = r("WANullthrows")(t.amount1000)),
        (e.paymentMessageReceiverJid = t.receiver),
        (e.paymentTransactionTimestamp = r("WANullthrows")(t.ts)));
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                g(t, {
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
        b.apply(this, arguments)
      );
    }
    function v() {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebSchemaOrphanPaymentNotification")
              .getTable()
              .all(),
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
                ? g(i, {
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
                (e.paymentAmount1000 = r("WANullthrows")(n.amount1000)),
                (e.paymentMessageReceiverJid = n.receiver),
                (e.paymentTransactionTimestamp = r("WANullthrows")(n.ts)));
            });
            return o("WAWebDBProcessMessage").updateExistingMessages(a);
          }
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            to: o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
            recipients: [],
            t: t,
            templateParams: [e],
          };
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      var t = e.from,
        n = e.stanzaId;
      return o("WAWap").wap("ack", {
        class: "notification",
        type: "pay",
        id: o("WAWap").CUSTOM_STRING(n),
        to: t,
      });
    }
    function k(e, t) {
      var n;
      return (n = o("WAWebMsgCollection").MsgCollection.get(e)) != null
        ? n
        : t != null
          ? o("WAWebMsgCollection").MsgCollection.get(t)
          : null;
    }
    function I(e, t) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebDBMsgUtils").getMsgByMsgKey(e);
          return (
            n == null &&
              t != null &&
              (n = yield o("WAWebDBMsgUtils").getMsgByMsgKey(t)),
            n
          );
        })),
        T.apply(this, arguments)
      );
    }
    ((l.handlePaymentNotification = c),
      (l.processOrphanPaymentNotifications = C),
      (l.processAllOrphanPaymentNotifications = v),
      (l.getMessageFromCollection = k),
      (l.getMessageFromDb = I));
  },
  98,
);
