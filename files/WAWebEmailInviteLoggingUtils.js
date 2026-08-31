__d(
  "WAWebEmailInviteLoggingUtils",
  [
    "WAWebCompanionEmailInviteActionWamEvent",
    "WAWebWamEnumWebcEmailInviteActionType",
    "WAWebWamEnumWebcEmailInviteEntryPointType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      group_info_email: o("WAWebWamEnumWebcEmailInviteEntryPointType")
        .WEBC_EMAIL_INVITE_ENTRY_POINT_TYPE.GROUP_INFO_EMAIL,
      intro_panel_email: o("WAWebWamEnumWebcEmailInviteEntryPointType")
        .WEBC_EMAIL_INVITE_ENTRY_POINT_TYPE.INTRO_PANEL_EMAIL,
    };
    function s(e) {
      m(
        o("WAWebWamEnumWebcEmailInviteActionType").WEBC_EMAIL_INVITE_ACTION_TYPE
          .ENTRY_POINT_CLICK,
        e.origin,
      );
    }
    function u(e) {
      m(
        o("WAWebWamEnumWebcEmailInviteActionType").WEBC_EMAIL_INVITE_ACTION_TYPE
          .EMAIL_TYPING_START,
        e.origin,
      );
    }
    function c(e) {
      m(
        o("WAWebWamEnumWebcEmailInviteActionType").WEBC_EMAIL_INVITE_ACTION_TYPE
          .GMAIL_CLICK,
        e.origin,
        e.numRecipients,
      );
    }
    function d(e) {
      m(
        o("WAWebWamEnumWebcEmailInviteActionType").WEBC_EMAIL_INVITE_ACTION_TYPE
          .MAILTO_CLICK,
        e.origin,
        e.numRecipients,
      );
    }
    function m(t, n, r) {
      new (o(
        "WAWebCompanionEmailInviteActionWamEvent",
      ).CompanionEmailInviteActionWamEvent)(
        babelHelpers.extends(
          { webcEmailInviteAction: t, webcEmailInviteEntryPoint: e[n] },
          r != null ? { webcEmailInviteCount: r } : {},
        ),
      ).commit();
    }
    ((l.logEmailInviteEntryPointClick = s),
      (l.logEmailInviteAddressEntry = u),
      (l.logEmailInviteGmailClick = c),
      (l.logEmailInviteMailtoClick = d));
  },
  98,
);
