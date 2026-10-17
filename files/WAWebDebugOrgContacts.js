__d(
  "WAWebDebugOrgContacts",
  [
    "WAJids",
    "WAWebApiContact",
    "WAWebContactCollection",
    "WAWebDrawerManager",
    "WAWebOrgAdminDirectoryAdapters",
    "WAWebOrgAdminFlowLoadable",
    "WAWebOrgCollection",
    "WAWebOrgContactCollection",
    "WAWebOrgDirectoryRepository",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "nullthrows",
    "react",
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
          var t = yield m(e),
            n = new Set(t.populated),
            a = o("WAWebOrgAdminDirectoryAdapters").toOrgAdminDirectoryMembers(
              o("WAWebOrgContactCollection")
                .OrgContactCollection.getByOrgId(t.orgID)
                .filter(function (e) {
                  return n.has(e.lid);
                })
                .map(function (e) {
                  return {
                    displayName: e.memberName,
                    lid: o("WAJids").lidFromLidUserJid(e.lid),
                    memberTag: e.memberTag,
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
          var t = yield f(e),
            n = yield o("WAWebOrgDirectoryRepository").ensureFullRoster(t);
          if (n.status === "failed") throw n.error;
          _();
          var a = [],
            i = o("WAWebOrgContactCollection").OrgContactCollection.getByOrgId(
              t,
            );
          for (var l of i)
            if (
              o("WAJids").lidFromLidUserJid(l.lid) !==
              o("WAWebUserPrefsMeUser").getMeLidUserOrThrow().user
            ) {
              var s = o("WAWebWidFactory").createUserLidOrThrow(l.lid),
                c = o("WAWebApiContact").getPhoneNumber(s);
              if (c != null) {
                var d = function* (t) {
                  var e = t.phoneNumber,
                    n = t.username;
                  (u.push(function () {
                    t.set({ phoneNumber: e, username: n });
                  }),
                    t.set({ phoneNumber: c.user, username: null }));
                };
                for (var m of o(
                  "WAWebOrgContactCollection",
                ).OrgContactCollection.getByLid(l.lid))
                  yield* d(m);
                var p = function* () {
                  var e = o("WAWebContactCollection").ContactCollection.get(g),
                    t =
                      e != null
                        ? e
                        : o("WAWebContactCollection").ContactCollection.gadd(g),
                    n = { username: t.username };
                  (u.push(function () {
                    e == null
                      ? o("WAWebContactCollection").ContactCollection.remove(t)
                      : t.set(n);
                  }),
                    t.set({ username: null }));
                };
                for (var g of [s, c]) yield* p();
                a.push(l.lid);
              }
            }
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
          o("WAWebOrgDirectoryRepository").getOrgDirectoryRepositorySnapshot()
            .orderedOrgIDs == null &&
            (yield o("WAWebOrgDirectoryRepository").refreshOrganizations());
          var t = o(
            "WAWebOrgDirectoryRepository",
          ).getOrgDirectoryRepositorySnapshot();
          if (t.orderedOrgIDs == null) {
            var n;
            throw (n = t.organizationsError) != null
              ? n
              : r("err")("Unable to load organizations.");
          }
          var a = e != null ? e : t.orderedOrgIDs[0];
          if (a == null)
            throw r("err")(
              "No organizations are available for debug contacts.",
            );
          return a;
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
