__d(
  "WAWebViewOnceGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue("view_once_sp_receiver");
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "enable_soox_message_receiving",
      );
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "enable_soox_message_sending",
      );
    }
    ((l.isViewOnceSunsetEnabled = e),
      (l.isReceivingViewOnceV2Enabled = s),
      (l.isSendingViewOnceV2Enabled = u));
  },
  98,
);
