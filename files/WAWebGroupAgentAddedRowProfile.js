__d(
  "WAWebGroupAgentAddedRowProfile",
  ["WAWebGroupAgentProfileRouting", "WAWebGroupHistoryGating"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return s(e, t, n == null ? void 0 : n.id);
    }
    function s(e, t, n) {
      if (e !== "add" || t == null || t.length !== 1) return null;
      var r = t[0],
        a = o(
          "WAWebGroupAgentProfileRouting",
        ).getGroupAgentProfileDestinationFor(r, n);
      return a == null ? null : { agentWid: r, destination: a };
    }
    function u(e) {
      return (
        o("WAWebGroupAgentProfileRouting").isViewerOwnLiveMuseAgent(
          e.agentWid,
        ) && o("WAWebGroupHistoryGating").isMuseGroupHistoryShareEnabled()
      );
    }
    ((l.getAddedGroupAgentProfile = e),
      (l.getAddedGroupAgentProfileFor = s),
      (l.canOfferHistoryOnAddedAgentRow = u));
  },
  98,
);
