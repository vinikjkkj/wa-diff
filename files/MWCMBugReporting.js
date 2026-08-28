__d(
  "MWCMBugReporting",
  [
    "MWChatStateUtils",
    "getCometEntityKey",
    "useCometRouteTracePolicy",
    "useCometRouterState",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e === "comet.messenger.inbox";
    }
    function s(e) {
      return (
        (e == null ? void 0 : e.entity_type) === "group" &&
        (e == null ? void 0 : e.section) === "CHATS"
      );
    }
    function u(t) {
      var n,
        a = r("useCometRouterState")(),
        i = r("useCometRouteTracePolicy")(),
        l = a && r("getCometEntityKey")(a.main.route);
      return !!(
        o("MWChatStateUtils").useHasCommunityChatTabsOpen() ||
        (e(i) &&
          (a == null || (n = a.main.route.params) == null
            ? void 0
            : n.folder_id) != null) ||
        (t == null ? void 0 : t.folderName) === "community" ||
        s(l)
      );
    }
    ((l.isCometMessengerInboxTracePolicy = e), (l.useIsCommunityBugReport = u));
  },
  98,
);
