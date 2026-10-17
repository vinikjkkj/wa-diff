__d(
  "WAWebOrgMemberSearchModel",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WAWebNetworkStatus",
    "WAWebOrgAdminGraphQL",
    "WAWebOrgCollection",
    "WAWebOrgContactCollection",
    "WAWebOrgDirectoryRepository",
    "WAWebOrgGatingUtils",
    "WAWebSchemaOrg",
    "WAWebSearchUtils",
    "WAWebSimpleSearch",
    "WAWebUsernameTypes",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 5e3,
      d = 3,
      m = 3,
      p = 3,
      _ = Object.freeze([]);
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.trim();
          if (
            !o("WAWebOrgGatingUtils").isOrgInfoDisplayEnabled() ||
            n.replace(/\s/g, "").length < m
          )
            return _;
          try {
            var a = o("WAWebOrgCollection").OrgCollection.getModelsArray();
            if (a.length === 0) return _;
            var i = h(a, n);
            return i != null ? N(i) : (t == null || t(), N(yield y(a, n)));
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[org-search] could not read the org list",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("org-member-search-failed"),
              _
            );
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      var n = e.map(function (e) {
        return o("WAWebOrgContactCollection")
          .OrgContactCollection.getByOrgId(e.id)
          .filter(function (e) {
            return o("WAJids").lidFromLidUserJid(e.lid) !== "";
          });
      });
      if (
        !e.every(function (e, t) {
          return L(e, n[t]);
        })
      )
        return null;
      var r = E(t);
      return e.map(function (e, t) {
        var o = n[t];
        return R(e, r)
          ? T(e, v(o, r))
          : T(
              e,
              o
                .filter(function (e) {
                  return k(e, r);
                })
                .map(I)
                .sort(D),
            );
      });
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return (u || (u = n("Promise"))).all(
            e.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    try {
                      var n = yield o(
                        "WAWebOrgAdminGraphQL",
                      ).loadOrgAdminMemberSearchPage(e.id, t, null, null);
                      return T(e, n.members);
                    } catch (t) {
                      return x(e, t);
                    }
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          );
        })),
        C.apply(this, arguments)
      );
    }
    var b = 25;
    function v(e, t) {
      var n = [],
        r = [];
      for (var o of e) k(o, t) ? n.push(o) : r.push(o);
      return []
        .concat(n.sort(S), r.sort(S).slice(0, Math.max(0, b - n.length)))
        .map(I);
    }
    function S(e, t) {
      return e.memberName.localeCompare(t.memberName);
    }
    function R(e, t) {
      return t.length >= p && o("WAWebSimpleSearch").simpleSearch(t, [e.name]);
    }
    function L(e, t) {
      var n;
      return (
        e.directoryIsComplete === !0 &&
        e.memberCount != null &&
        e.memberCount < c &&
        t.length >= e.memberCount &&
        ((n = o("WAWebOrgDirectoryRepository")
          .getOrgDirectoryRepositorySnapshot()
          .directoryStateByOrgID.get(e.id)) == null
          ? void 0
          : n.status) === "ready"
      );
    }
    function E(e) {
      var t = o("WAWebSearchUtils").normalizeString(e);
      return t.startsWith("@") ? t.slice(1).trim() : t;
    }
    function k(e, t) {
      if (t === "") return !1;
      var n = o("WAWebUsernameTypes").serializeMaybeUsername(e.username);
      return (
        o("WAWebSimpleSearch").simpleSearch(t, [e.memberName]) ||
        (n != null && o("WAWebSearchUtils").normalizeString(n).startsWith(t))
      );
    }
    function I(e) {
      var t, n;
      return {
        displayName: e.memberName,
        lid: o("WAJids").lidFromLidUserJid(e.lid),
        memberTag: e.memberTag === "" ? null : e.memberTag,
        phoneNumber: (t = e.phoneNumber) != null ? t : null,
        role:
          e.role === o("WAWebSchemaOrg").OrgMemberRole.Creator
            ? "CREATOR"
            : e.role === o("WAWebSchemaOrg").OrgMemberRole.Admin
              ? "ADMIN"
              : "MEMBER",
        username:
          (n = o("WAWebUsernameTypes").serializeMaybeUsername(e.username)) !=
          null
            ? n
            : null,
      };
    }
    function T(e, t) {
      return {
        failure: null,
        loading: !1,
        members: t,
        orgId: e.id,
        orgName: e.name,
      };
    }
    function D(e, t) {
      return e.displayName.localeCompare(t.displayName);
    }
    function x(t, n) {
      return (
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[org-search] member search failed for one org",
              ])),
          )
          .catching(r("getErrorSafe")(n))
          .sendLogs("org-member-search-failed-per-org"),
        {
          failure: r("WAWebNetworkStatus").online ? "unavailable" : "offline",
          loading: !1,
          members: P,
          orgId: t.id,
          orgName: t.name,
        }
      );
    }
    function $() {
      return N(
        o("WAWebOrgCollection")
          .OrgCollection.getModelsArray()
          .map(function (e) {
            return {
              failure: null,
              loading: !0,
              members: P,
              orgId: e.id,
              orgName: e.name,
            };
          }),
      );
    }
    var P = Object.freeze([]);
    function N(e) {
      var t = e
          .filter(function (e) {
            return e.failure != null || e.loading || e.members.length > 0;
          })
          .sort(M),
        n = []
          .concat(
            t.filter(function (e) {
              return e.failure == null;
            }),
            t.filter(function (e) {
              return e.failure != null;
            }),
          )
          .slice(0, d)
          .sort(M);
      return n.length === 0 ? _ : n;
    }
    function M(e, t) {
      return e.orgName.localeCompare(t.orgName);
    }
    ((l.EMPTY_ORG_SECTIONS = _),
      (l.searchOrgMembers = f),
      (l.getOrgMemberSearchLoadingSections = $));
  },
  98,
);
