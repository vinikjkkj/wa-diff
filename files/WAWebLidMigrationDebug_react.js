__d(
  "WAWebLidMigrationDebug.react",
  [
    "WAWebCheckBox.react",
    "WAWebMdDebugSettingStyles",
    "WAWebMdDebugSettingTitle",
    "WAWebText.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsMultiDeviceDebug",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useState;
    function d() {
      var t = o("react-compiler-runtime").c(10),
        n = c(m),
        a = n[0],
        i = n[1],
        l;
      t[0] !== a
        ? ((l = function () {
            var e = !a;
            (i(e),
              o("WAWebUserPrefsMultiDeviceDebug").setLidMigrationDebugMode(e),
              o("WAWebToastManager").ToastManager.open(
                u.jsx(o("WAWebToast.react").Toast, {
                  msg:
                    "Lid migration debug mode has been " +
                    (e ? "Enabled" : "Disabled"),
                }),
              ));
          }),
          (t[0] = a),
          (t[1] = l))
        : (l = t[1]);
      var s = l,
        d,
        p;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = (e || (e = r("stylex"))).props(
            o("WAWebMdDebugSettingStyles").styles.settingItem,
          )),
          (p = u.jsx(r("WAWebMdDebugSettingTitle"), {
            title: "Lid Migration Debug Mode",
          })),
          (t[2] = d),
          (t[3] = p))
        : ((d = t[2]), (p = t[3]));
      var _;
      t[4] !== s || t[5] !== a
        ? ((_ = u.jsx(o("WAWebCheckBox.react").CheckBox, {
            onChange: s,
            checked: a,
          })),
          (t[4] = s),
          (t[5] = a),
          (t[6] = _))
        : (_ = t[6]);
      var f;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = u.jsx(o("WAWebText.react").WAWebTextSmall, {
            as: "span",
            xstyle: o("WAWebMdDebugSettingStyles").styles.checkboxLabel,
            children: "Enable LID Migration Debug Mode",
          })),
          (t[7] = f))
        : (f = t[7]);
      var g;
      return (
        t[8] !== _
          ? ((g = u.jsxs(
              "div",
              babelHelpers.extends({}, d, {
                children: [p, u.jsxs("div", { children: [_, f] })],
              }),
            )),
            (t[8] = _),
            (t[9] = g))
          : (g = t[9]),
        g
      );
    }
    function m() {
      return o("WAWebUserPrefsMultiDeviceDebug").getLidMigrationDebugMode();
    }
    l.default = d;
  },
  98,
);
