__d(
  "WAWebShortcakeLinkingBridgeApi",
  [
    "WALogger",
    "WAWebAltDeviceLinkingApi",
    "WAWebLinkDeviceEvents",
    "WAWebPairingType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        passkeyPrologueRequest: function () {
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Shortcake bridge: passkeyPrologueRequest",
              ])),
          ),
            o("WAWebAltDeviceLinkingApi").setPairingType(
              o("WAWebPairingType").PairingType.SHORTCAKE_PASSKEY,
            ),
            o(
              "WAWebLinkDeviceEvents",
            ).WAWebLinkDeviceEvents.triggerPasskeyPrologueRequest());
        },
        shortcakePrologueSent: function () {
          o(
            "WAWebLinkDeviceEvents",
          ).WAWebLinkDeviceEvents.triggerShortcakePrologueSent();
        },
        shortcakeVerificationCodeReady: function (t) {
          var e = t.verificationCode;
          o(
            "WAWebLinkDeviceEvents",
          ).WAWebLinkDeviceEvents.triggerShortcakeVerificationCodeReady(e);
        },
        shortcakeError: function (t) {
          var e = t.reason;
          o(
            "WAWebLinkDeviceEvents",
          ).WAWebLinkDeviceEvents.triggerShortcakeError(e);
        },
      };
    l.ShortcakeLinkingBridgeApi = s;
  },
  98,
);
