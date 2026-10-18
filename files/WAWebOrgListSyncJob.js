__d(
  "WAWebOrgListSyncJob",
  [
    "WALogger",
    "WAWebDBOrg",
    "WAWebOrgAdminGraphQL",
    "WAWebSchemaOrg",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return o("WAWebDBOrg").getOrgs();
    }
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield o("WAWebOrgAdminGraphQL").loadOrgAdminOrgs(),
            n = yield o("WAWebDBOrg").replaceOrgs(t.map(_));
          return (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[org-list] stored orgs=",
                  "",
                ])),
              n.length,
            ),
            n
          );
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return o("WAWebDBOrg").clearOrgDirectories(e);
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebDBOrg").putOrgs([_(e)]),
            n = t[0];
          return n;
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return {
        description: e.description,
        iconFullUrl: e.iconLargeURI,
        iconHandle: e.iconHandle,
        iconThumbUrl: e.iconURI,
        isMemberDirectoryEnabled: e.isMemberDirectoryEnabled,
        memberCount: e.memberCount,
        memberTagOptions: e.memberTagOptions,
        memberUpdatedTsUsec: e.memberUpdatedTsUsec,
        name: e.name,
        orgId: e.id,
        orgUpdatedTsUsec: e.orgUpdatedTsUsec,
        viewerRole: f(e.viewerRole),
      };
    }
    function f(e) {
      return e == null ? null : o("WAWebSchemaOrg").OrgMemberRole.cast(e);
    }
    ((l.loadStoredOrgs = s),
      (l.syncOrgList = u),
      (l.clearHiddenOrgDirectories = d),
      (l.storeServerOrg = m));
  },
  98,
);
