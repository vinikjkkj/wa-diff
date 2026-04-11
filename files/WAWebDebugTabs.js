__d(
  "WAWebDebugTabs",
  ["WAWebSideNavButtonsActivityModel"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebSideNavButtonsActivityModel").getLastActiveChat();
    }
    ((e.doc = "Returns the last active chat id stored in the model."),
      (e.paramsToExecute = []));
    function s(e) {
      e === void 0
        ? o("WAWebSideNavButtonsActivityModel").setLastActiveChat(null)
        : o("WAWebSideNavButtonsActivityModel").setLastActiveChat(e);
    }
    ((s.doc = "Set the last active chat id stored in the model."),
      (s.paramsToExecute = []));
    function u(e) {
      e === void 0
        ? o("WAWebSideNavButtonsActivityModel").setLastActiveCommunity(null)
        : o("WAWebSideNavButtonsActivityModel").setLastActiveCommunity(e);
    }
    ((u.doc = "Set the last active community id stored in the model."),
      (u.paramsToExecute = []));
    var c = { tabsGetLastChat: e, tabsSetLastChat: s, tabsSetLastCommunity: u };
    l.default = c;
  },
  98,
);
