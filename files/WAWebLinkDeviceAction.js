__d(
  "WAWebLinkDeviceAction",
  [
    "WALogger",
    "WASmaxMdGetCountryCodeRPC",
    "WAWebAltDeviceLinkingApi",
    "WAWebBackendEventBus",
    "WAWebLinkDeviceEvents",
    "WAWebPairingType",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s() {
      try {
        var t = await o("WASmaxMdGetCountryCodeRPC").sendGetCountryCodeRPC();
        return t.value.countryCodeIso;
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[alt-link] sendGetCountryCodeRPC failed: ",
                "",
              ])),
            t,
          )
          .sendLogs("alt device linking: sendGetCountryCodeRPC failed");
      }
    }
    async function u(e) {
      (o("WAWebBackendEventBus").BackendEventBus.triggerRefreshQR(),
        e.linkDeviceMethod ===
        o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING
          ? (await o("WAWebAltDeviceLinkingApi").initializeAltDeviceLinking(),
            o("WAWebAltDeviceLinkingApi").setPairingType(
              o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING,
            ))
          : (await o("WAWebAltDeviceLinkingApi").initializeQRLinking(),
            o("WAWebAltDeviceLinkingApi").setPairingType(
              o("WAWebPairingType").PairingType.QR_CODE,
            )));
    }
    function c(e, t) {
      return o("WAWebAltDeviceLinkingApi").startAltLinkingFlow(e, t);
    }
    function d(e) {
      o("WAWebLinkDeviceEvents").WAWebLinkDeviceEvents.trigger(
        "link_device_events:refresh_alt_linking_code",
      );
    }
    function m(e) {
      o("WAWebLinkDeviceEvents").WAWebLinkDeviceEvents.trigger(
        "link_device_events:force_manual_refresh",
      );
    }
    function p() {
      o("WAWebLinkDeviceEvents").WAWebLinkDeviceEvents.trigger(
        "link_device_events:error_alt_linking",
      );
    }
    function _() {
      o("WAWebLinkDeviceEvents").WAWebLinkDeviceEvents.trigger(
        "link_device_events:primary_hello_received",
      );
    }
    ((l.getPreselectedCountryCodeIso = s),
      (l.resetLinkDeviceState = u),
      (l.genLinkDeviceCodeForPhoneNumber = c),
      (l.refreshAltLinkingCode = d),
      (l.forceManualRefresh = m),
      (l.errorAltLinking = p),
      (l.primaryHelloReceivedAltLinking = _));
  },
  98,
);
