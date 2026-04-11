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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(21),
        n = e.onClickRequestAccountInfo,
        a = e.onClickSecurity,
        i = e.onClose,
        l = e.ref,
        c;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = { surface: "unknown", viewName: "account-settings" }),
          (t[0] = c))
        : (c = t[0]);
      var m;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = o("WAWebSettingsFBT").accountTitle()), (t[1] = m))
        : (m = t[1]);
      var p;
      t[2] !== i
        ? ((p = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            testid: void 0,
            title: m,
            onBack: i,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            focusBackOrCancel: !0,
          })),
          (t[2] = i),
          (t[3] = p))
        : (p = t[3]);
      var _;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = u.jsx(r("WAWebSettingsStepIcon.react"), {
            setting: o("WAWebSettingsHierarchy").SecuritySettingsItem.step,
          })),
          (t[4] = _))
        : (_ = t[4]);
      var f;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = s._(/*BTDS*/ "Security notifications")), (t[5] = f))
        : (f = t[5]);
      var g;
      t[6] !== a
        ? ((g = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
            optionId: o("WAWebSettingsHierarchy").SecuritySettingsItem.id,
            testid: void 0,
            detailLeft: _,
            onSelect: a,
            primary: f,
            searchCriteria: o("WAWebSettingsHierarchy").SecuritySettingsItem
              .searchCriteria,
          })),
          (t[6] = a),
          (t[7] = g))
        : (g = t[7]);
      var h;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = u.jsx(r("WAWebSettingsStepIcon.react"), {
            setting: o("WAWebSettingsHierarchy").RequestAccountInfoSettingsItem
              .step,
          })),
          (t[8] = h))
        : (h = t[8]);
      var y;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = o(
            "WAWebSettingsHierarchy",
          ).RequestAccountInfoSettingsItem.title()),
          (t[9] = y))
        : (y = t[9]);
      var C;
      t[10] !== n
        ? ((C = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
            optionId: o("WAWebSettingsHierarchy").RequestAccountInfoSettingsItem
              .id,
            testid: void 0,
            detailLeft: h,
            onSelect: n,
            primary: y,
            searchCriteria: o("WAWebSettingsHierarchy")
              .RequestAccountInfoSettingsItem.searchCriteria,
          })),
          (t[10] = n),
          (t[11] = C))
        : (C = t[11]);
      var b;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = u.jsx(r("WAWebSettingsStepIcon.react"), {
            setting: o("WAWebSettingsHierarchy").DeleteAccountSettingsItem.step,
          })),
          (t[12] = b))
        : (b = t[12]);
      var v;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
            optionId: o("WAWebSettingsHierarchy").DeleteAccountSettingsItem.id,
            testid: void 0,
            detailLeft: b,
            onSelect: d,
            primary: o(
              "WAWebSettingsHierarchy",
            ).DeleteAccountSettingsItem.title(),
            searchCriteria: o("WAWebSettingsHierarchy")
              .DeleteAccountSettingsItem.searchCriteria,
          })),
          (t[13] = v))
        : (v = t[13]);
      var S;
      t[14] !== g || t[15] !== C
        ? ((S = u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsxs(o("WAWebMenu.react").WAWebMenu, {
              size: "medium",
              colorScheme: "default",
              allowTabNavigation: !0,
              children: [g, C, v],
            }),
          })),
          (t[14] = g),
          (t[15] = C),
          (t[16] = S))
        : (S = t[16]);
      var R;
      return (
        t[17] !== l || t[18] !== S || t[19] !== p
          ? ((R = u.jsxs(r("WAWebDrawer.react"), {
              ref: l,
              theme: "settings",
              testid: void 0,
              tsNavigationData: c,
              children: [p, S],
            })),
            (t[17] = l),
            (t[18] = S),
            (t[19] = p),
            (t[20] = R))
          : (R = t[20]),
        R
      );
    }
    function d() {
      o("WAWebExternalLink.react").openExternalLink(
        o("WAWebFaqUrl").getDeleteAccountUrl(),
      );
    }
    l.default = c;
  },
  226,
);
