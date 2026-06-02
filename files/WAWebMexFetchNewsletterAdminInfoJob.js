__d(
  "WAWebMexFetchNewsletterAdminInfoJob",
  ["WAWebMexClient", "WAWebMexFetchNewsletterAdminInfoJobQuery.graphql"],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebMexFetchNewsletterAdminInfoJobQuery.graphql"));
    async function u(e) {
      var t,
        n,
        r,
        a,
        i = { newsletter_id: e },
        l = await o("WAWebMexClient").fetchQuery(s, i),
        u = null;
      if (
        ((t = l.xwa2_newsletter_admin) == null || (t = t.admin_profile) == null
          ? void 0
          : t.name) != null
      ) {
        var c, d;
        u = {
          id: l.xwa2_newsletter_admin.admin_profile.id,
          name: l.xwa2_newsletter_admin.admin_profile.name,
          pictureId:
            (c = l.xwa2_newsletter_admin.admin_profile.picture) == null
              ? void 0
              : c.id,
          pictureDirectPath:
            (d = l.xwa2_newsletter_admin) == null ||
            (d = d.admin_profile.picture) == null
              ? void 0
              : d.direct_path,
        };
      }
      return {
        adminCount:
          (n = l.xwa2_newsletter_admin) == null ? void 0 : n.admin_count,
        adminProfile: u,
        adminProfilesSettingEnabled:
          (r =
            (a = l.xwa2_newsletter_admin) == null ||
            (a = a.admin_settings) == null
              ? void 0
              : a.admin_profiles_enabled) != null
            ? r
            : !1,
      };
    }
    l.mexFetchNewsletterAdminInfo = u;
  },
  98,
);
