__d(
  "WAWebOpenSharableEventPageAction",
  [
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebFocusTracer",
    "WAWebMarkSharableEventSeenAction",
    "WAWebMidDrawerEmptyState.react",
    "WAWebNavBarTypes",
    "WAWebOpenSharableEventCreateFlowAction",
    "WAWebSharableEventExternalStore",
    "WAWebSharableEventGatingUtils",
    "WAWebSharableEventPageLoadAction",
    "WAWebSharableEventPageLoadable",
    "WAWebSideNavButtonsActivityModel",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = o("WAWebSharableEventExternalStore").createSharableEventStore(null),
      c = o("WAWebSharableEventExternalStore").createSharableEventStore(null),
      d = null;
    function m(e, t) {
      !o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabledForAction(
        "open-page",
      ) ||
        u.get() === e ||
        (c.get() !== e && c.set(null),
        (d = t != null ? t : null),
        L(e),
        o("WAWebDrawerManager").DrawerManager.openDrawerMid(
          o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
            ? { descriptorType: "sharable_event_page", eventId: e }
            : s.jsx(r("WAWebSharableEventPageLoadable"), { eventId: e }, e),
          { disableRotateFocus: !0, transition: "none" },
        ),
        o("WAWebMarkSharableEventSeenAction").markSharableEventSeen(e),
        o("WAWebSharableEventPageLoadAction").loadSharableEventPage(e));
    }
    function p(e, t) {
      (c.set((t == null ? void 0 : t.edit) === !0 ? e : null), y(), m(e));
    }
    function _() {
      return c.get();
    }
    function f(e) {
      return c.subscribe(e);
    }
    function g() {
      c.set(null);
    }
    function h(e) {
      (o("WAWebCmd").Cmd.setActiveNavBarItem(e),
        o("WAWebSideNavButtonsActivityModel").setLastActiveButton(e));
    }
    function y() {
      o("WAWebSideNavButtonsActivityModel").getLastActiveButton() !==
        o("WAWebNavBarTypes").NavBarItems.Events &&
        (o("WAWebCmd").Cmd.closeActiveChat(),
        o("WAWebCmd").Cmd.setActiveNavBarItem(
          o("WAWebNavBarTypes").NavBarItems.Events,
        ),
        o("WAWebSideNavButtonsActivityModel").setLastActiveButton(
          o("WAWebNavBarTypes").NavBarItems.Events,
        ),
        o("WAWebOpenSharableEventCreateFlowAction").reopenSharableEventHome());
    }
    function C() {
      var e = d;
      d = null;
      var t = u.get();
      (t != null &&
        o("WAWebSharableEventPageLoadAction").clearSharableEventPageLoadState(
          t,
        ),
        L(null),
        o("WAWebDrawerManager").DrawerManager.openDrawerMid(
          o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
            ? {
                descriptorType: "mid_drawer_empty_state",
                navBarItem: o("WAWebNavBarTypes").NavBarItems.Events,
              }
            : s.jsx(o("WAWebMidDrawerEmptyState.react").MidDrawerEmptyState, {
                type: o("WAWebNavBarTypes").NavBarItems.Events,
              }),
          { disableRotateFocus: !0, transition: "none" },
        ),
        (e == null ? void 0 : e.isConnected) === !0 &&
          r("WAWebFocusTracer").focus(e));
    }
    function b(e) {
      L(e);
    }
    function v(e) {
      (o("WAWebSharableEventPageLoadAction").clearSharableEventPageLoadState(e),
        u.get() === e && ((d = null), c.get() === e && c.set(null), L(null)));
    }
    function S() {
      return u.get();
    }
    function R(e) {
      return u.subscribe(e);
    }
    function L(e) {
      u.set(e);
    }
    ((l.openSharableEventPage = m),
      (l.openSharableEventInEventsHome = p),
      (l.getPendingSharableEventEdit = _),
      (l.subscribeToPendingSharableEventEdit = f),
      (l.clearPendingSharableEventEdit = g),
      (l.keepNavBarItemActive = h),
      (l.openSharableEventHome = y),
      (l.closeSharableEventPage = C),
      (l.keepSharableEventPageOpen = b),
      (l.releaseSharableEventPage = v),
      (l.getSelectedSharableEventId = S),
      (l.subscribeToSelectedSharableEventId = R));
  },
  98,
);
