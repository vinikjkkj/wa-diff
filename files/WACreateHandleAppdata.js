__d(
  "WACreateHandleAppdata",
  [
    "Promise",
    "WAJids",
    "WAResultOrError",
    "WASendAppdataDeliveryReceiptProtocol",
    "WASendAppdataRetryReceipt",
    "WASmaxAppdataDeliverPeerRPC",
    "WATagsLogger",
    "WATimeUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = o("WATagsLogger").TAGS(["decision tree", "handleAppdata"]);
    function p(t) {
      return function (a, i, l) {
        var r,
          p,
          _,
          f = (r = t.appdataMessage) == null ? void 0 : r.handleAppdataMessage;
        if (f == null)
          return (
            m.ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "received appdata, but no handler is provied. Fallback to default ack.",
                ])),
            ),
            (d || (d = n("Promise"))).resolve(
              o("WAResultOrError").makeResult("NO_ACK"),
            )
          );
        m.DEV(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "start handling...",
            ])),
        );
        var g = o("WASmaxAppdataDeliverPeerRPC").receivePeerRPC(a),
          h = g.parsedRequest,
          y = h.encEncRetryMixin,
          C = h.encEncTypeIndividualMixin,
          b = h.encEncVersionFutureproofMixin,
          v = h.from,
          S = h.id,
          R = h.offlineMixin,
          L = h.t,
          E = o("WATimeUtils").castToUnixTime(L),
          k = {
            from: v,
            author: o("WAJids").extractUserJid(v),
            retryCount: (p = y == null ? void 0 : y.count) != null ? p : 0,
            ciphertext: C.elementValue,
            encVersion: String(b.v),
            encType: C.type,
            hideDecryptionFailure:
              ((_ = C.encHideDecryptionPlaceholderMixin) == null
                ? void 0
                : _.decryptFail) === "hide",
            stanzaId: S,
          },
          I = function () {
            return o("WASendAppdataDeliveryReceiptProtocol")
              .sendAppdataDeliveryReceiptProtocol({ from: v, stanzaId: S })
              .catch(function (e) {
                throw (
                  m.ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to send delivery receipt due to ",
                        "}",
                      ])),
                    String(e),
                  ),
                  e
                );
              });
          },
          T = function () {
            return o("WASendAppdataRetryReceipt")
              .sendAppdataRetryReceiptProtocol(
                { from: v, stanzaId: S, retryCount: k.retryCount, serverTs: E },
                { cryptoManager: l },
              )
              .catch(function (e) {
                throw (
                  m.ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to send retry receipt due to ",
                        "}",
                      ])),
                    String(e),
                  ),
                  e
                );
              });
          };
        return f(
          {
            parsedAppdata: k,
            offline: R == null ? void 0 : R.offline,
            serverTs: E,
            sendDeliveryReceipt: I,
            sendRetryReceipt: T,
          },
          { cryptoManager: l },
        ).then(o("WAResultOrError").makeResult);
      };
    }
    l.createHandleAppdata = p;
  },
  98,
);
