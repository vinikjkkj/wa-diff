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
        "limit_sharing_protocol_message_receiver_enabled",
      );
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue("acp2_enabled");
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue("acp2_futureproof_enabled");
    }
    function m() {
      return (
        c() &&
        o("WAWebABProps").getABPropConfigValue("acp2_group_chats_enabled")
      );
    }
    function p(e) {
      return _(e.id);
    }
    function _(e) {
      return e.isGroup() ? m() : c();
    }
    function f(e) {
      return g(e, e.acp2Setting);
    }
    function g(e, t) {
      return (t == null ? void 0 : t.enabled) === !0 && p(e);
    }
    ((l.isOpusFlagOn = e),
      (l.isOpusEnabled = s),
      (l.isLimitSharingReceiverGatingEnabledForChat = u),
      (l.isAcp2Enabled = c),
      (l.isAcp2FutureproofEnabled = d),
      (l.isAcp2GroupEnabled = m),
      (l.isAcp2EnabledForChat = p),
      (l.isAcp2EnabledForWid = _),
      (l.isChatAcp2Restricted = f),
      (l.isAcp2RestrictedSetting = g));
  },
  98,
);
