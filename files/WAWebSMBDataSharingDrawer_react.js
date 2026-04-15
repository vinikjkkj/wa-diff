__d(
  "WAWebSMBDataSharingDrawer.react",
  [
    "fbt",
    "WASmaxInBizSettingsEnums",
    "WAWebBizGatingUtils",
    "WAWebCTWADataSharingModel",
    "WAWebCheckBox.react",
    "WAWebCsv3pdSignals",
    "WAWebDataSharingOptInCoolOffModel",
    "WAWebDataSharingUpsellModel",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebGroupInfoSeparator.react",
    "WAWebIcDownloadIcon.react",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebSMBDataSharingSettingAction",
    "WAWebSmbDataSharingConsentSettingWamEvent",
    "WAWebSmbDataSharingOptInModalDialog",
    "WAWebText_DONOTUSE.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebTosUrl",
    "WAWebUISpacing",
    "WAWebUserPrefsGeneral",
    "WAWebWamEnumSmbDataSharingConsentScreenEntryPoint",
    "WDSButton.react",
    "WDSIconIcLock.react",
    "WDSIconIcSettings.react",
    "WDSIconIcVisibilityOff.react",
    "fbs",
    "react",
    "react-compiler-runtime",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useState,
      p = {
        iconColor: { color: "xhslqc4", $$css: !0 },
        header: { lineHeight: "x1pujyh6", $$css: !0 },
        paragraph: { lineHeight: "xvql48z", $$css: !0 },
        icon: {
          color: "xhslqc4",
          width: "xvy4d1p",
          height: "xxk0z11",
          $$css: !0,
        },
      },
      _ = function () {
        o("WAWebModalManager").ModalManager.open(
          u.jsx(
            r("WAWebSmbDataSharingOptInModalDialog")
              .SmbDataSharingOptInModalDialog,
            {
              entrypoint: o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint")
                .SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.DATA_SHARING_TOOLS,
              callback: r("WAWebNoop"),
            },
          ),
        );
      };
    function f(e) {
      var t = o("react-compiler-runtime").c(37),
        n = e.entrypoint,
        a = e.onClose,
        i = e.ref,
        l = r("useWAWebUnmountSignal")(),
        c = m(null),
        f = c[0],
        g = c[1],
        h,
        y;
      (t[0] !== l.aborted
        ? ((h = function () {
            return (
              o("WAWebSMBDataSharingSettingAction")
                .getSMBDataSharingSettingAction()
                .then(function (e) {
                  l.aborted ||
                    (g(e),
                    o(
                      "WAWebCTWADataSharingModel",
                    ).CTWADataSharingModel.subscribeForUpdates(g));
                }),
              function () {
                o(
                  "WAWebCTWADataSharingModel",
                ).CTWADataSharingModel.unsubscribeFromUpdates(g);
              }
            );
          }),
          (y = [l.aborted]),
          (t[0] = l.aborted),
          (t[1] = h),
          (t[2] = y))
        : ((h = t[1]), (y = t[2])),
        d(h, y));
      var C;
      t[3] !== f || t[4] !== n || t[5] !== l.aborted
        ? ((C = function () {
            if (
              f ===
                o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.notset &&
              o("WAWebUserPrefsGeneral").getCTWADataSharingCoolOffTimestamp() ==
                null
            )
              _();
            else {
              var e =
                f === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true
                  ? o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false
                  : o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true;
              (e ===
                o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false &&
                (o(
                  "WAWebBizGatingUtils",
                ).isCTWA3pdOptOutCounterOptimizationEnabled() &&
                  o(
                    "WAWebUserPrefsGeneral",
                  ).setCTWADataSharingOptOutDisclosureShownCount(0),
                o(
                  "WAWebDataSharingOptInCoolOffModel",
                ).DataSharingOptInCoolOffModel.resetCoolOffStartTimestamp()),
                new (o(
                  "WAWebSmbDataSharingConsentSettingWamEvent",
                ).SmbDataSharingConsentSettingWamEvent)({
                  smbDataSharingConsentSettingVersion: 1,
                  smbDataSharingConsentSettingType:
                    e ===
                    o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true,
                  smbDataSharingConsentSettingEntryPoint: n,
                }).commit(),
                r("WAWebDataSharingUpsellModel").enableUpsell(),
                o("WAWebSMBDataSharingSettingAction")
                  .setSMBDataSharingSettingAction(e)
                  .then(function (e) {
                    l.aborted || g(e);
                  }));
            }
          }),
          (t[3] = f),
          (t[4] = n),
          (t[5] = l.aborted),
          (t[6] = C))
        : (C = t[6]);
      var b = C,
        v;
      if (t[7] !== l.aborted) {
        var S = function () {
          o("WAWebCsv3pdSignals")
            .downloadCsvFor3pdSignals()
            .then(function () {
              l.aborted ||
                o("WAWebToastManager").ToastManager.open(
                  u.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(/*BTDS*/ "Download of data report completed"),
                  }),
                );
            })
            .catch(function () {
              l.aborted ||
                o("WAWebToastManager").ToastManager.open(
                  u.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(/*BTDS*/ "Data report failed to download"),
                  }),
                );
            });
        };
        ((v = o("WAWebBizGatingUtils").isDownload3PDSignalsEnabled()
          ? u.jsxs(o("WAWebFlex.react").FlexColumn, {
              xstyle: [
                o("WAWebUISpacing").uiPadding.horiz32,
                o("WAWebUISpacing").uiMargin.top20,
              ],
              children: [
                u.jsx(o("WAWebFlex.react").FlexRow, {
                  children: u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
                    size: "16",
                    color: "dark",
                    weight: "normal",
                    xstyle: [o("WAWebUISpacing").uiMargin.bottom16, p.header],
                    children: s._(/*BTDS*/ "Your data report"),
                  }),
                }),
                u.jsx(o("WAWebFlex.react").FlexRow, {
                  children: u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
                    size: "14",
                    color: "muted",
                    xstyle: [
                      o("WAWebUISpacing").uiMargin.bottom16,
                      p.paragraph,
                    ],
                    children: s._(
                      /*BTDS*/ "Your report is available to download. You can share this data with Meta to help improve your ads. {=m2}",
                      [
                        s._implicitParam(
                          "=m2",
                          u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                            href: o(
                              "WAWebFaqUrl",
                            ).sharingCustomerRelatedActivityLearnMoreURL(),
                            children: s._(/*BTDS*/ "Learn more"),
                          }),
                        ),
                      ],
                    ),
                  }),
                }),
                u.jsxs(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  children: [
                    u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
                      children: u.jsx(
                        r("WDSButton.react"),
                        {
                          Icon: o("WAWebIcDownloadIcon.react").IcDownloadIcon,
                          xstyle: p.icon,
                          onPress: S,
                          testid: void 0,
                          "aria-label": r("fbs")._(/*BTDS*/ "Download"),
                          variant: "borderless",
                        },
                        "download",
                      ),
                    }),
                    u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
                      size: "16",
                      xstyle: [
                        p.paragraph,
                        o("WAWebUISpacing").uiPadding.start24,
                      ],
                      children: s._(
                        /*BTDS*/ "Download data on customer-related activities",
                      ),
                    }),
                  ],
                }),
              ],
            })
          : null),
          (t[7] = l.aborted),
          (t[8] = v));
      } else v = t[8];
      var R = v,
        L;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = s._(/*BTDS*/ "Your customers' activity")), (t[9] = L))
        : (L = t[9]);
      var E = L,
        k;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = { surface: "unknown", viewName: "smb-data-sharing" }),
          (t[10] = k))
        : (k = t[10]);
      var I;
      t[11] !== a
        ? ((I = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: E,
            onBack: a,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          })),
          (t[11] = a),
          (t[12] = I))
        : (I = t[12]);
      var T;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = [
            o("WAWebUISpacing").uiPadding.horiz32,
            o("WAWebUISpacing").uiPadding.top14,
            o("WAWebUISpacing").uiMargin.bottom20,
          ]),
          (t[13] = T))
        : (T = t[13]);
      var D;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = u.jsx(o("WAWebFlex.react").FlexRow, {
            children: u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
              size: "16",
              color: "dark",
              weight: "normal",
              xstyle: [o("WAWebUISpacing").uiMargin.bottom16, p.header],
              children: s._(
                /*BTDS*/ "Share customer-related activities to help improve your ads",
              ),
            }),
          })),
          (t[14] = D))
        : (D = t[14]);
      var x;
      t[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = u.jsx(o("WAWebFlex.react").FlexRow, {
            children: u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
              size: "14",
              color: "muted",
              xstyle: [o("WAWebUISpacing").uiMargin.bottom16, p.paragraph],
              children: s._(
                /*BTDS*/ "To help your ads reach the right audience on Facebook and Instagram and improve Meta ads, you can share information to Meta about customer-related activities, such as when an order is created, updated or paid for.",
              ),
            }),
          })),
          (t[15] = x))
        : (x = t[15]);
      var $;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = u.jsx(r("WDSIconIcVisibilityOff.react"), {
            height: 24,
            width: 24,
            xstyle: [o("WAWebUISpacing").uiMargin.start8, p.iconColor],
          })),
          (t[16] = $))
        : ($ = t[16]);
      var P;
      t[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: o("WAWebUISpacing").uiMargin.bottom16,
            children: [
              $,
              u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
                size: "14",
                color: "dark",
                xstyle: [o("WAWebUISpacing").uiMargin.start18, p.paragraph],
                children: s._(
                  /*BTDS*/ "Message and call content is not shared",
                ),
              }),
            ],
          })),
          (t[17] = P))
        : (P = t[17]);
      var N;
      t[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = u.jsx(r("WDSIconIcLock.react"), {
            height: 24,
            width: 24,
            xstyle: [o("WAWebUISpacing").uiMargin.start8, p.iconColor],
          })),
          (t[18] = N))
        : (N = t[18]);
      var M;
      t[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: o("WAWebUISpacing").uiMargin.bottom16,
            children: [
              N,
              u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
                size: "14",
                color: "dark",
                xstyle: [o("WAWebUISpacing").uiMargin.start18, p.paragraph],
                children: s._(
                  /*BTDS*/ "Customer names, email addresses and phone numbers are not shared",
                ),
              }),
            ],
          })),
          (t[19] = M))
        : (M = t[19]);
      var w;
      t[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = u.jsx(r("WDSIconIcSettings.react"), {
            height: 24,
            width: 24,
            xstyle: [o("WAWebUISpacing").uiMargin.start8, p.iconColor],
          })),
          (t[20] = w))
        : (w = t[20]);
      var A;
      t[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: o("WAWebUISpacing").uiMargin.bottom16,
            children: [
              w,
              u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
                size: "14",
                color: "dark",
                xstyle: [o("WAWebUISpacing").uiMargin.start18, p.paragraph],
                children: s._(
                  /*BTDS*/ "You can always come back here to change this setting",
                ),
              }),
            ],
          })),
          (t[21] = A))
        : (A = t[21]);
      var F;
      t[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = u.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: o("WAWebUISpacing").uiMargin.bottom25,
            children: u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
              size: "14",
              color: "muted",
              xstyle: p.paragraph,
              children: s._(
                /*BTDS*/ "Per Meta's {=m2}, you must comply with all applicable laws. This includes informing your customers and having permission to share data with Meta.",
                [
                  s._implicitParam(
                    "=m2",
                    u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                      href: o("WAWebTosUrl").getMetaBizTosUrl(),
                      children: s._(/*BTDS*/ "Business Tools Terms"),
                    }),
                  ),
                ],
              ),
            }),
          })),
          (t[22] = F))
        : (F = t[22]);
      var O = f === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true,
        B;
      t[23] !== b || t[24] !== O
        ? ((B = u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
            children: u.jsx(o("WAWebCheckBox.react").CheckBox, {
              checked: O,
              onChange: b,
              testid: void 0,
            }),
          })),
          (t[23] = b),
          (t[24] = O),
          (t[25] = B))
        : (B = t[25]);
      var W;
      t[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
            size: "16",
            xstyle: [p.paragraph, o("WAWebUISpacing").uiPadding.start24],
            children: s._(
              /*BTDS*/ "Allow Meta to receive information about events",
            ),
          })),
          (t[26] = W))
        : (W = t[26]);
      var q;
      t[27] !== B
        ? ((q = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: T,
            children: [
              D,
              x,
              P,
              M,
              A,
              F,
              u.jsxs(o("WAWebFlex.react").FlexRow, {
                align: "center",
                children: [B, W],
              }),
            ],
          })),
          (t[27] = B),
          (t[28] = q))
        : (q = t[28]);
      var U;
      t[29] === Symbol.for("react.memo_cache_sentinel")
        ? ((U =
            o("WAWebBizGatingUtils").isDownload3PDSignalsEnabled() &&
            u.jsx(r("WAWebGroupInfoSeparator.react"), {})),
          (t[29] = U))
        : (U = t[29]);
      var V;
      t[30] !== R || t[31] !== q
        ? ((V = u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsxs(r("WAWebDrawerSection.react"), {
              theme: "expand-height",
              animation: !1,
              children: [q, U, R],
            }),
          })),
          (t[30] = R),
          (t[31] = q),
          (t[32] = V))
        : (V = t[32]);
      var H;
      return (
        t[33] !== i || t[34] !== V || t[35] !== I
          ? ((H = u.jsxs(r("WAWebDrawer.react"), {
              ref: i,
              theme: "settings",
              tsNavigationData: k,
              children: [I, V],
            })),
            (t[33] = i),
            (t[34] = V),
            (t[35] = I),
            (t[36] = H))
          : (H = t[36]),
        H
      );
    }
    l.default = f;
  },
  226,
);
