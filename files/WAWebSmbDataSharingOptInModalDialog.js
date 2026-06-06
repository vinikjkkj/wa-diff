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
    "WAWebFbtCommon",
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
    "WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint",
    "WAWebWdsSmbPictoArrowsTransferIcon.react",
    "WDSIconIcAccountCircle.react",
    "WDSIconIcSettings.react",
    "WDSIconIcVisibilityOff.react",
    "compactMap",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = d,
      _ = p.useEffect,
      f = p.useRef,
      g = p.useState,
      h = {
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
      y = 3;
    function C() {
      return {
        viewStartTime: Date.now(),
        previousImpressionCount: o(
          "WAWebUserPrefsGeneral",
        ).getCTWADataSharingDisclosureShownCount(),
        previousOptOutImpressionCount:
          o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue() ===
          o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false
            ? o(
                "WAWebUserPrefsGeneral",
              ).getCTWADataSharingOptOutDisclosureShownCount()
            : null,
      };
    }
    function b(e, t, n) {
      ((e.smbDataSharingConsentScreenVersion = y),
        (e.elapsedTimeMs =
          n ===
          o("WAWebWamEnumSmbDataSharingConsentScreenType")
            .SMB_DATA_SHARING_CONSENT_SCREEN_TYPE
            .SMB_DATA_SHARING_CONSENT_SCREEN_VIEW
            ? 0
            : Math.max(0, Date.now() - t.viewStartTime)),
        (e.previousImpressionCount = t.previousImpressionCount),
        t.previousOptOutImpressionCount != null &&
          (e.previousOptOutImpressionCount = t.previousOptOutImpressionCount));
    }
    var v = function () {
        var e = s._(/*BTDS*/ "OK");
        o("WAWebToastManager").ToastManager.open(
          m.jsx(o("WAWebToast.react").Toast, {
            action: { dismiss: !0, actionText: e },
            msg: s._(/*BTDS*/ "Error updating Data Sharing setting."),
            id: o("WAWebToast.react").genId(),
          }),
        );
      },
      S = function () {
        var e = r("WAWebFbtCommon")("OK");
        o("WAWebToastManager").ToastManager.open(
          m.jsx(o("WAWebToast.react").Toast, {
            action: { dismiss: !0, actionText: e },
            msg: s._(/*BTDS*/ "Some per-customer Data Sharing updates failed."),
            id: o("WAWebToast.react").genId(),
          }),
        );
      },
      R = function (n, r, a) {
        var t = new (o(
          "WAWebSmbDataSharingConsentScreenWamEvent",
        ).SmbDataSharingConsentScreenWamEvent)();
        ((t.smbDataSharingConsentScreenVersion = 0),
          (t.smbDataSharingConsentScreenType = n),
          (t.smbDataSharingConsentScreenEntryPoint = r),
          a != null && b(t, a, n),
          t.commitAndWaitForFlush().catch(function (t) {
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "logDataSharingOptInInteraction: metric failed",
                ])),
            );
          }));
      },
      L = function (t, n, r) {
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
            return R(e, n, r);
          })
          .catch(v);
      };
    function E(e, t, n) {
      if (!r("WAWebCommonCTWADataSharing").shouldShowOrderDataSharingDialog(e))
        return t();
      o("WAWebModalManager").ModalManager.open(
        m.jsx(P, {
          entrypoint: n,
          callback: t,
          chats: [e],
          perCustomerEntryPoint: o(
            "WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint",
          ).SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ENTRY_POINT.SYNCD_MUTATION,
        }),
      );
    }
    function k(e, t, n, a) {
      var i = e.some(function (e) {
        return r("WAWebCommonCTWADataSharing").shouldShowLabelDataSharingDialog(
          e,
          t,
        );
      });
      if (!i) return n();
      o("WAWebModalManager").ModalManager.open(
        m.jsx(P, {
          entrypoint: a,
          callback: n,
          chats: e,
          perCustomerEntryPoint: o(
            "WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint",
          ).SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ENTRY_POINT.SYNCD_MUTATION,
        }),
      );
    }
    function I(e, t, n) {
      if (
        !r("WAWebCommonCTWADataSharing").shouldShowChatEntryDataSharingDialog(e)
      )
        return t();
      o("WAWebModalManager").ModalManager.open(
        m.jsx(P, {
          entrypoint: n,
          callback: t,
          chats: [e],
          perCustomerEntryPoint: o(
            "WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint",
          ).SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ENTRY_POINT.THREAD_ENTRY,
        }),
      );
    }
    function T(e) {
      var t = o("react-compiler-runtime").c(42),
        n = e.perCustomerDataSharingControlsEnabled,
        a = o("WAWebThemeContext").useIsDarkTheme();
      a
        ? m.jsx(
            o("WAWebBusinessDataSharingIllustrationDarkIcon.react")
              .BusinessDataSharingIllustrationDarkIcon,
            {},
          )
        : m.jsx(
            o("WAWebBusinessDataSharingIllustrationLightIcon.react")
              .BusinessDataSharingIllustrationLightIcon,
            {},
          );
      var i, l;
      (t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = m.jsx(
            o("WAWebWdsSmbPictoArrowsTransferIcon.react")
              .WdsSmbPictoArrowsTransferIcon,
            {},
          )),
          (t[0] = l))
        : (l = t[0]),
        (i = l));
      var u;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = m.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: [h.paddingTop24, h.paddingBottom24, h.illustration],
            justify: "center",
            children: i,
          })),
          (t[1] = u))
        : (u = t[1]);
      var c = n && h.centered_text,
        d;
      t[2] !== c
        ? ((d = [h.marginBottom12, h.title, c]), (t[2] = c), (t[3] = d))
        : (d = t[3]);
      var p;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = o(
            "WAWebBizGatingUtils",
          ).isCTWA3pdDataSharingTitleChangeEnabled()
            ? s._(
                /*BTDS*/ "Improve your ads by sharing customer-related activities",
              )
            : s._(
                /*BTDS*/ "Share customer-related activities to help improve your ads",
              )),
          (t[4] = p))
        : (p = t[4]);
      var _;
      t[5] !== d
        ? ((_ = m.jsx(o("WAWebFlex.react").FlexRow, {
            children: m.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
              size: "20",
              color: "dark",
              weight: "medium",
              xstyle: d,
              children: p,
            }),
          })),
          (t[5] = d),
          (t[6] = _))
        : (_ = t[6]);
      var f = n ? "secondary" : "dark",
        g = n && h.centered_text,
        y;
      t[7] !== g
        ? ((y = [h.paragraph, g]), (t[7] = g), (t[8] = y))
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
        ? ((b = m.jsx(o("WAWebExternalLink.react").ExternalLink, {
            href: o("WAWebTosUrl").getBizDataSharingHcaUrl(),
            children: s._(/*BTDS*/ "Learn more"),
          })),
          (t[10] = b))
        : (b = t[10]);
      var v;
      t[11] !== f || t[12] !== y
        ? ((v = m.jsx(o("WAWebFlex.react").FlexColumn, {
            xstyle: h.marginBottom12,
            children: m.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
              size: "16",
              color: f,
              weight: "normal",
              xstyle: y,
              children: [C, " ", b],
            }),
          })),
          (t[11] = f),
          (t[12] = y),
          (t[13] = v))
        : (v = t[13]);
      var S = n ? h.iconColorNew : h.iconColor,
        R;
      t[14] !== S
        ? ((R = m.jsx(r("WDSIconIcVisibilityOff.react"), {
            height: 22,
            width: 22,
            xstyle: S,
          })),
          (t[14] = S),
          (t[15] = R))
        : (R = t[15]);
      var L;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = [h.marginStart24, h.paragraph, h.iconDescription]), (t[16] = L))
        : (L = t[16]);
      var E;
      t[17] !== n
        ? ((E = m.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
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
        ? ((k = m.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: h.marginBottom12,
            children: [R, E],
          })),
          (t[19] = R),
          (t[20] = E),
          (t[21] = k))
        : (k = t[21]);
      var I = n ? h.iconColorNew : h.iconColor,
        T;
      t[22] !== I
        ? ((T = m.jsx(r("WDSIconIcSettings.react"), { xstyle: I })),
          (t[22] = I),
          (t[23] = T))
        : (T = t[23]);
      var D;
      t[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = [h.marginStart24, h.paragraph, h.iconDescription]), (t[24] = D))
        : (D = t[24]);
      var x;
      t[25] !== n
        ? ((x = m.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
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
        ? (($ = m.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: h.marginBottom12,
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
            m.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              xstyle: h.marginBottom12,
              children: [
                m.jsx(r("WDSIconIcAccountCircle.react"), {
                  xstyle: h.iconColorNew,
                }),
                m.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
                  size: "16",
                  color: "dark",
                  xstyle: [h.marginStart24, h.paragraph, h.iconDescription],
                  children: s._(
                    /*BTDS*/ "You can change this for individual customers in their contact info.",
                  ),
                }),
              ],
            })),
          (t[30] = n),
          (t[31] = P))
        : (P = t[31]);
      var N = n && h.centered_text,
        M;
      t[32] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = s._(
            /*BTDS*/ "Per Meta's {=m1}, you must comply with all applicable laws. This includes informing your customers and having permission to share data with Meta.",
            [
              s._implicitParam(
                "=m1",
                m.jsx(o("WAWebExternalLink.react").ExternalLink, {
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
        ? ((w = m.jsx(o("WAWebFlex.react").FlexRow, {
            children: m.jsx(o("WAWebText.react").WAWebTextMuted, {
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
          ? ((A = m.jsxs(o("WAWebFlex.react").FlexColumn, {
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
    var D = function () {
        return m.jsx(o("WAWebFlex.react").FlexColumn, {
          align: "center",
          justify: "center",
          xstyle: h.spinnerWrapper,
          children: m.jsx(o("WAWebSpinner.react").Spinner, {
            color: "default",
            size: 48,
            stroke: 6,
          }),
        });
      },
      x = function (t, n) {
        var e = new (o(
          "WAWebSmbDataSharingConsentScreenWamEvent",
        ).SmbDataSharingConsentScreenWamEvent)();
        ((e.smbDataSharingConsentScreenVersion = 0),
          (e.smbDataSharingConsentScreenType = o(
            "WAWebWamEnumSmbDataSharingConsentScreenType",
          ).SMB_DATA_SHARING_CONSENT_SCREEN_TYPE.SMB_DATA_SHARING_CONSENT_SCREEN_VIEW),
          (e.smbDataSharingConsentScreenEntryPoint = t),
          n != null &&
            b(
              e,
              n,
              o("WAWebWamEnumSmbDataSharingConsentScreenType")
                .SMB_DATA_SHARING_CONSENT_SCREEN_TYPE
                .SMB_DATA_SHARING_CONSENT_SCREEN_VIEW,
            ),
          e.commitAndWaitForFlush().catch(function (e) {
            o("WALogger").ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "logModalDialogView: metric failed",
                ])),
            );
          }));
      };
    function $(e, t, n) {
      (R(
        o("WAWebWamEnumSmbDataSharingConsentScreenType")
          .SMB_DATA_SHARING_CONSENT_SCREEN_TYPE
          .SMB_DATA_SHARING_CONSENT_SCREEN_CANCEL,
        t,
        n,
      ),
        o(
          "WAWebDataSharingOptInCoolOffModel",
        ).DataSharingOptInCoolOffModel.startCoolOff(),
        o("WAWebModalManager").ModalManager.close(),
        e());
    }
    function P(e) {
      var t = o("react-compiler-runtime").c(28),
        n = e.callback,
        a = e.chats,
        i = e.entrypoint,
        l = e.perCustomerEntryPoint,
        u = g(!1),
        d = u[0],
        p = u[1],
        h;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = o(
            "WAWebBizGatingUtils",
          ).isPerCustomerDataSharingControlsEnabled()),
          (t[0] = h))
        : (h = t[0]);
      var y = h,
        b = f(null),
        R,
        E;
      (t[1] !== i
        ? ((R = function () {
            var e = o(
              "WAWebBizGatingUtils",
            ).isCTWA3pdDataSharingAdditionalLoggingEnabled()
              ? C()
              : null;
            b.current = e;
            var t = o(
              "WAWebUserPrefsGeneral",
            ).getCTWADataSharingDisclosureShownCount();
            if (
              (o(
                "WAWebUserPrefsGeneral",
              ).setCTWADataSharingDisclosureShownCount(t + 1),
              o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue() ===
                o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false &&
                o(
                  "WAWebBizGatingUtils",
                ).isCTWA3pdOptOutCounterOptimizationEnabled())
            ) {
              var n = o(
                "WAWebUserPrefsGeneral",
              ).getCTWADataSharingOptOutDisclosureShownCount();
              o(
                "WAWebUserPrefsGeneral",
              ).setCTWADataSharingOptOutDisclosureShownCount(n + 1);
            }
            x(i, e);
          }),
          (E = [i]),
          (t[1] = i),
          (t[2] = R),
          (t[3] = E))
        : ((R = t[2]), (E = t[3])),
        _(R, E));
      var k;
      t[4] !== n || t[5] !== a || t[6] !== i || t[7] !== l
        ? ((k = function (t) {
            var e =
              o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue() ===
              o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false;
            (p(!0),
              L(t, i, b.current)
                .then(async function () {
                  if (
                    t === o("WASmaxInBizSettingsEnums").ENUM_FALSE_TRUE.true &&
                    a != null &&
                    a.length > 0
                  ) {
                    var i = r("compactMap")(a, M),
                      s = i.map(function (e) {
                        return r(
                          "WAWebCtwaPerCustomerDataSharingSync",
                        ).sendPerCustomerDataSharingUpdate(e, !0, l);
                      }),
                      u = await Promise.allSettled(s),
                      d = u.some(N);
                    d &&
                      (o("WALogger")
                        .ERROR(
                          c ||
                            (c = babelHelpers.taggedTemplateLiteralLoose([
                              "Per-customer data sharing opt-in failed",
                            ])),
                        )
                        .sendLogs("ctwa-per-customer-opt-in-fail"),
                      S());
                  } else
                    t === o("WASmaxInBizSettingsEnums").ENUM_FALSE_TRUE.false &&
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
                .catch(v));
          }),
          (t[4] = n),
          (t[5] = a),
          (t[6] = i),
          (t[7] = l),
          (t[8] = k))
        : (k = t[8]);
      var I = k,
        P;
      t[9] !== I
        ? ((P = function () {
            return I(o("WASmaxInBizSettingsEnums").ENUM_FALSE_TRUE.true);
          }),
          (t[9] = I),
          (t[10] = P))
        : (P = t[10]);
      var w = P,
        A;
      t[11] !== I
        ? ((A = function () {
            return I(o("WASmaxInBizSettingsEnums").ENUM_FALSE_TRUE.false);
          }),
          (t[11] = I),
          (t[12] = A))
        : (A = t[12]);
      var F = A,
        O;
      t[13] !== n || t[14] !== i
        ? ((O = function () {
            $(n, i, b.current);
          }),
          (t[13] = n),
          (t[14] = i),
          (t[15] = O))
        : (O = t[15]);
      var B = O,
        W;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = s._(/*BTDS*/ "Enable")), (t[16] = W))
        : (W = t[16]);
      var q = W,
        U;
      t[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = s._(/*BTDS*/ "Allow")), (t[17] = U))
        : (U = t[17]);
      var V = U,
        H;
      t[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = s._(/*BTDS*/ "Don't enable")), (t[18] = H))
        : (H = t[18]);
      var G = H,
        z;
      t[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((z = s._(/*BTDS*/ "Don't allow")), (t[19] = z))
        : (z = t[19]);
      var j = z,
        K;
      t[20] !== d
        ? ((K = d
            ? m.jsx(D, {})
            : m.jsx(T, { perCustomerDataSharingControlsEnabled: y })),
          (t[20] = d),
          (t[21] = K))
        : (K = t[21]);
      var Q;
      return (
        t[22] !== F || t[23] !== B || t[24] !== w || t[25] !== d || t[26] !== K
          ? ((Q = m.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              testid: "ctwa-business-data-sharing-modal-dialog",
              buttonsDirection: "horizontal",
              type: o("WAWebModal.react").ModalTheme.DataSharing,
              onOK: w,
              okDisabled: d,
              cancelDisabled: d,
              okText: y ? q : V,
              onCancel: F,
              onOverlayClick: B,
              cancelText: y ? G : j,
              children: K,
            })),
            (t[22] = F),
            (t[23] = B),
            (t[24] = w),
            (t[25] = d),
            (t[26] = K),
            (t[27] = Q))
          : (Q = t[27]),
        Q
      );
    }
    function N(e) {
      return e.status === "rejected";
    }
    function M(e) {
      return e.accountLid;
    }
    var w = {
      maybeShowOrderDataSharingDialog: E,
      maybeShowLabelDataSharingDialog: k,
      maybeShowChatEntryDataSharingDialog: I,
      SmbDataSharingOptInModalDialog: P,
    };
    l.default = w;
  },
  226,
);
