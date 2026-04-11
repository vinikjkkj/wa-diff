__d(
  "WAWebGenerateGroupInviteMessageProto",
  ["WAWebE2EProtoUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.contextInfo,
        n = e.json;
      return {
        groupInviteMessage: {
          inviteCode: n.inviteCode,
          inviteExpiration: parseInt(n.inviteCodeExp, 10),
          groupJid: n.inviteGrp,
          groupName: n.inviteGrpName,
          caption: n.comment,
          jpegThumbnail: o("WAWebE2EProtoUtils").encodeBytes(
            n.inviteGrpJpegThum,
          ),
          contextInfo: t,
        },
      };
    }
    l.default = e;
  },
  98,
);
