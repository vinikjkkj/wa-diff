__d(
  "WAWebMemberLabelDeviceCapabilityCommon",
  [
    "WAWebProtobufsDeviceCapabilities.pb",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = {};
      (e.memberNameTagPrimarySupport != null &&
        (t.memberNameTagPrimarySupport = e.memberNameTagPrimarySupport),
        r("WAWebUserPrefsStore").setUser(
          o("WAWebUserPrefsKeys").UserPrefs.MemberLabelPrimaryCapability,
          t,
          { shouldWriteToIdb: !1 },
        ));
    }
    function s() {
      var e = r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").UserPrefs.MemberLabelPrimaryCapability,
        ),
        t = o("WAWebProtobufsDeviceCapabilities.pb")
          .DeviceCapabilities$MemberNameTagPrimarySupport.DISABLED;
      if (
        typeof e == "object" &&
        e != null &&
        typeof e.memberNameTagPrimarySupport == "number"
      ) {
        var n;
        t =
          (n = o(
            "WAWebProtobufsDeviceCapabilities.pb",
          ).DeviceCapabilities$MemberNameTagPrimarySupport.cast(
            e.memberNameTagPrimarySupport,
          )) != null
            ? n
            : o("WAWebProtobufsDeviceCapabilities.pb")
                .DeviceCapabilities$MemberNameTagPrimarySupport.DISABLED;
      }
      return { memberNameTagPrimarySupport: t };
    }
    function u() {
      return s().memberNameTagPrimarySupport;
    }
    function c() {
      var e = u();
      return (
        e ===
          o("WAWebProtobufsDeviceCapabilities.pb")
            .DeviceCapabilities$MemberNameTagPrimarySupport.RECEIVER_ENABLED ||
        e ===
          o("WAWebProtobufsDeviceCapabilities.pb")
            .DeviceCapabilities$MemberNameTagPrimarySupport.SENDER_ENABLED
      );
    }
    function d() {
      var e = u();
      return (
        e ===
        o("WAWebProtobufsDeviceCapabilities.pb")
          .DeviceCapabilities$MemberNameTagPrimarySupport.SENDER_ENABLED
      );
    }
    ((l.saveMemberLabelCapabilityToStorage = e),
      (l.canPrimaryReceiveMemberNameTags = c),
      (l.canPrimarySendMemberNameTags = d));
  },
  98,
);
