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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(42),
        n = e.perCustomerDataSharingControlsEnabled,
        a = o("WAWebThemeContext").useIsDarkTheme();
      a
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
      var i, l;
      (t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = d.jsx(
            o("WAWebWdsSmbPictoArrowsTransferIcon.react")
              .WdsSmbPictoArrowsTransferIcon,
            {},
          )),
          (t[0] = l))
        : (l = t[0]),
        (i = l));
      var u;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = d.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: [f.paddingTop24, f.paddingBottom24, f.illustration],
            justify: "center",
            children: i,
          })),
          (t[1] = u))
        : (u = t[1]);
      var c = n && f.centered_text,
        m;
      t[2] !== c
        ? ((m = [f.marginBottom12, f.title, c]), (t[2] = c), (t[3] = m))
        : (m = t[3]);
      var p;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = s._(
            /*BTDS*/ "Share customer-related activities to help improve your ads",
          )),
          (t[4] = p))
        : (p = t[4]);
      var _;
      t[5] !== m
        ? ((_ = d.jsx(o("WAWebFlex.react").FlexRow, {
            children: d.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
              size: "20",
              color: "dark",
              weight: "medium",
              xstyle: m,
              children: p,
            }),
          })),
          (t[5] = m),
          (t[6] = _))
        : (_ = t[6]);
      var g = n ? "secondary" : "dark",
        h = n && f.centered_text,
        y;
      t[7] !== h
        ? ((y = [f.paragraph, h]), (t[7] = h), (t[8] = y))
        : (y = t[8]);
      var C;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = s._(
            /*BTDS*/ "To help your ads reach the right audience on Facebook and Instagram and improve Meta ads, you can share information to Meta about customer-related activities, such as when an order is created, updated or paid for.",
          )),
          (t[9] = C))
        : (C = t[9]);
      var b;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = d.jsx(o("WAWebExternalLink.react").ExternalLink, {
            href: o("WAWebTosUrl").getBizDataSharingHcaUrl(),
            children: s._(/*BTDS*/ "Learn more"),
          })),
          (t[10] = b))
        : (b = t[10]);
      var v;
      t[11] !== g || t[12] !== y
        ? ((v = d.jsx(o("WAWebFlex.react").FlexColumn, {
            xstyle: f.marginBottom12,
            children: d.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
              size: "16",
              color: g,
              weight: "normal",
              xstyle: y,
              children: [C, " ", b],
            }),
          })),
          (t[11] = g),
          (t[12] = y),
          (t[13] = v))
        : (v = t[13]);
      var S = n ? f.iconColorNew : f.iconColor,
        R;
      t[14] !== S
        ? ((R = d.jsx(r("WDSIconIcVisibilityOff.react"), {
            height: 22,
            width: 22,
            xstyle: S,
          })),
          (t[14] = S),
          (t[15] = R))
        : (R = t[15]);
      var L;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = [f.marginStart24, f.paragraph, f.iconDescription]), (t[16] = L))
        : (L = t[16]);
      var E;
      t[17] !== n
        ? ((E = d.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
            size: "16",
            color: "dark",
            xstyle: L,
            children: s._(
              /*BTDS*/ "Message and call content is not shared {period}",
              [s._param("period", n && ".")],
            ),
          })),
          (t[17] = n),
          (t[18] = E))
        : (E = t[18]);
      var k;
      t[19] !== R || t[20] !== E
        ? ((k = d.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: f.marginBottom12,
            children: [R, E],
          })),
          (t[19] = R),
          (t[20] = E),
          (t[21] = k))
        : (k = t[21]);
      var I = n ? f.iconColorNew : f.iconColor,
        T;
      t[22] !== I
        ? ((T = d.jsx(r("WDSIconIcSettings.react"), { xstyle: I })),
          (t[22] = I),
          (t[23] = T))
        : (T = t[23]);
      var D;
      t[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = [f.marginStart24, f.paragraph, f.iconDescription]), (t[24] = D))
        : (D = t[24]);
      var x;
      t[25] !== n
        ? ((x = d.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
            size: "16",
            color: "dark",
            xstyle: D,
            children: s._(
              /*BTDS*/ "You can always change this in the {settingsType}",
              [
                s._param(
                  "settingsType",
                  n ? "Data Sharing Settings." : "Ads Data Sharing Settings",
                ),
              ],
            ),
          })),
          (t[25] = n),
          (t[26] = x))
        : (x = t[26]);
      var $;
      t[27] !== T || t[28] !== x
        ? (($ = d.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: f.marginBottom12,
            children: [T, x],
          })),
          (t[27] = T),
          (t[28] = x),
          (t[29] = $))
        : ($ = t[29]);
      var P;
      t[30] !== n
        ? ((P =
            n &&
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
            })),
          (t[30] = n),
          (t[31] = P))
        : (P = t[31]);
      var N = n && f.centered_text,
        M;
      t[32] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = s._(
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
          )),
          (t[32] = M))
        : (M = t[32]);
      var w;
      t[33] !== N
        ? ((w = d.jsx(o("WAWebFlex.react").FlexRow, {
            children: d.jsx(o("WAWebText.react").WAWebTextMuted, {
              xstyle: N,
              children: M,
            }),
          })),
          (t[33] = N),
          (t[34] = w))
        : (w = t[34]);
      var A;
      return (
        t[35] !== v ||
        t[36] !== k ||
        t[37] !== $ ||
        t[38] !== P ||
        t[39] !== w ||
        t[40] !== _
          ? ((A = d.jsxs(o("WAWebFlex.react").FlexColumn, {
              children: [u, _, v, k, $, P, w],
            })),
            (t[35] = v),
            (t[36] = k),
            (t[37] = $),
            (t[38] = P),
            (t[39] = w),
            (t[40] = _),
            (t[41] = A))
          : (A = t[41]),
        A
      );
    }
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
      var t = o("react-compiler-runtime").c(27),
        n = e.callback,
        a = e.chat,
        i = e.entrypoint,
        l = _(!1),
        u = l[0],
        c = l[1],
        m;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = o(
            "WAWebBizGatingUtils",
          ).isPerCustomerDataSharingControlsEnabled()),
          (t[0] = m))
        : (m = t[0]);
      var f = m,
        h,
        C;
      (t[1] !== i
        ? ((h = function () {
            var e = o(
              "WAWebUserPrefsGeneral",
            ).getCTWADataSharingDisclosureShownCount();
            if (
              (o(
                "WAWebUserPrefsGeneral",
              ).setCTWADataSharingDisclosureShownCount(e + 1),
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
            L(i);
          }),
          (C = [i]),
          (t[1] = i),
          (t[2] = h),
          (t[3] = C))
        : ((h = t[2]), (C = t[3])),
        p(h, C));
      var b;
      t[4] !== n || t[5] !== a || t[6] !== i
        ? ((b = function (t) {
            return function () {
              var e =
                o(
                  "WAWebCTWADataSharingModel",
                ).CTWADataSharingModel.getValue() ===
                o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false;
              (c(!0),
                y(t, i)
                  .then(function () {
                    if (
                      t ===
                        o("WASmaxInBizSettingsEnums").ENUM_FALSE_TRUE.true &&
                      a != null
                    ) {
                      var i = a.accountLid;
                      i != null &&
                        r(
                          "WAWebCtwaPerCustomerDataSharingSync",
                        ).sendPerCustomerDataSharingUpdate(i, !0);
                    } else
                      t ===
                        o("WASmaxInBizSettingsEnums").ENUM_FALSE_TRUE.false &&
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
                    (o("WAWebModalManager").ModalManager.close(), n());
                  })
                  .catch(g));
            };
          }),
          (t[4] = n),
          (t[5] = a),
          (t[6] = i),
          (t[7] = b))
        : (b = t[7]);
      var v = b,
        k;
      t[8] !== v
        ? ((k = v(o("WASmaxInBizSettingsEnums").ENUM_FALSE_TRUE.true)),
          (t[8] = v),
          (t[9] = k))
        : (k = t[9]);
      var I = k,
        T;
      t[10] !== v
        ? ((T = v(o("WASmaxInBizSettingsEnums").ENUM_FALSE_TRUE.false)),
          (t[10] = v),
          (t[11] = T))
        : (T = t[11]);
      var D = T,
        x;
      t[12] !== n || t[13] !== i
        ? ((x = E(n, i)), (t[12] = n), (t[13] = i), (t[14] = x))
        : (x = t[14]);
      var $ = x,
        P;
      t[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = s._(/*BTDS*/ "Enable")), (t[15] = P))
        : (P = t[15]);
      var N = P,
        M;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = s._(/*BTDS*/ "Allow")), (t[16] = M))
        : (M = t[16]);
      var w = M,
        A;
      t[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = s._(/*BTDS*/ "Don't enable")), (t[17] = A))
        : (A = t[17]);
      var F = A,
        O;
      t[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = s._(/*BTDS*/ "Don't allow")), (t[18] = O))
        : (O = t[18]);
      var B = O,
        W;
      t[19] !== u
        ? ((W = u
            ? d.jsx(R, {})
            : d.jsx(S, { perCustomerDataSharingControlsEnabled: f })),
          (t[19] = u),
          (t[20] = W))
        : (W = t[20]);
      var q;
      return (
        t[21] !== D || t[22] !== $ || t[23] !== I || t[24] !== u || t[25] !== W
          ? ((q = d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              testid: "ctwa-business-data-sharing-modal-dialog",
              buttonsDirection: "horizontal",
              type: o("WAWebModal.react").ModalTheme.DataSharing,
              onOK: I,
              okDisabled: u,
              cancelDisabled: u,
              okText: f ? N : w,
              onCancel: D,
              onOverlayClick: $,
              cancelText: f ? F : B,
              children: W,
            })),
            (t[21] = D),
            (t[22] = $),
            (t[23] = I),
            (t[24] = u),
            (t[25] = W),
            (t[26] = q))
          : (q = t[26]),
        q
      );
    }
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
