__d(
  "WAWebOpenSharableEventCreateFlowAction",
  [
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebDrawerManager",
    "WAWebModalManager",
    "WAWebSharableEventCreateFlowLoadable",
    "WAWebSharableEventCreateStepperDialogLoadable",
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
      ) && d({});
    }
    function c(e) {
      o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabledForAction(
        "open-create-from-chat",
      ) && d({ chat: e });
    }
    function d(e) {
      o("WAWebModalManager").ModalManager.open(
        s.jsx(
          r("WAWebSharableEventCreateStepperDialogLoadable"),
          babelHelpers.extends({}, e, {
            onClose: function () {
              return o("WAWebModalManager").ModalManager.close();
            },
          }),
        ),
        { blockClose: !0 },
      );
    }
    function m() {
      o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabledForAction(
        "open-create",
      ) &&
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
          s.jsx(r("WAWebSharableEventCreateFlowLoadable"), {
            creationEntryPoint: o("WAWebWamEnumEventV2CreationEntryPoint")
              .EVENT_V2_CREATION_ENTRY_POINT.NEW_CHAT,
            landsOnCreatedEvent: !0,
            onEnd: o("WAWebDrawerManager").closeDrawerLeft,
          }),
        );
    }
    function p() {
      o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
        o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
          ? { descriptorType: "sharable_event_home" }
          : s.jsx(r("WAWebSharableEventHomeDrawerLoadable"), {}),
        { focusOnUnMount: !0, transition: "none" },
      );
    }
    ((l.openSharableEventCreateDialog = u),
      (l.openSharableEventCreateDialogForChat = c),
      (l.openSharableEventCreateFlowFromNewChat = m),
      (l.reopenSharableEventHome = p));
  },
  98,
);
