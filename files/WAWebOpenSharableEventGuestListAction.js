__d(
  "WAWebOpenSharableEventGuestListAction",
  [
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebDrawerManager",
    "WAWebSharableEventGatingUtils",
    "WAWebSharableEventGuestListFlowLoadable",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabled() &&
        o("WAWebDrawerManager").DrawerManager.openDrawerRight(
          o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
            ? { descriptorType: "sharable_event_guest_list", eventId: e }
            : s.jsx(
                r("WAWebSharableEventGuestListFlowLoadable"),
                {
                  eventId: e,
                  onClose: o("WAWebDrawerManager").closeDrawerRight,
                },
                e,
              ),
          { focusOnUnMount: !0, transition: "slide-left" },
        );
    }
    l.openSharableEventGuestList = u;
  },
  98,
);
