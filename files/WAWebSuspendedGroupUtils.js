__d(
  "WAWebSuspendedGroupUtils",
  [
    "fbt",
    "WAWebABPropsSaga",
    "WAWebContactFormWrapper.react",
    "WAWebExitAndDeleteGroupPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebGroupJoinRequestMetricUtils",
    "WAWebGroupSuspensionAppealEventsWamEvent",
    "WAWebGroupSuspensionAppealModal.react",
    "WAWebGroupType",
    "WAWebL10N",
    "WAWebLeaveAndReportGroupModal.react",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebSupportAiSessionWamEvent",
    "WAWebSuspendedGroupMediaDownloadFailureModal.react",
    "WAWebSuspendedGroupModal.react",
    "WAWebSuspendedGroupModalV2.react",
    "WAWebSuspendedGroupRedesignModalLoadable",
    "WAWebWamEnumSupportAiEventType",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e, t, n) {
      var r,
        a = e.groupMetadata;
      new (o(
        "WAWebGroupSuspensionAppealEventsWamEvent",
      ).GroupSuspensionAppealEventsWamEvent)({
        groupSuspensionAppealUiAction: t,
        groupSuspensionAppealUiSurface: n,
        groupTypeClient: o("WAWebGroupType").groupTypeToGroupTypeClient(
          a == null ? void 0 : a.groupType,
        ),
        isAdmin:
          (r = a == null ? void 0 : a.participants.iAmAdmin()) != null ? r : !1,
        groupJid: o("WAWebGroupJoinRequestMetricUtils").getSanitizedJid(
          a == null ? void 0 : a.id,
        ),
      }).commit();
    }
    var d = 1250,
      m = "group-suspend-appeal",
      p = "cxt/?entrypointid=group-no-longer-available&platform=web";
    function _() {
      return (
        o("WAWebFaqUrl").FAQ_BASE_URL +
        "/" +
        p +
        "&lang=" +
        r("WAWebL10N").getNormalizedLocale()
      );
    }
    var f = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
      href: _(),
      testid: void 0,
      children: s._(/*BTDS*/ "Learn more"),
    });
    function g(e) {
      var t = r("WAWebNoop"),
        n = r("WAWebNoop"),
        a = " ";
      o("WAWebModalManager").ModalManager.open(
        u.jsxs(r("WAWebSuspendedGroupModal.react"), {
          title: s._(/*BTDS*/ "Group unavailable"),
          onSupportClicked: function () {
            (o("WAWebModalManager").ModalManager.close(),
              o("WAWebABPropsSaga").getIsSagaV1Enabled() &&
                new (o(
                  "WAWebSupportAiSessionWamEvent",
                ).SupportAiSessionWamEvent)({
                  supportAiEventType: o("WAWebWamEnumSupportAiEventType")
                    .SUPPORT_AI_EVENT_TYPE.CONTACT_US_CLICKED,
                }).commit(),
              o("WAWebModalManager").ModalManager.open(
                u.jsx(r("WAWebContactFormWrapper.react"), {
                  onCancel: t,
                  onSend: n,
                  supportTag: m,
                  entityId: e,
                }),
                { transition: "modal-flow" },
              ));
          },
          onDismissClicked: o("WAWebModalManager").closeModalManager,
          showSupportBtn: !0,
          children: [
            s._(
              /*BTDS*/ "This group is no longer available. Please contact WhatsApp Support for help.",
            ),
            a,
            f,
          ],
        }),
        { transition: "modal-flow" },
      );
    }
    function h() {
      var e = " ";
      o("WAWebModalManager").ModalManager.open(
        u.jsxs(r("WAWebSuspendedGroupModal.react"), {
          title: s._(/*BTDS*/ "Group unavailable"),
          onDismissClicked: o("WAWebModalManager").closeModalManager,
          showSupportBtn: !1,
          children: [s._(/*BTDS*/ "This group is no longer available."), e, f],
        }),
        { transition: "modal-flow" },
      );
    }
    function y(e) {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(r("WAWebSuspendedGroupModalV2.react"), { chat: e }),
        { transition: "modal-flow" },
      );
    }
    function C(e) {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(
          o("WAWebSuspendedGroupRedesignModalLoadable")
            .SuspendedGroupRedesignModalLoadable,
          { chat: e, isCommunity: !1 },
        ),
        { transition: "modal-flow" },
      );
    }
    function b(e) {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(r("WAWebGroupSuspensionAppealModal.react"), { groupJid: e }),
        { transition: "modal-flow" },
      );
    }
    function v(e) {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(r("WAWebExitAndDeleteGroupPopup.react"), { chat: e }),
        { transition: "modal-flow" },
      );
    }
    function S(e, t) {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(r("WAWebLeaveAndReportGroupModal.react"), {
          chat: e,
          spamFlow: t,
        }),
        { transition: "modal-flow" },
      );
    }
    function R() {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(r("WAWebSuspendedGroupMediaDownloadFailureModal.react"), {}),
        { transition: "modal-flow" },
      );
    }
    ((l.logGroupSuspensionAppealEvent = c),
      (l.STACK_BUTTONS_WIDTH = d),
      (l.SUSPENDED_GROUP_SUPPORT_TAG = m),
      (l.getSuspendedFaqUrl = _),
      (l.openSuspendedGroupModal = g),
      (l.openTerminatedGroupOrNotMemberModal = h),
      (l.openSuspendedGroupModalV2 = y),
      (l.openSuspendedGroupRedesignModal = C),
      (l.openGroupSuspensionAppealModal = b),
      (l.openExitAndDeleteGroupModal = v),
      (l.openLeaveAndReportGroupModal = S),
      (l.openSuspendedGroupMediaDownloadFailureModal = R));
  },
  226,
);
