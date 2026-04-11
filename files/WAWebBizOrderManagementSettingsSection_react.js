__d(
  "WAWebBizOrderManagementSettingsSection.react",
  [
    "fbt",
    "WAWebBizFrontendGatingUtils",
    "WAWebBizGatingUtils",
    "WAWebConfirmPopup.react",
    "WAWebDrawerButton.react",
    "WAWebDrawerSection.react",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "WAWebPaymentInfo",
    "WAWebPlusIcon.react",
    "WAWebRoundShape.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebUserPrefsPaymentInfo",
    "react",
    "stylex",
    "useWAWebForceUpdate",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        infoRow: {
          color: "x1mhprgp",
          fontSize: "x1f6kntn",
          fontWeight: "xk50ysn",
          lineHeight: "xa7kkou",
          $$css: !0,
        },
      };
    function m() {
      "use no forget";
      var t = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
      if (
        (o("useWAWebListener").useListener(
          o("WAWebPaymentInfo").PaymentInfo,
          o("WAWebPaymentInfo").CPI_INFO_CHANGE_EVENT,
          t,
        ),
        !o(
          "WAWebBizFrontendGatingUtils",
        ).isOrderDetailsPaymentInstructionsSyncEnabled())
      )
        return null;
      var n = function () {
        o("WAWebModalManager").ModalManager.open(
          c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
            tsNavigationData: {
              surface: "unknown",
              viewName: "order-management-settings",
            },
            title: s._(/*BTDS*/ "Feature not supported on web"),
            okText: r("WAWebFbtCommon")("OK"),
            onOK: o("WAWebModalManager").closeModalManager,
            children: c.jsx("div", {
              children: o("WAWebUserPrefsPaymentInfo").isCPIInfoValid()
                ? s._(
                    /*BTDS*/ "To update this payment method, log into a mobile device.",
                  )
                : s._(
                    /*BTDS*/ "To add a new payment method, log into a mobile device.",
                  ),
            }),
          }),
        );
      };
      return c.jsxs(r("WAWebDrawerSection.react"), {
        className: "x1280gxy x120ee7l x1q0q8m5 xu75nwu",
        animation: !1,
        children: [
          c.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                d.infoRow,
                o("WAWebUISpacing").uiPadding.horiz16,
                o("WAWebUISpacing").uiPadding.vert10,
              ),
              {
                children: o(
                  "WAWebBizGatingUtils",
                ).isOrderContentOptimizationEnabled()
                  ? s._(/*BTDS*/ "Settings")
                  : s._(/*BTDS*/ "Order settings"),
              },
            ),
          ),
          c.jsxs(o("WAWebDrawerButton.react").DrawerButtonSimple, {
            icon: c.jsx(r("WAWebRoundShape.react"), {
              disabled: !0,
              children: c.jsx(o("WAWebPlusIcon.react").PlusIcon, {}),
            }),
            testid: void 0,
            color: "disabled",
            onClick: n,
            children: [
              c.jsx(o("WAWebText.react").WAWebTextLarge, {
                color: "secondaryLighter",
                children: s._(/*BTDS*/ "Add custom instructions"),
              }),
              c.jsx(o("WAWebText.react").WAWebTextSmall, {
                color: "secondaryLighter",
                children: o("WAWebUserPrefsPaymentInfo").isCPIInfoValid()
                  ? o("WAWebUserPrefsPaymentInfo").getCPIInfo()
                  : s._(/*BTDS*/ "Feature not supported on web"),
              }),
            ],
          }),
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
