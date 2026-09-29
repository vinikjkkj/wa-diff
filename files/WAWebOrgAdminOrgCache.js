__d(
  "WAWebOrgAdminOrgCache",
  [
    "Promise",
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
    var e,
      s,
      u,
      c,
      d,
      m,
      p = function () {
        return !0;
      },
      _ = (m || (m = n("Promise"))).resolve();
    function f(e, t) {
      return (
        t === void 0 && (t = p),
        (_ = _.then(function () {
          return C(e, t);
        })),
        _
      );
    }
    function g(e) {
      return (
        (_ = _.then(function () {
          return v(e);
        })),
        _
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = (yield o("WAWebDBOrg").getOrgContacts(e)).flatMap(
              function (e) {
                if (e.role == null) return [];
                var t = L(e.lid);
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
                memberTag: r.memberTag === "" ? null : r.memberTag,
                phoneNumber: a.phoneNumber,
                role: k(r.role),
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
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            if (!t()) return;
            var n = yield o("WAWebDBOrg").replaceOrgs(e.map(R), t);
            if (n == null) return;
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[org-admin] cached orgs=",
                  " dropped=",
                  "",
                ])),
              e.length,
              n,
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
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            yield o("WAWebDBOrg").putOrgs([R(e)]);
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
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return {
        description: e.description,
        iconFullUrl: e.iconURI,
        iconThumbUrl: e.iconURI,
        isMemberDirectoryEnabled: e.isMemberDirectoryEnabled,
        memberCount: e.memberCount,
        memberTagOptions: e.memberTagOptions,
        name: e.name,
        orgId: e.id,
        viewerRole: e.viewerRole == null ? null : E(e.viewerRole),
      };
    }
    function L(t) {
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
    function E(e) {
      return o("WAWebSchemaOrg").OrgMemberRole.cast(e);
    }
    function k(e) {
      return e === o("WAWebSchemaOrg").OrgMemberRole.Creator
        ? "CREATOR"
        : e === o("WAWebSchemaOrg").OrgMemberRole.Admin
          ? "ADMIN"
          : "MEMBER";
    }
    ((l.writeCachedOrgAdminOrgs = f),
      (l.writeCachedOrgAdminOrg = g),
      (l.readCachedOrgRoster = h));
  },
  98,
);
