__d(
  "WAWebSmbPerCustomerDataSharingOptInModal",
  [
    "fbt",
    "WAWebCTWAGatingUtils",
    "WAWebConfirmPopup.react",
    "WAWebCtwaPerCustomerDataSharingSync",
    "WAWebDataSharing3pdLidCollection",
    "WAWebExternalLink.react",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebPerCustomerDataSharingControlLogging",
    "WAWebSpinner.react",
    "WAWebTosUrl",
    "WAWebWamEnumSmbPerCustomerDataSharingControlAction",
    "WAWebWidFactory",
    "WDSIconIcAccountCircle.react",
    "WDSIconIcSettings.react",
    "WDSIconIcVisibilityOff.react",
    "WDSIllustrationWdsSmbPictoArrowsTransfer.react",
    "WDSText.react",
    "WDSToastImperativeHost",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useState,
      p = !1;
    function _(e) {
      o(
        "WAWebPerCustomerDataSharingControlLogging",
      ).logPerCustomerDataSharingControlEvent({
        action: e.action,
        actionOptInStatus: e.actionOptInStatus,
        currentOptInStatus: p,
        entryPoint: e.entryPoint,
      });
    }
    function f(e) {
      d(
        function () {
          _({
            action: o("WAWebWamEnumSmbPerCustomerDataSharingControlAction")
              .SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ACTION.CONSENT_SCREEN_VIEW,
            entryPoint: e,
          });
        },
        [e],
      );
    }
    var g = {
        illustration: { width: "xh8yej3", $$css: !0 },
        iconDescription: { maxWidth: "x1i5r0r9", $$css: !0 },
        iconColor: { color: "xhslqc4", $$css: !0 },
        spinnerWrapper: { height: "x1lgcfn3", $$css: !0 },
        marginBottom12: { marginBottom: "xcytdqz", $$css: !0 },
        marginStart24: { marginInlineStart: "xyxtwap", $$css: !0 },
        paddingTop24: { paddingTop: "xl7twdi", $$css: !0 },
        paddingBottom24: { paddingBottom: "xvg22vi", $$css: !0 },
      },
      h = function () {
        var e = s._(/*BTDS*/ "");
        o("WDSToastImperativeHost").showWDSToast({
          action: { label: e, onPress: r("WAWebNoop") },
          message: s._(/*BTDS*/ ""),
        });
      };
    function y() {
      var e;
      return u.jsxs((e = o("WAWebFlex.react")).FlexColumn, {
        children: [
          u.jsx(e.FlexRow, {
            xstyle: [g.paddingTop24, g.paddingBottom24, g.illustration],
            justify: "center",
            children: u.jsx(
              r("WDSIllustrationWdsSmbPictoArrowsTransfer.react"),
              { testid: "wds-smb-picto-arrows-transfer" },
            ),
          }),
          u.jsx(e.FlexRow, {
            children: u.jsx(r("WDSText.react"), {
              type: "Headline2",
              colorName: "contentDefault",
              testid: "ctwa-per-customer-sharing-opt-in-title",
              textAlign: "center",
              xstyle: g.marginBottom12,
              children: s._(/*BTDS*/ ""),
            }),
          }),
          u.jsx(e.FlexColumn, {
            xstyle: g.marginBottom12,
            children: u.jsxs(r("WDSText.react"), {
              type: "Body1",
              colorName: "contentDeemphasized",
              testid: "ctwa-per-customer-sharing-opt-in-description",
              children: [
                o("WAWebCTWAGatingUtils").shouldShowMetaAdSourceCopy()
                  ? s._(/*BTDS*/ "")
                  : s._(/*BTDS*/ ""),
                " ",
                u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebTosUrl").getBizDataSharingHcaUrl(),
                  children: s._(/*BTDS*/ ""),
                }),
              ],
            }),
          }),
          u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: g.marginBottom12,
            children: [
              u.jsx(r("WDSIconIcVisibilityOff.react"), {
                height: 22,
                width: 22,
                xstyle: g.iconColor,
              }),
              u.jsx(r("WDSText.react"), {
                type: "Body1",
                colorName: "contentDefault",
                testid: "ctwa-per-customer-sharing-opt-in-content-exclusion",
                xstyle: [g.marginStart24, g.iconDescription],
                children: s._(/*BTDS*/ ""),
              }),
            ],
          }),
          u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: g.marginBottom12,
            children: [
              u.jsx(r("WDSIconIcSettings.react"), { xstyle: g.iconColor }),
              u.jsx(r("WDSText.react"), {
                type: "Body1",
                colorName: "contentDefault",
                testid: "ctwa-per-customer-sharing-opt-in-settings-guidance",
                xstyle: [g.marginStart24, g.iconDescription],
                children: s._(/*BTDS*/ ""),
              }),
            ],
          }),
          u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: g.marginBottom12,
            children: [
              u.jsx(r("WDSIconIcAccountCircle.react"), { xstyle: g.iconColor }),
              u.jsx(r("WDSText.react"), {
                type: "Body1",
                colorName: "contentDefault",
                testid: "ctwa-per-customer-sharing-opt-in-individual-guidance",
                xstyle: [g.marginStart24, g.iconDescription],
                children: s._(/*BTDS*/ ""),
              }),
            ],
          }),
        ],
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    var C = function () {
      return u.jsx(o("WAWebFlex.react").FlexColumn, {
        align: "center",
        justify: "center",
        xstyle: g.spinnerWrapper,
        children: u.jsx(o("WAWebSpinner.react").Spinner, {
          color: "default",
          size: 48,
          stroke: 6,
        }),
      });
    };
    function b(e) {
      var t = e.accountLids,
        n = e.entryPoint,
        a = m(!1),
        i = a[0],
        l = a[1];
      f(n);
      var c = async function () {
          l(!0);
          var e = t
              .map(function (e) {
                return o("WAWebWidFactory").createUserLidOrThrow(e);
              })
              .filter(function (e) {
                return !o(
                  "WAWebDataSharing3pdLidCollection",
                ).DataSharing3pdLidCollection.isDataSharingEnabled(
                  e.toString(),
                );
              }),
            a = await Promise.allSettled(
              e.map(function (e) {
                return r(
                  "WAWebCtwaPerCustomerDataSharingSync",
                ).sendPerCustomerDataSharingUpdate({
                  accountLid: e,
                  entryPoint: n,
                  isEnabled: !0,
                });
              }),
            ),
            i = a.every(function (e) {
              return e.status === "fulfilled";
            });
          (i || h(), l(!1), o("WAWebModalManager").ModalManager.close());
        },
        d = function () {
          (_({
            action: o("WAWebWamEnumSmbPerCustomerDataSharingControlAction")
              .SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ACTION
              .CONSENT_SCREEN_CANCEL,
            actionOptInStatus: p,
            entryPoint: n,
          }),
            o("WAWebModalManager").closeModalManager());
        };
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        testid: "ctwa-business-per-customer-data-sharing-opt-in-modal",
        buttonsDirection: "horizontal",
        type: o("WAWebModal.react").ModalTheme.DataSharing,
        onOK: c,
        okDisabled: i,
        cancelDisabled: i,
        okText: s._(/*BTDS*/ ""),
        onCancel: d,
        onOverlayClick: d,
        cancelText: s._(/*BTDS*/ ""),
        children: i ? u.jsx(C, {}) : u.jsx(y, {}),
      });
    }
    ((b.displayName = b.name + " [from " + i.id + "]"), (l.default = b));
  },
  226,
);
