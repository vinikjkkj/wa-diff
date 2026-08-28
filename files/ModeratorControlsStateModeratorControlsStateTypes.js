__d(
  "ModeratorControlsStateModeratorControlsStateTypes",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum")({
        UNKNOWN: 0,
        SOFT_MUTE: 1,
        END_CALL: 2,
        APPROVE_JOIN: 3,
        REMOVE_PARTICIPANT: 4,
        TOGGLE_SCREENSHARING_AVAILABILITY: 5,
        SOFT_MUTE_ALL: 6,
        CANNOT_BE_MUTED: 7,
      }),
      l = n("$InternalEnum")({ UNKNOWN: 0, SOFT_MUTE_ALL: 1 }),
      s = n("$InternalEnum")({
        UNKNOWN: 0,
        MODERATORS_ONLY: 1,
        EVERYONE_IN_CALL: 2,
        NOBODY: 3,
      });
    a.exports = {
      ConferenceCapabilityType: l,
      ModeratorActionType: e,
      ModeratorFeatureAccessMode: s,
    };
  },
  null,
);
