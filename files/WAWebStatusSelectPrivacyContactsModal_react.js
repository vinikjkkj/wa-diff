__d(
  "WAWebStatusSelectPrivacyContactsModal.react",
  [
    "WAWebModalManager",
    "WAWebStatusSelectContactsModal.react",
    "WAWebUserPrefsStatusType",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.onBack,
        r = e.setStatusPostingPrivacyConfig,
        a = e.statusPostingPrivacyConfig,
        i = e.updatedSettings,
        l;
      if (t[0] !== (a == null ? void 0 : a.allowList)) {
        var u;
        ((l = (u = a == null ? void 0 : a.allowList) != null ? u : []),
          (t[0] = a == null ? void 0 : a.allowList),
          (t[1] = l));
      } else l = t[1];
      var d = l,
        m;
      if (t[2] !== (a == null ? void 0 : a.denyList)) {
        var p;
        ((m = (p = a == null ? void 0 : a.denyList) != null ? p : []),
          (t[2] = a == null ? void 0 : a.denyList),
          (t[3] = m));
      } else m = t[3];
      var _ = m,
        f =
          i === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList
            ? d
            : _,
        g =
          i === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList
            ? o("WAWebStatusSelectContactsModal.react")
                .StatusPrivacySettingListType.AllowList
            : o("WAWebStatusSelectContactsModal.react")
                .StatusPrivacySettingListType.DenyList,
        h = c,
        y;
      t[4] !== d || t[5] !== _ || t[6] !== r || t[7] !== i
        ? ((y = function (t) {
            i ===
            o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList
              ? r({
                  setting: o("WAWebUserPrefsStatusType")
                    .StatusPrivacySettingType.AllowList,
                  allowList: t,
                  denyList: _,
                })
              : r({
                  setting: o("WAWebUserPrefsStatusType")
                    .StatusPrivacySettingType.DenyList,
                  allowList: d,
                  denyList: t,
                });
          }),
          (t[4] = d),
          (t[5] = _),
          (t[6] = r),
          (t[7] = i),
          (t[8] = y))
        : (y = t[8]);
      var C;
      return (
        t[9] !== n || t[10] !== f || t[11] !== g || t[12] !== y
          ? ((C = s.jsx(
              o("WAWebStatusSelectContactsModal.react")
                .SelectStatusContactsModal,
              { list: f, setting: g, onBack: n, onDismiss: h, onConfirm: y },
            )),
            (t[9] = n),
            (t[10] = f),
            (t[11] = g),
            (t[12] = y),
            (t[13] = C))
          : (C = t[13]),
        C
      );
    }
    function c() {
      o("WAWebModalManager").ModalManager.existsSupportModal(d);
    }
    function d(e) {
      e
        ? o("WAWebModalManager").ModalManager.closeSupportModal()
        : o("WAWebModalManager").ModalManager.close();
    }
    l.default = u;
  },
  98,
);
