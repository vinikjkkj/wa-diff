__d(
  "WAWebDebugOrgContacts",
  [
    "WAWebApiContact",
    "WAWebContactCollection",
    "WAWebDrawerManager",
    "WAWebOrgAdminDirectoryAdapters",
    "WAWebOrgAdminFlowLoadable",
    "WAWebOrgCollection",
    "WAWebOrgContactCollection",
    "WAWebOrgFetchDirectoryAction",
    "WAWebOrgRefreshListAction",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "nullthrows",
    "react",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = [];
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          r("vulture")("EVcoPsWPrNoNDb7yOwp5q89-0J8=");
          var t = yield m(e),
            n = new Set(t.populated),
            a = o("WAWebOrgAdminDirectoryAdapters").toOrgAdminDirectoryMembers(
              o("WAWebOrgContactCollection")
                .OrgContactCollection.getOrgContactsForOrg(t.orgID)
                .filter(function (e) {
                  return n.has(e.id);
                })
                .map(function (e) {
                  var n, r, o;
                  return {
                    displayName: e.memberName,
                    lid: e.id,
                    memberTag:
                      (n =
                        (r = e.orgMetadata[t.orgID]) == null
                          ? void 0
                          : r.memberTag) != null
                        ? n
                        : "",
                    phoneNumber: e.phoneNumber,
                    role:
                      (o = e.orgMetadata[t.orgID]) == null ? void 0 : o.role,
                    username: e.username,
                  };
                }),
            );
          return (
            o("WAWebDrawerManager").DrawerManager.openDrawerMid(
              s.jsx(r("WAWebOrgAdminFlowLoadable"), {
                initialPage: "people",
                previewData: {
                  directory: a,
                  directoryTruncated: !1,
                  groups: [],
                  orgs: [
                    {
                      id: t.orgID,
                      isMemberDirectoryEnabled: !0,
                      memberCount: a.length,
                      name: t.orgName,
                      viewerRole: "ADMIN",
                    },
                  ],
                  selectedOrgID: t.orgID,
                },
              }),
            ),
            t
          );
        })),
        d.apply(this, arguments)
      );
    }
    c.doc =
      "Open the org admin Members screen with display names, missing usernames, and known phone numbers. Uses the read-only admin preview.";
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          r("vulture")("ZEogMoZDjvp77dOrNw2VJK24ZWw=");
          var t = yield f(e),
            n = yield o("WAWebOrgFetchDirectoryAction").fetchOrgDirectory(t, {
              createModels: !0,
            });
          if (n.status === "failed") throw n.error;
          _();
          var a = [],
            i = o(
              "WAWebOrgContactCollection",
            ).OrgContactCollection.getOrgContactsForOrg(t),
            l = function* (t) {
              if (t.id === o("WAWebUserPrefsMeUser").getMeLidUserOrThrow().user)
                return 0;
              var e = o("WAWebWidFactory").createUserLidOrThrow(t.id, "lid"),
                n = o("WAWebApiContact").getPhoneNumber(e);
              if (n == null) return 0;
              var r = t.phoneNumber,
                i = t.username;
              (u.push(function () {
                t.set({ phoneNumber: r, username: i });
              }),
                t.set({ phoneNumber: n.user, username: null }));
              var l = function* () {
                var e = o("WAWebContactCollection").ContactCollection.get(s),
                  t =
                    e != null
                      ? e
                      : o("WAWebContactCollection").ContactCollection.gadd(s),
                  n = { username: t.username };
                (u.push(function () {
                  e == null
                    ? o("WAWebContactCollection").ContactCollection.remove(t)
                    : t.set(n);
                }),
                  t.set({ username: null }));
              };
              for (var s of [e, n]) yield* l();
              a.push(t.id);
            },
            s;
          for (var c of i) s = yield* l(c);
          return {
            orgID: t,
            orgName: r("nullthrows")(
              o("WAWebOrgCollection").OrgCollection.get(t),
            ).name,
            populated: a,
            skipped: i.length - a.length,
          };
        })),
        p.apply(this, arguments)
      );
    }
    m.doc =
      "Clear usernames for org contacts with known phone numbers, keeping display names. Loads organizations automatically and defaults to the first org. Changes are in memory; restore with restoreOrgContactsAfterPhoneNumberFallback.";
    function _() {
      r("vulture")("XTjODGJfhNus1LXtyHbv4MLcDpI=");
      var e = u;
      ((u = []),
        e.reverse().forEach(function (e) {
          return e();
        }));
    }
    _.doc =
      "Restore contacts and memberships changed by populateOrgContactsForPhoneNumberFallback.";
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          r("vulture")("PmFKcm5GAA--Q6gmO6YGOhQ91NE=");
          var t = yield o("WAWebOrgRefreshListAction").refreshOrgList({
            bypassCooldown: !0,
          });
          if (t.status === "failed") throw t.error;
          var n =
            e != null
              ? e
              : o("WAWebOrgCollection").OrgCollection.getViewerPrimaryOrgId();
          if (n == null)
            throw r("err")(
              "No organizations are available for debug contacts.",
            );
          return n;
        })),
        g.apply(this, arguments)
      );
    }
    var h = {
      openOrgAdminForPhoneNumberFallback: c,
      populateOrgContactsForPhoneNumberFallback: m,
      restoreOrgContactsAfterPhoneNumberFallback: _,
    };
    l.default = h;
  },
  98,
);
