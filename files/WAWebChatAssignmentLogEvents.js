__d(
  "WAWebChatAssignmentLogEvents",
  [
    "WAWebABProps",
    "WAWebAgentCollection",
    "WAWebBizGatingUtils",
    "WAWebChatAssignmentLogEvents.flow",
    "WAWebChatCollection",
    "WAWebMdChatAssignmentSecondaryActionWamEvent",
    "WAWebMdChatAssignmentWamEvent",
    "WAWebMiscBrowserUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumChatAssignmentActionType",
    "WAWebWamEnumChatAssignmentEntryPointType",
    "WAWebWamEnumMdChatAssignmentAssignmentType",
    "WAWebWamEnumMdChatAssignmentSecondaryActionType",
    "WAWebWamEnumMdChatAssignmentSourceType",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WAWebUserPrefsMeUser")
        .getMeDevicePnOrThrow_DO_NOT_USE()
        .getDeviceId();
      return o("WAWebAgentCollection")
        .AgentCollection.getModelsArray()
        .find(function (t) {
          return t.deviceId === e;
        });
    }
    function s(t, n) {
      var a,
        i,
        l = e(),
        s = o("WAWebABProps").getABPropConfigValue(
          "smb_md_agent_chat_assignment_system_messages_logging_v2_enabled",
        );
      return (
        s || delete n.mdChatAssignmentSecondaryActionAssignmentType,
        new (o(
          "WAWebMdChatAssignmentSecondaryActionWamEvent",
        ).MdChatAssignmentSecondaryActionWamEvent)(
          babelHelpers.extends(
            {
              mdChatAssignmentSecondaryActionAgentId:
                (a = l == null ? void 0 : l.id) != null ? a : "",
              mdChatAssignmentSecondaryActionBrowserId: r(
                "WAWebMiscBrowserUtils",
              ).persistentExpiringId(),
              mdChatAssignmentSecondaryActionChatType:
                t == null ? void 0 : t.getMdChatAssignmentChatType(),
              mdChatAssignmentSecondaryActionMdId:
                (i = l == null ? void 0 : l.deviceId) != null ? i : -1,
            },
            n,
          ),
        )
      );
    }
    function u(e) {
      o("WAWebBizGatingUtils").chatAssignmentEnabled() &&
        s(e, {
          mdChatAssignmentSecondaryActionSource: o(
            "WAWebWamEnumMdChatAssignmentSourceType",
          ).MD_CHAT_ASSIGNMENT_SOURCE_TYPE.NONE,
          mdChatAssignmentSecondaryActionType: o(
            "WAWebWamEnumMdChatAssignmentSecondaryActionType",
          ).MD_CHAT_ASSIGNMENT_SECONDARY_ACTION_TYPE.ACTION_TOOLTIP_SHOWN,
        }).commit();
    }
    function c(e) {
      o("WAWebBizGatingUtils").chatAssignmentEnabled() &&
        s(e, {
          mdChatAssignmentSecondaryActionAssignmentType:
            e.assignedAgent == null
              ? o("WAWebWamEnumMdChatAssignmentAssignmentType")
                  .MD_CHAT_ASSIGNMENT_ASSIGNMENT_TYPE.ASSIGNED
              : o("WAWebWamEnumMdChatAssignmentAssignmentType")
                  .MD_CHAT_ASSIGNMENT_ASSIGNMENT_TYPE.UNASSIGNED,
          mdChatAssignmentSecondaryActionSource: o(
            "WAWebWamEnumMdChatAssignmentSourceType",
          ).MD_CHAT_ASSIGNMENT_SOURCE_TYPE.BOOTSTRAP,
          mdChatAssignmentSecondaryActionType: o(
            "WAWebWamEnumMdChatAssignmentSecondaryActionType",
          ).MD_CHAT_ASSIGNMENT_SECONDARY_ACTION_TYPE
            .ACTION_SYSTEM_MESSAGE_ADDED_TO_CHAT_HISTORY,
        }).commit();
    }
    function d(e) {
      o("WAWebBizGatingUtils").chatAssignmentEnabled() &&
        s(e, {
          mdChatAssignmentSecondaryActionAssignmentType:
            e.assignedAgent == null
              ? o("WAWebWamEnumMdChatAssignmentAssignmentType")
                  .MD_CHAT_ASSIGNMENT_ASSIGNMENT_TYPE.ASSIGNED
              : o("WAWebWamEnumMdChatAssignmentAssignmentType")
                  .MD_CHAT_ASSIGNMENT_ASSIGNMENT_TYPE.UNASSIGNED,
          mdChatAssignmentSecondaryActionSource: o(
            "WAWebWamEnumMdChatAssignmentSourceType",
          ).MD_CHAT_ASSIGNMENT_SOURCE_TYPE.NONE,
          mdChatAssignmentSecondaryActionType: o(
            "WAWebWamEnumMdChatAssignmentSecondaryActionType",
          ).MD_CHAT_ASSIGNMENT_SECONDARY_ACTION_TYPE
            .ACTION_SYSTEM_MESSAGE_CREATION_ERROR,
        }).commit();
    }
    function m(e) {
      if (o("WAWebBizGatingUtils").chatAssignmentEnabled()) {
        var t = o("WAWebChatCollection").ChatCollection.get(e);
        t != null &&
          s(t, {
            mdChatAssignmentSecondaryActionSource: o(
              "WAWebWamEnumMdChatAssignmentSourceType",
            ).MD_CHAT_ASSIGNMENT_SOURCE_TYPE.NONE,
            mdChatAssignmentSecondaryActionType: o(
              "WAWebWamEnumMdChatAssignmentSecondaryActionType",
            ).MD_CHAT_ASSIGNMENT_SECONDARY_ACTION_TYPE
              .ACTION_CHAT_STATUS_TICKER_SHOWN,
          }).commit();
      }
    }
    function p(t, n, a) {
      var i,
        l,
        s,
        u = e(),
        c = o("WAWebAgentCollection").AgentCollection.get(n),
        d = o("WAWebUserPrefsMeUser")
          .getMeDevicePnOrThrow_DO_NOT_USE()
          .getDeviceId(),
        m = n === (u == null ? void 0 : u.id);
      return new (o("WAWebMdChatAssignmentWamEvent").MdChatAssignmentWamEvent)(
        babelHelpers.extends(
          {
            assignerAgentId: (i = u == null ? void 0 : u.id) != null ? i : "",
            assignerBrowserId: r(
              "WAWebMiscBrowserUtils",
            ).persistentExpiringId(),
            assignerMdId: d,
            chatAssignmentAgentId:
              (l = c == null ? void 0 : c.id) != null ? l : "",
            chatAssignmentBrowserId: m
              ? r("WAWebMiscBrowserUtils").persistentExpiringId()
              : "",
            chatAssignmentChatType: t.getChatAssignmentChatType(),
            chatAssignmentMdId:
              (s = c == null ? void 0 : c.deviceId) != null ? s : -1,
          },
          a,
        ),
      );
    }
    function _(e) {
      switch (e) {
        case o("WAWebChatAssignmentLogEvents.flow").ChatAssignmentEntryPointType
          .MULTI_SELECT:
          return o("WAWebWamEnumChatAssignmentEntryPointType")
            .CHAT_ASSIGNMENT_ENTRY_POINT_TYPE.MULTI_SELECT;
        case o("WAWebChatAssignmentLogEvents.flow").ChatAssignmentEntryPointType
          .SYSTEM_MESSAGE:
          return o("WAWebWamEnumChatAssignmentEntryPointType")
            .CHAT_ASSIGNMENT_ENTRY_POINT_TYPE.SYSTEM_MESSAGE;
        case o("WAWebChatAssignmentLogEvents.flow").ChatAssignmentEntryPointType
          .CONVERSATION_MENU:
          return o("WAWebWamEnumChatAssignmentEntryPointType")
            .CHAT_ASSIGNMENT_ENTRY_POINT_TYPE.CONVERSATION_OVERFLOW_MENU;
        case o("WAWebChatAssignmentLogEvents.flow").ChatAssignmentEntryPointType
          .CONTACT_INFO_SCREEN:
          return o("WAWebWamEnumChatAssignmentEntryPointType")
            .CHAT_ASSIGNMENT_ENTRY_POINT_TYPE.CONTACT_INFO_SCREEN;
      }
    }
    function f(e, t, n, r, a) {
      if (o("WAWebBizGatingUtils").chatAssignmentEnabled()) {
        var i;
        (t === ""
          ? (i = o("WAWebWamEnumChatAssignmentActionType")
              .CHAT_ASSIGNMENT_ACTION_TYPE.ACTION_UNASSIGNED)
          : n
            ? (i = o("WAWebWamEnumChatAssignmentActionType")
                .CHAT_ASSIGNMENT_ACTION_TYPE.ACTION_REASSIGNED)
            : (i = o("WAWebWamEnumChatAssignmentActionType")
                .CHAT_ASSIGNMENT_ACTION_TYPE.ACTION_ASSIGNED),
          p(e, t, {
            chatAssignmentAction: i,
            chatAssignmentEntryPoint: _(r),
            chatsCnt: a,
          }).commit());
      }
    }
    ((l.logNuxShown = u),
      (l.logSystemMessageGeneratedFromCompanion = c),
      (l.logSystemMessageFailedToGenerate = d),
      (l.logChatStatusTickerShown = m),
      (l.logChatAssignment = f));
  },
  98,
);
