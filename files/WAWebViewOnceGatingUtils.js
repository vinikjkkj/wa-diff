__d(
  "WAWebViewOnceGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "enable_soox_message_sending",
      );
    }
    l.isSendingViewOnceV2Enabled = e;
  },
  98,
);
