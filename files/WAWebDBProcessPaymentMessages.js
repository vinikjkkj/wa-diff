__d(
  "WAWebDBProcessPaymentMessages",
  [
    "WAWebDBMsgUtils",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgType",
    "WAWebProtobufsWeb.pb",
    "WAWebSchemaMessage",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = [],
        n = [],
        r = s(e),
        a = u(
          e.filter(function (e) {
            return (
              e.subtype === "payment_action_request_declined" ||
              e.subtype === "payment_transaction_request_cancelled"
            );
          }),
        );
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["message"], async function (i) {
          var l = i[0],
            s = await o("WAWebDBMsgUtils").getMsgsByMsgKey(r.concat(a)),
            u = new Map();
          return (
            s.forEach(function (e) {
              e != null && u.set(e.id.toString(), e);
            }),
            e.forEach(function (e) {
              var r,
                a =
                  (r = e.paymentRequestMessageKey) == null
                    ? void 0
                    : r.toString(),
                i = u.get(a || "");
              if (i == null && e.paymentRequestMessageKey != null) {
                var l = o("WAWebLidMigrationUtils").getAlternateMsgKey(
                  e.paymentRequestMessageKey,
                );
                if (l != null) {
                  var s, c;
                  ((a = l.toString()),
                    (i = u.get(
                      (s =
                        (c = o("WAWebLidMigrationUtils").getAlternateMsgKey(
                          l,
                        )) == null
                          ? void 0
                          : c.toString()) != null
                        ? s
                        : "",
                    )));
                }
              }
              if (i && a != null)
                if (e.subtype === "send" && e.paymentTxnStatus != null)
                  t.push({ id: a, paymentTxnStatus: e.paymentTxnStatus });
                else {
                  var d = i.from.isGroup() ? i.author : i.from,
                    m = o("WAWebUserPrefsMeUser").isMeAccount(
                      i.paymentMessageReceiverJid,
                    ),
                    p = m ? d : i.paymentMessageReceiverJid;
                  (e.subtype === "payment_action_request_declined"
                    ? t.push({
                        id: a,
                        paymentStatus: o("WAWebProtobufsWeb.pb")
                          .PaymentInfo$Status.REJECTED,
                        paymentTxnStatus: o("WAWebProtobufsWeb.pb")
                          .PaymentInfo$TxnStatus.COLLECT_REJECTED,
                      })
                    : e.subtype === "payment_transaction_request_cancelled" &&
                      t.push({
                        id: a,
                        paymentStatus: o("WAWebProtobufsWeb.pb")
                          .PaymentInfo$Status.CANCELLED,
                        paymentTxnStatus: o("WAWebProtobufsWeb.pb")
                          .PaymentInfo$TxnStatus.COLLECT_CANCELED,
                      }),
                    t.push({
                      id: e.id.toString(),
                      type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION_TEMPLATE,
                      templateParams: [
                        p || "",
                        i.paymentCurrency || "",
                        String(i.paymentAmount1000),
                      ],
                    }));
                }
              else
                u.get(e.id.toString()) &&
                  !e.isMdHistoryMsg &&
                  n.push(e.id.toString());
            }),
            await o("WAWebSchemaMessage").getMessageTable().bulkRemove(n),
            await o("WAWebSchemaMessage")
              .getMessageTable()
              .bulkCreateOrMerge(t),
            t
          );
        });
    }
    function s(e) {
      return e
        .flatMap(function (e) {
          var t, n;
          return [
            e.paymentRequestMessageKey
              ? e.paymentRequestMessageKey.toString()
              : null,
            e.paymentRequestMessageKey &&
            (t =
              (n = o("WAWebLidMigrationUtils").getAlternateMsgKey(
                e.paymentRequestMessageKey,
              )) == null
                ? void 0
                : n.toString()) != null
              ? t
              : null,
          ];
        })
        .filter(Boolean);
    }
    function u(e) {
      return e
        .flatMap(function (e) {
          var t, n;
          return [
            e.id.toString(),
            (t =
              (n = o("WAWebLidMigrationUtils").getAlternateMsgKey(e.id)) == null
                ? void 0
                : n.toString()) != null
              ? t
              : null,
          ];
        })
        .filter(Boolean);
    }
    ((l.processPaymentMessages = e),
      (l.mapOriginalAndAltPaymentRequestMessageKey = s),
      (l.mapOriginalAndAltMsgId = u));
  },
  98,
);
