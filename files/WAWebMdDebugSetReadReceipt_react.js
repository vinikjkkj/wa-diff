__d(
  "WAWebMdDebugSetReadReceipt.react",
  [
    "WAWebCheckBox.react",
    "WAWebMdDebugSettingStyles",
    "WAWebMdDebugSettingTitle",
    "WAWebText.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsMultiDeviceDebug",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useState;
    function d() {
      var t = c(function () {
          return (
            o("WAWebUserPrefsMultiDeviceDebug").getDebugReadReceipt() !== "none"
          );
        }),
        n = t[0],
        a = t[1],
        i = function () {
          var e = !n;
          (window.Debug.setReadReceipt(e).then(function (e) {
            e.value === "none" ? a(!1) : e.value === "all" && a(!0);
          }),
            a(e),
            o("WAWebToastManager").ToastManager.open(
              u.jsx(o("WAWebToast.react").Toast, {
                msg: "Read Receipts " + (e ? "Enabled" : "Disabled"),
              }),
            ));
        };
      return u.jsxs(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(
            o("WAWebMdDebugSettingStyles").styles.settingItem,
          ),
          {
            children: [
              u.jsx(r("WAWebMdDebugSettingTitle"), {
                title: "Set Read Receipts",
              }),
              u.jsxs("div", {
                children: [
                  u.jsx(o("WAWebCheckBox.react").CheckBox, {
                    onChange: i,
                    checked: n,
                  }),
                  u.jsx(o("WAWebText.react").WAWebTextSmall, {
                    as: "span",
                    xstyle: o("WAWebMdDebugSettingStyles").styles.checkboxLabel,
                    children: "Enable Read Receipts",
                  }),
                ],
              }),
            ],
          },
        ),
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
