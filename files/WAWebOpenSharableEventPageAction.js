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
      m = null;
    function p(e, t) {
      !o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabledForAction(
        "open-page",
      ) ||
        c.get() === e ||
        (d.get() !== e && d.set(null),
        (m = t != null ? t : null),
        E(e),
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
      (d.set((t == null ? void 0 : t.edit) === !0 ? e : null), C(), p(e));
    }
    function f() {
      return d.get();
    }
    function g(e) {
      return d.subscribe(e);
    }
    function h() {
      d.set(null);
    }
    function y(e) {
      (o("WAWebCmd").Cmd.setActiveNavBarItem(e),
        o("WAWebSideNavButtonsActivityModel").setLastActiveButton(e));
    }
    function C() {
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
    function b() {
      var e = m;
      m = null;
      var t = c.get();
      (t != null &&
        o("WAWebSharableEventPageLoadAction").clearSharableEventPageLoadState(
          t,
        ),
        E(null),
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
    function v(e) {
      E(e);
    }
    function S(e) {
      (o("WAWebSharableEventPageLoadAction").clearSharableEventPageLoadState(e),
        c.get() === e && ((m = null), d.get() === e && d.set(null), E(null)));
    }
    function R() {
      return c.get();
    }
    function L(e) {
      return c.subscribe(e);
    }
    function E(t) {
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
      (l.getPendingSharableEventEdit = f),
      (l.subscribeToPendingSharableEventEdit = g),
      (l.clearPendingSharableEventEdit = h),
      (l.keepNavBarItemActive = y),
      (l.openSharableEventHome = C),
      (l.closeSharableEventPage = b),
      (l.keepSharableEventPageOpen = v),
      (l.releaseSharableEventPage = S),
      (l.getSelectedSharableEventId = R),
      (l.subscribeToSelectedSharableEventId = L));
  },
  98,
);
