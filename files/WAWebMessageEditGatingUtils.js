__d(
  "WAWebMessageEditGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "message_edit_to_message_secret_receiver_enabled",
      );
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "message_edit_to_message_secret_sender_enabled",
      );
    }
    function u() {
      return (
        s() &&
        o("WAWebABProps").getABPropConfigValue("cross_device_message_editing")
      );
    }
    ((l.isMessageEditToMessageSecretReceiverEnabled = e),
      (l.isMessageEditToMessageSecretSenderEnabled = s),
      (l.isCrossDeviceMessageEditingEnabled = u));
  },
  98,
);
