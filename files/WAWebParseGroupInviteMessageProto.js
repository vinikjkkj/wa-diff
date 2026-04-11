__d(
  "WAWebParseGroupInviteMessageProto",
  ["WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.messageProtobuf,
        r = n.groupInviteMessage;
      if (r != null) {
        var a = r.caption,
          i = r.contextInfo,
          l = r.groupJid,
          s = r.groupName,
          u = r.inviteCode,
          c = r.inviteExpiration,
          d = babelHelpers.extends({}, t, {
            type: o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE,
            kind: o("WAWebMsgType").MsgKind.GroupsV4Invite,
            comment: a,
            inviteCode: u,
            inviteCodeExp: c == null ? void 0 : c.toString(),
            inviteGrp: l,
            inviteGrpName: s,
          });
        return { msgData: d, contextInfo: i };
      }
    }
    l.default = e;
  },
  98,
);
