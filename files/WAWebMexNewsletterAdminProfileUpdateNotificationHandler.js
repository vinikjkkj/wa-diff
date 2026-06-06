__d(
  "WAWebMexNewsletterAdminProfileUpdateNotificationHandler",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebJidToWid",
    "WAWebNewsletterAdminNotificationJob",
    "WAWebNewsletterValidationUtils",
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
          var r = n.xwa2_notify_newsletter_on_admin_metadata_update,
            a = r.admin_profile,
            i = r.id;
          try {
            var l, u;
            if (i == null) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[mex][newsletter] null id in admin_metadata_update",
                    ])),
                )
                .tags("mex", "newsletter")
                .sendLogs(
                  "newsletter-mex-admin-metadata-notification-unexpected-null-id",
                );
              return;
            }
            var c = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(
                i,
              ),
              d =
                (a == null ? void 0 : a.name) == null
                  ? null
                  : {
                      id: a == null ? void 0 : a.id,
                      name: a == null ? void 0 : a.name,
                      pictureId:
                        a == null || (l = a.picture) == null ? void 0 : l.id,
                      pictureDirectPath:
                        a == null || (u = a.picture) == null
                          ? void 0
                          : u.direct_path,
                    };
            yield o(
              "WAWebNewsletterAdminNotificationJob",
            ).updateNewsletterAdminProfile(c, d);
            var m = o("WAWebJidToWid").newsletterJidToWid(c);
            o("WAWebBackendApi").frontendFireAndForget(
              "updateNewsletterAdminProfile",
              { id: m, adminProfile: d },
            );
          } catch (e) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[mex][newsletter] admin-metadata persist failed",
                  ])),
              )
              .tags("mex", "newsletter")
              .sendLogs("mex-newsletter-admin-metadata-notification-db-fail");
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.mexHandleNewsletterAdminProfileUpdateNotification = u;
  },
  98,
);
