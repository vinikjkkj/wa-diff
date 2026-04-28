__d(
  "WAWebGetEphemeralFieldsMsgActionsUtils",
  [
    "WAWebABProps",
    "WAWebAfterReadUtils",
    "WAWebChatEphemerality",
    "WAWebChatGetters",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = {},
        n = o("WAWebChatEphemerality").getEphemeralSetting(e),
        r = o("WAWebChatEphemerality").getAfterReadDurationForChat(e),
        a =
          r != null
            ? r
            : n != null &&
                o("WAWebAfterReadUtils").isAfterReadEnabled() &&
                o("WAWebAfterReadUtils").isAfterReadDuration(n)
              ? n
              : null,
        i = a != null && a > 0 && o("WAWebAfterReadUtils").isAfterReadEnabled();
      o("WAWebChatEphemerality").isEphemeralSettingOn(e) &&
        (t.ephemeralDuration = i
          ? o("WAWebAfterReadUtils").getAfterReadFallbackDuration()
          : n);
      var l = o("WAWebChatEphemerality").getEphemeralSettingTimestamp(e);
      l != null && (t.ephemeralSettingTimestamp = l);
      var s = o("WAWebChatEphemerality").getDisappearingModeInitiator(e);
      s != null && (t.disappearingModeInitiator = s);
      var u = o("WAWebChatEphemerality").getDisappearingModeTrigger(e);
      u != null && (t.disappearingModeTrigger = u);
      var c = o("WAWebChatEphemerality").getDisappearingModeInitiatedByMe(e);
      if (
        (c != null && (t.disappearingModeInitiatedByMe = c),
        o("WAWebChatGetters").getIsGroup(e) &&
          o("WAWebABProps").getABPropConfigValue("dm_initiator_trigger_groups"))
      ) {
        var d = o("WAWebChatEphemerality").getDisappearingModeTriggerGroups(e);
        d != null && (t.disappearingModeTrigger = d);
        var m = o(
          "WAWebChatEphemerality",
        ).getDisappearingModeInitiatedByMeGroups(e);
        m != null && (t.disappearingModeInitiatedByMe = m);
      }
      return (
        a != null && (t.afterReadDuration = a),
        babelHelpers.extends({}, t)
      );
    }
    l.getEphemeralFields = e;
  },
  98,
);
