__d(
  "WAWebGroupAgentAddAttribution",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e = n("$InternalEnum")({
      MEMBER: "muse_agent_member",
      OWNER: "muse_agent_owner",
    });
    function l(t) {
      return t == null ? null : e.cast(t);
    }
    ((i.GroupAgentAddAttribution = e),
      (i.groupAgentAddAttributionFromBody = l));
  },
  66,
);
