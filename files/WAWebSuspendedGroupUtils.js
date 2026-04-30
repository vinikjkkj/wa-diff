__d(
  "WAWebSuspendedGroupUtils",
  [
    "fbt",
    "WALogger",
    "WAWebABPropsSaga",
    "WAWebChatGroupUtils",
    "WAWebContactFormWrapper.react",
    "WAWebDBGroupsGroupMetadata",
    "WAWebExitAndDeleteGroupPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebGroupAppealApprovedModalLoadable",
    "WAWebGroupAppealInReviewModalLoadable",
    "WAWebGroupAppealRejectedModalLoadable",
    "WAWebGroupGatingUtils",
    "WAWebGroupJoinRequestMetricUtils",
    "WAWebGroupSuspensionAppealEventsWamEvent",
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
    "WAWebWamEnumGroupSuspensionAppealUiAction",
    "WAWebWamEnumGroupSuspensionAppealUiSurface",
    "WAWebWamEnumSupportAiEventType",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useEffect;
    function m(e, t, n, r) {
      var a,
        i = e.groupMetadata;
      new (o(
        "WAWebGroupSuspensionAppealEventsWamEvent",
      ).GroupSuspensionAppealEventsWamEvent)({
        groupSuspensionAppealUiAction: t,
        groupSuspensionAppealUiSurface: n,
        groupTypeClient: o("WAWebGroupType").groupTypeToGroupTypeClient(
          i == null ? void 0 : i.groupType,
        ),
        isAdmin:
          (a = i == null ? void 0 : i.participants.iAmAdmin()) != null ? a : !1,
        groupJid: o("WAWebGroupJoinRequestMetricUtils").getSanitizedJid(
          i == null ? void 0 : i.id,
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
      var r = o("react-compiler-runtime").c(5),
        a,
        i;
      (r[0] !== e || r[1] !== t || r[2] !== n
        ? ((a = function () {
            n != null && e != null && m(e, t, n);
          }),
          (i = [e, t, n]),
          (r[0] = e),
          (r[1] = t),
          (r[2] = n),
          (r[3] = a),
          (r[4] = i))
        : ((a = r[3]), (i = r[4])),
        d(a, i));
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
      children: s._(/*BTDS*/ "Learn more"),
    });
    function b(e) {
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
                  supportTag: g,
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
            C,
          ],
        }),
        { transition: "modal-flow" },
      );
    }
    function v() {
      var e = " ";
      o("WAWebModalManager").ModalManager.open(
        c.jsxs(r("WAWebSuspendedGroupModal.react"), {
          title: s._(/*BTDS*/ "Group unavailable"),
          onDismissClicked: o("WAWebModalManager").closeModalManager,
          showSupportBtn: !1,
          children: [s._(/*BTDS*/ "This group is no longer available."), e, C],
        }),
        { transition: "modal-flow" },
      );
    }
    function S(e) {
      o("WAWebModalManager").ModalManager.open(
        c.jsx(r("WAWebSuspendedGroupModalV2.react"), { chat: e }),
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
          I(e);
          break e;
        }
        if (o === "REJECTED") {
          T(e);
          break e;
        }
        {
          R(e);
          break e;
        }
      }
    }
    function E(e, t) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = t.id,
            i = a.user.toString(),
            l;
          try {
            l = yield o(
              "WAWebGroupSuspensionAppealMutation",
            ).submitGroupSuspensionAppeal(
              i,
              null,
              JSON.stringify(
                yield o("WAWebLoggerDebugInfo").getDebugInfo({
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
            (m(
              t,
              o("WAWebWamEnumGroupSuspensionAppealUiAction")
                .GROUP_SUSPENSION_APPEAL_UI_ACTION
                .REQUEST_REVIEW_SUBMIT_SUCCESS,
              n,
            ),
              yield o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(a, {
                suspendAppealStatus: "IN_REVIEW",
                suspendAppealUpdateTime: l.appealCreationTime,
              }),
              (d = t.groupMetadata) == null ||
                d.set({
                  suspendAppealStatus: "IN_REVIEW",
                  suspendAppealUpdateTime: l.appealCreationTime,
                }),
              o("WAWebModalManager").closeModalManager(),
              I(t));
          } else {
            var p;
            (m(
              t,
              o("WAWebWamEnumGroupSuspensionAppealUiAction")
                .GROUP_SUSPENSION_APPEAL_UI_ACTION
                .REQUEST_REVIEW_SUBMIT_FAILURE,
              o("WAWebWamEnumGroupSuspensionAppealUiSurface")
                .GROUP_SUSPENSION_APPEAL_UI_SURFACE.REQUEST_REVIEW_ERROR_DIALOG,
              (p = l.errorMessage) != null ? p : "Unknown error",
            ),
              o("WAWebToastManager").ToastManager.open(
                c.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(
                    /*BTDS*/ "Something went wrong. Please try again later.",
                  ),
                }),
              ));
          }
          return l;
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      o("WAWebModalManager").ModalManager.open(
        c.jsx(
          o("WAWebGroupAppealInReviewModalLoadable")
            .GroupAppealInReviewModalLoadable,
          { chat: e },
        ),
        { transition: "modal-flow" },
      );
    }
    function T(e) {
      o("WAWebModalManager").ModalManager.open(
        c.jsx(
          o("WAWebGroupAppealRejectedModalLoadable")
            .GroupAppealRejectedModalLoadable,
          { chat: e },
        ),
        { transition: "modal-flow" },
      );
    }
    function D(e) {
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
    function x(e) {
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
            { chat: a },
          ),
          { transition: "modal-flow" },
        ));
    }
    function $(e) {
      o("WAWebModalManager").ModalManager.open(
        c.jsx(r("WAWebExitAndDeleteGroupPopup.react"), { chat: e }),
        { transition: "modal-flow" },
      );
    }
    function P(e, t) {
      o("WAWebModalManager").ModalManager.open(
        c.jsx(r("WAWebLeaveAndReportGroupModal.react"), {
          chat: e,
          spamFlow: t,
        }),
        { transition: "modal-flow" },
      );
    }
    function N() {
      o("WAWebModalManager").ModalManager.open(
        c.jsx(r("WAWebSuspendedGroupMediaDownloadFailureModal.react"), {}),
        { transition: "modal-flow" },
      );
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
      (l.openGroupAppealInReviewModal = I),
      (l.openGroupAppealRejectedModal = T),
      (l.shouldShowGroupAppealApprovedModal = D),
      (l.openGroupAppealApprovedModal = x),
      (l.openExitAndDeleteGroupModal = $),
      (l.openLeaveAndReportGroupModal = P),
      (l.openSuspendedGroupMediaDownloadFailureModal = N));
  },
  226,
);
