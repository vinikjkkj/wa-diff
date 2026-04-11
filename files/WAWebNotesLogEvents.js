__d(
  "WAWebNotesLogEvents",
  [
    "WAWebSMBUserJourneyLogger",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumOppositePlatformEnum",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log(
        babelHelpers.extends({}, g(e), {
          userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
            .SMB_USER_ACTION_TYPE_ENUM.VIEW,
          entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_THREAD,
          surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT_INFO_PAGE,
        }),
      );
    }
    function s(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log(
        babelHelpers.extends({}, g(e), {
          userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
            .SMB_USER_ACTION_TYPE_ENUM.CLICK,
          entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_THREAD,
          userActionTarget: "expand_notes",
          surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT_INFO_PAGE,
        }),
      );
    }
    function u(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log(
        babelHelpers.extends({}, g(e), {
          userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
            .SMB_USER_ACTION_TYPE_ENUM.CLICK,
          entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_THREAD,
          userActionTarget: "notes",
          surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT_INFO_PAGE,
        }),
      );
    }
    function c(e, t) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log(
        babelHelpers.extends({}, g(e, t), {
          userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
            .SMB_USER_ACTION_TYPE_ENUM.VIEW,
          entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_THREAD,
          surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.NOTES_PROMPT,
        }),
      );
    }
    function d(e, t) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log(
        babelHelpers.extends({}, g(e, t), {
          userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
            .SMB_USER_ACTION_TYPE_ENUM.ENTER,
          entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_THREAD,
          userActionTarget: "notes_text_window",
          surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.NOTES_PROMPT,
        }),
      );
    }
    function m(e, t) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log(
        babelHelpers.extends({}, g(e, t), {
          userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
            .SMB_USER_ACTION_TYPE_ENUM.CLICK,
          entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_THREAD,
          userActionTarget: "save_button",
          surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.NOTES_PROMPT,
        }),
      );
    }
    function p(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log(
        babelHelpers.extends({}, g(e), {
          userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
            .SMB_USER_ACTION_TYPE_ENUM.VIEW,
          entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
          userActionTarget: "notes_button",
          surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT_THREAD,
        }),
      );
    }
    function _(e, t) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log(
        babelHelpers.extends({}, g(e, t), {
          userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
            .SMB_USER_ACTION_TYPE_ENUM.CLICK,
          entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
          userActionTarget: "notes_button",
          surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT_THREAD,
        }),
      );
    }
    function f(e) {
      o("WAWebSMBUserJourneyLogger").SMBUserJourneyLogger.log(
        babelHelpers.extends({}, g(e), {
          userActionType: o("WAWebWamEnumSmbUserActionTypeEnum")
            .SMB_USER_ACTION_TYPE_ENUM.CLICK,
          entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
          userActionTarget: "view_notes_button",
          surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT_THREAD,
        }),
      );
    }
    function g(e, t) {
      var n = e.type === "in",
        r =
          e.isBusiness || e.isEnterprise || e.isSmb
            ? o("WAWebWamEnumOppositePlatformEnum").OPPOSITE_PLATFORM_ENUM
                .BUSINESS
            : o("WAWebWamEnumOppositePlatformEnum").OPPOSITE_PLATFORM_ENUM
                .CONSUMER,
        a = { contact_is_saved: n, opposite_platform: r };
      if (t != null) for (var i in t) a[i] = t[i];
      return {
        featureName: o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM
          .NOTES,
        extraAttributes: a,
      };
    }
    ((l.logNoteViewed = e),
      (l.logReadMorePressed = s),
      (l.logEditModeOpened = u),
      (l.logEditModeSeen = c),
      (l.logStartedTypingNote = d),
      (l.logNoteSaved = m),
      (l.logAddMsgToNoteMenuItemShown = p),
      (l.logAddMsgToNoteMenuItemClicked = _),
      (l.logViewInAddMsgToNoteToastClicked = f));
  },
  98,
);
