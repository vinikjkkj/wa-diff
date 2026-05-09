__d(
  "WAWebDebugCommunityNavigation",
  ["WAWebActiveCommunityNavigation"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e, t;
      return (e =
        (t = r("WAWebActiveCommunityNavigation").getActive()) == null
          ? void 0
          : t.toString()) != null
        ? e
        : null;
    }
    ((e.doc =
      "Returns the JID of the community currently open in the left-drawer navigation flow (or null). Stays set across community sub-flows like manage groups, add new/existing group, and settings."),
      (e.paramsToExecute = []));
    var s = { getActiveCommunity: e };
    l.default = s;
  },
  98,
);
