__d(
  "WAWebVoipCallOfferRingWindow",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    var e = 9e4,
      s = 45e3,
      u = new Set([
        "added_as_link_creator",
        "added_for_device_switching",
        "group_chat_add",
        "group_setting",
        "lightweight",
        "privacy",
        "scheduled",
        "vc_init",
        "vc_wave",
        "vc_wave_all",
        "wave",
      ]);
    function c(t) {
      return t.isCallEnded || d(t)
        ? !1
        : t.isGroupCall
          ? t.queuedMs < s || m(t)
          : t.queuedMs < e;
    }
    function d(e) {
      var t = e.silenceReason;
      return t != null && u.has(t);
    }
    function m(e) {
      var t = e.isJoinableGroupCall,
        n = e.isLightweight;
      return (
        t &&
        !n &&
        o("WAWebABProps").getABPropConfigValue(
          "enable_ring_for_gc_on_offer_expire",
        )
      );
    }
    l.canCallOfferStillRing = c;
  },
  98,
);
