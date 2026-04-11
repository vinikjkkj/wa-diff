__d(
  "WAWebGroupMemberLinkMode",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = { ALL_MEMBER_LINK: "all_member_link", ADMIN_LINK: "admin_link" };
    function l(t) {
      if (t == null) return e.ADMIN_LINK;
      switch (t) {
        case "ALL_MEMBER_LINK":
          return e.ALL_MEMBER_LINK;
        case "ADMIN_LINK":
          return e.ADMIN_LINK;
        default:
          return e.ADMIN_LINK;
      }
    }
    ((i.MemberLinkMode = e), (i.getMemberLinkModeFromMexType = l));
  },
  66,
);
