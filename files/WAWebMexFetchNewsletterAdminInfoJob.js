__d(
  "WAWebMexFetchNewsletterAdminInfoJob",
  [
    "WAWebMexClient",
    "WAWebMexFetchNewsletterAdminInfoJobQuery.graphql",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebMexFetchNewsletterAdminInfoJobQuery.graphql"));
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            r = { newsletter_id: e },
            a = yield o("WAWebMexClient").fetchQuery(s, r),
            i = null;
          if (
            ((t = a.xwa2_newsletter_admin) == null ||
            (t = t.admin_profile) == null
              ? void 0
              : t.name) != null
          ) {
            var l, u;
            i = {
              id: a.xwa2_newsletter_admin.admin_profile.id,
              name: a.xwa2_newsletter_admin.admin_profile.name,
              pictureId:
                (l = a.xwa2_newsletter_admin.admin_profile.picture) == null
                  ? void 0
                  : l.id,
              pictureDirectPath:
                (u = a.xwa2_newsletter_admin) == null ||
                (u = u.admin_profile.picture) == null
                  ? void 0
                  : u.direct_path,
            };
          }
          return {
            adminCount:
              (n = a.xwa2_newsletter_admin) == null ? void 0 : n.admin_count,
            adminProfile: i,
          };
        })),
        c.apply(this, arguments)
      );
    }
    l.mexFetchNewsletterAdminInfo = u;
  },
  98,
);
