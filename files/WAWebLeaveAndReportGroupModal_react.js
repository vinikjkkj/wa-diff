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
      d = u.useState;
    function m(t) {
      var a = t.chat,
        i = t.spamFlow,
        l = d(!1),
        u = l[0],
        m = l[1],
        f = d(!1),
        g = f[0],
        h = f[1],
        y = d(_(i)),
        C = y[0],
        b = y[1],
        v = a.id.toJid(),
        S = r("useVisibility")({
          onVisible: function () {
            return o(
              "WAWebGroupExitModalLoggingUtils",
            ).logGroupExitModalOpenEvent({ groupJid: v, spamFlow: i });
          },
        }),
        R = S[0],
        L = function () {
          o("WAWebGroupExitModalLoggingUtils").logGroupExitModalLearnMoreEvent({
            groupJid: v,
            spamFlow: i,
          });
        },
        E = function () {
          (o("WAWebGroupExitModalLoggingUtils").logGroupExitModalCancelEvent({
            groupJid: v,
            spamFlow: i,
          }),
            i ===
              o("WAWebSpamConstants").SpamFlow.GroupSafetyCheckModalUpsell &&
              o(
                "WAWebGroupSafetyCheckModalLoggingUtils",
              ).logGroupSafetyCheckExitDialogUIInteractionsEvent({
                groupJid: v,
                interaction: o(
                  "WAWebWamEnumPsGroupSafetyCheckExitDialogActions",
                ).PS_GROUP_SAFETY_CHECK_EXIT_DIALOG_ACTIONS
                  .GROUP_EXIT_DIALOG_DISMISS,
              }),
            o("WAWebModalManager").ModalManager.close());
        };
      function k() {
        return I.apply(this, arguments);
      }
      function I() {
        return (
          (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
              var e = C
                ? o("WAWebWamEnumPsGroupSafetyCheckExitDialogActions")
                    .PS_GROUP_SAFETY_CHECK_EXIT_DIALOG_ACTIONS
                    .GROUP_EXIT_DIALOG_EXIT_AND_REPORT
                : o("WAWebWamEnumPsGroupSafetyCheckExitDialogActions")
                    .PS_GROUP_SAFETY_CHECK_EXIT_DIALOG_ACTIONS
                    .GROUP_EXIT_DIALOG_EXIT;
              o(
                "WAWebGroupSafetyCheckModalLoggingUtils",
              ).logGroupSafetyCheckExitDialogUIInteractionsEvent({
                groupJid: v,
                interaction: e,
              });
            }
            var t = yield o("WAWebExitGroupAction").sendExitGroup(a);
            return (
              t &&
                C &&
                o("WAWebSendSpamChatAction").sendReport({
                  chat: a,
                  spamFlow: i,
                }),
              o("WAWebModalManager").ModalManager.close(),
              t
            );
          })),
          I.apply(this, arguments)
        );
      }
      function T() {
        return D.apply(this, arguments);
      }
      function D() {
        return (
          (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (o("WAWebGroupExitModalLoggingUtils").logGroupExitModalExitEvent({
              groupJid: v,
              spamFlow: i,
              reportingEnabled: C,
            }),
              m(!0),
              yield k(),
              m(!1));
          })),
          D.apply(this, arguments)
        );
      }
      var x = function (t) {
          (o(
            "WAWebGroupExitModalLoggingUtils",
          ).logGroupDeleteConfirmationModalDeleteEvent({
            groupJid: v,
            spamFlow: i,
          }),
            t.finally(r("WAWebNoop")));
        },
        $ = function () {
          o(
            "WAWebGroupExitModalLoggingUtils",
          ).logGroupDeleteConfirmationModalCancelEvent({
            groupJid: v,
            spamFlow: i,
          });
        };
      function P() {
        return N.apply(this, arguments);
      }
      function N() {
        return (
          (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (o(
              "WAWebGroupExitModalLoggingUtils",
            ).logGroupExitModalExitAndDeleteEvent({
              groupJid: v,
              spamFlow: i,
              reportingEnabled: C,
            }),
              h(!0));
            var e = yield k();
            (h(!1),
              e &&
                o("WAWebModalManager").ModalManager.open(
                  c.jsx(r("WAWebDeleteChatPopup.react"), {
                    chat: a,
                    onDeleteOrExit: x,
                    onCancel: $,
                  }),
                  { transition: "modal" },
                ));
          })),
          N.apply(this, arguments)
        );
      }
      var M = s._(/*BTDS*/ "Exit group: \u201c{group_name}\u201d?", [
          s._param(
            "group_name",
            c.jsx(o("WAWebName.react").Name, { chat: a, titlify: !0 }),
          ),
        ]),
        w = s._(/*BTDS*/ "Only admins are notified when you leave a group."),
        A = s._(/*BTDS*/ "Exit group"),
        F = c.jsx(o("WAWebExternalLink.react").ExternalLink, {
          href: o("WAWebFaqUrl").getBlockingReportingFaqUrl(),
          testid: void 0,
          onClick: L,
          children: r("WAWebFbtCommon")("Learn more"),
        }),
        O = s._(
          /*BTDS*/ "The last 5 messages in this chat will be sent to WhatsApp. No one in the group will know about this report. {link to learn more}",
          [s._param("link to learn more", F)],
        ),
        B = {
          text: s._(/*BTDS*/ "Exit and delete for me"),
          onClick: P,
          spinner: g,
          disabled: g || u,
          type: "warning",
        },
        W = p(i)
          ? c.jsxs(c.Fragment, {
              children: [
                c.jsxs("div", {
                  className: "x78zum5 x1q0g3np x6s0dn4",
                  children: [
                    c.jsx(o("WAWebCheckBox.react").CheckBox, {
                      onChange: function () {
                        return b(!C);
                      },
                      checked: C,
                      id: "menu-icon-Report-checkbox",
                      testid: void 0,
                    }),
                    c.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
                      color: "primary",
                      xstyle: o("WAWebUISpacing").uiMargin.start8,
                      testid: void 0,
                      children: r("WAWebFbtCommon")("Report to WhatsApp"),
                    }),
                  ],
                }),
                c.jsx(o("WAWebText.react").WAWebTextSmall, {
                  color: "secondary",
                  xstyle: [
                    o("WAWebUISpacing").uiMargin.start25,
                    o("WAWebUISpacing").uiMargin.top6,
                  ],
                  testid: void 0,
                  children: O,
                }),
              ],
            })
          : null;
      return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "unknown",
          viewName: "leave-report-group",
        },
        onOK: T,
        okText: A,
        contentRef: R,
        okButtonType: "solid-warning",
        onCancel: E,
        cancelButtonType: "simplified",
        onOverlayClick: E,
        okSpinner: u,
        okDisabled: u || g,
        title: M,
        extraButtonProps: B,
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
                  children: w,
                }),
                W,
              ],
            },
          ),
        ),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      return (
        _(e) ||
        o("WAWebABProps").getABPropConfigValue("improve_group_reporting")
      );
    }
    function _(e) {
      return (
        e === o("WAWebSpamConstants").SpamFlow.GroupFmxCardLeave ||
        e === o("WAWebSpamConstants").SpamFlow.GroupSpamBannerReport ||
        e === o("WAWebSpamConstants").SpamFlow.GroupSafetyCheckModalUpsell
      );
    }
    l.default = m;
  },
  226,
);
