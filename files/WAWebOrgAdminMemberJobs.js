__d(
  "WAWebOrgAdminMemberJobs",
  [
    "Promise",
    "WAWebDBOrg",
    "WAWebOrgAdminGraphQL",
    "WAWebOrgListSyncJob",
    "WAWebSchemaOrg",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield o("WAWebOrgAdminGraphQL").setOrgAdminMemberRole(
              e,
              t,
              n,
            ),
            a = r.status === "success" ? r.memberCount : null,
            i = o("WAWebSchemaOrg").OrgMemberRole.cast(n);
          return (
            i != null &&
              (yield o("WAWebDBOrg").updateOrgMemberRole(e, t, i, a)),
            _(e, t)
          );
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebOrgAdminGraphQL").removeOrgAdminMember(e, t),
            r = n.status === "success" ? n.memberCount : null;
          return (yield o("WAWebDBOrg").removeOrgMember(e, t, r), _(e, t));
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebOrgAdminGraphQL").updateOrgAdminSettings(e, t);
          return {
            org: n,
            row: yield o("WAWebOrgListSyncJob").storeServerOrg(n),
          };
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = yield (e || (e = n("Promise"))).all([
              o("WAWebDBOrg").getOrgContactsByLids([r]),
              o("WAWebDBOrg").getOrgs(),
            ]),
            i = a[0],
            l = a[1];
          return {
            org: l.find(function (e) {
              return e.orgId === t;
            }),
            rows: i,
          };
        })),
        f.apply(this, arguments)
      );
    }
    ((l.changeOrgMemberRole = s),
      (l.removeOrgMember = c),
      (l.saveOrgSettings = m));
  },
  98,
);
