__d(
  "WAWebBotGroupGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_ai_group_open_support",
      ) !== !0
        ? !1
        : o("WAWebABProps").getABPropConfigValue(
            "ai_group_participation_enabled",
          ) === !0;
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_ai_group_open_support",
      ) !== !0
        ? !1
        : o("WAWebABProps").getABPropConfigValue(
            "ai_group_participation_add_tee_enabled",
          ) === !0;
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_ai_group_open_support",
      ) !== !0
        ? !1
        : o("WAWebABProps").getABPropConfigValue(
            "ai_group_participation_send_enabled",
          ) === !0;
    }
    function c() {
      return (
        u() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_group_send_mentioned_pushname_enabled",
        )
      );
    }
    ((l.isOpenGroupBotParticipantAddEnabled = e),
      (l.isTEEGroupBotParticipantAddEnabled = s),
      (l.isOpenGroupBotSendEnabled = u),
      (l.isGroupBotSendMentionedPushnameEnabled = c));
  },
  98,
);
