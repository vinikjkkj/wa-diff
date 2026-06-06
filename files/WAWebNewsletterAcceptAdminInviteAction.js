__d(
  "WAWebNewsletterAcceptAdminInviteAction",
  [
    "WALogger",
    "WAWebChatEntryPoint",
    "WAWebCmd",
    "WAWebCommonNewsletterEnums",
    "WAWebMexAcceptNewsletterAdminInviteJob",
    "WAWebNewsletterCollection",
    "WAWebNewsletterMetadataJob",
    "WAWebNewsletterStorageUtils",
    "WAWebNewsletterValidationUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      try {
        var n,
          a = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(
            t.toString(),
          );
        (await o(
          "WAWebMexAcceptNewsletterAdminInviteJob",
        ).acceptNewsletterAdminInvite(a),
          await o("WAWebNewsletterMetadataJob").updateNewsletterMetadata({
            id: a,
            membershipType: o(
              "WAWebNewsletterStorageUtils",
            ).mapNewsletterMembershipTypeForStorage(
              o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Admin,
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
            (await o("WAWebCmd").Cmd.openChatBottom({
              chat: i,
              chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                .NewsletterAdminInviteAcceptModal,
            })));
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
    }
    l.acceptNewsletterAdminInviteAction = s;
  },
  98,
);
