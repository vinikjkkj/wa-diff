__d(
  "WAWebOrgAdminFlowUtils",
  [
    "fbt",
    "WALogger",
    "WAWebOrgAdminGraphQL",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = { isTruncated: !1, members: [], status: "idle" };
    function d(e, t, n) {
      return e && t
        ? s
            ._(
              /*BTDS*/ "Could not load Org admin. This organization is unavailable, or you do not have admin access to it.",
            )
            .toString()
        : e
          ? s
              ._(
                /*BTDS*/ "Could not load managed groups. The member directory is still available.",
              )
              .toString()
          : t
            ? s
                ._(
                  /*BTDS*/ "Could not load the member directory. Managed groups are still available.",
                )
                .toString()
            : n
              ? s
                  ._(
                    /*BTDS*/ "Could not load the managed roster. Managed groups are still available.",
                  )
                  .toString()
              : null;
    }
    function m(e, t, n, r) {
      return e || n
        ? null
        : t
          ? s._(/*BTDS*/ "Loading organizations\u2026")
          : r === 0
            ? s._(/*BTDS*/ "No organizations available")
            : null;
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (!n)
            return {
              entries: [],
              failed: !1,
              isTruncated: !1,
              totalCount: null,
            };
          try {
            return babelHelpers.extends(
              {},
              yield o("WAWebOrgAdminGraphQL").loadOrgAdminRoster(t),
              { failed: !1 },
            );
          } catch (t) {
            return (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[org-admin] managed roster request failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("org-admin-load-roster-failed"),
              { entries: [], failed: !0, isTruncated: !1, totalCount: 0 }
            );
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield o("WAWebOrgAdminGraphQL").loadOrgAdminDirectoryPage(
                e,
                null,
              ),
              n = t.members;
            return { isTruncated: !1, members: n, status: "loaded" };
          } catch (e) {
            return e instanceof
              o("WAWebOrgAdminGraphQL").OrgAdminRosterTooLargeError
              ? babelHelpers.extends({}, c, {
                  isTruncated: !0,
                  status: "loaded",
                })
              : (o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[org-admin] private member directory request failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("org-admin-load-private-directory-failed"),
                babelHelpers.extends({}, c, { status: "failed" }));
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n) {
      return babelHelpers.extends({}, e, {
        members: e.members.map(function (e) {
          return e.lid === t ? babelHelpers.extends({}, e, { role: n }) : e;
        }),
      });
    }
    function y(e, t) {
      return babelHelpers.extends({}, e, {
        members: e.members.filter(function (e) {
          return e.lid !== t;
        }),
      });
    }
    function C(e, t) {
      return t
        ? "not_loaded"
        : e.status === "failed"
          ? "failed"
          : e.status === "loaded"
            ? "loaded"
            : e.status === "idle"
              ? "not_loaded"
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e.status,
                  );
                })();
    }
    function b(e, t, n) {
      return !e && !t && n !== "";
    }
    function v(e, t) {
      return e ? (t ? "truncated" : "loaded") : "unavailable";
    }
    function S(e, t, n) {
      var r = new Map(e);
      return (n == null ? r.delete(t) : r.set(t, n), r);
    }
    function R(e, t) {
      var n = new Set(
        e.map(function (e) {
          return e.lid;
        }),
      );
      return (
        e.length +
        t.filter(function (e) {
          return e.memberLID == null || !n.has(e.memberLID);
        }).length
      );
    }
    function L(e) {
      return Array.from(
        new Set(
          e.flatMap(function (e) {
            return e.memberTag == null || e.memberTag === ""
              ? []
              : [e.memberTag];
          }),
        ),
      ).sort(function (e, t) {
        return e.localeCompare(t);
      });
    }
    function E(e) {
      return e === "overview" || e === "settings"
        ? "home"
        : e === "members"
          ? "people"
          : e === "group_chats"
            ? "groups"
            : e === "channels"
              ? "channels"
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function k(e) {
      return e === "home"
        ? "overview"
        : e === "people"
          ? "members"
          : e === "groups"
            ? "group_chats"
            : e === "channels"
              ? "channels"
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    ((l.EMPTY_PRIVATE_DIRECTORY = c),
      (l.getHomeLoadErrorMessage = d),
      (l.getOrganizationStatusMessage = m),
      (l.loadAdminRosterForHome = p),
      (l.loadPrivateDirectoryForHome = f),
      (l.withPrivateMemberRole = h),
      (l.withoutPrivateMember = y),
      (l.getPrivateDirectoryLoadStatus = C),
      (l.canStartRosterAppend = b),
      (l.getRosterUploadStatus = v),
      (l.withRosterMemberCount = S),
      (l.getManagedMemberCount = R),
      (l.getRosterMemberTags = L),
      (l.getPageForTab = E),
      (l.getTabForPage = k));
  },
  226,
);
