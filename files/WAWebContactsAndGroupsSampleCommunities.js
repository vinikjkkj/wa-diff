__d(
  "WAWebContactsAndGroupsSampleCommunities",
  ["WAWebContactsAndGroupsMyGroups", "WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    var e = [
        {
          groups: [
            { memberCount: 86, name: "Events", role: "admin" },
            { memberCount: 203, name: "Swap and sell", role: "member" },
            { memberCount: 24, name: "Dog walkers", role: "requestSent" },
            { memberCount: 37, name: "Gardening club", role: "canJoin" },
          ],
          isAdmin: !0,
          memberCount: 412,
          minutesSinceActive: 4,
          name: "Riverside Residents",
        },
        {
          groups: [
            { memberCount: 31, name: "Class 4B", role: "member" },
            { memberCount: 22, name: "Football club", role: "canJoin" },
          ],
          isAdmin: !1,
          memberCount: 58,
          minutesSinceActive: 95,
          name: "Parents of Year 4",
        },
        {
          groups: [
            { memberCount: 40, name: "Monthly picks", role: "admin" },
            { memberCount: 25, name: "Sci-fi corner", role: "member" },
            { memberCount: 12, name: "Poetry", role: "canJoin" },
          ],
          isAdmin: !0,
          memberCount: 96,
          minutesSinceActive: 1440,
          name: "Book Club London",
        },
        {
          groups: [
            { memberCount: 60, name: "Sunday rides", role: "member" },
            { memberCount: 18, name: "Bike repairs", role: "canJoin" },
          ],
          isAdmin: !1,
          memberCount: 145,
          minutesSinceActive: 30,
          name: "Cycling Crew",
        },
      ],
      s = {
        members: function (t, n) {
          return n.memberCount - t.memberCount || t.name.localeCompare(n.name);
        },
        name: function (t, n) {
          return t.name.localeCompare(n.name);
        },
        nameDescending: function (t, n) {
          return n.name.localeCompare(t.name);
        },
        recent: function (t, n) {
          return (
            t.minutesSinceActive - n.minutesSinceActive ||
            t.name.localeCompare(n.name)
          );
        },
      },
      u = [],
      c = "99999999900000",
      d = null;
    function m(t, n) {
      return !n || t.length > 0 ? u : (d != null || (d = e.map(_)), d);
    }
    function p(e, t, n, r) {
      var a = o("WAWebContactsAndGroupsMyGroups").createNameSearch(n);
      return e
        .filter(function (e) {
          return (t === "all" || e.isAdmin) && a(e.name);
        })
        .sort(s[r]);
    }
    function _(e, t) {
      var n = {
        id: f(t, 1),
        isAnnouncements: !0,
        memberCount: e.memberCount,
        name: e.name,
        role: e.isAdmin ? "admin" : "member",
      };
      return {
        groups: [n].concat(
          e.groups.map(function (e, n) {
            return babelHelpers.extends({}, e, {
              id: f(t, n + 2),
              isAnnouncements: !1,
            });
          }),
        ),
        id: f(t, 0),
        isAdmin: e.isAdmin,
        memberCount: e.memberCount,
        minutesSinceActive: e.minutesSinceActive,
        name: e.name,
      };
    }
    function f(e, t) {
      var n = String(t).padStart(2, "0");
      return o("WAWebWidFactory").createWid("" + c + e + n + "@g.us");
    }
    ((l.getShownSampleCommunities = m), (l.getSampleCommunitiesTableRows = p));
  },
  98,
);
