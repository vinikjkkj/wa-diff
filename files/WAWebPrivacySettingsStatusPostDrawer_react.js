__d(
  "WAWebPrivacySettingsStatusPostDrawer.react",
  [
    "WAWebModalManager",
    "WAWebStatusPrivacySettingOptionsDrawer.react",
    "WAWebStatusPrivacySettingUtils",
    "WAWebStatusSelectContactsModal.react",
    "WAWebUserPrefsStatusType",
    "react",
    "react-compiler-runtime",
    "useWAWebStatusPrivacySettingConfig",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(17),
        n = e.onClose,
        a = e.ref,
        i = o(
          "useWAWebStatusPrivacySettingConfig",
        ).useWAWebStatusPrivacySettingConfig(),
        l = i.setStatusPostingPrivacyConfig,
        u = i.statusPostingPrivacyConfig,
        c;
      if (t[0] !== (u == null ? void 0 : u.allowList)) {
        var d;
        ((c = (d = u == null ? void 0 : u.allowList) != null ? d : []),
          (t[0] = u == null ? void 0 : u.allowList),
          (t[1] = c));
      } else c = t[1];
      var m = c,
        p;
      if (t[2] !== (u == null ? void 0 : u.denyList)) {
        var _;
        ((p = (_ = u == null ? void 0 : u.denyList) != null ? _ : []),
          (t[2] = u == null ? void 0 : u.denyList),
          (t[3] = p));
      } else p = t[3];
      var f = p,
        g,
        h,
        y;
      t[4] !== m || t[5] !== f || t[6] !== l
        ? ((g = function () {
            o("WAWebStatusPrivacySettingUtils").handleContactClick(l, m, f);
          }),
          (h = function () {
            o("WAWebModalManager").ModalManager.open(
              s.jsx(
                o("WAWebStatusSelectContactsModal.react")
                  .SelectStatusContactsModal,
                {
                  list: f,
                  setting: o("WAWebStatusSelectContactsModal.react")
                    .StatusPrivacySettingListType.DenyList,
                  onConfirm: function (t) {
                    l({
                      setting: o("WAWebUserPrefsStatusType")
                        .StatusPrivacySettingType.DenyList,
                      allowList: m,
                      denyList: t,
                    });
                  },
                },
              ),
            );
          }),
          (y = function () {
            o("WAWebModalManager").ModalManager.open(
              s.jsx(
                o("WAWebStatusSelectContactsModal.react")
                  .SelectStatusContactsModal,
                {
                  list: m,
                  setting: o("WAWebStatusSelectContactsModal.react")
                    .StatusPrivacySettingListType.AllowList,
                  onConfirm: function (t) {
                    l({
                      setting: o("WAWebUserPrefsStatusType")
                        .StatusPrivacySettingType.AllowList,
                      allowList: t,
                      denyList: f,
                    });
                  },
                },
              ),
            );
          }),
          (t[4] = m),
          (t[5] = f),
          (t[6] = l),
          (t[7] = g),
          (t[8] = h),
          (t[9] = y))
        : ((g = t[7]), (h = t[8]), (y = t[9]));
      var C;
      return (
        t[10] !== n ||
        t[11] !== a ||
        t[12] !== u ||
        t[13] !== g ||
        t[14] !== h ||
        t[15] !== y
          ? ((C = s.jsx(r("WAWebStatusPrivacySettingOptionsDrawer.react"), {
              ref: a,
              statusPostingPrivacyConfig: u,
              onContactClick: g,
              onDenyListClick: h,
              onAllowListClick: y,
              onBack: n,
            })),
            (t[10] = n),
            (t[11] = a),
            (t[12] = u),
            (t[13] = g),
            (t[14] = h),
            (t[15] = y),
            (t[16] = C))
          : (C = t[16]),
        C
      );
    }
    l.default = u;
  },
  98,
);
