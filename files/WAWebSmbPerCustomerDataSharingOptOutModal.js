__d(
  "WAWebSmbPerCustomerDataSharingOptOutModal",
  [
    "fbt",
    "WAWebCTWAGatingUtils",
    "WAWebConfirmPopup.react",
    "WAWebCtwaPerCustomerDataSharingSync",
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
      p = !0;
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
    var g = function () {
        var e = s._(/*BTDS*/ "");
        o("WDSToastImperativeHost").showWDSToast({
          action: { label: e, onPress: r("WAWebNoop") },
          message: s._(/*BTDS*/ ""),
        });
      },
      h = {
        illustration: { width: "xh8yej3", $$css: !0 },
        spinnerWrapper: { height: "x1lgcfn3", $$css: !0 },
        marginBottom12: { marginBottom: "xcytdqz", $$css: !0 },
        paddingTop24: { paddingTop: "xl7twdi", $$css: !0 },
        paddingBottom24: { paddingBottom: "xvg22vi", $$css: !0 },
      };
    function y() {
      var e;
      return u.jsxs((e = o("WAWebFlex.react")).FlexColumn, {
        children: [
          u.jsx(e.FlexRow, {
            xstyle: [h.paddingTop24, h.paddingBottom24, h.illustration],
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
              testid: "ctwa-per-customer-sharing-opt-out-title",
              textAlign: "center",
              xstyle: h.marginBottom12,
              children: s._(/*BTDS*/ ""),
            }),
          }),
          u.jsx(e.FlexColumn, {
            xstyle: h.marginBottom12,
            children: u.jsxs(r("WDSText.react"), {
              type: "Body1",
              colorName: "contentDeemphasized",
              testid: "ctwa-per-customer-sharing-opt-out-description",
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
        ],
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    var C = function () {
      return u.jsx(o("WAWebFlex.react").FlexColumn, {
        align: "center",
        justify: "center",
        xstyle: h.spinnerWrapper,
        children: u.jsx(o("WAWebSpinner.react").Spinner, {
          color: "default",
          size: 48,
          stroke: 6,
        }),
      });
    };
    function b(e) {
      var t = e.accountLid,
        n = e.entryPoint,
        a = m(!1),
        i = a[0],
        l = a[1];
      f(n);
      var c = async function () {
          l(!0);
          try {
            var e = o("WAWebWidFactory").createUserLidOrThrow(t);
            await r(
              "WAWebCtwaPerCustomerDataSharingSync",
            ).sendPerCustomerDataSharingUpdate({
              accountLid: e,
              entryPoint: n,
              isEnabled: !1,
            });
          } catch (e) {
            g();
          } finally {
            (l(!1), o("WAWebModalManager").ModalManager.close());
          }
        },
        d = function () {
          (_({
            action: o("WAWebWamEnumSmbPerCustomerDataSharingControlAction")
              .SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ACTION
              .CONSENT_SCREEN_CANCEL,
            actionOptInStatus: p,
            entryPoint: n,
          }),
            o("WAWebModalManager").ModalManager.close());
        };
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        testid: "ctwa-business-per-customer-data-sharing-opt-out-modal",
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
