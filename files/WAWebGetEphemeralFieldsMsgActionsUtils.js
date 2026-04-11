__d(
  "WAWebGetEphemeralFieldsMsgActionsUtils",
  ["WAWebABProps", "WAWebChatEphemerality", "WAWebChatGetters"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = {};
      o("WAWebChatEphemerality").isEphemeralSettingOn(e) &&
        (t.ephemeralDuration = o("WAWebChatEphemerality").getEphemeralSetting(
          e,
        ));
      var n = o("WAWebChatEphemerality").getEphemeralSettingTimestamp(e);
      n != null && (t.ephemeralSettingTimestamp = n);
      var r = o("WAWebChatEphemerality").getDisappearingModeInitiator(e);
      if (
        (r != null && (t.disappearingModeInitiator = r),
        o("WAWebABProps").getABPropConfigValue("dm_initiator_trigger"))
      ) {
        var a = o("WAWebChatEphemerality").getDisappearingModeTrigger(e);
        a != null && (t.disappearingModeTrigger = a);
        var i = o("WAWebChatEphemerality").getDisappearingModeInitiatedByMe(e);
        i != null && (t.disappearingModeInitiatedByMe = i);
      }
      if (
        o("WAWebChatGetters").getIsGroup(e) &&
        o("WAWebABProps").getABPropConfigValue("dm_initiator_trigger_groups")
      ) {
        var l = o("WAWebChatEphemerality").getDisappearingModeTriggerGroups(e);
        l != null && (t.disappearingModeTrigger = l);
        var s = o(
          "WAWebChatEphemerality",
        ).getDisappearingModeInitiatedByMeGroups(e);
        s != null && (t.disappearingModeInitiatedByMe = s);
      }
      var u = o("WAWebChatEphemerality").getAfterReadDurationForChat(e);
      return (
        u != null && (t.afterReadDuration = u),
        babelHelpers.extends({}, t)
      );
    }
    l.getEphemeralFields = e;
  },
  98,
);
