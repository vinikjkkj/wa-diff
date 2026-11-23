__d(
  "WAWebOrgDirectorySyncJob",
  [
    "WALogger",
    "WAWebDBOrg",
    "WAWebOrgAdminGraphQL",
    "WAWebOrgOrder",
    "WAWebSchemaOrg",
    "WAWebUsernameTypes",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(e) {
      var t = await o("WAWebOrgAdminGraphQL").loadOrgAdminDirectory(e, null);
      if (t.status === "roster_too_large") return t;
      var n = t.memberCount,
        a = t.members,
        i = t.memberUpdatedTsUsec,
        l = a.flatMap(function (t) {
          return _(e, t);
        });
      if (l.length !== a.length) throw r("err")("INCOMPLETE_DIRECTORY");
      var s = await o("WAWebDBOrg").replaceCompleteOrgRoster(e, l, n, !0, i),
        u = s.org,
        c = s.rows;
      return {
        lids: l.map(function (e) {
          return e.lid;
        }),
        memberCount: n,
        org: u,
        rows: c,
        status: "success",
      };
    }
    var u = new Set();
    function c() {
      u = new Set();
    }
    async function d(e) {
      var t = (await o("WAWebDBOrg").getOrgs()).find(function (t) {
          return t.orgId === e;
        }),
        n = t != null ? t : {},
        r = n.directoryIsComplete,
        a = n.memberListTsUsec,
        i = n.memberUpdatedTsUsec;
      if (
        r !== !0 ||
        a == null ||
        i == null ||
        o("WAWebOrgOrder").compareUnsignedDecimalStrings(a, i) < 0
      )
        return !1;
      if (u.has(e)) return !0;
      var l = (await o("WAWebDBOrg").getOrgContacts(e)).every(function (e) {
        return e.firstName != null;
      });
      return (l && u.add(e), l);
    }
    async function m(e) {
      var t = (await o("WAWebDBOrg").getOrgContacts(e)).map(function (e) {
        return e.lid;
      });
      return { lids: t, rows: await o("WAWebDBOrg").getOrgContactsByLids(t) };
    }
    async function p(e, t) {
      var n = await o("WAWebOrgAdminGraphQL").loadOrgAdminMemberSearchPage(
          e,
          t,
          null,
          null,
        ),
        r = n.members.flatMap(function (t) {
          return _(e, t);
        });
      return {
        lids: r.map(function (e) {
          return e.lid;
        }),
        rows: await o("WAWebDBOrg").mergeOrgContacts(r),
      };
    }
    function _(t, n) {
      var r,
        a = o("WAWebSchemaOrg").OrgMemberRole.cast(n.role);
      if (a == null)
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[org-directory] unsupported member role: ",
                  "",
                ])),
              n.role,
            )
            .sendLogs("org-directory-unsupported-role"),
          []
        );
      var i = {
        lid: n.lid,
        memberName:
          n.memberName == null || n.memberName === ""
            ? n.displayName
            : n.memberName,
        memberTag: (r = n.memberTag) != null ? r : "",
        orgId: t,
        role: a,
      };
      (n.firstName != null && (i.firstName = n.firstName),
        n.lastName != null && n.lastName !== "" && (i.lastName = n.lastName));
      var l = o("WAWebUsernameTypes").asMaybeUsername(n.username);
      return (
        l != null && (i.username = l),
        n.phoneNumber != null && (i.phoneNumber = n.phoneNumber),
        [i]
      );
    }
    ((l.syncOrgDirectory = s),
      (l.resetStoredOrgDirectoryChecks = c),
      (l.isStoredOrgDirectoryFresh = d),
      (l.loadStoredOrgDirectory = m),
      (l.searchOrgDirectory = p),
      (l.toOrgContactRow = _));
  },
  98,
);
