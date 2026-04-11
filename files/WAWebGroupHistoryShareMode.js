__d(
  "WAWebGroupHistoryShareMode",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum")({
      ADMIN_SHARE: "admin_share",
      ALL_MEMBER_SHARE: "all_member_share",
    });
    function l(t) {
      return t === "ADMIN_SHARE"
        ? e.ADMIN_SHARE
        : t === "ALL_MEMBER_SHARE"
          ? e.ALL_MEMBER_SHARE
          : e.ADMIN_SHARE;
    }
    ((i.MemberShareGroupHistoryMode = e),
      (i.getMemberShareGroupHistoryModeFromMexType = l));
  },
  66,
);
