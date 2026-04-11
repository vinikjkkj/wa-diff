__d(
  "WAWebLeaveAndReportGroupModal.react",
  [
    "fbt",
    "WAWebABProps",
    "WAWebCheckBox.react",
    "WAWebConfirmPopup.react",
    "WAWebDeleteChatPopup.react",
    "WAWebExitGroupAction",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebGroupExitModalLoggingUtils",
    "WAWebGroupSafetyCheckModalLoggingUtils",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebNetworkStatus",
    "WAWebNoop",
    "WAWebSendSpamChatAction",
    "WAWebSpamConstants",
    "WAWebText.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUISpacing",
    "WAWebWamEnumPsGroupSafetyCheckExitDialogActions",
    "asyncToGeneratorRuntime",
    "react",
    "stylex",
    "useVisibility",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useState,
      m = { checkboxLabel: { display: "x1rg5ohu", $$css: !0 } };
    function p(t) {
      var a = t.chat,
        i = t.spamFlow,
        l = d(!1),
        u = l[0],
        p = l[1],
        g = d(!1),
        h = g[0],
        y = g[1],
        C = d(f(i)),
        b = C[0],
        v = C[1],
        S = a.id.toJid(),
        R = r("useVisibility")({
          onVisible: function () {
            return o(
              "WAWebGroupExitModalLoggingUtils",
            ).logGroupExitModalOpenEvent({ groupJid: S, spamFlow: i });
          },
        }),
        L = R[0],
        E = function () {
          o("WAWebGroupExitModalLoggingUtils").logGroupExitModalLearnMoreEvent({
            groupJid: S,
            spamFlow: i,
          });
        },
        k = function () {
          (o("WAWebGroupExitModalLoggingUtils").logGroupExitModalCancelEvent({
            groupJid: S,
            spamFlow: i,
          }),
            i ===
              o("WAWebSpamConstants").SpamFlow.GroupSafetyCheckModalUpsell &&
              o(
                "WAWebGroupSafetyCheckModalLoggingUtils",
              ).logGroupSafetyCheckExitDialogUIInteractionsEvent({
                groupJid: S,
                interaction: o(
                  "WAWebWamEnumPsGroupSafetyCheckExitDialogActions",
                ).PS_GROUP_SAFETY_CHECK_EXIT_DIALOG_ACTIONS
                  .GROUP_EXIT_DIALOG_DISMISS,
              }),
            o("WAWebModalManager").ModalManager.close());
        };
      function I() {
        return T.apply(this, arguments);
      }
      function T() {
        return (
          (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (!r("WAWebNetworkStatus").online)
              return (
                o("WAWebToastManager").ToastManager.open(
                  c.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(
                      /*BTDS*/ "Couldn't leave group. Please try again.",
                    ),
                  }),
                ),
                !1
              );
            if (
              i === o("WAWebSpamConstants").SpamFlow.GroupSafetyCheckModalUpsell
            ) {
              var e = b
                ? o("WAWebWamEnumPsGroupSafetyCheckExitDialogActions")
                    .PS_GROUP_SAFETY_CHECK_EXIT_DIALOG_ACTIONS
                    .GROUP_EXIT_DIALOG_EXIT_AND_REPORT
                : o("WAWebWamEnumPsGroupSafetyCheckExitDialogActions")
                    .PS_GROUP_SAFETY_CHECK_EXIT_DIALOG_ACTIONS
                    .GROUP_EXIT_DIALOG_EXIT;
              o(
                "WAWebGroupSafetyCheckModalLoggingUtils",
              ).logGroupSafetyCheckExitDialogUIInteractionsEvent({
                groupJid: S,
                interaction: e,
              });
            }
            var t = yield o("WAWebExitGroupAction").sendExitGroup(a);
            return (
              t &&
                b &&
                o("WAWebSendSpamChatAction").sendReport({
                  chat: a,
                  spamFlow: i,
                }),
              o("WAWebModalManager").ModalManager.close(),
              t
            );
          })),
          T.apply(this, arguments)
        );
      }
      function D() {
        return x.apply(this, arguments);
      }
      function x() {
        return (
          (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (o("WAWebGroupExitModalLoggingUtils").logGroupExitModalExitEvent({
              groupJid: S,
              spamFlow: i,
              reportingEnabled: b,
            }),
              p(!0),
              yield I(),
              p(!1));
          })),
          x.apply(this, arguments)
        );
      }
      var $ = function (t) {
          (o(
            "WAWebGroupExitModalLoggingUtils",
          ).logGroupDeleteConfirmationModalDeleteEvent({
            groupJid: S,
            spamFlow: i,
          }),
            t.finally(r("WAWebNoop")));
        },
        P = function () {
          o(
            "WAWebGroupExitModalLoggingUtils",
          ).logGroupDeleteConfirmationModalCancelEvent({
            groupJid: S,
            spamFlow: i,
          });
        };
      function N() {
        return M.apply(this, arguments);
      }
      function M() {
        return (
          (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (o(
              "WAWebGroupExitModalLoggingUtils",
            ).logGroupExitModalExitAndDeleteEvent({
              groupJid: S,
              spamFlow: i,
              reportingEnabled: b,
            }),
              y(!0));
            var e = yield I();
            (y(!1),
              e &&
                o("WAWebModalManager").ModalManager.open(
                  c.jsx(r("WAWebDeleteChatPopup.react"), {
                    chat: a,
                    onDeleteOrExit: $,
                    onCancel: P,
                  }),
                  { transition: "modal" },
                ));
          })),
          M.apply(this, arguments)
        );
      }
      var w = s._(/*BTDS*/ "Exit group: \u201c{group_name}\u201d?", [
          s._param(
            "group_name",
            c.jsx(o("WAWebName.react").Name, { chat: a, titlify: !0 }),
          ),
        ]),
        A = s._(/*BTDS*/ "Only admins are notified when you leave a group."),
        F = s._(/*BTDS*/ "Exit group"),
        O = c.jsx(o("WAWebExternalLink.react").ExternalLink, {
          href: o("WAWebFaqUrl").getBlockingReportingFaqUrl(),
          testid: void 0,
          onClick: E,
          children: r("WAWebFbtCommon")("Learn more"),
        }),
        B = s._(
          /*BTDS*/ "The last 5 messages in this chat will be sent to WhatsApp. No one in the group will know about this report. {link to learn more}",
          [s._param("link to learn more", O)],
        ),
        W = {
          text: s._(/*BTDS*/ "Exit and delete for me"),
          onClick: N,
          spinner: h,
          disabled: h || u,
          type: "warning",
        },
        q = _(i)
          ? c.jsxs(c.Fragment, {
              children: [
                c.jsx(o("WAWebCheckBox.react").CheckBox, {
                  onChange: function () {
                    return v(!b);
                  },
                  checked: b,
                  id: "menu-icon-Report-checkbox",
                  testid: void 0,
                }),
                c.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
                  color: "primary",
                  xstyle: [
                    m.checkboxLabel,
                    o("WAWebUISpacing").uiMargin.start8,
                  ],
                  testid: void 0,
                  children: r("WAWebFbtCommon")("Report to WhatsApp"),
                }),
                c.jsx(o("WAWebText.react").WAWebTextSmall, {
                  color: "secondary",
                  xstyle: [
                    o("WAWebUISpacing").uiMargin.start25,
                    o("WAWebUISpacing").uiMargin.top6,
                  ],
                  testid: void 0,
                  children: B,
                }),
              ],
            })
          : null;
      return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "unknown",
          viewName: "leave-report-group",
        },
        onOK: D,
        okText: F,
        contentRef: L,
        okButtonType: "solid-warning",
        onCancel: k,
        cancelButtonType: "simplified",
        onOverlayClick: k,
        okSpinner: u,
        okDisabled: u || h,
        title: w,
        extraButtonProps: W,
        children: c.jsxs(
          "div",
          babelHelpers.extends(
            {},
            (e || (e = r("stylex"))).props(o("WAWebUISpacing").uiMargin.vert12),
            {
              children: [
                c.jsx(o("WAWebText.react").WAWebTextSmall, {
                  color: "secondary",
                  xstyle: o("WAWebUISpacing").uiMargin.vert12,
                  children: A,
                }),
                q,
              ],
            },
          ),
        ),
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      return (
        f(e) ||
        o("WAWebABProps").getABPropConfigValue("improve_group_reporting")
      );
    }
    function f(e) {
      return (
        e === o("WAWebSpamConstants").SpamFlow.GroupFmxCardLeave ||
        e === o("WAWebSpamConstants").SpamFlow.GroupSpamBannerReport ||
        e === o("WAWebSpamConstants").SpamFlow.GroupSafetyCheckModalUpsell
      );
    }
    l.default = p;
  },
  226,
);
