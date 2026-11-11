__d(
  "WAWebDebugOrgContacts",
  [
    "WAWebApiContact",
    "WAWebContactCollection",
    "WAWebDrawerManager",
    "WAWebOrgAdminDirectoryAdapters",
    "WAWebOrgAdminFlowLoadable",
    "WAWebOrgCollection",
    "WAWebOrgFetchDirectoryAction",
    "WAWebOrgRefreshListAction",
    "WAWebUserUtils",
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
          var t, n;
          r("vulture")("EVcoPsWPrNoNDb7yOwp5q89-0J8=");
          var a = yield m(e),
            i = new Set(a.populated),
            l = o("WAWebOrgAdminDirectoryAdapters").toOrgAdminDirectoryMembers(
              ((t =
                (n = o("WAWebOrgCollection").OrgCollection.get(a.orgID)) == null
                  ? void 0
                  : n.members.toArray()) != null
                ? t
                : []
              )
                .filter(function (e) {
                  return i.has(e.id);
                })
                .map(function (e) {
                  var t;
                  return {
                    displayName: e.memberName,
                    lid: e.id,
                    memberTag: (t = e.memberTag) != null ? t : "",
                    phoneNumber: e.phoneNumber,
                    role: e.role,
                    username: e.username,
                  };
                }),
            );
          return (
            o("WAWebDrawerManager").DrawerManager.openDrawerMid(
              s.jsx(r("WAWebOrgAdminFlowLoadable"), {
                initialPage: "people",
                previewData: {
                  directory: l,
                  directoryTruncated: !1,
                  groups: [],
                  orgs: [
                    {
                      id: a.orgID,
                      isMemberDirectoryEnabled: !0,
                      memberCount: l.length,
                      name: a.orgName,
                      viewerRole: "ADMIN",
                    },
                  ],
                  selectedOrgID: a.orgID,
                },
              }),
            ),
            a
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
          var t, n;
          r("vulture")("ZEogMoZDjvp77dOrNw2VJK24ZWw=");
          var a = yield f(e),
            i = yield o("WAWebOrgFetchDirectoryAction").fetchOrgDirectory(a, {
              createModels: !0,
            });
          if (i.status === "failed") throw i.error;
          _();
          var l = [],
            s =
              (t =
                (n = o("WAWebOrgCollection").OrgCollection.get(a)) == null
                  ? void 0
                  : n.members.toArray()) != null
                ? t
                : [],
            c = function* (t) {
              if (t.id === o("WAWebUserUtils").getMeLidUserOrThrow().user)
                return 0;
              var e = o("WAWebWidFactory").createUserLidOrThrow(t.id, "lid"),
                n = o("WAWebApiContact").getPhoneNumber(e);
              if (n == null) return 0;
              var r = t.phoneNumber,
                a = t.username;
              (u.push(function () {
                t.set({ phoneNumber: r, username: a });
              }),
                t.set({ phoneNumber: n.user, username: null }));
              var i = function* () {
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
              for (var s of [e, n]) yield* i();
              l.push(t.id);
            },
            d;
          for (var m of s) d = yield* c(m);
          return {
            orgID: a,
            orgName: r("nullthrows")(
              o("WAWebOrgCollection").OrgCollection.get(a),
            ).name,
            populated: l,
            skipped: s.length - l.length,
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
