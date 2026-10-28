__d(
  "WAWebOrgSearchMembersAction",
  [
    "WALogger",
    "WAWebNetworkStatus",
    "WAWebOrgBridgeApi",
    "WAWebOrgCollection",
    "WAWebOrgContactCollection",
    "WAWebOrgDirectorySyncJob",
    "WAWebOrgFetchDirectoryAction",
    "WAWebOrgGatingUtils",
    "WAWebOrgMemberSearchMatch",
    "WAWebOrgViewerRoleUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = o("WAWebOrgCollection").OrgCollection.getViewerPrimaryOrgId(),
            i = a == null ? null : o("WAWebOrgCollection").OrgCollection.get(a);
          if (
            i == null ||
            !o("WAWebOrgGatingUtils").isOrgInfoDisplayEnabled() ||
            !o("WAWebOrgViewerRoleUtils").canReadOrgDirectory(i)
          )
            return null;
          if (!o("WAWebOrgMemberSearchMatch").isOrgMemberQueryLongEnough(t))
            return m(i, []);
          o("WAWebOrgFetchDirectoryAction").isOrgDirectoryLoaded(i.id) ||
            (n == null || n({ orgId: i.id, orgName: i.name }),
            yield o("WAWebOrgFetchDirectoryAction").fetchOrgDirectory(i.id, {
              createModels: !0,
            }));
          var l = o("WAWebOrgMemberSearchMatch").findOrgMembers(
            o(
              "WAWebOrgContactCollection",
            ).OrgContactCollection.getOrgContactsForOrg(i.id),
            i.name,
            t,
          );
          if (l.length > 0 || d(i)) return m(i, l);
          try {
            n == null || n({ orgId: i.id, orgName: i.name });
            var u = yield o("WAWebOrgDirectorySyncJob").searchOrgDirectory(
                i.id,
                t.trim(),
              ),
              c = u.lids,
              p = u.rows;
            return (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[org-search] server search hits=",
                    "",
                  ])),
                c.length,
              ),
              o("WAWebOrgBridgeApi").applyOrgContactRows({
                createModels: !0,
                lids: c,
                rows: p,
              }),
              m(
                i,
                c.flatMap(function (e) {
                  var t = o(
                    "WAWebOrgContactCollection",
                  ).OrgContactCollection.get(e);
                  return t == null ? [] : [t];
                }),
              )
            );
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[org-search] member search failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("org-member-search-failed-per-org"),
              babelHelpers.extends({}, m(i, []), {
                failure: r("WAWebNetworkStatus").online
                  ? "unavailable"
                  : "offline",
              })
            );
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return (
        e.directoryIsComplete === !0 &&
        o("WAWebOrgFetchDirectoryAction").isOrgDirectoryLoaded(e.id)
      );
    }
    function m(e, t) {
      return { failure: null, members: t, orgId: e.id, orgName: e.name };
    }
    l.searchOrgMembers = u;
  },
  98,
);
