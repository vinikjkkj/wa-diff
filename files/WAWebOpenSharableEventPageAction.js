__d(
  "WAWebOpenSharableEventPageAction",
  [
    "Promise",
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
    "WAWebSharableEventLinkPreview",
    "WAWebSharableEventPageLoadAction",
    "WAWebSharableEventPageLoadable",
    "WAWebSideNavButtonsActivityModel",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = o("WAWebSharableEventExternalStore").createSharableEventStore(null),
      d = null,
      m = null;
    function p(e, t, n) {
      !o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabledForAction(
        "open-page",
      ) ||
        c.get() === e ||
        ((d = t != null ? t : null),
        (m = n == null ? null : { eventId: e, source: n }),
        S(e),
        o("WAWebDrawerManager").DrawerManager.openDrawerMid(
          o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
            ? { descriptorType: "sharable_event_page", eventId: e }
            : u.jsx(r("WAWebSharableEventPageLoadable"), { eventId: e }, e),
          { disableRotateFocus: !0, transition: "none" },
        ),
        o("WAWebMarkSharableEventSeenAction").markSharableEventSeen(e),
        o("WAWebSharableEventPageLoadAction").loadSharableEventPage(e));
    }
    function _(e, t) {
      (g(), p(e, null, t == null ? void 0 : t.source));
    }
    function f(e) {
      var t = m;
      return t != null && t.eventId === e ? t.source : null;
    }
    function g() {
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
    function h() {
      var e = d;
      ((d = null), (m = null));
      var t = c.get();
      (t != null &&
        o("WAWebSharableEventPageLoadAction").clearSharableEventPageLoadState(
          t,
        ),
        S(null),
        o("WAWebDrawerManager").DrawerManager.openDrawerMid(
          o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
            ? {
                descriptorType: "mid_drawer_empty_state",
                navBarItem: o("WAWebNavBarTypes").NavBarItems.Events,
              }
            : u.jsx(o("WAWebMidDrawerEmptyState.react").MidDrawerEmptyState, {
                type: o("WAWebNavBarTypes").NavBarItems.Events,
              }),
          { disableRotateFocus: !0, transition: "none" },
        ),
        (e == null ? void 0 : e.isConnected) === !0 &&
          r("WAWebFocusTracer").focus(e));
    }
    function y(e) {
      S(e);
    }
    function C(e) {
      (o("WAWebSharableEventPageLoadAction").clearSharableEventPageLoadState(e),
        c.get() === e && ((d = null), (m = null), S(null)));
    }
    function b() {
      return c.get();
    }
    function v(e) {
      return c.subscribe(e);
    }
    function S(t) {
      var r = c.get();
      (c.set(t),
        r != null &&
          r !== t &&
          (e || (e = n("Promise"))).resolve().then(function () {
            return o(
              "WAWebSharableEventLinkPreview",
            ).dropSharableEventLinkPreview(r);
          }));
    }
    ((l.openSharableEventPage = p),
      (l.openSharableEventInEventsHome = _),
      (l.getSharableEventPageSource = f),
      (l.openSharableEventHome = g),
      (l.closeSharableEventPage = h),
      (l.keepSharableEventPageOpen = y),
      (l.releaseSharableEventPage = C),
      (l.getSelectedSharableEventId = b),
      (l.subscribeToSelectedSharableEventId = v));
  },
  98,
);
