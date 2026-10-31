__d(
  "WAWebOpenSharableEventCreateFlowAction",
  [
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebDrawerManager",
    "WAWebSharableEventCreateDialogLoadable",
    "WAWebSharableEventCreateFlowLoadable",
    "WAWebSharableEventGatingUtils",
    "WAWebSharableEventHomeDrawerLoadable",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u() {
      o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabled() &&
        o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
          s.jsx(r("WAWebSharableEventCreateDialogLoadable"), { onClose: d }),
        );
    }
    function c() {
      o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabled() &&
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
          s.jsx(r("WAWebSharableEventCreateFlowLoadable"), {
            onEnd: o("WAWebDrawerManager").closeDrawerLeft,
          }),
        );
    }
    function d() {
      o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
        o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
          ? { descriptorType: "sharable_event_home" }
          : s.jsx(r("WAWebSharableEventHomeDrawerLoadable"), {}),
        { focusOnUnMount: !0, transition: "none" },
      );
    }
    ((l.openSharableEventCreateDialog = u),
      (l.openSharableEventCreateFlowFromNewChat = c),
      (l.reopenSharableEventHome = d));
  },
  98,
);
