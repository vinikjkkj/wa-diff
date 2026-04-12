__d(
  "WAWebMdDebugPassiveMode.react",
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
            o("WAWebUserPrefsMultiDeviceDebug").getDebugPassiveMode() ===
            "passive"
          );
        }),
        n = t[0],
        a = t[1],
        i = function () {
          var e = !n;
          (o("WAWebUserPrefsMultiDeviceDebug").setDebugPassiveMode(
            e ? "passive" : "active",
          ),
            a(e),
            o("WAWebToastManager").ToastManager.open(
              u.jsx(o("WAWebToast.react").Toast, {
                msg: "Passive Mode " + (e ? "Enabled" : "Disabled"),
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
                title: "Start as Passive Mode",
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
                    children: "Enable Passive Mode",
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
