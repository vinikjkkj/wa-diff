__d(
  "WAWebEmailInviteContentUtils",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t, n) {
      if (t == null) {
        var r = s._(/*BTDS*/ "Join me on WhatsApp").toString(),
          o = s
            ._(/*BTDS*/ "Download WhatsApp to chat with me: {inviteLink}", [
              s._param("inviteLink", e),
            ])
            .toString();
        return { body: o, subject: r };
      }
      var a = s
        ._(/*BTDS*/ 'Join the "{groupName}" group chat on WhatsApp!', [
          s._param("groupName", t),
        ])
        .toString();
      return { body: u(t, e, n), subject: a };
    }
    function u(e, t, n) {
      var r = s
          ._(
            /*BTDS*/ 'Hey, you\'re invited to the "{groupName}" group chat on WhatsApp! Tap the link below to join.',
            [s._param("groupName", e)],
          )
          .toString(),
        o = s._(/*BTDS*/ "See you there!").toString(),
        a = [r, "", t, "", o];
      return (
        n != null &&
          n !== "" &&
          a.push(
            s
              ._(/*BTDS*/ "\u2013 {senderName}", [s._param("senderName", n)])
              .toString(),
          ),
        a.join("\n")
      );
    }
    function c(e, t, n) {
      var r = e.map(encodeURIComponent).join(",");
      return (
        "https://mail.google.com/mail/?view=cm&fs=1&to=" +
        r +
        "&su=" +
        encodeURIComponent(t) +
        "&body=" +
        encodeURIComponent(n)
      );
    }
    function d(e, t, n) {
      var r = e.map(m).join(",");
      return (
        "mailto:" +
        r +
        "?subject=" +
        encodeURIComponent(t) +
        "&body=" +
        encodeURIComponent(n)
      );
    }
    function m(e) {
      return encodeURIComponent(e).replace(/%40/g, "@");
    }
    ((l.getEmailInviteContent = e),
      (l.buildGmailComposeUrl = c),
      (l.buildMailtoUrl = d));
  },
  226,
);
