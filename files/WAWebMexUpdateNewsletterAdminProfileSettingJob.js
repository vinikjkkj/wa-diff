__d(
  "WAWebMexUpdateNewsletterAdminProfileSettingJob",
  [
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexUpdateNewsletterAdminProfileSettingJobMutation.graphql",
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
          var r,
            a = t.adminProfilesEnabled,
            i = t.newsletterID,
            l =
              e !== void 0
                ? e
                : (e = n(
                    "WAWebMexUpdateNewsletterAdminProfileSettingJobMutation.graphql",
                  )),
            s = {
              newsletter_id: i,
              updates: { settings: { admin_profiles_enabled: a } },
            },
            u = yield o("WAWebMexClient").fetchQuery(l, s),
            c = u.xwa2_newsletter_update;
          if (c == null)
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
              500,
              "unexpected-null-mex-response",
            );
          var d = (r = c.state) == null ? void 0 : r.type;
          if (d === "DELETED" || d === "NON_EXISTING")
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
              404,
              "newsletter-deleted-or-non-existing",
            );
          if (d === "SUSPENDED")
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
              423,
              "newsletter-suspended",
            );
          return u;
        })),
        u.apply(this, arguments)
      );
    }
    l.mexUpdateNewsletterAdminProfileSetting = s;
  },
  98,
);
