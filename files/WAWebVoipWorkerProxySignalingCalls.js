__d(
  "WAWebVoipWorkerProxySignalingCalls",
  [
    "WABase64",
    "WALogger",
    "WAWap",
    "WAWebMLModelManager",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, r) {
      return {
        handleIncomingSignalingOffer: (function () {
          var a = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (n, a, i, l, s, u, c, d, m) {
              o("WAWebMLModelManager")
                .initMLModelsForCall(yield r())
                .catch(function (t) {
                  o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [initMLModelsForCall] unhandled error: ",
                        "",
                      ])),
                    t,
                  );
                });
              var p = n.node(),
                _ = o("WABase64").encodeB64(o("WAWap").encodeStanza(p)),
                f = l != null ? String(l) : "0",
                g = s != null ? String(s) : "0";
              yield t("handleIncomingSignalingOffer", {
                b64Stanza: _,
                msgPlatform: a,
                msgVersion: i,
                msgEStr: f,
                msgTStr: g,
                msgOffline: u,
                isOfferNotContact: c,
                peerJid: d,
                tcToken: m,
              });
            },
          );
          function i(e, t, n, r, o, i, l, s, u) {
            return a.apply(this, arguments);
          }
          return i;
        })(),
        handleIncomingSignalingMessage: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var n = e.msgE,
              r = e.msgOffline,
              a = e.msgPlatform,
              i = e.msgT,
              l = e.msgVersion,
              s = e.peerJid,
              u = e.tcToken,
              c = e.xmlNode,
              d = c.node(),
              m = o("WABase64").encodeB64(o("WAWap").encodeStanza(d)),
              p = n != null ? String(n) : "0",
              _ = i != null ? String(i) : "0";
            yield t("handleIncomingSignalingMessage", {
              b64Stanza: m,
              msgPlatform: a,
              msgVersion: l,
              msgEStr: p,
              msgTStr: _,
              msgOffline: r,
              peerJid: s,
              tcToken: u,
            });
          });
          function r(t) {
            return e.apply(this, arguments);
          }
          return r;
        })(),
        handleIncomingSignalingAck: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var n = e.ackInfoError,
              r = e.ackInfoType,
              a = e.peerJid,
              i = e.tcToken,
              l = e.xmlNode,
              s = l.node(),
              u = o("WABase64").encodeB64(o("WAWap").encodeStanza(s));
            yield t("handleIncomingSignalingAck", {
              b64Stanza: u,
              ackInfoError: n,
              ackInfoType: r,
              peerJid: a,
              tcToken: i,
            });
          });
          function r(t) {
            return e.apply(this, arguments);
          }
          return r;
        })(),
        handleIncomingSignalingReceipt: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, n, r) {
              var a = e.node(),
                i = o("WABase64").encodeB64(o("WAWap").encodeStanza(a));
              yield t("handleIncomingSignalingReceipt", {
                b64Stanza: i,
                peerJid: n,
                tcToken: r,
              });
            },
          );
          function r(t, n, r) {
            return e.apply(this, arguments);
          }
          return r;
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
    l.createWorkerProxySignalingCalls = s;
  },
  98,
);
