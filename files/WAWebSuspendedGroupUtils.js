__d(
  "WAWebSuspendedGroupUtils",
  [
    "fbt",
    "WALogger",
    "WAWebABPropsSaga",
    "WAWebContactFormWrapper.react",
    "WAWebDBGroupsGroupMetadata",
    "WAWebExitAndDeleteGroupPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebGroupJoinRequestMetricUtils",
    "WAWebGroupSuspensionAppealEventsWamEvent",
    "WAWebGroupSuspensionAppealModal.react",
    "WAWebGroupSuspensionAppealMutation",
    "WAWebGroupType",
    "WAWebL10N",
    "WAWebLeaveAndReportGroupModal.react",
    "WAWebLoggerDebugInfo",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebSupportAiSessionWamEvent",
    "WAWebSuspendedGroupMediaDownloadFailureModal.react",
    "WAWebSuspendedGroupModal.react",
    "WAWebSuspendedGroupModalV2.react",
    "WAWebSuspendedGroupRedesignModalLoadable",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumSupportAiEventType",
    "asyncToGeneratorRuntime",
    "err",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(e, t, n) {
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
    var m = 1250,
      p = "group-suspend-appeal",
      _ = "cxt/?entrypointid=group-no-longer-available&platform=web";
    function f() {
      return (
        o("WAWebFaqUrl").FAQ_BASE_URL +
        "/" +
        _ +
        "&lang=" +
        r("WAWebL10N").getNormalizedLocale()
      );
    }
    var g = c.jsx(o("WAWebExternalLink.react").ExternalLink, {
      href: f(),
      testid: void 0,
      children: s._(/*BTDS*/ "Learn more"),
    });
    function h(e) {
      var t = r("WAWebNoop"),
        n = r("WAWebNoop"),
        a = " ";
      o("WAWebModalManager").ModalManager.open(
        c.jsxs(r("WAWebSuspendedGroupModal.react"), {
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
                c.jsx(r("WAWebContactFormWrapper.react"), {
                  onCancel: t,
                  onSend: n,
                  supportTag: p,
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
            g,
          ],
        }),
        { transition: "modal-flow" },
      );
    }
    function y() {
      var e = " ";
      o("WAWebModalManager").ModalManager.open(
        c.jsxs(r("WAWebSuspendedGroupModal.react"), {
          title: s._(/*BTDS*/ "Group unavailable"),
          onDismissClicked: o("WAWebModalManager").closeModalManager,
          showSupportBtn: !1,
          children: [s._(/*BTDS*/ "This group is no longer available."), e, g],
        }),
        { transition: "modal-flow" },
      );
    }
    function C(e) {
      o("WAWebModalManager").ModalManager.open(
        c.jsx(r("WAWebSuspendedGroupModalV2.react"), { chat: e }),
        { transition: "modal-flow" },
      );
    }
    function b(e) {
      o("WAWebModalManager").ModalManager.open(
        c.jsx(
          o("WAWebSuspendedGroupRedesignModalLoadable")
            .SuspendedGroupRedesignModalLoadable,
          { chat: e, isCommunity: !1 },
        ),
        { transition: "modal-flow" },
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n;
          try {
            n = yield o(
              "WAWebGroupSuspensionAppealMutation",
            ).submitGroupSuspensionAppeal(
              t.toJid(),
              null,
              JSON.stringify(
                yield o("WAWebLoggerDebugInfo").getDebugInfo({
                  supportTag: "group-suspend-appeal",
                  convertFields: !0,
                  addUserAgentDetails: !0,
                  entityId: t.toJid(),
                }),
              ),
            );
          } catch (t) {
            (o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[GROUP_SUSPEND] Failed to submit group suspension appeal",
                  ])),
              )
              .catching(t instanceof Error ? t : r("err")(String(t)))
              .tags("GROUP_SUSPEND")
              .sendLogs("group-suspend-appeal-error"),
              (n = {
                success: !1,
                appealCreationTime: null,
                errorMessage: String(t),
              }));
          }
          return (
            n.success
              ? yield o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(t, {
                  suspendAppealStatus: "IN_REVIEW",
                  suspendAppealUpdateTime: n.appealCreationTime,
                })
              : o("WAWebToastManager").ToastManager.open(
                  c.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(
                      /*BTDS*/ "Something went wrong. Please try again later.",
                    ),
                  }),
                ),
            n
          );
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      o("WAWebModalManager").ModalManager.open(
        c.jsx(r("WAWebGroupSuspensionAppealModal.react"), { chatId: e }),
        { transition: "modal-flow" },
      );
    }
    function L(e) {
      o("WAWebModalManager").ModalManager.open(
        c.jsx(r("WAWebExitAndDeleteGroupPopup.react"), { chat: e }),
        { transition: "modal-flow" },
      );
    }
    function E(e, t) {
      o("WAWebModalManager").ModalManager.open(
        c.jsx(r("WAWebLeaveAndReportGroupModal.react"), {
          chat: e,
          spamFlow: t,
        }),
        { transition: "modal-flow" },
      );
    }
    function k() {
      o("WAWebModalManager").ModalManager.open(
        c.jsx(r("WAWebSuspendedGroupMediaDownloadFailureModal.react"), {}),
        { transition: "modal-flow" },
      );
    }
    ((l.logGroupSuspensionAppealEvent = d),
      (l.STACK_BUTTONS_WIDTH = m),
      (l.SUSPENDED_GROUP_SUPPORT_TAG = p),
      (l.getSuspendedFaqUrl = f),
      (l.openSuspendedGroupModal = h),
      (l.openTerminatedGroupOrNotMemberModal = y),
      (l.openSuspendedGroupModalV2 = C),
      (l.openSuspendedGroupRedesignModal = b),
      (l.submitGroupAppeal = v),
      (l.openGroupSuspensionAppealModal = R),
      (l.openExitAndDeleteGroupModal = L),
      (l.openLeaveAndReportGroupModal = E),
      (l.openSuspendedGroupMediaDownloadFailureModal = k));
  },
  226,
);
