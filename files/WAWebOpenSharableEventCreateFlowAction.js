__d(
  "WAWebOpenSharableEventCreateFlowAction",
  [
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebDrawerManager",
    "WAWebSharableEventCreateDialogLoadable",
    "WAWebSharableEventCreateFlowLoadable",
    "WAWebSharableEventGatingUtils",
    "WAWebSharableEventHomeDrawerLoadable",
    "WAWebWamEnumEventV2CreationEntryPoint",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u() {
      o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabledForAction(
        "open-create",
      ) &&
        o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
          s.jsx(r("WAWebSharableEventCreateDialogLoadable"), { onClose: m }),
        );
    }
    function c(e) {
      o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabledForAction(
        "open-create-from-chat",
      ) &&
        o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(
          s.jsx(r("WAWebSharableEventCreateDialogLoadable"), {
            chat: e,
            onClose: function () {
              return o(
                "WAWebDrawerManager",
              ).DrawerManager.closeDrawerFullscreen();
            },
          }),
        );
    }
    function d() {
      o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabledForAction(
        "open-create",
      ) &&
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
          s.jsx(r("WAWebSharableEventCreateFlowLoadable"), {
            creationEntryPoint: o("WAWebWamEnumEventV2CreationEntryPoint")
              .EVENT_V2_CREATION_ENTRY_POINT.NEW_CHAT,
            onEnd: o("WAWebDrawerManager").closeDrawerLeft,
          }),
        );
    }
    function m() {
      o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
        o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
          ? { descriptorType: "sharable_event_home" }
          : s.jsx(r("WAWebSharableEventHomeDrawerLoadable"), {}),
        { focusOnUnMount: !0, transition: "none" },
      );
    }
    ((l.openSharableEventCreateDialog = u),
      (l.openSharableEventCreateDialogForChat = c),
      (l.openSharableEventCreateFlowFromNewChat = d),
      (l.reopenSharableEventHome = m));
  },
  98,
);
