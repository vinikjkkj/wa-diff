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
      s,
      u = {
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
      c = {
        context_card_email: (s = o("WAWebWamEnumWebcEmailInviteEntryPointType"))
          .WEBC_EMAIL_INVITE_ENTRY_POINT_TYPE.CONTEXT_CARD_EMAIL,
        group_info_email: s.WEBC_EMAIL_INVITE_ENTRY_POINT_TYPE.GROUP_INFO_EMAIL,
        intro_panel_email:
          s.WEBC_EMAIL_INVITE_ENTRY_POINT_TYPE.INTRO_PANEL_EMAIL,
        invite_link_email:
          s.WEBC_EMAIL_INVITE_ENTRY_POINT_TYPE.INVITE_LINK_EMAIL,
      };
    function d(e) {
      h(
        o("WAWebWamEnumWebcEmailInviteActionType").WEBC_EMAIL_INVITE_ACTION_TYPE
          .ENTRY_POINT_CLICK,
        e.origin,
      );
    }
    function m(e) {
      h(
        o("WAWebWamEnumWebcEmailInviteActionType").WEBC_EMAIL_INVITE_ACTION_TYPE
          .EMAIL_TYPING_START,
        e.origin,
      );
    }
    function p(e) {
      h(
        o("WAWebWamEnumWebcEmailInviteActionType").WEBC_EMAIL_INVITE_ACTION_TYPE
          .GMAIL_CLICK,
        e.origin,
        e.numRecipients,
      );
    }
    function _(e) {
      h(
        o("WAWebWamEnumWebcEmailInviteActionType").WEBC_EMAIL_INVITE_ACTION_TYPE
          .MAILTO_CLICK,
        e.origin,
        e.numRecipients,
      );
    }
    function f(e) {
      h(
        o("WAWebWamEnumWebcEmailInviteActionType").WEBC_EMAIL_INVITE_ACTION_TYPE
          .SERVER_SEND_START,
        e.origin,
        e.numRecipients,
      );
    }
    function g(e) {
      new (o(
        "WAWebCompanionEmailInviteActionWamEvent",
      ).CompanionEmailInviteActionWamEvent)({
        webcEmailInviteAction: o("WAWebWamEnumWebcEmailInviteActionType")
          .WEBC_EMAIL_INVITE_ACTION_TYPE.SERVER_SEND_RESULT,
        webcEmailInviteCount: e.numRecipients,
        webcEmailInviteEntryPoint: c[e.origin],
        webcEmailInviteFailedCount: e.failedCount,
        webcEmailInviteSentCount: e.sentCount,
        webcEmailInviteServerSendResult: u[e.result],
      }).commit();
    }
    function h(e, t, n) {
      new (o(
        "WAWebCompanionEmailInviteActionWamEvent",
      ).CompanionEmailInviteActionWamEvent)(
        babelHelpers.extends(
          { webcEmailInviteAction: e, webcEmailInviteEntryPoint: c[t] },
          n != null ? { webcEmailInviteCount: n } : {},
        ),
      ).commit();
    }
    ((l.logEmailInviteEntryPointClick = d),
      (l.logEmailInviteAddressEntry = m),
      (l.logEmailInviteGmailClick = p),
      (l.logEmailInviteMailtoClick = _),
      (l.logEmailInviteServerSendStart = f),
      (l.logEmailInviteServerSendResult = g));
  },
  98,
);
