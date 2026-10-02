__d(
  "WACreateHandleMessage",
  [
    "Promise",
    "WACommonMessageBase",
    "WACreateHandleGroupMessageBranch",
    "WACreateHandleIndividualMessageBranch",
    "WACreateHandlePeerMessageBranch",
    "WALogger",
    "WAResultOrError",
    "WASmaxMessageDeliverNewsletterRPC",
    "WASmaxMessageDeliverRegularRPC",
    "WASmaxMessageFallbackDeliverRPC",
    "WASmaxParsingFailure",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d;
    function m(t) {
      var a = t.broadcast,
        i = t.groupMessage,
        l = t.individualMessage,
        m = t.status,
        p = o("WACreateHandlePeerMessageBranch").createHandlePeerMessageBranch(
          t,
        ),
        _ =
          l &&
          o(
            "WACreateHandleIndividualMessageBranch",
          ).createHandleIndividualMessageBranch(l.handleIndividualMessage),
        f =
          i &&
          o("WACreateHandleGroupMessageBranch").createHandleGroupMessageBranch(
            i.handleGroupMessage,
          );
      return function (i, l, g) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "DT: handleMessage start",
            ])),
        );
        try {
          var t;
          if (
            ((t = i.content) == null || (t = t[0]) == null ? void 0 : t.tag) ===
            "plaintext"
          ) {
            var h = o("WASmaxMessageDeliverNewsletterRPC").receiveNewsletterRPC(
                i,
              ),
              y = h.makeNewsletterResponseSuccess;
            return (d || (d = n("Promise"))).resolve(
              o("WAResultOrError").makeResult(y()),
            );
          }
          if (i.attrs.category === "peer") return p(i, { cryptoManager: g });
          var C = o("WASmaxMessageDeliverRegularRPC").receiveRegularRPC(i),
            b = C.makeRegularResponseSuccess,
            v = C.parsedRequest,
            S = v.messageDeliverTypes,
            R = o("WACommonMessageBase").transformMessageParsedRequest(v);
          switch (S.name) {
            case "Individual": {
              if (_ != null)
                return _({
                  individualMixin: S.value,
                  makeAck: function () {
                    return b({});
                  },
                  commonMessageBase: R,
                  ctx: { cryptoManager: g },
                });
              break;
            }
            case "Group": {
              if (f != null)
                return f({
                  groupMixin: S.value,
                  makeAck: function () {
                    return b({});
                  },
                  commonMessageBase: R,
                  ctx: { cryptoManager: g },
                });
              break;
            }
            case "Broadcast": {
              if (a != null)
                return a
                  .handleBroadcastMessage({
                    makeAck: function () {
                      return b({});
                    },
                  })
                  .then(o("WAResultOrError").makeResult);
              break;
            }
            default: {
              if ((S.name, m != null))
                return m
                  .handleStatusMessage({
                    makeAck: function () {
                      return b({});
                    },
                  })
                  .then(o("WAResultOrError").makeResult);
              break;
            }
          }
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Ignore incoming <message /> because no handler is provided",
              ])),
          );
          var L = o("WASmaxMessageFallbackDeliverRPC").receiveDeliverRPC(i),
            E = L.makeDeliverResponseDelivery;
          return (d || (d = n("Promise"))).resolve(
            o("WAResultOrError").makeResult(E()),
          );
        } catch (e) {
          if (e instanceof o("WASmaxParsingFailure").SmaxParsingFailure) {
            (o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "handleMessage receives an invalid stanza: ",
                  ".",
                ])),
              i.toString(),
            ),
              o("WALogger").ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "handleMessage receives an invalid stanza. Error: ",
                    "",
                  ])),
                e,
              ));
            var k = o("WASmaxMessageFallbackDeliverRPC").receiveDeliverRPC(i),
              I = k.makeDeliverResponseBadStanza;
            return (d || (d = n("Promise"))).resolve(
              o("WAResultOrError").makeResult(I({ ackError: 487 })),
            );
          }
          return (d || (d = n("Promise"))).resolve(
            o("WAResultOrError").makeError({
              type: "runtime-error",
              error: r("getErrorSafe")(e),
            }),
          );
        }
      };
    }
    l.createHandleMessage = m;
  },
  98,
);
