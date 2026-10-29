__d(
  "WAWebOpenSharableEventPageAction",
  [
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebDrawerManager",
    "WAWebFocusTracer",
    "WAWebMidDrawerEmptyState.react",
    "WAWebNavBarTypes",
    "WAWebSharableEventGatingUtils",
    "WAWebSharableEventPageLoadAction",
    "WAWebSharableEventPageLoadable",
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
        h(e),
        o("WAWebDrawerManager").DrawerManager.openDrawerMid(
          o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
            ? { descriptorType: "sharable_event_page", eventId: e }
            : s.jsx(r("WAWebSharableEventPageLoadable"), { eventId: e }, e),
          { disableRotateFocus: !0, transition: "none" },
        ),
        o("WAWebSharableEventPageLoadAction").loadSharableEventPage(e));
    }
    function p() {
      var e = c;
      ((c = null),
        h(null),
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
    function _(e) {
      u === e && ((c = null), h(null));
    }
    function f() {
      return u;
    }
    function g(e) {
      return (
        d.add(e),
        function () {
          d.delete(e);
        }
      );
    }
    function h(e) {
      ((u = e),
        d.forEach(function (e) {
          return e();
        }));
    }
    ((l.openSharableEventPage = m),
      (l.closeSharableEventPage = p),
      (l.releaseSharableEventPage = _),
      (l.getSelectedSharableEventId = f),
      (l.subscribeToSelectedSharableEventId = g));
  },
  98,
);
