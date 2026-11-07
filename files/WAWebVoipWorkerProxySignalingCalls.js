__d(
  "WAWebVoipWorkerProxySignalingCalls",
  [
    "WABase64",
    "WALogger",
    "WAWap",
    "WAWebABProps",
    "WAWebMLModelManager",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        legacy: "handleIncomingSignalingOffer",
        fromHeap: "handleIncomingSignalingOfferFromHeap",
      },
      u = {
        legacy: "handleIncomingSignalingMessage",
        fromHeap: "handleIncomingSignalingMessageFromHeap",
      },
      c = {
        legacy: "handleIncomingSignalingAck",
        fromHeap: "handleIncomingSignalingAckFromHeap",
      },
      d = {
        legacy: "handleIncomingSignalingReceipt",
        fromHeap: "handleIncomingSignalingReceiptFromHeap",
      };
    function m(t, r, a) {
      function i(e, t, n, a) {
        var i = o("WAWap").encodeStanza(t.node());
        return r(function (t) {
          return _(t, e, i, n, a);
        });
      }
      return {
        handleIncomingSignalingOffer: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, n, r, l, u, c, d, m, p) {
              (o("WAWebMLModelManager")
                .initMLModelsForCall(yield a())
                .catch(function (t) {
                  o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [initMLModelsForCall] unhandled error: ",
                        "",
                      ])),
                    t,
                  );
                }),
                yield i(
                  s,
                  t,
                  {
                    msgPlatform: n,
                    msgVersion: r,
                    msgEStr: l != null ? String(l) : "0",
                    msgTStr: u != null ? String(u) : "0",
                    msgOffline: c,
                    isOfferNotContact: d,
                    peerJid: m,
                  },
                  p,
                ));
            },
          );
          function r(e, n, r, o, a, i, l, s, u) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
        handleIncomingSignalingMessage: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = e.msgE,
              n = e.msgOffline,
              r = e.msgPlatform,
              o = e.msgT,
              a = e.msgVersion,
              l = e.peerJid,
              s = e.tcToken,
              c = e.xmlNode;
            yield i(
              u,
              c,
              {
                msgPlatform: r,
                msgVersion: a,
                msgEStr: t != null ? String(t) : "0",
                msgTStr: o != null ? String(o) : "0",
                msgOffline: n,
                peerJid: l,
              },
              s,
            );
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        handleIncomingSignalingAck: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = e.ackInfoError,
              n = e.ackInfoType,
              r = e.peerJid,
              o = e.tcToken,
              a = e.xmlNode;
            yield i(c, a, { ackInfoError: t, ackInfoType: n, peerJid: r }, o);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        handleIncomingSignalingReceipt: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t, n) {
              yield i(d, e, { peerJid: t }, n);
            },
          );
          function t(t, n, r) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        resendOfferOnDecryptionFailure: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, n) {
              yield t("resendOfferOnDecryptionFailure", {
                peerJid: e,
                callId: n,
              });
            },
          );
          function r(t, n) {
            return e.apply(this, arguments);
          }
          return r;
        })(),
        resendEncRekeyRetry: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, n) {
              yield t("resendEncRekeyRetry", { peerJid: e, retryCount: n });
            },
          );
          function r(t, n) {
            return e.apply(this, arguments);
          }
          return r;
        })(),
      };
    }
    function p(e) {
      var t = e.byteOffset === 0 && e.byteLength === e.buffer.byteLength;
      return t ? e.buffer : e.slice().buffer;
    }
    function _(e, t, n, r, a) {
      if (
        e.incomingSignalingFromHeap &&
        o("WAWebABProps").getABPropConfigValue(
          "web_voip_incoming_stanza_from_heap",
        )
      ) {
        var i = p(n);
        return {
          method: t.fromHeap,
          args: babelHelpers.extends({}, r, { frame: i }),
          transferList: [i],
        };
      }
      return {
        method: t.legacy,
        args: babelHelpers.extends({}, r, {
          b64Stanza: o("WABase64").encodeB64(n),
          tcToken: a,
        }),
      };
    }
    l.createWorkerProxySignalingCalls = m;
  },
  98,
);
