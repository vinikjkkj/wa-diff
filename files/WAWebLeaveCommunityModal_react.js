__d(
  "WAWebLeaveCommunityModal.react",
  [
    "fbt",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebChatCommunityUtils",
    "WAWebCheckBox.react",
    "WAWebCommunityTransferOwnershipFlowLoadable.react",
    "WAWebConfirmPopup.react",
    "WAWebDeactivateCommunityDrawerLoadable",
    "WAWebDeleteCommunityAndSubgroupsPopup.react",
    "WAWebDrawerManager",
    "WAWebExitCommunityAction",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebGroupSafetyCheckModalLoggingUtils",
    "WAWebKeyboardTabUtils",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebNetworkStatus",
    "WAWebSendSpamChatAction",
    "WAWebSpamConstants",
    "WAWebText.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUISpacing",
    "WAWebWamEnumPsGroupSafetyCheckExitDialogActions",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useLayoutEffect,
      m = c.useRef,
      p = c.useState,
      _ = { checkboxLabel: { display: "x1rg5ohu", $$css: !0 } };
    function f(e) {
      return e.formattedTitle
        ? s._(/*BTDS*/ "Exit community: \u201c{community-name}\u201d?", [
            s._param("community-name", e.formattedTitle),
          ])
        : s._(/*BTDS*/ "Exit community?");
    }
    function g() {
      return s._(/*BTDS*/ "Exit community");
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = e.chat,
        a = e.enableDeactivateIfSuperAdmin,
        i = e.onExitAndDeleteSuccess,
        l = e.onSuccess,
        c = e.onTransferOwnership,
        h = e.spamFlow,
        C = p(!1),
        b = C[0],
        v = C[1],
        S = p(!0),
        R = S[0],
        L = S[1],
        E = p(y(h)),
        k = E[0],
        I = E[1],
        T = m(null);
      d(
        function () {
          if (a === !0 && T != null && T.current) {
            var e = T.current.getBoundingClientRect();
            e.right > window.innerWidth && R === !0 && L(!1);
          }
        },
        [a, R],
      );
      var D = o("WAWebChatCommunityUtils").isCommunitySuperAdmin(t),
        x = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
          href: o("WAWebFaqUrl").getExitCommunityUrl(),
          children: r("WAWebFbtCommon")("Learn more"),
        }),
        $ = s._(
          /*BTDS*/ "You will also leave all groups in this community. Only admins are notified when you leave a community.",
        ),
        P = s._(
          /*BTDS*/ "The last 5 messages in this chat will be sent to WhatsApp. No one in the community will know about this report. {link to learn more}",
          [s._param("link to learn more", x)],
        ),
        N = y(h)
          ? u.jsxs(u.Fragment, {
              children: [
                u.jsx(o("WAWebCheckBox.react").CheckBox, {
                  onChange: function () {
                    return I(!k);
                  },
                  checked: k,
                  id: "menu-icon-report-checkbox",
                  testid: void 0,
                }),
                u.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
                  color: "primary",
                  xstyle: [
                    _.checkboxLabel,
                    o("WAWebUISpacing").uiMargin.start8,
                  ],
                  testid: void 0,
                  children: r("WAWebFbtCommon")("Report to WhatsApp"),
                }),
                u.jsx(o("WAWebText.react").WAWebTextSmall, {
                  color: "secondary",
                  xstyle: [
                    o("WAWebUISpacing").uiMargin.start25,
                    o("WAWebUISpacing").uiMargin.top6,
                  ],
                  testid: void 0,
                  children: P,
                }),
              ],
            })
          : null,
        M = u.jsxs(u.Fragment, {
          children: [
            u.jsx(o("WAWebText.react").WAWebTextSmall, {
              xstyle: o("WAWebUISpacing").uiMargin.vert12,
              children: $,
            }),
            N,
          ],
        }),
        w = function () {
          o("WAWebToastManager").ToastManager.open(
            u.jsx(o("WAWebToast.react").Toast, {
              msg: s._(/*BTDS*/ "Couldn't leave community. Please try again."),
            }),
          );
        },
        A = function () {
          if (!r("WAWebNetworkStatus").online) {
            w();
            return;
          }
          (h === o("WAWebSpamConstants").SpamFlow.GroupSafetyCheckModalUpsell &&
            o(
              "WAWebGroupSafetyCheckModalLoggingUtils",
            ).logGroupSafetyCheckExitDialogUIInteractionsEvent({
              groupJid: t.id.toJid(),
              interaction: o("WAWebWamEnumPsGroupSafetyCheckExitDialogActions")
                .PS_GROUP_SAFETY_CHECK_EXIT_DIALOG_ACTIONS
                .COMMUNITY_EXIT_DIALOG_EXIT,
            }),
            v(!0),
            o("WAWebExitCommunityAction").sendExitCommunity(t),
            k &&
              h != null &&
              o("WAWebSendSpamChatAction").sendReport({ chat: t, spamFlow: h }),
            v(!1),
            o("WAWebModalManager").ModalManager.close(),
            l == null || l());
        },
        F = function () {
          (h === o("WAWebSpamConstants").SpamFlow.GroupSafetyCheckModalUpsell &&
            o(
              "WAWebGroupSafetyCheckModalLoggingUtils",
            ).logGroupSafetyCheckExitDialogUIInteractionsEvent({
              groupJid: t.id.toJid(),
              interaction: o("WAWebWamEnumPsGroupSafetyCheckExitDialogActions")
                .PS_GROUP_SAFETY_CHECK_EXIT_DIALOG_ACTIONS
                .COMMUNITY_EXIT_DIALOG_DISMISS,
            }),
            o("WAWebModalManager").ModalManager.close(),
            l == null || l());
        },
        O = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (!r("WAWebNetworkStatus").online) {
              w();
              return;
            }
            (h ===
              o("WAWebSpamConstants").SpamFlow.GroupSafetyCheckModalUpsell &&
              o(
                "WAWebGroupSafetyCheckModalLoggingUtils",
              ).logGroupSafetyCheckExitDialogUIInteractionsEvent({
                groupJid: t.id.toJid(),
                interaction: o(
                  "WAWebWamEnumPsGroupSafetyCheckExitDialogActions",
                ).PS_GROUP_SAFETY_CHECK_EXIT_DIALOG_ACTIONS
                  .COMMUNITY_EXIT_DIALOG_EXIT_AND_DELETE,
              }),
              o("WAWebModalManager").ModalManager.close(),
              o("WAWebModalManager").ModalManager.open(
                u.jsx(r("WAWebDeleteCommunityAndSubgroupsPopup.react"), {
                  chat: t,
                  shouldReport: k,
                  spamFlow: h,
                  onExitAndDeleteSuccess: i,
                }),
                { transition: "modal" },
              ));
          });
          return function () {
            return e.apply(this, arguments);
          };
        })();
      if (D !== !0) {
        var B = {
            text: s._(/*BTDS*/ "Exit and delete for me"),
            onClick: O,
            disabled: b,
            type: "warning",
          },
          W = f(t),
          q = g();
        return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          testid: void 0,
          title: W,
          onCancel: F,
          cancelButtonType: "simplified",
          onOverlayClick: F,
          okDisabled: b,
          cancelDisabled: b,
          onOK: A,
          okButtonType: "solid-warning",
          okText: q,
          buttonsDirection: "vertical",
          extraButtonProps: B,
          children: M,
        });
      }
      var U = function () {
          (o("WAWebModalManager").ModalManager.close(),
            l == null || l(),
            c
              ? c()
              : o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                  u.jsx(
                    o("WAWebCommunityTransferOwnershipFlowLoadable.react")
                      .CommunityTransferOwnershipFlowLoadable,
                    {
                      parentGroupChat: t,
                      onEnd: o("WAWebDrawerManager").closeDrawerRight,
                    },
                  ),
                  {
                    transition: "flow-transition-drawer-push",
                    focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                  },
                ));
        },
        V = function () {
          (o("WAWebModalManager").ModalManager.close(),
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
                ? { descriptorType: "deactivate_community", chat: t }
                : u.jsx(
                    o("WAWebDeactivateCommunityDrawerLoadable")
                      .DeactivateCommunityDrawerLoadable,
                    {
                      chat: t,
                      onBack: o("WAWebDrawerManager").closeDrawerRight,
                    },
                  ),
              {
                transition: "flow-transition-drawer-push",
                focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
              },
            ));
        },
        H = s._(/*BTDS*/ "Assign new owner"),
        G = r("WAWebFbtCommon")("Cancel"),
        z = { text: s._(/*BTDS*/ "Deactivate instead"), onClick: V },
        j =
          a === !0
            ? s._(
                /*BTDS*/ "As the owner, you'll need to assign a new owner to exit the community or you can deactivate it instead.",
              )
            : s._(
                /*BTDS*/ "As the owner, you'll need to assign a new owner to exit the community.",
              ),
        K =
          a === !0
            ? "leave-community-as-deactivate-instead-popup"
            : "leave-community-as-creator-or-assign-owner-popup",
        Q = a === !0 ? G : H,
        X = a === !0 ? H : G,
        Y = a === !0 ? o("WAWebModalManager").closeModalManager : U,
        J = a === !0 ? U : o("WAWebModalManager").closeModalManager,
        Z = R ? "horizontal" : "vertical";
      return u.jsx(
        o("WAWebConfirmPopup.react").ConfirmPopup,
        babelHelpers.extends(
          {
            testid: void 0,
            cancelText: Q,
            okText: X,
            onCancel: Y,
            onOK: J,
            contentRef: T,
          },
          a === !0 && {
            extraButtonProps: z,
            type: o("WAWebModal.react").ModalTheme.AutoWrap,
            cancelButtonType: "secondary",
            buttonsDirection: Z,
          },
          { children: j },
        ),
      );
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      return (
        e === o("WAWebSpamConstants").SpamFlow.GroupFmxCardLeave ||
        e === o("WAWebSpamConstants").SpamFlow.GroupSpamBannerReport ||
        e === o("WAWebSpamConstants").SpamFlow.GroupSafetyCheckModalUpsell
      );
    }
    l.default = h;
  },
  226,
);
