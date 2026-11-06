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
      d = o("WAWebSharableEventExternalStore").createSharableEventStore(null),
      m = null,
      p = null;
    function _(e, t, n) {
      !o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabledForAction(
        "open-page",
      ) ||
        c.get() === e ||
        (d.get() !== e && d.set(null),
        (m = t != null ? t : null),
        (p = n == null ? null : { eventId: e, source: n }),
        I(e),
        o("WAWebDrawerManager").DrawerManager.openDrawerMid(
          o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
            ? { descriptorType: "sharable_event_page", eventId: e }
            : u.jsx(r("WAWebSharableEventPageLoadable"), { eventId: e }, e),
          { disableRotateFocus: !0, transition: "none" },
        ),
        o("WAWebMarkSharableEventSeenAction").markSharableEventSeen(e),
        o("WAWebSharableEventPageLoadAction").loadSharableEventPage(e));
    }
    function f(e, t) {
      (d.set((t == null ? void 0 : t.edit) === !0 ? e : null),
        v(),
        _(e, null, t == null ? void 0 : t.source));
    }
    function g(e) {
      var t = p;
      return t != null && t.eventId === e ? t.source : null;
    }
    function h() {
      return d.get();
    }
    function y(e) {
      return d.subscribe(e);
    }
    function C() {
      d.set(null);
    }
    function b(e) {
      (o("WAWebCmd").Cmd.setActiveNavBarItem(e),
        o("WAWebSideNavButtonsActivityModel").setLastActiveButton(e));
    }
    function v() {
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
    function S() {
      var e = m;
      ((m = null), (p = null));
      var t = c.get();
      (t != null &&
        o("WAWebSharableEventPageLoadAction").clearSharableEventPageLoadState(
          t,
        ),
        I(null),
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
    function R(e) {
      I(e);
    }
    function L(e) {
      (o("WAWebSharableEventPageLoadAction").clearSharableEventPageLoadState(e),
        c.get() === e &&
          ((m = null), (p = null), d.get() === e && d.set(null), I(null)));
    }
    function E() {
      return c.get();
    }
    function k(e) {
      return c.subscribe(e);
    }
    function I(t) {
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
    ((l.openSharableEventPage = _),
      (l.openSharableEventInEventsHome = f),
      (l.getSharableEventPageSource = g),
      (l.getPendingSharableEventEdit = h),
      (l.subscribeToPendingSharableEventEdit = y),
      (l.clearPendingSharableEventEdit = C),
      (l.keepNavBarItemActive = b),
      (l.openSharableEventHome = v),
      (l.closeSharableEventPage = S),
      (l.keepSharableEventPageOpen = R),
      (l.releaseSharableEventPage = L),
      (l.getSelectedSharableEventId = E),
      (l.subscribeToSelectedSharableEventId = k));
  },
  98,
);
