__d(
  "WAWebOrganizationsMexNotificationHandlers",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadedRetriable",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return r("JSResourceForInteraction")(
            "WAWebMexOrgMemberUpdateNotificationHandler",
          )
            .__setRef("WAWebOrganizationsMexNotificationHandlers")
            .load();
        }),
        "OrgMemberUpdateNotificationHandler",
      ),
      s = { NotificationOrgMemberUpdate: u };
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = yield e(),
            o = r.mexHandleOrgMemberUpdate;
          return o(t, n);
        })),
        c.apply(this, arguments)
      );
    }
    l.default = s;
  },
  98,
);
