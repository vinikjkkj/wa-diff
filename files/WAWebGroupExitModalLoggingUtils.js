__d(
  "WAWebGroupExitModalLoggingUtils",
  [
    "WAWebPsGroupExitExperienceExitDeleteConfirmationDialogUiInteractionWamEvent",
    "WAWebPsGroupExitExperienceExitDialogInteractionWamEvent",
    "WAWebPsGroupExitExperienceGroupActionWamEvent",
    "WAWebSpamConstants",
    "WAWebWamEnumGroupExitExperienceOrigin",
    "WAWebWamEnumPsGroupExitExperienceActions",
    "WAWebWamEnumPsGroupExitExperienceDeleteConfirmationDialogActions",
    "WAWebWamEnumPsGroupExitExperienceExitDialogActions",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      switch (e) {
        case o("WAWebSpamConstants").SpamFlow.GroupFmxCardLeave:
          return o("WAWebWamEnumGroupExitExperienceOrigin")
            .GROUP_EXIT_EXPERIENCE_ORIGIN.FGX_CARD;
        case o("WAWebSpamConstants").SpamFlow.GroupFmxCardLeaveNonSuspicious:
          return o("WAWebWamEnumGroupExitExperienceOrigin")
            .GROUP_EXIT_EXPERIENCE_ORIGIN.SUSPICIOUS_CHAT_BANNER;
        case o("WAWebSpamConstants").SpamFlow
          .GroupOverflowMenuLeaveReportUpsell:
          return o("WAWebWamEnumGroupExitExperienceOrigin")
            .GROUP_EXIT_EXPERIENCE_ORIGIN.CHAT_OVERFLOW_MENU;
        case o("WAWebSpamConstants").SpamFlow.GroupChatlistLeaveReportUpsell:
          return o("WAWebWamEnumGroupExitExperienceOrigin")
            .GROUP_EXIT_EXPERIENCE_ORIGIN.WEB_CONTEXT_MENU;
        case o("WAWebSpamConstants").SpamFlow.GroupInfoLeaveReportUpsell:
          return o("WAWebWamEnumGroupExitExperienceOrigin")
            .GROUP_EXIT_EXPERIENCE_ORIGIN.GROUP_INFO;
      }
    }
    function s(t) {
      var n,
        r = t.spamFlow ? e(t.spamFlow) : null;
      new (o(
        "WAWebPsGroupExitExperienceExitDialogInteractionWamEvent",
      ).PsGroupExitExperienceExitDialogInteractionWamEvent)(
        babelHelpers.extends(
          {
            psExitExperienceReportingEnabled:
              (n = t.reportingEnabled) != null ? n : !1,
            psGroupExitExperienceEnabled: !0,
            psGroupExitExperienceGroupJid: t.groupJid,
            psGroupExitExperienceExitDialogAction: t.exitDialogAction,
          },
          r != null && { psGroupExitExperienceTouchPoint: r },
        ),
      ).commit();
    }
    function u(t) {
      var n = e(t.spamFlow);
      new (o(
        "WAWebPsGroupExitExperienceExitDeleteConfirmationDialogUiInteractionWamEvent",
      ).PsGroupExitExperienceExitDeleteConfirmationDialogUiInteractionWamEvent)(
        babelHelpers.extends(
          {
            psGroupExitExperienceGroupJid: t.groupJid,
            psGroupExitExperienceDeleteConfirmationDialogAction:
              t.deleteDialogAction,
          },
          n != null && { psGroupExitExperienceTouchPoint: n },
        ),
      ).commit();
    }
    function c(e) {
      new (o(
        "WAWebPsGroupExitExperienceGroupActionWamEvent",
      ).PsGroupExitExperienceGroupActionWamEvent)({
        psGroupExitExperienceAction: e.action,
        psGroupExitExperienceEnabled: !0,
        psGroupExitExperienceGroupJid: e.groupJid,
      }).commit();
    }
    function d(e) {
      s(
        babelHelpers.extends({}, e, {
          exitDialogAction: o(
            "WAWebWamEnumPsGroupExitExperienceExitDialogActions",
          ).PS_GROUP_EXIT_EXPERIENCE_EXIT_DIALOG_ACTIONS
            .GROUP_EXIT_EXPERIENCE_DIALOG_OPEN,
        }),
      );
    }
    function m(e) {
      s(
        babelHelpers.extends({}, e, {
          exitDialogAction: o(
            "WAWebWamEnumPsGroupExitExperienceExitDialogActions",
          ).PS_GROUP_EXIT_EXPERIENCE_EXIT_DIALOG_ACTIONS
            .GROUP_EXIT_EXPERIENCE_DIALOG_NEW_EXIT_TAPPED,
        }),
      );
    }
    function p(e) {
      s(
        babelHelpers.extends({}, e, {
          exitDialogAction: o(
            "WAWebWamEnumPsGroupExitExperienceExitDialogActions",
          ).PS_GROUP_EXIT_EXPERIENCE_EXIT_DIALOG_ACTIONS
            .GROUP_EXIT_EXPERIENCE_DIALOG_NEW_EXIT_AND_DELETE_TAPPED,
        }),
      );
    }
    function _(e) {
      s(
        babelHelpers.extends({}, e, {
          exitDialogAction: o(
            "WAWebWamEnumPsGroupExitExperienceExitDialogActions",
          ).PS_GROUP_EXIT_EXPERIENCE_EXIT_DIALOG_ACTIONS
            .GROUP_EXIT_EXPERIENCE_DIALOG_NEW_LEARN_MORE_TAPPED,
        }),
      );
    }
    function f(e) {
      s(
        babelHelpers.extends({}, e, {
          exitDialogAction: o(
            "WAWebWamEnumPsGroupExitExperienceExitDialogActions",
          ).PS_GROUP_EXIT_EXPERIENCE_EXIT_DIALOG_ACTIONS
            .GROUP_EXIT_EXPERIENCE_DIALOG_CANCELLED,
        }),
      );
    }
    function g(e) {
      s(
        babelHelpers.extends({}, e, {
          exitDialogAction: o(
            "WAWebWamEnumPsGroupExitExperienceExitDialogActions",
          ).PS_GROUP_EXIT_EXPERIENCE_EXIT_DIALOG_ACTIONS
            .GROUP_EXIT_EXPERIENCE_DIALOG_OLD_EXIT_TAPPED,
        }),
      );
    }
    function h(e) {
      s(
        babelHelpers.extends({}, e, {
          exitDialogAction: o(
            "WAWebWamEnumPsGroupExitExperienceExitDialogActions",
          ).PS_GROUP_EXIT_EXPERIENCE_EXIT_DIALOG_ACTIONS
            .GROUP_EXIT_EXPERIENCE_DIALOG_OLD_ARCHIVE_TAPPED,
        }),
      );
    }
    function y(e) {
      u(
        babelHelpers.extends({}, e, {
          deleteDialogAction: o(
            "WAWebWamEnumPsGroupExitExperienceDeleteConfirmationDialogActions",
          ).PS_GROUP_EXIT_EXPERIENCE_DELETE_CONFIRMATION_DIALOG_ACTIONS
            .GROUP_EXIT_EXPERIENCE_DELETE_CONFIRMATION_DIALOG_DELETE_TAPPED,
        }),
      );
    }
    function C(e) {
      u(
        babelHelpers.extends({}, e, {
          deleteDialogAction: o(
            "WAWebWamEnumPsGroupExitExperienceDeleteConfirmationDialogActions",
          ).PS_GROUP_EXIT_EXPERIENCE_DELETE_CONFIRMATION_DIALOG_ACTIONS
            .GROUP_EXIT_EXPERIENCE_DELETE_CONFIRMATION_DIALOG_CANCELLED,
        }),
      );
    }
    function b(e) {
      c(
        babelHelpers.extends({}, e, {
          action: o("WAWebWamEnumPsGroupExitExperienceActions")
            .PS_GROUP_EXIT_EXPERIENCE_ACTIONS.GROUP_DELETED,
        }),
      );
    }
    ((l.logGroupExitModalOpenEvent = d),
      (l.logGroupExitModalExitEvent = m),
      (l.logGroupExitModalExitAndDeleteEvent = p),
      (l.logGroupExitModalLearnMoreEvent = _),
      (l.logGroupExitModalCancelEvent = f),
      (l.logGroupExitFromLegacyExitPopup = g),
      (l.logGroupArchiveFromLegacyExitPopup = h),
      (l.logGroupDeleteConfirmationModalDeleteEvent = y),
      (l.logGroupDeleteConfirmationModalCancelEvent = C),
      (l.logGroupDeleteFromDeletePopup = b));
  },
  98,
);
