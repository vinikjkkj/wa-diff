__d(
  "WAWebDBGroupHistoryPreProcessor",
  [
    "WAWebABProps",
    "WAWebApiHydrateWidsUtil",
    "WAWebDBMessageSerialization",
    "WAWebUserUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return !(
        e.type !== "gp2" ||
        (e.subtype !== "add" &&
          e.subtype !== "community_participant_add_rich" &&
          e.subtype !== "invite") ||
        e.recipients == null ||
        !Array.isArray(e.recipients) ||
        !o("WAWebApiHydrateWidsUtil")
          .hydrateWids(e.recipients)
          .some(function (e) {
            return o("WAWebUserUtils").isMeAccount(e);
          })
      );
    }
    function s(t) {
      return e(o("WAWebDBMessageSerialization").dbRowFromMessage(t))
        ? o("WAWebABProps").getABPropConfigValue(
            "group_history_bump_message_id",
          )
        : 0;
    }
    ((l.isMeJoined = e), (l.getBumpIdCountForGroupJoin = s));
  },
  98,
);
