__d(
  "WAWebMexUpdateNewsletterAdminProfileJob",
  [
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexUpdateNewsletterAdminProfileJobMutation.graphql",
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
            a = t.adminProfile,
            i = t.newsletterID,
            l =
              e !== void 0
                ? e
                : (e = n(
                    "WAWebMexUpdateNewsletterAdminProfileJobMutation.graphql",
                  )),
            s = null;
          if (a != null) {
            var u = { name: a.name },
              c = a.pictureUpdate;
            (c.action === "set"
              ? (u.picture = c.picture)
              : c.action === "remove" && (u.picture = ""),
              (s = u));
          }
          var d = { newsletter_id: i, admin_profile: s },
            m = yield o("WAWebMexClient").fetchQuery(l, d),
            p = m.xwa2_newsletter_admin_profile_update;
          if (p == null)
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
              500,
              "unexpected-null-mex-response",
            );
          var _ = (r = p.state) == null ? void 0 : r.type;
          if (_ === "DELETED" || _ === "NON_EXISTING")
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
              404,
              "newsletter-deleted-or-non-existing",
            );
          if (_ === "SUSPENDED")
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
              423,
              "newsletter-suspended",
            );
          return m;
        })),
        u.apply(this, arguments)
      );
    }
    l.mexUpdateNewsletterAdminProfile = s;
  },
  98,
);
