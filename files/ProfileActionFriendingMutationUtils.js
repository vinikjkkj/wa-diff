__d(
  "ProfileActionFriendingMutationUtils",
  ["fbt", "ProfileActionMutationUtils", "WebPixelRatio"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t) {
      var n = "";
      switch (e) {
        case "ARE_FRIENDS":
          n = s._(/*BTDS*/ "Friends").toString();
          break;
        case "CAN_REQUEST":
          n = s._(/*BTDS*/ "Add friend").toString();
          break;
        case "INCOMING_REQUEST":
          n = s._(/*BTDS*/ "Respond").toString();
          break;
        case "OUTGOING_REQUEST":
          n = s._(/*BTDS*/ "Cancel request").toString();
          break;
      }
      return {
        __typename: "ProfileActionFriendRequest",
        icon_image: {
          height: 16 * o("WebPixelRatio").get(),
          scale: o("WebPixelRatio").get(),
          uri: null,
          width: 16 * o("WebPixelRatio").get(),
        },
        id: o("ProfileActionMutationUtils").getProfileActionID(t, 1),
        is_optimistic_update: !0,
        title: { text: n },
      };
    }
    l.getOptimisticActionForFriendshipStatus = e;
  },
  226,
);
