__d(
  "WAWebGenerateNewsletterAdminInviteMessageProto",
  ["WAWebE2EProtoUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.contextInfo,
        n = e.json,
        r = n.newsletterAdminInviteInfo,
        a = r.inviteExpiration,
        i = r.inviteMessage,
        l = r.newsletterId,
        s = r.newsletterName,
        u = r.pictureThumbnail;
      return {
        newsletterAdminInviteMessage: {
          newsletterJid: o("WAWebE2EProtoUtils").encodeJid(l),
          newsletterName: s,
          caption: i,
          inviteExpiration: a,
          jpegThumbnail: o("WAWebE2EProtoUtils").encodeBytes(u),
          contextInfo: t,
        },
      };
    }
    l.default = e;
  },
  98,
);
