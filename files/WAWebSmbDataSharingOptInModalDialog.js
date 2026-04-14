__d(
  "WAWebSmbDataSharingOptInModalDialog",
  [
    "fbt",
    "WALogger",
    "WASmaxInBizSettingsEnums",
    "WAWebBizGatingUtils",
    "WAWebBusinessDataSharingIllustrationDarkIcon.react",
    "WAWebBusinessDataSharingIllustrationLightIcon.react",
    "WAWebCTWADataSharingModel",
    "WAWebCommonCTWADataSharing",
    "WAWebConfirmPopup.react",
    "WAWebCtwaPerCustomerDataSharingSync",
    "WAWebDataSharingOptInCoolOffModel",
    "WAWebExternalLink.react",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebSMBDataSharingSettingAction",
    "WAWebSmbDataSharingConsentScreenWamEvent",
    "WAWebSpinner.react",
    "WAWebText.react",
    "WAWebText_DONOTUSE.react",
    "WAWebThemeContext",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebTosUrl",
    "WAWebUserPrefsGeneral",
    "WAWebWamEnumSmbDataSharingConsentScreenType",
    "WAWebWdsSmbPictoArrowsTransferIcon.react",
    "WDSIconIcAccountCircle.react",
    "WDSIconIcSettings.react",
    "WDSIconIcVisibilityOff.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useState,
      f = {
        illustration: { width: "xh8yej3", $$css: !0 },
        title: { lineHeight: "x1u7k74", $$css: !0 },
        centered_text: { textAlign: "x2b8uid", $$css: !0 },
        paragraph: { lineHeight: "x1pujyh6", $$css: !0 },
        iconDescription: { maxWidth: "x1i5r0r9", $$css: !0 },
        iconColor: { color: "xhslqc4", $$css: !0 },
        iconColorNew: { color: "xhslqc4", $$css: !0 },
        spinnerWrapper: { height: "x1lgcfn3", $$css: !0 },
        marginBottom12: { marginBottom: "xcytdqz", $$css: !0 },
        marginStart24: { marginInlineStart: "xyxtwap", $$css: !0 },
        paddingTop24: { paddingTop: "xl7twdi", $$css: !0 },
        paddingBottom24: { paddingBottom: "xvg22vi", $$css: !0 },
      },
      g = function () {
        var e = s._(/*BTDS*/ "OK");
        o("WAWebToastManager").ToastManager.open(
          d.jsx(o("WAWebToast.react").Toast, {
            action: { dismiss: !0, actionText: e },
            msg: s._(/*BTDS*/ "Error updating Data Sharing setting."),
            id: o("WAWebToast.react").genId(),
          }),
        );
      },
      h = function (n, r) {
        var t = new (o(
          "WAWebSmbDataSharingConsentScreenWamEvent",
        ).SmbDataSharingConsentScreenWamEvent)();
        ((t.smbDataSharingConsentScreenVersion = 0),
          (t.smbDataSharingConsentScreenType = n),
          (t.smbDataSharingConsentScreenEntryPoint = r),
          t.commitAndWaitForFlush().catch(function (t) {
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "logDataSharingOptInInteraction: metric failed",
                ])),
            );
          }));
      },
      y = function (t, n) {
        var e =
          t === o("WASmaxInBizSettingsEnums").ENUM_FALSE_TRUE.true
            ? o("WAWebWamEnumSmbDataSharingConsentScreenType")
                .SMB_DATA_SHARING_CONSENT_SCREEN_TYPE
                .SMB_DATA_SHARING_CONSENT_SCREEN_AGREE
            : o("WAWebWamEnumSmbDataSharingConsentScreenType")
                .SMB_DATA_SHARING_CONSENT_SCREEN_TYPE
                .SMB_DATA_SHARING_CONSENT_SCREEN_DISAGREE;
        return o("WAWebSMBDataSharingSettingAction")
          .setSMBDataSharingSettingAction(t)
          .then(function () {
            return h(e, n);
          })
          .catch(g);
      };
    function C(e, t, n) {
      if (!r("WAWebCommonCTWADataSharing").shouldShowOrderDataSharingDialog(e))
        return t();
      o("WAWebModalManager").ModalManager.open(
        d.jsx(k, { entrypoint: n, callback: t, chat: e }),
      );
    }
    function b(e, t, n, a) {
      var i = e.some(function (e) {
        return r("WAWebCommonCTWADataSharing").shouldShowLabelDataSharingDialog(
          e,
          t,
        );
      });
      if (!i) return n();
      e.length === 1
        ? o("WAWebModalManager").ModalManager.open(
            d.jsx(k, { entrypoint: a, callback: n, chat: e[0] }),
          )
        : o("WAWebModalManager").ModalManager.open(
            d.jsx(k, { entrypoint: a, callback: n }),
          );
    }
    function v(e, t, n) {
      if (
        !r("WAWebCommonCTWADataSharing").shouldShowChatEntryDataSharingDialog(e)
      )
        return t();
      o("WAWebModalManager").ModalManager.open(
        d.jsx(k, { entrypoint: n, callback: t, chat: e }),
      );
    }
    function S(e) {
      var t = e.perCustomerDataSharingControlsEnabled,
        n = o("WAWebThemeContext").useIsDarkTheme(),
        a = n
          ? d.jsx(
              o("WAWebBusinessDataSharingIllustrationDarkIcon.react")
                .BusinessDataSharingIllustrationDarkIcon,
              {},
            )
          : d.jsx(
              o("WAWebBusinessDataSharingIllustrationLightIcon.react")
                .BusinessDataSharingIllustrationLightIcon,
              {},
            );
      return (
        (a = d.jsx(
          o("WAWebWdsSmbPictoArrowsTransferIcon.react")
            .WdsSmbPictoArrowsTransferIcon,
          {},
        )),
        d.jsxs(o("WAWebFlex.react").FlexColumn, {
          children: [
            d.jsx(o("WAWebFlex.react").FlexRow, {
              xstyle: [f.paddingTop24, f.paddingBottom24, f.illustration],
              justify: "center",
              children: a,
            }),
            d.jsx(o("WAWebFlex.react").FlexRow, {
              children: d.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
                size: "20",
                color: "dark",
                weight: "medium",
                xstyle: [f.marginBottom12, f.title, t && f.centered_text],
                children: s._(
                  /*BTDS*/ "Share customer-related activities to help improve your ads",
                ),
              }),
            }),
            d.jsx(o("WAWebFlex.react").FlexColumn, {
              xstyle: f.marginBottom12,
              children: d.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
                size: "16",
                color: t ? "secondary" : "dark",
                weight: "normal",
                xstyle: [f.paragraph, t && f.centered_text],
                children: [
                  s._(
                    /*BTDS*/ "To help your ads reach the right audience on Facebook and Instagram and improve Meta ads, you can share information to Meta about customer-related activities, such as when an order is created, updated or paid for.",
                  ),
                  " ",
                  d.jsx(o("WAWebExternalLink.react").ExternalLink, {
                    href: o("WAWebTosUrl").getBizDataSharingHcaUrl(),
                    children: s._(/*BTDS*/ "Learn more"),
                  }),
                ],
              }),
            }),
            d.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              xstyle: f.marginBottom12,
              children: [
                d.jsx(r("WDSIconIcVisibilityOff.react"), {
                  height: 22,
                  width: 22,
                  xstyle: t ? f.iconColorNew : f.iconColor,
                }),
                d.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
                  size: "16",
                  color: "dark",
                  xstyle: [f.marginStart24, f.paragraph, f.iconDescription],
                  children: s._(
                    /*BTDS*/ "Message and call content is not shared {period}",
                    [s._param("period", t && ".")],
                  ),
                }),
              ],
            }),
            d.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              xstyle: f.marginBottom12,
              children: [
                d.jsx(r("WDSIconIcSettings.react"), {
                  xstyle: t ? f.iconColorNew : f.iconColor,
                }),
                d.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
                  size: "16",
                  color: "dark",
                  xstyle: [f.marginStart24, f.paragraph, f.iconDescription],
                  children: s._(
                    /*BTDS*/ "You can always change this in the {settingsType}",
                    [
                      s._param(
                        "settingsType",
                        t
                          ? "Data Sharing Settings."
                          : "Ads Data Sharing Settings",
                      ),
                    ],
                  ),
                }),
              ],
            }),
            t &&
              d.jsxs(o("WAWebFlex.react").FlexRow, {
                align: "center",
                xstyle: f.marginBottom12,
                children: [
                  d.jsx(r("WDSIconIcAccountCircle.react"), {
                    xstyle: f.iconColorNew,
                  }),
                  d.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
                    size: "16",
                    color: "dark",
                    xstyle: [f.marginStart24, f.paragraph, f.iconDescription],
                    children: s._(
                      /*BTDS*/ "You can change this for individual customers in their contact info.",
                    ),
                  }),
                ],
              }),
            d.jsx(o("WAWebFlex.react").FlexRow, {
              children: d.jsx(o("WAWebText.react").WAWebTextMuted, {
                xstyle: t && f.centered_text,
                children: s._(
                  /*BTDS*/ "Per Meta's {=m1}, you must comply with all applicable laws. This includes informing your customers and having permission to share data with Meta.",
                  [
                    s._implicitParam(
                      "=m1",
                      d.jsx(o("WAWebExternalLink.react").ExternalLink, {
                        href: o("WAWebTosUrl").getMetaBizTosUrl(),
                        children: s._(/*BTDS*/ "Business Tools Terms"),
                      }),
                    ),
                  ],
                ),
              }),
            }),
          ],
        })
      );
    }
    S.displayName = S.name + " [from " + i.id + "]";
    var R = function () {
        return d.jsx(o("WAWebFlex.react").FlexColumn, {
          align: "center",
          justify: "center",
          xstyle: f.spinnerWrapper,
          children: d.jsx(o("WAWebSpinner.react").Spinner, {
            color: "default",
            size: 48,
            stroke: 6,
          }),
        });
      },
      L = function (t) {
        var e = new (o(
          "WAWebSmbDataSharingConsentScreenWamEvent",
        ).SmbDataSharingConsentScreenWamEvent)();
        ((e.smbDataSharingConsentScreenVersion = 0),
          (e.smbDataSharingConsentScreenType = o(
            "WAWebWamEnumSmbDataSharingConsentScreenType",
          ).SMB_DATA_SHARING_CONSENT_SCREEN_TYPE.SMB_DATA_SHARING_CONSENT_SCREEN_VIEW),
          (e.smbDataSharingConsentScreenEntryPoint = t),
          e.commitAndWaitForFlush().catch(function (e) {
            o("WALogger").ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "logModalDialogView: metric failed",
                ])),
            );
          }));
      },
      E = function (t, n) {
        return function () {
          (h(
            o("WAWebWamEnumSmbDataSharingConsentScreenType")
              .SMB_DATA_SHARING_CONSENT_SCREEN_TYPE
              .SMB_DATA_SHARING_CONSENT_SCREEN_CANCEL,
            n,
          ),
            o(
              "WAWebDataSharingOptInCoolOffModel",
            ).DataSharingOptInCoolOffModel.startCoolOff(),
            o("WAWebModalManager").ModalManager.close(),
            t());
        };
      };
    function k(e) {
      var t = e.callback,
        n = e.chat,
        a = e.entrypoint,
        i = _(!1),
        l = i[0],
        u = i[1],
        c = o("WAWebBizGatingUtils").isPerCustomerDataSharingControlsEnabled();
      p(
        function () {
          var e = o(
            "WAWebUserPrefsGeneral",
          ).getCTWADataSharingDisclosureShownCount();
          if (
            (o("WAWebUserPrefsGeneral").setCTWADataSharingDisclosureShownCount(
              e + 1,
            ),
            o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue() ===
              o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false &&
              o(
                "WAWebBizGatingUtils",
              ).isCTWA3pdOptOutCounterOptimizationEnabled())
          ) {
            var t = o(
              "WAWebUserPrefsGeneral",
            ).getCTWADataSharingOptOutDisclosureShownCount();
            o(
              "WAWebUserPrefsGeneral",
            ).setCTWADataSharingOptOutDisclosureShownCount(t + 1);
          }
          L(a);
        },
        [a],
      );
      var m = function (i) {
          return function () {
            var e =
              o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue() ===
              o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false;
            (u(!0),
              y(i, a)
                .then(function () {
                  if (
                    i === o("WASmaxInBizSettingsEnums").ENUM_FALSE_TRUE.true &&
                    n != null
                  ) {
                    var a = n.accountLid;
                    a != null &&
                      r(
                        "WAWebCtwaPerCustomerDataSharingSync",
                      ).sendPerCustomerDataSharingUpdate(a, !0);
                  } else
                    i === o("WASmaxInBizSettingsEnums").ENUM_FALSE_TRUE.false &&
                      (!e &&
                        o(
                          "WAWebBizGatingUtils",
                        ).isCTWA3pdOptOutCounterOptimizationEnabled() &&
                        o(
                          "WAWebUserPrefsGeneral",
                        ).setCTWADataSharingOptOutDisclosureShownCount(0),
                      o(
                        "WAWebDataSharingOptInCoolOffModel",
                      ).DataSharingOptInCoolOffModel.startCoolOff());
                  (o("WAWebModalManager").ModalManager.close(), t());
                })
                .catch(g));
          };
        },
        f = m(o("WASmaxInBizSettingsEnums").ENUM_FALSE_TRUE.true),
        h = m(o("WASmaxInBizSettingsEnums").ENUM_FALSE_TRUE.false),
        C = E(t, a),
        b = s._(/*BTDS*/ "Enable"),
        v = s._(/*BTDS*/ "Allow"),
        k = s._(/*BTDS*/ "Don't enable"),
        I = s._(/*BTDS*/ "Don't allow");
      return d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        testid: void 0,
        buttonsDirection: "horizontal",
        type: o("WAWebModal.react").ModalTheme.DataSharing,
        onOK: f,
        okDisabled: l,
        cancelDisabled: l,
        okText: c ? b : v,
        onCancel: h,
        onOverlayClick: C,
        cancelText: c ? k : I,
        children: l
          ? d.jsx(R, {})
          : d.jsx(S, { perCustomerDataSharingControlsEnabled: c }),
      });
    }
    k.displayName = k.name + " [from " + i.id + "]";
    var I = {
      maybeShowOrderDataSharingDialog: C,
      maybeShowLabelDataSharingDialog: b,
      maybeShowChatEntryDataSharingDialog: v,
      SmbDataSharingOptInModalDialog: k,
    };
    l.default = I;
  },
  226,
);
