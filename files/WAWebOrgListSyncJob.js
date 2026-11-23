__d(
  "WAWebOrgListSyncJob",
  ["WALogger", "WAWebDBOrg", "WAWebOrgAdminGraphQL", "WAWebSchemaOrg"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return o("WAWebDBOrg").getOrgs();
    }
    async function u() {
      var t = await o("WAWebOrgAdminGraphQL").loadOrgAdminOrgs(),
        n = await o("WAWebDBOrg").replaceOrgs(t.map(m));
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
    }
    function c(e) {
      return o("WAWebDBOrg").clearOrgDirectories(e);
    }
    async function d(e) {
      var t = await o("WAWebDBOrg").putOrgs([m(e)]),
        n = t[0];
      return n;
    }
    function m(e) {
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
        viewerRole: p(e.viewerRole),
      };
    }
    function p(e) {
      return e == null ? null : o("WAWebSchemaOrg").OrgMemberRole.cast(e);
    }
    ((l.loadStoredOrgs = s),
      (l.syncOrgList = u),
      (l.clearHiddenOrgDirectories = c),
      (l.storeServerOrg = d));
  },
  98,
);
