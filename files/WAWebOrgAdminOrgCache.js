__d(
  "WAWebOrgAdminOrgCache",
  [
    "WALogger",
    "WAWebDBOrg",
    "WAWebLidAwareContactsDB",
    "WAWebOrgContactIdentityResolver",
    "WAWebSchemaOrg",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e) {
      return g(e);
    }
    function p(e) {
      return y(e);
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = (yield o("WAWebDBOrg").getOrgContacts(e)).flatMap(
              function (e) {
                if (e.role == null) return [];
                var t = v(e.lid);
                return t == null ? [] : [{ jid: t, row: e }];
              },
            );
            if (t.length === 0) return [];
            var n = yield r("WAWebLidAwareContactsDB").bulkGet(
              t.map(function (e) {
                return e.jid;
              }),
            );
            return t.map(function (e, t) {
              var r = e.row,
                a = o(
                  "WAWebOrgContactIdentityResolver",
                ).resolveOrgContactIdentity(n[t], r);
              return {
                displayName: a.displayName,
                lid: r.lid,
                memberName: r.memberName === "" ? a.displayName : r.memberName,
                memberTag: r.memberTag === "" ? null : r.memberTag,
                phoneNumber: a.phoneNumber,
                role: R(r.role),
                username: a.username,
              };
            });
          } catch (e) {
            var a = r("getErrorSafe")(e);
            throw (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[org-admin] cached org roster read failed",
                    ])),
                )
                .catching(a)
                .sendLogs("org-admin-org-roster-cache-read-failed"),
              a
            );
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield o("WAWebDBOrg").replaceOrgs(e.map(b));
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[org-admin] cached orgs=",
                  " dropped=",
                  "",
                ])),
              e.length,
              t,
            );
          } catch (e) {
            o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[org-admin] cached org write failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("org-admin-org-cache-write-failed");
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            yield o("WAWebDBOrg").putOrgs([b(e)]);
          } catch (e) {
            o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[org-admin] cached org write failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("org-admin-org-cache-write-failed");
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return {
        description: e.description,
        iconFullUrl: e.iconURI,
        iconThumbUrl: e.iconURI,
        isMemberDirectoryEnabled: e.isMemberDirectoryEnabled,
        memberCount: e.memberCount,
        memberTagOptions: e.memberTagOptions,
        name: e.name,
        orgId: e.id,
        viewerRole: e.viewerRole == null ? null : S(e.viewerRole),
      };
    }
    function v(t) {
      try {
        return o("WAWebWidFactory").createUserLidOrThrow(t, "lid").toJid();
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[org-admin] unparseable roster lid, skipping member",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("org-admin-org-roster-cache-bad-lid"),
          null
        );
      }
    }
    function S(e) {
      return o("WAWebSchemaOrg").OrgMemberRole.cast(e);
    }
    function R(e) {
      return e === o("WAWebSchemaOrg").OrgMemberRole.Creator
        ? "CREATOR"
        : e === o("WAWebSchemaOrg").OrgMemberRole.Admin
          ? "ADMIN"
          : "MEMBER";
    }
    ((l.writeCachedOrgAdminOrgs = m),
      (l.writeCachedOrgAdminOrg = p),
      (l.readCachedOrgRoster = _));
  },
  98,
);
