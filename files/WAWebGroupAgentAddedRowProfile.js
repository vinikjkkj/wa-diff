__d(
  "WAWebGroupAgentAddedRowProfile",
  ["WAWebGroupAgentProfileRouting"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      if (e !== "add" || t == null || t.length !== 1) return null;
      var r = t[0],
        a = o("WAWebGroupAgentProfileRouting").getGroupAgentProfileDestination(
          r,
          n,
        );
      return a == null ? null : { agentWid: r, destination: a };
    }
    l.getAddedGroupAgentProfile = e;
  },
  98,
);
