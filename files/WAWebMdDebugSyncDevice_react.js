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
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useState;
    function d() {
      var t = c(""),
        n = t[0],
        a = t[1],
        i = function (t) {
          (window.Debug.syncDeviceList(n.split("\n")),
            o("WAWebToastManager").ToastManager.open(
              u.jsx(o("WAWebToast.react").Toast, {
                msg: "Sync Device for " + n,
              }),
            ));
        },
        l = function (t) {
          var e = t.target;
          e instanceof HTMLTextAreaElement && a(e.value);
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
                title: "Sync Device List",
              }),
              u.jsxs("label", {
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
                      { onChange: l, name: "device-phone", cols: 50, rows: 5 },
                    ),
                  ),
                ],
              }),
              u.jsx(o("WAWebButton.react").Button, {
                type: "primary",
                onClick: i,
                children: "Sync",
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
