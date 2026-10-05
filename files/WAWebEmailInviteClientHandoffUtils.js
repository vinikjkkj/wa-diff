__d(
  "WAWebEmailInviteClientHandoffUtils",
  [
    "WALogger",
    "WAWebEmailInviteContentUtils",
    "WAWebEmailInviteLoggingUtils",
    "WAWebExternalLink.react",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t) {
      var n = t.emails,
        r = t.groupName,
        a = t.inviteLink,
        i = t.origin,
        l = t.senderName,
        s = o("WAWebEmailInviteContentUtils").getEmailInviteContent(a, r, l),
        u = s.body,
        c = s.subject;
      (o("WAWebExternalLink.react").openExternalLink(
        o("WAWebEmailInviteContentUtils").buildGmailComposeUrl(n, c, u),
      ),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[WAWebGroupInviteViaEmailModal] Opened Gmail with ",
              " recipients",
            ])),
          n.length,
        ),
        o("WAWebEmailInviteLoggingUtils").logEmailInviteGmailClick({
          numRecipients: n.length,
          origin: i,
        }));
    }
    function c(e) {
      var t = e.emails,
        n = e.groupName,
        r = e.inviteLink,
        a = e.origin,
        i = e.senderName,
        l = o("WAWebEmailInviteContentUtils").getEmailInviteContent(r, n, i),
        u = l.body,
        c = l.subject;
      (o("WAWebExternalLink.react").openExternalLink(
        o("WAWebEmailInviteContentUtils").buildMailtoUrl(t, c, u),
        {
          target: o("WAWebExternalLink.react").ExternalLinkTarget
            .DEEPLINK_IN_CURRENT_TAB,
        },
      ),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[WAWebGroupInviteViaEmailModal] Opened email app with ",
              " recipients",
            ])),
          t.length,
        ),
        o("WAWebEmailInviteLoggingUtils").logEmailInviteMailtoClick({
          numRecipients: t.length,
          origin: a,
        }));
    }
    ((l.openEmailInviteInGmail = u), (l.openEmailInviteInMailApp = c));
  },
  98,
);
