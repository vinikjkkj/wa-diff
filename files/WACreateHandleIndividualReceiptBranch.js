__d(
  "WACreateHandleIndividualReceiptBranch",
  [
    "Promise",
    "WAJids",
    "WAMapMixinNameToReceiptType",
    "WAResultOrError",
    "WATagsLogger",
    "WATransformToRetryReceipt",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = o("WATagsLogger").TAGS([
        "decision tree",
        "handleIndividualMessageBranch",
      ]);
    function d(t) {
      var r = t.handleIndividualReceipt,
        a = t.handleIndividualRetryReceipt;
      return function (i) {
        var t = i.aggregate,
          l = i.makeAck,
          d = i.offline,
          m = i.receiptType,
          p = i.recipient,
          _ = i.serverTs,
          f = i.socketId,
          g = d != null ? d : null,
          h = t.receiptSender,
          y = p == null ? o("WAJids").extractUserJid(h) : p;
        if (m == null) {
          var C = p == null ? "@me" : p;
          if (r != null)
            return r(
              babelHelpers.extends(
                { makeAck: l, author: C, chat: y, offline: g, serverTs: _ },
                t,
                { receiptType: "delivered" },
              ),
            ).then(o("WAResultOrError").makeResult);
        } else {
          var b =
            p == null || m.name === "SenderType" || m.name === "ReadSelfType"
              ? "@me"
              : p;
          switch (m.name) {
            case "ReadType":
            case "SenderType":
            case "InactiveType":
            case "ReadSelfType": {
              if (r != null)
                return r(
                  babelHelpers.extends(
                    { makeAck: l, author: b, chat: y, offline: g, serverTs: _ },
                    t,
                    {
                      receiptType: o(
                        "WAMapMixinNameToReceiptType",
                      ).mapMixinNameToReceiptType(m.name),
                    },
                  ),
                ).then(o("WAResultOrError").makeResult);
              break;
            }
            case "Retry": {
              if (t.aggregatedType !== "none")
                return (
                  c.ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "retry receipt not supported for aggregated messages",
                      ])),
                  ),
                  (u || (u = n("Promise"))).resolve(
                    o("WAResultOrError").makeResult(l()),
                  )
                );
              if (a != null) {
                var v = o("WATransformToRetryReceipt").transformToRetryReceipt({
                  aggregate: t,
                  retryMixin: m.value,
                  recipient: p,
                  offline: g,
                });
                return a({
                  receiptType: "retry",
                  retryReceipt: v,
                  makeAck: l,
                  author: b,
                  chat: y,
                  offline: g,
                  serverTs: _,
                  socketId: f,
                }).then(o("WAResultOrError").makeResult);
              }
              break;
            }
            case "PlayedType":
            case "DeliverBizType":
            case "PlayedSelfType":
            case "ServerErrorType":
            case "DeliverLIDFeatureIncapableType":
            case "EngagedType":
            case "DeprecatedDeliveryType":
            case "UnknownType": {
              c.ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "handleIndividualReceipt: receipt type ",
                    " is not handled yet",
                  ])),
                m.name,
              );
              break;
            }
            default:
              m.name;
          }
        }
        return (u || (u = n("Promise"))).resolve(
          o("WAResultOrError").makeResult(l()),
        );
      };
    }
    l.createHandleIndividualReceiptBranch = d;
  },
  98,
);
