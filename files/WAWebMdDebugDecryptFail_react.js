__d(
  "WAWebMdDebugDecryptFail.react",
  [
    "WAWebButton.react",
    "WAWebMdDebugSettingStyles",
    "WAWebMdDebugSettingTitle",
    "WAWebText.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsMultiDeviceDebug",
    "WDSVars.stylex",
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
          return o("WAWebUserPrefsMultiDeviceDebug").getDebugDecryptFail() || 0;
        }),
        n = t[0],
        a = t[1],
        i = function (t) {
          (o("WAWebUserPrefsMultiDeviceDebug").setDebugDecryptFail(n),
            o("WAWebToastManager").ToastManager.open(
              u.jsx(o("WAWebToast.react").Toast, {
                msg: "Decryption fail for next " + n + " msgs",
              }),
            ));
        },
        l = function (t) {
          var e = t.target;
          e instanceof HTMLInputElement && a(parseInt(e.value, 10));
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
                title: "Decryption Fail",
              }),
              u.jsxs("label", {
                style: {
                  display: "inline",
                  marginRight: o("WDSVars.stylex").WDSVars.spacingDouble,
                },
                children: [
                  u.jsx(o("WAWebText.react").WAWebTextSmall, {
                    as: "span",
                    children: "Set Decryption Fail for",
                  }),
                  u.jsx(
                    "input",
                    babelHelpers.extends(
                      { onChange: l },
                      e.props(
                        o("WAWebMdDebugSettingStyles").styles.decryptFailInput,
                      ),
                      { value: n, type: "number" },
                    ),
                  ),
                  u.jsx(o("WAWebText.react").WAWebTextSmall, {
                    as: "span",
                    children: "Times",
                  }),
                ],
              }),
              u.jsx(o("WAWebButton.react").Button, {
                type: "primary",
                onClick: i,
                children: "Set",
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
