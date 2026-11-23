__d(
  "WAWebPaymentNotificationHandler",
  [
    "WALogger",
    "WATimeUtils",
    "WAWap",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebDBMsgUtils",
    "WAWebDBProcessMessage",
    "WAWebFindChat",
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
    async function p(t) {
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
          o("WAWebPaymentsODS").logDehydratedTransactionNotificationSkipped(),
        i != null ? await f(i) : l != null && (await _(l)),
        S(n.success)
      );
    }
    async function _(e) {
      var t = r("nullthrows")(e.msgKey),
        n = o("WAWebLidMigrationUtils").getAlternateMsgKey(t),
        a = R(t, n),
        i = a ? o("WAWebStateUtils").unproxy(a) : await L(t, n);
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
        await o("WAWebSchemaOrphanPaymentNotification")
          .getTable()
          .createOrReplace(l);
        return;
      }
      await g(i, e);
    }
    async function f(e) {
      if (e.type === "account-set-up") {
        var t = await r("WAWebMsgKey").newId(),
          n = function (r) {
            return v(r, e.timestamp, t);
          },
          a,
          i = await o("WAWebFindChat").findOrCreateLatestChat(
            e.from,
            "handlePaymentInviteNotification",
            {
              buildFirstIncomingMsg: function (t) {
                return ((a = n(t)), a);
              },
            },
          ),
          l = i.chat;
        await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
          chatId: l.id,
          newMsg: a != null ? a : n(l.id),
          handleSingleMsgOrigin: "handlePaymentInviteNotification",
        });
      }
    }
    async function g(e, t) {
      var n = [];
      (h(e, t), n.push(e.id.toString()));
      var r = [e instanceof o("WAWebMsgModel").Msg ? e.toJSON() : e];
      if (e.paymentRequestMessageKey != null) {
        var a = e.paymentRequestMessageKey,
          i = o("WAWebLidMigrationUtils").getAlternateMsgKey(a),
          l = R(a, i),
          s = l ? o("WAWebStateUtils").unproxy(l) : await L(a, i);
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
        await o("WAWebDBProcessMessage").updateExistingMessages(r));
    }
    function h(e, t) {
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
    async function y(e) {
      var t = e.map(function (e) {
          return e.id.toString();
        }),
        n = await o("WAWebSchemaOrphanPaymentNotification")
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
    }
    async function C() {
      var e = await b(
          await o("WAWebSchemaOrphanPaymentNotification").getTable().all(),
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
        var a = await o("WAWebDBMsgUtils").getMsgsByMsgKey(n, function (e) {
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
    }
    async function b(e) {
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
        (await o("WAWebSchemaOrphanPaymentNotification")
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
    }
    function v(e, t, n) {
      return {
        id: new (r("WAWebMsgKey"))({ remote: e, fromMe: !1, id: n }),
        type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE,
        kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype
          .PaymentInviteAccountSetUp,
        from: e,
        to: o("WAWebUserUtils").getMeUserOrThrow(),
        recipients: [],
        t,
        templateParams: [e],
      };
    }
    function S(e) {
      var t = e.from,
        n = e.stanzaId;
      return o("WAWap").wap("ack", {
        class: "notification",
        type: "pay",
        id: o("WAWap").CUSTOM_STRING(n),
        to: t,
      });
    }
    function R(e, t) {
      var n;
      return (n = o("WAWebMsgCollection").MsgCollection.get(e)) != null
        ? n
        : t != null
          ? o("WAWebMsgCollection").MsgCollection.get(t)
          : null;
    }
    async function L(e, t) {
      var n = await o("WAWebDBMsgUtils").getMsgByMsgKey(e);
      return (
        n == null &&
          t != null &&
          (n = await o("WAWebDBMsgUtils").getMsgByMsgKey(t)),
        n
      );
    }
    ((l.ORPHAN_PAYMENT_NOTIFICATION_TTL_SECONDS = d),
      (l.MAX_ORPHAN_PAYMENT_NOTIFICATIONS = m),
      (l.handlePaymentNotification = p),
      (l.processOrphanPaymentNotifications = y),
      (l.processAllOrphanPaymentNotifications = C),
      (l.getMessageFromCollection = R),
      (l.getMessageFromDb = L));
  },
  98,
);
