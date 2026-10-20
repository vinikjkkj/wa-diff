__d(
  "WAWebSmbDataSharingOptInModalDialog",
  [
    "fbt",
    "Promise",
    "WALogger",
    "WASmaxInBizSettingsEnums",
    "WAWebABProps",
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
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebTosUrl",
    "WAWebUserPrefsGeneral",
    "WAWebWamEnumSmbDataSharingConsentScreenEntryPoint",
    "WAWebWamEnumSmbDataSharingConsentScreenType",
    "WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint",
    "WDSIconIcAccountCircle.react",
    "WDSIconIcSettings.react",
    "WDSIconIcVisibilityOff.react",
    "WDSIllustrationWdsSmbPictoArrowsTransfer.react",
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
        centered_text: { textAlign: "x2b8uid", $$css: !0 },
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
            t === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true
              ? o("WAWebWamEnumSmbDataSharingConsentScreenType")
                  .SMB_DATA_SHARING_CONSENT_SCREEN_TYPE
                  .SMB_DATA_SHARING_CONSENT_SCREEN_AGREE
              : o("WAWebWamEnumSmbDataSharingConsentScreenType")
                  .SMB_DATA_SHARING_CONSENT_SCREEN_TYPE
                  .SMB_DATA_SHARING_CONSENT_SCREEN_DISAGREE,
          a =
            t === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true &&
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
        p.jsx(w, { entrypoint: n, callback: t, chats: [e] }),
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
        p.jsx(w, { entrypoint: r, callback: t, chats: n }),
      );
    }
    function T(e, t, n) {
      if (
        !o("WAWebCommonCTWADataSharing").shouldShowChatEntryDataSharingDialog(e)
      )
        return t();
      o("WAWebModalManager").ModalManager.open(
        p.jsx(w, { entrypoint: n, callback: t, chats: [e] }),
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
        p.jsx(w, {
          entrypoint: o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint")
            .SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.LISTS_MANAGEMENT,
          callback: e,
        }),
      );
    }
    function x(e) {
      var t = o("react-compiler-runtime").c(40),
        n = e.isEpd,
        a = e.useNewLayout,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [y.paddingTop24, y.paddingBottom24, y.illustration]),
          (t[0] = i))
        : (i = t[0]);
      var l;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = p.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: i,
            justify: "center",
            children: p.jsx(
              r("WDSIllustrationWdsSmbPictoArrowsTransfer.react"),
              { testid: "wds-smb-picto-arrows-transfer" },
            ),
          })),
          (t[1] = l))
        : (l = t[1]);
      var u = a ? "center" : void 0,
        c;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = o("WAWebABProps").getABPropConfigValue(
            "ctwa_3pd_data_sharing_title_change",
          )
            ? s._(
                /*BTDS*/ "Improve your ads by sharing customer-related activities",
              )
            : s._(
                /*BTDS*/ "Share customer-related activities to help improve your ads",
              )),
          (t[2] = c))
        : (c = t[2]);
      var d;
      t[3] !== u
        ? ((d = p.jsx(o("WAWebFlex.react").FlexRow, {
            children: p.jsx(r("WDSText.react"), {
              type: "Headline2",
              colorName: "contentDefault",
              testid: "ctwa-data-sharing-opt-in-title",
              textAlign: u,
              xstyle: y.marginBottom12,
              children: c,
            }),
          })),
          (t[3] = u),
          (t[4] = d))
        : (d = t[4]);
      var m = a ? "contentDeemphasized" : "contentDefault",
        _ = a ? "center" : void 0,
        f;
      t[5] !== n
        ? ((f = p.jsx($, { isEpd: n })), (t[5] = n), (t[6] = f))
        : (f = t[6]);
      var g;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = p.jsx(o("WAWebExternalLink.react").ExternalLink, {
            href: o("WAWebTosUrl").getBizDataSharingHcaUrl(),
            children: s._(/*BTDS*/ "Learn more"),
          })),
          (t[7] = g))
        : (g = t[7]);
      var h;
      t[8] !== m || t[9] !== _ || t[10] !== f
        ? ((h = p.jsx(o("WAWebFlex.react").FlexColumn, {
            xstyle: y.marginBottom12,
            children: p.jsxs(r("WDSText.react"), {
              type: "Body1",
              colorName: m,
              testid: "ctwa-data-sharing-opt-in-description",
              textAlign: _,
              children: [f, " ", g],
            }),
          })),
          (t[8] = m),
          (t[9] = _),
          (t[10] = f),
          (t[11] = h))
        : (h = t[11]);
      var C = a ? y.iconColorNew : y.iconColor,
        b;
      t[12] !== C
        ? ((b = p.jsx(r("WDSIconIcVisibilityOff.react"), {
            height: 22,
            width: 22,
            xstyle: C,
          })),
          (t[12] = C),
          (t[13] = b))
        : (b = t[13]);
      var v;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = [y.marginStart24, y.iconDescription]), (t[14] = v))
        : (v = t[14]);
      var S;
      t[15] !== a
        ? ((S = p.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: "contentDefault",
            testid: "ctwa-data-sharing-opt-in-content-exclusion",
            xstyle: v,
            children: a
              ? s._(/*BTDS*/ "Message and call content is not shared.")
              : s._(/*BTDS*/ "Message and call content is not shared"),
          })),
          (t[15] = a),
          (t[16] = S))
        : (S = t[16]);
      var R;
      t[17] !== b || t[18] !== S
        ? ((R = p.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: y.marginBottom12,
            children: [b, S],
          })),
          (t[17] = b),
          (t[18] = S),
          (t[19] = R))
        : (R = t[19]);
      var L = a ? y.iconColorNew : y.iconColor,
        E;
      t[20] !== L
        ? ((E = p.jsx(r("WDSIconIcSettings.react"), { xstyle: L })),
          (t[20] = L),
          (t[21] = E))
        : (E = t[21]);
      var k;
      t[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = [y.marginStart24, y.iconDescription]), (t[22] = k))
        : (k = t[22]);
      var I;
      t[23] !== a
        ? ((I = p.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: "contentDefault",
            testid: "ctwa-data-sharing-opt-in-settings-guidance",
            xstyle: k,
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
          (t[23] = a),
          (t[24] = I))
        : (I = t[24]);
      var T;
      t[25] !== E || t[26] !== I
        ? ((T = p.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: y.marginBottom12,
            children: [E, I],
          })),
          (t[25] = E),
          (t[26] = I),
          (t[27] = T))
        : (T = t[27]);
      var D;
      t[28] !== a
        ? ((D =
            a &&
            p.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              xstyle: y.marginBottom12,
              children: [
                p.jsx(r("WDSIconIcAccountCircle.react"), {
                  xstyle: y.iconColorNew,
                }),
                p.jsx(r("WDSText.react"), {
                  type: "Body1",
                  colorName: "contentDefault",
                  testid: "ctwa-data-sharing-opt-in-individual-guidance",
                  xstyle: [y.marginStart24, y.iconDescription],
                  children: s._(
                    /*BTDS*/ "You can change this for individual customers in their contact info.",
                  ),
                }),
              ],
            })),
          (t[28] = a),
          (t[29] = D))
        : (D = t[29]);
      var x = a && y.centered_text,
        P;
      t[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = s._(
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
          (t[30] = P))
        : (P = t[30]);
      var N;
      t[31] !== x
        ? ((N = p.jsx(o("WAWebFlex.react").FlexRow, {
            children: p.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDeemphasized",
              xstyle: x,
              children: P,
            }),
          })),
          (t[31] = x),
          (t[32] = N))
        : (N = t[32]);
      var M;
      return (
        t[33] !== h ||
        t[34] !== R ||
        t[35] !== T ||
        t[36] !== D ||
        t[37] !== N ||
        t[38] !== d
          ? ((M = p.jsxs(o("WAWebFlex.react").FlexColumn, {
              children: [l, d, h, R, T, D, N],
            })),
            (t[33] = h),
            (t[34] = R),
            (t[35] = T),
            (t[36] = D),
            (t[37] = N),
            (t[38] = d),
            (t[39] = M))
          : (M = t[39]),
        M
      );
    }
    function $(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.isEpd;
      if (o("WAWebCTWAGatingUtils").shouldShowMetaAdSourceCopy()) {
        var r;
        return (
          t[0] !== n
            ? ((r = n
                ? s._(
                    /*BTDS*/ "To help your ads reach the right audience and improve Meta ads, you can share information to Meta about customer-related activities, such as message interaction data, or when an order is created, updated, or paid for.",
                  )
                : s._(
                    /*BTDS*/ "To help your ads reach the right audience and improve Meta ads, you can share information to Meta about customer-related activities, such as when an order is created, updated, or paid for.",
                  )),
              (t[0] = n),
              (t[1] = r))
            : (r = t[1]),
          r
        );
      }
      var a;
      return (
        t[2] !== n
          ? ((a = n
              ? s._(
                  /*BTDS*/ "To help your ads reach the right audience on Facebook and Instagram and improve Meta ads, you can share information to Meta about customer-related activities, such as message interaction data, or when an order is created, updated, or paid for.",
                )
              : s._(
                  /*BTDS*/ "To help your ads reach the right audience on Facebook and Instagram and improve Meta ads, you can share information to Meta about customer-related activities, such as when an order is created, updated, or paid for.",
                )),
            (t[2] = n),
            (t[3] = a))
          : (a = t[3]),
        a
      );
    }
    var P = function () {
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
      N = function (t, n) {
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
    function M(e, t, n) {
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
    function w(e) {
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
            (N(l, e), o("WAWebCommonCTWADataSharing").markV2DisclosureSeen());
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
                        o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE
                          .true &&
                      i != null &&
                      i.length > 0
                    ) {
                      var s = r("compactMap")(i, O),
                        u = s.filter(F),
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
                        _ = p.some(A);
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
                        o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE
                          .false &&
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
      var $ = D,
        w;
      t[9] !== $
        ? ((w = function () {
            return $(o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true);
          }),
          (t[9] = $),
          (t[10] = w))
        : (w = t[10]);
      var B = w,
        W;
      t[11] !== $
        ? ((W = function () {
            return $(
              o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false,
            );
          }),
          (t[11] = $),
          (t[12] = W))
        : (W = t[12]);
      var q = W,
        U;
      t[13] !== a || t[14] !== l
        ? ((U = function () {
            M(a, l, k.current);
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
        ? ((J = m ? p.jsx(P, {}) : p.jsx(x, { useNewLayout: L, isEpd: C })),
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
    function A(e) {
      return e.status === "rejected";
    }
    function F(e) {
      return !o(
        "WAWebDataSharing3pdLidCollection",
      ).DataSharing3pdLidCollection.isDataSharingEnabled(e.toString());
    }
    function O(e) {
      return e.accountLid;
    }
    var B = {
      maybeShowOrderDataSharingDialog: k,
      maybeShowLabelDataSharingDialog: I,
      maybeShowChatEntryDataSharingDialog: T,
      maybeShowListsManagementDataSharingDialog: D,
      SmbDataSharingOptInModalDialog: w,
    };
    l.default = B;
  },
  226,
);
