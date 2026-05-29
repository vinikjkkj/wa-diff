__d(
  "WAWebGroupHistoryPostJoinSubtype",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return (
        e === "add" ||
        e === "invite" ||
        e === "v4_add_invite_join" ||
        e === "linked_group_join" ||
        e === "auto_add" ||
        e === "invite_auto_add"
      );
    }
    i.isPostJoinHistoryCTASubtype = e;
  },
  66,
);
