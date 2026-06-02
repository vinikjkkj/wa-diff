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
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(t) {
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
      return (a != null ? await m(a) : i != null && (await d(i)), y(n.success));
    }
    async function d(e) {
      var t = r("WANullthrows")(e.msgKey),
        n = o("WAWebLidMigrationUtils").getAlternateMsgKey(t),
        a = C(t, n),
        i = a ? o("WAWebStateUtils").unproxy(a) : await b(t, n);
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
      await p(i, e);
    }
    async function m(e) {
      if (e.type === "account-set-up") {
        var t = await h(e.from, e.timestamp);
        await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
          chatId: t.from,
          newMsg: t,
          handleSingleMsgOrigin: "handlePaymentInviteNotification",
        });
      }
    }
    async function p(e, t) {
      var n = [];
      (_(e, t), n.push(e.id.toString()));
      var r = [e instanceof o("WAWebMsgModel").Msg ? e.toJSON() : e];
      if (e.paymentRequestMessageKey != null) {
        var a = e.paymentRequestMessageKey,
          i = o("WAWebLidMigrationUtils").getAlternateMsgKey(a),
          l = C(a, i),
          s = l ? o("WAWebStateUtils").unproxy(l) : await b(a, i);
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
    function _(e, t) {
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
    async function f(e) {
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
            p(t, {
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
    async function g() {
      var e = await o("WAWebSchemaOrphanPaymentNotification").getTable().all(),
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
            ? p(i, {
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
            (e.paymentAmount1000 = r("WANullthrows")(n.amount1000)),
            (e.paymentMessageReceiverJid = n.receiver),
            (e.paymentTransactionTimestamp = r("WANullthrows")(n.ts)));
        });
        return o("WAWebDBProcessMessage").updateExistingMessages(a);
      }
    }
    async function h(e, t) {
      return {
        id: new (r("WAWebMsgKey"))({
          remote: e,
          fromMe: !1,
          id: await r("WAWebMsgKey").newId(),
        }),
        type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE,
        kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype
          .PaymentInviteAccountSetUp,
        from: e,
        to: o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        recipients: [],
        t,
        templateParams: [e],
      };
    }
    function y(e) {
      var t = e.from,
        n = e.stanzaId;
      return o("WAWap").wap("ack", {
        class: "notification",
        type: "pay",
        id: o("WAWap").CUSTOM_STRING(n),
        to: t,
      });
    }
    function C(e, t) {
      var n;
      return (n = o("WAWebMsgCollection").MsgCollection.get(e)) != null
        ? n
        : t != null
          ? o("WAWebMsgCollection").MsgCollection.get(t)
          : null;
    }
    async function b(e, t) {
      var n = await o("WAWebDBMsgUtils").getMsgByMsgKey(e);
      return (
        n == null &&
          t != null &&
          (n = await o("WAWebDBMsgUtils").getMsgByMsgKey(t)),
        n
      );
    }
    ((l.handlePaymentNotification = c),
      (l.processOrphanPaymentNotifications = f),
      (l.processAllOrphanPaymentNotifications = g),
      (l.getMessageFromCollection = C),
      (l.getMessageFromDb = b));
  },
  98,
);
