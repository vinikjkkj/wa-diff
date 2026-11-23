__d(
  "WAWebSuspendedGroupUtils",
  [
    "fbt",
    "WALogger",
    "WAWebABProps",
    "WAWebABPropsSaga",
    "WAWebChatGroupUtils",
    "WAWebContactFormWrapper.react",
    "WAWebDBGroupsGroupMetadata",
    "WAWebExitAndDeleteGroupDialogV2.react",
    "WAWebExitAndDeleteGroupPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebGetMaybeChatById",
    "WAWebGroupAppealApprovedModalLoadable",
    "WAWebGroupAppealInReviewModalLoadable",
    "WAWebGroupAppealRejectedModalLoadable",
    "WAWebGroupGatingUtils",
    "WAWebGroupJoinRequestMetricUtils",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupSuspensionAppealEventsWamEvent",
    "WAWebGroupSuspensionAppealMutation",
    "WAWebGroupType",
    "WAWebL10N",
    "WAWebLoggerDebugInfo",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebSupportAiSessionWamEvent",
    "WAWebSuspendedGroupMediaDownloadFailureModalLoadable",
    "WAWebSuspendedGroupModal.react",
    "WAWebSuspendedGroupModalV2.react",
    "WAWebSuspendedGroupRedesignModalLoadable",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumGroupSuspensionAppealUiAction",
    "WAWebWamEnumGroupSuspensionAppealUiSurface",
    "WAWebWamEnumSupportAiEventType",
    "WDSDialogBridge",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useEffect;
    function m(e) {
      var t,
        n = e.chat,
        r = e.errorMessage,
        a = e.uiAction,
        i = e.uiSurface,
        l = n.groupMetadata;
      new (o(
        "WAWebGroupSuspensionAppealEventsWamEvent",
      ).GroupSuspensionAppealEventsWamEvent)({
        groupSuspensionAppealUiAction: a,
        groupSuspensionAppealUiSurface: i,
        groupTypeClient: o("WAWebGroupType").groupTypeToGroupTypeClient(
          o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(l),
        ),
        isAdmin:
          (t = l == null ? void 0 : l.participants.iAmAdmin()) != null ? t : !1,
        groupJid: o("WAWebGroupJoinRequestMetricUtils").getSanitizedJid(
          l == null ? void 0 : l.id,
        ),
        groupSuspensionAppealErrorMessage: r,
      }).commit();
    }
    function p(e) {
      return e === "suspended_admin" || e === "suspended_member"
        ? o("WAWebWamEnumGroupSuspensionAppealUiSurface")
            .GROUP_SUSPENSION_APPEAL_UI_SURFACE.SUSPENDED_FOOTER
        : e === "in_review_admin"
          ? o("WAWebWamEnumGroupSuspensionAppealUiSurface")
              .GROUP_SUSPENSION_APPEAL_UI_SURFACE.IN_REVIEW_FOOTER
          : e === "rejected_admin"
            ? o("WAWebWamEnumGroupSuspensionAppealUiSurface")
                .GROUP_SUSPENSION_APPEAL_UI_SURFACE.REJECT_FOOTER
            : e === "legacy"
              ? null
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function _(e, t, n) {
      d(
        function () {
          if (!(n == null || e == null)) {
            var r = o("WAWebGetMaybeChatById").getMaybeChatById(e);
            r != null && m({ chat: r, uiAction: t, uiSurface: n });
          }
        },
        [e, t, n],
      );
    }
    var f = 1250,
      g = "group-suspend-appeal",
      h = "cxt/?entrypointid=group-no-longer-available&platform=web";
    function y() {
      return (
        o("WAWebFaqUrl").FAQ_BASE_URL +
        "/" +
        h +
        "&lang=" +
        r("WAWebL10N").getNormalizedLocale()
      );
    }
    var C = c.jsx(o("WAWebExternalLink.react").ExternalLink, {
      href: y(),
      testid: "learn-more-link",
      children: s._(/*BTDS*/ ""),
    });
    function b(e) {
      var t = r("WAWebNoop"),
        n = r("WAWebNoop"),
        a = " ";
      o("WAWebModalManager").ModalManager.open(
        c.jsxs(r("WAWebSuspendedGroupModal.react"), {
          title: s._(/*BTDS*/ ""),
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
                  supportTag: g,
                  entityId: e,
                }),
                { transition: "modal-flow" },
              ));
          },
          onDismissClicked: o("WAWebModalManager").closeModalManager,
          showSupportBtn: !0,
          children: [s._(/*BTDS*/ ""), a, C],
        }),
        { transition: "modal-flow" },
      );
    }
    function v() {
      var e = " ";
      o("WAWebModalManager").ModalManager.open(
        c.jsxs(r("WAWebSuspendedGroupModal.react"), {
          title: s._(/*BTDS*/ ""),
          onDismissClicked: o("WAWebModalManager").closeModalManager,
          showSupportBtn: !1,
          children: [s._(/*BTDS*/ ""), e, C],
        }),
        { transition: "modal-flow" },
      );
    }
    function S(e) {
      o("WAWebModalManager").ModalManager.open(
        c.jsx(r("WAWebSuspendedGroupModalV2.react"), { chatId: e.id }),
        { transition: "modal-flow" },
      );
    }
    function R(e) {
      o("WAWebModalManager").ModalManager.open(
        c.jsx(
          o("WAWebSuspendedGroupRedesignModalLoadable")
            .SuspendedGroupRedesignModalLoadable,
          { chat: e, isCommunity: !1 },
        ),
        { transition: "modal-flow" },
      );
    }
    function L(e) {
      var t,
        n,
        r =
          ((t = e.groupMetadata) == null
            ? void 0
            : t.participants.iAmAdmin()) === !0;
      if (!r) {
        R(e);
        return;
      }
      var o = (n = e.groupMetadata) == null ? void 0 : n.suspendAppealStatus;
      e: {
        if (o === "IN_REVIEW") {
          k(e);
          break e;
        }
        if (o === "REJECTED") {
          I(e);
          break e;
        }
        {
          R(e);
          break e;
        }
      }
    }
    async function E(t, n) {
      var a = t.id,
        i = a.user.toString(),
        l;
      try {
        l = await o(
          "WAWebGroupSuspensionAppealMutation",
        ).submitGroupSuspensionAppeal(
          i,
          null,
          JSON.stringify(
            await o("WAWebLoggerDebugInfo").getDebugInfo({
              supportTag: "group-suspend-appeal",
              convertFields: !0,
              addUserAgentDetails: !0,
              entityId: i,
            }),
          ),
        );
      } catch (t) {
        var u = r("getErrorSafe")(t);
        (o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[GROUP_SUSPEND] Failed to submit group suspension appeal",
              ])),
          )
          .catching(u)
          .tags("GROUP_SUSPEND")
          .sendLogs("group-suspend-appeal-error"),
          (l = {
            success: !1,
            appealCreationTime: null,
            errorMessage: u.message || JSON.stringify(u),
          }));
      }
      if (l.success) {
        var d;
        (m({
          chat: t,
          uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction")
            .GROUP_SUSPENSION_APPEAL_UI_ACTION.REQUEST_REVIEW_SUBMIT_SUCCESS,
          uiSurface: n,
        }),
          await o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(a, {
            suspendAppealStatus: "IN_REVIEW",
            suspendAppealUpdateTime: l.appealCreationTime,
          }),
          (d = t.groupMetadata) == null ||
            d.set({
              suspendAppealStatus: "IN_REVIEW",
              suspendAppealUpdateTime: l.appealCreationTime,
            }),
          o("WAWebModalManager").closeModalManager(),
          k(t));
      } else {
        var p;
        (m({
          chat: t,
          errorMessage: (p = l.errorMessage) != null ? p : "Unknown error",
          uiAction: o("WAWebWamEnumGroupSuspensionAppealUiAction")
            .GROUP_SUSPENSION_APPEAL_UI_ACTION.REQUEST_REVIEW_SUBMIT_FAILURE,
          uiSurface: o("WAWebWamEnumGroupSuspensionAppealUiSurface")
            .GROUP_SUSPENSION_APPEAL_UI_SURFACE.REQUEST_REVIEW_ERROR_DIALOG,
        }),
          o("WAWebToastManager").ToastManager.open(
            c.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
          ));
      }
      return l;
    }
    function k(e) {
      o("WAWebModalManager").ModalManager.open(
        c.jsx(
          o("WAWebGroupAppealInReviewModalLoadable")
            .GroupAppealInReviewModalLoadable,
          { chatId: e.id },
        ),
        { transition: "modal-flow" },
      );
    }
    function I(e) {
      o("WAWebModalManager").ModalManager.open(
        c.jsx(
          o("WAWebGroupAppealRejectedModalLoadable")
            .GroupAppealRejectedModalLoadable,
          { chatId: e.id },
        ),
        { transition: "modal-flow" },
      );
    }
    function T(e) {
      var t,
        n,
        r,
        a,
        i,
        l =
          o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(e) &&
          (t =
            (n = e.groupMetadata) == null ? void 0 : n.getParentGroupChat()) !=
            null
            ? t
            : e;
      return (
        ((r = l.groupMetadata) == null ? void 0 : r.participants.iAmAdmin()) ===
          !0 &&
        ((a = l.groupMetadata) == null ? void 0 : a.suspendAppealStatus) ===
          "APPROVED" &&
        ((i = l.groupMetadata) == null
          ? void 0
          : i.suspendAppealApprovedSeen) !== !0 &&
        o("WAWebGroupGatingUtils").isGroupSuspensionAppealsRedesignEnabled()
      );
    }
    function D(e) {
      var t,
        n,
        r,
        a =
          o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(e) &&
          (t =
            (n = e.groupMetadata) == null ? void 0 : n.getParentGroupChat()) !=
            null
            ? t
            : e;
      ((r = a.groupMetadata) == null ||
        r.set({ suspendAppealApprovedSeen: !0 }),
        o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(a.id, {
          suspendAppealApprovedSeen: !0,
        }),
        o("WAWebModalManager").ModalManager.open(
          c.jsx(
            o("WAWebGroupAppealApprovedModalLoadable")
              .GroupAppealApprovedModalLoadable,
            { chatId: a.id },
          ),
          { transition: "modal-flow" },
        ));
    }
    function x(e) {
      o("WAWebABProps").getABPropConfigValue("wds_web_dialog")
        ? o("WDSDialogBridge").openWDSDialog(
            c.jsx(r("WAWebExitAndDeleteGroupDialogV2.react"), { chatId: e.id }),
          )
        : o("WAWebModalManager").ModalManager.open(
            c.jsx(r("WAWebExitAndDeleteGroupPopup.react"), { chatId: e.id }),
            { transition: "modal-flow" },
          );
    }
    function $() {
      (o("WAWebModalManager").closeModalManager(),
        o("WDSDialogBridge").openWDSDialog(
          c.jsx(
            o("WAWebSuspendedGroupMediaDownloadFailureModalLoadable")
              .SuspendedGroupMediaDownloadFailureModalLoadable,
            {},
          ),
        ));
    }
    ((l.logGroupSuspensionAppealEvent = m),
      (l.getFooterSurface = p),
      (l.useSuspensionImpression = _),
      (l.STACK_BUTTONS_WIDTH = f),
      (l.SUSPENDED_GROUP_SUPPORT_TAG = g),
      (l.getSuspendedFaqUrl = y),
      (l.openSuspendedGroupModal = b),
      (l.openTerminatedGroupOrNotMemberModal = v),
      (l.openSuspendedGroupModalV2 = S),
      (l.openSuspendedGroupRedesignModal = R),
      (l.openSuspendedGroupModalByAppealStatus = L),
      (l.submitGroupAppeal = E),
      (l.openGroupAppealInReviewModal = k),
      (l.openGroupAppealRejectedModal = I),
      (l.shouldShowGroupAppealApprovedModal = T),
      (l.openGroupAppealApprovedModal = D),
      (l.openExitAndDeleteGroupModal = x),
      (l.openSuspendedGroupMediaDownloadFailureModal = $));
  },
  226,
);
