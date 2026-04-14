__d(
  "WAWebCTWADebugDrawer.react",
  [
    "WAWebButton.react",
    "WAWebConfirmPopup.react",
    "WAWebConsumerTransparencyModalDialog.react",
    "WAWebDataSharingOptOutOrUpsell.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManager",
    "WAWebDrawerSection.react",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebSMBDataSharingDrawer.react",
    "WAWebSmbDataSharingOptInModalDialog",
    "WAWebText.react",
    "WAWebWamEnumSmbDataSharingConsentScreenEntryPoint",
    "WAWebWamEnumSmbDataSharingConsentSettingEntryPoint",
    "WDSMargins.stylex",
    "WDSPaddings.stylex",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = function () {
        o("WAWebModalManager").ModalManager.open(
          u.jsx(
            r("WAWebSmbDataSharingOptInModalDialog")
              .SmbDataSharingOptInModalDialog,
            {
              entrypoint: o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint")
                .SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.NEW_ORDER,
              callback: function () {
                return o("WAWebModalManager").ModalManager.close();
              },
            },
          ),
        );
      },
      d = function () {
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
          u.jsx(r("WAWebSMBDataSharingDrawer.react"), {
            onClose: function () {
              o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
            },
            entrypoint: o("WAWebWamEnumSmbDataSharingConsentSettingEntryPoint")
              .SMB_DATA_SHARING_CONSENT_SETTING_ENTRY_POINT
              .ENTRY_POINT_SETTINGS_SCREEN,
          }),
        );
      },
      m = function () {
        var t, n, a;
        o("WAWebModalManager").ModalManager.open(
          u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
            okText: "Close",
            onOK: function () {
              return o("WAWebModalManager").ModalManager.close();
            },
            children: [
              u.jsxs("div", {
                children: [
                  u.jsx((t = o("WAWebText.react")).WAWebTextLarge, {
                    weight: "semibold",
                    children: "Orders - Upsell",
                  }),
                  u.jsx(
                    (n = o("WAWebDataSharingOptOutOrUpsell.react")).UpsellText,
                    {
                      entryPoint: (a = o(
                        "WAWebWamEnumSmbDataSharingConsentScreenEntryPoint",
                      )).SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.NEW_ORDER,
                    },
                  ),
                ],
              }),
              u.jsxs(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(
                    o("WDSMargins.stylex").wdsMargins.marginTop40,
                  ),
                  {
                    children: [
                      u.jsx(o("WAWebText.react").WAWebTextLarge, {
                        weight: "semibold",
                        children: "Labels - Upsell",
                      }),
                      u.jsx(
                        o("WAWebDataSharingOptOutOrUpsell.react").UpsellText,
                        {
                          entryPoint: o(
                            "WAWebWamEnumSmbDataSharingConsentScreenEntryPoint",
                          ).SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT
                            .LABEL_CHAT,
                        },
                      ),
                    ],
                  },
                ),
              ),
              u.jsxs(
                "div",
                babelHelpers.extends(
                  {},
                  e.props(o("WDSMargins.stylex").wdsMargins.marginTop40),
                  {
                    children: [
                      u.jsx(o("WAWebText.react").WAWebTextLarge, {
                        weight: "semibold",
                        children: "Orders - OptOut",
                      }),
                      u.jsx(o("WAWebFlex.react").FlexRow, {
                        align: "center",
                        children: u.jsx(
                          o("WAWebDataSharingOptOutOrUpsell.react").OptOutText,
                          {
                            checkboxValue: !0,
                            onCheckboxToggle: r("WAWebNoop"),
                            theme: "order-create",
                            entryPoint: o(
                              "WAWebWamEnumSmbDataSharingConsentScreenEntryPoint",
                            ).SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT
                              .NEW_ORDER,
                          },
                        ),
                      }),
                    ],
                  },
                ),
              ),
              u.jsxs(
                "div",
                babelHelpers.extends(
                  {},
                  e.props(o("WDSMargins.stylex").wdsMargins.marginTop40),
                  {
                    children: [
                      u.jsx(o("WAWebText.react").WAWebTextLarge, {
                        weight: "semibold",
                        children: "Labels - OptOut",
                      }),
                      u.jsx(o("WAWebFlex.react").FlexRow, {
                        align: "center",
                        children: u.jsx(
                          o("WAWebDataSharingOptOutOrUpsell.react").OptOutText,
                          {
                            checkboxValue: !0,
                            onCheckboxToggle: r("WAWebNoop"),
                            theme: "labels-opt-out",
                            entryPoint: o(
                              "WAWebWamEnumSmbDataSharingConsentScreenEntryPoint",
                            ).SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT
                              .LABEL_CHAT,
                          },
                        ),
                      }),
                    ],
                  },
                ),
              ),
            ],
          }),
        );
      };
    function p(e) {
      var t,
        n = e.onBack,
        a = e.ref;
      return u.jsxs(r("WAWebDrawer.react"), {
        ref: a,
        tsNavigationData: { surface: "unknown", viewName: "ctwa-debug" },
        children: [
          u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: "CTWA Debug",
            onBack: n,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            focusBackOrCancel: !0,
          }),
          u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsxs(r("WAWebDrawerSection.react"), {
              animation: !1,
              xstyle: [
                o("WDSPaddings.stylex").wdsPaddings.paddingHor32,
                o("WDSPaddings.stylex").wdsPaddings.paddingVer20,
              ],
              children: [
                u.jsx(o("WAWebText.react").WAWebTextTitle, {
                  children: "Localisation Testing",
                }),
                u.jsxs("ul", {
                  children: [
                    u.jsx("li", {
                      children: u.jsx(
                        (t = o("WAWebButton.react")).WAWebButtonSimplified,
                        {
                          onClick: o(
                            "WAWebConsumerTransparencyModalDialog.react",
                          ).showConsumerTransparencyModalDialog,
                          children: "Show Consumer Disclosure",
                        },
                      ),
                    }),
                    u.jsx("li", {
                      children: u.jsx(t.WAWebButtonSimplified, {
                        onClick: c,
                        children: "Show SMB Disclosure",
                      }),
                    }),
                    u.jsx("li", {
                      children: u.jsx(t.WAWebButtonSimplified, {
                        onClick: d,
                        children: "Open Data Sharing Setting Drawer",
                      }),
                    }),
                    u.jsx("li", {
                      children: u.jsx(t.WAWebButtonSimplified, {
                        onClick: m,
                        children: "Show Upsell and OptOut components",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
