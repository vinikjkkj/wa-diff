__d(
  "WAWebOrgDirectorySyncJob",
  [
    "WALogger",
    "WAWebDBOrg",
    "WAWebOrgAdminGraphQL",
    "WAWebOrgOrder",
    "WAWebSchemaOrg",
    "WAWebUsernameTypes",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebOrgAdminGraphQL").loadOrgAdminDirectory(
            e,
            null,
          );
          if (t.status === "roster_too_large") return t;
          var n = t.memberCount,
            a = t.members,
            i = t.memberUpdatedTsUsec,
            l = a.flatMap(function (t) {
              return g(e, t);
            });
          if (l.length !== a.length) throw r("err")("INCOMPLETE_DIRECTORY");
          var s = yield o("WAWebDBOrg").replaceCompleteOrgRoster(
              e,
              l,
              n,
              !0,
              i,
            ),
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
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = (yield o("WAWebDBOrg").getOrgs()).find(function (t) {
              return t.orgId === e;
            }),
            n = t != null ? t : {},
            r = n.directoryIsComplete,
            a = n.memberListTsUsec,
            i = n.memberUpdatedTsUsec;
          return (
            r === !0 &&
            a != null &&
            i != null &&
            o("WAWebOrgOrder").compareUnsignedDecimalStrings(a, i) >= 0
          );
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = (yield o("WAWebDBOrg").getOrgContacts(e)).map(function (e) {
            return e.lid;
          });
          return {
            lids: t,
            rows: yield o("WAWebDBOrg").getOrgContactsByLids(t),
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
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebOrgAdminGraphQL").loadOrgAdminMemberSearchPage(
              e,
              t,
              null,
              null,
            ),
            r = n.members.flatMap(function (t) {
              return g(e, t);
            });
          return {
            lids: r.map(function (e) {
              return e.lid;
            }),
            rows: yield o("WAWebDBOrg").mergeOrgContacts(r),
          };
        })),
        f.apply(this, arguments)
      );
    }
    function g(t, n) {
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
        },
        l = o("WAWebUsernameTypes").asMaybeUsername(n.username);
      return (
        l != null && (i.username = l),
        n.phoneNumber != null && (i.phoneNumber = n.phoneNumber),
        [i]
      );
    }
    ((l.syncOrgDirectory = s),
      (l.isStoredOrgDirectoryFresh = c),
      (l.loadStoredOrgDirectory = m),
      (l.searchOrgDirectory = _),
      (l.toOrgContactRow = g));
  },
  98,
);
