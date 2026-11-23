__d(
  "WAWebRemoveReplacedBrazilPaymentStateRows",
  [
    "WALogger",
    "WAWebAck",
    "WAWebApiChat",
    "WAWebBackendApi",
    "WAWebCommonMsgUtils",
    "WAWebDBMessageSerialization",
    "WAWebHandlePlaceholderWam",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "WAWebSchemaChat",
    "getErrorSafe",
    "uniqueBy",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(e) {
      if (e.length !== 0) {
        var t = await m(
          r("uniqueBy")(e, function (e) {
            return e.id.toString();
          }),
        );
        if (t.length !== 0) {
          var n = g(t);
          (await Promise.all(n.map(f)),
            o("WAWebBackendApi").frontendFireAndForget(
              "removeBrazilPaymentStatePlaceholders",
              {
                msgKeys: t.map(function (e) {
                  var t = e.updateMsg;
                  return t.id;
                }),
                unreadReductions: n,
              },
            ),
            _(
              t
                .filter(function (e) {
                  var t = e.storedRow;
                  return o("WAWebCommonMsgUtils").isPlaceholderMsg(t.type);
                })
                .map(function (e) {
                  var t = e.storedRow;
                  return t;
                }),
            ));
        }
      }
    }
    function d(e) {
      return (
        o("WAWebCommonMsgUtils").isPlaceholderMsg(e) ||
        o("WAWebCommonMsgUtils").isFutureproofMsg(e)
      );
    }
    function m(e) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["message"], async function (t) {
          var n = t[0],
            r = e.map(function (e) {
              return p(e.id).map(String);
            }),
            o = await n.bulkGet(r.flat(), !1),
            a = new Map();
          o.forEach(function (e) {
            e != null && a.set(e.id, e);
          });
          var i = e.flatMap(function (e, t) {
            var n = r[t]
              .map(function (e) {
                return a.get(e);
              })
              .find(function (e) {
                return e != null && d(e.type);
              });
            return n != null ? [{ updateMsg: e, storedRow: n }] : [];
          });
          return (
            i.length > 0 &&
              (await n.bulkRemove(
                i.map(function (e) {
                  var t = e.storedRow;
                  return t.id;
                }),
              )),
            i
          );
        });
    }
    function p(e) {
      var t = o("WAWebLidMigrationUtils").getAlternateMsgKey(e);
      return t == null ? [e] : [e, t];
    }
    function _(t) {
      t.length !== 0 &&
        o("WAWebHandlePlaceholderWam")
          .postPlaceholderActivityPopulateEvent(
            t.map(function (e) {
              return o("WAWebDBMessageSerialization").messageFromDbRow(e);
            }),
          )
          .catch(function (t) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[br-payment-state] could not log the resolved placeholder",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("br-payment-state-placeholder-wam-failed");
          });
    }
    async function f(e) {
      var t = e.chatId,
        n = e.count;
      try {
        var a = await o("WAWebSchemaChat").getChatTable().get(t);
        if (a == null) {
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[br-payment-state] the chat of a resolved placeholder is not stored",
                ])),
            )
            .sendLogs("br-payment-state-unread-chat-missing");
          return;
        }
        if (a.unreadCount <= 0) return;
        var i = !1;
        await o("WAWebApiChat").reduceChatUnreadCount(t, n, i);
      } catch (e) {
        o("WALogger")
          .ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[br-payment-state] could not reduce the unread count",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("br-payment-state-unread-count-failed");
      }
    }
    function g(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          var n = e.storedRow,
            r = e.updateMsg;
          if (h(r, n)) {
            var o,
              a = r.id.remote.toString();
            t.set(a, ((o = t.get(a)) != null ? o : 0) + 1);
          }
        }),
        Array.from(t, function (e) {
          var t = e[0],
            n = e[1];
          return { chatId: t, count: n };
        })
      );
    }
    function h(e, t) {
      return (
        !e.id.fromMe &&
        t.pendingReadReceipt != null &&
        t.ack < o("WAWebAck").ACK.READ
      );
    }
    ((l.removeReplacedBrazilPaymentStateRows = c),
      (l.isReplaceableBrazilPaymentStateRow = d));
  },
  98,
);
