__d(
  "WAWebGenerateNewsletterFollowerInviteMessageProto",
  ["WAWebE2EProtoUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.contextInfo,
        n = e.json,
        r = n.newsletterFollowerInviteInfo,
        a = r.inviteMessage,
        i = r.newsletterId,
        l = r.newsletterName,
        s = r.pictureThumbnail;
      return {
        newsletterFollowerInviteMessageV2: {
          newsletterJid: o("WAWebE2EProtoUtils").encodeJid(i),
          newsletterName: l,
          caption: a,
          jpegThumbnail: o("WAWebE2EProtoUtils").encodeBytes(s),
          contextInfo: t,
        },
      };
    }
    l.default = e;
  },
  98,
);
