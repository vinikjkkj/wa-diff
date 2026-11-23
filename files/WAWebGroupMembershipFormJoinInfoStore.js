__d(
  "WAWebGroupMembershipFormJoinInfoStore",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e = n("$InternalEnum")({
      INVITE_LINK: "invite_link",
      PRIVATE_INVITE: "private_invite",
      SUBGROUP: "subgroup",
    });
    function l(t) {
      return ((typeof t == "object" && t !== null) || typeof t == "function") &&
        t.type === "inviteCode"
        ? e.INVITE_LINK
        : ((typeof t == "object" && t !== null) || typeof t == "function") &&
            t.type === "privateInvite"
          ? e.PRIVATE_INVITE
          : ((typeof t == "object" && t !== null) || typeof t == "function") &&
              t.type === "subgroup"
            ? e.SUBGROUP
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    t,
                );
              })();
    }
    var s = new Map();
    function u(e, t) {
      return e + ":" + t.toString();
    }
    function c(e, t) {
      return s.get(u(e, t));
    }
    function d(e, t, n) {
      var r = u(e, t);
      n == null ? s.delete(r) : s.set(r, n);
    }
    ((i.GroupMembershipFormJoinSurface = e),
      (i.getGroupMembershipFormJoinSurface = l),
      (i.getGroupMembershipFormJoinInfo = c),
      (i.setGroupMembershipFormJoinInfo = d));
  },
  66,
);
