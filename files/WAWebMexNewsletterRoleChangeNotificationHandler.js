__d(
  "WAWebMexNewsletterRoleChangeNotificationHandler",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebMexNewsletterUtils",
    "WAWebNewsletterMetadataJob",
    "WAWebNewsletterStorageUtils",
    "WAWebNewsletterValidationUtils",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsNewsletter",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t, n) {
      var r,
        a =
          n.xwa2_notify_newsletter_admin_promote != null ? "promote" : "demote",
        i =
          (r = n.xwa2_notify_newsletter_admin_promote) != null
            ? r
            : n.xwa2_notify_newsletter_admin_demote;
      if (i == null) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[mex][newsletter] admin-",
                " failed: null payload",
              ])),
            a,
          )
          .tags("mex", "newsletter")
          .sendLogs("mex-newsletternotification-role-change-fail");
        return;
      }
      try {
        var l = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(
            i.id,
          ),
          u =
            i.user.id != null
              ? o("WAWebWidFactory").createUserWidOrThrow(i.user.id)
              : null;
        if (!u) return;
        var c = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
          d = o("WAWebMexNewsletterUtils").mapRoleToMembership(i.user_new_role);
        if (d == null) return;
        (u.equals(c)
          ? (await o("WAWebNewsletterMetadataJob").updateNewsletterMetadata({
              id: l,
              membershipType: o(
                "WAWebNewsletterStorageUtils",
              ).mapNewsletterMembershipTypeForStorage(d),
            }),
            o("WAWebBackendApi").frontendFireAndForget(
              "handleMyRoleChangeNotification",
              { jid: l },
            ))
          : o("WAWebBackendApi").frontendFireAndForget(
              "handleOtherUserRoleChangeNotification",
              { jid: l, userId: u, newRole: d },
            ),
          await o("WAWebUserPrefsNewsletter").flushCachedNewsletterSubscribers(
            l,
          ),
          o("WAWebBackendApi").frontendFireAndForget(
            "displayRoleChangeDesktopNotification",
            { notification: n },
          ));
      } catch (e) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[mex][newsletter] admin-",
                " failed: jid parse err",
              ])),
            a,
          )
          .tags("mex", "newsletter")
          .sendLogs("mex-newsletternotification-role-change-fail-" + a);
      }
    }
    l.mexHandleNewsletterRoleChange = u;
  },
  98,
);
