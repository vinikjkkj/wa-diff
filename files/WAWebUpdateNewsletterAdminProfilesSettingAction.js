__d(
  "WAWebUpdateNewsletterAdminProfilesSettingAction",
  [
    "WAJids",
    "WALogger",
    "WAWebChatGetters",
    "WAWebNewsletterBridgeApi",
    "WAWebUpdateNewsletterAdminProfileSettingJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (!o("WAWebChatGetters").getIsNewsletter(t)) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[updateNewsletterAdminProfilesSettingAction] not a newsletter",
                  ])),
              )
              .tags("newsletter")
              .sendLogs("update-newsletter-admin-action-not-a-newsletter");
            return;
          }
          var r = o("WAJids").toNewsletterJid(t.id.toJid());
          try {
            (yield o(
              "WAWebUpdateNewsletterAdminProfileSettingJob",
            ).updateNewsletterAdminProfileSetting({
              adminProfilesEnabled: n,
              newsletterJid: r,
            }),
              yield o(
                "WAWebNewsletterBridgeApi",
              ).NewsletterBridgeApi.updateNewsletterAdminProfileSetting({
                id: t.id,
                adminProfilesSettingEnabled: n,
              }));
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[updateNewsletterAdminProfilesSettingAction] update failed",
                    ])),
                )
                .tags("newsletter")
                .sendLogs("update-newsletter-admin-action-failed"),
              e
            );
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.updateNewsletterAdminProfilesSettingAction = u;
  },
  98,
);
