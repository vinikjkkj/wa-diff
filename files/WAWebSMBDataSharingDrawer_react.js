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
      var t = e.entrypoint,
        n = e.onClose,
        a = e.ref,
        i = r("useWAWebUnmountSignal")(),
        l = m(null),
        c = l[0],
        f = l[1];
      d(
        function () {
          return (
            o("WAWebSMBDataSharingSettingAction")
              .getSMBDataSharingSettingAction()
              .then(function (e) {
                i.aborted ||
                  (f(e),
                  o(
                    "WAWebCTWADataSharingModel",
                  ).CTWADataSharingModel.subscribeForUpdates(f));
              }),
            function () {
              o(
                "WAWebCTWADataSharingModel",
              ).CTWADataSharingModel.unsubscribeFromUpdates(f);
            }
          );
        },
        [i.aborted],
      );
      var g = function () {
          if (
            c === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.notset &&
            o("WAWebUserPrefsGeneral").getCTWADataSharingCoolOffTimestamp() ==
              null
          )
            _();
          else {
            var e =
              c === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true
                ? o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false
                : o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true;
            (e === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false &&
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
                smbDataSharingConsentSettingEntryPoint: t,
              }).commit(),
              r("WAWebDataSharingUpsellModel").enableUpsell(),
              o("WAWebSMBDataSharingSettingAction")
                .setSMBDataSharingSettingAction(e)
                .then(function (e) {
                  i.aborted || f(e);
                }));
          }
        },
        h = function () {
          o("WAWebCsv3pdSignals")
            .downloadCsvFor3pdSignals()
            .then(function () {
              i.aborted ||
                o("WAWebToastManager").ToastManager.open(
                  u.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(/*BTDS*/ "Download of data report completed"),
                  }),
                );
            })
            .catch(function () {
              i.aborted ||
                o("WAWebToastManager").ToastManager.open(
                  u.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(/*BTDS*/ "Data report failed to download"),
                  }),
                );
            });
        },
        y = o("WAWebBizGatingUtils").isDownload3PDSignalsEnabled()
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
                          onPress: h,
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
          : null,
        C = s._(/*BTDS*/ "Your customers' activity");
      return u.jsxs(r("WAWebDrawer.react"), {
        ref: a,
        theme: "settings",
        tsNavigationData: { surface: "unknown", viewName: "smb-data-sharing" },
        children: [
          u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: C,
            onBack: n,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          }),
          u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsxs(r("WAWebDrawerSection.react"), {
              theme: "expand-height",
              animation: !1,
              children: [
                u.jsxs(o("WAWebFlex.react").FlexColumn, {
                  xstyle: [
                    o("WAWebUISpacing").uiPadding.horiz32,
                    o("WAWebUISpacing").uiPadding.top14,
                    o("WAWebUISpacing").uiMargin.bottom20,
                  ],
                  children: [
                    u.jsx(o("WAWebFlex.react").FlexRow, {
                      children: u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
                        size: "16",
                        color: "dark",
                        weight: "normal",
                        xstyle: [
                          o("WAWebUISpacing").uiMargin.bottom16,
                          p.header,
                        ],
                        children: s._(
                          /*BTDS*/ "Share customer-related activities to help improve your ads",
                        ),
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
                          /*BTDS*/ "To help your ads reach the right audience on Facebook and Instagram and improve Meta ads, you can share information to Meta about customer-related activities, such as when an order is created, updated or paid for.",
                        ),
                      }),
                    }),
                    u.jsxs(o("WAWebFlex.react").FlexRow, {
                      align: "center",
                      xstyle: o("WAWebUISpacing").uiMargin.bottom16,
                      children: [
                        u.jsx(r("WDSIconIcVisibilityOff.react"), {
                          height: 24,
                          width: 24,
                          xstyle: [
                            o("WAWebUISpacing").uiMargin.start8,
                            p.iconColor,
                          ],
                        }),
                        u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
                          size: "14",
                          color: "dark",
                          xstyle: [
                            o("WAWebUISpacing").uiMargin.start18,
                            p.paragraph,
                          ],
                          children: s._(
                            /*BTDS*/ "Message and call content is not shared",
                          ),
                        }),
                      ],
                    }),
                    u.jsxs(o("WAWebFlex.react").FlexRow, {
                      align: "center",
                      xstyle: o("WAWebUISpacing").uiMargin.bottom16,
                      children: [
                        u.jsx(r("WDSIconIcLock.react"), {
                          height: 24,
                          width: 24,
                          xstyle: [
                            o("WAWebUISpacing").uiMargin.start8,
                            p.iconColor,
                          ],
                        }),
                        u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
                          size: "14",
                          color: "dark",
                          xstyle: [
                            o("WAWebUISpacing").uiMargin.start18,
                            p.paragraph,
                          ],
                          children: s._(
                            /*BTDS*/ "Customer names, email addresses and phone numbers are not shared",
                          ),
                        }),
                      ],
                    }),
                    u.jsxs(o("WAWebFlex.react").FlexRow, {
                      align: "center",
                      xstyle: o("WAWebUISpacing").uiMargin.bottom16,
                      children: [
                        u.jsx(r("WDSIconIcSettings.react"), {
                          height: 24,
                          width: 24,
                          xstyle: [
                            o("WAWebUISpacing").uiMargin.start8,
                            p.iconColor,
                          ],
                        }),
                        u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
                          size: "14",
                          color: "dark",
                          xstyle: [
                            o("WAWebUISpacing").uiMargin.start18,
                            p.paragraph,
                          ],
                          children: s._(
                            /*BTDS*/ "You can always come back here to change this setting",
                          ),
                        }),
                      ],
                    }),
                    u.jsx(o("WAWebFlex.react").FlexRow, {
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
                    }),
                    u.jsxs(o("WAWebFlex.react").FlexRow, {
                      align: "center",
                      children: [
                        u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
                          children: u.jsx(o("WAWebCheckBox.react").CheckBox, {
                            checked:
                              c ===
                              o("WASmaxInBizSettingsEnums")
                                .ENUM_FALSE_NOTSET_TRUE.true,
                            onChange: g,
                            testid: void 0,
                          }),
                        }),
                        u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
                          size: "16",
                          xstyle: [
                            p.paragraph,
                            o("WAWebUISpacing").uiPadding.start24,
                          ],
                          children: s._(
                            /*BTDS*/ "Allow Meta to receive information about events",
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                o("WAWebBizGatingUtils").isDownload3PDSignalsEnabled() &&
                  u.jsx(r("WAWebGroupInfoSeparator.react"), {}),
                y,
              ],
            }),
          }),
        ],
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
