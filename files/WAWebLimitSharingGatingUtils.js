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
      return o("WAWebABProps").getABPropConfigValue("acp2_enabled");
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue("acp2_futureproof_enabled");
    }
    function p() {
      return (
        d() &&
        o("WAWebABProps").getABPropConfigValue("acp2_group_chats_enabled")
      );
    }
    function _(e) {
      return f(e.id);
    }
    function f(e) {
      return e.isGroup() ? p() : d();
    }
    function g(e) {
      return h(e, e.acp2Setting);
    }
    function h(e, t) {
      return (t == null ? void 0 : t.enabled) === !0 && _(e);
    }
    ((l.isOpusFlagOn = e),
      (l.isOpusEnabled = s),
      (l.isRenderUpdatedDisclosureGatingEnabled = u),
      (l.isLimitSharingReceiverGatingEnabledForChat = c),
      (l.isAcp2Enabled = d),
      (l.isAcp2FutureproofEnabled = m),
      (l.isAcp2GroupEnabled = p),
      (l.isAcp2EnabledForChat = _),
      (l.isAcp2EnabledForWid = f),
      (l.isChatAcp2Restricted = g),
      (l.isAcp2RestrictedSetting = h));
  },
  98,
);
