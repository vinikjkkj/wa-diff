__d(
  "WAWebContactsAndGroupsGrowthSuggestions",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t = e.adminCount,
        n = e.joins,
        r = e.needsApproval,
        o = [];
      return (
        n.linkJoinCount > 0 &&
          r === !1 &&
          o.push({ count: n.linkJoinCount, kind: "reviewJoining" }),
        t === 1 &&
          n.joinCount > 0 &&
          o.push({ count: n.joinCount, kind: "chooseAdmin" }),
        o
      );
    }
    i.getGrowthSuggestions = e;
  },
  66,
);
