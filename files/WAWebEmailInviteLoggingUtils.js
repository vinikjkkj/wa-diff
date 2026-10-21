__d(
  "WAWebEmailInviteLoggingUtils",
  [
    "WAWebCompanionEmailInviteActionWamEvent",
    "WAWebWamEnumWebcEmailInviteActionType",
    "WAWebWamEnumWebcEmailInviteEntryPointType",
    "WAWebWamEnumWebcEmailInviteServerSendResultType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        invalid_batch: (e = o(
          "WAWebWamEnumWebcEmailInviteServerSendResultType",
        )).WEBC_EMAIL_INVITE_SERVER_SEND_RESULT_TYPE.INVALID_BATCH,
        not_authorized:
          e.WEBC_EMAIL_INVITE_SERVER_SEND_RESULT_TYPE.NOT_AUTHORIZED,
        partial: e.WEBC_EMAIL_INVITE_SERVER_SEND_RESULT_TYPE.PARTIAL,
        skipped: e.WEBC_EMAIL_INVITE_SERVER_SEND_RESULT_TYPE.SKIPPED,
        success: e.WEBC_EMAIL_INVITE_SERVER_SEND_RESULT_TYPE.SUCCESS,
        uncertain: e.WEBC_EMAIL_INVITE_SERVER_SEND_RESULT_TYPE.UNCERTAIN,
        unavailable: e.WEBC_EMAIL_INVITE_SERVER_SEND_RESULT_TYPE.UNAVAILABLE,
      },
      u = {
        group_info_email: o("WAWebWamEnumWebcEmailInviteEntryPointType")
          .WEBC_EMAIL_INVITE_ENTRY_POINT_TYPE.GROUP_INFO_EMAIL,
        intro_panel_email: o("WAWebWamEnumWebcEmailInviteEntryPointType")
          .WEBC_EMAIL_INVITE_ENTRY_POINT_TYPE.INTRO_PANEL_EMAIL,
      };
    function c(e) {
      g(
        o("WAWebWamEnumWebcEmailInviteActionType").WEBC_EMAIL_INVITE_ACTION_TYPE
          .ENTRY_POINT_CLICK,
        e.origin,
      );
    }
    function d(e) {
      g(
        o("WAWebWamEnumWebcEmailInviteActionType").WEBC_EMAIL_INVITE_ACTION_TYPE
          .EMAIL_TYPING_START,
        e.origin,
      );
    }
    function m(e) {
      g(
        o("WAWebWamEnumWebcEmailInviteActionType").WEBC_EMAIL_INVITE_ACTION_TYPE
          .GMAIL_CLICK,
        e.origin,
        e.numRecipients,
      );
    }
    function p(e) {
      g(
        o("WAWebWamEnumWebcEmailInviteActionType").WEBC_EMAIL_INVITE_ACTION_TYPE
          .MAILTO_CLICK,
        e.origin,
        e.numRecipients,
      );
    }
    function _(e) {
      g(
        o("WAWebWamEnumWebcEmailInviteActionType").WEBC_EMAIL_INVITE_ACTION_TYPE
          .SERVER_SEND_START,
        e.origin,
        e.numRecipients,
      );
    }
    function f(e) {
      new (o(
        "WAWebCompanionEmailInviteActionWamEvent",
      ).CompanionEmailInviteActionWamEvent)({
        webcEmailInviteAction: o("WAWebWamEnumWebcEmailInviteActionType")
          .WEBC_EMAIL_INVITE_ACTION_TYPE.SERVER_SEND_RESULT,
        webcEmailInviteCount: e.numRecipients,
        webcEmailInviteEntryPoint: u[e.origin],
        webcEmailInviteFailedCount: e.failedCount,
        webcEmailInviteSentCount: e.sentCount,
        webcEmailInviteServerSendResult: s[e.result],
      }).commit();
    }
    function g(e, t, n) {
      new (o(
        "WAWebCompanionEmailInviteActionWamEvent",
      ).CompanionEmailInviteActionWamEvent)(
        babelHelpers.extends(
          { webcEmailInviteAction: e, webcEmailInviteEntryPoint: u[t] },
          n != null ? { webcEmailInviteCount: n } : {},
        ),
      ).commit();
    }
    ((l.logEmailInviteEntryPointClick = c),
      (l.logEmailInviteAddressEntry = d),
      (l.logEmailInviteGmailClick = m),
      (l.logEmailInviteMailtoClick = p),
      (l.logEmailInviteServerSendStart = _),
      (l.logEmailInviteServerSendResult = f));
  },
  98,
);
