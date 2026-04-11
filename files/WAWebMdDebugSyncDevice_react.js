__d(
  "WAWebMdDebugSyncDevice.react",
  [
    "WAWebButton.react",
    "WAWebMdDebugSettingStyles",
    "WAWebMdDebugSettingTitle",
    "WAWebText.react",
    "WAWebToast.react",
    "WAWebToastManager",
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
      var t = o("react-compiler-runtime").c(8),
        n = c(""),
        a = n[0],
        i = n[1],
        l;
      t[0] !== a
        ? ((l = function (t) {
            (window.Debug.syncDeviceList(a.split("\n")),
              o("WAWebToastManager").ToastManager.open(
                u.jsx(o("WAWebToast.react").Toast, {
                  msg: "Sync Device for " + a,
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
            e instanceof HTMLTextAreaElement && i(e.value);
          }),
          (t[2] = d))
        : (d = t[2]);
      var m = d,
        p,
        _,
        f;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = (e || (e = r("stylex"))).props(
            o("WAWebMdDebugSettingStyles").styles.settingItem,
          )),
          (_ = u.jsx(r("WAWebMdDebugSettingTitle"), {
            title: "Sync Device List",
          })),
          (f = u.jsxs("label", {
            style: { display: "inline" },
            children: [
              u.jsx("div", {
                style: { marginBottom: "6px" },
                children: u.jsx(o("WAWebText.react").WAWebTextSmall, {
                  as: "span",
                  children: "Phone number (separate lines)",
                }),
              }),
              u.jsx(
                "textarea",
                babelHelpers.extends(
                  {},
                  e.props(
                    o("WAWebMdDebugSettingStyles").styles.syncDeviceInput,
                  ),
                  { onChange: m, name: "device-phone", cols: 50, rows: 5 },
                ),
              ),
            ],
          })),
          (t[3] = p),
          (t[4] = _),
          (t[5] = f))
        : ((p = t[3]), (_ = t[4]), (f = t[5]));
      var g;
      return (
        t[6] !== s
          ? ((g = u.jsxs(
              "div",
              babelHelpers.extends({}, p, {
                children: [
                  _,
                  f,
                  u.jsx(o("WAWebButton.react").Button, {
                    type: "primary",
                    onClick: s,
                    children: "Sync",
                  }),
                ],
              }),
            )),
            (t[6] = s),
            (t[7] = g))
          : (g = t[7]),
        g
      );
    }
    l.default = d;
  },
  98,
);
