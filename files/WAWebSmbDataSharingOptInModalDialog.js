__d(
  "WAWebSmbDataSharingOptInModalDialog",
  [
    "fbt",
    "Promise",
    "WALogger",
    "WASmaxInBizSettingsEnums",
    "WAWebBusinessDataSharingIllustrationDarkIcon.react",
    "WAWebBusinessDataSharingIllustrationLightIcon.react",
    "WAWebCTWADataSharingModel",
    "WAWebCTWAGatingUtils",
    "WAWebCommonCTWADataSharing",
    "WAWebConfirmPopup.react",
    "WAWebCtwaPerCustomerDataSharingSync",
    "WAWebDataSharing3pdLidCollection",
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
    "WAWebWamEnumSmbDataSharingConsentScreenEntryPoint",
    "WAWebWamEnumSmbDataSharingConsentScreenType",
    "WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint",
    "WAWebWdsSmbPictoArrowsTransferIcon.react",
    "WDSIconIcAccountCircle.react",
    "WDSIconIcSettings.react",
    "WDSIconIcVisibilityOff.react",
    "asyncToGeneratorRuntime",
    "compactMap",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p = m || (m = o("react")),
      _ = m,
      f = _.useEffect,
      g = _.useRef,
      h = _.useState,
      y = {
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
      C = 3;
    function b() {
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
    function v(e, t, n) {
      ((e.smbDataSharingConsentScreenVersion = C),
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
    var S = function () {
        var e = s._(/*BTDS*/ "OK");
        o("WAWebToastManager").ToastManager.open(
          p.jsx(o("WAWebToast.react").Toast, {
            action: { dismiss: !0, actionText: e },
            msg: s._(/*BTDS*/ "Error updating Data Sharing setting."),
            id: o("WAWebToast.react").genId(),
          }),
        );
      },
      R = function () {
        var e = r("WAWebFbtCommon")("OK");
        o("WAWebToastManager").ToastManager.open(
          p.jsx(o("WAWebToast.react").Toast, {
            action: { dismiss: !0, actionText: e },
            msg: s._(/*BTDS*/ "Some per-customer Data Sharing updates failed."),
            id: o("WAWebToast.react").genId(),
          }),
        );
      },
      L = function (n, r, a) {
        var t = new (o(
          "WAWebSmbDataSharingConsentScreenWamEvent",
        ).SmbDataSharingConsentScreenWamEvent)();
        ((t.smbDataSharingConsentScreenVersion = 0),
          (t.smbDataSharingConsentScreenType = n),
          (t.smbDataSharingConsentScreenEntryPoint = r),
          a != null && v(t, a, n),
          t.commitAndWaitForFlush().catch(function (t) {
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "logDataSharingOptInInteraction: metric failed",
                ])),
            );
          }));
      },
      E = function (t, n, r) {
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
            return L(e, n, r);
          })
          .catch(S);
      };
    function k(e, t, n) {
      if (!r("WAWebCommonCTWADataSharing").shouldShowOrderDataSharingDialog(e))
        return t();
      o("WAWebModalManager").ModalManager.open(
        p.jsx(M, { entrypoint: n, callback: t, chats: [e] }),
      );
    }
    function I(e, t, n, a) {
      var i = e.some(function (e) {
        return r("WAWebCommonCTWADataSharing").shouldShowLabelDataSharingDialog(
          e,
          t,
        );
      });
      if (!i) return n();
      o("WAWebModalManager").ModalManager.open(
        p.jsx(M, { entrypoint: a, callback: n, chats: e }),
      );
    }
    function T(e, t, n) {
      return t();
    }
    function D(e) {
      if (
        !r(
          "WAWebCommonCTWADataSharing",
        ).shouldShowListsManagementDataSharingDialog()
      )
        return e();
      o("WAWebModalManager").ModalManager.open(
        p.jsx(M, {
          entrypoint: o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint")
            .SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.LISTS_MANAGEMENT,
          callback: e,
        }),
      );
    }
    function x(e) {
      var t = o("react-compiler-runtime").c(42),
        n = e.perCustomerDataSharingControlsEnabled,
        a = o("WAWebThemeContext").useIsDarkTheme();
      a
        ? p.jsx(
            o("WAWebBusinessDataSharingIllustrationDarkIcon.react")
              .BusinessDataSharingIllustrationDarkIcon,
            {},
          )
        : p.jsx(
            o("WAWebBusinessDataSharingIllustrationLightIcon.react")
              .BusinessDataSharingIllustrationLightIcon,
            {},
          );
      var i, l;
      (t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = p.jsx(
            o("WAWebWdsSmbPictoArrowsTransferIcon.react")
              .WdsSmbPictoArrowsTransferIcon,
            {},
          )),
          (t[0] = l))
        : (l = t[0]),
        (i = l));
      var u;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = p.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: [y.paddingTop24, y.paddingBottom24, y.illustration],
            justify: "center",
            children: i,
          })),
          (t[1] = u))
        : (u = t[1]);
      var c = n && y.centered_text,
        d;
      t[2] !== c
        ? ((d = [y.marginBottom12, y.title, c]), (t[2] = c), (t[3] = d))
        : (d = t[3]);
      var m;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = o(
            "WAWebCTWAGatingUtils",
          ).isCTWA3pdDataSharingTitleChangeEnabled()
            ? s._(
                /*BTDS*/ "Improve your ads by sharing customer-related activities",
              )
            : s._(
                /*BTDS*/ "Share customer-related activities to help improve your ads",
              )),
          (t[4] = m))
        : (m = t[4]);
      var _;
      t[5] !== d
        ? ((_ = p.jsx(o("WAWebFlex.react").FlexRow, {
            children: p.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
              size: "20",
              color: "dark",
              weight: "medium",
              xstyle: d,
              children: m,
            }),
          })),
          (t[5] = d),
          (t[6] = _))
        : (_ = t[6]);
      var f = n ? "secondary" : "dark",
        g = n && y.centered_text,
        h;
      t[7] !== g
        ? ((h = [y.paragraph, g]), (t[7] = g), (t[8] = h))
        : (h = t[8]);
      var C;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = s._(
            /*BTDS*/ "To help your ads reach the right audience on Facebook and Instagram and improve Meta ads, you can share information to Meta about customer-related activities, such as when an order is created, updated or paid for.",
          )),
          (t[9] = C))
        : (C = t[9]);
      var b;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = p.jsx(o("WAWebExternalLink.react").ExternalLink, {
            href: o("WAWebTosUrl").getBizDataSharingHcaUrl(),
            children: s._(/*BTDS*/ "Learn more"),
          })),
          (t[10] = b))
        : (b = t[10]);
      var v;
      t[11] !== f || t[12] !== h
        ? ((v = p.jsx(o("WAWebFlex.react").FlexColumn, {
            xstyle: y.marginBottom12,
            children: p.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
              size: "16",
              color: f,
              weight: "normal",
              xstyle: h,
              children: [C, " ", b],
            }),
          })),
          (t[11] = f),
          (t[12] = h),
          (t[13] = v))
        : (v = t[13]);
      var S = n ? y.iconColorNew : y.iconColor,
        R;
      t[14] !== S
        ? ((R = p.jsx(r("WDSIconIcVisibilityOff.react"), {
            height: 22,
            width: 22,
            xstyle: S,
          })),
          (t[14] = S),
          (t[15] = R))
        : (R = t[15]);
      var L;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = [y.marginStart24, y.paragraph, y.iconDescription]), (t[16] = L))
        : (L = t[16]);
      var E;
      t[17] !== n
        ? ((E = p.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
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
        ? ((k = p.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: y.marginBottom12,
            children: [R, E],
          })),
          (t[19] = R),
          (t[20] = E),
          (t[21] = k))
        : (k = t[21]);
      var I = n ? y.iconColorNew : y.iconColor,
        T;
      t[22] !== I
        ? ((T = p.jsx(r("WDSIconIcSettings.react"), { xstyle: I })),
          (t[22] = I),
          (t[23] = T))
        : (T = t[23]);
      var D;
      t[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = [y.marginStart24, y.paragraph, y.iconDescription]), (t[24] = D))
        : (D = t[24]);
      var x;
      t[25] !== n
        ? ((x = p.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
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
        ? (($ = p.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: y.marginBottom12,
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
            p.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              xstyle: y.marginBottom12,
              children: [
                p.jsx(r("WDSIconIcAccountCircle.react"), {
                  xstyle: y.iconColorNew,
                }),
                p.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
                  size: "16",
                  color: "dark",
                  xstyle: [y.marginStart24, y.paragraph, y.iconDescription],
                  children: s._(
                    /*BTDS*/ "You can change this for individual customers in their contact info.",
                  ),
                }),
              ],
            })),
          (t[30] = n),
          (t[31] = P))
        : (P = t[31]);
      var N = n && y.centered_text,
        M;
      t[32] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = s._(
            /*BTDS*/ "Per Meta's {=m1}, you must comply with all applicable laws. This includes informing your customers and having permission to share data with Meta.",
            [
              s._implicitParam(
                "=m1",
                p.jsx(o("WAWebExternalLink.react").ExternalLink, {
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
        ? ((w = p.jsx(o("WAWebFlex.react").FlexRow, {
            children: p.jsx(o("WAWebText.react").WAWebTextMuted, {
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
          ? ((A = p.jsxs(o("WAWebFlex.react").FlexColumn, {
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
    var $ = function () {
        return p.jsx(o("WAWebFlex.react").FlexColumn, {
          align: "center",
          justify: "center",
          xstyle: y.spinnerWrapper,
          children: p.jsx(o("WAWebSpinner.react").Spinner, {
            color: "default",
            size: 48,
            stroke: 6,
          }),
        });
      },
      P = function (t, n) {
        var e = new (o(
          "WAWebSmbDataSharingConsentScreenWamEvent",
        ).SmbDataSharingConsentScreenWamEvent)();
        ((e.smbDataSharingConsentScreenVersion = 0),
          (e.smbDataSharingConsentScreenType = o(
            "WAWebWamEnumSmbDataSharingConsentScreenType",
          ).SMB_DATA_SHARING_CONSENT_SCREEN_TYPE.SMB_DATA_SHARING_CONSENT_SCREEN_VIEW),
          (e.smbDataSharingConsentScreenEntryPoint = t),
          n != null &&
            v(
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
    function N(e, t, n) {
      (L(
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
    function M(e) {
      var t = o("react-compiler-runtime").c(27),
        a = e.callback,
        i = e.chats,
        l = e.entrypoint,
        u = h(!1),
        m = u[0],
        _ = u[1],
        y;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = o(
            "WAWebCTWAGatingUtils",
          ).isPerCustomerDataSharingControlsEnabled()),
          (t[0] = y))
        : (y = t[0]);
      var C = y,
        v = g(null),
        L,
        k;
      (t[1] !== l
        ? ((L = function () {
            var e = o(
              "WAWebCTWAGatingUtils",
            ).isCTWA3pdDataSharingAdditionalLoggingEnabled()
              ? b()
              : null;
            v.current = e;
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
                  "WAWebCTWAGatingUtils",
                ).isCTWA3pdOptOutCounterOptimizationEnabled())
            ) {
              var n = o(
                "WAWebUserPrefsGeneral",
              ).getCTWADataSharingOptOutDisclosureShownCount();
              o(
                "WAWebUserPrefsGeneral",
              ).setCTWADataSharingOptOutDisclosureShownCount(n + 1);
            }
            P(l, e);
          }),
          (k = [l]),
          (t[1] = l),
          (t[2] = L),
          (t[3] = k))
        : ((L = t[2]), (k = t[3])),
        f(L, k));
      var I;
      t[4] !== a || t[5] !== i || t[6] !== l
        ? ((I = function (t) {
            var e =
              o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue() ===
              o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false;
            (_(!0),
              E(t, l, v.current)
                .then(
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    if (
                      t ===
                        o("WASmaxInBizSettingsEnums").ENUM_FALSE_TRUE.true &&
                      i != null &&
                      i.length > 0
                    ) {
                      var s = r("compactMap")(i, F),
                        u = s.filter(A),
                        m = u.map(function (e) {
                          return r(
                            "WAWebCtwaPerCustomerDataSharingSync",
                          ).sendPerCustomerDataSharingUpdate(
                            e,
                            !0,
                            o(
                              "WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint",
                            ).SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ENTRY_POINT
                              .SMB_DATA_SHARING_CONSENT_SCREEN,
                            l,
                          );
                        }),
                        p = yield (d || (d = n("Promise"))).allSettled(m),
                        _ = p.some(w);
                      _ &&
                        (o("WALogger")
                          .ERROR(
                            c ||
                              (c = babelHelpers.taggedTemplateLiteralLoose([
                                "Per-customer data sharing opt-in failed",
                              ])),
                          )
                          .sendLogs("ctwa-per-customer-opt-in-fail"),
                        R());
                    } else
                      t ===
                        o("WASmaxInBizSettingsEnums").ENUM_FALSE_TRUE.false &&
                        (!e &&
                          o(
                            "WAWebCTWAGatingUtils",
                          ).isCTWA3pdOptOutCounterOptimizationEnabled() &&
                          o(
                            "WAWebUserPrefsGeneral",
                          ).setCTWADataSharingOptOutDisclosureShownCount(0),
                        o(
                          "WAWebDataSharingOptInCoolOffModel",
                        ).DataSharingOptInCoolOffModel.startCoolOff());
                    (o("WAWebModalManager").ModalManager.close(), a());
                  }),
                )
                .catch(S));
          }),
          (t[4] = a),
          (t[5] = i),
          (t[6] = l),
          (t[7] = I))
        : (I = t[7]);
      var T = I,
        D;
      t[8] !== T
        ? ((D = function () {
            return T(o("WASmaxInBizSettingsEnums").ENUM_FALSE_TRUE.true);
          }),
          (t[8] = T),
          (t[9] = D))
        : (D = t[9]);
      var M = D,
        O;
      t[10] !== T
        ? ((O = function () {
            return T(o("WASmaxInBizSettingsEnums").ENUM_FALSE_TRUE.false);
          }),
          (t[10] = T),
          (t[11] = O))
        : (O = t[11]);
      var B = O,
        W;
      t[12] !== a || t[13] !== l
        ? ((W = function () {
            N(a, l, v.current);
          }),
          (t[12] = a),
          (t[13] = l),
          (t[14] = W))
        : (W = t[14]);
      var q = W,
        U;
      t[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = s._(/*BTDS*/ "Enable")), (t[15] = U))
        : (U = t[15]);
      var V = U,
        H;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = s._(/*BTDS*/ "Allow")), (t[16] = H))
        : (H = t[16]);
      var G = H,
        z;
      t[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((z = s._(/*BTDS*/ "Don't enable")), (t[17] = z))
        : (z = t[17]);
      var j = z,
        K;
      t[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((K = s._(/*BTDS*/ "Don't allow")), (t[18] = K))
        : (K = t[18]);
      var Q = K,
        X;
      t[19] !== m
        ? ((X = m
            ? p.jsx($, {})
            : p.jsx(x, { perCustomerDataSharingControlsEnabled: C })),
          (t[19] = m),
          (t[20] = X))
        : (X = t[20]);
      var Y;
      return (
        t[21] !== B || t[22] !== q || t[23] !== M || t[24] !== m || t[25] !== X
          ? ((Y = p.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              testid: "ctwa-business-data-sharing-modal-dialog",
              buttonsDirection: "horizontal",
              type: o("WAWebModal.react").ModalTheme.DataSharing,
              onOK: M,
              okDisabled: m,
              cancelDisabled: m,
              okText: C ? V : G,
              onCancel: B,
              onOverlayClick: q,
              cancelText: C ? j : Q,
              children: X,
            })),
            (t[21] = B),
            (t[22] = q),
            (t[23] = M),
            (t[24] = m),
            (t[25] = X),
            (t[26] = Y))
          : (Y = t[26]),
        Y
      );
    }
    function w(e) {
      return e.status === "rejected";
    }
    function A(e) {
      return !o(
        "WAWebDataSharing3pdLidCollection",
      ).DataSharing3pdLidCollection.isDataSharingEnabled(e.toString());
    }
    function F(e) {
      return e.accountLid;
    }
    var O = {
      maybeShowOrderDataSharingDialog: k,
      maybeShowLabelDataSharingDialog: I,
      maybeShowChatEntryDataSharingDialog: T,
      maybeShowListsManagementDataSharingDialog: D,
      SmbDataSharingOptInModalDialog: M,
    };
    l.default = O;
  },
  226,
);
