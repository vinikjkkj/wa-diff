__d(
  "WAWebSmbDataSharingOptInModalDialog",
  [
    "fbt",
    "Promise",
    "WALogger",
    "WASmaxInBizSettingsEnums",
    "WAWebABProps",
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
    "WDSText.react",
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
            msg: s._(
              /*BTDS*/ "Couldn't update some per-customer Data Sharing settings",
            ),
            id: o("WAWebToast.react").genId(),
          }),
        );
      },
      L = function (n, r, a) {
        var t = new (o(
          "WAWebSmbDataSharingConsentScreenWamEvent",
        ).SmbDataSharingConsentScreenWamEvent)();
        ((t.smbDataSharingConsentScreenVersion = 0),
          (t.smbDataSharingConsentDisclosureVersion = o(
            "WAWebCTWAGatingUtils",
          ).isCtwa3pdAggregatedConversionEnabled()
            ? o("WAWebCTWADataSharingModel").EPD_DISCLOSURE_VERSION
            : o("WAWebCTWADataSharingModel").BASE_DISCLOSURE_VERSION),
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
                  .SMB_DATA_SHARING_CONSENT_SCREEN_DISAGREE,
          a =
            t === o("WASmaxInBizSettingsEnums").ENUM_FALSE_TRUE.true &&
            o("WAWebCTWAGatingUtils").isCtwa3pdAggregatedConversionEnabled()
              ? o("WAWebCTWADataSharingModel").EPD_DISCLOSURE_VERSION
              : void 0;
        return o("WAWebSMBDataSharingSettingAction")
          .setSMBDataSharingSettingAction(t, a)
          .then(function () {
            return L(e, n, r);
          })
          .catch(S);
      };
    function k(e, t, n) {
      if (!o("WAWebCommonCTWADataSharing").shouldShowOrderDataSharingDialog(e))
        return t();
      o("WAWebModalManager").ModalManager.open(
        p.jsx(M, { entrypoint: n, callback: t, chats: [e] }),
      );
    }
    function I(e) {
      var t = e.cb,
        n = e.chats,
        r = e.entrypoint,
        a = e.target,
        i = n.some(function (e) {
          return o(
            "WAWebCommonCTWADataSharing",
          ).shouldShowLabelDataSharingDialog(e, a);
        });
      if (!i) return t();
      o("WAWebModalManager").ModalManager.open(
        p.jsx(M, { entrypoint: r, callback: t, chats: n }),
      );
    }
    function T(e, t, n) {
      if (
        !o("WAWebCommonCTWADataSharing").shouldShowChatEntryDataSharingDialog(e)
      )
        return t();
      o("WAWebModalManager").ModalManager.open(
        p.jsx(M, { entrypoint: n, callback: t, chats: [e] }),
      );
    }
    function D(e) {
      if (
        !o(
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
      var t = o("react-compiler-runtime").c(44),
        n = e.isEpd,
        a = e.useNewLayout,
        i = o("WAWebThemeContext").useIsDarkTheme();
      i
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
      var l, u;
      (t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = p.jsx(
            o("WAWebWdsSmbPictoArrowsTransferIcon.react")
              .WdsSmbPictoArrowsTransferIcon,
            {},
          )),
          (t[0] = u))
        : (u = t[0]),
        (l = u));
      var c;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = p.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: [y.paddingTop24, y.paddingBottom24, y.illustration],
            justify: "center",
            children: l,
          })),
          (t[1] = c))
        : (c = t[1]);
      var d = a && y.centered_text,
        m;
      t[2] !== d
        ? ((m = [y.marginBottom12, y.title, d]), (t[2] = d), (t[3] = m))
        : (m = t[3]);
      var _;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = o(
            "WAWebCTWAGatingUtils",
          ).isCTWA3pdDataSharingTitleChangeEnabled()
            ? s._(
                /*BTDS*/ "Improve your ads by sharing customer-related activities",
              )
            : s._(
                /*BTDS*/ "Share customer-related activities to help improve your ads",
              )),
          (t[4] = _))
        : (_ = t[4]);
      var f;
      t[5] !== m
        ? ((f = p.jsx(o("WAWebFlex.react").FlexRow, {
            children: p.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
              size: "20",
              color: "dark",
              weight: "medium",
              xstyle: m,
              children: _,
            }),
          })),
          (t[5] = m),
          (t[6] = f))
        : (f = t[6]);
      var g = a ? "secondary" : "dark",
        h = a && y.centered_text,
        C;
      t[7] !== h
        ? ((C = [y.paragraph, h]), (t[7] = h), (t[8] = C))
        : (C = t[8]);
      var b;
      t[9] !== n
        ? ((b = n
            ? s._(
                /*BTDS*/ "To help your ads reach the right audience on Facebook and Instagram and improve Meta ads, you can share information to Meta about customer-related activities, such as message interaction data, or when an order is created, updated, or paid for.",
              )
            : s._(
                /*BTDS*/ "To help your ads reach the right audience on Facebook and Instagram and improve Meta ads, you can share information to Meta about customer-related activities, such as when an order is created, updated, or paid for.",
              )),
          (t[9] = n),
          (t[10] = b))
        : (b = t[10]);
      var v;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = p.jsx(o("WAWebExternalLink.react").ExternalLink, {
            href: o("WAWebTosUrl").getBizDataSharingHcaUrl(),
            children: s._(/*BTDS*/ "Learn more"),
          })),
          (t[11] = v))
        : (v = t[11]);
      var S;
      t[12] !== b || t[13] !== g || t[14] !== C
        ? ((S = p.jsx(o("WAWebFlex.react").FlexColumn, {
            xstyle: y.marginBottom12,
            children: p.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
              size: "16",
              color: g,
              weight: "normal",
              xstyle: C,
              children: [b, " ", v],
            }),
          })),
          (t[12] = b),
          (t[13] = g),
          (t[14] = C),
          (t[15] = S))
        : (S = t[15]);
      var R = a ? y.iconColorNew : y.iconColor,
        L;
      t[16] !== R
        ? ((L = p.jsx(r("WDSIconIcVisibilityOff.react"), {
            height: 22,
            width: 22,
            xstyle: R,
          })),
          (t[16] = R),
          (t[17] = L))
        : (L = t[17]);
      var E;
      t[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = [y.marginStart24, y.paragraph, y.iconDescription]), (t[18] = E))
        : (E = t[18]);
      var k;
      t[19] !== a
        ? ((k = p.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
            size: "16",
            color: "dark",
            xstyle: E,
            children: a
              ? s._(/*BTDS*/ "Message and call content is not shared.")
              : s._(/*BTDS*/ "Message and call content is not shared"),
          })),
          (t[19] = a),
          (t[20] = k))
        : (k = t[20]);
      var I;
      t[21] !== L || t[22] !== k
        ? ((I = p.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: y.marginBottom12,
            children: [L, k],
          })),
          (t[21] = L),
          (t[22] = k),
          (t[23] = I))
        : (I = t[23]);
      var T = a ? y.iconColorNew : y.iconColor,
        D;
      t[24] !== T
        ? ((D = p.jsx(r("WDSIconIcSettings.react"), { xstyle: T })),
          (t[24] = T),
          (t[25] = D))
        : (D = t[25]);
      var x;
      t[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = [y.marginStart24, y.paragraph, y.iconDescription]), (t[26] = x))
        : (x = t[26]);
      var $;
      t[27] !== a
        ? (($ = p.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
            size: "16",
            color: "dark",
            xstyle: x,
            children: s._(
              /*BTDS*/ "You can always change this in the {settingsType}",
              [
                s._param(
                  "settingsType",
                  a ? "Data Sharing Settings." : "Ads Data Sharing Settings",
                ),
              ],
            ),
          })),
          (t[27] = a),
          (t[28] = $))
        : ($ = t[28]);
      var P;
      t[29] !== D || t[30] !== $
        ? ((P = p.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: y.marginBottom12,
            children: [D, $],
          })),
          (t[29] = D),
          (t[30] = $),
          (t[31] = P))
        : (P = t[31]);
      var N;
      t[32] !== a
        ? ((N =
            a &&
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
          (t[32] = a),
          (t[33] = N))
        : (N = t[33]);
      var M = a && y.centered_text,
        w;
      t[34] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = s._(
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
          (t[34] = w))
        : (w = t[34]);
      var A;
      t[35] !== M
        ? ((A = p.jsx(o("WAWebFlex.react").FlexRow, {
            children: p.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDeemphasized",
              xstyle: M,
              children: w,
            }),
          })),
          (t[35] = M),
          (t[36] = A))
        : (A = t[36]);
      var F;
      return (
        t[37] !== S ||
        t[38] !== I ||
        t[39] !== P ||
        t[40] !== N ||
        t[41] !== A ||
        t[42] !== f
          ? ((F = p.jsxs(o("WAWebFlex.react").FlexColumn, {
              children: [c, f, S, I, P, N, A],
            })),
            (t[37] = S),
            (t[38] = I),
            (t[39] = P),
            (t[40] = N),
            (t[41] = A),
            (t[42] = f),
            (t[43] = F))
          : (F = t[43]),
        F
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
          (e.smbDataSharingConsentDisclosureVersion = o(
            "WAWebCTWAGatingUtils",
          ).isCtwa3pdAggregatedConversionEnabled()
            ? o("WAWebCTWADataSharingModel").EPD_DISCLOSURE_VERSION
            : o("WAWebCTWADataSharingModel").BASE_DISCLOSURE_VERSION),
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
      var t = o("react-compiler-runtime").c(28),
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
          ).isCtwa3pdAggregatedConversionEnabled()),
          (t[0] = y))
        : (y = t[0]);
      var C = y,
        v;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((v =
            o(
              "WAWebCTWAGatingUtils",
            ).isPerCustomerDataSharingControlsEnabled() || C),
          (t[1] = v))
        : (v = t[1]);
      var L = v,
        k = g(null),
        I,
        T;
      (t[2] !== l
        ? ((I = function () {
            var e = o("WAWebABProps").getABPropConfigValue(
              "ctwa_3pd_data_sharing_additional_logging",
            )
              ? b()
              : null;
            k.current = e;
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
            (P(l, e), o("WAWebCommonCTWADataSharing").markV2DisclosureSeen());
          }),
          (T = [l]),
          (t[2] = l),
          (t[3] = I),
          (t[4] = T))
        : ((I = t[3]), (T = t[4])),
        f(I, T));
      var D;
      t[5] !== a || t[6] !== i || t[7] !== l
        ? ((D = function (t) {
            var e =
              o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue() ===
              o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false;
            (_(!0),
              E(t, l, k.current)
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
                          ).sendPerCustomerDataSharingUpdate({
                            accountLid: e,
                            entryPoint: o(
                              "WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint",
                            ).SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ENTRY_POINT
                              .SMB_DATA_SHARING_CONSENT_SCREEN,
                            globalDataSharingEntryPoint: l,
                            isEnabled: !0,
                          });
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
          (t[5] = a),
          (t[6] = i),
          (t[7] = l),
          (t[8] = D))
        : (D = t[8]);
      var M = D,
        O;
      t[9] !== M
        ? ((O = function () {
            return M(o("WASmaxInBizSettingsEnums").ENUM_FALSE_TRUE.true);
          }),
          (t[9] = M),
          (t[10] = O))
        : (O = t[10]);
      var B = O,
        W;
      t[11] !== M
        ? ((W = function () {
            return M(o("WASmaxInBizSettingsEnums").ENUM_FALSE_TRUE.false);
          }),
          (t[11] = M),
          (t[12] = W))
        : (W = t[12]);
      var q = W,
        U;
      t[13] !== a || t[14] !== l
        ? ((U = function () {
            N(a, l, k.current);
          }),
          (t[13] = a),
          (t[14] = l),
          (t[15] = U))
        : (U = t[15]);
      var V = U,
        H;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = s._(/*BTDS*/ "Enable")), (t[16] = H))
        : (H = t[16]);
      var G = H,
        z;
      t[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((z = s._(/*BTDS*/ "Allow")), (t[17] = z))
        : (z = t[17]);
      var j = z,
        K;
      t[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((K = s._(/*BTDS*/ "Don't enable")), (t[18] = K))
        : (K = t[18]);
      var Q = K,
        X;
      t[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((X = s._(/*BTDS*/ "Don't allow")), (t[19] = X))
        : (X = t[19]);
      var Y = X,
        J;
      t[20] !== m
        ? ((J = m ? p.jsx($, {}) : p.jsx(x, { useNewLayout: L, isEpd: C })),
          (t[20] = m),
          (t[21] = J))
        : (J = t[21]);
      var Z;
      return (
        t[22] !== q || t[23] !== V || t[24] !== B || t[25] !== m || t[26] !== J
          ? ((Z = p.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              testid: "ctwa-business-data-sharing-modal-dialog",
              buttonsDirection: "horizontal",
              type: o("WAWebModal.react").ModalTheme.DataSharing,
              onOK: B,
              okDisabled: m,
              cancelDisabled: m,
              okText: L ? G : j,
              onCancel: q,
              onOverlayClick: V,
              cancelText: L ? Q : Y,
              children: J,
            })),
            (t[22] = q),
            (t[23] = V),
            (t[24] = B),
            (t[25] = m),
            (t[26] = J),
            (t[27] = Z))
          : (Z = t[27]),
        Z
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
