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
    ((l.isMessageEditToMessageSecretReceiverEnabled = e),
      (l.isMessageEditToMessageSecretSenderEnabled = s));
  },
  98,
);
