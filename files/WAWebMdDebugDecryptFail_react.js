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
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useState;
    function d() {
      var t = o("react-compiler-runtime").c(18),
        n = c(m),
        a = n[0],
        i = n[1],
        l;
      t[0] !== a
        ? ((l = function (t) {
            (o("WAWebUserPrefsMultiDeviceDebug").setDebugDecryptFail(a),
              o("WAWebToastManager").ToastManager.open(
                u.jsx(o("WAWebToast.react").Toast, {
                  msg: "Decryption fail for next " + a + " msgs",
                }),
              ));
          }),
          (t[0] = a),
          (t[1] = l))
        : (l = t[1]);
      var s = l,
        d;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = function (t) {
            var e = t.target;
            e instanceof HTMLInputElement && i(parseInt(e.value, 10));
          }),
          (t[2] = d))
        : (d = t[2]);
      var p = d,
        _,
        f,
        g,
        h;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = (e || (e = r("stylex"))).props(
            o("WAWebMdDebugSettingStyles").styles.settingItem,
          )),
          (f = u.jsx(r("WAWebMdDebugSettingTitle"), {
            title: "Decryption Fail",
          })),
          (g = {
            display: "inline",
            marginRight: o("WDSVars.stylex").WDSVars.spacingDouble,
          }),
          (h = u.jsx(o("WAWebText.react").WAWebTextSmall, {
            as: "span",
            children: "Set Decryption Fail for",
          })),
          (t[3] = _),
          (t[4] = f),
          (t[5] = g),
          (t[6] = h))
        : ((_ = t[3]), (f = t[4]), (g = t[5]), (h = t[6]));
      var y;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = (e || (e = r("stylex"))).props(
            o("WAWebMdDebugSettingStyles").styles.decryptFailInput,
          )),
          (t[7] = y))
        : (y = t[7]);
      var C;
      t[8] !== a
        ? ((C = u.jsx(
            "input",
            babelHelpers.extends({ onChange: p }, y, {
              value: a,
              type: "number",
            }),
          )),
          (t[8] = a),
          (t[9] = C))
        : (C = t[9]);
      var b;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = u.jsx(o("WAWebText.react").WAWebTextSmall, {
            as: "span",
            children: "Times",
          })),
          (t[10] = b))
        : (b = t[10]);
      var v;
      t[11] !== C
        ? ((v = u.jsxs("label", { style: g, children: [h, C, b] })),
          (t[11] = C),
          (t[12] = v))
        : (v = t[12]);
      var S;
      t[13] !== s
        ? ((S = u.jsx(o("WAWebButton.react").Button, {
            type: "primary",
            onClick: s,
            children: "Set",
          })),
          (t[13] = s),
          (t[14] = S))
        : (S = t[14]);
      var R;
      return (
        t[15] !== S || t[16] !== v
          ? ((R = u.jsxs(
              "div",
              babelHelpers.extends({}, _, { children: [f, v, S] }),
            )),
            (t[15] = S),
            (t[16] = v),
            (t[17] = R))
          : (R = t[17]),
        R
      );
    }
    function m() {
      return o("WAWebUserPrefsMultiDeviceDebug").getDebugDecryptFail() || 0;
    }
    l.default = d;
  },
  98,
);
