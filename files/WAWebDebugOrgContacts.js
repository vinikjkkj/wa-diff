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
    "err",
    "nullthrows",
    "react",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = [];
    async function c(e) {
      var t, n;
      r("vulture")("EVcoPsWPrNoNDb7yOwp5q89-0J8=");
      var a = await d(e),
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
    }
    c.doc =
      "Open the org admin Members screen with display names, missing usernames, and known phone numbers. Uses the read-only admin preview.";
    async function d(e) {
      var t, n;
      r("vulture")("ZEogMoZDjvp77dOrNw2VJK24ZWw=");
      var a = await p(e),
        i = await o("WAWebOrgFetchDirectoryAction").fetchOrgDirectory(a, {
          createModels: !0,
        });
      if (i.status === "failed") throw i.error;
      m();
      var l = [],
        s =
          (t =
            (n = o("WAWebOrgCollection").OrgCollection.get(a)) == null
              ? void 0
              : n.members.toArray()) != null
            ? t
            : [],
        c = async function (t) {
          if (t.id === o("WAWebUserUtils").getMeLidUserOrThrow().user) return 0;
          var e = o("WAWebWidFactory").createUserLidOrThrow(t.id, "lid"),
            n = o("WAWebApiContact").getPhoneNumber(e);
          if (n == null) return 0;
          var r = t.phoneNumber,
            a = t.username;
          (u.push(function () {
            t.set({ phoneNumber: r, username: a });
          }),
            t.set({ phoneNumber: n.user, username: null }));
          var i = async function () {
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
          for (var s of [e, n]) await i();
          l.push(t.id);
        },
        d;
      for (var _ of s) d = await c(_);
      return {
        orgID: a,
        orgName: r("nullthrows")(o("WAWebOrgCollection").OrgCollection.get(a))
          .name,
        populated: l,
        skipped: s.length - l.length,
      };
    }
    d.doc =
      "Clear usernames for org contacts with known phone numbers, keeping display names. Loads organizations automatically and defaults to the first org. Changes are in memory; restore with restoreOrgContactsAfterPhoneNumberFallback.";
    function m() {
      r("vulture")("XTjODGJfhNus1LXtyHbv4MLcDpI=");
      var e = u;
      ((u = []),
        e.reverse().forEach(function (e) {
          return e();
        }));
    }
    m.doc =
      "Restore contacts and memberships changed by populateOrgContactsForPhoneNumberFallback.";
    async function p(e) {
      r("vulture")("PmFKcm5GAA--Q6gmO6YGOhQ91NE=");
      var t = await o("WAWebOrgRefreshListAction").refreshOrgList({
        bypassCooldown: !0,
      });
      if (t.status === "failed") throw t.error;
      var n =
        e != null
          ? e
          : o("WAWebOrgCollection").OrgCollection.getViewerPrimaryOrgId();
      if (n == null)
        throw r("err")("No organizations are available for debug contacts.");
      return n;
    }
    var _ = {
      openOrgAdminForPhoneNumberFallback: c,
      populateOrgContactsForPhoneNumberFallback: d,
      restoreOrgContactsAfterPhoneNumberFallback: m,
    };
    l.default = _;
  },
  98,
);
