__d(
  "WAWebUpdateNewsletterAdminProfileJob",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebDbErrors",
    "WAWebMexUpdateNewsletterAdminProfileJob",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaNewsletterMetadata",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "updateOwnNewsletterAdminProfile",
          function () {
            return u(e);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            r,
            a,
            i,
            l = t.adminProfile,
            s = t.newsletterJid,
            u = yield o(
              "WAWebMexUpdateNewsletterAdminProfileJob",
            ).mexUpdateNewsletterAdminProfile({
              adminProfile: l,
              newsletterID: s,
            }),
            c =
              (n = u.xwa2_newsletter_admin_profile_update) == null
                ? void 0
                : n.admin_profile,
            d =
              c == null
                ? null
                : {
                    id: c.id,
                    name: (r = c.name) != null ? r : "",
                    pictureId: (a = c.picture) == null ? void 0 : a.id,
                    pictureDirectPath:
                      (i = c.picture) == null ? void 0 : i.direct_path,
                  };
          try {
            yield o("WAWebSchemaNewsletterMetadata")
              .getNewsletterMetadataTable()
              .merge(s, { id: s, adminProfile: d });
          } catch (t) {
            throw (
              t instanceof o("WAWebDbErrors").DbOnLogoutAbort ||
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[newsletter][updateOwnNewsletterAdminProfile] db persist failed",
                      ])),
                  )
                  .tags("newsletter")
                  .sendLogs("newsletter-update-admin-profile-db-fail"),
              t
            );
          }
          return d;
        })),
        c.apply(this, arguments)
      );
    }
    l.updateOwnNewsletterAdminProfile = s;
  },
  98,
);
