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
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = o("WAWebOrgCollection").OrgCollection.getViewerPrimaryOrgId(),
            i = a == null ? null : o("WAWebOrgCollection").OrgCollection.get(a);
          if (
            i == null ||
            !o("WAWebOrgGatingUtils").isOrgInfoDisplayEnabled() ||
            !o("WAWebOrgViewerRoleUtils").canReadOrgDirectory(i)
          )
            return null;
          if (!o("WAWebOrgMemberSearchMatch").isOrgMemberQueryLongEnough(t))
            return d(i, []);
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
          if (l.length > 0 || c(i)) return d(i, l);
          try {
            n == null || n({ orgId: i.id, orgName: i.name });
            var s = yield o("WAWebOrgDirectorySyncJob").searchOrgDirectory(
                i.id,
                t.trim(),
              ),
              u = s.lids,
              m = s.rows;
            return (
              o("WAWebOrgBridgeApi").applyOrgContactRows({
                createModels: !0,
                lids: u,
                rows: m,
              }),
              d(
                i,
                u.flatMap(function (e) {
                  var t = o(
                    "WAWebOrgContactCollection",
                  ).OrgContactCollection.get(e);
                  return t == null ? [] : [t];
                }),
              )
            );
          } catch (t) {
            return (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[org-search] member search failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("org-member-search-failed-per-org"),
              babelHelpers.extends({}, d(i, []), {
                failure: r("WAWebNetworkStatus").online
                  ? "unavailable"
                  : "offline",
              })
            );
          }
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return (
        e.directoryIsComplete === !0 &&
        o("WAWebOrgFetchDirectoryAction").isOrgDirectoryLoaded(e.id)
      );
    }
    function d(e, t) {
      return { failure: null, members: t, orgId: e.id, orgName: e.name };
    }
    l.searchOrgMembers = s;
  },
  98,
);
