__d(
  "WAWebOpenSharableEventCreateFlowAction",
  [
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebDrawerManager",
    "WAWebModalManager",
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
      ) &&
        f({
          entryPoint: o("WAWebWamEnumEventV2CreationEntryPoint")
            .EVENT_V2_CREATION_ENTRY_POINT.EVENTS_LIST_PAGE,
        });
    }
    function c() {
      o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabledForAction(
        "open-create",
      ) &&
        f({
          entryPoint: o("WAWebWamEnumEventV2CreationEntryPoint")
            .EVENT_V2_CREATION_ENTRY_POINT.NEW_CHAT,
        });
    }
    function d(e) {
      o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabledForAction(
        "open-create-from-chat",
      ) && f({ chat: e, entryPoint: h(e) });
    }
    function m(e, t) {
      o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabledForAction(
        "open-create-for-org",
      ) && f({ entryPoint: null, managingOrgId: e, onFinish: t });
    }
    function p(e, t) {
      o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabledForAction(
        "open-schedule-call",
      ) && f({ chat: t, entryPoint: e, isScheduledCall: !0 });
    }
    function _(e, t) {
      o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabledForAction(
        "open-edit",
      ) && f({ editSource: t, editedEventId: e, entryPoint: null });
    }
    function f(e) {
      o("WAWebModalManager").ModalManager.open(
        s.jsx(
          r("WAWebSharableEventCreateStepperDialogLoadable"),
          babelHelpers.extends({}, e, {
            onClose: o("WAWebModalManager").closeModalManager,
          }),
        ),
        { blockClose: !0 },
      );
    }
    function g() {
      o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
        o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
          ? { descriptorType: "sharable_event_home" }
          : s.jsx(r("WAWebSharableEventHomeDrawerLoadable"), {}),
        { focusOnUnMount: !0, transition: "none" },
      );
    }
    function h(e) {
      return e.id.isGroup()
        ? o("WAWebWamEnumEventV2CreationEntryPoint")
            .EVENT_V2_CREATION_ENTRY_POINT.GROUP_CHAT_ATTACHMENT_TRAY
        : o("WAWebWamEnumEventV2CreationEntryPoint")
            .EVENT_V2_CREATION_ENTRY_POINT.INDIVIDUAL_CHAT_ATTACHMENT_TRAY;
    }
    ((l.openSharableEventCreateDialog = u),
      (l.openSharableEventCreateDialogFromNewChat = c),
      (l.openSharableEventCreateDialogForChat = d),
      (l.openSharableEventCreateDialogForOrg = m),
      (l.openSharableEventScheduleCallDialog = p),
      (l.openSharableEventEditDialog = _),
      (l.reopenSharableEventHome = g));
  },
  98,
);
