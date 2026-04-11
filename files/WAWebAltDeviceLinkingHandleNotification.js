__d(
  "WAWebAltDeviceLinkingHandleNotification",
  [
    "WACryptoUtils",
    "WASmaxMdPrimaryHelloNotifyCompanionRPC",
    "WASmaxMdRefreshCodeNotifyCompanionRPC",
    "WASmaxOutMessageFallbackDeliverResponseBadStanza",
    "WAWebAltDeviceLinkingApi",
    "WAWebAltDeviceLinkingQpl",
    "WAWebBackendApi",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return e;
    }
    function u(e) {
      var t = e.content;
      if (!Array.isArray(t) || !t.length)
        return o(
          "WASmaxOutMessageFallbackDeliverResponseBadStanza",
        ).makeDeliverResponseBadStanza({ ackError: 487 }, e);
      var n = t[0].attrs;
      return n.stage === "primary_hello"
        ? c(e)
        : n.stage === "refresh_code"
          ? d(e)
          : o(
              "WASmaxOutMessageFallbackDeliverResponseBadStanza",
            ).makeDeliverResponseBadStanza({ ackError: 487 }, e);
    }
    function c(t) {
      var n = o(
          "WASmaxMdPrimaryHelloNotifyCompanionRPC",
        ).receivePrimaryHelloNotifyCompanionRPC(t),
        a = n.makePrimaryHelloNotifyCompanionResponseAck,
        i = n.parsedRequest;
      if (!i)
        throw (
          o("WAWebBackendApi").frontendFireAndForget("errorAltLinking", {}),
          r("err")("alt pairing: could not parse primary hello")
        );
      try {
        return ((e = o("WAWebAltDeviceLinkingApi").handlePrimaryHello(i)), a());
      } catch (e) {
        throw (
          o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker(
            "primary_hello_error",
          ),
          e
        );
      }
    }
    function d(e) {
      var t = o(
          "WASmaxMdRefreshCodeNotifyCompanionRPC",
        ).receiveRefreshCodeNotifyCompanionRPC(e),
        n = t.makeRefreshCodeNotifyCompanionResponseAck,
        a = t.parsedRequest;
      if (!a) throw r("err")("alt pairing: could not parse refresh code");
      var i = o("WAWebAltDeviceLinkingApi").getCurrentRef();
      return (
        i != null &&
          o("WACryptoUtils").uint8ArraysEqual(
            i,
            a.linkCodeCompanionRegLinkCodePairingRefElementValue,
          ) &&
          (a.linkCodeCompanionRegForceManualRefresh === "true"
            ? (o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker(
                "receive_force_refresh_code",
              ),
              o("WAWebBackendApi").frontendFireAndForget("forceManualRefresh", {
                ref: a.linkCodeCompanionRegLinkCodePairingRefElementValue,
              }))
            : (o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker(
                "receive_refresh_code",
              ),
              o("WAWebBackendApi").frontendFireAndForget(
                "refreshAltLinkingCode",
                { ref: a.linkCodeCompanionRegLinkCodePairingRefElementValue },
              ))),
        n()
      );
    }
    ((l.getPrimaryHello = s), (l.handleAltDeviceLinkingNotification = u));
  },
  98,
);
