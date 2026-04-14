__d(
  "WAWebAccountSettingsDrawer.react",
  [
    "fbt",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebMenu.react",
    "WAWebMenuItems.react",
    "WAWebSettingsFBT",
    "WAWebSettingsHierarchy",
    "WAWebSettingsStepIcon.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.onClickRequestAccountInfo,
        n = e.onClickSecurity,
        a = e.onClose,
        i = e.ref;
      return u.jsxs(r("WAWebDrawer.react"), {
        ref: i,
        theme: "settings",
        testid: void 0,
        tsNavigationData: { surface: "unknown", viewName: "account-settings" },
        children: [
          u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            testid: void 0,
            title: o("WAWebSettingsFBT").accountTitle(),
            onBack: a,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            focusBackOrCancel: !0,
          }),
          u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsxs(o("WAWebMenu.react").WAWebMenu, {
              size: "medium",
              colorScheme: "default",
              allowTabNavigation: !0,
              children: [
                u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
                  optionId: o("WAWebSettingsHierarchy").SecuritySettingsItem.id,
                  testid: void 0,
                  detailLeft: u.jsx(r("WAWebSettingsStepIcon.react"), {
                    setting: o("WAWebSettingsHierarchy").SecuritySettingsItem
                      .step,
                  }),
                  onSelect: n,
                  primary: s._(/*BTDS*/ "Security notifications"),
                  searchCriteria: o("WAWebSettingsHierarchy")
                    .SecuritySettingsItem.searchCriteria,
                }),
                u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
                  optionId: o("WAWebSettingsHierarchy")
                    .RequestAccountInfoSettingsItem.id,
                  testid: void 0,
                  detailLeft: u.jsx(r("WAWebSettingsStepIcon.react"), {
                    setting: o("WAWebSettingsHierarchy")
                      .RequestAccountInfoSettingsItem.step,
                  }),
                  onSelect: t,
                  primary: o(
                    "WAWebSettingsHierarchy",
                  ).RequestAccountInfoSettingsItem.title(),
                  searchCriteria: o("WAWebSettingsHierarchy")
                    .RequestAccountInfoSettingsItem.searchCriteria,
                }),
                u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
                  optionId: o("WAWebSettingsHierarchy")
                    .DeleteAccountSettingsItem.id,
                  testid: void 0,
                  detailLeft: u.jsx(r("WAWebSettingsStepIcon.react"), {
                    setting: o("WAWebSettingsHierarchy")
                      .DeleteAccountSettingsItem.step,
                  }),
                  onSelect: d,
                  primary: o(
                    "WAWebSettingsHierarchy",
                  ).DeleteAccountSettingsItem.title(),
                  searchCriteria: o("WAWebSettingsHierarchy")
                    .DeleteAccountSettingsItem.searchCriteria,
                }),
              ],
            }),
          }),
        ],
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d() {
      o("WAWebExternalLink.react").openExternalLink(
        o("WAWebFaqUrl").getDeleteAccountUrl(),
      );
    }
    l.default = c;
  },
  226,
);
