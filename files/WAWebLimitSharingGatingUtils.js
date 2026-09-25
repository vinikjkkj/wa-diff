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
        "limit_sharing_protocol_message_receiver_enabled",
      );
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue("opus_admin");
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue("acp2_enabled");
    }
    function p() {
      return (
        m() &&
        o("WAWebABProps").getABPropConfigValue("acp2_group_chats_enabled")
      );
    }
    function _(e) {
      return f(e.id);
    }
    function f(e) {
      return e.isGroup() ? p() : m();
    }
    function g(e) {
      var t;
      return _(e) && ((t = e.acp2Setting) == null ? void 0 : t.enabled) === !0;
    }
    ((l.isOpusFlagOn = e),
      (l.isOpusEnabled = s),
      (l.isRenderUpdatedDisclosureGatingEnabled = u),
      (l.isLimitSharingReceiverGatingEnabledForChat = c),
      (l.isOpusAdminOnly = d),
      (l.isAcp2Enabled = m),
      (l.isAcp2GroupEnabled = p),
      (l.isAcp2EnabledForChat = _),
      (l.isAcp2EnabledForWid = f),
      (l.isChatAcp2Restricted = g));
  },
  98,
);
