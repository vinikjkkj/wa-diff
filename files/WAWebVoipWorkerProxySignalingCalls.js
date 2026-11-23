__d(
  "WAWebVoipWorkerProxySignalingCalls",
  ["WABase64", "WALogger", "WAWap", "WAWebABProps", "WAWebMLModelManager"],
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
    function m(t, n, r) {
      function a(e, t, r, a) {
        var i = o("WAWap").encodeStanza(t.node());
        return n(function (t) {
          return _(t, e, i, r, a);
        });
      }
      return {
        handleIncomingSignalingOffer: async function (
          n,
          i,
          l,
          u,
          c,
          d,
          m,
          p,
          _,
        ) {
          (o("WAWebMLModelManager")
            .initMLModelsForCall(await r())
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
            await a(
              s,
              n,
              {
                msgPlatform: i,
                msgVersion: l,
                msgEStr: u != null ? String(u) : "0",
                msgTStr: c != null ? String(c) : "0",
                msgOffline: d,
                isOfferNotContact: m,
                peerJid: p,
              },
              _,
            ));
        },
        handleIncomingSignalingMessage: async function (t) {
          var e = t.msgE,
            n = t.msgOffline,
            r = t.msgPlatform,
            o = t.msgT,
            i = t.msgVersion,
            l = t.peerJid,
            s = t.tcToken,
            c = t.xmlNode;
          await a(
            u,
            c,
            {
              msgPlatform: r,
              msgVersion: i,
              msgEStr: e != null ? String(e) : "0",
              msgTStr: o != null ? String(o) : "0",
              msgOffline: n,
              peerJid: l,
            },
            s,
          );
        },
        handleIncomingSignalingAck: async function (t) {
          var e = t.ackInfoError,
            n = t.ackInfoType,
            r = t.peerJid,
            o = t.tcToken,
            i = t.xmlNode;
          await a(c, i, { ackInfoError: e, ackInfoType: n, peerJid: r }, o);
        },
        handleIncomingSignalingReceipt: async function (t, n, r) {
          await a(d, t, { peerJid: n }, r);
        },
        resendOfferOnDecryptionFailure: async function (n, r) {
          await t("resendOfferOnDecryptionFailure", { peerJid: n, callId: r });
        },
        resendEncRekeyRetry: async function (n, r) {
          await t("resendEncRekeyRetry", { peerJid: n, retryCount: r });
        },
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
