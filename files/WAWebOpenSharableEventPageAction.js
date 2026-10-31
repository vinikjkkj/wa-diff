__d(
  "WAWebOpenSharableEventPageAction",
  [
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebFocusTracer",
    "WAWebMidDrawerEmptyState.react",
    "WAWebNavBarTypes",
    "WAWebOpenSharableEventCreateFlowAction",
    "WAWebSharableEventGatingUtils",
    "WAWebSharableEventPageLoadAction",
    "WAWebSharableEventPageLoadable",
    "WAWebSideNavButtonsActivityModel",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = null,
      c = null,
      d = new Set();
    function m(e, t) {
      !o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabled() ||
        u === e ||
        ((c = t != null ? t : null),
        C(e),
        o("WAWebDrawerManager").DrawerManager.openDrawerMid(
          o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
            ? { descriptorType: "sharable_event_page", eventId: e }
            : s.jsx(r("WAWebSharableEventPageLoadable"), { eventId: e }, e),
          { disableRotateFocus: !0, transition: "none" },
        ),
        o("WAWebSharableEventPageLoadAction").loadSharableEventPage(e));
    }
    function p(e) {
      (o("WAWebSideNavButtonsActivityModel").getLastActiveButton() !==
        o("WAWebNavBarTypes").NavBarItems.Events &&
        (o("WAWebCmd").Cmd.closeActiveChat(),
        o("WAWebCmd").Cmd.setActiveNavBarItem(
          o("WAWebNavBarTypes").NavBarItems.Events,
        ),
        o("WAWebSideNavButtonsActivityModel").setLastActiveButton(
          o("WAWebNavBarTypes").NavBarItems.Events,
        ),
        o("WAWebOpenSharableEventCreateFlowAction").reopenSharableEventHome()),
        m(e));
    }
    function _() {
      var e = c;
      ((c = null),
        C(null),
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
    function f(e) {
      C(e);
    }
    function g(e) {
      u === e && ((c = null), C(null));
    }
    function h() {
      return u;
    }
    function y(e) {
      return (
        d.add(e),
        function () {
          d.delete(e);
        }
      );
    }
    function C(e) {
      ((u = e),
        d.forEach(function (e) {
          return e();
        }));
    }
    ((l.openSharableEventPage = m),
      (l.openSharableEventInEventsHome = p),
      (l.closeSharableEventPage = _),
      (l.keepSharableEventPageOpen = f),
      (l.releaseSharableEventPage = g),
      (l.getSelectedSharableEventId = h),
      (l.subscribeToSelectedSharableEventId = y));
  },
  98,
);
