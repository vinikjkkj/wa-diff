__d(
  "WAWebOrganizationsMexNotificationHandlers",
  ["JSResourceForInteraction", "WAWebLazyLoadedRetriable"],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWebLazyLoadedRetriable")(async function () {
        return r("JSResourceForInteraction")(
          "WAWebMexOrgMemberUpdateNotificationHandler",
        )
          .__setRef("WAWebOrganizationsMexNotificationHandlers")
          .load();
      }, "OrgMemberUpdateNotificationHandler"),
      s = { NotificationOrgMemberUpdate: u };
    async function u(t, n) {
      var r = await e(),
        o = r.mexHandleOrgMemberUpdate;
      return o(t, n);
    }
    l.default = s;
  },
  98,
);
