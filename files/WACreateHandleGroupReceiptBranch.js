__d(
  "WACreateHandleGroupReceiptBranch",
  [
    "Promise",
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
      c = o("WATagsLogger").TAGS(["decision tree", "handleGroupReceiptBranch"]);
    function d(t) {
      var r = t.handleGroupReceipt,
        a = t.handleGroupRetryReceipt;
      return function (i) {
        var t = i.aggregate,
          l = i.from,
          d = i.makeAck,
          m = i.offline,
          p = i.receiptType,
          _ = i.recipient,
          f = i.serverTs,
          g = i.socketId,
          h = l,
          y = m != null ? m : null;
        if (p == null) {
          var C = _ == null ? "@me" : _;
          if (r != null)
            return r(
              babelHelpers.extends(
                { makeAck: d, author: C, chat: h, offline: y, serverTs: f },
                t,
                { receiptType: "delivered" },
              ),
            ).then(o("WAResultOrError").makeResult);
        } else {
          var b =
            _ == null || p.name === "SenderType" || p.name === "ReadSelfType"
              ? "@me"
              : _;
          switch (p.name) {
            case "ReadType":
            case "SenderType":
            case "InactiveType":
            case "ReadSelfType": {
              if (r != null)
                return r(
                  babelHelpers.extends(
                    { makeAck: d, author: b, chat: h, offline: y, serverTs: f },
                    t,
                    {
                      receiptType: o(
                        "WAMapMixinNameToReceiptType",
                      ).mapMixinNameToReceiptType(p.name),
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
                    o("WAResultOrError").makeResult(d()),
                  )
                );
              if (a != null) {
                var v = o("WATransformToRetryReceipt").transformToRetryReceipt({
                  aggregate: t,
                  retryMixin: p.value,
                  recipient: _,
                  offline: y,
                });
                return a({
                  receiptType: "retry",
                  retryReceipt: v,
                  makeAck: d,
                  author: b,
                  chat: h,
                  offline: y,
                  serverTs: f,
                  socketId: g,
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
                    "handleGroupReceipt: receipt type ",
                    " is not handled yet",
                  ])),
                p.name,
              );
              break;
            }
            default:
              p.name;
          }
        }
        return (u || (u = n("Promise"))).resolve(
          o("WAResultOrError").makeResult(d()),
        );
      };
    }
    l.createHandleGroupReceiptBranch = d;
  },
  98,
);
