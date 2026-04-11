__d(
  "WAWebLimitSharingGatingUtils",
  ["WATimeUtils", "WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("WAWebABProps").getABPropConfigValue("opus_enabled");
    }
    function s() {
      if (!e()) return !1;
      var t = o("WAWebABProps").getABPropConfigValue("opus_t");
      return t == null ? !1 : Math.floor(o("WATimeUtils").unixTime()) >= t;
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "render_updated_disclosure",
      );
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "limit_sharing_enabled_for_1on1_chat",
      );
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "limit_sharing_update_enabled_web",
      );
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "limit_sharing_protocol_message_receiver_enabled",
      );
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue(
        "advanced_chat_privacy_content_update_july_25",
      );
    }
    ((l.isOpusFlagOn = e),
      (l.isOpusEnabled = s),
      (l.isRenderUpdatedDisclosureGatingEnabled = u),
      (l.isLimitSharingSetterGatingEnabledFor1on1Chat = c),
      (l.isLimitSharingSetterUpdateGatingEnabledForWeb = d),
      (l.isLimitSharingReceiverGatingEnabledForChat = m),
      (l.isLimitSharingContentUpdateJuly25Enabled = p));
  },
  98,
);
