__d(
  "WAWebGroupMembersAddedBy",
  [
    "WAWebApiContact",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebMsgType",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Map([
        [(e = o("WAWebCommonMsgSubtypeTypes")).MsgSubtype.Add, "author"],
        [e.MsgSubtype.V4AddInviteJoin, "author"],
        [e.MsgSubtype.SubGroupParticipantAddRich, "author"],
        [e.MsgSubtype.Invite, "invite_link"],
        [e.MsgSubtype.CommunityInviteRich, "invite_link"],
        [e.MsgSubtype.SubGroupInviteRich, "invite_link"],
        [e.MsgSubtype.Remove, "left"],
        [e.MsgSubtype.Leave, "left"],
        [e.MsgSubtype.LinkedGroupJoin, "unattributed"],
        [e.MsgSubtype.AutoAdd, "unattributed"],
        [e.MsgSubtype.InviteAutoAdd, "unattributed"],
        [e.MsgSubtype.GeneralChatAdd, "unattributed"],
        [e.MsgSubtype.DefaultSubGroupAdminAdd, "unattributed"],
        [e.MsgSubtype.CommunityParticipantAddRich, "unattributed"],
        [e.MsgSubtype.CommunityInviteAutoAddRich, "unattributed"],
        [e.MsgSubtype.SubgroupAdminTriggeredAutoAdd, "unattributed"],
        [e.MsgSubtype.SubgroupAdminTriggeredInviteAutoAdd, "unattributed"],
      ]);
    function u(e) {
      var t = new Map();
      return (
        e
          .filter(function (e) {
            return e.type === o("WAWebMsgType").MSG_TYPE.GP2;
          })
          .sort(function (e, t) {
            return e.t - t.t;
          })
          .forEach(function (e) {
            var n,
              r = s.get(e.subtype);
            r != null &&
              ((n = e.recipients) != null ? n : []).forEach(function (n) {
                t.set(n, d(r, e.author, n, e.t));
              });
          }),
        t
      );
    }
    function c(e, t) {
      var n = e.get(t),
        r = p(t),
        o = r == null ? null : e.get(r),
        a = n == null || (o != null && o.t > n.t) ? o : n;
      return a == null || a.type === "left" ? null : a;
    }
    function d(e, t, n, r) {
      return e === "author" && t != null && t.isUser() && !m(t, n)
        ? { type: "member", author: t, t: r }
        : e === "invite_link"
          ? { type: "invite_link", t: r }
          : e === "author" || e === "unattributed"
            ? { type: "unattributed", t: r }
            : e === "left"
              ? { type: "left", t: r }
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function m(e, t) {
      var n;
      return e.equals(t) || ((n = p(t)) == null ? void 0 : n.equals(e)) === !0;
    }
    function p(e) {
      return e.isUser()
        ? o("WAWebApiContact").getAlternateUserWid(
            o("WAWebWidFactory").asUserWidOrThrow(e),
          )
        : null;
    }
    ((l.readGroupMembersAddedBy = u), (l.getGroupMemberAddedBy = c));
  },
  98,
);
