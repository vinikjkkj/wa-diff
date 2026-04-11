__d(
  "WAWebOutContactInviteUtils",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    var e = "https://www.whatsapp.com/dl";
    function u() {
      return String(
        s._(
          /*BTDS*/ "Chat with me on WhatsApp! It lets us message privately on iPhone, Android, and more. This invite expires soon. {download_url}",
          [s._param("download_url", e)],
        ),
      );
    }
    function c(t) {
      return e + "/code=" + t;
    }
    function d(e) {
      var t = c(e);
      return String(
        s._(
          /*BTDS*/ "Chat with me on WhatsApp! It lets us message privately on iPhone, Android, and more. This invite expires soon. {invite_url}",
          [s._param("invite_url", t)],
        ),
      );
    }
    function m() {
      return String(
        s._(
          /*BTDS*/ "You're invited to join a group chat on WhatsApp! It's the world's most popular messaging app. This invite expires in 3 days. {download_url}",
          [s._param("download_url", e)],
        ),
      );
    }
    ((l.getInviteMessageText = u),
      (l.getInviteUrl = c),
      (l.getInviteMessageTextWithCode = d),
      (l.getMultiGroupInviteMessageText = m));
  },
  226,
);
