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
    "WAWebSharableEventPageSource",
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
      p = null,
      _ = null;
    function f(e, t, n) {
      !o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabledForAction(
        "open-page",
      ) ||
        c.get() === e ||
        (d.get() !== e && d.set(null),
        (p = t != null ? t : null),
        (_ = n == null ? null : { eventId: e, source: n }),
        D(e),
        o("WAWebDrawerManager").DrawerManager.openDrawerMid(
          o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
            ? { descriptorType: "sharable_event_page", eventId: e }
            : u.jsx(r("WAWebSharableEventPageLoadable"), { eventId: e }, e),
          { disableRotateFocus: !0, transition: "none" },
        ),
        o("WAWebMarkSharableEventSeenAction").markSharableEventSeen(e),
        o("WAWebSharableEventPageLoadAction").loadSharableEventPage(e));
    }
    function g(e, t) {
      (d.set((t == null ? void 0 : t.edit) === !0 ? e : null),
        (m = (t == null ? void 0 : t.invite) === !0 ? e : null),
        R(),
        f(e, null, t == null ? void 0 : t.source));
    }
    function h(e) {
      (o("WAWebSideNavButtonsActivityModel").getLastActiveButton() ===
        o("WAWebNavBarTypes").NavBarItems.Events &&
        o("WAWebOpenSharableEventCreateFlowAction").reopenSharableEventHome(),
        g(e, {
          invite: !0,
          source: o("WAWebSharableEventPageSource").SharableEventPageSource
            .EventCreation,
        }));
    }
    function y(e) {
      return m !== e ? !1 : ((m = null), !0);
    }
    function C(e) {
      var t = _;
      return t != null && t.eventId === e ? t.source : null;
    }
    function b() {
      return d.get();
    }
    function v(e) {
      return d.subscribe(e);
    }
    function S() {
      d.set(null);
    }
    function R() {
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
    function L() {
      var e = p;
      ((p = null), (_ = null));
      var t = c.get();
      (t != null &&
        o("WAWebSharableEventPageLoadAction").clearSharableEventPageLoadState(
          t,
        ),
        D(null),
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
    function E(e) {
      D(e);
    }
    function k(e) {
      (o("WAWebSharableEventPageLoadAction").clearSharableEventPageLoadState(e),
        c.get() === e &&
          ((p = null), (_ = null), d.get() === e && d.set(null), D(null)));
    }
    function I() {
      return c.get();
    }
    function T(e) {
      return c.subscribe(e);
    }
    function D(t) {
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
    ((l.openSharableEventPage = f),
      (l.openSharableEventInEventsHome = g),
      (l.openCreatedSharableEvent = h),
      (l.takePendingSharableEventInvite = y),
      (l.getSharableEventPageSource = C),
      (l.getPendingSharableEventEdit = b),
      (l.subscribeToPendingSharableEventEdit = v),
      (l.clearPendingSharableEventEdit = S),
      (l.openSharableEventHome = R),
      (l.closeSharableEventPage = L),
      (l.keepSharableEventPageOpen = E),
      (l.releaseSharableEventPage = k),
      (l.getSelectedSharableEventId = I),
      (l.subscribeToSelectedSharableEventId = T));
  },
  98,
);
