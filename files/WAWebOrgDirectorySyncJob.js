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
              return y(e, t);
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
    var c = new Set();
    function d() {
      c = new Set();
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = (yield o("WAWebDBOrg").getOrgs()).find(function (t) {
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
          if (c.has(e)) return !0;
          var l = (yield o("WAWebDBOrg").getOrgContacts(e)).every(function (e) {
            return e.firstName != null;
          });
          return (l && c.add(e), l);
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = (yield o("WAWebDBOrg").getOrgContacts(e)).map(function (e) {
            return e.lid;
          });
          return {
            lids: t,
            rows: yield o("WAWebDBOrg").getOrgContactsByLids(t),
          };
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebOrgAdminGraphQL").loadOrgAdminMemberSearchPage(
              e,
              t,
              null,
              null,
            ),
            r = n.members.flatMap(function (t) {
              return y(e, t);
            });
          return {
            lids: r.map(function (e) {
              return e.lid;
            }),
            rows: yield o("WAWebDBOrg").mergeOrgContacts(r),
          };
        })),
        h.apply(this, arguments)
      );
    }
    function y(t, n) {
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
      (l.resetStoredOrgDirectoryChecks = d),
      (l.isStoredOrgDirectoryFresh = m),
      (l.loadStoredOrgDirectory = _),
      (l.searchOrgDirectory = g),
      (l.toOrgContactRow = y));
  },
  98,
);
