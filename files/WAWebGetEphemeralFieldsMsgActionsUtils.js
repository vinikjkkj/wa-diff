__d(
  "WAWebGetEphemeralFieldsMsgActionsUtils",
  ["WAWebChatEphemerality", "WAWebChatGetters"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = {},
        n = o("WAWebChatEphemerality").getAfterReadEnvelopeForChat(e),
        r = n.afterReadDuration,
        a = n.ephemeralDuration;
      o("WAWebChatEphemerality").isEphemeralSettingOn(e) &&
        (t.ephemeralDuration = a);
      var i = o("WAWebChatEphemerality").getEphemeralSettingTimestamp(e);
      i != null && (t.ephemeralSettingTimestamp = i);
      var l = o("WAWebChatEphemerality").getDisappearingModeInitiator(e);
      l != null && (t.disappearingModeInitiator = l);
      var s = o("WAWebChatEphemerality").getDisappearingModeTrigger(e);
      s != null && (t.disappearingModeTrigger = s);
      var u = o("WAWebChatEphemerality").getDisappearingModeInitiatedByMe(e);
      if (
        (u != null && (t.disappearingModeInitiatedByMe = u),
        o("WAWebChatGetters").getIsGroup(e))
      ) {
        var c = o("WAWebChatEphemerality").getDisappearingModeTriggerGroups(e);
        c != null && (t.disappearingModeTrigger = c);
        var d = o(
          "WAWebChatEphemerality",
        ).getDisappearingModeInitiatedByMeGroups(e);
        d != null && (t.disappearingModeInitiatedByMe = d);
      }
      return (
        r != null && (t.afterReadDuration = r),
        babelHelpers.extends({}, t)
      );
    }
    l.getEphemeralFields = e;
  },
  98,
);
