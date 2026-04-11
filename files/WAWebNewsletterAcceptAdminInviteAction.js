__d(
  "WAWebNewsletterAcceptAdminInviteAction",
  [
    "WALogger",
    "WAWebCmd",
    "WAWebCommonNewsletterEnums",
    "WAWebMexAcceptNewsletterAdminInviteJob",
    "WAWebNewsletterCollection",
    "WAWebNewsletterMetadataJob",
    "WAWebNewsletterStorageUtils",
    "WAWebNewsletterValidationUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n,
              a = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(
                t.toString(),
              );
            (yield o(
              "WAWebMexAcceptNewsletterAdminInviteJob",
            ).acceptNewsletterAdminInvite(a),
              yield o("WAWebNewsletterMetadataJob").updateNewsletterMetadata({
                id: a,
                membershipType: o(
                  "WAWebNewsletterStorageUtils",
                ).mapNewsletterMembershipTypeForStorage(
                  o("WAWebCommonNewsletterEnums").NewsletterMembershipType
                    .Admin,
                ),
              }));
            var i = r("WAWebNewsletterCollection").get(t);
            (i == null ||
              (n = i.newsletterMetadata) == null ||
              n.set(
                "membershipType",
                o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin,
              ),
              i != null &&
                (yield o("WAWebCmd").Cmd.openChatBottom({ chat: i })));
          } catch (t) {
            throw (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[acceptNewsletterAdminInviteAction] accept failed: ",
                      "",
                    ])),
                  t,
                )
                .tags("newsletter")
                .sendLogs("newsletter-failed-to-accept-admin-invite"),
              t
            );
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.acceptNewsletterAdminInviteAction = s;
  },
  98,
);
