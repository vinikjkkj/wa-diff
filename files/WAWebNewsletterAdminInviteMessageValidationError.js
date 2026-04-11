__d(
  "WAWebNewsletterAdminInviteMessageValidationError",
  ["$InternalEnum", "WAWebHandleMsgError"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
        MISSING_NEWSLETTER_JID:
          "newsletter_admin_invite_missing_newsletter_jid",
        MISSING_NEWSLETTER_NAME:
          "newsletter_admin_invite_missing_newsletter_name",
        MISSING_INVITE_EXPIRATION:
          "newsletter_admin_invite_missing_invite_expiration",
        INVALID_NEWSLETTER_JID:
          "newsletter_admin_invite_invalid_newsletter_jid",
      }),
      s = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "NewsletterAdminInviteMessageValidationError"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WAWebHandleMsgError").MessageValidationError);
    ((l.NewsletterAdminInviteMessageValidationErrorCode = e),
      (l.NewsletterAdminInviteMessageValidationError = s));
  },
  98,
);
